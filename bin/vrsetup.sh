#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

VRBINDIR="$(cd "$(dirname "$0")" && echo "${PWD}")"
STEAM_BASE_FOLDER="${STEAM_BASE_FOLDER:-$(realpath ~/.steam/steam)}"
if [ -z "${STEAMVR_VRENV-}" ]; then
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

function SteamVRLauncherSetup()
{
	# If we're under pressure-vessel, try to escape and do setcap dance outside of the container
	if [ -n "${PRESSURE_VESSEL_RUNTIME-}" ]; then
		log "Detected Steam Linux Runtime pressure-vessel launch in ${PRESSURE_VESSEL_RUNTIME}"
		if [ -z "${SRT_LAUNCHER_SERVICE_ALONGSIDE_STEAM-}" ]; then
			log "Error: steam launcher service not available, vrcompositor-launcher will execute inside the container with no privileges."
		else
			log "Relaunching via steam launcher service to host level for vrcompositor setcap configuration."
			exec steam-runtime-launch-client --alongside-steam -- "$0" "$@"
			# unreachable
		fi
		return 0
	fi

	# We are not under pressure-vessel - presumably we have been relaunched at host level via the steam launcher service
	# We still require the scout LDLP environment however, so consider one more relaunch
	if [ -z "${STEAM_RUNTIME-}" ]; then
		log "Relaunching under scout LDLP runtime."
		LEGACY_RUNTIME="${STEAM_BASE_FOLDER}/steamapps/common/LegacySteamRuntime/legacy-steam-runtime"

		if [ ! -x ${LEGACY_RUNTIME} ]; then
			log "Did not find LegacySteamRuntime in the default place, checking all libraries..."
			COMPAT_LIBRARY_PATHS="${STEAM_COMPAT_LIBRARY_PATHS-}"
			for i in ${COMPAT_LIBRARY_PATHS//:/ }
			do
				TEST_RUNTIME="${i}/common/LegacySteamRuntime/legacy-steam-runtime"
				if [ -x ${TEST_RUNTIME} ]; then
					LEGACY_RUNTIME=$TEST_RUNTIME
					break
				fi
			done
		fi

		if [ -x "${LEGACY_RUNTIME}" ]; then
			log exec "${LEGACY_RUNTIME}" "$0" "$@"
			exec "${LEGACY_RUNTIME}" "$0" "$@"
		fi
		log "LegacySteamRuntime compat tool not found at ${LEGACY_RUNTIME}, falling back to legacy scout path. This may fail under newer Steam client configurations."
		log exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
		exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
	fi

	log "Detected scout LDLP runtime."
	if ! [ -x "$(command -v getcap)" ]; then
		log 'Error: getcap is required to complete the SteamVR setup.'
		return 1
	fi
	if ! [ -x "$(command -v setcap)" ]; then
		log 'Error: setcap is required to complete the SteamVR setup.'
		return 1
	fi

	if [[ "$(getcap "${STEAMVR_TOOLSDIR}/bin/linux64/vrcompositor-launcher")" == *"cap_sys_nice"* ]]; then
		log "${STEAMVR_TOOLSDIR}/bin/linux64/vrcompositor-launcher binary has cap_sys_nice privileges"
		return 0
	fi

	local VRCOMPOSITOR_LAUNCHER="${STEAMVR_TOOLSDIR}/bin/linux64/vrcompositor-launcher"
	if [[ -x /usr/bin/holo-polkit-helpers/holo-grant-cap-sys-nice ]] && /usr/bin/holo-polkit-helpers/holo-grant-cap-sys-nice "${VRCOMPOSITOR_LAUNCHER}"; then
		log "Used holo-grant-cap-sys-nice to give ${STEAMVR_TOOLSDIR}/bin/linux64/vrcompositor-launcher binary cap_sys_nice privileges"
	else
		# FIXME: see steamrt#397, similar to steam_msg.sh, for prompts..
		if ! "${VRBINDIR}/steamvr_question.sh" "SteamVR requires superuser access to finish setup (permission will be granted to run with elevated priority to provide a smooth experience). Proceed?"; then
			log 'Error: user declined superuser request.'
			return 1
		fi

		pkexec setcap CAP_SYS_NICE=eip "${VRCOMPOSITOR_LAUNCHER}"
	fi

	if ! [[ "$(getcap "${VRCOMPOSITOR_LAUNCHER}")" == *"cap_sys_nice"* ]]; then
		log 'Error: readback of vrcompositor-launcher shows still lacking cap_sys_nice.'
		return 1
	fi

	return 0
}

if ! SteamVRLauncherSetup "$@"; then
    # FIXME: see steamrt#397, easier to copy steam_msg.sh into the SteamVR depot than to try and locate it
    "${VRBINDIR}/steamvr_msg.sh" --error "SteamVR setup is incomplete, some features might be missing. See ${LOGFILE-"Steam client logs folder"} for details."
fi

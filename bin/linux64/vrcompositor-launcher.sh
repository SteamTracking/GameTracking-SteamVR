#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
ROOT="$(cd "$(dirname "$0")" && echo $PWD)"
ARCH="$(uname -m)"

# the vrcompositor executable has it's own logging to vrcompositor.txt
# this captures the script launch work and stdout/stderr
LOGFILE=vrcompositor-linux.txt

STEAM_BASE_FOLDER="${STEAM_BASE_FOLDER:-$(realpath ~/.steam/steam)}"
mkdir -p "${STEAM_BASE_FOLDER}/${STEAM_CLIENT_LOG_FOLDER:-logs}"

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

RUNTIME_ID=$(grep -oP '(?<=^ID=).+' /etc/os-release | tr -d '"')
if [ "${RUNTIME_ID}" == steamrt -a -z "${STEAM_RUNTIME-}" ]; then
	log "====="
	log "WARNING: We are in the steam runtime but we don't have a runtime path set. We'll probably fail to set our priority!"
	log "This will happen if you run vrstartup.sh outside of Steam when using the SteamRT3 client, as we fail to properly escape."
	log " "
	log "If you see a 'Failed to set proc cap: -1' below, you will need to launch vrstartup.sh through Steam to ensure all environment variables are properly set."
	log "====="
fi

# SteamVR is launching us via steam-runtime-launch-client, which is runtime neutral, so we are expected to have to relaunch
if [ "${VALVE_SKIP_RUNTIME_SAFETY-0}" = "1" ]; then
	log "WARNING: Skipping runtime relaunch (VALVE_SKIP_RUNTIME_SAFETY enabled)"
elif [ -n "${STEAM_RUNTIME-}" ]; then
	log "Detected that we're in the scout LDLP runtime: ${STEAM_RUNTIME}"
	logger="${STEAM_RUNTIME}/amd64/usr/bin/srt-logger"
	# continue
elif [[ "${ARCH}" == x86_64* ]]; then
	LEGACY_RUNTIME="${STEAM_BASE_FOLDER}/steamapps/common/LegacySteamRuntime/steam-runtime/run.sh"

	if [ ! -x ${LEGACY_RUNTIME} ]; then
		log "Did not find LegacySteamRuntime in the default place, checking all libraries..."
		COMPAT_LIBRARY_PATHS="${STEAM_COMPAT_LIBRARY_PATHS-}"
		for i in ${COMPAT_LIBRARY_PATHS//:/ }
		do
			TEST_RUNTIME="${i}/common/LegacySteamRuntime/steam-runtime/run.sh"
			if [ -x ${TEST_RUNTIME} ]; then
				LEGACY_RUNTIME=$TEST_RUNTIME
				break
			fi
		done
	fi

	if [ -x "${LEGACY_RUNTIME}" ]; then 
		log "Relaunching under Legacy runtime (to allow us to gain the CAP_SYS_NICE bit)"
		log exec "${LEGACY_RUNTIME}" "$0" "$@"
		exec "${LEGACY_RUNTIME}" "$0" "$@"
	elif [ -f "$HOME/.steam/root/ubuntu12_32/steam-runtime/version.txt" ]; then
		log "No LegacySteamRuntime install found, but we're not using the RT3 client, falling back to the built-in legacy runtime."
		log exec "$HOME/.steam/root/ubuntu12_32/steam-runtime/run.sh" "$0" "$@"
		exec "$HOME/.steam/root/ubuntu12_32/steam-runtime/run.sh" "$0" "$@"
	else
		# This means that the Steam client is SteamRT3, and LegacySteamRuntime isn't installed.
		log "ERROR: We've seemingly been relaunched under the SteamRT3 legacy stub script without either Scout or Legacy runtimes installed, which means we're running directly on the host. Search for 'Legacy Steam Runtime' in your Steam library and install it to correct this."
		exit 1
	fi
else
	# unexpected
	log "No steam runtime detected, unknown arch ${ARCH} - continuing."
fi

if [ -x "${logger-}" ]; then
	# Prevent multiple opens through vrenv.sh relaunch
	if [ -z "${_STEAMVR_LOGGING_READY-}" ]; then
		# Send stdout to a subprocess that copies its stdin to the log file,
		# maybe the terminal, and maybe the systemd Journal; then send stderr
		# to the same place as stdout
		exec > >( exec "${logger}" --exec-fallback --filename=${LOGFILE} ) 2>&1
		export _STEAMVR_LOGGING_READY=1
	fi
else
	log "WARNING: ${logger-} not found, logging disabled"
fi

if [ -z "${STEAMVR_VRENV-}" ]; then
	log "Relaunch under vrenv."
	VRBINDIR=${ROOT}/..
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

# Fedora changes default SDL behavior to give higher priority to Vulkan, which breaks us
export SDL_VIDEODRIVER=x11

# developer tricks: disabling the watchdog abort may help debugging
#export STEAMVR_DISABLE_THREAD_WATCHDOGS=1

# NOTE: the vrcompositor-launcher stub does a bit of env manipulation and syscap work
# NOTE: we do not support a launch under debugger here, see "WaitForDebugger" instead
log exec "$ROOT/vrcompositor-launcher" "$@"
exec "$ROOT/vrcompositor-launcher" "$@"

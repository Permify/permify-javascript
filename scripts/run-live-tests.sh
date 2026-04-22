#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPOSE_FILE="${ROOT_DIR}/docker-compose.yaml"
PERMIFY_BASE_URL="${PERMIFY_BASE_URL:-http://127.0.0.1:3476}"

cleanup() {
  docker compose -f "${COMPOSE_FILE}" down -v >/dev/null 2>&1 || true
}

trap cleanup EXIT

cd "${ROOT_DIR}"

docker compose -f "${COMPOSE_FILE}" up -d

for attempt in {1..60}; do
  if curl -s -o /dev/null "${PERMIFY_BASE_URL}/healthz"; then
    npm run test:live
    exit 0
  fi

  sleep 1
done

echo "Permify did not become reachable at ${PERMIFY_BASE_URL} within 60 seconds." >&2
exit 1

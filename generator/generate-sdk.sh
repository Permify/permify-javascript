#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${SCRIPT_DIR}/.."
OPENAPI_FILE="${SCRIPT_DIR}/openapi.json"
GENERATOR_VERSION="7.13.0"

echo "Downloading openapi-generator-cli..."
curl -fsSL "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/${GENERATOR_VERSION}/openapi-generator-cli-${GENERATOR_VERSION}.jar" \
  -o "${SCRIPT_DIR}/openapi-generator-cli.jar"

echo "Generating JavaScript SDK..."
java -jar "${SCRIPT_DIR}/openapi-generator-cli.jar" generate \
  --input-spec "${OPENAPI_FILE}" \
  --generator-name javascript \
  --output "${PROJECT_ROOT}" \
  --additional-properties \
    moduleName=PermifyClient,\
    projectName=permify-javascript,\
    projectVersion=0.11.0,\
    licenseName=Apache-2.0,\
    usePromises=true,\
    useES6=true \
  --global-property modelDocs=true,apiDocs=true \
  --skip-validate-spec

rm -f "${SCRIPT_DIR}/openapi-generator-cli.jar"

echo "Generation complete."

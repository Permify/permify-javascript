# Release Process

This document explains how to release a new version of `permify-javascript` to NPM.

## Overview

The release process is fully automated using GitHub Actions. When you create a GitHub release, the package is automatically published to NPM.

## How to Release

### 1. Prepare

Make sure everything is ready:

```bash
# Pull latest changes
git checkout main
git pull origin main

# Install dependencies and build
npm install
npm run build
```

### 2. Choose Version Number

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0) - Breaking changes
- **MINOR** (0.x.0) - New features (backward compatible)
- **PATCH** (0.0.x) - Bug fixes

Examples:
- `0.11.1` → `0.11.2` (bug fix)
- `0.11.2` → `0.12.0` (new feature)
- `0.12.0` → `1.0.0` (breaking change)

### 3. Create GitHub Release

1. Go to [Releases](https://github.com/Permify/permify-javascript/releases)
2. Click **"Draft a new release"**
3. Fill in the details:
   - **Tag version**: `v0.12.0` (must start with `v`)
   - **Release title**: `v0.12.0`
   - **Description**: List changes, new features, and bug fixes
4. Click **"Publish release"**

### 4. Automatic Publishing

Once published, GitHub Actions will:
- Build the package
- Extract version from tag (e.g., `v0.12.0` → `0.12.0`)
- Update `package.json` version
- Publish to NPM

Track progress at: https://github.com/Permify/permify-javascript/actions

### 5. Verify

Check that the new version is live:

```bash
npm view permify-javascript version
```

## SDK Updates

The JavaScript SDK is automatically regenerated from the [Permify OpenAPI spec](https://github.com/Permify/permify/blob/master/docs/api-reference/openapiv2/apidocs.swagger.json) whenever Permify publishes a new release.

### Automatic Updates

The generator workflow (`generator.yml`) is dispatched by the main Permify repo on each release:
- Downloads the latest OpenAPI spec
- Regenerates the JavaScript SDK using `openapi-generator-cli`
- Creates a pull request if changes are detected
- PR branch: `sdk-update/permify-latest`

### Manual Update

To manually regenerate the SDK:

1. Go to [Actions](https://github.com/Permify/permify-javascript/actions)
2. Select **"Update Permify JavaScript SDK"**
3. Click **"Run workflow"**

Or locally:

```bash
# Download the latest OpenAPI spec
curl -fsSL https://raw.githubusercontent.com/Permify/permify/master/docs/api-reference/openapiv2/apidocs.swagger.json \
  -o generator/openapi.json

# Run the generator
./generator/generate-sdk.sh
```

## Configuration

### Required Secrets

Set in GitHub repository settings:

- **NPM_TOKEN**: Authentication token for publishing to NPM
  - Create at [npmjs.com](https://www.npmjs.com/) → Access Tokens
  - Type: **Granular Access Token**
  - Permission: **Read and Write**, bypass 2FA enabled

- **PAT_TOKEN**: Personal Access Token for opening pull requests
  - Create at GitHub → Settings → Developer settings → Personal access tokens
  - Scopes: `repo`, `workflow`

## Workflows

### 1. Publish Workflow (`.github/workflows/npm-publish.yml`)

**Trigger**: GitHub release published

**Steps**:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Build (`npm run build`)
5. Update version from release tag
6. Publish to NPM

### 2. SDK Generator Workflow (`.github/workflows/generator.yml`)

**Trigger**: Dispatched from Permify main repo or manual dispatch

**Steps**:
1. Download latest OpenAPI spec from Permify
2. Setup Java (required for openapi-generator-cli)
3. Run `generator/generate-sdk.sh`
4. Create PR if changes detected

## Troubleshooting

### Build Failed

```bash
# Test locally
npm install
npm run build
```

### Publish Failed

- Check if `NPM_TOKEN` is valid and owned by an npm account that has publish access
- Verify version doesn't already exist on NPM: `npm view permify-javascript versions`
- Check [Actions logs](https://github.com/Permify/permify-javascript/actions)

### Wrong Version Published

If you published the wrong version:

1. Delete the GitHub release
2. Delete the Git tag:
   ```bash
   git tag -d v0.12.0
   git push origin :refs/tags/v0.12.0
   ```
3. Unpublish from NPM (within 24 hours):
   ```bash
   npm unpublish permify-javascript@0.12.0
   ```

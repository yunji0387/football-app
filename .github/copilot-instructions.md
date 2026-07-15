# Copilot Instructions For This Repository

## Project Context
- This is an Expo Router React Native app.
- Primary package manager: npm.
- The development environment often uses Windows PowerShell.

## Terminal Command Rules (Important)
- When running commands in PowerShell, always use `npm.cmd` instead of `npm`.
- When running commands in PowerShell, always use `npx.cmd` instead of `npx`.
- Do not suggest bare `npm` or `npx` in PowerShell examples because PowerShell execution policy may block `.ps1` shims.

## Preferred PowerShell Commands
- Install deps: `npm.cmd install --legacy-peer-deps`
- Audit: `npm.cmd audit`
- Start Expo: `npx.cmd expo start`
- Start Expo with clear cache: `npx.cmd expo start -c`
- Expo doctor: `npx.cmd expo-doctor`
- Install Expo-managed packages: `npx.cmd expo install <package>`

## Dependency Safety Guidelines
- Favor Expo SDK-compatible versions suggested by `npx.cmd expo install --check`.
- Before removing dependencies, search for imports/usages across `app/`, `components/`, and `constants/`.
- Keep changes minimal and avoid unrelated refactors.

## Validation Checklist After Changes
1. Run `npm.cmd install --legacy-peer-deps`.
2. Run `npm.cmd audit`.
3. Run `npx.cmd expo-doctor`.
4. If startup issues happen, run `npx.cmd expo start -c`.

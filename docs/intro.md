---
id: intro
sidebar_position: 1
---


# Getting Started

`env-guardian` scans your codebase for hardcoded secrets and suggests `.env` variables.

Install Env-Guardian to your project
```bash
# npm
npm install @jkdd/env-guardian@latest

# pnpm
pnpm install @jkdd/env-guardian@latest

# npx
npx install @jkdd/env-guardian@latest

# yarn
yarn add @jkdd/env-guardian@latest

```

## Features

- ⚡ **Simple CLI** – just run `env-guardian scan`, no config required.  
- 🔍 **Detects environment variable usage** across many file types:
  - JavaScript (.js, .jsx) / TypeScript (.ts, .tsx) / Vue.js (.vue)  
  - Python (.py) / Ruby (.rb) / PHP (.php)  
  - Shell (.sh, .bash)  
  - JSON (.json) / YAML (.yaml, .yml)  
  - Java (.java) / Kotlin (.kt) / Go (.go) / C# (.cs)  
  - Dockerfile, NPM config (.npmrc, .yarnrc), CI/CD configs (GitHub, GitLab, CircleCI, Azure)  
- 🤖 **Suggests likely environment variables** from hardcoded values (keys, tokens, secrets, passwords, URLs, etc.).  
- 🎨 **Color-coded results**:
  - ✅ Existing variables in **green** 🟢  
  - ⚠ Suggestions in **yellow** 🟡  
  - [CRITICAL] **red** 🔴 | [HIGH] **orange** 🟠 | [MEDIUM] **yellow** 🟡 | [LOW] **green** 🟢  
- 🎯 **Set scanning priority** with `set-priority` – filter results by severity (`low`, `medium`, `high`, `critical`).  
- 📝 **Optional `.env` integration** with `--to-env`:
  - Appends suggestions to `.env` (or a custom env file, e.g. `.env.local`)  
  - Marks entries with `# Suggested by env-guardian`  
  - Always writes to the project root  
- 🚫 **Ignore false positives**:
  - Ignore variables or entire files with `.envscanignore.json`  
  - Remove specific ignores or reset back to defaults  


---
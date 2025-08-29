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

- Simple CLI, no config required!
- Detects existing Environment Variable usage in the following file types:
  - JavaScript (.js & .jsx)
  - TypeScript (.ts & .tsx)
  - Vue.js (.vue)
  - Python (.py)
  - Ruby (.rb)
  - Shell Script (.sh)
  - Bash (.bash)
  - JSON (.json)
  - Yaml (.yaml & .yml)
  - PHP (.php)
  - Java (.java)
  - Kotlin (.kt)
  - Go (.go)
  - C# (.cs)
- Suggests likely environment variables from hardcoded values (keys, secrets, tokens, passwords, URLs, etc.)  
- Highlights results:
  - ✅ Existing variables in **green** 🟢
  - ⚠ Suggested candidates in **yellow** 🟡
- Priority is categorized by color as well:
  - [CRITICAL] is in **red** 🔴
  - [HIGH] is in **orange** 🟠
  - [MEDIUM] is in **yellow** 🟡
  - [LOW] is in **green** 🟢
- Optional `.env` integration with `--to-env` option:
  - Appends suggested keys to `.env` with a `# Suggested by env-guardian` marker
  - Option may have user defined filename added as well, `--to-env .env.local`
  - Any file creation or manipulation will happen in the project's root folder
- Ignore false positives
  - Ignore variables or files permanently via `.envscanignore.json`
  - Reset ignores back to default

---
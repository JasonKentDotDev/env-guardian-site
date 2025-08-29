---
sidebar_position: 1
---

# Naming Conventions for Variables

When it comes down to keeping your secrets safe in your code, what you need to do and how you structure your secrets will vary fairly widely depending on the language you are using. A Google search may be where you go to look for how to set up your `.env` correctly, but I'll save you some time and show you the basics for every compatible language/framework that Env-Guardian works with.

---

## JavaScript & TypeScript

| Framework / Runtime | Naming Convention | Access Example |
|---------------------|-------------------|----------------|
| **Vanilla Node.js** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `process.env.MY_VARIABLE` |
| **React.js (CRA, Vite, etc.)** | Must start with `REACT_APP_` | `process.env.REACT_APP_API_URL` |
| **Next.js** | `NEXT_PUBLIC_` for client-side, unrestricted for server | `process.env.NEXT_PUBLIC_API_URL` / `process.env.SECRET_KEY` |
| **Nuxt.js (2)** | Must start with `NUXT_ENV_` | `process.env.NUXT_ENV_API_URL` |
| **Nuxt.js (3)** | `NUXT_PUBLIC_` for client-side, unrestricted for server | `useRuntimeConfig().public.apiUrl` |
| **Vue.js (Vite projects)** | Must start with `VITE_` | `import.meta.env.VITE_API_URL` |
| **SvelteKit** | Must start with `PUBLIC_` for client-side | `import.meta.env.PUBLIC_API_URL` |
| **NestJS / Angular / others** | Standard Node.js style | `process.env.MY_VARIABLE` |

---

## Other Languages

| Language | Naming Convention | Access Example |
|----------|------------------|----------------|
| **Python (.py)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `os.environ("MY_VARIABLE")` |
| **Ruby (.rb)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `ENV["MY_VARIABLE"]` |
| **Shell Script (.sh, .bash)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `export MY_VARIABLE=value && echo $MY_VARIABLE` |
| **JSON (.json)** | No strict rules, often camelCase or ALL_CAPS | `{ "MY_VARIABLE": "value" }` |
| **YAML (.yaml, .yml)** | snake_case or ALL_CAPS keys | `MY_VARIABLE: value` |
| **PHP (.php)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `$_ENV["MY_VARIABLE"]` |
| **Java (.java)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `System.getenv("MY_VARIABLE")` |
| **Kotlin (.kt)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `System.getenv("MY_VARIABLE")` |
| **Go (.go)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `os.Getenv("MY_VARIABLE")` |
| **C# (.cs)** | `MY_VARIABLE` (UPPER_SNAKE_CASE) | `Environment.GetEnvironmentVariable("MY_VARIABLE")` |

---

## Quick summary of prefixes  
- **React** → `REACT_APP_`  
- **Next.js** → `NEXT_PUBLIC_` 
- **Nuxt** → 
    - **Nuxt 2:** `NUXT_ENV_`
    - **Nuxt 3:** `NUXT_PUBLIC_`  
- **Vue (Vite)** → `VITE_`  
- **SvelteKit** → `PUBLIC_`  
- **Node.js / Others** → plain uppercase snake case (no prefix) `MY_VARIABLE`

---

---
sidebar_position: 2
---

# File Types by Language / Framework

Different languages and frameworks have conventions for which `.env` files they support. Env-Guardian works across all of them, but here’s what you’ll most commonly see:

---

## JavaScript & TypeScript

| Framework / Runtime | Common `.env` files | Notes |
|---------------------|---------------------|-------|
| **Vanilla Node.js** | `.env` | Typically just a single `.env` file, loaded with `dotenv`. |
| **React.js (CRA)** | `.env`, `.env.local`, `.env.development`, `.env.production`, `.env.test` | `.env.local` overrides `.env`. Only `REACT_APP_` vars are exposed. |
| **Next.js** | `.env`, `.env.local`, `.env.development`, `.env.production`, `.env.test` | `.env.local` is ignored by git by default. `NEXT_PUBLIC_` required for client. |
| **Nuxt.js (2)** | `.env` | Typically loaded with `@nuxtjs/dotenv`. Uses `NUXT_ENV_` prefix. |
| **Nuxt.js (3)** | `.env`, `.env.local` | Works with `runtimeConfig`, uses `NUXT_PUBLIC_` for client. |
| **Vue.js (Vite projects)** | `.env`, `.env.local`, `.env.development`, `.env.production`, `.env.test` | Requires `VITE_` prefix to be exposed. |
| **SvelteKit** | `.env`, `.env.local`, `.env.development`, `.env.production` | Uses `PUBLIC_` prefix for client-side. |
| **NestJS / Angular** | `.env` | Usually one `.env`, though some teams split into `.env.development` and `.env.production`. |

---

## Other Languages

| Language | Common `.env` files | Notes |
|----------|---------------------|-------|
| **Python** | `.env` | Often used with `python-dotenv`. No strict variants by default, though projects may define `.env.development` etc. |
| **Ruby (Rails)** | `.env`, `.env.local`, `.env.development`, `.env.test`, `.env.production` | Supported by gems like `dotenv-rails`. |
| **Shell Script** | `.env` or direct `export` in `.bashrc` / `.zshrc` | Shell scripts can `source .env`. |
| **JSON configs** | `config.json` or `secrets.json` | Not always `.env` style, but often used in cloud configs. |
| **YAML configs** | `config.yaml`, `application.yaml` | Popular in Kubernetes / CI/CD environments. |
| **PHP (Laravel)** | `.env` | Laravel requires `.env` in project root; `.env.example` often provided. |
| **Java (Spring Boot)** | `.env`, `.env.local`, `application.properties`, `application.yml` | Spring can load from `.env` or `.properties`. |
| **Kotlin** | `.env` | Follows same conventions as Java. |
| **Go** | `.env` | Common with `godotenv`, usually a single `.env`. |
| **C# (.NET)** | `.env`, `appsettings.json`, `secrets.json` | .NET uses `appsettings.json`, but `dotenv.net` supports `.env`. |

---

## General Best Practice
- Use **`.env`** for defaults.  
- Use **`.env.local`** for secrets that should *not* be committed.  
- Use **`.env.development`**, **`.env.production`**, **`.env.test`** when your framework supports environment-specific overrides.  
- **Always** remember to add your **`.env`** filename to **`.gitignore`** or double check that it's there already.  

---
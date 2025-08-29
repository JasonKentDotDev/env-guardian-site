---
sidebar_position: 1
---


# Scanning Files

## `scan` / `scan [dir]`
You can scan all compatible files from your project's root directory, or you can specify a specific directory you want scanned.

```bash
# Scan all compatible files.
env-guardian scan

# Scan all compatible files in a specific directory
env-guardian scan src
```

When the scan runs, it will detect Environment Variable usages in your code, and then it will detect possible values that should probably be moved into your `.env` file.

```bash
# Output

------------Environment Variable Report------------

Existing Environment Variables:
✔ REACT_APP_USERNAME (used in: src\index.js)
✔ REACT_APP_PASSWORD (used in: src\index.js)
✔ REACT_APP_DATABASE_PASSWORD (used in: api\database-connection.js)

⚠ Suggested Environment Variables:
[LOW] fullPath (found in: src\index.js)
[MEDIUM] key (found in: src\page.js)
[CRITICAL] awsAccessKey (found in: api\database-connection.sh)
```

---

## Optional Flags
### `--to-env [file]` 
Append suggestions to a `.env` file of the user's choosing. (.env.local, .env.production, etc.)

```bash
# No argument passed to the flag
$ env-guardian scan --to-env .env.local

# Output

------------Environment Variable Report------------

Existing Environment Variables:
✔ REACT_APP_USERNAME (used in: src\index.js)
✔ REACT_APP_PASSWORD (used in: src\index.js)
✔ REACT_APP_DATABASE_PASSWORD (used in: api\database-connection.js)

⚠ Suggested Environment Variables:
[LOW] fullPath (found in: src\index.js)
[MEDIUM] key (found in: src\page.js)
[CRITICAL] awsAccessKey (found in: api\database-connection.sh)

✨ Added 3 suggestion(s) to .env.local
```

If no filename is passed in by the user, the command will default to `.env`
```bash
# Argument passed to the flag
$ env-guardian scan --to-env

# Output

------------Environment Variable Report------------

Existing Environment Variables:
✔ REACT_APP_USERNAME (used in: src\index.js)
✔ REACT_APP_PASSWORD (used in: src\index.js)
✔ REACT_APP_DATABASE_PASSWORD (used in: api\database-connection.js)

⚠ Suggested Environment Variables:
[LOW] fullPath (found in: src\index.js)
[MEDIUM] key (found in: src\page.js)
[CRITICAL] awsAccessKey (found in: api\database-connection.sh)

✨ Added 3 suggestion(s) to .env
```

---
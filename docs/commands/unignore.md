---
sidebar_position: 4
---


# Removing Variables and Files From Your Ignore list

The `unignore` commands will do the opposite of the `ignore` commands by removing the variables or 
files in the `.envscanconfig.json` file.

---

## `unignore`
If you accidentally ignored a variable you didn't want to, or would like to just remove a few variables 
without resetting the entire `.envscanconfig.json` rules file, then you can use the `unignore` command 
to do that.

```bash
$ env-guardian unignore variableName

# Output
✔ No longer ignoring variableName
✨ Updated ignore config at /path/to/.envscanconfig.json
```

You can ignore multiple variables at a time.
```bash
$ env-guardian unignore variableName anotherVar

# Output
✔ No longer ignoring variableName
✔ No longer ignoring anotherVar
✨ Updated ignore config at /path/to/.envscanconfig.json
```

---

## `unignore-files`
The same as the variable `unignore`, but with files that are in the `.envscanconfig.json` rules file.

```bash
$ env-guardian unignore-files path/to/file.js

# Output
✔ No longer ignoring ALL variables in path/to/file.js
✨ Updated ignore config at /path/to/.envscanconfig.json
```

You can ignore multiple files at a time.
```bash
$ env-guardian unignore-files path/to/file.js another/path/file.ts

# Output
✔ No longer ignoring ALL variables in path/to/file.js
✔ No longer ignoring ALL variables in another/path/file.ts
✨ Updated ignore config at /path/to/.envscanconfig.json
```

---

## `reset-ignore`
Wipe the entire contents of your `.envscanconfig.json` file.

```bash
$ env-guardian reset-ignore

# Output on 'y' response
This will overwrite .envscanconfig.json. Continue? (y/N) y
✨ Updated ignore config at path\to\.envscanconfig.json
🔄 ALL rules in `.envscanconfig.json` have been reset
✅ Reset complete

# Output on 'n' response
This will overwrite .envscanconfig.json. Continue? (y/N) n
❌ Reset canceled
```

When reset, the file will default back to:
```json
// Default .envscanconfig.json file contents
{
  "ignore": {
    "variables": [],
    "files": []
  }
}
```

---
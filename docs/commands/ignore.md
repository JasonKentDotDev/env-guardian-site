---
sidebar_position: 2
---


# Ignoring Variables and Files

## `ignore`
Ignore false positives by adding the variable(s) to the `.envscanignore.json` rules file.

```bash
$ env-guardian ignore variableName

# Output
✔ Now ignoring variableName
✨ Updated ignore config at path\to\.envscanignore.json
```

You can ignore multiple variables at a time.
```bash
$ env-guardian ignore variableName anotherVar

# Output
✔ Now ignoring variableName
✔ Now ignoring anotherVar
✨ Updated ignore config at path\to\.envscanignore.json
```

---

## `ignore-files`
Ignore all variables in a file if you know that there is and never will be sensitive values in them.

```bash
$ env-guardian ignore-files path/to/file.js

# Output
✔ Now ignoring ALL variables in path\to\file.js
✨ Updated ignore config at path\to\.envscanignore.json
```

You can ignore multiple files at a time.
```bash
$ env-guardian ignore-files path/to/file.js another/path/file.ts

# Output
✔ Now ignoring ALL variables in path\to\file.js
✔ Now ignoring ALL variables in another\path\file.ts
✨ Updated ignore config at path\to\.envscanignore.json
```

---

## `ignore-list`
Display a list of all the variables and files you have in your ignore rules

```bash
$ env-guardian ignore-list

# Output

🛑 Currently Ignored Rules:

• variableName (globally)
• anotherVar (globally)
• ALL variables in path\to\file.js
• ALL variables in another\path\file.js
```

If you look at the contents of `.envscanignore.json` you can see your rules added.
```json
// Example file contents.
{
  "ignore": {
    "variables": ['variableName', 'anotherVar'],
    "files": ['path/to/file.js', 'another/path/typeFile.ts']
  }
}
```

---

## `reset-ignore`
Wipe the contents of your `.envscanignore.json` file.

```bash
$ env-guardian reset-ignore

# Output on 'y' response
This will overwrite .envscanignore.json. Continue? (y/N) y
✨ Updated ignore config at path\to\.envscanignore.json
🔄 ALL rules in `.envscanignore.json` have been reset
✅ Reset complete

# Output on 'n' response
This will overwrite .envscanignore.json. Continue? (y/N) n
❌ Reset canceled
```

When reset, the file will default back to:
```json
// Default .envscanignore.json file contents
{
  "ignore": {
    "variables": [],
    "files": []
  }
}
```
---
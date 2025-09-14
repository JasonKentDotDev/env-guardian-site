---
sidebar_position: 2
---

# Set Priority Level for Scanned Results

## `set-priority`

Running the `scan` command will display a report of all used instances of current Environment Variables 
as well as suggestions for variables you may want to add to your .env file. Each suggestion is assigned a severity level. 
You may set the priority level so that when you `scan`, the results only display from the selected priority level and above.

```bash
# Run set-priority command
env-guardian set-priority high      # Options: low, medium, high, or critical

# Output
✔ Priority set to [HIGH]
```

This will update the `.envscanconfig.json` file to:

```json
{
  "ignore": {
    "variables": [],
    "files": []
  },
  "priority": "HIGH"    // 👈 Updated line
}
```

## `reset-priority`

You may revert the `scan` results to default and display all usages and suggenstions.

```bash
# Run reset-priority command
env-guardian reset-priority

# Output
🔄 Priority filter reset. All severities will be shown on scan.
```

This will remove the `"priority"` key from `.envscanconfig.json`.

---
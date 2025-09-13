---
id: global-flags
sidebar_position: 2
---


# Global Flags

Global flags can be used without any command, unlike how `--to-env` can only be used after `scan`,
these flags would go right after `env-guardian`.

## `-h, --help`

```bash
env-guardian -h
# or
env-guardian --help
```
This global flag displays a list of all of the available commands, and what each one does, for the user.

## `-v, --version`

```bash
env-guardian -v
# or
env-guardian --version
```
This simple global flag diaplays to the user what version of Env-Guardian they are running.

## `-i, --info`

``` bash
env-guardian -i
# or
env-guardian --info
```
This global flag displays simple and useful information about Env-Guardian to the user.
The list includes information about:
  - Package Name
  - Author
  - Version
  - Description
  - GitHub Repo
  - Documentation site

## `--valid-env`

```bash
env-guardian --valid-env
```
This displays to the user the list of valid filenames for .env files that the package is compatible with.
These include filenames such as .env.local, .env.development, config.json, and more.
For a full list of compatible languages and frameworks, see the documentation [here](../docs/intro#features).

---
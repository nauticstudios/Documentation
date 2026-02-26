---
title: AtlasLang
description: Advanced multilingual engine with PlaceholderAPI, GitHub synchronization and public API support.
tableOfContents: true
---

AtlasLang is a complete multilingual engine designed to provide centralized language management across plugins and server components.

It allows per-player language selection, structured language files, strict validation, GitHub synchronization and full PlaceholderAPI integration.

GitHub Repository:  
https://github.com/nauticstudios/atlaslang

Public API Source:  
https://github.com/nauticstudios/AtlasLang/blob/master/src/main/java/com/github/nautic/api/AtlasAPI.java

---

## Overview

AtlasLang provides:

- Per-player language storage
- Locale → folder mapping system
- Strict language resolution
- Structured YAML file loading
- Recursive language folder loading
- PlaceholderAPI expansion
- Public developer API
- GitHub synchronization
- Database persistence
- Runtime dependency loading

:::note
AtlasLang enforces strict validation to prevent invalid or unregistered languages from being used.
:::

---

## Architecture

AtlasLang is composed of the following core components:

### AtlasLang (Main Plugin)

Responsible for:

- Runtime dependency loading
- Configuration loading
- Language initialization
- Command registration
- PlaceholderAPI expansion registration
- GitHub sync manager
- Database initialization

---

### LanguageManager

Handles:

- Locale registration
- Folder mapping
- Strict language resolution
- Default language fallback
- Reloading system

Configuration format:

```yaml
default: english

register:
  languages:
    - en:english:messages.yml
    - es:spanish:messages.yml
```

Format:

```
locale:folder:defaultFile
```

---

### FileManager

Responsible for:

- Recursive YAML loading
- Language file caching
- Dynamic file loading
- File preparation
- Default file generation
- Cache clearing

All language files are loaded recursively inside:

```
/plugins/AtlasLang/languages/
```

Example structure:

```
languages/
 ├── english/
 │   ├── messages.yml
 │   ├── scoreboard.yml
 │   └── system.yml
 └── spanish/
     ├── messages.yml
     ├── scoreboard.yml
     └── system.yml
```

---

### LangHandler

Handles:

- Message retrieval
- List and string resolution
- Fallback handling
- System message retrieval
- Placeholder injection
- Missing path handling

If a path does not exist, a fallback message is returned instead of crashing.

:::warning
If a language file is missing or malformed, the system automatically returns a safe fallback message.
:::

---

## PlaceholderAPI Integration

AtlasLang registers the following PlaceholderAPI identifier:

```
%alang_...%
```

### Format

```
%alang_(file)_ (path)%
```

Example:

```
%alang_(messages)_ (join_message)%
```

Nested folder example:

```
%alang_(lobby:scoreboard)_ (title)%
```

### Behavior

- Resolves player language from database
- Falls back to default language if invalid
- Validates file existence
- Validates path existence
- Returns system message if format is invalid

:::tip
Placeholders must contain the format `(file)_(path)` or they will return an invalid format message.
:::

---

## Public Developer API

AtlasLang provides a static API for developers.

### Retrieve Messages

```java
AtlasAPI.get(player, "path.to.message");
AtlasAPI.get(uuid, "path.to.message");
AtlasAPI.get("english", "path.to.message");
```

### Retrieve With Fallback

```java
AtlasAPI.getOrDefault(player, "path.to.message", "Fallback Text");
```

### Check Path Existence

```java
AtlasAPI.has("english", "path.to.message");
```

### Set Player Language

```java
AtlasAPI.setLanguage(player, "english");
```

### Get Player Language

```java
AtlasAPI.getLanguage(player);
```

### Validate Language

```java
AtlasAPI.isLanguageRegistered("english");
```

### Get All Registered Languages

```java
AtlasAPI.getRegisteredLanguages();
```

### Access Internal Managers

```java
AtlasAPI.getLanguageManager();
AtlasAPI.getLangHandler();
```

### Addon Messages

```java
AtlasAPI.getAddon(player, "path.to.message");
```

---

## Command System

Base command:

```
/atlaslang
```

### Help

```
/atlaslang help
```

### List Languages

```
/atlaslang list
```

Permission:
```
atlaslang.list
```

---

### Show Aliases

```
/atlaslang aliases
```

Permission:
```
atlaslang.aliases
```

---

### Set Player Language

```
/atlaslang set <player> <language>
```

Permission:
```
atlaslang.set
```

---

### Reset Player Language

```
/atlaslang reset <player>
```

Permission:
```
atlaslang.reset
```

---

### Player Info

```
/atlaslang info <player>
```

Permission:
```
atlaslang.info
```

---

### Reload

```
/atlaslang reload
```

Permission:
```
atlaslang.reload
```

---

### GitHub Integration

Synchronize:

```
/atlaslang github sync
```

Check status:

```
/atlaslang github status
```

Permission:
```
atlaslang.github
```

Full access:

```
atlaslang.admin
```

---

## GitHub Synchronization

AtlasLang supports automatic synchronization from a GitHub repository.

Example configuration:

```yaml
github:
  repository:
    name: "owner/repository"
    branch: "main"

  authentication:
    type: "none" # none | token
    token: ""

  paths:
    remote-root: "languages"
    local-root: "languages"

  sync:
    create-missing: true
    overwrite-existing: true
    delete-missing: false
    reload-after-sync: true
```

Synchronization is executed asynchronously to prevent server lag.

:::note
GitHub synchronization does not block the main server thread.
:::

---

## Database Integration

Player languages are stored using the configured database backend.

On player language resolution:

1. Retrieve stored language
2. Validate registration
3. Fallback to default if invalid

Database connection is closed safely on plugin disable.

---

## Runtime Dependency Loading

AtlasLang loads runtime libraries during `onLoad()` using:

- Maven Central
- CodeMC Repository

Dependencies are relocated and isolated safely.

:::tip
Runtime dependency loading allows AtlasLang to remain lightweight while supporting advanced features.
:::

---

## Language Resolution Process

1. Player language is requested.
2. LanguageManager resolves locale strictly.
3. Folder is validated.
4. FileManager ensures file is loaded.
5. Path is resolved.
6. Fallback applied if missing.

This prevents invalid state errors.

---

## Designed For

AtlasLang is built for:

- Multi-language networks
- Scoreboard systems
- Menu systems
- Placeholder-based UI
- Modular plugin ecosystems
- Cross-plugin centralized language control

---

## Stability & Safety

:::note
AtlasLang never throws fatal errors for missing translations.
:::

:::warning
Improper placeholder formatting will return a system error message.
:::

:::tip
Always reload languages after modifying configuration files.
:::

---

## Summary

AtlasLang is a structured, database-backed, strictly validated multilingual engine with:

- Public API access
- PlaceholderAPI integration
- GitHub synchronization
- Recursive file loading
- Strict fallback handling
- Centralized language management

It is designed to function as a core language system across multiple plugins and server modules.
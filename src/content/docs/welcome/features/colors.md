---
title: Colors
description: Supported color and text formatting systems.
tableOfContents: false
---

## Overview

This page describes the supported color formats and text styling systems available in the plugins.

For best compatibility and consistency, it is recommended to use the MiniMessage format.

---

## Supported Color Formats

| Name         | Format Example            | Generator |
|--------------|--------------------------|-----------|
| MiniMessage  | `<red>Text</red>`        | [MiniMessage Web UI](https://webui.advntr.dev/) |
| HEX          | `&#RRGGBB`               | [HEX Generator](https://birdflop.com/resources/rgb/) |
| Legacy       | `&x&R&R&G&G&B&B`         | [Legacy Converter](https://birdflop.com/resources/rgb/) |

---

## MiniMessage (Recommended)

MiniMessage is the preferred formatting system.

It supports:

- Named colors  
- HEX colors  
- Gradients  
- Bold, italic, underline and strikethrough  

Example:

```text
<gradient:#00FFAA:#00AAFF><bold>Example Text</bold></gradient>
```

:::note
Only color and basic text formatting are guaranteed to work across all modules.
Advanced features such as click events or custom fonts may not be supported in every context.
:::

---

## HEX Format

HEX colors use the following format:

```text
&#RRGGBB
```

Example:

```text
&#00FFAAExample Text
```

This format is supported in modern Minecraft versions.

---

## Legacy Format

Legacy formatting uses the extended color syntax:

```text
&x&R&R&G&G&B&B
```

Example:

```text
&x&0&0&F&F&A&AExample
```

:::caution
The legacy format is maintained for backward compatibility and is not recommended for new configurations.
:::

---

## Best Practices

- Use MiniMessage whenever possible.
- Avoid mixing different formatting systems in the same message.
- Keep formatting consistent for better readability and maintainability.
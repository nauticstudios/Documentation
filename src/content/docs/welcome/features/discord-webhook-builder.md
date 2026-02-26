---
title: Discord Webhook Builder
description: Configuration reference for Discord webhook messages.
tableOfContents: false
---

:::caution
Some embed features may not be supported in all plugins.
:::

This page documents the available webhook configuration options and how to structure embed messages properly.

---

## Basic Example

```yaml
content: "Get ready!"
color: "#FF0000"

title:
  text: "Example - STARTED"

fields:
  "1":
    inline: true
    name: "Time"
    value: "100"
```

---

## Content

The `content` field sends a regular Discord message.

It is the **only field that supports working mentions**, such as:

- Role mention: `<@&1234567890123456789>`
- User mention: `<@1234567890123456789>`
- Channel mention: `<#1234567890123456789>`

Example:

```yaml
content: "Content Field"
```

---

## Embed Structure

### Title (Required)

```yaml
title:
  text: "Title text"
  icon: "" # optional
```

- `text` → Main embed title  
- `icon` → Optional icon displayed next to the title  

---

### Color (Optional)

```yaml
color: "#RRGGBB"
```

Defines the vertical color bar displayed on the left side of the embed.

Must be a valid HEX color.

---

### Description (Optional)

```yaml
description: "Description text"
```

Used for extended information inside the embed body.

---

### Fields (Optional)

Multiple fields can be defined using indexed keys.

```yaml
fields:
  "1":
    name: "Name"
    value: "Value"
    inline: true

  "2":
    name: "Another Field"
    value: "Another Value"
    inline: false
```

Field properties:

- `name` → Field title (required)
- `value` → Field content
- `inline` → If true, fields appear side by side

---

### Author (Optional)

```yaml
author:
  name: "Author Text"
  icon-url: "https://example.com/icon.png"
  url: "https://example.com"
```

- `name` → Author name (required if section is used)
- `icon-url` → Optional author avatar
- `url` → Optional clickable link

---

### Footer (Optional)

```yaml
footer:
  text: "Footer Text"
  icon: "https://example.com/footer.png"
```

- `text` → Footer message
- `icon` → Optional footer image

---

### Image (Optional)

```yaml
image-url: "https://example.com/image.png"
```

Displays a large image inside the embed.

---

### Thumbnail (Optional)

```yaml
thumbnail-url: "https://example.com/thumbnail.png"
```

Displays a small image on the right side of the embed.
# Images

Local image and GIF storage for the documentation site.

## Structure

```
public/images/
  common/                       # shared assets used by Common Features pages
  plugins/
    ntebexmessage/              # one folder per plugin
```

## Adding a new plugin

Create a matching folder under `plugins/`. Example for a future `NExample` plugin:

```
public/images/plugins/nexample/
```

## Referencing images in MDX

Anything inside `public/` is served from the site root. From any `.mdx` file:

```md
![Editor preview](/images/plugins/ntebexmessage/editor.png)
```

GIFs work the same way:

```md
![Reward event](/images/plugins/ntebexmessage/reward.gif)
```

## External hosting

You can also link to externally hosted images (Imgur, GitHub user-content, etc.):

```md
![Preview](https://i.imgur.com/abc123.png)
```

## Embedding YouTube videos

Starlight MDX supports raw HTML. Drop an iframe wherever you need the embed:

```md
<iframe
  width="100%"
  height="420"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

---
title: Embedding Storybook Stories
category: Storybook
---

# Embedding Storybook Stories

This guide explains how to embed Storybook stories directly in your VitePress documentation. By embedding interactive examples, your documentation becomes more dynamic and helpful for users.

## Methods for Embedding Stories

There are several ways to embed Storybook stories in VitePress:

### 1. Iframe Integration

The simplest method is to use an iframe that links to the published Storybook URL:

```html
<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>
```

**Result:**

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### 2. Custom Vue Component

For better integration, you can create a custom Vue component:

Create a `StoryEmbed.vue` component in your `.vitepress/theme/components` directory:

```vue
<template>
  <div class="story-embed">
    <iframe
      :src="storyUrl"
      :style="{ height: height + 'px' }"
      width="100%"
      :title="title"
      allowfullscreen
      frameborder="0"
    ></iframe>
    <div class="story-controls" v-if="showControls">
      <a :href="fullStoryUrl" target="_blank" rel="noopener noreferrer">
        Open in Storybook
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 300
    },
    title: {
      type: String,
      default: 'Storybook Story'
    },
    showControls: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    storyUrl() {
      return `https://casoon.github.io/ui-lib/storybook/iframe.html?id=${this.id}&viewMode=story`;
    },
    fullStoryUrl() {
      return `https://casoon.github.io/ui-lib/storybook/?path=/story/${this.id}`;
    }
  }
};
</script>

<style scoped>
.story-embed {
  margin: 2rem 0;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  overflow: hidden;
}

.story-embed iframe {
  border: none;
}

.story-controls {
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
  text-align: right;
  border-top: 1px solid #eaeaea;
}

.story-controls a {
  font-size: 0.85rem;
  color: #3451b2;
  text-decoration: none;
}

.story-controls a:hover {
  text-decoration: underline;
}
</style>
```

Register this component in your `.vitepress/theme/index.js` file:

```js
import DefaultTheme from 'vitepress/theme';
import StoryEmbed from './components/StoryEmbed.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('StoryEmbed', StoryEmbed);
  }
};
```

Then you can use the component in your Markdown file:

```md
<StoryEmbed id="components-button--primary" height="200" title="Primary Button" />
```

### 3. Storybook Addon for Docs

For even deeper integration, you can use the official [Storybook Addon for VitePress](https://github.com/storybookjs/addon-docs). This method requires additional configuration but offers the best integration.

## Finding Story IDs

To find the correct story ID for embedding:

1. Open the desired story in Storybook
2. Look at the URL: `https://casoon.github.io/ui-lib/storybook/?path=/story/components-button--primary`
3. The part after `/story/` is the story ID: `components-button--primary`

## Examples of Embedded Stories

### Button Component

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--variants&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Card Component

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
  width="100%"
  height="350px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Responsiveness and Size Adjustment

When embedding stories, it's important to consider responsiveness:

- Use relative widths (`width="100%"`) for the iframe
- Adjust the height according to the content
- Consider behavior on mobile devices

## Best Practices

- **Combine code and story**: Show the code along with the embedded story to clarify context
- **Minimize the number**: Embed only relevant stories, too many embedded iframes can slow down loading time
- **Provide alternatives**: Always add a link to the full Storybook view for users who want more interactivity
- **Test on different devices**: Make sure your embedded stories look good on different screen sizes

## Troubleshooting

### Story Not Loading

- Check the story ID
- Make sure Storybook is publicly accessible
- Check if Content Security Policies (CSP) are blocking the embedding

### Layout Issues

- Adjust the height of the iframe to match the content
- Use responsive design principles for embedding

### Performance Considerations

- Limit the number of embedded stories per page
- Consider using lazy loading for iframes
- Optimize the embedded Storybook build 
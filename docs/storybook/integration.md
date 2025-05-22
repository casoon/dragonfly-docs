---
title: Setting Up Storybook Integration
category: Storybook
---

# Setting Up Storybook Integration

This guide explains step by step how to integrate Storybook into your VitePress documentation. This integration allows you to present interactive examples directly in your documentation.

## Prerequisites

Before you begin, make sure you meet the following prerequisites:

- Node.js (v14 or higher)
- An existing VitePress project
- Access to a Storybook installation (either local or remote)

## 1. Set Up Storybook

If you don't already have Storybook in your project, you can install it as follows:

```bash
# Navigate to your project directory
cd my-project

# Install Storybook
npx storybook@latest init
```

This command sets up Storybook in your project and creates a basic configuration.

## 2. Create Storybook Components

Create stories for your components. Here's a simple example for a Button component:

```js
// button.stories.js
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'outline'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button'
};
```

## 3. Deploy Storybook

For your stories to be embedded in VitePress, they need to be publicly accessible. Deploy Storybook using a static website hosting service:

```bash
# Build Storybook as a static website
npm run build-storybook

# The generated application is in the storybook-static directory
# You can deploy this directory to a hosting service of your choice
```

If you use GitHub Pages, you can automate the deployment:

```yaml
# .github/workflows/storybook.yml
name: Storybook Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Build Storybook
        run: npm run build-storybook
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: storybook-static
          target-folder: storybook
```

## 4. Customize VitePress Configuration

### Create a Custom Component

Create a Vue component to embed Storybook in VitePress:

```
mkdir -p docs/.vitepress/theme/components
```

Create the file `docs/.vitepress/theme/components/StoryEmbed.vue`:

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
      // Adjust the URL to your Storybook domain
      return `https://casoon.github.io/ui-lib/storybook/iframe.html?id=${this.id}&viewMode=story`;
    },
    fullStoryUrl() {
      return `https://casoon.github.io/ui-lib/storybook/?path=/story/${this.id}`;
    }
  }
};
</script>

<style>
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

### Register the Component in VitePress

Update your `docs/.vitepress/theme/index.js` file to register the component:

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

## 5. Use the Component in Markdown

Now you can use the component in your Markdown files:

```md
# Button Component

This is a button component with various styles:

<StoryEmbed id="components-button--primary" height="200" />

## Button Variants

<StoryEmbed id="components-button--variants" height="300" />
```

## 6. Advanced: Custom Theme Integration

To ensure that your embedded Storybook stories match your VitePress theme, you can customize the Storybook theme:

1. Create a custom theme in `.storybook/manager.js`:

```js
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light, // or themes.dark
    brandTitle: 'Casoon UI Library',
    brandUrl: 'https://casoon.github.io/ui-lib',
    brandImage: './logo.png',
    colorPrimary: '#3451b2',
    colorSecondary: '#585C6D',
  },
});
```

2. Update `.storybook/preview.js` to match styles:

```js
export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#1e1e1e',
      },
    ],
  },
  docs: {
    theme: themes.light, // Match with your VitePress theme
  },
};
```

## 7. Troubleshooting

### CORS Issues

If you encounter Cross-Origin Resource Sharing (CORS) issues:

1. Make sure your Storybook is served with appropriate CORS headers
2. You might need to add the following to your `.storybook/main.js`:

```js
module.exports = {
  // ...other configurations
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Add CORS headers
    config.devServer = {
      ...(config.devServer || {}),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    return config;
  },
};
```

### Story Not Loading

If a story doesn't load correctly:

1. Check the console for errors
2. Verify that the story ID is correct
3. Ensure that the Storybook URL is accessible

## 8. Best Practices

- **Keep stories focused**: Each story should demonstrate one specific aspect or variant
- **Use consistent naming**: Use a consistent naming convention for your stories
- **Document interaction**: Make it clear how users can interact with the embedded stories
- **Test across devices**: Ensure that embedded stories work well on all device sizes
- **Optimize performance**: Be mindful of how many stories you embed on a single page

By following this guide, you'll be able to enhance your VitePress documentation with interactive Storybook examples, making it easier for developers to understand your components. 
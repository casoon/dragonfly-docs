---
title: Installation
outline: deep
---

<script setup>
import { UI_LIB_VERSION } from '../.vitepress/data/versions'
</script>

# Installation

This guide explains how to install and set up the Casoon UI Library (Dragonfly) in your project.

## Requirements

- **Node.js**: Version 16.0.0 or higher
- **npm**, **yarn**, or **pnpm**: For package management

## Installation Methods

### npm

```bash
npm install @casoon/dragonfly@{{ UI_LIB_VERSION }}
```

### yarn

```bash
yarn add @casoon/dragonfly@{{ UI_LIB_VERSION }}
```

### pnpm

```bash
pnpm add @casoon/dragonfly@{{ UI_LIB_VERSION }}
```

## Basic Setup

After installation, you can import the entire library or specific modules based on your needs.

### Importing the Entire Library

```js
// In your main entry file (e.g., main.js, index.js)
import '@casoon/dragonfly/dist/styles.css';
```

### Importing Specific Modules

For better performance, you can import only the modules you need:

```js
// Core system (required)
import '@casoon/dragonfly/core.css';

// UI Components
import '@casoon/dragonfly/ui.css';

// Effects
import '@casoon/dragonfly/effects.css';

// Utilities
import '@casoon/dragonfly/utilities.css';
```

## Theme Setup

Casoon UI comes with several built-in themes. Import one or create your own:

```js
// Import a built-in theme
import '@casoon/dragonfly/themes/day.css';
// or
import '@casoon/dragonfly/themes/night.css';
```

Then apply the theme class to your root element:

```html
<body class="theme-day">
  <!-- Your content here -->
</body>
```

## Framework Integration

### React

```jsx
// In your App.jsx or index.jsx
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/ui.css';
import '@casoon/dragonfly/themes/day.css';

function App() {
  return (
    <div className="theme-day">
      <button className="button button--primary">Click me</button>
    </div>
  );
}
```

### Vue.js

```js
// In your main.js
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/ui.css';
import '@casoon/dragonfly/themes/day.css';
```

```vue
<template>
  <div class="theme-day">
    <button class="button button--primary">Click me</button>
  </div>
</template>
```

### Astro

```astro
---
// In your .astro file
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/ui.css';
import '@casoon/dragonfly/themes/day.css';
---

<div class="theme-day">
  <button class="button button--primary">Click me</button>
</div>
```

## Next Steps

- [Browse Components](/ui/)
- [Explore the Design System](/core/)
- [Learn About Themes](/themes/) 
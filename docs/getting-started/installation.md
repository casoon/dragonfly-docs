---
title: Installation
category: Getting Started
---

<script setup>
import { UI_LIB_VERSION } from '../.vitepress/data/versions'
</script>

# Installation

The Casoon UI Library can be flexibly integrated into various web projects and offers different installation methods for different requirements. The current version is {{ UI_LIB_VERSION }}.

## Prerequisites

- Node.js (Version 16 or higher)
- npm, yarn, or pnpm as package manager

## Installation via Package Manager

### With npm

```bash
npm install @casoon/ui-lib@0.5.5
```

### With yarn

```bash
yarn add @casoon/ui-lib@0.5.5
```

### With pnpm

```bash
pnpm add @casoon/ui-lib@0.5.5
```

## Integration into Your Project

### 1. Basic Integration with Core CSS

The core styles contain all basic CSS definitions, including reset layer, design tokens, layout, typography, and all UI components. They form the foundation for all further customizations.

#### In a JavaScript Application

```javascript
// In your main file (e.g., index.js, app.js, main.js)
import '@casoon/ui-lib/core.css';

// Optional: Import specific effects
import '@casoon/ui-lib/effects/glass.css';
import '@casoon/ui-lib/effects/animations.css';
```

#### Direct CSS Integration

```css
/* In your main CSS file */
@import '@casoon/ui-lib/core.css';

/* Optional: Import specific effects */
@import '@casoon/ui-lib/effects/glass.css';
@import '@casoon/ui-lib/effects/animations.css';
```

#### With a Link Tag in HTML

```html
<!-- Core styles -->
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/core.css">

<!-- Optional: Specific effects -->
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/effects/glass.css">
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/effects/animations.css">
```

### 2. Modular Integration

The Casoon UI Library uses a modular approach that allows you to load only the components you need, thus optimizing package size.

#### Import Individual Files Directly

```javascript
// Basic files
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/layout.css';
import '@casoon/ui-lib/typography.css';

// Import components individually
import '@casoon/ui-lib/components/button.css';
import '@casoon/ui-lib/components/card.css';
import '@casoon/ui-lib/components/forms.css';

// Import effects individually
import '@casoon/ui-lib/effects/glass.css';
import '@casoon/ui-lib/effects/animations.css';
```

### 3. Theme Activation

The Casoon UI Library offers a flexible theming system with multiple predefined themes.

#### Import a Theme

```javascript
// Standard theme (Day)
import '@casoon/ui-lib/themes/day.css';

// Or another theme
import '@casoon/ui-lib/themes/night.css';
import '@casoon/ui-lib/themes/ocean.css';
```

#### Activate a Theme

Add the corresponding theme class to the `<html>` or `<body>` element:

```html
<!-- For the Night theme -->
<html class="theme-night">
  <!-- Page content -->
</html>

<!-- Or on the body element -->
<body class="theme-ocean">
  <!-- Page content -->
</body>
```

For more details on theming, see the [Theming Documentation](/getting-started/themes).

## Usage with Build Tools

### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

// In your application file
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/button.css';
```

### Vite

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    // Enable support for modern CSS features
    postcss: {
      plugins: [
        // For full Lightning CSS support
      ]
    }
  }
});

// In your main file
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/button.css';
```

### Astro

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Casoon UI is optimized for Astro
  // and requires no special configuration
});

// In your Astro component
---
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/night.css';
---

<html class="theme-night">
  <!-- Content -->
</html>
```

### Lightning CSS Configuration (recommended)

For optimal results, using Lightning CSS (formerly Parcel CSS) is recommended:

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('lightningcss')({
      // Lightning CSS options
      drafts: {
        customMedia: true,
        nesting: true,
        interpolation: true // For interpolate-size support
      },
      include: 'standard'
    })
  ]
};
```

## CDN Integration

You can also integrate the Casoon UI Library directly via a CDN, without local installation:

```html
<!-- Core styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.5/core.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.5/themes/night.css">

<!-- Individual components -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.5/components/button.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.5/components/card.css">
```

## Note on Version 0.5.5

Version 0.5.5 includes minor optimizations and bug fixes. Please check the Release Notes for details on changes to layer structure, animations, and utilities.

## Special Features of the Current Version

### Improved Animation CSS

```css
/* Modern animations with unified naming scheme */
.element {
  animation: slide-in-left 0.3s ease-out;
}

/* Motion-safe and motion-reduce utilities */
.motion-safe {
  /* Animations that are only displayed when there is no restriction */
}

.motion-reduce {
  /* Alternative for users with 'prefers-reduced-motion' enabled */
}
```

### Fluid Interpolation (interpolate-size)

The new version supports `interpolate-size: allow-keywords` for fluid transitions between size values:

```css
/* Optimized for Lightning CSS */
:root {
  interpolate-size: allow-keywords;
}

/* Fluid typography */
.fluid-heading {
  font-size: medium with-range(small, x-large);
}
```

### Dialog Animations

```html
<button id="openDialog">Open Dialog</button>
<dialog id="myDialog" class="dialog dialog-enter">
  Dialog Content
</dialog>

<script>
  document.getElementById('openDialog').addEventListener('click', () => {
    document.getElementById('myDialog').showModal();
  });
</script>
```

## Compatibility

The Casoon UI Library supports all modern browsers. Some advanced features like `interpolate-size` require newer browsers or Lightning CSS for compilation.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Core CSS | 49+ | 31+ | 9.1+ | 15+ |
| Container Queries | 105+ | 110+ | 16.4+ | 105+ |
| interpolate-size | 120+ | 121+ (flag) | 17+ | 120+ |
| @property | 85+ | 113+ | 15.4+ | 85+ |

## Further Information

- [Layer System](/guide/layer-system)
- [Design Tokens](/getting-started/tokens)
- [Layout System](/getting-started/layout)
- [Theme System](/getting-started/themes) 
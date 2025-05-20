---
title: Introduction
category: Getting Started
---

<script setup>
import { UI_LIB_VERSION } from '../.vitepress/data/versions'
</script>

# Getting Started with Casoon UI

Welcome to the Casoon UI Library. This page provides a detailed introduction and all the information you need to get started. The current version is {{ UI_LIB_VERSION }}.

## Technical Foundations

The Casoon UI Library is based on advanced web technologies and offers a modern approach to UI development:

- **CSS Layer-based Architecture**: Precise control of specificity and clean code organization
- **Container Queries**: Component-based responsiveness for more flexible layouts
- **Lightning CSS Optimization**: Efficient processing of modern CSS features
- **Accessibility**: Comprehensive support for assistive technologies

## CSS Layer System in Detail

The heart of the Casoon UI Library is the precisely structured layer system:

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       core,                 /* Core functionalities */
       logical-properties,   /* Bidirectional layouts (RTL/LTR) */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variants */
       layout,               /* Layout foundations */
       layout-queries,       /* Responsive adaptations */
       typography,           /* Typography system */
       utilities,            /* Atomic utility classes */
       smooth-scroll,        /* Scroll behavior */
       accessibility,        /* Accessibility */
       icons,                /* Icon system */
       components,           /* UI components */
       animations,           /* Motion system */
       effects,              /* Visual effects */
       themes;               /* Theming system */
```

This layer system offers several advantages:
- Avoidance of specificity conflicts
- Better code organization
- Possibility for selective overrides

## Detailed Installation Guide

### Installation via npm

```bash
npm install @casoon/ui-lib@0.5.5
```

### Installation via yarn

```bash
yarn add @casoon/ui-lib@0.5.5
```

### Installation via pnpm

```bash
pnpm add @casoon/ui-lib@0.5.5
```

### Import into Your Project

You can import the entire library or individual modules:

```js
// Entire library
import '@casoon/ui-lib/core.css';

// Only specific modules
import '@casoon/ui-lib/modules/button.module.css';
import '@casoon/ui-lib/modules/card.module.css';
```

### Activating Themes

1. Import a theme:
   ```js
   import '@casoon/ui-lib/themes/day.css';
   ```

2. Activate the theme using a CSS class:
   ```html
   <body class="theme-day">
     <!-- Your content -->
   </body>
   ```

## Container Queries in Practice

The Casoon UI Library uses Container Queries for component-based responsiveness:

```html
<div class="container-query">
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Content adapts to the size of the container, not the viewport -->
  </div>
</div>
```

This enables more flexible layout design than classic media queries, as components can respond based on the available space of their container.

## Working with Design Tokens

Design tokens are the building blocks of the visual system:

```css
:root {
  /* Primary colors */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  /* ... more tokens ... */
}
```

Using design tokens instead of hardcoded values ensures:
- Consistent design
- Easier maintenance
- More flexible theming options

## Getting Started for Developers

To quickly work with the Casoon UI Library, we recommend the following first steps:

1. **Understand the structure**: Familiarize yourself with the layer system and module organization
2. **Explore the components**: Check out the available [components](/components/)
3. **Learn the utility classes**: Use the [utility classes](/getting-started/utilities) for quick styling
4. **Understand the themes**: Learn how to customize [themes](/getting-started/themes)

## Framework Integration

The Casoon UI Library works with all modern JavaScript frameworks:

### React

```jsx
// In your App.jsx or index.jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';

function App() {
  return (
    <div className="theme-day">
      <button className="button primary">Click me</button>
    </div>
  );
}
```

### Vue.js

```js
// In your main.js
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
```

### Astro

```astro
---
// In your .astro file
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
---

<div class="theme-day">
  <button class="button primary">Click me</button>
</div>
```

## Frequently Asked Questions (FAQ)

### Can I use the library with React/Vue/Angular?
Yes, the Casoon UI Library is framework-agnostic and works with all modern frontend frameworks.

### Can I use only specific components?
Yes, you can import individual modules to reduce file size.

### Does the library support Dark Mode?
Yes, the library offers full Dark Mode support through themes.

### How can I adapt the design to my brand?
You can override design tokens via CSS variables or create your own themes.

## Troubleshooting

### Components are not displayed correctly
Make sure you have imported `core.css` and a theme, and that the theme class is present in the HTML.

### CSS conflicts with other libraries
Use the specific layer names to adjust the priority of Casoon styles.

### Responsive layouts are not working as expected
Check if you are using Container Queries correctly and using the appropriate classes.

## Next Steps

- [Installation and Configuration](/getting-started/installation) - Detailed installation instructions
- [Learning the Layout System](/getting-started/layout) - Learn more about the layout system
- [Exploring Components](/components/) - Discover the available components
- [Effects](/guide/effects-system) - Explore the visual effects and animations

## Note on Version 0.5.5

Version 0.5.5 includes minor optimizations and bug fixes. Please check the Release Notes for details on changes to layer structure, animations, and utilities.

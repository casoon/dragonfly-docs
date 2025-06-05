---
title: Getting Started with Dragonfly UI
description: Learn how to install and use Dragonfly UI in your projects
outline: deep
---

# Getting Started

Welcome to Dragonfly UI, a modern CSS framework designed to help you build beautiful, accessible, and responsive user interfaces. This guide will walk you through the core concepts and help you get started quickly.

## What is Dragonfly UI?

Dragonfly UI is a comprehensive CSS framework that provides:

- **🧱 UI Components**: A complete set of pre-built, accessible components
- **📐 Layout System**: Flexible grid, flexbox, and container systems
- **🎨 Design Tokens**: Consistent design variables for colors, spacing, typography
- **✨ Effects**: Visual effects, animations, and transitions
- **🌙 Theming**: Multiple themes and easy customization
- **🔧 Utilities**: Helper classes for rapid development

## Key Features

### Modern CSS Architecture

Dragonfly UI is built with cutting-edge CSS features:

```css
/* Layer-based architecture for predictable specificity */
@layer reset, tokens, core, layout, typography,
       utilities, components, effects, themes;

/* Container queries for component-based responsiveness */
@container (min-width: 30rem) {
  .card { grid-template-columns: 1fr 1fr; }
}

/* CSS custom properties for easy theming */
:root {
  --color-primary: #e72779;
  --space-4: 1rem;
  --radius-md: 0.375rem;
}
```

### Lightning CSS Optimized

The framework is optimized for [Lightning CSS](https://lightningcss.dev/) (formerly Parcel CSS), providing:

- Faster build times
- Better CSS optimization
- Automatic vendor prefixing
- Advanced CSS feature support

### Accessibility First

Every component is built with accessibility in mind:

- WCAG 2.1 AA compliance
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader optimization
- High contrast support

## Installation

Choose your preferred package manager:

::: code-group

```bash [npm]
npm install @casoon/dragonfly
```

```bash [yarn]
yarn add @casoon/dragonfly
```

```bash [pnpm]
pnpm add @casoon/dragonfly
```

:::

## Basic Usage

### Import Styles

The simplest way to get started is to import the core styles:

```css
/* Import the complete framework */
@import '@casoon/dragonfly/core.css';

/* Add a theme */
@import '@casoon/dragonfly/themes/day.css';
```

### HTML Structure

Apply the theme class to your root element:

```html
<!DOCTYPE html>
<html class="theme-day">
<head>
  <link rel="stylesheet" href="path/to/dragonfly/core.css">
  <title>My App</title>
</head>
<body>
  <div class="container">
    <h1>Welcome to Dragonfly UI</h1>
    <button class="button button--primary">Get Started</button>
  </div>
</body>
</html>
```

## Framework Integration

### React

```jsx
// App.jsx
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/day.css';

function App() {
  return (
    <div className="theme-day">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Dragonfly UI
        </h1>
        <button className="button button--primary">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```

### Vue.js

```vue
<template>
  <div class="theme-day">
    <div class="container">
      <h1 class="text-3xl font-bold mb-4">
        Welcome to Dragonfly UI
      </h1>
      <button class="button button--primary">
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/day.css';
</script>
```

### Astro

```astro
---
// Layout.astro
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/day.css';
---

<html class="theme-day">
  <head>
    <title>My Astro Site</title>
  </head>
  <body>
    <div class="container">
      <h1 class="text-3xl font-bold mb-4">
        Welcome to Dragonfly UI
      </h1>
      <button class="button button--primary">
        Get Started
      </button>
    </div>
  </body>
</html>
```

## Core Concepts

### 1. Design Tokens

Dragonfly UI uses CSS custom properties for consistent design:

```css
:root {
  /* Colors */
  --color-primary: #e72779;
  --color-secondary: #6366f1;

  /* Spacing */
  --space-1: 0.25rem;
  --space-4: 1rem;
  --space-8: 2rem;

  /* Typography */
  --text-sm: 0.875rem;
  --text-lg: 1.125rem;

  /* Borders */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
}
```

[Learn more about Design Tokens →](/getting-started/tokens)

### 2. Layer System

CSS layers ensure predictable specificity:

```css
@layer reset {
  /* Browser reset styles */
}

@layer tokens {
  /* Design token definitions */
}

@layer components {
  /* Component styles */
}

@layer utilities {
  /* Utility classes */
}
```

[Explore the Layer System →](/core/layer-system)

### 3. Responsive Design

Multiple approaches to responsive design:

```css
/* Traditional media queries */
@media (min-width: 768px) {
  .card { grid-template-columns: 1fr 1fr; }
}

/* Container queries (modern approach) */
@container (min-width: 30rem) {
  .card { grid-template-columns: 1fr 1fr; }
}
```

[Master Responsive Design →](/layout/responsive)

### 4. Component System

Components follow BEM methodology:

```html
<!-- Button component -->
<button class="button button--primary button--large">
  Primary Button
</button>

<!-- Card component -->
<div class="card card--elevated">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="card__footer">
    <button class="button button--secondary">Action</button>
  </div>
</div>
```

[Browse All Components →](/ui/)

## What's Next?

Now that you understand the basics, explore these areas:

<div class="component-grid">
  <div class="component-card">
    <h3>📦 Installation</h3>
    <p>Detailed installation instructions for different environments and build tools.</p>
    <a href="/getting-started/installation">Setup Guide →</a>
  </div>

  <div class="component-card">
    <h3>🎨 Themes</h3>
    <p>Learn about the theming system and how to customize colors and appearance.</p>
    <a href="/getting-started/themes">Theming Guide →</a>
  </div>

  <div class="component-card">
    <h3>🧱 Components</h3>
    <p>Explore our comprehensive library of accessible UI components.</p>
    <a href="/ui/">Component Library →</a>
  </div>

  <div class="component-card">
    <h3>📐 Layout</h3>
    <p>Master the layout system with grids, flexbox, and container queries.</p>
    <a href="/getting-started/layout">Layout System →</a>
  </div>

  <div class="component-card">
    <h3>✨ Effects</h3>
    <p>Add polish with visual effects, animations, and transitions.</p>
    <a href="/effects/">Effects Library →</a>
  </div>

  <div class="component-card">
    <h3>🔧 Utilities</h3>
    <p>Speed up development with utility classes for common styling needs.</p>
    <a href="/getting-started/utilities">Utility Classes →</a>
  </div>
</div>

## Need Help?

- 📖 **Documentation**: Browse our comprehensive [documentation](/ui/)
- 🐛 **Issues**: Report bugs on [GitHub Issues](https://github.com/casoon/dragonfly/issues)
- 💬 **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/casoon/dragonfly/discussions)
- 🤝 **Contributing**: Check out our [contribution guidelines](https://github.com/casoon/dragonfly/blob/main/CONTRIBUTING.md)

## Browser Support

Dragonfly UI supports all modern browsers:

| Browser | Version |
|---------|---------|
| Chrome  | 88+     |
| Firefox | 89+     |
| Safari  | 14+     |
| Edge    | 88+     |

For older browsers, graceful fallbacks ensure your content remains accessible and functional.

::: tip Pro Tip
Start with the [Installation Guide](/getting-started/installation) to set up Dragonfly UI in your project, then explore the [Component Library](/ui/) to see what's available.
:::

::: warning Beta Notice
Dragonfly UI is currently in beta. While the core functionality is stable, the API may change before the 1.0 release. We recommend thorough testing before using in production.
:::

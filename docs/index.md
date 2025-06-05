---
layout: home
title: Dragonfly UI Library
hero:
  name: Smooth, swift, stylish
  text: as a dragonfly
  tagline: A flexible, accessible, and modern CSS framework for building beautiful user interfaces
  image:
    src: /img/dragonfly.svg
    alt: Dragonfly Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: View Components
      link: /ui/
features:
  - icon: ⚡
    title: Lightning Fast
    details: Optimized for performance with minimal bundle size and efficient CSS architecture.
  - icon: 🎯
    title: Developer Experience
    details: Intuitive API, comprehensive documentation, and excellent TypeScript support.
  - icon: 🧩
    title: Modular Design
    details: Import only what you need. Each component and utility can be used independently.
  - icon: ✨
    title: Modern Aesthetics
    details: Beautiful, contemporary design language with smooth animations and effects.
  - icon: 🌙
    title: Theme Support
    details: Built-in dark mode, multiple themes, and easy customization with CSS variables.
  - icon: ♿
    title: Accessibility First
    details: WCAG 2.1 compliant components with proper ARIA attributes and keyboard navigation.
---

<div class="version-info">
  <p>Current version: <strong>{{ $ui_lib_version }}</strong> <span class="beta-tag">BETA</span></p>
</div>

# Welcome to Dragonfly UI

Dragonfly UI is a modern, flexible CSS framework designed to help developers build beautiful, accessible, and responsive user interfaces with ease. Whether you're creating a simple website or a complex web application, Dragonfly UI provides the tools you need to create outstanding user experiences.

## Why Choose Dragonfly UI?

### 🚀 **Performance Focused**
Built with modern CSS features and optimized for Lightning CSS, Dragonfly UI delivers exceptional performance without sacrificing functionality.

### 📱 **Mobile First & Responsive**
Every component is designed mobile-first with responsive breakpoints and container queries for optimal display across all devices.

### 🎨 **Highly Customizable**
Extensive theming system with CSS custom properties, multiple built-in themes, and easy brand customization.

### 🛠️ **Developer Friendly**
Comprehensive documentation, TypeScript support, and excellent integration with modern frameworks like React, Vue, and Astro.

## Quick Start

Get up and running with Dragonfly UI in minutes:

```bash
# Install via npm
npm install @casoon/dragonfly

# Or via yarn
yarn add @casoon/dragonfly

# Or via pnpm
pnpm add @casoon/dragonfly
```

```css
/* Import the core styles */
@import '@casoon/dragonfly/core.css';

/* Add a theme */
@import '@casoon/dragonfly/themes/day.css';
```

```html
<!-- Start building with components -->
<div class="theme-day">
  <div class="container">
    <h1 class="text-3xl font-bold mb-4">Hello Dragonfly!</h1>
    <button class="button button--primary">Get Started</button>
  </div>
</div>
```

## What's Included

<div class="feature-grid">
  <div class="feature-card">
    <h3>🧱 Elements</h3>
    <p>Essential UI building blocks like buttons, inputs, badges, and form controls.</p>
    <a href="/ui/elements/" class="feature-link">Explore Elements →</a>
  </div>

  <div class="feature-card">
    <h3>🏗️ Components</h3>
    <p>Complex interactive components including modals, tables, navigation, and data displays.</p>
    <a href="/ui/components/" class="feature-link">View Components →</a>
  </div>

  <div class="feature-card">
    <h3>📐 Layout System</h3>
    <p>Flexible grid, flexbox, and container systems for responsive layouts.</p>
    <a href="/layout/" class="feature-link">Learn Layouts →</a>
  </div>

  <div class="feature-card">
    <h3>✨ Effects</h3>
    <p>Visual effects, animations, and transitions to enhance user experience.</p>
    <a href="/effects/" class="feature-link">Discover Effects →</a>
  </div>

  <div class="feature-card">
    <h3>🎨 Themes</h3>
    <p>Multiple built-in themes and comprehensive customization options.</p>
    <a href="/themes/" class="feature-link">Browse Themes →</a>
  </div>

  <div class="feature-card">
    <h3>🔧 Utilities</h3>
    <p>Utility classes for spacing, typography, colors, and responsive design.</p>
    <a href="/getting-started/utilities" class="feature-link">View Utilities →</a>
  </div>
</div>

## Framework Integration

Dragonfly UI works seamlessly with your favorite frameworks:

### React
```jsx
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/day.css';

function App() {
  return (
    <div className="theme-day">
      <button className="button button--primary">
        Click me!
      </button>
    </div>
  );
}
```

### Vue.js
```vue
<template>
  <div class="theme-day">
    <button class="button button--primary">
      Click me!
    </button>
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
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/day.css';
---

<div class="theme-day">
  <button class="button button--primary">
    Click me!
  </button>
</div>
```

## Architecture Highlights

### 🏗️ **Layer-Based CSS Architecture**
Dragonfly UI uses CSS `@layer` to ensure predictable specificity and easy customization:

```css
@layer reset, tokens, core, layout, typography,
       utilities, components, effects, themes;
```

### 🎯 **Container Queries**
Modern responsive design with container queries for component-based responsiveness:

```css
@container (min-width: 30rem) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

### 🎨 **Design Tokens**
Consistent design with CSS custom properties:

```css
:root {
  --color-primary: #e72779;
  --space-4: 1rem;
  --radius-md: 0.375rem;
}
```

## Browser Support

Dragonfly UI supports all modern browsers:

- **Chrome** 88+
- **Firefox** 89+
- **Safari** 14+
- **Edge** 88+

For older browsers, we provide graceful fallbacks to ensure your content remains accessible.

## Community & Support

### 🐛 **Found a Bug?**
Report issues on our [GitHub repository](https://github.com/casoon/dragonfly/issues).

### 💡 **Feature Requests**
We'd love to hear your ideas! Share them in our [discussions](https://github.com/casoon/dragonfly/discussions).

### 📖 **Documentation**
This documentation is open source. Help us improve it by [contributing](https://github.com/casoon/dragonfly-docs).

### 🤝 **Contributing**
Check out our [contribution guidelines](https://github.com/casoon/dragonfly/blob/main/CONTRIBUTING.md) to get started.

## What's Next?

::: tip Getting Started
Ready to dive in? Start with our [installation guide](/getting-started/installation) or explore our [component library](/ui/).
:::

::: info Beta Notice
Dragonfly UI is currently in beta. While the core functionality is stable, the API may change before the 1.0 release. We recommend using it in production only after thorough testing.
:::

<style scoped>
.version-info {
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 0.5rem;
}

.beta-tag {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  background-color: var(--vp-c-brand);
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  background: var(--vp-c-bg-soft);
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.feature-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.feature-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.feature-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

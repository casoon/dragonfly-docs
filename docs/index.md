---
layout: home
title: Dragonfly UI Library
hero:
  name: Dragonfly
  text: Modern UI Library
  tagline: A flexible, accessible, and modern CSS framework for building beautiful user interfaces
  image:
    src: /img/dragonfly.svg
    alt: Dragonfly Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: Components
      link: /ui/
features:
  - icon: ⚡
    title: Speed & Agility
    details: UI components that respond swiftly and intuitively.
  - icon: 🎯
    title: Precision & Clarity
    details: Precise interfaces crafted for clear user experiences.
  - icon: 🧩
    title: Modular Flexibility
    details: Modular elements designed to fit seamlessly.
  - icon: ✨
    title: Visual Elegance
    details: Beautiful interfaces that engage and inspire.
  - icon: 🔄
    title: Evolution & Growth
    details: Components built to adapt and evolve.
  - icon: 🚀
    title: Dragonfly Excellence
    details: UI excellence in motion.
---

<div class="version-badge">
  <p>Current version: {{ $ui_lib_version }} <span class="beta-tag">BETA</span></p>
</div>

<style>
.version-badge {
  margin: 2rem auto;
  text-align: center;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 0.5rem;
  max-width: 250px;
}

.beta-tag {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  background-color: var(--vp-c-brand);
  border-radius: 0.25rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}
</style>

# Dragonfly UI Library Documentation

Welcome to the official documentation for Dragonfly UI Library, a modern, flexible CSS framework for building beautiful user interfaces.

::: warning BETA STATUS
Dragonfly UI is currently in early beta development. The API and components may change significantly before the 1.0 release. Use with caution in production environments.
:::

## About

Dragonfly UI provides a comprehensive set of UI components and utilities to help you build modern web applications with ease. The library is designed with a focus on:

- **Modern Design**: Clean, contemporary aesthetics that follow current design trends
- **Flexibility**: Highly customizable through CSS variables and design tokens
- **Accessibility**: Built with WCAG guidelines in mind for inclusive user experiences
- **Performance**: Lightweight and optimized for production use

## Getting Started

The easiest way to get started with Dragonfly UI is to install it via npm:

```bash
npm install @casoon/dragonfly
```

Then import the main CSS file in your project:

```js
import '@casoon/dragonfly/dist/styles.css';
```

Visit the [Getting Started](/getting-started/) section for detailed installation and usage instructions.

## Key Features

### Component system

Dragonfly UI includes a wide range of UI components, from basic elements like buttons and inputs to complex components like data tables and modal dialogs. All components are designed to be:

- Responsive across devices and screen sizes
- Accessible with proper ARIA attributes
- Customizable through CSS variables
- Consistent in behavior and appearance

### Design system

The library is built on a robust design system with:

- [Design Tokens](/tokens/) for colors, spacing, typography, etc.
- [Layout system](/layout/) with flexible grid and container options
- [Typography](/typography/) with responsive text scaling
- [Effects](/effects/) for shadows, animations, and more

### Themeable

Easily switch between built-in themes or create your own:

- [Light Theme](/themes/day)
- [Dark Theme](/themes/night) 
- [High Contrast Theme](/themes/contrast)
- [Custom Themes](/themes/custom)

## Browser Support

Dragonfly UI is designed for modern browsers, with full support for:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

For details on browser compatibility and fallback strategies, see the [Compatibility](/compatibility/) section.

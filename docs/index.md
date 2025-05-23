---
title: Casoon UI Documentation
---

<script setup>
import { UI_LIB_VERSION } from './.vitepress/data/versions'
</script>

# Casoon UI Library

Welcome to the Casoon UI Library documentation. This library provides a modern, consistent, and modular design system for developing user-friendly and accessible interfaces.

## Current Version

The current version of the Casoon UI Library is `{{ UI_LIB_VERSION }}`.

## Note on Version 0.5.5

Version 0.5.5 includes minor optimizations and bug fixes. Please check the Release Notes for details on changes to the layer structure, animations, and utilities.

## Overview

The Casoon UI Library is a comprehensive CSS framework that offers a structured system of design tokens, components, effects, and utility classes. The library is framework-agnostic and can be used in any modern web application.

The main areas of the library are:

- **[Components](/components/)** - Over 35 reusable UI elements for various use cases
- **[Effects](/effects-system)** - Visual effects, animations, and state representations
- **[Design System](/guide/)** - A well-thought-out system for consistent design

## Key Features

- **Modular CSS** - Each component is implemented as a standalone CSS module
- **Responsive Design** - All components are fully responsive
- **Accessibility** - Optimized for screen readers and keyboard navigation
- **Customizable Themes** - Easily customizable design tokens for different brand identities
- **Structured Layers** - Organized CSS specificity through a modern layer system

## Getting Started

The quickest way to get started with Casoon UI:

```bash
npm install @casoon/ui-lib@latest
```

```css
@import "@casoon/ui-lib/core.css";
```

For detailed installation instructions, visit the [Installation Guide](/getting-started/installation).

## Content Overview

### Components

The Casoon UI Library offers an extensive collection of components for various UI requirements:

- **Base Components**: Button, Card, Avatar, Badge, Chip, Tooltip
- **Form Components**: Input, Select, Checkbox, Radio, Switch
- **Layout Components**: Grid, Container, Header, Footer, Sidebar
- **Feedback Components**: Alert, Toast, Modal, Notification, Progress

Explore the [complete component library](/components/).

### Effects

The effect system includes specialized visual effects and animations:

- **Visual Effects**: Neon, Glassmorphism, Shadows, 3D Transformations
- **Interactions**: Hover, Focus, Active, Ripple
- **States**: Success, Error, Warning, Loading, Disabled

Learn more in the [Effects System Guide](/effects-system).

### Design System

The design system is based on a structured approach with:

- **Layer System**: Controlled CSS specificity and organization
- **Design Tokens**: Consistent design variables for colors, spacing, etc.
- **Theming**: Flexible customization options for different visual styles

More details in the [Guide](/guide/).

## Support and Resources

- [GitHub Repository](https://github.com/casoon/ui-lib)
- [Troubleshooting](/getting-started/#troubleshooting)
- [FAQs](/getting-started/#faq)

## License

The Casoon UI Library is released under the MIT License.

## Using with AI Tools (Model Context Protocol – MCP)

To simplify development with casoon/ui-lib, your editor or AI tool (e.g., Cursor or Continue) can automatically load contextual information about the project – including code, structure, and documentation.

This uses the Model Context Protocol (MCP).

🔧 **Configuration (e.g., for Cursor)**
Add the following configuration to your cursor.config.json or settings.json:

```json
{
  "mcpServers": {
    "gitmcp-ui-lib": {
      "url": "https://gitmcp.io/casoon/ui-lib"
    },
    "gitmcp-ui-docs": {
      "url": "https://gitmcp.io/casoon/ui-docs"
    }
  }
}
```

📌 **Explanation**
- **gitmcp-ui-lib**: Provides structural information about the component library itself (source code, props, imports, etc.).
- **gitmcp-ui-docs**: Provides information from the accompanying VitePress documentation (e.g., examples, variants, slots).

✅ **Advantage**
With this configuration, an AI assistant can better understand your project and help more effectively with:

- Using components with the correct props
- Creating snippets based on real examples
- Understanding the architecture of your project

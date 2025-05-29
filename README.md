# Casoon Dragonfly UI Library v0.7.0

<div align="center">
    <img src="https://placeholder.pics/svg/200x200/DEDEDE/555555/casoon-ui" alt="Casoon UI Logo" width="200"/>
    <p>A modern CSS framework with a layer system, optimized for Lightning CSS</p>
</div>

## 🚀 Features

- **Layer-based architecture**: Precise control over CSS specificity
- **Optimized for Lightning CSS**: Full support for modern build tools
- **Container Queries**: Component-based responsiveness for modern layouts
- **Fluid Typography**: Support for `interpolate-size` for flexible sizing
- **Simple Integration**: A single import for the entire library
- **Modular and extensible**: Over 30 UI components
- **Comprehensive Themes**: Customizable Light/Dark modes and color schemes
- **Accessibility**: Optimized components with support for `prefers-reduced-motion`

## 📦 Installation

```bash
# npm
npm install @casoon/dragonfly@0.7.0

# yarn
yarn add @casoon/dragonfly@0.7.0

# pnpm
pnpm add @casoon/dragonfly@0.7.0
```

## 🔧 Usage

### Simple Integration (recommended)

With the current version, a single import is sufficient for the entire library:

```css
/* All necessary styles are loaded through this single import */
@import '@casoon/dragonfly@0.7.0/core.css';

/* Effects must be imported individually */
@import '@casoon/dragonfly/effects/glass.css';
@import '@casoon/dragonfly/effects/animations.css';
/* Import additional effects as needed */
```

The `core.css` automatically imports all necessary files in the optimal order.

### HTML Example

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="node_modules/@casoon/dragonfly/core.css">
    <title>Casoon UI Example</title>
</head>
<body>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to Casoon UI</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card">
                <div class="card__header">Example Card</div>
                <div class="card__body">
                    <p>This is a simple card with text.</p>
                    <button class="button button--primary mt-4">Action</button>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">Form Example</div>
                <div class="card__body">
                    <form class="form">
                        <div class="form-group">
                            <label for="name" class="form-label">Name</label>
                            <input id="name" type="text" class="input" placeholder="Enter name">
                        </div>
                        <button type="submit" class="button button--primary mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🏗️ Architecture

Casoon UI Library is based on a layer system that precisely controls CSS specificity and cascading:

```css
@layer reset,                /* Browser reset, normalization */
       tokens,               /* Design tokens and variables */
       core,                 /* Core functionalities */
       logical-properties,   /* Logical properties for bidirectionality */
       colors,               /* Color system */
       color-mix,            /* Color mixes and variations */
       layout,               /* Layout basics */
       layout-queries,       /* Responsive adaptations */
       typography,           /* Typography system */
       utilities,            /* Utility classes */
       smooth-scroll,        /* Scroll behavior */
       accessibility,        /* Accessibility */
       icons,                /* Icon system */
       components,           /* UI components */
       animations,           /* Motion system */
       effects,              /* Visual effects */
       themes;               /* Theming system */
```

## 📝 Documentation Structure

The documentation is organized according to the library's architecture:

- **Core**: Core systems and principles
- **Layout**: Grid, flexbox, and container systems
- **Tokens**: Design tokens for colors, typography, spacing, etc.
- **Typography**: Typography system and text formatting
- **UI**: Interactive UI elements and components
  - **Elements**: Basic UI building blocks (Button, Input, Checkbox, etc.)
  - **Components**: More complex UI structures (Card, Dialog, Drawer, etc.)
- **Themes**: Theming system and predefined themes
- **Icons**: Icon system and icon sets
- **Effects**: Visual effects and animations
- **Utilities**: Utility classes for quick styling

## 🛠️ Maintenance

For maintainers and contributors, the `maintenance` directory contains various resources:

- Documentation templates
- Component templates
- Progress tracking
- Todo lists
- Documentation workflow guidelines

## 🧩 Component System

Casoon UI offers a comprehensive collection of UI components designed for various use cases:

### Available Components

Here's a selection of the most important components:

```html
<!-- Button component with BEM convention -->
<button class="button button--primary">Primary Button</button>
<button class="button button--secondary">Secondary Button</button>

<!-- Card component -->
<div class="card">
    <div class="card__header">Card Title</div>
    <div class="card__body">Card Content</div>
    <div class="card__footer">Card Footer</div>
</div>

<!-- Form elements -->
<input class="input" type="text" placeholder="Enter text">
<textarea class="textarea" placeholder="Multi-line text"></textarea>
<select class="select">
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Alert -->
<div class="alert alert--success">
    <div class="alert__icon">✓</div>
    <div class="alert__content">Successfully saved!</div>
</div>

<!-- Progress indicator -->
<div class="progress">
    <div class="progress__bar" style="width: 75%"></div>
</div>
```

### Modular Import

Components can be imported individually if only specific ones are needed:

```css
/* Load only specific components */
@import '@casoon/dragonfly/ui/elements/button.css';
@import '@casoon/dragonfly/ui/components/card.css';
@import '@casoon/dragonfly/ui/elements/input.css';
```

## 🎨 Themes

Casoon UI supports a comprehensive theming system with predefined themes:

```html
<!-- Standard theme (light) -->
<body class="theme-day">
    <!-- Content in light mode -->
</body>

<!-- Dark theme -->
<body class="theme-night">
    <!-- Content in dark mode -->
</body>

<!-- Other themes -->
<body class="theme-ocean">
    <!-- Ocean theme -->
</body>
```

### Custom Themes

Themes can be easily customized:

```css
@import '@casoon/dragonfly/core.css';

/* Define your own theme */
@layer themes {
  .theme-custom {
    --color-primary: #8e44ad;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;
    
    /* Background and text colors */
    --color-background: #f5f5f5;
    --color-text: #333333;
    
    /* Component-specific variables */
    --button-radius: 4px;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
```

## 📄 Development

To start the development server:

```bash
npm run dev
```

This will launch the VitePress development server at http://localhost:5173/dragonfly-docs/.

## 🚀 Building for Production

```bash
npm run build
```

## 📚 Further Documentation

For more detailed information, refer to the [UPGRADE.md](UPGRADE.md) file for version upgrade information.

## 🖥️ Framework Integration

### React

```jsx
// In index.jsx or App.jsx
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/night.css';

function App() {
  return (
    <div className="theme-night">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Casoon UI in React</h1>
        <button className="button button--primary">Click me</button>
      </div>
    </div>
  );
}
```

### Vue.js

```vue
<!-- In App.vue -->
<template>
  <div class="theme-day">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Casoon UI in Vue</h1>
      <button class="button button--primary">Click me</button>
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
// In a .astro file
import '@casoon/dragonfly/core.css';
import '@casoon/dragonfly/themes/ocean.css';
---

<html>
  <body class="theme-ocean">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Casoon UI in Astro</h1>
      <button class="button button--primary">Click me</button>
    </div>
  </body>
</html>
```

## 🧰 Usage with AI Tools (Model Context Protocol – MCP)

To simplify development with casoon/ui-lib, your editor or AI tool (e.g., Cursor or Continue) can automatically load contextual information about the project – including code, structure, and documentation.

This is done using the Model Context Protocol (MCP).

### Configuration (e.g., for Cursor)

Add the following configuration to your tool's cursor.config.json or settings.json:

```json
{
  "mcpServers": {
    "gitmcp-ui-lib": {
      "url": "https://gitmcp.io/casoon/dragonfly"
    },
    "gitmcp-ui-docs": {
      "url": "https://gitmcp.io/casoon/dragonfly-docs"
    }
  }
}
```

### Explanation

- **gitmcp-ui-lib**: Provides structural information about the component library itself (source code, props, imports, etc.).
- **gitmcp-ui-docs**: Provides information from the accompanying VitePress documentation (e.g., examples, variants, slots).

### Advantage

With this configuration, an AI assistant can better understand your project and help you more specifically – such as:

- Using components with the correct props
- Creating snippets based on real examples
- Understanding the architecture of your project

## 📚 Documentation

The documentation for the Casoon UI Library is available at [https://casoon.github.io/dragonfly-docs/](https://casoon.github.io/dragonfly-docs/).

### Documentation Structure

The documentation is divided into the following main sections:

- **Getting Started**: Introduction, installation, and basic concepts
- **Components**: Detailed documentation of all UI components with interactive examples
- **Effects**: Visual effects and their application, organized into categories:
  - Visual Effects (3D, Filters, Shadows, Gradients, Glass Morphism, Patterns)
  - Animation Effects (Transitions, Animations)
  - Interaction Effects (Hover, Focus)
  - State Effects (Loading)
- **Examples**: Complex examples demonstrating the use of multiple components

Each component page provides:
- Basic usage with HTML examples
- Variants and customization options
- Interactive demos
- Best practices for accessibility and responsive design
- Framework integration (React, Vue)

## 📜 License

MIT 

## Note on Version 0.5.5

Version 0.5.5 brings minor optimizations and bug fixes. Please check the release notes for details on changes to the layer structure, animations, and utilities. 
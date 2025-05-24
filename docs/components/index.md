---
title: Components
category: Components
---

# Components Overview

The Casoon UI Library provides an extensive collection of modular components for various UI requirements. Each component is implemented as a standalone CSS module and is integrated through the central layer system.

## Using the Components

To use components from the Casoon UI Library, you need to import the core file, a theme, and each component you want to use individually:

```css
/* Required base files */
@import "@casoon/ui-lib/core.css";
@import "@casoon/ui-lib/themes/day.css";

/* Import individual components as needed */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/card.css";
@import "@casoon/ui-lib/components/alert.css";
```

The `core.css` file provides the foundation and base styles, but each component must be explicitly imported to be available in your project.

## Available Components

### Base Components

These fundamental components serve as building blocks for more complex interfaces:

- [Alert](/components/alert/) - Context-sensitive feedback messages
- [Avatar](/components/avatar/) - User profile images and representations
- [Badge](/components/badge/) - Small counters or status indicators
- [Button](/components/button/) - Interactive buttons for actions
- [Card](/components/card/) - Containers for related information
- [Chip](/components/chip/) - Compact, uniform elements for information
- [Code](/components/code/) - Display of code blocks and snippets
- [Spinner](/components/spinner/) - Loading animations
- [Tooltip](/components/tooltip/) - Additional information on hover

### Form Components

Components for creating interactive forms:

- [Checkbox](/components/checkbox/) - Multiple selection elements
- [File](/components/file/) - File upload elements
- [Form](/components/forms/) - Form containers and layout
- [Input](/components/input/) - Text input fields
- [Input Group](/components/input-group/) - Grouped input elements with add-ons
- [Radio](/components/radio/) - Single selection elements
- [Select](/components/select/) - Selection menus for options
- [Slider](/components/slider/) - Sliders for numeric values
- [Switch](/components/switch/) - On/off switches
- [Textarea](/components/textarea/) - Multi-line text fields

### Layout Components

Components for structural organization of content:

- [Footer](/components/footer/) - Footer component
- [Header](/components/header/) - Header component
- [Sidebar](/components/sidebar/) - Sidebar navigation
- [Table](/components/table/) - Table representation with enhanced functionality
- [Tabs](/components/tabs/) - Tab-based navigation

### Feedback Components

Components for user interaction and feedback:

- [Modal](/components/modal/) - Dialog windows for focused content
- [Notification](/components/notification/) - Notifications
- [Progress](/components/progress/) - Progress indicators
- [Skeleton](/components/skeleton/) - Loading placeholders
- [Toast](/components/toast/) - Temporary notifications

### Advanced Components

Specialized components for more complex requirements:

- [Blog](/components/blog/) - Blog post layout and styles
- [Hamburger](/components/hamburger/) - Mobile menu toggle buttons
- [Widget](/components/widget/) - Reusable content containers
- [Wizard](/components/wizard/) - Multi-step process control

## Customizing Components

The Casoon UI Library is designed for easy customization. There are several ways to adapt components to your specific design needs:

### Using CSS Variables

The most straightforward way to customize components is by overriding CSS variables:

```css
:root {
  /* Colors */
  --color-primary: #4f46e5;
  --color-secondary: #64748b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Component-specific */
  --button-border-radius: 0.375rem;
  --card-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Using the Layer System

For more advanced customizations, you can use the CSS Cascade Layer system:

```css
@import "@casoon/ui-lib/core.css";

/* Customize specific components */
@layer components {
  /* Custom button variant */
  .button.custom {
    background-color: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 9999px;
    padding: 0.75rem 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);
  }
  
  /* Custom card variant */
  .card.custom {
    border-radius: 1rem;
    border: none;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
}
```

### Creating Component Variants

You can extend existing components by creating custom variants:

```css
@layer components {
  /* Ghost button with hover effect */
  .button.ghost {
    background-color: transparent;
    border: 1px solid transparent;
    color: var(--color-primary);
  }
  
  .button.ghost:hover {
    background-color: rgba(var(--color-primary-rgb), 0.1);
    border-color: var(--color-primary);
  }
  
  /* Floating card */
  .card.floating {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card.floating:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
}
```

### Theme Integration

Components automatically adapt to the active theme:

```html
<body class="theme-night">
  <!-- Components will use the night theme colors -->
</body>
```

## Best Practices

- **Combine components** - Use components together for complex UIs
- **Utilize design tokens** - Use predefined variables for consistent design
- **Consider accessibility** - Pay attention to semantic use of components
- **Mobile-first approach** - Start with mobile design and expand for larger screens
- **Mind layer specificity** - Consider the hierarchy of the layer system when making customizations

## Usage Examples

### Button

```html
<button class="button">Click me</button>
<button class="button primary">Primary</button>
<button class="button outline">Outline</button>
```

[Go to Button documentation](/components/button/)

### Input

```html
<input type="text" class="input" placeholder="Enter text">
<input type="text" class="input error" value="Error input">
```

[Go to Input documentation](/components/input/)

### Input Group

```html
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input class="input" type="text" placeholder="Username">
</div>
```

[Go to Input Group documentation](/components/input-group/)

### Textarea

```html
<textarea class="textarea" rows="4" placeholder="Enter description"></textarea>
```

[Go to Textarea documentation](/components/textarea/)

### Select

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

[Go to Select documentation](/components/select/)

### Checkbox

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Select option</span>
</label>
```

[Go to Checkbox documentation](/components/checkbox/)

### Radio

```html
<label class="radio">
  <input type="radio" name="option">
  <span>Option A</span>
</label>
```

[Go to Radio documentation](/components/radio/)

### Switch

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
```

[Go to Switch documentation](/components/switch/)

### File Input

```html
<label class="file">
  <input type="file">
  <span class="file-label">Select file</span>
</label>
```

[Go to File documentation](/components/file/)

### Modal

```html
<div class="modal">
  <div class="modal-content">
    <h2 class="modal-title">Modal Title</h2>
    <p class="modal-body">Modal Content</p>
    <button class="button primary">Close</button>
  </div>
</div>
```

[Go to Modal documentation](/components/modal/)

### Alert

```html
<div class="alert info">
  <span>Important Information</span>
</div>
```

[Go to Alert documentation](/components/alert/)

### Toast

```html
<div class="toast success">
  <span>Action successful</span>
</div>
```

[Go to Toast documentation](/components/toast/)

### Notification

```html
<div class="notification">
  <h4 class="title">New feature available</h4>
  <p class="content">Discover our latest features...</p>
  <div class="actions">
    <button class="button small">Explore</button>
    <button class="button small outline">Later</button>
  </div>
</div>
```

[Go to Notification documentation](/components/notification/)

### Progress

```html
<div class="progress">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

[Go to Progress documentation](/components/progress/)

### Spinner

```html
<div class="spinner"></div>
```

[Go to Spinner documentation](/components/spinner/)

### Skeleton

```html
<div class="skeleton text"></div>
<div class="skeleton circle"></div>
<div class="skeleton rect"></div>
```

[Go to Skeleton documentation](/components/skeleton/)

### Table

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>34</td>
      <td>London</td>
    </tr>
  </tbody>
</table>
```

[Go to Table documentation](/components/table/)

### Card

```html
<div class="card">
  <div class="card-header">
    <h3>Product Title</h3>
  </div>
  <div class="card-body">
    <p>Product description and details...</p>
  </div>
  <div class="card-footer">
    <button class="button primary">Buy</button>
  </div>
</div>
```

[Go to Card documentation](/components/card/)

### Badge

```html
<span class="badge">New</span>
<span class="badge warning">10</span>
```

[Go to Badge documentation](/components/badge/)

### Avatar

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Avatar">
</div>
```

[Go to Avatar documentation](/components/avatar/)

### Chip

```html
<span class="chip">Standard Chip</span>
<span class="chip primary">Primary</span>
<span class="chip dismissible">
  With Close
  <button class="close"></button>
</span>
```

[Go to Chip documentation](/components/chip/)

### Tooltip

```html
<div class="tooltip">
  Hover me
  <span class="tooltip-content">Tooltip Text</span>
</div>
```

[Go to Tooltip documentation](/components/tooltip/)

### Widget

```html
<div class="widget">
  <div class="header">Widget Title</div>
  <div class="body">Widget Content</div>
</div>
```

[Go to Widget documentation](/components/widget/)

### Wizard

```html
<div class="wizard">
  <div class="step active">
    <div class="indicator">1</div>
    <div class="title">Step 1</div>
  </div>
  <div class="step">
    <div class="indicator">2</div>
    <div class="title">Step 2</div>
  </div>
  <div class="step">
    <div class="indicator">3</div>
    <div class="title">Step 3</div>
  </div>
</div>
```

[Go to Wizard documentation](/components/wizard/)

### Blog

```html
<article class="blog-post">
  <header class="header">
    <h2 class="title">Blog Title</h2>
    <div class="meta">Published on 01/01/2023</div>
  </header>
  <div class="content">
    <p>Blog Content</p>
  </div>
  <footer class="footer">
    <div class="tags">
      <span class="tag">CSS</span>
      <span class="tag">Web</span>
    </div>
  </footer>
</article>
```

[Go to Blog documentation](/components/blog/)

## Best Practices

### Accessibility

- Use semantic HTML elements
- Ensure sufficient contrast
- Implement keyboard navigation
- Add ARIA attributes
- Test with screen readers

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt components for mobile devices
- Use Flexbox for flexible layouts
- Apply Media Queries for specific adjustments

### Performance

- Load only required components
- Use browser caching
- Optimize assets for fast loading times
- Minify CSS files
- Avoid excessive nesting

## Integration

The Casoon UI Library can be easily integrated into various frameworks:

### React

```jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

function App() {
  return (
    <button className="button primary">
      Primary Button
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="button primary">
    Primary Button
  </button>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

export default {
  name: 'App'
}
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/components/button.css">
</head>
<body class="theme-day">
  <button class="button primary">
    Primary Button
  </button>
</body>
</html>
```

## Theme Activation

To activate a theme, add the corresponding class to the `<html>` or `<body>` element:

```html
<body class="theme-night">
  <!-- Your content -->
</body>
```

Available Themes:
- `theme-day` - Light Theme
- `theme-night` - Dark Theme
- `theme-spring` - Spring Theme
- `theme-summer` - Summer Theme
- `theme-autumn` - Autumn Theme
- `theme-winter` - Winter Theme
- `theme-forest` - Forest Theme
- `theme-ocean` - Ocean Theme
- `theme-pastel` - Pastel Theme
- `theme-neon` - Neon Theme
- `theme-retro` - Retro Theme
- `theme-monochrome` - Monochrome Theme
- `theme-sunset` - Sunset Theme 
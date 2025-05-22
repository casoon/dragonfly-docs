---
title: Components
category: Components
---

# Components Overview

The Casoon UI Library provides an extensive collection of modular components for various UI requirements. Each component is implemented as a standalone CSS module and is integrated through the central layer system.

## Using the Components

All components become available automatically by including the `core.css` file:

```css
@import "@casoon/ui-lib/core.css";
```

The component modules are organized in the `modules.css` file and defined in separate layers:

```css
/* Alert Module */
@import url('./modules/alert.module.css') layer(module-alert);

/* Avatar Module */
@import url('./modules/avatar.module.css') layer(module-avatar);

/* Additional modules... */
```

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

All components can be customized via CSS variables and the layer system:

```css
/* Custom CSS file */
@import "@casoon/ui-lib/core.css";

/* Component customization */
@layer module-button {
  .btn.custom {
    background-color: var(--color-brand);
    border-radius: var(--radius-lg);
  }
}
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
  <span class="input-group__prefix">@</span>
  <input class="input" type="text" placeholder="Username">
</div>
```

Module: `input-group.module.css`

### Textarea

```html
<textarea class="casoon-textarea" rows="4" placeholder="Enter description"></textarea>
```

[Go to Textarea documentation](/components/textarea/)

### Select

```html
<select class="casoon-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

[Go to Select documentation](/components/select/)

### Checkbox

```html
<label class="casoon-checkbox">
  <input type="checkbox">
  <span>Select option</span>
</label>
```

[Go to Checkbox documentation](/components/checkbox/)

### Radio

```html
<label class="casoon-radio">
  <input type="radio" name="option">
  <span>Option A</span>
</label>
```

[Go to Radio documentation](/components/radio/)

### Switch

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch__slider"></span>
</label>
```

Module: `switch.module.css`

### File Input

```html
<label class="file">
  <input type="file">
  <span class="file__label">Select file</span>
</label>
```

Module: `file.module.css`

### Modal

```html
<div class="modal">
  <div class="modal__content">
    <h2 class="modal__title">Modal Title</h2>
    <p class="modal__body">Modal Content</p>
    <button class="button primary">Close</button>
  </div>
</div>
```

Module: `modal.module.css`

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
  <h4>New feature available</h4>
  <p>Discover our latest features...</p>
  <div class="notification__actions">
    <button class="casoon-button casoon-button--small">Explore</button>
    <button class="casoon-button casoon-button--text casoon-button--small">Later</button>
  </div>
</div>
```

[Go to Notification documentation](/components/notification/)

### Progress

```html
<div class="progress">
  <div class="progress__bar" style="width: 75%"></div>
</div>
```

Module: `progress.module.css`

### Spinner

```html
<div class="spinner"></div>
```

Module: `spinner.module.css`

### Skeleton

```html
<div class="skeleton skeleton--text"></div>
<div class="skeleton skeleton--circle"></div>
<div class="skeleton skeleton--rectangle"></div>
```

Module: `skeleton.module.css`

### Table

```html
<table class="casoon-table">
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
<div class="casoon-card">
  <div class="casoon-card__header">
    <h3>Product Title</h3>
  </div>
  <div class="casoon-card__body">
    <p>Product description and details...</p>
  </div>
  <div class="casoon-card__footer">
    <button class="casoon-button casoon-button--primary">Buy</button>
  </div>
</div>
```

[Go to Card documentation](/components/card/)

### Slider

```html
<div class="slider">
  <div class="slider__item">Slide 1</div>
  <div class="slider__item">Slide 2</div>
  <div class="slider__item">Slide 3</div>
</div>
```

Module: `slider.module.css`

### Badge

```html
<span class="casoon-badge">New</span>
<span class="casoon-badge casoon-badge--warning">10</span>
```

[Go to Badge documentation](/components/badge/)

### Avatar

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Avatar">
</div>
```

Module: `avatar.module.css`

### Chip

```html
<span class="casoon-chip">Standard Chip</span>
<span class="casoon-chip casoon-chip--primary">Primary</span>
<span class="casoon-chip casoon-chip--dismissible">
  With Close
  <button class="casoon-chip__close"></button>
</span>
```

[Go to Chip documentation](/components/chip/)

### Tooltip

```html
<div class="tooltip">
  Hover me
  <span class="tooltip__content">Tooltip Text</span>
</div>
```

Module: `tooltip.module.css`

### Widget

```html
<div class="widget">
  <div class="widget__header">Widget Title</div>
  <div class="widget__body">Widget Content</div>
</div>
```

Module: `widget.module.css`

### Wizard

```html
<div class="wizard">
  <div class="wizard__step wizard__step--active">
    <div class="wizard__indicator">1</div>
    <div class="wizard__label">Step 1</div>
  </div>
  <div class="wizard__step">
    <div class="wizard__indicator">2</div>
    <div class="wizard__label">Step 2</div>
  </div>
  <div class="wizard__step">
    <div class="wizard__indicator">3</div>
    <div class="wizard__label">Step 3</div>
  </div>
</div>
```

Module: `wizard.module.css`

### Blog

```html
<article class="blog">
  <header class="blog__header">
    <h2 class="blog__title">Blog Title</h2>
    <div class="blog__meta">Published on 01/01/2023</div>
  </header>
  <div class="blog__body">
    <p>Blog Content</p>
  </div>
  <footer class="blog__footer">
    <div class="blog__tags">
      <span class="blog__tag">CSS</span>
      <span class="blog__tag">Web</span>
    </div>
  </footer>
</article>
```

Module: `blog.module.css`

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

- Load only required modules
- Use browser caching
- Optimize assets for fast loading times
- Minify CSS files
- Avoid excessive nesting

## Integration

The Casoon UI Library can be easily integrated into various frameworks:

### React

```jsx
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

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
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

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
  <link rel="stylesheet" href="path/to/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/modules/button.module.css">
</head>
<body class="theme-day">
  <button class="button primary">
    Primary Button
  </button>
</body>
</html>
```

## Theme-Aktivierung

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
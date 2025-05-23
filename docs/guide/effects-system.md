---
title: Effects System
category: Guide
---

# Effects System

The Casoon UI Effects System provides a comprehensive collection of CSS effects that enhance your user interface, giving it depth, movement, and visual appeal.

## Overview

The Effects System is modularly structured and divided into different categories, each covering a specific aspect of visual design. Each module can be imported independently to include only the effects needed in your project.

## Effect Categories

### Visual Effects

Visual effects enhance the appearance of UI elements through various graphic techniques:

- [3D Effects](./effects/3d.md) - Transformations and perspective effects
- [Filter Effects](./effects/filters.md) - Blur, brightness, contrast, and other visual filters
- [Shadow Effects](./effects/shadows.md) - Realistic and stylized shadows for depth
- [Gradient Effects](./effects/gradient.md) - Color gradients and transitions
- [Patterns & Textures](./effects/patterns.md) - Background patterns and surface textures

### Interaction Effects

Interaction effects enhance the user experience through visual feedback during user interactions:

- [Hover Effects](./effects/interaction/hover.md) - Effects when hovering with the mouse
- [Focus Effects](./effects/interaction/focus.md) - Effects for focused elements

### State Effects

State effects visualize various states of UI components:

- [Loading Effects](./effects/state/loading.md) - Animations for loading states

## Installation and Usage

You can import the entire Effects System or individual modules:

### Complete Effects System

```css
@import '@casoon/ui-lib/effects/index.css';
```

### Individual Modules

```css
/* Import only 3D effects */
@import '@casoon/ui-lib/effects/3d.css';

/* Import only shadow effects */
@import '@casoon/ui-lib/effects/shadows.css';

/* Import only hover effects */
@import '@casoon/ui-lib/effects/interaction/hover.css';
```

## Performance Optimization

The Effects System is designed for optimal performance:

1. **Modular Structure**: Import only the effects you need
2. **CSS Variables**: Easy customization without additional code
3. **Reduced Motion**: Respects the user setting `prefers-reduced-motion`
4. **Hardware Acceleration**: Uses `will-change` and `transform` for optimized animations

## Accessibility

The Effects System considers accessibility through:

1. **Reduced Motion**: Alternative styles for users who prefer reduced motion
2. **Sufficient Contrast**: Ensuring that effects do not compromise contrast
3. **Focus Indicators**: Clear visual cues for keyboard navigation

## Customization

All effects can be customized via CSS variables:

```css
:root {
  /* Shadow variables */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  
  /* 3D effect variables */
  --perspective-depth: 1000px;
  --rotate-x-deg: 45deg;
  
  /* Filter variables */
  --filter-blur: 4px;
  --filter-brightness: 1.2;
  
  /* Gradient variables */
  --gradient-angle: 180deg;
  --gradient-start: var(--color-primary-300);
  --gradient-end: var(--color-primary-700);
}
```

## Browser Support

The Effects System supports all modern browsers. For older browsers, fallback styles are provided to ensure a consistent appearance.

## Examples

### Combining Different Effects

```html
<div class="card shadow-lg">
  <div class="card-header gradient gradient-color-primary">
    <h3 class="gradient-text">Effects Example</h3>
  </div>
  <div class="card-body">
    <p>This example combines different effects:</p>
    <ul>
      <li>Shadow effects for the card</li>
      <li>Gradient effects for the header</li>
      <li>Text gradients for the heading</li>
    </ul>
    <button class="button shadow-hover filter-hover">
      Interactive Button
    </button>
  </div>
</div>

<style>
  .card {
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: white;
    max-width: 400px;
  }
  
  .card-header {
    padding: 1.5rem;
    color: white;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    transition: all 0.2s ease;
    margin-top: 1rem;
  }
</style>
```

## Next Steps

Explore the individual effect modules for detailed information on available classes and customization options:

- [3D Effects](./effects/3d.md)
- [Filter Effects](./effects/filters.md)
- [Shadow Effects](./effects/shadows.md)
- [Gradient Effects](./effects/gradient.md)
- [Patterns & Textures](./effects/patterns.md)
- [Hover Effects](./effects/interaction/hover.md)
- [Focus Effects](./effects/interaction/focus.md)
- [Loading Effects](./effects/state/loading.md) 
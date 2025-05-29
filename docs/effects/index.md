---
title: Effects system
category: Guide
---

# Effects system

The Casoon UI Effects system provides a comprehensive collection of CSS effects that enhance your user interface, giving it depth, movement, and visual appeal.

## Overview

The Effects system is modularly structured and divided into different categories, each covering a specific aspect of visual design. Each modules can be imported independently to include only the effects needed in your project.

## Effect Categories

### Visual Effects

Visual effects enhance the appearance of UI elements through various graphic techniques:

- [3D Effects](/effects/3d) - Transformations and perspective effects
- [Filter Effects](/effects/filters) - Blur, brightness, contrast, and other visual filters
- [Shadow Effects](/effects/shadows) - Realistic and stylized shadows for depth
- [Gradient Effects](/effects/gradient) - Color gradients and transitions
- [Glass Morphism](/effects/glass) - Frosted glass and transparency effects
- [Patterns & Textures](/effects/patterns) - Background patterns and surface textures
- [Neon Effects](/effects/neon) - Glowing and neon-styled elements

### Animation Effects

Animation effects add movement and transitions to your interface:

- [Transitions](/effects/transitions) - Smooth state changes
- [Animations](/effects/animations) - Keyframe-based motion

### Interaction Effects

Interaction effects enhance the user experience through visual feedback during user interactions:

- [Hover Effects](/effects/interaction/hover) - Effects when hovering with the mouse
- [Focus Effects](/effects/interaction/focus) - Effects for focused elements

### State Effects

State effects visualize various states of UI components:

- [Loading Effects](/effects/state/loading) - Animations for loading states

## Installation and Usage

You can import the entire Effects system or individual modules:

### Complete Effects system

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

The Effects system is designed for optimal performance:

1. **Modular Structure**: Import only the effects you need
2. **CSS Variables**: Easy customization without additional code
3. **Reduced Motion**: Respects the user setting `prefers-reduced-motion`
4. **Hardware Acceleration**: Uses `will-change` and `transform` for optimized animations

## Accessibility

The Effects system considers accessibility through:

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

The Effects system supports all modern browsers. For older browsers, fallback styles are provided to ensure a consistent appearance.

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

- [3D Effects](/effects/3d)
- [Filter Effects](/effects/filters)
- [Shadow Effects](/effects/shadows)
- [Gradient Effects](/effects/gradient)
- [Glass Morphism](/effects/glass)
- [Patterns & Textures](/effects/patterns)
- [Neon Effects](/effects/neon)
- [Transitions](/effects/transitions)
- [Animations](/effects/animations)
- [Hover Effects](/effects/interaction/hover)
- [Focus Effects](/effects/interaction/focus)
- [Loading Effects](/effects/state/loading) 
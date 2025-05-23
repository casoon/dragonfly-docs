---
title: Glass Effects
category: Guide
---

# Glass Effects

The `glass.css` file provides modern glassmorphism effects for your user interface. These effects create semi-transparent, blurred surfaces with subtle borders and shading that align with current design trends.

## Overview

Glassmorphism is a design style that uses semi-transparent elements with background blur and subtle borders to create a "looking through glass" effect. The Casoon UI Library offers a comprehensive collection of glass effects for various UI components.

## Basic Glass Effects

```html
<!-- Standard glass effect -->
<div class="glass">Standard glass effect</div>

<!-- Glass effect variants (intensity) -->
<div class="glass-sm">Subtle glass effect</div>
<div class="glass-md">Standard glass effect</div>
<div class="glass-lg">Strong glass effect</div>
```

## Color Variants

The glass effects can be combined with various color accents:

```html
<!-- Colored glass effects -->
<div class="glass glass-primary">Primary color glass effect</div>
<div class="glass glass-secondary">Secondary color glass effect</div>
<div class="glass glass-accent">Accent color glass effect</div>
<div class="glass glass-success">Success glass effect</div>
<div class="glass glass-warning">Warning glass effect</div>
<div class="glass glass-error">Error glass effect</div>
<div class="glass glass-info">Info glass effect</div>
```

## Interactive Glass Effects

Glass effects can also be applied to interactive elements and based on states:

```html
<!-- Hover-activated glass effect -->
<div class="glass-hover">Becomes glass on hover</div>

<!-- Focus-activated glass effect -->
<div class="glass-focus">Becomes glass on focus</div>

<!-- Active state glass effect -->
<button class="glass-active">Becomes glass when activated</button>

<!-- Combined states -->
<button class="glass-interactive">Responds to all interactions</button>
```

## Component-specific Glass Effects

For commonly used UI components, there are specialized glass effect classes:

```html
<!-- Glass card -->
<div class="card glass-card">
  <div class="card-header">Glass card header</div>
  <div class="card-body">Glass card content</div>
  <div class="card-footer">Glass card footer</div>
</div>

<!-- Glass navigation -->
<nav class="nav glass-nav">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">About us</a>
  <a href="#" class="nav-item">Contact</a>
</nav>

<!-- Glass form elements -->
<input type="text" class="glass-input" placeholder="Glass input field">
<button class="glass-button">Glass button</button>
```

## Positioning Variants

For various layout requirements:

```html
<!-- Fixed glass header -->
<header class="glass-header">
  Stays fixed at the top when scrolling with glass effect
</header>

<!-- Fixed glass sidebar -->
<aside class="glass-sidebar">
  Side navigation with glass effect
</aside>

<!-- Overlay with glass effect -->
<div class="glass-overlay">
  Full-screen overlay with glass effect
</div>
```

## Combinations with Other Effects

Glass effects can be combined with other effects to create more complex visual experiences:

```html
<!-- Glass with neon border -->
<div class="glass neon-border">
  Glass effect with neon border
</div>

<!-- Glass with enhanced shadow -->
<div class="glass shadow-lg">
  Glass effect with enhanced shadow
</div>

<!-- Animated glass -->
<div class="glass fade-in">
  Fading in glass element
</div>

<!-- Interactive glass with hover effect -->
<div class="glass hover-lift">
  Glass effect that lifts on hover
</div>
```

## Customization via CSS Variables

The glass effect can be customized via CSS variables:

```css
:root {
  /* Basic glass effect */
  --glass-opacity: 0.1;
  --glass-blur: 10px;
  --glass-saturation: 180%;
  --glass-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  
  /* Glass background */
  --glass-background: rgb(255 255 255 / var(--glass-opacity));
  
  /* Glass border */
  --glass-border-width: 1px;
  --glass-border-style: solid;
  --glass-border-color: rgb(255 255 255 / 0.2);
  --glass-border-radius: var(--radius-md, 8px);
  
  /* Glass shadow */
  --glass-shadow-color: rgb(0 0 0 / 0.05);
  --glass-shadow: 0 8px 32px 0 var(--glass-shadow-color);
  
  /* Colored glass variants */
  --glass-color-primary: color-mix(in srgb, var(--color-primary) 15%, transparent);
  --glass-color-secondary: color-mix(in srgb, var(--color-secondary) 15%, transparent);
  --glass-color-accent: color-mix(in srgb, var(--color-accent) 15%, transparent);
  --glass-color-success: color-mix(in srgb, var(--color-success) 15%, transparent);
  --glass-color-warning: color-mix(in srgb, var(--color-warning) 15%, transparent);
  --glass-color-error: color-mix(in srgb, var(--color-error) 15%, transparent);
  --glass-color-info: color-mix(in srgb, var(--color-info) 15%, transparent);
}
```

## Variant-specific Customizations

```css
/* Intensity variants */
.glass-sm {
  --glass-opacity: 0.05;
  --glass-blur: 5px;
  --glass-shadow: 0 4px 16px 0 var(--glass-shadow-color);
}

.glass-lg {
  --glass-opacity: 0.15;
  --glass-blur: 20px;
  --glass-shadow: 0 12px 48px 0 var(--glass-shadow-color);
}
```

## Dark Mode Adaptation

The glass effects automatically adapt to dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --glass-background: rgb(0 0 0 / var(--glass-opacity));
    --glass-border-color: rgb(255 255 255 / 0.1);
    --glass-shadow-color: rgb(0 0 0 / 0.2);
  }
}
```

## Fallback for Browsers Without Backdrop-Filter

For browsers that don't support `backdrop-filter`, a fallback is provided:

```css
@supports not (backdrop-filter: blur(1px)) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.85;
    --glass-background: rgb(255 255 255 / var(--glass-opacity));
  }
  
  @media (prefers-color-scheme: dark) {
    .glass,
    .glass-sm,
    .glass-md,
    .glass-lg {
      --glass-background: rgb(30 30 30 / var(--glass-opacity));
    }
  }
}
```

## Accessibility

The glass effect can affect readability. Consider the following aspects:

1. **Sufficient contrast**: Ensure that text on glass effects has sufficient contrast
2. **High contrast mode**: Adapt the effect to high contrast mode
3. **Reduced transparency**: Consider the system setting for reduced transparency

```css
@media (prefers-contrast: more) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.95;
    --glass-blur: 0;
    backdrop-filter: none;
    border: 2px solid currentColor;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.95;
    backdrop-filter: none;
  }
}
```

## Example Applications

### Glass Card Component

```html
<div class="card glass-card">
  <div class="card-header">Glass Card</div>
  <div class="card-body">
    <p>This card uses the glass effect to create a modern, translucent appearance.</p>
    <button class="button glass-button">Learn More</button>
  </div>
</div>
```

### Glass Navigation Bar

```html
<nav class="navbar glass-nav">
  <div class="navbar-brand">Logo</div>
  <div class="navbar-menu">
    <a href="#" class="navbar-item">Home</a>
    <a href="#" class="navbar-item">Features</a>
    <a href="#" class="navbar-item">Pricing</a>
    <a href="#" class="navbar-item">About</a>
  </div>
  <div class="navbar-end">
    <button class="button glass-button">Sign Up</button>
  </div>
</nav>
```

### Modal with Glass Effect

```html
<div class="modal-overlay">
  <div class="modal glass-modal">
    <div class="modal-header">
      <h2>Welcome</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>This modal uses the glass effect to blend with the background.</p>
    </div>
    <div class="modal-footer">
      <button class="button glass-button primary">Accept</button>
      <button class="button glass-button">Cancel</button>
    </div>
  </div>
</div>
```

## Browser Support

The glassmorphism effect is supported in all modern browsers that support the CSS `backdrop-filter` property:

- Chrome 76+
- Firefox 70+ (enabled via flag)
- Safari 9+
- Edge 17+

For older browsers, the fallback styles ensure a degraded but still functional appearance. 
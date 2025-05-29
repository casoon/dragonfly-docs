---
title: Glass Effect
outline: deep
---

# Glass Effect

The Glass Effect creates a frosted glass appearance with a translucent background that blurs elements behind it. This modern UI effect is commonly used for cards, modals, and overlays to create depth and focus.

## Installation

The Glass Effect is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all effects */
@import '@casoon/ui-lib/effects.css';

/* Or just the glass effect */
@import '@casoon/ui-lib/effects/visual/glass.css';
```

## Basic Usage

Apply the glass effect to any element using the `.glass` class:

```html
<div class="glass">
  This element has a glass effect
</div>
```

<div class="example-wrapper" style="background-image: url('https://via.placeholder.com/800x400'); background-size: cover; padding: 2rem;">
  <div class="glass" style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2);">
    This element has a glass effect
  </div>
</div>

## Variants

### Intensity Levels

The glass effect comes in different intensity levels:

```html
<div class="glass-light">Light glass effect</div>
<div class="glass">Default glass effect</div>
<div class="glass-strong">Strong glass effect</div>
```

<div class="example-wrapper" style="background-image: url('https://via.placeholder.com/800x400'); background-size: cover; padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(5px); background-color: rgba(255, 255, 255, 0.1);">
    Light glass effect
  </div>
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2);">
    Default glass effect
  </div>
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(15px); background-color: rgba(255, 255, 255, 0.3);">
    Strong glass effect
  </div>
</div>

### Color Variations

Glass effects can be combined with color variations:

```html
<div class="glass glass-primary">Primary glass</div>
<div class="glass glass-success">Success glass</div>
<div class="glass glass-danger">Danger glass</div>
```

<div class="example-wrapper" style="background-image: url('https://via.placeholder.com/800x400'); background-size: cover; padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(59, 130, 246, 0.2);">
    Primary glass
  </div>
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(34, 197, 94, 0.2);">
    Success glass
  </div>
  <div style="padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(239, 68, 68, 0.2);">
    Danger glass
  </div>
</div>

## Usage Examples

### Card with Glass Effect

Create a card with a glass effect overlay:

```html
<div class="card glass-card">
  <div class="card__content glass">
    <h3>Glass Card Title</h3>
    <p>This is a card with a glass effect applied.</p>
  </div>
</div>
```

<div class="example-wrapper" style="background-image: url('https://via.placeholder.com/800x400'); background-size: cover; padding: 2rem;">
  <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);">
    <div style="padding: 1.5rem; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2);">
      <h3 style="margin-top: 0; color: #fff;">Glass Card Title</h3>
      <p style="color: #fff;">This is a card with a glass effect applied.</p>
    </div>
  </div>
</div>

### Navigation Bar with Glass Effect

Create a modern navigation bar with a glass effect:

```html
<nav class="navbar glass">
  <div class="navbar__brand">Brand</div>
  <div class="navbar__links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
```

<div class="example-wrapper" style="background-image: url('https://via.placeholder.com/800x400'); background-size: cover; padding: 2rem;">
  <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; border-radius: 8px; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2);">
    <div style="font-weight: bold; color: #fff;">Brand</div>
    <div style="display: flex; gap: 1.5rem;">
      <a href="#" style="color: #fff; text-decoration: none;">Home</a>
      <a href="#" style="color: #fff; text-decoration: none;">About</a>
      <a href="#" style="color: #fff; text-decoration: none;">Contact</a>
    </div>
  </nav>
</div>

## Customization

The Glass Effect can be customized using CSS variables:

```css
:root {
  --glass-blur: 10px;
  --glass-opacity: 0.2;
  --glass-border-opacity: 0.3;
  --glass-border-width: 1px;
  --glass-border-color: rgba(255, 255, 255, var(--glass-border-opacity));
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  --glass-background: rgba(255, 255, 255, var(--glass-opacity));
  --glass-primary-background: rgba(59, 130, 246, var(--glass-opacity));
  --glass-success-background: rgba(34, 197, 94, var(--glass-opacity));
  --glass-danger-background: rgba(239, 68, 68, var(--glass-opacity));
}
```

## Performance Considerations

- The glass effect relies on the CSS `backdrop-filter` property, which can be performance-intensive
- Use glass effects sparingly, especially on mobile devices
- Consider providing fallbacks for browsers that don't support `backdrop-filter`
- Test performance on lower-end devices to ensure a smooth user experience

## Browser Compatibility

The Glass Effect relies on the CSS `backdrop-filter` property:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| backdrop-filter | 76+ | 70+ | 9+ | 17+ |
| Fallback support | ✅ | ✅ | ✅ | ✅ |

Note: Firefox requires `layout.css.backdrop-filter.enabled` to be set to `true` in `about:config`. 
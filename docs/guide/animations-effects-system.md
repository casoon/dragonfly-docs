---
title: Animation and Effects System
category: Guide
---

# Animation and Effects System

The Animation and Effects System of the Casoon UI Library provides a comprehensive collection of predefined animations, transitions, and visual effects to enhance the user interface.

> **Update in Version 0.5.1:** The animation system has been extensively revised with a unified naming scheme (`slide-in-*` instead of `slide-from-*`), reduced redundancy, and improved custom properties.

## CSS Import

To use the complete Casoon UI Animation System, import the `core.css` file, which automatically includes the basic animations:

```css
@import "@casoon/ui-lib/core.css";
```

For special animations and effects, you can import additional modules:

```css
/* Advanced animations */
@import "@casoon/ui-lib/animations/advanced.css";

/* Specific effect modules */
@import "@casoon/ui-lib/effects/shadows.css";
@import "@casoon/ui-lib/effects/glass.css";
```

## Animation Categories

The Animation System is divided into the following categories:

### 1. Transitions

Smooth transitions between states:

```css
/* Basic transition */
.transition {
  transition: all 0.3s ease;
}

/* Quick transition */
.transition-fast {
  transition: all 0.15s ease;
}

/* Slow transition */
.transition-slow {
  transition: all 0.5s ease;
}

/* Property-specific transitions */
.transition-opacity {
  transition: opacity 0.3s ease;
}

.transition-transform {
  transition: transform 0.3s ease;
}

.transition-colors {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
```

### 2. Fade Animations

For elements that should appear or disappear with a fade effect:

```css
/* Fade in */
.fade-in {
  animation: fadeIn 0.3s ease-in forwards;
}

/* Fade out */
.fade-out {
  animation: fadeOut 0.3s ease-out forwards;
}
```

### 3. Slide Animations

For elements that should slide into or out of view:

```css
/* Slide in from different directions */
.slide-in-top {
  animation: slideInTop 0.3s ease-out forwards;
}

.slide-in-right {
  animation: slideInRight 0.3s ease-out forwards;
}

.slide-in-bottom {
  animation: slideInBottom 0.3s ease-out forwards;
}

.slide-in-left {
  animation: slideInLeft 0.3s ease-out forwards;
}

/* Slide out in different directions */
.slide-out-top {
  animation: slideOutTop 0.3s ease-in forwards;
}

.slide-out-right {
  animation: slideOutRight 0.3s ease-in forwards;
}

.slide-out-bottom {
  animation: slideOutBottom 0.3s ease-in forwards;
}

.slide-out-left {
  animation: slideOutLeft 0.3s ease-in forwards;
}
```

### 4. Scale Animations

For elements that should grow or shrink:

```css
/* Zoom in */
.zoom-in {
  animation: zoomIn 0.3s ease-out forwards;
}

/* Zoom out */
.zoom-out {
  animation: zoomOut 0.3s ease-in forwards;
}
```

### 5. Special Animations

For specific effects:

```css
/* Pulse animation */
.pulse {
  animation: pulse 2s infinite;
}

/* Bounce animation */
.bounce {
  animation: bounce 1s infinite;
}

/* Shake animation */
.shake {
  animation: shake 0.5s;
}

/* Spin animation */
.spin {
  animation: spin 2s linear infinite;
}
```

## Combined Animations

Animations can be combined with each other and with transitions:

```html
<div class="fade-in slide-in-bottom transition">
  <!-- This element fades in, slides from bottom, and has smooth transitions -->
</div>
```

## Animation Configuration

The Animation System can be configured via CSS variables:

```css
:root {
  /* Animation durations */
  --animation-duration-fast: 0.15s;
  --animation-duration-medium: 0.3s;
  --animation-duration-slow: 0.5s;

  /* Animation timing functions */
  --animation-easing-standard: ease;
  --animation-easing-in: ease-in;
  --animation-easing-out: ease-out;
  --animation-easing-in-out: ease-in-out;

  /* Animation delays */
  --animation-delay-none: 0s;
  --animation-delay-short: 0.1s;
  --animation-delay-medium: 0.3s;
}
```

## Performance Optimization

For better performance:

1. Use the GPU-accelerated properties for animations:
   - `transform`
   - `opacity`
   - `filter`

2. Avoid animating layout properties when possible:
   - `width`, `height`
   - `margin`, `padding`
   - `top`, `left`, `right`, `bottom`

3. Use the `will-change` property for complex animations:

```css
.complex-animation {
  will-change: transform, opacity;
}
```

## Responsive Considerations

The Animation System respects user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Examples

### Button with Hover Effect

```html
<button class="button transition">
  Hover Me
</button>

<style>
  .button {
    background-color: var(--color-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    transition: transform var(--animation-duration-medium) var(--animation-easing-out);
  }
  
  .button:hover {
    transform: translateY(-2px);
  }
</style>
```

### Modal with Entrance Animation

```html
<div class="modal fade-in slide-in-top">
  <div class="modal-content">
    <h2>Welcome!</h2>
    <p>This modal appears with a nice animation.</p>
    <button class="close-button transition">Close</button>
  </div>
</div>
```

### Notification with Exit Animation

```html
<div class="notification slide-in-right" id="notification">
  <p>New message received!</p>
  <button onclick="dismiss()">Dismiss</button>
</div>

<script>
  function dismiss() {
    const notification = document.getElementById('notification');
    notification.classList.remove('slide-in-right');
    notification.classList.add('slide-out-right');
    // Remove element after animation completes
    notification.addEventListener('animationend', () => {
      notification.remove();
    });
  }
</script>
``` 
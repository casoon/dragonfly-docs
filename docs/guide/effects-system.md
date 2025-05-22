---
title: Effects System
category: Guide
---

# Effects System

The Effects System of the Casoon UI Library provides a comprehensive collection of visual effects, animations, and interactions to create modern and engaging user interfaces.

## Overview

The effects are divided into different categories and can be used individually or combined to create unique visual experiences. All effects are optimized for performance, consider accessibility, and work responsively on all devices.

## Effect Categories

The UI-Lib offers over 40 specialized effect modules for various use cases:

### Visual Effects

- **Glass Effects (`glass.css`)**: Modern glassmorphism effects with various transparency and blur levels
- **Neon Effects (`neon.css`)**: Glowing texts and borders with glow effects
- **Shadow Effects (`shadows.css`)**: Realistic and stylized shadows for spatial depth
- **Filter Effects (`filters.css`)**: Graphic filters like blur, brightness, and contrast
- **3D Effects (`3d.css`)**: Perspective transformations and spatial effects
- **Gradient Effects (`gradient.css`)**: Flowing color gradients and dynamic transitions
- **Patterns and Textures (`patterns.css`, `textures.css`)**: Background patterns and surface textures
- **Vignettes (`vignette.css`)**: Darkened edges for focused display
- **Blend Modes (`blends.css`)**: Advanced CSS blend modes for complex visual effects

### Animations and Movements

- **Basic Animations (`animations.css`)**: Comprehensive collection of motion and transition animations
- **Morph Effects (`morph.css`)**: Shape changes and transitions
- **Particle Effects (`particles.css`)**: Dynamic particle animations
- **Typing Animations (`typing.css`)**: Typewriter effects and text animations
- **Ripple Effects (`ripple.css`)**: Wave effects for interaction feedback
- **Shine Effects (`shine.css`, `sparkle.css`)**: Dynamic highlights and sparkles
- **Scroll Effects (`scroll.css`)**: Animations during scrolling

### Interactions and States

- **Hover Effects (`hover.css`)**: Visual feedback on mouse contact
- **Active States (`active.css`)**: Effects when clicking or activating
- **Focus Styles (`focus.css`)**: Accessible focus indicators
- **Loading States (`loading.css`)**: Animated loading indicators
- **Cursor Effects (`cursors.css`)**: Specialized mouse pointers for various interactions
- **Interaction Feedback (`interactions.css`)**: Comprehensive collection of interaction effects

### State Effects

- **Success States (`success.css`)**: Visually represent positive feedback
- **Error States (`error.css`)**: Effectively visualize error messages
- **Warning States (`warning.css`)**: Highlight warning notices
- **Disabled States (`disabled.css`)**: Visual feedback for unavailable elements

## Usage

The effects can be applied directly to HTML elements via CSS classes:

```html
<!-- Glass effect -->
<div class="glass">Glass effect container</div>

<!-- Neon effect for text -->
<h2 class="neon-text">Glowing neon text</h2>

<!-- Combined effects -->
<button class="hover-lift active-scale glass-hover">
  Interactive button with multiple effects
</button>
```

### Importing Effect Modules

You can selectively import the required effect modules:

```css
/* Base effects */
@import '@casoon/ui-lib/effects/animations.css';
@import '@casoon/ui-lib/effects/filters.css';
@import '@casoon/ui-lib/effects/interactions.css';

/* Specific effects as needed */
@import '@casoon/ui-lib/effects/glass.css';
@import '@casoon/ui-lib/effects/neon.css';
```

## Detailed Effect Descriptions

### Glass Effects (`glass.css`)

The modern glassmorphism style enables semi-transparent elements with blur effect.

```html
<!-- Standard glass effect -->
<div class="glass">Standard glass effect</div>

<!-- Glass effect variants -->
<div class="glass-sm">Subtle glass effect</div>
<div class="glass-lg">Strong glass effect</div>

<!-- Colored glass effects -->
<div class="glass glass-color-primary">Primary color glass effect</div>
<div class="glass glass-color-success">Success glass effect</div>

<!-- Interactive glass effect -->
<div class="glass-hover">Hover-activated glass effect</div>
```

CSS variables for customization:

```css
:root {
  --glass-blur: 10px;
  --glass-background: rgb(255 255 255 / 10%);
  --glass-border: rgb(255 255 255 / 20%);
  --glass-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
}
```

### Neon Effects (`neon.css`)

Glowing text and border effects in neon style.

```html
<!-- Neon text in various colors -->
<div class="neon-text">Standard neon text</div>
<div class="neon-text-secondary">Secondary neon text</div>
<div class="neon-text-accent">Accent neon text</div>

<!-- Neon borders -->
<div class="neon-border">Element with neon border</div>

<!-- Animation variants -->
<div class="neon-text-slow">Slowly pulsating animation</div>
<div class="neon-text-fast">Rapidly pulsating animation</div>
<div class="neon-text-flicker">Flickering neon effect</div>
<div class="neon-text-hover">Neon effect activated only on hover</div>

<!-- Glow effects -->
<div class="glow">Text with glow effect</div>
<span class="glow" style="--glow-color: #0ff;">Custom glow color</span>
```

### Animations (`animations.css`)

Extensive collection of animations for various applications.

```html
<!-- Basic animations -->
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up">Slide up</div>
<div class="animate-bounce">Bounce</div>
<div class="animate-pulse">Pulse</div>
<div class="animate-spin">Rotate</div>

<!-- Scroll-activated animations -->
<div class="scroll-fade-in">Fade in on scroll</div>
<div class="scroll-slide-up">Slide up on scroll</div>
<div class="scroll-scale">Change size on scroll</div>

<!-- Interaction animations -->
<div class="hover-bounce">Bounce on hover</div>
<div class="hover-pulse">Pulse on hover</div>
<div class="hover-spin">Rotate on hover</div>
```

Customization via CSS variables:

```css
:root {
  --animation-duration: 0.3s;
  --animation-timing: ease;
  --animation-delay: 0s;
  --animation-count: 1;
  --animation-fill-mode: both;
}
```

### Interaction Effects (`interactions.css`)

Interactive effects for enhanced user experience.

```html
<!-- Basic interactions -->
<button class="hover-lift">Element that lifts on hover</button>
<button class="hover-scale">Element that scales on hover</button>
<button class="active-scale">Element that shrinks when clicked/activated</button>

<!-- Touch effects -->
<button class="touch-feedback">Feedback on touch/click</button>
<button class="touch-ripple">Wave effect on touch/click</button>

<!-- Drag interactions -->
<div class="draggable">Draggable element</div>

<!-- Combined interactions -->
<button class="interactive hover-lift active-scale">
  Fully interactive button
</button>
```

## Effect Combinations

Effects can be combined to create more complex visual experiences:

```html
<!-- Neon-Glass effect -->
<div class="glass neon-border">
  <h3 class="neon-text">Glass with Neon</h3>
</div>

<!-- Interactive 3D map -->
<div class="card glass hover-lift active-scale">
  <div class="card__content">
    <h3 class="neon-text-hover">Interactive Map</h3>
    <p>Content with combined effects</p>
  </div>
</div>

<!-- Animated button with multiple effects -->
<button class="button primary hover-lift active-scale neon-border">
  <span class="glow">Complex Button</span>
</button>
```

## Accessibility

All effects consider accessibility and respect the user setting `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-bounce,
  .neon-text,
  .glass-hover {
    animation: none !important;
    transition: none !important;
  }
}
```

## Performance Optimization

The effects are designed for optimal performance:

1. **Hardware Acceleration**: Utilization of CSS properties that support GPU acceleration
2. **Selective Use**: Combine effects judiciously to avoid performance bottlenecks
3. **Mobile Optimization**: Reduced effects on mobile devices for better performance
4. **will-change Property**: Sparsely used for critical animations

## Best Practices

1. **Subtle Effects Preferred**: Less is often more, especially with animations and interactions
2. **Consistent Use**: Use similar effects for similar interactions
3. **Accessibility Consideration**: Provide alternative representations for users with reduced motion
4. **Avoid Conflicts**: Combine effects so they do not interfere with each other
5. **Testing on Various Devices**: Ensure effects work well on all target platforms

## Further Examples

### Complex Card UI

```html
<div class="card glass hover-lift active-scale">
  <div class="card__header">
    <h3 class="glow">Card Title</h3>
    <span class="badge neon-text-small">New</span>
  </div>
  <div class="card__body">
    <p>Card content with complex effects</p>
    <div class="progress glass-sm">
      <div class="progress__bar" style="width: 75%"></div>
    </div>
  </div>
  <div class="card__footer">
    <button class="button primary hover-scale active-scale neon-border-sm">
      Action
    </button>
  </div>
</div>
```

### Animated Product View

```html
<div class="product-card glass scroll-fade-in">
  <div class="product-image hover-scale">
    <img src="product.jpg" alt="Product" class="filter-brightness" />
    <div class="badge neon-text-sm">-20%</div>
  </div>
  <div class="product-info">
    <h3 class="glow-hover">Product Name</h3>
    <p class="scroll-slide-up" style="--animation-delay: 0.2s">
      Product Description
    </p>
    <div class="price neon-text-secondary">29,99 €</div>
    <button class="button primary hover-lift active-scale ripple">
      Add to Cart
    </button>
  </div>
</div>
```

## Available Effect Modules

The Casoon UI Library offers over 40 specialized effect modules:

- `3d.css` - 3D Transformations and Perspectives
- `active.css` - Effects for active states
- `animations.css` - General Animation Library
- `backdrops.css` - Background Effects
- `blends.css` - CSS Blend Mode Effects
- `clip-path.css` - Shape Cutout Effects
- `cursors.css` - Specialized Cursor Styles
- `disabled.css` - Effects for disabled elements
- `error.css` - Visualization of error states
- `filters.css` - CSS Filter Effects
- `focus.css` - Focus State Effects
- `glass.css` - Glassmorphism Effects
- `glow.css` - Glow Effects
- `gradient.css` - Color Gradient Effects
- `hover.css` - Hover State Effects
- `interactions.css` - Interaction Effects
- `light.css` - Light Effects
- `loading.css` - Loading Animations
- `masks.css` - CSS Mask Effects
- `morph.css` - Shape Change Effects
- `neon.css` - Neon Light Effects
- `noise.css` - Noise Effects
- `outlines.css` - Outline Effects
- `overlays.css` - Overlay Effects
- `particles.css` - Particle Effects
- `patterns.css` - Pattern Backgrounds
- `reflections.css` - Reflection Effects
- `ripple.css` - Wave Effects
- `scroll.css` - Scroll-based Effects
- `shadows.css` - Shadow Effects
- `shine.css` - Shine Effects
- `skeleton.css` - Loading Placeholder Effects
- `sparkle.css` - Sparkle Effects
- `success.css` - Success State Effects
- `textures.css` - Texture Effects
- `transforms.css` - CSS Transformation Effects
- `transitions.css` - Transition Effects
- `typing.css` - Typewriter Effects
- `typography.css` - Text Effects
- `vignette.css` - Vignette Effects
- `warning.css` - Warning State Effects 
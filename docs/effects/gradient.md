---
title: Gradient Effects
category: Effects
---

# Gradient Effects

The gradient effects of the Casoon UI Library offer a comprehensive collection of flowing color transitions and dynamic gradients for modern UI elements.

## Overview

The gradient effects are performance-optimized and available in various styles and directions. They can be used to make UI elements visually more interesting, create depth, and establish visual hierarchies.

## Installation

Import the gradient effects modules via CSS:

```css
@import '@casoon/ui-lib/effects/gradient.css';
```

## Basic Gradients

### Linear Gradients

Linear gradients flow in a straight line.

| Class | Description |
|--------|-------------|
| `.gradient` | Standard gradient (top to bottom) |
| `.gradient-horizontal` | Horizontal gradient (left to right) |
| `.gradient-diagonal` | Diagonal gradient (top left to bottom right) |
| `.gradient-diagonal-reverse` | Reverse diagonal gradient (top right to bottom left) |

```html
<div class="card gradient">Vertical gradient</div>
<div class="card gradient-horizontal">Horizontal gradient</div>
```

### Radial Gradients

Radial gradients flow from a center point outward.

| Class | Description |
|--------|-------------|
| `.gradient-radial` | Radial gradient (center to outer) |
| `.gradient-radial-top` | Radial gradient from top edge |
| `.gradient-radial-bottom` | Radial gradient from bottom edge |

```html
<div class="card gradient-radial">Radial gradient</div>
```

### Conic Gradients

Conic gradients flow circularly around a center point.

| Class | Description |
|--------|-------------|
| `.gradient-conic` | Conic gradient from center point |
| `.gradient-conic-top` | Conic gradient from top edge |
| `.gradient-conic-bottom` | Conic gradient from bottom edge |

```html
<div class="card gradient-conic">Conic gradient</div>
```

## Color Variants

The gradients are available in various color variants based on theme variables:

| Class | Description |
|--------|-------------|
| `.gradient-color-primary` | Gradient with primary colors |
| `.gradient-color-secondary` | Gradient with secondary colors |
| `.gradient-color-accent` | Gradient with accent colors |
| `.gradient-color-success` | Gradient with success colors |
| `.gradient-color-error` | Gradient with error colors |
| `.gradient-color-warning` | Gradient with warning colors |
| `.gradient-color-info` | Gradient with info colors |

```html
<div class="card gradient gradient-color-primary">Primary color gradient</div>
<div class="card gradient gradient-color-accent">Accent color gradient</div>
```

## Multi-colored Gradients

| Class | Description |
|--------|-------------|
| `.gradient-rainbow` | Rainbow gradient with multiple colors |
| `.gradient-sunset` | Sunset gradient (orange to purple) |
| `.gradient-ocean` | Ocean gradient (blue shades) |
| `.gradient-forest` | Forest gradient (green shades) |
| `.gradient-fire` | Fire gradient (red to yellow) |

```html
<div class="card gradient-rainbow">Rainbow gradient</div>
<div class="card gradient-sunset">Sunset gradient</div>
```

## Gradient Intensity

| Class | Description |
|--------|-------------|
| `.gradient-subtle` | Subtle gradient with low contrast |
| `.gradient-strong` | Strong gradient with high contrast |
| `.gradient-faded` | Faded gradient with transparent end |

```html
<div class="card gradient gradient-subtle">Subtle gradient</div>
<div class="card gradient gradient-strong">Strong gradient</div>
```

## Text Gradients

| Class | Description |
|--------|-------------|
| `.gradient-text` | Text with color gradient |
| `.gradient-text-rainbow` | Text with rainbow color gradient |
| `.gradient-text-primary` | Text with primary color gradient |

```html
<h2 class="gradient-text">Heading with gradient</h2>
<h2 class="gradient-text-rainbow">Rainbow heading</h2>
```

## Interactive Gradients

| Class | Description |
|--------|-------------|
| `.gradient-hover` | Gradient changes on hover |
| `.gradient-active` | Gradient changes in active state |
| `.gradient-shift` | Gradient shifts continuously (animation) |

```html
<div class="card gradient-hover">Hover for gradient change</div>
<div class="card gradient-shift">Animated gradient</div>
```

## Gradient Overlays

| Class | Description |
|--------|-------------|
| `.gradient-overlay` | Gradient as overlay for background images |
| `.gradient-overlay-top` | Gradient overlay from top |
| `.gradient-overlay-bottom` | Gradient overlay from bottom |

```html
<div class="image-container">
  <img src="image.jpg" alt="Image with gradient">
  <div class="gradient-overlay-bottom"></div>
</div>
```

## Customization

The gradient effects can be customized via CSS variables:

```css
:root {
  --gradient-start: var(--color-primary-300);
  --gradient-end: var(--color-primary-700);
  
  --gradient-angle: 180deg;
  --gradient-position: center;
  
  --gradient-rainbow-colors: #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee;
  --gradient-sunset-colors: #ff7e5f, #feb47b;
  --gradient-ocean-colors: #2193b0, #6dd5ed;
  --gradient-forest-colors: #11998e, #38ef7d;
  --gradient-fire-colors: #ff416c, #ff4b2b;
  
  --gradient-shift-speed: 3s;
  --gradient-hover-transition: 0.3s ease;
}
```

## Examples

### Cards with Various Gradients

```html
<div class="card-container">
  <div class="card gradient gradient-color-primary">
    <h3>Primary Gradient</h3>
    <p>Vertical color transition</p>
  </div>
  
  <div class="card gradient-horizontal gradient-color-secondary">
    <h3>Secondary Gradient</h3>
    <p>Horizontal color transition</p>
  </div>
  
  <div class="card gradient-radial gradient-color-accent">
    <h3>Accent Gradient</h3>
    <p>Radial color transition</p>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }
  
  .card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    color: white;
    width: 200px;
  }
</style>
```

### Rainbow Heading

```html
<h1 class="gradient-text-rainbow">Welcome to the Casoon UI Library</h1>

<style>
  .gradient-text-rainbow {
    font-size: 2.5rem;
    font-weight: bold;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
  }
</style>
```

### Image with Gradient Overlay

```html
<div class="image-with-overlay">
  <img src="landscape.jpg" alt="Landscape">
  <div class="gradient-overlay-bottom">
    <h3>Image Caption</h3>
    <p>Description text over the gradient</p>
  </div>
</div>

<style>
  .image-with-overlay {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 500px;
  }
  
  .gradient-overlay-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem 1rem;
    color: white;
    z-index: 1;
  }
</style>
```

## Browser Support

The gradient effects are supported by all modern browsers. The library includes fallbacks for browsers that don't support certain gradient types. 
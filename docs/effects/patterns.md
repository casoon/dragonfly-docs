---
title: Patterns & Textures
category: Effects
---

# Patterns & Textures

The pattern and texture effects of the Casoon UI Library offer a comprehensive collection of visual background patterns and textures that add depth and visual complexity to your UI elements.

## Overview

The pattern and texture effects are performance-optimized and available in various styles. They can be used to make backgrounds more interesting, visually separate sections, and add more character to your design.

## Installation

Import the pattern and texture module via CSS:

```css
@import '@casoon/ui-lib/effects/patterns.css';
```

## Basic Patterns

### Geometric Patterns

| Class | Description |
|--------|-------------|
| `.pattern-grid` | Simple grid pattern |
| `.pattern-dots` | Dot pattern |
| `.pattern-diagonal-lines` | Diagonal lines |
| `.pattern-zigzag` | Zigzag pattern |
| `.pattern-triangles` | Triangle pattern |
| `.pattern-hexagons` | Hexagon pattern |

```html
<div class="card pattern-grid">Card with grid pattern</div>
<div class="card pattern-dots">Card with dot pattern</div>
```

### Organic Patterns

| Class | Description |
|--------|-------------|
| `.pattern-noise` | Noise effect |
| `.pattern-waves` | Wave pattern |
| `.pattern-swirl` | Swirl pattern |
| `.pattern-marble` | Marble effect |
| `.pattern-clouds` | Cloud effect |

```html
<div class="card pattern-noise">Card with noise effect</div>
<div class="card pattern-waves">Card with wave pattern</div>
```

## Textures

| Class | Description |
|--------|-------------|
| `.texture-paper` | Paper texture |
| `.texture-fabric` | Fabric texture |
| `.texture-concrete` | Concrete texture |
| `.texture-wood` | Wood texture |
| `.texture-leather` | Leather texture |
| `.texture-brushed-metal` | Brushed metal |

```html
<div class="card texture-paper">Card with paper texture</div>
<div class="card texture-wood">Card with wood texture</div>
```

## Pattern Intensity

| Class | Description |
|--------|-------------|
| `.pattern-subtle` | Subtle, discreet pattern |
| `.pattern-medium` | Pattern with medium intensity |
| `.pattern-strong` | Prominent, strong pattern |

```html
<div class="card pattern-grid pattern-subtle">Card with subtle grid pattern</div>
<div class="card pattern-grid pattern-strong">Card with strong grid pattern</div>
```

## Pattern Size

| Class | Description |
|--------|-------------|
| `.pattern-size-sm` | Small pattern |
| `.pattern-size-md` | Medium-sized pattern (default) |
| `.pattern-size-lg` | Large pattern |
| `.pattern-size-xl` | Extra large pattern |

```html
<div class="card pattern-dots pattern-size-sm">Card with small dot pattern</div>
<div class="card pattern-dots pattern-size-lg">Card with large dot pattern</div>
```

## Colored Patterns

| Class | Description |
|--------|-------------|
| `.pattern-color-primary` | Pattern in primary color |
| `.pattern-color-secondary` | Pattern in secondary color |
| `.pattern-color-accent` | Pattern in accent color |
| `.pattern-color-light` | Light pattern |
| `.pattern-color-dark` | Dark pattern |

```html
<div class="card pattern-grid pattern-color-primary">Card with primary color grid</div>
<div class="card pattern-dots pattern-color-accent">Card with accent color dots</div>
```

## Pattern Overlays

| Class | Description |
|--------|-------------|
| `.pattern-overlay` | Pattern as overlay |
| `.pattern-overlay-light` | Light pattern overlay |
| `.pattern-overlay-dark` | Dark pattern overlay |

```html
<div class="image-container">
  <img src="image.jpg" alt="Image with pattern">
  <div class="pattern-overlay pattern-dots"></div>
</div>
```

## Mixable Patterns

Patterns can be combined with each other to create more complex effects:

```html
<div class="card pattern-grid pattern-overlay pattern-color-primary">
  <div class="inner-content pattern-dots pattern-size-lg pattern-color-accent pattern-subtle">
    Mixed patterns
  </div>
</div>
```

## Customization

The pattern and texture effects can be customized via CSS variables:

```css
:root {
  --pattern-color: currentColor;
  --pattern-opacity: 0.1;
  --pattern-background: transparent;
  
  --pattern-size-sm: 8px;
  --pattern-size-md: 16px;
  --pattern-size-lg: 32px;
  --pattern-size-xl: 64px;
  
  --pattern-weight-thin: 1px;
  --pattern-weight-regular: 2px;
  --pattern-weight-bold: 3px;
  
  --texture-opacity: 0.15;
  --texture-blend-mode: multiply;
}
```

## Examples

### Cards with Various Patterns

```html
<div class="card-container">
  <div class="card pattern-grid pattern-color-primary">
    <h3>Grid Pattern</h3>
    <p>With primary color</p>
  </div>
  
  <div class="card pattern-dots pattern-size-lg pattern-color-secondary">
    <h3>Dot Pattern</h3>
    <p>Large dots in secondary color</p>
  </div>
  
  <div class="card texture-paper">
    <h3>Paper Texture</h3>
    <p>For a natural look</p>
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
    background-color: white;
    width: 200px;
  }
</style>
```

### Background with Pattern

```html
<div class="hero-section pattern-hexagons pattern-size-xl pattern-color-primary pattern-subtle">
  <div class="hero-content">
    <h1>Welcome to Casoon UI</h1>
    <p>A modern UI library for sophisticated web applications</p>
    <button class="button">Learn more</button>
  </div>
</div>

<style>
  .hero-section {
    padding: 4rem 2rem;
    text-align: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-content {
    max-width: 600px;
  }
  
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    margin-top: 1.5rem;
  }
</style>
```

### Image with Pattern Overlay

```html
<div class="image-with-pattern">
  <img src="city.jpg" alt="City image">
  <div class="pattern-overlay pattern-dots pattern-size-md"></div>
  <div class="image-content">
    <h2>Modern Architecture</h2>
    <p>Discover innovative design concepts</p>
  </div>
</div>

<style>
  .image-with-pattern {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 500px;
  }
  
  .image-with-pattern img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .pattern-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  
  .image-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1.5rem;
    color: white;
    z-index: 2;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  }
</style>
```

## Performance Optimization

The pattern and texture effects are designed for optimal performance:

1. Use of CSS `background-image` instead of multiple DOM elements
2. Optimized SVG patterns for minimal file size
3. Fallback to simpler patterns on mobile devices

## Browser Support

The pattern and texture effects are supported by all modern browsers. For older browsers, simpler fallback patterns are provided. 
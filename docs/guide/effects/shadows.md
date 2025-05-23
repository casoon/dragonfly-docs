---
title: Shadow Effects
category: Effects
---

# Shadow Effects

The shadow effects of the Casoon UI Library offer a comprehensive collection of realistic and stylized shadows that give spatial depth to your UI elements.

## Overview

The shadow effects are performance-optimized and available in various sizes and styles. They can be used to highlight elements, clarify hierarchies, and create visual depth.

## Installation

Import the shadow effects module via CSS:

```css
@import '@casoon/ui-lib/effects/shadows.css';
```

## Basic Shadows

The library provides a range of predefined shadows with varying intensity:

| Class | Description |
|--------|-------------|
| `.shadow-sm` | Small, subtle shadow |
| `.shadow` | Standard shadow |
| `.shadow-md` | Medium shadow |
| `.shadow-lg` | Large shadow |
| `.shadow-xl` | Extra large shadow |
| `.shadow-2xl` | Double extra large shadow |

```html
<div class="card shadow-sm">Card with small shadow</div>
<div class="card shadow">Card with standard shadow</div>
<div class="card shadow-lg">Card with large shadow</div>
```

## Special Shadow Styles

| Class | Description |
|--------|-------------|
| `.shadow-inner` | Inner shadow (appears indented) |
| `.shadow-none` | No shadow (useful for overriding) |

```html
<div class="card shadow-inner">Card with inner shadow</div>
```

## Directional Shadows

| Class | Description |
|--------|-------------|
| `.shadow-top` | Shadow only on the top side |
| `.shadow-right` | Shadow only on the right side |
| `.shadow-bottom` | Shadow only on the bottom side |
| `.shadow-left` | Shadow only on the left side |

```html
<div class="card shadow-top">Card with top shadow</div>
<div class="card shadow-bottom">Card with bottom shadow</div>
```

## Sharp Shadows

| Class | Description |
|--------|-------------|
| `.shadow-sharp` | Sharp shadow with minimal blur |
| `.shadow-sharp-sm` | Small sharp shadow |
| `.shadow-sharp-lg` | Large sharp shadow |

```html
<div class="card shadow-sharp">Card with sharp shadow</div>
```

## Soft Shadows

| Class | Description |
|--------|-------------|
| `.shadow-soft` | Soft, diffuse shadow |
| `.shadow-soft-sm` | Small soft shadow |
| `.shadow-soft-lg` | Large soft shadow |

```html
<div class="card shadow-soft">Card with soft shadow</div>
```

## Colored Shadows

| Class | Description |
|--------|-------------|
| `.shadow-primary` | Shadow in the primary color |
| `.shadow-secondary` | Shadow in the secondary color |
| `.shadow-accent` | Shadow in the accent color |
| `.shadow-success` | Shadow in the success color |
| `.shadow-error` | Shadow in the error color |
| `.shadow-warning` | Shadow in the warning color |
| `.shadow-info` | Shadow in the info color |

```html
<div class="card shadow-primary">Card with primary colored shadow</div>
<div class="card shadow-error">Card with error colored shadow</div>
```

## Multiple Shadows

| Class | Description |
|--------|-------------|
| `.shadow-double` | Double shadow (near and far) |
| `.shadow-layered` | Multi-layered shadow for realistic look |
| `.shadow-inset-outline` | Combines inner shadow with outline |

```html
<div class="card shadow-double">Card with double shadow</div>
<div class="card shadow-layered">Card with multi-layered shadow</div>
```

## Interactive Shadows

| Class | Description |
|--------|-------------|
| `.shadow-hover` | Shadow appears on hover |
| `.shadow-hover-lg` | Large shadow appears on hover |
| `.shadow-active` | Shadow changes in active state |

```html
<div class="card shadow-hover">Card with hover shadow</div>
<button class="button shadow-active">Button with active shadow</button>
```

## Neomorphism Shadows

| Class | Description |
|--------|-------------|
| `.shadow-neo` | Neomorphism shadow (raised) |
| `.shadow-neo-inset` | Neomorphism shadow (indented) |
| `.shadow-neo-flat` | Flat neomorphism shadow |

```html
<div class="card shadow-neo">Neomorphism card</div>
<div class="card shadow-neo-inset">Indented neomorphism card</div>
```

## Customization

The shadow effects can be customized via CSS variables:

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  
  --shadow-color: 0deg 0% 0%;
  --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
                          0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.1),
                          1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.1);
  --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.11),
                             0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.11),
                             2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.11),
                             5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.11);
  --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
                           1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
                           2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
                           4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
                           7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
                           11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
                           17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
                           25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);
}
```

## Examples

### Cards with Various Shadows

```html
<div class="card-container">
  <div class="card shadow-sm">
    <h3>Basic Card</h3>
    <p>With small shadow</p>
  </div>
  
  <div class="card shadow-lg">
    <h3>Highlighted Card</h3>
    <p>With large shadow</p>
  </div>
  
  <div class="card shadow-neo">
    <h3>Neomorphism Card</h3>
    <p>With neo shadow</p>
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

### Interactive Button with Shadow

```html
<button class="button shadow-hover shadow-active">
  Interactive Button
</button>

<style>
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    transition: all 0.2s ease;
  }
</style>
```

## Performance Optimization

The shadow effects are designed for optimal performance:

1. Using `box-shadow` instead of multiple DOM elements
2. Avoiding overly complex shadows on mobile devices
3. Selective use of `will-change` for critical animations

## Browser Support

The shadow effects are supported by all modern browsers. For older browsers, a fallback with simpler shadows is provided. 
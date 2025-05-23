---
title: Filter Effects
category: Effects
---

# Filter Effects

The filter effects of the Casoon UI Library offer a comprehensive collection of CSS filters that allow you to apply visual effects to your UI elements.

## Overview

The filter effects are performance-optimized and respect user preferences for reduced motion. They can be used to apply blur, brightness, contrast, and other visual effects to your elements.

## Installation

Import the filter effects module via CSS:

```css
@import '@casoon/ui-lib/effects/filters.css';
```

## Basic Filters

### Blur Filters

Adds a blurring effect.

| Class | Description |
|--------|-------------|
| `.filter-blur` | Standard blur effect |
| `.filter-blur-sm` | Light blur |
| `.filter-blur-md` | Medium blur |
| `.filter-blur-lg` | Strong blur |

```html
<img src="image.jpg" class="filter-blur" alt="Blurred image">
<img src="image.jpg" class="filter-blur-sm" alt="Slightly blurred image">
```

### Brightness Filters

Adjusts the brightness of an element.

| Class | Description |
|--------|-------------|
| `.filter-brightness` | Standard brightness effect (120%) |
| `.filter-brightness-sm` | Slightly increased brightness (110%) |
| `.filter-brightness-lg` | Strongly increased brightness (150%) |
| `.filter-brightness-dim` | Reduced brightness (80%) |
| `.filter-brightness-dark` | Strongly reduced brightness (50%) |

```html
<img src="image.jpg" class="filter-brightness" alt="Brighter image">
<img src="image.jpg" class="filter-brightness-dim" alt="Dimmer image">
```

### Contrast Filters

Adjusts the contrast of an element.

| Class | Description |
|--------|-------------|
| `.filter-contrast` | Standard contrast effect (120%) |
| `.filter-contrast-sm` | Slightly increased contrast (110%) |
| `.filter-contrast-lg` | Strongly increased contrast (150%) |
| `.filter-contrast-low` | Reduced contrast (80%) |

```html
<img src="image.jpg" class="filter-contrast" alt="Higher contrast image">
```

### Grayscale Filters

Converts an element to grayscale.

| Class | Description |
|--------|-------------|
| `.filter-grayscale` | Complete grayscale (100%) |
| `.filter-grayscale-50` | Partial grayscale (50%) |

```html
<img src="image.jpg" class="filter-grayscale" alt="Black and white image">
<img src="image.jpg" class="filter-grayscale-50" alt="Partially desaturated image">
```

### Hue Rotation

Rotates the colors of an element.

| Class | Description |
|--------|-------------|
| `.filter-hue-rotate` | Standard hue rotation (180deg) |
| `.filter-hue-rotate-90` | 90-degree hue rotation |
| `.filter-hue-rotate-270` | 270-degree hue rotation |

```html
<img src="image.jpg" class="filter-hue-rotate" alt="Hue rotated image">
```

### Invert

Inverts the colors of an element.

| Class | Description |
|--------|-------------|
| `.filter-invert` | Complete color inversion (100%) |
| `.filter-invert-50` | Partial color inversion (50%) |

```html
<img src="image.jpg" class="filter-invert" alt="Inverted image">
```

### Saturation

Adjusts the color saturation of an element.

| Class | Description |
|--------|-------------|
| `.filter-saturate` | Increased saturation (150%) |
| `.filter-saturate-high` | Strongly increased saturation (200%) |
| `.filter-saturate-low` | Reduced saturation (50%) |

```html
<img src="image.jpg" class="filter-saturate" alt="More saturated image">
<img src="image.jpg" class="filter-saturate-low" alt="Less saturated image">
```

### Sepia

Applies a sepia effect.

| Class | Description |
|--------|-------------|
| `.filter-sepia` | Complete sepia effect (100%) |
| `.filter-sepia-50` | Partial sepia effect (50%) |

```html
<img src="image.jpg" class="filter-sepia" alt="Sepia-toned image">
```

## Combined Filter Effects

The Casoon UI Library also provides predefined combined filter effects for commonly used looks:

| Class | Description |
|--------|-------------|
| `.filter-vintage` | Vintage look (sepia + contrast + brightness) |
| `.filter-cool` | Cool look (bluish tones) |
| `.filter-warm` | Warm look (yellowish tones) |
| `.filter-dramatic` | Dramatic look (high contrast + saturation) |
| `.filter-soft` | Soft look (light blur + brightness) |

```html
<img src="image.jpg" class="filter-vintage" alt="Vintage look">
<img src="image.jpg" class="filter-cool" alt="Cool look">
```

## Hover Filter Effects

The library also provides filter effects that are only activated on hover:

| Class | Description |
|--------|-------------|
| `.filter-hover` | Standard filter effect on hover |
| `.filter-hover-sm` | Light filter effect on hover |
| `.filter-hover-lg` | Strong filter effect on hover |

```html
<img src="image.jpg" class="filter-hover" alt="Image with hover effect">
```

## Customization

The filter effects can be customized via CSS variables:

```css
:root {
  --filter-blur: 4px;
  --filter-blur-sm: 2px;
  --filter-blur-md: 8px;
  --filter-blur-lg: 16px;
  
  --filter-brightness: 1.2;
  --filter-brightness-sm: 1.1;
  --filter-brightness-lg: 1.5;
  --filter-brightness-dim: 0.8;
  --filter-brightness-dark: 0.5;
  
  --filter-contrast: 1.2;
  --filter-contrast-sm: 1.1;
  --filter-contrast-lg: 1.5;
  --filter-contrast-low: 0.8;
  
  --filter-grayscale: 1;
  --filter-grayscale-50: 0.5;
  
  --filter-hue-rotate: 180deg;
  --filter-hue-rotate-90: 90deg;
  --filter-hue-rotate-270: 270deg;
  
  --filter-invert: 1;
  --filter-invert-50: 0.5;
  
  --filter-saturate: 1.5;
  --filter-saturate-high: 2;
  --filter-saturate-low: 0.5;
  
  --filter-sepia: 1;
  --filter-sepia-50: 0.5;
}
```

## Accessibility

To improve accessibility, the filter effects respect the user setting `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .filter-hover,
  .filter-hover-sm,
  .filter-hover-lg {
    transition: none !important;
  }
}
```

## Browser Support

The filter effects are supported by all modern browsers. For older browsers that don't support CSS filters, a fallback is provided. 
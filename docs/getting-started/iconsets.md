---
title: Icon System
category: Getting Started
---

# Icon System

The Casoon UI Library Icon System provides a comprehensive solution for integrating and using icons in your application.

## CSS Import

To use the complete Casoon UI Icon System, simply import the `core.css` file:

```css
@import "@casoon/ui-lib/core.css";
```

This automatically loads the layer system, which also includes the `icons` layer and all icon sets via `icons.css`.

## Layer Structure

The icons are part of the central layer system and are defined under the `icons` layer:

```css
@layer reset,
       tokens,
       ...
       typography,
       utilities,
       smooth-scroll,
       accessibility,
       icons,           /* Icon System */
       animations,
       effects,
       themes;
```

## Overview

The icon system is based on SVG icons and offers various implementation methods:

1. **Inline SVG icons** - the recommended method with the best performance and customizability
2. **Sprite-based icons** - for efficient reuse via a central sprite sheet
3. **Icon components** - for easy integration into framework projects

## Setup

### Method 1: Complete Icon System via core.css

The simplest method to import all icon sets:

```css
@import "@casoon/ui-lib/core.css";
```

### Method 2: Import Only Specific Icon Sets

Import only the icon sets you need:

```css
/* Import base */
@import "@casoon/ui-lib/icons/base.css";

/* Add desired icon sets */
@import "@casoon/ui-lib/icons/feather.css";
@import "@casoon/ui-lib/icons/heroicons.css";
```

## Available Icon Sets

Casoon UI Library offers a variety of icon sets:

| Icon Set | Description | Import Path |
|----------|--------------|-------------|
| Feather | Simple, clear icons | `@casoon/ui-lib/icons/feather.css` |
| Heroicons | Modern icons in Apple style | `@casoon/ui-lib/icons/heroicons.css` |
| Phosphor | Flexible, consistent icons | `@casoon/ui-lib/icons/phosphor.css` |
| Bootstrap | Icons in Bootstrap style | `@casoon/ui-lib/icons/bootstrap.css` |
| Remix | Versatile open-source icons | `@casoon/ui-lib/icons/remix.css` |
| MDI (Material) | Google Material Design Icons | `@casoon/ui-lib/icons/mdi.css` |
| Font Awesome | Popular icon collection | `@casoon/ui-lib/icons/fontawesome.css` |
| Lucide | Continuation of Feather Icons | `@casoon/ui-lib/icons/lucide.css` |
| Tabler | Over 3000 pixel-perfect icons | `@casoon/ui-lib/icons/tabler.css` |

## Icon Usage

### Standard Method with Icon Classes

The icon system uses uniform class names for all icon sets. Example for Feather Icons:

```html
<span class="feather-home"></span>
<span class="feather-settings"></span>
<span class="feather-user"></span>
```

For Heroicons:

```html
<span class="heroicon-home"></span>
<span class="heroicon-cog"></span>
<span class="heroicon-user"></span>
```

### Inline SVG Icons (Traditional)

```html
<div class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</div>
```

### SVG Sprite Reference

```html
<div class="icon">
  <svg>
    <use xlink:href="#icon-plus"></use>
  </svg>
</div>
```

### Icon Sizes

The icon system offers predefined sizes based on the actual implementation:

```html
<div class="icon-xs"><!-- Extra small (0.5em) --></div>
<div class="icon-sm"><!-- Small (0.75em) --></div>
<div class="icon"><!-- Standard (1em) --></div>
<div class="icon-lg"><!-- Large (1.25em) --></div>
<div class="icon-xl"><!-- Extra large (1.5em) --></div>
<div class="icon-2xl"><!-- Extra extra large (2em) --></div>
```

### Icon Colors

Icons inherit the text color of their parent element by default (`currentColor`):

```html
<div class="text-primary">
  <div class="icon"><!-- Icon takes on the primary text color --></div>
</div>

<div class="icon" style="color: var(--color-accent)">
  <!-- Direct color setting -->
</div>
```

### Color Variations via CSS Classes

```html
<div class="icon icon--primary"><!-- Primary color --></div>
<div class="icon icon--secondary"><!-- Secondary color --></div>
<div class="icon icon--accent"><!-- Accent color --></div>
<div class="icon icon--success"><!-- Success color --></div>
<div class="icon icon--warning"><!-- Warning color --></div>
<div class="icon icon--error"><!-- Error color --></div>
<div class="icon icon--info"><!-- Info color --></div>
<div class="icon icon--light"><!-- Light color --></div>
<div class="icon icon--dark"><!-- Dark color --></div>
```

## Combining Icon with Text

### Horizontal Arrangement

```html
<div class="flex flex--items-center flex--gap-2">
  <div class="icon">
    <svg><!-- Icon content --></svg>
  </div>
  <span>Description text</span>
</div>
```

### Icon Button

```html
<button class="btn btn--primary">
  <span class="flex flex--items-center flex--gap-2">
    <div class="icon">
      <svg><!-- Icon content --></svg>
    </div>
    <span>Button with icon</span>
  </span>
</button>
```

## Icon Customizations

### Icon Alignment

Based on the actual implementation, the icon system supports the following alignment options:

```html
<div class="icon-baseline"><!-- Baseline alignment --></div>
<div class="icon-top"><!-- Top alignment --></div>
<div class="icon-middle"><!-- Middle alignment (default) --></div>
<div class="icon-bottom"><!-- Bottom alignment --></div>
```

### Rotation and Flipping

```html
<div class="icon icon--rotate-90"><!-- Rotated 90° clockwise --></div>
<div class="icon icon--rotate-180"><!-- Rotated 180° --></div>
<div class="icon icon--rotate-270"><!-- Rotated 270° clockwise --></div>
<div class="icon icon--flip-h"><!-- Flipped horizontally --></div>
<div class="icon icon--flip-v"><!-- Flipped vertically --></div>
```

### Animations

Based on the actual implementation, the icon system supports the following animation:

```html
<div class="icon-spin"><!-- Rotating icon animation --></div>
```

## Accessibility

For better accessibility, icons that have functional meaning should include appropriate descriptions:

```html
<button class="btn btn--icon" aria-label="Delete">
  <div class="icon">
    <svg aria-hidden="true"><!-- Delete icon --></svg>
  </div>
</button>
```

Or for icons with accompanying text:

```html
<button class="btn">
  <div class="icon" aria-hidden="true"><!-- Icon is decorative --></div>
  <span>Save</span>
</button>
```

## Integrating Custom Icon Sets

You can create your own icon sets and integrate them into the layer system:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Add custom icon set to the icons layer */
@layer icons {
  /* Custom icon definitions */
  .custom-icon-home {
    background-image: url('path/to/home.svg');
    /* Additional styles */
  }

  .custom-icon-settings {
    background-image: url('path/to/settings.svg');
    /* Additional styles */
  }
}
```

## Best Practices for Icons

- **Use semantic icons** - Choose icons that are intuitive for their function
- **Ensure accessibility** - Add aria-label for functional icons
- **Keep sizes consistent** - Use the predefined size classes
- **Consider contrast and coloring** - Make sure icons are clearly visible
- **Combine text with icons** - Use text and icons together for important actions

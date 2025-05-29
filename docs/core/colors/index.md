---
title: Color system
outline: deep
---

# Color system

The Color system in Casoon UI provides a comprehensive and accessible color palette designed for consistent user interfaces. It includes primary, secondary, and neutral colors with various shades and accents.

## Installation

The Color system is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all core styles */
@import '@casoon/ui-lib/core.css';

/* Or just the color system */
@import '@casoon/ui-lib/core/colors.css';
```

## Color Palette

The Casoon UI Library provides a comprehensive color palette with multiple shades for each color:

```css
:root {
  /* Primary Colors */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
  --color-primary-950: #082f49;

  /* Neutral Colors */
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  --color-neutral-950: #030712;

  /* Success Colors */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-200: #bbf7d0;
  --color-success-300: #86efac;
  --color-success-400: #4ade80;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;
  --color-success-800: #166534;
  --color-success-900: #14532d;
  --color-success-950: #052e16;

  /* Warning Colors */
  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-200: #fde68a;
  --color-warning-300: #fcd34d;
  --color-warning-400: #fbbf24;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;
  --color-warning-800: #92400e;
  --color-warning-900: #78350f;
  --color-warning-950: #451a03;

  /* Danger Colors */
  --color-danger-50: #fef2f2;
  --color-danger-100: #fee2e2;
  --color-danger-200: #fecaca;
  --color-danger-300: #fca5a5;
  --color-danger-400: #f87171;
  --color-danger-500: #ef4444;
  --color-danger-600: #dc2626;
  --color-danger-700: #b91c1c;
  --color-danger-800: #991b1b;
  --color-danger-900: #7f1d1d;
  --color-danger-950: #450a0a;

  /* Info Colors */
  --color-info-50: #eff6ff;
  --color-info-100: #dbeafe;
  --color-info-200: #bfdbfe;
  --color-info-300: #93c5fd;
  --color-info-400: #60a5fa;
  --color-info-500: #3b82f6;
  --color-info-600: #2563eb;
  --color-info-700: #1d4ed8;
  --color-info-800: #1e40af;
  --color-info-900: #1e3a8a;
  --color-info-950: #172554;
}
```

## Semantic Colors

The color system includes semantic color variables that are used throughout the components:

```css
:root {
  /* Text Colors */
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-700);
  --text-tertiary: var(--color-neutral-500);
  --text-disabled: var(--color-neutral-400);
  --text-on-primary: var(--color-white);
  --text-on-success: var(--color-white);
  --text-on-warning: var(--color-neutral-900);
  --text-on-danger: var(--color-white);
  --text-on-info: var(--color-white);

  /* Background Colors */
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-neutral-50);
  --bg-tertiary: var(--color-neutral-100);
  --bg-disabled: var(--color-neutral-200);
  
  /* Surface Colors */
  --color-surface-50: var(--color-neutral-50);
  --color-surface-100: var(--color-neutral-100);
  --color-surface-200: var(--color-neutral-200);
  --color-surface-300: var(--color-neutral-300);
  
  /* Border Colors */
  --border-light: var(--color-neutral-200);
  --border-medium: var(--color-neutral-300);
  --border-strong: var(--color-neutral-400);
  
  /* Miscellaneous */
  --color-focus-ring: var(--color-primary-300);
  --color-overlay: rgba(0, 0, 0, 0.5);
}
```

## Usage

### Using Color Variables

Color variables can be used in your CSS:

```css
.my-element {
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-light);
}

.highlight {
  color: var(--color-primary-500);
  background-color: var(--color-primary-50);
}
```

### Color Utility Classes

The color system includes utility classes for text and background colors:

```html
<div class="text-primary">Primary text color</div>
<div class="text-secondary">Secondary text color</div>
<div class="text-success">Success text color</div>

<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
```

<div class="example-wrapper">
  <div style="color: var(--text-primary, #111827);">Primary text color</div>
  <div style="color: var(--text-secondary, #374151);">Secondary text color</div>
  <div style="color: var(--color-success-500, #22c55e);">Success text color</div>
  <br>
  <div style="background-color: var(--bg-primary, white); padding: 0.5rem; border: 1px solid #ccc;">Primary background</div>
  <div style="background-color: var(--bg-secondary, #f9fafb); padding: 0.5rem; border: 1px solid #ccc; margin-top: 0.5rem;">Secondary background</div>
  <div style="background-color: var(--color-success-500, #22c55e); color: white; padding: 0.5rem; margin-top: 0.5rem;">Success background</div>
</div>

## Customization

You can customize the color system by overriding the CSS variables:

```css
:root {
  /* Override primary color */
  --color-primary-500: #6366f1; /* Indigo instead of blue */
  
  /* Adjust semantic colors */
  --text-primary: var(--color-neutral-800);
  --border-light: var(--color-neutral-300);
}
```

## Color Contrast

The color system is designed with accessibility in mind. When customizing colors, ensure that:

- Text colors have sufficient contrast with their background (WCAG AA requires 4.5:1 for normal text)
- Interactive elements have clear visual states
- Color is not the only way to convey information

## Working with Dark Mode

The color system includes variables that automatically adjust in dark mode when using the Casoon theme system:

```css
@import '@casoon/ui-lib/themes/day.css';
@import '@casoon/ui-lib/themes/night.css';
```

When dark mode is active, semantic color variables will automatically adjust to appropriate values.

## Advanced Color Mixins

For advanced color manipulation, the library includes color mix utilities:

```css
.custom-element {
  /* Create a semi-transparent version of primary color */
  background-color: color-mix(in srgb, var(--color-primary-500), transparent 50%);
  
  /* Mix two colors */
  color: color-mix(in srgb, var(--color-primary-500), var(--color-success-500) 25%);
}
```

## Browser Compatibility

The Color system works in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 15+ |
| Color-mix() function | 111+ | 113+ | 16.4+ | 111+ |

For browsers that don't support color-mix(), the library provides fallbacks. 
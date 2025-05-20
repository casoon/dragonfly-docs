---
title: Utilities
category: Getting Started
---

# Utility Styles

The Utility Styles of the Casoon UI Library are a collection of helper classes for fast and consistent styling without the need to write custom CSS. They follow the utility-first approach and enable the direct application of design tokens to HTML elements.

## Spacing Utilities

The spacing utilities offer classes for margin and padding based on the spacing scale:

### Margin

```css
.m-0 { margin: 0; }
.m-1 { margin: var(--spacing-1); }
.m-2 { margin: var(--spacing-2); }
.m-3 { margin: var(--spacing-3); }
.m-4 { margin: var(--spacing-4); }
.m-5 { margin: var(--spacing-5); }

.mt-0 { margin-top: 0; }
.mr-0 { margin-right: 0; }
.mb-0 { margin-bottom: 0; }
.ml-0 { margin-left: 0; }

.mt-1 { margin-top: var(--spacing-1); }
.mt-2 { margin-top: var(--spacing-2); }
.mt-3 { margin-top: var(--spacing-3); }
.mt-4 { margin-top: var(--spacing-4); }
.mt-5 { margin-top: var(--spacing-5); }

/* Similarly for mr, mb, ml */
```

### Padding

```css
.p-0 { padding: 0; }
.p-1 { padding: var(--spacing-1); }
.p-2 { padding: var(--spacing-2); }
.p-3 { padding: var(--spacing-3); }
.p-4 { padding: var(--spacing-4); }
.p-5 { padding: var(--spacing-5); }

.pt-0 { padding-top: 0; }
.pr-0 { padding-right: 0; }
.pb-0 { padding-bottom: 0; }
.pl-0 { padding-left: 0; }

.pt-1 { padding-top: var(--spacing-1); }
.pt-2 { padding-top: var(--spacing-2); }
.pt-3 { padding-top: var(--spacing-3); }
.pt-4 { padding-top: var(--spacing-4); }
.pt-5 { padding-top: var(--spacing-5); }

/* Similarly for pr, pb, pl */
```

### Usage Example:

```html
<div class="m-4 p-2">
  Element with margin 1.5rem and padding 0.5rem
</div>

<div class="mt-3 mb-2 px-4">
  Element with margin-top 0.75rem, margin-bottom 0.5rem, and horizontal padding 1rem
</div>
```

## Display Utilities

```css
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.inline-grid { display: inline-grid; }
.hidden { display: none; }
```

### Usage Example:

```html
<div class="flex">
  <div class="block">Block element in a flex container</div>
  <span class="inline-block">Inline-block element</span>
</div>
```

## Position Utilities

```css
.static { position: static; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }

.top-1 { top: var(--spacing-1); }
.top-2 { top: var(--spacing-2); }
/* etc. for right, bottom, left */
```

### Usage Example:

```html
<div class="relative">
  <div class="absolute top-0 right-0">
    Absolutely positioned, top right
  </div>
</div>
```

## Flexbox Utilities

The flexbox utilities enable the quick creation of flexible layouts:

```css
/* Flex direction */
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Justify Content */
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* Align Items */
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Flex Wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }

/* Flex (Grow and Shrink) */
.flex-1 { flex: 1 1 0%; }
.flex-auto { flex: 1 1 auto; }
.flex-initial { flex: 0 1 auto; }
.flex-none { flex: none; }
```

### Usage Example:

```html
<div class="flex flex-col md:flex-row justify-between items-center">
  <div>Left-aligned (mobile: top)</div>
  <div>Vertically centered</div>
  <div>Right-aligned (mobile: bottom)</div>
</div>
```

## Grid Utilities

```css
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.gap-0 { gap: 0; }
.gap-1 { gap: var(--spacing-1); }
.gap-2 { gap: var(--spacing-2); }
.gap-3 { gap: var(--spacing-3); }
.gap-4 { gap: var(--spacing-4); }
.gap-5 { gap: var(--spacing-5); }

.col-span-1 { grid-column: span 1 / span 1; }
.col-span-2 { grid-column: span 2 / span 2; }
.col-span-3 { grid-column: span 3 / span 3; }
/* etc. up to col-span-12 */
```

### Usage Example:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Takes up 2/3 of the width</div>
  <div>Takes up 1/3 of the width</div>
</div>
```

## Text Utilities

```css
/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Font weight */
.font-thin { font-weight: 100; }
.font-extralight { font-weight: 200; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.font-black { font-weight: 900; }

/* Text transform */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.normal-case { text-transform: none; }

/* Text decoration */
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }
```

### Usage Example:

```html
<h1 class="text-center font-bold uppercase">
  Centered, bold heading in uppercase
</h1>
```

## Color System Utilities

```css
/* Text colors */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }
.text-info { color: var(--color-info); }

/* Background colors */
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-success { background-color: var(--color-success); }
.bg-warning { background-color: var(--color-warning); }
.bg-error { background-color: var(--color-error); }
.bg-info { background-color: var(--color-info); }

/* Border colors */
.border-primary { border-color: var(--color-primary); }
.border-secondary { border-color: var(--color-secondary); }
.border-success { border-color: var(--color-success); }
.border-warning { border-color: var(--color-warning); }
.border-error { border-color: var(--color-error); }
.border-info { border-color: var(--color-info); }
```

### Usage Example:

```html
<div class="bg-success-light text-success p-3 border border-success">
  Success box with light background color, matching text color and border
</div>
```

## Responsive Utilities

All utilities can be used with breakpoint prefixes:

- `sm:` for screens ≥ 640px
- `md:` for screens ≥ 768px
- `lg:` for screens ≥ 1024px
- `xl:` for screens ≥ 1280px
- `2xl:` for screens ≥ 1536px

```html
<div class="hidden md:block">
  Only displayed on tablets and larger screens
</div>

<div class="flex-col md:flex-row">
  Vertical on mobile devices, horizontal on larger screens
</div>
```

## Best Practices for Utility Classes

- **Utility Combination** - Combine multiple utility classes for complex styles
- **Responsive Optimization** - Use breakpoint prefixes for adaptive layout
- **Token Consistency** - Stick to the predefined values of the design tokens
- **Component Extraction** - Extract frequently used combinations into their own components
- **Selective Import** - Import only the utility modules you need for better performance
- **Mobile-First Approach** - Start with the mobile view and expand for larger screens
``` 
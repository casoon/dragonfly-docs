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
.m-0  { margin: var(--space-0); }
.m-px { margin: var(--space-px); }
.m-1  { margin: var(--space-1); }
.m-2  { margin: var(--space-2); }
.m-3  { margin: var(--space-3); }
.m-4  { margin: var(--space-4); }
.m-5  { margin: var(--space-5); }
.m-6  { margin: var(--space-6); }
.m-8  { margin: var(--space-8); }
.m-10 { margin: var(--space-10); }
.m-12 { margin: var(--space-12); }
.m-16 { margin: var(--space-16); }
.m-20 { margin: var(--space-20); }
.m-24 { margin: var(--space-24); }
.m-32 { margin: var(--space-32); }
.m-40 { margin: var(--space-40); }
.m-48 { margin: var(--space-48); }
.m-56 { margin: var(--space-56); }
.m-64 { margin: var(--space-64); }

.mt-0  { margin-top: var(--space-0); }
.mr-0  { margin-right: var(--space-0); }
.mb-0  { margin-bottom: var(--space-0); }
.ml-0  { margin-left: var(--space-0); }

.mt-1  { margin-top: var(--space-1); }
.mt-2  { margin-top: var(--space-2); }
.mt-3  { margin-top: var(--space-3); }
.mt-4  { margin-top: var(--space-4); }
.mt-5  { margin-top: var(--space-5); }
.mt-6  { margin-top: var(--space-6); }
.mt-8  { margin-top: var(--space-8); }
.mt-10 { margin-top: var(--space-10); }
.mt-12 { margin-top: var(--space-12); }

/* Similarly for mr, mb, ml */

/* X and Y axis margins */
.mx-0    { margin-left: var(--space-0); margin-right: var(--space-0); }
.mx-1    { margin-left: var(--space-1); margin-right: var(--space-1); }
.mx-2    { margin-left: var(--space-2); margin-right: var(--space-2); }
.mx-auto { margin-left: auto; margin-right: auto; }

.my-0    { margin-top: var(--space-0); margin-bottom: var(--space-0); }
.my-1    { margin-top: var(--space-1); margin-bottom: var(--space-1); }
.my-2    { margin-top: var(--space-2); margin-bottom: var(--space-2); }
.my-auto { margin-top: auto; margin-bottom: auto; }

/* Negative margins for special layout purposes */
.mt-n1  { margin-top: calc(var(--space-1) * -1); }
.mt-n2  { margin-top: calc(var(--space-2) * -1); }
.mt-n3  { margin-top: calc(var(--space-3) * -1); }
.mt-n4  { margin-top: calc(var(--space-4) * -1); }
```

### Padding

```css
.p-0  { padding: var(--space-0); }
.p-px { padding: var(--space-px); }
.p-1  { padding: var(--space-1); }
.p-2  { padding: var(--space-2); }
.p-3  { padding: var(--space-3); }
.p-4  { padding: var(--space-4); }
.p-5  { padding: var(--space-5); }
.p-6  { padding: var(--space-6); }
.p-8  { padding: var(--space-8); }
.p-10 { padding: var(--space-10); }
.p-12 { padding: var(--space-12); }
.p-16 { padding: var(--space-16); }
.p-20 { padding: var(--space-20); }
.p-24 { padding: var(--space-24); }
.p-32 { padding: var(--space-32); }
.p-40 { padding: var(--space-40); }
.p-48 { padding: var(--space-48); }
.p-56 { padding: var(--space-56); }
.p-64 { padding: var(--space-64); }

.pt-0  { padding-top: var(--space-0); }
.pr-0  { padding-right: var(--space-0); }
.pb-0  { padding-bottom: var(--space-0); }
.pl-0  { padding-left: var(--space-0); }

.pt-1  { padding-top: var(--space-1); }
.pt-2  { padding-top: var(--space-2); }
.pt-3  { padding-top: var(--space-3); }
.pt-4  { padding-top: var(--space-4); }
.pt-5  { padding-top: var(--space-5); }
.pt-6  { padding-top: var(--space-6); }
.pt-8  { padding-top: var(--space-8); }
.pt-10 { padding-top: var(--space-10); }
.pt-12 { padding-top: var(--space-12); }

/* Similarly for pr, pb, pl */

/* X and Y axis padding */
.px-0  { padding-left: var(--space-0); padding-right: var(--space-0); }
.px-1  { padding-left: var(--space-1); padding-right: var(--space-1); }
.px-2  { padding-left: var(--space-2); padding-right: var(--space-2); }

.py-0  { padding-top: var(--space-0); padding-bottom: var(--space-0); }
.py-1  { padding-top: var(--space-1); padding-bottom: var(--space-1); }
.py-2  { padding-top: var(--space-2); padding-bottom: var(--space-2); }
```

### Usage Example:

```html
<div class="m-4 p-2">
  Element with margin 1rem and padding 0.5rem
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

.top-1 { top: var(--space-1); }
.top-2 { top: var(--space-2); }
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
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
.gap-5 { gap: var(--space-5); }

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

## Effect Utilities

```css
/* Shadows */
.shadow-sm  { box-shadow: var(--shadow-sm); }
.shadow     { box-shadow: var(--shadow); }
.shadow-md  { box-shadow: var(--shadow-md); }
.shadow-lg  { box-shadow: var(--shadow-lg); }
.shadow-xl  { box-shadow: var(--shadow-xl); }

/* Rounded corners */
.rounded      { border-radius: var(--radius-md); }
.rounded-sm   { border-radius: var(--radius-sm); }
.rounded-lg   { border-radius: var(--radius-lg); }
.rounded-full { border-radius: var(--radius-full); }

/* Transitions */
.transition-fast   { transition-duration: var(--transition-fast); }
.transition-normal { transition-duration: var(--transition-normal); }
.transition-slow   { transition-duration: var(--transition-slow); }
```

## Accessibility Utilities

```css
.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

## Height & Width Utilities

```css
/* Height with viewport units */
.h-100svh { height: 100svh; }
.h-100lvh { height: 100lvh; }
.h-100dvh { height: 100dvh; }
.h-100vh  { height: 100vh; }

/* Percentage heights */
.h-25p { height: 25%; }
.h-50p { height: 50%; }
.h-75p { height: 75%; }
.h-100p { height: 100%; }

/* Width with viewport units */
.w-100svw { width: 100svw; }
.w-100lvw { width: 100lvw; }
.w-100dvw { width: 100dvw; }
.w-100vw  { width: 100vw; }

/* Percentage widths */
.w-25p { width: 25%; }
.w-50p { width: 50%; }
.w-75p { width: 75%; }
.w-100p { width: 100%; }

/* Min and Max variants are also available */
.min-h-100p { min-height: 100%; }
.max-w-100p { max-width: 100%; }
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
---
title: Typography
category: Getting Started
---

# Typography Styles

The Typography Styles of the Casoon UI Library provide consistent and scalable text formatting for modern web applications. These styles can be used independently of components.

## Font Families

The Casoon UI Library uses a system of font families defined via CSS variables:

```css
:root {
  --font-family-base: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```

### Usage Example:

```html
<p class="font-base">Text with base font</p>
<h1 class="font-heading">Heading with heading font</h1>
<pre class="font-mono">Code with monospace font</pre>
```

## Font Sizes

The font sizes follow a consistent scale:

```css
:root {
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;
  --font-size-7xl: 4.5rem;
  --font-size-8xl: 6rem;
  --font-size-9xl: 8rem;
}
```

### Usage Example:

```html
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
```

## Line Height

The line heights are optimized for different text sizes:

```css
:root {
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}
```

### Usage Example:

```html
<p class="leading-none">Line height 1</p>
<p class="leading-tight">Line height 1.25</p>
<p class="leading-snug">Line height 1.375</p>
<p class="leading-normal">Line height 1.5</p>
<p class="leading-relaxed">Line height 1.625</p>
<p class="leading-loose">Line height 2</p>
```

## Font Weight

The various font weights are defined as CSS variables:

```css
:root {
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
```

### Usage Example:

```html
<p class="font-thin">Thin</p>
<p class="font-extralight">Extra light</p>
<p class="font-light">Light</p>
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>
<p class="font-extrabold">Extra bold</p>
<p class="font-black">Black</p>
```

## Text Alignment

Utility classes for text alignment:

```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
```

### Usage Example:

```html
<p class="text-left">Left-aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right-aligned</p>
<p class="text-justify">Justified</p>
```

## Text Decoration

Utility classes for text decoration:

```css
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }
```

### Usage Example:

```html
<p class="underline">Underlined text</p>
<p class="line-through">Strikethrough text</p>
<p class="no-underline">Text without underline</p>
```

## Text Transform

Utility classes for text transformation:

```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.normal-case { text-transform: none; }
```

### Usage Example:

```html
<p class="uppercase">Uppercase</p>
<p class="lowercase">Lowercase</p>
<p class="capitalize">Capitalized</p>
<p class="normal-case">Normal case</p>
```

## Text Colors

The text colors use the design token color palette:

```css
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-success { color: var(--color-success); }
.text-warning { color: var(--color-warning); }
.text-error { color: var(--color-error); }
.text-info { color: var(--color-info); }
```

### Usage Example:

```html
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-success">Success text color</p>
<p class="text-warning">Warning text color</p>
<p class="text-error">Error text color</p>
<p class="text-info">Info text color</p>
```

## Responsive Typography

All typography utilities can be used with breakpoint prefixes:

- `sm:` for screens ≥ 640px
- `md:` for screens ≥ 768px
- `lg:` for screens ≥ 1024px
- `xl:` for screens ≥ 1280px
- `2xl:` for screens ≥ 1536px

```html
<p class="text-base md:text-lg lg:text-xl">
  Responsive text size - base on mobile devices, larger on tablets, and even larger on desktop
</p>
```

## Best Practices for Typography

- **Consistent Font Sizes** - Use the predefined sizes from the scale
- **Optimal Readability** - Use the predefined line heights for different text sizes
- **Visual Hierarchy** - Use font weights strategically to highlight important elements
- **Combined Utilities** - Use combinations of typography utilities for complex formatting
- **Responsive Adjustment** - Use responsive prefixes for optimal readability on all devices
- **Focus on Few Font Families** - Limit yourself to a few, well-chosen font families 
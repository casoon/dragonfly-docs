---
title: Flexbox Layout system
category: Layout
---

# Flexbox Layout system

The Casoon UI Library provides a comprehensive flexbox layout system that makes it easy to create flexible and responsive layouts. This document outlines the flexbox utilities, components, and best practices for building layouts with the library.

## Overview

The flexbox system is built on these core principles:

1. **Simplicity** - Easy-to-use utilities that map directly to flexbox properties
2. **Responsiveness** - Flex behaviors that adapt to different screen sizes
3. **Composition** - Building complex layouts by combining simple utilities
4. **Semantic naming** - Class names that clearly communicate their purpose
5. **Browser compatibility** - Support for all modern browsers

## Basic Flexbox Container

To create a flexbox container, use the `flex` class:

```html
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

For an inline flex container, use the `inline-flex` class:

```html
<div class="inline-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Flex Direction

Control the direction of flex items with these utilities:

```html
<!-- Default: items arranged in a row (left to right) -->
<div class="flex flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items arranged in a row, right to left -->
<div class="flex flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items stacked in a column (top to bottom) -->
<div class="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items stacked in a column, bottom to top -->
<div class="flex flex-col-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Flex Wrap

Control how flex items wrap with these utilities:

```html
<!-- Default: items forced onto a single line -->
<div class="flex flex-nowrap">
  <!-- Items -->
</div>

<!-- Items wrap onto multiple lines if needed -->
<div class="flex flex-wrap">
  <!-- Items -->
</div>

<!-- Items wrap onto multiple lines in reverse -->
<div class="flex flex-wrap-reverse">
  <!-- Items -->
</div>
```

## Justify Content

Control how items are positioned along the main axis:

```html
<!-- Items aligned at the start -->
<div class="flex justify-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items aligned at the end -->
<div class="flex justify-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items centered -->
<div class="flex justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items distributed with equal space between them -->
<div class="flex justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items distributed with equal space around them -->
<div class="flex justify-around">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items distributed with equal space -->
<div class="flex justify-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Align Items

Control how items are positioned along the cross axis:

```html
<!-- Items stretched to fill the container -->
<div class="flex align-stretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items aligned at the start of the cross axis -->
<div class="flex align-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items aligned at the end of the cross axis -->
<div class="flex align-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items centered along the cross axis -->
<div class="flex align-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items aligned to their baselines -->
<div class="flex align-baseline">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Align Content

Control how multiple lines of items are aligned in the container:

```html
<!-- Multiple lines stretched to fill the container -->
<div class="flex flex-wrap align-content-stretch">
  <!-- Items -->
</div>

<!-- Multiple lines packed at the start -->
<div class="flex flex-wrap align-content-start">
  <!-- Items -->
</div>

<!-- Multiple lines packed at the end -->
<div class="flex flex-wrap align-content-end">
  <!-- Items -->
</div>

<!-- Multiple lines centered -->
<div class="flex flex-wrap align-content-center">
  <!-- Items -->
</div>

<!-- Multiple lines with space between -->
<div class="flex flex-wrap align-content-between">
  <!-- Items -->
</div>

<!-- Multiple lines with space around -->
<div class="flex flex-wrap align-content-around">
  <!-- Items -->
</div>
```

## Gap Between Items

Add spacing between flex items:

```html
<!-- Gap of 1 spacing unit (0.25rem) between items -->
<div class="flex gap-1">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Gap of 4 spacing units (1rem) between items -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Different row and column gaps -->
<div class="flex flex-wrap gap-x-2 gap-y-4">
  <!-- Items -->
</div>
```

## Individual Flex Item Properties

Control properties of individual flex items:

### Flex Grow

```html
<div class="flex">
  <!-- Default: does not grow -->
  <div class="flex-grow-0">Does not grow</div>
  
  <!-- Grows to fill available space -->
  <div class="flex-grow">Grows</div>
  
  <!-- Grows with factor of 2 (twice as much as flex-grow) -->
  <div class="flex-grow-2">Grows more</div>
</div>
```

### Flex Shrink

```html
<div class="flex">
  <!-- Default: can shrink if needed -->
  <div class="flex-shrink">Can shrink</div>
  
  <!-- Will not shrink -->
  <div class="flex-shrink-0">Cannot shrink</div>
</div>
```

### Flex base

```html
<div class="flex">
  <!-- Auto base (uses the item's content size) -->
  <div class="flex-base-auto">Auto base</div>
  
  <!-- Specific base width -->
  <div class="flex-base-1/4">25% base</div>
  <div class="flex-base-1/3">33% base</div>
  <div class="flex-base-1/2">50% base</div>
  <div class="flex-base-full">100% base</div>
</div>
```

### Shorthand Flex Property

```html
<div class="flex">
  <!-- flex: 1 1 0% -->
  <div class="flex-1">Grows and shrinks, with 0 base</div>
  
  <!-- flex: 1 1 auto -->
  <div class="flex-auto">Grows and shrinks, with auto base</div>
  
  <!-- flex: 0 1 auto -->
  <div class="flex-initial">Default behavior</div>
  
  <!-- flex: none -->
  <div class="flex-none">Cannot grow or shrink</div>
</div>
```

### Self Alignment

Override the container's alignment for specific items:

```html
<div class="flex align-start">
  <div>Default alignment</div>
  
  <!-- Override with self alignment -->
  <div class="self-auto">Auto (use parent's align-items)</div>
  <div class="self-start">Align self at start</div>
  <div class="self-end">Align self at end</div>
  <div class="self-center">Align self at center</div>
  <div class="self-stretch">Stretch self</div>
  <div class="self-baseline">Align to baseline</div>
</div>
```

### Order

Change the visual order of flex items:

```html
<div class="flex">
  <!-- Higher order items appear later -->
  <div class="order-3">Visually third</div>
  <div class="order-1">Visually first</div>
  <div class="order-2">Visually second</div>
  
  <!-- Negative orders appear before positive ones -->
  <div class="order-n1">Appears before all positive orders</div>
</div>
```

## Responsive Flex Utilities

All flex utilities can be made responsive by adding breakpoint prefixes:

```html
<!-- Row on small screens, column on medium and up -->
<div class="flex flex-row flex-md-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Items aligned at start on small screens, centered on large screens -->
<div class="flex justify-start justify-lg-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Item grows on medium screens and up -->
<div class="flex">
  <div class="flex-grow-0 flex-md-grow">Grows on medium and up</div>
  <div>Item 2</div>
</div>
```

Available breakpoint prefixes:
- `sm-` - Small screens (≥576px)
- `md-` - Medium screens (≥768px)
- `lg-` - Large screens (≥992px)
- `xl-` - Extra large screens (≥1200px)
- `xxl-` - Extra extra large screens (≥1400px)

## Common Flex Layout Patterns

### Card Grid

```html
<div class="flex flex-wrap gap-4">
  <!-- Cards that wrap to new lines, taking up different amounts of space -->
  <div class="flex-base-full flex-md-base-1/2 flex-lg-base-1/3">
    <div class="card">Card 1</div>
  </div>
  <div class="flex-base-full flex-md-base-1/2 flex-lg-base-1/3">
    <div class="card">Card 2</div>
  </div>
  <div class="flex-base-full flex-md-base-1/2 flex-lg-base-1/3">
    <div class="card">Card 3</div>
  </div>
  <!-- More cards -->
</div>
```

### Holy Grail Layout

```html
<div class="flex flex-col min-h-screen">
  <!-- Header -->
  <header class="bg-primary text-white p-4">
    Header
  </header>
  
  <!-- Main content area with sidebar -->
  <div class="flex flex-grow flex-col flex-md-row">
    <!-- Sidebar -->
    <nav class="flex-base-full flex-md-base-1/4 flex-shrink-0 bg-light p-4">
      Sidebar
    </nav>
    
    <!-- Main content -->
    <main class="flex-grow p-4">
      Main Content
    </main>
    
    <!-- Optional secondary sidebar -->
    <aside class="flex-base-full flex-md-base-1/5 flex-shrink-0 bg-light p-4">
      Secondary Sidebar
    </aside>
  </div>
  
  <!-- Footer -->
  <footer class="bg-dark text-white p-4">
    Footer
  </footer>
</div>
```

### Sticky Footer

```html
<div class="flex flex-col min-h-screen">
  <!-- Content that pushes footer down -->
  <main class="flex-grow">
    Main content
  </main>
  
  <!-- Footer that stays at the bottom -->
  <footer class="bg-dark text-white p-4">
    Footer
  </footer>
</div>
```

### Navigation Bar

```html
<nav class="flex justify-between align-center p-4 bg-primary text-white">
  <!-- Logo on the left -->
  <div class="flex-shrink-0">
    <img src="logo.png" alt="Logo" class="h-8">
  </div>
  
  <!-- Navigation links in the center (hidden on mobile) -->
  <div class="hidden flex-md-grow flex-md-block justify-center">
    <ul class="flex gap-4">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  
  <!-- Actions on the right -->
  <div class="flex gap-2">
    <button class="btn btn-outline-light">Sign In</button>
    <button class="btn btn-light">Sign Up</button>
  </div>
</nav>
```

### Centered Content

```html
<!-- Horizontally and vertically centered content -->
<div class="flex justify-center align-center min-h-screen">
  <div class="card">
    <h2>Centered Card</h2>
    <p>This card is perfectly centered on the page.</p>
  </div>
</div>
```

### Split Screen

```html
<div class="flex flex-col flex-md-row min-h-screen">
  <!-- Left half -->
  <div class="flex-base-full flex-md-base-1/2 bg-primary text-white p-8 flex justify-center align-center">
    <div>
      <h1>Welcome</h1>
      <p>Left side content</p>
    </div>
  </div>
  
  <!-- Right half -->
  <div class="flex-base-full flex-md-base-1/2 p-8 flex justify-center align-center">
    <div>
      <h2>Sign In</h2>
      <form>
        <!-- Form fields -->
      </form>
    </div>
  </div>
</div>
```

## Flex Layout Components

The library includes pre-built flex layout components:

### Flex Container

```html
<!-- Standardized flex container with common options -->
<div class="flex-container gap-4 justify-between align-center">
  <!-- Content -->
</div>
```

### Flex Row

```html
<!-- Row component with built-in gap and responsive options -->
<div class="flex-row flex-row-wrap gap-4">
  <div class="flex-col-12 flex-col-md-6 flex-col-lg-4">Column 1</div>
  <div class="flex-col-12 flex-col-md-6 flex-col-lg-4">Column 2</div>
  <div class="flex-col-12 flex-col-md-6 flex-col-lg-4">Column 3</div>
</div>
```

### Flex Col

```html
<!-- Column component for vertical layouts -->
<div class="flex-col gap-4 align-stretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Spacer

```html
<!-- Flex spacer that grows to fill available space -->
<div class="flex justify-between">
  <div>Left content</div>
  <div class="flex-spacer"></div>
  <div>Right content</div>
</div>
```

## CSS Implementation

The flex utilities are implemented using a comprehensive set of CSS rules:

```css
/* Basic flex containers */
.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

/* Flex direction */
.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

/* Flex wrap */
.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/* Justify content */
.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

/* Align items */
.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

.align-center {
  align-items: center;
}

.align-baseline {
  align-items: baseline;
}

.align-stretch {
  align-items: stretch;
}

/* ... Additional flex utilities ... */
```

## Responsive implementation:

```css
/* Medium screen and up */
@media (min-width: 768px) {
  .flex-md {
    display: flex;
  }
  
  .flex-md-row {
    flex-direction: row;
  }
  
  .flex-md-col {
    flex-direction: column;
  }
  
  .justify-md-center {
    justify-content: center;
  }
  
  /* ... additional responsive utilities ... */
}
```

## Best Practices

1. **Start with a clear layout structure** - Plan your flex containers and items before implementation
2. **Use the appropriate flex direction** - Choose row or column based on your content flow
3. **Be mindful of nested flex containers** - Each container can have its own flex properties
4. **Use flex-grow and flex-shrink intentionally** - Consider how items should behave when space changes
5. **Combine with the spacing system** - Use gap utilities instead of margins when possible
6. **Design for mobile first** - Start with a mobile layout, then enhance for larger screens
7. **Test on different screen sizes** - Ensure your flex layouts adapt correctly
8. **Consider accessibility** - Ensure the visual order matches the DOM order when possible
9. **Use logical properties** - For internationalized layouts, use logical flex utilities
10. **Avoid fixed heights** - Let content determine height when possible

## Browser Compatibility

The flexbox system is supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Flexbox | 29+ | 28+ | 9+ | 12+ |
| Gap Property | 84+ | 63+ | 14.1+ | 84+ |

For browsers that don't support the gap property, the library provides fallbacks using margins.

## Resources

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Summary

The Casoon UI Library's flexbox layout system provides a comprehensive set of utilities and components for creating flexible, responsive layouts. By using the predefined classes and following the best practices, you can efficiently build complex layouts that adapt to different screen sizes and content requirements. 
---
title: Responsive Design System
category: Layout
---

# Responsive Design System

The Casoon UI Library implements a comprehensive responsive design system that allows your interfaces to adapt seamlessly across different screen sizes and devices. This document outlines the responsive breakpoints, layout utilities, and best practices for creating responsive interfaces.

## Overview

The responsive system is built on these core principles:

1. **Mobile-first approach** - Designs start from the smallest screens and scale up
2. **Consistent breakpoints** - Standardized viewport sizes for consistent behavior
3. **Fluid layouts** - Components that adapt to their containers
4. **Responsive utilities** - Helper classes for responsive behavior
5. **Minimal overrides** - Only change what's necessary at each breakpoint

## Breakpoints

The library defines these standard breakpoints:

```css
:root {
  /* Breakpoint values (in pixels) */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}
```

These breakpoints represent the minimum viewport width at which each size class begins:

| Breakpoint | Description | Typical devices |
|------------|-------------|-----------------|
| xs | Extra small | Portrait phones (<576px) |
| sm | Small | Landscape phones (≥576px) |
| md | Medium | Tablets (≥768px) |
| lg | Large | Desktops (≥992px) |
| xl | Extra large | Large desktops (≥1200px) |
| xxl | Extra extra large | Larger desktops (≥1400px) |

## Media Queries

The library provides CSS variables for media queries to ensure consistent usage:

```css
/* Base styles (mobile-first) */
.element {
  width: 100%;
}

/* Small devices and up */
@media (min-width: var(--breakpoint-sm)) {
  .element {
    width: 540px;
  }
}

/* Medium devices and up */
@media (min-width: var(--breakpoint-md)) {
  .element {
    width: 720px;
  }
}

/* Large devices and up */
@media (min-width: var(--breakpoint-lg)) {
  .element {
    width: 960px;
  }
}

/* Extra large devices and up */
@media (min-width: var(--breakpoint-xl)) {
  .element {
    width: 1140px;
  }
}

/* Extra extra large devices and up */
@media (min-width: var(--breakpoint-xxl)) {
  .element {
    width: 1320px;
  }
}
```

## Container System

The library provides responsive containers that set a maximum width at each breakpoint:

```html
<!-- Responsive container with width limits at each breakpoint -->
<div class="container">
  <!-- Content -->
</div>

<!-- Full-width container at all breakpoints -->
<div class="container-fluid">
  <!-- Content -->
</div>

<!-- Container that's 100% width until a specific breakpoint -->
<div class="container-md">
  <!-- 100% width below md breakpoint, then contained -->
</div>
```

Container behavior:

| Class | xs (<576px) | sm (≥576px) | md (≥768px) | lg (≥992px) | xl (≥1200px) | xxl (≥1400px) |
|-------|-------------|-------------|-------------|-------------|--------------|---------------|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-xxl` | 100% | 100% | 100% | 100% | 100% | 1320px |

## Responsive Grid System

The library includes a flexible 12-column grid system:

```html
<div class="container">
  <div class="row">
    <!-- Full width on extra small screens, half width on medium and up -->
    <div class="col-12 col-md-6">Column 1</div>
    
    <!-- Full width on extra small screens, half width on medium and up -->
    <div class="col-12 col-md-6">Column 2</div>
  </div>
  
  <div class="row">
    <!-- Different column sizes at different breakpoints -->
    <div class="col-12 col-sm-6 col-lg-3">Column 1</div>
    <div class="col-12 col-sm-6 col-lg-3">Column 2</div>
    <div class="col-12 col-sm-6 col-lg-3">Column 3</div>
    <div class="col-12 col-sm-6 col-lg-3">Column 4</div>
  </div>
</div>
```

### Column Sizing

Column classes follow this naming pattern: `col-{breakpoint}-{size}`, where:
- `{breakpoint}` is the responsive breakpoint (xs, sm, md, lg, xl, xxl)
- `{size}` is the column width from 1 to 12

Omitting the breakpoint (using just `col-{size}`) applies at all screen sizes:

```html
<div class="row">
  <!-- Always takes up 6 columns (half width) -->
  <div class="col-6">Half width</div>
  
  <!-- Always takes up 6 columns (half width) -->
  <div class="col-6">Half width</div>
</div>
```

### Auto-Layout Columns

Columns can automatically share the available space:

```html
<div class="row">
  <!-- Three equal-width columns at all breakpoints -->
  <div class="col">Equal</div>
  <div class="col">Equal</div>
  <div class="col">Equal</div>
</div>

<div class="row">
  <!-- First column is twice as wide as the others -->
  <div class="col-6">Wider</div>
  <div class="col">Auto</div>
  <div class="col">Auto</div>
</div>
```

### Column Wrapping

When the sum of column sizes exceeds 12, columns wrap to a new line:

```html
<div class="row">
  <div class="col-8">Column 1 (8/12)</div>
  <div class="col-6">Column 2 (6/12) - Wraps to next line</div>
  <div class="col-4">Column 3 (4/12)</div>
</div>
```

### Column Offsets

Offset classes move columns to the right:

```html
<div class="row">
  <!-- Takes up 4 columns, offset by 2 from the left -->
  <div class="col-4 offset-2">Offset column</div>
  
  <!-- Takes up 4 columns -->
  <div class="col-4">Regular column</div>
</div>
```

### Column Ordering

Column order can be changed at different breakpoints:

```html
<div class="row">
  <!-- First on mobile, second on desktop -->
  <div class="col-12 col-md-6 order-1 order-md-2">
    First on mobile
  </div>
  
  <!-- Second on mobile, first on desktop -->
  <div class="col-12 col-md-6 order-2 order-md-1">
    Second on mobile
  </div>
</div>
```

## Responsive Utilities

### Display Utilities

Control element visibility at different breakpoints:

```html
<!-- Hidden on small screens, visible on medium and up -->
<div class="d-none d-md-block">
  Visible on medium screens and up
</div>

<!-- Visible only on small screens -->
<div class="d-block d-md-none">
  Visible only on small screens
</div>

<!-- Shown as block on small, as flex on large -->
<div class="d-block d-lg-flex">
  Changes display type
</div>
```

Available display classes for each breakpoint:
- `d-{breakpoint}-none` - Hide element
- `d-{breakpoint}-block` - Display as block
- `d-{breakpoint}-inline` - Display as inline
- `d-{breakpoint}-inline-block` - Display as inline-block
- `d-{breakpoint}-flex` - Display as flex
- `d-{breakpoint}-inline-flex` - Display as inline-flex
- `d-{breakpoint}-grid` - Display as grid
- `d-{breakpoint}-table` - Display as table

### Responsive Spacing

Control margins and padding at different breakpoints:

```html
<!-- No margin on small screens, margin top 3 units on medium and up -->
<div class="mt-0 mt-md-3">
  Responsive margin top
</div>

<!-- Padding left 2 units on all screens, 4 units on large and up -->
<div class="pl-2 pl-lg-4">
  Responsive padding left
</div>
```

### Responsive Text Alignment

Change text alignment at different breakpoints:

```html
<!-- Left-aligned on small screens, centered on medium and up -->
<p class="text-left text-md-center">
  Responsive text alignment
</p>

<!-- Center on mobile, right-align on large screens -->
<p class="text-center text-lg-right">
  Different alignment
</p>
```

## Responsive Images

The library provides utilities for responsive images:

```html
<!-- Responsive image that scales with its container -->
<img src="image.jpg" class="img-fluid" alt="Responsive image">

<!-- Responsive image with maximum dimensions -->
<img src="image.jpg" class="img-fluid img-max" alt="Responsive image with max width">

<!-- Maintain aspect ratio for embedded content -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="video.mp4" allowfullscreen></iframe>
</div>
```

## Media Query Mixins

For custom components, the library provides mixins to apply responsive styles:

```scss
// SCSS mixins
@mixin media-breakpoint-up($breakpoint) {
  @media (min-width: var(--breakpoint-#{$breakpoint})) {
    @content;
  }
}

@mixin media-breakpoint-down($breakpoint) {
  @media (max-width: calc(var(--breakpoint-#{$breakpoint}) - 0.1px)) {
    @content;
  }
}

// Usage
.custom-component {
  font-size: 14px;
  
  @include media-breakpoint-up(md) {
    font-size: 16px;
  }
  
  @include media-breakpoint-up(lg) {
    font-size: 18px;
  }
}
```

## Responsive Typography

The library includes a responsive typography system:

```css
/* Base font size is responsive */
:root {
  font-size: 14px;
}

@media (min-width: var(--breakpoint-md)) {
  :root {
    font-size: 16px;
  }
}

/* Headings scale based on viewport width */
h1 {
  font-size: calc(1.375rem + 1.5vw);
}

h2 {
  font-size: calc(1.325rem + 0.9vw);
}

@media (min-width: var(--breakpoint-xl)) {
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}
```

## Responsive Component Examples

### Responsive Navigation

```html
<!-- Navbar that collapses on small screens -->
<nav class="navbar">
  <div class="container">
    <a class="navbar-brand" href="/">Brand</a>
    
    <!-- Visible only on small screens -->
    <button class="navbar-toggle d-md-none">
      <span class="navbar-toggle-icon"></span>
    </button>
    
    <!-- Collapses on small screens -->
    <div class="navbar-collapse d-none d-md-flex">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Responsive Card Layout

```html
<div class="container">
  <div class="row">
    <!-- Cards stack on mobile, 2 per row on tablet, 3 per row on desktop -->
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card">
        <img src="image1.jpg" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Card content goes here.</p>
        </div>
      </div>
    </div>
    
    <!-- Repeat for other cards -->
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card"><!-- Card content --></div>
    </div>
    
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card"><!-- Card content --></div>
    </div>
  </div>
</div>
```

### Responsive Tables

```html
<!-- Table with horizontal scroll on small screens -->
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start Date</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>Developer</td>
        <td>New York</td>
        <td>33</td>
        <td>2019/05/12</td>
        <td>$75,000</td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</div>

<!-- Responsive at specific breakpoint -->
<div class="table-responsive-lg">
  <table class="table"><!-- Table content --></table>
</div>
```

## Best Practices

1. **Always design mobile-first** - Start with the smallest screen and add complexity for larger screens
2. **Use relative units** - Prefer rem, em, and percentages over fixed pixel values
3. **Test on real devices** - Emulators and responsive tools are helpful but not perfect
4. **Consider touch interfaces** - Ensure tap targets are large enough (at least 44x44px)
5. **Optimize images** - Use responsive images with appropriate sizes for different devices
6. **Minimize media queries** - Use the built-in responsive utilities where possible
7. **Consider performance** - Mobile devices may have slower connections and processors
8. **Use feature detection** - Don't assume capabilities based on screen size
9. **Maintain content priority** - Ensure the most important content is accessible on all devices
10. **Use device testing tools** - Browser dev tools can simulate different devices

## Browser Compatibility

The responsive features are supported across all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Media Queries | Full | Full | Full | Full |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Flexbox | 29+ | 28+ | 9+ | 12+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |

## Additional Resources

- [MDN Web Docs: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Summary

The Casoon UI Library's responsive design system provides a comprehensive set of tools and utilities for creating interfaces that work well across all screen sizes and devices. By following the mobile-first approach and using the provided components and utilities, you can build applications that deliver a consistent experience to all users regardless of their device. 
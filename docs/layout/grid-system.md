---
title: Grid system
category: Layout
---

# Grid system

The Casoon UI Library implements a powerful CSS Grid system that enables complex, two-dimensional layouts with minimal markup. This document outlines the grid utilities, components, and best practices for creating advanced layouts.

## Overview

The grid system is built on these core principles:

1. **Two-dimensional layouts** - Control both rows and columns simultaneously
2. **Named grid areas** - Create complex layouts with semantic area names
3. **Responsive grid templates** - Adapt grid structures across breakpoints
4. **Minimal markup** - Create sophisticated layouts with less HTML
5. **Browser compatibility** - Support for all modern browsers

## Basic Grid Container

To create a grid container, use the `grid` class:

```html
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

By default, this creates a single-column grid. You can specify the number of columns using the `grid-cols-{n}` utilities:

```html
<!-- 3-column grid -->
<div class="grid grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

## Grid Template Columns

Control the columns in your grid with these utilities:

```html
<!-- Equal-width columns -->
<div class="grid grid-cols-2">
  <div>Equal width</div>
  <div>Equal width</div>
</div>

<!-- Fixed-width columns -->
<div class="grid grid-cols-fixed-200">
  <div>200px wide</div>
  <div>200px wide</div>
  <div>200px wide</div>
</div>

<!-- Mixed-width columns -->
<div class="grid grid-cols-mixed">
  <div>1fr</div>
  <div>2fr</div>
  <div>1fr</div>
</div>

<!-- Auto-width columns -->
<div class="grid grid-cols-auto-fill">
  <div>Auto-sized</div>
  <div>Auto-sized</div>
  <div>Auto-sized</div>
</div>
```

Advanced column templates:

```html
<!-- Custom column template with responsive variants -->
<div class="grid grid-cols-custom grid-cols-md-custom-alt">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<style>
.grid-cols-custom {
  grid-template-columns: minmax(100px, 1fr) 2fr minmax(100px, 1fr);
}

@media (min-width: 768px) {
  .grid-cols-md-custom-alt {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
```

## Grid Template Rows

Control the rows in your grid:

```html
<!-- Explicit 3-row grid -->
<div class="grid grid-rows-3">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</div>

<!-- Auto rows with minimum height -->
<div class="grid grid-rows-auto-min-100">
  <div>At least 100px tall</div>
  <div>At least 100px tall</div>
</div>

<!-- Mixed row heights -->
<div class="grid grid-rows-mixed">
  <div>Auto</div>
  <div>200px</div>
  <div>1fr</div>
</div>
```

## Grid Gap

Add spacing between grid items:

```html
<!-- Uniform gap -->
<div class="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>

<!-- Different column and row gaps -->
<div class="grid grid-cols-3 gap-x-2 gap-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

## Grid Item Placement

Control how items are placed in the grid:

### Grid Column Span

```html
<div class="grid grid-cols-3">
  <!-- Spans 2 columns -->
  <div class="col-span-2">Spans 2 columns</div>
  
  <!-- Regular 1 column item -->
  <div>Regular item</div>
  
  <!-- Spans all 3 columns -->
  <div class="col-span-3">Spans all columns</div>
  
  <!-- Regular items -->
  <div>Regular item</div>
  <div>Regular item</div>
  <div>Regular item</div>
</div>
```

### Grid Row Span

```html
<div class="grid grid-cols-3 grid-rows-3">
  <!-- Spans 2 rows -->
  <div class="row-span-2">Spans 2 rows</div>
  
  <!-- Regular items -->
  <div>Regular item</div>
  <div>Regular item</div>
  <div>Regular item</div>
  <div>Regular item</div>
  <div>Regular item</div>
  
  <!-- Spans 3 rows -->
  <div class="row-span-3">Spans all rows</div>
</div>
```

### Grid Item Position

```html
<div class="grid grid-cols-3 grid-rows-3">
  <!-- Positioned at specific grid lines -->
  <div class="col-start-1 col-end-3 row-start-1 row-end-3">
    Area spanning columns 1-2 and rows 1-2
  </div>
  
  <!-- Using span with starting position -->
  <div class="col-start-3 row-start-1 row-span-2">
    Right column, top 2 rows
  </div>
  
  <!-- Bottom row, spanning all columns -->
  <div class="col-span-3 row-start-3">
    Bottom row, full width
  </div>
</div>
```

## Grid Template Areas

Create layouts using named template areas:

```html
<div class="grid grid-template-areas-basic">
  <header class="grid-area-header">Header</header>
  <nav class="grid-area-sidebar">Sidebar</nav>
  <main class="grid-area-main">Main Content</main>
  <footer class="grid-area-footer">Footer</footer>
</div>

<style>
.grid-template-areas-basic {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}

.grid-area-header { grid-area: header; }
.grid-area-sidebar { grid-area: sidebar; }
.grid-area-main { grid-area: main; }
.grid-area-footer { grid-area: footer; }
</style>
```

## Responsive Grid

Create grids that adapt to different screen sizes:

```html
<!-- 1 column on mobile, 2 columns on tablets, 4 columns on desktop -->
<div class="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- Different template areas on different screen sizes -->
<div class="grid grid-template-areas-mobile grid-template-areas-md-desktop">
  <header class="grid-area-header">Header</header>
  <nav class="grid-area-sidebar">Sidebar</nav>
  <main class="grid-area-main">Main Content</main>
  <aside class="grid-area-aside">Aside</aside>
  <footer class="grid-area-footer">Footer</footer>
</div>

<style>
/* Mobile layout (stacked) */
.grid-template-areas-mobile {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "aside"
    "footer";
}

/* Desktop layout (side-by-side) */
@media (min-width: 768px) {
  .grid-template-areas-md-desktop {
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
  }
}
</style>
```

## Grid Auto Flow

Control how auto-placed items flow in the grid:

```html
<!-- Items flow by row (default) -->
<div class="grid grid-cols-3 grid-flow-row">
  <!-- Items -->
</div>

<!-- Items flow by column -->
<div class="grid grid-rows-3 grid-flow-col">
  <!-- Items -->
</div>

<!-- Dense packing algorithm to fill holes -->
<div class="grid grid-cols-3 grid-flow-dense">
  <div>Item 1</div>
  <div class="col-span-2">Item 2 (spans 2)</div>
  <div>Item 3</div>
  <div class="col-span-2">Item 4 (spans 2)</div>
  <!-- The grid will place smaller items in any available spaces -->
</div>
```

## Grid Auto Columns and Rows

Set default sizes for automatically generated columns and rows:

```html
<!-- Auto columns with minimum width -->
<div class="grid grid-auto-cols-min">
  <!-- Items positioned explicitly with col-start/col-end -->
</div>

<!-- Auto rows with fixed height -->
<div class="grid grid-auto-rows-200">
  <!-- Many items that will create implicit rows -->
</div>

<!-- Auto rows with minmax -->
<div class="grid grid-auto-rows-minmax">
  <!-- Items with variable content -->
</div>
```

## Common Grid Layout Patterns

### Card Grid

```html
<!-- Responsive card grid with minimum column width -->
<div class="grid grid-cols-auto-fit-250 gap-4">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>

<style>
.grid-cols-auto-fit-250 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
```

### Holy Grail Layout

```html
<div class="grid grid-holy-grail min-h-screen">
  <header class="grid-area-header bg-primary text-white p-4">
    Header
  </header>
  
  <nav class="grid-area-nav bg-light p-4">
    Navigation
  </nav>
  
  <main class="grid-area-main p-4">
    Main Content
  </main>
  
  <aside class="grid-area-aside bg-light p-4">
    Sidebar
  </aside>
  
  <footer class="grid-area-footer bg-dark text-white p-4">
    Footer
  </footer>
</div>

<style>
.grid-holy-grail {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}

@media (max-width: 768px) {
  .grid-holy-grail {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
  }
}
</style>
```

### Dashboard Layout

```html
<div class="grid grid-dashboard gap-4">
  <div class="grid-area-header bg-white shadow p-4">Header</div>
  <div class="grid-area-sidebar bg-light p-4">Sidebar</div>
  <div class="grid-area-main bg-white shadow p-4">Main Content</div>
  <div class="grid-area-chart1 bg-white shadow p-4">Chart 1</div>
  <div class="grid-area-chart2 bg-white shadow p-4">Chart 2</div>
  <div class="grid-area-table bg-white shadow p-4">Table</div>
</div>

<style>
.grid-dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar chart1 chart2"
    "sidebar table table";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr 1fr auto;
  min-height: 100vh;
}

@media (max-width: 992px) {
  .grid-dashboard {
    grid-template-areas:
      "header header"
      "sidebar main"
      "chart1 chart2"
      "table table";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }
}

@media (max-width: 576px) {
  .grid-dashboard {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "chart1"
      "chart2"
      "table";
    grid-template-columns: 1fr;
  }
}
</style>
```

### Photo Gallery

```html
<div class="grid grid-gallery gap-2">
  <div class="gallery-item gallery-item-featured">
    <img src="featured.jpg" alt="Featured image">
  </div>
  <div class="gallery-item">
    <img src="image1.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image2.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item">
    <img src="image3.jpg" alt="Gallery image">
  </div>
  <div class="gallery-item gallery-item-wide">
    <img src="wide.jpg" alt="Wide image">
  </div>
  <div class="gallery-item">
    <img src="image4.jpg" alt="Gallery image">
  </div>
</div>

<style>
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item-featured {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item-wide {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .grid-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
```

## Grid Components

The library includes pre-built grid components:

### Grid Container

```html
<!-- Standard grid container with common options -->
<div class="grid-container gap-4 cols-3">
  <!-- Grid items -->
</div>
```

### Grid Areas Component

```html
<!-- Predefined grid areas layout -->
<div class="grid-areas-layout-1">
  <div class="grid-area-header">Header</div>
  <div class="grid-area-sidebar">Sidebar</div>
  <div class="grid-area-main">Main</div>
  <div class="grid-area-footer">Footer</div>
</div>
```

### Auto-fit Grid

```html
<!-- Automatically fit as many items as possible with minimum width -->
<div class="grid-autofit-cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <!-- Add as many cards as needed -->
</div>
```

## CSS Implementation

The grid utilities are implemented using a comprehensive set of CSS rules:

```css
/* Basic grid container */
.grid {
  display: grid;
}

/* Column utilities */
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* ... more column definitions ... */

/* Row utilities */
.grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

/* ... more row definitions ... */

/* Gap utilities */
.gap-1 {
  gap: var(--space-1);
}

.gap-2 {
  gap: var(--space-2);
}

/* ... more gap definitions ... */

/* Column and row gaps */
.gap-x-4 {
  column-gap: var(--space-4);
}

.gap-y-4 {
  row-gap: var(--space-4);
}

/* Item placement utilities */
.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

/* ... more span definitions ... */

.col-start-1 {
  grid-column-start: 1;
}

.col-end-3 {
  grid-column-end: 3;
}

/* ... and so on for row spans and positions ... */
```

## Responsive implementation:

```css
/* Medium screen and up */
@media (min-width: 768px) {
  .grid-cols-md-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .grid-cols-md-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  /* ... additional responsive utilities ... */
}
```

## Best Practices

1. **Plan your grid layout** - Sketch the grid structure before implementing
2. **Use grid template areas** for complex layouts with clear regions
3. **Prefer minmax()** over fixed units to create flexible layouts
4. **Set reasonable minimums** for auto-sized columns and rows
5. **Use auto-fit/auto-fill** for responsive grids that adapt to available space
6. **Test on different screen sizes** to ensure proper responsiveness
7. **Combine with flexbox** when appropriate (grid for overall layout, flexbox for component alignment)
8. **Consider nesting grids** for complex layouts with different requirements
9. **Use logical properties** for internationalized layouts
10. **Ensure accessibility** by maintaining a logical reading order

## Browser Compatibility

The grid system is supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Grid | 57+ | 52+ | 10.1+ | 16+ |
| Grid Areas | 57+ | 52+ | 10.1+ | 16+ |
| Gap Property | 66+ | 61+ | 10.1+ | 16+ |
| Auto-fit/fill | 57+ | 52+ | 10.1+ | 16+ |

For browsers without grid support, the library provides a flexbox-based fallback system.

## Resources

- [MDN Grid Layout Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Summary

The Casoon UI Library's grid system provides a powerful set of tools for creating complex, responsive layouts with minimal markup. By using the predefined grid utilities and components, you can efficiently build sophisticated page structures that adapt to different screen sizes and content requirements. 
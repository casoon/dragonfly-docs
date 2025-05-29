---
title: Comprehensive Grid Layout Guide
category: Guide
---

# Comprehensive Grid Layout Guide

This guide provides comprehensive instructions for creating effective grid layouts with the Casoon UI Library. It includes practical examples, best practices, and solutions for common layout patterns.

## Basic Understanding of the Grid system

The Grid system of the Casoon UI Library is based on CSS Grid and offers flexible options for complex layouts. It is fully responsive and follows the mobile-first approach.

### Importing Core CSS

All grid functionality is included in the core.css, which is optimized for Lightning CSS:

```css
@import '@casoon/ui-lib/core.css';
```

This import loads all basic layout and grid features. Note, however, that components and effects must be imported separately:

```css
/* Core system for layout and grid */
@import '@casoon/ui-lib/core.css';

/* Components must be imported individually */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/components/card.css';

/* Effects must also be imported individually */
@import '@casoon/ui-lib/effects/hover.css';
@import '@casoon/ui-lib/effects/transitions.css';
```

The CSS layer system ensures that all imports are loaded in the correct order.

### Benefits of the Layer system for Grid Layouts

The CSS layer system of the Casoon UI Library allows precise control of CSS specificity and prevents conflicts between different styling rules. The grid components benefit from this structure because they:

- Are easily customizable without compromising basic functionality
- Ensure consistent spacing and layout patterns
- Work seamlessly with other components
- Have a clear hierarchy in the styling cascade

## Basic Grid Layouts

### Simple Grid with Equal Columns

```html
<div class="grid grid-cols-3 gap-4">
  <div class="p-4 bg-light">Column 1</div>
  <div class="p-4 bg-light">Column 2</div>
  <div class="p-4 bg-light">Column 3</div>
</div>
```

This example creates a three-column grid with equal column widths and a spacing of 1rem (16px) between elements.

### Responsive Grid with Breakpoints

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="p-4 bg-light">Item 1</div>
    <div class="p-4 bg-light">Item 2</div>
    <div class="p-4 bg-light">Item 3</div>
    <div class="p-4 bg-light">Item 4</div>
  </div>
</div>
```

This example shows a grid that adjusts its column count based on container size:
- Default (small): 1 column
- From 30rem (480px): 2 columns
- From 48rem (768px): 3 columns
- From 62rem (992px): 4 columns

## Advanced Grid Layouts

### Asymmetric Layout

```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8 p-4 bg-light">Main content (8/12)</div>
  <div class="col-span-4 p-4 bg-light">Sidebar (4/12)</div>
</div>
```

With the 12-column system, you can easily create asymmetric layouts. In the example above, the main content takes up 2/3 of the available width, while the sidebar takes up 1/3.

### Responsive Asymmetric Layout

```html
<div class="container-query">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-8 p-4 bg-light">
      Main content (full width on mobile, 8/12 on tablet+)
    </div>
    <div class="col-span-12 md:col-span-4 p-4 bg-light">
      Sidebar (full width on mobile, 4/12 on tablet+)
    </div>
  </div>
</div>
```

This layout stacks the elements on mobile devices (one column) and switches to an asymmetric layout on larger screens.

### Nested Grid

```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8 p-4 bg-light">
    <h2>Main content</h2>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="p-4 bg-white">Subcontent 1</div>
      <div class="p-4 bg-white">Subcontent 2</div>
    </div>
  </div>
  <div class="col-span-4 p-4 bg-light">Sidebar</div>
</div>
```

Grids can be nested to create more complex layouts. In this example, the main content itself has a two-column grid.

## Practical Layout Patterns

### Card Grid

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <!-- Card 1 -->
    <div class="p-4 rounded-lg shadow-md bg-white">
      <img src="image1.jpg" alt="Image 1" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold mb-2">Title 1</h3>
      <p class="text-gray-600">Description for card 1...</p>
      <button class="mt-4 bg-primary text-white px-4 py-2 rounded-md">Details</button>
    </div>
    
    <!-- More cards in the same format -->
    <div class="p-4 rounded-lg shadow-md bg-white">
      <img src="image2.jpg" alt="Image 2" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold mb-2">Title 2</h3>
      <p class="text-gray-600">Description for card 2...</p>
      <button class="mt-4 bg-primary text-white px-4 py-2 rounded-md">Details</button>
    </div>
    
    <!-- More cards here -->
  </div>
</div>
```

This pattern is ideal for product galleries, blog posts, or other content that should be displayed as cards.

### Masonry-like Layout

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="p-4 bg-light" style="grid-row: span 2;">Large item</div>
    <div class="p-4 bg-light">Normal item</div>
    <div class="p-4 bg-light">Normal item</div>
    <div class="p-4 bg-light" style="grid-row: span 2;">Large item</div>
    <div class="p-4 bg-light">Normal item</div>
    <div class="p-4 bg-light">Normal item</div>
  </div>
</div>
```

With `grid-row: span X` you can create a Masonry-like layout where some elements take up more vertical space than others.

### Holy Grail Layout (Header, Footer, Sidebar, Content)

```html
<div class="grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-screen gap-4">
  <!-- Header -->
  <header class="col-span-12 p-4 bg-primary text-white">
    Header
  </header>
  
  <!-- Left Sidebar -->
  <aside class="col-span-12 md:col-span-3 p-4 bg-light">
    Left Sidebar
  </aside>
  
  <!-- Main Content -->
  <main class="col-span-12 md:col-span-6 p-4 bg-white">
    Main Content
  </main>
  
  <!-- Right Sidebar -->
  <aside class="col-span-12 md:col-span-3 p-4 bg-light">
    Right Sidebar
  </aside>
  
  <!-- Footer -->
  <footer class="col-span-12 p-4 bg-dark text-white">
    Footer
  </footer>
</div>
```

This classic "Holy Grail" layout provides a header, footer, two sidebars, and main content. On mobile devices, all elements stack, while on larger screens the sidebars are displayed next to the main content.

### Auto-Fit Grid for Dynamic Content

```html
<div class="container-query">
  <div class="grid grid-auto-fit gap-4">
    <div class="p-4 bg-light">Item 1</div>
    <div class="p-4 bg-light">Item 2</div>
    <div class="p-4 bg-light">Item 3</div>
    <div class="p-4 bg-light">Item 4</div>
    <div class="p-4 bg-light">Item 5</div>
    <div class="p-4 bg-light">Item 6</div>
  </div>
</div>
```

The `grid-auto-fit` class uses `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`, which causes the elements to automatically wrap to new rows when the available space is insufficient. Each element has a minimum width of 250px.

## Container + Grid Combinations

### Centered Container Grid

```html
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-4 bg-light">Column 1</div>
    <div class="p-4 bg-light">Column 2</div>
    <div class="p-4 bg-light">Column 3</div>
  </div>
</div>
```

The combination of `container` and `mx-auto` creates a centered grid with a maximum width.

### Container with Different Sizes

```html
<div class="container-sm mx-auto px-4">
  <h2 class="text-xl mb-4">Narrow container (max 640px)</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-light">Column 1</div>
    <div class="p-4 bg-light">Column 2</div>
  </div>
</div>
```

You can use container variants for different maximum widths:
- `container-sm`: 640px
- `container-md`: 768px
- `container-lg`: 1024px
- `container-xl`: 1280px
- `container-2xl`: 1536px

### Container Query Layout

```html
<div class="container-query mx-auto px-4">
  <div class="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4 gap-4">
    <div class="p-4 bg-light">Item 1</div>
    <div class="p-4 bg-light">Item 2</div>
    <div class="p-4 bg-light">Item 3</div>
    <div class="p-4 bg-light">Item 4</div>
  </div>
</div>
```

The `container-query` class uses Container Queries to create responsive layouts based on the container size rather than the viewport size. This enables more flexible component-based responsiveness.

## Grid with CSS Variables

The Casoon UI grid system uses CSS variables for easy customization:

```css
:root {
  --grid-columns: 12;              /* Default column count */
  --grid-gap: 1rem;                /* Default gap */
  --container-max-width: 1280px;   /* Maximum container width */
  --container-padding: 1rem;       /* Container padding */
}
```

These variables can be customized to adjust the grid system to your needs:

```css
/* In your custom CSS */
:root {
  --grid-columns: 24;              /* Increasing grid precision */
  --grid-gap: 1.5rem;              /* Larger gaps between elements */
  --container-max-width: 1440px;   /* Wider container */
}
```

## Responsive Design Strategies

### Mobile-First Approach

The Casoon UI grid system follows the mobile-first principle. Start with the smallest device and enhance for larger screens:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <!-- Grid starts with one column and expands to more as screen size increases -->
</div>
```

### Breakpoints system

Standard breakpoints:
- `sm`: 30rem (480px)
- `md`: 48rem (768px)
- `lg`: 62rem (992px)
- `xl`: 80rem (1280px)
- `2xl`: 96rem (1536px)

### Container Queries vs. Media Queries

Container Queries allow for more flexible, component-based responsive design:

```html
<!-- Container Query based grid -->
<div class="container-query">
  <div class="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3">
    <!-- Responds to container size -->
  </div>
</div>

<!-- Media Query based grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  <!-- Responds to viewport size -->
</div>
```

Use Container Queries for components that are used in different contexts, and Media Queries for global layout.

## Best Practices

### Performance

- Avoid overly complex nested grids
- Utilize the dense grid placement algorithm when appropriate
- Use `will-change` sparingly for animations
- Consider using the `content-visibility` property for large grids that extend beyond the viewport

### Accessibility

- Ensure logical tab order for keyboard navigation
- Maintain proper heading hierarchy in grid layouts
- Test grid layouts with screen readers
- Ensure sufficient color contrast

### Responsive Behavior

- Test layouts on real devices
- Don't rely solely on the 12-column grid - use auto-fit for more flexible layouts
- Consider the differences between viewport sizes and device capabilities
- Use fluid typography that scales with the layout

### Maintainability

- Use semantic class names
- Create reusable grid patterns with CSS variables
- Document your grid structure
- Create component libraries based on the grid system

## Advanced Techniques

### Subgrid (for browsers that support it)

```html
<div class="grid grid-cols-3">
  <div class="col-span-2 grid grid-cols-subgrid">
    <!-- Subgrid inherits columns from parent -->
    <div>Item in subgrid column 1</div>
    <div>Item in subgrid column 2</div>
  </div>
  <div>Third column</div>
</div>
```

### Grid Areas

```html
<div class="grid grid-areas-layout gap-4">
  <header class="grid-area-header p-4 bg-primary text-white">Header</header>
  <nav class="grid-area-sidebar p-4 bg-light">Sidebar</nav>
  <main class="grid-area-content p-4 bg-white">Content</main>
  <footer class="grid-area-footer p-4 bg-dark text-white">Footer</footer>
</div>

<style>
  .grid-areas-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
    min-height: 100vh;
  }
  
  .grid-area-header { grid-area: header; }
  .grid-area-sidebar { grid-area: sidebar; }
  .grid-area-content { grid-area: content; }
  .grid-area-footer { grid-area: footer; }
  
  @media (max-width: 768px) {
    .grid-areas-layout {
      grid-template-columns: 1fr;
      grid-template-areas:
        "header"
        "sidebar"
        "content"
        "footer";
    }
  }
</style>
```

This approach uses named grid areas for more readable and maintainable layouts. 
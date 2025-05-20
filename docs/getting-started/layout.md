---
title: Layout System
category: Getting Started
---

# Layout System

The Casoon UI Library's layout system provides structured and flexible tools for designing responsive user interfaces. It's based on a modern CSS layer system and uses Container Queries for precise component-based responsiveness.

## CSS Import

To use the Casoon UI layout system, import the `core.css` file:

```css
@import "@casoon/ui-lib/core.css";
```

This import provides the basic layout functions and the grid system. Note, however, that components and effects must be imported separately:

```css
/* Core system for layout and grid */
@import "@casoon/ui-lib/core.css";

/* Components must be imported individually */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/card.css";

/* Effects must also be imported individually */
@import "@casoon/ui-lib/effects/hover.css";
@import "@casoon/ui-lib/effects/transitions.css";
```

The layer system automatically ensures the correct loading order of all CSS files.

### Optimized for Lightning CSS

The entire CSS system is optimized for Lightning CSS (formerly Parcel CSS) and offers the following advantages:

- Faster processing of nested imports
- Automatic vendor prefixing for maximum browser compatibility
- Full support for modern CSS features like Container Queries
- Efficient CSS output files through intelligent minification
- Better support for `@layer` declarations and cascades

## Layer Structure

The layout is part of the central layer system and is defined under the `layout` and `layout-queries` layers. The order of the layers determines CSS specificity:

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       core,                 /* Core functionalities */
       logical-properties,   /* Bidirectional layouts (RTL/LTR) */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variants */
       layout,               /* Layout foundations */
       layout-queries,       /* Responsive adaptations */
       typography,           /* Typography system */
       utilities,            /* Atomic utility classes */
       smooth-scroll,        /* Scroll behavior */
       accessibility,        /* Accessibility */
       icons,                /* Icon system */
       components,           /* UI components */
       animations,           /* Motion system */
       effects,              /* Visual effects */
       themes;               /* Theming system */
```

This hierarchical layering allows for a clear separation and controlled override of styles. Through the `@layer` directive, specificity is precisely controlled, regardless of the complexity of selectors within a layer.

### Integrating Your Own Styles

Your own styles can be seamlessly integrated into the existing layer system:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Custom layout adjustments */
@layer layout {
  .custom-container {
    max-width: 1600px;
    margin-inline: auto;
    padding-inline: var(--space-6);
  }
}

/* Custom components */
@layer components {
  .my-component {
    /* Component styles using design tokens */
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}

/* Custom utilities */
@layer utilities {
  .gap-custom {
    gap: 5rem;
  }
}
```

By adhering to the layer structure, your own customizations remain maintainable and conflict-free.

## Container System

The container is the basic layout element and ensures consistent page widths with appropriate margins.

```html
<div class="container">
  <!-- Content is limited to a maximum width and centered -->
</div>
```

### Container Variants

| Class | Description | Maximum Width |
| ------ | ------------ | --------------- |
| `container` | Standard container | 1200px |
| `container-sm` | Narrow container | 640px |
| `container-md` | Medium container | 960px |
| `container-lg` | Wide container | 1200px (default) |
| `container-xl` | Extra wide container | 1400px |
| `container-2xl` | XX-Large container | 1920px |

### Container Padding

Containers have horizontal padding by default. You can adjust this with special classes:

```html
<div class="container container-padding-sm">
  <!-- Container with smaller padding -->
</div>

<div class="container container-padding-md">
  <!-- Container with medium padding (default) -->
</div>

<div class="container container-padding-lg">
  <!-- Container with larger padding -->
</div>
```

### Container Alignment

```html
<div class="container mx-auto">
  <!-- Horizontally centered container (default) -->
</div>
```

## Container Queries for Responsive Layouts

A modern alternative to media queries are container queries, which are based on the size of the container itself rather than the viewport width:

```html
<div class="container-query">
  <!-- Container that serves as an anchor for container queries -->
  <div class="layout-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Responsive grid that adapts to the container size -->
  </div>
</div>
```

### Component Queries

For smaller UI components, there is also a component query context:

```html
<div class="component-query">
  <!-- Element as a standalone component container -->
  <div class="flex c-sm:flex-row c-md:gap-6">
    <!-- Responsive layout within the component -->
  </div>
</div>
```

## Basic Layout Components

The framework offers two main components for layouts:

```html
<div class="layout-grid">
  <!-- Grid-based layout with standard gap -->
</div>

<div class="layout-flex">
  <!-- Flex-based layout with standard gap -->
</div>
```

## Grid System

The grid system uses modern CSS Grid technology for flexible layouts.

### Basic Grid

```html
<div class="grid">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Grid Columns

The number of columns can be defined with specific classes:

```html
<div class="grid grid-cols-2">
  <!-- 2-column grid -->
</div>

<div class="grid grid-cols-3">
  <!-- 3-column grid -->
</div>

<div class="grid grid-cols-4">
  <!-- 4-column grid -->
</div>

<div class="grid grid-cols-12">
  <!-- 12-column grid -->
</div>

<div class="grid grid-auto-fit">
  <!-- Automatically adjusted grid (minimum 250px per column) -->
</div>
```

### Responsive Grids with Container Queries

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- 
      1 column for small containers
      2 columns for containers from 30rem (480px) width
      3 columns for containers from 48rem (768px) width
      4 columns for containers from 62rem (992px) width
    -->
  </div>
</div>
```

### Specific Column Widths

Individual grid elements can have specific column widths:

```html
<div class="grid grid-cols-12">
  <div class="col-span-8">Wide area (8/12)</div>
  <div class="col-span-4">Narrow area (4/12)</div>
</div>
```

## Flexbox Layout

For one-dimensional layouts and complex alignments, the library provides a flexbox system:

```html
<div class="flex">
  <div>Flex element 1</div>
  <div>Flex element 2</div>
  <div>Flex element 3</div>
</div>
```

### Flex Direction

```html
<div class="flex flex-row">
  <!-- Horizontal arrangement (default) -->
</div>

<div class="flex flex-col">
  <!-- Vertical arrangement -->
</div>
```

### Flex Alignment

```html
<div class="flex justify-start">
  <!-- Aligned at the beginning -->
</div>

<div class="flex justify-center">
  <!-- Center aligned -->
</div>

<div class="flex justify-end">
  <!-- Aligned at the end -->
</div>

<div class="flex items-center">
  <!-- Vertically centered elements -->
</div>

<div class="flex items-start">
  <!-- Top aligned elements -->
</div>

<div class="flex items-end">
  <!-- Bottom aligned elements -->
</div>
```

### Flex Wrap

```html
<div class="flex flex-wrap">
  <!-- Elements wrap to new lines -->
</div>

<div class="flex flex-nowrap">
  <!-- Elements don't wrap -->
</div>
```

### Flex Growth and Shrinkage

```html
<div class="flex">
  <div class="flex-1">Grows to fill space</div>
  <div class="flex-auto">Grows based on content</div>
  <div class="flex-none">Fixed size</div>
</div>
```

### Flex Basis

For precise size distribution:

```html
<div class="flex">
  <div class="flex-basis-1-2">50% width</div>
  <div class="flex-basis-1-2">50% width</div>
</div>

<div class="flex">
  <div class="flex-basis-1-3">33.33% width</div>
  <div class="flex-basis-2-3">66.67% width</div>
</div>

<div class="flex">
  <div class="flex-basis-1-4">25% width</div>
  <div class="flex-basis-3-4">75% width</div>
</div>
```

## Spacing System

A consistent spacing system is crucial for harmonious layouts. Casoon UI offers comprehensive utilities for margins, paddings, and gaps.

### Spacing Scale

The framework uses a unified spacing scale based on design tokens:

| Class | Value | Description |
|--------|------|-------------|
| `*-0` | 0 | No spacing |
| `*-1` | 0.25rem (4px) | Extra small |
| `*-2` | 0.5rem (8px) | Small |
| `*-3` | 0.75rem (12px) | Medium-small |
| `*-4` | 1rem (16px) | Medium (Base) |
| `*-5` | 1.5rem (24px) | Medium-large |
| `*-6` | 2rem (32px) | Large |
| `*-8` | 3rem (48px) | Extra large |
| `*-10` | 4rem (64px) | XXL |
| `*-12` | 6rem (96px) | XXXL |
| `*-16` | 8rem (128px) | Maximum |

### Gaps (Spacing between Grid/Flex Elements)

For consistent spacing between grid or flex elements:

```html
<div class="grid gap-0"><!-- No spacing --></div>
<div class="grid gap-1"><!-- 0.25rem spacing --></div>
<div class="grid gap-2"><!-- 0.5rem spacing --></div>
<div class="grid gap-3"><!-- 0.75rem spacing --></div>
<div class="grid gap-4"><!-- 1rem spacing (standard) --></div>
<div class="grid gap-5"><!-- 1.5rem spacing --></div>
<div class="grid gap-6"><!-- 2rem spacing --></div>
<div class="grid gap-8"><!-- 3rem spacing --></div>
<div class="grid gap-10"><!-- 4rem spacing --></div>
<div class="grid gap-12"><!-- 6rem spacing --></div>
<div class="grid gap-16"><!-- 8rem spacing --></div>
```

The same pattern applies to flex containers:

```html
<div class="flex gap-4"><!-- 1rem spacing between flex elements --></div>
```

### Responsive Gaps

Gaps can also be responsive:

```html
<div class="container-query">
  <div class="grid gap-2 sm:gap-4 md:gap-6 lg:gap-8">
    <!-- 
      0.5rem gap for small containers
      1rem gap for containers from 30rem width
      2rem gap for containers from 48rem width
      3rem gap for containers from 62rem width
    -->
  </div>
</div>
```

### Margins and Paddings

The framework offers comprehensive utility classes for margins and paddings:

```html
<!-- Margin on all sides -->
<div class="m-1">Margin: 0.25rem</div>
<div class="m-2">Margin: 0.5rem</div>
<div class="m-3">Margin: 0.75rem</div>
<div class="m-4">Margin: 1rem</div>
<div class="m-5">Margin: 1.5rem</div>
<div class="m-6">Margin: 2rem</div>
<div class="m-8">Margin: 3rem</div>

<!-- Margin on specific sides -->
<div class="mt-4">Margin top: 1rem</div>
<div class="mr-4">Margin right: 1rem</div>
<div class="mb-4">Margin bottom: 1rem</div>
<div class="ml-4">Margin left: 1rem</div>

<!-- Margin on axes -->
<div class="mx-4">Margin left and right: 1rem</div>
<div class="my-4">Margin top and bottom: 1rem</div>
```

Paddings work according to the same principle with the prefix `p-`:

```html
<div class="p-4">Padding: 1rem on all sides</div>
<div class="pt-4">Padding top: 1rem</div>
<div class="px-4">Padding left and right: 1rem</div>
<!-- etc. -->
```

## Media Queries and Breakpoints

Although container queries are preferred, the framework also supports traditional breakpoints for responsive designs:

| Breakpoint | Prefix | Width |
| ---------- | ------ | ------ |
| Extra Small | `xs:` | < 576px |
| Small | `sm:` | ≥ 576px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 992px |
| Extra Large | `xl:` | ≥ 1200px |
| 2X Large | `2xl:` | ≥ 1400px |

## Positioning and Visibility

The framework also provides classes for positioning and visibility control:

```html
<div class="position-relative">
  Relatively positioned element
  <div class="position-absolute top-0 right-0">
    Absolutely positioned (top right)
  </div>
</div>

<div class="hidden sm:block">
  <!-- Hidden on mobile devices, displayed on larger screens -->
</div>
```

## Best Practices

1. **Prefer Container Queries** - Use container queries for component-based responsiveness
2. **Consistent Spacing** - Use predefined spacing values for harmonious designs
3. **Respect Layer System** - Add your own styles in the appropriate layers
4. **Mobile First** - Start with the layout for small screens and expand for larger ones
5. **Semantic HTML** - Use semantic HTML elements for better accessibility

## Examples of Layout Combinations

### Responsive Header with Navigation

```html
<header class="container flex justify-between items-center p-4">
  <div class="logo">Logo</div>

  <nav class="hidden md:block">
    <ul class="flex gap-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <button class="block md:hidden">Menu</button>
</header>
```

### Content Area with Sidebar

```html
<div class="container py-6">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
    <aside class="md:col-span-3 lg:col-span-2">
      <div class="p-4 bg-light">Sidebar content</div>
    </aside>

    <main class="md:col-span-9 lg:col-span-10">
      <div class="p-4 bg-white">Main content</div>
    </main>
  </div>
</div>
```

### Card Grid with Responsive Behavior

```html
<div class="container-query">
  <div class="container py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="p-4">
        <h3>Card 1</h3>
        <p>Description</p>
      </div>

      <div class="p-4">
        <h3>Card 2</h3>
        <p>Description</p>
      </div>

      <div class="p-4">
        <h3>Card 3</h3>
        <p>Description</p>
      </div>

      <div class="p-4">
        <h3>Card 4</h3>
        <p>Description</p>
      </div>
    </div>
  </div>
</div>
```

### Hero Area with Overlaying Text

```html
<div class="position-relative">
  <div class="aspect-ratio aspect-ratio--16-9">
    <img src="hero-image.jpg" alt="Hero" class="w-full h-full object-cover">
  </div>

  <div class="position-absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-50 flex items-center justify-center">
    <div class="container text-center text-white p-4">
      <h1 class="text-size-xxl mb-4">Welcome to Casoon UI</h1>
      <p class="text-size-lg mb-6">Modern, flexible design system for sophisticated web projects</p>
      <button class="btn btn--primary btn--lg">Learn more</button>
    </div>
  </div>
</div>
```

### Footer with Multiple Columns

```html
<footer class="bg-dark text-white py-8">
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h4 class="mb-4">About Us</h4>
        <p>Brief description of the company or organization.</p>
      </div>

      <div>
        <h4 class="mb-4">Links</h4>
        <ul class="list-none">
          <li class="mb-2"><a href="#" class="text-light">Home</a></li>
          <li class="mb-2"><a href="#" class="text-light">Services</a></li>
          <li class="mb-2"><a href="#" class="text-light">Blog</a></li>
          <li class="mb-2"><a href="#" class="text-light">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="mb-4">Contact</h4>
        <address class="not-italic">
          <p class="mb-2">123 Sample Street</p>
          <p class="mb-2">12345 Sample City</p>
          <p class="mb-2">info@example.com</p>
          <p>+49 123 456789</p>
        </address>
      </div>

      <div>
        <h4 class="mb-4">Newsletter</h4>
        <form>
          <div class="mb-3">
            <input type="email" placeholder="Email address" class="w-full p-2">
          </div>
          <button type="submit" class="btn btn--primary">Subscribe</button>
        </form>
      </div>
    </div>

    <div class="border-top border-light-dim mt-6 pt-6 text-center">
      <p>&copy; 2023 Casoon UI. All rights reserved.</p>
    </div>
  </div>
</footer>
``` 

``` 

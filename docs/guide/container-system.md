---
title: Container system
category: Guide
---

# Container system

The Casoon UI Library implements a flexible container system that serves as the foundation for consistent layouts and content widths. This guide explains how to use and customize the container system effectively.

## Overview

The container system is based on these core principles:

1. **Consistent Widths** - Standardized maximum widths for content
2. **Automatic Centering** - Containers center themselves horizontally in the available space
3. **Responsive Adaptation** - Automatic adjustment to different screen sizes
4. **Flexible Padding** - Configurable inner spacing for optimal content flow
5. **Standardized Sizes** - Predefined size classes for different use cases

## Importing the Container system

The container system is part of the `layout.css` layer, which depends on `core.css`. Make sure to import them in the correct order:

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';

/* Layout system, includes containers */
@import '@casoon/ui-lib/layout.css';
```

## Basic Container

The basic `.container` class provides a centered, width-limited box for content:

```html
<div class="container">
  <!-- Content is limited to a maximum width and centered -->
  <p>Container content with maximum width</p>
</div>
```

The standard container implementation includes the following CSS properties:

```css
.container {
  margin-inline: auto;     /* Horizontal centering */
  max-width: var(--container-lg);  /* Default maximum width */
  padding-inline: var(--space-4);  /* Horizontal inner spacing */
  width: 100%;             /* Use full available width */
}
```

## Container Sizes

The system offers different container sizes for various use cases:

```html
<!-- Small container, ideal for narrow content -->
<div class="container container-sm">
  <p>Narrow container content</p>
</div>

<!-- Medium container -->
<div class="container container-md">
  <p>Medium-width container content</p>
</div>

<!-- Large container (default) -->
<div class="container container-lg">
  <p>Default container content</p>
</div>

<!-- Extra large container -->
<div class="container container-xl">
  <p>Wide container content</p>
</div>

<!-- Extra extra large container -->
<div class="container container-2xl">
  <p>Very wide container content</p>
</div>
```

Container sizes and their maximum widths:

| Class | Maximum Width | Typical Application |
|--------|---------------|-------------------|
| `.container-sm` | `var(--container-sm)` (640px) | Narrow content, forms, narrow text columns |
| `.container-md` | `var(--container-md)` (768px) | Medium content width, blog posts |
| `.container-lg` | `var(--container-lg)` (1024px) | Standard content width, main layouts |
| `.container-xl` | `var(--container-xl)` (1280px) | Wide layouts, dashboard |
| `.container-2xl` | `var(--container-2xl)` (1536px) | Very wide layouts, complex dashboards |

## Responsive Container Behavior

Containers adapt automatically to different screen sizes. The responsive behavior of container classes follows this pattern:

| Class | xs (<576px) | sm (≥576px) | md (≥768px) | lg (≥992px) | xl (≥1200px) | 2xl (≥1400px) |
|-------|-------------|-------------|-------------|-------------|--------------|---------------|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-2xl` | 100% | 100% | 100% | 100% | 100% | 1320px |

On mobile devices, each container effectively behaves like a `container-fluid` and takes up the full width, with only the defined padding serving as a margin from the screen edges.

## Container Padding

The container system offers various padding options for inner spacing:

```html
<!-- Container with smaller padding -->
<div class="container container-padding-sm">
  <p>Container with reduced padding</p>
</div>

<!-- Container with standard padding -->
<div class="container container-padding-md">
  <p>Container with standard padding</p>
</div>

<!-- Container with larger padding -->
<div class="container container-padding-lg">
  <p>Container with increased padding</p>
</div>
```

The different padding classes set the following values:

```css
.container-padding-sm { padding-inline: var(--space-2); } /* Smaller padding */
.container-padding-md { padding-inline: var(--space-4); } /* Standard padding */
.container-padding-lg { padding-inline: var(--space-6); } /* Larger padding */
```

## Fluid Container

In some cases, you need a container that uses the full available width without setting a maximum width. For this, you can use a "Fluid Container":

```html
<div class="container-fluid">
  <p>This container always uses the full width</p>
</div>
```

Implementation:

```css
.container-fluid {
  width: 100%;
  padding-inline: var(--space-4);
}
```

## Integration with Grid and Flexbox

Containers work seamlessly with the grid and flexbox systems:

```html
<!-- Container with grid layout -->
<div class="container">
  <div class="grid grid-cols-3 gap-4">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>

<!-- Container with flexbox layout -->
<div class="container">
  <div class="flex justify-between">
    <div>Flex item left</div>
    <div>Flex item right</div>
  </div>
</div>
```

## Nested Containers

Containers can be nested, although this is not necessary in most cases:

```html
<div class="container container-lg">
  <h1>Main heading</h1>
  
  <!-- Nested container for a narrower content area -->
  <div class="container container-sm">
    <p>This text is in a narrow container within the main container.</p>
  </div>
</div>
```

**Note:** Nested containers should be used sparingly, as they can lead to unexpected layouts. In most cases, it's better to use grid or flexbox within a single container.

## Containers for Semantic Content Groups

Containers can also be used to define semantic groups of content:

```html
<header>
  <div class="container">
    <!-- Header content -->
  </div>
</header>

<main>
  <section class="hero">
    <div class="container">
      <!-- Hero section content -->
    </div>
  </section>
  
  <section class="features">
    <div class="container">
      <!-- Features section content -->
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <!-- Footer content -->
  </div>
</footer>
```

## Advanced Container Types

The Casoon UI Library offers several specialized container types for specific layout needs:

### Position Containers

Containers with positioning properties:

```html
<!-- Relative container -->
<div class="container container-relative">
  <!-- Normal content -->
  <div class="absolute top-0 right-0">
    <!-- Absolutely positioned element -->
  </div>
</div>

<!-- Sticky container -->
<div class="container container-sticky top-0">
  <header>Sticky header</header>
</div>
```

### Responsive Containers

Containers that adapt based on container queries:

```html
<div class="container-query">
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Grid that adapts to container size -->
  </div>
</div>
```

### Visual Containers

Containers with visual enhancements:

```html
<!-- Shadow container -->
<div class="shadow-container shadow-md">
  <p>Container with medium shadow</p>
</div>

<!-- Border container -->
<div class="border-container border-solid">
  <p>Container with solid border</p>
</div>
```

## Customizing the Container system

The container system is based on CSS variables that can be easily customized:

```css
:root {
  /* Customizing container sizes */
  --container-sm: 540px;
  --container-md: 720px;
  --container-lg: 960px;
  --container-xl: 1140px;
  --container-2xl: 1400px;
  
  /* Customizing container padding */
  --space-2: 0.5rem;  /* container-padding-sm */
  --space-4: 1rem;    /* container-padding-md */
  --space-6: 1.5rem;  /* container-padding-lg */
}
```

## Performance Considerations

The container system is designed for optimal performance, but there are some considerations to keep in mind:

1. **Minimize container nesting** - Too many nested containers can lead to layout issues
2. **Use specialized containers appropriately** - Choose the right container type for your needs
3. **Consider the impact of padding and margins** - Be mindful of how spacing affects layout
4. **Test performance on different devices** - Ensure your container layout performs well on various screen sizes

## Browser Compatibility

The container system is compatible with all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Container Classes | All | All | All | All |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Logical Properties | 69+ | 41+ | 12.1+ | 79+ |

## Best Practices

1. **Use containers for consistent widths** - Ensure a uniform content width across your entire site
2. **Choose container variants purposefully** - Select between `.container`, `.container-fluid`, and size variants based on layout requirements
3. **Avoid nested containers** - Only nest containers when absolutely necessary to avoid unexpected layout issues
4. **Combine containers with grid** - Containers work excellently as wrappers for grid layouts to ensure consistent page margins
5. **Adjust container dimensions** - Customize container variables to meet your project's design requirements
6. **Use containers for sections** - Utilize containers to visually separate and organize different page sections
7. **Consider responsive behavior** - Be mindful of how containers behave at different screen sizes, especially during breakpoint transitions

## Common Patterns

### Full-width Header with Contained Content

```html
<header class="bg-primary text-white">
  <div class="container py-4">
    <h1>Website Title</h1>
    <nav>Navigation</nav>
  </div>
</header>
```

### Multi-section Page

```html
<main>
  <section class="bg-light py-8">
    <div class="container">
      <h2>Section 1</h2>
      <p>Content for section 1...</p>
    </div>
  </section>
  
  <section class="bg-white py-8">
    <div class="container">
      <h2>Section 2</h2>
      <p>Content for section 2...</p>
    </div>
  </section>
</main>
```

### Dashboard Layout

```html
<div class="container-fluid">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-3">
      <div class="sidebar">Sidebar content</div>
    </div>
    <div class="col-span-9">
      <div class="container-xl">
        <div class="dashboard-content">Main dashboard content</div>
      </div>
    </div>
  </div>
</div>
```

## Summary

The Casoon UI Library's container system provides a flexible and powerful foundation for consistent layouts. By using containers, you can structure content, set a consistent maximum width, and ensure a uniform appearance across all pages. Containers form an important base for responsive designs and work seamlessly with other layout systems like grid and flexbox. 
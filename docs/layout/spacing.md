---
title: Spacing System
category: Layout
---

# Spacing System

The Casoon UI Library implements a consistent spacing system that ensures harmonious proportions and relationships between elements. This document outlines the spacing scales, utility classes, and best practices for maintaining visual rhythm in your interfaces.

## Overview

The spacing system is built on these core principles:

1. **Consistent scale** - Standardized spacing values create visual harmony
2. **Responsive spacing** - Spacing adapts to different screen sizes
3. **Logical properties** - Support for different writing modes and directions
4. **Utility classes** - Easy-to-use helpers for common spacing needs
5. **Customizable tokens** - Spacing values that can be themed and adjusted

## Spacing Scale

The library defines a comprehensive spacing scale using CSS variables:

```css
:root {
  /* Base spacing unit */
  --space-unit: 0.25rem; /* 4px at default font size */
  
  /* Spacing scale */
  --space-0: 0;
  --space-1: calc(var(--space-unit) * 1);  /* 0.25rem - 4px */
  --space-2: calc(var(--space-unit) * 2);  /* 0.5rem - 8px */
  --space-3: calc(var(--space-unit) * 3);  /* 0.75rem - 12px */
  --space-4: calc(var(--space-unit) * 4);  /* 1rem - 16px */
  --space-5: calc(var(--space-unit) * 6);  /* 1.5rem - 24px */
  --space-6: calc(var(--space-unit) * 8);  /* 2rem - 32px */
  --space-7: calc(var(--space-unit) * 12); /* 3rem - 48px */
  --space-8: calc(var(--space-unit) * 16); /* 4rem - 64px */
  --space-9: calc(var(--space-unit) * 24); /* 6rem - 96px */
  --space-10: calc(var(--space-unit) * 32); /* 8rem - 128px */
  
  /* Named aliases for common use cases */
  --space-xs: var(--space-1);
  --space-sm: var(--space-2);
  --space-md: var(--space-4);
  --space-lg: var(--space-6);
  --space-xl: var(--space-8);
  --space-2xl: var(--space-10);
  
  /* Negative space values (for margins) */
  --space-n1: calc(var(--space-1) * -1);
  --space-n2: calc(var(--space-2) * -1);
  --space-n3: calc(var(--space-3) * -1);
  --space-n4: calc(var(--space-4) * -1);
  --space-n5: calc(var(--space-5) * -1);
  --space-n6: calc(var(--space-6) * -1);
  --space-n7: calc(var(--space-7) * -1);
  --space-n8: calc(var(--space-8) * -1);
}
```

## Margin Utility Classes

The library provides utility classes for adding margins:

```html
<!-- Margin on all sides -->
<div class="m-0">No margin</div>
<div class="m-1">Tiny margin (4px)</div>
<div class="m-2">Small margin (8px)</div>
<div class="m-4">Medium margin (16px)</div>
<div class="m-6">Large margin (32px)</div>

<!-- Margin top -->
<div class="mt-0">No margin top</div>
<div class="mt-4">Medium margin top (16px)</div>

<!-- Margin right -->
<div class="mr-4">Medium margin right (16px)</div>

<!-- Margin bottom -->
<div class="mb-4">Medium margin bottom (16px)</div>

<!-- Margin left -->
<div class="ml-4">Medium margin left (16px)</div>

<!-- Horizontal margin (left and right) -->
<div class="mx-4">Medium horizontal margin (16px)</div>

<!-- Vertical margin (top and bottom) -->
<div class="my-4">Medium vertical margin (16px)</div>

<!-- Auto margin (for flexbox centering) -->
<div class="m-auto">Auto margin on all sides</div>
<div class="ml-auto">Auto margin left (pushes element to the right)</div>
<div class="mr-auto">Auto margin right (pushes element to the left)</div>
```

## Padding Utility Classes

Similar utility classes exist for padding:

```html
<!-- Padding on all sides -->
<div class="p-0">No padding</div>
<div class="p-1">Tiny padding (4px)</div>
<div class="p-2">Small padding (8px)</div>
<div class="p-4">Medium padding (16px)</div>
<div class="p-6">Large padding (32px)</div>

<!-- Padding top -->
<div class="pt-4">Medium padding top (16px)</div>

<!-- Padding right -->
<div class="pr-4">Medium padding right (16px)</div>

<!-- Padding bottom -->
<div class="pb-4">Medium padding bottom (16px)</div>

<!-- Padding left -->
<div class="pl-4">Medium padding left (16px)</div>

<!-- Horizontal padding (left and right) -->
<div class="px-4">Medium horizontal padding (16px)</div>

<!-- Vertical padding (top and bottom) -->
<div class="py-4">Medium vertical padding (16px)</div>
```

## Logical Property Spacing

The library supports logical properties for internationalized layouts:

```html
<!-- Logical margin properties (based on text direction) -->
<div class="m-inline-4">Margin in the inline direction (16px)</div>
<div class="m-inline-start-4">Margin at the start of inline direction (16px)</div>
<div class="m-inline-end-4">Margin at the end of inline direction (16px)</div>
<div class="m-block-4">Margin in the block direction (16px)</div>
<div class="m-block-start-4">Margin at the start of block direction (16px)</div>
<div class="m-block-end-4">Margin at the end of block direction (16px)</div>

<!-- Logical padding properties (based on text direction) -->
<div class="p-inline-4">Padding in the inline direction (16px)</div>
<div class="p-inline-start-4">Padding at the start of inline direction (16px)</div>
<div class="p-inline-end-4">Padding at the end of inline direction (16px)</div>
<div class="p-block-4">Padding in the block direction (16px)</div>
<div class="p-block-start-4">Padding at the start of block direction (16px)</div>
<div class="p-block-end-4">Padding at the end of block direction (16px)</div>
```

### Mapping to Physical Properties

In left-to-right (LTR) languages, the logical properties map as follows:

| Logical Property | LTR Mapping | RTL Mapping |
|------------------|-------------|-------------|
| inline-start | left | right |
| inline-end | right | left |
| block-start | top | top |
| block-end | bottom | bottom |

## Responsive Spacing

The spacing system includes responsive variants:

```html
<!-- Base margin for all screens, larger on medium screens and up -->
<div class="mb-2 mb-md-4">
  Small margin on mobile, medium margin on tablets and up
</div>

<!-- Padding that increases at each breakpoint -->
<div class="p-2 p-sm-3 p-md-4 p-lg-6">
  Progressively larger padding as screen size increases
</div>

<!-- Responsive logical properties -->
<div class="m-inline-2 m-inline-md-4">
  Small inline margin on mobile, medium inline margin on tablets and up
</div>
```

## Gap Utilities

For flex and grid containers, the library provides gap utilities:

```html
<!-- Grid with uniform gap -->
<div class="grid gap-4">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<!-- Flex with different row and column gaps -->
<div class="flex flex-wrap gap-x-2 gap-y-4">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<!-- Responsive gaps -->
<div class="grid gap-2 gap-md-4">
  <!-- Grid items -->
</div>
```

## Space Components

The library includes dedicated spacing components:

```html
<!-- Horizontal spacer with medium size -->
<div class="h-spacer-4"></div>

<!-- Vertical spacer with large size -->
<div class="v-spacer-6"></div>

<!-- Responsive spacer that's larger on bigger screens -->
<div class="v-spacer-2 v-spacer-md-4"></div>

<!-- Spacer that absorbs available space (like flexbox flex-grow) -->
<div class="flex">
  <div>Content</div>
  <div class="flex-spacer"></div>
  <div>Content</div>
</div>
```

## Section Spacing

For consistent page layouts, the library provides section spacing utilities:

```html
<!-- Standard section with consistent spacing -->
<section class="section">
  <div class="container">
    <h2>Section Title</h2>
    <p>Section content</p>
  </div>
</section>

<!-- Compact section with reduced spacing -->
<section class="section section-sm">
  <div class="container">
    <h2>Compact Section</h2>
    <p>Section with reduced margins</p>
  </div>
</section>

<!-- Large section with increased spacing -->
<section class="section section-lg">
  <div class="container">
    <h2>Large Section</h2>
    <p>Section with increased margins</p>
  </div>
</section>
```

The CSS implementation:

```css
.section {
  padding-block: var(--space-8);
}

.section-sm {
  padding-block: var(--space-4);
}

.section-lg {
  padding-block: var(--space-10);
}

@media (max-width: 768px) {
  .section {
    padding-block: var(--space-6);
  }
  
  .section-sm {
    padding-block: var(--space-3);
  }
  
  .section-lg {
    padding-block: var(--space-8);
  }
}
```

## Stack Component

The library includes a "stack" component for consistent vertical spacing:

```html
<!-- Vertical stack with medium spacing between children -->
<div class="stack stack-4">
  <h2>Title</h2>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <button>Action</button>
</div>

<!-- Responsive stack with different spacing at breakpoints -->
<div class="stack stack-2 stack-md-4">
  <!-- Stack items -->
</div>
```

Implementation:

```css
.stack {
  display: flex;
  flex-direction: column;
}

.stack > * + * {
  margin-top: var(--stack-space, var(--space-4));
}

.stack-0 {
  --stack-space: var(--space-0);
}

.stack-1 {
  --stack-space: var(--space-1);
}

/* ...and so on for other sizes */
```

## Cluster Component

For horizontally arranged items with consistent spacing:

```html
<!-- Horizontal cluster with small gaps -->
<div class="cluster cluster-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive cluster with wrapping -->
<div class="cluster cluster-2 cluster-md-4">
  <!-- Many items that will wrap -->
</div>
```

Implementation:

```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--cluster-space, var(--space-2));
}

.cluster-0 {
  --cluster-space: var(--space-0);
}

.cluster-1 {
  --cluster-space: var(--space-1);
}

/* ...and so on for other sizes */
```

## Customizing the Spacing System

The spacing system can be customized by overriding the CSS variables:

```css
/* Adjusting the base unit will scale all spacing values */
:root {
  --space-unit: 0.3rem; /* Makes all spacing 20% larger */
}

/* Adjusting specific spacing values */
:root {
  --space-4: 1.1rem; /* Custom medium spacing */
  --space-lg: 2.5rem; /* Custom large spacing alias */
}

/* Creating a custom theme with different spacing */
.theme-compact {
  --space-unit: 0.2rem; /* 20% smaller spacing */
}

.theme-airy {
  --space-unit: 0.3rem; /* 20% larger spacing */
}
```

## Integration with Components

All components in the Casoon UI Library use the spacing system for consistency:

```css
/* Button component using spacing system */
.btn {
  padding: var(--space-2) var(--space-4);
  margin: var(--space-2);
}

/* Card component using spacing system */
.card {
  margin-bottom: var(--space-4);
}

.card-body {
  padding: var(--space-4);
}

.card-footer {
  padding: var(--space-2) var(--space-4);
}
```

## Spacing in Design Tokens

The spacing system is defined as design tokens that can be shared across platforms:

```json
{
  "space": {
    "unit": {
      "value": "0.25rem",
      "description": "Base spacing unit (4px at default font size)"
    },
    "0": {
      "value": "0",
      "description": "No spacing"
    },
    "1": {
      "value": "{space.unit} * 1",
      "description": "Extra small spacing (4px)"
    },
    "2": {
      "value": "{space.unit} * 2",
      "description": "Small spacing (8px)"
    }
    // ...other spacing values
  }
}
```

## Best Practices

1. **Use the spacing scale consistently** - Avoid arbitrary values outside the scale
2. **Let components handle their own spacing** - Components should manage their internal spacing
3. **Use margin for spacing between components** - Use padding for internal spacing within components
4. **Be consistent with directions** - Choose either margin-bottom or margin-top for vertical rhythm
5. **Consider content density** - Adjust spacing based on content type and user needs
6. **Use responsive spacing** - Adjust spacing at different breakpoints
7. **Maintain vertical rhythm** - Keep consistent spacing between text elements
8. **Use logical properties** for internationalized applications
9. **Document custom spacing** when needed for special cases
10. **Test spacing on different devices** to ensure appropriate visual hierarchy

## Common Spacing Patterns

### Form Spacing

```html
<form class="stack stack-4">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name">
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email">
  </div>
  
  <div class="form-actions cluster cluster-2">
    <button type="button" class="btn btn-secondary">Cancel</button>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

### Card Layout Spacing

```html
<div class="grid gap-4">
  <div class="card">
    <div class="card-header">
      <h3>Card Title</h3>
    </div>
    <div class="card-body">
      <p>Card content</p>
    </div>
    <div class="card-footer">
      <button class="btn">Action</button>
    </div>
  </div>
  
  <!-- More cards -->
</div>
```

### Navigation Spacing

```html
<nav class="navbar">
  <div class="container">
    <a href="/" class="navbar-brand">Brand</a>
    
    <ul class="navbar-nav cluster cluster-4">
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
      </li>
      <li class="nav-item">
        <a href="/contact" class="nav-link">Contact</a>
      </li>
    </ul>
  </div>
</nav>
```

## Browser Compatibility

The spacing system is compatible with all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| calc() | 26+ | 16+ | 6+ | 12+ |
| Logical Properties | 69+ | 41+ | 12.1+ | 79+ |

## Summary

The Casoon UI Library's spacing system provides a comprehensive and flexible approach to managing space in your interfaces. By using the predefined spacing scale and utility classes, you can create consistent and harmonious layouts that maintain visual rhythm across different screen sizes and contexts. The system's integration with logical properties also ensures that your layouts work correctly in different writing modes and directions. 
---
title: Core CSS system
category: Guide
---

# Core CSS system

The Core CSS system of the Casoon UI Library consists of several central files that form the foundation for all style applications. These files organize the CSS layers and define the import order, enabling precise control over specificity and cascading.

## Core.css

The `core.css` is the central organization system of the Casoon UI Library. It defines the structure of CSS layers and coordinates their import in the correct order to ensure a precise and maintainable styling system.

## Overview of the Core File

The `core.css` file organizes the entire CSS framework through a structured series of imports:

```css
/**
 * Core CSS
 *
 * Central file for organizing and prioritizing all CSS layers and modules.
 * All layers are declared here and the corresponding CSS files are imported.
 * The order of imports determines the cascade priority (later ones take precedence).
 */

/* 
 * Base system
 * Contains Reset, Custom Properties, Tokens, and logical properties
 */
@import url("base.css");

/* 
 * layout system
 * containers, grid, flexbox layouts and responsive customizations
 */
@import url("layout.css");
@import url("layout.queries.css");

/* 
 * Typography system
 * Fonts, sizes, spacing, and text formatting
 */
@import url("typography.css") layer(typography);

/* 
 * modules system
 * Reusable UI components in standalone files
 */
@import url("components.css");

/* 
 * icon system
 * SVG symbols and icon fonts
 */
@import url("icons.css");
```

## Layer Hierarchy

The entire layer structure is defined in `base.css` and follows a clear hierarchy:

```css
@layer reset,                /* Browser reset, normalization */
       tokens,               /* design tokens and variables */
       core,                 /* Core functionalities */
       logical-properties,   /* Logical properties for bidirectionality */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variations */
       layout,               /* layout basics */
       layout-queries,       /* Responsive customizations */
       typography,           /* Typography system */
       utilities,            /* Utility classes */
       smooth-scroll,        /* Scroll behavior */
       accessibility,        /* Accessibility */
       icons,                /* icon system */
       components,           /* UI components */
       animations,           /* Motion system */
       effects,              /* Visual effects */
       themes;               /* Theming system */
```

**Note:** The originally separate `custom-properties` layer what integrated into the `tokens` layer to simplify the structure and improve maintainability.

## Detailed Layer Descriptions

### 1. reset

The `reset` layer normalizes browser default styles and provides a consistent base for all styling operations.

```css
@layer reset {
  /* Reset browser default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Additional reset styles... */
}
```

This layer has the lowest priority in the cascade and is overridden by all subsequent layers.

### 2. tokens

The `tokens` layer defines the basic design tokens and CSS variables used throughout the system.

```css
@layer tokens {
  :root {
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    
    /* Colors */
    --color-primary: #3b82f6;
    --color-secondary: #6b7280;
    --color-accent: #f59e0b;
    
    /* Radii */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    
    /* Additional design tokens... */
  }
}
```

This layer also contains registered CSS properties (previously in the `custom-properties` layer):

```css
@layer tokens {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
  
  /* Additional registered properties... */
}
```

### 3. core

The `core` layer contains fundamental functionalities and styles that form the foundation of the application.

```css
@layer core {
  /* Basic styling for elements */
  html {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    color: var(--color-text);
    background-color: var(--color-background);
  }
  
  body {
    line-height: var(--line-height-normal);
  }
  
  /* Additional core styles... */
}
```

### 4. logical-properties

The `logical-properties` layer implements bidirectional layout with logical properties for international applications.

```css
@layer logical-properties {
  /* Bidirectional margin utilities */
  .mx-auto {
    margin-inline: auto;
  }
  
  .ms-4 {
    margin-inline-start: var(--space-4);
  }
  
  .me-4 {
    margin-inline-end: var(--space-4);
  }
  
  /* Bidirectional padding utilities */
  .px-4 {
    padding-inline: var(--space-4);
  }
  
  /* Additional logical properties... */
}
```

### 5. colors

The `colors` layer defines the color system and color-based classes for text, backgrounds, and borders.

```css
@layer colors {
  /* Background colors */
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  /* Text colors */
  .text-primary {
    color: var(--color-primary);
  }
  
  /* Border colors */
  .border-primary {
    border-color: var(--color-primary);
  }
  
  /* Additional color-based classes... */
}
```

### 6. color-mix

The `color-mix` layer implements dynamic color calculations and mixtures.

```css
@layer color-mix {
  /* Generate color variants */
  .color-mix-overlay {
    background-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
  }
  
  /* Contrast colors */
  .color-contrast {
    color: color-contrast(var(--color-primary) vs white, black);
  }
  
  /* Additional color mixtures... */
}
```

### 7. layout

The `layout` layer defines the basic layout components and structures.

```css
@layer layout {
  /* containers */
  .containers {
    width: 100%;
    max-width: var(--containers-max-width);
    margin-inline: auto;
    padding-inline: var(--containers-padding);
  }
  
  /* grid system */
  .grid {
    display: grid;
    gap: var(--grid-gap);
  }
  
  /* flexbox-layout */
  .flex {
    display: flex;
  }
  
  /* Additional layout components... */
}
```

### 8. layout-queries

The `layout-queries` layer implements responsive customizations based on containers queries.

```css
@layer layout-queries {
  /* containers-anchor for containers queries */
  .containers-query {
    containers-type: inline-size;
    containers-name: layout;
  }
  
  /* responsive Breakpoints based on containers-size */
  @containers layout (min-width: 30rem) {
    .sm\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .sm\:flex-row {
      flex-direction: row;
    }
  }
  
  @containers layout (min-width: 48rem) {
    .md\:grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Additional responsive customizations... */
}
```

### 9. typography

The `typography` layer defines the Typography system with fonts, sizes, and text formatting.

```css
@layer typography {
  /* Font families */
  .font-sans {
    font-family: var(--font-family-sans);
  }
  
  /* Font sizes */
  .text-sm {
    font-size: var(--font-size-sm);
  }
  
  .text-base {
    font-size: var(--font-size-base);
  }
  
  /* Font weights */
  .font-bold {
    font-weight: var(--font-weight-bold);
  }
  
  /* Text-alignment */
  .text-center {
    text-align: center;
  }
  
  /* Additional typographical styles... */
}
```

### 10. utilities

The `utilities` layer provides atomic utility classes for quick styling.

```css
@layer utilities {
  /* flexbox-Utilities */
  .flex-col {
    flex-direction: column;
  }
  
  /* spacing-Utilities */
  .gap-4 {
    gap: var(--space-4);
  }
  
  /* Sizes-Utilities */
  .w-full {
    width: 100%;
  }
  
  /* Additional utility classes... */
}
```

### 11. smooth-scroll

The `smooth-scroll` layer defines the scroll behavior for a better user experience.

```css
@layer smooth-scroll {
  html {
    scroll-behavior: smooth;
  }
  
  /* Anchor behavior */
  .scroll-mt-4 {
    scroll-margin-top: var(--space-4);
  }
  
  /* Additional scroll styles... */
}
```

### 12. accessibility

The `accessibility` layer contains improvements for accessibility.

```css
@layer accessibility {
  /* Focus-Styles */
  :focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  /* Support for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Screen-Reader-Only elements */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Additional accessibility improvements... */
}
```

### 13. icons

The `icons` layer defines the icon system and the corresponding styles.

```css
@layer icons {
  /* icon-Base */
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
  
  /* icon-Sizes */
  .icon-sm {
    font-size: var(--icon-size-sm);
  }
  
  .icon-md {
    font-size: var(--icon-size-md);
  }
  
  /* Additional icon-Styles... */
}
```

### 14. components

The `components` layer contains all UI components of the design system.

```css
@layer components {
  /* button-Component */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--button-padding);
    border-radius: var(--button-radius);
    font-weight: var(--button-font-weight);
    transition: var(--button-transition);
  }
  
  .button.primary {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
  }
  
  /* Card-Component */
  .card {
    border-radius: var(--card-radius);
    overflow: hidden;
    background-color: var(--card-bg);
  }
  
  /* Additional components... */
}
```

### 15. animations

The `animations` layer defines the animation and Motion system.

```css
@layer animations {
  /* Fade-animation */
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fade {
    animation: fade var(--animation-duration) var(--animation-easing);
  }
  
  /* Slide-animation */
  @keyframes slide-in {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .animate-slide {
    animation: slide-in var(--animation-duration) var(--animation-easing);
  }
  
  /* Additional animations... */
}
```

### 16. effects

The `effects` layer contains visual effects like shadow, glass effects, and backgrounds.

```css
@layer effects {
  /* shadow */
  .shadow-sm {
    box-shadow: var(--shadow-sm);
  }
  
  /* Glass effect */
  .glass {
    backdrop-filter: blur(var(--glass-blur));
    background-color: var(--glass-bg);
  }
  
  /* Additional effects... */
}
```

### 17. themes

The `themes` layer defines the Theming system for different color schemes.

```css
@layer themes {
  /* Light theme (Default) */
  .theme-day {
    --color-background: var(--color-white);
    --color-text: var(--color-gray-900);
    /* Additional theme variables... */
  }
  
  /* Dark theme */
  .theme-night {
    --color-background: var(--color-gray-900);
    --color-text: var(--color-gray-100);
    /* Additional theme variables... */
  }
  
  /* Additional themes... */
}
```

## Advantages of the Layer system

The layer system of the Casoon UI Library offers several advantages:

1. **Precise Control of Specificity**: The order of layers determines priority, regardless of selector complexity.
2. **Improved Maintainability**: Clear separation of responsibilities makes debugging and further development easier.
3. **Scalability**: Easy addition of new features without affecting existing styles.
4. **Avoiding !important**: The layer structure reduces the need for !important declarations.
5. **Performance Optimization**: Modern CSS engines can process layer-based styles more efficiently.

## Best Practices

When working with the layer system, the following best practices should be followed:

1. **Respect Layer Boundaries**: Place styles in the appropriate layer based on their function.
2. **Avoid Cross-Layer Dependencies**: Do not allow a layer to be directly dependent on another.
3. **Minimal Specificity within Layers**: Use the simplest possible selectors within a layer.
4. **Consistent Naming Conventions**: Follow the established conventions for class and variable names.
5. **Document customizations**: When overriding styles in custom themes, document the purpose.

## Integration in Own Projects

To use the layer system in your project, simply import the `core.css`:

```css
@import "@casoon/ui-lib/core.css";
```

If you want to make your own customizations, respect the layer structure:

```css
/* Own CSS file after importing the core.css */
@import "@casoon/ui-lib/core.css";

/* Own components to the corresponding layer */
@layer components {
  .custom-component {
    /* Own styles... */
  }
}

/* Own utilities to the utilities-layer */
@layer utilities {
  .custom-utility {
    /* Own styles... */
  }
}

/* Own theme to the themes-layer */
@layer themes {
  .theme-custom {
    /* Own theme variables... */
  }
}
```

## Technical Details

The Core CSS system is optimized for modern browsers and uses the following technologies:

1. **CSS Layers**: Primary organization principle for cascade
2. **Layer system**: The `@layer` declarations are optimally compiled
3. **CSS Custom Properties**: For dynamic customizations and theming capability
4. **containers Queries**: For component-based responsiveness
5. **Modern Color Functions**: For dynamic color calculations and contrast
6. **Logical Properties**: For internationalized and bidirectional layouts

The entire system is optimized for Lightning CSS (formerly Parcel CSS), which allows efficient processing and minimization.

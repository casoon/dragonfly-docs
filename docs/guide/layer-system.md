---
title: Layer System
category: Guide
---

# Layer System

The CSS Layer System of the Casoon UI Library uses modern CSS features like `@layer` to control the specificity and cascading of styles. This creates a predictable and maintainable styling system.

> **Note on the current version:** The separate `custom-properties` layer has been integrated into the `tokens` layer to simplify the structure and improve maintainability.

## Structure of the Layer System

The layers are defined in a clear hierarchy:

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       core,                 /* Core functionalities */
       logical-properties,   /* Bidirectional layouts (RTL/LTR) */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variants */
       layout,               /* Layout basics */
       layout-queries,       /* Responsive adjustments */
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

The order is crucial: Layers that appear earlier in the list have a lower specificity than later layers.

## Centralized Layer Management

The layer structure is centralized:

1. The layer definitions are in the `base.css` file
2. All layer imports are integrated
3. This file is imported from the main `core.css` file

This approach offers several advantages:
- Clear separation of responsibilities
- Easier debugging of specificity issues
- Easier extensibility through new layers
- Better documentation of the layer structure

## Layer Usage in Your Own Projects

To benefit from the layer structure in your project:

### 1. Standard Usage

Simply import the `core.css` file, which automatically loads the complete layer system:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Advanced Usage with Custom Styles

If you want to add your own styles, use the appropriate layer:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Add your own components to the components layer */
@layer components {
  .my-component {
    /* Component styles using design tokens */
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}

/* Or create a new layer with higher specificity */
@layer my-custom-layer {
  .my-custom-class {
    property: value;
  }
}
```

### 3. Selective Use of Layers

You can also import only specific layers:

```css
/* Use only specific layers */
@import "@casoon/ui-lib/base.css";  /* The layer structure */
@import "@casoon/ui-lib/layers/reset.css";
@import "@casoon/ui-lib/layers/tokens.css";
@import "@casoon/ui-lib/layers/utilities.css";
```

## Layer Descriptions

Each layer has a specific role in the design system:

- **reset**: Reset browser default styles
- **tokens**: Design token variables (colors, spacing, typography) and registered CSS properties
- **core**: General basic functions
- **logical-properties**: Logical properties for bidirectional text (RTL/LTR)
- **colors**: Color system and color classes
- **color-mix**: Color mixtures and variations
- **layout**: Layout basics (container, grid, etc.)
- **layout-queries**: Responsive adjustments based on container queries
- **typography**: Typography system
- **utilities**: Atomic utility classes for quick styling
- **smooth-scroll**: Scroll behavior and effects
- **accessibility**: Accessibility improvements
- **icons**: Icon system
- **components**: UI components and component system
- **animations**: Animations and motion system
- **effects**: Visual effects
- **themes**: Theming system

## Best Practices

1. **Use the appropriate layers**: Assign styles to the semantically correct layer.
2. **Pay attention to specificity**: The lower in the list, the higher the specificity.
3. **Minimize !important**: The layer system should reduce the need for !important.
4. **Document layer usage**: Make it clear which layers you use in your project.

## Debugging

If styles are not applied as expected:

1. Check the browser console (DevTools) for errors
2. Use the inspector to see which styles are applied and from which layer
3. Check if your styles are defined in the correct layer
4. Note that styles in later defined layers take precedence

## Migration from Older Versions

If you are upgrading from an older version of the UI system:

1. Replace imports of older CSS files with the import of `core.css`
2. Check if your custom styles are compatible with the new layer structure
3. Assign your custom styles to the appropriate layers
4. Thoroughly test for styling issues 

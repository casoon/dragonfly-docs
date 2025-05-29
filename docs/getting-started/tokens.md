---
title: Design Tokens
category: Getting Started
---

# Design Tokens

Design Tokens are the fundamental building blocks of visual design in the Casoon UI Library. They define all central design values such as colors, spacing, typography, and more, which are used consistently throughout the system.

> **Note:** As of the current version, the separate `custom-properties` layer has been integrated into the `tokens` layer. All registered CSS properties are now defined within the tokens layer.

## Importance of Design Tokens

Design Tokens enable:

- **Consistency**: Ensuring a uniform appearance
- **Scalability**: Easy adaptation for different brands and themes
- **Maintainability**: Central changes affect the entire system
- **Better Collaboration**: Common design language for designers and developers

## Using Tokens

The Design Tokens of the Casoon UI Library are provided as CSS variables (Custom Properties):

```css
.element {
  /* Using tokens for consistent design */
  color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-md);
}
```

## Token Categories

### Colors

The color palette defines all available colors in the system:

```css
:root {
  /* Primary colors */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;
  
  /* Secondary colors */
  --color-secondary: #6C757D;
  --color-secondary-light: #ADB5BD;
  --color-secondary-dark: #495057;
  
  /* Status colors */
  --color-success: #28A745;
  --color-warning: #FFC107;
  --color-danger: #DC3545;
  --color-info: #17A2B8;
  
  /* Neutral colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-100: #F8F9FA;
  --color-gray-900: #212529;
  
  /* Semantic colors */
  --color-text: var(--color-gray-900);
  --color-text-light: var(--color-gray-600);
  --color-background: var(--color-white);
  --color-border: var(--color-gray-300);
}
```

### Spacing

The spacing tokens define consistent values for spacing and sizes:

```css
:root {
  /* Base unit */
  --space-unit: 0.25rem;  /* 4px at 16px base font size */
  
  /* Derived values */
  --space-1: calc(var(--space-unit) * 1);    /* 0.25rem / 4px */
  --space-2: calc(var(--space-unit) * 2);    /* 0.5rem / 8px */
  --space-3: calc(var(--space-unit) * 3);    /* 0.75rem / 12px */
  --space-4: calc(var(--space-unit) * 4);    /* 1rem / 16px */
  --space-5: calc(var(--space-unit) * 5);    /* 1.25rem / 20px */
  --space-6: calc(var(--space-unit) * 6);    /* 1.5rem / 24px */
  --space-8: calc(var(--space-unit) * 8);    /* 2rem / 32px */
  --space-10: calc(var(--space-unit) * 10);  /* 2.5rem / 40px */
  --space-12: calc(var(--space-unit) * 12);  /* 3rem / 48px */
  --space-16: calc(var(--space-unit) * 16);  /* 4rem / 64px */
  --space-20: calc(var(--space-unit) * 20);  /* 5rem / 80px */
  --space-24: calc(var(--space-unit) * 24);  /* 6rem / 96px */
  --space-32: calc(var(--space-unit) * 32);  /* 8rem / 128px */
}
```

### Typography

The typography tokens define font sizes, line heights, and font families:

```css
:root {
  /* Font families */
  --font-family-base: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  
  /* Font weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Base size and scaling */
  --font-size-base: 1rem;
  --line-height-base: 1.5;
  
  /* Font sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-md: 1rem;       /* 16px (Base) */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Line heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-loose: 1.75;
  --line-height-none: 1;
}
```

### Spacing and Margins

Tokens for spacing, paddings, and margins:

```css
:root {
  /* Container spacing */
  --container-padding-x: var(--space-4);
  --container-padding-y: var(--space-6);
  
  /* Component spacing */
  --component-padding-x: var(--space-4);
  --component-padding-y: var(--space-3);
  --component-spacing: var(--space-4);
  
  /* Form elements */
  --form-element-padding-x: var(--space-3);
  --form-element-padding-y: var(--space-2);
  --form-element-spacing: var(--space-4);
}
```

### Borders and Corners

Tokens for border radii and corner rounding:

```css
:root {
  /* Border radii */
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.25rem;    /* 4px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-full: 9999px;   /* Completely rounded corners */
  
  /* Component-specific radii */
  --button-radius: var(--radius-md);
  --card-radius: var(--radius-lg);
  --input-radius: var(--radius-md);
}
```

### Shadows

Tokens for shadows and depth effects:

```css
:root {
  /* Base shadows */
  --shadow-color: rgb(0 0 0 / 0.1);
  --shadow-color-darker: rgb(0 0 0 / 0.2);
  
  /* Shadow scale */
  --shadow-sm: 0 1px 2px var(--shadow-color);
  --shadow-md: 0 4px 6px var(--shadow-color), 0 1px 3px var(--shadow-color);
  --shadow-lg: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);
  --shadow-xl: 0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color);
  
  /* Component-specific shadows */
  --card-shadow: var(--shadow-md);
  --dropdown-shadow: var(--shadow-lg);
  --modal-shadow: var(--shadow-xl);
}
```

### Transitions and Animations

Tokens for transitions, animations, and movement:

```css
:root {
  /* Transition durations */
  --transition-duration-fast: 150ms;
  --transition-duration-normal: 300ms;
  --transition-duration-slow: 500ms;
  
  /* Transition curves */
  --transition-timing-default: ease;
  --transition-timing-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --transition-timing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Predefined transitions */
  --transition-base: all var(--transition-duration-normal) var(--transition-timing-default);
  --transition-transform: transform var(--transition-duration-normal) var(--transition-timing-default);
  --transition-opacity: opacity var(--transition-duration-normal) var(--transition-timing-default);
  --transition-colors: background-color var(--transition-duration-normal) var(--transition-timing-default),
                     color var(--transition-duration-normal) var(--transition-timing-default),
                     border-color var(--transition-duration-normal) var(--transition-timing-default);
}
```

### Z-Index

Tokens for Z-Index values to control stacking order:

```css
:root {
  /* Z-Index scale */
  --z-index-behind: -1;
  --z-index-base: 0;
  --z-index-raised: 1;
  --z-index-dropdown: 1000;
  --z-index-sticky: 1100;
  --z-index-fixed: 1200;
  --z-index-modal: 1300;
  --z-index-popover: 1400;
  --z-index-tooltip: 1500;
  --z-index-toast: 1600;
}
```

## Tokens and the Layer system

The Design Tokens are defined in the `tokens` layer, one of the most fundamental layers in the layer hierarchy. This ensures they are available everywhere but can be overridden by later layers.

```css
@layer tokens {
  :root {
    /* Design Tokens here */
  }
}
```

Since version 0.5.0, the tokens layer also includes registered CSS properties that were previously defined in their own custom-properties layer:

```css
@layer tokens {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
  
  @property --animation-progress {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }
}
```

## Tokens and Fluid Properties

In version 0.5.0, fluid properties with `interpolate-size` were introduced, allowing values to interpolate fluidly between different sizes:

```css
@layer tokens {
  :root {
    interpolate-size: allow-keywords;
    
    /* Fluid typography */
    --fluid-text-sm: small with-range(x-small, medium);
    --fluid-text-md: medium with-range(small, large);
    --fluid-text-lg: large with-range(medium, x-large);
  }
}
```

## Tokens and Responsive Design

The Design Tokens can be adjusted for different breakpoints or container sizes:

```css
@layer tokens {
  /* Base tokens for all sizes */
  :root {
    --space-unit: 0.25rem;
    --component-padding-x: var(--space-3);
  }
  
  /* Adjustments for larger screens */
  @media (min-width: 768px) {
    :root {
      --component-padding-x: var(--space-4);
    }
  }
  
  /* Container-query-based adjustments */
  @container layout (min-width: 40em) {
    :root {
      --component-padding-x: var(--space-5);
    }
  }
}
```

## Adding Custom Tokens

You can define your own Design Tokens in the `tokens` layer:

```css
@layer tokens {
  :root {
    /* Custom brand colors */
    --color-brand-blue: #0055ff;
    --color-brand-gold: #ffaa00;
    
    /* Project-specific spacing */
    --header-height: 4rem;
    --sidebar-width: 16rem;
  }
}
```

## Best Practices

1. **Use tokens instead of direct values**: Always use Design Tokens instead of hardcoded values to ensure consistency.
2. **Semantic naming**: Avoid meaningless names like `--color-1`, prefer semantic names like `--color-primary`.
3. **Derived values**: Derive values from base tokens to express relationships (`--space-lg: calc(var(--space-md) * 1.5)`).
4. **Add comments**: Document complex or non-obvious token values.
5. **Respect the layer system**: Use the `tokens` layer for all token definitions.

By consistently using Design Tokens, you create a solid foundation for a consistent, maintainable, and customizable design system.

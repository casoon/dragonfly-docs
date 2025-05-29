---
title: Core Features Compatibility
category: Compatibility
outline: deep
---

# Core Features Compatibility

This page details the browser compatibility of the core features of Casoon UI Library, including CSS variables, reset styles, the layer system, and logical properties.

## CSS Variables (Custom Properties)

CSS Variables are essential to the theming and customization capabilities of Casoon UI Library.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Basic CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 9.3+ | 49+ |
| CSS Variables in media queries | 69+ | 31+ | 11.1+ | 79+ | 11.3+ | 69+ |
| Computed value changes | 49+ | 31+ | 9.1+ | 15+ | 9.3+ | 49+ |

### Fallback Strategy

For browsers that don't support CSS variables, we recommend:

```css
/* Fallback value first */
.element {
  color: blue;
  color: var(--theme-color, blue);
}
```

For more complex theming needs in older browsers, consider using a CSS variables polyfill or generating separate CSS files for each theme.

## CSS Reset and Normalization

The reset styles in Casoon UI Library are compatible with all modern browsers and help standardize default styles.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Box-sizing reset | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |
| Margin/padding reset | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |
| Typography normalization | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |
| Form element reset | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |

No specific fallbacks are required for reset styles as they use basic CSS properties supported in all browsers.

## CSS Layer system

The `@layer` directive is used to manage style specificity in Casoon UI Library.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Basic `@layer` support | 99+ | 97+ | 15.4+ | 99+ | 15.4+ | 99+ |
| Nested layers | 99+ | 97+ | 15.4+ | 99+ | 15.4+ | 99+ |
| Layer ordering | 99+ | 97+ | 15.4+ | 99+ | 15.4+ | 99+ |

### Fallback Strategy

For browsers without `@layer` support, the library falls back to careful ordering of CSS files and specificity management. Import the CSS files in the following order:

1. Reset styles
2. Base styles
3. Component styles
4. Utility classes

## Logical Properties

Logical properties provide direction-agnostic layout capabilities, crucial for RTL language support.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Logical box model properties (margin, padding) | 69+ | 41+ | 12.1+ | 79+ | 12.2+ | 69+ |
| Logical dimensions (inline-size, block-size) | 69+ | 41+ | 12.1+ | 79+ | 12.2+ | 69+ |
| Logical borders | 69+ | 41+ | 12.1+ | 79+ | 12.2+ | 69+ |
| Logical positions (inset-block, inset-inline) | 87+ | 63+ | 14.1+ | 87+ | 14.5+ | 87+ |

### Fallback Strategy

For browsers without logical property support, the library provides both logical and physical properties:

```css
/* Physical properties (fallback) */
.element {
  margin-left: 1rem;
  margin-right: 1rem;
  /* Logical properties */
  margin-inline: 1rem;
}
```

For complete RTL support in older browsers, use a build process that generates separate LTR and RTL stylesheets with physical properties.

## CSS Color Functions

Modern color manipulation functions enhance the flexibility of the color system.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| `rgb()` and `rgba()` | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |
| `hsl()` and `hsla()` | 1+ | 1+ | 1+ | 12+ | 1+ | 1+ |
| `color-mix()` | 111+ | 113+ | 16.4+ | 111+ | 16.4+ | 111+ |
| `color()` function | Not supported | Not supported | Not supported | Not supported | Not supported | Not supported |
| `lab()` and `lch()` colors | 111+ | 113+ | 15+ | 111+ | 15+ | 111+ |

### Fallback Strategy

For advanced color functions, pre-compute values for older browsers:

```css
/* Fallback solid colors */
.element {
  background-color: #8860db;
  /* Modern browsers with color-mix */
  background-color: color-mix(in srgb, blue 50%, red 50%);
}
```

Consider using a CSS preprocessor like Sass to generate computed colors for older browsers.

## CSS Containment

CSS Containment improves performance by isolating parts of the page.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| `contain: content` | 52+ | 69+ | 15.4+ | 79+ | 15.4+ | 52+ |
| `contain: layout` | 52+ | 69+ | 15.4+ | 79+ | 15.4+ | 52+ |
| `contain: style` | 52+ | 69+ | 15.4+ | 79+ | 15.4+ | 52+ |
| `contain: paint` | 52+ | 69+ | 15.4+ | 79+ | 15.4+ | 52+ |
| `contain: size` | 52+ | 69+ | 15.4+ | 79+ | 15.4+ | 52+ |
| `content-visibility` | 85+ | 94+ | 15.4+ | 85+ | 15.4+ | 85+ |

### Fallback Strategy

Containment is a performance optimization and gracefully degrades; no specific fallback is required beyond ensuring elements have appropriate dimensions.

## Conclusion

The core features of Casoon UI Library are well-supported in modern browsers. For older browsers, the fallback strategies outlined above ensure a functional experience while newer browsers get the full enhanced experience.

When implementing the library, consider:

1. The minimum browser versions your project needs to support
2. Which features are critical vs. enhancements
3. Whether to use polyfills for broader compatibility
4. Testing in representative browsers from your user base

For detailed implementation guidance, see the [Fallback Strategies](/compatibility/fallbacks) page. 
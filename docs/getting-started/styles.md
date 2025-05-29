---
title: Styles
category: Getting Started
---

# Styles in the Casoon UI Design system

The Casoon UI Design system offers a comprehensive collection of CSS styles and utility classes that are based on design tokens and ensure consistent, responsive, and accessible user interfaces.

## Overview

The styles of casoon-ui-lib are divided into several categories:

1. **Design Tokens**: Fundamental design variables such as colors, spacing, typography
2. **Layouts**: Grid system, flexbox, containers, and positioning
3. **Typography**: Fonts, sizes, weights, and text formatting
4. **Utilities**: Helper classes for commonly used styling tasks
5. **Themes**: Customizable color palettes and visual appearances

## Modular Structure

The styles are modularly structured and use the layering approach of CSS:

```css
@layer core {
  /* Basic styles like tokens, reset, typography */
}

@layer utilities {
  /* Utility classes for layout, spacing, colors */
}

@layer components {
  /* Component-specific styles */
}

@layer themes {
  /* Theme-specific overrides */
}
```

## CSS Variables system

All styles are based on CSS variables (Custom Properties) defined at the :root level:

```css
:root {
  --color-primary: #3366FF;
  --spacing-4: 1rem;
  --font-size-base: 1rem;
  /* more variables... */
}
```

## Utility Classes

The casoon-ui-lib provides extensive utility classes for commonly used styling tasks:

```html
<!-- Colors -->
<div class="bg-primary text-white">Primary background color with white text</div>

<!-- Spacing -->
<div class="p-4 m-2">Padding and margin</div>

<!-- Flexbox -->
<div class="flex justify-between items-center">
  <div>Flex item left</div>
  <div>Flex item right</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</div>
```

## Responsive Design

All styles and utilities support responsive design through breakpoint prefixes:

```html
<div class="text-base md:text-lg lg:text-xl">
  <!-- Text size changes depending on screen size -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- Grid column count changes depending on screen size -->
</div>
```

## Detailed Documentation

Detailed information about the various style categories can be found in the following sections:

- [Design Tokens](/getting-started/tokens) - Fundamental design variables
- [Layout](/getting-started/layout) - Grid system, flexbox, and containers
- [Typography](/getting-started/typography) - Fonts and text formatting
- [Utilities](/getting-started/utilities) - Helper classes for various styling tasks
- [Themes](/getting-started/themes) - Customization of visual appearance
- [Iconsets](/getting-started/iconsets) - Available icons and their usage

## Best Practices

1. **Consistency through Design Tokens**
   - Use predefined design tokens instead of hardcoded values
   - Maintain consistent spacing, colors, and typography

2. **Utility-First Approach**
   - Use utility classes for fast and consistent styling
   - Combine utilities for more complex layouts

3. **Responsive Design**
   - Use breakpoint prefixes for responsive behavior
   - Test on different devices and screen sizes

4. **Accessibility**
   - Ensure sufficient color contrast
   - Use semantic HTML with the styles
   - Make sure interactions are keyboard-accessible

5. **Performance**
   - Import only the required style modules
   - Use the layering function to control specificity
   - Avoid too many nested selectors 
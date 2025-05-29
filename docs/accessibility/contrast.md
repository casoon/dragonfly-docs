---
title: Color Contrast Accessibility
category: Accessibility
---

# Color Contrast Accessibility

The Casoon UI Library implements comprehensive color contrast management to ensure that all components and text are accessible to users with visual impairments. This document outlines the contrast standards, implementation methods, and tools available for maintaining proper contrast in your applications.

## Overview

Proper color contrast is essential for readability and usability, especially for users with visual impairments such as color blindness or low vision. The Casoon UI Library adheres to the Web Content Accessibility Guidelines (WCAG) 2.1 standards for color contrast.

## Contrast Standards

The library follows these key contrast standards:

| WCAG Level | Text Type | Minimum Contrast Ratio |
|------------|-----------|------------------------|
| AA (minimum) | Normal text (< 18pt or < 14pt bold) | 4.5:1 |
| AA (minimum) | Large text (≥ 18pt or ≥ 14pt bold) | 3:1 |
| AAA (enhanced) | Normal text (< 18pt or < 14pt bold) | 7:1 |
| AAA (enhanced) | Large text (≥ 18pt or ≥ 14pt bold) | 4.5:1 |
| AA (minimum) | UI components and graphical objects | 3:1 |

## Implementation in the Library

### Contrast-Safe Color System

The Casoon UI Library's color system is designed with contrast in mind:

```css
:root {
  /* High-contrast text colors */
  --text-primary: var(--color-neutral-900); /* Ensures 15.8:1 on white */
  --text-secondary: var(--color-neutral-700); /* Ensures 9.5:1 on white */
  --text-tertiary: var(--color-neutral-500); /* Ensures 5.7:1 on white */
  
  /* Accessible background colors */
  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-neutral-50);
  --bg-tertiary: var(--color-neutral-100);
  
  /* Specific high-contrast combinations */
  --on-primary: var(--color-white); /* For text on primary color backgrounds */
  --on-success: var(--color-white);
  --on-danger: var(--color-white);
}
```

### Contrast-Safe Component Design

All components are designed with appropriate foreground and background color combinations:

```html
<!-- Example of button with proper contrast -->
<button class="btn btn-primary">
  <span class="btn-text">Submit</span>
</button>

<style>
.btn-primary {
  background-color: var(--color-primary-600); /* Dark enough for white text */
  color: var(--color-white);
  /* Ensures at least 4.5:1 contrast ratio */
}
</style>
```

## Contrast Testing Tools

### Built-in Contrast Checking

The library includes utilities for checking contrast ratios at runtime:

```javascript
// Import the contrast checker utility
import { checkContrast } from '@casoon/ui-lib/utilities/contrast';

// Check the contrast ratio between two colors
const ratio = checkContrast('#FFFFFF', '#1F2937');
console.log(`Contrast ratio: ${ratio}`); // Output: Contrast ratio: 15.8:1

// Determine if the contrast is sufficient for WCAG AA
const isAACompliant = checkContrast.isCompliant('#FFFFFF', '#1F2937', 'AA');
console.log(`AA compliant: ${isAACompliant}`); // Output: AA compliant: true
```

### CSS Custom Properties for Contrast

The library provides CSS variables to help maintain contrast:

```css
.custom-element {
  /* Automatically select black or white text based on background */
  color: var(--color-contrast-text);
  background-color: var(--color-primary-500);
  
  /* Automatically provide an accessible border if needed for contrast */
  border: 1px solid var(--color-contrast-border);
}
```

## Contrast-Safe CSS Classes

The library includes utility classes for ensuring proper contrast:

```html
<!-- Text with guaranteed contrast on any background -->
<p class="text-contrast-safe">This text maintains proper contrast</p>

<!-- Element with contrast-checked borders -->
<div class="border-contrast-safe">This has properly contrasting borders</div>

<!-- Automatic color inversion based on background -->
<button class="btn bg-primary text-contrast-auto">Dynamic contrast text</button>
```

## Dynamic Contrast Adaptation

The library supports dynamic contrast adaptation for different contexts:

### Light and Dark Mode

```css
/* Light mode */
:root {
  --text-primary: var(--color-neutral-900);
  --bg-primary: var(--color-white);
}

/* Dark mode */
:root.dark-theme {
  --text-primary: var(--color-neutral-100);
  --bg-primary: var(--color-neutral-900);
}

/* Both maintain contrast ratios above 4.5:1 */
```

### High Contrast Mode

```css
/* High contrast mode adds additional contrast */
:root.high-contrast {
  --text-primary: var(--color-black);
  --text-secondary: var(--color-black);
  --bg-primary: var(--color-white);
  --color-primary-500: var(--color-black);
  --border-width: 2px;
}
```

## Implementing Contrast-Safe Designs

### Text on Images

When placing text on images, use these techniques to ensure legibility:

```html
<div class="image-card">
  <img src="background.jpg" alt="Decorative background">
  <div class="text-overlay contrast-guarantee">
    <h2>Readable heading</h2>
    <p>This text remains readable on any background image</p>
  </div>
</div>

<style>
.text-overlay.contrast-guarantee {
  /* Semi-transparent background to ensure text contrast */
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  
  /* Alternative technique with text shadow */
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}
</style>
```

### Focus Indicators

The library provides high-contrast focus indicators:

```css
:root {
  --focus-ring-color: var(--color-primary-500);
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
}

.btn:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

/* High contrast mode adjustment */
:root.high-contrast .btn:focus-visible {
  outline-width: 3px;
  outline-color: var(--color-black);
}
```

## Testing for Contrast Compliance

### Automated Testing

The library includes a contrast testing module for automated verification:

```javascript
// Example of automated contrast testing
import { ContrastTester } from '@casoon/ui-lib/testing/contrast';

// Test all components for WCAG AA compliance
ContrastTester.testAll('AA').then(results => {
  console.log(`Passed: ${results.passed.length}, Failed: ${results.failed.length}`);
  
  // Log specific failures
  results.failed.forEach(failure => {
    console.log(`${failure.component}: ${failure.foreground} on ${failure.background} - ratio: ${failure.ratio}`);
  });
});
```

### Manual Testing Tools

For manual testing, we recommend these tools:

1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Color.review**: https://color.review/
3. **Stark Contrast Checker**: Browser extension for design tools
4. **Lighthouse**: Includes contrast audits in accessibility testing

## Contrast for Different Visual Conditions

The library provides color palettes optimized for different types of color vision deficiencies:

```css
/* Deuteranopia-friendly color alternatives */
:root.deuteranopia {
  --color-success-500: #0072B2; /* Blue instead of green */
  --color-danger-500: #D55E00; /* Orange-red instead of red */
  --color-warning-500: #E69F00; /* Yellow-orange */
}

/* Protanopia-friendly color alternatives */
:root.protanopia {
  --color-success-500: #009E73; /* Teal instead of green */
  --color-danger-500: #D55E00; /* Orange-red instead of red */
  --color-warning-500: #F0E442; /* Yellow */
}
```

## Best Practices for Maintaining Contrast

1. **Always use the library's semantic color variables** instead of hard-coded color values
2. **Test components in both light and dark modes** to ensure contrast is maintained
3. **Avoid placing text on variegated backgrounds** without a contrast-guaranteeing overlay
4. **Don't rely solely on color** to convey information; use additional visual cues
5. **Regularly test with contrast checkers**, especially after customization
6. **Provide a high-contrast mode** option for users who need additional contrast
7. **Test with actual users** who have visual impairments for real-world feedback

## Browser Compatibility

The contrast features are supported across all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Custom Properties | 49+ | 31+ | 9.1+ | 15+ |
| Contrast checking functions | All | All | All | All |
| High Contrast Mode | 89+ | 89+ | 15+ | 79+ |

## Resources

- [WebAIM: Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [WCAG 2.1 Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Inclusive Components: Accessible color systems](https://inclusive-components.design/color-contrast/)
- [The A11Y Project: Accessible color standards](https://www.a11yproject.com/posts/design-accessible-color-systems/)

## Summary

The Casoon UI Library's contrast accessibility features ensure that all components maintain proper color contrast for users with visual impairments. By following the guidelines in this document and using the provided tools and utilities, you can maintain WCAG-compliant contrast in your applications while still achieving your design goals. 
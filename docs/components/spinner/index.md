---
title: Spinner Component
category: Components
---

# Spinner Component

The Spinner component provides loading indicators and animations for asynchronous processes. Spinners inform users that an operation is being performed in the background.

## Basic Usage

```html
<div class="spinner"></div>
```

## Size Variants

### Extra Small

```html
<div class="spinner spinner--xs"></div>
```

### Small

```html
<div class="spinner spinner--sm"></div>
```

### Medium (Default)

```html
<div class="spinner spinner--md"></div>
```

### Large

```html
<div class="spinner spinner--lg"></div>
```

### Extra Large

```html
<div class="spinner spinner--xl"></div>
```

## Style Variants

### Ring (Default)

```html
<div class="spinner spinner--ring"></div>
```

### Dots

```html
<div class="spinner spinner--dots"></div>
```

### Pulse

```html
<div class="spinner spinner--pulse"></div>
```

### Bounce

```html
<div class="spinner spinner--bounce"></div>
```

## Color Variants

### Primary

```html
<div class="spinner spinner--primary"></div>
```

### Secondary

```html
<div class="spinner spinner--secondary"></div>
```

### Light

```html
<div class="spinner spinner--light"></div>
```

### Dark

```html
<div class="spinner spinner--dark"></div>
```

## With Text

```html
<div class="spinner-container">
  <div class="spinner"></div>
  <span class="spinner-text">Loading...</span>
</div>
```

## Fullscreen Overlay

Use this to indicate a loading state for an entire page or section.

```html
<div class="spinner-overlay">
  <div class="spinner spinner--lg"></div>
</div>
```

## Customization

The Spinner component can be customized using CSS variables:

```css
:root {
  --color-primary: #3b82f6;     /* Primary color for spinner */
  --color-gray-300: #d1d5db;    /* Base spinner track color */
}
```

## Accessibility

For better accessibility, please consider these points:

- Include appropriate ARIA attributes to announce the loading state to screen readers
- Consider adding text that describes what is loading (unless it's obvious from context)
- Ensure there is sufficient contrast between the spinner and its background
- Add a descriptive label using `aria-label` or `aria-labelledby`

```html
<div class="spinner" role="status" aria-label="Loading content"></div>

<!-- Or with visible text -->
<div class="spinner-container" role="status">
  <div class="spinner"></div>
  <span class="spinner-text">Loading user data...</span>
  <span class="sr-only">Please wait while we load your content</span>
</div>
```

## Best Practices

- Use spinners to indicate that content is loading or an action is processing
- Keep animations subtle and not distracting
- For longer operations, consider showing progress indicators instead of indeterminate spinners
- Place spinners in a logical location (where the content will appear)
- For page-level loading, use a fullscreen overlay spinner
- Consider adding a timeout message for long-running operations
- Avoid using multiple spinners simultaneously in the same view 
---
title: Textarea Component
category: Components
---

# Textarea Component

The Textarea component provides a multi-line text input field for longer text content such as comments or descriptions.

## Basic Usage

```html
<textarea class="textarea" placeholder="Enter your text here..."></textarea>
```

## Variants

### Standard Textarea

```html
<textarea class="textarea" placeholder="Standard textarea"></textarea>
```

### Disabled

```html
<textarea class="textarea" disabled placeholder="Disabled textarea"></textarea>
```

### Read-only

```html
<textarea class="textarea readonly" readonly placeholder="Read-only textarea"></textarea>
```

### Error State

```html
<textarea class="textarea error" placeholder="Error state"></textarea>
```

### Success State

```html
<textarea class="textarea success" placeholder="Success state"></textarea>
```

## Size Variants

### Small

```html
<textarea class="textarea sm" placeholder="Small textarea"></textarea>
```

### Standard

```html
<textarea class="textarea" placeholder="Standard textarea"></textarea>
```

### Large

```html
<textarea class="textarea lg" placeholder="Large textarea"></textarea>
```

## With Character Counter

```html
<div class="textarea-container">
  <textarea class="textarea" placeholder="Text with character counter"></textarea>
  <div class="counter">0/100</div>
</div>
```

## With Form Label and Helper Text

```html
<div class="form-group">
  <label class="form-label" for="description">Description</label>
  <textarea class="textarea" id="description"></textarea>
  <div class="form-helper">Maximum 500 characters</div>
</div>
```

## Auto-resize Textarea

This variant automatically adjusts its height based on content (requires JavaScript).

```html
<textarea class="textarea auto-resize" placeholder="This textarea will auto-resize as you type..."></textarea>
```

## Customization

The Textarea component can be customized using CSS variables:

```css
:root {
  --color-white: #ffffff;        /* Background color */
  --color-gray-50: #f9fafb;      /* Read-only background color */
  --color-gray-100: #f3f4f6;     /* Disabled background */
  --color-gray-300: #d1d5db;     /* Border color */
  --color-gray-500: #6b7280;     /* Counter text color */
  --color-gray-900: #111827;     /* Text color */
  --color-primary: #3b82f6;      /* Focus border color */
  --color-error: #ef4444;        /* Error state color */
  --color-success: #10b981;      /* Success state color */
  --font-size-xs: 0.75rem;       /* Counter text size */
  --font-size-sm: 0.875rem;      /* Small textarea text */
  --font-size-base: 1rem;        /* Standard textarea text */
  --font-size-lg: 1.125rem;      /* Large textarea text */
  --radius-md: 0.375rem;         /* Border radius */
  --space-2: 0.5rem;             /* Small padding */
  --space-3: 0.75rem;            /* Standard padding */
  --space-4: 1rem;               /* Large padding */
  --transition-fast: 0.15s ease; /* Transition speed */
}
```

## Accessibility

For better accessibility, please consider these points:

- Always associate a visible label with the textarea using the `<label>` element
- Provide clear instructions or placeholder text
- Use helper text to communicate requirements
- Ensure error messages are descriptive and helpful
- Maintain sufficient color contrast for text and borders
- Test keyboard navigation and screen reader compatibility

## Best Practices

- Use textareas for multi-line inputs rather than single-line text fields
- Set an appropriate initial size using rows and columns, or CSS height
- Consider using a character counter for inputs with length limitations
- Provide clear validation feedback for required fields
- Use the auto-resize feature for better user experience with varying content lengths
- Set appropriate max-length attributes when there are character limits 
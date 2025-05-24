---
title: Select Component
category: Components
---

# Select Component

The Select component allows users to choose an option from a predefined list of choices.

## Basic Usage

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

## Variants

### Standard Select

```html
<select class="select">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

### Disabled

```html
<select class="select" disabled>
  <option>Disabled select</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Error State

```html
<select class="select error">
  <option>Error state</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Success State

```html
<select class="select success">
  <option>Success state</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

## Size Variants

### Small

```html
<select class="select sm">
  <option>Small select</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Standard

```html
<select class="select">
  <option>Standard select</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Large

```html
<select class="select lg">
  <option>Large select</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

## Multiple Selection

```html
<select class="select" multiple>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>
```

## With Option Groups

```html
<select class="select">
  <optgroup label="Group 1">
    <option>Option 1.1</option>
    <option>Option 1.2</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
</select>
```

## With Form Label

```html
<div class="form-group">
  <label class="form-label" for="country">Country</label>
  <select class="select" id="country">
    <option>Germany</option>
    <option>Austria</option>
    <option>Switzerland</option>
  </select>
</div>
```

## Customization

The Select component can be customized using CSS variables:

```css
:root {
  --color-white: #ffffff;        /* Background color */
  --color-gray-100: #f3f4f6;     /* Disabled background */
  --color-gray-300: #d1d5db;     /* Border color */
  --color-gray-500: #6b7280;     /* Disabled text color */
  --color-gray-700: #374151;     /* Optgroup text color */
  --color-gray-900: #111827;     /* Text color */
  --color-primary: #3b82f6;      /* Focus border & highlight */
  --color-error: #ef4444;        /* Error state color */
  --color-success: #10b981;      /* Success state color */
  --font-size-sm: 0.875rem;      /* Small text size */
  --font-size-base: 1rem;        /* Default text size */
  --font-size-lg: 1.125rem;      /* Large text size */
  --font-weight-medium: 500;     /* Optgroup font weight */
  --radius-sm: 0.125rem;         /* Multiple options radius */
  --radius-md: 0.375rem;         /* Select border radius */
  --space-1: 0.25rem;            /* Smallest padding */
  --space-2: 0.5rem;             /* Small padding */
  --space-3: 0.75rem;            /* Medium padding */
  --space-4: 1rem;               /* Large padding */
  --transition-fast: 0.15s ease; /* Transition speed */
}
```

## Accessibility

For better accessibility, please consider these points:

- Always use a visible label (using `<label>` element) associated with the select
- Ensure sufficient color contrast for text and borders
- Provide clear instructions for multiple select inputs
- Use optgroups to organize related options in long lists
- Include a default or placeholder option when appropriate
- Make sure the component is keyboard accessible

## Best Practices

- Use select for choosing one (or multiple) options from a list
- Keep option text concise and clear
- Order options in a logical manner (alphabetical, numerical, or by frequency of use)
- Group related options using optgroups for long lists
- Use radio buttons instead when there are fewer than 5 options
- Consider using a custom select component for more complex use cases with search functionality 
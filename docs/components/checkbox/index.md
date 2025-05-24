---
title: Checkbox Component
category: Components
---

# Checkbox Component

The Checkbox component allows users to select one or more options from a list.

## Basic Usage

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Select option</span>
</label>
```

## Variants

### Standard Checkbox

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Standard Checkbox</span>
</label>
```

### Checked

```html
<label class="checkbox">
  <input type="checkbox" checked>
  <span>Selected option</span>
</label>
```

### Disabled

```html
<label class="checkbox">
  <input type="checkbox" disabled>
  <span>Disabled option</span>
</label>
```

## Size Variants

### Small

```html
<label class="checkbox small">
  <input type="checkbox">
  <span>Small checkbox</span>
</label>
```

### Standard

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Standard checkbox</span>
</label>
```

### Large

```html
<label class="checkbox large">
  <input type="checkbox">
  <span>Large checkbox</span>
</label>
```

## Checkbox Group

```html
<div class="checkbox-group">
  <label class="checkbox">
    <input type="checkbox">
    <span>Option 1</span>
  </label>
  
  <label class="checkbox">
    <input type="checkbox">
    <span>Option 2</span>
  </label>
  
  <label class="checkbox">
    <input type="checkbox">
    <span>Option 3</span>
  </label>
</div>
```

## Customization

The Checkbox component can be customized using CSS variables:

```css
:root {
  --color-primary: #3b82f6; /* Primary color for checked state */
  --color-gray-100: #f3f4f6; /* Background for disabled state */
  --color-gray-400: #9ca3af; /* Border color for unchecked state */
  --radius-sm: 0.125rem;    /* Border radius for checkbox */
  --transition-fast: 0.15s ease-in-out; /* Transition speed */
  --space-2: 0.5rem;        /* Gap between checkbox and label */
  --space-3: 0.75rem;       /* Gap between checkbox items in a group */
}
```

## Accessibility

For better accessibility, please consider these points:

- Always use a `<label>` element that wraps the checkbox input
- Group related checkboxes using the `checkbox-group` class
- Ensure sufficient contrast between background and checkbox
- Make sure the checkbox is keyboard accessible (tab navigation and space key)
- Add `aria-describedby` when needed to provide additional information

## Best Practices

- Use checkboxes for binary choices or multiple selections
- Formulate labels clearly and concisely
- Arrange checkboxes in logical groups
- Avoid too many checkboxes in one group
- Use radio buttons for "either/or" decisions instead of checkboxes 
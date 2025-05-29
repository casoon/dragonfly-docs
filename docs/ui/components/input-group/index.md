---
title: Input Group
category: Components
---

# Input Group

The Input Group component allows combining input fields with additional elements such as prefixes, suffixes, labels, or buttons.

## Basic Usage

### Input with Prefix

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Username">
</div>
```

### Input with Suffix

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Price">
  <span class="input-group__suffix">€</span>
</div>
```

### Input with Prefix and Suffix

```html
<div class="input-group">
  <span class="input-group__prefix">$</span>
  <input type="number" class="input" placeholder="0.00">
  <span class="input-group__suffix">.00</span>
</div>
```

## Variants

### With Button

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Search...">
  <button class="btn btn--primary input-group__button">Search</button>
</div>
```

### With Icon

```html
<div class="input-group">
  <span class="input-group__prefix">
    <span class="feather-search"></span>
  </span>
  <input type="text" class="input" placeholder="Search...">
</div>
```

### With Select

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Amount">
  <select class="select input-group__select">
    <option>EUR</option>
    <option>USD</option>
    <option>GBP</option>
  </select>
</div>
```

## Size Variants

### Small

```html
<div class="input-group input-group--sm">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input input--sm" placeholder="Username">
</div>
```

### Standard

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Username">
</div>
```

### Large

```html
<div class="input-group input-group--lg">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input input--lg" placeholder="Username">
</div>
```

## States

### Error

```html
<div class="input-group input-group--error">
  <input type="email" class="input input--error" value="invalid-email">
  <span class="input-group__suffix input-group__suffix--error">
    <span class="feather-alert-circle"></span>
  </span>
</div>
<div class="input-error-message">Please enter a valid email address.</div>
```

### Success

```html
<div class="input-group input-group--success">
  <input type="email" class="input input--success" value="name@example.com">
  <span class="input-group__suffix input-group__suffix--success">
    <span class="feather-check"></span>
  </span>
</div>
```

### Disabled

```html
<div class="input-group input-group--disabled">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Username" disabled>
</div>
```

## Customization

The Input Group component can be customized using CSS variables:

```css
@layer modules-input-group {
  .input-group {
    --input-group-bg: var(--bg-subtle);
    --input-group-border-color: var(--color-gray-300);
    --input-group-border-radius: var(--radius-md);
    --input-group-padding: var(--spacing-2);
  }
}
```

## Accessibility

For better accessibility:

- Always connect a label to the input field (via `for` attribute)
- Use `aria-describedby` for error messages or hints
- Ensure sufficient contrast between text and background
- Provide clear guidance for error correction

## Best Practices

- Use Input Groups for related input elements
- Keep prefixes and suffixes short and clear
- Use icons for visual support
- Ensure all elements of an Input Group appear visually connected
- Avoid too many elements in a single Input Group 
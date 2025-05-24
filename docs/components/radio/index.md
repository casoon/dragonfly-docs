---
title: Radio Component
category: Components
---

# Radio Component

The Radio component allows users to select a single option from a list of alternatives.

## Basic Usage

```html
<label class="radio">
  <input type="radio" name="radioGroup">
  <span class="label">Option 1</span>
</label>
<label class="radio">
  <input type="radio" name="radioGroup">
  <span class="label">Option 2</span>
</label>
```

## Variants

### Standard Radio

```html
<label class="radio">
  <input type="radio" name="demoRadio1">
  <span class="label">Standard Radio</span>
</label>
```

### Checked

```html
<label class="radio">
  <input type="radio" name="demoRadio2" checked>
  <span class="label">Selected option</span>
</label>
```

### Disabled

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled>
  <span class="label">Disabled option</span>
</label>
```

### Disabled Checked

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled checked>
  <span class="label">Disabled selected option</span>
</label>
```

## Size Variants

### Small

```html
<label class="radio sm">
  <input type="radio" name="demoRadioSize">
  <span class="label">Small radio button</span>
</label>
```

### Standard

```html
<label class="radio">
  <input type="radio" name="demoRadioSize">
  <span class="label">Standard radio button</span>
</label>
```

### Large

```html
<label class="radio lg">
  <input type="radio" name="demoRadioSize">
  <span class="label">Large radio button</span>
</label>
```

## Radio Group

```html
<div class="radio-group">
  <label class="radio">
    <input type="radio" name="options" value="option1">
    <span class="label">Option 1</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="options" value="option2">
    <span class="label">Option 2</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="options" value="option3">
    <span class="label">Option 3</span>
  </label>
</div>
```

## Horizontal Radio Buttons

```html
<div class="radio-group horizontal">
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline1">
    <span class="label">Option 1</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline2">
    <span class="label">Option 2</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline3">
    <span class="label">Option 3</span>
  </label>
</div>
```

## Customization

The Radio component can be customized using CSS variables:

```css
:root {
  --color-primary: #3b82f6;     /* Primary color for checked state */
  --color-white: #ffffff;       /* Background for radio button */
  --color-gray-100: #f3f4f6;    /* Background for disabled state */
  --color-gray-300: #d1d5db;    /* Border for disabled state */
  --color-gray-400: #9ca3af;    /* Border color for unchecked state */
  --font-size-xs: 0.75rem;      /* Small text size */
  --font-size-sm: 0.875rem;     /* Medium text size (default) */
  --font-size-base: 1rem;       /* Large text size */
  --space-2: 0.5rem;            /* Gap between elements */
  --transition-fast: 0.15s ease-in-out; /* Transition speed */
}
```

## Accessibility

For better accessibility, please consider these points:

- Always use a `<label>` element that wraps the radio input
- Group related radio buttons using the `radio-group` class
- Ensure sufficient contrast between background and radio button
- Make sure the radio buttons are keyboard accessible (tab navigation and arrow keys)
- Always use the same `name` attribute value for a group of radio buttons to ensure only one option can be selected

## Best Practices

- Use radio buttons when only a single option from a list can be selected
- Arrange radio buttons vertically to improve readability
- Add a default selection if all options are equally valid
- Limit the number of options to a manageable amount
- Use a select box instead for more than 5-7 options
- Place the most common or recommended option first 
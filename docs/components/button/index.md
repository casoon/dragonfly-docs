---
title: Button Component
outline: false
---

# Button

The Button component of the Casoon UI Library offers various styles and variants for interactive elements. Buttons are one of the most fundamental UI elements and are used for actions, form submissions, and navigation interactions.

## Basic Usage

```html
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
```

<div class="example-wrapper">
  <button class="button primary">Primary Button</button>
  <button class="button secondary">Secondary Button</button>
  <button class="button outline">Outline Button</button>
</div>

## Variants

### Sizes

Buttons can be displayed in different sizes to adapt to different contexts.

```html
<button class="button sm">Small Button</button>
<button class="button">Standard Button</button>
<button class="button lg">Large Button</button>
```

<div class="example-wrapper">
  <button class="button primary sm">Small Button</button>
  <button class="button primary">Standard Button</button>
  <button class="button primary lg">Large Button</button>
</div>

### States

Buttons can have different states to provide feedback to the user.

```html
<button class="button primary">Normal</button>
<button class="button primary hover">Hover</button>
<button class="button primary active">Active</button>
<button class="button primary" disabled>Disabled</button>
<button class="button primary loading">
  <span class="button__text">Loading</span>
  <span class="button__loader"></span>
</button>
```

<div class="example-wrapper">
  <button class="button primary">Normal</button>
  <button class="button primary hover">Hover</button>
  <button class="button primary active">Active</button>
  <button class="button primary" disabled>Disabled</button>
  <button class="button primary loading">
    <span class="button__text">Loading</span>
    <span class="button__loader"></span>
  </button>
</div>

### Colors and Styles

The Button component offers various predefined colors and styles that indicate different types of actions.

```html
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button danger">Danger</button>
<button class="button warning">Warning</button>
<button class="button info">Info</button>
<button class="button outline">Outline</button>
<button class="button ghost">Ghost</button>
<button class="button link">Link</button>
```

<div class="example-wrapper">
  <button class="button primary">Primary</button>
  <button class="button secondary">Secondary</button>
  <button class="button success">Success</button>
  <button class="button danger">Danger</button>
  <button class="button warning">Warning</button>
  <button class="button info">Info</button>
  <button class="button outline">Outline</button>
  <button class="button ghost">Ghost</button>
  <button class="button link">Link</button>
</div>

### With Icon

Buttons can contain icons to enhance visual cues.

```html
<button class="button primary">
  <span class="button__icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  </span>
  <span class="button__text">With Icon</span>
</button>

<button class="button outline">
  <span class="button__icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </span>
  <span class="button__text">Profile</span>
</button>
```

<div class="example-wrapper">
  <button class="button primary">
    <span class="button__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </span>
    <span class="button__text">With Icon</span>
  </button>
  <button class="button outline">
    <span class="button__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span>
    <span class="button__text">Profile</span>
  </button>
</div>

### Icon Button

```html
<button class="button icon primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</button>

<button class="button icon outline">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
</button>
```

<div class="example-wrapper">
  <button class="button icon primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  </button>
  <button class="button icon outline">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </button>
</div>

### Block Button

Block buttons take up the full width of their container, ideal for mobile views or when the button needs to be prominently displayed.

```html
<button class="button primary block">Full Width</button>
```

<div class="example-wrapper">
  <button class="button primary block">Full Width</button>
</div>

## Usage Examples

### Button Group

Button groups can be used to group related actions.

```html
<div class="button-group">
  <button class="button">Back</button>
  <button class="button primary">Next</button>
</div>
```

<div class="example-wrapper">
  <div class="button-group">
    <button class="button">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>

## Importing Modules

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Button module */
@import '@casoon/ui-lib/components/button.css';
```

## CSS Variables

The Button component can be customized using CSS variables:

```css
:root {
  /* Basic button styles */
  --button-font-family: var(--font-family-base);
  --button-font-weight: var(--font-weight-medium);
  --button-border-radius: 0.25rem;
  --button-transition: all 0.2s ease-in-out;
  --button-focus-ring-width: 3px;
  --button-focus-ring-color: rgba(var(--color-primary-rgb), 0.25);
  
  /* Padding for different sizes */
  --button-padding-y-sm: 0.25rem;
  --button-padding-x-sm: 0.5rem;
  --button-padding-y: 0.5rem;
  --button-padding-x: 1rem;
  --button-padding-y-lg: 0.75rem;
  --button-padding-x-lg: 1.5rem;
  
  /* Font sizes for different sizes */
  --button-font-size-sm: 0.75rem;
  --button-font-size: 0.875rem;
  --button-font-size-lg: 1rem;
  
  /* Primary button */
  --button-primary-bg: var(--color-primary);
  --button-primary-color: white;
  --button-primary-border-color: var(--color-primary);
  --button-primary-hover-bg: var(--color-primary-600);
  --button-primary-hover-color: white;
  --button-primary-hover-border-color: var(--color-primary-600);
  --button-primary-active-bg: var(--color-primary-700);
  --button-primary-active-color: white;
  --button-primary-active-border-color: var(--color-primary-700);
  
  /* Secondary button */
  --button-secondary-bg: var(--color-secondary);
  --button-secondary-color: white;
  --button-secondary-border-color: var(--color-secondary);
  
  /* Outline button */
  --button-outline-bg: transparent;
  --button-outline-color: var(--color-primary);
  --button-outline-border-color: var(--color-primary);
  
  /* Ghost button */
  --button-ghost-bg: transparent;
  --button-ghost-color: var(--color-gray-700);
  --button-ghost-border-color: transparent;
  
  /* Link button */
  --button-link-padding-y: 0;
  --button-link-padding-x: 0;
  --button-link-bg: transparent;
  --button-link-color: var(--color-primary);
  --button-link-border-color: transparent;
  --button-link-hover-text-decoration: underline;
  
  /* Disabled state */
  --button-disabled-opacity: 0.65;
  --button-disabled-cursor: not-allowed;
}
```

## Best Practices

### Accessibility

- Use semantic HTML elements (`<button>` for actions, `<a>` for navigation)
- Ensure buttons have sufficient contrast
- Provide clear, descriptive labels
- Use `aria-label` for icon-only buttons
- Ensure keyboard accessibility (focus states, tab order)

### Implementation Guidelines

- Use appropriate button types (primary for main actions, secondary for less important actions)
- Be consistent with button styling across your application
- Group related buttons together
- Use appropriate sizes based on context and importance
- Limit the number of primary buttons on a page to avoid confusion

### Common Patterns

- **Form submission**: Use a primary button for submit and an outline button for cancel
- **Confirmation dialogs**: Use a primary button for confirm and a secondary or outline button for cancel
- **Icon buttons**: Use for common actions with universally recognized icons
- **Button groups**: Use for related actions or options

## Integration

### React

```jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

function MyComponent() {
  return (
    <button className="button primary">
      Primary Button
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="button primary">
    Primary Button
  </button>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

export default {
  name: 'MyComponent'
}
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/components/button.css">
</head>
<body>
  <button class="button primary">Primary Button</button>
</body>
</html>
```

<style>
.example-wrapper {
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px 0;
}

.example-wrapper > * {
  margin-right: 10px;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.button-group.right {
  justify-content: flex-end;
}

.form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}
</style>
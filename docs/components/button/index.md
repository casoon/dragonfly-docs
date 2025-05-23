# Button

The Button component of the Casoon UI Library offers various styles and variants for interactive elements.

## Usage

```html
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
```

## Importing Modules

```css
/* Import the required modules */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */
@import '@casoon/ui-lib/components/button.css';
```

## Variants

### Sizes

```html
<button class="button sm">Small Button</button>
<button class="button">Standard Button</button>
<button class="button lg">Large Button</button>
```

### States

```html
<button class="button" disabled>Disabled Button</button>
<button class="button loading">
  <span class="button__text">Loading Button</span>
  <span class="button__loader"></span>
</button>
```

### Colors

```html
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button danger">Danger</button>
<button class="button warning">Warning</button>
<button class="button info">Info</button>
```

### With Icon

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
```

### Icon Button

```html
<button class="button icon primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</button>
```

### Block Button

```html
<button class="button primary block">Full Width</button>
```

## CSS Variables

The Button component uses the following CSS variables:

```css
:root {
  --button-padding: 0.5rem 1rem;
  --button-border-radius: 0.25rem;
  --button-font-size: 1rem;
  --button-font-weight: 500;
  --button-transition: all 0.2s ease;
  
  --button-sm-padding: 0.25rem 0.5rem;
  --button-sm-font-size: 0.875rem;
  
  --button-lg-padding: 0.75rem 1.5rem;
  --button-lg-font-size: 1.125rem;
  
  --button-primary-bg: var(--color-primary);
  --button-primary-text: var(--color-white);
  --button-primary-border: var(--color-primary);
  
  --button-secondary-bg: var(--color-secondary);
  --button-secondary-text: var(--color-white);
  --button-secondary-border: var(--color-secondary);
  
  --button-outline-bg: transparent;
  --button-outline-text: var(--color-primary);
  --button-outline-border: var(--color-primary);
  
  --button-success-bg: var(--color-success);
  --button-success-text: var(--color-white);
  --button-success-border: var(--color-success);
  
  --button-danger-bg: var(--color-danger);
  --button-danger-text: var(--color-white);
  --button-danger-border: var(--color-danger);
  
  --button-warning-bg: var(--color-warning);
  --button-warning-text: var(--color-white);
  --button-warning-border: var(--color-warning);
  
  --button-info-bg: var(--color-info);
  --button-info-text: var(--color-white);
  --button-info-border: var(--color-info);
}
```

## Best Practices

### Accessibility

- Use semantic button elements (`<button>`) for interactive actions
- Use links (`<a>`) for navigation to other pages
- Ensure sufficient contrast between text and background
- Set the `disabled` attribute for disabled buttons
- Avoid buttons that are too small (at least 44x44px touch target)

### Responsive Design

- Use relative units (rem, em) for sizing
- Adjust padding and font size for different screen sizes
- Use `block` on mobile devices for better touch targets

### Performance

- Only load the required button variants
- Avoid overly complex shadows or animations on buttons

## Framework Integration

### React

```jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

function Button({ 
  children, 
  variant = 'primary',
  size = '',
  block = false,
  isLoading = false,
  ...props 
}) {
  return (
    <button
      className={`button ${variant || ''} ${size || ''} ${block ? 'block' : ''} ${isLoading ? 'loading' : ''}`}
      {...props}
    >
      {isLoading && <span className="button__loader"></span>}
      <span className="button__text">{children}</span>
    </button>
  );
}

export default Button;
```

### Vue

```vue
<template>
  <button
    class="button"
    :class="[
      variant || '',
      size || '',
      { 'block': block },
      { 'loading': loading }
    ]"
    v-bind="$attrs"
  >
    <span v-if="loading" class="button__loader"></span>
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
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
<body class="theme-day">
  <button class="button primary">
    Primary Button
  </button>
  
  <button class="button outline lg">
    Large Outline Button
  </button>
  
  <button class="button success block">
    Full Width Success Button
  </button>
</body>
</html> 
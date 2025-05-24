# Input

The Input component of the Casoon UI Library offers various styles and variants for input fields.

## Usage

```html
<input class="input" type="text" placeholder="Enter text">
```

## Importing Modules

```css
@import '@casoon/ui-lib/components/input.css';
```

## Variants

### Status

```html
<input class="input" type="text" placeholder="Standard">
<input class="input input--error" type="text" placeholder="Error">
<input class="input input--success" type="text" placeholder="Success">
<input class="input input--warning" type="text" placeholder="Warning">
```

### Sizes

```html
<input class="input input--sm" type="text" placeholder="Small">
<input class="input" type="text" placeholder="Standard">
<input class="input input--lg" type="text" placeholder="Large">
```

### Types

```html
<input class="input" type="text" placeholder="Text">
<input class="input" type="password" placeholder="Password">
<input class="input" type="email" placeholder="Email">
<input class="input" type="number" placeholder="Number">
<input class="input" type="tel" placeholder="Telephone">
<input class="input" type="url" placeholder="URL">
<input class="input" type="search" placeholder="Search">
<input class="input" type="date">
<input class="input" type="time">
<input class="input" type="datetime-local">
```

### Readonly and Disabled

```html
<input class="input" type="text" placeholder="Read-only" readonly>
<input class="input" type="text" placeholder="Disabled" disabled>
```

### With Label

```html
<div class="form-group">
  <label for="name" class="form-label">Name</label>
  <input id="name" class="input" type="text" placeholder="Enter name">
</div>
```

### With Help Text

```html
<div class="form-group">
  <label for="email" class="form-label">Email</label>
  <input id="email" class="input" type="email" placeholder="Enter email">
  <div class="form-hint">We will never share your email.</div>
</div>

<div class="form-group">
  <label for="password" class="form-label">Password</label>
  <input id="password" class="input input--error" type="password">
  <div class="form-error">Password must be at least 8 characters.</div>
</div>
```

### Input Group

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input class="input" type="text" placeholder="Username">
</div>

<div class="input-group">
  <input class="input" type="text" placeholder="Search">
  <button class="input-group__suffix button button--primary">Search</button>
</div>

<div class="input-group">
  <span class="input-group__prefix">$</span>
  <input class="input" type="number" placeholder="0.00">
  <span class="input-group__suffix">.00</span>
</div>
```

## CSS Variables

The Input component uses the following CSS variables:

```css
:root {
  --input-padding: 0.5rem 0.75rem;
  --input-border: 1px solid var(--color-gray-300);
  --input-border-radius: 0.25rem;
  --input-bg: var(--color-white);
  --input-color: var(--color-gray-900);
  --input-placeholder-color: var(--color-gray-500);
  --input-focus-border: var(--color-primary);
  --input-focus-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
  
  --input-error-border: var(--color-danger);
  --input-error-bg: var(--color-white);
  --input-error-focus-shadow: 0 0 0 3px rgba(var(--color-danger-rgb), 0.1);
  
  --input-success-border: var(--color-success);
  --input-success-bg: var(--color-white);
  --input-success-focus-shadow: 0 0 0 3px rgba(var(--color-success-rgb), 0.1);
  
  --input-warning-border: var(--color-warning);
  --input-warning-bg: var(--color-white);
  --input-warning-focus-shadow: 0 0 0 3px rgba(var(--color-warning-rgb), 0.1);
  
  --input-disabled-bg: var(--color-gray-100);
  --input-disabled-color: var(--color-gray-600);
  
  --input-sm-padding: 0.25rem 0.5rem;
  --input-sm-font-size: 0.875rem;
  
  --input-lg-padding: 0.75rem 1rem;
  --input-lg-font-size: 1.125rem;
}
```

## Best Practices

### Accessibility

- Always use labels with `for` attributes that reference the input IDs
- Avoid placeholders as the only description of the input field
- Use error and help texts for additional information
- Ensure sufficient contrast for text and borders
- Use appropriate input types for better screen reader support and mobile keyboards

### Responsive Design

- Use relative units for size specifications
- Adjust padding and font size for different screen sizes
- Make sure input fields are large enough on mobile devices

### Validation

- Use the `required` attribute for required fields
- Use pattern attributes for client-side validation
- Combine HTML5 validation with JavaScript validation for better user experience
- Display error messages below the input field

## Framework Integration

### React

```jsx
import React from 'react';
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/input.css';

function Input({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  readOnly = false,
  error = false,
  success = false,
  size = '',
  icon = '',
  className = '',
  ...props
}) {
  const inputClasses = [
    'input',
    error ? 'error' : '',
    success ? 'success' : '',
    size ? size : '',
    icon ? 'with-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {icon && <span className={`input-icon ${icon}`}></span>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        className={inputClasses}
        {...props}
      />
    </div>
  );
}

export default Input;
```

### Vue

```vue
<template>
  <div class="input-wrapper">
    <span 
      v-if="icon" 
      class="input-icon"
      :class="icon"
    ></span>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="input"
      :class="[
        error ? 'error' : '',
        success ? 'success' : '',
        size,
        icon ? 'with-icon' : '',
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/input.css';

export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    name: String,
    modelValue: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    error: Boolean,
    success: Boolean,
    size: String,
    icon: String
  }
}
</script>
```

### Svelte

```svelte
<script>
  import '@casoon/ui-lib/core.css';
  import '@casoon/ui-lib/components/input.css';
  
  export let type = 'text';
  export let id = '';
  export let name = '';
  export let value = '';
  export let placeholder = '';
  export let disabled = false;
  export let readonly = false;
  export let error = false;
  export let success = false;
  export let size = '';
  export let icon = '';
</script>

<div class="input-wrapper">
  {#if icon}
    <span class="input-icon {icon}"></span>
  {/if}
  <input
    {type}
    {id}
    {name}
    {placeholder}
    {disabled}
    readonly={readonly}
    bind:value
    class="input {error ? 'error' : ''} {success ? 'success' : ''} {size} {icon ? 'with-icon' : ''}"
    on:input
    on:change
    on:focus
    on:blur
    {...$$restProps}
  />
</div>
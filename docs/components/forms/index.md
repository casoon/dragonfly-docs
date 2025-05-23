# Forms

The Forms components provide a collection of form elements in the Casoon UI Library.

## Usage

### Text Input

```html
<div class="form-group">
  <label for="name" class="form-label">Name</label>
  <input type="text" id="name" class="form-input" placeholder="Your name">
</div>
```

### Textarea

```html
<div class="form-group">
  <label for="message" class="form-label">Message</label>
  <textarea id="message" class="form-textarea" placeholder="Your message"></textarea>
</div>
```

### Select

```html
<div class="form-group">
  <label for="country" class="form-label">Country</label>
  <select id="country" class="form-select">
    <option value="">Please select</option>
    <option value="de">Germany</option>
    <option value="at">Austria</option>
    <option value="ch">Switzerland</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-group">
  <label class="form-checkbox">
    <input type="checkbox">
    <span>I agree to the terms and conditions</span>
  </label>
</div>
```

### Radio

```html
<div class="form-group">
  <label class="form-radio">
    <input type="radio" name="gender" value="male">
    <span>Male</span>
  </label>
  <label class="form-radio">
    <input type="radio" name="gender" value="female">
    <span>Female</span>
  </label>
</div>
```

## Variants

### Sizes

```html
<div class="form-group">
  <input type="text" class="form-input form-input--sm" placeholder="Small">
  <input type="text" class="form-input" placeholder="Normal">
  <input type="text" class="form-input form-input--lg" placeholder="Large">
</div>
```

### Status

```html
<div class="form-group">
  <input type="text" class="form-input form-input--success" placeholder="Success">
  <input type="text" class="form-input form-input--warning" placeholder="Warning">
  <input type="text" class="form-input form-input--error" placeholder="Error">
</div>
```

### With Icons

```html
<div class="form-group">
  <div class="form-input-with-icon">
    <i class="icon-search"></i>
    <input type="text" class="form-input" placeholder="Search">
  </div>
</div>
```

## CSS Variables

```css
:root {
  --form-input-padding: 0.5rem 1rem;
  --form-input-border-radius: 0.25rem;
  --form-input-border-color: #e0e0e0;
  --form-input-focus-border-color: #007bff;
  --form-input-bg-color: #ffffff;
  --form-input-text-color: #333333;
  --form-input-placeholder-color: #999999;
  --form-input-transition: all 0.2s ease;
}
```

## Best Practices

### Accessibility

- Use semantic HTML elements
- Add ARIA attributes
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt forms for mobile devices
- Optimize touch interaction

### Performance

- Minimize CSS
- Optimize loading time
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/forms.module.css';

interface Props {
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  status?: 'success' | 'warning' | 'error';
  icon?: string;
}

const {
  type = 'text',
  label,
  placeholder,
  value,
  required = false,
  disabled = false,
  size,
  status,
  icon
} = Astro.props;
---

<div class="form-group">
  {label && <label class="form-label">{label}</label>}
  {icon ? (
    <div class="form-input-with-icon">
      <i class={icon}></i>
      <input
        type={type}
        class:list={[
          'form-input',
          size && `form-input--${size}`,
          status && `form-input--${status}`
        ]}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
      />
    </div>
  ) : (
    <input
      type={type}
      class:list={[
        'form-input',
        size && `form-input--${size}`,
        status && `form-input--${status}`
      ]}
      placeholder={placeholder}
      value={value}
      required={required}
      disabled={disabled}
    />
  )}
</div>

<style>
  .form-input {
    width: 100%;
    padding: var(--form-input-padding);
    border: 1px solid var(--form-input-border-color);
    border-radius: var(--form-input-border-radius);
    background-color: var(--form-input-bg-color);
    color: var(--form-input-text-color);
    transition: var(--form-input-transition);
  }
  
  .form-input:focus {
    border-color: var(--form-input-focus-border-color);
    outline: none;
  }
  
  .form-input::placeholder {
    color: var(--form-input-placeholder-color);
  }
  
  .form-input-with-icon {
    position: relative;
  }
  
  .form-input-with-icon i {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .form-input-with-icon input {
    padding-left: 2.5rem;
  }
</style>
```

Usage in an Astro component:

```astro
---
import FormInput from '../components/FormInput.astro';
---

<FormInput
  type="text"
  label="Name"
  placeholder="Your name"
  required
/>

<FormInput
  type="email"
  label="Email"
  placeholder="Your email address"
  status="success"
  icon="icon-mail"
/>
``` 
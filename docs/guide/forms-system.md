# Form System

The Form System of the Casoon UI Library offers a comprehensive collection of components and utility classes for creating attractive and user-friendly forms.

## Importing Modules

**Important:** All form modules have dependencies on `core.css` and the general `forms.css` layer. Make sure you import these in the correct order:

```css
/* Basic dependencies first */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* General form layer */
@import '@casoon/ui-lib/forms.css';

/* Then the specific form modules as needed */
@import '@casoon/ui-lib/components/form.css';
@import '@casoon/ui-lib/components/input.css';
@import '@casoon/ui-lib/components/textarea.css';
@import '@casoon/ui-lib/components/select.css';
@import '@casoon/ui-lib/components/checkbox.css';
@import '@casoon/ui-lib/components/radio.css';
@import '@casoon/ui-lib/components/switch.css';
```

The correct loading order is crucial, as the specific form modules use variables, utility classes, and basic styles defined in `core.css` and `forms.css`. Without these dependencies, the form elements will not be displayed correctly.

## Basic Structure

The basic structure of a form with the Casoon UI Library consists of form groups (`form-group`), labels (`form-label`), and various input elements:

```html
<form class="form">
  <div class="form-group">
    <label for="username" class="form-label">Username</label>
    <input type="text" id="username" class="form-input" placeholder="Enter username">
  </div>
</form>
```

## Form Layout

### Standard Layout

```html
<form class="form">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" class="form-input">
  </div>
  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" class="form-input">
  </div>
  <button type="submit" class="button primary">Submit</button>
</form>
```

### Inline Layout

```html
<form class="form form--inline">
  <div class="form-group">
    <label for="inline-name" class="form-label">Name</label>
    <input type="text" id="inline-name" class="form-input">
  </div>
  <div class="form-group">
    <label for="inline-email" class="form-label">Email</label>
    <input type="email" id="inline-email" class="form-input">
  </div>
  <button type="submit" class="button primary">Submit</button>
</form>
```

### Horizontal Layout

```html
<form class="form form--horizontal">
  <div class="form-group">
    <label for="horizontal-name" class="form-label">Name</label>
    <div class="form-control">
      <input type="text" id="horizontal-name" class="form-input">
    </div>
  </div>
  <div class="form-group">
    <label for="horizontal-email" class="form-label">Email</label>
    <div class="form-control">
      <input type="email" id="horizontal-email" class="form-input">
    </div>
  </div>
  <div class="form-group">
    <div class="form-control form-control--offset">
      <button type="submit" class="button primary">Submit</button>
    </div>
  </div>
</form>
```

## Form Elements

### Text Input

```html
<div class="form-group">
  <label for="text-input" class="form-label">Text field</label>
  <input type="text" id="text-input" class="form-input" placeholder="Enter text">
</div>
```

### Textarea

```html
<div class="form-group">
  <label for="textarea" class="form-label">Multiline text field</label>
  <textarea id="textarea" class="form-textarea" rows="4" placeholder="Enter text"></textarea>
</div>
```

### Select

```html
<div class="form-group">
  <label for="select" class="form-label">Dropdown</label>
  <select id="select" class="form-select">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

### Multiple Select

```html
<div class="form-group">
  <label for="multi-select" class="form-label">Multiple selection</label>
  <select id="multi-select" class="form-select" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-group">
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox" class="form-checkbox__input">
    <label for="checkbox" class="form-checkbox__label">Select option</label>
  </div>
</div>
```

### Checkbox Group

```html
<div class="form-group">
  <label class="form-label">Select options</label>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox1" class="form-checkbox__input">
    <label for="checkbox1" class="form-checkbox__label">Option 1</label>
  </div>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox2" class="form-checkbox__input">
    <label for="checkbox2" class="form-checkbox__label">Option 2</label>
  </div>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox3" class="form-checkbox__input">
    <label for="checkbox3" class="form-checkbox__label">Option 3</label>
  </div>
</div>
```

### Radio Buttons

```html
<div class="form-group">
  <label class="form-label">Options</label>
  <div class="form-radio">
    <input type="radio" id="radio1" name="radio-group" class="form-radio__input">
    <label for="radio1" class="form-radio__label">Option 1</label>
  </div>
  <div class="form-radio">
    <input type="radio" id="radio2" name="radio-group" class="form-radio__input">
    <label for="radio2" class="form-radio__label">Option 2</label>
  </div>
  <div class="form-radio">
    <input type="radio" id="radio3" name="radio-group" class="form-radio__input">
    <label for="radio3" class="form-radio__label">Option 3</label>
  </div>
</div>
```

### Switch

```html
<div class="form-group">
  <div class="form-switch">
    <input type="checkbox" id="switch" class="form-switch__input">
    <label for="switch" class="form-switch__label">Activate</label>
  </div>
</div>
```

### File Upload

```html
<div class="form-group">
  <label for="file" class="form-label">Upload file</label>
  <input type="file" id="file" class="form-file">
</div>
```

### Styled File Upload

```html
<div class="form-group">
  <label for="file-styled" class="form-label">Upload file</label>
  <div class="form-file-wrapper">
    <input type="file" id="file-styled" class="form-file-input">
    <label for="file-styled" class="form-file-label">
      <span class="form-file-button">Browse</span>
      <span class="form-file-text">No file selected</span>
    </label>
  </div>
</div>
```

## Form Sizes

### Small Elements

```html
<div class="form-group">
  <label for="input-sm" class="form-label">Small text field</label>
  <input type="text" id="input-sm" class="form-input form-input--sm" placeholder="Enter text">
</div>
```

### Regular Elements

```html
<div class="form-group">
  <label for="input-md" class="form-label">Regular text field</label>
  <input type="text" id="input-md" class="form-input" placeholder="Enter text">
</div>
```

### Large Elements

```html
<div class="form-group">
  <label for="input-lg" class="form-label">Large text field</label>
  <input type="text" id="input-lg" class="form-input form-input--lg" placeholder="Enter text">
</div>
```

## Validation States

### Success

```html
<div class="form-group">
  <label for="input-success" class="form-label">Success</label>
  <input type="text" id="input-success" class="form-input form-input--success" value="Valid input">
  <div class="form-feedback form-feedback--success">Input is valid</div>
</div>
```

### Warning

```html
<div class="form-group">
  <label for="input-warning" class="form-label">Warning</label>
  <input type="text" id="input-warning" class="form-input form-input--warning" value="Potential issue">
  <div class="form-feedback form-feedback--warning">Please check your input</div>
</div>
```

### Error

```html
<div class="form-group">
  <label for="input-error" class="form-label">Error</label>
  <input type="text" id="input-error" class="form-input form-input--error" value="Invalid input">
  <div class="form-feedback form-feedback--error">Please correct your input</div>
</div>
```

## Input with Icons

### Left Icon

```html
<div class="form-group">
  <label for="input-icon-left" class="form-label">Left icon</label>
  <div class="form-input-with-icon">
    <span class="form-input-icon form-input-icon--left">
      <i class="icon-user"></i>
    </span>
    <input type="text" id="input-icon-left" class="form-input form-input--with-icon-left" placeholder="Username">
  </div>
</div>
```

### Right Icon

```html
<div class="form-group">
  <label for="input-icon-right" class="form-label">Right icon</label>
  <div class="form-input-with-icon">
    <input type="text" id="input-icon-right" class="form-input form-input--with-icon-right" placeholder="Search">
    <span class="form-input-icon form-input-icon--right">
      <i class="icon-search"></i>
    </span>
  </div>
</div>
```

## Input Groups

### Prefix

```html
<div class="form-group">
  <label for="input-prefix" class="form-label">With prefix</label>
  <div class="form-input-group">
    <span class="form-input-group__addon">€</span>
    <input type="text" id="input-prefix" class="form-input" placeholder="Amount">
  </div>
</div>
```

### Suffix

```html
<div class="form-group">
  <label for="input-suffix" class="form-label">With suffix</label>
  <div class="form-input-group">
    <input type="text" id="input-suffix" class="form-input" placeholder="Weight">
    <span class="form-input-group__addon">kg</span>
  </div>
</div>
```

### With Button

```html
<div class="form-group">
  <label for="input-button" class="form-label">With button</label>
  <div class="form-input-group">
    <input type="text" id="input-button" class="form-input" placeholder="Search">
    <button type="button" class="button primary">Search</button>
  </div>
</div>
```

## Accessibility

The Form System of the Casoon UI Library was developed with accessibility in focus. Here are some best practices:

### ARIA Attributes

```html
<div class="form-group">
  <label for="aria-input" class="form-label">Name</label>
  <input 
    type="text" 
    id="aria-input" 
    class="form-input" 
    aria-required="true" 
    aria-describedby="name-description"
  >
  <div id="name-description" class="form-feedback">Please enter your full name.</div>
</div>
```

### Mark Required Fields

```html
<div class="form-group">
  <label for="required-input" class="form-label">
    Email <span class="form-required">*</span>
  </label>
  <input type="email" id="required-input" class="form-input" required>
</div>
```

## Responsive Forms

For responsive forms, you can combine grid and form components:

```html
<form class="form">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="form-group">
      <label for="firstname" class="form-label">First Name</label>
      <input type="text" id="firstname" class="form-input">
    </div>
    <div class="form-group">
      <label for="lastname" class="form-label">Last Name</label>
      <input type="text" id="lastname" class="form-input">
    </div>
  </div>
  
  <div class="form-group">
    <label for="email-resp" class="form-label">Email</label>
    <input type="email" id="email-resp" class="form-input">
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="form-group">
      <label for="city" class="form-label">City</label>
      <input type="text" id="city" class="form-input">
    </div>
    <div class="form-group">
      <label for="zip" class="form-label">ZIP Code</label>
      <input type="text" id="zip" class="form-input">
    </div>
    <div class="form-group">
      <label for="country" class="form-label">Country</label>
      <select id="country" class="form-select">
        <option value="de">Germany</option>
        <option value="at">Austria</option>
        <option value="ch">Switzerland</option>
      </select>
    </div>
  </div>
  
  <button type="submit" class="button primary">Submit</button>
</form>
```

## CSS Variables

The Form System uses the following CSS variables that you can customize:

```css
:root {
  /* General form variables */
  --form-margin-bottom: 1rem;
  --form-group-margin-bottom: 1rem;
  
  /* Label */
  --form-label-margin-bottom: 0.5rem;
  --form-label-font-weight: 500;
  --form-label-color: var(--color-text);
  
  /* Inputs */
  --form-input-height: 2.5rem;
  --form-input-padding: 0.5rem 1rem;
  --form-input-font-size: 1rem;
  --form-input-line-height: 1.5;
  --form-input-color: var(--color-text);
  --form-input-bg: var(--color-white);
  --form-input-border-width: 1px;
  --form-input-border-color: var(--color-gray-300);
  --form-input-border-radius: var(--border-radius);
  --form-input-focus-border-color: var(--color-primary);
  --form-input-focus-ring: 0 0 0 3px rgba(var(--color-primary-rgb), 0.25);
  --form-input-placeholder-color: var(--color-gray-500);
  --form-input-disabled-bg: var(--color-gray-100);
  --form-input-disabled-color: var(--color-gray-600);
  
  /* Select */
  --form-select-padding-right: 2.5rem;
  --form-select-bg-position: right 0.75rem center;
  --form-select-bg-size: 1rem;
  
  /* Checkbox and Radio */
  --form-check-input-width: 1rem;
  --form-check-input-height: 1rem;
  --form-check-input-margin-right: 0.5rem;
  --form-check-input-border-radius: 0.25rem;
  --form-check-radio-border-radius: 50%;
  
  /* Switch */
  --form-switch-width: 2.5rem;
  --form-switch-height: 1.25rem;
  --form-switch-thumb-size: 1rem;
  --form-switch-thumb-margin: 0.125rem;
  
  /* Validation */
  --form-valid-color: var(--color-success);
  --form-valid-border-color: var(--color-success);
  --form-warning-color: var(--color-warning);
  --form-warning-border-color: var(--color-warning);
  --form-invalid-color: var(--color-error);
  --form-invalid-border-color: var(--color-error);
}
```

## Complex Example: Registration Form

```html
<form class="form">
  <h2>Registration</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="form-group">
      <label for="reg-firstname" class="form-label">
        First Name <span class="form-required">*</span>
      </label>
      <input 
        type="text" 
        id="reg-firstname" 
        class="form-input" 
        required 
        aria-required="true"
      >
    </div>
    
    <div class="form-group">
      <label for="reg-lastname" class="form-label">
        Last Name <span class="form-required">*</span>
      </label>
      <input 
        type="text" 
        id="reg-lastname" 
        class="form-input" 
        required 
        aria-required="true"
      >
    </div>
  </div>
  
  <div class="form-group">
    <label for="reg-email" class="form-label">
      Email <span class="form-required">*</span>
    </label>
    <div class="form-input-with-icon">
      <span class="form-input-icon form-input-icon--left">
        <i class="icon-mail"></i>
      </span>
      <input 
        type="email" 
        id="reg-email" 
        class="form-input form-input--with-icon-left" 
        required 
        aria-required="true"
      >
    </div>
  </div>
  
  <div class="form-group">
    <label for="reg-password" class="form-label">
      Password <span class="form-required">*</span>
    </label>
    <div class="form-input-with-icon">
      <span class="form-input-icon form-input-icon--left">
        <i class="icon-lock"></i>
      </span>
      <input 
        type="password" 
        id="reg-password" 
        class="form-input form-input--with-icon-left" 
        required 
        aria-required="true"
        minlength="8"
      >
    </div>
    <div class="form-feedback">The password must be at least 8 characters long.</div>
  </div>
  
  <div class="form-group">
    <div class="form-checkbox">
      <input type="checkbox" id="reg-terms" class="form-checkbox__input" required aria-required="true">
      <label for="reg-terms" class="form-checkbox__label">
        I agree to the <a href="#">Terms and Conditions</a> and the <a href="#">Privacy Policy</a>
      </label>
    </div>
  </div>
  
  <div class="form-group">
    <div class="form-checkbox">
      <input type="checkbox" id="reg-newsletter" class="form-checkbox__input">
      <label for="reg-newsletter" class="form-checkbox__label">
        I would like to receive regular updates via email
      </label>
    </div>
  </div>
  
  <div class="form-group">
    <button type="submit" class="button primary lg block">Register</button>
  </div>
</form>
```

## Best Practices

- **Use form validation**: Use HTML5 validation attributes and combine them with JavaScript for comprehensive validation.
- **Implement error handling**: Display error messages clearly and precisely, preferably near the affected field.
- **Pay attention to accessibility**: Use labels for all form elements and ensure that all elements can be operated by keyboard.
- **Use consistent field sizes**: Use uniform sizes for similar form elements in your application.
- **Use mobile-optimized input types**: Use specialized input types such as `email`, `tel`, and `number` for a better mobile experience.
- **Provide visual cues**: Clearly mark required fields and provide help texts for complex inputs.
- **Ensure sensible tab order**: Ensure that tab navigation through the form is logical and intuitive.
- **Group related fields**: Use fieldsets and legends for thematically related elements. 
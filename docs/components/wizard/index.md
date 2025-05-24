---
title: Wizard Component
category: Components
---

# Wizard Component

The Wizard component provides step-by-step navigation components for multi-stage processes. Wizards guide users through complex workflows like forms or setups.

## Basic Usage

```html
<div class="wizard">
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Step 1</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Step 2</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Step 3</span>
    </div>
  </div>
  <div class="content">
    <!-- Current step content -->
    <h2>Step 2: Configure Your Settings</h2>
    <p>Form fields or configuration options would go here.</p>
  </div>
  <div class="actions">
    <button class="button">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>
```

## Layout Variants

### Horizontal Layout (Default)

```html
<div class="wizard horizontal">
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Step 1</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Step 2</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Step 3</span>
    </div>
  </div>
  <div class="content">
    <!-- Content for current step -->
  </div>
  <div class="actions">
    <button class="button">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>
```

### Vertical Layout

```html
<div class="wizard vertical">
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Step 1</span>
      <span class="description">Brief description of this step</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Step 2</span>
      <span class="description">Configure application settings</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Step 3</span>
      <span class="description">Review and confirm</span>
    </div>
  </div>
  <div class="content">
    <!-- Content for current step -->
  </div>
  <div class="actions">
    <button class="button">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>
```

## Style Variants

### Numbered Wizard (Default)

```html
<div class="wizard numbered">
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Step 1</span>
    </div>
    <!-- More steps -->
  </div>
  <!-- Content and actions -->
</div>
```

### With Icons

```html
<div class="wizard with-icons">
  <div class="steps">
    <div class="step completed">
      <span class="indicator">📝</span>
      <span class="title">Information</span>
    </div>
    <div class="step active">
      <span class="indicator">⚙️</span>
      <span class="title">Settings</span>
    </div>
    <div class="step">
      <span class="indicator">✓</span>
      <span class="title">Confirmation</span>
    </div>
  </div>
  <!-- Content and actions -->
</div>
```

### With Progress Bar

```html
<div class="wizard with-progress">
  <div class="progress-bar">
    <div class="fill" style="width: 66%;"></div>
  </div>
  <div class="steps">
    <!-- Steps -->
  </div>
  <!-- Content and actions -->
</div>
```

## Step States

### Completed Step

```html
<div class="step completed">
  <span class="indicator">1</span>
  <span class="title">Completed Step</span>
</div>
```

### Active Step

```html
<div class="step active">
  <span class="indicator">2</span>
  <span class="title">Active Step</span>
</div>
```

### Error Step

```html
<div class="step error">
  <span class="indicator">2</span>
  <span class="title">Step with Error</span>
</div>
```

### Disabled Step

```html
<div class="step disabled">
  <span class="indicator">3</span>
  <span class="title">Disabled Step</span>
</div>
```

## Action Buttons Layout

### Standard Actions

```html
<div class="actions">
  <button class="button">Back</button>
  <button class="button primary">Next</button>
</div>
```

### First Step (No Back Button)

```html
<div class="actions end">
  <button class="button primary">Next</button>
</div>
```

### Last Step (Finish Button)

```html
<div class="actions">
  <button class="button">Back</button>
  <button class="button primary">Finish</button>
</div>
```

## Complete Example

```html
<div class="wizard">
  <!-- Progress indicator (optional) -->
  <div class="progress-bar">
    <div class="fill" style="width: 66%;"></div>
  </div>
  
  <!-- Steps -->
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Personal Information</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Account Setup</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Confirmation</span>
    </div>
  </div>
  
  <!-- Current step content -->
  <div class="content">
    <h2>Account Setup</h2>
    <p>Please set up your account credentials.</p>
    
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username">
    </div>
    
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
    </div>
    
    <div class="form-group">
      <label for="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password">
    </div>
  </div>
  
  <!-- Navigation buttons -->
  <div class="actions">
    <button class="button">Back</button>
    <button class="button primary">Next</button>
  </div>
</div>
```

## Customization

The Wizard component can be customized using CSS variables:

```css
:root {
  --color-primary: #3b82f6;        /* Primary color for active step */
  --color-success: #10b981;        /* Color for completed steps */
  --color-error: #ef4444;          /* Color for error state */
  --color-gray-300: #d1d5db;       /* Color for step connector line */
  --color-gray-600: #4b5563;       /* Color for inactive step text */
  --color-gray-700: #374151;       /* Default text color */
  --color-white: #ffffff;          /* Background color */
  --font-size-xs: 0.75rem;         /* Extra small font size */
  --font-size-sm: 0.875rem;        /* Small font size */
  --font-weight-normal: 400;       /* Regular font weight */
  --font-weight-medium: 500;       /* Medium font weight */
  --radius-md: 0.375rem;           /* Border radius */
  --space-1: 0.25rem;              /* Extra small spacing */
  --space-2: 0.5rem;               /* Small spacing */
  --space-4: 1rem;                 /* Medium spacing */
  --space-6: 1.5rem;               /* Large spacing */
  --space-8: 2rem;                 /* Extra large spacing */
}
```

## Accessibility

For better accessibility, consider these points:

- Use proper heading levels for step titles
- Ensure sufficient color contrast for all states
- Make all interactive elements keyboard accessible
- Add appropriate ARIA attributes (e.g., `aria-current="step"`)
- Consider adding `aria-label` or `aria-labelledby` for each step
- Ensure error messages are associated with the appropriate step
- Provide clear focus indicators for keyboard navigation

## Best Practices

- Keep the number of steps manageable (3-5 steps is ideal)
- Use clear, concise labels for each step
- Show progress to help users understand where they are in the process
- Provide clear error messages when validation fails
- Allow users to review their inputs before final submission
- Consider making steps clickable to allow navigation to previous steps
- Save progress if the wizard is part of a lengthy process
- Ensure the wizard is responsive on different screen sizes 
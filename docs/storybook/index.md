---
title: UI Components Examples
category: Components
---

# UI Components Examples

This page shows visual examples of the UI components from the Casoon UI Library. The examples showcase how the CSS classes are rendered in different contexts and configurations.

## Button Examples

Buttons are one of the most common interface elements. The Casoon UI Library offers various button styles to match your design needs.

### Basic Buttons

```html
<button class="button">Default Button</button>
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
<button class="button ghost">Ghost Button</button>
```

<div class="example-wrapper">
  <button class="button">Default Button</button>
  <button class="button primary">Primary Button</button>
  <button class="button secondary">Secondary Button</button>
  <button class="button outline">Outline Button</button>
  <button class="button ghost">Ghost Button</button>
</div>

### Button Sizes

```html
<button class="button small">Small Button</button>
<button class="button">Default Button</button>
<button class="button large">Large Button</button>
```

<div class="example-wrapper">
  <button class="button small">Small Button</button>
  <button class="button">Default Button</button>
  <button class="button large">Large Button</button>
</div>

## Form Controls

### Text Inputs

```html
<input type="text" class="input" placeholder="Default input">
<input type="text" class="input success" value="Success input">
<input type="text" class="input error" value="Error input">
```

<div class="example-wrapper">
  <input type="text" class="input" placeholder="Default input">
  <input type="text" class="input success" value="Success input">
  <input type="text" class="input error" value="Error input">
</div>

### Checkboxes and Radios

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Checkbox option</span>
</label>

<label class="radio">
  <input type="radio" name="example-radio">
  <span>Radio option 1</span>
</label>
<label class="radio">
  <input type="radio" name="example-radio">
  <span>Radio option 2</span>
</label>
```

<div class="example-wrapper">
  <label class="checkbox">
    <input type="checkbox">
    <span>Checkbox option</span>
  </label>
  
  <div style="margin-top: 10px;">
    <label class="radio">
      <input type="radio" name="example-radio">
      <span>Radio option 1</span>
    </label>
    <label class="radio">
      <input type="radio" name="example-radio">
      <span>Radio option 2</span>
    </label>
  </div>
</div>

## Alert Components

Alerts provide contextual feedback messages for typical user actions.

```html
<div class="alert">Default alert</div>
<div class="alert info">Info alert</div>
<div class="alert success">Success alert</div>
<div class="alert warning">Warning alert</div>
<div class="alert error">Error alert</div>
```

<div class="example-wrapper">
  <div class="alert" style="margin-bottom: 10px;">Default alert</div>
  <div class="alert info" style="margin-bottom: 10px;">Info alert</div>
  <div class="alert success" style="margin-bottom: 10px;">Success alert</div>
  <div class="alert warning" style="margin-bottom: 10px;">Warning alert</div>
  <div class="alert error" style="margin-bottom: 10px;">Error alert</div>
</div>

## Card Components

Cards are flexible containers for organizing related content and actions.

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p>This is some card content with text.</p>
  </div>
  <div class="card-footer">
    <button class="button primary">Action</button>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card" style="max-width: 300px;">
    <div class="card-header">
      <h3 class="card-title">Card Title</h3>
    </div>
    <div class="card-body">
      <p>This is some card content with text.</p>
    </div>
    <div class="card-footer">
      <button class="button primary">Action</button>
    </div>
  </div>
</div>

## Badge Components

Badges are used to highlight information such as counts or status.

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge error">Error</span>
```

<div class="example-wrapper">
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge error">Error</span>
</div>

## Notification Components

Notifications provide feedback about an action or state.

```html
<div class="notification">
  <div class="notification-header">Notification Title</div>
  <div class="notification-body">This is the notification content.</div>
  <div class="notification-footer">
    <button class="button small">Action</button>
    <button class="button small text">Dismiss</button>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="notification" style="max-width: 300px;">
    <div class="notification-header">Notification Title</div>
    <div class="notification-body">This is the notification content.</div>
    <div class="notification-footer">
      <button class="button small">Action</button>
      <button class="button small text">Dismiss</button>
    </div>
  </div>
</div>

## Progress Indicators

Progress indicators show the completion status of an operation.

```html
<div class="progress">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

<div class="example-wrapper">
  <div class="progress" style="margin-bottom: 10px;">
    <div class="progress-bar" style="width: 25%"></div>
  </div>
  <div class="progress" style="margin-bottom: 10px;">
    <div class="progress-bar" style="width: 50%"></div>
  </div>
  <div class="progress" style="margin-bottom: 10px;">
    <div class="progress-bar" style="width: 75%"></div>
  </div>
</div>

## Table Styles

Tables organize data in a structured format.

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>bob@example.com</td>
      <td>Developer</td>
    </tr>
  </tbody>
</table>
```

<div class="example-wrapper">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td>Developer</td>
      </tr>
    </tbody>
  </table>
</div>

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
</style>

## Using Components Together

Components can be combined to create more complex interfaces:

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">User Registration</h3>
  </div>
  <div class="card-body">
    <div style="margin-bottom: 15px;">
      <label for="name">Name</label>
      <input type="text" id="name" class="input" placeholder="Enter your name">
    </div>
    <div style="margin-bottom: 15px;">
      <label for="email">Email</label>
      <input type="email" id="email" class="input" placeholder="Enter your email">
    </div>
    <div style="margin-bottom: 15px;">
      <label class="checkbox">
        <input type="checkbox">
        <span>I agree to the terms and conditions</span>
      </label>
    </div>
  </div>
  <div class="card-footer">
    <button class="button primary">Register</button>
    <button class="button outline">Cancel</button>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card" style="max-width: 400px;">
    <div class="card-header">
      <h3 class="card-title">User Registration</h3>
    </div>
    <div class="card-body">
      <div style="margin-bottom: 15px;">
        <label for="name">Name</label>
        <input type="text" id="name" class="input" placeholder="Enter your name">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" placeholder="Enter your email">
      </div>
      <div style="margin-bottom: 15px;">
        <label class="checkbox">
          <input type="checkbox">
          <span>I agree to the terms and conditions</span>
        </label>
      </div>
    </div>
    <div class="card-footer">
      <button class="button primary">Register</button>
      <button class="button outline">Cancel</button>
    </div>
  </div>
</div>

## Theme Examples

The Casoon UI Library supports various themes through CSS classes. Here's how components look with different themes:

### Default Theme (Day)

<div class="example-wrapper theme-day">
  <button class="button primary">Primary Button</button>
  <div class="alert info">Info Alert</div>
  <div class="badge success">Success</div>
</div>

### Night Theme

<div class="example-wrapper theme-night" style="background-color: #222; color: #fff;">
  <button class="button primary">Primary Button</button>
  <div class="alert info">Info Alert</div>
  <div class="badge success">Success</div>
</div>

To activate a theme, add the corresponding class to the `<html>` or `<body>` element:

```html
<body class="theme-night">
  <!-- Your content will use the night theme -->
</body>
``` 
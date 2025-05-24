---
title: Form Examples
category: Examples
outline: false
---

# Form Examples

This page showcases the form components available in the Casoon UI Library. These components are used to create interactive forms for user input.

## Text Inputs

Text inputs allow users to enter text data.

### Basic Text Input

```html
<input type="text" class="input" placeholder="Enter text">
```

<div class="example-wrapper">
  <input type="text" class="input" placeholder="Enter text">
</div>

### Input States

```html
<input type="text" class="input" placeholder="Default input">
<input type="text" class="input success" value="Success input">
<input type="text" class="input error" value="Error input">
<input type="text" class="input" disabled value="Disabled input">
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <input type="text" class="input" placeholder="Default input">
  </div>
  <div style="margin-bottom: 10px;">
    <input type="text" class="input success" value="Success input">
  </div>
  <div style="margin-bottom: 10px;">
    <input type="text" class="input error" value="Error input">
  </div>
  <div>
    <input type="text" class="input" disabled value="Disabled input">
  </div>
</div>

### Input Sizes

```html
<input type="text" class="input small" placeholder="Small input">
<input type="text" class="input" placeholder="Default input">
<input type="text" class="input large" placeholder="Large input">
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <input type="text" class="input small" placeholder="Small input">
  </div>
  <div style="margin-bottom: 10px;">
    <input type="text" class="input" placeholder="Default input">
  </div>
  <div>
    <input type="text" class="input large" placeholder="Large input">
  </div>
</div>

## Textarea

Textareas allow users to enter multi-line text.

```html
<textarea class="textarea" rows="4" placeholder="Enter multiple lines of text"></textarea>
```

<div class="example-wrapper">
  <textarea class="textarea" rows="4" placeholder="Enter multiple lines of text"></textarea>
</div>

## Select

Select components allow users to choose from a list of options.

### Basic Select

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

<div class="example-wrapper">
  <select class="select">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

### Select States

```html
<select class="select">
  <option>Default select</option>
</select>
<select class="select success">
  <option>Success select</option>
</select>
<select class="select error">
  <option>Error select</option>
</select>
<select class="select" disabled>
  <option>Disabled select</option>
</select>
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <select class="select">
      <option>Default select</option>
    </select>
  </div>
  <div style="margin-bottom: 10px;">
    <select class="select success">
      <option>Success select</option>
    </select>
  </div>
  <div style="margin-bottom: 10px;">
    <select class="select error">
      <option>Error select</option>
    </select>
  </div>
  <div>
    <select class="select" disabled>
      <option>Disabled select</option>
    </select>
  </div>
</div>

## Checkbox

Checkboxes allow users to select multiple options from a set.

### Basic Checkbox

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Checkbox option</span>
</label>
```

<div class="example-wrapper">
  <label class="checkbox">
    <input type="checkbox">
    <span>Checkbox option</span>
  </label>
</div>

### Checkbox States

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Unchecked</span>
</label>
<label class="checkbox">
  <input type="checkbox" checked>
  <span>Checked</span>
</label>
<label class="checkbox">
  <input type="checkbox" disabled>
  <span>Disabled unchecked</span>
</label>
<label class="checkbox">
  <input type="checkbox" checked disabled>
  <span>Disabled checked</span>
</label>
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <label class="checkbox">
      <input type="checkbox">
      <span>Unchecked</span>
    </label>
  </div>
  <div style="margin-bottom: 10px;">
    <label class="checkbox">
      <input type="checkbox" checked>
      <span>Checked</span>
    </label>
  </div>
  <div style="margin-bottom: 10px;">
    <label class="checkbox">
      <input type="checkbox" disabled>
      <span>Disabled unchecked</span>
    </label>
  </div>
  <div>
    <label class="checkbox">
      <input type="checkbox" checked disabled>
      <span>Disabled checked</span>
    </label>
  </div>
</div>

## Radio Buttons

Radio buttons allow users to select one option from a set.

### Basic Radio Buttons

```html
<label class="radio">
  <input type="radio" name="radio-example">
  <span>Option 1</span>
</label>
<label class="radio">
  <input type="radio" name="radio-example">
  <span>Option 2</span>
</label>
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <label class="radio">
      <input type="radio" name="radio-example">
      <span>Option 1</span>
    </label>
  </div>
  <div>
    <label class="radio">
      <input type="radio" name="radio-example">
      <span>Option 2</span>
    </label>
  </div>
</div>

### Radio Button States

```html
<label class="radio">
  <input type="radio" name="radio-states">
  <span>Unchecked</span>
</label>
<label class="radio">
  <input type="radio" name="radio-states" checked>
  <span>Checked</span>
</label>
<label class="radio">
  <input type="radio" name="radio-disabled" disabled>
  <span>Disabled unchecked</span>
</label>
<label class="radio">
  <input type="radio" name="radio-disabled" checked disabled>
  <span>Disabled checked</span>
</label>
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <label class="radio">
      <input type="radio" name="radio-states">
      <span>Unchecked</span>
    </label>
  </div>
  <div style="margin-bottom: 10px;">
    <label class="radio">
      <input type="radio" name="radio-states" checked>
      <span>Checked</span>
    </label>
  </div>
  <div style="margin-bottom: 10px;">
    <label class="radio">
      <input type="radio" name="radio-disabled" disabled>
      <span>Disabled unchecked</span>
    </label>
  </div>
  <div>
    <label class="radio">
      <input type="radio" name="radio-disabled" checked disabled>
      <span>Disabled checked</span>
    </label>
  </div>
</div>

## Switch

Switches are used for toggling between two states.

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch-slider"></span>
  <span class="switch-label">Toggle switch</span>
</label>
```

<div class="example-wrapper">
  <label class="switch">
    <input type="checkbox">
    <span class="switch-slider"></span>
    <span class="switch-label">Toggle switch</span>
  </label>
</div>

## File Input

File inputs allow users to upload files.

```html
<label class="file">
  <input type="file">
  <span class="file-label">Choose file</span>
</label>
```

<div class="example-wrapper">
  <label class="file">
    <input type="file">
    <span class="file-label">Choose file</span>
  </label>
</div>

## Input Group

Input groups combine related form controls.

```html
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="input" placeholder="Username">
</div>

<div class="input-group">
  <input type="text" class="input" placeholder="Search">
  <button class="button primary">Search</button>
</div>
```

<div class="example-wrapper">
  <div style="margin-bottom: 10px;">
    <div class="input-group">
      <span class="input-group-text">@</span>
      <input type="text" class="input" placeholder="Username">
    </div>
  </div>
  <div>
    <div class="input-group">
      <input type="text" class="input" placeholder="Search">
      <button class="button primary">Search</button>
    </div>
  </div>
</div>

## Form Layout

Example of a complete form layout.

```html
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="input" placeholder="Enter your email">
    <small class="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" class="input" placeholder="Enter your password">
  </div>
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox">
      <span>Remember me</span>
    </label>
  </div>
  <div class="form-group">
    <button type="submit" class="button primary">Submit</button>
  </div>
</form>
```

<div class="example-wrapper">
  <form class="form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="input" placeholder="Enter your name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" class="input" placeholder="Enter your email">
      <small class="form-text">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" class="input" placeholder="Enter your password">
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox">
        <span>Remember me</span>
      </label>
    </div>
    <div class="form-group">
      <button type="submit" class="button primary">Submit</button>
    </div>
  </form>
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

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
  color: #6c757d;
}
</style> 
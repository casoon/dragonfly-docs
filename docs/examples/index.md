---
title: UI Component Examples
category: Examples
---

# UI Component Examples

This page shows visual examples of the UI components from the Casoon UI Library. The examples showcase how the CSS classes are rendered in different contexts and configurations.

> **Note:** The button styles may not be displayed correctly in this documentation. The Casoon UI Library needs to be properly imported in your project to see the actual styling.

## Overview

The Casoon UI Library provides a comprehensive set of CSS components that can be used to build modern, responsive user interfaces. This section contains examples of these components in action, showing how they can be used and customized.

### Example Categories

- **[Basic Components](/examples/basic/)** - Fundamental UI elements like buttons, badges, alerts, and cards
- **[Form Components](/examples/form/)** - Input fields, checkboxes, radio buttons, and other form controls
- **[Layout Components](/examples/layout/)** - Components for structuring page layouts
- **[Advanced Components](/examples/advanced/)** - Complex components and component combinations

## Featured Examples

### Button Variations

Buttons are one of the most common interface elements. The Casoon UI Library offers various button styles to match your design needs.

```html
<button class="button">Default Button</button>
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
```

<div class="example-wrapper">
  <button class="button">Default Button</button>
  <button class="button primary">Primary Button</button>
  <button class="button secondary">Secondary Button</button>
  <button class="button outline">Outline Button</button>
</div>

### Alert Components

Alerts provide contextual feedback messages for typical user actions.

```html
<div class="alert info">Info alert</div>
<div class="alert success">Success alert</div>
<div class="alert warning">Warning alert</div>
<div class="alert error">Error alert</div>
```

<div class="example-wrapper">
  <div class="alert info" style="margin-bottom: 10px;">Info alert</div>
  <div class="alert success" style="margin-bottom: 10px;">Success alert</div>
  <div class="alert warning" style="margin-bottom: 10px;">Warning alert</div>
  <div class="alert error" style="margin-bottom: 10px;">Error alert</div>
</div>

### Form Controls

Form controls allow users to input data and make selections.

```html
<input type="text" class="input" placeholder="Text input">
<select class="select">
  <option>Select option 1</option>
  <option>Select option 2</option>
</select>
<label class="checkbox">
  <input type="checkbox">
  <span>Checkbox option</span>
</label>
```

<div class="example-wrapper">
  <input type="text" class="input" placeholder="Text input" style="margin-bottom: 10px; display: block;">
  <select class="select" style="margin-bottom: 10px; display: block;">
    <option>Select option 1</option>
    <option>Select option 2</option>
  </select>
  <label class="checkbox">
    <input type="checkbox">
    <span>Checkbox option</span>
  </label>
</div>

## Using Components Together

Components can be combined to create more complex interfaces. Visit the specific example sections to see more advanced combinations and use cases.

<div class="example-wrapper">
  <div class="card" style="max-width: 300px;">
    <div class="card-header">
      <h3 class="card-title">Card with Components</h3>
    </div>
    <div class="card-body">
      <input type="text" class="input" placeholder="Enter name" style="margin-bottom: 10px; display: block;">
      <div class="alert info" style="margin-bottom: 10px;">Please fill all fields</div>
    </div>
    <div class="card-footer">
      <button class="button primary">Submit</button>
      <button class="button outline">Cancel</button>
    </div>
  </div>
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

## Explore More Examples

For more detailed examples and variations, explore the specific example categories:

- [Basic Components](/examples/basic/) - Buttons, badges, alerts, cards, etc.
- [Form Components](/examples/form/) - Inputs, selects, checkboxes, radio buttons, etc.
- [Layout Components](/examples/layout/) - Grid, containers, headers, footers, etc.
- [Advanced Components](/examples/advanced/) - Complex component combinations and patterns 
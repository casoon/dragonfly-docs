---
title: Basic UI Components
category: Examples
---

# Basic UI Components

This page showcases the basic UI components available in the Casoon UI Library. These components form the foundation of the design system and are used to build more complex interfaces.

## Buttons

Buttons are interactive elements that allow users to trigger actions.

### Button Variants

```html
<button class="button">Default Button</button>
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
<button class="button ghost">Ghost Button</button>
<button class="button link">Link Button</button>
```

<div class="example-wrapper">
  <button class="button">Default Button</button>
  <button class="button primary">Primary Button</button>
  <button class="button secondary">Secondary Button</button>
  <button class="button outline">Outline Button</button>
  <button class="button ghost">Ghost Button</button>
  <button class="button link">Link Button</button>
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

### Button States

```html
<button class="button primary">Normal</button>
<button class="button primary hover">Hover</button>
<button class="button primary active">Active</button>
<button class="button primary" disabled>Disabled</button>
```

<div class="example-wrapper">
  <button class="button primary">Normal</button>
  <button class="button primary hover">Hover</button>
  <button class="button primary active">Active</button>
  <button class="button primary" disabled>Disabled</button>
</div>

## Badges

Badges are small elements used to highlight information such as counts or status.

### Badge Variants

```html
<span class="badge">Default</span>
<span class="badge primary">Primary</span>
<span class="badge secondary">Secondary</span>
<span class="badge success">Success</span>
<span class="badge warning">Warning</span>
<span class="badge error">Error</span>
<span class="badge info">Info</span>
```

<div class="example-wrapper">
  <span class="badge">Default</span>
  <span class="badge primary">Primary</span>
  <span class="badge secondary">Secondary</span>
  <span class="badge success">Success</span>
  <span class="badge warning">Warning</span>
  <span class="badge error">Error</span>
  <span class="badge info">Info</span>
</div>

### Badge Sizes

```html
<span class="badge small">Small</span>
<span class="badge">Default</span>
<span class="badge large">Large</span>
```

<div class="example-wrapper">
  <span class="badge small">Small</span>
  <span class="badge">Default</span>
  <span class="badge large">Large</span>
</div>

## Alerts

Alerts provide contextual feedback messages for typical user actions.

### Alert Variants

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

### Dismissible Alerts

```html
<div class="alert info dismissible">
  This is a dismissible alert
  <button class="alert-close">&times;</button>
</div>
```

<div class="example-wrapper">
  <div class="alert info dismissible">
    This is a dismissible alert
    <button class="alert-close">&times;</button>
  </div>
</div>

## Cards

Cards are flexible containers for organizing related content and actions.

### Basic Card

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

### Image Card

```html
<div class="card">
  <img src="https://via.placeholder.com/300x150" alt="Card image" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">Card with Image</h3>
    <p>This card has an image at the top.</p>
    <button class="button primary">Action</button>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card" style="max-width: 300px;">
    <img src="https://via.placeholder.com/300x150" alt="Card image" class="card-img-top">
    <div class="card-body">
      <h3 class="card-title">Card with Image</h3>
      <p>This card has an image at the top.</p>
      <button class="button primary">Action</button>
    </div>
  </div>
</div>

## Chips

Chips are compact elements that represent an input, attribute, or action.

```html
<span class="chip">Basic Chip</span>
<span class="chip primary">Primary Chip</span>
<span class="chip success">Success Chip</span>
<span class="chip dismissible">
  Dismissible Chip
  <button class="chip-close">&times;</button>
</span>
```

<div class="example-wrapper">
  <span class="chip">Basic Chip</span>
  <span class="chip primary">Primary Chip</span>
  <span class="chip success">Success Chip</span>
  <span class="chip dismissible">
    Dismissible Chip
    <button class="chip-close">&times;</button>
  </span>
</div>

## Tooltips

Tooltips display informative text when users hover over an element.

```html
<div class="tooltip">
  Hover me
  <span class="tooltip-text">This is a tooltip</span>
</div>
```

<div class="example-wrapper">
  <div class="tooltip">
    Hover me
    <span class="tooltip-text">This is a tooltip</span>
  </div>
</div>

## Spinners

Spinners indicate loading state.

```html
<div class="spinner"></div>
<div class="spinner primary"></div>
<div class="spinner secondary"></div>
```

<div class="example-wrapper">
  <div class="spinner"></div>
  <div class="spinner primary"></div>
  <div class="spinner secondary"></div>
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

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style> 
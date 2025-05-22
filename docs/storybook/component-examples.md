---
title: Component Examples
category: Storybook
---

# Component Examples with Storybook

This page demonstrates how Storybook examples can be integrated into component documentation. It serves as a reference for how interactive examples can improve documentation.

## Button Component

The Button component is a fundamental UI element for user interactions.

### Variants

Buttons are available in different variants:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--variants&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--danger">Danger</button>
```

### Sizes

Buttons can be displayed in different sizes:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--sizes&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<button class="btn btn--sm">Small</button>
<button class="btn">Standard</button>
<button class="btn btn--lg">Large</button>
```

## Card Component

The Card component is used to present content in a container with consistent design.

### Basic Card

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
  width="100%"
  height="350px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content with text and other elements.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn--primary">Action</button>
  </div>
</div>
```

### Media Card

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--with-media&viewMode=story"
  width="100%"
  height="400px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<div class="card">
  <img src="image.jpg" alt="Card image" class="card-img-top">
  <div class="card-body">
    <h3 class="card-title">Media Card</h3>
    <p>Card content with image and text.</p>
    <button class="btn btn--primary">Learn more</button>
  </div>
</div>
```

## Input Component

The Input component allows users to enter text and other data.

### Text Input

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-input--text&viewMode=story"
  width="100%"
  height="200px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<div class="form-group">
  <label for="username">Username</label>
  <input type="text" id="username" class="input" placeholder="Enter username">
</div>
```

### Validation States

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-input--validation-states&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**Usage:**

```html
<!-- Standard Input -->
<input type="text" class="input" placeholder="Standard">

<!-- Valid Input -->
<input type="text" class="input input--valid" value="Valid input">
<div class="feedback feedback--valid">Input is valid</div>

<!-- Invalid Input -->
<input type="text" class="input input--invalid" value="Invalid input">
<div class="feedback feedback--invalid">Please correct your input</div>
```

## Combining Interactivity and Documentation

When documenting components, it's important to consider both the technical details and the visual representation. Storybook examples are particularly well-suited to:

1. **Visualize states**: Show different states such as hover, focus, active, disabled
2. **Display variants**: Demonstrate different design variants of the component
3. **Show interactions**: Let users interact with the component
4. **Test responsive behavior**: Show how the component behaves at different screen sizes

By combining written documentation, code examples, and interactive Storybook demos, developers gain a comprehensive understanding of the components and their usage.

## Integration into Existing Component Documentation

To integrate Storybook examples into your existing component documentation, you can use the following structure:

1. **Component description**: General information and purpose
2. **Storybook example**: Embedded interactive example
3. **Code example**: Source code for implementation
4. **Props/Parameters**: Description of available options
5. **Variants and states**: Additional examples for different variants
6. **Best practices**: Recommendations for usage

This structure provides a consistent approach for documenting all components and makes it easy for developers to find the information they need. 
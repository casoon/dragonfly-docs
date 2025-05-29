---
title: Component Name
outline: deep
---

<script setup>
import { UI_LIB_VERSION } from '../../.vitepress/data/versions'
</script>

# Component Name

Brief description of what the component is and its primary use cases.

## Installation

The Component Name is part of the Casoon UI Library v{{ UI_LIB_VERSION }}.

```bash
# Installation of the entire library
npm install @casoon/ui-lib@{{ UI_LIB_VERSION }}
```

## Import

```css
/* Import all UI components */
@import '@casoon/ui-lib/ui.css';

/* Or just this component */
@import '@casoon/ui-lib/ui/components/component-name.css';
```

## Basic Usage

```html
<div class="component-name">
  <!-- Basic component structure -->
  Basic example content
</div>
```

<div class="example-wrapper">
  <div class="component-name">
    Basic example content
  </div>
</div>

## Variants

### Variant Type 1

Description of the first variant type.

```html
<div class="component-name variant-1">
  Variant 1 example
</div>
```

<div class="example-wrapper">
  <div class="component-name variant-1">
    Variant 1 example
  </div>
</div>

### Variant Type 2

Description of the second variant type.

```html
<div class="component-name variant-2">
  Variant 2 example
</div>
```

<div class="example-wrapper">
  <div class="component-name variant-2">
    Variant 2 example
  </div>
</div>

## Usage Examples

### Example Use Case 1

Description of a common use case for this component.

```html
<div class="example-context">
  <div class="component-name">
    Example in context
  </div>
</div>
```

<div class="example-wrapper">
  <div class="example-context">
    <div class="component-name">
      Example in context
    </div>
  </div>
</div>

### Example Use Case 2

Another common use case or integration example.

```html
<div class="another-context">
  <div class="component-name with-modifier">
    Another contextual example
  </div>
</div>
```

<div class="example-wrapper">
  <div class="another-context">
    <div class="component-name with-modifier">
      Another contextual example
    </div>
  </div>
</div>

## Customization

The Component Name can be customized using CSS variables:

```css
:root {
  --component-variable-1: value;
  --component-variable-2: value;
  --component-variable-3: value;
}
```

## Accessibility

- Accessibility consideration 1
- Accessibility consideration 2
- Keyboard navigation notes
- Screen reader support information

## Browser Compatibility

The Component Name is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| Feature 1 | Version+ | Version+ | Version+ | Version+ |
| Feature 2 | Version+ | Version+ | Version+ | Version+ | 
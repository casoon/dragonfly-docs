---
title: Component Name
outline: deep
---

# Component Name

Brief description of the component, its purpose, and common use cases.

## Basic Usage

```html
<div class="component-name">Basic example</div>
```

<div class="example-wrapper">
  <div class="component-name">Basic example</div>
</div>

## Variants

### Size Variants

Describe different size options for the component.

```html
<div class="component-name sm">Small</div>
<div class="component-name">Default</div>
<div class="component-name lg">Large</div>
```

<div class="example-wrapper">
  <div class="component-name sm">Small</div>
  <div class="component-name">Default</div>
  <div class="component-name lg">Large</div>
</div>

### Style Variants

Describe different style options for the component.

```html
<div class="component-name primary">Primary</div>
<div class="component-name secondary">Secondary</div>
<div class="component-name outline">Outline</div>
```

<div class="example-wrapper">
  <div class="component-name primary">Primary</div>
  <div class="component-name secondary">Secondary</div>
  <div class="component-name outline">Outline</div>
</div>

### States

Describe different states the component can have.

```html
<div class="component-name">Normal</div>
<div class="component-name hover">Hover</div>
<div class="component-name active">Active</div>
<div class="component-name disabled">Disabled</div>
```

<div class="example-wrapper">
  <div class="component-name">Normal</div>
  <div class="component-name hover">Hover</div>
  <div class="component-name active">Active</div>
  <div class="component-name disabled">Disabled</div>
</div>

## Usage Examples

### Example 1: Common Use Case

Describe a common way the component is used.

```html
<div class="example-context">
  <div class="component-name">Example in context</div>
</div>
```

<div class="example-wrapper">
  <div class="example-context">
    <div class="component-name">Example in context</div>
  </div>
</div>

### Example 2: Advanced Usage

Describe a more complex or advanced usage of the component.

```html
<div class="advanced-example">
  <div class="component-name">Advanced example</div>
</div>
```

<div class="example-wrapper">
  <div class="advanced-example">
    <div class="component-name">Advanced example</div>
  </div>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component module */
@import '@casoon/ui-lib/components/component-name.css';
```

## CSS Variables

The component can be customized using CSS variables:

```css
:root {
  --component-name-variable-1: value;
  --component-name-variable-2: value;
  --component-name-variable-3: value;
  /* ... */
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--component-name-variable-1` | `value` | Description of what this variable controls |
| `--component-name-variable-2` | `value` | Description of what this variable controls |
| `--component-name-variable-3` | `value` | Description of what this variable controls |

## Accessibility

Describe accessibility considerations for this component:

- Keyboard navigation
- Screen reader support
- ARIA attributes
- Color contrast
- Focus states

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Advanced feature | ✅ | ✅ | ⚠️ | ✅ | ❌ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

## Performance Considerations

Provide any performance tips or considerations when using this component:

- Use case limitations
- Rendering optimizations
- Animation performance
- Mobile considerations

## Related Components

- [Related Component 1](/components/related-component-1/)
- [Related Component 2](/components/related-component-2/)
- [Related Component 3](/components/related-component-3/) 
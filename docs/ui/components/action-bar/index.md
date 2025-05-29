---
title: Action Bar Component
outline: deep
---


# Action Bar

The Action Bar component provides a container for primary and secondary actions in a user interface. It is typically used to display a set of related actions or controls, often at the top or bottom of a page or panel.

## Installation

The Action Bar component is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all UI components */
@import '@casoon/ui-lib/ui.css';

/* Or just the Action Bar component */
@import '@casoon/ui-lib/ui/components/action-bar.css';
```

## Basic Usage

```html
<div class="action-bar">
  <button class="button primary">Save</button>
  <button class="button">Cancel</button>
</div>
```

<div class="example-wrapper">
  <div class="action-bar">
    <button class="button primary">Save</button>
    <button class="button">Cancel</button>
  </div>
</div>

## Variants

### Positioning

The Action Bar can be placed in various positions.

```html
<div class="action-bar top">Actions at the top</div>
<div class="action-bar bottom">Actions at the bottom</div>
```

<div class="example-wrapper">
  <div class="action-bar top" style="margin-bottom: 1rem;">
    <button class="button primary">Actions at the top</button>
  </div>
  <div class="action-bar bottom">
    <button class="button primary">Actions at the bottom</button>
  </div>
</div>

### Alignment

Control the alignment of actions within the bar.

```html
<div class="action-bar start">Left/start aligned</div>
<div class="action-bar center">Center aligned</div>
<div class="action-bar end">Right/end aligned</div>
<div class="action-bar space-between">With space between</div>
```

<div class="example-wrapper">
  <div class="action-bar start" style="margin-bottom: 0.5rem;">
    <button class="button">Action 1</button>
    <button class="button">Action 2</button>
  </div>
  <div class="action-bar center" style="margin-bottom: 0.5rem;">
    <button class="button">Action 1</button>
    <button class="button">Action 2</button>
  </div>
  <div class="action-bar end" style="margin-bottom: 0.5rem;">
    <button class="button">Action 1</button>
    <button class="button">Action 2</button>
  </div>
  <div class="action-bar space-between">
    <button class="button">Left Action</button>
    <button class="button primary">Right Action</button>
  </div>
</div>

### Styles

Various visual styles for the Action Bar.

```html
<div class="action-bar">Standard</div>
<div class="action-bar bordered">With border</div>
<div class="action-bar elevated">Elevated</div>
<div class="action-bar transparent">Transparent</div>
```

<div class="example-wrapper">
  <div class="action-bar" style="margin-bottom: 0.5rem;">
    <button class="button">Standard style</button>
  </div>
  <div class="action-bar bordered" style="margin-bottom: 0.5rem;">
    <button class="button">Bordered style</button>
  </div>
  <div class="action-bar elevated" style="margin-bottom: 0.5rem;">
    <button class="button">Elevated style</button>
  </div>
  <div class="action-bar transparent">
    <button class="button">Transparent style</button>
  </div>
</div>

## Usage Examples

### Form Actions

A common use case for Action Bars is at the bottom of forms.

```html
<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input" />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="input" />
  </div>
  <div class="action-bar space-between">
    <button type="button" class="button">Cancel</button>
    <button type="submit" class="button primary">Submit</button>
  </div>
</form>
```

<div class="example-wrapper">
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="input" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" class="input" />
    </div>
    <div class="action-bar space-between">
      <button type="button" class="button">Cancel</button>
      <button type="submit" class="button primary">Submit</button>
    </div>
  </form>
</div>

### Toolbar Style

Action Bars can be used as toolbars with multiple controls.

```html
<div class="action-bar elevated">
  <div class="button-group">
    <button class="button icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 4H4v7" /><path d="M4 4l7 7" />
      </svg>
    </button>
    <button class="button icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 4h-7v7" /><path d="M20 4l-7 7" />
      </svg>
    </button>
  </div>
  <div class="button-group">
    <button class="button icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 20h7v-7" /><path d="M4 20l7-7" />
      </svg>
    </button>
    <button class="button icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 20h-7v-7" /><path d="M20 20l-7-7" />
      </svg>
    </button>
  </div>
  <div style="flex: 1;"></div>
  <button class="button primary">Apply</button>
</div>
```

<div class="example-wrapper">
  <div class="action-bar elevated">
    <div class="button-group">
      <button class="button icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 4H4v7" /><path d="M4 4l7 7" />
        </svg>
      </button>
      <button class="button icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 4h-7v7" /><path d="M20 4l-7 7" />
        </svg>
      </button>
    </div>
    <div class="button-group">
      <button class="button icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 20h7v-7" /><path d="M4 20l7-7" />
        </svg>
      </button>
      <button class="button icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 20h-7v-7" /><path d="M20 20l-7-7" />
        </svg>
      </button>
    </div>
    <div style="flex: 1;"></div>
    <button class="button primary">Apply</button>
  </div>
</div>

## Customization

The Action Bar can be customized using CSS variables:

```css
:root {
  --action-bar-padding: 0.75rem 1rem;
  --action-bar-gap: 0.5rem;
  --action-bar-bg: var(--color-surface-100);
  --action-bar-border-color: var(--color-neutral-200);
  --action-bar-border-radius: var(--radius-m);
  --action-bar-shadow: var(--shadow-s);
}
```

## Accessibility

- The Action Bar should have a semantically meaningful structure
- Ensure sufficient contrast for buttons within the bar
- Make sure all interactive elements are accessible by keyboard

## Browser Compatibility

The Action Bar component is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| CSS Gap property | 84+ | 63+ | 14.1+ | 84+ |
| Flex Layout | 29+ | 28+ | 9+ | 16+ | 
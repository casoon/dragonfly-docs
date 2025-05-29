---
title: Badge Component
outline: deep
---


# Badge

The Badge component is a small visual indicator used to highlight information such as status, notifications, or labels. Badges are typically used to display counts, statuses, or to draw attention to specific elements.

## Installation

The Badge component is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all UI components */
@import '@casoon/ui-lib/ui.css';

/* Or just the Badge component */
@import '@casoon/ui-lib/ui/components/badge.css';
```

## Basic Usage

```html
<span class="badge">Badge</span>
<span class="badge primary">Primary</span>
<span class="badge secondary">Secondary</span>
```

<div class="example-wrapper">
  <span class="badge">Badge</span>
  <span class="badge primary">Primary</span>
  <span class="badge secondary">Secondary</span>
</div>

## Variants

### Colors

Badges are available in various colors to represent different meanings.

```html
<span class="badge primary">Primary</span>
<span class="badge secondary">Secondary</span>
<span class="badge success">Success</span>
<span class="badge danger">Danger</span>
<span class="badge warning">Warning</span>
<span class="badge info">Info</span>
```

<div class="example-wrapper">
  <span class="badge primary">Primary</span>
  <span class="badge secondary">Secondary</span>
  <span class="badge success">Success</span>
  <span class="badge danger">Danger</span>
  <span class="badge warning">Warning</span>
  <span class="badge info">Info</span>
</div>

### Sizes

Badges can be displayed in different sizes.

```html
<span class="badge sm">Small</span>
<span class="badge">Default</span>
<span class="badge lg">Large</span>
```

<div class="example-wrapper">
  <span class="badge sm">Small</span>
  <span class="badge">Default</span>
  <span class="badge lg">Large</span>
</div>

### Shapes

Badges can have different shapes.

```html
<span class="badge">Default</span>
<span class="badge rounded">Rounded</span>
<span class="badge pill">Pill</span>
```

<div class="example-wrapper">
  <span class="badge">Default</span>
  <span class="badge rounded">Rounded</span>
  <span class="badge pill">Pill</span>
</div>

## Usage Examples

### Notification Badge

Use badges to indicate notification counts or status.

```html
<button class="button">
  Notifications
  <span class="badge notification primary">5</span>
</button>
```

<div class="example-wrapper">
  <button class="button">
    Notifications
    <span class="badge notification primary">5</span>
  </button>
</div>

### Status Badge

Indicate status with appropriate colors.

```html
<div class="item-with-status">
  <span>User Status</span>
  <span class="badge success">Online</span>
</div>
<div class="item-with-status">
  <span>User Status</span>
  <span class="badge warning">Away</span>
</div>
<div class="item-with-status">
  <span>User Status</span>
  <span class="badge danger">Offline</span>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
    <span style="margin-right: 0.5rem;">User Status</span>
    <span class="badge success">Online</span>
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
    <span style="margin-right: 0.5rem;">User Status</span>
    <span class="badge warning">Away</span>
  </div>
  <div style="display: flex; align-items: center;">
    <span style="margin-right: 0.5rem;">User Status</span>
    <span class="badge danger">Offline</span>
  </div>
</div>

## Customization

The Badge component can be customized using CSS variables:

```css
:root {
  --badge-padding: 0.25rem 0.5rem;
  --badge-font-size: 0.75rem;
  --badge-font-weight: 600;
  --badge-border-radius: 0.25rem;
  --badge-bg-color: var(--color-neutral-200);
  --badge-text-color: var(--color-neutral-700);
  --badge-primary-bg: var(--color-primary-500);
  --badge-primary-text: var(--color-white);
  --badge-success-bg: var(--color-success-500);
  --badge-success-text: var(--color-white);
  --badge-danger-bg: var(--color-danger-500);
  --badge-danger-text: var(--color-white);
  --badge-warning-bg: var(--color-warning-500);
  --badge-warning-text: var(--color-white);
  --badge-info-bg: var(--color-info-500);
  --badge-info-text: var(--color-white);
}
```

## Accessibility

- Use appropriate color contrast between badge background and text for readability
- Consider using `aria-label` to provide additional context for screen readers
- Ensure badges convey their meaning through more than just color (use text or icons)
- When used for notifications, consider using `aria-live` regions to announce changes

## Browser Compatibility

The Badge component is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| Flexbox layout | 29+ | 28+ | 9+ | 16+ |
| Custom properties | 49+ | 31+ | 9.1+ | 15+ | 
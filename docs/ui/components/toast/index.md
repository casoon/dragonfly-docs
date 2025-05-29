---
title: Toast Component
outline: deep
---

# Toast

The Toast component displays brief, non-blocking notifications to the user. Toasts appear temporarily and automatically disappear after a set duration, providing feedback about operations without interrupting the user experience.

## Installation

The Toast component is part of the Casoon UI Library v0.7.0.

```bash
# Installation of the entire library
npm install @casoon/dragonfly@0.7.0
```

## Import

```css
/* Import all UI components */
@import '@casoon/dragonfly/ui.css';

/* Or just the Toast component */
@import '@casoon/dragonfly/ui/components/toast.css';
```

## Basic Usage

```html
<div class="toast">
  <div class="toast__content">
    <div class="toast__icon">
      <!-- Icon SVG -->
    </div>
    <div class="toast__message">Successfully saved changes</div>
  </div>
  <button class="toast__close">
    <!-- Close SVG -->
  </button>
</div>
```

## Variants

### Success Toast

```html
<div class="toast toast--success">
  <div class="toast__content">
    <div class="toast__icon">
      <!-- Success icon -->
    </div>
    <div class="toast__message">Operation completed successfully</div>
  </div>
  <button class="toast__close">
    <!-- Close icon -->
  </button>
</div>
```

### Error Toast

```html
<div class="toast toast--error">
  <div class="toast__content">
    <div class="toast__icon">
      <!-- Error icon -->
    </div>
    <div class="toast__message">An error occurred</div>
  </div>
  <button class="toast__close">
    <!-- Close icon -->
  </button>
</div>
```

## Customization

The Toast component can be customized using CSS variables:

```css
:root {
  --toast-background: #ffffff;
  --toast-text-color: #333333;
  --toast-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --toast-success-color: #10b981;
  --toast-error-color: #ef4444;
  --toast-warning-color: #f59e0b;
  --toast-info-color: #3b82f6;
}
```

## Accessibility

- Toasts should be used sparingly to avoid overwhelming the user
- For important messages, consider using a more persistent UI element
- Toasts should be dismissible both programmatically and by user action
- Consider using ARIA live regions to announce toast messages to screen readers

## Browser Compatibility

The Toast component is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| Animations | 91+ | 88+ | 14.1+ | 91+ |
---
title: Keyboard Accessibility
category: Accessibility
---

# Keyboard Accessibility

The Casoon UI Library implements comprehensive keyboard accessibility features to ensure that all components can be navigated, operated, and interacted with using only a keyboard. This document outlines the keyboard navigation system, keyboard shortcuts, focus management, and best practices for maintaining keyboard accessibility in your applications.

## Overview

Keyboard accessibility is essential for users who cannot or prefer not to use a mouse, including people with motor disabilities, visual impairments, or those using assistive technologies. The Casoon UI Library follows these core principles for keyboard accessibility:

1. **Full keyboard navigability** - All interactive elements can be reached using only the keyboard
2. **Logical tab order** - Elements are focused in a logical, predictable sequence
3. **Visible focus indicators** - Focus state is clearly visible at all times
4. **Keyboard shortcuts** - Convenient shortcuts for common actions
5. **Focus trapping** - Modals and dialogs properly trap and manage focus

## Keyboard Navigation Basics

### Tab Order

The Casoon UI Library ensures that all interactive elements follow a logical tab order based on document flow. The `tabindex` attribute is used carefully:

```html
<!-- Good practice: Using native button element (automatically focusable) -->
<button class="btn btn-primary">Submit</button>

<!-- Avoid: Using non-interactive elements with tabindex="0" -->
<div tabindex="0" role="button" class="custom-button">Not recommended</div>

<!-- Avoid: Using tabindex > 0 (disrupts natural tab order) -->
<button tabindex="5" class="btn">Disrupts tab order</button>
```

### Focus Management

The library handles focus management automatically for components like modals and dropdowns:

```javascript
// Example of focus management in a modal component
function openModal() {
  const modal = document.querySelector('.modal');
  
  // Store the element that had focus before opening
  modal._previousFocus = document.activeElement;
  
  // Show the modal
  modal.classList.add('visible');
  
  // Focus the first focusable element inside the modal
  const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  firstFocusable.focus();
}

function closeModal() {
  const modal = document.querySelector('.modal');
  
  // Hide the modal
  modal.classList.remove('visible');
  
  // Restore focus to the previously focused element
  if (modal._previousFocus) {
    modal._previousFocus.focus();
  }
}
```

## Focus Indicators

The library provides highly visible focus indicators for all interactive elements:

```css
/* Base focus styles */
:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Custom focus styles for specific components */
.btn:focus-visible {
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  outline: none;
}

/* Focus styles in high contrast mode */
@media (forced-colors: active) {
  :focus-visible {
    outline: 3px solid CanvasText;
  }
}
```

## Keyboard Interaction Patterns

### Button Components

```html
<button class="btn btn-primary">Click Me</button>
```

Keyboard interactions:
- **Tab**: Move focus to the button
- **Enter/Space**: Activate the button

### Checkbox and Radio Components

```html
<div class="checkbox-wrapper">
  <input type="checkbox" id="checkbox1" class="checkbox">
  <label for="checkbox1">Checkbox Option</label>
</div>

<div class="radio-group">
  <div class="radio-wrapper">
    <input type="radio" id="radio1" name="options" class="radio">
    <label for="radio1">Option 1</label>
  </div>
  <div class="radio-wrapper">
    <input type="radio" id="radio2" name="options" class="radio">
    <label for="radio2">Option 2</label>
  </div>
</div>
```

Keyboard interactions:
- **Tab**: Move focus to the checkbox or radio button
- **Space**: Toggle the checkbox state or select the radio option

### Dropdown Menus

```html
<div class="dropdown">
  <button id="dropdown-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-menu">
    Options
  </button>
  <ul id="dropdown-menu" role="menu" aria-labelledby="dropdown-toggle">
    <li role="menuitem"><a href="#">Option 1</a></li>
    <li role="menuitem"><a href="#">Option 2</a></li>
    <li role="menuitem"><a href="#">Option 3</a></li>
  </ul>
</div>
```

Keyboard interactions:
- **Tab**: Move focus to the dropdown button
- **Enter/Space**: Open the dropdown menu
- **Down Arrow**: Move focus to the first menu item
- **Up/Down Arrows**: Navigate between menu items
- **Enter**: Select the focused menu item
- **Escape**: Close the dropdown menu

### Tabs Component

```html
<div class="tabs-component">
  <div role="tablist" aria-label="Content Tabs">
    <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2" tabindex="-1">Tab 2</button>
    <button role="tab" aria-selected="false" aria-controls="panel3" id="tab3" tabindex="-1">Tab 3</button>
  </div>
  
  <div id="panel1" role="tabpanel" aria-labelledby="tab1">Panel 1 content</div>
  <div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Panel 2 content</div>
  <div id="panel3" role="tabpanel" aria-labelledby="tab3" hidden>Panel 3 content</div>
</div>
```

Keyboard interactions:
- **Tab**: Move focus to the selected tab
- **Left/Right Arrows**: Navigate between tabs
- **Home**: Move focus to the first tab
- **End**: Move focus to the last tab
- **Enter/Space**: Activate the focused tab

### Modal Dialogs

```html
<button id="open-modal">Open Modal</button>

<div class="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <div class="modal-content">
    <h2 id="modal-title">Modal Dialog</h2>
    <p>Modal content goes here...</p>
    <div class="modal-footer">
      <button class="btn btn-secondary" id="cancel-modal">Cancel</button>
      <button class="btn btn-primary" id="confirm-modal">Confirm</button>
    </div>
  </div>
</div>
```

Keyboard interactions:
- **Tab**: Cycle through focusable elements within the modal (focus is trapped inside)
- **Shift+Tab**: Cycle backwards through focusable elements
- **Escape**: Close the modal
- **Enter**: Activate the default action (usually the primary button)

## Focus Trapping

The library implements focus trapping for modal dialogs and similar components:

```javascript
// Simplified focus trap implementation
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
  }
  
  trapFocus(event) {
    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable.focus();
      }
    }
  }
  
  activate() {
    this.element.addEventListener('keydown', this.trapFocus.bind(this));
  }
  
  deactivate() {
    this.element.removeEventListener('keydown', this.trapFocus.bind(this));
  }
}
```

## Skip Links

The library provides a skip link implementation for keyboard users to bypass navigation:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Rest of navigation, headers, etc. -->

<main id="main-content">
  <!-- Main content -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: white;
  z-index: 100;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}
```

## Keyboard Shortcuts

The library supports keyboard shortcuts for common actions:

```javascript
// Example of keyboard shortcut implementation
document.addEventListener('keydown', (event) => {
  // Check if modifier keys are pressed
  const ctrlKey = event.ctrlKey || event.metaKey;
  
  // Ctrl+/ to open help
  if (ctrlKey && event.key === '/') {
    event.preventDefault();
    openHelpDialog();
  }
  
  // Escape to close dialogs
  if (event.key === 'Escape') {
    closeOpenDialogs();
  }
});
```

### Common Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+/ | Open help dialog |
| Escape | Close dialog/dropdown |
| Alt+Arrow Down | Open dropdown menu |
| Ctrl+Home | Go to start of page |
| Ctrl+End | Go to end of page |

## Testing Keyboard Accessibility

The library includes utilities for testing keyboard accessibility:

```javascript
// Example of automated keyboard accessibility testing
import { KeyboardTester } from '@casoon/ui-lib/testing/keyboard';

// Test tab navigation for a specific component
KeyboardTester.testTabNavigation('.dropdown', {
  expectedTabStops: 3,
  expectFocusTrap: false
}).then(results => {
  console.log(`Passed: ${results.passed}, Failed: ${results.failed}`);
});

// Test keyboard operation for a specific component
KeyboardTester.testKeyOperation('.tabs-component', [
  { key: 'Tab', expectedFocusSelector: '[role="tab"][aria-selected="true"]' },
  { key: 'ArrowRight', expectedFocusSelector: '[role="tab"]:nth-child(2)' },
  { key: 'Enter', expectedResult: 'aria-selected="true"' }
]).then(results => {
  console.log(`Passed: ${results.passed.length}, Failed: ${results.failed.length}`);
});
```

## Browser Compatibility

Keyboard accessibility features are well-supported across all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Tab navigation | Full | Full | Full | Full |
| Focus indicators | Full | Full | Full | Full |
| Keyboard event handling | Full | Full | Full | Full |
| focus-visible | 86+ | 85+ | 15.4+ | 86+ |

For browsers that don't support `:focus-visible`, the library provides a fallback mechanism to ensure focus indicators are always visible.

## Best Practices

1. **Use native interactive elements** (buttons, links, inputs) whenever possible
2. **Maintain logical tab order** based on visual layout and reading order
3. **Never remove focus outlines** without providing an alternative focus indicator
4. **Test with keyboard only** to ensure all functionality is accessible
5. **Implement keyboard shortcuts** for frequently used actions
6. **Use proper focus management** for components that show/hide content
7. **Provide skip links** for bypassing repetitive navigation
8. **Ensure custom components** have appropriate keyboard interaction patterns

## Common Pitfalls to Avoid

1. Using non-interactive elements like `<div>` for buttons without proper ARIA and keyboard handling
2. Setting `tabindex` values greater than 0, which disrupts natural tab order
3. Using `outline: none` without providing alternative focus styles
4. Forgetting to restore focus after closing dialogs or completing actions
5. Creating custom controls that don't follow standard keyboard interaction patterns

## Resources

- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WCAG 2.1 Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
- [MDN: Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [W3C WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/)

## Summary

The Casoon UI Library's keyboard accessibility features ensure that all components can be fully operated using only a keyboard. By following the guidelines in this document and using the provided components and utilities, you can build applications that are accessible to all users, regardless of whether they use a mouse, keyboard, or assistive technology. 
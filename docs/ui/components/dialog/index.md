---
title: Dialog Component
outline: deep
---

# Dialog

The Dialog component provides a modal window that appears on top of the page content, requiring user interaction before returning to the main page. It's commonly used for alerts, confirmations, and collecting user input without navigating away from the current context.

## Basic Usage

```html
<button class="button" onclick="document.getElementById('basic-dialog').showModal()">Open Dialog</button>

<dialog id="basic-dialog" class="dialog">
  <div class="dialog-header">
    <h3>Dialog Title</h3>
    <button class="dialog-close" onclick="document.getElementById('basic-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This is a basic dialog with a header, body, and footer.</p>
  </div>
  <div class="dialog-footer">
    <button class="button" onclick="document.getElementById('basic-dialog').close()">Cancel</button>
    <button class="button primary" onclick="document.getElementById('basic-dialog').close()">Confirm</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('basic-dialog').showModal()">Open Dialog</button>

  <dialog id="basic-dialog" class="dialog">
    <div class="dialog-header">
      <h3>Dialog Title</h3>
      <button class="dialog-close" onclick="document.getElementById('basic-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This is a basic dialog with a header, body, and footer.</p>
    </div>
    <div class="dialog-footer">
      <button class="button" onclick="document.getElementById('basic-dialog').close()">Cancel</button>
      <button class="button primary" onclick="document.getElementById('basic-dialog').close()">Confirm</button>
    </div>
  </dialog>
</div>

## Variants

### Size Variants

Dialogs come in different sizes to accommodate various content requirements.

```html
<button class="button" onclick="document.getElementById('small-dialog').showModal()">Small Dialog</button>
<button class="button" onclick="document.getElementById('medium-dialog').showModal()">Medium Dialog</button>
<button class="button" onclick="document.getElementById('large-dialog').showModal()">Large Dialog</button>

<dialog id="small-dialog" class="dialog sm">
  <div class="dialog-header">
    <h3>Small Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('small-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This is a small dialog.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('small-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="medium-dialog" class="dialog">
  <div class="dialog-header">
    <h3>Medium Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('medium-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This is a medium dialog (default size).</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('medium-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="large-dialog" class="dialog lg">
  <div class="dialog-header">
    <h3>Large Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('large-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This is a large dialog with more content space.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('large-dialog').close()">Close</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('small-dialog').showModal()">Small Dialog</button>
  <button class="button" onclick="document.getElementById('medium-dialog').showModal()">Medium Dialog</button>
  <button class="button" onclick="document.getElementById('large-dialog').showModal()">Large Dialog</button>

  <dialog id="small-dialog" class="dialog sm">
    <div class="dialog-header">
      <h3>Small Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('small-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This is a small dialog.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('small-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="medium-dialog" class="dialog">
    <div class="dialog-header">
      <h3>Medium Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('medium-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This is a medium dialog (default size).</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('medium-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="large-dialog" class="dialog lg">
    <div class="dialog-header">
      <h3>Large Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('large-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This is a large dialog with more content space.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('large-dialog').close()">Close</button>
    </div>
  </dialog>
</div>

### Style Variants

Different visual styles to match your design requirements.

```html
<button class="button" onclick="document.getElementById('bordered-dialog').showModal()">Bordered Dialog</button>
<button class="button" onclick="document.getElementById('rounded-dialog').showModal()">Rounded Dialog</button>
<button class="button" onclick="document.getElementById('no-backdrop-dialog').showModal()">No Backdrop</button>

<dialog id="bordered-dialog" class="dialog bordered">
  <div class="dialog-header">
    <h3>Bordered Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('bordered-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog has a more pronounced border.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('bordered-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="rounded-dialog" class="dialog rounded">
  <div class="dialog-header">
    <h3>Rounded Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('rounded-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog has more rounded corners.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('rounded-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="no-backdrop-dialog" class="dialog no-backdrop">
  <div class="dialog-header">
    <h3>No Backdrop Dialog</h3>
    <button class="dialog-close" onclick="document.getElementById('no-backdrop-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog has a transparent backdrop.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('no-backdrop-dialog').close()">Close</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('bordered-dialog').showModal()">Bordered Dialog</button>
  <button class="button" onclick="document.getElementById('rounded-dialog').showModal()">Rounded Dialog</button>
  <button class="button" onclick="document.getElementById('no-backdrop-dialog').showModal()">No Backdrop</button>

  <dialog id="bordered-dialog" class="dialog bordered">
    <div class="dialog-header">
      <h3>Bordered Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('bordered-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog has a more pronounced border.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('bordered-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="rounded-dialog" class="dialog rounded">
    <div class="dialog-header">
      <h3>Rounded Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('rounded-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog has more rounded corners.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('rounded-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="no-backdrop-dialog" class="dialog no-backdrop">
    <div class="dialog-header">
      <h3>No Backdrop Dialog</h3>
      <button class="dialog-close" onclick="document.getElementById('no-backdrop-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog has a transparent backdrop.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('no-backdrop-dialog').close()">Close</button>
    </div>
  </dialog>
</div>

### Animation Variants

Dialogs can have different entrance and exit animations.

```html
<button class="button" onclick="document.getElementById('fade-dialog').showModal()">Fade Animation</button>
<button class="button" onclick="document.getElementById('slide-dialog').showModal()">Slide Animation</button>
<button class="button" onclick="document.getElementById('scale-dialog').showModal()">Scale Animation</button>

<dialog id="fade-dialog" class="dialog animation-fade">
  <div class="dialog-header">
    <h3>Fade Animation</h3>
    <button class="dialog-close" onclick="document.getElementById('fade-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog uses a fade animation.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('fade-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="slide-dialog" class="dialog animation-slide">
  <div class="dialog-header">
    <h3>Slide Animation</h3>
    <button class="dialog-close" onclick="document.getElementById('slide-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog uses a slide animation.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('slide-dialog').close()">Close</button>
  </div>
</dialog>

<dialog id="scale-dialog" class="dialog animation-scale">
  <div class="dialog-header">
    <h3>Scale Animation</h3>
    <button class="dialog-close" onclick="document.getElementById('scale-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>This dialog uses a scale animation.</p>
  </div>
  <div class="dialog-footer">
    <button class="button primary" onclick="document.getElementById('scale-dialog').close()">Close</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button" onclick="document.getElementById('fade-dialog').showModal()">Fade Animation</button>
  <button class="button" onclick="document.getElementById('slide-dialog').showModal()">Slide Animation</button>
  <button class="button" onclick="document.getElementById('scale-dialog').showModal()">Scale Animation</button>

  <dialog id="fade-dialog" class="dialog animation-fade">
    <div class="dialog-header">
      <h3>Fade Animation</h3>
      <button class="dialog-close" onclick="document.getElementById('fade-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog uses a fade animation.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('fade-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="slide-dialog" class="dialog animation-slide">
    <div class="dialog-header">
      <h3>Slide Animation</h3>
      <button class="dialog-close" onclick="document.getElementById('slide-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog uses a slide animation.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('slide-dialog').close()">Close</button>
    </div>
  </dialog>

  <dialog id="scale-dialog" class="dialog animation-scale">
    <div class="dialog-header">
      <h3>Scale Animation</h3>
      <button class="dialog-close" onclick="document.getElementById('scale-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>This dialog uses a scale animation.</p>
    </div>
    <div class="dialog-footer">
      <button class="button primary" onclick="document.getElementById('scale-dialog').close()">Close</button>
    </div>
  </dialog>
</div>

## Usage Examples

### Confirmation Dialog

A common use case for dialogs is to ask for user confirmation before taking an action.

```html
<button class="button danger" onclick="document.getElementById('confirmation-dialog').showModal()">Delete Item</button>

<dialog id="confirmation-dialog" class="dialog">
  <div class="dialog-header">
    <h3>Confirm Deletion</h3>
    <button class="dialog-close" onclick="document.getElementById('confirmation-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  </div>
  <div class="dialog-footer">
    <button class="button" onclick="document.getElementById('confirmation-dialog').close()">Cancel</button>
    <button class="button danger" onclick="document.getElementById('confirmation-dialog').close()">Delete</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button danger" onclick="document.getElementById('confirmation-dialog').showModal()">Delete Item</button>

  <dialog id="confirmation-dialog" class="dialog">
    <div class="dialog-header">
      <h3>Confirm Deletion</h3>
      <button class="dialog-close" onclick="document.getElementById('confirmation-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    <div class="dialog-footer">
      <button class="button" onclick="document.getElementById('confirmation-dialog').close()">Cancel</button>
      <button class="button danger" onclick="document.getElementById('confirmation-dialog').close()">Delete</button>
    </div>
  </dialog>
</div>

### Form Dialog

Dialogs can contain forms for collecting user input.

```html
<button class="button primary" onclick="document.getElementById('form-dialog').showModal()">Open Form</button>

<dialog id="form-dialog" class="dialog">
  <div class="dialog-header">
    <h3>Contact Form</h3>
    <button class="dialog-close" onclick="document.getElementById('form-dialog').close()">×</button>
  </div>
  <div class="dialog-body">
    <form id="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="input" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" class="textarea" rows="3" required></textarea>
      </div>
    </form>
  </div>
  <div class="dialog-footer">
    <button class="button" onclick="document.getElementById('form-dialog').close()">Cancel</button>
    <button class="button primary" onclick="document.getElementById('contact-form').checkValidity() && document.getElementById('form-dialog').close()">Submit</button>
  </div>
</dialog>
```

<div class="example-wrapper">
  <button class="button primary" onclick="document.getElementById('form-dialog').showModal()">Open Form</button>

  <dialog id="form-dialog" class="dialog">
    <div class="dialog-header">
      <h3>Contact Form</h3>
      <button class="dialog-close" onclick="document.getElementById('form-dialog').close()">×</button>
    </div>
    <div class="dialog-body">
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="input" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="input" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" class="textarea" rows="3" required></textarea>
        </div>
      </form>
    </div>
    <div class="dialog-footer">
      <button class="button" onclick="document.getElementById('form-dialog').close()">Cancel</button>
      <button class="button primary" onclick="document.getElementById('contact-form').checkValidity() && document.getElementById('form-dialog').close()">Submit</button>
    </div>
  </dialog>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component module */
@import '@casoon/ui-lib/ui/components/dialog.css';
```

## CSS Variables

The Dialog component can be customized using CSS variables:

```css
:root {
  --dialog-background: var(--color-background);
  --dialog-border-radius: var(--radius-md);
  --dialog-border: 1px solid var(--color-border);
  --dialog-box-shadow: var(--shadow-lg);
  --dialog-width-sm: 300px;
  --dialog-width: 500px;
  --dialog-width-lg: 800px;
  --dialog-max-width: 95vw;
  --dialog-max-height: 80vh;
  --dialog-padding: 1.5rem;
  --dialog-gap: 1rem;
  --dialog-z-index: 1000;

  --dialog-header-border-bottom: 1px solid var(--color-border);
  --dialog-header-padding: 1rem 1.5rem;
  --dialog-header-background: var(--color-background);

  --dialog-body-padding: 1.5rem;
  --dialog-body-background: var(--color-background);

  --dialog-footer-border-top: 1px solid var(--color-border);
  --dialog-footer-padding: 1rem 1.5rem;
  --dialog-footer-background: var(--color-background-100);
  --dialog-footer-gap: 0.5rem;

  --dialog-backdrop: rgba(0, 0, 0, 0.5);
  --dialog-backdrop-blur: 0;
  
  --dialog-animation-duration: 0.3s;
  --dialog-animation-timing: ease-in-out;
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--dialog-background` | `var(--color-background)` | Background color of the dialog |
| `--dialog-border-radius` | `var(--radius-md)` | Border radius of the dialog |
| `--dialog-border` | `1px solid var(--color-border)` | Border of the dialog |
| `--dialog-box-shadow` | `var(--shadow-lg)` | Box shadow of the dialog |
| `--dialog-width-sm` | `300px` | Width of small dialog |
| `--dialog-width` | `500px` | Width of medium dialog (default) |
| `--dialog-width-lg` | `800px` | Width of large dialog |
| `--dialog-max-width` | `95vw` | Maximum width of the dialog |
| `--dialog-max-height` | `80vh` | Maximum height of the dialog |
| `--dialog-padding` | `1.5rem` | Padding inside the dialog |
| `--dialog-gap` | `1rem` | Gap between dialog sections |
| `--dialog-z-index` | `1000` | Z-index of the dialog |
| `--dialog-header-border-bottom` | `1px solid var(--color-border)` | Border at the bottom of the header |
| `--dialog-header-padding` | `1rem 1.5rem` | Padding of the header |
| `--dialog-header-background` | `var(--color-background)` | Background color of the header |
| `--dialog-body-padding` | `1.5rem` | Padding of the body |
| `--dialog-body-background` | `var(--color-background)` | Background color of the body |
| `--dialog-footer-border-top` | `1px solid var(--color-border)` | Border at the top of the footer |
| `--dialog-footer-padding` | `1rem 1.5rem` | Padding of the footer |
| `--dialog-footer-background` | `var(--color-background-100)` | Background color of the footer |
| `--dialog-footer-gap` | `0.5rem` | Gap between footer elements |
| `--dialog-backdrop` | `rgba(0, 0, 0, 0.5)` | Background color of the backdrop |
| `--dialog-backdrop-blur` | `0` | Backdrop blur amount |
| `--dialog-animation-duration` | `0.3s` | Duration of dialog animations |
| `--dialog-animation-timing` | `ease-in-out` | Timing function for animations |

## Accessibility

The Dialog component is built with accessibility in mind:

- **Native Dialog Element**: Uses the HTML `<dialog>` element, which provides built-in accessibility features
- **Focus Management**: Automatically focuses the first focusable element when opened and returns focus when closed
- **Keyboard Navigation**: 
  - Escape key closes the dialog
  - Tab key cycles through focusable elements within the dialog
  - Shift+Tab for reverse tabbing
- **Screen Reader Support**: Proper ARIA roles and attributes for screen reader announcements
- **Focus Trapping**: Focus is trapped within the dialog when open, preventing access to content underneath
- **Motion Reduction**: Respects the user's motion preference settings via `prefers-reduced-motion`

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic dialog | ✅ | ✅ | ✅ | ✅ | ❌ |
| `showModal()` | ✅ | ✅ | ✅ | ✅ | ❌ |
| Backdrop click to close | ✅ | ✅ | ⚠️ | ✅ | ❌ |
| Animations | ✅ | ✅ | ✅ | ✅ | ❌ |
| Focus management | ✅ | ✅ | ⚠️ | ✅ | ❌ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

**Note**: For older browsers that don't support the native `<dialog>` element, a polyfill or alternative implementation is recommended.

## Performance Considerations

- **Dialog Size**: Large dialogs with complex content can impact performance, especially on mobile devices
- **Animation Effects**: Complex animations may cause performance issues on lower-end devices
- **Backdrop Blur**: Using backdrop blur can significantly impact performance on some devices
- **Image Content**: Be cautious when including large images in dialogs
- **Form Validation**: Complex form validation should be optimized to prevent UI blocking
- **Rendering**: Consider using `will-change` properties for smoother animations
- **Motion Reduction**: Provide options to reduce or disable animations for users who prefer reduced motion

## Related Components

- [Modal](/components/modal/) - Alternative modal implementation with different features
- [Drawer](/components/drawer/) - Side panel that slides in from the edge of the screen
- [Popover](/components/popover/) - Smaller contextual overlay
- [Toast](/components/toast/) - Temporary notification message
- [Alert](/components/alert/) - Inline notification or warning 
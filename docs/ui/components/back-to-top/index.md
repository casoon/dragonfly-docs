---
title: Back to Top Component
outline: deep
---

# Back to Top

The Back to Top component provides a quick way for users to return to the top of a long page without having to scroll manually. It typically appears as a button fixed to the bottom corner of the screen that becomes visible once the user has scrolled down a certain distance.

## Basic Usage

```html
<div class="back-to-top" id="backToTop">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</div>

<script>
  // Simple implementation to show/hide the button
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
</script>
```

<div class="example-wrapper">
  <div class="back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  <div style="height: 100px; overflow-y: auto; border: 1px solid var(--color-border); padding: 1rem;">
    <p>Scroll down to see the Back to Top button appear.</p>
    <div style="height: 200px;"></div>
    <p>You should now see the Back to Top button.</p>
  </div>
</div>

## Variants

### Size Variants

The Back to Top component comes in different sizes.

```html
<div class="back-to-top sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</div>

<div class="back-to-top">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</div>

<div class="back-to-top lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</div>
```

<div class="example-wrapper" style="display: flex; gap: 1rem; align-items: center;">
  <div class="back-to-top sm visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top lg visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</div>

### Style Variants

Different visual styles for the Back to Top component.

```html
<div class="back-to-top">
  <!-- Default style -->
</div>

<div class="back-to-top rounded">
  <!-- Rounded style -->
</div>

<div class="back-to-top pill">
  <!-- Pill style -->
</div>

<div class="back-to-top transparent">
  <!-- Transparent style -->
</div>
```

<div class="example-wrapper" style="display: flex; gap: 1rem; align-items: center;">
  <div class="back-to-top visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top rounded visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top pill visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top transparent visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</div>

### Position Variants

The Back to Top component can be positioned in different corners of the screen.

```html
<div class="back-to-top bottom-right">
  <!-- Default: bottom right position -->
</div>

<div class="back-to-top bottom-left">
  <!-- Bottom left position -->
</div>

<div class="back-to-top top-right">
  <!-- Top right position (less common) -->
</div>

<div class="back-to-top top-left">
  <!-- Top left position (less common) -->
</div>
```

<div class="example-wrapper" style="position: relative; height: 200px; border: 1px solid var(--color-border);">
  <div class="back-to-top bottom-right visible" style="position: absolute;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top bottom-left visible" style="position: absolute;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top top-right visible" style="position: absolute;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
  
  <div class="back-to-top top-left visible" style="position: absolute;">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</div>

## Usage Examples

### With Text Label

Add a text label to make the purpose more explicit.

```html
<div class="back-to-top with-label">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
  <span>Top</span>
</div>
```

<div class="example-wrapper">
  <div class="back-to-top with-label visible">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
    <span>Top</span>
  </div>
</div>

### With Progress Indicator

Add a circular progress indicator to show how far the user has scrolled.

```html
<div class="back-to-top with-progress" id="backToTopProgress">
  <svg class="progress-circle" width="40" height="40">
    <circle class="progress-circle-bg" cx="20" cy="20" r="18"></circle>
    <circle class="progress-circle-path" cx="20" cy="20" r="18"></circle>
  </svg>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</div>

<script>
  // Update progress circle as user scrolls
  const progressElement = document.querySelector('#backToTopProgress .progress-circle-path');
  const circumference = 2 * Math.PI * 18;
  
  progressElement.style.strokeDasharray = circumference;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    
    const offset = circumference - scrollPercent * circumference;
    progressElement.style.strokeDashoffset = offset;
  });
</script>
```

<div class="example-wrapper">
  <div class="back-to-top with-progress visible">
    <svg class="progress-circle" width="40" height="40">
      <circle class="progress-circle-bg" cx="20" cy="20" r="18"></circle>
      <circle class="progress-circle-path" cx="20" cy="20" r="18" style="stroke-dasharray: 113.1; stroke-dashoffset: 50;"></circle>
    </svg>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </div>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component module */
@import '@casoon/ui-lib/ui/components/back-to-top.css';
```

## CSS Variables

The Back to Top component can be customized using CSS variables:

```css
:root {
  --back-to-top-size: 40px;
  --back-to-top-size-sm: 32px;
  --back-to-top-size-lg: 48px;
  --back-to-top-border-radius: var(--radius-md);
  --back-to-top-border-radius-rounded: var(--radius-lg);
  --back-to-top-border-radius-pill: 50%;
  --back-to-top-background: var(--color-background-200);
  --back-to-top-color: var(--color-text);
  --back-to-top-hover-background: var(--color-background-300);
  --back-to-top-hover-color: var(--color-primary);
  --back-to-top-active-background: var(--color-background-400);
  --back-to-top-active-color: var(--color-primary-dark);
  --back-to-top-shadow: var(--shadow-md);
  --back-to-top-hover-shadow: var(--shadow-lg);
  --back-to-top-z-index: 990;
  --back-to-top-offset: 20px;
  --back-to-top-opacity: 1;
  --back-to-top-transition: all 0.3s ease;
  --back-to-top-font-size: 0.875rem;
  --back-to-top-gap: 0.25rem;
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--back-to-top-size` | `40px` | Size of the button (width and height) |
| `--back-to-top-size-sm` | `32px` | Size of the small button variant |
| `--back-to-top-size-lg` | `48px` | Size of the large button variant |
| `--back-to-top-border-radius` | `var(--radius-md)` | Border radius of the button |
| `--back-to-top-border-radius-rounded` | `var(--radius-lg)` | Border radius for rounded variant |
| `--back-to-top-border-radius-pill` | `50%` | Border radius for pill variant |
| `--back-to-top-background` | `var(--color-background-200)` | Background color of the button |
| `--back-to-top-color` | `var(--color-text)` | Text/icon color of the button |
| `--back-to-top-hover-background` | `var(--color-background-300)` | Background color on hover |
| `--back-to-top-hover-color` | `var(--color-primary)` | Text/icon color on hover |
| `--back-to-top-active-background` | `var(--color-background-400)` | Background color when active (pressed) |
| `--back-to-top-active-color` | `var(--color-primary-dark)` | Text/icon color when active (pressed) |
| `--back-to-top-shadow` | `var(--shadow-md)` | Box shadow of the button |
| `--back-to-top-hover-shadow` | `var(--shadow-lg)` | Box shadow on hover |
| `--back-to-top-z-index` | `990` | Z-index of the button |
| `--back-to-top-offset` | `20px` | Distance from the edge of the viewport |
| `--back-to-top-opacity` | `1` | Opacity of the visible button |
| `--back-to-top-transition` | `all 0.3s ease` | Transition effect for state changes |
| `--back-to-top-font-size` | `0.875rem` | Font size for text label |
| `--back-to-top-gap` | `0.25rem` | Gap between icon and text |

## Accessibility

The Back to Top component is designed with accessibility in mind:

- **Keyboard Navigation**: Can be accessed and activated with the keyboard
- **Screen Reader Support**: 
  - Uses proper ARIA attributes to ensure screen readers understand its purpose
  - Include `aria-label="Back to top"` to provide context
- **Focus Visibility**: Clear focus indicator for keyboard users
- **Alternative Navigation**: Works alongside other navigation methods (scrollbars, keyboard scrolling)
- **Motion Reduction**: Respects user preferences for reduced motion
- **Color Contrast**: Maintains adequate contrast for visibility

```html
<!-- Accessible implementation -->
<button class="back-to-top" aria-label="Back to top" role="button" tabindex="0">
  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</button>
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Fixed positioning | ✅ | ✅ | ✅ | ✅ | ✅ |
| Smooth scrolling | ✅ | ✅ | ✅ | ✅ | ❌ |
| CSS transitions | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| SVG support | ✅ | ✅ | ✅ | ✅ | ⚠️ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

**Note**: For IE support, additional polyfills may be required for smooth scrolling and modern CSS features.

## Performance Considerations

- **Scroll Event Throttling**: When implementing scroll detection, throttle or debounce the scroll event to prevent performance issues
- **Hardware Acceleration**: Use CSS transform and opacity for animations to leverage hardware acceleration
- **Lazy Initialization**: Consider initializing the component only after the page has loaded completely
- **Passive Event Listeners**: Use passive event listeners for scroll events to improve scrolling performance
- **SVG Optimization**: Ensure SVG icons are optimized for size and rendering performance
- **Visibility Logic**: Show the button only when it would be useful (e.g., when the page is long enough to require scrolling)

## Related Components

- [Scroll Indicator](/components/scroll-indicator/) - Shows scroll progress
- [Navigation](/components/navigation/) - Main site navigation
- [Pagination](/components/pagination/) - Navigate between pages of content
- [Button](/components/button/) - Basic button component
- [Floating Action Button](/components/floating-action-button/) - Similar floating UI element 
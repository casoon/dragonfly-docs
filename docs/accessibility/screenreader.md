---
title: Screen Reader Accessibility
category: Accessibility
---

# Screen Reader Accessibility

The Casoon UI Library implements comprehensive screen reader support to ensure that all components are properly announced and navigable for users of assistive technologies. This document outlines the screen reader considerations, implementations, and best practices used throughout the library.

## Overview

Screen reader accessibility is essential for users with visual impairments who rely on text-to-speech technology to interact with web applications. The Casoon UI Library follows these key principles for screen reader support:

1. **Semantic HTML** - Using the most appropriate HTML elements
2. **ARIA attributes** - Supplementing with ARIA when necessary
3. **Meaningful text alternatives** - Providing context for non-text content
4. **Consistent patterns** - Using established screen reader patterns
5. **Testing with real screen readers** - Verifying functionality with actual devices

## Semantic HTML Foundation

The library prioritizes semantic HTML as the foundation for screen reader accessibility:

```html
<!-- Good: Using semantic HTML -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
  </ul>
</nav>

<!-- Avoid: Using generic elements without semantics -->
<div class="nav">
  <div class="nav-item"><a href="/">Home</a></div>
  <div class="nav-item"><a href="/products">Products</a></div>
</div>
```

### Headings Structure

The library promotes proper heading structure for screen reader navigation:

```html
<h1>Main Page Title</h1>
<section>
  <h2>Section Heading</h2>
  <p>Content goes here...</p>
  
  <div class="subsection">
    <h3>Subsection Heading</h3>
    <p>More content...</p>
  </div>
</section>
```

## Text Alternatives

All non-text content includes appropriate text alternatives:

```html
<!-- Image with informative alt text -->
<img src="chart.png" alt="Bar chart showing sales increasing by 25% in Q3 2023">

<!-- Decorative image with empty alt -->
<img src="divider.png" alt="" role="presentation">

<!-- Icon with accessible label -->
<button>
  <svg aria-hidden="true" class="icon"><!-- SVG content --></svg>
  <span>Save document</span>
</button>

<!-- Icon alone needs an accessible name -->
<button aria-label="Close dialog">
  <svg aria-hidden="true" class="icon-close"><!-- SVG content --></svg>
</button>
```

## ARIA Implementation

The library uses ARIA attributes to enhance accessibility when needed:

### Landmarks

```html
<header role="banner">
  <!-- Site header content -->
</header>

<nav aria-label="Main">
  <!-- Navigation content -->
</nav>

<main id="main-content">
  <!-- Main page content -->
</main>

<aside aria-labelledby="related-title">
  <h2 id="related-title">Related Articles</h2>
  <!-- Related content -->
</aside>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### Live Regions

For dynamic content updates:

```html
<div class="notification-area" aria-live="polite" aria-atomic="true">
  <!-- New notifications will be inserted here -->
</div>

<div class="alert alert-success" role="alert">
  <!-- Critical alerts use role="alert" which has implicit aria-live="assertive" -->
  Your form was submitted successfully.
</div>
```

## Component-Specific Implementations

### Buttons and Interactive Elements

```html
<!-- Native button -->
<button type="button" class="btn btn-primary">Submit</button>

<!-- Custom button -->
<div 
  role="button" 
  tabindex="0" 
  class="custom-button" 
  aria-pressed="false"
  onclick="toggleButton(this)"
  onkeydown="handleButtonKeydown(event, this)"
>
  Toggle Feature
</div>
```

### Form Controls

```html
<div class="form-group">
  <label for="name">Full Name</label>
  <input 
    type="text" 
    id="name" 
    aria-required="true" 
    aria-describedby="name-help"
  >
  <div id="name-help" class="form-hint">
    Enter your first and last name.
  </div>
  
  <!-- Error state -->
  <div class="form-group has-error">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      aria-required="true" 
      aria-invalid="true" 
      aria-describedby="email-error"
    >
    <div id="email-error" class="form-error" role="alert">
      Please enter a valid email address.
    </div>
  </div>
</div>
```

### Modal Dialogs

```html
<div 
  class="modal" 
  role="dialog" 
  aria-labelledby="modal-title" 
  aria-describedby="modal-desc" 
  aria-modal="true"
>
  <div class="modal-content">
    <h2 id="modal-title">Confirm Action</h2>
    <p id="modal-desc">Are you sure you want to proceed with this action?</p>
    
    <div class="modal-actions">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Tabs

```html
<div class="tabs-component">
  <div role="tablist" aria-label="Product Information">
    <button 
      role="tab" 
      id="tab1" 
      aria-selected="true" 
      aria-controls="panel1"
    >
      Description
    </button>
    <button 
      role="tab" 
      id="tab2" 
      aria-selected="false" 
      aria-controls="panel2" 
      tabindex="-1"
    >
      Specifications
    </button>
  </div>
  
  <div 
    id="panel1" 
    role="tabpanel" 
    aria-labelledby="tab1" 
    tabindex="0"
  >
    <p>Product description content here...</p>
  </div>
  
  <div 
    id="panel2" 
    role="tabpanel" 
    aria-labelledby="tab2" 
    tabindex="0" 
    hidden
  >
    <p>Product specifications content here...</p>
  </div>
</div>
```

### Accordions

```html
<div class="accordion">
  <h3>
    <button 
      aria-expanded="false" 
      class="accordion-trigger" 
      aria-controls="section1" 
      id="accordion1"
    >
      <span class="accordion-title">Section 1</span>
      <span class="accordion-icon" aria-hidden="true"></span>
    </button>
  </h3>
  <div 
    id="section1" 
    role="region" 
    aria-labelledby="accordion1" 
    hidden
    class="accordion-content"
  >
    <p>Accordion content here...</p>
  </div>
  
  <!-- Additional accordion sections -->
</div>
```

### Tooltips

```html
<button 
  class="btn btn-icon" 
  aria-describedby="tooltip1"
>
  <svg aria-hidden="true" class="icon"><!-- SVG content --></svg>
  <span class="sr-only">Settings</span>
</button>

<div 
  id="tooltip1" 
  role="tooltip" 
  class="tooltip"
>
  Configure application settings
</div>
```

## Hidden and Visually Hidden Content

The library provides utilities for managing content visibility to screen readers:

```html
<!-- Visible to everyone -->
<p>This text is visible to all users.</p>

<!-- Hidden from everyone (including screen readers) -->
<div aria-hidden="true" style="display: none;">
  This content is completely hidden.
</div>

<!-- Visually hidden but available to screen readers -->
<span class="sr-only">
  This text is only announced to screen reader users.
</span>

<!-- CSS for screen-reader-only content -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
```

## Dynamic Content Considerations

### Loading States

```html
<button type="submit" class="btn btn-primary">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="btn-text">Loading...</span>
</button>

<div aria-live="polite" class="sr-only" id="loading-status">
  Loading results, please wait...
</div>

<script>
  // When loading completes, update the live region
  function onLoadComplete() {
    document.getElementById('loading-status').textContent = 
      'Results loaded. 15 items found.';
  }
</script>
```

### Form Validation

```html
<form>
  <div class="form-group">
    <label for="username">Username</label>
    <input 
      type="text" 
      id="username" 
      aria-required="true"
    >
    <!-- Live region for validation messages -->
    <div 
      class="form-feedback" 
      aria-live="assertive" 
      id="username-feedback"
    ></div>
  </div>
  
  <button type="submit">Submit</button>
</form>

<script>
  // Example validation
  function validateForm() {
    const input = document.getElementById('username');
    const feedback = document.getElementById('username-feedback');
    
    if (input.value.length < 3) {
      input.setAttribute('aria-invalid', 'true');
      feedback.textContent = 'Username must be at least 3 characters long.';
      return false;
    } else {
      input.removeAttribute('aria-invalid');
      feedback.textContent = 'Username is valid.';
      return true;
    }
  }
</script>
```

## Screen Reader Testing

The library is tested with these screen readers:

| Screen Reader | Browser | Operating system |
|---------------|---------|------------------|
| NVDA          | Firefox, Chrome | Windows |
| JAWS          | Chrome, Edge    | Windows |
| VoiceOver     | Safari          | macOS   |
| VoiceOver     | Safari          | iOS     |
| TalkBack      | Chrome          | Android |

### Testing Utilities

```javascript
// Screen reader announcement testing utility
import { ScreenReaderTester } from '@casoon/ui-lib/testing/a11y';

// Test if element is properly announced
ScreenReaderTester.testAnnouncement('.dropdown-menu', {
  expectedRole: 'menu',
  expectedName: 'Options',
  expectsFocus: true
}).then(results => {
  console.log(`Passed: ${results.passed}, Failed: ${results.failed}`);
});

// Test live regions
ScreenReaderTester.testLiveRegion('#notification-area', {
  updateText: 'New message received',
  expectedAnnouncement: true,
  polite: true
}).then(result => {
  console.log(`Live region test: ${result ? 'Passed' : 'Failed'}`);
});
```

## Common Screen Reader Patterns

### Skip Links

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Main content with ID that matches the skip link href -->
<main id="main-content">
  <!-- Main content -->
</main>
```

### Tables

```html
<table>
  <caption>Monthly Sales Data</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
      <td>5%</td>
    </tr>
    <!-- Additional rows -->
  </tbody>
</table>
```

### Complex Images and Charts

```html
<figure>
  <img src="sales-chart.png" alt="Bar chart showing sales by quarter">
  <figcaption>
    Figure 1: Quarterly sales from Q1 2022 to Q4 2022, showing a 15% increase in Q3.
  </figcaption>
</figure>

<!-- For complex charts, provide a detailed text alternative -->
<div class="chart-container">
  <div class="chart" aria-hidden="true">
    <!-- Visual chart implementation -->
  </div>
  <details>
    <summary>Chart description</summary>
    <div>
      <p>The bar chart shows quarterly sales for 2022 with the following data:</p>
      <ul>
        <li>Q1: $1.2 million</li>
        <li>Q2: $1.3 million</li>
        <li>Q3: $1.7 million (15% increase)</li>
        <li>Q4: $1.8 million</li>
      </ul>
    </div>
  </details>
</div>
```

## Best Practices

1. **Use semantic HTML elements** whenever possible
2. **Ensure proper heading structure** (h1-h6) for document outline
3. **Provide text alternatives** for all non-text content
4. **Use ARIA attributes judiciously** and only when necessary
5. **Test with actual screen readers** on different platforms
6. **Make interactive elements accessible** with keyboard and screen readers
7. **Announce dynamic content changes** with live regions
8. **Avoid auto-playing content** or provide easy controls to stop it
9. **Use clear, descriptive labels** for form controls and interactive elements
10. **Maintain a logical reading order** that matches the visual layout

## Common Pitfalls to Avoid

1. Adding redundant text (like "button" or "image of") in alt text
2. Using aria-hidden="true" on elements that are visually apparent and should be accessible
3. Creating custom interactive controls without proper ARIA roles and states
4. Relying solely on color to convey information
5. Forgetting to update ARIA attributes when component states change

## Resources

- [WebAIM: Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [The A11Y Project: Screen Reader Guide](https://www.a11yproject.com/posts/getting-started-with-nvda/)
- [Deque University: Screen Reader Basics](https://dequeuniversity.com/screenreaders/)
- [MDN: ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

## Summary

The Casoon UI Library implements comprehensive screen reader support across all components. By following the guidelines in this document and using the provided components, you can ensure that your applications are accessible to users of assistive technologies. Remember that screen reader accessibility benefits not only users with disabilities but also improves the overall user experience for everyone. 
---
title: Hamburger Menu Component
category: Components
---

# Hamburger Menu Component

The Hamburger Menu component provides mobile menu icons for navigation on small screens. Hamburger icons serve as a compact button for expanding and collapsing navigation menus.

## Basic Usage

```html
<button class="hamburger" aria-label="Open menu">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

## Active State (Open)

```html
<button class="hamburger active" aria-label="Close menu">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

## Animation Variants

### Standard Animation (Default)

```html
<button class="hamburger">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Spin Animation

```html
<button class="hamburger spin">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Squeeze Animation

```html
<button class="hamburger squeeze">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Arrow Animation

```html
<button class="hamburger arrow">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

## Size Variants

### Small

```html
<button class="hamburger sm">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Medium (Default)

```html
<button class="hamburger md">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Large

```html
<button class="hamburger lg">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

## Color Variants

### Light Background (Default)

```html
<button class="hamburger">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Dark Background

```html
<button class="hamburger light">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

### Primary Color

```html
<button class="hamburger primary">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
```

## Integration with Navigation

```html
<div class="mobile-nav">
  <button class="hamburger" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>
  
  <nav class="nav-menu" id="nav-menu" aria-labelledby="nav-toggle">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```

## JavaScript Toggle Example

```html
<button class="hamburger" id="menu-toggle">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>

<script>
  document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    // Add code to toggle menu visibility here
  });
</script>
```

## Customization

The Hamburger component can be customized using CSS variables:

```css
:root {
  --color-gray-800: #1f2937;       /* Default hamburger line color */
  --color-gray-900: #111827;       /* Dark variant color */
  --color-white: #ffffff;          /* Light variant color */
  --color-primary: #3b82f6;        /* Primary color variant */
  --transition-fast: 0.2s;         /* Animation speed */
}
```

## Accessibility

For better accessibility, consider these points:

- Add appropriate `aria-label` attribute to describe the button's purpose
- Use `aria-expanded` to indicate the current state of the menu
- Make sure the button is keyboard accessible and has focus styles
- Associate the button with the menu it controls using `aria-controls`
- Change the `aria-label` based on the state (e.g., "Open menu" to "Close menu")

## Best Practices

- Use the hamburger menu only for mobile or narrow viewports
- Provide a visible header or navigation on larger screens
- Keep the toggle button in a consistent location (usually top right or left)
- Make the button large enough to be easily tapped on mobile devices
- Use animation to provide visual feedback on state changes
- Consider adding text labels next to the hamburger icon for better clarity
- Test the menu with screen readers and keyboard navigation 
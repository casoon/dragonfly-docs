---
title: Header Component
category: Components
---

# Header Component

The Header component provides a navigation area and important orientation point for users in websites and applications.

## Basic Usage

```html
<header class="header">
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <nav class="nav">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <button class="button">Login</button>
  </div>
</header>
```

## Variants

### Fixed Header

Stays fixed at the top of the viewport even when scrolling.

```html
<header class="header fixed">
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <nav class="nav">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link active">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <button class="button">Login</button>
  </div>
</header>
```

### Sticky Header

Sticks to the top of the viewport when scrolling past it.

```html
<header class="header sticky">
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <nav class="nav">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <button class="button">Login</button>
  </div>
</header>
```

### Transparent Header

Useful for hero sections where the header overlays content.

```html
<header class="header transparent">
  <div class="logo">
    <img src="logo-white.png" alt="Logo" />
  </div>
  <nav class="nav">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <button class="button">Login</button>
  </div>
</header>
```

### Color Variants

```html
<!-- Primary color background -->
<header class="header primary">
  <!-- Header content -->
</header>

<!-- Light color background -->
<header class="header light">
  <!-- Header content -->
</header>

<!-- Dark color background -->
<header class="header dark">
  <!-- Header content -->
</header>
```

## With Search Functionality

```html
<header class="header">
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <nav class="nav">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <div class="search">
      <input type="search" class="input" placeholder="Search...">
      <button class="button icon-only">
        <span class="icon">🔍</span>
      </button>
    </div>
    <button class="button">Login</button>
  </div>
</header>
```

## Responsive Header with Hamburger Menu

```html
<header class="header">
  <div class="logo">
    <img src="logo.png" alt="Logo" />
  </div>
  <button class="toggle hamburger" aria-label="Open menu"></button>
  <nav class="nav mobile-hidden">
    <ul class="menu">
      <li><a href="#" class="link">Home</a></li>
      <li><a href="#" class="link">Products</a></li>
      <li><a href="#" class="link">About</a></li>
      <li><a href="#" class="link">Contact</a></li>
    </ul>
  </nav>
  <div class="actions">
    <button class="button">Login</button>
  </div>
</header>

<script>
  // Simple toggle functionality for mobile menu
  document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('mobile-hidden');
  });
</script>
```

## Customization

The Header component can be customized using CSS variables:

```css
:root {
  --color-primary: #3b82f6;        /* Primary color */
  --color-white: #ffffff;          /* White background */
  --color-gray-100: #f3f4f6;       /* Light background */
  --color-gray-200: #e5e7eb;       /* Light hover color */
  --color-gray-700: #374151;       /* Default link color */
  --color-gray-900: #111827;       /* Dark background */
  --font-weight-medium: 500;       /* Default link weight */
  --font-weight-semibold: 600;     /* Active link weight */
  --space-2: 0.5rem;               /* Small spacing */
  --space-4: 1rem;                 /* Standard spacing */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* Header shadow */
  --transition-fast: 0.15s ease;   /* Hover transition */
  --z-index-header: 100;           /* Header stack order */
}
```

## Accessibility

For better accessibility, please consider these points:

- Use semantic HTML elements (header, nav, ul, li, a)
- Include `aria-label` attributes for buttons without text
- Ensure keyboard navigation works properly for all interactive elements
- Provide sufficient color contrast for text elements
- Make sure the mobile menu is accessible via keyboard and screen readers
- Consider adding `aria-current="page"` to the currently active navigation item

## Best Practices

- Keep the header clean and focused on the most important navigation items
- Ensure the logo is clearly visible and links back to the homepage
- Use active state indicators to show the current page/section
- Consider implementing a collapsible header on scroll for long pages
- Ensure the header is fully responsive across all device sizes
- Use consistent colors and styling that match your brand identity 
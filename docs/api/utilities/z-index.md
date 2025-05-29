---
title: Z-Index Utilities
category: API
outline: deep
---

# Z-Index Utilities

The Casoon UI Library provides a set of utility classes for controlling the stacking order of elements using the CSS `z-index` property. These utilities help you manage how elements overlap and which elements appear in front of or behind others in your layouts.

## Basic Z-Index Controls

Control the stacking order of elements with these utility classes:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.z-0` | `z-index: 0;` | Base stacking level |
| `.z-10` | `z-index: 10;` | 10 stacking level |
| `.z-20` | `z-index: 20;` | 20 stacking level |
| `.z-30` | `z-index: 30;` | 30 stacking level |
| `.z-40` | `z-index: 40;` | 40 stacking level |
| `.z-50` | `z-index: 50;` | 50 stacking level |
| `.z-auto` | `z-index: auto;` | Default stacking level (auto) |

### Example Usage

```html
<div class="relative">
  <!-- Lower z-index, appears behind -->
  <div class="absolute top-0 left-0 z-10 bg-blue-500 p-4">
    Element with z-index 10
  </div>
  
  <!-- Higher z-index, appears in front -->
  <div class="absolute top-10 left-10 z-20 bg-red-500 p-4">
    Element with z-index 20
  </div>
  
  <!-- Even higher z-index, appears in front of all -->
  <div class="absolute top-20 left-20 z-30 bg-green-500 p-4">
    Element with z-index 30
  </div>
</div>
```

## Negative Z-Index

Control elements that should appear behind their container:

```html
<div class="relative">
  <!-- Positioned behind the container -->
  <div class="absolute inset-0 z-n10 bg-gray-200">
    Background element
  </div>
  
  <!-- Content with default stacking level -->
  <div class="p-4">
    Main content
  </div>
</div>
```

Negative z-index classes (like `.z-n10`) may be available in some configurations of the library.

## Using Z-Index with Position

Z-index only affects elements with a position value other than `static`:

```html
<!-- This z-index won't have any effect -->
<div class="z-50">
  Element with static position (default)
</div>

<!-- This z-index will work -->
<div class="relative z-50">
  Element with relative position
</div>

<!-- This z-index will also work -->
<div class="absolute z-50">
  Element with absolute position
</div>
```

## Z-Index in Common UI Components

The z-index scale is designed to work well with common UI components:

### Modal/Dialog

```html
<div class="fixed inset-0 z-50">
  <!-- Modal backdrop with semi-transparent background -->
  <div class="absolute inset-0 bg-black opacity-50"></div>
  
  <!-- Modal content on top of backdrop -->
  <div class="relative z-10 mx-auto mt-20 w-500 bg-white p-4">
    Modal content
  </div>
</div>
```

### Dropdown Menu

```html
<div class="relative">
  <!-- Dropdown trigger button -->
  <button class="relative z-10">Menu</button>
  
  <!-- Dropdown content -->
  <div class="absolute top-full left-0 z-20 w-200 bg-white shadow-lg">
    <ul>
      <li>Menu item 1</li>
      <li>Menu item 2</li>
      <li>Menu item 3</li>
    </ul>
  </div>
</div>
```

### Sticky Header

```html
<header class="sticky top-0 z-40 bg-white p-4 shadow-md">
  Sticky header content
</header>
<main>
  Page content
</main>
```

## Z-Index Hierarchy

The Casoon UI Library follows a standardized z-index hierarchy for common UI elements:

| UI Element | Recommended Z-Index | Class |
|------------|---------------------|-------|
| Background elements | -10 to -1 | `.z-n10` to `.z-n1` |
| Base content | 0 | `.z-0` |
| Elevated elements (cards, etc.) | 10 | `.z-10` |
| Dropdown menus, tooltips | 20 | `.z-20` |
| Sticky elements (headers, etc.) | 30-40 | `.z-30` to `.z-40` |
| Modals/dialogs | 50 | `.z-50` |
| Notifications, toasts | 60 | `.z-60` |
| Critical UI (loading indicators) | 70+ | `.z-70` and up |

This hierarchy helps maintain a consistent stacking order across your application.

## Z-Index Stacking Contexts

Understanding stacking contexts is crucial for working with z-index:

```html
<!-- Parent creates a stacking context -->
<div class="relative z-10">
  <!-- Child with higher z-index, but still within parent context -->
  <div class="absolute z-50">
    This appears above siblings but still within parent context
  </div>
  
  <!-- Sibling to the child -->
  <div class="relative z-20">
    Sibling element
  </div>
</div>

<!-- Element outside the stacking context -->
<div class="relative z-5">
  Even though this has a lower z-index than the child (z-50),
  it will appear above the child if it's above the parent in the DOM
</div>
```

Elements with the following properties create new stacking contexts:
- Position `relative`, `absolute`, or `fixed` with a z-index other than `auto`
- Elements with `opacity` less than 1
- Elements with `transform`, `filter`, or `backdrop-filter`
- Elements with `isolation: isolate`

## Responsive Z-Index

Z-index utilities can be combined with responsive breakpoints:

```html
<!-- Different z-index at different screen sizes -->
<div class="relative z-10 md:z-20 lg:z-30">
  Element with responsive z-index
</div>
```

Available breakpoints:
- `sm`: Small screens (≥576px)
- `md`: Medium screens (≥768px)
- `lg`: Large screens (≥992px)
- `xl`: Extra large screens (≥1200px)
- `2xl`: Extra extra large screens (≥1400px)

## Isolate Stacking Context

Create an isolated stacking context:

```html
<div class="isolate">
  <!-- Elements within this container have their z-index isolated -->
  <div class="relative z-10">Element 1</div>
  <div class="relative z-20">Element 2</div>
</div>

<div class="isolate">
  <!-- Elements in this container are independent of the previous container -->
  <div class="relative z-10">Element 3</div>
  <div class="relative z-20">Element 4</div>
</div>
```

The `.isolate` class applies `isolation: isolate` to create a new stacking context without affecting z-index or position.

## Best Practices

1. **Use the standardized z-index scale** - Stick to the predefined z-index values (10, 20, 30, etc.) rather than arbitrary numbers.

2. **Be mindful of stacking contexts** - Remember that z-index is relative to the parent stacking context.

3. **Consider the DOM order** - When z-index is the same, elements later in the DOM appear on top.

4. **Don't overuse high z-index values** - Using very high values (like 9999) can lead to maintainability issues.

5. **Document your z-index usage** - Make note of custom z-index values in comments or documentation.

6. **Use isolation when needed** - The `.isolate` class can help manage complex overlapping scenarios.

7. **Combine with positioning utilities** - Z-index only works with positioned elements (relative, absolute, fixed, sticky).

## Common Pitfalls

### Z-Index Not Working

If z-index appears not to work, check:
- The element needs a position other than `static`
- The element might be in a different stacking context
- Another element with higher z-index might be on top

### Z-Index Too High

If you find yourself using increasingly high z-index values:
- You might be fighting against stacking contexts
- Consider reorganizing your DOM structure
- Use isolation to create independent stacking contexts

## Browser Compatibility

The z-index utilities are supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Z-Index Property | 1+ | 1+ | 1+ | 12+ |
| Isolation Property | 28+ | 36+ | 10.1+ | 79+ |

For older browsers, the standard z-index properties work well, but the isolation property may not be supported. 
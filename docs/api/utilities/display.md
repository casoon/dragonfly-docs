---
title: Display Utilities
category: API
outline: deep
---

# Display Utilities

The Casoon UI Library provides a comprehensive set of utility classes for controlling the display, visibility, positioning, and overflow behavior of elements. These atomic classes follow a consistent, easy-to-remember naming pattern.

## Display Property

Control how an element is displayed in the document flow with these utility classes:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.block` | `display: block;` | Makes an element a block-level element |
| `.inline` | `display: inline;` | Makes an element an inline element |
| `.inline-block` | `display: inline-block;` | Makes an element an inline-block element |
| `.hidden` | `display: none;` | Hides an element completely (removes from layout) |
| `.flex` | `display: flex;` | Creates a flex container |
| `.inline-flex` | `display: inline-flex;` | Creates an inline flex container |
| `.grid` | `display: grid;` | Creates a grid container |
| `.inline-grid` | `display: inline-grid;` | Creates an inline grid container |

### Example Usage

```html
<!-- Block display, takes full width -->
<div class="block">Block element</div>

<!-- Inline display, only takes needed width -->
<span class="inline">Inline element</span>

<!-- Inline-block display, behaves like inline but accepts width/height -->
<div class="inline-block">Inline-block element</div>

<!-- Hidden element, completely removed from layout -->
<div class="hidden">This will not be visible</div>

<!-- Flex container -->
<div class="flex">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</div>
```

## Visibility

Control the visibility of elements without affecting their layout:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.visible` | `visibility: visible;` | Makes an element visible |
| `.invisible` | `visibility: hidden;` | Hides an element without affecting layout |

### Example Usage

```html
<!-- Element is visible (default behavior) -->
<div class="visible">This is visible</div>

<!-- Element is hidden but still takes up space -->
<div class="invisible">This is invisible but still affects layout</div>
```

## Position

Control how an element is positioned in the document:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.static` | `position: static;` | Default positioning (follows document flow) |
| `.relative` | `position: relative;` | Positioned relative to its normal position |
| `.absolute` | `position: absolute;` | Positioned relative to nearest positioned ancestor |
| `.fixed` | `position: fixed;` | Positioned relative to the viewport |
| `.sticky` | `position: sticky;` | Positioned based on scroll position |

### Example Usage

```html
<!-- Relatively positioned container -->
<div class="relative">
  <!-- Absolutely positioned element within the container -->
  <div class="absolute">This is absolutely positioned</div>
</div>

<!-- Fixed position element, stays in place during scrolling -->
<header class="fixed">Fixed header</header>

<!-- Sticky element, becomes fixed after scrolling past it -->
<nav class="sticky">Sticky navigation</nav>
```

## Z-Index

Control the stacking order of elements:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.z-0` | `z-index: 0;` | Base stacking level |
| `.z-10` | `z-index: 10;` | 10 stacking level |
| `.z-20` | `z-index: 20;` | 20 stacking level |
| `.z-30` | `z-index: 30;` | 30 stacking level |
| `.z-40` | `z-index: 40;` | 40 stacking level |
| `.z-50` | `z-index: 50;` | 50 stacking level |
| `.z-auto` | `z-index: auto;` | Auto stacking level |

### Example Usage

```html
<div class="relative">
  <!-- Lower z-index, appears behind -->
  <div class="absolute z-10">Behind</div>
  
  <!-- Higher z-index, appears in front -->
  <div class="absolute z-20">In front</div>
</div>
```

## Overflow

Control how content that overflows an element's box is handled:

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.overflow-auto` | `overflow: auto;` | Adds scrollbars when needed |
| `.overflow-hidden` | `overflow: hidden;` | Clips overflow content |
| `.overflow-visible` | `overflow: visible;` | Shows overflow content |
| `.overflow-scroll` | `overflow: scroll;` | Always shows scrollbars |
| `.overflow-x-auto` | `overflow-x: auto;` | Horizontal auto overflow |
| `.overflow-x-hidden` | `overflow-x: hidden;` | Horizontal hidden overflow |
| `.overflow-x-visible` | `overflow-x: visible;` | Horizontal visible overflow |
| `.overflow-x-scroll` | `overflow-x: scroll;` | Horizontal scroll overflow |
| `.overflow-y-auto` | `overflow-y: auto;` | Vertical auto overflow |
| `.overflow-y-hidden` | `overflow-y: hidden;` | Vertical hidden overflow |
| `.overflow-y-visible` | `overflow-y: visible;` | Vertical visible overflow |
| `.overflow-y-scroll` | `overflow-y: scroll;` | Vertical scroll overflow |

### Example Usage

```html
<!-- Container with auto scrollbars when content overflows -->
<div class="overflow-auto" style="height: 200px;">
  <!-- Long content here -->
</div>

<!-- Container that clips overflow content -->
<div class="overflow-hidden" style="height: 200px;">
  <!-- Long content here -->
</div>

<!-- Horizontal scrolling only -->
<div class="overflow-x-auto overflow-y-hidden" style="width: 200px;">
  <!-- Wide content here -->
</div>
```

## Accessibility

Utility classes for screen reader accessibility:

| Class | Description |
|-------|-------------|
| `.sr-only` | Visually hides content but keeps it accessible to screen readers |
| `.not-sr-only` | Reverses the `.sr-only` effect |

### Example Usage

```html
<!-- Visually hidden but accessible to screen readers -->
<span class="sr-only">Additional information for screen readers</span>

<!-- Button with a visually hidden label -->
<button>
  <span class="sr-only">Close dialog</span>
  <svg><!-- X icon --></svg>
</button>
```

## Responsive Variants

All display utilities can be combined with responsive breakpoints to apply different display properties at different screen sizes. The available breakpoints are:

- `sm`: Small screens (≥576px)
- `md`: Medium screens (≥768px)
- `lg`: Large screens (≥992px)
- `xl`: Extra large screens (≥1200px)
- `2xl`: Extra extra large screens (≥1400px)

Example of responsive classes:

```html
<!-- Block on mobile, flex on medium screens and up -->
<div class="block md:flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Hidden on small screens, visible on medium screens and up -->
<div class="hidden md:block">Only visible on medium screens and up</div>

<!-- Grid on all screens, but changes to flex on large screens -->
<div class="grid lg:flex">
  <!-- Content -->
</div>
```

## Best Practices

1. **Use display utilities for layout changes** - These utilities are perfect for changing how elements are rendered based on screen size or state.

2. **Combine with other utilities** - Display utilities work well when combined with other utilities like spacing, flex, or grid utilities.

3. **Favor flexbox and grid for complex layouts** - For more complex layouts, use the dedicated [Flexbox](/api/layout/flexbox) and [Grid](/api/layout/grid) utilities.

4. **Use `.sr-only` for accessibility** - Always use `.sr-only` for content that should be available to screen readers but hidden visually.

5. **Consider document flow** - Be mindful of how `.hidden` removes elements from the flow, while `.invisible` preserves their space.

## Browser Compatibility

The display utilities are supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Display Properties | 1+ | 1+ | 1+ | 12+ |
| Flexbox | 29+ | 28+ | 9+ | 12+ |
| Grid | 57+ | 52+ | 10.1+ | 16+ |
| Position Sticky | 56+ | 32+ | 13+ | 16+ |

For older browsers, some properties may require vendor prefixes or fallbacks, which are automatically included in the library. 
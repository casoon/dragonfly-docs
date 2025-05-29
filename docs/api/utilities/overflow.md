---
title: Overflow Utilities
category: API
outline: deep
---

# Overflow Utilities

The Casoon UI Library provides a comprehensive set of utility classes for controlling how content overflows its container. These utilities allow you to manage content that is too large for its container, controlling whether it should be visible, hidden, or scrollable.

## Basic Overflow Controls

Control how content overflows in both directions (horizontal and vertical):

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.overflow-auto` | `overflow: auto;` | Adds scrollbars only when content overflows |
| `.overflow-hidden` | `overflow: hidden;` | Clips any content that overflows the container |
| `.overflow-visible` | `overflow: visible;` | Content can overflow and be visible outside the container |
| `.overflow-scroll` | `overflow: scroll;` | Always shows scrollbars, even when content doesn't overflow |

### Example Usage

```html
<!-- Only show scrollbars when needed -->
<div class="overflow-auto h-200">
  <p>Long content that may require scrolling...</p>
</div>

<!-- Hide any content that overflows -->
<div class="overflow-hidden h-200">
  <p>Content that will be clipped if it overflows...</p>
</div>

<!-- Allow content to be visible outside container bounds -->
<div class="overflow-visible h-200">
  <p>Content that will remain visible even outside the container...</p>
</div>

<!-- Always show scrollbars -->
<div class="overflow-scroll h-200">
  <p>Content with permanent scrollbars...</p>
</div>
```

## Directional Overflow Controls

Control overflow separately for horizontal and vertical directions:

### Horizontal Overflow

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.overflow-x-auto` | `overflow-x: auto;` | Adds horizontal scrollbar only when needed |
| `.overflow-x-hidden` | `overflow-x: hidden;` | Clips content that overflows horizontally |
| `.overflow-x-visible` | `overflow-x: visible;` | Allows horizontal overflow to be visible |
| `.overflow-x-scroll` | `overflow-x: scroll;` | Always shows horizontal scrollbar |

### Vertical Overflow

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.overflow-y-auto` | `overflow-y: auto;` | Adds vertical scrollbar only when needed |
| `.overflow-y-hidden` | `overflow-y: hidden;` | Clips content that overflows vertically |
| `.overflow-y-visible` | `overflow-y: visible;` | Allows vertical overflow to be visible |
| `.overflow-y-scroll` | `overflow-y: scroll;` | Always shows vertical scrollbar |

### Example Usage

```html
<!-- Only horizontal scrolling, vertical content is clipped -->
<div class="overflow-x-auto overflow-y-hidden h-200">
  <div class="w-500">Wide content that scrolls horizontally...</div>
</div>

<!-- Only vertical scrolling, horizontal content is clipped -->
<div class="overflow-x-hidden overflow-y-auto h-200">
  <p>Tall content that scrolls vertically but clips horizontally...</p>
</div>

<!-- Custom scrollbar combination -->
<div class="overflow-x-scroll overflow-y-auto h-200">
  <div class="w-500">
    <p>Content with always-visible horizontal scrollbar but vertical scrollbar only when needed...</p>
  </div>
</div>
```

## Combined with Size Utilities

Overflow utilities are most effective when combined with size constraints:

```html
<!-- Fixed height container with auto scrolling -->
<div class="h-300 overflow-auto">
  <p>Content in a container with fixed height and automatic scrollbars...</p>
</div>

<!-- Maximum width container with horizontal scrolling -->
<div class="max-w-400 overflow-x-auto">
  <div class="w-800">
    <p>Wide content in a width-limited container with horizontal scrolling...</p>
  </div>
</div>

<!-- Fixed size container with specific overflow behaviors -->
<div class="w-300 h-200 overflow-y-auto overflow-x-hidden">
  <div class="w-500">
    <p>Content in a container with fixed width and height, vertical scrolling but horizontal clipping...</p>
  </div>
</div>
```

## Scroll Behavior

Control how scrolling behaves in overflow containers:

```html
<!-- Smooth scrolling container -->
<div class="h-300 overflow-auto scroll-smooth">
  <div id="section1">Section 1</div>
  <div id="section2">Section 2</div>
  <div id="section3">Section 3</div>
  
  <a href="#section3">Jump to Section 3</a>
</div>
```

The `.scroll-smooth` class applies `scroll-behavior: smooth;` to enable smooth scrolling animations when navigating within the container.

## Scrollbar Styling

Control the appearance of scrollbars in overflow containers:

```html
<!-- Custom scrollbar styling -->
<div class="h-300 overflow-auto scrollbar-thin scrollbar-thumb-rounded">
  <p>Content with custom scrollbar styling...</p>
</div>
```

The Casoon UI Library provides scrollbar styling utilities:
- `.scrollbar-thin` - Thinner scrollbars
- `.scrollbar-none` - Hide scrollbars while maintaining functionality
- `.scrollbar-thumb-rounded` - Rounded scrollbar thumb
- `.scrollbar-track-transparent` - Transparent scrollbar track

## Overflow Ellipsis for Text

Control text overflow with ellipsis:

```html
<!-- Single line text truncation with ellipsis -->
<div class="overflow-hidden text-ellipsis whitespace-nowrap">
  This text will be truncated with an ellipsis if it's too long for its container...
</div>

<!-- Multi-line text truncation with ellipsis (line clamp) -->
<div class="overflow-hidden text-ellipsis line-clamp-2">
  This text will be truncated after 2 lines with an ellipsis at the end if it's too long...
</div>
```

## Responsive Overflow

All overflow utilities can be combined with responsive breakpoints:

```html
<!-- Different overflow behavior at different screen sizes -->
<div class="overflow-hidden md:overflow-auto lg:overflow-visible">
  Content with responsive overflow behavior: hidden on mobile, auto on tablets, visible on desktop.
</div>

<!-- Direction-specific responsive overflow -->
<div class="overflow-auto md:overflow-x-hidden md:overflow-y-auto">
  Content with responsive overflow: both directions auto on mobile, only vertical scrolling on tablets and up.
</div>
```

Available breakpoints:
- `sm`: Small screens (≥576px)
- `md`: Medium screens (≥768px)
- `lg`: Large screens (≥992px)
- `xl`: Extra large screens (≥1200px)
- `2xl`: Extra extra large screens (≥1400px)

## Common Use Cases

### Code Block with Horizontal Scrolling

```html
<pre class="overflow-x-auto">
  <code>
    // Very long line of code that should scroll horizontally instead of wrapping...
  </code>
</pre>
```

### Image Gallery with Horizontal Scrolling

```html
<div class="overflow-x-auto overflow-y-hidden">
  <div class="flex gap-4 p-4">
    <img src="image1.jpg" alt="Gallery image 1" class="w-300 h-200">
    <img src="image2.jpg" alt="Gallery image 2" class="w-300 h-200">
    <img src="image3.jpg" alt="Gallery image 3" class="w-300 h-200">
    <img src="image4.jpg" alt="Gallery image 4" class="w-300 h-200">
    <img src="image5.jpg" alt="Gallery image 5" class="w-300 h-200">
  </div>
</div>
```

### Content Card with Fixed Height

```html
<div class="h-400 overflow-hidden">
  <img src="card-image.jpg" alt="Card image" class="w-full h-200">
  <div class="p-4">
    <h3>Card Title</h3>
    <p class="overflow-hidden text-ellipsis line-clamp-3">
      Card content that will be truncated after 3 lines if it's too long...
    </p>
  </div>
</div>
```

### Sticky Header with Scrollable Content

```html
<div class="h-screen flex flex-col">
  <header class="h-navbar">Fixed Header</header>
  <main class="overflow-auto">
    <!-- Scrollable content area -->
    <div class="p-4">
      <p>Scrollable content...</p>
    </div>
  </main>
</div>
```

## Best Practices

1. **Choose the right overflow type** - Use `auto` for most cases to only show scrollbars when needed.

2. **Consider mobile users** - Remember that scrollbars can be harder to use on touch devices.

3. **Combine with size constraints** - Overflow only works when there are size constraints on the container.

4. **Be careful with hidden overflow** - Hidden overflow can make content inaccessible if not used carefully.

5. **Use directional overflow when needed** - Control horizontal and vertical overflow separately for more precise control.

6. **Consider scrollbar styling** - Custom scrollbar styling can improve the user experience.

7. **Test on different devices** - Overflow behavior and scrollbar appearance can vary by device and browser.

## Browser Compatibility

The overflow utilities are supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Overflow Properties | 1+ | 1+ | 1+ | 12+ |
| Scrollbar Styling | 88+ | 64+ | 15.4+ | 88+ |
| Scroll Behavior | 61+ | 36+ | 15.4+ | 79+ |
| Line Clamp | 85+ | 68+ | 14+ | 85+ |

For browsers that don't support certain features, the library provides fallbacks when possible. 
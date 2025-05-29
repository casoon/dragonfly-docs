---
title: Size Utilities
category: API
outline: deep
---

# Size Utilities

The Casoon UI Library provides a comprehensive set of utility classes for controlling the width, height, minimum and maximum dimensions, and aspect ratios of elements. These utilities follow a consistent naming pattern and cover various unit types.

## Width Utilities

### Viewport Width

Control width using viewport units:

```html
<div class="w-screen">100% of viewport width</div>
<div class="w-75vw">75% of viewport width</div>
<div class="w-50vw">50% of viewport width</div>
<div class="w-33vw">33.333% of viewport width</div>
<div class="w-25vw">25% of viewport width</div>
```

### Advanced Viewport Units

The library also supports modern viewport units for better mobile handling:

```html
<!-- Small Viewport Units (adjusts for mobile address bars) -->
<div class="w-100sv">100% of small viewport width</div>
<div class="w-50sv">50% of small viewport width</div>

<!-- Large Viewport Units (largest possible viewport) -->
<div class="w-100lv">100% of large viewport width</div>
<div class="w-50lv">50% of large viewport width</div>

<!-- Dynamic Viewport Units (adapts to browser UI changes) -->
<div class="w-100dv">100% of dynamic viewport width</div>
<div class="w-50dv">50% of dynamic viewport width</div>
```

### Percentage Width

Control width using percentage values:

```html
<div class="w-full">100% width</div>
<div class="w-half">50% width</div>
<div class="w-1/2">50% width (alternative)</div>
<div class="w-1/3">33.333% width</div>
<div class="w-2/3">66.667% width</div>
<div class="w-1/4">25% width</div>
<div class="w-3/4">75% width</div>
<div class="w-1/5">20% width</div>
<div class="w-2/5">40% width</div>
<div class="w-3/5">60% width</div>
<div class="w-4/5">80% width</div>
<div class="w-1/6">16.667% width</div>
<div class="w-5/6">83.333% width</div>
```

### Fixed Width

Set specific pixel widths:

```html
<div class="w-0">0px width</div>
<div class="w-px">1px width</div>
<div class="w-auto">Auto width</div>
<div class="w-fit">Fit-content width</div>
<div class="w-max">Max-content width</div>
<div class="w-min">Min-content width</div>
```

### Predefined Pixel Widths

Apply common pixel-based widths:

```html
<div class="w-50">50px width</div>
<div class="w-100">100px width</div>
<div class="w-200">200px width</div>
<div class="w-300">300px width</div>
<div class="w-400">400px width</div>
<div class="w-500">500px width</div>
<!-- Additional predefined widths: 150px, 250px, 350px, 450px, 600px, 700px, 800px, 900px, 1000px -->
```

### Container-Based Widths

Match the library's container system widths:

```html
<div class="w-container">Standard container width (1200px max)</div>
<div class="w-container-sm">Small container width (640px max)</div>
<div class="w-container-md">Medium container width (768px max)</div>
<div class="w-container-lg">Large container width (1024px max)</div>
<div class="w-container-xl">Extra large container width (1280px max)</div>
```

## Height Utilities

### Viewport Height

Control height using viewport units:

```html
<div class="h-screen">100% of viewport height</div>
<div class="h-75vh">75% of viewport height</div>
<div class="h-50vh">50% of viewport height</div>
<div class="h-33vh">33.333% of viewport height</div>
<div class="h-25vh">25% of viewport height</div>
```

### Advanced Viewport Units

Modern viewport height units for better mobile handling:

```html
<!-- Small Viewport Units (adjusts for mobile address bars) -->
<div class="h-100sv">100% of small viewport height</div>
<div class="h-50sv">50% of small viewport height</div>

<!-- Large Viewport Units (largest possible viewport) -->
<div class="h-100lv">100% of large viewport height</div>
<div class="h-50lv">50% of large viewport height</div>

<!-- Dynamic Viewport Units (adapts to browser UI changes) -->
<div class="h-100dv">100% of dynamic viewport height</div>
<div class="h-50dv">50% of dynamic viewport height</div>
```

### Percentage Height

Control height using percentage values:

```html
<div class="h-full">100% height</div>
<div class="h-half">50% height</div>
<div class="h-1/2">50% height (alternative)</div>
<div class="h-1/3">33.333% height</div>
<div class="h-2/3">66.667% height</div>
<div class="h-1/4">25% height</div>
<div class="h-3/4">75% height</div>
<!-- Additional fractions: 1/5, 2/5, 3/5, 4/5, 1/6, 5/6 -->
```

### Fixed Height

Set specific pixel heights:

```html
<div class="h-0">0px height</div>
<div class="h-px">1px height</div>
<div class="h-auto">Auto height</div>
<div class="h-fit">Fit-content height</div>
<div class="h-max">Max-content height</div>
<div class="h-min">Min-content height</div>
```

### Predefined Pixel Heights

Apply common pixel-based heights:

```html
<div class="h-50">50px height</div>
<div class="h-100">100px height</div>
<div class="h-200">200px height</div>
<div class="h-300">300px height</div>
<div class="h-400">400px height</div>
<!-- Additional predefined heights: 150px, 250px, 350px, 450px, 500px, 600px, 700px, 800px -->
```

### Special Layout Heights

Height values for common UI elements:

```html
<div class="h-footer">Footer height (var(--footer-height, 60px))</div>
<div class="h-navbar">Navbar height (var(--navbar-height, 60px))</div>
```

## Min/Max Width

Control the minimum and maximum width of elements:

### Min Width

```html
<div class="min-w-0">Minimum width of 0</div>
<div class="min-w-full">Minimum width of 100%</div>
<div class="min-w-200">Minimum width of 200px</div>
<div class="min-w-300">Minimum width of 300px</div>
<div class="min-w-400">Minimum width of 400px</div>
<div class="min-w-500">Minimum width of 500px</div>
```

### Max Width

```html
<div class="max-w-full">Maximum width of 100%</div>
<div class="max-w-screen">Maximum width of 100vw</div>
<div class="max-w-none">No maximum width</div>
<div class="max-w-200">Maximum width of 200px</div>
<div class="max-w-300">Maximum width of 300px</div>
<div class="max-w-400">Maximum width of 400px</div>
<div class="max-w-500">Maximum width of 500px</div>
<div class="max-w-600">Maximum width of 600px</div>
<div class="max-w-700">Maximum width of 700px</div>
<div class="max-w-800">Maximum width of 800px</div>
<div class="max-w-1000">Maximum width of 1000px</div>
<div class="max-w-1200">Maximum width of 1200px</div>
```

## Min/Max Height

Control the minimum and maximum height of elements:

### Min Height

```html
<div class="min-h-0">Minimum height of 0</div>
<div class="min-h-full">Minimum height of 100%</div>
<div class="min-h-screen">Minimum height of 100vh</div>
<div class="min-h-100">Minimum height of 100px</div>
<div class="min-h-200">Minimum height of 200px</div>
<div class="min-h-300">Minimum height of 300px</div>
<div class="min-h-400">Minimum height of 400px</div>
<div class="min-h-500">Minimum height of 500px</div>
```

### Max Height

```html
<div class="max-h-full">Maximum height of 100%</div>
<div class="max-h-screen">Maximum height of 100vh</div>
<div class="max-h-none">No maximum height</div>
<div class="max-h-100">Maximum height of 100px</div>
<div class="max-h-200">Maximum height of 200px</div>
<div class="max-h-300">Maximum height of 300px</div>
<div class="max-h-400">Maximum height of 400px</div>
<div class="max-h-500">Maximum height of 500px</div>
<div class="max-h-600">Maximum height of 600px</div>
```

## Aspect Ratio

Control the aspect ratio of elements:

```html
<div class="aspect-auto">Automatic aspect ratio</div>
<div class="aspect-square">1:1 aspect ratio</div>
<div class="aspect-video">16:9 aspect ratio</div>
<div class="aspect-portrait">9:16 aspect ratio</div>
<div class="aspect-cinema">21:9 aspect ratio</div>
<div class="aspect-4-3">4:3 aspect ratio</div>
<div class="aspect-3-2">3:2 aspect ratio</div>
```

## Responsive Sizing

All size utilities can be combined with responsive breakpoints to apply different sizes at different screen sizes:

```html
<!-- Width changes at different breakpoints -->
<div class="w-full md:w-1/2 lg:w-1/3">
  Full width on mobile, half width on tablets, one-third width on desktop
</div>

<!-- Height changes at different breakpoints -->
<div class="h-auto md:h-screen">
  Auto height on mobile, full viewport height on tablets and up
</div>

<!-- Min/Max width changes at different breakpoints -->
<div class="max-w-full md:max-w-500 lg:max-w-800">
  Full width on mobile, max 500px on tablets, max 800px on desktop
</div>
```

Available breakpoints:
- `sm`: Small screens (≥576px)
- `md`: Medium screens (≥768px)
- `lg`: Large screens (≥992px)
- `xl`: Extra large screens (≥1200px)
- `2xl`: Extra extra large screens (≥1400px)

## Common Layout Patterns

### Full-Height App Layout

```html
<div class="h-screen flex flex-col">
  <header class="h-navbar">Header</header>
  <main class="flex-grow">Content area</main>
  <footer class="h-footer">Footer</footer>
</div>
```

### Card Grid with Consistent Heights

```html
<div class="grid grid-cols-3 gap-4">
  <div class="h-400 overflow-hidden">Card 1</div>
  <div class="h-400 overflow-hidden">Card 2</div>
  <div class="h-400 overflow-hidden">Card 3</div>
</div>
```

### Responsive Image

```html
<img src="image.jpg" class="w-full max-w-600 h-auto mx-auto" alt="Responsive image">
```

### Video with Aspect Ratio

```html
<div class="aspect-video w-full">
  <iframe src="video-url" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
</div>
```

## Best Practices

1. **Use relative units where possible** - Prefer percentage and viewport units for responsive layouts.

2. **Combine with other utilities** - Size utilities work well with flexbox, grid, and spacing utilities.

3. **Choose appropriate viewport units** - Use `sv`, `lv`, or `dv` viewport units for better mobile handling.

4. **Set both width and height for images** - To prevent layout shifts, set both dimensions or use aspect ratio.

5. **Use min/max constraints** - Instead of fixed sizes, prefer min and max constraints for more fluid layouts.

6. **Apply responsive sizing** - Adjust sizes based on screen size for optimal layouts.

7. **Use aspect-ratio for media** - Maintain proper proportions for images and videos with aspect ratio utilities.

## Browser Compatibility

The size utilities are supported in all modern browsers, with some newer features having limited support:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Size Properties | 1+ | 1+ | 1+ | 12+ |
| Viewport Units (vw/vh) | 20+ | 19+ | 6+ | 12+ |
| Modern Viewport Units (sv/lv/dv) | 108+ | 101+ | 15.4+ | 108+ |
| Aspect Ratio | 88+ | 89+ | 15+ | 88+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

For browsers that don't support modern viewport units, the library falls back to standard viewport units. 
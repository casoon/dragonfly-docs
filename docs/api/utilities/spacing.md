---
title: Spacing Utilities
category: API
outline: deep
---

# Spacing Utilities

The Casoon UI Library provides a comprehensive set of utility classes for controlling margins and padding. These atomic classes follow a consistent naming pattern and use the library's spacing scale for consistent spacing throughout your application.

## Spacing Scale

All spacing utilities are based on a consistent spacing scale defined by CSS variables:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--space-0` | `0` | No spacing |
| `--space-px` | `1px` | Single pixel spacing |
| `--space-1` | `0.25rem` (4px) | Extra small spacing |
| `--space-2` | `0.5rem` (8px) | Small spacing |
| `--space-3` | `0.75rem` (12px) | Small-medium spacing |
| `--space-4` | `1rem` (16px) | Medium spacing (base) |
| `--space-5` | `1.25rem` (20px) | Medium-large spacing |
| `--space-6` | `1.5rem` (24px) | Large spacing |
| `--space-8` | `2rem` (32px) | Extra large spacing |
| `--space-10` | `2.5rem` (40px) | 2x large spacing |
| `--space-12` | `3rem` (48px) | 3x large spacing |
| `--space-16` | `4rem` (64px) | 4x large spacing |
| `--space-20` | `5rem` (80px) | 5x large spacing |
| `--space-24` | `6rem` (96px) | 6x large spacing |
| `--space-32` | `8rem` (128px) | 8x large spacing |
| `--space-40` | `10rem` (160px) | 10x large spacing |
| `--space-48` | `12rem` (192px) | 12x large spacing |
| `--space-56` | `14rem` (224px) | 14x large spacing |
| `--space-64` | `16rem` (256px) | 16x large spacing |

## Padding Utilities

Control the padding on all sides of an element or specific sides.

### All Sides Padding

Apply padding to all sides of an element:

```html
<div class="p-0">No padding</div>
<div class="p-1">Extra small padding (0.25rem)</div>
<div class="p-2">Small padding (0.5rem)</div>
<div class="p-4">Medium padding (1rem)</div>
<div class="p-8">Large padding (2rem)</div>
```

Available classes: `.p-0`, `.p-px`, `.p-1`, `.p-2`, `.p-3`, `.p-4`, `.p-5`, `.p-6`, `.p-8`, `.p-10`, `.p-12`, `.p-16`, `.p-20`, `.p-24`, `.p-32`, `.p-40`, `.p-48`, `.p-56`, `.p-64`

### Directional Padding

Apply padding to specific sides of an element:

```html
<!-- Top padding -->
<div class="pt-4">Padding top only</div>

<!-- Right padding -->
<div class="pr-4">Padding right only</div>

<!-- Bottom padding -->
<div class="pb-4">Padding bottom only</div>

<!-- Left padding -->
<div class="pl-4">Padding left only</div>
```

Available direction prefixes:
- `pt-*`: Padding top
- `pr-*`: Padding right
- `pb-*`: Padding bottom
- `pl-*`: Padding left

Each prefix can be combined with any spacing value: `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`.

### Horizontal and Vertical Padding

Apply padding to horizontal (left and right) or vertical (top and bottom) sides:

```html
<!-- Horizontal padding (left and right) -->
<div class="px-4">Padding left and right</div>

<!-- Vertical padding (top and bottom) -->
<div class="py-4">Padding top and bottom</div>
```

Available axis prefixes:
- `px-*`: Padding left and right
- `py-*`: Padding top and bottom

Each prefix can be combined with any spacing value: `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`.

## Margin Utilities

Control the margin on all sides of an element or specific sides.

### All Sides Margin

Apply margin to all sides of an element:

```html
<div class="m-0">No margin</div>
<div class="m-1">Extra small margin (0.25rem)</div>
<div class="m-2">Small margin (0.5rem)</div>
<div class="m-4">Medium margin (1rem)</div>
<div class="m-8">Large margin (2rem)</div>
```

Available classes: `.m-0`, `.m-px`, `.m-1`, `.m-2`, `.m-3`, `.m-4`, `.m-5`, `.m-6`, `.m-8`, `.m-10`, `.m-12`, `.m-16`, `.m-20`, `.m-24`, `.m-32`, `.m-40`, `.m-48`, `.m-56`, `.m-64`

### Directional Margin

Apply margin to specific sides of an element:

```html
<!-- Top margin -->
<div class="mt-4">Margin top only</div>

<!-- Right margin -->
<div class="mr-4">Margin right only</div>

<!-- Bottom margin -->
<div class="mb-4">Margin bottom only</div>

<!-- Left margin -->
<div class="ml-4">Margin left only</div>
```

Available direction prefixes:
- `mt-*`: Margin top
- `mr-*`: Margin right
- `mb-*`: Margin bottom
- `ml-*`: Margin left

Each prefix can be combined with any spacing value: `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`.

### Horizontal and Vertical Margin

Apply margin to horizontal (left and right) or vertical (top and bottom) sides:

```html
<!-- Horizontal margin (left and right) -->
<div class="mx-4">Margin left and right</div>

<!-- Vertical margin (top and bottom) -->
<div class="my-4">Margin top and bottom</div>
```

Available axis prefixes:
- `mx-*`: Margin left and right
- `my-*`: Margin top and bottom

Each prefix can be combined with any spacing value: `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48`, `56`, `64`.

### Auto Margins

Auto margins are useful for centering elements or pushing them to one side:

```html
<!-- Center horizontally -->
<div class="mx-auto">Horizontally centered</div>

<!-- Center vertically (in a flex container) -->
<div class="my-auto">Vertically centered</div>

<!-- Push to the right (in a flex container) -->
<div class="ml-auto">Pushed to the right</div>

<!-- Push to the bottom (in a flex container) -->
<div class="mt-auto">Pushed to the bottom</div>
```

Available auto margin classes:
- `mx-auto`: Auto horizontal margin
- `my-auto`: Auto vertical margin
- `mt-auto`: Auto top margin
- `mr-auto`: Auto right margin
- `mb-auto`: Auto bottom margin
- `ml-auto`: Auto left margin

### Negative Margins

Negative margins can be used to pull elements outside their normal boundaries:

```html
<div class="m-n4">Element with negative margin</div>
<div class="mt-n2">Element with negative top margin</div>
```

Available negative margin classes: `.m-n1`, `.m-n2`, `.m-n3`, etc., with direction-specific variants (`mt-n*`, `mr-n*`, `mb-n*`, `ml-n*`, `mx-n*`, `my-n*`).

## Responsive Spacing

All spacing utilities can be combined with responsive breakpoints to apply different spacing at different screen sizes:

```html
<!-- Padding changes at different breakpoints -->
<div class="p-2 md:p-4 lg:p-8">
  Responsive padding: small on mobile, medium on tablets, large on desktop
</div>

<!-- Different margins at different breakpoints -->
<div class="mx-2 md:mx-4 lg:mx-auto">
  Responsive margin: small on mobile, medium on tablets, auto-centered on desktop
</div>
```

Available breakpoints:
- `sm`: Small screens (≥576px)
- `md`: Medium screens (≥768px)
- `lg`: Large screens (≥992px)
- `xl`: Extra large screens (≥1200px)
- `2xl`: Extra extra large screens (≥1400px)

## Logical Properties

The Casoon UI Library also supports logical properties for internationalized layouts:

```html
<!-- Logical property alternatives -->
<div class="ps-4">Padding start (left in LTR, right in RTL)</div>
<div class="pe-4">Padding end (right in LTR, left in RTL)</div>
<div class="ms-4">Margin start (left in LTR, right in RTL)</div>
<div class="me-4">Margin end (right in LTR, left in RTL)</div>
```

Available logical property prefixes:
- `ps-*`: Padding start
- `pe-*`: Padding end
- `ms-*`: Margin start
- `me-*`: Margin end

## Common Layout Patterns

### Card Component

```html
<div class="p-4 mb-4">
  <h3 class="mb-2">Card Title</h3>
  <p class="mb-4">Card content with consistent spacing</p>
  <button class="p-2">Action</button>
</div>
```

### Content Section

```html
<section class="py-8">
  <div class="mx-auto px-4">
    <h2 class="mb-6">Section Title</h2>
    <p class="mb-4">Section content with proper spacing</p>
  </div>
</section>
```

### Form Inputs

```html
<form class="p-4">
  <div class="mb-4">
    <label class="mb-1 block">Name</label>
    <input class="p-2" type="text">
  </div>
  <div class="mb-4">
    <label class="mb-1 block">Email</label>
    <input class="p-2" type="email">
  </div>
  <button class="px-4 py-2">Submit</button>
</form>
```

## Best Practices

1. **Use the spacing scale consistently** - Stick to the predefined spacing values for a cohesive look.

2. **Choose the right spacing type** - Use padding for inner spacing and margin for spacing between elements.

3. **Consider the layout context** - In flex or grid layouts, sometimes gap properties are better than margins.

4. **Be mindful of margin collapse** - Remember that vertical margins can collapse in standard flow layout.

5. **Use auto margins strategically** - Auto margins are powerful for alignment, especially in flex containers.

6. **Apply responsive spacing** - Adjust spacing based on screen size for optimal layouts.

7. **Favor padding for clickable elements** - For buttons and interactive elements, padding provides a larger hit area.

## Browser Compatibility

The spacing utilities are supported in all modern browsers:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic Spacing Properties | 1+ | 1+ | 1+ | 12+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Logical Properties | 69+ | 41+ | 12.1+ | 79+ | 
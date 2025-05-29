---
title: Skeleton Component
category: Components
---

# Skeleton Component

The Skeleton component provides loading state placeholders for content that is still being loaded. Skeleton loaders improve perceived performance and prevent layout shifts.

## Basic Usage

```html
<div class="skeleton"></div>
```

## Variants

### Text Skeleton

```html
<div class="skeleton text">Text line placeholder</div>
```

### Circle Skeleton

```html
<div class="skeleton circle">Circle placeholder</div>
```

### Rectangle Skeleton

```html
<div class="skeleton rect">Rectangle placeholder</div>
```

### Avatar Skeleton

```html
<div class="skeleton avatar">Avatar placeholder</div>
```

### Button Skeleton

```html
<div class="skeleton button">Button placeholder</div>
```

## Sizes

### Small

```html
<div class="skeleton text sm">Small skeleton</div>
```

### Medium (Default)

```html
<div class="skeleton text md">Medium skeleton</div>
```

### Large

```html
<div class="skeleton text lg">Large skeleton</div>
```

## Animation Variants

### Pulse Animation (Default)

The default animation is a subtle pulsing effect.

```html
<div class="skeleton pulse">Pulsing skeleton</div>
```

### Wave Animation

A wave animation that moves across the skeleton.

```html
<div class="skeleton wave">Wave animation skeleton</div>
```

## Layout Examples

### Card Layout

```html
<div class="skeleton-card">
  <div class="skeleton rect image"></div>
  <div class="skeleton text title"></div>
  <div class="skeleton text"></div>
  <div class="skeleton text"></div>
  <div class="skeleton text short"></div>
</div>
```

### Article Layout

```html
<div class="skeleton-article">
  <div class="skeleton text heading"></div>
  <div class="skeleton text subheading"></div>
  <div class="skeleton text"></div>
  <div class="skeleton text"></div>
  <div class="skeleton text"></div>
</div>
```

## Customization

The Skeleton component can be customized using CSS variables:

```css
:root {
  --color-gray-200: #e5e7eb;   /* Background color for skeleton */
  --radius-sm: 0.125rem;       /* Border radius for default skeleton */
  --radius-md: 0.375rem;       /* Border radius for rect and button */
}
```

## Accessibility

For better accessibility, consider the following:

- Include appropriate aria attributes to indicate loading state
- Add meaningful alt text if the skeleton is replacing an image
- Ensure the contrast between the skeleton and background meets accessibility standards
- Consider adding a "loading" or "content loading" screen reader text

## Best Practices

- Use skeleton loaders for content that takes time to load
- Match the skeleton's shape and size to the actual content it will replace
- Keep animations subtle to avoid distracting users
- Consider the user's context and provide appropriate feedback for longer loading times 
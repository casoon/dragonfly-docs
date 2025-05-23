---
title: Transition Effects
category: Effects
---

# Transition Effects

The Casoon UI Library provides a comprehensive system for transition effects that enables seamless and engaging animations between different states of UI elements.

## Incorporating Transitions

To use the transition effects, you need to explicitly import the corresponding CSS file:

```css
@import "@casoon/ui-lib/effects/transitions.css";
```

This file contains all transition effects, which are organized by the layer system in the `effects` layer.

## Basic Transitions

The library offers a series of predefined transition classes that can be applied to any element:

```html
<button class="transition-all">Animate all properties</button>
<div class="transition-opacity">Animate only transparency</div>
<a class="transition-transform">Animate only transformations</a>
```

### Available Transition Types

| Class | Description |
|--------|-------------|
| `transition-all` | Animates all changing properties |
| `transition-opacity` | Animates only transparency changes |
| `transition-transform` | Animates only transformations (scaling, rotation, translation) |
| `transition-colors` | Animates only color changes |
| `transition-shadow` | Animates only shadow changes |
| `transition-size` | Animates only size changes (width and height) |

## Adjusting Transition Duration

The duration of transitions can be controlled with additional classes:

```html
<button class="transition-all duration-300">Standard (300ms)</button>
<button class="transition-all duration-150">Fast (150ms)</button>
<button class="transition-all duration-500">Slow (500ms)</button>
<button class="transition-all duration-1000">Very slow (1000ms)</button>
```

## Timing Functions

The timing behavior of transitions can also be customized:

```html
<div class="transition-all ease-linear">Linear</div>
<div class="transition-all ease-in">Ease-In (start slowly)</div>
<div class="transition-all ease-out">Ease-Out (end slowly)</div>
<div class="transition-all ease-in-out">Ease-In-Out (start and end slowly)</div>
<div class="transition-all ease-bounce">Bounce effect</div>
```

## Delaying Transitions

For staggered animations, delays can be used:

```html
<div class="transition-all delay-0">No delay</div>
<div class="transition-all delay-150">Short delay (150ms)</div>
<div class="transition-all delay-300">Medium delay (300ms)</div>
<div class="transition-all delay-500">Long delay (500ms)</div>
```

## Practical Application Examples

### Hover Effect with Transition

```html
<button class="bg-primary text-white px-4 py-2 transition-all hover:bg-primary-dark hover:scale-105">
  Hovering Button
</button>
```

### Accordion Element with Animation

```html
<div class="border rounded-md overflow-hidden">
  <button class="w-full p-4 text-left border-b flex justify-between items-center transition-all" 
          onclick="this.nextElementSibling.classList.toggle('hidden'); this.classList.toggle('bg-light');">
    Accordion Title
    <span class="transition-transform duration-300" 
          style="transform: rotate(0deg)">↓</span>
  </button>
  <div class="p-4 hidden transition-all duration-300">
    Accordion content that shows and hides.
  </div>
</div>
```

### Staggered List Animation

```html
<ul class="space-y-2">
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-0">
    Item 1
  </li>
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-150">
    Item 2
  </li>
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-300">
    Item 3
  </li>
</ul>
<script>
  // Fade in the elements after the page loads
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('li').forEach(item => {
      item.classList.remove('opacity-0', 'translate-y-4');
    });
  });
</script>
```

## Combinations with Other Effects

The transition effects can be seamlessly combined with other effects from the Casoon UI Library:

```html
<!-- Combination with hover effects -->
<div class="transition-all duration-300 hover:scale-105 hover:shadow-lg">
  This element responds smoothly to hover
</div>

<!-- Combination with focus effects -->
<input class="transition-all duration-200 focus:ring-2 focus:ring-primary">

<!-- Combination with state effects -->
<button class="transition-colors duration-300 active:bg-primary-dark">
  Color transition on activation
</button>
```

## Best Practices

1. **Moderate use** - Too many animations can be distracting and impact the user experience.
2. **Consistent duration** - Use similar transition times for similar actions to create a coherent experience.
3. **Consider accessibility** - Provide alternatives for users who prefer reduced motion with the `prefers-reduced-motion` media query.
4. **Keep performance in mind** - Preferably animate `transform` and `opacity`, which are GPU-accelerated and perform better than other properties.

## Supporting Reduced Motion

The library automatically considers system settings for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .transition-all, 
  .transition-opacity,
  .transition-transform,
  .transition-colors,
  .transition-shadow,
  .transition-size {
    transition-duration: 0.01ms !important;
    transition-property: none !important;
  }
}
```

This setting respects user preferences and disables transitions for people who are sensitive to motion or have enabled accessibility settings. 
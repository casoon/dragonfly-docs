---
title: Visual Effects Compatibility
category: Compatibility
outline: deep
---

# Visual Effects Compatibility

This page details the browser compatibility of visual effects in the Casoon UI Library, including shadows, filters, gradients, animations, and transformations.

## Shadow Effects

Shadow effects are used throughout the UI for elevation, depth, and visual hierarchy.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| `box-shadow` (basic) | 10+ | 4+ | 5.1+ | 12+ | 5+ | 18+ |
| Multiple box-shadows | 10+ | 4+ | 5.1+ | 12+ | 5+ | 18+ |
| Inset shadows | 10+ | 4+ | 5.1+ | 12+ | 5+ | 18+ |
| `text-shadow` | 2+ | 3.5+ | 4+ | 12+ | 4.2+ | 18+ |
| Shadow animations | 43+ | 16+ | 9+ | 12+ | 9+ | 43+ |

### Fallback Strategy

Box-shadow is well-supported, but for browsers without support:

```css
/* Fallback using border */
.element {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Modern browsers */
.element {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Filter Effects

CSS filters create visual effects like blur, grayscale, and brightness adjustments.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Basic filters (blur, grayscale, etc.) | 18+ | 35+ | 6+ | 12+ | 6+ | 18+ |
| `backdrop-filter` | 76+ | 103+ | 9+ | 17+ | 9+ | 76+ |
| Filter animations | 43+ | 35+ | 9+ | 12+ | 9+ | 43+ |
| Multiple filters | 18+ | 35+ | 6+ | 12+ | 6+ | 18+ |

### Fallback Strategy

For browsers without filter support, use simplified styles:

```css
/* Fallback without blur */
.frosted-glass {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Modern browsers with backdrop-filter */
.frosted-glass {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}
```

## Gradient Effects

Gradients add depth, visual interest, and can create complex visual effects.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Linear gradients | 26+ | 16+ | 6.1+ | 12+ | 6+ | 26+ |
| Radial gradients | 26+ | 16+ | 6.1+ | 12+ | 6+ | 26+ |
| Conic gradients | 69+ | 83+ | 12.1+ | 79+ | 12.2+ | 69+ |
| Repeating gradients | 26+ | 16+ | 6.1+ | 12+ | 6+ | 26+ |
| Multiple background gradients | 26+ | 16+ | 6.1+ | 12+ | 6+ | 26+ |
| Gradient animations | Not directly animatable | Not directly animatable | Not directly animatable | Not directly animatable | Not directly animatable | Not directly animatable |

### Fallback Strategy

For gradients, provide solid color fallbacks:

```css
/* Solid color fallback */
.element {
  background-color: #8a62d3;
  /* Modern browsers */
  background-image: linear-gradient(to right, #4a00e0, #8e2de2);
}
```

For conic gradients, consider using PNG fallbacks or simpler gradient types.

## Blend Modes

Blend modes control how elements blend with backgrounds and other elements.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| `background-blend-mode` | 35+ | 30+ | 8+ | 79+ | 8+ | 35+ |
| `mix-blend-mode` | 41+ | 32+ | 8+ | 79+ | 8+ | 41+ |
| Isolation | 41+ | 36+ | 8+ | 79+ | 8+ | 41+ |

### Fallback Strategy

For blend modes, design with graceful degradation in mind:

```css
/* Base style without blend modes */
.overlay {
  background-color: rgba(0, 0, 255, 0.5);
}

/* Enhanced with blend modes */
@supports (mix-blend-mode: overlay) {
  .overlay {
    background-color: blue;
    mix-blend-mode: overlay;
  }
}
```

## Transformations

Transformations allow rotating, scaling, skewing, and positioning elements in 2D and 3D space.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| 2D transforms | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |
| 3D transforms | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |
| `transform-origin` | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |
| `backface-visibility` | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |
| `perspective` | 36+ | 16+ | 9+ | 12+ | 12+ | 36+ |
| Multiple transforms | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |
| `transform-style: preserve-3d` | 36+ | 16+ | 9+ | 12+ | 9+ | 36+ |

### Fallback Strategy

For transforms, design with progressive enhancement:

```css
/* Positioned normally */
.card {
  margin-top: 20px;
}

/* Enhanced with transforms */
@supports (transform: rotateY(20deg)) {
  .card {
    margin-top: 0;
    transform: rotateY(20deg);
  }
}
```

## Clipping and Masking

Clipping and masking allow precise control over the visible portions of elements.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| `clip-path` (basic shapes) | 55+ | 54+ | 11+ | 79+ | 11+ | 55+ |
| `clip-path` (with SVG) | 55+ | 54+ | 11+ | 79+ | 11+ | 55+ |
| CSS Masks (with alpha) | 57+ | 53+ | 4+ | 79+ | 4+ | 57+ |
| CSS Masks (with images) | 57+ | 53+ | 4+ | 79+ | 4+ | 57+ |

### Fallback Strategy

For clip-path and masks, use feature detection and provide alternatives:

```css
/* Regular rectangular element */
.shape {
  border-radius: 8px;
}

/* Enhanced with clip-path */
@supports (clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)) {
  .shape {
    border-radius: 0; /* Remove once using clip-path */
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
}
```

## Special Effects

Various specialized visual effects for creating unique UI elements.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Glassmorphism (combination of effects) | 76+ | 103+ | 9+ | 17+ | 9+ | 76+ |
| Neumorphism (combination of shadows) | 10+ | 4+ | 5.1+ | 12+ | 5+ | 18+ |
| Gradient text | 26+ | 16+ | 6.1+ | 12+ | 6+ | 26+ |
| Text stroke (`-webkit-text-stroke`) | 4+ | Partial | 3+ | 79+ | 3+ | 4+ |
| SVG effects | 4+ | 3+ | 3.2+ | 12+ | 3.2+ | 3+ |

### Fallback Strategy

For specialized effects, build with layers of progressive enhancement:

```css
/* Base styles everyone gets */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Enhanced for backdrop-filter support */
@supports (backdrop-filter: blur(10px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
  }
}
```

## Animation Effects

Animations bring UI elements to life with movement and transitions.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| CSS Transitions | 26+ | 16+ | 9+ | 12+ | 9+ | 26+ |
| CSS Animations (keyframes) | 43+ | 16+ | 9+ | 12+ | 9+ | 43+ |
| Animation of transforms | 43+ | 16+ | 9+ | 12+ | 9+ | 43+ |
| Animation of opacity | 43+ | 16+ | 9+ | 12+ | 9+ | 43+ |
| Animation of filters | 43+ | 16+ | 9+ | 12+ | 9+ | 43+ |
| Web Animations API | 39+ | 48+ | 13.1+ | 79+ | 13.4+ | 39+ |

### Fallback Strategy

For animations, implement with user preferences in mind:

```css
/* Static styling */
.button {
  background-color: blue;
}

/* Enhanced with transitions */
@media (prefers-reduced-motion: no-preference) {
  .button {
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: darkblue;
  }
}
```

## Scrolling Effects

Effects that enhance the scrolling experience or are triggered by scrolling.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Smooth scrolling (CSS) | 61+ | 36+ | 14+ | 79+ | 14+ | 61+ |
| Scroll snap | 69+ | 68+ | 11+ | 79+ | 11+ | 69+ |
| Sticky positioning | 56+ | 32+ | 6.1+ | 16+ | 6.1+ | 56+ |
| Scroll-linked animations | 89+ (with JS) | 75+ (with JS) | 13.1+ (with JS) | 89+ (with JS) | 13.1+ (with JS) | 89+ (with JS) |

### Fallback Strategy

For scroll-related features, consider JavaScript polyfills and progressive enhancement:

```css
/* Basic positioning */
.section-header {
  position: relative;
  top: 0;
}

/* Enhanced with sticky positioning */
@supports (position: sticky) {
  .section-header {
    position: sticky;
    top: 0;
  }
}
```

## Responsive Design Effects

Features that enable responsive design and conditional effects.

| Feature | Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
|---------|--------|---------|--------|------|------------|----------------|
| Media Queries | 21+ | 3.5+ | 4+ | 12+ | 3.2+ | 2.1+ |
| Container Queries | 105+ | 110+ | 16+ | 105+ | 16+ | 105+ |
| Feature Queries (`@supports`) | 28+ | 22+ | 9+ | 12+ | 9+ | 28+ |
| Preference Queries (dark mode, etc.) | 76+ | 67+ | 12.1+ | 79+ | 13+ | 76+ |

### Fallback Strategy

Use feature detection and progressive enhancement:

```css
/* Base styles for all browsers */
.card {
  width: 100%;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}

/* Container query for advanced layouts */
@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .card {
      display: flex;
    }
  }
}
```

## Conclusion

Visual effects in the Casoon UI Library are designed with progressive enhancement in mind. Modern browsers will receive the full enhanced experience, while older browsers will receive a simplified but still functional version.

When implementing these effects, consider:

1. Use feature queries (`@supports`) for effects with limited compatibility
2. Respect user preferences with `prefers-reduced-motion` for animations
3. Test in a representative sample of your user base's browsers
4. Consider providing polyfills for critical effects in older browsers

For more information on implementing specific effects, see the [Effects documentation](/effects/) and the [Fallback Strategies](/compatibility/fallbacks) page. 
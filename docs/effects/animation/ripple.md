# Ripple Effects

Ripple effects are wave-like animations that originate from a point and spread out in a circular pattern. The `@casoon/ui-lib` offers various ripple effects that help create interactive and appealing user interfaces.

## Basic Usage

The basic ripple effect can be applied to any element:

```html
<button class="ripple">Click me</button>
```

## CSS Classes

The following CSS classes are available for ripple effects:

| Class | Description |
|--------|-------------|
| `.ripple` | Base class for ripple effects |
| `.ripple-light` | Light ripple effect |
| `.ripple-dark` | Dark ripple effect |
| `.ripple-primary` | Ripple effect in primary color |
| `.ripple-secondary` | Ripple effect in secondary color |
| `.ripple-accent` | Ripple effect in accent color |
| `.ripple-success` | Ripple effect in success color |
| `.ripple-warning` | Ripple effect in warning color |
| `.ripple-error` | Ripple effect in error color |
| `.ripple-info` | Ripple effect in info color |
| `.ripple-center` | Centered ripple effect |
| `.ripple-unbounded` | Unbounded ripple effect |
| `.ripple-fixed` | Fixed ripple effect |
| `.ripple-persistent` | Persistent ripple effect |
| `.ripple-slow` | Slow ripple effect |
| `.ripple-fast` | Fast ripple effect |

## Variants

### Color Variants

Ripple effects in different colors:

```html
<button class="ripple-light">Light ripple</button>
<button class="ripple-dark">Dark ripple</button>
<button class="ripple-primary">Primary color ripple</button>
<button class="ripple-secondary">Secondary color ripple</button>
<button class="ripple-accent">Accent color ripple</button>
<button class="ripple-success">Success ripple</button>
<button class="ripple-warning">Warning ripple</button>
<button class="ripple-error">Error ripple</button>
<button class="ripple-info">Info ripple</button>
```

### Positioning Variants

Various positionings for ripple effects:

```html
<button class="ripple-center">Centered ripple</button>
<div class="ripple-unbounded">Unbounded ripple</div>
<div class="ripple-fixed">Fixed ripple</div>
```

### Behavior Variants

Various behaviors for ripple effects:

```html
<button class="ripple-persistent">Persistent ripple</button>
<button class="ripple-slow">Slow ripple</button>
<button class="ripple-fast">Fast ripple</button>
```

### Special Effects

Special ripple effects for particular use cases:

```html
<button class="ripple-multiple">Multiple ripple</button>
<button class="ripple-pulse">Pulsating ripple</button>
<button class="ripple-gradient">Gradient ripple</button>
<button class="ripple-radial">Radial ripple</button>
<button class="ripple-concentric">Concentric ripple</button>
```

## Combination with Other Elements

Ripple effects can be combined with various UI elements:

### Buttons with Ripple Effect

```html
<button class="btn btn-primary ripple">Primary button with ripple</button>
<button class="btn btn-secondary ripple-light">Secondary button with light ripple</button>
<button class="btn btn-accent ripple-dark">Accent button with dark ripple</button>
```

### Cards with Ripple Effect

```html
<div class="card ripple">
  <div class="card-body">
    <h3>Card with ripple effect</h3>
    <p>Click anywhere on the card to see the ripple effect.</p>
  </div>
</div>
```

### Lists with Ripple Effect

```html
<ul class="list">
  <li class="list-item ripple">List item with ripple</li>
  <li class="list-item ripple">List item with ripple</li>
  <li class="list-item ripple">List item with ripple</li>
</ul>
```

### Navigation Links with Ripple Effect

```html
<nav class="navbar">
  <a href="#" class="nav-link ripple">Home</a>
  <a href="#" class="nav-link ripple">About us</a>
  <a href="#" class="nav-link ripple">Contact</a>
</nav>
```

### Tabs with Ripple Effect

```html
<div class="tabs">
  <button class="tab-button active ripple">Tab 1</button>
  <button class="tab-button ripple">Tab 2</button>
  <button class="tab-button ripple">Tab 3</button>
</div>
```

## Customization

The ripple effects can be customized using CSS variables:

```css
:root {
  /* General ripple parameters */
  --ripple-color: rgba(0, 0, 0, 0.1);
  --ripple-duration: 0.6s;
  --ripple-timing-function: ease-out;
  
  /* Color variants */
  --ripple-light-color: rgba(255, 255, 255, 0.3);
  --ripple-dark-color: rgba(0, 0, 0, 0.2);
  --ripple-primary-color: rgba(var(--color-primary-rgb), 0.2);
  --ripple-secondary-color: rgba(var(--color-secondary-rgb), 0.2);
  --ripple-accent-color: rgba(var(--color-accent-rgb), 0.2);
  --ripple-success-color: rgba(var(--color-success-rgb), 0.2);
  --ripple-warning-color: rgba(var(--color-warning-rgb), 0.2);
  --ripple-error-color: rgba(var(--color-error-rgb), 0.2);
  --ripple-info-color: rgba(var(--color-info-rgb), 0.2);
  
  /* Speed variants */
  --ripple-slow-duration: 1s;
  --ripple-fast-duration: 0.3s;
  
  /* Size parameters */
  --ripple-scale: 4;
  --ripple-initial-scale: 0.2;
  --ripple-opacity-start: 0.5;
  --ripple-opacity-end: 0;
}

/* Dark theme */
.dark-theme {
  --ripple-color: rgba(255, 255, 255, 0.15);
  --ripple-light-color: rgba(255, 255, 255, 0.2);
  --ripple-dark-color: rgba(0, 0, 0, 0.4);
}
```

## CSS Implementation

Examples for the CSS implementation of ripple effects:

```css
/* Base ripple */
.ripple {
  position: relative;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.ripple::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: var(--ripple-color);
  opacity: var(--ripple-opacity-start);
  transform: scale(var(--ripple-initial-scale));
  pointer-events: none;
}

.ripple.ripple-active::after {
  animation: ripple var(--ripple-duration) var(--ripple-timing-function) forwards;
}

@keyframes ripple {
  to {
    width: 250%; /* Dynamically calculated based on the element */
    height: 250%; /* Dynamically calculated based on the element */
    opacity: var(--ripple-opacity-end);
    transform: scale(var(--ripple-scale));
  }
}

/* Color variants */
.ripple-light::after {
  background-color: var(--ripple-light-color);
}

.ripple-dark::after {
  background-color: var(--ripple-dark-color);
}

.ripple-primary::after {
  background-color: var(--ripple-primary-color);
}

.ripple-secondary::after {
  background-color: var(--ripple-secondary-color);
}

/* and so on for the other color variants */

/* Positioning variants */
.ripple-center::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--ripple-initial-scale));
}

.ripple-center.ripple-active::after {
  animation: ripple-center var(--ripple-duration) var(--ripple-timing-function) forwards;
}

@keyframes ripple-center {
  to {
    width: 250%;
    height: 250%;
    opacity: var(--ripple-opacity-end);
    transform: translate(-50%, -50%) scale(var(--ripple-scale));
  }
}

.ripple-unbounded {
  overflow: visible;
}

/* Speed variants */
.ripple-slow::after {
  animation-duration: var(--ripple-slow-duration);
}

.ripple-fast::after {
  animation-duration: var(--ripple-fast-duration);
}

/* Behavior variants */
.ripple-persistent::after {
  animation-fill-mode: forwards;
  opacity: var(--ripple-opacity-start);
  animation: ripple-persistent var(--ripple-duration) var(--ripple-timing-function) forwards;
}

@keyframes ripple-persistent {
  to {
    width: 250%;
    height: 250%;
    opacity: var(--ripple-opacity-start);
    transform: scale(var(--ripple-scale));
  }
}

/* Special effects */
.ripple-multiple::after {
  animation: ripple-multiple var(--ripple-duration) var(--ripple-timing-function) infinite;
}

@keyframes ripple-multiple {
  0%, 100% {
    width: 0;
    height: 0;
    opacity: var(--ripple-opacity-start);
    transform: scale(var(--ripple-initial-scale));
  }
  50% {
    width: 250%;
    height: 250%;
    opacity: var(--ripple-opacity-end);
    transform: scale(var(--ripple-scale));
  }
}
```

## JavaScript Integration

For dynamic ripple effects, JavaScript is used:

```javascript
class RippleEffect {
  constructor(elements, options = {}) {
    this.elements = elements instanceof NodeList ? elements : [elements];
    this.options = {
      color: null,
      duration: null,
      centered: false,
      ...options
    };
    
    this.init();
  }
  
  init() {
    this.elements.forEach(element => {
      element.addEventListener('pointerdown', this.createRipple.bind(this));
      element.style.position = element.style.position || 'relative';
      element.style.overflow = element.style.overflow || 'hidden';
      element.style.webkitTapHighlightColor = 'transparent';
    });
  }
  
  createRipple(event) {
    const element = event.currentTarget;
    
    // Remove old ripple elements
    const oldRipples = element.querySelectorAll('.js-ripple');
    oldRipples.forEach(ripple => {
      if (ripple.parentNode === element) {
        element.removeChild(ripple);
      }
    });
    
    // Create new ripple element
    const ripple = document.createElement('span');
    ripple.className = 'js-ripple';
    
    // Set ripple style
    this.setRippleStyles(ripple, element, event);
    
    // Add ripple to element
    element.appendChild(ripple);
    
    // Start animation
    setTimeout(() => {
      ripple.style.transform = this.options.centered 
        ? `translate(-50%, -50%) scale(${this.getScale(element)})`
        : `scale(${this.getScale(element)})`;
      ripple.style.opacity = '0';
    }, 20);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode === element) {
        element.removeChild(ripple);
      }
    }, this.options.duration || 600);
  }
  
  setRippleStyles(ripple, element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    // Basic style
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = `${size * 2}px`;
    ripple.style.height = `${size * 2}px`;
    ripple.style.backgroundColor = this.options.color || 
                                  getComputedStyle(element).getPropertyValue('--ripple-color') || 
                                  'rgba(0, 0, 0, 0.1)';
    ripple.style.transition = `transform ${this.options.duration || 600}ms ease-out, opacity ${this.options.duration || 600}ms ease-out`;
    ripple.style.opacity = '0.4';
    ripple.style.transform = 'scale(0)';
    ripple.style.transformOrigin = 'center';
    
    // Position
    if (this.options.centered) {
      ripple.style.top = '50%';
      ripple.style.left = '50%';
      ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    } else {
      const x = event.clientX - rect.left - size;
      const y = event.clientY - rect.top - size;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    }
  }
  
  getScale(element) {
    const rect = element.getBoundingClientRect();
    return Math.max(rect.width, rect.height) / 2;
  }
}

// Initialization for all ripple elements
document.addEventListener('DOMContentLoaded', () => {
  // Base ripple
  const rippleElements = document.querySelectorAll('.ripple:not(.ripple-center):not(.ripple-fixed):not(.ripple-persistent)');
  new RippleEffect(rippleElements);
  
  // Centered ripple
  const centeredRippleElements = document.querySelectorAll('.ripple-center');
  new RippleEffect(centeredRippleElements, { centered: true });
  
  // Colored ripples
  const colorClasses = ['light', 'dark', 'primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info'];
  colorClasses.forEach(color => {
    const elements = document.querySelectorAll(`.ripple-${color}`);
    new RippleEffect(elements, {
      color: getComputedStyle(document.documentElement).getPropertyValue(`--ripple-${color}-color`)
    });
  });
  
  // Speed variants
  const slowRippleElements = document.querySelectorAll('.ripple-slow');
  new RippleEffect(slowRippleElements, { 
    duration: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ripple-slow-duration')) || 1000 
  });
  
  const fastRippleElements = document.querySelectorAll('.ripple-fast');
  new RippleEffect(fastRippleElements, { 
    duration: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ripple-fast-duration')) || 300 
  });
});

// Alternative: Simpler implementation with CSS classes
function addRippleEffect() {
  const buttons = document.querySelectorAll('.ripple');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--ripple-x', `${x}px`);
      button.style.setProperty('--ripple-y', `${y}px`);
      
      button.classList.remove('ripple-active');
      setTimeout(() => {
        button.classList.add('ripple-active');
      }, 10);
    });
  });
}

document.addEventListener('DOMContentLoaded', addRippleEffect);
```

## Material Design Ripple

For a standard-compliant Material Design ripple effect, the official Material implementation can also be used:

```html
<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

<button class="mdc-button mdc-ripple-surface">
  <span class="mdc-button__label">Material Design Ripple</span>
</button>

<script>
  // Initialization of the Material Design ripple effect
  document.querySelectorAll('.mdc-ripple-surface').forEach(element => {
    mdc.ripple.MDCRipple.attachTo(element);
  });
</script>
```

## Accessibility

When using ripple effects, the following accessibility aspects should be considered:

1. **Animation preferences**: Respect the `prefers-reduced-motion` setting
2. **Keyboard focus**: Ensure that interactive elements with ripple effects are also accessible via keyboard
3. **Color contrast**: Ensure that the ripple effect provides sufficient contrast with the background
4. **No pure visual cues**: Ensure that interaction possibilities are not only recognizable through the ripple effect

```css
/* Reduced animation for users who prefer this */
@media (prefers-reduced-motion: reduce) {
  .ripple::after,
  .ripple-center::after,
  .ripple-persistent::after,
  .ripple-multiple::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

/* Keyboard-friendly ripple effects */
.ripple:focus-visible::after {
  /* Trigger ripple effect on keyboard focus */
  width: 250%;
  height: 250%;
  opacity: var(--ripple-opacity-end);
  transform: scale(var(--ripple-scale));
  transition: all var(--ripple-duration) var(--ripple-timing-function);
}
```

```javascript
// Ripple effect also for keyboard operation
document.querySelectorAll('.ripple').forEach(element => {
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      // Simulate a click in the center of the element
      const rect = element.getBoundingClientRect();
      const event = new PointerEvent('pointerdown', {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
      });
      element.dispatchEvent(event);
    }
  });
});
```

## Performance Considerations

Ripple effects can affect performance:

1. **DOM operations**: Minimize DOM manipulations when creating ripple elements
2. **GPU acceleration**: Use `transform` and `opacity` for animations to utilize the GPU
3. **Recycling**: Reuse ripple elements instead of creating new ones on each click
4. **Cleanup**: Remove ripple elements after animation completion

```javascript
// Performance-optimized ripple implementation
class OptimizedRipple {
  constructor(elements) {
    this.elements = elements instanceof NodeList ? elements : [elements];
    this.ripplePool = [];
    this.ripplePoolSize = 10;
    this.createRipplePool();
    this.init();
  }
  
  createRipplePool() {
    // Create a pool of reusable ripple elements
    for (let i = 0; i < this.ripplePoolSize; i++) {
      const ripple = document.createElement('span');
      ripple.className = 'js-ripple';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      ripple.style.transform = 'scale(0)';
      ripple.style.willChange = 'transform, opacity';
      this.ripplePool.push({
        element: ripple,
        isActive: false
      });
    }
  }
  
  init() {
    this.elements.forEach(element => {
      element.addEventListener('pointerdown', this.createRipple.bind(this));
    });
  }
  
  getRippleFromPool() {
    // Look for an inactive ripple in the pool
    const inactiveRipple = this.ripplePool.find(ripple => !ripple.isActive);
    
    if (inactiveRipple) {
      inactiveRipple.isActive = true;
      return inactiveRipple;
    }
    
    // If no inactive ripple is available, create a new one
    const ripple = document.createElement('span');
    ripple.className = 'js-ripple';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    ripple.style.transform = 'scale(0)';
    ripple.style.willChange = 'transform, opacity';
    
    const rippleObj = {
      element: ripple,
      isActive: true
    };
    
    this.ripplePool.push(rippleObj);
    return rippleObj;
  }
  
  createRipple(event) {
    // Rest of the implementation...
  }
}
```

## Browser Compatibility

The ripple effects are supported by all modern browsers.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base ripple | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS animations | ✓ | ✓ | ✓ | ✓ | ✓ |
| JS ripple | ✓ | ✓ | ✓ | ✓ | Limited |
| Touch events | ✓ | ✓ | ✓ | ✓ | Limited |

## Related Effects

- [Animation effects](/docs/effects/animation/animations.md) - General animation effects
- [Hover effects](/docs/effects/interaction/hover.md) - Effects on mouse pointer hover
- [Active effects](/docs/effects/interaction/active.md) - Effects when activating an element 
# Transitions-effects

Transitions-effects become verwendet, um Ubergange between verschiedenen Statesn eines Elements to animieren. the `@casoon/ui-lib` bietet verschiedene Transitions-effects, the for that beitragen, flussige and ansprechende Zustandsanderungen to gestalten.

## Basic Usage

the grundlegende Transitions-effect kann on jedes element angewendet become:

```html
<button class="transition">Klick me</button>
```

## CSS-classes

the folgenden CSS-classes stehen for Transitions-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.transition` | Basisklasse for Transitions-effects |
| `.transition-fast` | Schnelle transition |
| `.transition-slow` | Langsame transition |
| `.transition-ease` | transition with Ease-Timing |
| `.transition-linear` | transition with linearem Timing |
| `.transition-bounce` | transition with Bounce-effect |
| `.transition-elastic` | transition with Elastic-effect |
| `.transition-fade` | Fade-transition |
| `.transition-slide` | Slide-transition |
| `.transition-scale` | Skalierungs-transition |
| `.transition-rotate` | Rotations-transition |
| `.transition-color` | Farb-transition |
| `.transition-bg` | background-transition |
| `.transition-shadow` | shadow-transition |
| `.transition-transform` | Transform-transition |
| `.transition-property-all` | transition for all properties |
| `.transition-delay` | Verzogerte transition |
| `.transition-group` | Gruppierte transition |
| `.transition-stagger` | Gestaffelte transition |

## Variants

### Timing-Variants

Verschiedene Timings for Transitions:

```html
<button class="transition-fast">Schnelle transition</button>
<button class="transition-slow">Langsame transition</button>
<button class="transition-ease">Ease-transition</button>
<button class="transition-linear">Lineare transition</button>
<button class="transition-bounce">Bounce-transition</button>
<button class="transition-elastic">Elastische transition</button>
```

### effect-Variants

Verschiedene Arten from Transitions-Effekten:

```html
<div class="transition-fade">Fade-transition</div>
<div class="transition-slide">Slide-transition</div>
<div class="transition-scale">Skalierungs-transition</div>
<div class="transition-rotate">Rotations-transition</div>
<div class="transition-color">Farb-transition</div>
<div class="transition-bg">background-transition</div>
<div class="transition-shadow">shadow-transition</div>
<div class="transition-transform">Transform-transition</div>
```

### Richtungs-Variants

Verschiedene Richtungen for Transitions:

```html
<div class="transition-slide-up">after oben gleiten</div>
<div class="transition-slide-down">after unten gleiten</div>
<div class="transition-slide-left">after links gleiten</div>
<div class="transition-slide-right">after rechts gleiten</div>
<div class="transition-rotate-x">Um X-Achse rotieren</div>
<div class="transition-rotate-y">Um Y-Achse rotieren</div>
<div class="transition-rotate-z">Um Z-Achse rotieren</div>
```

### Verzogerungs-Variants

Transitions with verschiedenen Verzogerungen:

```html
<div class="transition-delay-xs">Extra kurze Verzogerung</div>
<div class="transition-delay-sm">Kurze Verzogerung</div>
<div class="transition-delay-md">Mittlere Verzogerung</div>
<div class="transition-delay-lg">length Verzogerung</div>
<div class="transition-delay-xl">Extra length Verzogerung</div>
```

### Gruppierte Transitions

Transitions for several elements in einer Gruppe:

```html
<div class="transition-group">
  <div class="transition-item">element 1</div>
  <div class="transition-item">element 2</div>
  <div class="transition-item">element 3</div>
</div>
```

### Gestaffelte Transitions

Transitions with gestaffelten Verzogerungen:

```html
<div class="transition-stagger">
  <div class="transition-stagger-item">element 1</div>
  <div class="transition-stagger-item">element 2</div>
  <div class="transition-stagger-item">element 3</div>
</div>
```

## Kombination with anderen Elementen

Transitions-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Transitions

```html
<button class="btn btn-primary transition-bg">
  Hover for Farbubergang
</button>

<button class="btn btn-outline transition-transform">
  Hover for Transform-effect
</button>

<button class="btn btn-icon transition-rotate">
  <i class="icon-settings"></i>
</button>
```

### links with Transitions

```html
<a href="#" class="link transition-color">
  link with Farbubergang
</a>

<a href="#" class="link transition-border">
  link with Border-transition
</a>

<a href="#" class="link transition-underline">
  link with Underline-transition
</a>
```

### Cardn with Transitions

```html
<div class="card transition-shadow">
  <div class="card-body">
    <h3>Card with Shadow-transition</h3>
    <p>Hover for shadow-effect</p>
  </div>
</div>

<div class="card transition-scale">
  <div class="card-body">
    <h3>Card with Scale-transition</h3>
    <p>Hover for Zoom-effect</p>
  </div>
</div>
```

### form elements with Transitions

```html
<input type="text" class="input transition-border" placeholder="Input with Border-transition">

<select class="select transition-bg">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<div class="checkbox transition-scale">
  <input type="checkbox" id="check1">
  <label for="check1">checkbox with Scale-transition</label>
</div>
```

### navigation with Transitions

```html
<nav class="navbar">
  <a href="#" class="nav-link transition-border-bottom">Home</a>
  <a href="#" class="nav-link transition-border-bottom">over us</a>
  <a href="#" class="nav-link transition-border-bottom">Kontakt</a>
</nav>
```

## Zustandsubergange

Transitions for verschiedene States:

```html
<!-- Hover-Transitions -->
<div class="transition-hover-scale">Hover for Skalierung</div>
<div class="transition-hover-rotate">Hover for Rotation</div>
<div class="transition-hover-color">Hover for Farbanderung</div>

<!-- Focus-Transitions -->
<input class="transition-focus-border" type="text" placeholder="Focus for Border-effect">
<button class="transition-focus-shadow">Fokussieren for shadow</button>

<!-- Active-Transitions -->
<button class="transition-active-scale">Click for Skalierung</button>
<button class="transition-active-bg">Click for Hintergrundanderung</button>

<!-- Toggle-Transitions -->
<div class="toggle transition-toggle-rotate">
  <input type="checkbox" id="toggle1">
  <label for="toggle1">Toggle with Rotation</label>
</div>
```

## Customization

the Transitions-effects can over CSS Variables angepasst become:

```css
:root {
  /* Allgemeine Transitions-parameter */
  --transition-duration: 0.3s;
  --transition-timing-function: ease;
  --transition-delay: 0s;
  
  /* Variants-parameter */
  --transition-duration-fast: 0.15s;
  --transition-duration-slow: 0.6s;
  --transition-timing-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --transition-timing-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Fade-parameter */
  --transition-fade-opacity-start: 0;
  --transition-fade-opacity-end: 1;
  
  /* Slide-parameter */
  --transition-slide-distance: 20px;
  
  /* Scale-parameter */
  --transition-scale-start: 0.9;
  --transition-scale-end: 1;
  --transition-scale-hover: 1.05;
  
  /* Rotate-parameter */
  --transition-rotate-angle: 180deg;
  
  /* Color-parameter */
  --transition-color-start: inherit;
  --transition-color-end: var(--color-primary);
  
  /* Verzogerungs-parameter */
  --transition-delay-xs: 0.05s;
  --transition-delay-sm: 0.1s;
  --transition-delay-md: 0.2s;
  --transition-delay-lg: 0.3s;
  --transition-delay-xl: 0.5s;
  
  /* Stagger-parameter */
  --transition-stagger-delay-item: 0.05s;
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Transitions-effects:

```css
/* Base-transition */
.transition {
  transition-property: all;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-timing-function);
  transition-delay: var(--transition-delay);
}

/* Timing-Variants */
.transition-fast {
  transition-duration: var(--transition-duration-fast);
}

.transition-slow {
  transition-duration: var(--transition-duration-slow);
}

.transition-ease {
  transition-timing-function: ease;
}

.transition-linear {
  transition-timing-function: linear;
}

.transition-bounce {
  transition-timing-function: var(--transition-timing-bounce);
}

.transition-elastic {
  transition-timing-function: var(--transition-timing-elastic);
}

/* effect-Variants */
.transition-fade {
  transition-property: opacity;
}

.transition-slide {
  transition-property: transform;
}

.transition-scale {
  transition-property: transform;
}

.transition-rotate {
  transition-property: transform;
}

.transition-color {
  transition-property: color;
}

.transition-bg {
  transition-property: background-color;
}

.transition-shadow {
  transition-property: box-shadow;
}

.transition-transform {
  transition-property: transform;
}

.transition-property-all {
  transition-property: all;
}

/* Hover-effects */
.transition-hover-scale {
  transition-property: transform;
}

.transition-hover-scale:hover {
  transform: scale(var(--transition-scale-hover));
}

.transition-hover-rotate {
  transition-property: transform;
}

.transition-hover-rotate:hover {
  transform: rotate(var(--transition-rotate-angle));
}

.transition-hover-color {
  transition-property: color;
}

.transition-hover-color:hover {
  color: var(--transition-color-end);
}

/* Richtungs-Variants */
.transition-slide-up {
  transform: translateY(var(--transition-slide-distance));
  transition-property: transform, opacity;
  opacity: 0;
}

.transition-slide-up.show {
  transform: translateY(0);
  opacity: 1;
}

.transition-slide-down {
  transform: translateY(calc(-1 * var(--transition-slide-distance)));
  transition-property: transform, opacity;
  opacity: 0;
}

.transition-slide-down.show {
  transform: translateY(0);
  opacity: 1;
}

/* ahnliche Definitionen for links and rechts */

/* Verzogerungs-Variants */
.transition-delay-xs {
  transition-delay: var(--transition-delay-xs);
}

.transition-delay-sm {
  transition-delay: var(--transition-delay-sm);
}

.transition-delay-md {
  transition-delay: var(--transition-delay-md);
}

.transition-delay-lg {
  transition-delay: var(--transition-delay-lg);
}

.transition-delay-xl {
  transition-delay: var(--transition-delay-xl);
}

/* Gruppierte Transitions */
.transition-group .transition-item {
  transition-property: transform, opacity;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-timing-function);
}

/* Gestaffelte Transitions */
.transition-stagger .transition-stagger-item {
  transition-property: transform, opacity;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-timing-function);
}

.transition-stagger .transition-stagger-item:nth-child(1) {
  transition-delay: calc(var(--transition-stagger-delay-item) * 0);
}

.transition-stagger .transition-stagger-item:nth-child(2) {
  transition-delay: calc(var(--transition-stagger-delay-item) * 1);
}

.transition-stagger .transition-stagger-item:nth-child(3) {
  transition-delay: calc(var(--transition-stagger-delay-item) * 2);
}

/* and so on for additional elements */
```

## JavaScript-Integration

for dynamische Transitions-effects wird JavaScript verwendet:

```javascript
class TransitionController {
  constructor(options = {}) {
    this.options = {
      enterClass: 'enter',
      enterActiveClass: 'enter-active',
      enterToClass: 'enter-to',
      leaveClass: 'leave',
      leaveActiveClass: 'leave-active',
      leaveToClass: 'leave-to',
      ...options
    };
    
    this.init();
  }
  
  init() {
    // Initialisiere Trigger-elements
    document.querySelectorAll('[data-toggle-transition]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = trigger.dataset.toggleTransition;
        const target = document.querySelector(targetSelector);
        
        if (target) {
          this.toggleTransition(target);
        }
      });
    });
    
    // Initialisiere gestaffelte Transitions
    document.querySelectorAll('.transition-stagger').forEach(containers => {
      const items = containers.querySelectorAll('.transition-stagger-item');
      const baseDelay = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--transition-stagger-delay-item')) * 1000 || 50;
      
      items.forEach((item, index) => {
        item.style.transitionDelay = `${baseDelay * index}ms`;
      });
    });
  }
  
  toggleTransition(element) {
    if (element.classList.contains('show')) {
      this.hide(element);
    } else {
      this.show(element);
    }
  }
  
  show(element) {
    // FLIP-animation (First, Last, Invert, Play)
    // First: Messen des Ausgangszustands (optional)
    
    // transition vorbereiten
    element.classList.add(this.options.enterClass);
    
    // Force Reflow
    void element.offsetWidth;
    
    // transition starten
    element.classList.add(this.options.enterActiveClass);
    element.classList.add('show');
    
    // transition abschliessen
    const onTransitionEnd = () => {
      element.classList.remove(this.options.enterClass);
      element.classList.remove(this.options.enterActiveClass);
      element.classList.add(this.options.enterToClass);
      
      element.removeEventListener('transitionend', onTransitionEnd);
    };
    
    element.addEventListener('transitionend', onTransitionEnd);
  }
  
  hide(element) {
    // transition vorbereiten
    element.classList.add(this.options.leaveClass);
    
    // Force Reflow
    void element.offsetWidth;
    
    // transition starten
    element.classList.add(this.options.leaveActiveClass);
    element.classList.remove('show');
    
    // transition abschliessen
    const onTransitionEnd = () => {
      element.classList.remove(this.options.leaveClass);
      element.classList.remove(this.options.leaveActiveClass);
      element.classList.add(this.options.leaveToClass);
      
      element.removeEventListener('transitionend', onTransitionEnd);
    };
    
    element.addEventListener('transitionend', onTransitionEnd);
  }
}

// Initialisierung the Transitions
document.addEventListener('DOMContentLoaded', () => {
  new TransitionController();
});
```

## Vue.js-Integration

the Transitions can also in Vue.js verwendet become:

```vue
<template>
  <transition
    name="fade"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave">
    <div v-if="show" class="content">
      content with transition
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const duration = getComputedStyle(el).getPropertyValue('--transition-duration') || '0.3s';
      
      el.style.transition = `opacity ${duration} ease-out`;
      el.style.opacity = 1;
      
      // Warten until transition abgeschlossen ist
      setTimeout(done, parseFloat(duration) * 1000);
    },
    afterEnter(el) {
      // Bereinigung, if notig
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      const duration = getComputedStyle(el).getPropertyValue('--transition-duration') || '0.3s';
      
      el.style.transition = `opacity ${duration} ease-out`;
      el.style.opacity = 0;
      
      // Warten until transition abgeschlossen ist
      setTimeout(done, parseFloat(duration) * 1000);
    },
    afterLeave(el) {
      // Bereinigung, if notig
    }
  }
}
</script>

<style scoped>
.content {
  /* Styles for den content */
}

/* Vordefinierte transition-classes for Vue */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-duration) ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide-transition */
.slide-enter-active, .slide-leave-active {
  transition: transform var(--transition-duration) ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(var(--transition-slide-distance));
}
</style>
```

## Accessibility

at the Usage from Transitions-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Animationspraferenzen**: Respektieren them the Setting `prefers-reduced-motion`
2. **Kontrast**: ensure, that Farbubergange ausreichend Kontrast behalten
3. **no reinen visuellen Notee**: ensure, that Zustandsanderungen not only through animations vermittelt become
4. **Tastaturzuganglichkeit**: ensure, that all Transitions also at Tastaturinteraktionen funktionieren

```css
/* Reduzierte animation for user, the dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .transition,
  .transition-fade,
  .transition-slide,
  .transition-scale,
  .transition-rotate,
  .transition-color,
  .transition-bg,
  .transition-shadow,
  .transition-transform,
  .transition-hover-scale,
  .transition-hover-rotate,
  .transition-hover-color {
    transition: none !important;
  }
}
```

```javascript
// Barrierefreie Transitions
function setupAccessibleTransitions() {
  // Tastaturinteraktionen
  document.querySelectorAll('.transition-hover-scale, .transition-hover-rotate, .transition-hover-color').forEach(element => {
    element.addEventListener('focus', () => {
      // Aktiviere den Hover-effect also at Tastatur-Fokus
      if (element.classList.contains('transition-hover-scale')) {
        element.style.transform = `scale(var(--transition-scale-hover))`;
      } else if (element.classList.contains('transition-hover-rotate')) {
        element.style.transform = `rotate(var(--transition-rotate-angle))`;
      } else if (element.classList.contains('transition-hover-color')) {
        element.style.color = `var(--transition-color-end)`;
      }
    });
    
    element.addEventListener('blur', () => {
      // Zurucksetzen beim Verlassen des Fokus
      element.style.transform = '';
      element.style.color = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', setupAccessibleTransitions);
```

## Performance-Uberlegungen

Transitions-effects can the Leistung beeinflussen:

1. **Compositor-properties**: Bevorzugen them `transform` and `opacity` for the besten Leistungsergebnisse
2. **GPU-Beschleunigung**: use them `will-change` for wichtige Transitions
3. **Vermeiden from layout-Thrashing**: Vermeiden them Transitions, the the layout wiederholt neu berechnen
4. **Batching**: Fassen them several Anderungen zusammen, um Reflows to minimieren

```css
/* Leistungsoptimierte Transitions */
.transition-gpu {
  will-change: transform, opacity;
  transform: translateZ(0); /* GPU-Beschleunigung activate */
}

.transition-composite-only {
  transition-property: transform, opacity;
  /* Vermeiden them Transitions for layout-intensive properties how width, height, top, left, etc. */
}
```

```javascript
// Leistungsoptimierte Transitions
function optimizeTransitions() {
  const elements = document.querySelectorAll('.transition-performance-critical');
  
  elements.forEach(element => {
    // will-change only at Bedarf add
    element.addEventListener('mouseenter', () => {
      element.style.willChange = 'transform, opacity';
    });
    
    element.addEventListener('transitionend', () => {
      element.style.willChange = 'auto';
    });
  });
}

document.addEventListener('DOMContentLoaded', optimizeTransitions);
```

## Browser-Kompatibilitat

the Transitions-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Transitions | ✓ | ✓ | ✓ | ✓ | ✓ |
| Transformationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| Easing-functions | ✓ | ✓ | ✓ | ✓ | ✓ |
| will-change | ✓ | ✓ | ✓ | ✓ | Nein |
| variables for Transitions | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Animations-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Ripple-effects](/docs/effects/animation/ripple.md) - Wellenformige Klick-animations
- [Hover-effects](/docs/effects/interaction/hover.md) - effects at Mauszeiger-Hover 
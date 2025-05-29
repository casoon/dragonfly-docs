# Transitions-Effekte

Transitions-Effekte werden verwendet, um Übergänge zwischen verschiedenen Zuständen eines Elements zu animieren. Die `@casoon/ui-lib` bietet verschiedene Transitions-Effekte, die dazu beitragen, flüssige und ansprechende Zustandsänderungen zu gestalten.

## Grundlegende Verwendung

Der grundlegende Transitions-Effekt kann auf jedes Element angewendet werden:

```html
<button class="transition">Klick mich</button>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Transitions-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.transition` | Basisklasse für Transitions-Effekte |
| `.transition-fast` | Schnelle Transition |
| `.transition-slow` | Langsame Transition |
| `.transition-ease` | Transition mit Ease-Timing |
| `.transition-linear` | Transition mit linearem Timing |
| `.transition-bounce` | Transition mit Bounce-Effekt |
| `.transition-elastic` | Transition mit Elastic-Effekt |
| `.transition-fade` | Fade-Transition |
| `.transition-slide` | Slide-Transition |
| `.transition-scale` | Skalierungs-Transition |
| `.transition-rotate` | Rotations-Transition |
| `.transition-color` | Farb-Transition |
| `.transition-bg` | Hintergrund-Transition |
| `.transition-shadow` | Schatten-Transition |
| `.transition-transform` | Transform-Transition |
| `.transition-property-all` | Transition für alle Eigenschaften |
| `.transition-delay` | Verzögerte Transition |
| `.transition-group` | Gruppierte Transition |
| `.transition-stagger` | Gestaffelte Transition |

## Varianten

### Timing-Varianten

Verschiedene Timings für Transitions:

```html
<button class="transition-fast">Schnelle Transition</button>
<button class="transition-slow">Langsame Transition</button>
<button class="transition-ease">Ease-Transition</button>
<button class="transition-linear">Lineare Transition</button>
<button class="transition-bounce">Bounce-Transition</button>
<button class="transition-elastic">Elastische Transition</button>
```

### Effekt-Varianten

Verschiedene Arten von Transitions-Effekten:

```html
<div class="transition-fade">Fade-Transition</div>
<div class="transition-slide">Slide-Transition</div>
<div class="transition-scale">Skalierungs-Transition</div>
<div class="transition-rotate">Rotations-Transition</div>
<div class="transition-color">Farb-Transition</div>
<div class="transition-bg">Hintergrund-Transition</div>
<div class="transition-shadow">Schatten-Transition</div>
<div class="transition-transform">Transform-Transition</div>
```

### Richtungs-Varianten

Verschiedene Richtungen für Transitions:

```html
<div class="transition-slide-up">Nach oben gleiten</div>
<div class="transition-slide-down">Nach unten gleiten</div>
<div class="transition-slide-left">Nach links gleiten</div>
<div class="transition-slide-right">Nach rechts gleiten</div>
<div class="transition-rotate-x">Um X-Achse rotieren</div>
<div class="transition-rotate-y">Um Y-Achse rotieren</div>
<div class="transition-rotate-z">Um Z-Achse rotieren</div>
```

### Verzögerungs-Varianten

Transitions mit verschiedenen Verzögerungen:

```html
<div class="transition-delay-xs">Extra kurze Verzögerung</div>
<div class="transition-delay-sm">Kurze Verzögerung</div>
<div class="transition-delay-md">Mittlere Verzögerung</div>
<div class="transition-delay-lg">Lange Verzögerung</div>
<div class="transition-delay-xl">Extra lange Verzögerung</div>
```

### Gruppierte Transitions

Transitions für mehrere Elemente in einer Gruppe:

```html
<div class="transition-group">
  <div class="transition-item">Element 1</div>
  <div class="transition-item">Element 2</div>
  <div class="transition-item">Element 3</div>
</div>
```

### Gestaffelte Transitions

Transitions mit gestaffelten Verzögerungen:

```html
<div class="transition-stagger">
  <div class="transition-stagger-item">Element 1</div>
  <div class="transition-stagger-item">Element 2</div>
  <div class="transition-stagger-item">Element 3</div>
</div>
```

## Kombination mit anderen Elementen

Transitions-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Transitions

```html
<button class="btn btn-primary transition-bg">
  Hover für Farbübergang
</button>

<button class="btn btn-outline transition-transform">
  Hover für Transform-Effekt
</button>

<button class="btn btn-icon transition-rotate">
  <i class="icon-settings"></i>
</button>
```

### Links mit Transitions

```html
<a href="#" class="link transition-color">
  Link mit Farbübergang
</a>

<a href="#" class="link transition-border">
  Link mit Border-Transition
</a>

<a href="#" class="link transition-underline">
  Link mit Underline-Transition
</a>
```

### Karten mit Transitions

```html
<div class="card transition-shadow">
  <div class="card-body">
    <h3>Karte mit Shadow-Transition</h3>
    <p>Hover für Schatten-Effekt</p>
  </div>
</div>

<div class="card transition-scale">
  <div class="card-body">
    <h3>Karte mit Scale-Transition</h3>
    <p>Hover für Zoom-Effekt</p>
  </div>
</div>
```

### Formularelemente mit Transitions

```html
<input type="text" class="input transition-border" placeholder="Input mit Border-Transition">

<select class="select transition-bg">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<div class="checkbox transition-scale">
  <input type="checkbox" id="check1">
  <label for="check1">Checkbox mit Scale-Transition</label>
</div>
```

### Navigation mit Transitions

```html
<nav class="navbar">
  <a href="#" class="nav-link transition-border-bottom">Home</a>
  <a href="#" class="nav-link transition-border-bottom">Über uns</a>
  <a href="#" class="nav-link transition-border-bottom">Kontakt</a>
</nav>
```

## Zustandsübergänge

Transitions für verschiedene Zustände:

```html
<!-- Hover-Transitions -->
<div class="transition-hover-scale">Hover für Skalierung</div>
<div class="transition-hover-rotate">Hover für Rotation</div>
<div class="transition-hover-color">Hover für Farbänderung</div>

<!-- Focus-Transitions -->
<input class="transition-focus-border" type="text" placeholder="Focus für Border-Effekt">
<button class="transition-focus-shadow">Fokussieren für Schatten</button>

<!-- Active-Transitions -->
<button class="transition-active-scale">Klicken für Skalierung</button>
<button class="transition-active-bg">Klicken für Hintergrundänderung</button>

<!-- Toggle-Transitions -->
<div class="toggle transition-toggle-rotate">
  <input type="checkbox" id="toggle1">
  <label for="toggle1">Toggle mit Rotation</label>
</div>
```

## Anpassung

Die Transitions-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Allgemeine Transitions-Parameter */
  --transition-duration: 0.3s;
  --transition-timing-function: ease;
  --transition-delay: 0s;
  
  /* Varianten-Parameter */
  --transition-duration-fast: 0.15s;
  --transition-duration-slow: 0.6s;
  --transition-timing-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --transition-timing-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Fade-Parameter */
  --transition-fade-opacity-start: 0;
  --transition-fade-opacity-end: 1;
  
  /* Slide-Parameter */
  --transition-slide-distance: 20px;
  
  /* Scale-Parameter */
  --transition-scale-start: 0.9;
  --transition-scale-end: 1;
  --transition-scale-hover: 1.05;
  
  /* Rotate-Parameter */
  --transition-rotate-angle: 180deg;
  
  /* Color-Parameter */
  --transition-color-start: inherit;
  --transition-color-end: var(--color-primary);
  
  /* Verzögerungs-Parameter */
  --transition-delay-xs: 0.05s;
  --transition-delay-sm: 0.1s;
  --transition-delay-md: 0.2s;
  --transition-delay-lg: 0.3s;
  --transition-delay-xl: 0.5s;
  
  /* Stagger-Parameter */
  --transition-stagger-delay-item: 0.05s;
}
```

## CSS-Implementierung

Beispiele für die CSS-Implementierung der Transitions-Effekte:

```css
/* Basis-Transition */
.transition {
  transition-property: all;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-timing-function);
  transition-delay: var(--transition-delay);
}

/* Timing-Varianten */
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

/* Effekt-Varianten */
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

/* Hover-Effekte */
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

/* Richtungs-Varianten */
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

/* ähnliche Definitionen für links und rechts */

/* Verzögerungs-Varianten */
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

/* und so weiter für weitere Elemente */
```

## JavaScript-Integration

Für dynamische Transitions-Effekte wird JavaScript verwendet:

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
    // Initialisiere Trigger-Elemente
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
    document.querySelectorAll('.transition-stagger').forEach(container => {
      const items = container.querySelectorAll('.transition-stagger-item');
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
    // FLIP-Animation (First, Last, Invert, Play)
    // First: Messen des Ausgangszustands (optional)
    
    // Transition vorbereiten
    element.classList.add(this.options.enterClass);
    
    // Force Reflow
    void element.offsetWidth;
    
    // Transition starten
    element.classList.add(this.options.enterActiveClass);
    element.classList.add('show');
    
    // Transition abschließen
    const onTransitionEnd = () => {
      element.classList.remove(this.options.enterClass);
      element.classList.remove(this.options.enterActiveClass);
      element.classList.add(this.options.enterToClass);
      
      element.removeEventListener('transitionend', onTransitionEnd);
    };
    
    element.addEventListener('transitionend', onTransitionEnd);
  }
  
  hide(element) {
    // Transition vorbereiten
    element.classList.add(this.options.leaveClass);
    
    // Force Reflow
    void element.offsetWidth;
    
    // Transition starten
    element.classList.add(this.options.leaveActiveClass);
    element.classList.remove('show');
    
    // Transition abschließen
    const onTransitionEnd = () => {
      element.classList.remove(this.options.leaveClass);
      element.classList.remove(this.options.leaveActiveClass);
      element.classList.add(this.options.leaveToClass);
      
      element.removeEventListener('transitionend', onTransitionEnd);
    };
    
    element.addEventListener('transitionend', onTransitionEnd);
  }
}

// Initialisierung der Transitions
document.addEventListener('DOMContentLoaded', () => {
  new TransitionController();
});
```

## Vue.js-Integration

Die Transitions können auch in Vue.js verwendet werden:

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
      Inhalt mit Transition
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
      
      // Warten bis Transition abgeschlossen ist
      setTimeout(done, parseFloat(duration) * 1000);
    },
    afterEnter(el) {
      // Bereinigung, falls nötig
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      const duration = getComputedStyle(el).getPropertyValue('--transition-duration') || '0.3s';
      
      el.style.transition = `opacity ${duration} ease-out`;
      el.style.opacity = 0;
      
      // Warten bis Transition abgeschlossen ist
      setTimeout(done, parseFloat(duration) * 1000);
    },
    afterLeave(el) {
      // Bereinigung, falls nötig
    }
  }
}
</script>

<style scoped>
.content {
  /* Stile für den Inhalt */
}

/* Vordefinierte Transition-Klassen für Vue */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-duration) ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide-Transition */
.slide-enter-active, .slide-leave-active {
  transition: transform var(--transition-duration) ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(var(--transition-slide-distance));
}
</style>
```

## Barrierefreiheit

Bei der Verwendung von Transitions-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Animationspräferenzen**: Respektieren Sie die Einstellung `prefers-reduced-motion`
2. **Kontrast**: Stellen Sie sicher, dass Farbübergänge ausreichend Kontrast behalten
3. **Keine reinen visuellen Hinweise**: Stellen Sie sicher, dass Zustandsänderungen nicht nur durch Animationen vermittelt werden
4. **Tastaturzugänglichkeit**: Stellen Sie sicher, dass alle Transitions auch bei Tastaturinteraktionen funktionieren

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
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
      // Aktiviere den Hover-Effekt auch bei Tastatur-Fokus
      if (element.classList.contains('transition-hover-scale')) {
        element.style.transform = `scale(var(--transition-scale-hover))`;
      } else if (element.classList.contains('transition-hover-rotate')) {
        element.style.transform = `rotate(var(--transition-rotate-angle))`;
      } else if (element.classList.contains('transition-hover-color')) {
        element.style.color = `var(--transition-color-end)`;
      }
    });
    
    element.addEventListener('blur', () => {
      // Zurücksetzen beim Verlassen des Fokus
      element.style.transform = '';
      element.style.color = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', setupAccessibleTransitions);
```

## Performance-Überlegungen

Transitions-Effekte können die Leistung beeinflussen:

1. **Compositor-Eigenschaften**: Bevorzugen Sie `transform` und `opacity` für die besten Leistungsergebnisse
2. **GPU-Beschleunigung**: Nutzen Sie `will-change` für wichtige Transitions
3. **Vermeiden von Layout-Thrashing**: Vermeiden Sie Transitions, die das Layout wiederholt neu berechnen
4. **Batching**: Fassen Sie mehrere Änderungen zusammen, um Reflows zu minimieren

```css
/* Leistungsoptimierte Transitions */
.transition-gpu {
  will-change: transform, opacity;
  transform: translateZ(0); /* GPU-Beschleunigung aktivieren */
}

.transition-composite-only {
  transition-property: transform, opacity;
  /* Vermeiden Sie Transitions für layout-intensive Eigenschaften wie width, height, top, left, etc. */
}
```

```javascript
// Leistungsoptimierte Transitions
function optimizeTransitions() {
  const elements = document.querySelectorAll('.transition-performance-critical');
  
  elements.forEach(element => {
    // will-change nur bei Bedarf hinzufügen
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

## Browser-Kompatibilität

Die Transitions-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Transitions | ✓ | ✓ | ✓ | ✓ | ✓ |
| Transformationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| Easing-Funktionen | ✓ | ✓ | ✓ | ✓ | ✓ |
| will-change | ✓ | ✓ | ✓ | ✓ | Nein |
| Variablen für Transitions | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Ripple-Effekte](/docs/effects/animation/ripple.md) - Wellenförmige Klick-Animationen
- [Hover-Effekte](/docs/effects/interaction/hover.md) - Effekte bei Mauszeiger-Hover 
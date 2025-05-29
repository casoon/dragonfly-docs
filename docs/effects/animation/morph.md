# Morph-effects

Morph-effects become verwendet, um fliessende Ubergange between verschiedenen Formen and Statesn to erzeugen. the `@casoon/ui-lib` bietet verschiedene Morph-effects, the for that beitragen, dynamische and interaktive user interfaces to gestalten.

## Basic Usage

the grundlegende Morph-effect kann on jedes element angewendet become:

```html
<div class="morph" data-morph-target="#target-element">
  Ausgangsform
</div>
<div id="target-element" style="display: none;">
  Zielform
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Morph-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.morph` | Basisklasse for Morph-effects |
| `.morph-shape` | Formubergangseffekt |
| `.morph-size` | Sizesubergangseffekt |
| `.morph-color` | Farbubergangseffekt |
| `.morph-text` | Textubergangseffekt |
| `.morph-opacity` | Transparenzubergangseffekt |
| `.morph-position` | Positionsubergangseffekt |
| `.morph-content` | Inhaltsubergangseffekt |
| `.morph-path` | SVG-Pfadubergangseffekt |
| `.morph-hover` | Morph-effect at Hover |
| `.morph-click` | Morph-effect at Klick |
| `.morph-focus` | Morph-effect at Fokus |
| `.morph-auto` | Automatischer Morph-effect |
| `.morph-loop` | oneself wiederholender Morph-effect |

## Variants

### Shape-Morph

the Shape-Morph-effect ermoglicht Ubergange between verschiedenen Formen:

```html
<div class="morph-shape" data-morph-from="circle" data-morph-to="square">
  Form-Morph
</div>
```

Verfugbare Formubergange:

```html
<div class="morph-shape-circle-to-square">from Kreis to Quadrat</div>
<div class="morph-shape-square-to-triangle">from Quadrat to Dreieck</div>
<div class="morph-shape-rectangle-to-oval">from Rechteck to Oval</div>
<div class="morph-shape-star-to-circle">from Stern to Kreis</div>
<div class="morph-shape-hexagon-to-circle">from Sechseck to Kreis</div>
```

Benutzerdefinierte Formubergange with clip-path:

```html
<div class="morph-shape-custom" 
     style="--morph-from-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); 
            --morph-to-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);">
  Benutzerdefinierter Form-Morph
</div>
```

### Size-Morph

the Size-Morph-effect ermoglicht Ubergange between verschiedenen Sizes:

```html
<div class="morph-size" data-morph-from-size="100px" data-morph-to-size="200px">
  Sizes-Morph
</div>
```

Verfugbare Sizesubergange:

```html
<div class="morph-size-small-to-large">from small to gross</div>
<div class="morph-size-large-to-small">from gross to small</div>
<div class="morph-size-wide-to-narrow">from breit to schmal</div>
<div class="morph-size-tall-to-short">from hoch to niedrig</div>
<div class="morph-size-expand">Expandieren</div>
<div class="morph-size-collapse">Kollabieren</div>
```

### Color-Morph

the Color-Morph-effect ermoglicht Ubergange between verschiedenen Colors:

```html
<div class="morph-color" data-morph-from-color="#ff0000" data-morph-to-color="#0000ff">
  Farb-Morph
</div>
```

Verfugbare Farbubergange:

```html
<div class="morph-color-primary-to-secondary">from Primar- to Sekundarfarbe</div>
<div class="morph-color-light-to-dark">from hell to dunkel</div>
<div class="morph-color-warm-to-cool">from warm to kuhl</div>
<div class="morph-color-gradient">Farbverlaufsubergang</div>
<div class="morph-color-rainbow">Regenbogenfarbubergang</div>
```

### Text-Morph

the Text-Morph-effect ermoglicht Ubergange between verschiedenen Texten:

```html
<div class="morph-text" data-morph-from-text="Hallo" data-morph-to-text="Welt">
  Text-Morph
</div>
```

Verfugbare Textubergange:

```html
<div class="morph-text-fade">Ausblenden/Einblenden-transition</div>
<div class="morph-text-slide">Slide-transition</div>
<div class="morph-text-shuffle">Buchstaben-Shuffle</div>
<div class="morph-text-typewriter">Schreibmaschineneffekt</div>
<div class="morph-text-scramble">Textscramble-effect</div>
```

### Opacity-Morph

the Opacity-Morph-effect ermoglicht Ubergange between verschiedenen Transparenzstufen:

```html
<div class="morph-opacity" data-morph-from-opacity="1" data-morph-to-opacity="0.5">
  transparency-Morph
</div>
```

### position-Morph

the position-Morph-effect ermoglicht Ubergange between verschiedenen positions:

```html
<div class="morph-position" data-morph-from-position="top: 0; left: 0;" data-morph-to-position="top: 100px; left: 100px;">
  Positions-Morph
</div>
```

### Content-Morph

the Content-Morph-effect ermoglicht Ubergange between verschiedenen Inhalten:

```html
<div class="morph-content" data-morph-target="#target-content">
  Ausgangsinhalt
</div>
<div id="target-content" style="display: none;">
  Zielinhalt with komplett anderem HTML
</div>
```

### Path-Morph

the Path-Morph-effect ermoglicht Ubergange between verschiedenen SVG-Pfaden:

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <path class="morph-path" 
        data-morph-from-path="M10,10 L190,10 L190,190 L10,190 Z" 
        data-morph-to-path="M100,10 L190,100 L100,190 L10,100 Z" 
        fill="currentColor" />
</svg>
```

## Interaktive Morph-effects

Morph-effects can with interactions kombiniert become:

```html
<div class="morph-hover" data-morph-to="...">
  Hover for Morph-effect
</div>

<button class="morph-click" data-morph-to="...">
  Click for Morph-effect
</button>

<input class="morph-focus" data-morph-to="...">
```

## Kombination with anderen Elementen

Morph-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Morph-effect

```html
<button class="btn morph-shape-rectangle-to-pill morph-hover">
  button with Hover-Morph
</button>
```

### icons with Morph-effect

```html
<svg class="icon morph-path-hover" viewBox="0 0 24 24">
  <path class="morph-path" 
        data-morph-from-path="M3,12 L21,12" 
        data-morph-to-path="M6,6 L18,18 M18,6 L6,18" 
        stroke="currentColor" stroke-width="2" />
</svg>
```

### Cardn with Morph-effect

```html
<div class="card morph-size-hover" data-morph-to-size="scale(1.05)">
  <div class="card-body">
    Card with Hover-Zoom
  </div>
</div>
```

### navigation with Morph-effect

```html
<nav class="navbar">
  <div class="nav-indicator morph-position"></div>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 0;">Home</a>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 100px;">over us</a>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 200px;">Kontakt</a>
</nav>
```

## Animierte Morph-Sequenzen

Morph-effects can to komplexen Animationssequenzen kombiniert become:

```html
<div class="morph-sequence">
  <div class="morph-step" data-morph-to="..." data-morph-duration="500" data-morph-delay="0"></div>
  <div class="morph-step" data-morph-to="..." data-morph-duration="300" data-morph-delay="500"></div>
  <div class="morph-step" data-morph-to="..." data-morph-duration="700" data-morph-delay="800"></div>
</div>
```

## Customization

the Morph-effects can over CSS Variables angepasst become:

```css
:root {
  /* Allgemeine Morph-parameter */
  --morph-duration: 0.5s;
  --morph-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  --morph-delay: 0s;
  
  /* Form-parameter */
  --morph-circle: circle(50% at 50% 50%);
  --morph-square: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  --morph-triangle: polygon(50% 0%, 100% 100%, 0% 100%);
  --morph-pill: inset(0 0 0 0 round 50px);
  
  /* Sizes-parameter */
  --morph-size-small: 50px;
  --morph-size-medium: 100px;
  --morph-size-large: 200px;
  
  /* Farb-parameter */
  --morph-color-primary: var(--color-primary);
  --morph-color-secondary: var(--color-secondary);
  --morph-color-light: var(--color-light);
  --morph-color-dark: var(--color-dark);
  
  /* Text-parameter */
  --morph-text-duration: 0.3s;
  --morph-text-delay: 0.1s;
  
  /* Positions-parameter */
  --morph-position-offset: 20px;
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Morph-effects:

```css
/* Base-Morph */
.morph {
  transition-property: transform, background-color, color, opacity, clip-path;
  transition-duration: var(--morph-duration);
  transition-timing-function: var(--morph-timing-function);
  transition-delay: var(--morph-delay);
}

/* Form-Morph */
.morph-shape {
  clip-path: var(--morph-from-shape);
  transition-property: clip-path;
}

.morph-shape:hover,
.morph-shape.active {
  clip-path: var(--morph-to-shape);
}

.morph-shape-circle-to-square {
  --morph-from-shape: var(--morph-circle);
  --morph-to-shape: var(--morph-square);
  clip-path: var(--morph-from-shape);
  transition-property: clip-path;
}

.morph-shape-circle-to-square:hover {
  clip-path: var(--morph-to-shape);
}

/* Sizes-Morph */
.morph-size {
  width: var(--morph-from-width);
  height: var(--morph-from-height);
  transition-property: width, height;
}

.morph-size:hover,
.morph-size.active {
  width: var(--morph-to-width);
  height: var(--morph-to-height);
}

/* Farb-Morph */
.morph-color {
  background-color: var(--morph-from-color);
  color: var(--morph-from-text-color);
  transition-property: background-color, color;
}

.morph-color:hover,
.morph-color.active {
  background-color: var(--morph-to-color);
  color: var(--morph-to-text-color);
}

/* Text-Morph */
.morph-text-fade {
  position: relative;
}

.morph-text-fade::after {
  content: attr(data-morph-to-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity var(--morph-text-duration);
}

.morph-text-fade:hover::after {
  opacity: 1;
}

/* SVG-Pfad-Morph */
.morph-path {
  transition-property: d;
}
```

## JavaScript-Integration

for komplexere Morph-effects wird JavaScript verwendet:

```javascript
class MorphEffect {
  constructor(element) {
    this.element = element;
    this.target = document.querySelector(element.dataset.morphTarget);
    this.fromState = this.getComputedState(this.element);
    this.toState = this.getComputedState(this.target);
    this.duration = element.dataset.morphDuration || 500;
    this.delay = element.dataset.morphDelay || 0;
    this.easing = element.dataset.morphEasing || 'cubic-bezier(0.25, 0.1, 0.25, 1)';
    
    this.setupEventListeners();
  }
  
  getComputedState(element) {
    const style = window.getComputedStyle(element);
    return {
      width: style.width,
      height: style.height,
      backgroundColor: style.backgroundColor,
      borderRadius: style.borderRadius,
      transform: style.transform,
      opacity: style.opacity,
      // additional properties je after Bedarf
    };
  }
  
  setupEventListeners() {
    if (this.element.classList.contains('morph-hover')) {
      this.element.addEventListener('mouseenter', () => this.morph(true));
      this.element.addEventListener('mouseleave', () => this.morph(false));
    }
    
    if (this.element.classList.contains('morph-click')) {
      this.element.addEventListener('click', () => {
        this.element.classList.toggle('active');
        this.morph(this.element.classList.contains('active'));
      });
    }
  }
  
  morph(toTarget) {
    const startState = toTarget ? this.fromState : this.toState;
    const endState = toTarget ? this.toState : this.fromState;
    
    // FLIP-Technik (First, Last, Invert, Play) for performante animations
    // additional Implementation Details...
    
    // Example for einfache transition with Web Animations API
    this.element.animate([
      startState,
      endState
    ], {
      duration: this.duration,
      delay: this.delay,
      fill: 'forwards',
      easing: this.easing
    });
  }
}

// Initialisierung aller Morph-elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[class*="morph-"]').forEach(element => {
    new MorphEffect(element);
  });
});

// SVG-Pfad-Morph with GSAP (erfordert externe Bibliothek)
function setupSVGMorph() {
  document.querySelectorAll('.morph-path').forEach(path => {
    const fromPath = path.getAttribute('data-morph-from-path');
    const toPath = path.getAttribute('data-morph-to-path');
    
    if (fromPath && toPath) {
      path.setAttribute('d', fromPath);
      
      const parent = path.closest('.morph-path-hover, .morph-path-click');
      
      if (parent && parent.classList.contains('morph-path-hover')) {
        parent.addEventListener('mouseenter', () => {
          morphPath(path, toPath);
        });
        
        parent.addEventListener('mouseleave', () => {
          morphPath(path, fromPath);
        });
      }
      
      if (parent && parent.classList.contains('morph-path-click')) {
        parent.addEventListener('click', () => {
          const isActive = parent.classList.toggle('active');
          morphPath(path, isActive ? toPath : fromPath);
        });
      }
    }
  });
}

function morphPath(pathElement, targetPath) {
  // with Web Animations API (einfache version)
  const currentPath = pathElement.getAttribute('d');
  
  // for komplexe Pfad-Morphs wird a externe Bibliothek how GSAP empfohlen
  // Hier ist a vereinfachte version
  pathElement.animate([
    { d: currentPath },
    { d: targetPath }
  ], {
    duration: 500,
    fill: 'forwards',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  });
  
  // after the animation den Pfad aktualisieren
  setTimeout(() => {
    pathElement.setAttribute('d', targetPath);
  }, 500);
}

setupSVGMorph();
```

## Accessibility

at the Usage from Morph-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Animationspraferenzen**: Respektieren them the Setting `prefers-reduced-motion`
2. **Lesbarkeit**: ensure, that Text wahrend des Morphs lesbar bleibt
3. **Konsistente Benutzererfahrung**: Bieten them alternative methods for user, the no animations sehen can
4. **Informationskonsistenz**: ensure, that no wichtigen Informationen only through Morph-effects vermittelt become

```css
/* Reduzierte animation for user, the dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .morph,
  .morph-shape,
  .morph-size,
  .morph-color,
  .morph-text,
  .morph-path {
    transition: none !important;
    animation: none !important;
  }
  
  .morph-content::after {
    opacity: 0 !important;
  }
  
  .morph-content:hover::after,
  .morph-content:focus::after {
    opacity: 1 !important;
    transition: opacity 0.01s !important;
  }
}
```

## Performance-Uberlegungen

Morph-effects can the Leistung beeinflussen:

1. **Compositor-properties**: Bevorzugen them `transform` and `opacity` for the besten Leistungsergebnisse
2. **layout-Thrashing**: Vermeiden them properties, the the layout auslosen (how Sizesanderungen)
3. **FLIP-Technik**: use them the FLIP-Technik (First, Last, Invert, Play) for performante animations
4. **Komplexe Pfade**: Seien them vorsichtig with komplexen SVG-Pfad-Morphs, the rechenintensiv be can

```javascript
// Performance-Optimierung with FLIP-Technik
function performantMorph(element, targetElement) {
  // First: Ausgangszustand aufzeichnen
  const first = element.getBoundingClientRect();
  
  // Last: Zielzustand aufzeichnen (temporar)
  element.classList.add('morphed');
  const last = element.getBoundingClientRect();
  element.classList.remove('morphed');
  
  // Invert: Transformation berechnen and anwenden
  const deltaX = first.left - last.left;
  const deltaY = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;
  
  element.style.transformOrigin = 'top left';
  element.style.transform = `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `;
  
  // Play: animation abspielen
  requestAnimationFrame(() => {
    element.classList.add('morph-transition');
    element.classList.add('morphed');
    element.style.transform = '';
    
    element.addEventListener('transitionend', () => {
      element.classList.remove('morph-transition');
    }, { once: true });
  });
}
```

## Browser-Kompatibilitat

the meisten Morph-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS Transitions | ✓ | ✓ | ✓ | ✓ | ✓ |
| clip-path | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Pfad-Morphing | ✓ | ✓ | ✓ | ✓ | Nein |
| Web Animations API | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Animations-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-effects](/docs/effects/transitions.md) - Ubergangseffekte between Statesn
- [Transform-effects](/docs/effects/layout/transforms.md) - Transformationseffekte for elements 
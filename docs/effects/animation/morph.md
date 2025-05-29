# Morph-Effekte

Morph-Effekte werden verwendet, um fließende Übergänge zwischen verschiedenen Formen und Zuständen zu erzeugen. Die `@casoon/ui-lib` bietet verschiedene Morph-Effekte, die dazu beitragen, dynamische und interaktive Benutzeroberflächen zu gestalten.

## Grundlegende Verwendung

Der grundlegende Morph-Effekt kann auf jedes Element angewendet werden:

```html
<div class="morph" data-morph-target="#target-element">
  Ausgangsform
</div>
<div id="target-element" style="display: none;">
  Zielform
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Morph-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.morph` | Basisklasse für Morph-Effekte |
| `.morph-shape` | Formübergangseffekt |
| `.morph-size` | Größenübergangseffekt |
| `.morph-color` | Farbübergangseffekt |
| `.morph-text` | Textübergangseffekt |
| `.morph-opacity` | Transparenzübergangseffekt |
| `.morph-position` | Positionsübergangseffekt |
| `.morph-content` | Inhaltsübergangseffekt |
| `.morph-path` | SVG-Pfadübergangseffekt |
| `.morph-hover` | Morph-Effekt bei Hover |
| `.morph-click` | Morph-Effekt bei Klick |
| `.morph-focus` | Morph-Effekt bei Fokus |
| `.morph-auto` | Automatischer Morph-Effekt |
| `.morph-loop` | Sich wiederholender Morph-Effekt |

## Varianten

### Shape-Morph

Der Shape-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Formen:

```html
<div class="morph-shape" data-morph-from="circle" data-morph-to="square">
  Form-Morph
</div>
```

Verfügbare Formübergänge:

```html
<div class="morph-shape-circle-to-square">Von Kreis zu Quadrat</div>
<div class="morph-shape-square-to-triangle">Von Quadrat zu Dreieck</div>
<div class="morph-shape-rectangle-to-oval">Von Rechteck zu Oval</div>
<div class="morph-shape-star-to-circle">Von Stern zu Kreis</div>
<div class="morph-shape-hexagon-to-circle">Von Sechseck zu Kreis</div>
```

Benutzerdefinierte Formübergänge mit clip-path:

```html
<div class="morph-shape-custom" 
     style="--morph-from-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); 
            --morph-to-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);">
  Benutzerdefinierter Form-Morph
</div>
```

### Size-Morph

Der Size-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Größen:

```html
<div class="morph-size" data-morph-from-size="100px" data-morph-to-size="200px">
  Größen-Morph
</div>
```

Verfügbare Größenübergänge:

```html
<div class="morph-size-small-to-large">Von klein zu groß</div>
<div class="morph-size-large-to-small">Von groß zu klein</div>
<div class="morph-size-wide-to-narrow">Von breit zu schmal</div>
<div class="morph-size-tall-to-short">Von hoch zu niedrig</div>
<div class="morph-size-expand">Expandieren</div>
<div class="morph-size-collapse">Kollabieren</div>
```

### Color-Morph

Der Color-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Farben:

```html
<div class="morph-color" data-morph-from-color="#ff0000" data-morph-to-color="#0000ff">
  Farb-Morph
</div>
```

Verfügbare Farbübergänge:

```html
<div class="morph-color-primary-to-secondary">Von Primär- zu Sekundärfarbe</div>
<div class="morph-color-light-to-dark">Von hell zu dunkel</div>
<div class="morph-color-warm-to-cool">Von warm zu kühl</div>
<div class="morph-color-gradient">Farbverlaufsübergang</div>
<div class="morph-color-rainbow">Regenbogenfarbübergang</div>
```

### Text-Morph

Der Text-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Texten:

```html
<div class="morph-text" data-morph-from-text="Hallo" data-morph-to-text="Welt">
  Text-Morph
</div>
```

Verfügbare Textübergänge:

```html
<div class="morph-text-fade">Ausblenden/Einblenden-Übergang</div>
<div class="morph-text-slide">Slide-Übergang</div>
<div class="morph-text-shuffle">Buchstaben-Shuffle</div>
<div class="morph-text-typewriter">Schreibmaschineneffekt</div>
<div class="morph-text-scramble">Textscramble-Effekt</div>
```

### Opacity-Morph

Der Opacity-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Transparenzstufen:

```html
<div class="morph-opacity" data-morph-from-opacity="1" data-morph-to-opacity="0.5">
  Transparenz-Morph
</div>
```

### Position-Morph

Der Position-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Positionen:

```html
<div class="morph-position" data-morph-from-position="top: 0; left: 0;" data-morph-to-position="top: 100px; left: 100px;">
  Positions-Morph
</div>
```

### Content-Morph

Der Content-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen Inhalten:

```html
<div class="morph-content" data-morph-target="#target-content">
  Ausgangsinhalt
</div>
<div id="target-content" style="display: none;">
  Zielinhalt mit komplett anderem HTML
</div>
```

### Path-Morph

Der Path-Morph-Effekt ermöglicht Übergänge zwischen verschiedenen SVG-Pfaden:

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <path class="morph-path" 
        data-morph-from-path="M10,10 L190,10 L190,190 L10,190 Z" 
        data-morph-to-path="M100,10 L190,100 L100,190 L10,100 Z" 
        fill="currentColor" />
</svg>
```

## Interaktive Morph-Effekte

Morph-Effekte können mit Interaktionen kombiniert werden:

```html
<div class="morph-hover" data-morph-to="...">
  Hover für Morph-Effekt
</div>

<button class="morph-click" data-morph-to="...">
  Klicken für Morph-Effekt
</button>

<input class="morph-focus" data-morph-to="...">
```

## Kombination mit anderen Elementen

Morph-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Morph-Effekt

```html
<button class="btn morph-shape-rectangle-to-pill morph-hover">
  Button mit Hover-Morph
</button>
```

### Icons mit Morph-Effekt

```html
<svg class="icon morph-path-hover" viewBox="0 0 24 24">
  <path class="morph-path" 
        data-morph-from-path="M3,12 L21,12" 
        data-morph-to-path="M6,6 L18,18 M18,6 L6,18" 
        stroke="currentColor" stroke-width="2" />
</svg>
```

### Karten mit Morph-Effekt

```html
<div class="card morph-size-hover" data-morph-to-size="scale(1.05)">
  <div class="card-body">
    Karte mit Hover-Zoom
  </div>
</div>
```

### Navigation mit Morph-Effekt

```html
<nav class="navbar">
  <div class="nav-indicator morph-position"></div>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 0;">Home</a>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 100px;">Über uns</a>
  <a href="#" class="nav-link" data-morph-target=".nav-indicator" data-morph-to-position="left: 200px;">Kontakt</a>
</nav>
```

## Animierte Morph-Sequenzen

Morph-Effekte können zu komplexen Animationssequenzen kombiniert werden:

```html
<div class="morph-sequence">
  <div class="morph-step" data-morph-to="..." data-morph-duration="500" data-morph-delay="0"></div>
  <div class="morph-step" data-morph-to="..." data-morph-duration="300" data-morph-delay="500"></div>
  <div class="morph-step" data-morph-to="..." data-morph-duration="700" data-morph-delay="800"></div>
</div>
```

## Anpassung

Die Morph-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Allgemeine Morph-Parameter */
  --morph-duration: 0.5s;
  --morph-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  --morph-delay: 0s;
  
  /* Form-Parameter */
  --morph-circle: circle(50% at 50% 50%);
  --morph-square: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  --morph-triangle: polygon(50% 0%, 100% 100%, 0% 100%);
  --morph-pill: inset(0 0 0 0 round 50px);
  
  /* Größen-Parameter */
  --morph-size-small: 50px;
  --morph-size-medium: 100px;
  --morph-size-large: 200px;
  
  /* Farb-Parameter */
  --morph-color-primary: var(--color-primary);
  --morph-color-secondary: var(--color-secondary);
  --morph-color-light: var(--color-light);
  --morph-color-dark: var(--color-dark);
  
  /* Text-Parameter */
  --morph-text-duration: 0.3s;
  --morph-text-delay: 0.1s;
  
  /* Positions-Parameter */
  --morph-position-offset: 20px;
}
```

## CSS-Implementierung

Beispiele für die CSS-Implementierung der Morph-Effekte:

```css
/* Basis-Morph */
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

/* Größen-Morph */
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

Für komplexere Morph-Effekte wird JavaScript verwendet:

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
      // Weitere Eigenschaften je nach Bedarf
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
    
    // FLIP-Technik (First, Last, Invert, Play) für performante Animationen
    // Weitere Implementierungsdetails...
    
    // Beispiel für einfache Transition mit Web Animations API
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

// Initialisierung aller Morph-Elemente
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[class*="morph-"]').forEach(element => {
    new MorphEffect(element);
  });
});

// SVG-Pfad-Morph mit GSAP (erfordert externe Bibliothek)
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
  // Mit Web Animations API (einfache Version)
  const currentPath = pathElement.getAttribute('d');
  
  // Für komplexe Pfad-Morphs wird eine externe Bibliothek wie GSAP empfohlen
  // Hier ist eine vereinfachte Version
  pathElement.animate([
    { d: currentPath },
    { d: targetPath }
  ], {
    duration: 500,
    fill: 'forwards',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  });
  
  // Nach der Animation den Pfad aktualisieren
  setTimeout(() => {
    pathElement.setAttribute('d', targetPath);
  }, 500);
}

setupSVGMorph();
```

## Barrierefreiheit

Bei der Verwendung von Morph-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Animationspräferenzen**: Respektieren Sie die Einstellung `prefers-reduced-motion`
2. **Lesbarkeit**: Stellen Sie sicher, dass Text während des Morphs lesbar bleibt
3. **Konsistente Benutzererfahrung**: Bieten Sie alternative Methoden für Benutzer, die keine Animationen sehen können
4. **Informationskonsistenz**: Stellen Sie sicher, dass keine wichtigen Informationen nur durch Morph-Effekte vermittelt werden

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
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

## Performance-Überlegungen

Morph-Effekte können die Leistung beeinflussen:

1. **Compositor-Eigenschaften**: Bevorzugen Sie `transform` und `opacity` für die besten Leistungsergebnisse
2. **Layout-Thrashing**: Vermeiden Sie Eigenschaften, die das Layout auslösen (wie Größenänderungen)
3. **FLIP-Technik**: Verwenden Sie die FLIP-Technik (First, Last, Invert, Play) für performante Animationen
4. **Komplexe Pfade**: Seien Sie vorsichtig mit komplexen SVG-Pfad-Morphs, die rechenintensiv sein können

```javascript
// Performance-Optimierung mit FLIP-Technik
function performantMorph(element, targetElement) {
  // First: Ausgangszustand aufzeichnen
  const first = element.getBoundingClientRect();
  
  // Last: Zielzustand aufzeichnen (temporär)
  element.classList.add('morphed');
  const last = element.getBoundingClientRect();
  element.classList.remove('morphed');
  
  // Invert: Transformation berechnen und anwenden
  const deltaX = first.left - last.left;
  const deltaY = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;
  
  element.style.transformOrigin = 'top left';
  element.style.transform = `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `;
  
  // Play: Animation abspielen
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

## Browser-Kompatibilität

Die meisten Morph-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS Transitions | ✓ | ✓ | ✓ | ✓ | ✓ |
| clip-path | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Pfad-Morphing | ✓ | ✓ | ✓ | ✓ | Nein |
| Web Animations API | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-Effekte](/docs/effects/transitions.md) - Übergangseffekte zwischen Zuständen
- [Transform-Effekte](/docs/effects/layout/transforms.md) - Transformationseffekte für Elemente 
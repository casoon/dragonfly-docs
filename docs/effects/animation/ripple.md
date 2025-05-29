# Ripple-Effekte

Ripple-Effekte sind wellenartige Animationen, die von einem Punkt ausgehen und sich kreisförmig ausbreiten. Die `@casoon/ui-lib` bietet verschiedene Ripple-Effekte, die dazu beitragen, interaktive und ansprechende Benutzeroberflächen zu gestalten.

## Grundlegende Verwendung

Der grundlegende Ripple-Effekt kann auf jedes Element angewendet werden:

```html
<button class="ripple">Klick mich</button>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Ripple-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.ripple` | Basisklasse für Ripple-Effekte |
| `.ripple-light` | Heller Ripple-Effekt |
| `.ripple-dark` | Dunkler Ripple-Effekt |
| `.ripple-primary` | Ripple-Effekt in Primärfarbe |
| `.ripple-secondary` | Ripple-Effekt in Sekundärfarbe |
| `.ripple-accent` | Ripple-Effekt in Akzentfarbe |
| `.ripple-success` | Ripple-Effekt in Erfolgsfarbe |
| `.ripple-warning` | Ripple-Effekt in Warnfarbe |
| `.ripple-error` | Ripple-Effekt in Fehlerfarbe |
| `.ripple-info` | Ripple-Effekt in Infofarbe |
| `.ripple-center` | Zentrierter Ripple-Effekt |
| `.ripple-unbounded` | Unbegrenzter Ripple-Effekt |
| `.ripple-fixed` | Fixer Ripple-Effekt |
| `.ripple-persistent` | Dauerhafter Ripple-Effekt |
| `.ripple-slow` | Langsamer Ripple-Effekt |
| `.ripple-fast` | Schneller Ripple-Effekt |

## Varianten

### Farbvarianten

Ripple-Effekte in verschiedenen Farben:

```html
<button class="ripple-light">Heller Ripple</button>
<button class="ripple-dark">Dunkler Ripple</button>
<button class="ripple-primary">Primärfarbener Ripple</button>
<button class="ripple-secondary">Sekundärfarbener Ripple</button>
<button class="ripple-accent">Akzentfarbener Ripple</button>
<button class="ripple-success">Erfolgsripple</button>
<button class="ripple-warning">Warnripple</button>
<button class="ripple-error">Fehlerripple</button>
<button class="ripple-info">Inforipple</button>
```

### Positionierungsvarianten

Verschiedene Positionierungen für Ripple-Effekte:

```html
<button class="ripple-center">Zentrierter Ripple</button>
<div class="ripple-unbounded">Unbegrenzter Ripple</div>
<div class="ripple-fixed">Fixer Ripple</div>
```

### Verhaltensvarinaten

Verschiedene Verhaltensweisen für Ripple-Effekte:

```html
<button class="ripple-persistent">Dauerhafter Ripple</button>
<button class="ripple-slow">Langsamer Ripple</button>
<button class="ripple-fast">Schneller Ripple</button>
```

### Spezialeffekte

Spezielle Ripple-Effekte für besondere Anwendungsfälle:

```html
<button class="ripple-multiple">Mehrfacher Ripple</button>
<button class="ripple-pulse">Pulsierender Ripple</button>
<button class="ripple-gradient">Verlaufsripple</button>
<button class="ripple-radial">Radialer Ripple</button>
<button class="ripple-concentric">Konzentrischer Ripple</button>
```

## Kombination mit anderen Elementen

Ripple-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Ripple-Effekt

```html
<button class="btn btn-primary ripple">Primärbutton mit Ripple</button>
<button class="btn btn-secondary ripple-light">Sekundärbutton mit hellem Ripple</button>
<button class="btn btn-accent ripple-dark">Akzentbutton mit dunklem Ripple</button>
```

### Karten mit Ripple-Effekt

```html
<div class="card ripple">
  <div class="card-body">
    <h3>Karte mit Ripple-Effekt</h3>
    <p>Klicken Sie irgendwo auf die Karte, um den Ripple-Effekt zu sehen.</p>
  </div>
</div>
```

### Listen mit Ripple-Effekt

```html
<ul class="list">
  <li class="list-item ripple">Listenelement mit Ripple</li>
  <li class="list-item ripple">Listenelement mit Ripple</li>
  <li class="list-item ripple">Listenelement mit Ripple</li>
</ul>
```

### Navigationslinks mit Ripple-Effekt

```html
<nav class="navbar">
  <a href="#" class="nav-link ripple">Home</a>
  <a href="#" class="nav-link ripple">Über uns</a>
  <a href="#" class="nav-link ripple">Kontakt</a>
</nav>
```

### Tabs mit Ripple-Effekt

```html
<div class="tabs">
  <button class="tab-button active ripple">Tab 1</button>
  <button class="tab-button ripple">Tab 2</button>
  <button class="tab-button ripple">Tab 3</button>
</div>
```

## Anpassung

Die Ripple-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Allgemeine Ripple-Parameter */
  --ripple-color: rgba(0, 0, 0, 0.1);
  --ripple-duration: 0.6s;
  --ripple-timing-function: ease-out;
  
  /* Farbvarianten */
  --ripple-light-color: rgba(255, 255, 255, 0.3);
  --ripple-dark-color: rgba(0, 0, 0, 0.2);
  --ripple-primary-color: rgba(var(--color-primary-rgb), 0.2);
  --ripple-secondary-color: rgba(var(--color-secondary-rgb), 0.2);
  --ripple-accent-color: rgba(var(--color-accent-rgb), 0.2);
  --ripple-success-color: rgba(var(--color-success-rgb), 0.2);
  --ripple-warning-color: rgba(var(--color-warning-rgb), 0.2);
  --ripple-error-color: rgba(var(--color-error-rgb), 0.2);
  --ripple-info-color: rgba(var(--color-info-rgb), 0.2);
  
  /* Geschwindigkeitsvarianten */
  --ripple-slow-duration: 1s;
  --ripple-fast-duration: 0.3s;
  
  /* Größenparameter */
  --ripple-scale: 4;
  --ripple-initial-scale: 0.2;
  --ripple-opacity-start: 0.5;
  --ripple-opacity-end: 0;
}

/* Dunkles Theme */
.dark-theme {
  --ripple-color: rgba(255, 255, 255, 0.15);
  --ripple-light-color: rgba(255, 255, 255, 0.2);
  --ripple-dark-color: rgba(0, 0, 0, 0.4);
}
```

## CSS-Implementierung

Beispiele für die CSS-Implementierung der Ripple-Effekte:

```css
/* Basis-Ripple */
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
    width: 250%; /* Dynamisch anhand des Elements berechnet */
    height: 250%; /* Dynamisch anhand des Elements berechnet */
    opacity: var(--ripple-opacity-end);
    transform: scale(var(--ripple-scale));
  }
}

/* Farbvarianten */
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

/* und so weiter für die anderen Farbvarianten */

/* Positionierungsvarianten */
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

/* Geschwindigkeitsvarianten */
.ripple-slow::after {
  animation-duration: var(--ripple-slow-duration);
}

.ripple-fast::after {
  animation-duration: var(--ripple-fast-duration);
}

/* Verhaltensvarianten */
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

/* Spezialeffekte */
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

## JavaScript-Integration

Für dynamische Ripple-Effekte wird JavaScript verwendet:

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
    
    // Entferne alte Ripple-Elemente
    const oldRipples = element.querySelectorAll('.js-ripple');
    oldRipples.forEach(ripple => {
      if (ripple.parentNode === element) {
        element.removeChild(ripple);
      }
    });
    
    // Erstelle neues Ripple-Element
    const ripple = document.createElement('span');
    ripple.className = 'js-ripple';
    
    // Setze Ripple-Stil
    this.setRippleStyles(ripple, element, event);
    
    // Füge Ripple zum Element hinzu
    element.appendChild(ripple);
    
    // Starte Animation
    setTimeout(() => {
      ripple.style.transform = this.options.centered 
        ? `translate(-50%, -50%) scale(${this.getScale(element)})`
        : `scale(${this.getScale(element)})`;
      ripple.style.opacity = '0';
    }, 20);
    
    // Entferne Ripple nach Animation
    setTimeout(() => {
      if (ripple.parentNode === element) {
        element.removeChild(ripple);
      }
    }, this.options.duration || 600);
  }
  
  setRippleStyles(ripple, element, event) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    // Grundstil
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

// Initialisierung für alle Ripple-Elemente
document.addEventListener('DOMContentLoaded', () => {
  // Basis-Ripple
  const rippleElements = document.querySelectorAll('.ripple:not(.ripple-center):not(.ripple-fixed):not(.ripple-persistent)');
  new RippleEffect(rippleElements);
  
  // Zentrierter Ripple
  const centeredRippleElements = document.querySelectorAll('.ripple-center');
  new RippleEffect(centeredRippleElements, { centered: true });
  
  // Farbige Ripples
  const colorClasses = ['light', 'dark', 'primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info'];
  colorClasses.forEach(color => {
    const elements = document.querySelectorAll(`.ripple-${color}`);
    new RippleEffect(elements, {
      color: getComputedStyle(document.documentElement).getPropertyValue(`--ripple-${color}-color`)
    });
  });
  
  // Geschwindigkeitsvarianten
  const slowRippleElements = document.querySelectorAll('.ripple-slow');
  new RippleEffect(slowRippleElements, { 
    duration: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ripple-slow-duration')) || 1000 
  });
  
  const fastRippleElements = document.querySelectorAll('.ripple-fast');
  new RippleEffect(fastRippleElements, { 
    duration: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ripple-fast-duration')) || 300 
  });
});

// Alternativ: Einfachere Implementierung mit CSS-Klassen
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

Für einen standardkonformen Material Design Ripple-Effekt kann auch die offizielle Material-Implementierung verwendet werden:

```html
<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
<script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

<button class="mdc-button mdc-ripple-surface">
  <span class="mdc-button__label">Material Design Ripple</span>
</button>

<script>
  // Initialisierung des Material Design Ripple-Effekts
  document.querySelectorAll('.mdc-ripple-surface').forEach(element => {
    mdc.ripple.MDCRipple.attachTo(element);
  });
</script>
```

## Barrierefreiheit

Bei der Verwendung von Ripple-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Animationspräferenzen**: Respektieren Sie die Einstellung `prefers-reduced-motion`
2. **Fokussierbarkeit**: Stellen Sie sicher, dass interaktive Elemente mit Ripple-Effekten auch per Tastatur zugänglich sind
3. **Farbkontrast**: Stellen Sie sicher, dass der Ripple-Effekt ausreichend Kontrast zum Hintergrund bietet
4. **Keine reinen visuellen Hinweise**: Stellen Sie sicher, dass Interaktionsmöglichkeiten nicht nur durch den Ripple-Effekt erkennbar sind

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
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

/* Tastaturfreundliche Ripple-Effekte */
.ripple:focus-visible::after {
  /* Ripple-Effekt bei Tastaturfokus auslösen */
  width: 250%;
  height: 250%;
  opacity: var(--ripple-opacity-end);
  transform: scale(var(--ripple-scale));
  transition: all var(--ripple-duration) var(--ripple-timing-function);
}
```

```javascript
// Ripple-Effekt auch bei Tastaturbedienung
document.querySelectorAll('.ripple').forEach(element => {
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      // Simuliere einen Klick in der Mitte des Elements
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

## Performance-Überlegungen

Ripple-Effekte können die Leistung beeinflussen:

1. **DOM-Operationen**: Minimieren Sie DOM-Manipulationen bei der Erzeugung von Ripple-Elementen
2. **GPU-Beschleunigung**: Verwenden Sie `transform` und `opacity` für die Animation, um die GPU zu nutzen
3. **Recycling**: Wiederverwenden Sie Ripple-Elemente, anstatt bei jedem Klick neue zu erstellen
4. **Cleanup**: Entfernen Sie Ripple-Elemente nach Abschluss der Animation

```javascript
// Leistungsoptimierte Ripple-Implementierung
class OptimizedRipple {
  constructor(elements) {
    this.elements = elements instanceof NodeList ? elements : [elements];
    this.ripplePool = [];
    this.ripplePoolSize = 10;
    this.createRipplePool();
    this.init();
  }
  
  createRipplePool() {
    // Erstelle einen Pool von wiederverwendbaren Ripple-Elementen
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
    // Suche nach einem inaktiven Ripple im Pool
    const inactiveRipple = this.ripplePool.find(ripple => !ripple.isActive);
    
    if (inactiveRipple) {
      inactiveRipple.isActive = true;
      return inactiveRipple;
    }
    
    // Wenn kein inaktives Ripple verfügbar ist, erstelle ein neues
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
    // Rest der Implementierung...
  }
}
```

## Browser-Kompatibilität

Die Ripple-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Ripple | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| JS-Ripple | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Touch-Events | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Hover-Effekte](/docs/effects/interaction/hover.md) - Effekte bei Mauszeiger-Hover
- [Active-Effekte](/docs/effects/interaction/active.md) - Effekte bei Aktivierung eines Elements 
---
title: Shadow Effects
category: Effects
---

# shadow-effects

the shadow-effects the Casoon UI Library bieten a Sammlung from shadow and Tiefeneffekten, the Ihren UI-Elementen Dimension, Tiefe and visuelle Hierarchie verleihen can. these effects sind grundlegend for moderne user interfaces and helfen in doing so, elements vom background abzuheben.

## Uberblick

shadow-effects simulieren the naturliche behavior from Licht and shadow in the realen Welt. You can verwendet become, um the height eines Elements over the Oberflache anzuzeigen, Hierarchie to verdeutlichen and Interaktivitat to signalisieren. the Casoon UI Library bietet verschiedene Arten from shadow, the einfach anzuwenden and anzupassen sind.

## Installation

import them the shadow-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/shadows.css';
```

## Verfugbare classes

### Grundlegende shadow

| Class | Description |
|--------|-------------|
| `.shadow` | Standardmassiger shadow-effect |
| `.shadow-sm` | smaller, subtiler shadow |
| `.shadow-md` | Mittlerer shadow (Standard) |
| `.shadow-lg` | Grosser, deutlicher shadow |
| `.shadow-xl` | Extra grosser shadow |
| `.shadow-2xl` | Doppelt grosser shadow for maximale Tiefe |
| `.shadow-inner` | Innerer shadow, the einen eingepragten effect erzeugt |
| `.shadow-none` | Entfernt jeden shadow |

### shadow-Typen

| Class | Description |
|--------|-------------|
| `.shadow-sharp` | Scharfer, klar definierter shadow |
| `.shadow-soft` | Weicher, diffuser shadow |
| `.shadow-layered` | Mehrschichtiger shadow for more Tiefe |
| `.shadow-ambient` | Gleichmassiger, ambientartiger shadow |
| `.shadow-directional` | Gerichteter shadow, the a spezifische Lichtquelle simuliert |
| `.shadow-gradient` | Verlaufender shadow with Farbubergang |
| `.shadow-multiple` | Kombination aus mehreren shadow for komplexe effects |

### shadow-Colors

| Class | Description |
|--------|-------------|
| `.shadow-dark` | Dunkler shadow (Standard) |
| `.shadow-light` | Heller shadow for dunkle Hintergrunde |
| `.shadow-primary` | shadow in the primaren Themenfarbe |
| `.shadow-secondary` | shadow in the sekundaren Themenfarbe |
| `.shadow-accent` | shadow in the Akzentfarbe |
| `.shadow-info` | shadow in the info-color |
| `.shadow-success` | shadow in the Erfolgsfarbe |
| `.shadow-warning` | shadow in the Warnfarbe |
| `.shadow-error` | shadow in the Fehlerfarbe |

### Interaktive shadow

| Class | Description |
|--------|-------------|
| `.shadow-hover` | Zeigt shadow at Hover on |
| `.shadow-focus` | Zeigt shadow im Fokus-state on |
| `.shadow-active` | Zeigt shadow im aktiven state on |
| `.shadow-animated` | Animierter shadow |
| `.shadow-elevate` | shadow, the beim Hover grosser wird and more Elevation simuliert |
| `.shadow-pulse` | Pulsierender shadow-effect |
| `.shadow-float` | Schwebeeffekt with shadow, the Bewegung simuliert |

## Examples

### Grundlegende shadow

```html
<div class="shadow-examples">
  <div class="shadow-example shadow-sm">
    <div class="content">smaller shadow</div>
  </div>
  
  <div class="shadow-example shadow-md">
    <div class="content">Mittlerer shadow</div>
  </div>
  
  <div class="shadow-example shadow-lg">
    <div class="content">Grosser shadow</div>
  </div>
  
  <div class="shadow-example shadow-xl">
    <div class="content">Extra grosser shadow</div>
  </div>
  
  <div class="shadow-example shadow-2xl">
    <div class="content">Doppelt grosser shadow</div>
  </div>
  
  <div class="shadow-example shadow-inner">
    <div class="content">Innerer shadow</div>
  </div>
</div>

<style>
  .shadow-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .shadow-example {
    height: 150px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .shadow-example .content {
    font-size: 1rem;
    font-weight: 500;
  }
</style>
```

### shadow-Typen

```html
<div class="shadow-types">
  <div class="type-example shadow-sharp">
    <span>Scharfer shadow</span>
  </div>
  
  <div class="type-example shadow-soft">
    <span>Weicher shadow</span>
  </div>
  
  <div class="type-example shadow-layered">
    <span>Mehrschichtiger shadow</span>
  </div>
  
  <div class="type-example shadow-ambient">
    <span>Ambienter shadow</span>
  </div>
  
  <div class="type-example shadow-directional">
    <span>Gerichteter shadow</span>
  </div>
  
  <div class="type-example shadow-gradient">
    <span>Verlaufender shadow</span>
  </div>
</div>

<style>
  .shadow-types {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .type-example {
    height: 150px;
    width: 150px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  .type-example span {
    font-weight: 500;
    text-align: center;
    padding: 1rem;
  }
</style>
```

### Interaktive shadow

```html
<div class="interactive-shadows">
  <button class="shadow-btn shadow-hover">
    Hover-shadow
  </button>
  
  <button class="shadow-btn shadow-focus">
    Fokus-shadow
  </button>
  
  <button class="shadow-btn shadow-active">
    Aktiv-shadow
  </button>
  
  <button class="shadow-btn shadow-animated">
    Animierter shadow
  </button>
  
  <button class="shadow-btn shadow-elevate">
    Elevate-shadow
  </button>
  
  <button class="shadow-btn shadow-float">
    Float-shadow
  </button>
</div>

<style>
  .interactive-shadows {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .shadow-btn {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 6px;
    background-color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
```

### shadow in UI-Components

```html
<div class="ui-shadows">
  <div class="card shadow-md">
    <div class="card-content">
      <h3>Card with shadow</h3>
      <p>these Card verwendet einen mittleren shadow-effect.</p>
      <button class="shadow-sm">more erfahren</button>
    </div>
  </div>
  
  <div class="modal-example shadow-lg">
    <div class="modal-header">
      <h4>Modaler dialog</h4>
      <button class="close-btn shadow-sm">×</button>
    </div>
    <div class="modal-body">
      <p>this modale dialog verwendet einen sizes shadow, um seine importance to betonen.</p>
    </div>
    <div class="modal-footer">
      <button class="shadow-hover">Abbrechen</button>
      <button class="primary shadow-hover">Bestatigen</button>
    </div>
  </div>
  
  <div class="form-control shadow-inner">
    <input type="text" placeholder="Input with innerem shadow">
  </div>
  
  <div class="dropdown shadow-directional">
    <div class="dropdown-header">Dropdown-Menu</div>
    <div class="dropdown-content shadow-layered">
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
  </div>
</div>

<style>
  .ui-shadows {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .card {
    border-radius: 8px;
    background-color: white;
    padding: 1.5rem;
  }
  
  .card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    margin-bottom: 1.5rem;
    color: #666;
  }
  
  .card button {
    padding: 0.5rem 1rem;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal-example {
    border-radius: 8px;
    background-color: white;
    overflow: hidden;
  }
  
  .modal-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-header h4 {
    margin: 0;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  
  .modal-footer button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal-footer button.primary {
    background-color: #2196f3;
    color: white;
  }
  
  .form-control {
    padding: 1rem;
    border-radius: 8px;
    background-color: white;
  }
  
  .form-control input {
    width: 100%;
    padding: 0.75rem;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
  }
  
  .dropdown {
    position: relative;
    border-radius: 8px;
    background-color: white;
  }
  
  .dropdown-header {
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
  
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    z-index: 1;
  }
  
  .dropdown-content a {
    display: block;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    color: #333;
  }
  
  .dropdown-content a:hover {
    background-color: #f5f5f5;
  }
</style>
```

## Customization

the shadow-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende shadow-parameter */
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow-offset-x: 0px;
  --shadow-offset-y: 4px;
  --shadow-blur: 8px;
  --shadow-spread: 0px;
  
  /* shadow-Sizes */
  --shadow-sm-blur: 4px;
  --shadow-md-blur: 8px;
  --shadow-lg-blur: 16px;
  --shadow-xl-blur: 24px;
  --shadow-2xl-blur: 40px;
  
  /* shadow-Typen */
  --shadow-sharp-blur: 2px;
  --shadow-soft-blur: 20px;
  --shadow-layered-blur: 12px;
  
  /* shadow-Colors */
  --shadow-dark-color: rgba(0, 0, 0, 0.2);
  --shadow-light-color: rgba(255, 255, 255, 0.2);
  --shadow-primary-color: rgba(33, 150, 243, 0.3);
  --shadow-success-color: rgba(76, 175, 80, 0.3);
  --shadow-warning-color: rgba(255, 152, 0, 0.3);
  --shadow-error-color: rgba(244, 67, 54, 0.3);
  
  /* animation */
  --shadow-animation-duration: 2s;
  --shadow-animation-timing: ease-in-out;
}
```

## CSS-Implementation

the shadow-effects become hauptsachlich through the `box-shadow`-Property implementiert:

```css
/* Base-shadow */
.shadow {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-spread) var(--shadow-color);
}

/* shadow-Sizes */
.shadow-sm {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-sm-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-md {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-lg {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-lg-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-xl {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-xl-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-2xl {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-2xl-blur) var(--shadow-spread) var(--shadow-color);
}

/* Innerer shadow */
.shadow-inner {
  box-shadow: inset var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-spread) var(--shadow-color);
}

/* shadow-Typen */
.shadow-sharp {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-sharp-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-soft {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-soft-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-layered {
  box-shadow: 
    var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-sm-blur) var(--shadow-spread) var(--shadow-color),
    var(--shadow-offset-x) calc(var(--shadow-offset-y) * 2) var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color),
    var(--shadow-offset-x) calc(var(--shadow-offset-y) * 3) var(--shadow-lg-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-ambient {
  box-shadow: 0 0 var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color);
}

.shadow-directional {
  box-shadow: 
    calc(var(--shadow-offset-x) * -1) calc(var(--shadow-offset-y) * -1) var(--shadow-sm-blur) rgba(255, 255, 255, 0.1),
    var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-md-blur) var(--shadow-color);
}

.shadow-gradient {
  position: relative;
  overflow: hidden;
}

.shadow-gradient::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: var(--shadow-lg-blur);
  background: radial-gradient(ellipse at center, var(--shadow-color) 0%, transparent 70%);
  transform: translateY(-50%);
  z-index: -1;
}

/* shadow-Colors */
.shadow-dark {
  --shadow-color: var(--shadow-dark-color);
}

.shadow-light {
  --shadow-color: var(--shadow-light-color);
}

.shadow-primary {
  --shadow-color: var(--shadow-primary-color);
}

.shadow-success {
  --shadow-color: var(--shadow-success-color);
}

.shadow-warning {
  --shadow-color: var(--shadow-warning-color);
}

.shadow-error {
  --shadow-color: var(--shadow-error-color);
}

/* Interaktive shadow */
.shadow-hover {
  transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
  box-shadow: var(--shadow-offset-x) calc(var(--shadow-offset-y) * 1.5) calc(var(--shadow-blur) * 1.5) var(--shadow-spread) var(--shadow-color);
}

.shadow-focus {
  transition: box-shadow 0.3s ease;
}

.shadow-focus:focus {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
}

.shadow-active {
  transition: box-shadow 0.3s ease;
}

.shadow-active:active {
  box-shadow: var(--shadow-offset-x) calc(var(--shadow-offset-y) * 0.5) calc(var(--shadow-blur) * 0.5) var(--shadow-spread) var(--shadow-color);
}

/* Animierte shadow */
.shadow-animated {
  animation: shadow-pulse var(--shadow-animation-duration) var(--shadow-animation-timing) infinite;
}

@keyframes shadow-pulse {
  0%, 100% {
    box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color);
  }
  50% {
    box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) calc(var(--shadow-md-blur) * 1.5) var(--shadow-spread) var(--shadow-color);
  }
}

.shadow-elevate {
  transition: all 0.3s ease;
}

.shadow-elevate:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-offset-x) calc(var(--shadow-offset-y) * 2) calc(var(--shadow-blur) * 1.5) var(--shadow-spread) var(--shadow-color);
}

.shadow-float {
  animation: shadow-float 6s ease-in-out infinite;
  transform-origin: center center;
}

@keyframes shadow-float {
  0%, 100% {
    transform: translateY(0);
    box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: var(--shadow-offset-x) calc(var(--shadow-offset-y) * 2) calc(var(--shadow-blur) * 1.5) var(--shadow-spread) var(--shadow-color);
  }
}
```

## JavaScript-Unterstutzung

for dynamische shadow-effects, the on Mausbewegungen reagieren, kann folgendes JavaScript verwendet become:

```javascript
// Dynamische shadow, the on Mausbewegungen reagieren
document.querySelectorAll('.shadow-dynamic').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-position within des Elements
    const y = e.clientY - rect.top;  // Y-position within des Elements
    
    // position relativ zum element (0-1)
    const relX = x / rect.width;
    const relY = y / rect.height;
    
    // shadow-Versatz basierend on the Mausposition berechnen
    const offsetX = (relX - 0.5) * 10;
    const offsetY = (relY - 0.5) * 10;
    
    // shadow aktualisieren
    element.style.boxShadow = `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.1)`;
  });
  
  element.addEventListener('mouseleave', () => {
    // shadow zurucksetzen
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});
```

## Fortgeschrittene shadow-Techniken

### Mehrfarbige shadow

```css
.shadow-multicolor {
  box-shadow:
    -5px -5px 10px rgba(255, 0, 0, 0.2),
    0px 5px 10px rgba(0, 0, 255, 0.2),
    5px -5px 10px rgba(0, 255, 0, 0.2);
}
```

### 3D-shadow with CSS-Perspektive

```css
.shadow-3d-containers {
  perspective: 800px;
}

.shadow-3d {
  position: relative;
  transform-style: preserve-3d;
}

.shadow-3d::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  transform: translateZ(-10px) rotateX(180deg) scale(0.9);
  filter: blur(10px);
  z-index: -1;
}
```

## Accessibility

at the Usage from shadow-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Kontrast between Elementen also without shadow ausreichend ist
2. **animations**: Vermeiden them ubermassig animierte shadow, the for Nutzer with vestibularen Storungen problematisch be can
3. **Alternative visuelle Notee**: Verlassen them oneself not only on shadow, um Interaktivitat or Hierarchie anzuzeigen

```css
/* Reduzierte Bewegung for animierte shadow */
@media (prefers-reduced-motion: reduce) {
  .shadow-animated,
  .shadow-float,
  .shadow-pulse {
    animation: none !important;
    transition: none !important;
  }
  
  .shadow-elevate:hover {
    transform: none;
  }
}

/* Verbesserte Fokus-Display for bessere Accessibility */
.shadow-focus:focus {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5);
  outline: 2px solid transparent; /* Beibehaltung des Fokus-Rings */
}
```

## Performance-Optimierung

shadow-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Komplexitat reduzieren**: Vermeiden them several komplexe shadow on einer Seite
2. **Hardware-Beschleunigung**: use them `will-change` for animierte shadow
3. **shadow-Sizes limitieren**: very size shadow can the Performance beeintrachtigen

```css
/* Performance-Optimierung for shadow-effects */
.shadow-optimized {
  will-change: box-shadow;
}

/* Mobile Optimierung */
@media (max-width: 768px) {
  :root {
    --shadow-lg-blur: 12px;
    --shadow-xl-blur: 18px;
    --shadow-2xl-blur: 24px;
  }
  
  .shadow-layered {
    box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-md-blur) var(--shadow-spread) var(--shadow-color);
  }
}
```

## Browser-Kompatibilitat

the shadow-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mehrfache shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| Inset-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |
| filter | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
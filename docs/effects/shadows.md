---
title: Shadow Effects
category: Effects
---

# Schatten-Effekte

Die Schatten-Effekte der Casoon UI Library bieten eine Sammlung von Schatten und Tiefeneffekten, die Ihren UI-Elementen Dimension, Tiefe und visuelle Hierarchie verleihen können. Diese Effekte sind grundlegend für moderne Benutzeroberflächen und helfen dabei, Elemente vom Hintergrund abzuheben.

## Überblick

Schatten-Effekte simulieren das natürliche Verhalten von Licht und Schatten in der realen Welt. Sie können verwendet werden, um die Höhe eines Elements über der Oberfläche anzuzeigen, Hierarchie zu verdeutlichen und Interaktivität zu signalisieren. Die Casoon UI Library bietet verschiedene Arten von Schatten, die einfach anzuwenden und anzupassen sind.

## Installation

Importieren Sie das Schatten-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/shadows.css';
```

## Verfügbare Klassen

### Grundlegende Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow` | Standardmäßiger Schatten-Effekt |
| `.shadow-sm` | Kleiner, subtiler Schatten |
| `.shadow-md` | Mittlerer Schatten (Standard) |
| `.shadow-lg` | Großer, deutlicher Schatten |
| `.shadow-xl` | Extra großer Schatten |
| `.shadow-2xl` | Doppelt großer Schatten für maximale Tiefe |
| `.shadow-inner` | Innerer Schatten, der einen eingeprägten Effekt erzeugt |
| `.shadow-none` | Entfernt jeden Schatten |

### Schatten-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-sharp` | Scharfer, klar definierter Schatten |
| `.shadow-soft` | Weicher, diffuser Schatten |
| `.shadow-layered` | Mehrschichtiger Schatten für mehr Tiefe |
| `.shadow-ambient` | Gleichmäßiger, ambientartiger Schatten |
| `.shadow-directional` | Gerichteter Schatten, der eine spezifische Lichtquelle simuliert |
| `.shadow-gradient` | Verlaufender Schatten mit Farbübergang |
| `.shadow-multiple` | Kombination aus mehreren Schatten für komplexe Effekte |

### Schatten-Farben

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-dark` | Dunkler Schatten (Standard) |
| `.shadow-light` | Heller Schatten für dunkle Hintergründe |
| `.shadow-primary` | Schatten in der primären Themenfarbe |
| `.shadow-secondary` | Schatten in der sekundären Themenfarbe |
| `.shadow-accent` | Schatten in der Akzentfarbe |
| `.shadow-info` | Schatten in der Info-Farbe |
| `.shadow-success` | Schatten in der Erfolgsfarbe |
| `.shadow-warning` | Schatten in der Warnfarbe |
| `.shadow-error` | Schatten in der Fehlerfarbe |

### Interaktive Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-hover` | Zeigt Schatten bei Hover an |
| `.shadow-focus` | Zeigt Schatten im Fokus-Zustand an |
| `.shadow-active` | Zeigt Schatten im aktiven Zustand an |
| `.shadow-animated` | Animierter Schatten |
| `.shadow-elevate` | Schatten, der beim Hover größer wird und mehr Elevation simuliert |
| `.shadow-pulse` | Pulsierender Schatten-Effekt |
| `.shadow-float` | Schwebeeffekt mit Schatten, der Bewegung simuliert |

## Beispiele

### Grundlegende Schatten

```html
<div class="shadow-examples">
  <div class="shadow-example shadow-sm">
    <div class="content">Kleiner Schatten</div>
  </div>
  
  <div class="shadow-example shadow-md">
    <div class="content">Mittlerer Schatten</div>
  </div>
  
  <div class="shadow-example shadow-lg">
    <div class="content">Großer Schatten</div>
  </div>
  
  <div class="shadow-example shadow-xl">
    <div class="content">Extra großer Schatten</div>
  </div>
  
  <div class="shadow-example shadow-2xl">
    <div class="content">Doppelt großer Schatten</div>
  </div>
  
  <div class="shadow-example shadow-inner">
    <div class="content">Innerer Schatten</div>
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

### Schatten-Typen

```html
<div class="shadow-types">
  <div class="type-example shadow-sharp">
    <span>Scharfer Schatten</span>
  </div>
  
  <div class="type-example shadow-soft">
    <span>Weicher Schatten</span>
  </div>
  
  <div class="type-example shadow-layered">
    <span>Mehrschichtiger Schatten</span>
  </div>
  
  <div class="type-example shadow-ambient">
    <span>Ambienter Schatten</span>
  </div>
  
  <div class="type-example shadow-directional">
    <span>Gerichteter Schatten</span>
  </div>
  
  <div class="type-example shadow-gradient">
    <span>Verlaufender Schatten</span>
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

### Interaktive Schatten

```html
<div class="interactive-shadows">
  <button class="shadow-btn shadow-hover">
    Hover-Schatten
  </button>
  
  <button class="shadow-btn shadow-focus">
    Fokus-Schatten
  </button>
  
  <button class="shadow-btn shadow-active">
    Aktiv-Schatten
  </button>
  
  <button class="shadow-btn shadow-animated">
    Animierter Schatten
  </button>
  
  <button class="shadow-btn shadow-elevate">
    Elevate-Schatten
  </button>
  
  <button class="shadow-btn shadow-float">
    Float-Schatten
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

### Schatten in UI-Komponenten

```html
<div class="ui-shadows">
  <div class="card shadow-md">
    <div class="card-content">
      <h3>Karte mit Schatten</h3>
      <p>Diese Karte verwendet einen mittleren Schatten-Effekt.</p>
      <button class="shadow-sm">Mehr erfahren</button>
    </div>
  </div>
  
  <div class="modal-example shadow-lg">
    <div class="modal-header">
      <h4>Modaler Dialog</h4>
      <button class="close-btn shadow-sm">×</button>
    </div>
    <div class="modal-body">
      <p>Dieser modale Dialog verwendet einen großen Schatten, um seine Wichtigkeit zu betonen.</p>
    </div>
    <div class="modal-footer">
      <button class="shadow-hover">Abbrechen</button>
      <button class="primary shadow-hover">Bestätigen</button>
    </div>
  </div>
  
  <div class="form-control shadow-inner">
    <input type="text" placeholder="Eingabefeld mit innerem Schatten">
  </div>
  
  <div class="dropdown shadow-directional">
    <div class="dropdown-header">Dropdown-Menü</div>
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

## Anpassung

Die Schatten-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Schatten-Parameter */
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow-offset-x: 0px;
  --shadow-offset-y: 4px;
  --shadow-blur: 8px;
  --shadow-spread: 0px;
  
  /* Schatten-Größen */
  --shadow-sm-blur: 4px;
  --shadow-md-blur: 8px;
  --shadow-lg-blur: 16px;
  --shadow-xl-blur: 24px;
  --shadow-2xl-blur: 40px;
  
  /* Schatten-Typen */
  --shadow-sharp-blur: 2px;
  --shadow-soft-blur: 20px;
  --shadow-layered-blur: 12px;
  
  /* Schatten-Farben */
  --shadow-dark-color: rgba(0, 0, 0, 0.2);
  --shadow-light-color: rgba(255, 255, 255, 0.2);
  --shadow-primary-color: rgba(33, 150, 243, 0.3);
  --shadow-success-color: rgba(76, 175, 80, 0.3);
  --shadow-warning-color: rgba(255, 152, 0, 0.3);
  --shadow-error-color: rgba(244, 67, 54, 0.3);
  
  /* Animation */
  --shadow-animation-duration: 2s;
  --shadow-animation-timing: ease-in-out;
}
```

## CSS-Implementierung

Die Schatten-Effekte werden hauptsächlich durch die `box-shadow`-Eigenschaft implementiert:

```css
/* Basis-Schatten */
.shadow {
  box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-spread) var(--shadow-color);
}

/* Schatten-Größen */
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

/* Innerer Schatten */
.shadow-inner {
  box-shadow: inset var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-spread) var(--shadow-color);
}

/* Schatten-Typen */
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

/* Schatten-Farben */
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

/* Interaktive Schatten */
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

/* Animierte Schatten */
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

## JavaScript-Unterstützung

Für dynamische Schatten-Effekte, die auf Mausbewegungen reagieren, kann folgendes JavaScript verwendet werden:

```javascript
// Dynamische Schatten, die auf Mausbewegungen reagieren
document.querySelectorAll('.shadow-dynamic').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-Position innerhalb des Elements
    const y = e.clientY - rect.top;  // Y-Position innerhalb des Elements
    
    // Position relativ zum Element (0-1)
    const relX = x / rect.width;
    const relY = y / rect.height;
    
    // Schatten-Versatz basierend auf der Mausposition berechnen
    const offsetX = (relX - 0.5) * 10;
    const offsetY = (relY - 0.5) * 10;
    
    // Schatten aktualisieren
    element.style.boxShadow = `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.1)`;
  });
  
  element.addEventListener('mouseleave', () => {
    // Schatten zurücksetzen
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});
```

## Fortgeschrittene Schatten-Techniken

### Mehrfarbige Schatten

```css
.shadow-multicolor {
  box-shadow:
    -5px -5px 10px rgba(255, 0, 0, 0.2),
    0px 5px 10px rgba(0, 0, 255, 0.2),
    5px -5px 10px rgba(0, 255, 0, 0.2);
}
```

### 3D-Schatten mit CSS-Perspektive

```css
.shadow-3d-container {
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

## Barrierefreiheit

Bei der Verwendung von Schatten-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Kontrast zwischen Elementen auch ohne Schatten ausreichend ist
2. **Animationen**: Vermeiden Sie übermäßig animierte Schatten, die für Nutzer mit vestibulären Störungen problematisch sein können
3. **Alternative visuelle Hinweise**: Verlassen Sie sich nicht nur auf Schatten, um Interaktivität oder Hierarchie anzuzeigen

```css
/* Reduzierte Bewegung für animierte Schatten */
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

/* Verbesserte Fokus-Anzeige für bessere Barrierefreiheit */
.shadow-focus:focus {
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.5);
  outline: 2px solid transparent; /* Beibehaltung des Fokus-Rings */
}
```

## Performance-Optimierung

Schatten-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Komplexität reduzieren**: Vermeiden Sie mehrere komplexe Schatten auf einer Seite
2. **Hardware-Beschleunigung**: Nutzen Sie `will-change` für animierte Schatten
3. **Schatten-Größen limitieren**: Sehr große Schatten können die Performance beeinträchtigen

```css
/* Performance-Optimierung für Schatten-Effekte */
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

## Browser-Kompatibilität

Die Schatten-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mehrfache Schatten | ✓ | ✓ | ✓ | ✓ | ✓ |
| Inset-Schatten | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-Variablen | ✓ | ✓ | ✓ | ✓ | ✗ |
| filter | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht vollständig unterstützen, werden vereinfachte Fallback-Stile bereitgestellt. 
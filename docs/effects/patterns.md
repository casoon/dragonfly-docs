---
title: Pattern Effects
category: Effects
---

# Pattern-effects

the Pattern-effects the Casoon UI Library bieten a umfangreiche Sammlung from dekorativen Mustern and Hintergrunden, the Ihren designs visuelle Tiefe, Structure and Personlichkeit verleihen can. these pattern sind vielseitig einsetzbar and can for verschiedene Designzwecke angepasst become.

## Uberblick

Pattern-effects sind oneself wiederholende visuelle elements, the zur Gestaltung from Hintergrunden, Trennlinien, Dekorationen or zur visuellen Strukturierung from Inhalten verwendet become can. the Casoon UI Library bietet verschiedene Arten from Mustern, from einfachen geometrischen Formen until hin to komplexen, organischen designs.

## Installation

import them the Pattern-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/patterns.css';
```

## Verfugbare classes

### Grundlegende Pattern-Typen

| Class | Description |
|--------|-------------|
| `.pattern` | Standardmassiger Pattern-effect |
| `.pattern-bg` | Pattern optimiert for Hintergrunde |
| `.pattern-border` | Pattern for border and Rander |
| `.pattern-divider` | Pattern for Trennlinien |
| `.pattern-accent` | Pattern for Akzentelemente |

### Geometrische pattern

| Class | Description |
|--------|-------------|
| `.pattern-grid` | Regelmassiges Rastermuster |
| `.pattern-dots` | Punktmuster in verschiedenen Anordnungen |
| `.pattern-lines` | Linienmuster (horizontal, vertikal, diagonal) |
| `.pattern-stripes` | Streifenmuster with verschiedenen Breiten |
| `.pattern-zigzag` | Zickzack-pattern |
| `.pattern-waves` | Wellenmuster |
| `.pattern-triangles` | Dreieckmuster |
| `.pattern-squares` | Quadratmuster |
| `.pattern-circles` | Kreismuster |
| `.pattern-hexagons` | Sechseckmuster |
| `.pattern-diamonds` | Rautenmuster |
| `.pattern-chevron` | Chevron-/Pfeilmuster |

### Organische and dekorative pattern

| Class | Description |
|--------|-------------|
| `.pattern-floral` | Blumen- and Pflanzenmuster |
| `.pattern-organic` | Naturlich wirkende, fliessende pattern |
| `.pattern-abstract` | Abstrakte, not-geometrische pattern |
| `.pattern-confetti` | Konfetti-/Sprenkel-pattern |
| `.pattern-doodle` | Handgezeichnet wirkende pattern |
| `.pattern-leaves` | Blattmuster |
| `.pattern-bubbles` | Blasenmuster |
| `.pattern-maze` | Labyrinth-ahnliche pattern |

### Dichte and Sizesvarianten

| Class | Description |
|--------|-------------|
| `.pattern-dense` | Dicht gepacktes pattern |
| `.pattern-sparse` | Weit auseinander liegendes pattern |
| `.pattern-sm` | Kleines Musterdesign |
| `.pattern-md` | Mittleres Musterdesign (Standard) |
| `.pattern-lg` | Grosses Musterdesign |
| `.pattern-xl` | Extra grosses Musterdesign |

### Overlay-pattern

| Class | Description |
|--------|-------------|
| `.pattern-overlay` | pattern as Overlay over anderen Elementen |
| `.pattern-overlay-light` | Helles Overlay-pattern |
| `.pattern-overlay-dark` | Dunkles Overlay-pattern |
| `.pattern-overlay-gradient` | Verlaufendes Overlay-pattern |
| `.pattern-fade-top` | after oben ausblendendes pattern |
| `.pattern-fade-bottom` | after unten ausblendendes pattern |

## Examples

### Grundlegende Hintergrundmuster

```html
<div class="pattern-examples">
  <div class="pattern-example pattern-bg pattern-dots">
    <h3>Punktmuster</h3>
  </div>
  
  <div class="pattern-example pattern-bg pattern-grid">
    <h3>Rastermuster</h3>
  </div>
  
  <div class="pattern-example pattern-bg pattern-lines">
    <h3>Linienmuster</h3>
  </div>
  
  <div class="pattern-example pattern-bg pattern-stripes">
    <h3>Streifenmuster</h3>
  </div>
</div>

<style>
  .pattern-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .pattern-example {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #333;
    background-color: #f5f5f5;
  }
  
  .pattern-example h3 {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
</style>
```

### Komplexere Geometrische pattern

```html
<div class="geometric-patterns">
  <div class="pattern-card pattern-bg pattern-hexagons">
    <div class="content">
      <h3>Sechseckmuster</h3>
      <p>a elegantes Sechseckmuster for moderne designs.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-triangles">
    <div class="content">
      <h3>Dreieckmuster</h3>
      <p>a dynamisches Dreieckmuster for energiegeladene designs.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-circles">
    <div class="content">
      <h3>Kreismuster</h3>
      <p>a sanftes Kreismuster for freundliche Interfaces.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-zigzag">
    <div class="content">
      <h3>Zickzackmuster</h3>
      <p>a dynamisches Zickzackmuster for lebendige designs.</p>
    </div>
  </div>
</div>

<style>
  .geometric-patterns {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #f0f0f0;
  }
  
  .pattern-card {
    min-height: 250px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .pattern-card .content {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1.5rem;
    border-radius: 6px;
    text-align: center;
  }
  
  .pattern-card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .pattern-card p {
    margin: 0;
    opacity: 0.8;
  }
</style>
```

### Organische pattern

```html
<div class="organic-patterns">
  <div class="organic-pattern pattern-bg pattern-floral">
    <div class="content">Florales pattern</div>
  </div>
  
  <div class="organic-pattern pattern-bg pattern-leaves">
    <div class="content">Blattmuster</div>
  </div>
  
  <div class="organic-pattern pattern-bg pattern-organic">
    <div class="content">Organisches pattern</div>
  </div>
  
  <div class="organic-pattern pattern-bg pattern-bubbles">
    <div class="content">Blasenmuster</div>
  </div>
</div>

<style>
  .organic-patterns {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #e8f5e9;
  }
  
  .organic-pattern {
    height: 200px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .organic-pattern .content {
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    font-weight: 500;
  }
</style>
```

### Overlay-pattern and Anwendungen

```html
<div class="overlay-patterns">
  <div class="hero-section pattern-overlay pattern-dots-lg">
    <div class="hero-content">
      <h2>Uberlagerungsmuster</h2>
      <p>pattern can as Overlay over Bildern or farbigen Hintergrunden verwendet become.</p>
      <button>more erfahren</button>
    </div>
  </div>
  
  <div class="card-with-pattern">
    <div class="card-header pattern-bg pattern-stripes">
      <h3>Cardnuberschrift</h3>
    </div>
    <div class="card-body">
      <p>pattern can for verschiedene areas einer Component verwendet become.</p>
    </div>
    <div class="card-footer pattern-bg pattern-dots-sm">
      <button>Aktion</button>
    </div>
  </div>
  
  <div class="pattern-divider-example">
    <div class="content-section">
      <h3>Oberer area</h3>
      <p>contents before dem Trenner.</p>
    </div>
    <div class="pattern-divider pattern-zigzag"></div>
    <div class="content-section">
      <h3>Unterer area</h3>
      <p>contents after dem Trenner.</p>
    </div>
  </div>
</div>

<style>
  .overlay-patterns {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
  }
  
  .hero-section {
    position: relative;
    min-height: 300px;
    background-color: #3f51b5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 2rem;
  }
  
  .hero-content {
    text-align: center;
    max-width: 600px;
    z-index: 1;
  }
  
  .hero-content button {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    background-color: white;
    color: #3f51b5;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }
  
  .card-with-pattern {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    padding: 1.5rem;
    color: white;
    background-color: #f50057;
  }
  
  .card-body {
    padding: 1.5rem;
    background-color: white;
  }
  
  .card-footer {
    padding: 1rem 1.5rem;
    background-color: #f5f5f5;
    display: flex;
    justify-content: flex-end;
  }
  
  .card-footer button {
    padding: 0.5rem 1rem;
    background-color: #f50057;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .pattern-divider-example {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .content-section {
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
  }
  
  .pattern-divider {
    height: 32px;
    opacity: 0.7;
  }
</style>
```

## Customization

the Pattern-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Pattern-parameter */
  --pattern-opacity: 0.15;
  --pattern-color: currentColor;
  --pattern-bg-color: transparent;
  --pattern-size: 20px;
  --pattern-spacing: 5px;
  --pattern-line-width: 1px;
  
  /* pattern-Variants */
  --pattern-dots-size: 3px;
  --pattern-dots-spacing: 15px;
  --pattern-grid-size: 20px;
  --pattern-grid-line-width: 1px;
  --pattern-stripes-width: 10px;
  --pattern-stripes-angle: 45deg;
  --pattern-zigzag-size: 15px;
  --pattern-zigzag-width: 2px;
  
  /* Pattern-Colors */
  --pattern-primary-color: var(--color-primary, #3f51b5);
  --pattern-secondary-color: var(--color-secondary, #f50057);
  --pattern-dark-color: rgba(0, 0, 0, 0.1);
  --pattern-light-color: rgba(255, 255, 255, 0.1);
}
```

## CSS-Implementation

the pattern become hauptsachlich through CSS-Hintergrundbilder, Gradienten and wiederholende elements implementiert:

```css
/* Base-Pattern */
.pattern {
  position: relative;
}

.pattern-bg {
  background-color: var(--pattern-bg-color);
  background-size: var(--pattern-size) var(--pattern-size);
  background-position: 0 0;
  background-repeat: repeat;
}

/* Punktmuster */
.pattern-dots {
  --pattern-dots-size: var(--pattern-dots-size, 3px);
  --pattern-dots-spacing: var(--pattern-dots-spacing, 15px);
  
  background-image: radial-gradient(
    var(--pattern-color) var(--pattern-dots-size),
    transparent var(--pattern-dots-size)
  );
  background-size: var(--pattern-dots-spacing) var(--pattern-dots-spacing);
}

/* Rastermuster */
.pattern-grid {
  --pattern-grid-size: var(--pattern-grid-size, 20px);
  --pattern-grid-line-width: var(--pattern-grid-line-width, 1px);
  
  background-image:
    linear-gradient(
      to right,
      var(--pattern-color) var(--pattern-grid-line-width),
      transparent var(--pattern-grid-line-width)
    ),
    linear-gradient(
      to bottom,
      var(--pattern-color) var(--pattern-grid-line-width),
      transparent var(--pattern-grid-line-width)
    );
  background-size: var(--pattern-grid-size) var(--pattern-grid-size);
}

/* Streifenmuster */
.pattern-stripes {
  --pattern-stripes-width: var(--pattern-stripes-width, 10px);
  --pattern-stripes-angle: var(--pattern-stripes-angle, 45deg);
  
  background-image: linear-gradient(
    var(--pattern-stripes-angle),
    var(--pattern-color) 25%,
    transparent 25%,
    transparent 50%,
    var(--pattern-color) 50%,
    var(--pattern-color) 75%,
    transparent 75%,
    transparent
  );
  background-size: var(--pattern-stripes-width) var(--pattern-stripes-width);
}

/* Overlay-pattern */
.pattern-overlay {
  position: relative;
}

.pattern-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--pattern-bg-color);
  background-size: var(--pattern-size) var(--pattern-size);
  background-position: 0 0;
  background-repeat: repeat;
  opacity: var(--pattern-opacity);
  z-index: 1;
  pointer-events: none;
}

/* Mustervarianten for Overlays */
.pattern-overlay.pattern-dots::before {
  background-image: radial-gradient(
    var(--pattern-color) var(--pattern-dots-size),
    transparent var(--pattern-dots-size)
  );
  background-size: var(--pattern-dots-spacing) var(--pattern-dots-spacing);
}
```

## Fortgeschrittene pattern

### SVG-basierte pattern

Komplexere pattern can with SVG implementiert become:

```css
.pattern-hexagons {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E");
}

.pattern-triangles {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

### CSS-generierte pattern

some pattern can through geschickte Kombination from CSS-properties erzeugt become:

```css
.pattern-zigzag {
  --zigzag-width: 40px;
  --zigzag-height: 20px;
  
  background: 
    linear-gradient(135deg, var(--pattern-color) 25%, transparent 25%) 0 0,
    linear-gradient(225deg, var(--pattern-color) 25%, transparent 25%) 0 0,
    linear-gradient(315deg, var(--pattern-color) 25%, transparent 25%) 0 0,
    linear-gradient(45deg, var(--pattern-color) 25%, transparent 25%) 0 0;
  background-size: var(--zigzag-width) var(--zigzag-height);
  background-color: var(--pattern-bg-color);
}

.pattern-checkerboard {
  background-image: 
    linear-gradient(45deg, var(--pattern-color) 25%, transparent 25%),
    linear-gradient(-45deg, var(--pattern-color) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--pattern-color) 75%),
    linear-gradient(-45deg, transparent 75%, var(--pattern-color) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
```

## Accessibility

at the Usage from Pattern-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Text on gemusterten Hintergrunden ausreichend lesbar bleibt
2. **Ablenkung**: use them subtile pattern, the not vom content ablenken
3. **animation**: Vermeiden them animierte pattern, the Bewegungsempfindlichkeiten auslosen konnten

```css
/* Verbesserte Lesbarkeit for Text on Mustern */
.pattern-with-text {
  --pattern-opacity: 0.1;
}

.pattern-with-text .text-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 4px;
}

/* Reduzierte visuelle Komplexitat */
@media (prefers-reduced-motion: reduce) {
  :root {
    --pattern-opacity: 0.1;
    --pattern-size: 30px;
  }
}
```

## Performance-Optimierung

Pattern-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Einfache pattern**: use them moglichst einfache pattern for bessere Performance
2. **SVG-Optimierung**: Minimieren them SVG-Dateien for Pattern-effects
3. **Cache-Busting**: use them the Browser-Caching for Pattern-Grafiken

```css
/* Performance-Optimierung for Pattern-effects */
.pattern-optimized {
  will-change: background-image;
}

/* Reduzierte Komplexitat for mobile Gerate */
@media (max-width: 768px) {
  :root {
    --pattern-opacity: 0.1;
    --pattern-size: 30px;
    --pattern-spacing: 20px;
  }
  
  .pattern-complex {
    background-image: none;
    background-color: var(--pattern-bg-color);
  }
}
```

## Browser-Kompatibilitat

the Pattern-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS Backgrounds | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Gradients | ✓ | ✓ | ✓ | ✓ | Teilweise |
| SVG Hintergrunde | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
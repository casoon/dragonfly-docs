---
title: Pattern Effects
category: Effects
---

# Pattern-Effekte

Die Pattern-Effekte der Casoon UI Library bieten eine umfangreiche Sammlung von dekorativen Mustern und Hintergründen, die Ihren Designs visuelle Tiefe, Struktur und Persönlichkeit verleihen können. Diese Muster sind vielseitig einsetzbar und können für verschiedene Designzwecke angepasst werden.

## Überblick

Pattern-Effekte sind sich wiederholende visuelle Elemente, die zur Gestaltung von Hintergründen, Trennlinien, Dekorationen oder zur visuellen Strukturierung von Inhalten verwendet werden können. Die Casoon UI Library bietet verschiedene Arten von Mustern, von einfachen geometrischen Formen bis hin zu komplexen, organischen Designs.

## Installation

Importieren Sie das Pattern-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/patterns.css';
```

## Verfügbare Klassen

### Grundlegende Pattern-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern` | Standardmäßiger Pattern-Effekt |
| `.pattern-bg` | Pattern optimiert für Hintergründe |
| `.pattern-border` | Pattern für Rahmen und Ränder |
| `.pattern-divider` | Pattern für Trennlinien |
| `.pattern-accent` | Pattern für Akzentelemente |

### Geometrische Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-grid` | Regelmäßiges Rastermuster |
| `.pattern-dots` | Punktmuster in verschiedenen Anordnungen |
| `.pattern-lines` | Linienmuster (horizontal, vertikal, diagonal) |
| `.pattern-stripes` | Streifenmuster mit verschiedenen Breiten |
| `.pattern-zigzag` | Zickzack-Muster |
| `.pattern-waves` | Wellenmuster |
| `.pattern-triangles` | Dreieckmuster |
| `.pattern-squares` | Quadratmuster |
| `.pattern-circles` | Kreismuster |
| `.pattern-hexagons` | Sechseckmuster |
| `.pattern-diamonds` | Rautenmuster |
| `.pattern-chevron` | Chevron-/Pfeilmuster |

### Organische und dekorative Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-floral` | Blumen- und Pflanzenmuster |
| `.pattern-organic` | Natürlich wirkende, fließende Muster |
| `.pattern-abstract` | Abstrakte, nicht-geometrische Muster |
| `.pattern-confetti` | Konfetti-/Sprenkel-Muster |
| `.pattern-doodle` | Handgezeichnet wirkende Muster |
| `.pattern-leaves` | Blattmuster |
| `.pattern-bubbles` | Blasenmuster |
| `.pattern-maze` | Labyrinth-ähnliche Muster |

### Dichte und Größenvarianten

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-dense` | Dicht gepacktes Muster |
| `.pattern-sparse` | Weit auseinander liegendes Muster |
| `.pattern-sm` | Kleines Musterdesign |
| `.pattern-md` | Mittleres Musterdesign (Standard) |
| `.pattern-lg` | Großes Musterdesign |
| `.pattern-xl` | Extra großes Musterdesign |

### Overlay-Muster

| Klasse | Beschreibung |
|--------|-------------|
| `.pattern-overlay` | Muster als Overlay über anderen Elementen |
| `.pattern-overlay-light` | Helles Overlay-Muster |
| `.pattern-overlay-dark` | Dunkles Overlay-Muster |
| `.pattern-overlay-gradient` | Verlaufendes Overlay-Muster |
| `.pattern-fade-top` | Nach oben ausblendendes Muster |
| `.pattern-fade-bottom` | Nach unten ausblendendes Muster |

## Beispiele

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

### Komplexere Geometrische Muster

```html
<div class="geometric-patterns">
  <div class="pattern-card pattern-bg pattern-hexagons">
    <div class="content">
      <h3>Sechseckmuster</h3>
      <p>Ein elegantes Sechseckmuster für moderne Designs.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-triangles">
    <div class="content">
      <h3>Dreieckmuster</h3>
      <p>Ein dynamisches Dreieckmuster für energiegeladene Designs.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-circles">
    <div class="content">
      <h3>Kreismuster</h3>
      <p>Ein sanftes Kreismuster für freundliche Interfaces.</p>
    </div>
  </div>
  
  <div class="pattern-card pattern-bg pattern-zigzag">
    <div class="content">
      <h3>Zickzackmuster</h3>
      <p>Ein dynamisches Zickzackmuster für lebendige Designs.</p>
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

### Organische Muster

```html
<div class="organic-patterns">
  <div class="organic-pattern pattern-bg pattern-floral">
    <div class="content">Florales Muster</div>
  </div>
  
  <div class="organic-pattern pattern-bg pattern-leaves">
    <div class="content">Blattmuster</div>
  </div>
  
  <div class="organic-pattern pattern-bg pattern-organic">
    <div class="content">Organisches Muster</div>
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

### Overlay-Muster und Anwendungen

```html
<div class="overlay-patterns">
  <div class="hero-section pattern-overlay pattern-dots-lg">
    <div class="hero-content">
      <h2>Überlagerungsmuster</h2>
      <p>Muster können als Overlay über Bildern oder farbigen Hintergründen verwendet werden.</p>
      <button>Mehr erfahren</button>
    </div>
  </div>
  
  <div class="card-with-pattern">
    <div class="card-header pattern-bg pattern-stripes">
      <h3>Kartenüberschrift</h3>
    </div>
    <div class="card-body">
      <p>Muster können für verschiedene Bereiche einer Komponente verwendet werden.</p>
    </div>
    <div class="card-footer pattern-bg pattern-dots-sm">
      <button>Aktion</button>
    </div>
  </div>
  
  <div class="pattern-divider-example">
    <div class="content-section">
      <h3>Oberer Bereich</h3>
      <p>Inhalte vor dem Trenner.</p>
    </div>
    <div class="pattern-divider pattern-zigzag"></div>
    <div class="content-section">
      <h3>Unterer Bereich</h3>
      <p>Inhalte nach dem Trenner.</p>
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

## Anpassung

Die Pattern-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Pattern-Parameter */
  --pattern-opacity: 0.15;
  --pattern-color: currentColor;
  --pattern-bg-color: transparent;
  --pattern-size: 20px;
  --pattern-spacing: 5px;
  --pattern-line-width: 1px;
  
  /* Muster-Varianten */
  --pattern-dots-size: 3px;
  --pattern-dots-spacing: 15px;
  --pattern-grid-size: 20px;
  --pattern-grid-line-width: 1px;
  --pattern-stripes-width: 10px;
  --pattern-stripes-angle: 45deg;
  --pattern-zigzag-size: 15px;
  --pattern-zigzag-width: 2px;
  
  /* Pattern-Farben */
  --pattern-primary-color: var(--color-primary, #3f51b5);
  --pattern-secondary-color: var(--color-secondary, #f50057);
  --pattern-dark-color: rgba(0, 0, 0, 0.1);
  --pattern-light-color: rgba(255, 255, 255, 0.1);
}
```

## CSS-Implementierung

Die Muster werden hauptsächlich durch CSS-Hintergrundbilder, Gradienten und wiederholende Elemente implementiert:

```css
/* Basis-Pattern */
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

/* Overlay-Muster */
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

/* Mustervarianten für Overlays */
.pattern-overlay.pattern-dots::before {
  background-image: radial-gradient(
    var(--pattern-color) var(--pattern-dots-size),
    transparent var(--pattern-dots-size)
  );
  background-size: var(--pattern-dots-spacing) var(--pattern-dots-spacing);
}
```

## Fortgeschrittene Muster

### SVG-basierte Muster

Komplexere Muster können mit SVG implementiert werden:

```css
.pattern-hexagons {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E");
}

.pattern-triangles {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

### CSS-generierte Muster

Einige Muster können durch geschickte Kombination von CSS-Eigenschaften erzeugt werden:

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

## Barrierefreiheit

Bei der Verwendung von Pattern-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass Text auf gemusterten Hintergründen ausreichend lesbar bleibt
2. **Ablenkung**: Verwenden Sie subtile Muster, die nicht vom Inhalt ablenken
3. **Animation**: Vermeiden Sie animierte Muster, die Bewegungsempfindlichkeiten auslösen könnten

```css
/* Verbesserte Lesbarkeit für Text auf Mustern */
.pattern-with-text {
  --pattern-opacity: 0.1;
}

.pattern-with-text .text-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 4px;
}

/* Reduzierte visuelle Komplexität */
@media (prefers-reduced-motion: reduce) {
  :root {
    --pattern-opacity: 0.1;
    --pattern-size: 30px;
  }
}
```

## Performance-Optimierung

Pattern-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Einfache Muster**: Verwenden Sie möglichst einfache Muster für bessere Performance
2. **SVG-Optimierung**: Minimieren Sie SVG-Dateien für Pattern-Effekte
3. **Cache-Busting**: Nutzen Sie das Browser-Caching für Pattern-Grafiken

```css
/* Performance-Optimierung für Pattern-Effekte */
.pattern-optimized {
  will-change: background-image;
}

/* Reduzierte Komplexität für mobile Geräte */
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

## Browser-Kompatibilität

Die Pattern-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS Backgrounds | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Gradients | ✓ | ✓ | ✓ | ✓ | Teilweise |
| SVG Hintergründe | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-Variablen | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht unterstützen, werden vereinfachte Fallback-Stile bereitgestellt. 
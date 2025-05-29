---
title: Vignette Effects
category: Effects
---

# Vignette-Effekte

Die Vignette-Effekte der Casoon UI Library bieten eine Sammlung von Abdunkelungs- und Aufhellungseffekten an den Rändern von UI-Elementen. Diese Effekte können verwendet werden, um den Fokus auf den zentralen Inhalt zu lenken, eine dramatische Atmosphäre zu schaffen oder ein stilvolles, fotografisches Aussehen zu verleihen.

## Überblick

Vignette-Effekte stammen aus der Fotografie und beschreiben die Abdunkelung der Ränder eines Bildes. In der UI können sie verwendet werden, um Tiefe zu erzeugen, Aufmerksamkeit zu lenken oder bestimmte ästhetische Stile zu vermitteln. Die Casoon UI Library bietet verschiedene Arten von Vignette-Effekten, die einfach anzuwenden und anzupassen sind.

## Installation

Importieren Sie das Vignette-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/vignette.css';
```

## Verfügbare Klassen

### Grundlegende Vignette-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.vignette` | Standardmäßiger Vignette-Effekt |
| `.vignette-subtle` | Subtiler Vignette-Effekt |
| `.vignette-medium` | Mittlerer Vignette-Effekt (Standard) |
| `.vignette-strong` | Starker, deutlicher Vignette-Effekt |
| `.vignette-intense` | Intensiver, dramatischer Vignette-Effekt |

### Vignette-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `.vignette-dark` | Dunkle Vignette (Standardtyp) |
| `.vignette-light` | Helle Vignette für dunkle Hintergründe |
| `.vignette-color` | Farbige Vignette, die die aktuelle Farbe verwendet |
| `.vignette-blur` | Vignette mit Unschärfeeffekt an den Rändern |
| `.vignette-grain` | Vignette mit Körnungseffekt |
| `.vignette-gradient` | Glatter Verlaufseffekt für die Vignette |

### Vignette-Formen

| Klasse | Beschreibung |
|--------|-------------|
| `.vignette-circular` | Kreisförmige Vignette (Standard) |
| `.vignette-oval` | Ovale Vignette |
| `.vignette-square` | Quadratische Vignette |
| `.vignette-rectangular` | Rechteckige Vignette |
| `.vignette-corners` | Vignette nur in den Ecken |
| `.vignette-sides` | Vignette nur an den Seiten |

## Beispiele

### Grundlegende Vignette-Effekte

```html
<div class="vignette-examples">
  <div class="vignette-example vignette vignette-subtle">
    <span>Subtile Vignette</span>
  </div>
  
  <div class="vignette-example vignette vignette-medium">
    <span>Medium Vignette</span>
  </div>
  
  <div class="vignette-example vignette vignette-strong">
    <span>Starke Vignette</span>
  </div>
  
  <div class="vignette-example vignette vignette-intense">
    <span>Intensive Vignette</span>
  </div>
</div>
```

### Vignette-Typen

```html
<div class="vignette-types">
  <div class="type-example vignette vignette-dark">
    <span>Dunkle Vignette</span>
  </div>
  
  <div class="type-example vignette vignette-light">
    <span>Helle Vignette</span>
  </div>
  
  <div class="type-example vignette vignette-color">
    <span>Farbige Vignette</span>
  </div>
  
  <div class="type-example vignette vignette-blur">
    <span>Vignette mit Unschärfe</span>
  </div>
</div>
```

## Anpassung

Die Vignette-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Vignette-Parameter */
  --vignette-opacity: 0.5;
  --vignette-spread: 40%;
  --vignette-color: rgba(0, 0, 0, 0.8);
  --vignette-light-color: rgba(255, 255, 255, 0.8);
  
  /* Intensitätsstufen */
  --vignette-subtle-opacity: 0.2;
  --vignette-medium-opacity: 0.5;
  --vignette-strong-opacity: 0.7;
  --vignette-intense-opacity: 0.9;
  
  /* Vignette-Formen */
  --vignette-border-radius: 50%;
  --vignette-oval-aspect: 1.5;
  --vignette-blur-amount: 10px;
}
```

## CSS-Implementierung

Die Vignette-Effekte werden hauptsächlich durch radiale Gradienten und pseudo-Elemente implementiert:

```css
/* Basis-Vignette */
.vignette {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.vignette::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: var(--vignette-border-radius, 50%);
}

/* Dunkle Vignette (Standard) */
.vignette.vignette-dark::after {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 100%
  );
  opacity: var(--vignette-opacity, 0.5);
}

/* Helle Vignette */
.vignette.vignette-light::after {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    var(--vignette-light-color, rgba(255, 255, 255, 0.8)) 100%
  );
  opacity: var(--vignette-opacity, 0.5);
}

/* Farbige Vignette */
.vignette.vignette-color::after {
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    currentColor 100%
  );
  opacity: var(--vignette-opacity, 0.5);
}

/* Vignette mit Unschärfe */
.vignette.vignette-blur::after {
  backdrop-filter: blur(var(--vignette-blur-amount, 10px));
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 100%
  );
  opacity: var(--vignette-opacity, 0.5);
}

/* Intensitätsstufen */
.vignette.vignette-subtle::after {
  opacity: var(--vignette-subtle-opacity, 0.2);
}

.vignette.vignette-medium::after {
  opacity: var(--vignette-medium-opacity, 0.5);
}

.vignette.vignette-strong::after {
  opacity: var(--vignette-strong-opacity, 0.7);
}

.vignette.vignette-intense::after {
  opacity: var(--vignette-intense-opacity, 0.9);
}

/* Vignette-Formen */
.vignette.vignette-circular::after {
  --vignette-border-radius: 50%;
}

.vignette.vignette-oval::after {
  --vignette-border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 100%
  );
  transform: scaleX(var(--vignette-oval-aspect, 1.5));
}

.vignette.vignette-square::after {
  --vignette-border-radius: 0%;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent var(--vignette-spread, 40%),
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 100%
  );
}

.vignette.vignette-rectangular::after {
  --vignette-border-radius: 0%;
}

.vignette.vignette-corners::after {
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 70%,
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 100%
  ),
  radial-gradient(
    circle at 10% 10%,
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 0%,
    transparent 30%
  ),
  radial-gradient(
    circle at 90% 10%,
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 0%,
    transparent 30%
  ),
  radial-gradient(
    circle at 10% 90%,
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 0%,
    transparent 30%
  ),
  radial-gradient(
    circle at 90% 90%,
    var(--vignette-color, rgba(0, 0, 0, 0.8)) 0%,
    transparent 30%
  );
}
```

## Vignette in Bilder und Karten

Vignette-Effekte eignen sich besonders gut für Bilder und Card-Komponenten:

```html
<div class="card vignette vignette-medium">
  <img src="path/to/image.jpg" alt="Bild mit Vignette">
  <div class="content">
    <h3>Karte mit Vignette</h3>
    <p>Der Vignette-Effekt lenkt die Aufmerksamkeit auf den Inhalt.</p>
  </div>
</div>

<div class="hero-image vignette vignette-strong vignette-dark">
  <img src="path/to/hero.jpg" alt="Hero-Bild">
  <div class="hero-content">
    <h1>Dramatischer Effekt</h1>
    <p>Die starke Vignette schafft eine dramatische Atmosphäre.</p>
  </div>
</div>
```

## Barrierefreiheit

Bei der Verwendung von Vignette-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass die Vignette den Kontrast zwischen Text und Hintergrund nicht zu stark beeinträchtigt
2. **Lesbarkeit**: Vermeiden Sie zu intensive Vignetten, die die Lesbarkeit des Inhalts erschweren könnten
3. **Wahrnehmbarkeit**: Achten Sie darauf, dass wichtige UI-Elemente nicht durch die Vignette verdeckt werden

```css
/* Verbesserte Lesbarkeit für Text mit Vignette */
.vignette-with-text::after {
  opacity: 0.3;
}

/* Reduzierte Vignette für bevorzugte reduzierte Transparenz */
@media (prefers-reduced-transparency: reduce) {
  .vignette::after {
    opacity: 0.2;
  }
}
```

## Browser-Kompatibilität

Die Vignette-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Radiale Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mehrfache Hintergründe | ✓ | ✓ | ✓ | ✓ | ✓ |
| Backdrop-Filter | ✓ | ✓ | ✓ | ✓ | ✗ |
| CSS-Variablen | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht vollständig unterstützen, werden vereinfachte Fallback-Stile bereitgestellt. 
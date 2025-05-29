---
title: Vignette Effects
category: Effects
---

# Vignette-effects

the Vignette-effects the Casoon UI Library bieten a Sammlung from Abdunkelungs- and Aufhellungseffekten on den Randern from UI-Elementen. these effects can verwendet become, um den Fokus on den zentralen content to lenken, a dramatische Atmosphare to schaffen or a stilvolles, fotografisches Aussehen to verleihen.

## Uberblick

Vignette-effects stammen aus the Fotografie and beschreiben the Abdunkelung the Rander eines Bildes. in the UI can them verwendet become, um Tiefe to erzeugen, Aufmerksamkeit to lenken or bestimmte asthetische Styles to vermitteln. the Casoon UI Library bietet verschiedene Arten from Vignette-Effekten, the einfach anzuwenden and anzupassen sind.

## Installation

import them the Vignette-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/vignette.css';
```

## Verfugbare classes

### Grundlegende Vignette-effects

| Class | Description |
|--------|-------------|
| `.vignette` | Standardmassiger Vignette-effect |
| `.vignette-subtle` | Subtiler Vignette-effect |
| `.vignette-medium` | Mittlerer Vignette-effect (Standard) |
| `.vignette-strong` | Starker, deutlicher Vignette-effect |
| `.vignette-intense` | Intensiver, dramatischer Vignette-effect |

### Vignette-Typen

| Class | Description |
|--------|-------------|
| `.vignette-dark` | Dunkle Vignette (Standardtyp) |
| `.vignette-light` | Helle Vignette for dunkle Hintergrunde |
| `.vignette-color` | Farbige Vignette, the the aktuelle color verwendet |
| `.vignette-blur` | Vignette with Unscharfeeffekt on den Randern |
| `.vignette-grain` | Vignette with Kornungseffekt |
| `.vignette-gradient` | Glatter Verlaufseffekt for the Vignette |

### Vignette-Formen

| Class | Description |
|--------|-------------|
| `.vignette-circular` | Kreisformige Vignette (Standard) |
| `.vignette-oval` | Ovale Vignette |
| `.vignette-square` | Quadratische Vignette |
| `.vignette-rectangular` | Rechteckige Vignette |
| `.vignette-corners` | Vignette only in den Ecken |
| `.vignette-sides` | Vignette only on den Seiten |

## Examples

### Grundlegende Vignette-effects

```html
<div class="vignette-examples">
  <div class="vignette-example vignette vignette-subtle">
    <span>Subtile Vignette</span>
  </div>
  
  <div class="vignette-example vignette vignette-medium">
    <span>Medium Vignette</span>
  </div>
  
  <div class="vignette-example vignette vignette-strong">
    <span>strength Vignette</span>
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
    <span>Vignette with Unscharfe</span>
  </div>
</div>
```

## Customization

the Vignette-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Vignette-parameter */
  --vignette-opacity: 0.5;
  --vignette-spread: 40%;
  --vignette-color: rgba(0, 0, 0, 0.8);
  --vignette-light-color: rgba(255, 255, 255, 0.8);
  
  /* Intensitatsstufen */
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

## CSS-Implementation

the Vignette-effects become hauptsachlich through radiale Gradienten and pseudo-elements implementiert:

```css
/* Base-Vignette */
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

/* Vignette with Unscharfe */
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

/* Intensitatsstufen */
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

## Vignette in images and Cardn

Vignette-effects eignen oneself besonders good for images and Card-Components:

```html
<div class="card vignette vignette-medium">
  <img src="path/to/image.jpg" alt="image with Vignette">
  <div class="content">
    <h3>Card with Vignette</h3>
    <p>the Vignette-effect lenkt the Aufmerksamkeit on den content.</p>
  </div>
</div>

<div class="hero-image vignette vignette-strong vignette-dark">
  <img src="path/to/hero.jpg" alt="Hero-image">
  <div class="hero-content">
    <h1>Dramatischer effect</h1>
    <p>the strength Vignette schafft a dramatische Atmosphare.</p>
  </div>
</div>
```

## Accessibility

at the Usage from Vignette-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Vignette den Kontrast between Text and background not to stark beeintrachtigt
2. **Lesbarkeit**: Vermeiden them to intensive Vignetten, the the Lesbarkeit des Inhalts erschweren konnten
3. **Wahrnehmbarkeit**: make sure, that wichtige UI-elements not through the Vignette verdeckt become

```css
/* Verbesserte Lesbarkeit for Text with Vignette */
.vignette-with-text::after {
  opacity: 0.3;
}

/* Reduzierte Vignette for bevorzugte reduzierte transparency */
@media (prefers-reduced-transparency: reduce) {
  .vignette::after {
    opacity: 0.2;
  }
}
```

## Browser-Kompatibilitat

the Vignette-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Radiale Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| Mehrfache Hintergrunde | ✓ | ✓ | ✓ | ✓ | ✓ |
| Backdrop-Filter | ✓ | ✓ | ✓ | ✓ | ✗ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
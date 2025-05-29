---
title: Texture Effects
category: Effects
---

# Textur-effects

the Textur-effects the Casoon UI Library bieten a Sammlung from realistischen Oberflachentexturen, the Ihren UI-Elementen Tiefe, Charakter and taktile Qualitat verleihen can. these effects helfen in doing so, digitale Oberflachen interessanter and ansprechender to gestalten.

## Uberblick

Textur-effects simulieren verschiedene reale Materialien and Oberflachen in the digitalen Umgebung. You can verwendet become, um UI-Elementen more Personlichkeit to verleihen, bestimmte Materialien to imitieren or einfach visuelle Abwechslung to schaffen. the Casoon UI Library bietet verschiedene Arten from Texturen, the einfach anzuwenden and anzupassen sind.

## Installation

import them the Textur-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/textures.css';
```

## Verfugbare classes

### Grundlegende Texturen

| Class | Description |
|--------|-------------|
| `.texture` | Standardmassiger Textur-effect |
| `.texture-subtle` | Subtile Textur with geringer Intensitat |
| `.texture-medium` | Mittelstarke Textur (Standard) |
| `.texture-strong` | strength, deutlich sichtbare Textur |

### Materialtypen

| Class | Description |
|--------|-------------|
| `.texture-paper` | Papiertextur |
| `.texture-fabric` | Stofftextur |
| `.texture-leather` | Ledertextur |
| `.texture-wood` | Holztextur |
| `.texture-stone` | Steintextur |
| `.texture-metal` | Metalltextur |
| `.texture-plastic` | Plastiktextur |
| `.texture-carbon` | Kohlefasertextur |
| `.texture-concrete` | Betontextur |
| `.texture-sand` | Sandtextur |

### Spezielle Texturen

| Class | Description |
|--------|-------------|
| `.texture-noise` | Rauschtextur |
| `.texture-dots` | Punkttextur |
| `.texture-lines` | Linientextur |
| `.texture-grid` | Gittertextur |
| `.texture-weave` | Webmustertextur |
| `.texture-brushed` | Geburstete Textur |
| `.texture-vintage` | Vintage/alte Papiertextur |
| `.texture-distressed` | Abgenutzte/distressed Textur |

## Examples

### Grundlegende Texturen

```html
<div class="texture-examples">
  <div class="texture-example texture texture-paper">
    <span>Papiertextur</span>
  </div>
  
  <div class="texture-example texture texture-fabric">
    <span>Stofftextur</span>
  </div>
  
  <div class="texture-example texture texture-wood">
    <span>Holztextur</span>
  </div>
  
  <div class="texture-example texture texture-stone">
    <span>Steintextur</span>
  </div>
</div>
```

### Texturen in UI-Components

```html
<div class="ui-textures">
  <div class="card texture texture-paper">
    <h3>note</h3>
    <p>these note verwendet a Papiertextur for einen realistischen Look.</p>
  </div>
  
  <button class="button texture texture-leather">
    Leder-button
  </button>
  
  <div class="panel texture texture-metal">
    <h4>Metallplatte</h4>
    <div class="panel-content">
      contents on einer metallischen Oberflache
    </div>
  </div>
</div>
```

## Customization

the Textur-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Texturparameter */
  --texture-opacity: 0.2;
  --texture-blend-mode: multiply;
  
  /* Intensitatsstufen */
  --texture-subtle-opacity: 0.1;
  --texture-medium-opacity: 0.2;
  --texture-strong-opacity: 0.3;
  
  /* Textur-Sizes */
  --texture-scale: 1;
  --texture-noise-scale: 100px;
  --texture-dots-size: 2px;
  --texture-dots-spacing: 10px;
  --texture-lines-width: 1px;
  --texture-lines-spacing: 5px;
  --texture-grid-size: 10px;
}
```

## CSS-Implementation

the Textur-effects become hauptsachlich through background-image, Masken and Blend-Modes implementiert:

```css
/* Base-Textur */
.texture {
  position: relative;
}

.texture::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: var(--texture-opacity, 0.2);
  mix-blend-mode: var(--texture-blend-mode, multiply);
  z-index: 1;
}

/* Papiertextur */
.texture.texture-paper::before {
  background-image: url('textures/paper.png');
  background-size: calc(256px * var(--texture-scale, 1));
}

/* Stofftextur */
.texture.texture-fabric::before {
  background-image: url('textures/fabric.png');
  background-size: calc(256px * var(--texture-scale, 1));
}

/* Holztextur */
.texture.texture-wood::before {
  background-image: url('textures/wood.png');
  background-size: calc(256px * var(--texture-scale, 1));
}

/* Noise-Textur with CSS */
.texture.texture-noise::before {
  background-image: url('data:image/svg+xml;base64,...');
  background-size: calc(var(--texture-noise-scale, 100px) * var(--texture-scale, 1));
}

/* Punkttextur */
.texture.texture-dots::before {
  background-image: radial-gradient(
    circle,
    currentColor var(--texture-dots-size, 2px),
    transparent var(--texture-dots-size, 2px)
  );
  background-size: var(--texture-dots-spacing, 10px) var(--texture-dots-spacing, 10px);
}

/* Linientextur */
.texture.texture-lines::before {
  background-image: repeating-linear-gradient(
    90deg,
    currentColor,
    currentColor var(--texture-lines-width, 1px),
    transparent var(--texture-lines-width, 1px),
    transparent var(--texture-lines-spacing, 5px)
  );
}

/* Gittertextur */
.texture.texture-grid::before {
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 
    var(--texture-grid-size, 10px) var(--texture-grid-size, 10px);
}

/* Intensitatsstufen */
.texture.texture-subtle::before {
  opacity: var(--texture-subtle-opacity, 0.1);
}

.texture.texture-medium::before {
  opacity: var(--texture-medium-opacity, 0.2);
}

.texture.texture-strong::before {
  opacity: var(--texture-strong-opacity, 0.3);
}
```

## Optimierung for Accessibility

at the Usage from Textur-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Texturen den Kontrast not so stark beeintrachtigen, that Text schwer lesbar wird
2. **Uberlagerungen**: Vermeiden them to strength Texturen, the vom eigentlichen content ablenken can
3. **Alternativdesign**: Bieten them a Option zum deactivate from Texturen for Nutzer, the a einfachere Display bevorzugen

```css
/* Verbesserte Lesbarkeit for Text with Texturen */
.texture-with-text::before {
  opacity: 0.15;
  mix-blend-mode: soft-light;
}

/* Reduzierte Texturen for bevorzugte reduzierte transparency */
@media (prefers-reduced-transparency: reduce) {
  .texture::before {
    opacity: 0.1;
    mix-blend-mode: overlay;
  }
}
```

## Performance-Optimierung

Textur-effects can Einfluss on the Rendering-Performance have. note these Tipps:

1. **Bildgrosse optimieren**: use them komprimierte and optimal dimensionierte Texturbilder
2. **CSS-generierte Texturen bevorzugen**: where moglich, use them CSS-generierte Texturen instead of Bildern
3. **Wiederholung optimieren**: ensure, that wiederholbare Texturen nahtlos sind and kleine Dateigrossen have

```css
/* Performance-Optimierung for Texturen */
.texture-optimized::before {
  will-change: transform;
  transform: translateZ(0);
}

/* Mobile Optimierung */
@media (max-width: 768px) {
  :root {
    --texture-opacity: 0.15;
    --texture-scale: 0.75;
  }
  
  .texture.texture-complex::before {
    display: none;
  }
}
```

## Browser-Kompatibilitat

the Textur-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Texturen | ✓ | ✓ | ✓ | ✓ | ✓ |
| SVG-Hintergrunde | ✓ | ✓ | ✓ | ✓ | ✓ |
| Blend-Modes | ✓ | ✓ | ✓ | ✓ | ✗ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
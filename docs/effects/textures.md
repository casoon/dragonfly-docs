---
title: Texture Effects
category: Effects
---

# Textur-Effekte

Die Textur-Effekte der Casoon UI Library bieten eine Sammlung von realistischen Oberflächentexturen, die Ihren UI-Elementen Tiefe, Charakter und taktile Qualität verleihen können. Diese Effekte helfen dabei, digitale Oberflächen interessanter und ansprechender zu gestalten.

## Überblick

Textur-Effekte simulieren verschiedene reale Materialien und Oberflächen in der digitalen Umgebung. Sie können verwendet werden, um UI-Elementen mehr Persönlichkeit zu verleihen, bestimmte Materialien zu imitieren oder einfach visuelle Abwechslung zu schaffen. Die Casoon UI Library bietet verschiedene Arten von Texturen, die einfach anzuwenden und anzupassen sind.

## Installation

Importieren Sie das Textur-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/textures.css';
```

## Verfügbare Klassen

### Grundlegende Texturen

| Klasse | Beschreibung |
|--------|-------------|
| `.texture` | Standardmäßiger Textur-Effekt |
| `.texture-subtle` | Subtile Textur mit geringer Intensität |
| `.texture-medium` | Mittelstarke Textur (Standard) |
| `.texture-strong` | Starke, deutlich sichtbare Textur |

### Materialtypen

| Klasse | Beschreibung |
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

| Klasse | Beschreibung |
|--------|-------------|
| `.texture-noise` | Rauschtextur |
| `.texture-dots` | Punkttextur |
| `.texture-lines` | Linientextur |
| `.texture-grid` | Gittertextur |
| `.texture-weave` | Webmustertextur |
| `.texture-brushed` | Gebürstete Textur |
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
    <h3>Notiz</h3>
    <p>Diese Notiz verwendet eine Papiertextur für einen realistischen Look.</p>
  </div>
  
  <button class="button texture texture-leather">
    Leder-Button
  </button>
  
  <div class="panel texture texture-metal">
    <h4>Metallplatte</h4>
    <div class="panel-content">
      Inhalte auf einer metallischen Oberfläche
    </div>
  </div>
</div>
```

## Anpassung

Die Textur-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Texturparameter */
  --texture-opacity: 0.2;
  --texture-blend-mode: multiply;
  
  /* Intensitätsstufen */
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

## CSS-Implementierung

Die Textur-Effekte werden hauptsächlich durch background-image, Masken und Blend-Modes implementiert:

```css
/* Basis-Textur */
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

/* Noise-Textur mit CSS */
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

/* Intensitätsstufen */
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

## Optimierung für Accessibility

Bei der Usage von Textur-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass Texturen den Kontrast nicht so stark beeinträchtigen, dass Text schwer lesbar wird
2. **Überlagerungen**: Vermeiden Sie zu starke Texturen, die vom eigentlichen Inhalt ablenken können
3. **Alternativdesign**: Bieten Sie eine Option zum Deaktivieren von Texturen für Nutzer, die eine einfachere Darstellung bevorzugen

```css
/* Verbesserte Lesbarkeit für Text mit Texturen */
.texture-with-text::before {
  opacity: 0.15;
  mix-blend-mode: soft-light;
}

/* Reduzierte Texturen für bevorzugte reduzierte Transparenz */
@media (prefers-reduced-transparency: reduce) {
  .texture::before {
    opacity: 0.1;
    mix-blend-mode: overlay;
  }
}
```

## Performance-Optimierung

Textur-Effekte können Einfluss auf die Rendering-Performance haben. Beachten Sie diese Tipps:

1. **Bildgröße optimieren**: Verwenden Sie komprimierte und optimal dimensionierte Texturbilder
2. **CSS-generierte Texturen bevorzugen**: Wo möglich, nutzen Sie CSS-generierte Texturen statt Bildern
3. **Wiederholung optimieren**: Stellen Sie sicher, dass wiederholbare Texturen nahtlos sind und kleine Dateigrößen haben

```css
/* Performance-Optimierung für Texturen */
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

## Browser-Kompatibilität

Die Textur-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Texturen | ✓ | ✓ | ✓ | ✓ | ✓ |
| SVG-Hintergründe | ✓ | ✓ | ✓ | ✓ | ✓ |
| Blend-Modes | ✓ | ✓ | ✓ | ✓ | ✗ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht vollständig unterstützen, werden vereinfachte Fallback-Styles bereitgestellt. 
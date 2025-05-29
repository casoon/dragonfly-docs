---
title: Color-Mix system
category: Core
---

# Color-Mix system

the Color-Mix system the Casoon UI Library bietet fortschrittliche Werkzeuge zur dynamischen Farbmanipulation and -mischung. with diesem system can them nahtlos Colors mischen, transformieren and customize, um a konsistentes and harmonisches color scheme in Ihrer Application to erzielen.

## Uberblick

the Color-Mix system nutzt moderne CSS-functions how `color-mix()`, `color-contrast()` and `color()`, um Colors dynamisch to manipulieren. Dies ermoglicht:

- Dynamisches Mischen from Colors
- Automatische Berechnung from Kontrasten
- Erzeugung from Farbvarianten and -schattierungen
- Customization the opacity from Colors
- Erstellung fliessender Farbubergange

## Installation

the Color-Mix system wird automatisch with dem Core-modules the Casoon UI Library geladen:

```css
@import '@casoon/ui-lib/core.css';
```

You can it also separat import:

```css
@import '@casoon/ui-lib/core/color-mix.css';
```

## Grundlegende Farbmischung

### the color-mix() Function

the Herzstuck des Color-Mix Systems ist the `color-mix()` CSS-Function, the zwei Colors in einem bestimmten Farbmodell mischt:

```css
.element {
  /* Mischt Rot and Blau to einem Lila */
  background-color: color-mix(in srgb, red, blue);
  
  /* Mischt 30% Rot with 70% Blau */
  color: color-mix(in srgb, red 30%, blue 70%);
}
```

### Farbmischungs-classes

the Casoon UI Library bietet vordefinierte classes for haufige Farbmischungen:

```html
<!-- Primarfarbe with 20% Weiss gemischt (aufhellen) -->
<div class="color-mix-lighten-20"></div>

<!-- Primarfarbe with 20% Schwarz gemischt (abdunkeln) -->
<div class="color-mix-darken-20"></div>

<!-- Primarfarbe with 20% transparency -->
<div class="color-mix-alpha-80"></div>
```

## Erweiterte Farbmanipulation

### Farbmodelle

the Color-Mix system unterstutzt verschiedene Farbmodelle for unterschiedliche Use Cases:

```css
/* RGB-Farbmodell (Standard) */
.rgb-mix {
  background-color: color-mix(in srgb, var(--color-primary), var(--color-secondary));
}

/* HSL-Farbmodell (good for Farbton-customizations) */
.hsl-mix {
  background-color: color-mix(in hsl, var(--color-primary), var(--color-secondary));
}

/* LCH-Farbmodell (wahrnehmungsbasiert, gleichmassigere Mischungen) */
.lch-mix {
  background-color: color-mix(in lch, var(--color-primary), var(--color-secondary));
}
```

### Farb-Kontrast

with the `color-contrast()` Function can them automatisch the color with dem besten Kontrast selections:

```css
.auto-contrast-text {
  /* Wahlt entweder Schwarz or Weiss, je after, what better on dem background lesbar ist */
  color: color-contrast(var(--background-color) vs white, black);
}
```

the Casoon UI Library bietet Utility-classes for automatischen Kontrast:

```html
<!-- Text passt oneself automatisch dem background on -->
<div class="bg-primary text-contrast">
  this Text hat optimalen Kontrast
</div>
```

## Farbschemata create

### Monochromatische Farbschemata

create them a monochromatisches color scheme basierend on einer Basisfarbe:

```css
:root {
  --color-base: #3b82f6;
  --color-lighter-10: color-mix(in srgb, var(--color-base), white 10%);
  --color-lighter-20: color-mix(in srgb, var(--color-base), white 20%);
  --color-lighter-30: color-mix(in srgb, var(--color-base), white 30%);
  --color-darker-10: color-mix(in srgb, var(--color-base), black 10%);
  --color-darker-20: color-mix(in srgb, var(--color-base), black 20%);
  --color-darker-30: color-mix(in srgb, var(--color-base), black 30%);
}
```

### Analoge Farbschemata

with HSL-Mischungen can them analoge Farbschemata create:

```css
:root {
  --color-base: hsl(210, 100%, 50%);
  --color-analogous-1: hsl(240, 100%, 50%); /* +30 Grad im Farbkreis */
  --color-analogous-2: hsl(180, 100%, 50%); /* -30 Grad im Farbkreis */
  
  /* Mischungen for sanfte Ubergange */
  --color-transition-1: color-mix(in hsl, var(--color-base), var(--color-analogous-1));
  --color-transition-2: color-mix(in hsl, var(--color-base), var(--color-analogous-2));
}
```

## Praktische Anwendungen

### Hover-effects

create them dynamische Hover-effects with dem Color-Mix system:

```css
.button {
  background-color: var(--color-primary);
  transition: background-color 0.3s ease;
}

.button:hover {
  /* 15% dunklere version the Primarfarbe beim Hover */
  background-color: color-mix(in srgb, var(--color-primary), black 15%);
}
```

### shadow and Overlays

create them themenkonsistente shadow:

```css
.card {
  box-shadow: 0 4px 8px color-mix(in srgb, var(--color-primary), transparent 85%);
}

.modal-overlay {
  background-color: color-mix(in srgb, var(--color-background), transparent 40%);
  backdrop-filter: blur(4px);
}
```

### Accessibility verbessern

use them the Color-Mix system, um the Accessibility to verbessern:

```css
.focus-outline {
  outline: 2px solid color-mix(in srgb, var(--color-primary), black 10%);
  outline-offset: 2px;
}

.error-message {
  /* Verwendet a dunklere version the Fehlerfarbe for besseren Kontrast */
  color: color-mix(in srgb, var(--color-error), black 20%);
}
```

## CSS-Implementation

the Color-Mix system wird through a Kombination aus nativen CSS-functions and Custom Properties implementiert:

```css
:root {
  /* Base-Farbdefinitionen */
  --color-primary: #3b82f6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #6366f1;
  
  /* Dynamische Farbvarianten with color-mix */
  --color-primary-light: color-mix(in srgb, var(--color-primary), white 30%);
  --color-primary-lighter: color-mix(in srgb, var(--color-primary), white 70%);
  --color-primary-dark: color-mix(in srgb, var(--color-primary), black 30%);
  --color-primary-darker: color-mix(in srgb, var(--color-primary), black 70%);
  
  /* Transparente Variants */
  --color-primary-10: color-mix(in srgb, var(--color-primary), transparent 90%);
  --color-primary-20: color-mix(in srgb, var(--color-primary), transparent 80%);
  --color-primary-50: color-mix(in srgb, var(--color-primary), transparent 50%);
  
  /* Kontrast-Colors */
  --color-on-primary: color-contrast(var(--color-primary) vs white, black);
  --color-on-success: color-contrast(var(--color-success) vs white, black);
  --color-on-warning: color-contrast(var(--color-warning) vs white, black);
  --color-on-error: color-contrast(var(--color-error) vs white, black);
  --color-on-info: color-contrast(var(--color-info) vs white, black);
}

/* Utility-classes for Farbmischung */
.color-mix-lighten-10 { color: color-mix(in srgb, currentColor, white 10%); }
.color-mix-lighten-20 { color: color-mix(in srgb, currentColor, white 20%); }
.color-mix-lighten-30 { color: color-mix(in srgb, currentColor, white 30%); }

.color-mix-darken-10 { color: color-mix(in srgb, currentColor, black 10%); }
.color-mix-darken-20 { color: color-mix(in srgb, currentColor, black 20%); }
.color-mix-darken-30 { color: color-mix(in srgb, currentColor, black 30%); }

.bg-mix-lighten-10 { background-color: color-mix(in srgb, currentColor, white 10%); }
.bg-mix-lighten-20 { background-color: color-mix(in srgb, currentColor, white 20%); }
.bg-mix-lighten-30 { background-color: color-mix(in srgb, currentColor, white 30%); }

.bg-mix-darken-10 { background-color: color-mix(in srgb, currentColor, black 10%); }
.bg-mix-darken-20 { background-color: color-mix(in srgb, currentColor, black 20%); }
.bg-mix-darken-30 { background-color: color-mix(in srgb, currentColor, black 30%); }

/* Automatische Kontrast-Customization */
.text-contrast {
  color: color-contrast(var(--background-color, inherit) vs white, black);
}
```

## Examples

### Farbpalette generieren

```html
<div class="palette-example">
  <div class="color-swatch base-color">Basisfarbe</div>
  <div class="color-swatch lighter-10">10% heller</div>
  <div class="color-swatch lighter-20">20% heller</div>
  <div class="color-swatch lighter-30">30% heller</div>
  <div class="color-swatch darker-10">10% dunkler</div>
  <div class="color-swatch darker-20">20% dunkler</div>
  <div class="color-swatch darker-30">30% dunkler</div>
</div>

<style>
  .palette-example {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .color-swatch {
    width: 120px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-align: center;
  }
  
  .base-color {
    background-color: var(--color-primary);
  }
  
  .lighter-10 {
    background-color: color-mix(in srgb, var(--color-primary), white 10%);
  }
  
  .lighter-20 {
    background-color: color-mix(in srgb, var(--color-primary), white 20%);
  }
  
  .lighter-30 {
    background-color: color-mix(in srgb, var(--color-primary), white 30%);
  }
  
  .darker-10 {
    background-color: color-mix(in srgb, var(--color-primary), black 10%);
  }
  
  .darker-20 {
    background-color: color-mix(in srgb, var(--color-primary), black 20%);
  }
  
  .darker-30 {
    background-color: color-mix(in srgb, var(--color-primary), black 30%);
  }
</style>
```

### Interaktive Components

```html
<button class="button button-primary">Primar-button</button>
<button class="button button-success">Erfolgs-button</button>
<button class="button button-warning">Warn-button</button>
<button class="button button-error">errors-button</button>

<style>
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button-primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }
  
  .button-primary:hover {
    background-color: color-mix(in srgb, var(--color-primary), black 10%);
  }
  
  .button-primary:active {
    background-color: color-mix(in srgb, var(--color-primary), black 20%);
  }
  
  .button-success {
    background-color: var(--color-success);
    color: var(--color-on-success);
  }
  
  .button-success:hover {
    background-color: color-mix(in srgb, var(--color-success), black 10%);
  }
  
  .button-warning {
    background-color: var(--color-warning);
    color: var(--color-on-warning);
  }
  
  .button-warning:hover {
    background-color: color-mix(in srgb, var(--color-warning), black 10%);
  }
  
  .button-error {
    background-color: var(--color-error);
    color: var(--color-on-error);
  }
  
  .button-error:hover {
    background-color: color-mix(in srgb, var(--color-error), black 10%);
  }
</style>
```

## Tipps for optimale Farbmischung

1. **Wahlen them the richtige Farbmodell**: 
   - use them `srgb` for allgemeine Mischungen
   - use them `hsl` for Farbton-customizations
   - use them `lch` for wahrnehmungsbasierte, gleichmassigere Mischungen

2. **Kontrast note**: 
   - ensure, that gemischte Colors ausreichenden Kontrast for Accessibility bieten
   - use them `color-contrast()` for automatische Kontrastanpassungen

3. **Consistency wahren**: 
   - use them the gleichen Mischungsverhaltnisse for ahnliche UI-elements
   - define them Mischungsvariablen on Root-layer for konsistente Application

4. **Performance-Uberlegungen**:
   - Vermeiden them ubermassig komplexe Farbberechnungen im Live-DOM
   - define them komplexe Mischungen as CSS Variables for bessere Performance

## Browser-Kompatibilitat

the Color-Mix system basiert on modernen CSS-functions with unterschiedlicher Browser-Unterstutzung:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| color-mix() | 111+ | 113+ | 16.4+ | 111+ |
| color-contrast() | Partial | Nein | Nein | Partial |
| Relative Farbsyntax | 101+ | 113+ | 15+ | 101+ |

for Browser without native Unterstutzung bietet the Casoon UI Library Fallback-Mechanismen:

- Vordefinierte Farbvariablen as Fallback
- PostCSS-Plugins for Vorverarbeitung
- JavaScript-Polyfills for dynamische Farbmischung

## Integration with anderen Systemen

the Color-Mix system integriert oneself nahtlos with anderen Teilen the Casoon UI Library:

- **Theming system**: Dynamische Themenwechsel with automatischer Farbmischung
- **Accessibility Utilities**: Automatische Kontrastanpassungen for bessere Lesbarkeit
- **Component system**: Themenkonsistente Statusfarben (hover, active, disabled)
- **Dark Mode**: Automatische Customization from Farbmischungen im Dark Mode

## Zusammenfassung

the Color-Mix system the Casoon UI Library bietet leistungsstarke Werkzeuge zur dynamischen Farbmanipulation. with diesem system can them konsistente, themenkonforme and barrierefreie Farbschemata create, the oneself nahtlos on verschiedene Anforderungen customize. the Kombination aus modernen CSS-Farbfunktionen and vorgefertigten Utility-classes vereinfacht the Verwaltung from Colors in Ihrer Application erheblich. 
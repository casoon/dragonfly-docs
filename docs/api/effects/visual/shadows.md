---
title: Shadow Effects
category: API
outline: deep
---

# Shadow Effects

the Casoon UI Library bietet a Sammlung from shadow-Effekten, the Tiefe and Dimensionalitat to Ihren UI-Elementen add. these shadow-Utilities helfen, the visuelle Hierarchie in Ihrer Benutzeroberflache to define.

## Overview

shadow sind a wesentliches element des modernen UI-designs and helfen in doing so, elements visuell vom background abzuheben and the Benutzererfahrung to verbessern.

## Import

```css
/* Entweder all visuellen effects import */
@import '@casoon/ui-lib/effects/visual/index.css';

/* or spezifisch only the shadow-effects */
@import '@casoon/ui-lib/effects/visual/shadows.css';
```

## Shadow Utilities

the Library bietet verschiedene Shadow-classes for unterschiedliche Elevations-Stufen:

| Class | Description |
|--------|--------------|
| `.shadow-sm` | very leichter shadow for subtile Elevation |
| `.shadow` | Standard-shadow for allgemeine Elevation |
| `.shadow-md` | Mittlerer shadow for moderate Elevation |
| `.shadow-lg` | Grosser shadow for deutliche Elevation |
| `.shadow-xl` | Extra grosser shadow for strength Elevation |
| `.shadow-2xl` | very grosser shadow for maximale Elevation |
| `.shadow-inner` | Innerer shadow for eingedruckte elements |
| `.shadow-none` | no shadow (nutzlich zum remove from shadow) |

### Example

```html
<div class="shadow-sm p-4 m-4">
  element with very leichtem shadow
</div>

<div class="shadow p-4 m-4">
  element with Standard-shadow
</div>

<div class="shadow-md p-4 m-4">
  element with mittlerem shadow
</div>

<div class="shadow-lg p-4 m-4">
  element with grossem shadow
</div>

<div class="shadow-xl p-4 m-4">
  element with extra grossem shadow
</div>

<div class="shadow-2xl p-4 m-4">
  element with very grossem shadow
</div>

<div class="shadow-inner p-4 m-4">
  element with innerem shadow
</div>
```

## Elevation-system

the shadow-Utilities folgen einem konsistenten Elevation-system, the the visuelle Hierarchie unterstutzt:

| Elevation | shadow-Class | Typische Application |
|-----------|-----------------|-------------------|
| 1 (am niedrigsten) | `.shadow-sm` | Separatoren, abgegrenzte areas |
| 2 | `.shadow` | Cardn, containers, panels |
| 3 | `.shadow-md` | Erhohte Cardn, Dropdown-Menus |
| 4 | `.shadow-lg` | dialogs, hervorgehobene elements |
| 5 | `.shadow-xl` | modals, popups |
| 6 (am hochsten) | `.shadow-2xl` | Kritische notifications |

### Example for a Elevation-Hierarchie

```html
<div class="shadow-sm p-4 mb-4">
  <h3>Basisebene</h3>
  <p>Niedrigste Elevation with subtiler Unterscheidung vom background</p>
</div>

<div class="shadow p-4 mb-4">
  <h3>Containerebene</h3>
  <p>Standard-Cardn and containers</p>
</div>

<div class="shadow-md p-4 mb-4">
  <h3>Erhohte layer</h3>
  <p>Hervorgehobene elements and Dropdown-Menus</p>
</div>

<div class="shadow-lg p-4 mb-4">
  <h3>Daruber schwebende layer</h3>
  <p>dialogs and wichtige elements</p>
</div>

<div class="shadow-xl p-4 mb-4">
  <h3>Overlay-layer</h3>
  <p>modals and popups</p>
</div>

<div class="shadow-2xl p-4">
  <h3>Oberste layer</h3>
  <p>Kritische notifications and fokussierte elements</p>
</div>
```

## Interaktive shadow

shadow can with Hover- and anderen Interaktionseffekten kombiniert become, um dynamische UI-elements to create:

```html
<!-- shadow, the oneself beim Hover vergrossert -->
<div class="shadow hover-lift">
  Beim Hover angehobenes element
</div>

<!-- Card with shadow and Hover-effect -->
<div class="shadow-md hover-scale">
  Interaktive Card with Skalierung
</div>
```

## Innere shadow

the innere shadow (`.shadow-inner`) ist nutzlich for eingedruckte elements how Inputer or Toggle-buttons:

```html
<!-- Eingedrucktes Input -->
<input type="text" class="shadow-inner p-2" placeholder="Eingedrucktes Input">

<!-- Eingedruckter containers -->
<div class="shadow-inner p-4">
  this containers erscheint eingedruckt instead of erhoht
</div>
```

## Customization

all shadow-effects can with CSS Variables angepasst become:

```css
:root {
  /* shadow-variables */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 5%);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 25%);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 5%);
  --shadow-none: 0 0 #0000;
}
```

### Customization the shadow-color

You can the color and Intensitat the shadow customize, um them on her color scheme anzupassen:

```css
:root {
  /* Blaue shadow */
  --shadow: 0 1px 3px 0 rgb(0 100 255 / 10%), 0 1px 2px -1px rgb(0 100 255 / 10%);
  
  /* Starkere shadow */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 20%), 0 4px 6px -4px rgb(0 0 0 / 20%);
}
```

## Dark Mode Integration

the shadow can also for den Dark Mode angepasst become, um the richtige visuelle Hierarchie in dunkleren Umgebungen to erhalten:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 90%);
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 80%), 0 1px 2px -1px rgb(0 0 0 / 80%);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 70%), 0 2px 4px -2px rgb(0 0 0 / 70%);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 70%), 0 4px 6px -4px rgb(0 0 0 / 70%);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 70%), 0 8px 10px -6px rgb(0 0 0 / 70%);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 90%);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 90%);
  }
}
```

## Accessibility

at the Usage from shadow zur Display from visueller Hierarchie ist it important, also others visuelle Notee to use, with that user with Sehschwachen the Hierarchie erkennen can:

1. **not only on shadow verlassen**: combine them shadow with anderen visuellen Noteen how color, size or position.
2. **Ausreichender Kontrast**: ensure, that the Kontrast between Elementen also without shadow ausreichend ist.
3. **Konsistente Hierarchie**: use them shadow konsistent in Ihrer gesamten Application.

## Best Practices

1. **use them shadow sparsam**: to many shadow can the visuelle Hierarchie verwirren.
2. **Befolgen them the Elevation-Hierarchie**: use them konsistent the richtigen shadow for the entsprechende Elevation.
3. **combine them with anderen Effekten**: shadow funktionieren good with anderen visuellen Effekten how Border-Radius or Hover-Effekten.
4. **Berucksichtigen them the Performance**: shadow can the Renderleistung beeintrachtigen, besonders on mobilen Geraten.
5. **Customization on the color scheme**: Passen them shadow on her color scheme on, besonders im Dark Mode.

## Browser-Kompatibilitat

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| box-Shadow | 10+ | 4+ | 5.1+ | 12+ |
| Multiple box-Shadows | 10+ | 4+ | 5.1+ | 12+ |
| Inset box-Shadow | 10+ | 4+ | 5.1+ | 12+ |

the shadow-Utilities become from allen modernen Browsern unterstutzt. 
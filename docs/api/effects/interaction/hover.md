---
title: Hover Effects
category: API
outline: deep
---

# Hover Effects

the Casoon UI Library bietet a Sammlung from Hover-Effekten, the them on interaktive elements anwenden can, um the Benutzererlebnis to verbessern. these effects become aktiviert, if user with the Maus over elements fahren or them on Touch-Geraten beruhren.

## Overview

all Hover-effects sind for optimale Leistung konzipiert and berucksichtigen Accessibilitysaspekte how `prefers-reduced-motion`.

## Import

```css
/* Entweder all Interaktionseffekte import */
@import '@casoon/ui-lib/effects/interaction/index.css';

/* or spezifisch only the Hover-effects */
@import '@casoon/ui-lib/effects/interaction/hover.css';
```

## Skalierungseffekte

Skalierungseffekte enlarge elements, if user with the Maus daruber fahren:

| Class | Description |
|--------|--------------|
| `.hover-scale` | Standardskalierung (5% grosser) beim Hover |
| `.hover-scale-sm` | Kleine Skalierung (2% grosser) beim Hover |
| `.hover-scale-lg` | size Skalierung (10% grosser) beim Hover |

### Example

```html
<button class="hover-scale">
  Standard-Skalierung
</button>

<button class="hover-scale-sm">
  Kleine Skalierung
</button>

<button class="hover-scale-lg">
  size Skalierung
</button>
```

## Anhebungseffekte

Anhebungseffekte heben elements beim Hover on, kombiniert with einem Schatteneffekt:

| Class | Description |
|--------|--------------|
| `.hover-lift` | Standardanhebung (5px after oben) with shadow |
| `.hover-lift-sm` | Kleine Anhebung (2px after oben) with shadow |
| `.hover-lift-lg` | size Anhebung (10px after oben) with shadow |

### Example

```html
<div class="card hover-lift">
  these Card hebt oneself beim Hover
</div>

<div class="card hover-lift-sm">
  these Card hebt oneself leicht beim Hover
</div>

<div class="card hover-lift-lg">
  these Card hebt oneself stark beim Hover
</div>
```

## Neigungseffekte

Neigungseffekte (Tilt) erzeugen a 3D-Rotation beim Hover:

| Class | Description |
|--------|--------------|
| `.hover-tilt` | Standard-3D-Neigung (10 Grad) beim Hover |
| `.hover-tilt-sm` | Kleine 3D-Neigung (5 Grad) beim Hover |
| `.hover-tilt-lg` | size 3D-Neigung (15 Grad) beim Hover |

### Example

```html
<div class="card hover-tilt">
  these Card neigt oneself beim Hover
</div>

<div class="card hover-tilt-sm">
  these Card neigt oneself leicht beim Hover
</div>

<div class="card hover-tilt-lg">
  these Card neigt oneself stark beim Hover
</div>
```

## Gluheffekte

Gluheffekte fugen einen leuchtenden shadow beim Hover hinzu:

| Class | Description |
|--------|--------------|
| `.hover-glow` | Standardleuchten beim Hover |
| `.hover-glow-sm` | Schwaches Leuchten beim Hover |
| `.hover-glow-lg` | Starkes Leuchten beim Hover |

### Example

```html
<button class="hover-glow">
  Leuchtender button
</button>

<button class="hover-glow-sm">
  Leicht leuchtender button
</button>

<button class="hover-glow-lg">
  Stark leuchtender button
</button>
```

## Randeffekte

Randeffekte fugen einen animierten margin beim Hover hinzu:

| Class | Description |
|--------|--------------|
| `.hover-border` | Standardanimierter margin beim Hover (2px) |
| `.hover-border-sm` | Dunner animierter margin beim Hover (1px) |
| `.hover-border-lg` | Dicker animierter margin beim Hover (3px) |

### Example

```html
<a href="#" class="hover-border">
  link with animiertem margin
</a>

<a href="#" class="hover-border-sm">
  link with dunnem animiertem margin
</a>

<a href="#" class="hover-border-lg">
  link with dickem animiertem margin
</a>
```

## Hintergrundeffekte

Hintergrundeffekte change the Hintergrundfarbe beim Hover:

| Class | Description |
|--------|--------------|
| `.hover-bg` | Standardhintergrund beim Hover |
| `.hover-bg-sm` | Leichter background beim Hover |
| `.hover-bg-lg` | Intensiver background beim Hover |

### Example

```html
<div class="hover-bg">
  element with Hover-background
</div>

<div class="hover-bg-sm">
  element with leichtem Hover-background
</div>

<div class="hover-bg-lg">
  element with intensivem Hover-background
</div>
```

## Farbvarianten

You can the color the Hover-effects with diesen classes customize:

| Class | Description |
|--------|--------------|
| `.hover-color-primary` | Primarfarbe for Hover-effects |
| `.hover-color-secondary` | Sekundarfarbe for Hover-effects |
| `.hover-color-success` | Erfolgsfarbe for Hover-effects |
| `.hover-color-error` | Fehlerfarbe for Hover-effects |
| `.hover-color-warning` | Warnfarbe for Hover-effects |
| `.hover-color-info` | Infofarbe for Hover-effects |

### Example

```html
<button class="hover-glow hover-color-primary">
  Primarfarbener Gluheffekt
</button>

<button class="hover-border hover-color-success">
  Erfolgsfarbe for Randeffekt
</button>

<div class="hover-bg hover-color-warning">
  Warnfarbe for Hintergrundeffekt
</div>
```

## Effektkombinationen

Hover-effects can miteinander and with anderen Effekten kombiniert become:

```html
<!-- Skalierung and Gluhen -->
<button class="hover-scale hover-glow hover-color-primary">
  Skalierende and leuchtende button
</button>

<!-- Anhebung with Farbeffekt -->
<div class="card hover-lift hover-color-info">
  Card with Anhebung and info-Farbeffekt
</div>

<!-- several effects kombiniert -->
<a href="#" class="hover-scale-sm hover-border hover-color-success">
  link with mehreren Hover-Effekten
</a>
```

## Accessibility

all Hover-effects respektieren the Benutzereinstellung `prefers-reduced-motion`. if a user reduzierte Bewegung bevorzugt, become the animations deaktiviert.

```css
@media (prefers-reduced-motion: reduce) {
  .hover-scale,
  .hover-lift,
  .hover-tilt,
  /* usw. */
  {
    transition: none;
  }
  
  .hover-scale:hover,
  .hover-lift:hover,
  .hover-tilt:hover,
  /* usw. */
  {
    transform: none;
  }
}
```

## Customization

You can the Hover-effects with CSS Variables customize:

```css
:root {
  /* Colors for Hover-effects */
  --hover-primary: rgb(59 130 246 / 50%);
  --hover-primary-bg: rgb(59 130 246 / 10%);
  --hover-secondary: rgb(107 114 128 / 50%);
  --hover-secondary-bg: rgb(107 114 128 / 10%);
  --hover-success: rgb(16 185 129 / 50%);
  --hover-success-bg: rgb(16 185 129 / 10%);
  --hover-error: rgb(239 68 68 / 50%);
  --hover-error-bg: rgb(239 68 68 / 10%);
  --hover-warning: rgb(245 158 11 / 50%);
  --hover-warning-bg: rgb(245 158 11 / 10%);
  --hover-info: rgb(6 182 212 / 50%);
  --hover-info-bg: rgb(6 182 212 / 10%);
}
```

## Empfohlene Anwendungen

- **Skalierung**: use them these for kleine UI-elements how buttons or icons.
- **Anhebung**: Ideal for Cardn, containers or hervorgehobene elements.
- **Neigung**: use them these for spielerische elements or um 3D-effects hervorzuheben.
- **Gluhen**: Effektiv for Call-to-Action-buttons or wichtige elements.
- **margin**: good for links, Menuelemente or Navigationseintrage.
- **background**: Nutzlich for Listeneintrage, Menuelemente or interaktive containers.

## Best Practices

1. **Consistency bewahren**: use them the same Hover-effects for ahnliche elements in Ihrer Application.
2. **Ubermassige animation vermeiden**: combine them not to many effects on einmal.
3. **Accessibility note**: ensure, that Ihre contents also without Hover zuganglich sind.
4. **Leistung optimieren**: use them Transformationen and Opacity for flussige animations.
5. **Mobile Gerate berucksichtigen**: Planen them also for Touch-interactions, da it on Mobilgeraten no Hover-events gibt.

## Browser-Kompatibilitat

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Hover-effects | 26+ | 16+ | 9+ | 12+ |
| CSS-Transitions | 26+ | 16+ | 9+ | 12+ |
| 3D-Transformationen | 36+ | 16+ | 9+ | 12+ |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ | 
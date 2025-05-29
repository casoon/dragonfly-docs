---
title: Focus Effects
category: API
outline: deep
---

# Focus Effects

the Casoon UI Library bietet a Sammlung from Focus-Effekten, the the Accessibility and Benutzererfahrung verbessern. these effects become aktiviert, if elements fokussiert become, sei it through Tastaturnavigation or Mausklicks.

## Overview

Focus-effects sind a wichtiger Bestandteil the Accessibility, da them visuelles Feedback geben, welches element aktuell fokussiert ist. Dies ist besonders important for Tastaturbenutzer and Screenreader-user.

## Import

```css
/* Entweder all Interaktionseffekte import */
@import '@casoon/ui-lib/effects/interaction/index.css';

/* or spezifisch only the Focus-effects */
@import '@casoon/ui-lib/effects/interaction/focus.css';
```

## Focus-Ring-effects

Focus-Ring-effects fugen einen Schattenring um fokussierte elements hinzu:

| Class | Description |
|--------|--------------|
| `.focus-ring` | Standard-Focus-Ring (3px) at Fokussierung |
| `.focus-ring-sm` | Kleinerer Focus-Ring (2px) at Fokussierung |
| `.focus-ring-lg` | Grosserer Focus-Ring (4px) at Fokussierung |

### Example

```html
<button class="focus-ring">
  Standard Focus-Ring
</button>

<input type="text" class="focus-ring-sm" placeholder="smaller Focus-Ring">

<select class="focus-ring-lg">
  <option>Grosser Focus-Ring</option>
</select>
```

## Outline-effects

Outline-effects fugen einen Umriss um fokussierte elements hinzu:

| Class | Description |
|--------|--------------|
| `.focus-outline` | Standard-Outline (2px) with spacing at Fokussierung |
| `.focus-outline-sm` | Dunne Outline (1px) with kleinem spacing at Fokussierung |
| `.focus-outline-lg` | Dicke Outline (3px) with grosserem spacing at Fokussierung |

### Example

```html
<button class="focus-outline">
  Standard Outline
</button>

<input type="text" class="focus-outline focus-outline-sm" placeholder="Dunne Outline">

<select class="focus-outline focus-outline-lg">
  <option>Dicke Outline</option>
</select>
```

## Hintergrundeffekte

Hintergrundeffekte change the Hintergrundfarbe beim Fokussieren:

| Class | Description |
|--------|--------------|
| `.focus-bg` | Standard-Hintergrundfarbe at Fokussierung |
| `.focus-bg-sm` | Leichte Hintergrundfarbe at Fokussierung |
| `.focus-bg-lg` | Intensive Hintergrundfarbe at Fokussierung |

### Example

```html
<button class="focus-bg">
  Standard background
</button>

<input type="text" class="focus-bg-sm" placeholder="Leichter background">

<select class="focus-bg-lg">
  <option>Intensiver background</option>
</select>
```

## Farbvarianten

You can the color the Focus-effects with diesen classes customize:

| Class | Description |
|--------|--------------|
| `.focus-color-primary` | Primarfarbe for Focus-effects |
| `.focus-color-secondary` | Sekundarfarbe for Focus-effects |
| `.focus-color-success` | Erfolgsfarbe for Focus-effects |
| `.focus-color-error` | Fehlerfarbe for Focus-effects |
| `.focus-color-warning` | Warnfarbe for Focus-effects |
| `.focus-color-info` | Infofarbe for Focus-effects |

### Example

```html
<button class="focus-ring focus-color-primary">
  Primarfarbener Focus-Ring
</button>

<input type="text" class="focus-outline focus-color-success" placeholder="Erfolgsfarben-Outline">

<select class="focus-bg focus-color-warning">
  <option>Warnfarben-background</option>
</select>
```

## Effektkombinationen

Focus-effects can miteinander and with anderen Effekten kombiniert become:

```html
<!-- Focus-Ring with Hover-effect -->
<button class="focus-ring focus-color-primary hover-scale">
  Fokusring with Hover-Skalierung
</button>

<!-- Verschiedene States with konsistenten Colors -->
<input type="text" 
       class="focus-outline focus-color-info hover-border hover-color-info" 
       placeholder="Konsistente effects">

<!-- Kombinierte Interaktionseffekte -->
<a href="#" class="focus-bg focus-color-success hover-bg hover-color-success">
  link with passenden Hover- and Focus-Effekten
</a>
```

## Accessibility

all Focus-effects sind so konzipiert, that them the Accessibility verbessern:

1. **Hoher Kontrast**: the Standardfarben bieten einen guten Kontrast zum background.
2. **Deutliche Unterscheidung**: Focus-effects sind deutlich sichtbar and heben oneself from normalen Statesn ab.
3. **no Abhangigkeit from color allein**: the effects use sowohl color as also others visuelle Notee.
4. **Respektieren from Bewegungseinschrankungen**: all transitions become deaktiviert, if the user reduzierte Bewegung bevorzugt.

```css
@media (prefers-reduced-motion: reduce) {
  .focus-ring,
  .focus-outline,
  .focus-bg,
  /* usw. */
  {
    transition: none;
  }
}
```

## Customization

You can the Focus-effects with CSS Variables customize:

```css
:root {
  /* Colors for Focus-effects */
  --focus-primary: rgb(59 130 246 / 50%);
  --focus-primary-bg: rgb(59 130 246 / 10%);
  --focus-secondary: rgb(107 114 128 / 50%);
  --focus-secondary-bg: rgb(107 114 128 / 10%);
  --focus-success: rgb(16 185 129 / 50%);
  --focus-success-bg: rgb(16 185 129 / 10%);
  --focus-error: rgb(239 68 68 / 50%);
  --focus-error-bg: rgb(239 68 68 / 10%);
  --focus-warning: rgb(245 158 11 / 50%);
  --focus-warning-bg: rgb(245 158 11 / 10%);
  --focus-info: rgb(6 182 212 / 50%);
  --focus-info-bg: rgb(6 182 212 / 10%);
}
```

## Empfohlene Anwendungen

- **Focus-Ring**: Ideal for buttons, links, form elements and others interaktive elements.
- **Outline**: good for grossere elements or If you einen traditionelleren Focus-Style bevorzugen.
- **background**: Nutzlich for Menuelemente, Navigationslinks and interaktive Listeneintrage.

## Best Practices

1. **Niemals Focus-Styles remove**: remove them niemals `outline: none` without einen alternativen Focus-Style hinzuzufugen.
2. **Consistency bewahren**: use them the same Focus-effects for ahnliche elements in Ihrer Application.
3. **Sicherstellung the visibility**: ensure, that Focus-effects on verschiedenen Hintergrunden sichtbar sind.
4. **Kombination with anderen Statesn**: ensure, that Focus-effects also sichtbar sind, If you with Hover or Active-Statesn kombiniert become.
5. **Ausreichender Kontrast**: use them Focus-Colors with ausreichendem Kontrast zum background (mindestens 3:1).

## Browser-Kompatibilitat

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Focus-effects | 26+ | 16+ | 9+ | 12+ |
| CSS-Transitions | 26+ | 16+ | 9+ | 12+ |
| box-Shadow | 10+ | 4+ | 5.1+ | 12+ |
| Outline-Offset | 15+ | 3.5+ | 3+ | 12+ |
| prefers-reduced-motion | 74+ | 63+ | 10.1+ | 79+ | 
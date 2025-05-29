---
title: shadow-effects
category: Guide
---

# shadow-effects

the `shadows.css` file bietet a Sammlung from vordefinierten shadow-Effekten, the Tiefe, Hierarchie and realistische Erscheinung Ihrer UI-elements verbessern. through sorgfaltig abgestimmte Schattenwurfe can them visuelle Notee for height, Interaktivitat and importance from Elementen geben.

## Overview

shadow sind a fundamentales element des Designsystems and schaffen Tiefe in einer flachen 2D-Oberflache. the Casoon UI Library bietet verschiedene shadow-Typen, Intensitaten and Richtungen for verschiedene Use Cases.

## Base-shadow

```html
<!-- Standard-shadow -->
<div class="shadow">Standard-shadow</div>

<!-- shadow-Sizes -->
<div class="shadow-sm">smaller shadow</div>
<div class="shadow-md">Mittlerer shadow</div>
<div class="shadow-lg">Grosser shadow</div>
<div class="shadow-xl">Extra grosser shadow</div>
<div class="shadow-2xl">Doppelt extra grosser shadow</div>

<!-- no shadow -->
<div class="shadow-none">no shadow</div>
```

## Innere shadow

```html
<!-- Innerer shadow -->
<div class="shadow-inner">element with innerem shadow</div>

<!-- Innere shadow-Sizes -->
<div class="shadow-inner-sm">smaller innerer shadow</div>
<div class="shadow-inner-md">Mittlerer innerer shadow</div>
<div class="shadow-inner-lg">Grosser innerer shadow</div>
```

## Gerichtete shadow

```html
<!-- Gerichtete shadow -->
<div class="shadow-top">shadow only am oberen margin</div>
<div class="shadow-right">shadow only am rechten margin</div>
<div class="shadow-bottom">shadow only am unteren margin</div>
<div class="shadow-left">shadow only am linken margin</div>

<!-- Kombinierte gerichtete shadow -->
<div class="shadow-top shadow-right">shadow on zwei Seiten</div>
```

## Farbige shadow

```html
<!-- Farbige shadow -->
<div class="shadow shadow-color-primary">Primarfarbiger shadow</div>
<div class="shadow shadow-color-secondary">Sekundarfarbiger shadow</div>
<div class="shadow shadow-color-accent">Akzentfarbiger shadow</div>
<div class="shadow shadow-color-success">Erfolgs-shadow</div>
<div class="shadow shadow-color-warning">Warnungs-shadow</div>
<div class="shadow shadow-color-error">errors-shadow</div>
<div class="shadow shadow-color-info">info-shadow</div>
```

## Material-design-shadow

Angelehnt on Material design-Prinzipien:

```html
<!-- Material design Elevation -->
<div class="elevation-1">Elevation 1 (1dp)</div>
<div class="elevation-2">Elevation 2 (3dp)</div>
<div class="elevation-3">Elevation 3 (6dp)</div>
<div class="elevation-4">Elevation 4 (8dp)</div>
<div class="elevation-5">Elevation 5 (12dp)</div>
```

## Weiche shadow

Sorgfaltig gestaltete weiche shadow for moderne UIs:

```html
<!-- Weiche shadow -->
<div class="shadow-soft-sm">smaller weicher shadow</div>
<div class="shadow-soft">Standard weicher shadow</div>
<div class="shadow-soft-lg">Grosser weicher shadow</div>
```

## Mehrfach-shadow

Komplexere shadow for realistischere effects:

```html
<!-- Mehrfach-shadow -->
<div class="shadow-layered">Geschichteter shadow (several Ebenen)</div>
<div class="shadow-floating">Schwebender shadow-effect</div>
<div class="shadow-ambient">shadow with Umgebungslicht-effect</div>
```

## Scharfe shadow

for klare, definierte Kanten:

```html
<!-- Scharfe shadow -->
<div class="shadow-sharp-sm">smaller scharfer shadow</div>
<div class="shadow-sharp">Standard scharfer shadow</div>
<div class="shadow-sharp-lg">Grosser scharfer shadow</div>
```

## Interaktive shadow

shadow, the on Benutzerinteraktionen reagieren:

```html
<!-- Hover-shadow -->
<div class="shadow-hover">Verstarkter shadow at Hover</div>
<div class="shadow-hover-up">Angehobener shadow at Hover</div>
<div class="shadow-hover-grow">Wachsender shadow at Hover</div>

<!-- Fokus-shadow -->
<button class="shadow-focus">Verstarkter shadow at Fokus</button>

<!-- Aktive shadow -->
<button class="shadow-active">Reduzierter shadow at Aktivierung</button>

<!-- Kombinierte interaktive shadow -->
<button class="shadow shadow-hover shadow-active">
  Interaktiver button with shadow
</button>
```

## shadow-Ubergange

Animierte shadow for sanfte Ubergange:

```html
<!-- shadow-transition -->
<div class="shadow-transition">Sanfter transition beim change des Schattens</div>

<!-- Kombiniert with Hover for animation -->
<div class="shadow-sm shadow-hover shadow-transition">
  Hover for animierten shadow-transition
</div>
```

## Components-spezifische shadow

Vordefinierte shadow for bestimmte UI-Components:

```html
<!-- Components-shadow -->
<div class="card shadow-card">Card with optimiertem shadow</div>
<div class="dropdown shadow-dropdown">Dropdown with optimiertem shadow</div>
<button class="button shadow-button">button with optimiertem shadow</button>
<div class="modal shadow-modal">modal with optimiertem shadow</div>
<div class="tooltip shadow-tooltip">tooltip with optimiertem shadow</div>
```

## Customization over CSS Variables

the shadow can over CSS Variables angepasst become:

```css
:root {
  /* Base-shadow-parameter */
  --shadow-color: rgb(0 0 0 / 0.1);
  --shadow-color-darker: rgb(0 0 0 / 0.2);
  
  /* shadow-Offset */
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  
  /* shadow-Unscharfe and Ausbreitung */
  --shadow-blur-sm: 4px;
  --shadow-blur-md: 8px;
  --shadow-blur-lg: 16px;
  --shadow-blur-xl: 24px;
  --shadow-blur-2xl: 40px;
  
  --shadow-spread-sm: 0px;
  --shadow-spread-md: 0px;
  --shadow-spread-lg: 0px;
  
  /* Vordefinierte shadow */
  --shadow-sm: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-sm) var(--shadow-spread-sm) var(--shadow-color);
  --shadow-md: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-md) var(--shadow-spread-md) var(--shadow-color);
  --shadow-lg: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-lg) var(--shadow-spread-lg) var(--shadow-color);
  --shadow-xl: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-xl) var(--shadow-spread-lg) var(--shadow-color);
  --shadow-2xl: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-2xl) var(--shadow-spread-lg) var(--shadow-color);
  
  /* Innerer shadow */
  --shadow-inner: inset 0 2px 4px 0 var(--shadow-color);
  
  /* Gerichtete shadow */
  --shadow-top: 0 -2px 4px 0 var(--shadow-color);
  --shadow-right: 2px 0 4px 0 var(--shadow-color);
  --shadow-bottom: 0 2px 4px 0 var(--shadow-color);
  --shadow-left: -2px 0 4px 0 var(--shadow-color);
  
  /* Weiche shadow */
  --shadow-soft: 0 2px 8px -1px var(--shadow-color),
                0 1px 2px -1px var(--shadow-color-darker);
  
  /* Material design Elevations */
  --elevation-1: 0 1px 1px 0 rgba(0,0,0,0.14), 
                0 2px 1px -1px rgba(0,0,0,0.12), 
                0 1px 3px 0 rgba(0,0,0,0.20);
}
```

## Dunkelmodus-Customization

shadow im Dunkelmodus should angepasst become:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-color: rgb(0 0 0 / 0.3);
    --shadow-color-darker: rgb(0 0 0 / 0.4);
    
    /* Subtilere shadow for dunkles theme */
    --shadow-blur-sm: 3px;
    --shadow-blur-md: 6px;
    --shadow-blur-lg: 12px;
    --shadow-blur-xl: 18px;
    --shadow-blur-2xl: 30px;
    
    /* Spezielle dunkle shadow for bestimmte Components */
    --shadow-card: 0 0 10px 0 rgb(0 0 0 / 0.5);
  }
}
```

## Accessibility

at shadow must folgende Aspekte the Accessibility beachtet become:

1. **Kontrast**: ensure, that the shadow ausreichend Kontrast bietet, um wahrgenommen to become
2. **Ubermassige shadow**: Vermeiden them to many or to strength shadow, the ablenkend wirken konnten
3. **Hoher Kontrast-Modus**: Passen them shadow im hohen Kontrast-Modus on

```css
@media (prefers-contrast: more) {
  .shadow, 
  .shadow-sm, 
  .shadow-md, 
  .shadow-lg,
  .shadow-xl,
  .shadow-2xl {
    box-shadow: none;
    border: 1px solid currentColor;
  }
}
```

## Performance-Uberlegungen

shadow can the Rendering-Performance beeinflussen:

1. **Vermeiden them komplexe shadow** on Elementen, the haufig neu gerendert become
2. **use them `will-change: box-shadow`** for wichtige animierte shadow
3. **Bevorzugen them Einzel-shadow** instead of mehrfacher shadow for bessere Performance
4. **Testen them on mobilen Geraten**, um sicherzustellen, that the shadow not the Performance beeintrachtigen

## Praktische Examples

### Gestaffelte Cardn with verschiedenen shadow

```html
<div class="card-group">
  <div class="card shadow-sm">Niedrige Prioritat</div>
  <div class="card shadow-md">Mittlere Prioritat</div>
  <div class="card shadow-lg">height Prioritat</div>
</div>
```

### Interaktive button-Hierarchie

```html
<div class="button-group">
  <button class="button shadow-sm shadow-hover-up">Sekundarer button</button>
  <button class="button shadow-md shadow-hover-up shadow-active">Primarer button</button>
</div>
```

### modal-dialog with komplexem shadow

```html
<div class="modal shadow-layered">
  <div class="modal-header">
    <h2>dialog-Titel</h2>
    <button class="modal-close shadow-sm shadow-hover">&times;</button>
  </div>
  <div class="modal-body">
    <p>Dialoginhalt with komplexem shadow-effect for bessere Tiefenwirkung.</p>
  </div>
  <div class="modal-footer">
    <button class="button shadow-sm">Abbrechen</button>
    <button class="button primary shadow-md">Bestatigen</button>
  </div>
</div>
```

## Best Practices

1. **Konsistente Lichtquelle**: Halten them the Richtung the shadow konsistent for a realistische Erscheinung
2. **Schattenhierarchie**: use them unterschiedliche shadow-Intensitaten, um visuelle Hierarchie to kommunizieren
3. **Dezente shadow**: Subtile shadow sind oft effektiver as strength, auffallige
4. **Zweckmassiger Einsatz**: use them shadow, um wichtige Informationen hervorzuheben and Beziehungen to verdeutlichen
5. **Kontextbedingte shadow**: Passen them shadow on den Kontext on – dialogs benotigen starkere shadow as Cardn usw. 
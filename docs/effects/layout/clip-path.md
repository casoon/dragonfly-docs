# Clip-Path-effects

Clip-Path-effects become verwendet, um elements in bestimmte Formen to schneiden. the `@casoon/ui-lib` bietet verschiedene Clip-Path-effects, the for that beitragen, visuell interessante and dynamische layouts to erzeugen.

## Basic Usage

the grundlegende Clip-Path-effect kann on jedes element angewendet become:

```html
<div class="clip-path">
  <img src="image.jpg" alt="Zugeschnittenes image">
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Clip-Path-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.clip-path` | Basisklasse for Clip-Path-effects |
| `.clip-circle` | Kreisformiger Ausschnitt |
| `.clip-ellipse` | Elliptischer Ausschnitt |
| `.clip-triangle` | Dreieckiger Ausschnitt |
| `.clip-rhombus` | Rhombusformiger Ausschnitt |
| `.clip-pentagon` | Funfeckiger Ausschnitt |
| `.clip-hexagon` | Sechseckiger Ausschnitt |
| `.clip-heptagon` | Siebeneckiger Ausschnitt |
| `.clip-octagon` | Achteckiger Ausschnitt |
| `.clip-bevel` | Ausschnitt with abgeschragten Ecken |
| `.clip-rabbet` | Ausschnitt with eingelassenen Ecken |
| `.clip-arrow` | Pfeilformiger Ausschnitt |
| `.clip-message` | Nachrichtenblase-Ausschnitt |
| `.clip-diagonal` | Diagonaler Ausschnitt |
| `.clip-frame` | Rahmenformiger Ausschnitt |

## Variants

### Kreis-Ausschnitt

the Kreis-Ausschnitt schneidet the element in einer Kreisform aus:

```html
<div class="clip-circle">
  <img src="image.jpg" alt="Kreisformiges image">
</div>
```

Verfugbare Variants:

```html
<div class="clip-circle-center">Zentrierter Kreis</div>
<div class="clip-circle-top-left">Kreis in the oberen linken Ecke</div>
<div class="clip-circle-bottom-right">Kreis in the unteren rechten Ecke</div>
```

### Elliptischer Ausschnitt

the elliptische Ausschnitt erstellt a ovale Form:

```html
<div class="clip-ellipse">
  <img src="image.jpg" alt="Elliptisches image">
</div>
```

Verfugbare Variants:

```html
<div class="clip-ellipse-horizontal">Horizontale Ellipse</div>
<div class="clip-ellipse-vertical">Vertikale Ellipse</div>
<div class="clip-ellipse-diagonal">Diagonale Ellipse</div>
```

### Dreieckiger Ausschnitt

the dreieckige Ausschnitt schneidet the element in Dreiecksform aus:

```html
<div class="clip-triangle">
  <img src="image.jpg" alt="Dreieckiges image">
</div>
```

Verfugbare Variants:

```html
<div class="clip-triangle-up">after oben zeigendes Dreieck</div>
<div class="clip-triangle-right">after rechts zeigendes Dreieck</div>
<div class="clip-triangle-down">after unten zeigendes Dreieck</div>
<div class="clip-triangle-left">after links zeigendes Dreieck</div>
<div class="clip-triangle-top-left">Dreieck in the oberen linken Ecke</div>
<div class="clip-triangle-top-right">Dreieck in the oberen rechten Ecke</div>
<div class="clip-triangle-bottom-left">Dreieck in the unteren linken Ecke</div>
<div class="clip-triangle-bottom-right">Dreieck in the unteren rechten Ecke</div>
```

### Rhombusformiger Ausschnitt

the rhombusformige Ausschnitt erstellt a Rautenform:

```html
<div class="clip-rhombus">
  <img src="image.jpg" alt="Rautenformiges image">
</div>
```

### Polygonale Ausschnitte

Verschiedene polygonale Ausschnitte for geometrische Formen:

```html
<div class="clip-pentagon">Funfeckiger Ausschnitt</div>
<div class="clip-hexagon">Sechseckiger Ausschnitt</div>
<div class="clip-heptagon">Siebeneckiger Ausschnitt</div>
<div class="clip-octagon">Achteckiger Ausschnitt</div>
```

### Funktionale Ausschnitte

Ausschnitte with spezifischen functions or Bedeutungen:

```html
<div class="clip-arrow-up">Pfeil after oben</div>
<div class="clip-arrow-right">Pfeil after rechts</div>
<div class="clip-arrow-down">Pfeil after unten</div>
<div class="clip-arrow-left">Pfeil after links</div>
<div class="clip-message">Nachrichtenblase</div>
<div class="clip-message-left">Nachrichtenblase links</div>
<div class="clip-message-right">Nachrichtenblase rechts</div>
```

### Diagonale Ausschnitte

Ausschnitte entlang diagonaler Linien:

```html
<div class="clip-diagonal-tl-br">Diagonal from oben links after unten rechts</div>
<div class="clip-diagonal-tr-bl">Diagonal from oben rechts after unten links</div>
<div class="clip-diagonal-bl-tr">Diagonal from unten links after oben rechts</div>
<div class="clip-diagonal-br-tl">Diagonal from unten rechts after oben links</div>
```

### Rahmenformige Ausschnitte

Ausschnitte, the einen border um the element create:

```html
<div class="clip-frame">Rahmenformiger Ausschnitt</div>
<div class="clip-frame-thin">Dunner border</div>
<div class="clip-frame-thick">Dicker border</div>
```

## Kombination with anderen Elementen

Clip-Path-effects can with verschiedenen UI-Elementen kombiniert become:

### images with Clip-Path

```html
<img src="image.jpg" alt="Profilbild" class="clip-circle">

<div class="clip-hexagon">
  <img src="landscape.jpg" alt="Landschaftsbild">
</div>
```

### Cardn with Clip-Path

```html
<div class="card clip-bevel">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>
```

### buttons with Clip-Path

```html
<button class="btn clip-octagon">Achteckiger button</button>
```

### containers with Clip-Path

```html
<section class="containers clip-diagonal-tl-br">
  <h2>Abschnitt with diagonalem Schnitt</h2>
  <p>content des Abschnitts...</p>
</section>
```

## Interaktive Clip-Path-effects

Clip-Path-effects can with interactions kombiniert become:

```html
<div class="clip-hover-circle">
  <img src="image.jpg" alt="image wird beim Hover kreisformig">
</div>

<div class="clip-path-transition">
  <img src="image.jpg" alt="Clip-Path with Ubergangseffekt">
</div>
```

## Customization

the Clip-Path-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Clip-Path-parameter */
  --clip-circle-size: 50%;
  --clip-circle-position-x: 50%;
  --clip-circle-position-y: 50%;
  
  /* Elliptische parameter */
  --clip-ellipse-radius-x: 50%;
  --clip-ellipse-radius-y: 30%;
  --clip-ellipse-position-x: 50%;
  --clip-ellipse-position-y: 50%;
  --clip-ellipse-rotation: 0deg;
  
  /* Dreieck-parameter */
  --clip-triangle-size: 100%;
  --clip-triangle-direction: up; /* up, right, down, left */
  
  /* Polygon-parameter */
  --clip-polygon-sides: 6; /* for regelmassige Polygone */
  --clip-polygon-rotation: 0deg;
  
  /* Diagonale parameter */
  --clip-diagonal-offset: 0%;
  
  /* border-parameter */
  --clip-frame-thickness: 20px;
  --clip-frame-inset: 0px;
}
```

## create benutzerdefinierter Clip-Paths

for komplexere Clip-Path-effects can them the CSS-Function `clip-path` direkt use:

```html
<div style="clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);">
  <img src="image.jpg" alt="Benutzerdefinierter Clip-Path">
</div>
```

```css
.custom-shape {
  clip-path: path('M0,0 L100,0 L100,75 L75,75 L75,100 L50,75 L0,75 Z');
}
```

## animations with Clip-Path

Clip-Path-effects can animiert become for dynamische Ubergange:

```css
@keyframes clipPathAnimation {
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
}

.clip-animated {
  animation: clipPathAnimation 1s ease-out forwards;
}
```

## Accessibility

at the Usage from Clip-Path-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Inhaltsverstandlichkeit**: ensure, that through the Ausschneiden no wichtigen contents verloren gehen
2. **Alternative Texte**: Bieten them immer alternative Texte for images with Clip-Path on
3. **Consistency**: use them Clip-Path-effects konsistent in Ihrer Benutzeroberflache

## Performance-Uberlegungen

Clip-Path-effects can the Leistung beeinflussen:

1. **Komplexitat**: Komplexe Formen can the Renderleistung beeintrachtigen
2. **animations**: Animierte Clip-Paths should sparsam eingesetzt become
3. **Hardware-Beschleunigung**: Clip-Path-animations profitieren from the Hardware-Beschleunigung

```css
/* Performance-Optimierung for animierte Clip-Paths */
.clip-animated {
  will-change: clip-path;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the meisten Clip-Path-effects sind with allen modernen Browsern kompatibel. some komplexere effects have however Einschrankungen in alteren Browsern.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Formen | ✓ | ✓ | ✓ | ✓ | Nein |
| Polygon-Pfade | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Pfade | ✓ | ✓ | ✓ | ✓ | Nein |
| animations | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Masken-effects](/docs/effects/layout/masks.md) - Ahnliche effects with Maskierung
- [Overlays](/docs/effects/layout/overlays.md) - Uberlagerungseffekte
- [Formen](/docs/effects/visual/shapes.md) - Formeffekte without Ausschneiden 
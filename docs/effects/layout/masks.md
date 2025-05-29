# Masken-effects

Masken-effects become verwendet, um den sichtbaren area eines Elements to define or to begrenzen. the `@casoon/ui-lib` bietet verschiedene Masken-effects, the for that beitragen, kreative and einzigartige visuelle Erscheinungsbilder to erzeugen.

## Basic Usage

the grundlegende Masken-effect kann on jedes element angewendet become:

```html
<div class="mask">
  <img src="image.jpg" alt="Maskiertes image">
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Masken-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.mask` | Basisklasse for Masken-effects |
| `.mask-circle` | Kreisformige Maske |
| `.mask-rounded` | Abgerundete Rechteckmaske |
| `.mask-ellipse` | Elliptische Maske |
| `.mask-triangle` | Dreieckige Maske |
| `.mask-hexagon` | Sechseckige Maske |
| `.mask-star` | Sternformige Maske |
| `.mask-diamond` | Rautenformige Maske |
| `.mask-custom` | Maske with benutzerdefinierter Form |
| `.mask-gradient` | Verlaufsmaske |

## Variants

### Kreis-Maske

the Kreis-Maske schneidet the element in einer perfekten Kreisform aus:

```html
<div class="mask-circle">
  <img src="image.jpg" alt="Kreisformiges image">
</div>
```

### Abgerundete Maske

the abgerundete Maske erstellt a Rechteck with abgerundeten Ecken:

```html
<div class="mask-rounded">
  <img src="image.jpg" alt="Abgerundetes image">
</div>
```

Verfugbare Variants:

```html
<div class="mask-rounded-sm">Leicht abgerundete Ecken</div>
<div class="mask-rounded-md">Mittel abgerundete Ecken</div>
<div class="mask-rounded-lg">Stark abgerundete Ecken</div>
```

### Elliptische Maske

the elliptische Maske erstellt a ovale Form:

```html
<div class="mask-ellipse">
  <img src="image.jpg" alt="Elliptisches image">
</div>
```

### Dreieckige Maske

the dreieckige Maske schneidet the element in Dreiecksform aus:

```html
<div class="mask-triangle">
  <img src="image.jpg" alt="Dreieckiges image">
</div>
```

### Sechseckige Maske

the sechseckige Maske erstellt a Hexagon-Form:

```html
<div class="mask-hexagon">
  <img src="image.jpg" alt="Sechseckiges image">
</div>
```

### Sternformige Maske

the sternformige Maske schneidet the element in Sternform aus:

```html
<div class="mask-star">
  <img src="image.jpg" alt="Sternformiges image">
</div>
```

### Rautenformige Maske

the rautenformige Maske erstellt a Diamantform:

```html
<div class="mask-diamond">
  <img src="image.jpg" alt="Rautenformiges image">
</div>
```

### Benutzerdefinierte Maske

with the benutzerdefinierten Maske can them own Formen create:

```html
<div class="mask-custom" style="--mask-image: url('path/to/mask.svg')">
  <img src="image.jpg" alt="Benutzerdefiniert maskiertes image">
</div>
```

### Verlaufsmaske

the Verlaufsmaske erstellt einen weichen transition:

```html
<div class="mask-gradient">
  <img src="image.jpg" alt="Verlaufsmasiertes image">
</div>
```

Verfugbare Variants:

```html
<div class="mask-gradient-to-right">Verlauft after rechts</div>
<div class="mask-gradient-to-left">Verlauft after links</div>
<div class="mask-gradient-to-top">Verlauft after oben</div>
<div class="mask-gradient-to-bottom">Verlauft after unten</div>
<div class="mask-gradient-radial">Radialer Verlauf</div>
```

## Kombination with anderen Elementen

Masken-effects can with verschiedenen UI-Elementen kombiniert become:

### images with Masken

```html
<img src="image.jpg" alt="Profilbild" class="mask-circle">

<div class="mask-hexagon">
  <img src="landscape.jpg" alt="Landschaftsbild">
</div>
```

### Cardn with Masken

```html
<div class="card mask-rounded-lg">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>
```

### buttons with Masken

```html
<button class="btn mask-ellipse">Elliptischer button</button>
```

### Hintergrundbilder with Masken

```html
<div class="background-image mask-gradient-to-bottom">
  <div class="content">content over dem maskierten background</div>
</div>
```

## Interaktive Masken

Masken can with interactions kombiniert become:

```html
<div class="mask-hover-circle">
  <img src="image.jpg" alt="image wird beim Hover kreisformig">
</div>

<div class="mask-transition">
  <img src="image.jpg" alt="Maske with Ubergangseffekt">
</div>
```

## Customization

the Masken-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Maskenparameter */
  --mask-rounded-radius-sm: 8px;
  --mask-rounded-radius-md: 16px;
  --mask-rounded-radius-lg: 24px;
  
  /* Geometrische Maskenparameter */
  --mask-triangle-direction: down; /* up, down, left, right */
  --mask-star-points: 5; /* Anzahl the Spitzen des Sterns */
  --mask-hexagon-rotation: 0deg; /* Rotation des Sechsecks */
  
  /* Verlaufsmaskenparameter */
  --mask-gradient-start: rgba(0, 0, 0, 1);
  --mask-gradient-end: rgba(0, 0, 0, 0);
  --mask-gradient-angle: 180deg; /* for gerichtete Verlaufe */
  --mask-gradient-radius: 50%; /* for radiale Verlaufe */
  
  /* Benutzerdefinierte Maskenparameter */
  --mask-custom-image: none; /* URL to einer SVG- or PNG-Maske */
  --mask-custom-size: contain; /* size the benutzerdefinierten Maske */
  --mask-custom-position: center; /* position the benutzerdefinierten Maske */
}
```

## create from SVG-Masken

for komplexere Masken can them SVG use:

```html
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <clipPath id="wave-mask">
      <path d="M0,50 C150,150 350,0 500,50 L500,200 L0,200 Z" />
    </clipPath>
  </defs>
</svg>

<div class="mask-custom" style="--mask-image: url('#wave-mask')">
  <img src="image.jpg" alt="Wellenmaskiertes image">
</div>
```

## Text with Masken

You can also Text with Masken gestalten:

```html
<h1 class="text-mask-image" style="--mask-image: url('background-pattern.jpg')">
  Gemusterter Text
</h1>
```

## Accessibility

at the Usage from Masken-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that maskierte contents ausreichenden Kontrast bieten
2. **Alternative Texte**: Bieten them immer alternative Texte for maskierte images on
3. **Verstandlichkeit**: use them Masken, the den content not unverstandlich machen

## Performance-Uberlegungen

Masken-effects can the Leistung beeinflussen:

1. **Komplexitat**: Komplexe Maskenformen can the Renderleistung beeintrachtigen
2. **animations**: Animierte Masken should sparsam eingesetzt become
3. **Optimierung**: use them optimierte SVG-Dateien for benutzerdefinierte Masken
4. **Hardware-Beschleunigung**: Komplexe Masken can from the Hardware-Beschleunigung profitieren

```css
/* Performance-Optimierung for animierte Masken */
.mask-animated {
  will-change: mask-position;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the meisten Masken-effects sind with allen modernen Browsern kompatibel. some komplexere effects have however Einschrankungen in alteren Browsern.

| effect | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Formen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Verlaufsmasken | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Masken | ✓ | ✓ | ✓ | ✓ | Nein |
| Animierte Masken | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Clip-Path-effects](/docs/effects/layout/clip-path.md) - Ahnliche effects with Clip-Path
- [Overlays](/docs/effects/layout/overlays.md) - Uberlagerungseffekte
- [Formen](/docs/effects/visual/shapes.md) - Formeffekte without Maskierung 
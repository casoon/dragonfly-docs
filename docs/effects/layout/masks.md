# Masken-Effekte

Masken-Effekte werden verwendet, um den sichtbaren Bereich eines Elements zu definieren oder zu begrenzen. Die `@casoon/ui-lib` bietet verschiedene Masken-Effekte, die dazu beitragen, kreative und einzigartige visuelle Erscheinungsbilder zu erzeugen.

## Grundlegende Verwendung

Der grundlegende Masken-Effekt kann auf jedes Element angewendet werden:

```html
<div class="mask">
  <img src="image.jpg" alt="Maskiertes Bild">
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Masken-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.mask` | Basisklasse für Masken-Effekte |
| `.mask-circle` | Kreisförmige Maske |
| `.mask-rounded` | Abgerundete Rechteckmaske |
| `.mask-ellipse` | Elliptische Maske |
| `.mask-triangle` | Dreieckige Maske |
| `.mask-hexagon` | Sechseckige Maske |
| `.mask-star` | Sternförmige Maske |
| `.mask-diamond` | Rautenförmige Maske |
| `.mask-custom` | Maske mit benutzerdefinierter Form |
| `.mask-gradient` | Verlaufsmaske |

## Varianten

### Kreis-Maske

Die Kreis-Maske schneidet das Element in einer perfekten Kreisform aus:

```html
<div class="mask-circle">
  <img src="image.jpg" alt="Kreisförmiges Bild">
</div>
```

### Abgerundete Maske

Die abgerundete Maske erstellt ein Rechteck mit abgerundeten Ecken:

```html
<div class="mask-rounded">
  <img src="image.jpg" alt="Abgerundetes Bild">
</div>
```

Verfügbare Varianten:

```html
<div class="mask-rounded-sm">Leicht abgerundete Ecken</div>
<div class="mask-rounded-md">Mittel abgerundete Ecken</div>
<div class="mask-rounded-lg">Stark abgerundete Ecken</div>
```

### Elliptische Maske

Die elliptische Maske erstellt eine ovale Form:

```html
<div class="mask-ellipse">
  <img src="image.jpg" alt="Elliptisches Bild">
</div>
```

### Dreieckige Maske

Die dreieckige Maske schneidet das Element in Dreiecksform aus:

```html
<div class="mask-triangle">
  <img src="image.jpg" alt="Dreieckiges Bild">
</div>
```

### Sechseckige Maske

Die sechseckige Maske erstellt eine Hexagon-Form:

```html
<div class="mask-hexagon">
  <img src="image.jpg" alt="Sechseckiges Bild">
</div>
```

### Sternförmige Maske

Die sternförmige Maske schneidet das Element in Sternform aus:

```html
<div class="mask-star">
  <img src="image.jpg" alt="Sternförmiges Bild">
</div>
```

### Rautenförmige Maske

Die rautenförmige Maske erstellt eine Diamantform:

```html
<div class="mask-diamond">
  <img src="image.jpg" alt="Rautenförmiges Bild">
</div>
```

### Benutzerdefinierte Maske

Mit der benutzerdefinierten Maske können Sie eigene Formen erstellen:

```html
<div class="mask-custom" style="--mask-image: url('path/to/mask.svg')">
  <img src="image.jpg" alt="Benutzerdefiniert maskiertes Bild">
</div>
```

### Verlaufsmaske

Die Verlaufsmaske erstellt einen weichen Übergang:

```html
<div class="mask-gradient">
  <img src="image.jpg" alt="Verlaufsmasiertes Bild">
</div>
```

Verfügbare Varianten:

```html
<div class="mask-gradient-to-right">Verläuft nach rechts</div>
<div class="mask-gradient-to-left">Verläuft nach links</div>
<div class="mask-gradient-to-top">Verläuft nach oben</div>
<div class="mask-gradient-to-bottom">Verläuft nach unten</div>
<div class="mask-gradient-radial">Radialer Verlauf</div>
```

## Kombination mit anderen Elementen

Masken-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Bilder mit Masken

```html
<img src="image.jpg" alt="Profilbild" class="mask-circle">

<div class="mask-hexagon">
  <img src="landscape.jpg" alt="Landschaftsbild">
</div>
```

### Karten mit Masken

```html
<div class="card mask-rounded-lg">
  <div class="card-header">Kartenüberschrift</div>
  <div class="card-body">Karteninhalt</div>
</div>
```

### Buttons mit Masken

```html
<button class="btn mask-ellipse">Elliptischer Button</button>
```

### Hintergrundbilder mit Masken

```html
<div class="background-image mask-gradient-to-bottom">
  <div class="content">Inhalt über dem maskierten Hintergrund</div>
</div>
```

## Interaktive Masken

Masken können mit Interaktionen kombiniert werden:

```html
<div class="mask-hover-circle">
  <img src="image.jpg" alt="Bild wird beim Hover kreisförmig">
</div>

<div class="mask-transition">
  <img src="image.jpg" alt="Maske mit Übergangseffekt">
</div>
```

## Anpassung

Die Masken-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Maskenparameter */
  --mask-rounded-radius-sm: 8px;
  --mask-rounded-radius-md: 16px;
  --mask-rounded-radius-lg: 24px;
  
  /* Geometrische Maskenparameter */
  --mask-triangle-direction: down; /* up, down, left, right */
  --mask-star-points: 5; /* Anzahl der Spitzen des Sterns */
  --mask-hexagon-rotation: 0deg; /* Rotation des Sechsecks */
  
  /* Verlaufsmaskenparameter */
  --mask-gradient-start: rgba(0, 0, 0, 1);
  --mask-gradient-end: rgba(0, 0, 0, 0);
  --mask-gradient-angle: 180deg; /* für gerichtete Verläufe */
  --mask-gradient-radius: 50%; /* für radiale Verläufe */
  
  /* Benutzerdefinierte Maskenparameter */
  --mask-custom-image: none; /* URL zu einer SVG- oder PNG-Maske */
  --mask-custom-size: contain; /* Größe der benutzerdefinierten Maske */
  --mask-custom-position: center; /* Position der benutzerdefinierten Maske */
}
```

## Erstellen von SVG-Masken

Für komplexere Masken können Sie SVG verwenden:

```html
<svg width="0" height="0" style="position: absolute;">
  <defs>
    <clipPath id="wave-mask">
      <path d="M0,50 C150,150 350,0 500,50 L500,200 L0,200 Z" />
    </clipPath>
  </defs>
</svg>

<div class="mask-custom" style="--mask-image: url('#wave-mask')">
  <img src="image.jpg" alt="Wellenmaskiertes Bild">
</div>
```

## Text mit Masken

Sie können auch Text mit Masken gestalten:

```html
<h1 class="text-mask-image" style="--mask-image: url('background-pattern.jpg')">
  Gemusterter Text
</h1>
```

## Barrierefreiheit

Bei der Verwendung von Masken-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass maskierte Inhalte ausreichenden Kontrast bieten
2. **Alternative Texte**: Bieten Sie immer alternative Texte für maskierte Bilder an
3. **Verständlichkeit**: Verwenden Sie Masken, die den Inhalt nicht unverständlich machen

## Performance-Überlegungen

Masken-Effekte können die Leistung beeinflussen:

1. **Komplexität**: Komplexe Maskenformen können die Renderleistung beeinträchtigen
2. **Animationen**: Animierte Masken sollten sparsam eingesetzt werden
3. **Optimierung**: Verwenden Sie optimierte SVG-Dateien für benutzerdefinierte Masken
4. **Hardware-Beschleunigung**: Komplexe Masken können von der Hardware-Beschleunigung profitieren

```css
/* Performance-Optimierung für animierte Masken */
.mask-animated {
  will-change: mask-position;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die meisten Masken-Effekte sind mit allen modernen Browsern kompatibel. Einige komplexere Effekte haben jedoch Einschränkungen in älteren Browsern.

| Effekt | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Formen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Verlaufsmasken | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Masken | ✓ | ✓ | ✓ | ✓ | Nein |
| Animierte Masken | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Clip-Path-Effekte](/docs/effects/layout/clip-path.md) - Ähnliche Effekte mit Clip-Path
- [Overlays](/docs/effects/layout/overlays.md) - Überlagerungseffekte
- [Formen](/docs/effects/visual/shapes.md) - Formeffekte ohne Maskierung 
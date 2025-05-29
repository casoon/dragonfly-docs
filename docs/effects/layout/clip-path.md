# Clip-Path-Effekte

Clip-Path-Effekte werden verwendet, um Elemente in bestimmte Formen zu schneiden. Die `@casoon/ui-lib` bietet verschiedene Clip-Path-Effekte, die dazu beitragen, visuell interessante und dynamische Layouts zu erzeugen.

## Basic Usage

Der grundlegende Clip-Path-Effekt kann auf jedes Element angewendet werden:

```html
<div class="clip-path">
  <img src="image.jpg" alt="Zugeschnittenes Bild">
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Clip-Path-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.clip-path` | Basisklasse für Clip-Path-Effekte |
| `.clip-circle` | Kreisförmiger Ausschnitt |
| `.clip-ellipse` | Elliptischer Ausschnitt |
| `.clip-triangle` | Dreieckiger Ausschnitt |
| `.clip-rhombus` | Rhombusförmiger Ausschnitt |
| `.clip-pentagon` | Fünfeckiger Ausschnitt |
| `.clip-hexagon` | Sechseckiger Ausschnitt |
| `.clip-heptagon` | Siebeneckiger Ausschnitt |
| `.clip-octagon` | Achteckiger Ausschnitt |
| `.clip-bevel` | Ausschnitt mit abgeschrägten Ecken |
| `.clip-rabbet` | Ausschnitt mit eingelassenen Ecken |
| `.clip-arrow` | Pfeilförmiger Ausschnitt |
| `.clip-message` | Nachrichtenblase-Ausschnitt |
| `.clip-diagonal` | Diagonaler Ausschnitt |
| `.clip-frame` | Rahmenförmiger Ausschnitt |

## Variants

### Kreis-Ausschnitt

Der Kreis-Ausschnitt schneidet das Element in einer Kreisform aus:

```html
<div class="clip-circle">
  <img src="image.jpg" alt="Kreisförmiges Bild">
</div>
```

Verfügbare Variants:

```html
<div class="clip-circle-center">Zentrierter Kreis</div>
<div class="clip-circle-top-left">Kreis in der oberen linken Ecke</div>
<div class="clip-circle-bottom-right">Kreis in der unteren rechten Ecke</div>
```

### Elliptischer Ausschnitt

Der elliptische Ausschnitt erstellt eine ovale Form:

```html
<div class="clip-ellipse">
  <img src="image.jpg" alt="Elliptisches Bild">
</div>
```

Verfügbare Variants:

```html
<div class="clip-ellipse-horizontal">Horizontale Ellipse</div>
<div class="clip-ellipse-vertical">Vertikale Ellipse</div>
<div class="clip-ellipse-diagonal">Diagonale Ellipse</div>
```

### Dreieckiger Ausschnitt

Der dreieckige Ausschnitt schneidet das Element in Dreiecksform aus:

```html
<div class="clip-triangle">
  <img src="image.jpg" alt="Dreieckiges Bild">
</div>
```

Verfügbare Variants:

```html
<div class="clip-triangle-up">Nach oben zeigendes Dreieck</div>
<div class="clip-triangle-right">Nach rechts zeigendes Dreieck</div>
<div class="clip-triangle-down">Nach unten zeigendes Dreieck</div>
<div class="clip-triangle-left">Nach links zeigendes Dreieck</div>
<div class="clip-triangle-top-left">Dreieck in der oberen linken Ecke</div>
<div class="clip-triangle-top-right">Dreieck in der oberen rechten Ecke</div>
<div class="clip-triangle-bottom-left">Dreieck in der unteren linken Ecke</div>
<div class="clip-triangle-bottom-right">Dreieck in der unteren rechten Ecke</div>
```

### Rhombusförmiger Ausschnitt

Der rhombusförmige Ausschnitt erstellt eine Rautenform:

```html
<div class="clip-rhombus">
  <img src="image.jpg" alt="Rautenförmiges Bild">
</div>
```

### Polygonale Ausschnitte

Verschiedene polygonale Ausschnitte für geometrische Formen:

```html
<div class="clip-pentagon">Fünfeckiger Ausschnitt</div>
<div class="clip-hexagon">Sechseckiger Ausschnitt</div>
<div class="clip-heptagon">Siebeneckiger Ausschnitt</div>
<div class="clip-octagon">Achteckiger Ausschnitt</div>
```

### Funktionale Ausschnitte

Ausschnitte mit spezifischen Funktionen oder Bedeutungen:

```html
<div class="clip-arrow-up">Pfeil nach oben</div>
<div class="clip-arrow-right">Pfeil nach rechts</div>
<div class="clip-arrow-down">Pfeil nach unten</div>
<div class="clip-arrow-left">Pfeil nach links</div>
<div class="clip-message">Nachrichtenblase</div>
<div class="clip-message-left">Nachrichtenblase links</div>
<div class="clip-message-right">Nachrichtenblase rechts</div>
```

### Diagonale Ausschnitte

Ausschnitte entlang diagonaler Linien:

```html
<div class="clip-diagonal-tl-br">Diagonal von oben links nach unten rechts</div>
<div class="clip-diagonal-tr-bl">Diagonal von oben rechts nach unten links</div>
<div class="clip-diagonal-bl-tr">Diagonal von unten links nach oben rechts</div>
<div class="clip-diagonal-br-tl">Diagonal von unten rechts nach oben links</div>
```

### Rahmenförmige Ausschnitte

Ausschnitte, die einen Rahmen um das Element erstellen:

```html
<div class="clip-frame">Rahmenförmiger Ausschnitt</div>
<div class="clip-frame-thin">Dünner Rahmen</div>
<div class="clip-frame-thick">Dicker Rahmen</div>
```

## Kombination mit anderen Elementen

Clip-Path-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Bilder mit Clip-Path

```html
<img src="image.jpg" alt="Profilbild" class="clip-circle">

<div class="clip-hexagon">
  <img src="landscape.jpg" alt="Landschaftsbild">
</div>
```

### Cardn mit Clip-Path

```html
<div class="card clip-bevel">
  <div class="card-header">Cardnüberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>
```

### Buttons mit Clip-Path

```html
<button class="btn clip-octagon">Achteckiger Button</button>
```

### Container mit Clip-Path

```html
<section class="container clip-diagonal-tl-br">
  <h2>Abschnitt mit diagonalem Schnitt</h2>
  <p>Inhalt des Abschnitts...</p>
</section>
```

## Interaktive Clip-Path-Effekte

Clip-Path-Effekte können mit Interaktionen kombiniert werden:

```html
<div class="clip-hover-circle">
  <img src="image.jpg" alt="Bild wird beim Hover kreisförmig">
</div>

<div class="clip-path-transition">
  <img src="image.jpg" alt="Clip-Path mit Übergangseffekt">
</div>
```

## Anpassung

Die Clip-Path-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Clip-Path-Parameter */
  --clip-circle-size: 50%;
  --clip-circle-position-x: 50%;
  --clip-circle-position-y: 50%;
  
  /* Elliptische Parameter */
  --clip-ellipse-radius-x: 50%;
  --clip-ellipse-radius-y: 30%;
  --clip-ellipse-position-x: 50%;
  --clip-ellipse-position-y: 50%;
  --clip-ellipse-rotation: 0deg;
  
  /* Dreieck-Parameter */
  --clip-triangle-size: 100%;
  --clip-triangle-direction: up; /* up, right, down, left */
  
  /* Polygon-Parameter */
  --clip-polygon-sides: 6; /* für regelmäßige Polygone */
  --clip-polygon-rotation: 0deg;
  
  /* Diagonale Parameter */
  --clip-diagonal-offset: 0%;
  
  /* Rahmen-Parameter */
  --clip-frame-thickness: 20px;
  --clip-frame-inset: 0px;
}
```

## Erstellen benutzerdefinierter Clip-Paths

Für komplexere Clip-Path-Effekte können Sie die CSS-Funktion `clip-path` direkt verwenden:

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

## Animationen mit Clip-Path

Clip-Path-Effekte können animiert werden für dynamische Übergänge:

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

Bei der Usage von Clip-Path-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Inhaltsverständlichkeit**: Stellen Sie sicher, dass durch das Ausschneiden keine wichtigen Inhalte verloren gehen
2. **Alternative Texte**: Bieten Sie immer alternative Texte für Bilder mit Clip-Path an
3. **Consistency**: Verwenden Sie Clip-Path-Effekte konsistent in Ihrer Benutzeroberfläche

## Performance-Überlegungen

Clip-Path-Effekte können die Leistung beeinflussen:

1. **Komplexität**: Komplexe Formen können die Renderleistung beeinträchtigen
2. **Animationen**: Animierte Clip-Paths sollten sparsam eingesetzt werden
3. **Hardware-Beschleunigung**: Clip-Path-Animationen profitieren von der Hardware-Beschleunigung

```css
/* Performance-Optimierung für animierte Clip-Paths */
.clip-animated {
  will-change: clip-path;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die meisten Clip-Path-Effekte sind mit allen modernen Browsern kompatibel. Einige komplexere Effekte haben jedoch Einschränkungen in älteren Browsern.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Formen | ✓ | ✓ | ✓ | ✓ | Nein |
| Polygon-Pfade | ✓ | ✓ | ✓ | ✓ | Nein |
| SVG-Pfade | ✓ | ✓ | ✓ | ✓ | Nein |
| Animationen | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Masken-Effekte](/docs/effects/layout/masks.md) - Ähnliche Effekte mit Maskierung
- [Overlays](/docs/effects/layout/overlays.md) - Überlagerungseffekte
- [Formen](/docs/effects/visual/shapes.md) - Formeffekte ohne Ausschneiden 
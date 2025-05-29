# Backdrop-Effekte

Backdrop-Effekte werden verwendet, um einen visuellen Hintergrund oder eine Ebene hinter einem Element zu erstellen. Die `@casoon/ui-lib` bietet verschiedene Backdrop-Effekte, die dazu beitragen, tiefere visuelle Hierarchien und ansprechende Benutzeroberflächen zu gestalten.

## Grundlegende Verwendung

Der grundlegende Backdrop-Effekt kann auf jedes Element angewendet werden:

```html
<div class="backdrop">
  <div class="content">Inhalt mit Backdrop</div>
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Backdrop-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.backdrop` | Basisklasse für Backdrop-Effekte |
| `.backdrop-blur` | Unscharfer Hintergrund |
| `.backdrop-dim` | Abgedunkelter Hintergrund |
| `.backdrop-frosted` | Frosted-Glass-Effekt |
| `.backdrop-gradient` | Verlaufshintergrund |
| `.backdrop-noise` | Hintergrund mit Rauschstruktur |
| `.backdrop-pattern` | Hintergrund mit Muster |
| `.backdrop-spotlight` | Spotlight-Effekt |
| `.backdrop-shadow` | Schattenhintergrund |
| `.backdrop-glow` | Glühender Hintergrund |

## Varianten

### Blur-Effekt

Der Blur-Effekt erstellt einen unscharfen Hintergrund:

```html
<div class="backdrop-blur">
  <div class="content">Inhalt mit unscharfem Hintergrund</div>
</div>
```

Verfügbare Stärken:

```html
<div class="backdrop-blur-sm">Leichte Unschärfe</div>
<div class="backdrop-blur-md">Mittlere Unschärfe</div>
<div class="backdrop-blur-lg">Starke Unschärfe</div>
```

### Dim-Effekt

Der Dim-Effekt verdunkelt den Hintergrund:

```html
<div class="backdrop-dim">
  <div class="content">Inhalt mit abgedunkeltem Hintergrund</div>
</div>
```

Verfügbare Stärken:

```html
<div class="backdrop-dim-light">Leicht abgedunkelt</div>
<div class="backdrop-dim-medium">Mittel abgedunkelt</div>
<div class="backdrop-dim-heavy">Stark abgedunkelt</div>
```

### Frosted-Glass-Effekt

Der Frosted-Glass-Effekt erstellt einen matten Glaseffekt:

```html
<div class="backdrop-frosted">
  <div class="content">Inhalt mit Frosted-Glass-Effekt</div>
</div>
```

### Gradient-Effekt

Der Gradient-Effekt erstellt einen Verlaufshintergrund:

```html
<div class="backdrop-gradient">
  <div class="content">Inhalt mit Verlaufshintergrund</div>
</div>
```

Verfügbare Varianten:

```html
<div class="backdrop-gradient-linear">Linearer Verlauf</div>
<div class="backdrop-gradient-radial">Radialer Verlauf</div>
<div class="backdrop-gradient-conic">Konischer Verlauf</div>
```

### Noise-Effekt

Der Noise-Effekt fügt eine Rauschstruktur hinzu:

```html
<div class="backdrop-noise">
  <div class="content">Inhalt mit Rauschstruktur</div>
</div>
```

### Pattern-Effekt

Der Pattern-Effekt erstellt einen Hintergrund mit Muster:

```html
<div class="backdrop-pattern">
  <div class="content">Inhalt mit Musterhintergrund</div>
</div>
```

Verfügbare Muster:

```html
<div class="backdrop-pattern-dots">Punktmuster</div>
<div class="backdrop-pattern-lines">Linienmuster</div>
<div class="backdrop-pattern-grid">Gittermuster</div>
<div class="backdrop-pattern-waves">Wellenmuster</div>
```

### Spotlight-Effekt

Der Spotlight-Effekt erzeugt einen Spotlight-Hintergrund:

```html
<div class="backdrop-spotlight">
  <div class="content">Inhalt mit Spotlight-Effekt</div>
</div>
```

### Shadow-Effekt

Der Shadow-Effekt erstellt einen Schattenhintergrund:

```html
<div class="backdrop-shadow">
  <div class="content">Inhalt mit Schattenhintergrund</div>
</div>
```

### Glow-Effekt

Der Glow-Effekt erstellt einen glühenden Hintergrund:

```html
<div class="backdrop-glow">
  <div class="content">Inhalt mit glühendem Hintergrund</div>
</div>
```

## Kombination mit anderen Elementen

Backdrop-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Karten und Container

```html
<div class="card backdrop-blur">
  <div class="card-header">Kartenüberschrift</div>
  <div class="card-body">Karteninhalt mit unscharfem Hintergrund</div>
</div>

<div class="container backdrop-frosted">
  <h2>Container-Überschrift</h2>
  <p>Container-Inhalt mit Frosted-Glass-Effekt</p>
</div>
```

### Modals und Dialoge

```html
<div class="modal-backdrop backdrop-dim">
  <div class="modal">
    <div class="modal-header">Modal-Überschrift</div>
    <div class="modal-body">Modal-Inhalt</div>
  </div>
</div>

<div class="dialog-backdrop backdrop-blur">
  <div class="dialog">
    <div class="dialog-content">Dialog-Inhalt</div>
  </div>
</div>
```

### Hero-Bereiche

```html
<section class="hero backdrop-gradient">
  <div class="hero-content">
    <h1>Willkommen</h1>
    <p>Held-Bereich mit Verlaufshintergrund</p>
  </div>
</section>
```

### Navigation

```html
<nav class="navbar backdrop-frosted">
  <div class="navbar-brand">Logo</div>
  <div class="navbar-menu">
    <a href="#">Home</a>
    <a href="#">Über uns</a>
    <a href="#">Kontakt</a>
  </div>
</nav>
```

## Interaktive Backdrop-Effekte

Backdrop-Effekte können mit Interaktionen kombiniert werden:

```html
<div class="card hover-backdrop-blur">
  <div class="card-content">
    Karte mit Backdrop-Effekt bei Hover
  </div>
</div>

<button class="focus-backdrop-glow">
  Button mit Backdrop-Effekt bei Fokus
</button>
```

## Anpassung

Die Backdrop-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Blur-Effekt */
  --backdrop-blur-sm: 2px;
  --backdrop-blur-md: 5px;
  --backdrop-blur-lg: 10px;
  
  /* Dim-Effekt */
  --backdrop-dim-light: rgba(0, 0, 0, 0.3);
  --backdrop-dim-medium: rgba(0, 0, 0, 0.5);
  --backdrop-dim-heavy: rgba(0, 0, 0, 0.8);
  
  /* Frosted-Glass-Effekt */
  --backdrop-frosted-opacity: 0.7;
  --backdrop-frosted-blur: 10px;
  --backdrop-frosted-saturation: 180%;
  
  /* Gradient-Effekt */
  --backdrop-gradient-start: rgba(255, 255, 255, 0.1);
  --backdrop-gradient-end: rgba(255, 255, 255, 0.3);
  --backdrop-gradient-angle: 135deg;
  
  /* Noise-Effekt */
  --backdrop-noise-opacity: 0.05;
  --backdrop-noise-density: 20%;
  
  /* Pattern-Effekt */
  --backdrop-pattern-color: rgba(255, 255, 255, 0.1);
  --backdrop-pattern-size: 20px;
  --backdrop-pattern-spacing: 40px;
  
  /* Spotlight-Effekt */
  --backdrop-spotlight-size: 40%;
  --backdrop-spotlight-color: rgba(255, 255, 255, 0.1);
  
  /* Shadow-Effekt */
  --backdrop-shadow-color: rgba(0, 0, 0, 0.2);
  --backdrop-shadow-size: 20px;
  
  /* Glow-Effekt */
  --backdrop-glow-color: rgba(255, 255, 255, 0.1);
  --backdrop-glow-size: 100px;
  --backdrop-glow-intensity: 0.5;
}
```

## Positionierung von Backdrops

Backdrops können auf verschiedene Arten positioniert werden:

### Als Hintergrund

```html
<div class="backdrop-container">
  <div class="backdrop backdrop-blur"></div>
  <div class="content">Inhalt über dem Backdrop</div>
</div>
```

```css
.backdrop-container {
  position: relative;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}
```

### Als Overlay

```html
<div class="backdrop-overlay backdrop-dim">
  <div class="overlay-content">Overlay-Inhalt</div>
</div>
```

```css
.backdrop-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  position: relative;
  z-index: 1001;
}
```

## Barrierefreiheit

Bei der Verwendung von Backdrop-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Text auf dem Backdrop ausreichenden Kontrast bietet
2. **Lesbarkeit**: Backdrop-Effekte sollten die Lesbarkeit von Text nicht beeinträchtigen
3. **Animation**: Vermeiden Sie übermäßige Animationen, die für Benutzer mit vestibulären Störungen problematisch sein können
4. **Fokus**: Stellen Sie sicher, dass Fokushinweise weiterhin sichtbar sind

## Performance-Überlegungen

Backdrop-Effekte können die Leistung beeinflussen, insbesondere auf mobilen Geräten:

1. **Blur-Effekte**: Blur-Effekte sind rechenintensiv und sollten sparsam eingesetzt werden
2. **Filter**: Mehrere Filter können die Leistung beeinträchtigen
3. **Animationen**: Animierte Backdrop-Effekte sollten auf `transform` und `opacity` beschränkt werden
4. **Schichten**: Zu viele überlagerte Backdrop-Effekte können zu Leistungsproblemen führen

```css
/* Optimierung für Animationen */
.animated-backdrop {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die meisten Backdrop-Effekte sind mit allen modernen Browsern kompatibel. Einige Effekte haben jedoch Einschränkungen in älteren Browsern.

| Effekt | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Blur | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Dim | ✓ | ✓ | ✓ | ✓ | ✓ |
| Frosted | ✓ | ✓ | ✓ | ✓ | Nein |
| Gradient | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Noise | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Pattern | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Spotlight | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| Glow | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte Effekte

- [Glaseffekte](/docs/effects/visual/glass.md) - Verwandte Glaseffekte
- [Overlays](/docs/effects/layout/overlays.md) - Überlagerungseffekte
- [Blur-Effekte](/docs/effects/visual/filters.md) - Weitere Unschärfeeffekte 
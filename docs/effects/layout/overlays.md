# Overlay-Effekte

Overlay-Effekte werden verwendet, um eine Ebene über Elementen zu platzieren, um zusätzliche visuelle Effekte oder Interaktionen zu ermöglichen. Die `@casoon/ui-lib` bietet verschiedene Overlay-Effekte, die dazu beitragen, dynamische und interaktive Benutzeroberflächen zu gestalten.

## Basic Usage

Der grundlegende Overlay-Effekt kann auf jedes Element angewendet werden:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay">Overlay-Inhalt</div>
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Overlay-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.overlay-container` | Container für Overlay-Elemente |
| `.overlay` | Basisklasse für Overlays |
| `.overlay-light` | Helles Overlay |
| `.overlay-dark` | Dunkles Overlay |
| `.overlay-color` | Farbiges Overlay |
| `.overlay-gradient` | Verlaufs-Overlay |
| `.overlay-pattern` | Overlay mit Muster |
| `.overlay-blur` | Overlay mit Unschärfeeffekt |
| `.overlay-text` | Overlay für Text |
| `.overlay-icon` | Overlay für Icons |
| `.overlay-image` | Overlay für Bilder |
| `.overlay-hover` | Overlay bei Hover |
| `.overlay-fade` | Einblendendes Overlay |
| `.overlay-slide` | Einschiebendes Overlay |
| `.overlay-zoom` | Zoomeffekt-Overlay |
| `.overlay-interactive` | Interaktives Overlay |

## Variants

### Light-Overlay

Das Light-Overlay erstellt einen hellen halbtransparenten Überzug:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-light">Helles Overlay</div>
</div>
```

### Dark-Overlay

Das Dark-Overlay erstellt einen dunklen halbtransparenten Überzug:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-dark">Dunkles Overlay</div>
</div>
```

Verfügbare Intensitäten:

```html
<div class="overlay-dark-light">Leicht dunkles Overlay</div>
<div class="overlay-dark-medium">Mittel dunkles Overlay</div>
<div class="overlay-dark-heavy">Stark dunkles Overlay</div>
```

### Color-Overlay

Das Color-Overlay erstellt einen farbigen halbtransparenten Überzug:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-color">Farbiges Overlay</div>
</div>
```

Verfügbare Farbvarianten:

```html
<div class="overlay-primary">Overlay in Primärfarbe</div>
<div class="overlay-secondary">Overlay in Sekundärfarbe</div>
<div class="overlay-accent">Overlay in Akzentfarbe</div>
<div class="overlay-success">Overlay in Erfolgsfarbe</div>
<div class="overlay-warning">Overlay in Warnfarbe</div>
<div class="overlay-error">Overlay in Fehlerfarbe</div>
<div class="overlay-info">Overlay in Infofarbe</div>
```

### Gradient-Overlay

Das Gradient-Overlay erstellt einen Verlaufsüberzug:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-gradient">Verlaufs-Overlay</div>
</div>
```

Verfügbare Verlaufsrichtungen:

```html
<div class="overlay-gradient-to-top">Verlauf nach oben</div>
<div class="overlay-gradient-to-right">Verlauf nach rechts</div>
<div class="overlay-gradient-to-bottom">Verlauf nach unten</div>
<div class="overlay-gradient-to-left">Verlauf nach links</div>
<div class="overlay-gradient-to-tr">Verlauf nach oben rechts</div>
<div class="overlay-gradient-to-bl">Verlauf nach unten links</div>
<div class="overlay-gradient-radial">Radialer Verlauf</div>
```

### Pattern-Overlay

Das Pattern-Overlay erstellt einen Überzug mit Muster:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-pattern">Overlay mit Muster</div>
</div>
```

Verfügbare Muster:

```html
<div class="overlay-pattern-dots">Punktmuster</div>
<div class="overlay-pattern-lines">Linienmuster</div>
<div class="overlay-pattern-grid">Gittermuster</div>
<div class="overlay-pattern-diagonal">Diagonales Muster</div>
<div class="overlay-pattern-checker">Schachbrettmuster</div>
```

### Blur-Overlay

Das Blur-Overlay erstellt einen Überzug mit Unschärfeeffekt:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-blur">Unscharfes Overlay</div>
</div>
```

### Text-Overlay

Das Text-Overlay optimiert die Darstellung von Text über Bildern:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-text">
    <h3>Überschrift</h3>
    <p>Beschreibungstext</p>
  </div>
</div>
```

### Icon-Overlay

Das Icon-Overlay ist für die Darstellung von Icons über Elementen optimiert:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-icon">
    <span class="icon">★</span>
  </div>
</div>
```

### Image-Overlay

Das Image-Overlay ermöglicht das Überlagern mit einem weiteren Bild:

```html
<div class="overlay-container">
  <img src="background.jpg" alt="Hintergrundbild">
  <div class="overlay-image">
    <img src="overlay.png" alt="Overlay-Bild">
  </div>
</div>
```

## Positionierung von Overlays

Overlays können an verschiedenen Positionen platziert werden:

```html
<div class="overlay-top">Am oberen Rand</div>
<div class="overlay-right">Am rechten Rand</div>
<div class="overlay-bottom">Am unteren Rand</div>
<div class="overlay-left">Am linken Rand</div>
<div class="overlay-center">Zentriert</div>
<div class="overlay-top-left">Oben links</div>
<div class="overlay-top-right">Oben rechts</div>
<div class="overlay-bottom-left">Unten links</div>
<div class="overlay-bottom-right">Unten rechts</div>
```

## Interaktive Overlays

Overlays können mit Interaktionen kombiniert werden:

### Hover-Overlay

Das Hover-Overlay wird nur angezeigt, wenn der Benutzer mit dem Mauszeiger über das Element fährt:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-hover">Erscheint bei Hover</div>
</div>
```

### Fade-Overlay

Das Fade-Overlay blendet sich sanft ein:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-fade">Sanft eingeblendet</div>
</div>
```

### Slide-Overlay

Das Slide-Overlay schiebt sich von einer Seite ein:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-slide-in-bottom">Von unten eingeschoben</div>
</div>
```

Verfügbare Richtungen:

```html
<div class="overlay-slide-in-top">Von oben eingeschoben</div>
<div class="overlay-slide-in-right">Von rechts eingeschoben</div>
<div class="overlay-slide-in-bottom">Von unten eingeschoben</div>
<div class="overlay-slide-in-left">Von links eingeschoben</div>
```

### Zoom-Overlay

Das Zoom-Overlay vergrößert oder verkleinert sich:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-zoom-in">Vergrößert sich</div>
</div>
```

Verfügbare Variants:

```html
<div class="overlay-zoom-in">Vergrößert sich</div>
<div class="overlay-zoom-out">Verkleinert sich</div>
```

### Interactive-Overlay

Das Interactive-Overlay bietet interaktive Elemente:

```html
<div class="overlay-container">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-interactive">
    <button class="btn">Mehr erfahren</button>
    <button class="btn">Teilen</button>
  </div>
</div>
```

## Kombination mit anderen Elementen

Overlay-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Cardn mit Overlays

```html
<div class="card overlay-container">
  <img src="image.jpg" alt="Cardnillustration" class="card-img-top">
  <div class="overlay-hover overlay-gradient-to-top">
    <div class="overlay-content">
      <h3>Cardnüberschrift</h3>
      <p>Cardnbeschreibung</p>
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Cardnüberschrift</h5>
    <p class="card-text">Cardninhalt</p>
  </div>
</div>
```

### Bilder mit Overlays

```html
<div class="image-gallery">
  <div class="overlay-container">
    <img src="image1.jpg" alt="Bild 1">
    <div class="overlay-hover overlay-dark">
      <div class="overlay-icon">
        <span class="icon icon-zoom"></span>
      </div>
    </div>
  </div>
  
  <div class="overlay-container">
    <img src="image2.jpg" alt="Bild 2">
    <div class="overlay-hover overlay-dark">
      <div class="overlay-icon">
        <span class="icon icon-zoom"></span>
      </div>
    </div>
  </div>
</div>
```

### Hero-Sektionen mit Overlays

```html
<section class="hero overlay-container">
  <img src="hero-bg.jpg" alt="Hero-Hintergrund" class="hero-background">
  <div class="overlay-dark-medium">
    <div class="hero-content">
      <h1>Willkommen</h1>
      <p>Entdecken Sie unsere Dienstleistungen</p>
      <button class="btn">Mehr erfahren</button>
    </div>
  </div>
</section>
```

## Anpassung

Die Overlay-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Overlay-Parameter */
  --overlay-opacity: 0.7;
  --overlay-transition-duration: 0.3s;
  --overlay-transition-timing: ease;
  
  /* Farb-Overlays */
  --overlay-light-color: rgba(255, 255, 255, 0.7);
  --overlay-dark-color: rgba(0, 0, 0, 0.7);
  --overlay-dark-light: rgba(0, 0, 0, 0.3);
  --overlay-dark-medium: rgba(0, 0, 0, 0.5);
  --overlay-dark-heavy: rgba(0, 0, 0, 0.8);
  
  /* Farbige Overlays */
  --overlay-primary-color: rgba(var(--color-primary-rgb), 0.7);
  --overlay-secondary-color: rgba(var(--color-secondary-rgb), 0.7);
  --overlay-accent-color: rgba(var(--color-accent-rgb), 0.7);
  
  /* Verlaufs-Overlays */
  --overlay-gradient-start: rgba(0, 0, 0, 0);
  --overlay-gradient-end: rgba(0, 0, 0, 0.8);
  --overlay-gradient-angle: 0deg;
  
  /* Muster-Overlays */
  --overlay-pattern-color: rgba(255, 255, 255, 0.1);
  --overlay-pattern-size: 20px;
  
  /* Unschärfe-Overlay */
  --overlay-blur-amount: 5px;
  
  /* Interaktive Overlays */
  --overlay-hover-transition-duration: 0.3s;
  --overlay-slide-distance: 100%;
  --overlay-zoom-scale: 1.1;
}
```

## Accessibility

Bei der Usage von Overlay-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass Text auf Overlays ausreichenden Kontrast hat
2. **Tastaturbedienung**: Stellen Sie sicher, dass interaktive Overlays auch per Tastatur zugänglich sind
3. **Screenreader**: Stellen Sie sicher, dass Overlay-Inhalte für Screenreader zugänglich sind
4. **Fokus-Management**: Achten Sie auf korrektes Fokus-Management bei Overlays, die über die gesamte Seite gelegt werden

```html
<!-- Barrierefreies Overlay mit Fokus-Management -->
<div class="overlay-container">
  <img src="image.jpg" alt="Produktbild">
  <div 
    class="overlay-hover overlay-dark" 
    role="region" 
    aria-label="Produktinformationen"
  >
    <div class="overlay-content">
      <h3 id="product-title">Produktname</h3>
      <p id="product-desc">Produktbeschreibung</p>
      <button 
        class="btn" 
        aria-describedby="product-title product-desc"
      >
        Details anzeigen
      </button>
    </div>
  </div>
</div>
```

## JavaScript-Integration

Für dynamische Overlay-Steuerung kann JavaScript verwendet werden:

```javascript
// Overlay dynamisch anzeigen/ausblenden
function toggleOverlay(containerId) {
  const container = document.getElementById(containerId);
  const overlay = container.querySelector('.overlay');
  
  if (overlay.classList.contains('overlay-visible')) {
    hideOverlay(overlay);
  } else {
    showOverlay(overlay);
  }
}

function showOverlay(overlay) {
  // Overlay einblenden
  overlay.classList.add('overlay-visible');
  
  // Fokus auf das erste fokussierbare Element setzen
  const focusableElements = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
  
  // Aria-Attribute setzen
  overlay.setAttribute('aria-hidden', 'false');
}

function hideOverlay(overlay) {
  // Overlay ausblenden
  overlay.classList.remove('overlay-visible');
  
  // Aria-Attribute zurücksetzen
  overlay.setAttribute('aria-hidden', 'true');
}
```

## Performance-Überlegungen

Overlay-Effekte können die Leistung beeinflussen:

1. **Anzahl**: Viele Overlays gleichzeitig können die Leistung beeinträchtigen
2. **Unschärfe**: Blur-Effekte sind rechenintensiv und sollten sparsam eingesetzt werden
3. **Animationen**: Animierte Overlays sollten optimiert werden
4. **DOM-Tiefe**: Tiefe DOM-Strukturen mit Overlays können zu Leistungsproblemen führen

```css
/* Performance-Optimierung für animierte Overlays */
.overlay-animated {
  will-change: opacity, transform;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die meisten Overlay-Effekte sind mit allen modernen Browsern kompatibel. Einige Effekte haben jedoch Einschränkungen in älteren Browsern.

| Effekt | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Overlays | ✓ | ✓ | ✓ | ✓ | ✓ |
| Verlaufs-Overlays | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Blur-Overlays | ✓ | ✓ | ✓ | ✓ | Nein |
| Animierte Overlays | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte Effekte

- [Backdrops](/docs/effects/layout/backdrops.md) - Hintergrundeffekte
- [Masken-Effekte](/docs/effects/layout/masks.md) - Maskeneffekte für Elemente
- [Glaseffekte](/docs/effects/visual/glass.md) - Glaseffekte für Elemente 
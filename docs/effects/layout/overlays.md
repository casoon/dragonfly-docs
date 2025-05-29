# Overlay-effects

Overlay-effects become verwendet, um a layer over Elementen to platzieren, um zusatzliche visuelle effects or interactions to ermoglichen. the `@casoon/ui-lib` bietet verschiedene Overlay-effects, the for that beitragen, dynamische and interaktive user interfaces to gestalten.

## Basic Usage

the grundlegende Overlay-effect kann on jedes element angewendet become:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay">Overlay-content</div>
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Overlay-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.overlay-containers` | containers for Overlay-elements |
| `.overlay` | Basisklasse for Overlays |
| `.overlay-light` | Helles Overlay |
| `.overlay-dark` | Dunkles Overlay |
| `.overlay-color` | Farbiges Overlay |
| `.overlay-gradient` | Verlaufs-Overlay |
| `.overlay-pattern` | Overlay with pattern |
| `.overlay-blur` | Overlay with Unscharfeeffekt |
| `.overlay-text` | Overlay for Text |
| `.overlay-icon` | Overlay for icons |
| `.overlay-image` | Overlay for images |
| `.overlay-hover` | Overlay at Hover |
| `.overlay-fade` | Einblendendes Overlay |
| `.overlay-slide` | Einschiebendes Overlay |
| `.overlay-zoom` | Zoomeffekt-Overlay |
| `.overlay-interactive` | Interaktives Overlay |

## Variants

### Light-Overlay

the Light-Overlay erstellt einen hellen halbtransparenten Uberzug:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-light">Helles Overlay</div>
</div>
```

### Dark-Overlay

the Dark-Overlay erstellt einen dunklen halbtransparenten Uberzug:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-dark">Dunkles Overlay</div>
</div>
```

Verfugbare Intensitaten:

```html
<div class="overlay-dark-light">Leicht dunkles Overlay</div>
<div class="overlay-dark-medium">Mittel dunkles Overlay</div>
<div class="overlay-dark-heavy">Stark dunkles Overlay</div>
```

### Color-Overlay

the Color-Overlay erstellt einen farbigen halbtransparenten Uberzug:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-color">Farbiges Overlay</div>
</div>
```

Verfugbare Farbvarianten:

```html
<div class="overlay-primary">Overlay in Primarfarbe</div>
<div class="overlay-secondary">Overlay in Sekundarfarbe</div>
<div class="overlay-accent">Overlay in Akzentfarbe</div>
<div class="overlay-success">Overlay in Erfolgsfarbe</div>
<div class="overlay-warning">Overlay in Warnfarbe</div>
<div class="overlay-error">Overlay in Fehlerfarbe</div>
<div class="overlay-info">Overlay in Infofarbe</div>
```

### Gradient-Overlay

the Gradient-Overlay erstellt einen Verlaufsuberzug:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-gradient">Verlaufs-Overlay</div>
</div>
```

Verfugbare Verlaufsrichtungen:

```html
<div class="overlay-gradient-to-top">Verlauf after oben</div>
<div class="overlay-gradient-to-right">Verlauf after rechts</div>
<div class="overlay-gradient-to-bottom">Verlauf after unten</div>
<div class="overlay-gradient-to-left">Verlauf after links</div>
<div class="overlay-gradient-to-tr">Verlauf after oben rechts</div>
<div class="overlay-gradient-to-bl">Verlauf after unten links</div>
<div class="overlay-gradient-radial">Radialer Verlauf</div>
```

### Pattern-Overlay

the Pattern-Overlay erstellt einen Uberzug with pattern:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-pattern">Overlay with pattern</div>
</div>
```

Verfugbare pattern:

```html
<div class="overlay-pattern-dots">Punktmuster</div>
<div class="overlay-pattern-lines">Linienmuster</div>
<div class="overlay-pattern-grid">Gittermuster</div>
<div class="overlay-pattern-diagonal">Diagonales pattern</div>
<div class="overlay-pattern-checker">Schachbrettmuster</div>
```

### Blur-Overlay

the Blur-Overlay erstellt einen Uberzug with Unscharfeeffekt:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-blur">Unscharfes Overlay</div>
</div>
```

### Text-Overlay

the Text-Overlay optimiert the Display from Text over Bildern:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-text">
    <h3>heading</h3>
    <p>Beschreibungstext</p>
  </div>
</div>
```

### icon-Overlay

the icon-Overlay ist for the Display from icons over Elementen optimiert:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-icon">
    <span class="icon">★</span>
  </div>
</div>
```

### Image-Overlay

the Image-Overlay ermoglicht the Uberlagern with einem weiteren image:

```html
<div class="overlay-containers">
  <img src="background.jpg" alt="Hintergrundbild">
  <div class="overlay-image">
    <img src="overlay.png" alt="Overlay-image">
  </div>
</div>
```

## Positionierung from Overlays

Overlays can on verschiedenen positions platziert become:

```html
<div class="overlay-top">Am oberen margin</div>
<div class="overlay-right">Am rechten margin</div>
<div class="overlay-bottom">Am unteren margin</div>
<div class="overlay-left">Am linken margin</div>
<div class="overlay-center">Zentriert</div>
<div class="overlay-top-left">Oben links</div>
<div class="overlay-top-right">Oben rechts</div>
<div class="overlay-bottom-left">Unten links</div>
<div class="overlay-bottom-right">Unten rechts</div>
```

## Interaktive Overlays

Overlays can with interactions kombiniert become:

### Hover-Overlay

the Hover-Overlay wird only angezeigt, if the user with dem Mauszeiger over the element fahrt:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-hover">Erscheint at Hover</div>
</div>
```

### Fade-Overlay

the Fade-Overlay blendet oneself sanft a:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-fade">Sanft eingeblendet</div>
</div>
```

### Slide-Overlay

the Slide-Overlay schiebt oneself from einer Seite a:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-slide-in-bottom">from unten eingeschoben</div>
</div>
```

Verfugbare Richtungen:

```html
<div class="overlay-slide-in-top">from oben eingeschoben</div>
<div class="overlay-slide-in-right">from rechts eingeschoben</div>
<div class="overlay-slide-in-bottom">from unten eingeschoben</div>
<div class="overlay-slide-in-left">from links eingeschoben</div>
```

### Zoom-Overlay

the Zoom-Overlay vergrossert or verkleinert oneself:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-zoom-in">Vergrossert oneself</div>
</div>
```

Verfugbare Variants:

```html
<div class="overlay-zoom-in">Vergrossert oneself</div>
<div class="overlay-zoom-out">Verkleinert oneself</div>
```

### Interactive-Overlay

the Interactive-Overlay bietet interaktive elements:

```html
<div class="overlay-containers">
  <img src="image.jpg" alt="image">
  <div class="overlay-interactive">
    <button class="btn">more erfahren</button>
    <button class="btn">Teilen</button>
  </div>
</div>
```

## Kombination with anderen Elementen

Overlay-effects can with verschiedenen UI-Elementen kombiniert become:

### Cardn with Overlays

```html
<div class="card overlay-containers">
  <img src="image.jpg" alt="Cardnillustration" class="card-img-top">
  <div class="overlay-hover overlay-gradient-to-top">
    <div class="overlay-content">
      <h3>Cardnuberschrift</h3>
      <p>Cardnbeschreibung</p>
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Cardnuberschrift</h5>
    <p class="card-text">Cardninhalt</p>
  </div>
</div>
```

### images with Overlays

```html
<div class="image-gallery">
  <div class="overlay-containers">
    <img src="image1.jpg" alt="image 1">
    <div class="overlay-hover overlay-dark">
      <div class="overlay-icon">
        <span class="icon icon-zoom"></span>
      </div>
    </div>
  </div>
  
  <div class="overlay-containers">
    <img src="image2.jpg" alt="image 2">
    <div class="overlay-hover overlay-dark">
      <div class="overlay-icon">
        <span class="icon icon-zoom"></span>
      </div>
    </div>
  </div>
</div>
```

### Hero-sections with Overlays

```html
<section class="hero overlay-containers">
  <img src="hero-bg.jpg" alt="Hero-background" class="hero-background">
  <div class="overlay-dark-medium">
    <div class="hero-content">
      <h1>Willkommen</h1>
      <p>Entdecken them unsere Dienstleistungen</p>
      <button class="btn">more erfahren</button>
    </div>
  </div>
</section>
```

## Customization

the Overlay-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Overlay-parameter */
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
  
  /* pattern-Overlays */
  --overlay-pattern-color: rgba(255, 255, 255, 0.1);
  --overlay-pattern-size: 20px;
  
  /* Unscharfe-Overlay */
  --overlay-blur-amount: 5px;
  
  /* Interaktive Overlays */
  --overlay-hover-transition-duration: 0.3s;
  --overlay-slide-distance: 100%;
  --overlay-zoom-scale: 1.1;
}
```

## Accessibility

at the Usage from Overlay-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Text on Overlays ausreichenden Kontrast hat
2. **Tastaturbedienung**: ensure, that interaktive Overlays also per Tastatur zuganglich sind
3. **Screenreader**: ensure, that Overlay-contents for Screenreader zuganglich sind
4. **Fokus-Management**: ensure them on korrektes Fokus-Management at Overlays, the over the gesamte Seite gelegt become

```html
<!-- Barrierefreies Overlay with Fokus-Management -->
<div class="overlay-containers">
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

for dynamische Overlay-Steuerung kann JavaScript verwendet become:

```javascript
// Overlay dynamisch anzeigen/ausblenden
function toggleOverlay(containerId) {
  const containers = document.getElementById(containerId);
  const overlay = containers.querySelector('.overlay');
  
  if (overlay.classList.contains('overlay-visible')) {
    hideOverlay(overlay);
  } else {
    showOverlay(overlay);
  }
}

function showOverlay(overlay) {
  // Overlay einblenden
  overlay.classList.add('overlay-visible');
  
  // Fokus on the erste fokussierbare element setzen
  const focusableElements = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
  
  // Aria-attributes setzen
  overlay.setAttribute('aria-hidden', 'false');
}

function hideOverlay(overlay) {
  // Overlay ausblenden
  overlay.classList.remove('overlay-visible');
  
  // Aria-attributes zurucksetzen
  overlay.setAttribute('aria-hidden', 'true');
}
```

## Performance-Uberlegungen

Overlay-effects can the Leistung beeinflussen:

1. **Anzahl**: many Overlays gleichzeitig can the Leistung beeintrachtigen
2. **Unscharfe**: Blur-effects sind rechenintensiv and should sparsam eingesetzt become
3. **animations**: Animierte Overlays should optimiert become
4. **DOM-Tiefe**: Tiefe DOM-Strukturen with Overlays can to Leistungsproblemen fuhren

```css
/* Performance-Optimierung for animierte Overlays */
.overlay-animated {
  will-change: opacity, transform;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the meisten Overlay-effects sind with allen modernen Browsern kompatibel. some effects have however Einschrankungen in alteren Browsern.

| effect | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Overlays | ✓ | ✓ | ✓ | ✓ | ✓ |
| Verlaufs-Overlays | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Blur-Overlays | ✓ | ✓ | ✓ | ✓ | Nein |
| Animierte Overlays | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte effects

- [Backdrops](/docs/effects/layout/backdrops.md) - Hintergrundeffekte
- [Masken-effects](/docs/effects/layout/masks.md) - Maskeneffekte for elements
- [Glaseffekte](/docs/effects/visual/glass.md) - Glaseffekte for elements 
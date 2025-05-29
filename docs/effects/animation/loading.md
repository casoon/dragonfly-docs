# Loading-Effekte

Loading-Effekte werden verwendet, um dem Benutzer anzuzeigen, dass ein Prozess oder eine Operation im Hintergrund ausgeführt wird. Die `@casoon/ui-lib` bietet verschiedene Loading-Effekte, die dazu beitragen, das Benutzererlebnis während Ladezeiten zu verbessern.

## Basic Usage

Der grundlegende Loading-Effekt kann auf jedes Element angewendet werden:

```html
<div class="loading">Wird geladen...</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Loading-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.loading` | Basisklasse für Loading-Effekte |
| `.loading-spinner` | Drehendes Spinner-Element |
| `.loading-dots` | Punktanimation |
| `.loading-pulse` | Pulsierender Effekt |
| `.loading-bar` | Fortschrittsbalken |
| `.loading-skeleton` | Skeleton-Loading-Effekt |
| `.loading-shimmer` | Schimmer-Effekt über Platzhaltern |
| `.loading-wave` | Wellenanimation |
| `.loading-circle` | Kreisförmige Ladeanimation |
| `.loading-ellipsis` | Ellipsis-Animation (drei Punkte) |
| `.loading-blur` | Ein- und Ausblendeffekt |
| `.loading-bounce` | Hüpfende Elemente |
| `.loading-fade` | Ein- und Ausblendeeffekt |
| `.loading-overlay` | Vollständiger Overlay mit Ladeindikator |
| `.loading-fullscreen` | Vollbild-Ladeindikator |

## Variants

### Spinner

Der Spinner ist ein rotierendes Element, das ein laufendes Laden anzeigt:

```html
<div class="loading-spinner"></div>
```

Verfügbare Sizesvarianten:

```html
<div class="loading-spinner-xs">Extra klein</div>
<div class="loading-spinner-sm">Klein</div>
<div class="loading-spinner-md">Mittel</div>
<div class="loading-spinner-lg">Groß</div>
<div class="loading-spinner-xl">Extra groß</div>
```

Stilisierte Variants:

```html
<div class="loading-spinner-border">Rahmen-Spinner</div>
<div class="loading-spinner-grow">Wachsender Spinner</div>
<div class="loading-spinner-dual">Dualer Spinner</div>
<div class="loading-spinner-triple">Dreifach-Spinner</div>
```

### Dots

Die Dots-Animation zeigt eine Reihe von Punkten, die nacheinander animiert werden:

```html
<div class="loading-dots"></div>
```

Verfügbare Variants:

```html
<div class="loading-dots-pulse">Pulsierende Punkte</div>
<div class="loading-dots-bounce">Hüpfende Punkte</div>
<div class="loading-dots-fade">Verblassende Punkte</div>
<div class="loading-dots-wave">Wellenpunkte</div>
<div class="loading-dots-elastic">Elastische Punkte</div>
```

### Pulse

Der Pulse-Effekt zeigt einen pulsierenden Kreis oder ein anderes Element:

```html
<div class="loading-pulse"></div>
```

Verfügbare Variants:

```html
<div class="loading-pulse-circle">Kreisförmiger Puls</div>
<div class="loading-pulse-double">Doppelter Puls</div>
<div class="loading-pulse-ripple">Wellenförmiger Puls</div>
<div class="loading-pulse-shadow">Puls mit Schatten</div>
```

### Bar

Der Bar-Effekt zeigt einen Fortschrittsbalken:

```html
<div class="loading-bar"></div>
```

Verfügbare Variants:

```html
<div class="loading-bar-indeterminate">Unbestimmter Fortschritt</div>
<div class="loading-bar-determinate" style="--progress: 75%">Bestimmter Fortschritt (75%)</div>
<div class="loading-bar-striped">Gestreifter Fortschrittsbalken</div>
<div class="loading-bar-animated">Animierter Fortschrittsbalken</div>
<div class="loading-bar-gradient">Verlaufsfortschrittsbalken</div>
```

### Skeleton

Der Skeleton-Effekt erstellt Platzhalter für Inhalte, die geladen werden:

```html
<div class="loading-skeleton">
  <div class="loading-skeleton-header"></div>
  <div class="loading-skeleton-text"></div>
  <div class="loading-skeleton-text"></div>
</div>
```

Verfügbare Components:

```html
<div class="loading-skeleton-avatar">Avatar-Platzhalter</div>
<div class="loading-skeleton-image">Bild-Platzhalter</div>
<div class="loading-skeleton-heading">Überschriften-Platzhalter</div>
<div class="loading-skeleton-text">Text-Platzhalter</div>
<div class="loading-skeleton-button">Button-Platzhalter</div>
<div class="loading-skeleton-card">Cardn-Platzhalter</div>
```

### Shimmer

Der Shimmer-Effekt fügt einen animierten Glanzeffekt zu Skeleton-Elementen hinzu:

```html
<div class="loading-skeleton loading-shimmer">
  <div class="loading-skeleton-header"></div>
  <div class="loading-skeleton-text"></div>
</div>
```

Verfügbare Variants:

```html
<div class="loading-shimmer-light">Heller Schimmereffekt</div>
<div class="loading-shimmer-dark">Dunkler Schimmereffekt</div>
<div class="loading-shimmer-colored">Farbiger Schimmereffekt</div>
<div class="loading-shimmer-gradient">Verlaufsschimmereffekt</div>
```

### Wave

Der Wave-Effekt zeigt eine wellenförmige Animation:

```html
<div class="loading-wave"></div>
```

Verfügbare Variants:

```html
<div class="loading-wave-bars">Wellenbalken</div>
<div class="loading-wave-circle">Wellenkreis</div>
<div class="loading-wave-dots">Wellenpunkte</div>
<div class="loading-wave-liquid">Flüssigkeitswelle</div>
```

### Circle

Der Circle-Effekt zeigt einen kreisförmigen Fortschrittsindikator:

```html
<div class="loading-circle"></div>
```

Verfügbare Variants:

```html
<div class="loading-circle-indeterminate">Unbestimmter Kreisfortschritt</div>
<div class="loading-circle-determinate" style="--progress: 75%">Bestimmter Kreisfortschritt (75%)</div>
<div class="loading-circle-dash">Gestrichelter Kreisfortschritt</div>
<div class="loading-circle-segment">Segmentierter Kreisfortschritt</div>
<div class="loading-circle-gradient">Verlaufskreisfortschritt</div>
```

### Ellipsis

Der Ellipsis-Effekt zeigt drei Punkte, die nach und nach erscheinen:

```html
<div class="loading-ellipsis">Wird geladen<span>...</span></div>
```

### Overlay

Der Overlay-Effekt zeigt einen halbtransparenten Überzug mit einem Ladeindikator:

```html
<div class="loading-overlay">
  <div class="loading-spinner"></div>
</div>
```

Verfügbare Variants:

```html
<div class="loading-overlay-light">Heller Overlay</div>
<div class="loading-overlay-dark">Dunkler Overlay</div>
<div class="loading-overlay-blur">Unscharfer Overlay</div>
<div class="loading-overlay-gradient">Verlaufsoverlay</div>
```

## Kombination mit anderen Elementen

Loading-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Loading-Status

```html
<button class="btn btn-primary btn-loading">
  <span class="loading-spinner-sm"></span>
  Wird geladen...
</button>

<button class="btn btn-primary btn-loading-dots">
  Wird geladen<span class="loading-ellipsis"></span>
</button>
```

### Cardn mit Loading-Status

```html
<div class="card card-loading">
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
  <div class="card-body">
    Cardninhalt
  </div>
</div>
```

### Formelemente mit Loading-Status

```html
<div class="form-group">
  <label>Benutzername</label>
  <div class="input-loading">
    <input type="text" class="form-control" disabled>
    <span class="loading-spinner-sm"></span>
  </div>
</div>
```

### Seiten mit Loading-Status

```html
<div class="loading-fullscreen">
  <div class="loading-spinner-lg"></div>
  <p>Seite wird geladen...</p>
</div>
```

## Anpassung

Die Loading-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Allgemeine Loading-Parameter */
  --loading-color: var(--color-primary);
  --loading-background: rgba(255, 255, 255, 0.7);
  --loading-z-index: 1000;
  
  /* Spinner-Parameter */
  --loading-spinner-size: 2rem;
  --loading-spinner-border-width: 0.25rem;
  --loading-spinner-animation-duration: 1s;
  
  /* Dots-Parameter */
  --loading-dots-size: 0.5rem;
  --loading-dots-gap: 0.25rem;
  --loading-dots-color: var(--color-primary);
  --loading-dots-animation-duration: 1.5s;
  
  /* Pulse-Parameter */
  --loading-pulse-size: 1rem;
  --loading-pulse-animation-duration: 2s;
  --loading-pulse-color: var(--color-primary);
  
  /* Bar-Parameter */
  --loading-bar-height: 4px;
  --loading-bar-background: #f0f0f0;
  --loading-bar-animation-duration: 2s;
  
  /* Skeleton-Parameter */
  --loading-skeleton-background: #f0f0f0;
  --loading-skeleton-border-radius: 4px;
  
  /* Shimmer-Parameter */
  --loading-shimmer-color: rgba(255, 255, 255, 0.2);
  --loading-shimmer-animation-duration: 1.5s;
  
  /* Overlay-Parameter */
  --loading-overlay-background: rgba(255, 255, 255, 0.7);
  --loading-overlay-blur: 2px;
}

/* Dunkles Theme */
.dark-theme {
  --loading-background: rgba(0, 0, 0, 0.7);
  --loading-skeleton-background: #2a2a2a;
  --loading-bar-background: #2a2a2a;
  --loading-shimmer-color: rgba(255, 255, 255, 0.05);
  --loading-overlay-background: rgba(0, 0, 0, 0.7);
}
```

## CSS-Implementierung

Examples für die CSS-Implementierung der Loading-Effekte:

```css
/* Basis-Loading */
.loading {
  position: relative;
}

/* Spinner */
.loading-spinner {
  display: inline-block;
  width: var(--loading-spinner-size);
  height: var(--loading-spinner-size);
  border: var(--loading-spinner-border-width) solid var(--loading-color);
  border-radius: 50%;
  border-right-color: transparent;
  animation: spinner var(--loading-spinner-animation-duration) linear infinite;
}

@keyframes spinner {
  to { transform: rotate(360deg); }
}

/* Dots */
.loading-dots {
  display: inline-flex;
  align-items: center;
}

.loading-dots::after {
  content: '';
  display: inline-block;
  width: var(--loading-dots-size);
  height: var(--loading-dots-size);
  border-radius: 50%;
  background-color: var(--loading-dots-color);
  animation: dots var(--loading-dots-animation-duration) infinite;
}

@keyframes dots {
  0%, 80%, 100% { opacity: 0; transform: scale(0); }
  40% { opacity: 1; transform: scale(1); }
}

/* Pulse */
.loading-pulse {
  display: inline-block;
  width: var(--loading-pulse-size);
  height: var(--loading-pulse-size);
  border-radius: 50%;
  background-color: var(--loading-pulse-color);
  animation: pulse var(--loading-pulse-animation-duration) infinite;
}

@keyframes pulse {
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.8; }
}

/* Bar */
.loading-bar {
  width: 100%;
  height: var(--loading-bar-height);
  background-color: var(--loading-bar-background);
  overflow: hidden;
}

.loading-bar-indeterminate::after {
  content: '';
  display: block;
  height: 100%;
  width: 50%;
  background-color: var(--loading-color);
  animation: bar var(--loading-bar-animation-duration) infinite;
}

@keyframes bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}

/* Skeleton */
.loading-skeleton {
  background-color: var(--loading-skeleton-background);
  border-radius: var(--loading-skeleton-border-radius);
  height: 1em;
  margin-bottom: 0.5em;
}

/* Shimmer */
.loading-shimmer {
  position: relative;
  overflow: hidden;
}

.loading-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent,
    var(--loading-shimmer-color),
    transparent
  );
  animation: shimmer var(--loading-shimmer-animation-duration) infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--loading-overlay-background);
  z-index: var(--loading-z-index);
}

.loading-overlay-blur {
  backdrop-filter: blur(var(--loading-overlay-blur));
}

/* Fullscreen */
.loading-fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--loading-background);
  z-index: calc(var(--loading-z-index) + 100);
}
```

## JavaScript-Integration

Für dynamische Loading-Steuerung kann JavaScript verwendet werden:

```javascript
function showLoading(elementId, type = 'spinner') {
  const element = document.getElementById(elementId);
  
  // Bestehenden Inhalt speichern
  const originalContent = element.innerHTML;
  element.setAttribute('data-original-content', originalContent);
  
  // Loading-Element je nach Typ einfügen
  switch (type) {
    case 'spinner':
      element.innerHTML = '<div class="loading-spinner"></div>';
      break;
    case 'dots':
      element.innerHTML = '<div class="loading-dots"></div>';
      break;
    case 'overlay':
      element.innerHTML = originalContent;
      const overlay = document.createElement('div');
      overlay.className = 'loading-overlay';
      overlay.innerHTML = '<div class="loading-spinner"></div>';
      element.appendChild(overlay);
      break;
    // Weitere Typen hier...
  }
  
  // Loading-Klasse hinzufügen
  element.classList.add('loading');
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  
  // Original-Inhalt wiederherstellen, falls vorhanden
  const originalContent = element.getAttribute('data-original-content');
  if (originalContent) {
    element.innerHTML = originalContent;
    element.removeAttribute('data-original-content');
  }
  
  // Overlay entfernen, falls vorhanden
  const overlay = element.querySelector('.loading-overlay');
  if (overlay) {
    element.removeChild(overlay);
  }
  
  // Loading-Klasse entfernen
  element.classList.remove('loading');
}

// Example für eine asynchrone Funktion mit Loading-Indikator
async function fetchData(url, containerId) {
  const container = document.getElementById(containerId);
  
  try {
    showLoading(containerId, 'overlay');
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Daten verarbeiten...
    
    hideLoading(containerId);
    return data;
  } catch (error) {
    hideLoading(containerId);
    console.error('Fehler beim Laden der Daten:', error);
    
    // Fehlermeldung anzeigen
    container.innerHTML = '<div class="error">Fehler beim Laden der Daten.</div>';
    throw error;
  }
}
```

## Accessibility

Bei der Usage von Loading-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **ARIA-Attribute**: Verwenden Sie geeignete ARIA-Attribute, um anzuzeigen, dass Inhalte geladen werden
2. **Status-Updates**: Informieren Sie Screenreader über den Ladezustand
3. **Keine reinen visuellen Indikatoren**: Stellen Sie sicher, dass Ladezustände nicht nur visuell angezeigt werden
4. **Animation**: Respektieren Sie die Einstellung `prefers-reduced-motion`

```html
<!-- Barrierefreier Loading-Indikator -->
<div 
  class="loading-spinner" 
  role="status" 
  aria-live="polite" 
  aria-busy="true"
>
  <span class="visually-hidden">Inhalte werden geladen, bitte warten</span>
</div>

<!-- Barrierefreier Fortschrittsbalken -->
<div 
  class="loading-bar" 
  role="progressbar" 
  aria-valuemin="0" 
  aria-valuemax="100" 
  aria-valuenow="70"
  aria-valuetext="70 Prozent geladen"
>
  <div class="loading-bar-determinate" style="--progress: 70%"></div>
</div>
```

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .loading-spinner,
  .loading-dots,
  .loading-pulse,
  .loading-bar-indeterminate,
  .loading-shimmer {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Browser-Kompatibilität

Die meisten Loading-Effekte werden von allen modernen Browsern unterstützt.

| Effekt | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Spinner | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dots | ✓ | ✓ | ✓ | ✓ | ✓ |
| Pulse | ✓ | ✓ | ✓ | ✓ | ✓ |
| Bar | ✓ | ✓ | ✓ | ✓ | ✓ |
| Skeleton | ✓ | ✓ | ✓ | ✓ | ✓ |
| Shimmer | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Overlay Blur | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Skeleton-Effekte](/docs/effects/layout/skeleton.md) - Platzhalter für Inhalte
- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-Effekte](/docs/effects/transitions.md) - Übergangseffekte zwischen Statesn 
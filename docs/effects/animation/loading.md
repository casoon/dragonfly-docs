# Loading-effects

Loading-effects become verwendet, um dem user anzuzeigen, that a Prozess or a Operation im background ausgefuhrt wird. the `@casoon/ui-lib` bietet verschiedene Loading-effects, the for that beitragen, the Benutzererlebnis wahrend Ladezeiten to verbessern.

## Basic Usage

the grundlegende Loading-effect kann on jedes element angewendet become:

```html
<div class="loading">Wird geladen...</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Loading-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.loading` | Basisklasse for Loading-effects |
| `.loading-spinners` | Drehendes spinners-element |
| `.loading-dots` | Punktanimation |
| `.loading-pulse` | Pulsierender effect |
| `.loading-bar` | Fortschrittsbalken |
| `.loading-skeleton` | Skeleton-Loading-effect |
| `.loading-shimmer` | Schimmer-effect over Platzhaltern |
| `.loading-wave` | Wellenanimation |
| `.loading-circle` | Kreisformige Ladeanimation |
| `.loading-ellipsis` | Ellipsis-animation (drei Punkte) |
| `.loading-blur` | a- and Ausblendeffekt |
| `.loading-bounce` | Hupfende elements |
| `.loading-fade` | a- and Ausblendeeffekt |
| `.loading-overlay` | Vollstandiger Overlay with Ladeindikator |
| `.loading-fullscreen` | Vollbild-Ladeindikator |

## Variants

### spinners

the spinners ist a rotierendes element, the a laufendes load anzeigt:

```html
<div class="loading-spinners"></div>
```

Verfugbare Sizesvarianten:

```html
<div class="loading-spinners-xs">Extra small</div>
<div class="loading-spinners-sm">small</div>
<div class="loading-spinners-md">Mittel</div>
<div class="loading-spinners-lg">Gross</div>
<div class="loading-spinners-xl">Extra gross</div>
```

Stilisierte Variants:

```html
<div class="loading-spinners-border">border-spinners</div>
<div class="loading-spinners-grow">Wachsender spinners</div>
<div class="loading-spinners-dual">Dualer spinners</div>
<div class="loading-spinners-triple">Dreifach-spinners</div>
```

### Dots

the Dots-animation zeigt a Reihe from Punkten, the nacheinander animiert become:

```html
<div class="loading-dots"></div>
```

Verfugbare Variants:

```html
<div class="loading-dots-pulse">Pulsierende Punkte</div>
<div class="loading-dots-bounce">Hupfende Punkte</div>
<div class="loading-dots-fade">Verblassende Punkte</div>
<div class="loading-dots-wave">Wellenpunkte</div>
<div class="loading-dots-elastic">Elastische Punkte</div>
```

### Pulse

the Pulse-effect zeigt einen pulsierenden Kreis or a anderes element:

```html
<div class="loading-pulse"></div>
```

Verfugbare Variants:

```html
<div class="loading-pulse-circle">Kreisformiger Puls</div>
<div class="loading-pulse-double">Doppelter Puls</div>
<div class="loading-pulse-ripple">Wellenformiger Puls</div>
<div class="loading-pulse-shadow">Puls with shadow</div>
```

### Bar

the Bar-effect zeigt einen Fortschrittsbalken:

```html
<div class="loading-bar"></div>
```

Verfugbare Variants:

```html
<div class="loading-bar-indeterminate">Unbestimmter progress</div>
<div class="loading-bar-determinate" style="--progress: 75%">Bestimmter progress (75%)</div>
<div class="loading-bar-striped">Gestreifter Fortschrittsbalken</div>
<div class="loading-bar-animated">Animierter Fortschrittsbalken</div>
<div class="loading-bar-gradient">Verlaufsfortschrittsbalken</div>
```

### Skeleton

the Skeleton-effect erstellt Platzhalter for contents, the geladen become:

```html
<div class="loading-skeleton">
  <div class="loading-skeleton-header"></div>
  <div class="loading-skeleton-text"></div>
  <div class="loading-skeleton-text"></div>
</div>
```

Verfugbare Components:

```html
<div class="loading-skeleton-avatar">avatar-Platzhalter</div>
<div class="loading-skeleton-image">image-Platzhalter</div>
<div class="loading-skeleton-heading">Uberschriften-Platzhalter</div>
<div class="loading-skeleton-text">Text-Platzhalter</div>
<div class="loading-skeleton-button">button-Platzhalter</div>
<div class="loading-skeleton-card">Cardn-Platzhalter</div>
```

### Shimmer

the Shimmer-effect fugt einen animierten Glanzeffekt to Skeleton-Elementen hinzu:

```html
<div class="loading-skeleton loading-shimmer">
  <div class="loading-skeleton-header"></div>
  <div class="loading-skeleton-text"></div>
</div>
```

Verfugbare Variants:

```html
<div class="loading-shimmer-light">Heller Schimmereffekt</div>
<div class="loading-shimmer-dark">Dunkler Schimmereffekt</div>
<div class="loading-shimmer-colored">Farbiger Schimmereffekt</div>
<div class="loading-shimmer-gradient">Verlaufsschimmereffekt</div>
```

### Wave

the Wave-effect zeigt a wellenformige animation:

```html
<div class="loading-wave"></div>
```

Verfugbare Variants:

```html
<div class="loading-wave-bars">Wellenbalken</div>
<div class="loading-wave-circle">Wellenkreis</div>
<div class="loading-wave-dots">Wellenpunkte</div>
<div class="loading-wave-liquid">Flussigkeitswelle</div>
```

### Circle

the Circle-effect zeigt einen kreisformigen Fortschrittsindikator:

```html
<div class="loading-circle"></div>
```

Verfugbare Variants:

```html
<div class="loading-circle-indeterminate">Unbestimmter Kreisfortschritt</div>
<div class="loading-circle-determinate" style="--progress: 75%">Bestimmter Kreisfortschritt (75%)</div>
<div class="loading-circle-dash">Gestrichelter Kreisfortschritt</div>
<div class="loading-circle-segment">Segmentierter Kreisfortschritt</div>
<div class="loading-circle-gradient">Verlaufskreisfortschritt</div>
```

### Ellipsis

the Ellipsis-effect zeigt drei Punkte, the after and after erscheinen:

```html
<div class="loading-ellipsis">Wird geladen<span>...</span></div>
```

### Overlay

the Overlay-effect zeigt einen halbtransparenten Uberzug with einem Ladeindikator:

```html
<div class="loading-overlay">
  <div class="loading-spinners"></div>
</div>
```

Verfugbare Variants:

```html
<div class="loading-overlay-light">Heller Overlay</div>
<div class="loading-overlay-dark">Dunkler Overlay</div>
<div class="loading-overlay-blur">Unscharfer Overlay</div>
<div class="loading-overlay-gradient">Verlaufsoverlay</div>
```

## Kombination with anderen Elementen

Loading-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Loading-Status

```html
<button class="btn btn-primary btn-loading">
  <span class="loading-spinners-sm"></span>
  Wird geladen...
</button>

<button class="btn btn-primary btn-loading-dots">
  Wird geladen<span class="loading-ellipsis"></span>
</button>
```

### Cardn with Loading-Status

```html
<div class="card card-loading">
  <div class="loading-overlay">
    <div class="loading-spinners"></div>
  </div>
  <div class="card-body">
    Cardninhalt
  </div>
</div>
```

### form elements with Loading-Status

```html
<div class="form-group">
  <label>Benutzername</label>
  <div class="input-loading">
    <input type="text" class="form-control" disabled>
    <span class="loading-spinners-sm"></span>
  </div>
</div>
```

### Seiten with Loading-Status

```html
<div class="loading-fullscreen">
  <div class="loading-spinners-lg"></div>
  <p>Seite wird geladen...</p>
</div>
```

## Customization

the Loading-effects can over CSS Variables angepasst become:

```css
:root {
  /* Allgemeine Loading-parameter */
  --loading-color: var(--color-primary);
  --loading-background: rgba(255, 255, 255, 0.7);
  --loading-z-index: 1000;
  
  /* spinners-parameter */
  --loading-spinners-size: 2rem;
  --loading-spinners-border-width: 0.25rem;
  --loading-spinners-animation-duration: 1s;
  
  /* Dots-parameter */
  --loading-dots-size: 0.5rem;
  --loading-dots-gap: 0.25rem;
  --loading-dots-color: var(--color-primary);
  --loading-dots-animation-duration: 1.5s;
  
  /* Pulse-parameter */
  --loading-pulse-size: 1rem;
  --loading-pulse-animation-duration: 2s;
  --loading-pulse-color: var(--color-primary);
  
  /* Bar-parameter */
  --loading-bar-height: 4px;
  --loading-bar-background: #f0f0f0;
  --loading-bar-animation-duration: 2s;
  
  /* Skeleton-parameter */
  --loading-skeleton-background: #f0f0f0;
  --loading-skeleton-border-radius: 4px;
  
  /* Shimmer-parameter */
  --loading-shimmer-color: rgba(255, 255, 255, 0.2);
  --loading-shimmer-animation-duration: 1.5s;
  
  /* Overlay-parameter */
  --loading-overlay-background: rgba(255, 255, 255, 0.7);
  --loading-overlay-blur: 2px;
}

/* Dunkles theme */
.dark-theme {
  --loading-background: rgba(0, 0, 0, 0.7);
  --loading-skeleton-background: #2a2a2a;
  --loading-bar-background: #2a2a2a;
  --loading-shimmer-color: rgba(255, 255, 255, 0.05);
  --loading-overlay-background: rgba(0, 0, 0, 0.7);
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Loading-effects:

```css
/* Base-Loading */
.loading {
  position: relative;
}

/* spinners */
.loading-spinners {
  display: inline-block;
  width: var(--loading-spinners-size);
  height: var(--loading-spinners-size);
  border: var(--loading-spinners-border-width) solid var(--loading-color);
  border-radius: 50%;
  border-right-color: transparent;
  animation: spinners var(--loading-spinners-animation-duration) linear infinite;
}

@keyframes spinners {
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

for dynamische Loading-Steuerung kann JavaScript verwendet become:

```javascript
function showLoading(elementId, type = 'spinners') {
  const element = document.getElementById(elementId);
  
  // Bestehenden content save
  const originalContent = element.innerHTML;
  element.setAttribute('data-original-content', originalContent);
  
  // Loading-element je after Typ einfugen
  switch (type) {
    case 'spinners':
      element.innerHTML = '<div class="loading-spinners"></div>';
      break;
    case 'dots':
      element.innerHTML = '<div class="loading-dots"></div>';
      break;
    case 'overlay':
      element.innerHTML = originalContent;
      const overlay = document.createElement('div');
      overlay.className = 'loading-overlay';
      overlay.innerHTML = '<div class="loading-spinners"></div>';
      element.appendChild(overlay);
      break;
    // additional Typen hier...
  }
  
  // Loading-Class add
  element.classList.add('loading');
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  
  // Original-content wiederherstellen, if vorhanden
  const originalContent = element.getAttribute('data-original-content');
  if (originalContent) {
    element.innerHTML = originalContent;
    element.removeAttribute('data-original-content');
  }
  
  // Overlay remove, if vorhanden
  const overlay = element.querySelector('.loading-overlay');
  if (overlay) {
    element.removeChild(overlay);
  }
  
  // Loading-Class remove
  element.classList.remove('loading');
}

// Example for a asynchrone Function with Loading-Indikator
async function fetchData(url, containerId) {
  const containers = document.getElementById(containerId);
  
  try {
    showLoading(containerId, 'overlay');
    
    const response = await fetch(url);
    const data = await response.json();
    
    // Daten verarbeiten...
    
    hideLoading(containerId);
    return data;
  } catch (error) {
    hideLoading(containerId);
    console.error('errors beim load the Daten:', error);
    
    // Fehlermeldung anzeigen
    containers.innerHTML = '<div class="error">errors beim load the Daten.</div>';
    throw error;
  }
}
```

## Accessibility

at the Usage from Loading-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **ARIA-attributes**: use them geeignete ARIA-attributes, um anzuzeigen, that contents geladen become
2. **Status-Updates**: Informieren them Screenreader over den Ladezustand
3. **no reinen visuellen Indikatoren**: ensure, that Ladezustande not only visuell angezeigt become
4. **animation**: Respektieren them the Setting `prefers-reduced-motion`

```html
<!-- Barrierefreier Loading-Indikator -->
<div 
  class="loading-spinners" 
  role="status" 
  aria-live="polite" 
  aria-busy="true"
>
  <span class="visually-hidden">contents become geladen, please warten</span>
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
/* Reduzierte animation for user, the dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .loading-spinners,
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

## Browser-Kompatibilitat

the meisten Loading-effects become from allen modernen Browsern unterstutzt.

| effect | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| spinners | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dots | ✓ | ✓ | ✓ | ✓ | ✓ |
| Pulse | ✓ | ✓ | ✓ | ✓ | ✓ |
| Bar | ✓ | ✓ | ✓ | ✓ | ✓ |
| Skeleton | ✓ | ✓ | ✓ | ✓ | ✓ |
| Shimmer | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Overlay Blur | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Skeleton-effects](/docs/effects/layout/skeleton.md) - Platzhalter for contents
- [Animations-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-effects](/docs/effects/transitions.md) - Ubergangseffekte between Statesn 
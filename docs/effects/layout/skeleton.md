# Skeleton-effects

Skeleton-effects become verwendet, um den Ladezustand from Inhalten on einer Webseite visuell darzustellen. the `@casoon/ui-lib` bietet verschiedene Skeleton-effects, the for that beitragen, the Ladeerlebnis to verbessern and the wahrgenommene Leistung to steigern.

## Basic Usage

the grundlegende Skeleton-effect kann on jedes element angewendet become:

```html
<div class="skeleton">Ladender content</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Skeleton-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.skeleton` | Basisklasse for Skeleton-effects |
| `.skeleton-text` | Skeleton for Textinhalte |
| `.skeleton-heading` | Skeleton for Uberschriften |
| `.skeleton-image` | Skeleton for images |
| `.skeleton-avatar` | Skeleton for Profilbilder |
| `.skeleton-button` | Skeleton for buttons |
| `.skeleton-card` | Skeleton for Cardn |
| `.skeleton-list` | Skeleton for lists |
| `.skeleton-table` | Skeleton for Tablen |
| `.skeleton-input` | Skeleton for Inputer |
| `.skeleton-circle` | Kreisformiger Skeleton |
| `.skeleton-rectangle` | Rechteckiger Skeleton |
| `.skeleton-rounded` | Abgerundeter Skeleton |
| `.skeleton-pulse` | Pulsierender Skeleton-effect |
| `.skeleton-wave` | Welliger Skeleton-effect |

## Variants

### Text-Skeleton

the Text-Skeleton simuliert Textzeilen:

```html
<div class="skeleton-text">Ladender Textinhalt</div>
```

Variants for unterschiedliche Textlangen:

```html
<div class="skeleton-text-short">Kurzer Text</div>
<div class="skeleton-text-medium">Mittellanger Text</div>
<div class="skeleton-text-long">Langer Text</div>
<div class="skeleton-text-paragraph">Textabsatz</div>
```

### Heading-Skeleton

the Heading-Skeleton simuliert Uberschriften:

```html
<div class="skeleton-heading">Ladende heading</div>
```

Variants for unterschiedliche Uberschriftengrossen:

```html
<div class="skeleton-heading-h1">H1 heading</div>
<div class="skeleton-heading-h2">H2 heading</div>
<div class="skeleton-heading-h3">H3 heading</div>
```

### Image-Skeleton

the Image-Skeleton simuliert a ladendes image:

```html
<div class="skeleton-image">Ladendes image</div>
```

Variants for unterschiedliche Bildgrossen and -formate:

```html
<div class="skeleton-image-small">Kleines image</div>
<div class="skeleton-image-medium">Mittleres image</div>
<div class="skeleton-image-large">Grosses image</div>
<div class="skeleton-image-square">Quadratisches image</div>
<div class="skeleton-image-landscape">Querformat-image</div>
<div class="skeleton-image-portrait">Hochformat-image</div>
```

### avatar-Skeleton

the avatar-Skeleton simuliert a ladendes Profilbild:

```html
<div class="skeleton-avatar">Ladendes Profilbild</div>
```

Variants for unterschiedliche avatar-Sizes:

```html
<div class="skeleton-avatar-small">smaller avatar</div>
<div class="skeleton-avatar-medium">Mittlerer avatar</div>
<div class="skeleton-avatar-large">Grosser avatar</div>
```

### button-Skeleton

the button-Skeleton simuliert einen ladenden button:

```html
<div class="skeleton-button">Ladender button</div>
```

Variants for unterschiedliche button-Styles:

```html
<div class="skeleton-button-small">smaller button</div>
<div class="skeleton-button-medium">Mittlerer button</div>
<div class="skeleton-button-large">Grosser button</div>
<div class="skeleton-button-rounded">Abgerundeter button</div>
<div class="skeleton-button-pill">Pillenformiger button</div>
```

### Card-Skeleton

the Card-Skeleton simuliert a ladende Card:

```html
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-card-content">
    <div class="skeleton-heading"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
  </div>
</div>
```

### List-Skeleton

the List-Skeleton simuliert a ladende list:

```html
<ul class="skeleton-list">
  <li class="skeleton-list-item"></li>
  <li class="skeleton-list-item"></li>
  <li class="skeleton-list-item"></li>
</ul>
```

### Table-Skeleton

the Table-Skeleton simuliert a ladende Table:

```html
<div class="skeleton-table">
  <div class="skeleton-table-header"></div>
  <div class="skeleton-table-row"></div>
  <div class="skeleton-table-row"></div>
  <div class="skeleton-table-row"></div>
</div>
```

### Form-Skeleton

the Form-Skeleton simuliert a ladendes Form:

```html
<div class="skeleton-form">
  <div class="skeleton-input"></div>
  <div class="skeleton-input"></div>
  <div class="skeleton-button"></div>
</div>
```

## animation-Variants

Verschiedene Animationsstile for Skeleton-effects:

### Pulse-animation

the Pulse-animation lasst den Skeleton pulsieren:

```html
<div class="skeleton-pulse">Pulsierender Skeleton</div>
```

### Wave-animation

the Wave-animation erzeugt einen Welleneffekt over den Skeleton:

```html
<div class="skeleton-wave">Welliger Skeleton</div>
```

### Shimmer-animation

the Shimmer-animation erzeugt einen Glanzeffekt over den Skeleton:

```html
<div class="skeleton-shimmer">Schimmernder Skeleton</div>
```

### Fade-animation

the Fade-animation lasst den Skeleton a- and ausblenden:

```html
<div class="skeleton-fade">a- and ausblendender Skeleton</div>
```

## Komplexe Components

Skeleton-effects for komplexere UI-Components:

### Profil-Skeleton

```html
<div class="skeleton-profile">
  <div class="skeleton-avatar"></div>
  <div class="skeleton-profile-info">
    <div class="skeleton-heading"></div>
    <div class="skeleton-text-short"></div>
  </div>
</div>
```

### Social-Media-Post-Skeleton

```html
<div class="skeleton-post">
  <div class="skeleton-profile">
    <div class="skeleton-avatar-small"></div>
    <div class="skeleton-text-short"></div>
  </div>
  <div class="skeleton-image"></div>
  <div class="skeleton-text-medium"></div>
  <div class="skeleton-text-short"></div>
</div>
```

### Artikel-Skeleton

```html
<div class="skeleton-article">
  <div class="skeleton-heading-h1"></div>
  <div class="skeleton-text-short"></div>
  <div class="skeleton-image"></div>
  <div class="skeleton-text-paragraph"></div>
  <div class="skeleton-text-paragraph"></div>
</div>
```

### Produktliste-Skeleton

```html
<div class="skeleton-product-list">
  <div class="skeleton-product">
    <div class="skeleton-image"></div>
    <div class="skeleton-heading-h3"></div>
    <div class="skeleton-text-short"></div>
    <div class="skeleton-button"></div>
  </div>
  <div class="skeleton-product">
    <div class="skeleton-image"></div>
    <div class="skeleton-heading-h3"></div>
    <div class="skeleton-text-short"></div>
    <div class="skeleton-button"></div>
  </div>
  <div class="skeleton-product">
    <div class="skeleton-image"></div>
    <div class="skeleton-heading-h3"></div>
    <div class="skeleton-text-short"></div>
    <div class="skeleton-button"></div>
  </div>
</div>
```

## Customization

the Skeleton-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Skeleton-parameter */
  --skeleton-bg-color: #e0e0e0;
  --skeleton-highlight-color: #f0f0f0;
  
  /* animation-parameter */
  --skeleton-animation-duration: 1.5s;
  --skeleton-animation-timing: ease-in-out;
  
  /* Sizesparameter */
  --skeleton-text-height: 1em;
  --skeleton-heading-height: 1.8em;
  --skeleton-image-height: 200px;
  --skeleton-avatar-size: 50px;
  --skeleton-button-height: 40px;
  
  /* spacing-parameter */
  --skeleton-spacing: 0.5rem;
  
  /* Radius-parameter */
  --skeleton-border-radius: 4px;
  --skeleton-avatar-radius: 50%;
}

/* for dunkle themes */
.dark-theme {
  --skeleton-bg-color: #3a3a3a;
  --skeleton-highlight-color: #444444;
}
```

## JavaScript-Integration

for dynamisches Umschalten from Skeleton-Effekten kann JavaScript verwendet become:

```javascript
// Skeleton anzeigen, wahrend contents geladen become
function showSkeletonLoader(containerId, isLoading) {
  const containers = document.getElementById(containerId);
  
  if (isLoading) {
    // Tatsachlichen content ausblenden and Skeleton anzeigen
    containers.querySelectorAll('.content').forEach(el => {
      el.style.display = 'none';
    });
    
    containers.querySelectorAll('.skeleton').forEach(el => {
      el.style.display = 'block';
    });
  } else {
    // Skeleton ausblenden and tatsachlichen content anzeigen
    containers.querySelectorAll('.skeleton').forEach(el => {
      el.style.display = 'none';
    });
    
    containers.querySelectorAll('.content').forEach(el => {
      el.style.display = 'block';
    });
  }
}

// Example for the load from Daten with Fetch
function loadData(containerId, url) {
  const containers = document.getElementById(containerId);
  
  // Skeleton anzeigen
  showSkeletonLoader(containerId, true);
  
  // Daten load
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Daten in den containers einfugen
      renderData(containers, data);
      
      // Skeleton ausblenden
      showSkeletonLoader(containerId, false);
    })
    .catch(error => {
      console.error('errors beim load the Daten:', error);
      
      // Skeleton ausblenden and Fehlermeldung anzeigen
      showSkeletonLoader(containerId, false);
      containers.innerHTML = '<div class="error">errors beim load the Daten.</div>';
    });
}
```

## Accessibility

at the Usage from Skeleton-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **ARIA-attributes**: use them geeignete ARIA-attributes, um anzuzeigen, that contents geladen become
2. **Status-Updates**: Informieren them Screenreader over den Ladezustand
3. **Kontrast**: ensure, that Skeleton-elements ausreichenden Kontrast zum background have
4. **animation**: Respektieren them the Setting `prefers-reduced-motion`

```html
<!-- Barrierefreier Skeleton-Loader -->
<div 
  class="skeleton-card" 
  role="status" 
  aria-busy="true" 
  aria-label="Ladt contents"
>
  <div class="skeleton-image"></div>
  <div class="skeleton-heading"></div>
  <div class="skeleton-text"></div>
  <div class="visually-hidden">contents become geladen, please warten</div>
</div>
```

```css
/* Reduzierte animation for user, the dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .skeleton-pulse,
  .skeleton-wave,
  .skeleton-shimmer,
  .skeleton-fade {
    animation: none !important;
  }
}
```

## animation-Implementation

Exampleimplementierung the Skeleton-animations:

```css
/* Pulse-animation */
@keyframes skeletonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.skeleton-pulse {
  animation: skeletonPulse var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}

/* Wave-animation */
@keyframes skeletonWave {
  0% { 
    background-position: -200px 0; 
  }
  100% { 
    background-position: calc(200px + 100%) 0; 
  }
}

.skeleton-wave {
  background: linear-gradient(
    90deg, 
    var(--skeleton-bg-color) 25%, 
    var(--skeleton-highlight-color) 50%, 
    var(--skeleton-bg-color) 75%
  );
  background-size: 200px 100%;
  animation: skeletonWave var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}

/* Shimmer-animation */
@keyframes skeletonShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton-shimmer {
  position: relative;
  overflow: hidden;
}

.skeleton-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skeleton-highlight-color),
    transparent
  );
  animation: skeletonShimmer var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}

/* Fade-animation */
@keyframes skeletonFade {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.4; }
}

.skeleton-fade {
  animation: skeletonFade var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}
```

## Browser-Kompatibilitat

the meisten Skeleton-effects sind with allen modernen Browsern kompatibel.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Skeletons | ✓ | ✓ | ✓ | ✓ | ✓ |
| Gradient-animations | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Komplexe animations | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte effects

- [Loading-effects](/docs/effects/animation/loading.md) - Animierte Ladeeffekte
- [animation-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Pulse-effects](/docs/effects/visual/pulse.md) - Pulseffekte for elements 
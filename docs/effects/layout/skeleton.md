# Skeleton-Effekte

Skeleton-Effekte werden verwendet, um den Ladezustand von Inhalten auf einer Webseite visuell darzustellen. Die `@casoon/ui-lib` bietet verschiedene Skeleton-Effekte, die dazu beitragen, das Ladeerlebnis zu verbessern und die wahrgenommene Leistung zu steigern.

## Grundlegende Verwendung

Der grundlegende Skeleton-Effekt kann auf jedes Element angewendet werden:

```html
<div class="skeleton">Ladender Inhalt</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Skeleton-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.skeleton` | Basisklasse für Skeleton-Effekte |
| `.skeleton-text` | Skeleton für Textinhalte |
| `.skeleton-heading` | Skeleton für Überschriften |
| `.skeleton-image` | Skeleton für Bilder |
| `.skeleton-avatar` | Skeleton für Profilbilder |
| `.skeleton-button` | Skeleton für Buttons |
| `.skeleton-card` | Skeleton für Karten |
| `.skeleton-list` | Skeleton für Listen |
| `.skeleton-table` | Skeleton für Tabellen |
| `.skeleton-input` | Skeleton für Eingabefelder |
| `.skeleton-circle` | Kreisförmiger Skeleton |
| `.skeleton-rectangle` | Rechteckiger Skeleton |
| `.skeleton-rounded` | Abgerundeter Skeleton |
| `.skeleton-pulse` | Pulsierender Skeleton-Effekt |
| `.skeleton-wave` | Welliger Skeleton-Effekt |

## Varianten

### Text-Skeleton

Der Text-Skeleton simuliert Textzeilen:

```html
<div class="skeleton-text">Ladender Textinhalt</div>
```

Varianten für unterschiedliche Textlängen:

```html
<div class="skeleton-text-short">Kurzer Text</div>
<div class="skeleton-text-medium">Mittellanger Text</div>
<div class="skeleton-text-long">Langer Text</div>
<div class="skeleton-text-paragraph">Textabsatz</div>
```

### Heading-Skeleton

Der Heading-Skeleton simuliert Überschriften:

```html
<div class="skeleton-heading">Ladende Überschrift</div>
```

Varianten für unterschiedliche Überschriftengrößen:

```html
<div class="skeleton-heading-h1">H1 Überschrift</div>
<div class="skeleton-heading-h2">H2 Überschrift</div>
<div class="skeleton-heading-h3">H3 Überschrift</div>
```

### Image-Skeleton

Der Image-Skeleton simuliert ein ladendes Bild:

```html
<div class="skeleton-image">Ladendes Bild</div>
```

Varianten für unterschiedliche Bildgrößen und -formate:

```html
<div class="skeleton-image-small">Kleines Bild</div>
<div class="skeleton-image-medium">Mittleres Bild</div>
<div class="skeleton-image-large">Großes Bild</div>
<div class="skeleton-image-square">Quadratisches Bild</div>
<div class="skeleton-image-landscape">Querformat-Bild</div>
<div class="skeleton-image-portrait">Hochformat-Bild</div>
```

### Avatar-Skeleton

Der Avatar-Skeleton simuliert ein ladendes Profilbild:

```html
<div class="skeleton-avatar">Ladendes Profilbild</div>
```

Varianten für unterschiedliche Avatar-Größen:

```html
<div class="skeleton-avatar-small">Kleiner Avatar</div>
<div class="skeleton-avatar-medium">Mittlerer Avatar</div>
<div class="skeleton-avatar-large">Großer Avatar</div>
```

### Button-Skeleton

Der Button-Skeleton simuliert einen ladenden Button:

```html
<div class="skeleton-button">Ladender Button</div>
```

Varianten für unterschiedliche Button-Stile:

```html
<div class="skeleton-button-small">Kleiner Button</div>
<div class="skeleton-button-medium">Mittlerer Button</div>
<div class="skeleton-button-large">Großer Button</div>
<div class="skeleton-button-rounded">Abgerundeter Button</div>
<div class="skeleton-button-pill">Pillenförmiger Button</div>
```

### Card-Skeleton

Der Card-Skeleton simuliert eine ladende Karte:

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

Der List-Skeleton simuliert eine ladende Liste:

```html
<ul class="skeleton-list">
  <li class="skeleton-list-item"></li>
  <li class="skeleton-list-item"></li>
  <li class="skeleton-list-item"></li>
</ul>
```

### Table-Skeleton

Der Table-Skeleton simuliert eine ladende Tabelle:

```html
<div class="skeleton-table">
  <div class="skeleton-table-header"></div>
  <div class="skeleton-table-row"></div>
  <div class="skeleton-table-row"></div>
  <div class="skeleton-table-row"></div>
</div>
```

### Form-Skeleton

Der Form-Skeleton simuliert ein ladendes Formular:

```html
<div class="skeleton-form">
  <div class="skeleton-input"></div>
  <div class="skeleton-input"></div>
  <div class="skeleton-button"></div>
</div>
```

## Animation-Varianten

Verschiedene Animationsstile für Skeleton-Effekte:

### Pulse-Animation

Die Pulse-Animation lässt den Skeleton pulsieren:

```html
<div class="skeleton-pulse">Pulsierender Skeleton</div>
```

### Wave-Animation

Die Wave-Animation erzeugt einen Welleneffekt über den Skeleton:

```html
<div class="skeleton-wave">Welliger Skeleton</div>
```

### Shimmer-Animation

Die Shimmer-Animation erzeugt einen Glanzeffekt über den Skeleton:

```html
<div class="skeleton-shimmer">Schimmernder Skeleton</div>
```

### Fade-Animation

Die Fade-Animation lässt den Skeleton ein- und ausblenden:

```html
<div class="skeleton-fade">Ein- und ausblendender Skeleton</div>
```

## Komplexe Komponenten

Skeleton-Effekte für komplexere UI-Komponenten:

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

## Anpassung

Die Skeleton-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Skeleton-Parameter */
  --skeleton-bg-color: #e0e0e0;
  --skeleton-highlight-color: #f0f0f0;
  
  /* Animation-Parameter */
  --skeleton-animation-duration: 1.5s;
  --skeleton-animation-timing: ease-in-out;
  
  /* Größenparameter */
  --skeleton-text-height: 1em;
  --skeleton-heading-height: 1.8em;
  --skeleton-image-height: 200px;
  --skeleton-avatar-size: 50px;
  --skeleton-button-height: 40px;
  
  /* Abstand-Parameter */
  --skeleton-spacing: 0.5rem;
  
  /* Radius-Parameter */
  --skeleton-border-radius: 4px;
  --skeleton-avatar-radius: 50%;
}

/* Für dunkle Themes */
.dark-theme {
  --skeleton-bg-color: #3a3a3a;
  --skeleton-highlight-color: #444444;
}
```

## JavaScript-Integration

Für dynamisches Umschalten von Skeleton-Effekten kann JavaScript verwendet werden:

```javascript
// Skeleton anzeigen, während Inhalte geladen werden
function showSkeletonLoader(containerId, isLoading) {
  const container = document.getElementById(containerId);
  
  if (isLoading) {
    // Tatsächlichen Inhalt ausblenden und Skeleton anzeigen
    container.querySelectorAll('.content').forEach(el => {
      el.style.display = 'none';
    });
    
    container.querySelectorAll('.skeleton').forEach(el => {
      el.style.display = 'block';
    });
  } else {
    // Skeleton ausblenden und tatsächlichen Inhalt anzeigen
    container.querySelectorAll('.skeleton').forEach(el => {
      el.style.display = 'none';
    });
    
    container.querySelectorAll('.content').forEach(el => {
      el.style.display = 'block';
    });
  }
}

// Beispiel für das Laden von Daten mit Fetch
function loadData(containerId, url) {
  const container = document.getElementById(containerId);
  
  // Skeleton anzeigen
  showSkeletonLoader(containerId, true);
  
  // Daten laden
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Daten in den Container einfügen
      renderData(container, data);
      
      // Skeleton ausblenden
      showSkeletonLoader(containerId, false);
    })
    .catch(error => {
      console.error('Fehler beim Laden der Daten:', error);
      
      // Skeleton ausblenden und Fehlermeldung anzeigen
      showSkeletonLoader(containerId, false);
      container.innerHTML = '<div class="error">Fehler beim Laden der Daten.</div>';
    });
}
```

## Barrierefreiheit

Bei der Verwendung von Skeleton-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **ARIA-Attribute**: Verwenden Sie geeignete ARIA-Attribute, um anzuzeigen, dass Inhalte geladen werden
2. **Status-Updates**: Informieren Sie Screenreader über den Ladezustand
3. **Kontrast**: Stellen Sie sicher, dass Skeleton-Elemente ausreichenden Kontrast zum Hintergrund haben
4. **Animation**: Respektieren Sie die Einstellung `prefers-reduced-motion`

```html
<!-- Barrierefreier Skeleton-Loader -->
<div 
  class="skeleton-card" 
  role="status" 
  aria-busy="true" 
  aria-label="Lädt Inhalte"
>
  <div class="skeleton-image"></div>
  <div class="skeleton-heading"></div>
  <div class="skeleton-text"></div>
  <div class="visually-hidden">Inhalte werden geladen, bitte warten</div>
</div>
```

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .skeleton-pulse,
  .skeleton-wave,
  .skeleton-shimmer,
  .skeleton-fade {
    animation: none !important;
  }
}
```

## Animation-Implementierung

Beispielimplementierung der Skeleton-Animationen:

```css
/* Pulse-Animation */
@keyframes skeletonPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.skeleton-pulse {
  animation: skeletonPulse var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}

/* Wave-Animation */
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

/* Shimmer-Animation */
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

/* Fade-Animation */
@keyframes skeletonFade {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.4; }
}

.skeleton-fade {
  animation: skeletonFade var(--skeleton-animation-duration) var(--skeleton-animation-timing) infinite;
}
```

## Browser-Kompatibilität

Die meisten Skeleton-Effekte sind mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Grundlegende Skeletons | ✓ | ✓ | ✓ | ✓ | ✓ |
| Gradient-Animationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Komplexe Animationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte Effekte

- [Loading-Effekte](/docs/effects/animation/loading.md) - Animierte Ladeeffekte
- [Animation-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Pulse-Effekte](/docs/effects/visual/pulse.md) - Pulseffekte für Elemente 
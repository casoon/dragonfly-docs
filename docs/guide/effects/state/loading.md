---
title: Lade-Effekte
category: Guide
---

# Lade-Effekte

Die `loading.css` Datei bietet eine umfassende Sammlung von Ladeanimationen und -effekten, die während Wartezeiten in Ihrer Anwendung eingesetzt werden können. Diese visuellen Indikatoren geben Nutzern Feedback darüber, dass ein Prozess im Hintergrund ausgeführt wird und verbessern so die wahrgenommene Reaktionsfähigkeit Ihrer Benutzeroberfläche.

## Übersicht

Lade-Effekte sind ein wesentlicher Bestandteil moderner Benutzeroberflächen. Sie überbrücken die Zeit, während der Nutzer auf den Abschluss eines Prozesses wartet, und geben visuelles Feedback darüber, dass die Anwendung noch reagiert. Die Casoon UI Library bietet eine Vielzahl von Lade-Effekten für verschiedene Anwendungsfälle und Designstile.

## Basis-Spinner

```html
<!-- Standard-Spinner -->
<div class="spinner">Standard-Spinner</div>
<div class="spinner-sm">Kleiner Spinner</div>
<div class="spinner-lg">Großer Spinner</div>

<!-- Spinner mit verschiedenen Geschwindigkeiten -->
<div class="spinner spinner-slow">Langsamer Spinner</div>
<div class="spinner spinner-fast">Schneller Spinner</div>

<!-- Spinner-Varianten -->
<div class="spinner-border">Rahmen-Spinner</div>
<div class="spinner-grow">Wachsender Spinner</div>
<div class="spinner-pulse">Pulsierender Spinner</div>
<div class="spinner-dots">Punkte-Spinner</div>
<div class="spinner-wave">Wellen-Spinner</div>
```

## Farbvarianten für Spinner

```html
<!-- Farbige Spinner -->
<div class="spinner-primary">Primärfarbener Spinner</div>
<div class="spinner-secondary">Sekundärfarbener Spinner</div>
<div class="spinner-accent">Akzentfarbener Spinner</div>
<div class="spinner-success">Erfolgs-Spinner</div>
<div class="spinner-warning">Warnungs-Spinner</div>
<div class="spinner-error">Fehler-Spinner</div>
<div class="spinner-info">Info-Spinner</div>

<!-- Spinner mit benutzerdefinierter Farbe -->
<div class="spinner" style="--spinner-color: #8a2be2;">Benutzerdefinierte Farbe</div>
```

## Fortschrittsanzeigen

```html
<!-- Horizontale Fortschrittsbalken -->
<div class="progress">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 50%">50%</div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-animated" style="width: 75%">75%</div>
</div>

<!-- Kreisförmige Fortschrittsanzeigen -->
<div class="progress-circle" style="--progress: 25">25%</div>
<div class="progress-circle" style="--progress: 50">50%</div>
<div class="progress-circle" style="--progress: 75">75%</div>

<!-- Unbestimmte Fortschrittsanzeigen -->
<div class="progress-indeterminate">Unbestimmter Fortschritt</div>
<div class="progress-indeterminate-circle">Unbestimmter kreisförmiger Fortschritt</div>
```

## Skeleton-Loading

```html
<!-- Basis-Skeleton-Loader -->
<div class="skeleton">Basis-Skeleton</div>
<div class="skeleton-text">Textzeilen-Skeleton</div>
<div class="skeleton-circle">Kreisförmiger Skeleton</div>
<div class="skeleton-image">Bild-Skeleton</div>

<!-- Animierte Skeletons -->
<div class="skeleton skeleton-pulse">Pulsierender Skeleton</div>
<div class="skeleton skeleton-wave">Wellen-Skeleton</div>
<div class="skeleton skeleton-shimmer">Schimmernder Skeleton</div>

<!-- Komplexe Skeletons -->
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-text"></div>
</div>

<div class="skeleton-profile">
  <div class="skeleton-circle"></div>
  <div class="skeleton-text"></div>
</div>

<div class="skeleton-table">
  <div class="skeleton-row"></div>
  <div class="skeleton-row"></div>
  <div class="skeleton-row"></div>
</div>
```

## Fortgeschrittene Lade-Animationen

```html
<!-- Spezielle Animationen -->
<div class="loader-ripple">Welleneffekt-Loader</div>
<div class="loader-ellipsis">Punkte-Loader</div>
<div class="loader-grid">Gitter-Loader</div>
<div class="loader-roller">Rollen-Loader</div>
<div class="loader-orbit">Orbit-Loader</div>
<div class="loader-ring">Ring-Loader</div>
<div class="loader-hourglass">Sanduhr-Loader</div>
<div class="loader-dual-ring">Doppelring-Loader</div>
```

## Kontextbezogene Loader

```html
<!-- Button-Loading-Status -->
<button class="button button-loading">
  <span class="button-text">Speichern</span>
  <span class="button-loader"></span>
</button>

<!-- Button mit automatischem Loader-Austausch -->
<button class="button is-loading">
  <span class="button-icon-normal">↑</span>
  <span class="button-icon-loading"></span>
  Hochladen
</button>

<!-- Formular-Eingabefeld mit Ladezustand -->
<div class="input-group">
  <input type="text" class="input is-loading" placeholder="Suchen...">
  <div class="input-loader"></div>
</div>

<!-- Karte im Ladezustand -->
<div class="card is-loading">
  <div class="card-loader"></div>
  <div class="card-content">Karteninhalt wird geladen...</div>
</div>

<!-- Seitenbereich im Ladezustand -->
<div class="section is-loading">
  <div class="section-loader"></div>
  <div class="section-content">Inhalte werden geladen...</div>
</div>
```

## Vollbild-Ladeeffekte

```html
<!-- Overlay mit Loader -->
<div class="loading-overlay">
  <div class="spinner-lg"></div>
</div>

<!-- Vollbild-Loader mit Text -->
<div class="loading-fullscreen">
  <div class="spinner-lg"></div>
  <div class="loading-text">Bitte warten...</div>
</div>

<!-- Seitenübergangs-Loader -->
<div class="loading-page-transition">
  <div class="loader-pulse"></div>
</div>

<!-- Initialer App-Ladeeffekt -->
<div class="loading-app-init">
  <div class="app-logo"></div>
  <div class="progress-bar-animated"></div>
</div>
```

## Ladezustands-Kombinationen

```html
<!-- Ladebutton mit Fortschritt -->
<button class="button button-loading-progress">
  <span class="button-text">Hochladen</span>
  <span class="progress-circle" style="--progress: 65"></span>
</button>

<!-- Karte mit Skeleton-Inhalt -->
<div class="card">
  <div class="card-header">
    <h3>Daten</h3>
  </div>
  <div class="card-body is-loading">
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
  </div>
</div>

<!-- Animierter Übergang von Skeleton zu Inhalt -->
<div class="content-loader">
  <div class="skeleton-content" aria-hidden="true">
    <!-- Skeleton-Inhalte -->
  </div>
  <div class="real-content" hidden>
    <!-- Tatsächliche Inhalte -->
  </div>
</div>
```

## CSS-Variablen für Lade-Effekte

Die Ladeeffekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Spinner-Basis-Parameter */
  --spinner-size-sm: 1rem;
  --spinner-size-md: 2rem;
  --spinner-size-lg: 3rem;
  --spinner-width: 0.25em;
  --spinner-color: var(--color-primary);
  
  /* Spinner-Animations-Parameter */
  --spinner-animation-duration: 0.75s;
  --spinner-animation-timing: linear;
  --spinner-animation-iteration: infinite;
  
  /* Fortschrittsbalken-Parameter */
  --progress-height: 0.5rem;
  --progress-background: var(--color-gray-200);
  --progress-color: var(--color-primary);
  --progress-border-radius: var(--radius-sm);
  --progress-animation-duration: 1s;
  
  /* Kreisförmige Fortschrittsanzeige */
  --progress-circle-size: 4rem;
  --progress-circle-width: 0.25rem;
  --progress-circle-background: var(--color-gray-200);
  --progress-circle-color: var(--color-primary);
  
  /* Skeleton-Parameter */
  --skeleton-background: var(--color-gray-200);
  --skeleton-highlight: var(--color-gray-100);
  --skeleton-border-radius: var(--radius-sm);
  --skeleton-animation-duration: 1.5s;
}
```

## Barrierefreiheit für Ladeeffekte

Für eine barrierefreie Implementierung von Ladeeffekten sollten Sie folgende Aspekte beachten:

```html
<!-- Semantisches Markup mit ARIA-Attributen -->
<div class="spinner" role="status" aria-live="polite">
  <span class="sr-only">Lädt...</span>
</div>

<div class="progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>

<!-- Reduzierte Bewegung berücksichtigen -->
<div class="skeleton skeleton-shimmer motion-safe">
  <div class="skeleton-text"></div>
</div>

<div class="skeleton skeleton-static motion-reduce">
  <div class="skeleton-text"></div>
</div>
```

```css
/* Reduzierte Bewegung in CSS */
@media (prefers-reduced-motion: reduce) {
  .spinner,
  .progress-bar-animated,
  .skeleton-pulse,
  .skeleton-wave,
  .skeleton-shimmer {
    animation: none !important;
  }
  
  .loader-ripple,
  .loader-ellipsis,
  .loader-grid,
  .loader-roller,
  .loader-orbit {
    opacity: 0.5;
    animation: none !important;
  }
}

/* Alternative für Nutzer mit Animationsempfindlichkeit */
.motion-safe {
  display: none;
}

.motion-reduce {
  display: block;
}

@media (prefers-reduced-motion: no-preference) {
  .motion-safe {
    display: block;
  }
  
  .motion-reduce {
    display: none;
  }
}
```

## Zeit- und Kontext-bewusste Loader

```html
<!-- Schneller Loader für kurze Wartezeiten -->
<div class="loader-instant">
  <div class="spinner-sm spinner-fast"></div>
</div>

<!-- Standard-Loader für mittlere Wartezeiten -->
<div class="loader-standard">
  <div class="spinner"></div>
</div>

<!-- Fortschrittsbasierter Loader für längere Wartezeiten -->
<div class="loader-extended">
  <div class="progress-bar-animated"></div>
  <div class="loading-message">Daten werden verarbeitet...</div>
</div>

<!-- Adaptiver Loader mit automatischem Timeout -->
<div class="loader-adaptive" data-timeout="3000">
  <div class="loader-phase-1">
    <div class="spinner-sm"></div>
  </div>
  <div class="loader-phase-2" hidden>
    <div class="progress-indeterminate"></div>
    <div class="loading-message">Dies dauert etwas länger als erwartet...</div>
  </div>
</div>
```

## Praktische Beispiele

### Lade-Button mit Zustandswechsel

```html
<button class="button primary" id="submit-button">
  <span class="button-content">
    <span class="button-icon">↑</span>
    <span class="button-text">Datei hochladen</span>
  </span>
  <span class="button-loading" hidden>
    <span class="spinner-sm"></span>
    <span class="loading-text">Lädt...</span>
  </span>
  <span class="button-success" hidden>
    <span class="success-icon">✓</span>
    <span class="success-text">Hochgeladen</span>
  </span>
</button>
```

### Daten-Tabelle mit Skeletons

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody class="table-loading">
      <tr class="skeleton-row">
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
      </tr>
      <tr class="skeleton-row">
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
      </tr>
      <tr class="skeleton-row">
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
        <td><div class="skeleton"></div></td>
      </tr>
    </tbody>
    <tbody class="table-content" hidden>
      <!-- Tatsächliche Tabelleninhalte -->
    </tbody>
  </table>
</div>
```

### Karten-Layout mit Skeleton-Loader

```html
<div class="card-grid">
  <!-- Skeleton-Karte -->
  <div class="card skeleton-card">
    <div class="card-header">
      <div class="skeleton skeleton-text"></div>
    </div>
    <div class="card-image">
      <div class="skeleton"></div>
    </div>
    <div class="card-body">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
    <div class="card-footer">
      <div class="skeleton skeleton-button"></div>
    </div>
  </div>
  
  <!-- Weitere Skeleton-Karten -->
  <!-- ... -->
</div>
```

## Best Practices

1. **Passenden Typ wählen**: Verwenden Sie Spinner für kurze, unbestimmte Operationen, Fortschrittsanzeigen für längere Operationen mit bekanntem Status und Skeletons für Inhaltsladung
2. **Verwenden Sie angemessene Verzögerungen**: Zeigen Sie Loader nicht sofort an, sondern nach einer kurzen Verzögerung (etwa 200-300ms), um Flackern bei schnellen Operationen zu vermeiden
3. **Kontext erhalten**: Zeigen Sie so viel der Benutzeroberfläche wie möglich während des Ladevorgangs, um den Kontext zu erhalten
4. **Fehlerzustände berücksichtigen**: Stellen Sie sicher, dass Ladeeffekte in Fehlerzustände übergehen können und nicht ewig laufen
5. **Tastaturzugänglichkeit beachten**: Stellen Sie sicher, dass Ladeeffekte nicht die Tastaturnavigation behindern (z.B. indem sie den Fokus stehlen)
6. **Informativität sicherstellen**: Fügen Sie bei längeren Ladevorgängen informative Texte hinzu, die den Nutzer über den Fortschritt informieren 
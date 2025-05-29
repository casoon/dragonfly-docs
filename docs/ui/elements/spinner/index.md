---
title: Spinner Element
outline: deep
---


# Spinner

Das Spinner-Element bietet Ladeanzeigen und Animationen für asynchrone Prozesse. Spinner informieren Benutzer darüber, dass eine Operation im Hintergrund ausgeführt wird, und verbessern so die wahrgenommene Reaktionsfähigkeit der Benutzeroberfläche.

## Installation

Das Spinner-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Spinner-Komponente */
@import '@casoon/ui-lib/components/spinner.css';
```

## Basic Usage

```html
<div class="spinner"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

## Sizesvarianten

### Extra Klein (XS)

```html
<div class="spinner spinner--xs"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 2px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 0.75rem; width: 0.75rem; margin: 1rem auto;">
  </div>
</div>

### Klein (SM)

```html
<div class="spinner spinner--sm"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 2px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1rem; width: 1rem; margin: 1rem auto;">
  </div>
</div>

### Mittel (MD, Standard)

```html
<div class="spinner spinner--md"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Groß (LG)

```html
<div class="spinner spinner--lg"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 4px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 2rem; width: 2rem; margin: 1rem auto;">
  </div>
</div>

### Extra Groß (XL)

```html
<div class="spinner spinner--xl"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 5px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 3rem; width: 3rem; margin: 1rem auto;">
  </div>
</div>

## Stil-Variants

### Ring (Standard)

```html
<div class="spinner spinner--ring"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Punkte

```html
<div class="spinner spinner--dots"></div>
```

<div class="example-wrapper">
  <div style="display: flex; justify-content: center; gap: 0.5rem; margin: 1rem auto;">
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem; animation-delay: -0.32s;"></div>
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem; animation-delay: -0.16s;"></div>
    <div style="animation: bounce 1.4s infinite ease-in-out both; background-color: #3b82f6; border-radius: 50%; height: 0.5rem; width: 0.5rem;"></div>
  </div>
</div>

<style>
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
}
</style>

### Pulsieren

```html
<div class="spinner spinner--pulse"></div>
```

<div class="example-wrapper">
  <div style="animation: pulse 1.5s infinite; background-color: #3b82f6; border-radius: 50%; height: 1.5rem; width: 1.5rem; margin: 1rem auto;"></div>
</div>

<style>
@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.7;
  }
}
</style>

### Springen

```html
<div class="spinner spinner--bounce"></div>
```

<div class="example-wrapper">
  <div style="animation: bounce-up 0.6s infinite alternate; background-color: #3b82f6; border-radius: 50%; height: 1rem; width: 1rem; margin: 1rem auto;"></div>
</div>

<style>
@keyframes bounce-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>

## Farbvarianten

### Primär

```html
<div class="spinner spinner--primary"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(59, 130, 246, 0.2); border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Sekundär

```html
<div class="spinner spinner--secondary"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(107, 114, 128, 0.2); border-radius: 50%; border-top-color: #6b7280; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Hell

```html
<div class="spinner spinner--light"></div>
```

<div class="example-wrapper" style="background-color: #4b5563; padding: 1rem;">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(255, 255, 255, 0.2); border-radius: 50%; border-top-color: #ffffff; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

### Dunkel

```html
<div class="spinner spinner--dark"></div>
```

<div class="example-wrapper">
  <div style="animation: spin 0.6s linear infinite; border: 3px solid rgba(17, 24, 39, 0.2); border-radius: 50%; border-top-color: #111827; height: 1.5rem; width: 1.5rem; margin: 1rem auto;">
  </div>
</div>

## Mit Text

```html
<div class="spinner-container">
  <div class="spinner"></div>
  <span class="spinner-text">Lädt...</span>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
    <div style="animation: spin 0.6s linear infinite; border: 3px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 1.5rem; width: 1.5rem;"></div>
    <span style="font-size: 0.875rem; color: #4b5563;">Lädt...</span>
  </div>
</div>

## Vollbildschirm-Overlay

```html
<div class="spinner-overlay">
  <div class="spinner spinner--lg"></div>
</div>
```

<div class="example-wrapper">
  <div style="position: relative; height: 100px; background-color: #f3f4f6; border-radius: 0.375rem; overflow: hidden;">
    <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center; background-color: rgba(255, 255, 255, 0.8);">
      <div style="animation: spin 0.6s linear infinite; border: 4px solid #d1d5db; border-radius: 50%; border-top-color: #3b82f6; height: 2rem; width: 2rem;"></div>
    </div>
  </div>
</div>

## Anpassung

Der Spinner kann über CSS Variables angepasst werden:

```css
:root {
  --color-primary: #3b82f6;     /* Primärfarbe für den Spinner */
  --color-gray-300: #d1d5db;    /* Grundfarbe für den Spinner-Hintergrund */
}
```

## Accessibility

Für eine bessere Accessibility beachten Sie bitte folgende Punkte:

- Fügen Sie geeignete ARIA-Attribute hinzu, um den Ladezustand für Screenreader anzukündigen
- Verwenden Sie beschreibenden Text, der angibt, was geladen wird (es sei denn, es ist aus dem Kontext offensichtlich)
- Stellen Sie sicher, dass ein ausreichender Kontrast zwischen dem Spinner und seinem Hintergrund besteht
- Fügen Sie ein beschreibendes Label mit `aria-label` oder `aria-labelledby` hinzu

```html
<div class="spinner" role="status" aria-label="Inhalt wird geladen"></div>

<!-- Oder mit sichtbarem Text -->
<div class="spinner-container" role="status">
  <div class="spinner"></div>
  <span class="spinner-text">Benutzerdaten werden geladen...</span>
  <span class="sr-only">Bitte warten Sie, während wir Ihre Inhalte laden</span>
</div>
```

## Bewährte Praktiken

- Verwenden Sie Spinner, um anzuzeigen, dass Inhalte geladen werden oder eine Aktion verarbeitet wird
- Halten Sie Animationen subtil und nicht ablenkend
- Verwenden Sie für längere Vorgänge Fortschrittsanzeigen anstelle von unbestimmten Spinnern
- Platzieren Sie Spinner an einer logischen Stelle (wo der Inhalt erscheinen wird)
- Verwenden Sie für das Laden auf Seitenebene einen Vollbild-Overlay-Spinner
- Vermeiden Sie die gleichzeitige Usage mehrerer Spinner in derselben Ansicht
- Erwägen Sie das Hinzufügen einer Timeout-Nachricht für lang andauernde Vorgänge

## Browser-Kompatibilität

Der Spinner ist mit allen modernen Browsern kompatibel:

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Animation | ✅ | ✅ | ✅ | ✅ |
| CSS-Animationen | ✅ | ✅ | ✅ | ✅ |
| Variants | ✅ | ✅ | ✅ | ✅ |

## Integration mit Icons

Sie können auch Icons als Spinner verwenden, indem Sie die entsprechenden Icon-Klassen hinzufügen:

```html
<!-- Tabler Icon als Spinner -->
<i class="ti ti-loader ti-spin"></i>

<!-- Lucide Icon als Spinner -->
<i class="lucide-loader lucide-spin"></i>
``` 
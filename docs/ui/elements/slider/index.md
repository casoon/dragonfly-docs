---
title: Slider Element
outline: deep
---


# Slider

Das Slider-Element bietet einen Slider für die Auswahl von Werten innerhalb eines bestimmten Bereichs. Slider sind intuitive Bedienelemente für die Eingabe numerischer Werte und bieten eine visuelle Darstellung des ausgewählten Wertes.

## Installation

Das Slider-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Slider-Komponente */
@import '@casoon/ui-lib/components/slider.css';
```

## Basic Usage

```html
<input type="range" class="slider" min="0" max="100" value="50">
```

<div class="example-wrapper">
  <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
</div>

## Variants

### Mit Wertebereichsanzeige

```html
<div class="slider-container">
  <input type="range" class="slider" min="0" max="100" value="50">
  <div class="labels">
    <span>0</span>
    <span>50</span>
    <span>100</span>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; flex-direction: column; margin: 0.75rem 0; width: 100%;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.5rem 0; width: 100%;" min="0" max="100" value="50">
    <div style="color: #4b5563; display: flex; font-size: 0.75rem; justify-content: space-between; margin-top: 0.25rem;">
      <span>0</span>
      <span>50</span>
      <span>100</span>
    </div>
  </div>
</div>

### Mit aktuellem Wert

```html
<div class="slider-container">
  <input type="range" class="slider" min="0" max="100" value="50">
  <output class="value">50</output>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; flex-direction: column; margin: 0.75rem 0; width: 100%;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.5rem 0; width: 100%;" min="0" max="100" value="50">
    <output style="align-self: flex-end; color: #1f2937; font-size: 0.875rem; font-weight: 500; margin-top: 0.25rem;">50</output>
  </div>
</div>

### Variants nach Farbe

```html
<input type="range" class="slider primary" min="0" max="100" value="50">
<input type="range" class="slider secondary" min="0" max="100" value="50">
<input type="range" class="slider success" min="0" max="100" value="50">
<input type="range" class="slider danger" min="0" max="100" value="50">
```

<div class="example-wrapper">
  <div style="margin-bottom: 1rem;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
  <div style="margin-bottom: 1rem;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
  <div style="margin-bottom: 1rem;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
  <div>
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
</div>

### Sizesvarianten

```html
<input type="range" class="slider sm" min="0" max="100" value="50">
<input type="range" class="slider" min="0" max="100" value="50">
<input type="range" class="slider lg" min="0" max="100" value="50">
```

<div class="example-wrapper">
  <div style="margin-bottom: 1rem;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.125rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
  <div style="margin-bottom: 1rem;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
  <div>
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.375rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
  </div>
</div>

### Bereichsslider (Range)

```html
<div class="slider-range">
  <input type="range" class="slider lower" min="0" max="100" value="30">
  <input type="range" class="slider upper" min="0" max="100" value="70">
  <div class="track"></div>
</div>
```

<div class="example-wrapper">
  <div style="height: 2rem; margin: 0.75rem 0; position: relative; width: 100%;">
    <input type="range" style="appearance: none; background: none; cursor: pointer; margin: 0.75rem 0; position: absolute; top: 0; width: 100%; z-index: 1;" min="0" max="100" value="30">
    <input type="range" style="appearance: none; background: none; cursor: pointer; margin: 0.75rem 0; position: absolute; top: 0; width: 100%; z-index: 1;" min="0" max="100" value="70">
    <div style="background-color: #d1d5db; border-radius: 9999px; height: 0.25rem; left: 0; position: absolute; right: 0; top: 0.875rem; z-index: 0;">
      <span style="background-color: #3b82f6; border-radius: 9999px; display: block; height: 100%; left: 30%; position: absolute; right: 30%;"></span>
    </div>
  </div>
</div>

## Anpassung

Das Slider-Element kann über CSS Variables angepasst werden:

```css
:root {
  --color-primary: #3b82f6;        /* Primärfarbe für den Thumb */
  --color-secondary: #6b7280;      /* Sekundärfarbe Variante */
  --color-success: #10b981;        /* Erfolgs-Variante */
  --color-error: #ef4444;          /* Fehler-Variante */
  --color-gray-300: #d1d5db;       /* Slider-Track-Farbe */
  --color-gray-600: #4b5563;       /* Label-Textfarbe */
  --color-gray-800: #1f2937;       /* Wert-Textfarbe */
  --radius-full: 9999px;           /* Border-Radius für Slider */
  --font-size-xs: 0.75rem;         /* Labels-Textgröße */
  --font-size-sm: 0.875rem;        /* Wert-Textgröße */
  --font-weight-medium: 500;       /* Wert-Textgewicht */
  --space-1: 0.25rem;              /* Kleiner Abstand */
  --space-2: 0.5rem;               /* Mittlerer Abstand */
  --space-3: 0.75rem;              /* Großer Abstand */
  --transition-fast: 0.15s ease;   /* Übergangsgeschwindigkeit */
}
```

## Accessibility

Für eine bessere Accessibility beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein Label, das mit dem Slider-Element verknüpft ist
- Fügen Sie aussagekräftige Attributwerte für `min`, `max` und `step` hinzu
- Stellen Sie einen ausreichenden Kontrast zwischen Thumb und Track sicher
- Implementieren Sie eine Tastaturnavigation
- Fügen Sie bei Bedarf ARIA-Attribute hinzu, besonders für komplexere Slider-Implementierungen

## Bewährte Praktiken

- Verwenden Sie Slider für kontinuierliche Wertebereiche, bei denen die genaue Auswahl weniger wichtig ist
- Zeigen Sie den aktuellen Wert an, wenn eine präzise Eingabe wichtig ist
- Verwenden Sie angemessene Schrittgrößen (step-Attribut) für die Genauigkeit der Auswahl
- Passen Sie die Größe des Sliders an den Kontext und die Wichtigkeit an
- Berücksichtigen Sie die Touch-Bedienung bei der Gestaltung von Slidern für mobile Geräte

## Browser-Kompatibilität

Das Slider-Element ist mit allen modernen Browsern kompatibel, jedoch kann die Darstellung zwischen verschiedenen Browsern leicht variieren.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Thumbs | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Tracks | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

## JavaScript-Integration

Für eine vollständige Implementierung mit dynamischer Wertanzeige kann JavaScript verwendet werden:

```javascript
// Slider mit Wertanzeige
const slider = document.querySelector('.slider');
const output = document.querySelector('.value');

// Initialen Wert setzen
output.textContent = slider.value;

// Wert bei Änderung aktualisieren
slider.addEventListener('input', function() {
  output.textContent = this.value;
});
```

## Komplexe Use Cases

### Doppelter Bereichsslider mit JavaScript

```javascript
// Bereichsslider mit zwei Thumbs
const lowerSlider = document.querySelector('.slider.lower');
const upperSlider = document.querySelector('.slider.upper');
const track = document.querySelector('.track');

// Event-Listener für den unteren Slider
lowerSlider.addEventListener('input', function() {
  // Sicherstellen, dass der untere Wert nicht größer als der obere ist
  if (parseInt(this.value) >= parseInt(upperSlider.value)) {
    this.value = parseInt(upperSlider.value) - 1;
  }
  
  // Track-Anzeige aktualisieren
  updateTrack();
});

// Event-Listener für den oberen Slider
upperSlider.addEventListener('input', function() {
  // Sicherstellen, dass der obere Wert nicht kleiner als der untere ist
  if (parseInt(this.value) <= parseInt(lowerSlider.value)) {
    this.value = parseInt(lowerSlider.value) + 1;
  }
  
  // Track-Anzeige aktualisieren
  updateTrack();
});

// Funktion zur Aktualisierung des farbigen Tracks
function updateTrack() {
  const lowerVal = parseInt(lowerSlider.value);
  const upperVal = parseInt(upperSlider.value);
  const max = parseInt(lowerSlider.max);
  
  // Berechnung der prozentualen Positionen
  const lowerPercent = (lowerVal / max) * 100;
  const upperPercent = 100 - (upperVal / max) * 100;
  
  // Anwendung auf den farbigen Track
  track.style.background = `linear-gradient(
    to right,
    #d1d5db 0%,
    #d1d5db ${lowerPercent}%,
    #3b82f6 ${lowerPercent}%,
    #3b82f6 ${100 - upperPercent}%,
    #d1d5db ${100 - upperPercent}%,
    #d1d5db 100%
  )`;
}
``` 
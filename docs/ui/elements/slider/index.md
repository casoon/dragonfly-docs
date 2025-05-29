---
title: Slider element
outline: deep
---


# Slider

the Slider-element bietet einen Slider for the selection from Werten within eines bestimmten Bereichs. Slider sind intuitive Bedienelemente for the input numerischer values and bieten a visuelle display des ausgewahlten Wertes.

## Installation

the Slider-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Slider-component */
@import '@casoon/ui-lib/components/slider.css';
```

## Basic Usage

```html
<input type="range" class="slider" min="0" max="100" value="50">
```

<div class="example-wrappers">
  <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.75rem 0; width: 100%;" min="0" max="100" value="50">
</div>

## Variants

### with Wertebereichsanzeige

```html
<div class="slider-containers">
  <input type="range" class="slider" min="0" max="100" value="50">
  <div class="labels">
    <span>0</span>
    <span>50</span>
    <span>100</span>
  </div>
</div>
```

<div class="example-wrappers">
  <div style="display: flex; flex-direction: column; margin: 0.75rem 0; width: 100%;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.5rem 0; width: 100%;" min="0" max="100" value="50">
    <div style="color: #4b5563; display: flex; font-size: 0.75rem; justify-content: space-between; margin-top: 0.25rem;">
      <span>0</span>
      <span>50</span>
      <span>100</span>
    </div>
  </div>
</div>

### with aktuellem value

```html
<div class="slider-containers">
  <input type="range" class="slider" min="0" max="100" value="50">
  <output class="value">50</output>
</div>
```

<div class="example-wrappers">
  <div style="display: flex; flex-direction: column; margin: 0.75rem 0; width: 100%;">
    <input type="range" style="appearance: none; background-color: #d1d5db; border-radius: 9999px; cursor: pointer; height: 0.25rem; margin: 0.5rem 0; width: 100%;" min="0" max="100" value="50">
    <output style="align-self: flex-end; color: #1f2937; font-size: 0.875rem; font-weight: 500; margin-top: 0.25rem;">50</output>
  </div>
</div>

### Variants after color

```html
<input type="range" class="slider primary" min="0" max="100" value="50">
<input type="range" class="slider secondary" min="0" max="100" value="50">
<input type="range" class="slider success" min="0" max="100" value="50">
<input type="range" class="slider danger" min="0" max="100" value="50">
```

<div class="example-wrappers">
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

<div class="example-wrappers">
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

<div class="example-wrappers">
  <div style="height: 2rem; margin: 0.75rem 0; position: relative; width: 100%;">
    <input type="range" style="appearance: none; background: none; cursor: pointer; margin: 0.75rem 0; position: absolute; top: 0; width: 100%; z-index: 1;" min="0" max="100" value="30">
    <input type="range" style="appearance: none; background: none; cursor: pointer; margin: 0.75rem 0; position: absolute; top: 0; width: 100%; z-index: 1;" min="0" max="100" value="70">
    <div style="background-color: #d1d5db; border-radius: 9999px; height: 0.25rem; left: 0; position: absolute; right: 0; top: 0.875rem; z-index: 0;">
      <span style="background-color: #3b82f6; border-radius: 9999px; display: block; height: 100%; left: 30%; position: absolute; right: 30%;"></span>
    </div>
  </div>
</div>

## Anpassung

the Slider-element kann over CSS Variables angepasst become:

```css
:root {
  --color-primary: #3b82f6;        /* Primarfarbe for den Thumb */
  --color-secondary: #6b7280;      /* Sekundarfarbe Variante */
  --color-success: #10b981;        /* Erfolgs-Variante */
  --color-error: #ef4444;          /* errors-Variante */
  --color-gray-300: #d1d5db;       /* Slider-Track-color */
  --color-gray-600: #4b5563;       /* Label-Textfarbe */
  --color-gray-800: #1f2937;       /* value-Textfarbe */
  --radius-full: 9999px;           /* Border-Radius for Slider */
  --font-size-xs: 0.75rem;         /* Labels-Textgrosse */
  --font-size-sm: 0.875rem;        /* value-Textgrosse */
  --font-weight-medium: 500;       /* value-Textgewicht */
  --space-1: 0.25rem;              /* smaller spacing */
  --space-2: 0.5rem;               /* Mittlerer spacing */
  --space-3: 0.75rem;              /* Grosser spacing */
  --transition-fast: 0.15s ease;   /* Ubergangsgeschwindigkeit */
}
```

## Accessibility

for a bessere Accessibility Please note please folgende Punkte:

- use them immer a Label, the with dem Slider-element verknupft ist
- Fugen them aussagekraftige Attributwerte for `min`, `max` and `step` hinzu
- Stellen them einen ausreichenden Kontrast between Thumb and Track sicher
- implement them a Tastaturnavigation
- Fugen them at Bedarf ARIA-attributes hinzu, besonders for komplexere Slider-Implementierungen

## Bewahrte Praktiken

- use them Slider for kontinuierliche Wertebereiche, at denen the genaue selection less important ist
- Zeigen them den aktuellen value on, if a prazise input important ist
- use them angemessene Schrittgrossen (step-attribute) for the Genauigkeit the selection
- Passen them the size des Sliders on den Kontext and the importance on
- Berucksichtigen them the Touch-Bedienung at the Gestaltung from Slidern for mobile Gerate

## Browser-Kompatibilitat

the Slider-element ist with allen modernen Browsern kompatibel, however kann the display between verschiedenen Browsern leicht variieren.

| function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Thumbs | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Tracks | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

## JavaScript-Integration

for a vollstandige Implementierung with dynamischer Wertanzeige kann JavaScript verwendet become:

```javascript
// Slider with Wertanzeige
const slider = document.querySelector('.slider');
const output = document.querySelector('.value');

// Initialen value setzen
output.textContent = slider.value;

// value at Anderung aktualisieren
slider.addEventListener('input', function() {
  output.textContent = this.value;
});
```

## Komplexe Use Cases

### Doppelter Bereichsslider with JavaScript

```javascript
// Bereichsslider with zwei Thumbs
const lowerSlider = document.querySelector('.slider.lower');
const upperSlider = document.querySelector('.slider.upper');
const track = document.querySelector('.track');

// Event-Listener for den unteren Slider
lowerSlider.addEventListener('input', function() {
  // Sicherstellen, that the untere value not grosser as the obere ist
  if (parseInt(this.value) >= parseInt(upperSlider.value)) {
    this.value = parseInt(upperSlider.value) - 1;
  }
  
  // Track-Anzeige aktualisieren
  updateTrack();
});

// Event-Listener for den oberen Slider
upperSlider.addEventListener('input', function() {
  // Sicherstellen, that the obere value not smaller as the untere ist
  if (parseInt(this.value) <= parseInt(lowerSlider.value)) {
    this.value = parseInt(lowerSlider.value) + 1;
  }
  
  // Track-Anzeige aktualisieren
  updateTrack();
});

// function zur Aktualisierung des farbigen Tracks
function updateTrack() {
  const lowerVal = parseInt(lowerSlider.value);
  const upperVal = parseInt(upperSlider.value);
  const max = parseInt(lowerSlider.max);
  
  // Berechnung the prozentualen positions
  const lowerPercent = (lowerVal / max) * 100;
  const upperPercent = 100 - (upperVal / max) * 100;
  
  // Anwendung on den farbigen Track
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
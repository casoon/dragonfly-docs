---
title: Blend Effects
category: Effects
---

# Blend-Effekte

Die Blend-Effekte der Casoon UI Library bieten eine umfassende Sammlung von Mischmodi und Überlagerungseffekten, die die visuelle Interaktion zwischen Elementen bestimmen und einzigartige visuelle Ergebnisse erzeugen.

## Überblick

Die Blend-Effekte nutzen CSS-Mischmodi, um zu kontrollieren, wie Elemente miteinander interagieren, wenn sie übereinander liegen. Sie können verwendet werden, um interessante visuelle Effekte, dynamische Bildüberlagerungen und kreative UI-Elemente zu erstellen.

## Installation

Importieren Sie das Blend-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/blend.css';
```

## Verfügbare Klassen

### Grundlegende Blend-Modi

| Klasse | Beschreibung |
|--------|-------------|
| `.blend-normal` | Standarddarstellung ohne Mischeffekt |
| `.blend-multiply` | Multiplikation der Farben (dunkler) |
| `.blend-screen` | Umkehrung, Multiplikation, Umkehrung (heller) |
| `.blend-overlay` | Kombiniert Multiply und Screen |
| `.blend-darken` | Behält die dunkleren Pixel |
| `.blend-lighten` | Behält die helleren Pixel |
| `.blend-color-dodge` | Teilt die Hintergrundfarbe durch die inverse Vordergrundfarbe |
| `.blend-color-burn` | Invertiert den Hintergrund, teilt durch Vordergrund, invertiert |
| `.blend-hard-light` | Ähnlich wie Overlay, aber Vorder- und Hintergrund tauschen |
| `.blend-soft-light` | Weichere Version von Hard-Light |
| `.blend-difference` | Subtrahiert die dunklere von der helleren Farbe |
| `.blend-exclusion` | Ähnlich wie Difference, aber mit niedrigerem Kontrast |
| `.blend-hue` | Wendet den Farbton des Vordergrunds auf den Hintergrund an |
| `.blend-saturation` | Wendet die Sättigung des Vordergrunds auf den Hintergrund an |
| `.blend-color` | Wendet Farbton und Sättigung des Vordergrunds auf den Hintergrund an |
| `.blend-luminosity` | Wendet die Helligkeit des Vordergrunds auf den Hintergrund an |

### Blend-Modi für Hintergründe

| Klasse | Beschreibung |
|--------|-------------|
| `.bg-blend-normal` | Normaler Mischmodus für Hintergrundbilder |
| `.bg-blend-multiply` | Multiply-Mischmodus für Hintergrundbilder |
| `.bg-blend-screen` | Screen-Mischmodus für Hintergrundbilder |
| `.bg-blend-overlay` | Overlay-Mischmodus für Hintergrundbilder |
| `.bg-blend-darken` | Darken-Mischmodus für Hintergrundbilder |
| `.bg-blend-lighten` | Lighten-Mischmodus für Hintergrundbilder |
| `.bg-blend-color-dodge` | Color-Dodge-Mischmodus für Hintergrundbilder |
| `.bg-blend-color-burn` | Color-Burn-Mischmodus für Hintergrundbilder |
| `.bg-blend-hard-light` | Hard-Light-Mischmodus für Hintergrundbilder |
| `.bg-blend-soft-light` | Soft-Light-Mischmodus für Hintergrundbilder |
| `.bg-blend-difference` | Difference-Mischmodus für Hintergrundbilder |
| `.bg-blend-exclusion` | Exclusion-Mischmodus für Hintergrundbilder |
| `.bg-blend-hue` | Hue-Mischmodus für Hintergrundbilder |
| `.bg-blend-saturation` | Saturation-Mischmodus für Hintergrundbilder |
| `.bg-blend-color` | Color-Mischmodus für Hintergrundbilder |
| `.bg-blend-luminosity` | Luminosity-Mischmodus für Hintergrundbilder |

### Isolations-Klassen

| Klasse | Beschreibung |
|--------|-------------|
| `.isolation-auto` | Automatische Isolierung von Blend-Effekten |
| `.isolation-isolate` | Erzwingt die Isolierung von Blend-Effekten |

## Beispiele

### Text mit Hintergrundbild und Blend-Modus

```html
<div class="blend-container">
  <img src="background.jpg" alt="Hintergrundbild">
  <div class="overlay blend-multiply">
    <h2>Überschrift mit Multiply-Effekt</h2>
    <p>Der Text mischt sich mit dem Hintergrundbild mittels Multiply-Blend-Modus.</p>
  </div>
</div>

<style>
  .blend-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  
  .blend-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    color: white;
    background-color: rgba(0, 0, 255, 0.3);
  }
</style>
```

### Überlappende farbige Elemente mit verschiedenen Blend-Modi

```html
<div class="blend-circles-container">
  <div class="circle circle-red blend-screen"></div>
  <div class="circle circle-green blend-screen"></div>
  <div class="circle circle-blue blend-screen"></div>
</div>

<style>
  .blend-circles-container {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #222;
  }
  
  .circle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    opacity: 0.7;
  }
  
  .circle-red {
    background-color: red;
    top: 50px;
    left: 50px;
  }
  
  .circle-green {
    background-color: green;
    top: 100px;
    left: 100px;
  }
  
  .circle-blue {
    background-color: blue;
    top: 75px;
    left: 75px;
  }
</style>
```

### Hintergrundbild mit Blend-Modus

```html
<div class="bg-blend-example">
  <h2>Hintergrund mit Blend-Modus</h2>
  <p>Dieser Container verwendet einen Hintergrund-Blend-Modus.</p>
</div>

<style>
  .bg-blend-example {
    width: 100%;
    height: 300px;
    padding: 2rem;
    color: white;
    background-image: url('pattern.jpg');
    background-color: #3498db;
    background-blend-mode: overlay;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
```

## Interaktive Blend-Modi

```html
<div class="interactive-blend">
  <div class="blend-item" data-blend-mode="normal">Normal</div>
  <div class="blend-item" data-blend-mode="multiply">Multiply</div>
  <div class="blend-item" data-blend-mode="screen">Screen</div>
  <div class="blend-item" data-blend-mode="overlay">Overlay</div>
  <div class="blend-item" data-blend-mode="darken">Darken</div>
  <div class="blend-item" data-blend-mode="lighten">Lighten</div>
  <div class="blend-item" data-blend-mode="color-dodge">Color Dodge</div>
  <div class="blend-item" data-blend-mode="color-burn">Color Burn</div>
  <div class="blend-item" data-blend-mode="hard-light">Hard Light</div>
  <div class="blend-item" data-blend-mode="soft-light">Soft Light</div>
  <div class="blend-item" data-blend-mode="difference">Difference</div>
  <div class="blend-item" data-blend-mode="exclusion">Exclusion</div>
  <div class="blend-item" data-blend-mode="hue">Hue</div>
  <div class="blend-item" data-blend-mode="saturation">Saturation</div>
  <div class="blend-item" data-blend-mode="color">Color</div>
  <div class="blend-item" data-blend-mode="luminosity">Luminosity</div>
  
  <div class="blend-preview">
    <div class="blend-background"></div>
    <div class="blend-foreground"></div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const blendItems = document.querySelectorAll('.blend-item');
    const blendForeground = document.querySelector('.blend-foreground');
    
    blendItems.forEach(item => {
      item.addEventListener('click', () => {
        // Aktive Klasse entfernen
        blendItems.forEach(i => i.classList.remove('active'));
        
        // Aktive Klasse hinzufügen
        item.classList.add('active');
        
        // Blend-Modus anwenden
        const blendMode = item.getAttribute('data-blend-mode');
        blendForeground.style.mixBlendMode = blendMode;
      });
    });
    
    // Standard-Blend-Modus setzen
    blendItems[0].click();
  });
</script>

<style>
  .interactive-blend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .blend-item {
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .blend-item.active {
    background-color: #3498db;
    color: white;
  }
  
  .blend-preview {
    position: relative;
    width: 100%;
    height: 300px;
    margin-top: 1rem;
  }
  
  .blend-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('pattern.jpg');
    background-size: cover;
  }
  
  .blend-foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,0,0,0.7), rgba(0,0,255,0.7));
  }
</style>
```

## Anpassung

Die Blend-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --blend-overlay-color: rgba(0, 0, 255, 0.5);
  --blend-overlay-opacity: 0.7;
  --blend-transition-duration: 0.3s;
  --blend-background-color: #3498db;
}
```

## Barrierefreiheit

Bei der Verwendung von Blend-Modi ist es wichtig, die Lesbarkeit und den Kontrast zu berücksichtigen:

1. **Kontrast**: Stellen Sie sicher, dass Text über Blend-Effekten ausreichenden Kontrast hat
2. **Lesbarkeit**: Verwenden Sie keine Blend-Modi, die die Lesbarkeit von wichtigem Inhalt beeinträchtigen
3. **Alternative Stile**: Bieten Sie alternative Stile für Nutzer mit visuellen Einschränkungen an

```css
/* Verbesserte Lesbarkeit für Text über Blend-Effekten */
.blend-container .overlay h2,
.blend-container .overlay p {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

/* Alternative Stile für reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .animated-blend {
    animation: none !important;
    transition: none !important;
  }
}
```

## Browser-Kompatibilität

Die Blend-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| mix-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| background-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| isolation | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die keine Blend-Modi unterstützen, werden Fallback-Stile bereitgestellt, die eine ähnliche visuelle Wirkung erzielen. 
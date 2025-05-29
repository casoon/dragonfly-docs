---
title: Blend Effects
category: Effects
---

# Blend-effects

the Blend-effects the Casoon UI Library bieten a umfassende Sammlung from Mischmodi and Uberlagerungseffekten, the the visuelle interaction between Elementen bestimmen and einzigartige visuelle Ergebnisse erzeugen.

## Uberblick

the Blend-effects use CSS-Mischmodi, To kontrollieren, how elements miteinander interagieren, If you ubereinander liegen. You can verwendet become, um interessante visuelle effects, dynamische Bilduberlagerungen and kreative UI-elements to create.

## Installation

import them the Blend-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/blend.css';
```

## Verfugbare classes

### Grundlegende Blend-Modi

| Class | Description |
|--------|-------------|
| `.blend-normal` | Standarddarstellung without Mischeffekt |
| `.blend-multiply` | Multiplikation the Colors (dunkler) |
| `.blend-screen` | Umkehrung, Multiplikation, Umkehrung (heller) |
| `.blend-overlay` | Kombiniert Multiply and Screen |
| `.blend-darken` | Behalt the dunkleren Pixel |
| `.blend-lighten` | Behalt the helleren Pixel |
| `.blend-color-dodge` | Teilt the Hintergrundfarbe through the inverse Vordergrundfarbe |
| `.blend-color-burn` | Invertiert den background, teilt through foreground, invertiert |
| `.blend-hard-light` | Ahnlich how Overlay, but Vorder- and background tauschen |
| `.blend-soft-light` | Weichere version from Hard-Light |
| `.blend-difference` | Subtrahiert the dunklere from the helleren color |
| `.blend-exclusion` | Ahnlich how Difference, but with niedrigerem Kontrast |
| `.blend-hue` | Wendet den Farbton des Vordergrunds on den background on |
| `.blend-saturation` | Wendet the Sattigung des Vordergrunds on den background on |
| `.blend-color` | Wendet Farbton and Sattigung des Vordergrunds on den background on |
| `.blend-luminosity` | Wendet the Helligkeit des Vordergrunds on den background on |

### Blend-Modi for Hintergrunde

| Class | Description |
|--------|-------------|
| `.bg-blend-normal` | Normaler Mischmodus for Hintergrundbilder |
| `.bg-blend-multiply` | Multiply-Mischmodus for Hintergrundbilder |
| `.bg-blend-screen` | Screen-Mischmodus for Hintergrundbilder |
| `.bg-blend-overlay` | Overlay-Mischmodus for Hintergrundbilder |
| `.bg-blend-darken` | Darken-Mischmodus for Hintergrundbilder |
| `.bg-blend-lighten` | Lighten-Mischmodus for Hintergrundbilder |
| `.bg-blend-color-dodge` | Color-Dodge-Mischmodus for Hintergrundbilder |
| `.bg-blend-color-burn` | Color-Burn-Mischmodus for Hintergrundbilder |
| `.bg-blend-hard-light` | Hard-Light-Mischmodus for Hintergrundbilder |
| `.bg-blend-soft-light` | Soft-Light-Mischmodus for Hintergrundbilder |
| `.bg-blend-difference` | Difference-Mischmodus for Hintergrundbilder |
| `.bg-blend-exclusion` | Exclusion-Mischmodus for Hintergrundbilder |
| `.bg-blend-hue` | Hue-Mischmodus for Hintergrundbilder |
| `.bg-blend-saturation` | Saturation-Mischmodus for Hintergrundbilder |
| `.bg-blend-color` | Color-Mischmodus for Hintergrundbilder |
| `.bg-blend-luminosity` | Luminosity-Mischmodus for Hintergrundbilder |

### Isolations-classes

| Class | Description |
|--------|-------------|
| `.isolation-auto` | Automatische Isolierung from Blend-Effekten |
| `.isolation-isolate` | Erzwingt the Isolierung from Blend-Effekten |

## Examples

### Text with Hintergrundbild and Blend-Modus

```html
<div class="blend-containers">
  <img src="background.jpg" alt="Hintergrundbild">
  <div class="overlay blend-multiply">
    <h2>heading with Multiply-effect</h2>
    <p>the Text mischt oneself with dem Hintergrundbild mittels Multiply-Blend-Modus.</p>
  </div>
</div>

<style>
  .blend-containers {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  
  .blend-containers img {
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

### Uberlappende farbige elements with verschiedenen Blend-Modi

```html
<div class="blend-circles-containers">
  <div class="circle circle-red blend-screen"></div>
  <div class="circle circle-green blend-screen"></div>
  <div class="circle circle-blue blend-screen"></div>
</div>

<style>
  .blend-circles-containers {
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

### Hintergrundbild with Blend-Modus

```html
<div class="bg-blend-example">
  <h2>background with Blend-Modus</h2>
  <p>this containers verwendet einen background-Blend-Modus.</p>
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
        // Aktive Class remove
        blendItems.forEach(i => i.classList.remove('active'));
        
        // Aktive Class add
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

## Customization

the Blend-effects can over CSS Variables angepasst become:

```css
:root {
  --blend-overlay-color: rgba(0, 0, 255, 0.5);
  --blend-overlay-opacity: 0.7;
  --blend-transition-duration: 0.3s;
  --blend-background-color: #3498db;
}
```

## Accessibility

at the Usage from Blend-Modi ist it important, the Lesbarkeit and den Kontrast to berucksichtigen:

1. **Kontrast**: ensure, that Text over Blend-Effekten ausreichenden Kontrast hat
2. **Lesbarkeit**: use them no Blend-Modi, the the Lesbarkeit from wichtigem content beeintrachtigen
3. **Alternative Styles**: Bieten them alternative Styles for Nutzer with visuellen Einschrankungen on

```css
/* Verbesserte Lesbarkeit for Text over Blend-Effekten */
.blend-containers .overlay h2,
.blend-containers .overlay p {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

/* Alternative Styles for reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .animated-blend {
    animation: none !important;
    transition: none !important;
  }
}
```

## Browser-Kompatibilitat

the Blend-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| mix-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| background-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| isolation | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the no Blend-Modi unterstutzen, become Fallback-Styles bereitgestellt, the a ahnliche visuelle Wirkung erzielen. 
---
title: Filter Effects
category: Effects
---

# Filter-effects

the Filter-effects the Casoon UI Library bieten a umfassende Sammlung from CSS-Filtern, with denen them visuelle Transformationen on elements anwenden can, um beeindruckende and dynamische user interfaces to gestalten.

## Uberblick

the Filter-effects use CSS-Filtereigenschaften, um Grafiken, Hintergrunde and elements to verandern. You can the Helligkeit, den Kontrast, the Farbsattigung customize, Unscharfe add and much more, um the visuelle Display Ihrer Benutzeroberflache to verbessern.

## Installation

import them the Filter-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/filters.css';
```

## Verfugbare classes

### Grundlegende Filter

| Class | Description |
|--------|-------------|
| `.filter-blur-sm` | Wendet a leichte Unscharfe (2px) on |
| `.filter-blur-md` | Wendet a mittlere Unscharfe (4px) on |
| `.filter-blur-lg` | Wendet a strength Unscharfe (8px) on |
| `.filter-blur-xl` | Wendet a very strength Unscharfe (16px) on |
| `.filter-brightness-0` | Reduziert the Helligkeit on 0% (schwarz) |
| `.filter-brightness-50` | Reduziert the Helligkeit on 50% |
| `.filter-brightness-75` | Reduziert the Helligkeit on 75% |
| `.filter-brightness-90` | Reduziert the Helligkeit on 90% |
| `.filter-brightness-100` | Normale Helligkeit (100%) |
| `.filter-brightness-110` | Erhoht the Helligkeit on 110% |
| `.filter-brightness-125` | Erhoht the Helligkeit on 125% |
| `.filter-brightness-150` | Erhoht the Helligkeit on 150% |
| `.filter-brightness-200` | Erhoht the Helligkeit on 200% |
| `.filter-contrast-0` | Reduziert den Kontrast on 0% (grau) |
| `.filter-contrast-50` | Reduziert den Kontrast on 50% |
| `.filter-contrast-75` | Reduziert den Kontrast on 75% |
| `.filter-contrast-100` | Normaler Kontrast (100%) |
| `.filter-contrast-125` | Erhoht den Kontrast on 125% |
| `.filter-contrast-150` | Erhoht den Kontrast on 150% |
| `.filter-contrast-200` | Erhoht den Kontrast on 200% |
| `.filter-grayscale-0` | no Graustufen (0%) |
| `.filter-grayscale-25` | 25% Graustufen |
| `.filter-grayscale-50` | 50% Graustufen |
| `.filter-grayscale-75` | 75% Graustufen |
| `.filter-grayscale-100` | Vollstandige Graustufen (100%) |
| `.filter-hue-rotate-0` | no Farbtonrotation |
| `.filter-hue-rotate-90` | 90 Grad Farbtonrotation |
| `.filter-hue-rotate-180` | 180 Grad Farbtonrotation |
| `.filter-hue-rotate-270` | 270 Grad Farbtonrotation |
| `.filter-invert-0` | no Farbinvertierung |
| `.filter-invert-25` | 25% Farbinvertierung |
| `.filter-invert-50` | 50% Farbinvertierung |
| `.filter-invert-75` | 75% Farbinvertierung |
| `.filter-invert-100` | Vollstandige Farbinvertierung (100%) |
| `.filter-saturate-0` | no Sattigung (0%) |
| `.filter-saturate-50` | 50% Sattigung |
| `.filter-saturate-75` | 75% Sattigung |
| `.filter-saturate-100` | Normale Sattigung (100%) |
| `.filter-saturate-125` | 125% Sattigung |
| `.filter-saturate-150` | 150% Sattigung |
| `.filter-saturate-200` | 200% Sattigung |
| `.filter-sepia-0` | no Sepia-effect |
| `.filter-sepia-25` | 25% Sepia-effect |
| `.filter-sepia-50` | 50% Sepia-effect |
| `.filter-sepia-75` | 75% Sepia-effect |
| `.filter-sepia-100` | Vollstandiger Sepia-effect (100%) |
| `.filter-drop-shadow-sm` | Kleine Schlagschatten (2px) |
| `.filter-drop-shadow-md` | Mittlere Schlagschatten (4px) |
| `.filter-drop-shadow-lg` | size Schlagschatten (8px) |
| `.filter-drop-shadow-xl` | very size Schlagschatten (16px) |

### Kombinierte Filter

| Class | Description |
|--------|-------------|
| `.filter-vintage` | Vintage-Foto-effect (Sepia + reduzierte Sattigung) |
| `.filter-dramatic` | Dramatischer effect (erhohter Kontrast + leichte Farbtonverschiebung) |
| `.filter-cool` | Kuhler Farbeffekt (blauliche Tonung) |
| `.filter-warm` | Warmer Farbeffekt (gelblich-rotliche Tonung) |
| `.filter-noir` | Film-Noir-effect (hoher Kontrast + Graustufen) |
| `.filter-clarity` | Klarheitseffekt (erhohter Kontrast + Scharfe) |
| `.filter-fade` | Verblassungseffekt (reduzierte Sattigung + erhohte Helligkeit) |
| `.filter-muted` | Gedampfter effect (reduzierte Sattigung + reduzierter Kontrast) |
| `.filter-vibrant` | Lebhafter effect (erhohte Sattigung + leicht erhohter Kontrast) |

### Hover-Filter

| Class | Description |
|--------|-------------|
| `.hover-filter-blur` | Wendet Unscharfe at Hover on |
| `.hover-filter-brightness-up` | Erhoht the Helligkeit at Hover |
| `.hover-filter-brightness-down` | Reduziert the Helligkeit at Hover |
| `.hover-filter-contrast-up` | Erhoht den Kontrast at Hover |
| `.hover-filter-grayscale` | Wendet Graustufen at Hover on |
| `.hover-filter-sepia` | Wendet Sepia-effect at Hover on |
| `.hover-filter-invert` | Invertiert Colors at Hover |
| `.hover-filter-saturate-up` | Erhoht the Sattigung at Hover |
| `.hover-filter-saturate-down` | Reduziert the Sattigung at Hover |

## Examples

### Grundlegende Filteranwendung

```html
<div class="filter-examples">
  <div class="filter-example">
    <img src="image.jpg" alt="Original">
    <span class="filter-label">Original</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Unscharfe" class="filter-blur-md">
    <span class="filter-label">Unscharfe</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Helligkeit" class="filter-brightness-150">
    <span class="filter-label">Helligkeit</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Kontrast" class="filter-contrast-150">
    <span class="filter-label">Kontrast</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Graustufen" class="filter-grayscale-100">
    <span class="filter-label">Graustufen</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Sepia" class="filter-sepia-100">
    <span class="filter-label">Sepia</span>
  </div>
</div>

<style>
  .filter-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .filter-example {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .filter-example img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  
  .filter-label {
    font-weight: 500;
    font-size: 0.9rem;
  }
</style>
```

### Kombinierte Filter-effects

```html
<div class="filter-examples">
  <div class="filter-example">
    <img src="image.jpg" alt="Original">
    <span class="filter-label">Original</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Vintage" class="filter-vintage">
    <span class="filter-label">Vintage</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Dramatic" class="filter-dramatic">
    <span class="filter-label">Dramatic</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Cool" class="filter-cool">
    <span class="filter-label">Cool</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Warm" class="filter-warm">
    <span class="filter-label">Warm</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Noir" class="filter-noir">
    <span class="filter-label">Noir</span>
  </div>
</div>
```

### Hover-Filter

```html
<div class="hover-filter-examples">
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Blur" class="hover-filter-blur">
    <span class="hover-label">Hover for Unscharfe</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Brightness" class="hover-filter-brightness-up">
    <span class="hover-label">Hover for Helligkeit</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Grayscale" class="hover-filter-grayscale">
    <span class="hover-label">Hover for Graustufen</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Invert" class="hover-filter-invert">
    <span class="hover-label">Hover for Invertierung</span>
  </div>
</div>

<style>
  .hover-filter-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .hover-example {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hover-example img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 0.5rem;
    transition: filter 0.3s ease;
  }
  
  .hover-label {
    font-weight: 500;
    font-size: 0.9rem;
  }
</style>
```

### Interaktiver Filtereditor

```html
<div class="filter-editor">
  <div class="filter-controls">
    <div class="filter-control">
      <label for="blur">Unscharfe:</label>
      <input type="range" id="blur" min="0" max="20" value="0" step="1">
      <span class="filter-value">0px</span>
    </div>
    
    <div class="filter-control">
      <label for="brightness">Helligkeit:</label>
      <input type="range" id="brightness" min="0" max="200" value="100" step="5">
      <span class="filter-value">100%</span>
    </div>
    
    <div class="filter-control">
      <label for="contrast">Kontrast:</label>
      <input type="range" id="contrast" min="0" max="200" value="100" step="5">
      <span class="filter-value">100%</span>
    </div>
    
    <div class="filter-control">
      <label for="grayscale">Graustufen:</label>
      <input type="range" id="grayscale" min="0" max="100" value="0" step="5">
      <span class="filter-value">0%</span>
    </div>
    
    <div class="filter-control">
      <label for="hue-rotate">Farbton-Rotation:</label>
      <input type="range" id="hue-rotate" min="0" max="360" value="0" step="5">
      <span class="filter-value">0°</span>
    </div>
    
    <div class="filter-control">
      <label for="saturate">Sattigung:</label>
      <input type="range" id="saturate" min="0" max="200" value="100" step="5">
      <span class="filter-value">100%</span>
    </div>
    
    <div class="filter-control">
      <label for="sepia">Sepia:</label>
      <input type="range" id="sepia" min="0" max="100" value="0" step="5">
      <span class="filter-value">0%</span>
    </div>
  </div>
  
  <div class="filter-preview">
    <img src="image.jpg" alt="Vorschau" id="preview-image">
    <div class="filter-code">
      <code id="filter-css">filter: none;</code>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const previewImage = document.getElementById('preview-image');
    const filterCss = document.getElementById('filter-css');
    const controls = {
      blur: document.getElementById('blur'),
      brightness: document.getElementById('brightness'),
      contrast: document.getElementById('contrast'),
      grayscale: document.getElementById('grayscale'),
      hueRotate: document.getElementById('hue-rotate'),
      saturate: document.getElementById('saturate'),
      sepia: document.getElementById('sepia')
    };
    
    function updateFilter() {
      let filter = '';
      let css = '';
      
      if (controls.blur.value > 0) {
        filter += `blur(${controls.blur.value}px) `;
        css += `blur(${controls.blur.value}px) `;
        controls.blur.nextElementSibling.textContent = `${controls.blur.value}px`;
      }
      
      if (controls.brightness.value != 100) {
        filter += `brightness(${controls.brightness.value}%) `;
        css += `brightness(${controls.brightness.value}%) `;
        controls.brightness.nextElementSibling.textContent = `${controls.brightness.value}%`;
      }
      
      if (controls.contrast.value != 100) {
        filter += `contrast(${controls.contrast.value}%) `;
        css += `contrast(${controls.contrast.value}%) `;
        controls.contrast.nextElementSibling.textContent = `${controls.contrast.value}%`;
      }
      
      if (controls.grayscale.value > 0) {
        filter += `grayscale(${controls.grayscale.value}%) `;
        css += `grayscale(${controls.grayscale.value}%) `;
        controls.grayscale.nextElementSibling.textContent = `${controls.grayscale.value}%`;
      }
      
      if (controls.hueRotate.value > 0) {
        filter += `hue-rotate(${controls.hueRotate.value}deg) `;
        css += `hue-rotate(${controls.hueRotate.value}deg) `;
        controls.hueRotate.nextElementSibling.textContent = `${controls.hueRotate.value}°`;
      }
      
      if (controls.saturate.value != 100) {
        filter += `saturate(${controls.saturate.value}%) `;
        css += `saturate(${controls.saturate.value}%) `;
        controls.saturate.nextElementSibling.textContent = `${controls.saturate.value}%`;
      }
      
      if (controls.sepia.value > 0) {
        filter += `sepia(${controls.sepia.value}%) `;
        css += `sepia(${controls.sepia.value}%) `;
        controls.sepia.nextElementSibling.textContent = `${controls.sepia.value}%`;
      }
      
      if (filter === '') {
        filter = 'none';
        css = 'none';
      }
      
      previewImage.style.filter = filter;
      filterCss.textContent = `filter: ${css.trim()};`;
    }
    
    // Event-Listener for all Regler add
    Object.values(controls).forEach(control => {
      control.addEventListener('input', updateFilter);
    });
  });
</script>

<style>
  .filter-editor {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  .filter-controls {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .filter-control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .filter-control label {
    font-weight: 500;
  }
  
  .filter-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .filter-preview img {
    max-width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: contain;
  }
  
  .filter-code {
    padding: 1rem;
    background-color: #333;
    color: white;
    border-radius: 4px;
    width: 100%;
    text-align: center;
  }
</style>
```

## Customization

the Filter-effects can over CSS Variables angepasst become:

```css
:root {
  /* Base-Filter-parameter */
  --filter-blur-sm: 2px;
  --filter-blur-md: 4px;
  --filter-blur-lg: 8px;
  --filter-blur-xl: 16px;
  
  --filter-drop-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --filter-drop-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --filter-drop-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.14);
  --filter-drop-shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.16);
  
  /* Kombinierte Filter */
  --filter-vintage: sepia(30%) saturate(70%);
  --filter-dramatic: contrast(120%) hue-rotate(10deg);
  --filter-cool: brightness(110%) hue-rotate(180deg) saturate(120%);
  --filter-warm: brightness(105%) hue-rotate(-10deg) saturate(110%);
  --filter-noir: grayscale(100%) contrast(150%) brightness(90%);
  --filter-clarity: contrast(120%) brightness(105%);
  --filter-fade: saturate(70%) brightness(110%);
  --filter-muted: saturate(80%) contrast(90%);
  --filter-vibrant: saturate(150%) contrast(110%);
  
  /* Hover-Filter */
  --hover-filter-blur: blur(5px);
  --hover-filter-brightness-up: brightness(130%);
  --hover-filter-brightness-down: brightness(70%);
  --hover-filter-contrast-up: contrast(150%);
  --hover-filter-grayscale: grayscale(100%);
  --hover-filter-sepia: sepia(100%);
  --hover-filter-invert: invert(100%);
  --hover-filter-saturate-up: saturate(200%);
  --hover-filter-saturate-down: saturate(50%);
}
```

## Accessibility

at the Usage from Filter-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: make sure, that Filter not den Kontrast so stark reduzieren, that Text schwer lesbar wird
2. **Farbwahrnehmung**: Berucksichtigen them, that Farbanpassungen through Filter for Menschen with Farbfehlsichtigkeit problematisch be can
3. **Bewegung and animation**: use them no animierten Filter, the schnell blinken or flackern, um Probleme at Personen with Vestibularerkrankungen or Epilepsie to vermeiden
4. **Alternative Styles**: Bieten them alternative Ansichten without Filter for Nutzer, the these benotigen

```css
/* Verbesserte Lesbarkeit for Text over gefilterten Hintergrunden */
.filter-background-with-text {
  /* background with Filter */
  position: relative;
}

.filter-background-with-text .content {
  /* Text-containers */
  position: relative;
  z-index: 1;
  /* Sorgt for ausreichenden Kontrast */
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Alternative Styles for reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .animated-filter {
    transition: none !important;
    animation: none !important;
  }
}
```

## Performance-Optimierung

Filter-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **combine them Filter**: use them einen einzelnen Filter-Value instead of mehrerer verschachtelter elements with Filtern
2. **use them will-change**: Fugen them `will-change: filter` for elements with Hover-Filtern hinzu
3. **Begrenzen them animierte Filter**: Animieren them Filter only on kleinen Elementen or reduzieren them the Komplexitat
4. **Hardware-Beschleunigung**: use them `transform: translateZ(0)` for Hardware-Beschleunigung at gefilterten Elementen

```css
/* Performance-Optimierung for Filter */
.optimized-filter {
  will-change: filter;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the Filter-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| filter | ✓ | ✓ | ✓ | ✓ | ✗ |
| backdrop-filter | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the no Filter unterstutzen, become Fallback-Styles bereitgestellt. 
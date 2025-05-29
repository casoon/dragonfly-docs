---
title: Filter Effects
category: Effects
---

# Filter-Effekte

Die Filter-Effekte der Casoon UI Library bieten eine umfassende Sammlung von CSS-Filtern, mit denen Sie visuelle Transformationen auf Elemente anwenden können, um beeindruckende und dynamische Benutzeroberflächen zu gestalten.

## Überblick

Die Filter-Effekte nutzen CSS-Filtereigenschaften, um Grafiken, Hintergründe und Elemente zu verändern. Sie können die Helligkeit, den Kontrast, die Farbsättigung anpassen, Unschärfe hinzufügen und vieles mehr, um die visuelle Darstellung Ihrer Benutzeroberfläche zu verbessern.

## Installation

Importieren Sie das Filter-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/filters.css';
```

## Verfügbare Klassen

### Grundlegende Filter

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-blur-sm` | Wendet eine leichte Unschärfe (2px) an |
| `.filter-blur-md` | Wendet eine mittlere Unschärfe (4px) an |
| `.filter-blur-lg` | Wendet eine starke Unschärfe (8px) an |
| `.filter-blur-xl` | Wendet eine sehr starke Unschärfe (16px) an |
| `.filter-brightness-0` | Reduziert die Helligkeit auf 0% (schwarz) |
| `.filter-brightness-50` | Reduziert die Helligkeit auf 50% |
| `.filter-brightness-75` | Reduziert die Helligkeit auf 75% |
| `.filter-brightness-90` | Reduziert die Helligkeit auf 90% |
| `.filter-brightness-100` | Normale Helligkeit (100%) |
| `.filter-brightness-110` | Erhöht die Helligkeit auf 110% |
| `.filter-brightness-125` | Erhöht die Helligkeit auf 125% |
| `.filter-brightness-150` | Erhöht die Helligkeit auf 150% |
| `.filter-brightness-200` | Erhöht die Helligkeit auf 200% |
| `.filter-contrast-0` | Reduziert den Kontrast auf 0% (grau) |
| `.filter-contrast-50` | Reduziert den Kontrast auf 50% |
| `.filter-contrast-75` | Reduziert den Kontrast auf 75% |
| `.filter-contrast-100` | Normaler Kontrast (100%) |
| `.filter-contrast-125` | Erhöht den Kontrast auf 125% |
| `.filter-contrast-150` | Erhöht den Kontrast auf 150% |
| `.filter-contrast-200` | Erhöht den Kontrast auf 200% |
| `.filter-grayscale-0` | Keine Graustufen (0%) |
| `.filter-grayscale-25` | 25% Graustufen |
| `.filter-grayscale-50` | 50% Graustufen |
| `.filter-grayscale-75` | 75% Graustufen |
| `.filter-grayscale-100` | Vollständige Graustufen (100%) |
| `.filter-hue-rotate-0` | Keine Farbtonrotation |
| `.filter-hue-rotate-90` | 90 Grad Farbtonrotation |
| `.filter-hue-rotate-180` | 180 Grad Farbtonrotation |
| `.filter-hue-rotate-270` | 270 Grad Farbtonrotation |
| `.filter-invert-0` | Keine Farbinvertierung |
| `.filter-invert-25` | 25% Farbinvertierung |
| `.filter-invert-50` | 50% Farbinvertierung |
| `.filter-invert-75` | 75% Farbinvertierung |
| `.filter-invert-100` | Vollständige Farbinvertierung (100%) |
| `.filter-saturate-0` | Keine Sättigung (0%) |
| `.filter-saturate-50` | 50% Sättigung |
| `.filter-saturate-75` | 75% Sättigung |
| `.filter-saturate-100` | Normale Sättigung (100%) |
| `.filter-saturate-125` | 125% Sättigung |
| `.filter-saturate-150` | 150% Sättigung |
| `.filter-saturate-200` | 200% Sättigung |
| `.filter-sepia-0` | Kein Sepia-Effekt |
| `.filter-sepia-25` | 25% Sepia-Effekt |
| `.filter-sepia-50` | 50% Sepia-Effekt |
| `.filter-sepia-75` | 75% Sepia-Effekt |
| `.filter-sepia-100` | Vollständiger Sepia-Effekt (100%) |
| `.filter-drop-shadow-sm` | Kleine Schlagschatten (2px) |
| `.filter-drop-shadow-md` | Mittlere Schlagschatten (4px) |
| `.filter-drop-shadow-lg` | Große Schlagschatten (8px) |
| `.filter-drop-shadow-xl` | Sehr große Schlagschatten (16px) |

### Kombinierte Filter

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-vintage` | Vintage-Foto-Effekt (Sepia + reduzierte Sättigung) |
| `.filter-dramatic` | Dramatischer Effekt (erhöhter Kontrast + leichte Farbtonverschiebung) |
| `.filter-cool` | Kühler Farbeffekt (bläuliche Tönung) |
| `.filter-warm` | Warmer Farbeffekt (gelblich-rötliche Tönung) |
| `.filter-noir` | Film-Noir-Effekt (hoher Kontrast + Graustufen) |
| `.filter-clarity` | Klarheitseffekt (erhöhter Kontrast + Schärfe) |
| `.filter-fade` | Verblassungseffekt (reduzierte Sättigung + erhöhte Helligkeit) |
| `.filter-muted` | Gedämpfter Effekt (reduzierte Sättigung + reduzierter Kontrast) |
| `.filter-vibrant` | Lebhafter Effekt (erhöhte Sättigung + leicht erhöhter Kontrast) |

### Hover-Filter

| Klasse | Beschreibung |
|--------|-------------|
| `.hover-filter-blur` | Wendet Unschärfe bei Hover an |
| `.hover-filter-brightness-up` | Erhöht die Helligkeit bei Hover |
| `.hover-filter-brightness-down` | Reduziert die Helligkeit bei Hover |
| `.hover-filter-contrast-up` | Erhöht den Kontrast bei Hover |
| `.hover-filter-grayscale` | Wendet Graustufen bei Hover an |
| `.hover-filter-sepia` | Wendet Sepia-Effekt bei Hover an |
| `.hover-filter-invert` | Invertiert Colors bei Hover |
| `.hover-filter-saturate-up` | Erhöht die Sättigung bei Hover |
| `.hover-filter-saturate-down` | Reduziert die Sättigung bei Hover |

## Examples

### Grundlegende Filteranwendung

```html
<div class="filter-examples">
  <div class="filter-example">
    <img src="image.jpg" alt="Original">
    <span class="filter-label">Original</span>
  </div>
  
  <div class="filter-example">
    <img src="image.jpg" alt="Unschärfe" class="filter-blur-md">
    <span class="filter-label">Unschärfe</span>
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

### Kombinierte Filter-Effekte

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
    <span class="hover-label">Hover für Unschärfe</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Brightness" class="hover-filter-brightness-up">
    <span class="hover-label">Hover für Helligkeit</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Grayscale" class="hover-filter-grayscale">
    <span class="hover-label">Hover für Graustufen</span>
  </div>
  
  <div class="hover-example">
    <img src="image.jpg" alt="Hover Invert" class="hover-filter-invert">
    <span class="hover-label">Hover für Invertierung</span>
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
      <label for="blur">Unschärfe:</label>
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
      <label for="saturate">Sättigung:</label>
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
    
    // Event-Listener für alle Regler hinzufügen
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

## Anpassung

Die Filter-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Basis-Filter-Parameter */
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

Bei der Usage von Filter-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Achten Sie darauf, dass Filter nicht den Kontrast so stark reduzieren, dass Text schwer lesbar wird
2. **Farbwahrnehmung**: Berücksichtigen Sie, dass Farbanpassungen durch Filter für Menschen mit Farbfehlsichtigkeit problematisch sein können
3. **Bewegung und Animation**: Verwenden Sie keine animierten Filter, die schnell blinken oder flackern, um Probleme bei Personen mit Vestibulärerkrankungen oder Epilepsie zu vermeiden
4. **Alternative Styles**: Bieten Sie alternative Ansichten ohne Filter für Nutzer, die diese benötigen

```css
/* Verbesserte Lesbarkeit für Text über gefilterten Hintergründen */
.filter-background-with-text {
  /* Hintergrund mit Filter */
  position: relative;
}

.filter-background-with-text .content {
  /* Text-Container */
  position: relative;
  z-index: 1;
  /* Sorgt für ausreichenden Kontrast */
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Alternative Styles für reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .animated-filter {
    transition: none !important;
    animation: none !important;
  }
}
```

## Performance-Optimierung

Filter-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Kombinieren Sie Filter**: Verwenden Sie einen einzelnen Filter-Wert statt mehrerer verschachtelter Elemente mit Filtern
2. **Verwenden Sie will-change**: Fügen Sie `will-change: filter` für Elemente mit Hover-Filtern hinzu
3. **Begrenzen Sie animierte Filter**: Animieren Sie Filter nur auf kleinen Elementen oder reduzieren Sie die Komplexität
4. **Hardware-Beschleunigung**: Nutzen Sie `transform: translateZ(0)` für Hardware-Beschleunigung bei gefilterten Elementen

```css
/* Performance-Optimierung für Filter */
.optimized-filter {
  will-change: filter;
  transform: translateZ(0);
}
```

## Browser-Kompatibilität

Die Filter-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| filter | ✓ | ✓ | ✓ | ✓ | ✗ |
| backdrop-filter | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die keine Filter unterstützen, werden Fallback-Styles bereitgestellt. 
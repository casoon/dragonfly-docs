---
title: Light Effects
category: Effects
---

# Light-effects

the Light-effects the Casoon UI Library bieten a Sammlung from Beleuchtungseffekten, the Ihrer Benutzeroberflache Tiefe, Dimensionalitat and realistische Lichtinteraktionen verleihen, um a immersives and visuell ansprechendes Nutzererlebnis to schaffen.

## Uberblick

Light-effects simulieren the interaction from Licht with Oberflachen, um realistische Schattierungen, Highlights and Reflexionen to erzeugen. these effects can verwendet become, um Tiefe to vermitteln, elements hervorzuheben and a naturlichere, physisch plausible Benutzeroberflache to gestalten.

## Installation

import them the Light-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/light.css';
```

## Verfugbare classes

### Grundlegende Beleuchtungseffekte

| Class | Description |
|--------|-------------|
| `.light-source` | Definiert a element as Lichtquelle |
| `.light-surface` | Bereitet a element on Lichtinteraktionen before |
| `.light-ambient` | Erzeugt a sanftes Umgebungslicht without strength shadow |
| `.light-directional` | Erzeugt gerichtetes Licht aus einer bestimmten Richtung |
| `.light-point` | Erzeugt punktformiges Licht, the in all Richtungen strahlt |
| `.light-spot` | Erzeugt Spotlicht with definiertem Fokusbereich |

### Lichtintensitaten

| Class | Description |
|--------|-------------|
| `.light-dim` | Gedampftes Licht with niedriger Intensitat |
| `.light-normal` | Normales Licht with Standardintensitat |
| `.light-bright` | Helles Licht with erhohter Intensitat |
| `.light-intense` | very intensives Licht with starker Auswirkung |

### Lichtfarben

| Class | Description |
|--------|-------------|
| `.light-warm` | Warmes Licht (gelblich-orange) |
| `.light-cool` | Kuhles Licht (blaulich) |
| `.light-neutral` | Neutrales weisses Licht |
| `.light-primary` | Licht in the Primarfarbe |
| `.light-secondary` | Licht in the Sekundarfarbe |
| `.light-success` | Licht in Erfolgsfarbe (grun) |
| `.light-warning` | Licht in Warnfarbe (gelb/orange) |
| `.light-danger` | Licht in Gefahrenfarbe (rot) |
| `.light-info` | Licht in Informationsfarbe (blau) |

### Schatteneffekte

| Class | Description |
|--------|-------------|
| `.light-shadow-sm` | smaller, weicher shadow |
| `.light-shadow-md` | Mittlerer shadow with moderater Ausbreitung |
| `.light-shadow-lg` | Grosser shadow with weiter Ausbreitung |
| `.light-shadow-sharp` | Scharfer, definierter shadow |
| `.light-shadow-soft` | Weicher, diffuser shadow |
| `.light-shadow-inner` | after innen gerichteter shadow |
| `.light-shadow-floating` | Schwebender shadow for erhohte elements |

### Highlight-effects

| Class | Description |
|--------|-------------|
| `.light-highlight` | Fugt Highlights on beleuchteten Kanten hinzu |
| `.light-highlight-subtle` | Subtile Highlights with geringer Intensitat |
| `.light-highlight-strong` | strength Highlights with hoher Intensitat |
| `.light-reflection` | Erzeugt subtile Lichtreflexionen on Oberflachen |
| `.light-specular` | Erzeugt spiegelnde Lichtreflexionen on glanzenden Oberflachen |

### Spezialeffekte

| Class | Description |
|--------|-------------|
| `.light-halo` | Erzeugt einen Halo-effect um Lichtquellen |
| `.light-rays` | Erzeugt sichtbare Lichtstrahlen (Godrays) |
| `.light-lens-flare` | Erzeugt Lens-Flare-effects for strength Lichtquellen |
| `.light-volumetric` | Erzeugt volumetrische Lichteffekte |
| `.light-ambient-occlusion` | Simuliert Umgebungsverdeckung in Ecken and columns |
| `.light-bloom` | Erzeugt einen Bloom-effect for helle areas |

### Interaktive Lichteffekte

| Class | Description |
|--------|-------------|
| `.light-hover` | Aktiviert Lichteffekte at Hover |
| `.light-active` | Aktiviert Lichteffekte at aktivem state |
| `.light-focus` | Aktiviert Lichteffekte at Fokus |
| `.light-interactive` | Licht reagiert on interactions |
| `.light-follow-cursor` | Lichtquelle folgt dem Cursor |

## Examples

### Grundlegende Lichtquellen and Oberflachen

```html
<div class="light-containers">
  <div class="light-source light-point light-warm" style="--light-position-x: 30%; --light-position-y: 30%;"></div>
  
  <div class="light-surface light-shadow-md">
    <h3>Beleuchtete box</h3>
    <p>these box reagiert on the Lichtquelle in the oberen linken Ecke.</p>
  </div>
  
  <div class="light-surface light-shadow-md light-highlight">
    <h3>Beleuchtete box with Highlights</h3>
    <p>these box zeigt zusatzliche Highlights on beleuchteten Kanten.</p>
  </div>
</div>

<style>
  .light-containers {
    position: relative;
    background-color: #1a1a2e;
    padding: 4rem;
    min-height: 400px;
    overflow: hidden;
  }
  
  .light-source {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
    top: var(--light-position-y);
    left: var(--light-position-x);
    z-index: 10;
  }
  
  .light-surface {
    background-color: #2a2a4a;
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    position: relative;
  }
</style>
```

### Verschiedene Lichttypen

```html
<div class="light-types-demo">
  <div class="light-demo">
    <h3>Ambient Light</h3>
    <div class="light-box light-surface light-ambient">
      <div class="light-content"></div>
    </div>
  </div>
  
  <div class="light-demo">
    <h3>Directional Light</h3>
    <div class="light-box light-surface light-directional" style="--light-angle: 135deg;">
      <div class="light-content"></div>
    </div>
  </div>
  
  <div class="light-demo">
    <h3>Point Light</h3>
    <div class="light-box light-surface light-point" style="--light-position-x: 50%; --light-position-y: 50%;">
      <div class="light-source light-dim"></div>
      <div class="light-content"></div>
    </div>
  </div>
  
  <div class="light-demo">
    <h3>Spot Light</h3>
    <div class="light-box light-surface light-spot" style="--light-position-x: 50%; --light-position-y: 10%; --light-angle: 0deg; --light-cone: 30deg;">
      <div class="light-source light-bright"></div>
      <div class="light-content"></div>
    </div>
  </div>
</div>

<style>
  .light-types-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
    color: white;
  }
  
  .light-demo h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .light-box {
    position: relative;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #2a2a4a;
  }
  
  .light-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

### Interaktive Lichteffekte

```html
<div class="light-interactive-demo">
  <div class="light-cursor-follow">
    <div class="light-source light-follow-cursor light-bright light-warm"></div>
    <div class="light-surface-grid">
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
      <div class="light-surface light-shadow-md light-highlight"></div>
    </div>
  </div>
  
  <div class="light-interactive-buttons">
    <button class="light-button light-surface light-interactive light-highlight">Hover for Lichteffekt</button>
    <button class="light-button light-surface light-interactive light-highlight light-warm">Warmes Licht</button>
    <button class="light-button light-surface light-interactive light-highlight light-cool">Kuhles Licht</button>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const cursorFollow = document.querySelector('.light-cursor-follow');
    const lightSource = cursorFollow.querySelector('.light-source');
    
    cursorFollow.addEventListener('mousemove', function(e) {
      const rect = cursorFollow.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      lightSource.style.setProperty('--light-position-x', `${x}px`);
      lightSource.style.setProperty('--light-position-y', `${y}px`);
    });
  });
</script>

<style>
  .light-interactive-demo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
    color: white;
  }
  
  .light-cursor-follow {
    position: relative;
    height: 400px;
    background-color: #2a2a4a;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .light-surface-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    height: 100%;
  }
  
  .light-surface-grid .light-surface {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .light-follow-cursor {
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  
  .light-interactive-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .light-button {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #2a2a4a;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
</style>
```

### 3D-Cardn with Lichteffekten

```html
<div class="light-cards-containers">
  <div class="light-card light-surface light-directional light-shadow-md light-highlight" style="--light-angle: 135deg;">
    <div class="light-card-content">
      <h3>3D-Card with Licht</h3>
      <p>these Card nutzt direktionales Licht, um einen 3D-effect to erzeugen.</p>
      <button class="light-button light-surface light-interactive">more erfahren</button>
    </div>
  </div>
  
  <div class="light-card light-surface light-point light-shadow-md light-highlight light-warm">
    <div class="light-source" style="--light-position-x: 20%; --light-position-y: 20%;"></div>
    <div class="light-card-content">
      <h3>3D-Card with Punktlicht</h3>
      <p>these Card verwendet a warmes Punktlicht in the oberen linken Ecke.</p>
      <button class="light-button light-surface light-interactive">more erfahren</button>
    </div>
  </div>
  
  <div class="light-card light-surface light-interactive light-shadow-md light-highlight light-cool">
    <div class="light-card-content">
      <h3>Interaktive 3D-Card</h3>
      <p>Bewegen them den Mauszeiger over these Card, um den Lichteffekt to sehen.</p>
      <button class="light-button light-surface light-interactive">more erfahren</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const interactiveCard = document.querySelector('.light-card.light-interactive');
    
    interactiveCard.addEventListener('mousemove', function(e) {
      const rect = interactiveCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Berechnung the Lichtposition relativ zur Cardngrosse
      const lightX = (x / rect.width) * 100;
      const lightY = (y / rect.height) * 100;
      
      interactiveCard.style.setProperty('--light-position-x', `${lightX}%`);
      interactiveCard.style.setProperty('--light-position-y', `${lightY}%`);
    });
  });
</script>

<style>
  .light-cards-containers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
  }
  
  .light-card {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    padding: 1.5rem;
    background-color: #2a2a4a;
    transition: transform 0.3s ease;
  }
  
  .light-card:hover {
    transform: translateY(-5px);
  }
  
  .light-card-content {
    position: relative;
    z-index: 1;
    color: white;
  }
  
  .light-card-content h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .light-card-content p {
    margin-bottom: 1.5rem;
  }
  
  .light-card .light-button {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
```

## Customization

the Light-effects can over CSS Variables angepasst become:

```css
:root {
  /* Lichtquellenparameter */
  --light-source-size: 20px;
  --light-source-intensity: 1;
  --light-source-color: #ffffff;
  
  /* Positionierung and alignment */
  --light-position-x: 50%;
  --light-position-y: 50%;
  --light-angle: 45deg;
  --light-distance: 500px;
  --light-cone: 45deg;
  
  /* Schattenparameter */
  --light-shadow-color: rgba(0, 0, 0, 0.2);
  --light-shadow-blur: 10px;
  --light-shadow-spread: 0px;
  --light-shadow-x-offset: 5px;
  --light-shadow-y-offset: 5px;
  
  /* Highlight-parameter */
  --light-highlight-color: rgba(255, 255, 255, 0.1);
  --light-highlight-blur: 0px;
  --light-highlight-spread: 1px;
  --light-highlight-opacity: 0.5;
  
  /* Farbvarianten */
  --light-warm-color: #ffb74d;
  --light-warm-intensity: 1.2;
  --light-cool-color: #64b5f6;
  --light-cool-intensity: 1;
  --light-primary-color: #3f51b5;
  --light-secondary-color: #ff4081;
  --light-success-color: #4caf50;
  --light-warning-color: #ff9800;
  --light-danger-color: #f44336;
  --light-info-color: #2196f3;
  
  /* Spezialeffekte */
  --light-halo-size: 50px;
  --light-halo-opacity: 0.3;
  --light-ray-length: 100px;
  --light-ray-opacity: 0.2;
  --light-bloom-radius: 20px;
  --light-bloom-intensity: 0.5;
}
```

## CSS-Implementation

the grundlegenden Light-effects become through CSS-shadow, Verlaufe and Pseudo-elements implementiert:

```css
/* Lichtquellen */
.light-source {
  position: absolute;
  width: var(--light-source-size);
  height: var(--light-source-size);
  background-color: var(--light-source-color);
  border-radius: 50%;
  box-shadow: 0 0 calc(var(--light-source-size) * 2) calc(var(--light-source-size) * 0.5) 
              rgba(var(--light-source-color-rgb), var(--light-source-intensity));
  opacity: var(--light-source-intensity);
  z-index: 10;
  top: var(--light-position-y);
  left: var(--light-position-x);
}

/* Beleuchtete Oberflachen */
.light-surface {
  position: relative;
  overflow: hidden;
}

/* Direktionales Licht */
.light-directional {
  position: relative;
}

.light-directional::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    var(--light-angle),
    rgba(255, 255, 255, var(--light-highlight-opacity)),
    transparent 60%
  );
  pointer-events: none;
}

/* Punktlicht */
.light-point::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--light-position-x) var(--light-position-y),
    rgba(255, 255, 255, var(--light-highlight-opacity)),
    transparent 70%
  );
  pointer-events: none;
}

/* Schattenvarianten */
.light-shadow-md {
  box-shadow: 
    var(--light-shadow-x-offset)
    var(--light-shadow-y-offset)
    var(--light-shadow-blur)
    var(--light-shadow-spread)
    var(--light-shadow-color);
}

/* Highlight-effects */
.light-highlight::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to bottom right,
    var(--light-highlight-color),
    transparent 70%
  );
  opacity: var(--light-highlight-opacity);
}

/* Farbvarianten */
.light-warm {
  --light-source-color: var(--light-warm-color);
  --light-source-intensity: var(--light-warm-intensity);
}

/* Interaktive effects */
.light-interactive {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.light-interactive:hover {
  --light-highlight-opacity: 0.7;
  transform: translateY(-2px);
}
```

## Fortgeschrittene Lichteffekte

### Ambiente Beleuchtung

```css
.light-ambient {
  background-color: rgba(var(--ambient-light-color-rgb), 0.1);
  box-shadow: inset 0 0 20px rgba(var(--ambient-light-color-rgb), 0.2);
}
```

### Volumetrisches Licht

```css
.light-volumetric::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from var(--light-angle),
    transparent,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.2) 40%,
    rgba(255, 255, 255, 0.1) 60%,
    transparent 80%
  );
  pointer-events: none;
  opacity: 0.7;
  mix-blend-mode: screen;
}
```

### Dynamische Lichteffekte

```js
// Dynamisches Licht, the on Scroll-position reagiert
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const lightAngle = 180 + (scrollPosition * 180); // Licht from 180° until 360° drehen
  
  document.documentElement.style.setProperty('--light-angle', `${lightAngle}deg`);
});
```

## Accessibility

at the Usage from Light-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Kontrast between Text and background ausreichend ist, also if Lichteffekte angewendet become
2. **Bewegung reduzieren**: Bieten them a Option zum deactivate from animierten Lichteffekten for Nutzer with Empfindlichkeiten
3. **Alternative Styles**: Stellen them alternative, flachere Styles for Nutzer bereit, the Probleme with the Wahrnehmung from Tiefe have

```css
/* Verbesserte Textlesbarkeit at Lichteffekten */
.light-surface {
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Reduzierte Bewegung for animierte Lichteffekte */
@media (prefers-reduced-motion: reduce) {
  .light-follow-cursor,
  .light-interactive::before,
  .light-interactive::after {
    transition: none !important;
    animation: none !important;
  }
}

/* Alternative Styles for reduzierte effects */
@media (prefers-reduced-transparency: reduce) {
  .light-surface::before,
  .light-surface::after {
    opacity: 0.3;
    background: none !important;
  }
}
```

## Performance-Optimierung

Lichteffekte can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Begrenzen them the Lichtquellen**: use them not to many Lichtquellen on einer Seite
2. **Vermeiden them komplexe shadow**: Reduzieren them the Komplexitat from shadow for bessere Performance
3. **Layer-Promotion**: use them `will-change` for animierte Lichteffekte
4. **Reduktion at niedrigen Geraten**: Erkennen them Gerate with niedriger Leistung and bieten them vereinfachte effects on

```css
/* Performance-Optimierung for Lichteffekte */
.light-surface {
  will-change: transform, box-shadow;
}

/* Layer-Promotion for bessere Rendering-Performance */
.light-interactive {
  transform: translateZ(0);
}

/* Reduzierte effects for einfache Display */
.light-reduced {
  --light-shadow-blur: 5px;
  --light-highlight-opacity: 0.3;
}
```

## Browser-Kompatibilitat

the Light-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Gradients | ✓ | ✓ | ✓ | ✓ | Teilweise |
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| mix-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| conic-gradient | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser become vereinfachte Fallback-Styles bereitgestellt, the ahnliche visuelle effects with grundlegender CSS-Unterstutzung bieten. 
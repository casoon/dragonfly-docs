---
title: Light Effects
category: Effects
---

# Light-Effekte

Die Light-Effekte der Casoon UI Library bieten eine Sammlung von Beleuchtungseffekten, die Ihrer Benutzeroberfläche Tiefe, Dimensionalität und realistische Lichtinteraktionen verleihen, um ein immersives und visuell ansprechendes Nutzererlebnis zu schaffen.

## Überblick

Light-Effekte simulieren die Interaktion von Licht mit Oberflächen, um realistische Schattierungen, Highlights und Reflexionen zu erzeugen. Diese Effekte können verwendet werden, um Tiefe zu vermitteln, Elemente hervorzuheben und eine natürlichere, physisch plausible Benutzeroberfläche zu gestalten.

## Installation

Importieren Sie das Light-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/light.css';
```

## Verfügbare Klassen

### Grundlegende Beleuchtungseffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.light-source` | Definiert ein Element als Lichtquelle |
| `.light-surface` | Bereitet ein Element auf Lichtinteraktionen vor |
| `.light-ambient` | Erzeugt ein sanftes Umgebungslicht ohne starke Schatten |
| `.light-directional` | Erzeugt gerichtetes Licht aus einer bestimmten Richtung |
| `.light-point` | Erzeugt punktförmiges Licht, das in alle Richtungen strahlt |
| `.light-spot` | Erzeugt Spotlicht mit definiertem Fokusbereich |

### Lichtintensitäten

| Klasse | Beschreibung |
|--------|-------------|
| `.light-dim` | Gedämpftes Licht mit niedriger Intensität |
| `.light-normal` | Normales Licht mit Standardintensität |
| `.light-bright` | Helles Licht mit erhöhter Intensität |
| `.light-intense` | Sehr intensives Licht mit starker Auswirkung |

### Lichtfarben

| Klasse | Beschreibung |
|--------|-------------|
| `.light-warm` | Warmes Licht (gelblich-orange) |
| `.light-cool` | Kühles Licht (bläulich) |
| `.light-neutral` | Neutrales weißes Licht |
| `.light-primary` | Licht in der Primärfarbe |
| `.light-secondary` | Licht in der Sekundärfarbe |
| `.light-success` | Licht in Erfolgsfarbe (grün) |
| `.light-warning` | Licht in Warnfarbe (gelb/orange) |
| `.light-danger` | Licht in Gefahrenfarbe (rot) |
| `.light-info` | Licht in Informationsfarbe (blau) |

### Schatteneffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.light-shadow-sm` | Kleiner, weicher Schatten |
| `.light-shadow-md` | Mittlerer Schatten mit moderater Ausbreitung |
| `.light-shadow-lg` | Großer Schatten mit weiter Ausbreitung |
| `.light-shadow-sharp` | Scharfer, definierter Schatten |
| `.light-shadow-soft` | Weicher, diffuser Schatten |
| `.light-shadow-inner` | Nach innen gerichteter Schatten |
| `.light-shadow-floating` | Schwebender Schatten für erhöhte Elemente |

### Highlight-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.light-highlight` | Fügt Highlights an beleuchteten Kanten hinzu |
| `.light-highlight-subtle` | Subtile Highlights mit geringer Intensität |
| `.light-highlight-strong` | Starke Highlights mit hoher Intensität |
| `.light-reflection` | Erzeugt subtile Lichtreflexionen auf Oberflächen |
| `.light-specular` | Erzeugt spiegelnde Lichtreflexionen auf glänzenden Oberflächen |

### Spezialeffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.light-halo` | Erzeugt einen Halo-Effekt um Lichtquellen |
| `.light-rays` | Erzeugt sichtbare Lichtstrahlen (Godrays) |
| `.light-lens-flare` | Erzeugt Lens-Flare-Effekte für starke Lichtquellen |
| `.light-volumetric` | Erzeugt volumetrische Lichteffekte |
| `.light-ambient-occlusion` | Simuliert Umgebungsverdeckung in Ecken und Spalten |
| `.light-bloom` | Erzeugt einen Bloom-Effekt für helle Bereiche |

### Interaktive Lichteffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.light-hover` | Aktiviert Lichteffekte bei Hover |
| `.light-active` | Aktiviert Lichteffekte bei aktivem Zustand |
| `.light-focus` | Aktiviert Lichteffekte bei Fokus |
| `.light-interactive` | Licht reagiert auf Interaktionen |
| `.light-follow-cursor` | Lichtquelle folgt dem Cursor |

## Beispiele

### Grundlegende Lichtquellen und Oberflächen

```html
<div class="light-container">
  <div class="light-source light-point light-warm" style="--light-position-x: 30%; --light-position-y: 30%;"></div>
  
  <div class="light-surface light-shadow-md">
    <h3>Beleuchtete Box</h3>
    <p>Diese Box reagiert auf die Lichtquelle in der oberen linken Ecke.</p>
  </div>
  
  <div class="light-surface light-shadow-md light-highlight">
    <h3>Beleuchtete Box mit Highlights</h3>
    <p>Diese Box zeigt zusätzliche Highlights an beleuchteten Kanten.</p>
  </div>
</div>

<style>
  .light-container {
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
    <button class="light-button light-surface light-interactive light-highlight">Hover für Lichteffekt</button>
    <button class="light-button light-surface light-interactive light-highlight light-warm">Warmes Licht</button>
    <button class="light-button light-surface light-interactive light-highlight light-cool">Kühles Licht</button>
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

### 3D-Karten mit Lichteffekten

```html
<div class="light-cards-container">
  <div class="light-card light-surface light-directional light-shadow-md light-highlight" style="--light-angle: 135deg;">
    <div class="light-card-content">
      <h3>3D-Karte mit Licht</h3>
      <p>Diese Karte nutzt direktionales Licht, um einen 3D-Effekt zu erzeugen.</p>
      <button class="light-button light-surface light-interactive">Mehr erfahren</button>
    </div>
  </div>
  
  <div class="light-card light-surface light-point light-shadow-md light-highlight light-warm">
    <div class="light-source" style="--light-position-x: 20%; --light-position-y: 20%;"></div>
    <div class="light-card-content">
      <h3>3D-Karte mit Punktlicht</h3>
      <p>Diese Karte verwendet ein warmes Punktlicht in der oberen linken Ecke.</p>
      <button class="light-button light-surface light-interactive">Mehr erfahren</button>
    </div>
  </div>
  
  <div class="light-card light-surface light-interactive light-shadow-md light-highlight light-cool">
    <div class="light-card-content">
      <h3>Interaktive 3D-Karte</h3>
      <p>Bewegen Sie den Mauszeiger über diese Karte, um den Lichteffekt zu sehen.</p>
      <button class="light-button light-surface light-interactive">Mehr erfahren</button>
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
      
      // Berechnung der Lichtposition relativ zur Kartengröße
      const lightX = (x / rect.width) * 100;
      const lightY = (y / rect.height) * 100;
      
      interactiveCard.style.setProperty('--light-position-x', `${lightX}%`);
      interactiveCard.style.setProperty('--light-position-y', `${lightY}%`);
    });
  });
</script>

<style>
  .light-cards-container {
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

## Anpassung

Die Light-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Lichtquellenparameter */
  --light-source-size: 20px;
  --light-source-intensity: 1;
  --light-source-color: #ffffff;
  
  /* Positionierung und Ausrichtung */
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
  
  /* Highlight-Parameter */
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

## CSS-Implementierung

Die grundlegenden Light-Effekte werden durch CSS-Schatten, Verläufe und Pseudo-Elemente implementiert:

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

/* Beleuchtete Oberflächen */
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

/* Highlight-Effekte */
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

/* Interaktive Effekte */
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
// Dynamisches Licht, das auf Scroll-Position reagiert
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const lightAngle = 180 + (scrollPosition * 180); // Licht von 180° bis 360° drehen
  
  document.documentElement.style.setProperty('--light-angle', `${lightAngle}deg`);
});
```

## Barrierefreiheit

Bei der Verwendung von Light-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist, auch wenn Lichteffekte angewendet werden
2. **Bewegung reduzieren**: Bieten Sie eine Option zum Deaktivieren von animierten Lichteffekten für Nutzer mit Empfindlichkeiten
3. **Alternative Stile**: Stellen Sie alternative, flachere Stile für Nutzer bereit, die Probleme mit der Wahrnehmung von Tiefe haben

```css
/* Verbesserte Textlesbarkeit bei Lichteffekten */
.light-surface {
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Reduzierte Bewegung für animierte Lichteffekte */
@media (prefers-reduced-motion: reduce) {
  .light-follow-cursor,
  .light-interactive::before,
  .light-interactive::after {
    transition: none !important;
    animation: none !important;
  }
}

/* Alternative Stile für reduzierte Effekte */
@media (prefers-reduced-transparency: reduce) {
  .light-surface::before,
  .light-surface::after {
    opacity: 0.3;
    background: none !important;
  }
}
```

## Performance-Optimierung

Lichteffekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Begrenzen Sie die Lichtquellen**: Verwenden Sie nicht zu viele Lichtquellen auf einer Seite
2. **Vermeiden Sie komplexe Schatten**: Reduzieren Sie die Komplexität von Schatten für bessere Performance
3. **Layer-Promotion**: Verwenden Sie `will-change` für animierte Lichteffekte
4. **Reduktion bei niedrigen Geräten**: Erkennen Sie Geräte mit niedriger Leistung und bieten Sie vereinfachte Effekte an

```css
/* Performance-Optimierung für Lichteffekte */
.light-surface {
  will-change: transform, box-shadow;
}

/* Layer-Promotion für bessere Rendering-Performance */
.light-interactive {
  transform: translateZ(0);
}

/* Reduzierte Effekte für einfache Darstellung */
.light-reduced {
  --light-shadow-blur: 5px;
  --light-highlight-opacity: 0.3;
}
```

## Browser-Kompatibilität

Die Light-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Gradients | ✓ | ✓ | ✓ | ✓ | Teilweise |
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| mix-blend-mode | ✓ | ✓ | ✓ | ✓ | ✗ |
| conic-gradient | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser werden vereinfachte Fallback-Stile bereitgestellt, die ähnliche visuelle Effekte mit grundlegender CSS-Unterstützung bieten. 
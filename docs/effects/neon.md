---
title: Neon Effects
category: Effects
---

# Neon-Effekte

Die Neon-Effekte der Casoon UI Library bieten eine Sammlung von leuchtenden, kräftigen visuellen Effekten, die an klassische Neonröhren erinnern. Diese Effekte verleihen Ihrer Benutzeroberfläche einen energiegeladenen, modernen Look mit hohem visuellen Kontrast.

## Überblick

Neon-Effekte kombinieren leuchtende Colors mit einem charakteristischen Glühen, um ein Erscheinungsbild zu erzeugen, das an klassische Neonlichter erinnert. Sie sind ideal für Akzente, Hervorhebungen und Elemente, die Aufmerksamkeit erregen sollen. Die Neon-Effekte der Casoon UI Library sind vollständig anpassbar und für verschiedene UI-Elemente optimiert.

## Installation

Importieren Sie das Neon-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/neon.css';
```

## Verfügbare Klassen

### Grundlegende Neon-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.neon` | Standardmäßiger Neon-Effekt |
| `.neon-sm` | Kleiner Neon-Effekt mit schmalerem Glühen |
| `.neon-md` | Mittlerer Neon-Effekt (Standard) |
| `.neon-lg` | Großer Neon-Effekt mit breiterem Glühen |
| `.neon-xl` | Extra großer Neon-Effekt mit sehr breitem Glühen |
| `.neon-text` | Neon-Effekt speziell für Textelemente optimiert |
| `.neon-border` | Neon-Effekt nur für Ränder |
| `.neon-box` | Neon-Effekt für Boxen und Container |
| `.neon-outline` | Neon-Effekt als Outline um Elemente |
| `.neon-inner` | Nach innen gerichteter Neon-Effekt |
| `.neon-inset` | Kombination aus innerem und äußerem Neon-Effekt |

### Neon-Farbvarianten

| Klasse | Beschreibung |
|--------|-------------|
| `.neon-blue` | Blauer Neon-Effekt (#00f2ff) |
| `.neon-red` | Roter Neon-Effekt (#ff003c) |
| `.neon-green` | Grüner Neon-Effekt (#00ff66) |
| `.neon-pink` | Rosa Neon-Effekt (#ff00ff) |
| `.neon-purple` | Violetter Neon-Effekt (#9d00ff) |
| `.neon-yellow` | Gelber Neon-Effekt (#fffc00) |
| `.neon-orange` | Oranger Neon-Effekt (#ff9900) |
| `.neon-cyan` | Cyan-farbener Neon-Effekt (#00ffff) |
| `.neon-lime` | Limetten-grüner Neon-Effekt (#b3ff00) |
| `.neon-magenta` | Magenta-farbener Neon-Effekt (#ff00b3) |
| `.neon-white` | Weißer Neon-Effekt (#ffffff) |
| `.neon-primary` | Neon-Effekt in Primärfarbe |
| `.neon-secondary` | Neon-Effekt in Sekundärfarbe |
| `.neon-info` | Neon-Effekt in Informationsfarbe |
| `.neon-success` | Neon-Effekt in Erfolgsfarbe |
| `.neon-warning` | Neon-Effekt in Warnfarbe |
| `.neon-danger` | Neon-Effekt in Gefahrenfarbe |

### Interaktive Neon-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.neon-hover` | Zeigt Neon-Effekt bei Hover an |
| `.neon-active` | Zeigt Neon-Effekt im aktiven Zustand an |
| `.neon-focus` | Zeigt Neon-Effekt bei Fokus an |
| `.neon-flash` | Aufblitzender Neon-Effekt |
| `.neon-pulse` | Pulsierender Neon-Effekt |
| `.neon-flicker` | Flackernder Neon-Effekt wie bei echten Neonröhren |
| `.neon-breathe` | Sanft pulsierender Neon-Effekt |
| `.neon-gradient` | Neon-Effekt mit Farbverlauf |
| `.neon-rainbow` | Neon-Effekt mit Regenbogenfarben |

### Element-spezifische Neon-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.neon-button` | Neon-Effekt für Buttons |
| `.neon-card` | Neon-Effekt für Cardn |
| `.neon-icon` | Neon-Effekt für Icons |
| `.neon-link` | Neon-Effekt für Links |
| `.neon-input` | Neon-Effekt für Inputer |
| `.neon-heading` | Neon-Effekt für Überschriften |
| `.neon-badge` | Neon-Effekt für Badges |
| `.neon-nav` | Neon-Effekt für Navigationselemente |
| `.neon-loader` | Neon-Effekt für Ladeanimationen |

## Examples

### Grundlegende Neon-Texte

```html
<div class="neon-examples">
  <h2 class="neon-text neon-blue">NEON BLUE</h2>
  <h2 class="neon-text neon-red">NEON RED</h2>
  <h2 class="neon-text neon-green">NEON GREEN</h2>
  <h2 class="neon-text neon-pink">NEON PINK</h2>
  <h2 class="neon-text neon-purple">NEON PURPLE</h2>
  <h2 class="neon-text neon-yellow">NEON YELLOW</h2>
</div>

<style>
  .neon-examples {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    background-color: #111;
    justify-content: center;
    align-items: center;
  }
  
  .neon-text {
    font-family: 'Arial', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0;
  }
</style>
```

### Neon-Buttons

```html
<div class="neon-button-examples">
  <button class="neon-button neon-border neon-blue">BLUE BUTTON</button>
  <button class="neon-button neon-border neon-red">RED BUTTON</button>
  <button class="neon-button neon-border neon-green">GREEN BUTTON</button>
  <button class="neon-button neon-border neon-pink">PINK BUTTON</button>
  <button class="neon-button neon-border neon-hover neon-purple">HOVER ME</button>
  <button class="neon-button neon-border neon-pulse neon-cyan">PULSING</button>
</div>

<style>
  .neon-button-examples {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem;
    background-color: #111;
    justify-content: center;
  }
  
  .neon-button {
    padding: 0.8rem 2rem;
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: transparent;
    border: 2px solid;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
```

### Neon-Cardn

```html
<div class="neon-card-examples">
  <div class="neon-card neon-border neon-blue">
    <h3>Neon Blue Card</h3>
    <p>Eine Card mit blauem Neon-Effekt an den Rändern.</p>
  </div>
  
  <div class="neon-card neon-border neon-red">
    <h3>Neon Red Card</h3>
    <p>Eine Card mit rotem Neon-Effekt an den Rändern.</p>
  </div>
  
  <div class="neon-card neon-box neon-green">
    <h3>Neon Green Box</h3>
    <p>Eine Card mit grünem Neon-Effekt für die gesamte Box.</p>
  </div>
  
  <div class="neon-card neon-border neon-hover neon-pink">
    <h3>Hover Card</h3>
    <p>Bewegen Sie den Mauszeiger über diese Card für einen Neon-Effekt.</p>
  </div>
</div>

<style>
  .neon-card-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 3rem;
    background-color: #111;
  }
  
  .neon-card {
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .neon-card h3 {
    margin-top: 0;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .neon-card p {
    margin-bottom: 0;
    font-family: 'Arial', sans-serif;
    opacity: 0.8;
  }
</style>
```

### Animierte Neon-Effekte

```html
<div class="neon-animation-examples">
  <div class="neon-example">
    <h3 class="neon-text neon-pulse neon-blue">PULSIEREND</h3>
  </div>
  
  <div class="neon-example">
    <h3 class="neon-text neon-flicker neon-red">FLACKERND</h3>
  </div>
  
  <div class="neon-example">
    <h3 class="neon-text neon-flash neon-green">BLITZEND</h3>
  </div>
  
  <div class="neon-example">
    <div class="neon-loader neon-circle neon-pink"></div>
    <p>Neon Loader</p>
  </div>
  
  <div class="neon-example">
    <h3 class="neon-text neon-rainbow">REGENBOGEN</h3>
  </div>
</div>

<style>
  .neon-animation-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding: 3rem;
    background-color: #111;
  }
  
  .neon-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .neon-example p {
    margin-top: 1rem;
    font-family: 'Arial', sans-serif;
    color: white;
    opacity: 0.7;
  }
  
  .neon-loader.neon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: currentColor;
    animation: neon-spin 1s linear infinite;
  }
  
  @keyframes neon-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
```

### Neon-Navigationsmenü

```html
<div class="neon-nav-example">
  <nav class="neon-nav">
    <a href="#" class="neon-nav-item neon-border neon-blue active">Home</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-red">Produkte</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-green">Dienstleistungen</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-pink">Über uns</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-purple">Kontakt</a>
  </nav>
</div>

<style>
  .neon-nav-example {
    padding: 3rem;
    background-color: #111;
    display: flex;
    justify-content: center;
  }
  
  .neon-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .neon-nav-item {
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .neon-nav-item.active {
    background-color: rgba(255, 255, 255, 0.05);
  }
</style>
```

## Anpassung

Die Neon-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Neon-Parameter */
  --neon-blur-radius: 5px;
  --neon-spread-radius: 3px;
  --neon-opacity: 0.8;
  --neon-intensity: 1;
  
  /* Neon-Sizesvarianten */
  --neon-sm-blur: 3px;
  --neon-sm-spread: 1px;
  --neon-md-blur: 5px;
  --neon-md-spread: 3px;
  --neon-lg-blur: 10px;
  --neon-lg-spread: 5px;
  --neon-xl-blur: 15px;
  --neon-xl-spread: 8px;
  
  /* Neon-Farbvarianten */
  --neon-blue-color: #00f2ff;
  --neon-red-color: #ff003c;
  --neon-green-color: #00ff66;
  --neon-pink-color: #ff00ff;
  --neon-purple-color: #9d00ff;
  --neon-yellow-color: #fffc00;
  --neon-orange-color: #ff9900;
  --neon-cyan-color: #00ffff;
  --neon-lime-color: #b3ff00;
  --neon-magenta-color: #ff00b3;
  --neon-white-color: #ffffff;
  
  /* Neon-Animationsparameter */
  --neon-pulse-duration: 2s;
  --neon-flash-duration: 0.5s;
  --neon-flicker-duration: 3s;
  --neon-breathe-duration: 4s;
}
```

## CSS-Implementierung

Der grundlegende Neon-Effekt wird durch CSS-Schatten und Farbwerte implementiert:

```css
/* Grundlegender Neon-Text-Effekt */
.neon-text {
  color: #fff;
  text-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 var(--neon-spread-radius) var(--neon-color);
}

/* Neon-Border-Effekt */
.neon-border {
  border: 2px solid var(--neon-color);
  box-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    inset 0 0 var(--neon-blur-radius) var(--neon-color);
  color: var(--neon-color);
}

/* Neon-Box-Effekt */
.neon-box {
  box-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color),
    inset 0 0 var(--neon-blur-radius) var(--neon-color);
  border: 1px solid var(--neon-color);
  color: #fff;
}

/* Neon-Outline-Effekt */
.neon-outline {
  outline: 2px solid var(--neon-color);
  outline-offset: 2px;
  box-shadow: 0 0 var(--neon-blur-radius) var(--neon-color);
  color: var(--neon-color);
}

/* Neon-Farbvarianten */
.neon-blue {
  --neon-color: var(--neon-blue-color);
}

.neon-red {
  --neon-color: var(--neon-red-color);
}

/* Weitere Farbvarianten... */

/* Neon-Sizesvarianten */
.neon-sm {
  --neon-blur-radius: var(--neon-sm-blur);
  --neon-spread-radius: var(--neon-sm-spread);
}

.neon-lg {
  --neon-blur-radius: var(--neon-lg-blur);
  --neon-spread-radius: var(--neon-lg-spread);
}

/* Neon-Animationen */
.neon-pulse {
  animation: neon-pulse var(--neon-pulse-duration) infinite alternate;
}

@keyframes neon-pulse {
  0% {
    opacity: 0.5;
    text-shadow: 0 0 var(--neon-blur-radius) var(--neon-color);
  }
  100% {
    opacity: 1;
    text-shadow: 
      0 0 var(--neon-blur-radius) var(--neon-color),
      0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color),
      0 0 calc(var(--neon-blur-radius) * 3) var(--neon-color);
  }
}

.neon-flicker {
  animation: neon-flicker var(--neon-flicker-duration) infinite alternate;
}

@keyframes neon-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
    text-shadow:
      0 0 var(--neon-blur-radius) var(--neon-color),
      0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color);
  }
  20%, 24%, 55% {
    opacity: 0.5;
    text-shadow: none;
  }
}

/* Weitere Animationen... */

/* Interaktive States */
.neon-hover {
  transition: all 0.3s ease;
}

.neon-hover:hover {
  box-shadow: 
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color),
    inset 0 0 var(--neon-blur-radius) var(--neon-color);
  text-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color);
}
```

## Fortgeschrittene Neon-Effekte

### Neon-Regenbogen-Effekt

```css
.neon-rainbow {
  --neon-color: #ff0000;
  animation: neon-rainbow 8s linear infinite;
}

@keyframes neon-rainbow {
  0% { --neon-color: #ff0000; }
  17% { --neon-color: #ffff00; }
  33% { --neon-color: #00ff00; }
  50% { --neon-color: #00ffff; }
  67% { --neon-color: #0000ff; }
  83% { --neon-color: #ff00ff; }
  100% { --neon-color: #ff0000; }
}
```

### Neon-Gradient-Effekt

```css
.neon-gradient {
  background: linear-gradient(
    90deg,
    var(--neon-blue-color),
    var(--neon-purple-color),
    var(--neon-pink-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    0 0 var(--neon-blur-radius) var(--neon-blue-color),
    0 0 var(--neon-blur-radius) var(--neon-purple-color),
    0 0 var(--neon-blur-radius) var(--neon-pink-color);
}
```

### Neon-Text mit Animation

```css
.neon-text-animated {
  position: relative;
  color: transparent;
}

.neon-text-animated::before,
.neon-text-animated::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.neon-text-animated::before {
  color: var(--neon-color);
  z-index: 1;
}

.neon-text-animated::after {
  color: var(--neon-color);
  z-index: 2;
  text-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color);
  animation: neon-text-flicker 2s infinite alternate;
}

@keyframes neon-text-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
  }
  20%, 24%, 55% {
    opacity: 0.5;
  }
}
```

## Accessibility

Bei der Usage von Neon-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass Text trotz Neon-Effekt ausreichend lesbar bleibt
2. **Flackernde Effekte**: Bieten Sie eine Möglichkeit, stark flackernde Effekte zu deaktivieren, da diese Anfälle bei empfindlichen Personen auslösen können
3. **Farbblindheit**: Verlassen Sie sich nicht nur auf Colors, um Informationen zu vermitteln

```css
/* Verbesserte Lesbarkeit für Neon-Text */
.neon-text-accessible {
  color: var(--neon-color);
  text-shadow:
    0 0 1px #fff,
    0 0 var(--neon-blur-radius) var(--neon-color);
  font-weight: bold;
}

/* Reduzierte Animation für Benutzer mit Empfindlichkeiten */
@media (prefers-reduced-motion: reduce) {
  .neon-flicker,
  .neon-flash,
  .neon-pulse,
  .neon-breathe,
  .neon-rainbow {
    animation: none !important;
  }
}
```

## Performance-Optimierung

Neon-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Anzahl begrenzen**: Verwenden Sie Neon-Effekte sparsam und nur für wichtige Elemente
2. **Animations-Performance**: Verwenden Sie für Animationen Eigenschaften, die weniger Repaints erfordern (transform, opacity)
3. **GPU-Beschleunigung**: Nutzen Sie `will-change` oder `transform: translateZ(0)` für Hardware-Beschleunigung

```css
/* Performance-Optimierung für Neon-Effekte */
.neon-optimized {
  will-change: box-shadow, text-shadow;
  transform: translateZ(0);
}

/* Reduzierte Komplexität für ältere Geräte */
@media (prefers-reduced-motion: reduce) {
  .neon-text,
  .neon-border,
  .neon-box {
    --neon-blur-radius: 3px;
    --neon-spread-radius: 1px;
  }
}
```

## Browser-Kompatibilität

Die Neon-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |
| Animationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Gradient Text | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Effekte nicht vollständig unterstützen, werden vereinfachte Fallback-Styles bereitgestellt. 
Neon-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser werden Fallbacks mit einfacheren Hervorhebungen bereitgestellt. 
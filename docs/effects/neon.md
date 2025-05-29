---
title: Neon Effects
category: Effects
---

# Neon-effects

the Neon-effects the Casoon UI Library bieten a Sammlung from leuchtenden, kraftigen visuellen Effekten, the on klassische Neonrohren erinnern. these effects verleihen Ihrer Benutzeroberflache einen energiegeladenen, modernen Look with hohem visuellen Kontrast.

## Uberblick

Neon-effects combine leuchtende Colors with einem charakteristischen Gluhen, um a Erscheinungsbild to erzeugen, the on klassische Neonlichter erinnert. them sind ideal for Akzente, Hervorhebungen and elements, the Aufmerksamkeit erregen should. the Neon-effects the Casoon UI Library sind vollstandig anpassbar and for verschiedene UI-elements optimiert.

## Installation

import them the Neon-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/neon.css';
```

## Verfugbare classes

### Grundlegende Neon-effects

| Class | Description |
|--------|-------------|
| `.neon` | Standardmassiger Neon-effect |
| `.neon-sm` | smaller Neon-effect with schmalerem Gluhen |
| `.neon-md` | Mittlerer Neon-effect (Standard) |
| `.neon-lg` | Grosser Neon-effect with breiterem Gluhen |
| `.neon-xl` | Extra grosser Neon-effect with very breitem Gluhen |
| `.neon-text` | Neon-effect speziell for Textelemente optimiert |
| `.neon-border` | Neon-effect only for Rander |
| `.neon-box` | Neon-effect for boxes and containers |
| `.neon-outline` | Neon-effect as Outline um elements |
| `.neon-inner` | after innen gerichteter Neon-effect |
| `.neon-inset` | Kombination aus innerem and ausserem Neon-effect |

### Neon-Farbvarianten

| Class | Description |
|--------|-------------|
| `.neon-blue` | Blauer Neon-effect (#00f2ff) |
| `.neon-red` | Roter Neon-effect (#ff003c) |
| `.neon-green` | Gruner Neon-effect (#00ff66) |
| `.neon-pink` | Rosa Neon-effect (#ff00ff) |
| `.neon-purple` | Violetter Neon-effect (#9d00ff) |
| `.neon-yellow` | Gelber Neon-effect (#fffc00) |
| `.neon-orange` | Oranger Neon-effect (#ff9900) |
| `.neon-cyan` | Cyan-farbener Neon-effect (#00ffff) |
| `.neon-lime` | Limetten-gruner Neon-effect (#b3ff00) |
| `.neon-magenta` | Magenta-farbener Neon-effect (#ff00b3) |
| `.neon-white` | Weisser Neon-effect (#ffffff) |
| `.neon-primary` | Neon-effect in Primarfarbe |
| `.neon-secondary` | Neon-effect in Sekundarfarbe |
| `.neon-info` | Neon-effect in Informationsfarbe |
| `.neon-success` | Neon-effect in Erfolgsfarbe |
| `.neon-warning` | Neon-effect in Warnfarbe |
| `.neon-danger` | Neon-effect in Gefahrenfarbe |

### Interaktive Neon-effects

| Class | Description |
|--------|-------------|
| `.neon-hover` | Zeigt Neon-effect at Hover on |
| `.neon-active` | Zeigt Neon-effect im aktiven state on |
| `.neon-focus` | Zeigt Neon-effect at Fokus on |
| `.neon-flash` | Aufblitzender Neon-effect |
| `.neon-pulse` | Pulsierender Neon-effect |
| `.neon-flicker` | Flackernder Neon-effect how at echten Neonrohren |
| `.neon-breathe` | Sanft pulsierender Neon-effect |
| `.neon-gradient` | Neon-effect with gradient |
| `.neon-rainbow` | Neon-effect with Regenbogenfarben |

### element-spezifische Neon-effects

| Class | Description |
|--------|-------------|
| `.neon-button` | Neon-effect for buttons |
| `.neon-card` | Neon-effect for Cardn |
| `.neon-icon` | Neon-effect for icons |
| `.neon-link` | Neon-effect for links |
| `.neon-input` | Neon-effect for Inputer |
| `.neon-heading` | Neon-effect for Uberschriften |
| `.neon-badge` | Neon-effect for badges |
| `.neon-nav` | Neon-effect for Navigationselemente |
| `.neon-loader` | Neon-effect for Ladeanimationen |

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

### Neon-buttons

```html
<div class="neon-button-examples">
  <button class="neon-button neon-border neon-blue">BLUE button</button>
  <button class="neon-button neon-border neon-red">RED button</button>
  <button class="neon-button neon-border neon-green">GREEN button</button>
  <button class="neon-button neon-border neon-pink">PINK button</button>
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
    <p>a Card with blauem Neon-effect on den Randern.</p>
  </div>
  
  <div class="neon-card neon-border neon-red">
    <h3>Neon Red Card</h3>
    <p>a Card with rotem Neon-effect on den Randern.</p>
  </div>
  
  <div class="neon-card neon-box neon-green">
    <h3>Neon Green box</h3>
    <p>a Card with grunem Neon-effect for the gesamte box.</p>
  </div>
  
  <div class="neon-card neon-border neon-hover neon-pink">
    <h3>Hover Card</h3>
    <p>Bewegen them den Mauszeiger over these Card for einen Neon-effect.</p>
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

### Animierte Neon-effects

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

### Neon-Navigationsmenu

```html
<div class="neon-nav-example">
  <nav class="neon-nav">
    <a href="#" class="neon-nav-item neon-border neon-blue active">Home</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-red">Produkte</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-green">Dienstleistungen</a>
    <a href="#" class="neon-nav-item neon-border neon-hover neon-pink">over us</a>
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

## Customization

the Neon-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Neon-parameter */
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

## CSS-Implementation

the grundlegende Neon-effect wird through CSS-shadow and Farbwerte implementiert:

```css
/* Grundlegender Neon-Text-effect */
.neon-text {
  color: #fff;
  text-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 var(--neon-spread-radius) var(--neon-color);
}

/* Neon-Border-effect */
.neon-border {
  border: 2px solid var(--neon-color);
  box-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    inset 0 0 var(--neon-blur-radius) var(--neon-color);
  color: var(--neon-color);
}

/* Neon-box-effect */
.neon-box {
  box-shadow:
    0 0 var(--neon-blur-radius) var(--neon-color),
    0 0 calc(var(--neon-blur-radius) * 2) var(--neon-color),
    inset 0 0 var(--neon-blur-radius) var(--neon-color);
  border: 1px solid var(--neon-color);
  color: #fff;
}

/* Neon-Outline-effect */
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

/* additional Farbvarianten... */

/* Neon-Sizesvarianten */
.neon-sm {
  --neon-blur-radius: var(--neon-sm-blur);
  --neon-spread-radius: var(--neon-sm-spread);
}

.neon-lg {
  --neon-blur-radius: var(--neon-lg-blur);
  --neon-spread-radius: var(--neon-lg-spread);
}

/* Neon-animations */
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

/* additional animations... */

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

## Fortgeschrittene Neon-effects

### Neon-Regenbogen-effect

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

### Neon-Gradient-effect

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

### Neon-Text with animation

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

at the Usage from Neon-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Text despite Neon-effect ausreichend lesbar bleibt
2. **Flackernde effects**: Bieten them a Moglichkeit, stark flackernde effects to deactivate, da these Anfalle at empfindlichen Personen auslosen can
3. **Farbblindheit**: Verlassen them oneself not only on Colors, um Informationen to vermitteln

```css
/* Verbesserte Lesbarkeit for Neon-Text */
.neon-text-accessible {
  color: var(--neon-color);
  text-shadow:
    0 0 1px #fff,
    0 0 var(--neon-blur-radius) var(--neon-color);
  font-weight: bold;
}

/* Reduzierte animation for user with Empfindlichkeiten */
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

Neon-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Anzahl begrenzen**: use them Neon-effects sparsam and only for wichtige elements
2. **Animations-Performance**: use them for animations properties, the less Repaints erfordern (transform, opacity)
3. **GPU-Beschleunigung**: use them `will-change` or `transform: translateZ(0)` for Hardware-Beschleunigung

```css
/* Performance-Optimierung for Neon-effects */
.neon-optimized {
  will-change: box-shadow, text-shadow;
  transform: translateZ(0);
}

/* Reduzierte Komplexitat for altere Gerate */
@media (prefers-reduced-motion: reduce) {
  .neon-text,
  .neon-border,
  .neon-box {
    --neon-blur-radius: 3px;
    --neon-spread-radius: 1px;
  }
}
```

## Browser-Kompatibilitat

the Neon-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |
| animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Gradient Text | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some effects not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
Neon-effects become from allen modernen Browsern unterstutzt. for altere Browser become Fallbacks with einfacheren Hervorhebungen bereitgestellt. 
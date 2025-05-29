---
title: Glow Effects
category: Effects
---

# Glow-effects

the Glow-effects the Casoon UI Library bieten a Sammlung from leuchtenden and strahlenden visuellen Effekten, the Elementen a ansprechende Tiefe and visuelle Aufmerksamkeit verleihen, ideal for moderne and energiereiche user interfaces.

## Uberblick

Glow-effects use CSS-shadow and Farbverlaufe, um a strahlendes, leuchtendes Erscheinungsbild to erzeugen. You can verwendet become, um wichtige elements hervorzuheben, visuelle Hierarchien to schaffen and interaktive States to verdeutlichen. these effects verleihen Ihrer Benutzeroberflache einen modernen, dynamischen Look.

## Installation

import them the Glow-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/glow.css';
```

## Verfugbare classes

### Grundlegende Glow-effects

| Class | Description |
|--------|-------------|
| `.glow` | Standardmassiger Glow-effect with weissem Leuchten |
| `.glow-sm` | smaller Glow-effect with geringerem Radius |
| `.glow-md` | Mittlerer Glow-effect (Standard) |
| `.glow-lg` | Grosser Glow-effect with grosserem Radius |
| `.glow-xl` | Extra grosser Glow-effect for dramatische Wirkung |
| `.glow-soft` | Weicher, diffuser Glow-effect |
| `.glow-sharp` | Scharferer, intensiverer Glow-effect |
| `.glow-intense` | very intensiver, auffalliger Glow-effect |
| `.glow-inner` | after innen gerichteter Glow-effect |
| `.glow-outer` | after aussen gerichteter Glow-effect (Standard) |
| `.glow-both` | Kombinierter innerer and ausserer Glow-effect |

### Glow-Farbvarianten

| Class | Description |
|--------|-------------|
| `.glow-primary` | Glow-effect in Primarfarbe |
| `.glow-secondary` | Glow-effect in Sekundarfarbe |
| `.glow-success` | Glow-effect in Erfolgsfarbe (grun) |
| `.glow-warning` | Glow-effect in Warnfarbe (gelb/orange) |
| `.glow-danger` | Glow-effect in Gefahrenfarbe (rot) |
| `.glow-info` | Glow-effect in Informationsfarbe (blau) |
| `.glow-white` | Weisser Glow-effect |
| `.glow-blue` | Blauer Glow-effect |
| `.glow-green` | Gruner Glow-effect |
| `.glow-red` | Roter Glow-effect |
| `.glow-purple` | Violetter Glow-effect |
| `.glow-cyan` | Cyan-farbener Glow-effect |
| `.glow-pink` | Rosa Glow-effect |
| `.glow-amber` | Bernsteinfarbener Glow-effect |
| `.glow-teal` | Turkisfarbener Glow-effect |

### Interaktive Glow-effects

| Class | Description |
|--------|-------------|
| `.glow-hover` | Zeigt Glow-effect at Hover on |
| `.glow-active` | Zeigt Glow-effect im aktiven state on |
| `.glow-focus` | Zeigt Glow-effect at Fokus on |
| `.glow-pulse` | Pulsierender Glow-effect |
| `.glow-breathe` | Sanft atmender Glow-effect |
| `.glow-flash` | Kurz aufblitzender Glow-effect |
| `.glow-fade-in` | Langsam einblendender Glow-effect |
| `.glow-fade-out` | Langsam ausblendender Glow-effect |

### element-spezifische Glow-effects

| Class | Description |
|--------|-------------|
| `.glow-text` | Glow-effect for Text |
| `.glow-button` | Glow-effect for buttons |
| `.glow-card` | Glow-effect for Cardn |
| `.glow-icon` | Glow-effect for icons |
| `.glow-input` | Glow-effect for Inputer |
| `.glow-image` | Glow-effect for images |
| `.glow-border` | Glow-effect only for Rander |
| `.glow-nav` | Glow-effect for Navigationselemente |
| `.glow-badge` | Glow-effect for badges |

## Examples

### Grundlegende Glow-effects

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow">Standard Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-sm">Small Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-lg">Large Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-xl">Extra Large Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-soft">Soft Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-sharp">Sharp Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-intense">Intense Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-inner">Inner Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-both">Inner & Outer Glow</button>
  </div>
</div>

<style>
  .glow-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
  }
  
  .glow-example {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
```

### Farbige Glow-effects

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow-primary">Primary Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-success">Success Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-warning">Warning Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-danger">Danger Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-info">info Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-purple">Purple Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-cyan">Cyan Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-pink">Pink Glow</button>
  </div>
</div>
```

### Interaktive Glow-effects

```html
<div class="glow-examples">
  <div class="glow-example">
    <button class="glow-hover">Hover Me</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-active">Click Me</button>
  </div>
  
  <div class="glow-example">
    <input type="text" class="glow-focus" placeholder="Focus Me">
  </div>
  
  <div class="glow-example">
    <button class="glow-pulse">Pulsing Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-breathe">Breathing Glow</button>
  </div>
  
  <div class="glow-example">
    <button class="glow-flash">Flashing Glow</button>
  </div>
</div>

<style>
  input.glow-focus {
    padding: 0.8rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
    width: 100%;
  }
  
  input.glow-focus::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
</style>
```

### Glow-Texte and -elements

```html
<div class="glow-elements">
  <h2 class="glow-text glow-cyan">Leuchtender Titel</h2>
  
  <div class="glow-card glow-soft">
    <h3>Glow Card</h3>
    <p>these Card hat einen weichen Glow-effect.</p>
    <button class="glow-button glow-sharp">more erfahren</button>
  </div>
  
  <div class="glow-icons">
    <span class="glow-icon glow-red"><i class="icon-heart"></i></span>
    <span class="glow-icon glow-blue"><i class="icon-star"></i></span>
    <span class="glow-icon glow-green"><i class="icon-check"></i></span>
    <span class="glow-icon glow-purple"><i class="icon-bell"></i></span>
  </div>
  
  <div class="glow-nav-example">
    <nav class="glow-nav">
      <a href="#" class="active">Home</a>
      <a href="#">over us</a>
      <a href="#">Produkte</a>
      <a href="#">Kontakt</a>
    </nav>
  </div>
</div>

<style>
  .glow-elements {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
    color: white;
  }
  
  .glow-text {
    text-align: center;
    font-size: 2.5rem;
    margin: 0;
  }
  
  .glow-card {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .glow-card h3 {
    margin-top: 0;
  }
  
  .glow-card p {
    margin-bottom: 1.5rem;
  }
  
  .glow-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .glow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.5rem;
  }
  
  .glow-nav-example {
    display: flex;
    justify-content: center;
  }
  
  .glow-nav {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .glow-nav a {
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .glow-nav a.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
```

### Kreative Glow-Kompositionen

```html
<div class="glow-compositions">
  <div class="glow-composition">
    <div class="glow-orb glow-lg glow-cyan"></div>
    <div class="glow-orb glow-sm glow-pink"></div>
    <div class="glow-orb glow-md glow-purple"></div>
  </div>
  
  <div class="glow-text-showcase">
    <h1 class="glow-text-gradient">
      <span class="glow-text glow-blue">Casoon</span>
      <span class="glow-text glow-cyan">UI</span>
      <span class="glow-text glow-purple">Library</span>
    </h1>
  </div>
  
  <div class="glow-buttons-showcase">
    <button class="glow-button glow-border glow-primary">Primar</button>
    <button class="glow-button glow-border glow-success">success</button>
    <button class="glow-button glow-border glow-warning">warning</button>
    <button class="glow-button glow-border glow-danger">Gefahr</button>
  </div>
</div>

<style>
  .glow-compositions {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
    background-color: #0f0f1a;
    color: white;
    min-height: 100vh;
  }
  
  .glow-composition {
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .glow-orb {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .glow-orb.glow-lg {
    width: 150px;
    height: 150px;
    left: 30%;
    top: 25%;
  }
  
  .glow-orb.glow-md {
    width: 100px;
    height: 100px;
    right: 35%;
    bottom: 20%;
  }
  
  .glow-orb.glow-sm {
    width: 60px;
    height: 60px;
    right: 30%;
    top: 30%;
  }
  
  .glow-text-showcase {
    text-align: center;
  }
  
  .glow-text-gradient {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 3rem;
    font-weight: 800;
  }
  
  .glow-buttons-showcase {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .glow-button.glow-border {
    background-color: transparent;
    padding: 1rem 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>
```

## Customization

the Glow-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Glow-parameter */
  --glow-opacity: 0.6;
  --glow-blur-radius: 15px;
  --glow-spread-radius: 5px;
  --glow-color: rgba(255, 255, 255, var(--glow-opacity));
  
  /* Glow-Sizesvarianten */
  --glow-sm-blur: 8px;
  --glow-sm-spread: 2px;
  --glow-md-blur: 15px;
  --glow-md-spread: 5px;
  --glow-lg-blur: 25px;
  --glow-lg-spread: 8px;
  --glow-xl-blur: 40px;
  --glow-xl-spread: 15px;
  
  /* Glow-Stilarten */
  --glow-soft-opacity: 0.4;
  --glow-sharp-opacity: 0.8;
  --glow-intense-opacity: 1;
  
  /* Farbige Glow-Variants */
  --glow-primary-color: #4f46e5;
  --glow-secondary-color: #64748b;
  --glow-success-color: #10b981;
  --glow-warning-color: #f59e0b;
  --glow-danger-color: #ef4444;
  --glow-info-color: #0ea5e9;
  --glow-white-color: #ffffff;
  --glow-blue-color: #3b82f6;
  --glow-green-color: #22c55e;
  --glow-red-color: #f43f5e;
  --glow-purple-color: #8b5cf6;
  --glow-cyan-color: #06b6d4;
  --glow-pink-color: #ec4899;
  --glow-amber-color: #f59e0b;
  --glow-teal-color: #14b8a6;
  
  /* Animationsparameter */
  --glow-pulse-duration: 2s;
  --glow-breathe-duration: 4s;
  --glow-flash-duration: 0.5s;
  --glow-fade-duration: 1s;
}
```

## CSS-Implementation

the grundlegende Glow-effect wird through CSS-shadow implementiert:

```css
/* Grundlegender Glow-effect */
.glow {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Sizesvarianten */
.glow-sm {
  box-shadow: 0 0 var(--glow-sm-blur) var(--glow-sm-spread) var(--glow-color);
}

.glow-lg {
  box-shadow: 0 0 var(--glow-lg-blur) var(--glow-lg-spread) var(--glow-color);
}

.glow-xl {
  box-shadow: 0 0 var(--glow-xl-blur) var(--glow-xl-spread) var(--glow-color);
}

/* Stilarten */
.glow-soft {
  --glow-opacity: var(--glow-soft-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-sharp {
  --glow-opacity: var(--glow-sharp-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-intense {
  --glow-opacity: var(--glow-intense-opacity);
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Richtungsvarianten */
.glow-inner {
  box-shadow: inset 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

.glow-both {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color),
              inset 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Farbige Variants */
.glow-primary {
  --glow-color: rgba(var(--glow-primary-color-rgb), var(--glow-opacity));
}

/* additional farbige Variants... */

/* Interaktive States */
.glow-hover {
  transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* additional interaktive States... */

/* Animierte Glow-effects */
.glow-pulse {
  animation: glow-pulse-animation var(--glow-pulse-duration) infinite ease-in-out;
}

@keyframes glow-pulse-animation {
  0%, 100% {
    box-shadow: 0 0 var(--glow-sm-blur) var(--glow-sm-spread) var(--glow-color);
  }
  50% {
    box-shadow: 0 0 var(--glow-lg-blur) var(--glow-lg-spread) var(--glow-color);
  }
}

/* additional animations... */
```

## Use Cases

### Glow for Fokuszustande

```css
.form-control:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--glow-primary-color);
}
```

### Glow for Call-to-Action-buttons

```css
.cta-button {
  background-color: var(--glow-primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  box-shadow: 0 0 var(--glow-lg-blur) var(--glow-sm-spread) var(--glow-primary-color);
}
```

### Glow for Texthighlights

```css
.highlight-text {
  position: relative;
  color: white;
  z-index: 1;
}

.highlight-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--glow-primary-color);
  opacity: 0.3;
  filter: blur(8px);
  z-index: -1;
}
```

## Accessibility

at the Usage from Glow-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Kontrast between Text and background despite Glow-effect ausreichend ist
2. **animations**: Bieten them a Option zum deactivate from animierten Glow-Effekten for Nutzer with Empfindlichkeiten
3. **Fokus-Indikatoren**: Glow-effects can as Fokus-Indikatoren dienen, should but deutlich erkennbar be

```css
/* Verbesserte Fokus-Indikatoren with Glow */
:focus {
  outline: 2px solid white;
  box-shadow: 0 0 var(--glow-blur-radius) var(--glow-spread-radius) var(--glow-color);
}

/* Reduzierte Bewegung for animierte Glow-effects */
@media (prefers-reduced-motion: reduce) {
  .glow-pulse,
  .glow-breathe,
  .glow-flash {
    animation: none !important;
  }
}
```

## Performance-Optimierung

Glow-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Begrenzen them the Anzahl**: use them Glow-effects sparsam on einer Seite
2. **Reduzieren them the size**: use them for size Flachen kleinere Blur- and Spread-Radien
3. **Vermeiden them animations on niedrigen Geraten**: Prufen them the Gerateleistung, before them animierte Glow-effects use
4. **use them will-change**: use them `will-change: box-shadow` for animierte Glow-effects

```css
/* Performance-Optimierung for Glow-effects */
.glow-optimized {
  will-change: box-shadow;
}

/* Bedingte animations basierend on Browser-Unterstutzung */
@supports (animation-timeline: scroll()) {
  .glow-advanced-animation {
    animation: advanced-glow-effect 2s infinite;
  }
}
```

## Browser-Kompatibilitat

the Glow-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| box-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| text-shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| animation | ✓ | ✓ | ✓ | ✓ | Teilweise |
| filter (blur) | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some effects not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
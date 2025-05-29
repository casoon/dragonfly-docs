---
title: Noise Effects
category: Effects
---

# Noise-effects

the Noise-effects the Casoon UI Library bieten a Sammlung from Rausch- and Textur-Effekten, the Ihren designs Tiefe, Structure and organisches Aussehen verleihen. these effects can verwendet become, um sterile digitale Oberflachen to beleben and visuelle Abwechslung to schaffen.

## Uberblick

Noise-effects simulieren verschiedene Arten from visuellem Rauschen and Texturen, the in the Natur vorkommen. these can subtil im background eingesetzt become, um Tiefe to erzeugen, or as dominantes gestalterisches element verwendet become. the Casoon UI Library bietet a Reihe from vordefinierten Noise-Effekten, the einfach in Ihre designs integriert become can.

## Installation

import them the Noise-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/noise.css';
```

## Verfugbare classes

### Grundlegende Noise-effects

| Class | Description |
|--------|-------------|
| `.noise` | Standardmassiger Noise-effect |
| `.noise-subtle` | Subtiler Noise-effect with geringer Intensitat |
| `.noise-medium` | Mittlerer Noise-effect (Standard) |
| `.noise-strong` | Starker Noise-effect with hoher Intensitat |
| `.noise-bg` | Noise-effect speziell for Hintergrunde optimiert |

### Noise-Typen

| Class | Description |
|--------|-------------|
| `.noise-grain` | Feinkorniger Noise-effect (ahnlich Filmkorn) |
| `.noise-static` | Statischer Noise-effect (how TV-Rauschen) |
| `.noise-perlin` | Weicher, fliessender Perlin Noise-effect |
| `.noise-fractal` | Fraktaler Noise with selbstahnlichen Mustern |
| `.noise-worley` | Zellularer/Worley Noise with organischen Zellstrukturen |

### Farbvarianten

| Class | Description |
|--------|-------------|
| `.noise-mono` | Monochromatischer Noise-effect |
| `.noise-colored` | Mehrfarbiger Noise-effect |
| `.noise-duotone` | Zweifarbiger Noise-effect |
| `.noise-primary` | Noise in Primarfarbe |
| `.noise-secondary` | Noise in Sekundarfarbe |

### Interaktive Noise-effects

| Class | Description |
|--------|-------------|
| `.noise-hover` | Zeigt Noise-effect at Hover on |
| `.noise-active` | Zeigt Noise-effect im aktiven state on |
| `.noise-animated` | Animierter Noise-effect |
| `.noise-shift` | Sanft bewegender Noise-effect |
| `.noise-flicker` | Flackernder Noise-effect |

## Examples

### Grundlegende Noise-Hintergrunde

```html
<div class="noise-examples">
  <div class="noise-example noise-bg">
    <h3>Standard Noise</h3>
  </div>
  
  <div class="noise-example noise-bg noise-subtle">
    <h3>Subtle Noise</h3>
  </div>
  
  <div class="noise-example noise-bg noise-strong">
    <h3>Strong Noise</h3>
  </div>
</div>

<style>
  .noise-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .noise-example {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    padding: 1rem;
  }
  
  .noise-example h3 {
    font-size: 1.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
</style>
```

### Verschiedene Noise-Typen

```html
<div class="noise-types-demo">
  <div class="noise-type noise-bg noise-grain">
    <h3>Grain Noise</h3>
  </div>
  
  <div class="noise-type noise-bg noise-static">
    <h3>Static Noise</h3>
  </div>
  
  <div class="noise-type noise-bg noise-perlin">
    <h3>Perlin Noise</h3>
  </div>
  
  <div class="noise-type noise-bg noise-fractal">
    <h3>Fractal Noise</h3>
  </div>
</div>

<style>
  .noise-types-demo {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
  }
  
  .noise-type {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
  }
</style>
```

### Animierte Noise-effects

```html
<div class="noise-animated-demo">
  <div class="noise-animated-bg noise-bg noise-animated">
    <h2>Animierter Noise-effect</h2>
    <p>this background verwendet einen sanft animierten Noise-effect.</p>
  </div>
  
  <div class="noise-animated-bg noise-bg noise-shift">
    <h2>Shifting Noise</h2>
    <p>this background verwendet einen oneself bewegenden Noise-effect.</p>
  </div>
</div>

<style>
  .noise-animated-demo {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .noise-animated-bg {
    min-height: 300px;
    padding: 2rem;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .noise-animated-bg h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>
```

### Noise-effects in UI-Elementen

```html
<div class="noise-ui-demo">
  <button class="button noise-button noise-bg noise-hover">
    Noise button
  </button>
  
  <div class="card noise-card noise-bg noise-subtle">
    <h3>Card with Noise</h3>
    <p>these Card verwendet einen subtilen Noise-effect im background.</p>
  </div>
  
  <div class="badge noise-badge noise-bg noise-strong">
    New
  </div>
</div>

<style>
  .noise-ui-demo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: #1a1a2e;
  }
  
  .button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    align-self: flex-start;
    color: white;
  }
  
  .card {
    padding: 1.5rem;
    border-radius: 8px;
    color: white;
  }
  
  .badge {
    display: inline-flex;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-weight: 600;
    font-size: 0.875rem;
    align-self: flex-start;
    color: white;
  }
</style>
```

## Customization

the Noise-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Noise-parameter */
  --noise-opacity: 0.15;
  --noise-intensity: 1;
  --noise-scale: 100px;
  --noise-blur: 0.5px;
  
  /* Noise-Typen-Variants */
  --noise-subtle-opacity: 0.05;
  --noise-medium-opacity: 0.15;
  --noise-strong-opacity: 0.3;
  
  /* Farbvarianten */
  --noise-mono-color: rgba(255, 255, 255, 0.5);
  --noise-primary-color: var(--color-primary, #3f51b5);
  --noise-secondary-color: var(--color-secondary, #f50057);
  
  /* Animations-parameter */
  --noise-animation-duration: 8s;
  --noise-animation-timing: linear;
  --noise-flicker-duration: 3s;
}
```

## CSS-Implementation

the grundlegende Noise-effect wird through generierte Hintergrundbilder and Filter implementiert:

```css
/* Base-Noise-effect with SVG */
.noise-bg {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.noise-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: var(--noise-opacity);
  z-index: -1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* Noise-Intensitaten */
.noise-subtle::before {
  opacity: var(--noise-subtle-opacity);
}

.noise-strong::before {
  opacity: var(--noise-strong-opacity);
}

/* Noise-Typen */
.noise-grain::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E");
}

/* Noise with animations */
.noise-animated::before {
  animation: noise-animation var(--noise-animation-duration) var(--noise-animation-timing) infinite;
}

@keyframes noise-animation {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 10%);
  }
  80% {
    transform: translate(-15%, 0);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(0, 0);
  }
}
```

## Fortgeschrittene Noise-Techniken

### CSS-generierter Perlin Noise

```css
.noise-perlin {
  --perlin-steps: 5;
  position: relative;
  overflow: hidden;
}

.noise-perlin::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, 
      transparent calc(100% / var(--perlin-steps) * 0),
      rgba(255,255,255,0.05) calc(100% / var(--perlin-steps) * 1),
      transparent calc(100% / var(--perlin-steps) * 2),
      rgba(255,255,255,0.1) calc(100% / var(--perlin-steps) * 3),
      transparent calc(100% / var(--perlin-steps) * 4),
      rgba(255,255,255,0.05) calc(100% / var(--perlin-steps) * 5)
    ),
    linear-gradient(to bottom, 
      transparent calc(100% / var(--perlin-steps) * 0),
      rgba(255,255,255,0.05) calc(100% / var(--perlin-steps) * 1),
      transparent calc(100% / var(--perlin-steps) * 2),
      rgba(255,255,255,0.1) calc(100% / var(--perlin-steps) * 3),
      transparent calc(100% / var(--perlin-steps) * 4),
      rgba(255,255,255,0.05) calc(100% / var(--perlin-steps) * 5)
    );
  opacity: var(--noise-opacity);
  filter: blur(calc(var(--noise-scale) / 5));
  z-index: -1;
  transform: scale(1.5);
}
```

## Accessibility

at the Usage from Noise-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Text on Noise-Hintergrunden ausreichend lesbar bleibt
2. **Bewegung**: Bieten them a Option zum deactivate from animierten Noise-Effekten for Nutzer with Bewegungsempfindlichkeiten
3. **Ablenkung**: use them subtile Noise-effects, um Ablenkungen to minimieren

```css
/* Verbesserte Lesbarkeit for Text on Noise-Hintergrunden */
.noise-bg-with-text {
  --noise-opacity: 0.1;
}

.noise-bg-with-text p,
.noise-bg-with-text h1,
.noise-bg-with-text h2,
.noise-bg-with-text h3 {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Reduzierte Bewegung for animierte Noise-effects */
@media (prefers-reduced-motion: reduce) {
  .noise-animated::before,
  .noise-shift::before,
  .noise-flicker::before {
    animation: none !important;
  }
}
```

## Performance-Optimierung

Noise-effects can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **SVG-Optimierung**: use them optimierte SVG-Filter for Noise-effects
2. **Caching**: Generieren them Noise-Texturen einmalig and cache them
3. **Layer-Promotion**: use them `will-change` for animierte Noise-effects

```css
/* Performance-Optimierung for Noise-effects */
.noise-optimized::before {
  will-change: transform;
}

/* Reduzierte Komplexitat for mobile Gerate */
@media (max-width: 768px) {
  :root {
    --noise-opacity: 0.1;
    --noise-scale: 50px;
  }
}
```

## Browser-Kompatibilitat

the Noise-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| SVG-Filter | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the SVG-Filter not vollstandig unterstutzen, become alternative Losungen with Bitmap-Texturen bereitgestellt. 
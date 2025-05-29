---
title: Noise Effects
category: Effects
---

# Noise-Effekte

Die Noise-Effekte der Casoon UI Library bieten eine Sammlung von Rausch- und Textur-Effekten, die Ihren Designs Tiefe, Struktur und organisches Aussehen verleihen. Diese Effekte können verwendet werden, um sterile digitale Oberflächen zu beleben und visuelle Abwechslung zu schaffen.

## Überblick

Noise-Effekte simulieren verschiedene Arten von visuellem Rauschen und Texturen, die in der Natur vorkommen. Diese können subtil im Hintergrund eingesetzt werden, um Tiefe zu erzeugen, oder als dominantes gestalterisches Element verwendet werden. Die Casoon UI Library bietet eine Reihe von vordefinierten Noise-Effekten, die einfach in Ihre Designs integriert werden können.

## Installation

Importieren Sie das Noise-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/noise.css';
```

## Verfügbare Klassen

### Grundlegende Noise-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.noise` | Standardmäßiger Noise-Effekt |
| `.noise-subtle` | Subtiler Noise-Effekt mit geringer Intensität |
| `.noise-medium` | Mittlerer Noise-Effekt (Standard) |
| `.noise-strong` | Starker Noise-Effekt mit hoher Intensität |
| `.noise-bg` | Noise-Effekt speziell für Hintergründe optimiert |

### Noise-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `.noise-grain` | Feinkörniger Noise-Effekt (ähnlich Filmkorn) |
| `.noise-static` | Statischer Noise-Effekt (wie TV-Rauschen) |
| `.noise-perlin` | Weicher, fließender Perlin Noise-Effekt |
| `.noise-fractal` | Fraktaler Noise mit selbstähnlichen Mustern |
| `.noise-worley` | Zellulärer/Worley Noise mit organischen Zellstrukturen |

### Farbvarianten

| Klasse | Beschreibung |
|--------|-------------|
| `.noise-mono` | Monochromatischer Noise-Effekt |
| `.noise-colored` | Mehrfarbiger Noise-Effekt |
| `.noise-duotone` | Zweifarbiger Noise-Effekt |
| `.noise-primary` | Noise in Primärfarbe |
| `.noise-secondary` | Noise in Sekundärfarbe |

### Interaktive Noise-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.noise-hover` | Zeigt Noise-Effekt bei Hover an |
| `.noise-active` | Zeigt Noise-Effekt im aktiven Zustand an |
| `.noise-animated` | Animierter Noise-Effekt |
| `.noise-shift` | Sanft bewegender Noise-Effekt |
| `.noise-flicker` | Flackernder Noise-Effekt |

## Beispiele

### Grundlegende Noise-Hintergründe

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

### Animierte Noise-Effekte

```html
<div class="noise-animated-demo">
  <div class="noise-animated-bg noise-bg noise-animated">
    <h2>Animierter Noise-Effekt</h2>
    <p>Dieser Hintergrund verwendet einen sanft animierten Noise-Effekt.</p>
  </div>
  
  <div class="noise-animated-bg noise-bg noise-shift">
    <h2>Shifting Noise</h2>
    <p>Dieser Hintergrund verwendet einen sich bewegenden Noise-Effekt.</p>
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

### Noise-Effekte in UI-Elementen

```html
<div class="noise-ui-demo">
  <button class="button noise-button noise-bg noise-hover">
    Noise Button
  </button>
  
  <div class="card noise-card noise-bg noise-subtle">
    <h3>Card mit Noise</h3>
    <p>Diese Karte verwendet einen subtilen Noise-Effekt im Hintergrund.</p>
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

## Anpassung

Die Noise-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Noise-Parameter */
  --noise-opacity: 0.15;
  --noise-intensity: 1;
  --noise-scale: 100px;
  --noise-blur: 0.5px;
  
  /* Noise-Typen-Varianten */
  --noise-subtle-opacity: 0.05;
  --noise-medium-opacity: 0.15;
  --noise-strong-opacity: 0.3;
  
  /* Farbvarianten */
  --noise-mono-color: rgba(255, 255, 255, 0.5);
  --noise-primary-color: var(--color-primary, #3f51b5);
  --noise-secondary-color: var(--color-secondary, #f50057);
  
  /* Animations-Parameter */
  --noise-animation-duration: 8s;
  --noise-animation-timing: linear;
  --noise-flicker-duration: 3s;
}
```

## CSS-Implementierung

Der grundlegende Noise-Effekt wird durch generierte Hintergrundbilder und Filter implementiert:

```css
/* Basis-Noise-Effekt mit SVG */
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

/* Noise-Intensitäten */
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

/* Noise mit Animationen */
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

## Barrierefreiheit

Bei der Verwendung von Noise-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Kontrast**: Stellen Sie sicher, dass Text auf Noise-Hintergründen ausreichend lesbar bleibt
2. **Bewegung**: Bieten Sie eine Option zum Deaktivieren von animierten Noise-Effekten für Nutzer mit Bewegungsempfindlichkeiten
3. **Ablenkung**: Verwenden Sie subtile Noise-Effekte, um Ablenkungen zu minimieren

```css
/* Verbesserte Lesbarkeit für Text auf Noise-Hintergründen */
.noise-bg-with-text {
  --noise-opacity: 0.1;
}

.noise-bg-with-text p,
.noise-bg-with-text h1,
.noise-bg-with-text h2,
.noise-bg-with-text h3 {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Reduzierte Bewegung für animierte Noise-Effekte */
@media (prefers-reduced-motion: reduce) {
  .noise-animated::before,
  .noise-shift::before,
  .noise-flicker::before {
    animation: none !important;
  }
}
```

## Performance-Optimierung

Noise-Effekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **SVG-Optimierung**: Verwenden Sie optimierte SVG-Filter für Noise-Effekte
2. **Caching**: Generieren Sie Noise-Texturen einmalig und cache sie
3. **Layer-Promotion**: Nutzen Sie `will-change` für animierte Noise-Effekte

```css
/* Performance-Optimierung für Noise-Effekte */
.noise-optimized::before {
  will-change: transform;
}

/* Reduzierte Komplexität für mobile Geräte */
@media (max-width: 768px) {
  :root {
    --noise-opacity: 0.1;
    --noise-scale: 50px;
  }
}
```

## Browser-Kompatibilität

Die Noise-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| SVG-Filter | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-Variablen | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die SVG-Filter nicht vollständig unterstützen, werden alternative Lösungen mit Bitmap-Texturen bereitgestellt. 
---
title: Reflection Effects
category: Effects
---

# Reflections-effects

the Reflections-effects the Casoon UI Library bieten a Sammlung from Spiegelungs- and Reflexionseffekten, the Ihren UI-Elementen Tiefe, Realismus and a moderne visuelle Qualitat verleihen can. these effects sind ideal, um hochwertige, polierte user interfaces to schaffen.

## Uberblick

Reflections-effects simulieren the naturliche Spiegelung from Licht on verschiedenen Oberflachen. You can verwendet become, um digitale Oberflachen how Glas, Metall, Wasser or others reflektierende Materialien nachzuahmen. the Casoon UI Library bietet verschiedene Arten from Reflexionseffekten, the einfach anzuwenden and anzupassen sind.

## Installation

import them the Reflections-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/reflections.css';
```

## Verfugbare classes

### Grundlegende Reflexionseffekte

| Class | Description |
|--------|-------------|
| `.reflection` | Standardmassiger Reflexionseffekt |
| `.reflection-subtle` | Subtiler Reflexionseffekt |
| `.reflection-medium` | Mittlerer Reflexionseffekt (Standard) |
| `.reflection-strong` | Starker, deutlicher Reflexionseffekt |
| `.reflection-sharp` | Scharfer, klar definierter Reflexionseffekt |
| `.reflection-blurred` | Weicher, verschwommener Reflexionseffekt |

### Reflexionstypen

| Class | Description |
|--------|-------------|
| `.reflection-mirror` | Spiegelartige Reflexion |
| `.reflection-water` | Wasserahnliche Reflexion with leichter Wellenverzerrung |
| `.reflection-glass` | Glasartige Reflexion with hoher transparency |
| `.reflection-metal` | Metallische Reflexion with starkem Kontrast |
| `.reflection-gradient` | Verlaufende Reflexion |
| `.reflection-prism` | Prismatische Reflexion with Farbaufspaltung |

### Richtungen the Reflexionen

| Class | Description |
|--------|-------------|
| `.reflection-bottom` | Reflexion am unteren margin (Standard) |
| `.reflection-top` | Reflexion am oberen margin |
| `.reflection-left` | Reflexion am linken margin |
| `.reflection-right` | Reflexion am rechten margin |
| `.reflection-all` | Reflexion on allen Seiten |
| `.reflection-diagonal` | Diagonale Reflexion |

### Interaktive Reflexionen

| Class | Description |
|--------|-------------|
| `.reflection-hover` | Zeigt Reflexion at Hover on |
| `.reflection-active` | Zeigt Reflexion im aktiven state on |
| `.reflection-reactive` | Reflexion reagiert on Mausbewegungen |
| `.reflection-animated` | Animierte Reflexion |
| `.reflection-pulse` | Pulsierende Reflexion |
| `.reflection-flicker` | Flackernde Reflexion |

## Examples

### Grundlegende Reflexionen

```html
<div class="reflection-examples">
  <div class="reflection-example reflection reflection-mirror">
    <div class="content">Spiegelreflexion</div>
  </div>
  
  <div class="reflection-example reflection reflection-water">
    <div class="content">Wasserreflexion</div>
  </div>
  
  <div class="reflection-example reflection reflection-glass">
    <div class="content">Glasreflexion</div>
  </div>
  
  <div class="reflection-example reflection reflection-metal">
    <div class="content">Metallreflexion</div>
  </div>
</div>

<style>
  .reflection-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .reflection-example {
    height: 200px;
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .reflection-example .content {
    font-size: 1.25rem;
    font-weight: 500;
  }
</style>
```

### Richtungen the Reflexionen

```html
<div class="reflection-directions">
  <div class="direction-example reflection reflection-bottom">
    <span>Unten</span>
  </div>
  
  <div class="direction-example reflection reflection-top">
    <span>Oben</span>
  </div>
  
  <div class="direction-example reflection reflection-left">
    <span>links</span>
  </div>
  
  <div class="direction-example reflection reflection-right">
    <span>Rechts</span>
  </div>
  
  <div class="direction-example reflection reflection-all">
    <span>all Seiten</span>
  </div>
</div>

<style>
  .reflection-directions {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .direction-example {
    height: 150px;
    width: 150px;
    border-radius: 8px;
    background-color: #2196f3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  
  .direction-example span {
    font-weight: 500;
  }
</style>
```

### Interaktive Reflexionen

```html
<div class="interactive-reflections">
  <button class="reflection-btn reflection reflection-hover">
    Hover-Reflexion
  </button>
  
  <button class="reflection-btn reflection reflection-active">
    Aktiv-Reflexion
  </button>
  
  <button class="reflection-btn reflection reflection-reactive">
    Reaktive Reflexion
  </button>
  
  <button class="reflection-btn reflection reflection-animated">
    Animierte Reflexion
  </button>
</div>

<style>
  .interactive-reflections {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .reflection-btn {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 6px;
    background-color: #6200ea;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .reflection-btn:hover {
    transform: translateY(-2px);
  }
  
  .reflection-btn:active {
    transform: translateY(1px);
  }
</style>
```

### Reflexionen in Cardn and UI-Components

```html
<div class="ui-reflections">
  <div class="card reflection reflection-bottom">
    <div class="card-content">
      <h3>Card with Reflexion</h3>
      <p>these Card verwendet einen Reflexionseffekt am unteren margin.</p>
      <button>more erfahren</button>
    </div>
  </div>
  
  <div class="image-card reflection reflection-glass">
    <img src="path/to/image.jpg" alt="Examplebild">
    <div class="image-caption">Bildunterschrift with Glasreflexion</div>
  </div>
  
  <div class="avatar-containers">
    <div class="avatar reflection reflection-mirror">
      <img src="path/to/avatar.jpg" alt="avatar">
    </div>
    <span class="username">Benutzername</span>
  </div>
</div>

<style>
  .ui-reflections {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .card {
    border-radius: 8px;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    margin-bottom: 1.5rem;
    color: #666;
  }
  
  .card button {
    padding: 0.5rem 1rem;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .image-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .image-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  
  .image-caption {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
  }
  
  .avatar-containers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .username {
    font-weight: 500;
  }
</style>
```

## Customization

the Reflexionseffekte can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Reflexionsparameter */
  --reflection-opacity: 0.4;
  --reflection-blur: 0px;
  --reflection-offset: 0px;
  --reflection-gradient: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  
  /* Reflexionstypen-Variants */
  --reflection-mirror-opacity: 0.5;
  --reflection-water-opacity: 0.3;
  --reflection-glass-opacity: 0.2;
  --reflection-metal-opacity: 0.7;
  
  /* Richtungsspezifische parameter */
  --reflection-bottom-height: 40%;
  --reflection-top-height: 40%;
  --reflection-left-width: 40%;
  --reflection-right-width: 40%;
  
  /* animation */
  --reflection-animation-duration: 3s;
  --reflection-animation-timing: ease-in-out;
}
```

## CSS-Implementation

the Reflexionseffekte become hauptsachlich through pseudo-elements and CSS-properties implementiert:

```css
/* Base-Reflexion */
.reflection {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Untere Reflexion (Standard) */
.reflection.reflection-bottom::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--reflection-bottom-height, 40%);
  background-image: var(--reflection-gradient);
  transform: scaleY(-1);
  transform-origin: bottom;
  opacity: var(--reflection-opacity);
  filter: blur(var(--reflection-blur));
  z-index: -1;
}

/* Spiegelreflexion */
.reflection.reflection-mirror::after {
  opacity: var(--reflection-mirror-opacity, 0.5);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent);
}

/* Wasserreflexion with Wellenanimation */
.reflection.reflection-water::after {
  opacity: var(--reflection-water-opacity, 0.3);
  animation: water-reflection var(--reflection-animation-duration, 3s) infinite ease-in-out;
}

@keyframes water-reflection {
  0%, 100% {
    transform: scaleY(-1) scaleX(0.99);
  }
  50% {
    transform: scaleY(-1) scaleX(1.01);
  }
}

/* Reaktive Reflexion */
.reflection.reflection-reactive::after {
  transition: transform 0.3s ease-out, opacity 0.3s ease;
}

.reflection.reflection-reactive:hover::after {
  transform: scaleY(-1) translateX(calc(var(--mouse-x, 0) * 0.02));
  opacity: calc(var(--reflection-opacity) * 1.2);
}
```

## JavaScript-Unterstutzung

for reaktive Reflexionen, the on Mausbewegungen reagieren, wird a einfaches JavaScript benotigt:

```javascript
// Reaktive Reflexionen, the on Mausbewegungen reagieren
document.querySelectorAll('.reflection-reactive').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-position within des Elements
    const y = e.clientY - rect.top;  // Y-position within des Elements
    
    // CSS Variables for the Mausposition setzen
    element.style.setProperty('--mouse-x', (x / rect.width));
    element.style.setProperty('--mouse-y', (y / rect.height));
  });
  
  element.addEventListener('mouseleave', () => {
    // CSS Variables zurucksetzen
    element.style.setProperty('--mouse-x', '0.5');
    element.style.setProperty('--mouse-y', '0.5');
  });
});
```

## Fortgeschrittene Reflexionstechniken

### CSS-generierte dynamische Reflexionen

```css
.reflection-dynamic {
  position: relative;
  overflow: hidden;
}

.reflection-dynamic::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: blur(6px) brightness(1.2) contrast(0.8);
  transform: scaleY(-1) translateY(100%);
  transform-origin: bottom;
  opacity: 0.4;
  z-index: -1;
  transition: all 0.3s ease;
}

.reflection-dynamic:hover::before {
  opacity: 0.6;
  filter: blur(4px) brightness(1.3) contrast(0.9);
}
```

### Moderne 3D-Reflexionen with CSS-Perspektive

```css
.reflection-3d {
  perspective: 800px;
  transform-style: preserve-3d;
}

.reflection-3d .content {
  position: relative;
  transform: rotateX(0);
  transform-origin: bottom;
  transition: transform 0.4s ease;
}

.reflection-3d .reflection-surface {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  transform: rotateX(180deg);
  transform-origin: top;
  opacity: 0.3;
  filter: blur(2px);
}

.reflection-3d:hover .content {
  transform: rotateX(10deg);
}
```

## Accessibility

at the Usage from Reflexionseffekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that Textelemente with Reflexionen ausreichenden Kontrast for gute Lesbarkeit bieten
2. **Ablenkung**: use them subtile Reflexionen, the not vom content ablenken or the Lesbarkeit beeintrachtigen
3. **animation**: Bieten them a Option zum deactivate from animierten Reflexionen for Nutzer with Bewegungsempfindlichkeiten

```css
/* Verbesserte Lesbarkeit for Text with Reflexionen */
.reflection-with-text {
  --reflection-opacity: 0.2;
}

/* Reduzierte Bewegung for animierte Reflexionen */
@media (prefers-reduced-motion: reduce) {
  .reflection-animated::after,
  .reflection-water::after,
  .reflection-reactive::after {
    animation: none !important;
    transition: none !important;
  }
}
```

## Performance-Optimierung

Reflexionseffekte can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Nutzung from Hardware-Beschleunigung**: use them properties how `transform` and `opacity` for bessere Performance
2. **Reduzierte Komplexitat**: Begrenzen them the Anzahl the elements with Reflexionseffekten on einer Seite
3. **Layer-Promotion**: use them `will-change` for animierte Reflexionseffekte

```css
/* Performance-Optimierung for Reflexionseffekte */
.reflection-optimized::after {
  will-change: transform, opacity;
}

/* Reduzierte Komplexitat for mobile Gerate */
@media (max-width: 768px) {
  :root {
    --reflection-opacity: 0.2;
    --reflection-bottom-height: 30%;
  }
  
  .reflection-complex::after {
    display: none;
  }
}
```

## Browser-Kompatibilitat

the Reflexionseffekte become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Reflexionen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-Filter | ✓ | ✓ | ✓ | ✓ | ✗ |
| CSS-animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| 3D-Transformationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
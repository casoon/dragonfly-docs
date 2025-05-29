---
title: Shine Effects
category: Effects
---

# Glanz-effects

the Glanz-effects the Casoon UI Library bieten a Sammlung from Lichteffekten, the Ihren UI-Elementen einen dynamischen, interaktiven and hochwertigen Look verleihen can. these effects sind ideal, um Aufmerksamkeit on wichtige elements to lenken or subtile Bewegung in statische Interfaces to bringen.

## Uberblick

Glanz-effects imitieren the behavior from Licht, the over a Oberflache wandert or on her glanzt. You can verwendet become, um Metalleffekte, Lichtreflexionen or animierte Oberflacheneffekte to erzeugen. the Casoon UI Library bietet verschiedene Arten from Glanzeffekten, the einfach anzuwenden and anzupassen sind.

## Installation

import them the Glanz-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/shine.css';
```

## Verfugbare classes

### Grundlegende Glanzeffekte

| Class | Description |
|--------|-------------|
| `.shine` | Standardmassiger Glanzeffekt |
| `.shine-subtle` | Subtiler Glanzeffekt |
| `.shine-medium` | Mittlerer Glanzeffekt (Standard) |
| `.shine-strong` | Starker, deutlicher Glanzeffekt |
| `.shine-sharp` | Scharfer, klar definierter Glanzeffekt |
| `.shine-blurred` | Weicher, verschwommener Glanzeffekt |

### Glanztypen

| Class | Description |
|--------|-------------|
| `.shine-sweep` | Glanzeffekt, the over the element wandert |
| `.shine-pulse` | Pulsierender Glanzeffekt |
| `.shine-static` | Statischer Glanzeffekt without animation |
| `.shine-radial` | Radialer Glanzeffekt vom Zentrum ausgehend |
| `.shine-flicker` | Flackernder Glanzeffekt |
| `.shine-shimmer` | Schimmernder Glanzeffekt over the gesamte Oberflache |
| `.shine-highlight` | Hervorhebendes Glanzlicht on bestimmten Stellen |

### Glanzrichtungen

| Class | Description |
|--------|-------------|
| `.shine-left-to-right` | Glanz from links after rechts (Standard) |
| `.shine-right-to-left` | Glanz from rechts after links |
| `.shine-top-to-bottom` | Glanz from oben after unten |
| `.shine-bottom-to-top` | Glanz from unten after oben |
| `.shine-diagonal` | Diagonaler Glanzeffekt |
| `.shine-radiate` | Glanz, the from the Mitte after aussen strahlt |

### Interaktive Glanzeffekte

| Class | Description |
|--------|-------------|
| `.shine-hover` | Zeigt Glanzeffekt at Hover on |
| `.shine-active` | Zeigt Glanzeffekt im aktiven state on |
| `.shine-click` | Auslosen des Glanzeffekts beim Click |
| `.shine-focus` | Zeigt Glanzeffekt im Fokus-state on |
| `.shine-reactive` | Glanzeffekt reagiert on Mausbewegungen |
| `.shine-autoplay` | Automatisch abspielender Glanzeffekt |

## Examples

### Grundlegende Glanzeffekte

```html
<div class="shine-examples">
  <div class="shine-example shine shine-sweep">
    <div class="content">Glanzeffekt (Sweep)</div>
  </div>
  
  <div class="shine-example shine shine-pulse">
    <div class="content">Glanzeffekt (Pulse)</div>
  </div>
  
  <div class="shine-example shine shine-static">
    <div class="content">Glanzeffekt (Static)</div>
  </div>
  
  <div class="shine-example shine shine-radial">
    <div class="content">Glanzeffekt (Radial)</div>
  </div>
</div>

<style>
  .shine-examples {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .shine-example {
    height: 200px;
    border-radius: 8px;
    background-color: #303f9f;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .shine-example .content {
    font-size: 1.25rem;
    font-weight: 500;
    z-index: 1;
  }
</style>
```

### Glanzrichtungen

```html
<div class="shine-directions">
  <div class="direction-example shine shine-left-to-right">
    <span>links after Rechts</span>
  </div>
  
  <div class="direction-example shine shine-right-to-left">
    <span>Rechts after links</span>
  </div>
  
  <div class="direction-example shine shine-top-to-bottom">
    <span>Oben after Unten</span>
  </div>
  
  <div class="direction-example shine shine-bottom-to-top">
    <span>Unten after Oben</span>
  </div>
  
  <div class="direction-example shine shine-diagonal">
    <span>Diagonal</span>
  </div>
</div>

<style>
  .shine-directions {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .direction-example {
    height: 150px;
    width: 150px;
    border-radius: 8px;
    background-color: #4527a0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  
  .direction-example span {
    font-weight: 500;
    z-index: 1;
  }
</style>
```

### Interaktive Glanzeffekte

```html
<div class="interactive-shine">
  <button class="shine-btn shine shine-hover">
    Hover-Glanz
  </button>
  
  <button class="shine-btn shine shine-active">
    Aktiv-Glanz
  </button>
  
  <button class="shine-btn shine shine-click">
    Click-Glanz
  </button>
  
  <button class="shine-btn shine shine-reactive">
    Reaktiver Glanz
  </button>
</div>

<style>
  .interactive-shine {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #f5f5f5;
  }
  
  .shine-btn {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 6px;
    background-color: #673ab7;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .shine-btn:hover {
    transform: translateY(-2px);
  }
  
  .shine-btn:active {
    transform: translateY(1px);
  }
</style>
```

### Glanzeffekte in UI-Components

```html
<div class="ui-shine">
  <div class="card shine shine-hover">
    <div class="card-content">
      <h3>Card with Glanzeffekt</h3>
      <p>these Card zeigt einen Glanzeffekt beim Hover.</p>
      <button class="card-btn shine shine-sweep">more erfahren</button>
    </div>
  </div>
  
  <div class="product-card shine shine-sweep shine-autoplay">
    <div class="product-image">
      <img src="path/to/product.jpg" alt="Produktbild">
      <div class="product-badge shine shine-radial">Neu</div>
    </div>
    <div class="product-info">
      <h4>Produktname</h4>
      <p class="price">€99,99</p>
      <button class="add-to-cart shine shine-click">in den Warenkorb</button>
    </div>
  </div>
  
  <div class="features">
    <div class="feature-item shine shine-shimmer">
      <div class="icon">✨</div>
      <h4>Function 1</h4>
      <p>Description the ersten Function.</p>
    </div>
    
    <div class="feature-item shine shine-shimmer">
      <div class="icon">🚀</div>
      <h4>Function 2</h4>
      <p>Description the zweiten Function.</p>
    </div>
    
    <div class="feature-item shine shine-shimmer">
      <div class="icon">💡</div>
      <h4>Function 3</h4>
      <p>Description the dritten Function.</p>
    </div>
  </div>
</div>

<style>
  .ui-shine {
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
    position: relative;
    overflow: hidden;
  }
  
  .card h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    margin-bottom: 1.5rem;
    color: #666;
  }
  
  .card-btn {
    padding: 0.5rem 1rem;
    background-color: #673ab7;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .product-card {
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }
  
  .product-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff4081;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .product-info {
    padding: 1.5rem;
  }
  
  .product-info h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-size: 1.25rem;
    color: #673ab7;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .add-to-cart {
    width: 100%;
    padding: 0.75rem;
    background-color: #673ab7;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    grid-column: 1 / -1;
  }
  
  .feature-item {
    background-color: white;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .feature-item h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .feature-item p {
    margin: 0;
    color: #666;
  }
</style>
```

## Customization

the Glanzeffekte can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Glanzparameter */
  --shine-color: rgba(255, 255, 255, 0.5);
  --shine-angle: 45deg;
  --shine-width: 100%;
  --shine-blur: 10px;
  --shine-opacity: 0.7;
  
  /* Animationsparameter */
  --shine-duration: 2s;
  --shine-timing: ease-in-out;
  --shine-delay: 0s;
  --shine-iteration: infinite;
  
  /* Spezifische Effektparameter */
  --shine-sweep-width: 50%;
  --shine-pulse-scale: 1.5;
  --shine-radial-size: 150%;
  
  /* Interaktive parameter */
  --shine-hover-opacity: 0.9;
  --shine-hover-duration: 1.5s;
}
```

## CSS-Implementation

the Glanzeffekte become hauptsachlich through pseudo-elements, Gradienten and animations implementiert:

```css
/* Base-Glanzeffekt */
.shine {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    var(--shine-angle, 45deg),
    transparent,
    transparent,
    var(--shine-color, rgba(255, 255, 255, 0.5)),
    transparent,
    transparent
  );
  background-size: 200% 200%;
  z-index: 0;
  opacity: 0;
  pointer-events: none;
}

/* Sweep-effect (Standard) */
.shine.shine-sweep::before {
  opacity: var(--shine-opacity, 0.7);
  animation: shine-sweep var(--shine-duration, 2s) var(--shine-timing, ease-in-out) var(--shine-delay, 0s) var(--shine-iteration, infinite);
}

@keyframes shine-sweep {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Pulse-effect */
.shine.shine-pulse::before {
  opacity: var(--shine-opacity, 0.7);
  animation: shine-pulse var(--shine-duration, 2s) var(--shine-timing, ease-in-out) var(--shine-delay, 0s) var(--shine-iteration, infinite);
}

@keyframes shine-pulse {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: var(--shine-opacity, 0.7);
  }
}

/* Static-effect */
.shine.shine-static::before {
  opacity: var(--shine-opacity, 0.7);
  background: linear-gradient(
    var(--shine-angle, 45deg),
    transparent,
    var(--shine-color, rgba(255, 255, 255, 0.5)) 40%,
    var(--shine-color, rgba(255, 255, 255, 0.5)) 60%,
    transparent
  );
}

/* Radial-effect */
.shine.shine-radial::before {
  opacity: var(--shine-opacity, 0.7);
  background: radial-gradient(
    circle at center,
    var(--shine-color, rgba(255, 255, 255, 0.5)) 0%,
    transparent 70%
  );
  animation: shine-radial var(--shine-duration, 2s) var(--shine-timing, ease-in-out) var(--shine-delay, 0s) var(--shine-iteration, infinite);
}

@keyframes shine-radial {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(var(--shine-radial-size, 1.5));
    opacity: var(--shine-opacity, 0.7);
  }
}

/* Richtungen */
.shine.shine-left-to-right::before {
  --shine-angle: 90deg;
}

.shine.shine-right-to-left::before {
  --shine-angle: -90deg;
}

.shine.shine-top-to-bottom::before {
  --shine-angle: 0deg;
}

.shine.shine-bottom-to-top::before {
  --shine-angle: 180deg;
}

.shine.shine-diagonal::before {
  --shine-angle: 45deg;
}

/* Interaktive effects */
.shine.shine-hover::before {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.shine.shine-hover:hover::before {
  opacity: var(--shine-hover-opacity, 0.9);
  animation: shine-sweep var(--shine-hover-duration, 1.5s) var(--shine-timing, ease-in-out);
}

.shine.shine-active::before {
  opacity: 0;
}

.shine.shine-active:active::before {
  opacity: var(--shine-opacity, 0.7);
  animation: shine-sweep 0.8s ease-out;
}

/* Shimmer-effect */
.shine.shine-shimmer::before {
  opacity: var(--shine-opacity, 0.7);
  background: linear-gradient(
    var(--shine-angle, 45deg),
    transparent,
    var(--shine-color, rgba(255, 255, 255, 0.5)),
    transparent
  );
  background-size: 200% 200%;
  animation: shine-shimmer var(--shine-duration, 2s) var(--shine-timing, ease-in-out) var(--shine-delay, 0s) var(--shine-iteration, infinite);
}

@keyframes shine-shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

/* Flicker-effect */
.shine.shine-flicker::before {
  opacity: var(--shine-opacity, 0.7);
  animation: shine-flicker var(--shine-duration, 2s) var(--shine-timing, ease-in-out) var(--shine-delay, 0s) var(--shine-iteration, infinite);
}

@keyframes shine-flicker {
  0%, 100% {
    opacity: 0;
  }
  5%, 10% {
    opacity: 0.3;
  }
  15% {
    opacity: 0;
  }
  20%, 40% {
    opacity: var(--shine-opacity, 0.7);
  }
  45%, 55% {
    opacity: 0.2;
  }
  60%, 80% {
    opacity: var(--shine-opacity, 0.7);
  }
  85%, 95% {
    opacity: 0.1;
  }
}
```

## JavaScript-Unterstutzung

for reaktive Glanzeffekte, the on Mausbewegungen reagieren, wird a einfaches JavaScript benotigt:

```javascript
// Reaktive Glanzeffekte, the on Mausbewegungen reagieren
document.querySelectorAll('.shine-reactive').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-position within des Elements
    const y = e.clientY - rect.top;  // Y-position within des Elements
    
    // position des Glanzeffekts basierend on Mausposition setzen
    const shineElement = element.querySelector('.shine-effect') || element;
    shineElement.style.setProperty('--shine-position-x', `${x}px`);
    shineElement.style.setProperty('--shine-position-y', `${y}px`);
    
    // Glanzeffekt activate
    shineElement.classList.add('active');
  });
  
  element.addEventListener('mouseleave', () => {
    const shineElement = element.querySelector('.shine-effect') || element;
    shineElement.classList.remove('active');
  });
});

// Click-Glanzeffekt
document.querySelectorAll('.shine-click').forEach(element => {
  element.addEventListener('click', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Temporares element for den Klick-effect create
    const clickEffect = document.createElement('div');
    clickEffect.className = 'shine-click-effect';
    clickEffect.style.left = `${x}px`;
    clickEffect.style.top = `${y}px`;
    
    element.appendChild(clickEffect);
    
    // after the animation remove
    setTimeout(() => {
      clickEffect.remove();
    }, 1000);
  });
});
```

## Fortgeschrittene Glanztechniken

### Mehrfarbige Glanzeffekte

```css
.shine-multicolor::before {
  background: linear-gradient(
    var(--shine-angle, 45deg),
    transparent,
    rgba(255, 0, 0, 0.3),
    rgba(0, 255, 0, 0.3),
    rgba(0, 0, 255, 0.3),
    transparent
  );
  background-size: 400% 100%;
  animation: shine-multicolor 3s linear infinite;
}

@keyframes shine-multicolor {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 400% 0%;
  }
}
```

### 3D-Glanzeffekte

```css
.shine-3d {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
}

.shine-3d::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: rotateX(30deg) rotateY(40deg);
  animation: shine-3d 5s ease-in-out infinite;
}

@keyframes shine-3d {
  0%, 100% {
    transform: rotateX(30deg) rotateY(40deg);
  }
  50% {
    transform: rotateX(-30deg) rotateY(-40deg);
  }
}
```

## Accessibility

at the Usage from Glanzeffekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Bewegung reduzieren**: Vermeiden them ubermassige or ablenkende animations, the Nutzer with vestibularen Storungen beeintrachtigen konnten
2. **Kontrast**: ensure, that the Glanzeffekt den Kontrast and the Lesbarkeit from Text not beeintrachtigt
3. **Alternativer state**: Bieten them a alternative Moglichkeit, on contents zuzugreifen, the through Hover-Glanzeffekte hervorgehoben become

```css
/* Reduzierte Bewegung for Glanzeffekte */
@media (prefers-reduced-motion: reduce) {
  .shine::before {
    animation: none !important;
    transition: none !important;
    opacity: 0.3;
  }
  
  .shine-hover:hover::before,
  .shine-active:active::before {
    opacity: 0.3;
    animation: none !important;
  }
  
  .shine-flicker::before,
  .shine-sweep::before,
  .shine-pulse::before,
  .shine-shimmer::before,
  .shine-radial::before {
    animation: none !important;
  }
}

/* Verbesserte Lesbarkeit for Text with Glanzeffekten */
.shine-with-text {
  --shine-opacity: 0.3;
}
```

## Performance-Optimierung

Glanzeffekte can the Rendering-Performance beeinflussen. note these Tipps for optimale Leistung:

1. **Hardware-Beschleunigung**: use them properties how `transform` and `opacity` for bessere Performance
2. **Reduzierte Komplexitat**: Begrenzen them the Anzahl the elements with Glanzeffekten on einer Seite
3. **Layer-Promotion**: use them `will-change` for animierte Glanzeffekte

```css
/* Performance-Optimierung for Glanzeffekte */
.shine-optimized::before {
  will-change: transform, opacity;
}

/* Reduzierte Komplexitat for mobile Gerate */
@media (max-width: 768px) {
  :root {
    --shine-opacity: 0.5;
    --shine-duration: 3s; /* Langsamere animation for mobile Gerate */
  }
  
  .shine-complex::before {
    display: none; /* Komplexe effects on Mobilgeraten deactivate */
  }
}
```

## Browser-Kompatibilitat

the Glanzeffekte become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Glanzeffekte | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Lineare Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| Radiale Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
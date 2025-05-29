---
title: Shine Effects
category: Effects
---

# Glanz-Effekte

Die Glanz-Effekte der Casoon UI Library bieten eine Sammlung von Lichteffekten, die Ihren UI-Elementen einen dynamischen, interaktiven und hochwertigen Look verleihen können. Diese Effekte sind ideal, um Aufmerksamkeit auf wichtige Elemente zu lenken oder subtile Bewegung in statische Interfaces zu bringen.

## Überblick

Glanz-Effekte imitieren das Verhalten von Licht, das über eine Oberfläche wandert oder auf ihr glänzt. Sie können verwendet werden, um Metalleffekte, Lichtreflexionen oder animierte Oberflächeneffekte zu erzeugen. Die Casoon UI Library bietet verschiedene Arten von Glanzeffekten, die einfach anzuwenden und anzupassen sind.

## Installation

Importieren Sie das Glanz-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/shine.css';
```

## Verfügbare Klassen

### Grundlegende Glanzeffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.shine` | Standardmäßiger Glanzeffekt |
| `.shine-subtle` | Subtiler Glanzeffekt |
| `.shine-medium` | Mittlerer Glanzeffekt (Standard) |
| `.shine-strong` | Starker, deutlicher Glanzeffekt |
| `.shine-sharp` | Scharfer, klar definierter Glanzeffekt |
| `.shine-blurred` | Weicher, verschwommener Glanzeffekt |

### Glanztypen

| Klasse | Beschreibung |
|--------|-------------|
| `.shine-sweep` | Glanzeffekt, der über das Element wandert |
| `.shine-pulse` | Pulsierender Glanzeffekt |
| `.shine-static` | Statischer Glanzeffekt ohne Animation |
| `.shine-radial` | Radialer Glanzeffekt vom Zentrum ausgehend |
| `.shine-flicker` | Flackernder Glanzeffekt |
| `.shine-shimmer` | Schimmernder Glanzeffekt über die gesamte Oberfläche |
| `.shine-highlight` | Hervorhebendes Glanzlicht an bestimmten Stellen |

### Glanzrichtungen

| Klasse | Beschreibung |
|--------|-------------|
| `.shine-left-to-right` | Glanz von links nach rechts (Standard) |
| `.shine-right-to-left` | Glanz von rechts nach links |
| `.shine-top-to-bottom` | Glanz von oben nach unten |
| `.shine-bottom-to-top` | Glanz von unten nach oben |
| `.shine-diagonal` | Diagonaler Glanzeffekt |
| `.shine-radiate` | Glanz, der von der Mitte nach außen strahlt |

### Interaktive Glanzeffekte

| Klasse | Beschreibung |
|--------|-------------|
| `.shine-hover` | Zeigt Glanzeffekt bei Hover an |
| `.shine-active` | Zeigt Glanzeffekt im aktiven Zustand an |
| `.shine-click` | Auslösen des Glanzeffekts beim Klicken |
| `.shine-focus` | Zeigt Glanzeffekt im Fokus-Zustand an |
| `.shine-reactive` | Glanzeffekt reagiert auf Mausbewegungen |
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
    <span>Links nach Rechts</span>
  </div>
  
  <div class="direction-example shine shine-right-to-left">
    <span>Rechts nach Links</span>
  </div>
  
  <div class="direction-example shine shine-top-to-bottom">
    <span>Oben nach Unten</span>
  </div>
  
  <div class="direction-example shine shine-bottom-to-top">
    <span>Unten nach Oben</span>
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
      <h3>Card mit Glanzeffekt</h3>
      <p>Diese Card zeigt einen Glanzeffekt beim Hover.</p>
      <button class="card-btn shine shine-sweep">Mehr erfahren</button>
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
      <button class="add-to-cart shine shine-click">In den Warenkorb</button>
    </div>
  </div>
  
  <div class="features">
    <div class="feature-item shine shine-shimmer">
      <div class="icon">✨</div>
      <h4>Funktion 1</h4>
      <p>Beschreibung der ersten Funktion.</p>
    </div>
    
    <div class="feature-item shine shine-shimmer">
      <div class="icon">🚀</div>
      <h4>Funktion 2</h4>
      <p>Beschreibung der zweiten Funktion.</p>
    </div>
    
    <div class="feature-item shine shine-shimmer">
      <div class="icon">💡</div>
      <h4>Funktion 3</h4>
      <p>Beschreibung der dritten Funktion.</p>
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

## Anpassung

Die Glanzeffekte können über CSS Variables angepasst werden:

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
  
  /* Interaktive Parameter */
  --shine-hover-opacity: 0.9;
  --shine-hover-duration: 1.5s;
}
```

## CSS-Implementierung

Die Glanzeffekte werden hauptsächlich durch pseudo-Elemente, Gradienten und Animationen implementiert:

```css
/* Basis-Glanzeffekt */
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

/* Sweep-Effekt (Standard) */
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

/* Pulse-Effekt */
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

/* Static-Effekt */
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

/* Radial-Effekt */
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

/* Interaktive Effekte */
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

/* Shimmer-Effekt */
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

/* Flicker-Effekt */
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

## JavaScript-Unterstützung

Für reaktive Glanzeffekte, die auf Mausbewegungen reagieren, wird ein einfaches JavaScript benötigt:

```javascript
// Reaktive Glanzeffekte, die auf Mausbewegungen reagieren
document.querySelectorAll('.shine-reactive').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left; // X-Position innerhalb des Elements
    const y = e.clientY - rect.top;  // Y-Position innerhalb des Elements
    
    // Position des Glanzeffekts basierend auf Mausposition setzen
    const shineElement = element.querySelector('.shine-effect') || element;
    shineElement.style.setProperty('--shine-position-x', `${x}px`);
    shineElement.style.setProperty('--shine-position-y', `${y}px`);
    
    // Glanzeffekt aktivieren
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
    
    // Temporäres Element für den Klick-Effekt erstellen
    const clickEffect = document.createElement('div');
    clickEffect.className = 'shine-click-effect';
    clickEffect.style.left = `${x}px`;
    clickEffect.style.top = `${y}px`;
    
    element.appendChild(clickEffect);
    
    // Nach der Animation entfernen
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

Bei der Usage von Glanzeffekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Bewegung reduzieren**: Vermeiden Sie übermäßige oder ablenkende Animationen, die Nutzer mit vestibulären Störungen beeinträchtigen könnten
2. **Kontrast**: Stellen Sie sicher, dass der Glanzeffekt den Kontrast und die Lesbarkeit von Text nicht beeinträchtigt
3. **Alternativer Zustand**: Bieten Sie eine alternative Möglichkeit, auf Inhalte zuzugreifen, die durch Hover-Glanzeffekte hervorgehoben werden

```css
/* Reduzierte Bewegung für Glanzeffekte */
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

/* Verbesserte Lesbarkeit für Text mit Glanzeffekten */
.shine-with-text {
  --shine-opacity: 0.3;
}
```

## Performance-Optimierung

Glanzeffekte können die Rendering-Performance beeinflussen. Beachten Sie diese Tipps für optimale Leistung:

1. **Hardware-Beschleunigung**: Verwenden Sie Eigenschaften wie `transform` und `opacity` für bessere Performance
2. **Reduzierte Komplexität**: Begrenzen Sie die Anzahl der Elemente mit Glanzeffekten auf einer Seite
3. **Layer-Promotion**: Nutzen Sie `will-change` für animierte Glanzeffekte

```css
/* Performance-Optimierung für Glanzeffekte */
.shine-optimized::before {
  will-change: transform, opacity;
}

/* Reduzierte Komplexität für mobile Geräte */
@media (max-width: 768px) {
  :root {
    --shine-opacity: 0.5;
    --shine-duration: 3s; /* Langsamere Animation für mobile Geräte */
  }
  
  .shine-complex::before {
    display: none; /* Komplexe Effekte auf Mobilgeräten deaktivieren */
  }
}
```

## Browser-Kompatibilität

Die Glanzeffekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Glanzeffekte | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Lineare Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| Radiale Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht vollständig unterstützen, werden vereinfachte Fallback-Styles bereitgestellt. 
---
title: Sparkle Effects
category: Effects
---

# Funkeln-effects

the Funkeln-effects the Casoon UI Library bieten a Sammlung from dynamischen Partikeleffekten, the Ihren UI-Elementen a funkelndes, magisches Aussehen verleihen can. these effects eignen oneself hervorragend, um besondere Aktionen to betonen or festliche, spielerische Akzente to setzen.

## Uberblick

Funkeln-effects simulieren kleine, glitzernde Partikel, the on or um a element herum auftreten. You can verwendet become, um successes to feiern, wichtige elements hervorzuheben or einfach a verspielte, magische Atmosphare to schaffen. the Casoon UI Library bietet verschiedene Arten from Funkeln-Effekten, the einfach anzuwenden and anzupassen sind.

## Installation

import them the Funkeln-effects-modules over CSS:

```css
@import '@casoon/ui-lib/effects/sparkle.css';
```

## Verfugbare classes

### Grundlegende Funkeln-effects

| Class | Description |
|--------|-------------|
| `.sparkle` | Standardmassiger Funkeln-effect |
| `.sparkle-subtle` | Subtiler Funkeln-effect |
| `.sparkle-medium` | Mittlerer Funkeln-effect (Standard) |
| `.sparkle-intense` | Intensiver Funkeln-effect |

### Funkeln-Typen

| Class | Description |
|--------|-------------|
| `.sparkle-stars` | Sternartige Funkeln (Standard) |
| `.sparkle-dots` | Punktartige Funkeln |
| `.sparkle-burst` | Explosionsartige Funkeln |
| `.sparkle-glitter` | Glitzerartige Funkeln |
| `.sparkle-fire` | Feuerartige Funkeln |
| `.sparkle-magic` | Magische Funkeln with verschiedenen Formen |

### Funktions-Modi

| Class | Description |
|--------|-------------|
| `.sparkle-hover` | Funkeln erscheint at Hover |
| `.sparkle-click` | Funkeln erscheint beim Click |
| `.sparkle-active` | Funkeln erscheint im aktiven state |
| `.sparkle-random` | Zufallig auftretende Funkeln |
| `.sparkle-continuous` | Kontinuierlich funkelnder effect |
| `.sparkle-follow` | Funkeln folgt the Mausposition |

## Examples

### Grundlegende Funkeln-effects

```html
<div class="sparkle-examples">
  <button class="sparkle sparkle-stars sparkle-hover">Sterne-Funkeln</button>
  <button class="sparkle sparkle-dots sparkle-hover">Punkte-Funkeln</button>
  <button class="sparkle sparkle-burst sparkle-click">Burst-Funkeln</button>
  <button class="sparkle sparkle-glitter sparkle-continuous">Glitter-Funkeln</button>
</div>
```

### Interaktive Funkeln in UI-Components

```html
<div class="ui-sparkle">
  <div class="success-card sparkle sparkle-stars sparkle-continuous">
    <div class="icon">✓</div>
    <h3>Erfolgreich abgeschlossen!</h3>
    <p>Ihre Zahlung wurde verarbeitet.</p>
  </div>
  
  <button class="cta-button sparkle sparkle-burst sparkle-click">
    Jetzt kaufen
  </button>
  
  <div class="achievement-badge sparkle sparkle-magic sparkle-hover">
    <div class="badge-icon">🏆</div>
    <span>1. Platz</span>
  </div>
</div>
```

## Customization

the Funkeln-effects can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Funkeln-parameter */
  --sparkle-color: #ffeb3b;
  --sparkle-size: 10px;
  --sparkle-duration: 1.5s;
  --sparkle-count: 15;
  --sparkle-speed: 1;
  
  /* effect-spezifische parameter */
  --sparkle-star-points: 5;
  --sparkle-burst-scale: 1.5;
  --sparkle-random-delay: 3s;
  
  /* Farbvarianten */
  --sparkle-gold: #ffd700;
  --sparkle-silver: #c0c0c0;
  --sparkle-rainbow: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
}
```

## CSS-Implementation

the Funkeln-effects become through a Kombination aus CSS-animations and pseudo-Elementen erzeugt:

```css
/* Base-Funkeln */
.sparkle {
  position: relative;
  overflow: visible;
}

/* Funkeln-containers */
.sparkle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

/* Stern-Funkeln */
.sparkle.sparkle-stars::after {
  background-image: radial-gradient(
    var(--sparkle-color, #ffeb3b) 0%,
    transparent 70%
  );
  background-size: var(--sparkle-size, 10px) var(--sparkle-size, 10px);
  animation: sparkle-stars calc(var(--sparkle-duration, 1.5s) * var(--sparkle-speed, 1)) linear infinite;
}

@keyframes sparkle-stars {
  0% {
    opacity: 0;
    background-position: 0% 0%;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    background-position: 100% 100%;
  }
}

/* Hover-Aktivierung */
.sparkle.sparkle-hover::after {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sparkle.sparkle-hover:hover::after {
  opacity: 1;
}

/* Click-Aktivierung */
.sparkle.sparkle-click::after {
  opacity: 0;
}

.sparkle.sparkle-click.active::after {
  opacity: 1;
  animation: sparkle-burst 0.8s ease-out forwards;
}

@keyframes sparkle-burst {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(var(--sparkle-burst-scale, 1.5));
    opacity: 0;
  }
}
```

## JavaScript-Unterstutzung

for some the fortgeschritteneren Funkeln-effects wird JavaScript benotigt:

```javascript
// Click-Funkeln
document.querySelectorAll('.sparkle-click').forEach(element => {
  element.addEventListener('click', () => {
    element.classList.add('active');
    
    setTimeout(() => {
      element.classList.remove('active');
    }, 800);
  });
});

// Zufalliges Funkeln
document.querySelectorAll('.sparkle-random').forEach(element => {
  function randomSparkle() {
    element.classList.add('active');
    
    setTimeout(() => {
      element.classList.remove('active');
    }, 800);
    
    const delay = Math.random() * parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue('--sparkle-random-delay') || '3s') * 1000;
    
    setTimeout(randomSparkle, delay);
  }
  
  randomSparkle();
});

// Mausfolge-Funkeln
document.querySelectorAll('.sparkle-follow').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Funkeln on the Mausposition create
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-particle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    element.appendChild(sparkle);
    
    // after the animation remove
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
});
```

## Accessibility

at the Usage from Funkeln-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Bewegung reduzieren**: Vermeiden them ubermassige Funkeln-effects, the ablenkend be can
2. **Photosensitive Epilepsie**: ensure, that the Funkeln-effects not to hell or blinkend sind
3. **Informationsvermittlung**: Verlassen them oneself not ausschliesslich on Funkeln-effects, um wichtige Informationen to vermitteln

```css
/* Reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .sparkle::after {
    animation: none !important;
    opacity: 0.3;
  }
  
  .sparkle-continuous::after {
    opacity: 0.2;
    animation: sparkle-reduced 4s ease-in-out infinite !important;
  }
  
  @keyframes sparkle-reduced {
    0%, 100% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
  }
}
```

## Browser-Kompatibilitat

the Funkeln-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Funkeln | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-animations | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Radial-Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

for altere Browser, the some functions not vollstandig unterstutzen, become vereinfachte Fallback-Styles bereitgestellt. 
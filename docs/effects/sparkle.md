---
title: Sparkle Effects
category: Effects
---

# Funkeln-Effekte

Die Funkeln-Effekte der Casoon UI Library bieten eine Sammlung von dynamischen Partikeleffekten, die Ihren UI-Elementen ein funkelndes, magisches Aussehen verleihen können. Diese Effekte eignen sich hervorragend, um besondere Aktionen zu betonen oder festliche, spielerische Akzente zu setzen.

## Überblick

Funkeln-Effekte simulieren kleine, glitzernde Partikel, die auf oder um ein Element herum auftreten. Sie können verwendet werden, um Erfolge zu feiern, wichtige Elemente hervorzuheben oder einfach eine verspielte, magische Atmosphäre zu schaffen. Die Casoon UI Library bietet verschiedene Arten von Funkeln-Effekten, die einfach anzuwenden und anzupassen sind.

## Installation

Importieren Sie das Funkeln-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/sparkle.css';
```

## Verfügbare Klassen

### Grundlegende Funkeln-Effekte

| Klasse | Beschreibung |
|--------|-------------|
| `.sparkle` | Standardmäßiger Funkeln-Effekt |
| `.sparkle-subtle` | Subtiler Funkeln-Effekt |
| `.sparkle-medium` | Mittlerer Funkeln-Effekt (Standard) |
| `.sparkle-intense` | Intensiver Funkeln-Effekt |

### Funkeln-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `.sparkle-stars` | Sternartige Funkeln (Standard) |
| `.sparkle-dots` | Punktartige Funkeln |
| `.sparkle-burst` | Explosionsartige Funkeln |
| `.sparkle-glitter` | Glitzerartige Funkeln |
| `.sparkle-fire` | Feuerartige Funkeln |
| `.sparkle-magic` | Magische Funkeln mit verschiedenen Formen |

### Funktions-Modi

| Klasse | Beschreibung |
|--------|-------------|
| `.sparkle-hover` | Funkeln erscheint bei Hover |
| `.sparkle-click` | Funkeln erscheint beim Klicken |
| `.sparkle-active` | Funkeln erscheint im aktiven Zustand |
| `.sparkle-random` | Zufällig auftretende Funkeln |
| `.sparkle-continuous` | Kontinuierlich funkelnder Effekt |
| `.sparkle-follow` | Funkeln folgt der Mausposition |

## Examples

### Grundlegende Funkeln-Effekte

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

## Anpassung

Die Funkeln-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Funkeln-Parameter */
  --sparkle-color: #ffeb3b;
  --sparkle-size: 10px;
  --sparkle-duration: 1.5s;
  --sparkle-count: 15;
  --sparkle-speed: 1;
  
  /* Effekt-spezifische Parameter */
  --sparkle-star-points: 5;
  --sparkle-burst-scale: 1.5;
  --sparkle-random-delay: 3s;
  
  /* Farbvarianten */
  --sparkle-gold: #ffd700;
  --sparkle-silver: #c0c0c0;
  --sparkle-rainbow: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
}
```

## CSS-Implementierung

Die Funkeln-Effekte werden durch eine Kombination aus CSS-Animationen und pseudo-Elementen erzeugt:

```css
/* Basis-Funkeln */
.sparkle {
  position: relative;
  overflow: visible;
}

/* Funkeln-Container */
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

## JavaScript-Unterstützung

Für einige der fortgeschritteneren Funkeln-Effekte wird JavaScript benötigt:

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

// Zufälliges Funkeln
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
    
    // Funkeln an der Mausposition erstellen
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-particle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    element.appendChild(sparkle);
    
    // Nach der Animation entfernen
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
});
```

## Accessibility

Bei der Usage von Funkeln-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Bewegung reduzieren**: Vermeiden Sie übermäßige Funkeln-Effekte, die ablenkend sein können
2. **Photosensitive Epilepsie**: Stellen Sie sicher, dass die Funkeln-Effekte nicht zu hell oder blinkend sind
3. **Informationsvermittlung**: Verlassen Sie sich nicht ausschließlich auf Funkeln-Effekte, um wichtige Informationen zu vermitteln

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

## Browser-Kompatibilität

Die Funkeln-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Funkeln | ✓ | ✓ | ✓ | ✓ | Teilweise |
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | Teilweise |
| Radial-Gradienten | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | ✗ |

Für ältere Browser, die einige Funktionen nicht vollständig unterstützen, werden vereinfachte Fallback-Styles bereitgestellt. 
# Scroll-Effekte

Scroll-Effekte werden verwendet, um das Benutzererlebnis beim Scrollen auf einer Webseite zu verbessern. Die `@casoon/ui-lib` bietet verschiedene Scroll-Effekte, die Interaktionen beim Scrollen dynamischer und ansprechender gestalten.

## Grundlegende Verwendung

Der grundlegende Scroll-Effekt kann auf jedes Element angewendet werden:

```html
<div class="scroll-effect">
  Dieser Inhalt wird beim Scrollen animiert
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Scroll-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.scroll-effect` | Basisklasse für Scroll-Effekte |
| `.scroll-fade` | Einblenden beim Scrollen |
| `.scroll-slide` | Hereingleiten beim Scrollen |
| `.scroll-zoom` | Zoom-Effekt beim Scrollen |
| `.scroll-rotate` | Rotationseffekt beim Scrollen |
| `.scroll-parallax` | Parallax-Effekt beim Scrollen |
| `.scroll-sticky` | Element bleibt beim Scrollen haften |
| `.scroll-reveal` | Element wird beim Scrollen aufgedeckt |
| `.scroll-transform` | Transformation beim Scrollen |
| `.scroll-progress` | Fortschrittsanzeige beim Scrollen |
| `.scroll-snap` | Snap-Scrolling zu bestimmten Punkten |
| `.scroll-animate` | Allgemeine Animation beim Scrollen |
| `.scroll-lazy` | Verzögertes Laden beim Scrollen |
| `.scroll-infinite` | Unendliches Scrollen |
| `.scroll-smooth` | Sanftes Scrollen |

## Varianten

### Fade-Effekte

Elemente werden beim Scrollen ein- oder ausgeblendet:

```html
<div class="scroll-fade-in">Beim Scrollen einblenden</div>
<div class="scroll-fade-out">Beim Scrollen ausblenden</div>
<div class="scroll-fade-up">Von unten einblenden</div>
<div class="scroll-fade-down">Von oben einblenden</div>
<div class="scroll-fade-left">Von links einblenden</div>
<div class="scroll-fade-right">Von rechts einblenden</div>
```

### Slide-Effekte

Elemente gleiten beim Scrollen in die Ansicht:

```html
<div class="scroll-slide-up">Von unten hereingleiten</div>
<div class="scroll-slide-down">Von oben hereingleiten</div>
<div class="scroll-slide-left">Von links hereingleiten</div>
<div class="scroll-slide-right">Von rechts hereingleiten</div>
```

### Zoom-Effekte

Elemente werden beim Scrollen vergrößert oder verkleinert:

```html
<div class="scroll-zoom-in">Beim Scrollen vergrößern</div>
<div class="scroll-zoom-out">Beim Scrollen verkleinern</div>
<div class="scroll-zoom-focus">Beim Scrollen fokussieren</div>
```

### Rotate-Effekte

Elemente rotieren beim Scrollen:

```html
<div class="scroll-rotate-x">Um X-Achse rotieren</div>
<div class="scroll-rotate-y">Um Y-Achse rotieren</div>
<div class="scroll-rotate-z">Um Z-Achse rotieren</div>
```

### Parallax-Effekte

Elemente bewegen sich mit unterschiedlichen Geschwindigkeiten beim Scrollen:

```html
<div class="scroll-parallax-bg">Parallax-Hintergrund</div>
<div class="scroll-parallax-slow">Langsame Parallax-Bewegung</div>
<div class="scroll-parallax-fast">Schnelle Parallax-Bewegung</div>
<div class="scroll-parallax-reverse">Umgekehrte Parallax-Bewegung</div>
```

### Sticky-Effekte

Elemente bleiben beim Scrollen an einer Position haften:

```html
<div class="scroll-sticky-top">Am oberen Rand haften</div>
<div class="scroll-sticky-bottom">Am unteren Rand haften</div>
<div class="scroll-sticky-header">Header bleibt haften</div>
<div class="scroll-sticky-sidebar">Seitenleiste bleibt haften</div>
```

### Reveal-Effekte

Elemente werden beim Scrollen aufgedeckt:

```html
<div class="scroll-reveal-mask">Mit Maske aufdecken</div>
<div class="scroll-reveal-curtain">Wie ein Vorhang aufdecken</div>
<div class="scroll-reveal-wipe">Wischeffekt beim Aufdecken</div>
```

### Transform-Effekte

Elemente werden beim Scrollen transformiert:

```html
<div class="scroll-transform-skew">Verzerren beim Scrollen</div>
<div class="scroll-transform-perspective">Perspektive ändern beim Scrollen</div>
<div class="scroll-transform-tilt">Neigen beim Scrollen</div>
```

### Progress-Effekte

Fortschrittsanzeigen basierend auf der Scroll-Position:

```html
<div class="scroll-progress-bar">Fortschrittsbalken beim Scrollen</div>
<div class="scroll-progress-circle">Kreisförmiger Fortschritt beim Scrollen</div>
<div class="scroll-progress-counter">Numerischer Fortschritt beim Scrollen</div>
```

### Snap-Effekte

Scroll-Snap zu bestimmten Punkten:

```html
<div class="scroll-snap-container">
  <div class="scroll-snap-item">Abschnitt 1</div>
  <div class="scroll-snap-item">Abschnitt 2</div>
  <div class="scroll-snap-item">Abschnitt 3</div>
</div>
```

## Kombination mit anderen Elementen

Scroll-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Bilder mit Scroll-Effekten

```html
<img class="scroll-parallax" src="bild.jpg" alt="Parallax-Bild">
<div class="image-gallery">
  <img class="scroll-fade-in" src="bild1.jpg" alt="Bild 1">
  <img class="scroll-fade-in" src="bild2.jpg" alt="Bild 2">
  <img class="scroll-fade-in" src="bild3.jpg" alt="Bild 3">
</div>
```

### Texte mit Scroll-Effekten

```html
<h2 class="scroll-slide-up">Überschrift mit Slide-Effekt</h2>
<p class="scroll-fade-in">Absatz mit Fade-Effekt</p>
<blockquote class="scroll-zoom-in">Zitat mit Zoom-Effekt</blockquote>
```

### Karten mit Scroll-Effekten

```html
<div class="card-grid">
  <div class="card scroll-reveal">
    <div class="card-body">Karte 1</div>
  </div>
  <div class="card scroll-reveal">
    <div class="card-body">Karte 2</div>
  </div>
  <div class="card scroll-reveal">
    <div class="card-body">Karte 3</div>
  </div>
</div>
```

### Navigation mit Scroll-Effekten

```html
<nav class="navbar scroll-sticky-top">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">Über uns</a>
  <a href="#" class="nav-link">Kontakt</a>
</nav>

<div class="scroll-progress-bar"></div>
```

## Anpassung

Die Scroll-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Allgemeine Scroll-Parameter */
  --scroll-duration: 0.5s;
  --scroll-timing-function: ease-out;
  --scroll-delay: 0s;
  --scroll-threshold: 0.2; /* Prozentsatz des Elements im Viewport */
  
  /* Fade-Parameter */
  --scroll-fade-distance: 50px;
  --scroll-fade-opacity-start: 0;
  --scroll-fade-opacity-end: 1;
  
  /* Slide-Parameter */
  --scroll-slide-distance: 100px;
  
  /* Zoom-Parameter */
  --scroll-zoom-scale-start: 0.8;
  --scroll-zoom-scale-end: 1;
  
  /* Rotate-Parameter */
  --scroll-rotate-angle: 15deg;
  
  /* Parallax-Parameter */
  --scroll-parallax-ratio: 0.5;
  --scroll-parallax-perspective: 1000px;
  
  /* Sticky-Parameter */
  --scroll-sticky-offset: 0px;
  --scroll-sticky-z-index: 100;
  
  /* Progress-Parameter */
  --scroll-progress-color: var(--color-primary);
  --scroll-progress-height: 4px;
  --scroll-progress-z-index: 1000;
  
  /* Snap-Parameter */
  --scroll-snap-type: y mandatory;
  --scroll-snap-align: start;
  --scroll-snap-stop: always;
}
```

## CSS-Implementierung

Beispiele für die CSS-Implementierung der Scroll-Effekte:

```css
/* Basis-Scroll-Effekt */
.scroll-effect {
  transition-property: transform, opacity;
  transition-duration: var(--scroll-duration);
  transition-timing-function: var(--scroll-timing-function);
  transition-delay: var(--scroll-delay);
}

/* Fade-Effekte */
.scroll-fade-in {
  opacity: var(--scroll-fade-opacity-start);
}

.scroll-fade-in.scroll-active {
  opacity: var(--scroll-fade-opacity-end);
}

.scroll-fade-up {
  opacity: var(--scroll-fade-opacity-start);
  transform: translateY(var(--scroll-fade-distance));
}

.scroll-fade-up.scroll-active {
  opacity: var(--scroll-fade-opacity-end);
  transform: translateY(0);
}

/* ähnliche Definitionen für andere Richtungen */

/* Slide-Effekte */
.scroll-slide-up {
  transform: translateY(var(--scroll-slide-distance));
}

.scroll-slide-up.scroll-active {
  transform: translateY(0);
}

/* ähnliche Definitionen für andere Richtungen */

/* Zoom-Effekte */
.scroll-zoom-in {
  transform: scale(var(--scroll-zoom-scale-start));
}

.scroll-zoom-in.scroll-active {
  transform: scale(var(--scroll-zoom-scale-end));
}

/* Rotate-Effekte */
.scroll-rotate-z {
  transform: rotate(calc(-1 * var(--scroll-rotate-angle)));
}

.scroll-rotate-z.scroll-active {
  transform: rotate(0);
}

/* Parallax-Effekte */
.scroll-parallax {
  position: relative;
  will-change: transform;
}

.scroll-parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
  background-size: cover;
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform;
}

/* Sticky-Effekte */
.scroll-sticky-top {
  position: sticky;
  top: var(--scroll-sticky-offset);
  z-index: var(--scroll-sticky-z-index);
}

/* Progress-Effekte */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0; /* wird mit JavaScript aktualisiert */
  height: var(--scroll-progress-height);
  background-color: var(--scroll-progress-color);
  z-index: var(--scroll-progress-z-index);
}

/* Snap-Effekte */
.scroll-snap-container {
  scroll-snap-type: var(--scroll-snap-type);
  overflow-y: scroll;
  height: 100vh;
}

.scroll-snap-item {
  scroll-snap-align: var(--scroll-snap-align);
  scroll-snap-stop: var(--scroll-snap-stop);
  height: 100vh;
}

/* Smooth Scroll */
.scroll-smooth {
  scroll-behavior: smooth;
}
```

## JavaScript-Integration

Für dynamische Scroll-Effekte wird JavaScript verwendet:

```javascript
class ScrollEffects {
  constructor(options = {}) {
    this.options = {
      threshold: 0.2,
      root: null,
      rootMargin: '0px',
      triggerOnce: false,
      ...options
    };
    
    this.init();
  }
  
  init() {
    // Intersection Observer für Scroll-Effekte
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      threshold: this.options.threshold,
      root: this.options.root,
      rootMargin: this.options.rootMargin
    });
    
    // Alle Elemente mit Scroll-Effekten beobachten
    document.querySelectorAll('[class*="scroll-"]').forEach(element => {
      if (!element.classList.contains('scroll-progress-bar') && 
          !element.classList.contains('scroll-sticky-top') &&
          !element.classList.contains('scroll-snap-container')) {
        this.observer.observe(element);
      }
    });
    
    // Fortschrittsbalken initialisieren
    this.initProgressBar();
    
    // Smooth Scroll für Anker-Links
    this.initSmoothScroll();
  }
  
  handleIntersect(entries, observer) {
    entries.forEach(entry => {
      // Wenn Element sichtbar wird
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-active');
        
        // Bei triggerOnce Option: Beobachtung beenden
        if (this.options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!this.options.triggerOnce) {
        // Wenn Element nicht mehr sichtbar ist und nicht triggerOnce
        entry.target.classList.remove('scroll-active');
      }
    });
  }
  
  initProgressBar() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = `${scrollProgress}%`;
      });
    }
    
    const progressCircle = document.querySelector('.scroll-progress-circle');
    if (progressCircle) {
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        
        const circumference = 2 * Math.PI * 40; // Kreis mit Radius 40px
        const offset = circumference - (scrollProgress / 100) * circumference;
        
        progressCircle.style.strokeDashoffset = `${offset}px`;
      });
    }
  }
  
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialisierung der Scroll-Effekte
document.addEventListener('DOMContentLoaded', () => {
  new ScrollEffects({
    threshold: 0.2,
    triggerOnce: false
  });
  
  // Parallax-Effekte
  const parallaxElements = document.querySelectorAll('.scroll-parallax-bg');
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.parallaxSpeed || 0.5;
        element.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    });
  }
});
```

## Fortgeschrittene Parallax-Effekte

Für komplexere Parallax-Effekte kann ein spezieller Ansatz verwendet werden:

```javascript
class ParallaxEffect {
  constructor(elements, options = {}) {
    this.elements = elements instanceof NodeList ? elements : [elements];
    this.options = {
      perspective: 1000,
      scale: true,
      speed: 0.2,
      axis: 'y',
      ...options
    };
    
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll(); // Initial berechnen
  }
  
  handleScroll() {
    const scrollTop = window.pageYOffset;
    
    this.elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const elementHeight = element.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Überprüfen, ob Element im sichtbaren Bereich ist
      if (scrollTop + viewportHeight > elementTop && scrollTop < elementTop + elementHeight) {
        // Berechnen der relativen Position
        const relativePos = (scrollTop + viewportHeight - elementTop) / (viewportHeight + elementHeight);
        
        // Transformationswert basierend auf der Achse
        let transform = '';
        if (this.options.axis === 'y' || this.options.axis === 'both') {
          const yOffset = (relativePos - 0.5) * this.options.speed * 100;
          transform += `translateY(${yOffset}px) `;
        }
        
        if (this.options.axis === 'x' || this.options.axis === 'both') {
          const xOffset = (relativePos - 0.5) * this.options.speed * 100;
          transform += `translateX(${xOffset}px) `;
        }
        
        if (this.options.scale) {
          const scale = 1 + (relativePos - 0.5) * this.options.speed * 0.5;
          transform += `scale(${scale})`;
        }
        
        element.style.transform = transform;
      }
    });
  }
}

// Initialisierung für Parallax-Elemente
document.addEventListener('DOMContentLoaded', () => {
  const parallaxImages = document.querySelectorAll('.scroll-parallax-advanced');
  new ParallaxEffect(parallaxImages, {
    speed: 0.4,
    axis: 'both',
    scale: true
  });
});
```

## Barrierefreiheit

Bei der Verwendung von Scroll-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Animationspräferenzen**: Respektieren Sie die Einstellung `prefers-reduced-motion`
2. **Leserlichkeit**: Stellen Sie sicher, dass Text während Scroll-Effekten lesbar bleibt
3. **Keine reinen visuellen Hinweise**: Stellen Sie sicher, dass wichtige Informationen nicht nur durch Scroll-Effekte vermittelt werden
4. **Keyboard-Navigation**: Stellen Sie sicher, dass alle Inhalte auch ohne Scroll-Effekte zugänglich sind

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .scroll-effect,
  .scroll-fade-in,
  .scroll-slide-up,
  .scroll-zoom-in,
  .scroll-rotate-z,
  .scroll-parallax,
  .scroll-reveal {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  
  .scroll-snap-container {
    scroll-snap-type: none;
  }
  
  html {
    scroll-behavior: auto !important;
  }
}
```

```javascript
// Barrierefreie Scroll-Navigation
function setupAccessibleScrolling() {
  // Skip-Link zu Hauptinhalt
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Zum Hauptinhalt springen';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Tastaturnavigation für Snap-Scrolling
  const snapContainer = document.querySelector('.scroll-snap-container');
  if (snapContainer) {
    const snapItems = snapContainer.querySelectorAll('.scroll-snap-item');
    
    snapContainer.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const currentIndex = Array.from(snapItems).findIndex(item => 
          item.getBoundingClientRect().top >= 0
        );
        
        if (currentIndex < snapItems.length - 1) {
          snapItems[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
          snapItems[currentIndex + 1].focus();
        }
      }
      
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const currentIndex = Array.from(snapItems).findIndex(item => 
          item.getBoundingClientRect().top >= 0
        );
        
        if (currentIndex > 0) {
          snapItems[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
          snapItems[currentIndex - 1].focus();
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', setupAccessibleScrolling);
```

## Performance-Überlegungen

Scroll-Effekte können die Leistung beeinflussen:

1. **Scroll-Throttling**: Limitieren Sie die Häufigkeit von Scroll-Event-Callbacks
2. **Paint-freundliche Eigenschaften**: Verwenden Sie `transform` und `opacity` für Animationen
3. **GPU-Beschleunigung**: Nutzen Sie `will-change` und `transform: translateZ(0)` für performante Animationen
4. **Intersection Observer**: Verwenden Sie den Intersection Observer statt Scroll-Events, wenn möglich

```javascript
// Leistungsoptimierte Scroll-Handler
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Optimierter Scroll-Handler
const optimizedScroll = throttle(() => {
  // Scroll-Berechnungen hier
  const scrollTop = window.pageYOffset;
  
  // Parallax-Elemente aktualisieren
  document.querySelectorAll('.scroll-parallax-bg').forEach(element => {
    const speed = element.dataset.parallaxSpeed || 0.5;
    element.style.transform = `translateY(${scrollTop * speed}px)`;
  });
  
  // Fortschrittsbalken aktualisieren
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (progressBar) {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollProgress}%`;
  }
}, 16); // etwa 60fps

window.addEventListener('scroll', optimizedScroll);
```

## Browser-Kompatibilität

Die Scroll-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Basis-Scroll-Effekte | ✓ | ✓ | ✓ | ✓ | ✓ |
| Intersection Observer | ✓ | ✓ | ✓ | ✓ | Nein |
| Scroll-Snap | ✓ | ✓ | ✓ | ✓ | Nein |
| Sticky-Positionierung | ✓ | ✓ | ✓ | ✓ | Nein |
| Smooth Scroll | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-Effekte](/docs/effects/animation/transitions.md) - Übergangseffekte zwischen Zuständen
- [Transform-Effekte](/docs/effects/layout/transforms.md) - Transformationseffekte für Elemente
``` 
</rewritten_file>
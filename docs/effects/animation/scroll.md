# Scroll-effects

Scroll-effects become verwendet, um the Benutzererlebnis beim Scrollen on einer Webseite to verbessern. the `@casoon/ui-lib` bietet verschiedene Scroll-effects, the interactions beim Scrollen dynamischer and ansprechender gestalten.

## Basic Usage

the grundlegende Scroll-effect kann on jedes element angewendet become:

```html
<div class="scroll-effect">
  this content wird beim Scrollen animiert
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Scroll-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.scroll-effect` | Basisklasse for Scroll-effects |
| `.scroll-fade` | Einblenden beim Scrollen |
| `.scroll-slide` | Hereingleiten beim Scrollen |
| `.scroll-zoom` | Zoom-effect beim Scrollen |
| `.scroll-rotate` | Rotationseffekt beim Scrollen |
| `.scroll-parallax` | Parallax-effect beim Scrollen |
| `.scroll-sticky` | element bleibt beim Scrollen haften |
| `.scroll-reveal` | element wird beim Scrollen aufgedeckt |
| `.scroll-transform` | Transformation beim Scrollen |
| `.scroll-progress` | Fortschrittsanzeige beim Scrollen |
| `.scroll-snap` | Snap-Scrolling to bestimmten Punkten |
| `.scroll-animate` | Allgemeine animation beim Scrollen |
| `.scroll-lazy` | Verzogertes load beim Scrollen |
| `.scroll-infinite` | Unendliches Scrollen |
| `.scroll-smooth` | Sanftes Scrollen |

## Variants

### Fade-effects

elements become beim Scrollen a- or ausgeblendet:

```html
<div class="scroll-fade-in">Beim Scrollen einblenden</div>
<div class="scroll-fade-out">Beim Scrollen ausblenden</div>
<div class="scroll-fade-up">from unten einblenden</div>
<div class="scroll-fade-down">from oben einblenden</div>
<div class="scroll-fade-left">from links einblenden</div>
<div class="scroll-fade-right">from rechts einblenden</div>
```

### Slide-effects

elements gleiten beim Scrollen in the Ansicht:

```html
<div class="scroll-slide-up">from unten hereingleiten</div>
<div class="scroll-slide-down">from oben hereingleiten</div>
<div class="scroll-slide-left">from links hereingleiten</div>
<div class="scroll-slide-right">from rechts hereingleiten</div>
```

### Zoom-effects

elements become beim Scrollen vergrossert or verkleinert:

```html
<div class="scroll-zoom-in">Beim Scrollen enlarge</div>
<div class="scroll-zoom-out">Beim Scrollen reduce</div>
<div class="scroll-zoom-focus">Beim Scrollen fokussieren</div>
```

### Rotate-effects

elements rotieren beim Scrollen:

```html
<div class="scroll-rotate-x">Um X-Achse rotieren</div>
<div class="scroll-rotate-y">Um Y-Achse rotieren</div>
<div class="scroll-rotate-z">Um Z-Achse rotieren</div>
```

### Parallax-effects

elements bewegen oneself with unterschiedlichen Geschwindigkeiten beim Scrollen:

```html
<div class="scroll-parallax-bg">Parallax-background</div>
<div class="scroll-parallax-slow">Langsame Parallax-Bewegung</div>
<div class="scroll-parallax-fast">Schnelle Parallax-Bewegung</div>
<div class="scroll-parallax-reverse">Umgekehrte Parallax-Bewegung</div>
```

### Sticky-effects

elements bleiben beim Scrollen on einer position haften:

```html
<div class="scroll-sticky-top">Am oberen margin haften</div>
<div class="scroll-sticky-bottom">Am unteren margin haften</div>
<div class="scroll-sticky-header">header bleibt haften</div>
<div class="scroll-sticky-sidebar">Seitenleiste bleibt haften</div>
```

### Reveal-effects

elements become beim Scrollen aufgedeckt:

```html
<div class="scroll-reveal-mask">with Maske aufdecken</div>
<div class="scroll-reveal-curtain">how a Vorhang aufdecken</div>
<div class="scroll-reveal-wipe">Wischeffekt beim Aufdecken</div>
```

### Transform-effects

elements become beim Scrollen transformiert:

```html
<div class="scroll-transform-skew">Verzerren beim Scrollen</div>
<div class="scroll-transform-perspective">Perspektive change beim Scrollen</div>
<div class="scroll-transform-tilt">Neigen beim Scrollen</div>
```

### Progress-effects

Fortschrittsanzeigen basierend on the Scroll-position:

```html
<div class="scroll-progress-bar">Fortschrittsbalken beim Scrollen</div>
<div class="scroll-progress-circle">Kreisformiger progress beim Scrollen</div>
<div class="scroll-progress-counter">Numerischer progress beim Scrollen</div>
```

### Snap-effects

Scroll-Snap to bestimmten Punkten:

```html
<div class="scroll-snap-containers">
  <div class="scroll-snap-item">Abschnitt 1</div>
  <div class="scroll-snap-item">Abschnitt 2</div>
  <div class="scroll-snap-item">Abschnitt 3</div>
</div>
```

## Kombination with anderen Elementen

Scroll-effects can with verschiedenen UI-Elementen kombiniert become:

### images with Scroll-Effekten

```html
<img class="scroll-parallax" src="image.jpg" alt="Parallax-image">
<div class="image-gallery">
  <img class="scroll-fade-in" src="bild1.jpg" alt="image 1">
  <img class="scroll-fade-in" src="bild2.jpg" alt="image 2">
  <img class="scroll-fade-in" src="bild3.jpg" alt="image 3">
</div>
```

### Texte with Scroll-Effekten

```html
<h2 class="scroll-slide-up">heading with Slide-effect</h2>
<p class="scroll-fade-in">Absatz with Fade-effect</p>
<blockquote class="scroll-zoom-in">Zitat with Zoom-effect</blockquote>
```

### Cardn with Scroll-Effekten

```html
<div class="card-grid">
  <div class="card scroll-reveal">
    <div class="card-body">Card 1</div>
  </div>
  <div class="card scroll-reveal">
    <div class="card-body">Card 2</div>
  </div>
  <div class="card scroll-reveal">
    <div class="card-body">Card 3</div>
  </div>
</div>
```

### navigation with Scroll-Effekten

```html
<nav class="navbar scroll-sticky-top">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">over us</a>
  <a href="#" class="nav-link">Kontakt</a>
</nav>

<div class="scroll-progress-bar"></div>
```

## Customization

the Scroll-effects can over CSS Variables angepasst become:

```css
:root {
  /* Allgemeine Scroll-parameter */
  --scroll-duration: 0.5s;
  --scroll-timing-function: ease-out;
  --scroll-delay: 0s;
  --scroll-threshold: 0.2; /* Prozentsatz des Elements im viewport */
  
  /* Fade-parameter */
  --scroll-fade-distance: 50px;
  --scroll-fade-opacity-start: 0;
  --scroll-fade-opacity-end: 1;
  
  /* Slide-parameter */
  --scroll-slide-distance: 100px;
  
  /* Zoom-parameter */
  --scroll-zoom-scale-start: 0.8;
  --scroll-zoom-scale-end: 1;
  
  /* Rotate-parameter */
  --scroll-rotate-angle: 15deg;
  
  /* Parallax-parameter */
  --scroll-parallax-ratio: 0.5;
  --scroll-parallax-perspective: 1000px;
  
  /* Sticky-parameter */
  --scroll-sticky-offset: 0px;
  --scroll-sticky-z-index: 100;
  
  /* Progress-parameter */
  --scroll-progress-color: var(--color-primary);
  --scroll-progress-height: 4px;
  --scroll-progress-z-index: 1000;
  
  /* Snap-parameter */
  --scroll-snap-type: y mandatory;
  --scroll-snap-align: start;
  --scroll-snap-stop: always;
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Scroll-effects:

```css
/* Base-Scroll-effect */
.scroll-effect {
  transition-property: transform, opacity;
  transition-duration: var(--scroll-duration);
  transition-timing-function: var(--scroll-timing-function);
  transition-delay: var(--scroll-delay);
}

/* Fade-effects */
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

/* ahnliche Definitionen for others Richtungen */

/* Slide-effects */
.scroll-slide-up {
  transform: translateY(var(--scroll-slide-distance));
}

.scroll-slide-up.scroll-active {
  transform: translateY(0);
}

/* ahnliche Definitionen for others Richtungen */

/* Zoom-effects */
.scroll-zoom-in {
  transform: scale(var(--scroll-zoom-scale-start));
}

.scroll-zoom-in.scroll-active {
  transform: scale(var(--scroll-zoom-scale-end));
}

/* Rotate-effects */
.scroll-rotate-z {
  transform: rotate(calc(-1 * var(--scroll-rotate-angle)));
}

.scroll-rotate-z.scroll-active {
  transform: rotate(0);
}

/* Parallax-effects */
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

/* Sticky-effects */
.scroll-sticky-top {
  position: sticky;
  top: var(--scroll-sticky-offset);
  z-index: var(--scroll-sticky-z-index);
}

/* Progress-effects */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0; /* wird with JavaScript aktualisiert */
  height: var(--scroll-progress-height);
  background-color: var(--scroll-progress-color);
  z-index: var(--scroll-progress-z-index);
}

/* Snap-effects */
.scroll-snap-containers {
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

for dynamische Scroll-effects wird JavaScript verwendet:

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
    // Intersection Observer for Scroll-effects
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      threshold: this.options.threshold,
      root: this.options.root,
      rootMargin: this.options.rootMargin
    });
    
    // Observe all elements with scroll effects
    document.querySelectorAll('[class*="scroll-"]').forEach(element => {
      if (!element.classList.contains('scroll-progress-bar') && 
          !element.classList.contains('scroll-sticky-top') &&
          !element.classList.contains('scroll-snap-containers')) {
        this.observer.observe(element);
      }
    });
    
    // Fortschrittsbalken initialisieren
    this.initProgressBar();
    
    // Smooth Scroll for Anker-links
    this.initSmoothScroll();
  }
  
  handleIntersect(entries, observer) {
    entries.forEach(entry => {
      // if element sichtbar wird
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-active');
        
        // at triggerOnce Option: Beobachtung beenden
        if (this.options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!this.options.triggerOnce) {
        // if element not more sichtbar ist and not triggerOnce
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
        
        const circumference = 2 * Math.PI * 40; // Kreis with Radius 40px
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

// Initialisierung the Scroll-effects
document.addEventListener('DOMContentLoaded', () => {
  new ScrollEffects({
    threshold: 0.2,
    triggerOnce: false
  });
  
  // Parallax-effects
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

## Fortgeschrittene Parallax-effects

for komplexere Parallax-effects kann a spezieller Ansatz verwendet become:

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
      
      // Uberprufen, whether element im sichtbaren area ist
      if (scrollTop + viewportHeight > elementTop && scrollTop < elementTop + elementHeight) {
        // Berechnen the relativen position
        const relativePos = (scrollTop + viewportHeight - elementTop) / (viewportHeight + elementHeight);
        
        // Transformationswert basierend on the Achse
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

// Initialisierung for Parallax-elements
document.addEventListener('DOMContentLoaded', () => {
  const parallaxImages = document.querySelectorAll('.scroll-parallax-advanced');
  new ParallaxEffect(parallaxImages, {
    speed: 0.4,
    axis: 'both',
    scale: true
  });
});
```

## Accessibility

at the Usage from Scroll-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Animationspraferenzen**: Respektieren them the Setting `prefers-reduced-motion`
2. **Leserlichkeit**: ensure, that Text wahrend Scroll-Effekten lesbar bleibt
3. **no reinen visuellen Notee**: ensure, that wichtige Informationen not only through Scroll-effects vermittelt become
4. **Keyboard-navigation**: ensure, that all contents also without Scroll-effects zuganglich sind

```css
/* Reduzierte animation for user, the dies bevorzugen */
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
  
  .scroll-snap-containers {
    scroll-snap-type: none;
  }
  
  html {
    scroll-behavior: auto !important;
  }
}
```

```javascript
// Barrierefreie Scroll-navigation
function setupAccessibleScrolling() {
  // Skip-link to Hauptinhalt
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Zum Hauptinhalt springen';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Tastaturnavigation for Snap-Scrolling
  const snapContainer = document.querySelector('.scroll-snap-containers');
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

## Performance-Uberlegungen

Scroll-effects can the Leistung beeinflussen:

1. **Scroll-Throttling**: Limitieren them the Haufigkeit from Scroll-Event-Callbacks
2. **Paint-freundliche properties**: use them `transform` and `opacity` for animations
3. **GPU-Beschleunigung**: use them `will-change` and `transform: translateZ(0)` for performante animations
4. **Intersection Observer**: use them den Intersection Observer instead of Scroll-Events, if moglich

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
  
  // Parallax-elements aktualisieren
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

## Browser-Kompatibilitat

the Scroll-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Base-Scroll-effects | ✓ | ✓ | ✓ | ✓ | ✓ |
| Intersection Observer | ✓ | ✓ | ✓ | ✓ | Nein |
| Scroll-Snap | ✓ | ✓ | ✓ | ✓ | Nein |
| Sticky-Positionierung | ✓ | ✓ | ✓ | ✓ | Nein |
| Smooth Scroll | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Animations-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-effects](/docs/effects/animation/transitions.md) - Ubergangseffekte between Statesn
- [Transform-effects](/docs/effects/layout/transforms.md) - Transformationseffekte for elements
``` 
</rewritten_file>
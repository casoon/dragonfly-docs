---
title: Smooth Scrolling
category: Core
---

# Smooth Scrolling

the Smooth Scrolling system the Casoon UI Library verbessert the Benutzererfahrung through flussige, animierte Seitenubergange and Scrolling-effects. it bietet a naturlichere and angenehmere Moglichkeit, through contents to navigieren, without the abrupten Sprunge traditioneller Scrolling-Mechanismen.

## Uberblick

Smooth Scrolling ist a wichtiger Bestandteil moderner user interfaces, the folgende Vorteile bietet:

- **Verbesserte Benutzererfahrung**: Sanfte Ubergange between verschiedenen Abschnitten
- **Bessere raumliche Orientierung**: Nutzer behalten einen besseren Uberblick over ihren Standort in the Seite
- **Reduzierte kognitive Belastung**: less abrupte Veranderungen reduzieren the mentale Verarbeitungslast
- **Moderneres Erscheinungsbild**: Ansprechendere and zeitgemassere Asthetik

## Installation

the Smooth Scrolling system ist Teil des Core-Moduls the Casoon UI Library:

```css
@import '@casoon/ui-lib/core.css';
```

You can it also speziell import:

```css
@import '@casoon/ui-lib/core/smooth-scroll.css';
```

## Grundlegende Implementation

### Globales Smooth Scrolling

the Casoon UI Library aktiviert Smooth Scrolling by default for the gesamte Seite:

```css
html {
  scroll-behavior: smooth;
}
```

these einfache CSS-Property sorgt dafur, that all Scrolling-Aktionen, einschliesslich Klicks on Anker-links and programmatisches Scrollen, sanft animiert become.

### Accessibility berucksichtigen

for Nutzer, the reduzierte Bewegung bevorzugen, wird Smooth Scrolling automatisch deaktiviert:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## Use Cases

### Anker-links

by default become all Anker-links (links to IDs within the Seite) with Smooth Scrolling animiert:

```html
<nav class="page-nav">
  <a href="#section1">Abschnitt 1</a>
  <a href="#section2">Abschnitt 2</a>
  <a href="#section3">Abschnitt 3</a>
</nav>

<section id="section1">
  <h2>Abschnitt 1</h2>
  <!-- content -->
</section>

<section id="section2">
  <h2>Abschnitt 2</h2>
  <!-- content -->
</section>

<section id="section3">
  <h2>Abschnitt 3</h2>
  <!-- content -->
</section>
```

### Scroll-to-Top buttons

the Bibliothek beinhaltet einen vorgefertigten "back after oben"-button, the Smooth Scrolling verwendet:

```html
<button class="scroll-to-top">
  <span class="icon">↑</span>
  <span class="sr-only">after oben scrollen</span>
</button>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s, transform 0.3s;
    /* Versteckt by default */
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
  }
  
  .scroll-to-top.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
```

with diesem JavaScript become visibility and Funktionalitat gesteuert:

```javascript
// Scroll-to-Top button Logik
const scrollButton = document.querySelector('.scroll-to-top');

// Zeige button only, if the Nutzer gescrollt hat
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});

// Scrolle sanft after oben beim Klick
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
```

### Scrollspy navigation

the Casoon UI Library bietet a Scrollspy-Funktionalitat, the the aktuelle position im Dokument verfolgt and entsprechende Navigationslinks hervorhebt:

```html
<nav class="scrollspy-nav">
  <a href="#section1" class="nav-item">Abschnitt 1</a>
  <a href="#section2" class="nav-item">Abschnitt 2</a>
  <a href="#section3" class="nav-item">Abschnitt 3</a>
</nav>

<div class="content">
  <section id="section1" class="scrollspy-section">
    <h2>Abschnitt 1</h2>
    <!-- content -->
  </section>
  
  <section id="section2" class="scrollspy-section">
    <h2>Abschnitt 2</h2>
    <!-- content -->
  </section>
  
  <section id="section3" class="scrollspy-section">
    <h2>Abschnitt 3</h2>
    <!-- content -->
  </section>
</div>

<style>
  .scrollspy-nav {
    position: sticky;
    top: 1rem;
    padding: 1rem;
  }
  
  .scrollspy-nav .nav-item {
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-left: 2px solid var(--color-border);
    text-decoration: none;
    color: var(--color-text);
    transition: all 0.3s ease;
  }
  
  .scrollspy-nav .nav-item.active {
    border-left: 2px solid var(--color-primary);
    color: var(--color-primary);
    font-weight: 500;
  }
  
  .scrollspy-section {
    min-height: 80vh;
    padding: 2rem;
  }
</style>
```

with diesem JavaScript wird the Scrollspy-Funktionalitat implementiert:

```javascript
// Scrollspy Implementation
const navItems = document.querySelectorAll('.scrollspy-nav .nav-item');
const sections = document.querySelectorAll('.scrollspy-section');

// Prufe the aktuelle position and aktualisiere the aktiven links
function updateActiveNavItem() {
  const scrollPosition = window.scrollY + 100; // smaller Offset for bessere UX
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Entferne 'active' from allen links
      navItems.forEach(item => item.classList.remove('active'));
      
      // Fuge 'active' zum aktuellen link hinzu
      navItems[index].classList.add('active');
    }
  });
}

// Uberwache Scroll-Events
window.addEventListener('scroll', updateActiveNavItem);

// Initial setzen
updateActiveNavItem();

// Smooth Scroll at Klick on Nav-Items
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = item.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});
```

## Erweiterte functions

### Offset-Unterstutzung

Manchmal want to them beim Scrollen einen Offset berucksichtigen, zum Example for einen fixierten header:

```javascript
// Function zum Scrollen with Offset
function scrollToWithOffset(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Example-Nutzung
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const headerOffset = 80; // height des fixierten Headers
    
    scrollToWithOffset(targetId, headerOffset);
  });
});
```

### Scroll-containers

Smooth Scrolling kann also on bestimmte containers angewendet become, not only on the gesamte Seite:

```css
.scroll-containers {
  height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

```html
<div class="scroll-containers">
  <nav>
    <a href="#item1">element 1</a>
    <a href="#item2">element 2</a>
  </nav>
  
  <div id="item1">
    <!-- content for element 1 -->
  </div>
  
  <div id="item2">
    <!-- content for element 2 -->
  </div>
</div>
```

## JavaScript-API

the Casoon UI Library bietet a einfache JavaScript-API for programmatisches Smooth Scrolling:

```javascript
// Import the Scroll-Utility
import { smoothScroll } from '@casoon/ui-lib/utils/scroll';

// Einfaches Scrollen to einem element
smoothScroll('#target-element');

// Scrollen with Offset
smoothScroll('#target-element', {
  offset: 80, // Pixel-Offset
  duration: 800, // Animationsdauer in ms
  easing: 'easeInOutQuad' // Easing-Function
});

// Scrollen to einer position
smoothScroll(null, {
  position: 500, // position in Pixeln vom Dokumentanfang
  duration: 600
});

// Callback after Abschluss the animation
smoothScroll('#target-element', {
  onComplete: () => {
    console.log('Scrolling abgeschlossen');
  }
});
```

## Easing-functions

the Bibliothek bietet verschiedene Easing-functions for unterschiedliche Scrolling-effects:

```javascript
// Verfugbare Easing-functions
const easingFunctions = {
  // Lineare Function (no Beschleunigung)
  linear: t => t,
  
  // Quadratische functions
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  
  // Kubische functions
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // Elastische functions
  easeOutElastic: t => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};
```

## Customization

the Smooth Scrolling system kann over CSS Variables angepasst become:

```css
:root {
  /* Scroll-behavior global festlegen */
  --scroll-behavior: smooth;
  
  /* Standardwerte for JavaScript-Scrolling */
  --scroll-duration: 800ms;
  --scroll-easing: ease-in-out;
  --scroll-offset: 0px;
  
  /* Schwellenwerte for Scroll-To-Top button */
  --scroll-to-top-threshold: 300px;
}

/* overwrite for bestimmte containers */
.custom-scroll-containers {
  --scroll-behavior: auto; /* Deaktiviert Smooth Scrolling for diesen containers */
}
```

## Browser-Kompatibilitat

the CSS `scroll-behavior`-Property wird from den meisten modernen Browsern unterstutzt:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| scroll-behavior | 61+ | 36+ | 15.4+ | 79+ | Nein |

for Browser without native Unterstutzung stellt the Casoon UI Library a JavaScript-Fallback-Losung bereit, the the gleiche Funktionalitat emuliert.

## Performance-Optimierung

Smooth Scrolling kann, if not optimiert, the Performance beeintrachtigen. the Casoon UI Library implementiert folgende Optimierungen:

1. **Passive Event Listener**: Verbesserte Scrolling-Performance through Usage passiver Event-Listener
2. **Throttling**: Begrenzung the Ereignisrate at Scroll-Events
3. **requestAnimationFrame**: Synchronisierung with dem Browser-Rendering-Zyklus
4. **GPU-Beschleunigung**: Nutzung from CSS-Transformationen for bessere Performance

```javascript
// Example for optimierte Scroll-Event-Behandlung
window.addEventListener('scroll', () => {
  // Pruft, whether requestAnimationFrame verfugbar ist
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      updateScrollElements();
    });
  } else {
    // Fallback for altere Browser
    updateScrollElements();
  }
}, { passive: true }); // Passiver Event-Listener for bessere Performance
```

## Accessibility

the Smooth Scrolling system the Casoon UI Library berucksichtigt Accessibilitysaspekte:

1. **Respektiert Nutzereinstellungen**: Beachtet the `prefers-reduced-motion`-Setting
2. **Keyboard-navigation**: Unterstutzt vollstandige Keyboard-navigation
3. **Fokus-Management**: Setzt den Fokus korrekt after dem Scrollen
4. **ARIA-attributes**: Implementiert the entsprechenden ARIA-Rollen and -attributes

## Best Practices

1. **Behutsam einsetzen**: use them Smooth Scrolling gezielt and not for jede Scrollaktion
2. **Performance note**: ensure them on the Performance at langeren Seiten
3. **Kurze animations**: Halten them the Scroll-Dauer kurz (ca. 300-800ms)
4. **Accessibility berucksichtigen**: Respektieren them the Nutzereinstellungen zur Bewegungsreduktion
5. **responsive design**: Passen them Offsets for verschiedene Bildschirmgrossen on

## Zusammenfassung

the Smooth Scrolling system the Casoon UI Library bietet a leistungsstarke, but nevertheless leicht to implementierende Losung for flussige Scrolling-Erlebnisse. through the Kombination from nativem CSS Smooth Scrolling with optimierten JavaScript-Fallbacks bietet it a robuste, barrierefreie and anpassbare Losung for moderne Webanwendungen.

the sorgfaltige Berucksichtigung from Performance, Accessibility and Nutzererfahrung macht it to einem wesentlichen Bestandteil for the Erstellung moderner, benutzerfreundlicher Interfaces. 
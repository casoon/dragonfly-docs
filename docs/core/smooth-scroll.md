---
title: Smooth Scrolling
category: Core
---

# Smooth Scrolling

Das Smooth Scrolling System der Casoon UI Library verbessert die Benutzererfahrung durch flüssige, animierte Seitenübergänge und Scrolling-Effekte. Es bietet eine natürlichere und angenehmere Möglichkeit, durch Inhalte zu navigieren, ohne die abrupten Sprünge traditioneller Scrolling-Mechanismen.

## Überblick

Smooth Scrolling ist ein wichtiger Bestandteil moderner Benutzeroberflächen, der folgende Vorteile bietet:

- **Verbesserte Benutzererfahrung**: Sanfte Übergänge zwischen verschiedenen Abschnitten
- **Bessere räumliche Orientierung**: Nutzer behalten einen besseren Überblick über ihren Standort in der Seite
- **Reduzierte kognitive Belastung**: Weniger abrupte Veränderungen reduzieren die mentale Verarbeitungslast
- **Moderneres Erscheinungsbild**: Ansprechendere und zeitgemäßere Ästhetik

## Installation

Das Smooth Scrolling System ist Teil des Core-Moduls der Casoon UI Library:

```css
@import '@casoon/ui-lib/core.css';
```

Sie können es auch speziell importieren:

```css
@import '@casoon/ui-lib/core/smooth-scroll.css';
```

## Grundlegende Implementierung

### Globales Smooth Scrolling

Die Casoon UI Library aktiviert Smooth Scrolling standardmäßig für die gesamte Seite:

```css
html {
  scroll-behavior: smooth;
}
```

Diese einfache CSS-Eigenschaft sorgt dafür, dass alle Scrolling-Aktionen, einschließlich Klicks auf Anker-Links und programmatisches Scrollen, sanft animiert werden.

### Accessibility berücksichtigen

Für Nutzer, die reduzierte Bewegung bevorzugen, wird Smooth Scrolling automatisch deaktiviert:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## Use Cases

### Anker-Links

Standardmäßig werden alle Anker-Links (Links zu IDs innerhalb der Seite) mit Smooth Scrolling animiert:

```html
<nav class="page-nav">
  <a href="#section1">Abschnitt 1</a>
  <a href="#section2">Abschnitt 2</a>
  <a href="#section3">Abschnitt 3</a>
</nav>

<section id="section1">
  <h2>Abschnitt 1</h2>
  <!-- Inhalt -->
</section>

<section id="section2">
  <h2>Abschnitt 2</h2>
  <!-- Inhalt -->
</section>

<section id="section3">
  <h2>Abschnitt 3</h2>
  <!-- Inhalt -->
</section>
```

### Scroll-to-Top Buttons

Die Bibliothek beinhaltet einen vorgefertigten "Zurück nach oben"-Button, der Smooth Scrolling verwendet:

```html
<button class="scroll-to-top">
  <span class="icon">↑</span>
  <span class="sr-only">Nach oben scrollen</span>
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
    /* Versteckt standardmäßig */
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

Mit diesem JavaScript werden Sichtbarkeit und Funktionalität gesteuert:

```javascript
// Scroll-to-Top Button Logik
const scrollButton = document.querySelector('.scroll-to-top');

// Zeige Button nur, wenn der Nutzer gescrollt hat
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});

// Scrolle sanft nach oben beim Klick
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
```

### Scrollspy Navigation

Die Casoon UI Library bietet eine Scrollspy-Funktionalität, die die aktuelle Position im Dokument verfolgt und entsprechende Navigationslinks hervorhebt:

```html
<nav class="scrollspy-nav">
  <a href="#section1" class="nav-item">Abschnitt 1</a>
  <a href="#section2" class="nav-item">Abschnitt 2</a>
  <a href="#section3" class="nav-item">Abschnitt 3</a>
</nav>

<div class="content">
  <section id="section1" class="scrollspy-section">
    <h2>Abschnitt 1</h2>
    <!-- Inhalt -->
  </section>
  
  <section id="section2" class="scrollspy-section">
    <h2>Abschnitt 2</h2>
    <!-- Inhalt -->
  </section>
  
  <section id="section3" class="scrollspy-section">
    <h2>Abschnitt 3</h2>
    <!-- Inhalt -->
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

Mit diesem JavaScript wird die Scrollspy-Funktionalität implementiert:

```javascript
// Scrollspy Implementierung
const navItems = document.querySelectorAll('.scrollspy-nav .nav-item');
const sections = document.querySelectorAll('.scrollspy-section');

// Prüfe die aktuelle Position und aktualisiere die aktiven Links
function updateActiveNavItem() {
  const scrollPosition = window.scrollY + 100; // Kleiner Offset für bessere UX
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Entferne 'active' von allen Links
      navItems.forEach(item => item.classList.remove('active'));
      
      // Füge 'active' zum aktuellen Link hinzu
      navItems[index].classList.add('active');
    }
  });
}

// Überwache Scroll-Events
window.addEventListener('scroll', updateActiveNavItem);

// Initial setzen
updateActiveNavItem();

// Smooth Scroll bei Klick auf Nav-Items
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

## Erweiterte Funktionen

### Offset-Unterstützung

Manchmal möchten Sie beim Scrollen einen Offset berücksichtigen, zum Example für einen fixierten Header:

```javascript
// Funktion zum Scrollen mit Offset
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
    const headerOffset = 80; // Höhe des fixierten Headers
    
    scrollToWithOffset(targetId, headerOffset);
  });
});
```

### Scroll-Container

Smooth Scrolling kann auch auf bestimmte Container angewendet werden, nicht nur auf die gesamte Seite:

```css
.scroll-container {
  height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

```html
<div class="scroll-container">
  <nav>
    <a href="#item1">Element 1</a>
    <a href="#item2">Element 2</a>
  </nav>
  
  <div id="item1">
    <!-- Inhalt für Element 1 -->
  </div>
  
  <div id="item2">
    <!-- Inhalt für Element 2 -->
  </div>
</div>
```

## JavaScript-API

Die Casoon UI Library bietet eine einfache JavaScript-API für programmatisches Smooth Scrolling:

```javascript
// Import der Scroll-Utility
import { smoothScroll } from '@casoon/ui-lib/utils/scroll';

// Einfaches Scrollen zu einem Element
smoothScroll('#target-element');

// Scrollen mit Offset
smoothScroll('#target-element', {
  offset: 80, // Pixel-Offset
  duration: 800, // Animationsdauer in ms
  easing: 'easeInOutQuad' // Easing-Funktion
});

// Scrollen zu einer Position
smoothScroll(null, {
  position: 500, // Position in Pixeln vom Dokumentanfang
  duration: 600
});

// Callback nach Abschluss der Animation
smoothScroll('#target-element', {
  onComplete: () => {
    console.log('Scrolling abgeschlossen');
  }
});
```

## Easing-Funktionen

Die Bibliothek bietet verschiedene Easing-Funktionen für unterschiedliche Scrolling-Effekte:

```javascript
// Verfügbare Easing-Funktionen
const easingFunctions = {
  // Lineare Funktion (keine Beschleunigung)
  linear: t => t,
  
  // Quadratische Funktionen
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  
  // Kubische Funktionen
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  
  // Elastische Funktionen
  easeOutElastic: t => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};
```

## Anpassung

Das Smooth Scrolling System kann über CSS Variables angepasst werden:

```css
:root {
  /* Scroll-Verhalten global festlegen */
  --scroll-behavior: smooth;
  
  /* Standardwerte für JavaScript-Scrolling */
  --scroll-duration: 800ms;
  --scroll-easing: ease-in-out;
  --scroll-offset: 0px;
  
  /* Schwellenwerte für Scroll-To-Top Button */
  --scroll-to-top-threshold: 300px;
}

/* Überschreiben für bestimmte Container */
.custom-scroll-container {
  --scroll-behavior: auto; /* Deaktiviert Smooth Scrolling für diesen Container */
}
```

## Browser-Kompatibilität

Die CSS `scroll-behavior`-Eigenschaft wird von den meisten modernen Browsern unterstützt:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| scroll-behavior | 61+ | 36+ | 15.4+ | 79+ | Nein |

Für Browser ohne native Unterstützung stellt die Casoon UI Library eine JavaScript-Fallback-Lösung bereit, die die gleiche Funktionalität emuliert.

## Performance-Optimierung

Smooth Scrolling kann, wenn nicht optimiert, die Performance beeinträchtigen. Die Casoon UI Library implementiert folgende Optimierungen:

1. **Passive Event Listener**: Verbesserte Scrolling-Performance durch Usage passiver Event-Listener
2. **Throttling**: Begrenzung der Ereignisrate bei Scroll-Events
3. **requestAnimationFrame**: Synchronisierung mit dem Browser-Rendering-Zyklus
4. **GPU-Beschleunigung**: Nutzung von CSS-Transformationen für bessere Performance

```javascript
// Example für optimierte Scroll-Event-Behandlung
window.addEventListener('scroll', () => {
  // Prüft, ob requestAnimationFrame verfügbar ist
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      updateScrollElements();
    });
  } else {
    // Fallback für ältere Browser
    updateScrollElements();
  }
}, { passive: true }); // Passiver Event-Listener für bessere Performance
```

## Accessibility

Das Smooth Scrolling System der Casoon UI Library berücksichtigt Accessibilitysaspekte:

1. **Respektiert Nutzereinstellungen**: Beachtet die `prefers-reduced-motion`-Einstellung
2. **Keyboard-Navigation**: Unterstützt vollständige Keyboard-Navigation
3. **Fokus-Management**: Setzt den Fokus korrekt nach dem Scrollen
4. **ARIA-Attribute**: Implementiert die entsprechenden ARIA-Rollen und -Attribute

## Best Practices

1. **Behutsam einsetzen**: Verwenden Sie Smooth Scrolling gezielt und nicht für jede Scrollaktion
2. **Performance beachten**: Achten Sie auf die Performance bei längeren Seiten
3. **Kurze Animationen**: Halten Sie die Scroll-Dauer kurz (ca. 300-800ms)
4. **Accessibility berücksichtigen**: Respektieren Sie die Nutzereinstellungen zur Bewegungsreduktion
5. **Responsive Design**: Passen Sie Offsets für verschiedene Bildschirmgrößen an

## Zusammenfassung

Das Smooth Scrolling System der Casoon UI Library bietet eine leistungsstarke, aber dennoch leicht zu implementierende Lösung für flüssige Scrolling-Erlebnisse. Durch die Kombination von nativem CSS Smooth Scrolling mit optimierten JavaScript-Fallbacks bietet es eine robuste, barrierefreie und anpassbare Lösung für moderne Webanwendungen.

Die sorgfältige Berücksichtigung von Performance, Accessibility und Nutzererfahrung macht es zu einem wesentlichen Bestandteil für die Erstellung moderner, benutzerfreundlicher Interfaces. 
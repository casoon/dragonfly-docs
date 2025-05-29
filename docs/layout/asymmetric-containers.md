---
title: Asymmetric Containers
category: Layout
---

# Asymmetric Containers

Die Casoon UI Library bietet spezielle asymmetrische Container für dynamische und visuell interessante Layouts, die über traditionelle symmetrische Raster hinausgehen. Diese Dokumentation erklärt, wie Sie asymmetrische Container für kreative und einzigartige Layouts einsetzen können.

## Overview

Asymmetrische Container bieten folgende Vorteile:

1. **Visuelle Hierarchie** - Betonung wichtiger Elemente durch unterschiedliche Größen
2. **Dynamische Layouts** - Lebendige Layouts, die das Auge führen
3. **Kreative Gestaltungsfreiheit** - Überwindung der Einschränkungen des Rasters
4. **Verbesserte Nutzerführung** - Lenkung der Aufmerksamkeit durch asymmetrische Balance
5. **Moderne Ästhetik** - Zeitgemäßes Design-Gefühl

## Offset Container

Container mit versetztem Inhalt für dynamische Layouts:

```html
<div class="container">
  <div class="offset-container offset-right">
    <img src="image.jpg" alt="Versetztes Bild">
    <div class="offset-content">
      <h2>Überschrift mit Offset</h2>
      <p>Dieser Inhalt ist versetzt angeordnet, um ein dynamischeres Layout zu erzeugen.</p>
    </div>
  </div>
</div>
```

Implementierung:

```css
.offset-container {
  position: relative;
  margin-block: var(--space-8);
}

.offset-container img {
  width: 100%;
  display: block;
}

.offset-content {
  background-color: var(--color-background);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
}

/* Offset rechts (Desktop) */
@media (min-width: 768px) {
  .offset-right img {
    width: 60%;
  }
  
  .offset-right .offset-content {
    position: absolute;
    right: 0;
    bottom: -3rem;
    width: 50%;
  }
  
  /* Offset links (Desktop) */
  .offset-left img {
    width: 60%;
    margin-left: auto;
  }
  
  .offset-left .offset-content {
    position: absolute;
    left: 0;
    bottom: -3rem;
    width: 50%;
  }
}
```

## Diagonal Section Container

Container mit diagonalen Trennlinien zwischen Abschnitten:

```html
<div class="diagonal-container diagonal-top-right">
  <div class="container">
    <h2>Diagonaler Abschnitt</h2>
    <p>Dieser Abschnitt hat eine diagonale obere Kante.</p>
  </div>
</div>

<div class="diagonal-container diagonal-bottom-left">
  <div class="container">
    <h2>Diagonaler Abschnitt</h2>
    <p>Dieser Abschnitt hat eine diagonale untere Kante.</p>
  </div>
</div>
```

Implementierung:

```css
.diagonal-container {
  position: relative;
  padding-block: var(--space-20);
  margin-block: var(--space-10);
  z-index: 1;
}

.diagonal-container::before {
  content: "";
  position: absolute;
  background-color: inherit;
  z-index: -1;
}

.diagonal-top-right::before {
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  transform-origin: top right;
  transform: skewY(-5deg);
}

.diagonal-bottom-left::before {
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  transform-origin: bottom left;
  transform: skewY(-5deg);
}
```

## Split Asymmetric Container

Container mit ungleich aufgeteilten Spalten:

```html
<div class="split-asymmetric-container">
  <div class="split-asymmetric-main">
    <h2>Hauptinhalt (2/3)</h2>
    <p>Dieser Inhalt nimmt zwei Drittel des verfügbaren Platzes ein.</p>
  </div>
  <div class="split-asymmetric-side">
    <h3>Seiteninhalt (1/3)</h3>
    <p>Dieser Inhalt nimmt ein Drittel des verfügbaren Platzes ein.</p>
  </div>
</div>

<!-- Umgekehrtes Verhältnis -->
<div class="split-asymmetric-container split-asymmetric-reverse">
  <div class="split-asymmetric-main">
    <h2>Hauptinhalt (1/3)</h2>
    <p>Dieser Inhalt nimmt ein Drittel des verfügbaren Platzes ein.</p>
  </div>
  <div class="split-asymmetric-side">
    <h3>Seiteninhalt (2/3)</h3>
    <p>Dieser Inhalt nimmt zwei Drittel des verfügbaren Platzes ein.</p>
  </div>
</div>
```

Implementierung:

```css
.split-asymmetric-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;
}

@media (min-width: 768px) {
  .split-asymmetric-container {
    flex-direction: row;
  }
  
  .split-asymmetric-main {
    flex: 2;
  }
  
  .split-asymmetric-side {
    flex: 1;
  }
  
  .split-asymmetric-reverse .split-asymmetric-main {
    flex: 1;
  }
  
  .split-asymmetric-reverse .split-asymmetric-side {
    flex: 2;
  }
}
```

## Masonry Container

Container mit Masonry-Layout für unterschiedlich hohe Elemente:

```html
<div class="masonry-container">
  <div class="masonry-item">Kurzer Inhalt</div>
  <div class="masonry-item">Mittellanger Inhalt mit etwas mehr Text, der mehr Platz benötigt.</div>
  <div class="masonry-item">Sehr langer Inhalt, der viel mehr Platz einnimmt. Dies demonstriert, wie Elemente mit unterschiedlicher Höhe in einem Masonry-Layout angeordnet werden.</div>
  <div class="masonry-item">Kurzer Inhalt</div>
  <div class="masonry-item">Mittellanger Inhalt mit zusätzlichem Text.</div>
</div>
```

Implementierung mit CSS Grid:

```css
.masonry-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 20px;
  grid-gap: var(--space-4);
}

.masonry-item {
  padding: var(--space-4);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
  grid-row-end: span var(--span, auto);
}

/* JavaScript wird verwendet, um die Spannweite jedes Elements basierend auf seiner Höhe zu berechnen */
```

Ergänzender JavaScript-Code für die Masonry-Funktionalität:

```javascript
function resizeMasonryItems() {
  const grid = document.querySelector('.masonry-container');
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const gap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-gap'));
  
  const items = grid.querySelectorAll('.masonry-item');
  items.forEach(item => {
    const content = item.querySelector('.masonry-content') || item;
    const rowSpan = Math.ceil((content.getBoundingClientRect().height + gap) / (rowHeight + gap));
    item.style.setProperty('--span', rowSpan);
  });
}

window.addEventListener('load', resizeMasonryItems);
window.addEventListener('resize', resizeMasonryItems);
```

## Staggered Grid Container

Container mit versetztem Raster für dynamische Layouts:

```html
<div class="staggered-grid-container">
  <div class="staggered-item">Element 1</div>
  <div class="staggered-item">Element 2</div>
  <div class="staggered-item">Element 3</div>
  <div class="staggered-item">Element 4</div>
  <div class="staggered-item">Element 5</div>
  <div class="staggered-item">Element 6</div>
</div>
```

Implementierung:

```css
.staggered-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
  width: 100%;
}

@media (min-width: 768px) {
  .staggered-grid-container {
    grid-template-columns: repeat(12, 1fr);
  }
  
  .staggered-item:nth-child(odd) {
    grid-column: span 7;
  }
  
  .staggered-item:nth-child(even) {
    grid-column: span 5;
  }
  
  .staggered-item:nth-child(4n+1) {
    grid-column: 1 / span 7;
  }
  
  .staggered-item:nth-child(4n+2) {
    grid-column: 8 / span 5;
  }
  
  .staggered-item:nth-child(4n+3) {
    grid-column: 1 / span 5;
  }
  
  .staggered-item:nth-child(4n+4) {
    grid-column: 6 / span 7;
  }
}
```

## Overlap Container

Container mit überlappenden Elementen:

```html
<div class="overlap-container">
  <div class="overlap-base">
    <img src="background.jpg" alt="Hintergrundbild">
  </div>
  <div class="overlap-top">
    <div class="card">
      <h2>Überlappende Karte</h2>
      <p>Diese Karte überlappt das Hintergrundbild.</p>
    </div>
  </div>
</div>
```

Implementierung:

```css
.overlap-container {
  position: relative;
  margin-block: var(--space-10);
}

.overlap-base {
  width: 100%;
}

.overlap-base img {
  width: 100%;
  display: block;
}

.overlap-top {
  position: relative;
  margin-top: -5rem;
  margin-inline: var(--space-4);
  z-index: 1;
}

@media (min-width: 768px) {
  .overlap-top {
    position: absolute;
    width: 50%;
    bottom: -3rem;
    right: var(--space-6);
  }
}
```

## Mixed Width Container

Container mit gemischten Elementbreiten in einem Raster:

```html
<div class="mixed-width-container">
  <div class="mixed-width-item mixed-width-large">Großes Element</div>
  <div class="mixed-width-item mixed-width-medium">Mittleres Element</div>
  <div class="mixed-width-item mixed-width-small">Kleines Element</div>
  <div class="mixed-width-item mixed-width-medium">Mittleres Element</div>
  <div class="mixed-width-item mixed-width-small">Kleines Element</div>
  <div class="mixed-width-item mixed-width-large">Großes Element</div>
</div>
```

Implementierung:

```css
.mixed-width-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
  width: 100%;
}

.mixed-width-item {
  grid-column: span 12;
  padding: var(--space-4);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
}

@media (min-width: 768px) {
  .mixed-width-large {
    grid-column: span 8;
  }
  
  .mixed-width-medium {
    grid-column: span 6;
  }
  
  .mixed-width-small {
    grid-column: span 4;
  }
}
```

## Angled Container

Container mit angewinkelten Kanten für dynamische Layouts:

```html
<div class="angled-container">
  <div class="container">
    <h2>Angewinkelter Abschnitt</h2>
    <p>Dieser Abschnitt hat angewinkelte Kanten für ein dynamisches Layout.</p>
  </div>
</div>
```

Implementierung mit CSS-Clip-Path:

```css
.angled-container {
  position: relative;
  padding-block: var(--space-16);
  background-color: var(--color-primary-100);
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
  margin-block: var(--space-10);
}

@media (min-width: 768px) {
  .angled-container {
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  }
}
```

## Hero Asymmetric Container

Asymmetrischer Hero-Bereich für ansprechende Headerabschnitte:

```html
<div class="hero-asymmetric-container">
  <div class="hero-content">
    <h1>Willkommen auf unserer Website</h1>
    <p>Entdecken Sie unsere innovativen Produkte und Dienstleistungen.</p>
    <button class="btn btn-primary">Mehr erfahren</button>
  </div>
  <div class="hero-image">
    <img src="hero-image.jpg" alt="Hero-Bild">
  </div>
</div>
```

Implementierung:

```css
.hero-asymmetric-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}

.hero-content {
  padding: var(--space-8);
  z-index: 1;
  background-color: var(--color-background);
}

.hero-image {
  width: 100%;
  height: 300px;
  position: relative;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 992px) {
  .hero-asymmetric-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 600px;
  }
  
  .hero-content {
    padding: var(--space-12);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .hero-image {
    height: auto;
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    grid-column: 2;
    grid-row: 1;
  }
}
```

## Best Practices

1. **Mobile-first Ansatz** - Gestalten Sie zunächst ein funktionales, symmetrisches Layout für mobile Geräte, bevor Sie asymmetrische Elemente für größere Bildschirme hinzufügen.
2. **Visuelle Balance wahren** - Asymmetrisch bedeutet nicht unausgewogen; stellen Sie sicher, dass Ihr Layout trotz ungleicher Elementgrößen visuell ausgewogen wirkt.
3. **Inhaltshierarchie beachten** - Verwenden Sie asymmetrische Layouts, um die Wichtigkeit von Inhalten zu verdeutlichen und die Benutzeraufmerksamkeit zu lenken.
4. **Performance optimieren** - Komplexe Clip-Paths und Transformationen können die Performance beeinträchtigen; testen Sie auf älteren Geräten.
5. **Lesbaren Inhalt priorisieren** - Stellen Sie sicher, dass kreative Layouts die Lesbarkeit und Benutzbarkeit nicht beeinträchtigen.
6. **Barrierefreiheit nicht vernachlässigen** - Asymmetrische Layouts sollten weiterhin für alle Benutzer zugänglich sein und logische Lesereiehnfolgen beibehalten.
7. **Fallbacks für ältere Browser** - Stellen Sie sicher, dass Inhalte auch in Browsern ohne Unterstützung für moderne CSS-Eigenschaften nutzbar bleiben.

## Anwendungsfälle

### Feature-Präsentation

```html
<div class="container">
  <div class="offset-container offset-right">
    <img src="feature-image.jpg" alt="Produktfunktion">
    <div class="offset-content">
      <h2>Innovative Funktionen</h2>
      <p>Unsere Produkte bieten einzigartige Funktionen, die Ihren Alltag erleichtern.</p>
      <a href="#" class="btn">Mehr erfahren</a>
    </div>
  </div>
</div>
```

### Kreative Portfolioseite

```html
<div class="masonry-container">
  <div class="masonry-item">
    <img src="project1.jpg" alt="Projekt 1">
    <h3>Projekt 1</h3>
    <p>Kurze Projektbeschreibung</p>
  </div>
  <div class="masonry-item">
    <img src="project2.jpg" alt="Projekt 2">
    <h3>Projekt 2</h3>
    <p>Längere Projektbeschreibung mit mehr Details zur Veranschaulichung des Masonry-Layouts.</p>
  </div>
  <!-- Weitere Projekte -->
</div>
```

### Produktseite mit Asymmetrischem Layout

```html
<div class="split-asymmetric-container">
  <div class="split-asymmetric-main">
    <div class="product-gallery">
      <!-- Produktbilder -->
    </div>
  </div>
  <div class="split-asymmetric-side">
    <h1>Produktname</h1>
    <p class="price">€99,00</p>
    <p>Produktbeschreibung...</p>
    <div class="product-options">
      <!-- Optionen, Varianten -->
    </div>
    <button class="btn btn-primary">In den Warenkorb</button>
  </div>
</div>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| Clip-Path | 55+ | 54+ | 11+ | 79+ |
| Flexbox | 29+ | 28+ | 9+ | 12+ |
| Position: sticky | 56+ | 32+ | 13+ | 16+ |
| CSS Transforms | 36+ | 16+ | 9+ | 12+ |

Für ältere Browser bietet die Bibliothek Fallbacks an, die grundlegende Funktionalität und Lesbarkeit gewährleisten.

## Zusammenfassung

Asymmetrische Container der Casoon UI Library bieten innovative Möglichkeiten, dynamische und visuell ansprechende Layouts zu erstellen, die über traditionelle symmetrische Raster hinausgehen. Mit verschiedenen Techniken wie Versätzen, diagonalen Abschnitten, überlappenden Elementen und ungleichen Aufteilungen können Sie Ihre Benutzeroberfläche beleben und wichtige Inhalte hervorheben. Diese Container sind besonders nützlich für kreative Websites, Portfolios, Landingpages und moderne Web-Anwendungen, die sich von der Masse abheben sollen. 
---
title: Asymmetric Containers
category: layout
---

# Asymmetric Containers

Die Casoon UI Library bietet spezielle asymmetrische Container for dynamische und visuell interessante Layouts, die over traditionelle symmetrische grid hinausgehen. Diese Documentation erklart, wie Sie asymmetrische Container for kreative und einzigartige Layouts einsetzen can.

## Overview

Asymmetrische Container bieten folgende Vorteile:

1. **Visuelle Hierarchie** - Betonung wichtiger elements durch unterschiedliche sizes
2. **Dynamische Layouts** - Lebendige Layouts, die das Auge fuhren
3. **Kreative Gestaltungsfreiheit** - Uberwindung der Einschrankungen des Rasters
4. **Verbesserte Nutzerfuhrung** - Lenkung der Aufmerksamkeit durch asymmetrische Balance
5. **Moderne Asthetik** - Zeitgemasses Design-Gefuhl

## Offset Container

Container mit versetztem Inhalt for dynamische Layouts:

```html
<div class="container">
  <div class="offset-container offset-right">
    <img src="image.jpg" alt="Versetztes Bild">
    <div class="offset-content">
      <h2>heading mit Offset</h2>
      <p>Dieser Inhalt ist versetzt angeordnet, um ein dynamischeres layout zu erzeugen.</p>
    </div>
  </div>
</div>
```

Implementation:

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

Implementation:

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
    <p>Dieser Inhalt nimmt zwei Drittel des verfugbaren Platzes ein.</p>
  </div>
  <div class="split-asymmetric-side">
    <h3>Seiteninhalt (1/3)</h3>
    <p>Dieser Inhalt nimmt ein Drittel des verfugbaren Platzes ein.</p>
  </div>
</div>

<!-- Umgekehrtes Verhaltnis -->
<div class="split-asymmetric-container split-asymmetric-reverse">
  <div class="split-asymmetric-main">
    <h2>Hauptinhalt (1/3)</h2>
    <p>Dieser Inhalt nimmt ein Drittel des verfugbaren Platzes ein.</p>
  </div>
  <div class="split-asymmetric-side">
    <h3>Seiteninhalt (2/3)</h3>
    <p>Dieser Inhalt nimmt zwei Drittel des verfugbaren Platzes ein.</p>
  </div>
</div>
```

Implementation:

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

Container mit Masonry-layout for unterschiedlich height elements:

```html
<div class="masonry-container">
  <div class="masonry-item">Kurzer Inhalt</div>
  <div class="masonry-item">Mittellanger Inhalt mit etwas mehr Text, der mehr Platz benotigt.</div>
  <div class="masonry-item">Sehr langer Inhalt, der viel mehr Platz einnimmt. Dies demonstriert, wie elements mit unterschiedlicher height in einem Masonry-layout angeordnet werden.</div>
  <div class="masonry-item">Kurzer Inhalt</div>
  <div class="masonry-item">Mittellanger Inhalt mit zusatzlichem Text.</div>
</div>
```

Implementation mit CSS grid:

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

/* JavaScript wird verwendet, um die Spannweite jedes Elements basierend auf seiner height zu berechnen */
```

Erganzender JavaScript-Code for die Masonry-Funktionalitat:

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

## Staggered grid Container

Container mit versetztem grid for dynamische Layouts:

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

Implementation:

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

Container mit uberlappenden Elementen:

```html
<div class="overlap-container">
  <div class="overlap-base">
    <img src="background.jpg" alt="Hintergrundbild">
  </div>
  <div class="overlap-top">
    <div class="card">
      <h2>Uberlappende Karte</h2>
      <p>Diese Karte uberlappt das Hintergrundbild.</p>
    </div>
  </div>
</div>
```

Implementation:

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

Container mit gemischten Elementbreiten in einem grid:

```html
<div class="mixed-width-container">
  <div class="mixed-width-item mixed-width-large">Grosses Element</div>
  <div class="mixed-width-item mixed-width-medium">Mittleres Element</div>
  <div class="mixed-width-item mixed-width-small">Kleines Element</div>
  <div class="mixed-width-item mixed-width-medium">Mittleres Element</div>
  <div class="mixed-width-item mixed-width-small">Kleines Element</div>
  <div class="mixed-width-item mixed-width-large">Grosses Element</div>
</div>
```

Implementation:

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

Container mit angewinkelten Kanten for dynamische Layouts:

```html
<div class="angled-container">
  <div class="container">
    <h2>Angewinkelter Abschnitt</h2>
    <p>Dieser Abschnitt hat angewinkelte Kanten for ein dynamisches layout.</p>
  </div>
</div>
```

Implementation mit CSS-Clip-Path:

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

Asymmetrischer Hero-area for ansprechende Headerabschnitte:

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

Implementation:

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

1. **Mobile-first Ansatz** - Gestalten Sie zunachst ein funktionales, symmetrisches layout for mobile Gerate, bevor Sie asymmetrische elements for grossere Bildschirme add.
2. **Visuelle Balance wahren** - Asymmetrisch bedeutet nicht unausgewogen; ensure, dass Ihr layout trotz ungleicher Elementgrossen visuell ausgewogen wirkt.
3. **Inhaltshierarchie note** - use Sie asymmetrische Layouts, um die Wichtigkeit von Inhalten zu verdeutlichen und die Benutzeraufmerksamkeit zu lenken.
4. **Performance optimieren** - Komplexe Clip-Paths und Transformationen can die Performance beeintrachtigen; testen Sie auf alteren Geraten.
5. **Lesbaren Inhalt priorisieren** - ensure, dass kreative Layouts die Lesbarkeit und Benutzbarkeit nicht beeintrachtigen.
6. **Barrierefreiheit nicht vernachlassigen** - Asymmetrische Layouts should weiterhin for alle Benutzer zuganglich sein und logische Lesereiehnfolgen beibehalten.
7. **Fallbacks for altere Browser** - ensure, dass Inhalte auch in Browsern ohne Unterstutzung for moderne CSS-Eigenschaften nutzbar bleiben.

## Anwendungsfalle

### Feature-Prasentation

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
    <p>Langere Projektbeschreibung mit mehr Details zur Veranschaulichung des Masonry-Layouts.</p>
  </div>
  <!-- additional Projekte -->
</div>
```

### Produktseite mit Asymmetrischem layout

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

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS grid | 57+ | 52+ | 10.1+ | 16+ |
| Clip-Path | 55+ | 54+ | 11+ | 79+ |
| flexbox | 29+ | 28+ | 9+ | 12+ |
| position: sticky | 56+ | 32+ | 13+ | 16+ |
| CSS Transforms | 36+ | 16+ | 9+ | 12+ |

for altere Browser bietet die Bibliothek Fallbacks an, die grundlegende Funktionalitat und Lesbarkeit gewahrleisten.

## Zusammenfassung

Asymmetrische Container der Casoon UI Library bieten innovative Moglichkeiten, dynamische und visuell ansprechende Layouts zu create, die over traditionelle symmetrische grid hinausgehen. Mit verschiedenen Techniken wie Versatzen, diagonalen Abschnitten, uberlappenden Elementen und ungleichen Aufteilungen can Sie Ihre Benutzeroberflache beleben und wichtige Inhalte hervorheben. Diese Container sind besonders nutzlich for kreative Websites, Portfolios, Landingpages und moderne Web-Anwendungen, die sich von der Masse abheben sollen. 
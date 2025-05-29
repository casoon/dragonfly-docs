---
title: Special Containers
category: layout
---

# Special Containers

the Casoon UI Library bietet a Reihe spezieller containers for bestimmte layout-Anforderungen and Designmuster. these Documentation erklart the verfugbaren speziellen containers and ihre Use Cases.

## Overview

the speziellen containers extend the Base-containers system um folgende functions:

1. **Full-Width containers** - containers, the the volle viewport-width use
2. **Content containers** - containers for spezifische Inhaltstypen
3. **Aspect Ratio containers** - containers with festgelegtem Seitenverhaltnis
4. **Background containers** - containers with erweiterten Hintergrundoptionen
5. **Overlay containers** - containers, the others contents uberlagern
6. **Scroll containers** - containers with speziellem Scrollverhalten

## Full-Width containers

Full-Width containers erstrecken oneself over the gesamte viewport-width, can but inneren content begrenzen:

```html
<!-- containers with voller width and zentriertem content -->
<div class="containers-full">
  <div class="containers">
    <h2>Zentrierter content in einem Full-Width containers</h2>
    <p>this Text ist in the containers-Maximalbreite begrenzt, wahrend the background the volle width einnimmt.</p>
  </div>
</div>
```

Implementation:

```css
.containers-full {
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  max-width: none;
}
```

## Content containers

Spezielle containers for bestimmte Inhaltstypen with optimierten properties:

### Text containers

```html
<div class="containers text-containers">
  <h2>Optimierte Textlesbarkeit</h2>
  <p>this containers ist for langere Textabschnitte optimiert and bietet a ideale Zeilenlange for bessere Lesbarkeit.</p>
  <p>additional Absatze with optimalem Lesekomfort...</p>
</div>
```

Implementation:

```css
.text-containers {
  max-width: 70ch; /* Optimale Lesbarkeit at etwa 70 Zeichen pro row */
  margin-inline: auto;
  line-height: 1.6;
}
```

### Media containers

```html
<div class="media-containers">
  <img src="image.jpg" alt="Description">
  <figcaption>Bildbeschreibung</figcaption>
</div>
```

Implementation:

```css
.media-containers {
  margin-inline: auto;
  max-width: min(100%, 1200px);
  margin-block: var(--space-6);
}

.media-containers img {
  width: 100%;
  height: auto;
  display: block;
}

.media-containers figcaption {
  margin-top: var(--space-2);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
```

### Form containers

```html
<div class="form-containers">
  <h2>Kontaktformular</h2>
  <form>
    <!-- form elements -->
  </form>
</div>
```

Implementation:

```css
.form-containers {
  max-width: 640px;
  margin-inline: auto;
  padding: var(--space-6);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
}
```

## Aspect Ratio containers

containers, the a bestimmtes Seitenverhaltnis beibehalten, unabhangig from the width:

```html
<!-- 16:9 Seitenverhaltnis-containers for Videos -->
<div class="aspect-containers aspect-16-9">
  <iframe src="https://www.youtube.com/embed/video-id" allowfullscreen></iframe>
</div>

<!-- 1:1 Seitenverhaltnis-containers for quadratische images -->
<div class="aspect-containers aspect-1-1">
  <img src="square-image.jpg" alt="Quadratisches image">
</div>

<!-- 4:3 Seitenverhaltnis-containers -->
<div class="aspect-containers aspect-4-3">
  <img src="image.jpg" alt="image with 4:3 Seitenverhaltnis">
</div>
```

Implementation:

```css
.aspect-containers {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.aspect-containers > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aspect-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-4-3 {
  aspect-ratio: 4 / 3;
}

.aspect-1-1 {
  aspect-ratio: 1 / 1;
}

/* Fallback for Browser without aspect-ratio-Unterstutzung */
@supports not (aspect-ratio: 16 / 9) {
  .aspect-16-9::before {
    content: "";
    display: block;
    padding-top: 56.25%; /* 9 / 16 = 0.5625 */
  }
  
  .aspect-4-3::before {
    content: "";
    display: block;
    padding-top: 75%; /* 3 / 4 = 0.75 */
  }
  
  .aspect-1-1::before {
    content: "";
    display: block;
    padding-top: 100%; /* 1 / 1 = 1.0 */
  }
}
```

## Background containers

containers with erweiterten Hintergrundoptionen:

```html
<!-- containers with Vollbild-background -->
<div class="bg-containers bg-cover" style="--bg-image: url('background.jpg');">
  <div class="containers">
    <h1>Titel with Hintergrundbild</h1>
    <p>content with Hintergrundbild</p>
  </div>
</div>

<!-- containers with gefarbtem background and pattern -->
<div class="bg-containers bg-pattern" style="--bg-color: var(--color-primary-100); --bg-pattern: url('pattern.svg');">
  <div class="containers">
    <h2>Titel with Hintergrundmuster</h2>
    <p>content with Hintergrundmuster</p>
  </div>
</div>

<!-- containers with gradient-background -->
<div class="bg-containers bg-gradient" style="--gradient-start: var(--color-primary-500); --gradient-end: var(--color-secondary-500);">
  <div class="containers">
    <h2>Titel with gradient</h2>
    <p>content with gradient-background</p>
  </div>
</div>
```

Implementation:

```css
.bg-containers {
  --bg-color: transparent;
  --bg-image: none;
  --bg-pattern: none;
  --gradient-start: transparent;
  --gradient-end: transparent;
  
  background-color: var(--bg-color);
  padding-block: var(--space-8);
  width: 100%;
}

.bg-cover {
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
}

.bg-cover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Abdunklung for bessere Lesbarkeit */
  z-index: 1;
}

.bg-cover > * {
  position: relative;
  z-index: 2;
}

.bg-pattern {
  background-color: var(--bg-color);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
}

.bg-gradient {
  background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
}
```

## Overlay containers

containers, the others contents uberlagern:

```html
<div class="containers-relative">
  <!-- Basisinhalt -->
  <div class="content">
    <h2>Hauptinhalt</h2>
    <p>this content wird vom Overlay uberlagert.</p>
  </div>
  
  <!-- Overlay-containers -->
  <div class="overlay-containers overlay-center">
    <div class="overlay-content">
      <h3>Overlay-Titel</h3>
      <p>this content schwebt over dem Hauptinhalt.</p>
      <button>Aktion</button>
    </div>
  </div>
</div>
```

Implementation:

```css
.overlay-containers {
  position: absolute;
  z-index: 10;
}

.overlay-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay-top {
  top: 0;
  left: 0;
  right: 0;
}

.overlay-bottom {
  bottom: 0;
  left: 0;
  right: 0;
}

.overlay-content {
  background-color: rgba(255, 255, 255, 0.9);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```

## Scroll containers

containers with speziellem Scrollverhalten:

```html
<!-- Horizontal scrollbarer containers -->
<div class="scroll-containers scroll-x">
  <div class="scroll-content">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
  </div>
</div>

<!-- Vertikal scrollbarer containers with fester height -->
<div class="scroll-containers scroll-y" style="--containers-height: 400px;">
  <div class="scroll-content">
    <p>Langer content, the scrollbar be soll...</p>
    <!-- more content -->
  </div>
</div>

<!-- containers with Snap-Scroll-behavior -->
<div class="scroll-containers scroll-x scroll-snap">
  <div class="scroll-item">Abschnitt 1</div>
  <div class="scroll-item">Abschnitt 2</div>
  <div class="scroll-item">Abschnitt 3</div>
</div>
```

Implementation:

```css
.scroll-containers {
  --containers-height: auto;
  overflow: hidden;
  position: relative;
  height: var(--containers-height);
}

.scroll-x {
  overflow-x: auto;
  overflow-y: hidden;
}

.scroll-x .scroll-content {
  display: flex;
  gap: var(--space-4);
  padding-bottom: var(--space-4); /* Platz for Scrollbar */
}

.scroll-y {
  overflow-y: auto;
  overflow-x: hidden;
}

.scroll-snap {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.scroll-snap .scroll-item {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
}

/* Verbesserte Scrollbar-Display */
.scroll-containers::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.scroll-containers::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-300);
  border-radius: 3px;
}

.scroll-containers::-webkit-scrollbar-track {
  background-color: var(--color-gray-100);
}
```

## Card grid containers

Spezieller containers for Cardnraster with besserer responsive-Unterstutzung:

```html
<div class="card-grid-containers">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

Implementation:

```css
.card-grid-containers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: var(--space-4);
  width: 100%;
}
```

## Split containers

containers, the den verfugbaren Platz in zwei Teile aufteilt:

```html
<div class="split-containers">
  <div class="split-side">
    <h2>Linke Seite</h2>
    <p>content the linken Seite</p>
  </div>
  <div class="split-side">
    <h2>Rechte Seite</h2>
    <p>content the rechten Seite</p>
  </div>
</div>
```

Implementation:

```css
.split-containers {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .split-containers {
    flex-direction: row;
  }
  
  .split-side {
    flex: 1;
  }
}
```

## Sticky Section containers

containers with einer sticky sidebar and scrollbarem Hauptinhalt:

```html
<div class="sticky-section-containers">
  <aside class="sticky-sidebar">
    <nav>
      <ul>
        <li><a href="#section1">Abschnitt 1</a></li>
        <li><a href="#section2">Abschnitt 2</a></li>
        <li><a href="#section3">Abschnitt 3</a></li>
      </ul>
    </nav>
  </aside>
  
  <main class="sticky-main">
    <section id="section1">
      <h2>Abschnitt 1</h2>
      <p>content des ersten Abschnitts...</p>
    </section>
    
    <section id="section2">
      <h2>Abschnitt 2</h2>
      <p>content des zweiten Abschnitts...</p>
    </section>
    
    <section id="section3">
      <h2>Abschnitt 3</h2>
      <p>content des dritten Abschnitts...</p>
    </section>
  </main>
</div>
```

Implementation:

```css
.sticky-section-containers {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sticky-sidebar {
  margin-bottom: var(--space-6);
}

.sticky-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

@media (min-width: 992px) {
  .sticky-section-containers {
    flex-direction: row;
    gap: var(--space-8);
  }
  
  .sticky-sidebar {
    flex-Base: 250px;
    flex-shrink: 0;
    position: sticky;
    top: var(--space-4);
    height: fit-content;
    margin-bottom: 0;
  }
  
  .sticky-main {
    flex-grow: 1;
  }
}
```

## Best Practices

1. **Passenden containers-Typ wahlen** - Wahlen them den containers-Typ, the am besten to Ihrem Inhaltstyp and layout passt.
2. **Vermeiden from Uberspezialisierung** - combine them lieber Base-containers with Utility-classes instead of to many spezialisierte containers to create.
3. **Konsistente Namensgebung** - Halten them oneself on the Namenskonventionen the Bibliothek for bessere Maintainability.
4. **Accessibility note** - ensure, that scrollbare containers and Overlays for all user zuganglich sind.
5. **responsive design priorisieren** - ensure, that spezielle containers on allen Bildschirmgrossen good funktionieren.
6. **Performance im Auge behalten** - to many verschachtelte containers or komplexe Hintergrunde can the Performance beeintrachtigen.
7. **Konsistentes Spacing** - use them the Spacing-variables the Bibliothek for einheitliche Abstande within and between Containern.

## Use Cases

### Hero-section with Hintergrundbild

```html
<div class="bg-containers bg-cover" style="--bg-image: url('hero.jpg');">
  <div class="containers">
    <div class="py-20 text-center">
      <h1 class="text-4xl font-bold mb-4">Willkommen on unserer Website</h1>
      <p class="text-xl mb-8">Entdecken them unsere Produkte and Dienstleistungen.</p>
      <button class="btn btn-primary">Jetzt entdecken</button>
    </div>
  </div>
</div>
```

### Karussell with horizontalem Scrollen

```html
<div class="containers">
  <h2 class="mb-4">Unsere beliebtesten Produkte</h2>
  
  <div class="scroll-containers scroll-x scroll-snap">
    <div class="scroll-content">
      <div class="scroll-item card">Produkt 1</div>
      <div class="scroll-item card">Produkt 2</div>
      <div class="scroll-item card">Produkt 3</div>
      <div class="scroll-item card">Produkt 4</div>
      <div class="scroll-item card">Produkt 5</div>
    </div>
  </div>
</div>
```

### Zweispaltige Artikel-Seite

```html
<div class="containers">
  <article class="sticky-section-containers">
    <aside class="sticky-sidebar">
      <div class="text-sm">
        <p class="text-gray-500">Veroffentlicht am: 15. Mai 2023</p>
        <h2 class="font-bold mt-4">Inhaltsverzeichnis</h2>
        <ul class="mt-2">
          <li><a href="#intro">Einleitung</a></li>
          <li><a href="#main">Hauptteil</a></li>
          <li><a href="#conclusion">Fazit</a></li>
        </ul>
      </div>
    </aside>
    
    <main class="sticky-main">
      <h1 class="text-3xl font-bold">Artikel-Titel</h1>
      
      <section id="intro">
        <h2>Einleitung</h2>
        <p>Einleitungstext des Artikels...</p>
      </section>
      
      <section id="main">
        <h2>Hauptteil</h2>
        <p>Hauptinhalt des Artikels...</p>
      </section>
      
      <section id="conclusion">
        <h2>Fazit</h2>
        <p>Zusammenfassung and Fazit...</p>
      </section>
    </main>
  </article>
</div>
```

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Aspect Ratio | 88+ | 89+ | 15+ | 88+ |
| CSS grid | 57+ | 52+ | 10.1+ | 16+ |
| Sticky Positioning | 56+ | 32+ | 13+ | 16+ |
| Scroll Snap | 69+ | 68+ | 11+ | 79+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

for altere Browser become Fallbacks bereitgestellt, um a grundlegende Funktionalitat to gewahrleisten.

## Zusammenfassung

the speziellen containers the Casoon UI Library bieten vielseitige Losungen for komplexe layout-Anforderungen. them extend the Base-containers system um spezialisierte functions how Seitenverhaltnis-Kontrolle, erweiterte Hintergrunde, Scrollverhalten and more. through the Usage this speziellen containers can them anspruchsvolle layouts with less Code and besserer Consistency create. 
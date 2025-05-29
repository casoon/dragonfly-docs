---
title: Special Containers
category: Layout
---

# Special Containers

Die Casoon UI Library bietet eine Reihe spezieller Container für bestimmte Layout-Anforderungen und Designmuster. Diese Dokumentation erklärt die verfügbaren speziellen Container und ihre Use Cases.

## Overview

Die speziellen Container erweitern das Basis-Container System um folgende Funktionen:

1. **Full-Width Container** - Container, die die volle Viewport-Breite nutzen
2. **Content Container** - Container für spezifische Inhaltstypen
3. **Aspect Ratio Container** - Container mit festgelegtem Seitenverhältnis
4. **Background Container** - Container mit erweiterten Hintergrundoptionen
5. **Overlay Container** - Container, die andere Inhalte überlagern
6. **Scroll Container** - Container mit speziellem Scrollverhalten

## Full-Width Container

Full-Width Container erstrecken sich über die gesamte Viewport-Breite, können aber inneren Inhalt begrenzen:

```html
<!-- Container mit voller Breite und zentriertem Inhalt -->
<div class="container-full">
  <div class="container">
    <h2>Zentrierter Inhalt in einem Full-Width Container</h2>
    <p>Dieser Text ist in der Container-Maximalbreite begrenzt, während der Hintergrund die volle Breite einnimmt.</p>
  </div>
</div>
```

Implementierung:

```css
.container-full {
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  max-width: none;
}
```

## Content Container

Spezielle Container für bestimmte Inhaltstypen mit optimierten Eigenschaften:

### Text Container

```html
<div class="container text-container">
  <h2>Optimierte Textlesbarkeit</h2>
  <p>Dieser Container ist für längere Textabschnitte optimiert und bietet eine ideale Zeilenlänge für bessere Lesbarkeit.</p>
  <p>Weitere Absätze mit optimalem Lesekomfort...</p>
</div>
```

Implementierung:

```css
.text-container {
  max-width: 70ch; /* Optimale Lesbarkeit bei etwa 70 Zeichen pro Zeile */
  margin-inline: auto;
  line-height: 1.6;
}
```

### Media Container

```html
<div class="media-container">
  <img src="image.jpg" alt="Beschreibung">
  <figcaption>Bildbeschreibung</figcaption>
</div>
```

Implementierung:

```css
.media-container {
  margin-inline: auto;
  max-width: min(100%, 1200px);
  margin-block: var(--space-6);
}

.media-container img {
  width: 100%;
  height: auto;
  display: block;
}

.media-container figcaption {
  margin-top: var(--space-2);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
```

### Form Container

```html
<div class="form-container">
  <h2>Kontaktformular</h2>
  <form>
    <!-- Formelemente -->
  </form>
</div>
```

Implementierung:

```css
.form-container {
  max-width: 640px;
  margin-inline: auto;
  padding: var(--space-6);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
}
```

## Aspect Ratio Container

Container, die ein bestimmtes Seitenverhältnis beibehalten, unabhängig von der Breite:

```html
<!-- 16:9 Seitenverhältnis-Container für Videos -->
<div class="aspect-container aspect-16-9">
  <iframe src="https://www.youtube.com/embed/video-id" allowfullscreen></iframe>
</div>

<!-- 1:1 Seitenverhältnis-Container für quadratische Bilder -->
<div class="aspect-container aspect-1-1">
  <img src="square-image.jpg" alt="Quadratisches Bild">
</div>

<!-- 4:3 Seitenverhältnis-Container -->
<div class="aspect-container aspect-4-3">
  <img src="image.jpg" alt="Bild mit 4:3 Seitenverhältnis">
</div>
```

Implementierung:

```css
.aspect-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.aspect-container > * {
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

/* Fallback für Browser ohne aspect-ratio-Unterstützung */
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

## Background Container

Container mit erweiterten Hintergrundoptionen:

```html
<!-- Container mit Vollbild-Hintergrund -->
<div class="bg-container bg-cover" style="--bg-image: url('background.jpg');">
  <div class="container">
    <h1>Titel mit Hintergrundbild</h1>
    <p>Inhalt mit Hintergrundbild</p>
  </div>
</div>

<!-- Container mit gefärbtem Hintergrund und Muster -->
<div class="bg-container bg-pattern" style="--bg-color: var(--color-primary-100); --bg-pattern: url('pattern.svg');">
  <div class="container">
    <h2>Titel mit Hintergrundmuster</h2>
    <p>Inhalt mit Hintergrundmuster</p>
  </div>
</div>

<!-- Container mit Farbverlauf-Hintergrund -->
<div class="bg-container bg-gradient" style="--gradient-start: var(--color-primary-500); --gradient-end: var(--color-secondary-500);">
  <div class="container">
    <h2>Titel mit Farbverlauf</h2>
    <p>Inhalt mit Farbverlauf-Hintergrund</p>
  </div>
</div>
```

Implementierung:

```css
.bg-container {
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
  background-color: rgba(0, 0, 0, 0.5); /* Abdunklung für bessere Lesbarkeit */
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

## Overlay Container

Container, die andere Inhalte überlagern:

```html
<div class="container-relative">
  <!-- Basisinhalt -->
  <div class="content">
    <h2>Hauptinhalt</h2>
    <p>Dieser Inhalt wird vom Overlay überlagert.</p>
  </div>
  
  <!-- Overlay-Container -->
  <div class="overlay-container overlay-center">
    <div class="overlay-content">
      <h3>Overlay-Titel</h3>
      <p>Dieser Inhalt schwebt über dem Hauptinhalt.</p>
      <button>Aktion</button>
    </div>
  </div>
</div>
```

Implementierung:

```css
.overlay-container {
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

## Scroll Container

Container mit speziellem Scrollverhalten:

```html
<!-- Horizontal scrollbarer Container -->
<div class="scroll-container scroll-x">
  <div class="scroll-content">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
  </div>
</div>

<!-- Vertikal scrollbarer Container mit fester Höhe -->
<div class="scroll-container scroll-y" style="--container-height: 400px;">
  <div class="scroll-content">
    <p>Langer Inhalt, der scrollbar sein soll...</p>
    <!-- Mehr Inhalt -->
  </div>
</div>

<!-- Container mit Snap-Scroll-Verhalten -->
<div class="scroll-container scroll-x scroll-snap">
  <div class="scroll-item">Abschnitt 1</div>
  <div class="scroll-item">Abschnitt 2</div>
  <div class="scroll-item">Abschnitt 3</div>
</div>
```

Implementierung:

```css
.scroll-container {
  --container-height: auto;
  overflow: hidden;
  position: relative;
  height: var(--container-height);
}

.scroll-x {
  overflow-x: auto;
  overflow-y: hidden;
}

.scroll-x .scroll-content {
  display: flex;
  gap: var(--space-4);
  padding-bottom: var(--space-4); /* Platz für Scrollbar */
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

/* Verbesserte Scrollbar-Darstellung */
.scroll-container::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-300);
  border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: var(--color-gray-100);
}
```

## Card Grid Container

Spezieller Container für Cardnraster mit besserer Responsive-Unterstützung:

```html
<div class="card-grid-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

Implementierung:

```css
.card-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: var(--space-4);
  width: 100%;
}
```

## Split Container

Container, der den verfügbaren Platz in zwei Teile aufteilt:

```html
<div class="split-container">
  <div class="split-side">
    <h2>Linke Seite</h2>
    <p>Inhalt der linken Seite</p>
  </div>
  <div class="split-side">
    <h2>Rechte Seite</h2>
    <p>Inhalt der rechten Seite</p>
  </div>
</div>
```

Implementierung:

```css
.split-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .split-container {
    flex-direction: row;
  }
  
  .split-side {
    flex: 1;
  }
}
```

## Sticky Section Container

Container mit einer sticky Sidebar und scrollbarem Hauptinhalt:

```html
<div class="sticky-section-container">
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
      <p>Inhalt des ersten Abschnitts...</p>
    </section>
    
    <section id="section2">
      <h2>Abschnitt 2</h2>
      <p>Inhalt des zweiten Abschnitts...</p>
    </section>
    
    <section id="section3">
      <h2>Abschnitt 3</h2>
      <p>Inhalt des dritten Abschnitts...</p>
    </section>
  </main>
</div>
```

Implementierung:

```css
.sticky-section-container {
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
  .sticky-section-container {
    flex-direction: row;
    gap: var(--space-8);
  }
  
  .sticky-sidebar {
    flex-basis: 250px;
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

1. **Passenden Container-Typ wählen** - Wählen Sie den Container-Typ, der am besten zu Ihrem Inhaltstyp und Layout passt.
2. **Vermeiden von Überspezialisierung** - Kombinieren Sie lieber Basis-Container mit Utility-Klassen statt zu viele spezialisierte Container zu erstellen.
3. **Konsistente Namensgebung** - Halten Sie sich an die Namenskonventionen der Bibliothek für bessere Maintainability.
4. **Accessibility beachten** - Stellen Sie sicher, dass scrollbare Container und Overlays für alle Benutzer zugänglich sind.
5. **Responsive Design priorisieren** - Stellen Sie sicher, dass spezielle Container auf allen Bildschirmgrößen gut funktionieren.
6. **Performance im Auge behalten** - Zu viele verschachtelte Container oder komplexe Hintergründe können die Performance beeinträchtigen.
7. **Konsistentes Spacing** - Nutzen Sie die Spacing-Variablen der Bibliothek für einheitliche Abstände innerhalb und zwischen Containern.

## Use Cases

### Hero-Sektion mit Hintergrundbild

```html
<div class="bg-container bg-cover" style="--bg-image: url('hero.jpg');">
  <div class="container">
    <div class="py-20 text-center">
      <h1 class="text-4xl font-bold mb-4">Willkommen auf unserer Website</h1>
      <p class="text-xl mb-8">Entdecken Sie unsere Produkte und Dienstleistungen.</p>
      <button class="btn btn-primary">Jetzt entdecken</button>
    </div>
  </div>
</div>
```

### Karussell mit horizontalem Scrollen

```html
<div class="container">
  <h2 class="mb-4">Unsere beliebtesten Produkte</h2>
  
  <div class="scroll-container scroll-x scroll-snap">
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
<div class="container">
  <article class="sticky-section-container">
    <aside class="sticky-sidebar">
      <div class="text-sm">
        <p class="text-gray-500">Veröffentlicht am: 15. Mai 2023</p>
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
        <p>Zusammenfassung und Fazit...</p>
      </section>
    </main>
  </article>
</div>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Aspect Ratio | 88+ | 89+ | 15+ | 88+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| Sticky Positioning | 56+ | 32+ | 13+ | 16+ |
| Scroll Snap | 69+ | 68+ | 11+ | 79+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

Für ältere Browser werden Fallbacks bereitgestellt, um eine grundlegende Funktionalität zu gewährleisten.

## Zusammenfassung

Die speziellen Container der Casoon UI Library bieten vielseitige Lösungen für komplexe Layout-Anforderungen. Sie erweitern das Basis-Container System um spezialisierte Funktionen wie Seitenverhältnis-Kontrolle, erweiterte Hintergründe, Scrollverhalten und mehr. Durch die Usage dieser speziellen Container können Sie anspruchsvolle Layouts mit weniger Code und besserer Consistency erstellen. 
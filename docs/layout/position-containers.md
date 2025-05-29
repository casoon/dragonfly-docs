---
title: position Containers
category: layout
---

# position Containers

the Casoon UI Library bietet spezielle containers-Variants, the with Positionierungseigenschaften erweitert wurden. these position Containers erlauben it, komplexe layouts with praziser Kontrolle over the Positionierung to create, without the grundlegenden Prinzipien des containers Systems to verletzen.

## Overview

position Containers combine the Vorteile des containers Systems with den folgenden Positionierungsfunktionen:

1. **Relative Positionierung** - containers as Bezugspunkt for absolut positionierte elements
2. **Absolute Positionierung** - containers, the aus dem normalen Dokumentfluss herausgenommen become
3. **Sticky Positionierung** - containers, the ab einem bestimmten Scroll-Punkt fixiert become
4. **Fixed Positionierung** - containers, the relativ zum viewport fixiert sind
5. **Z-Index Management** - Kontrolle over the Stapelreihenfolge from Containern

## Relative containers

Relative containers dienen as Bezugspunkt for absolut positionierte Kind-elements, behalten but ihren Platz im normalen Dokumentfluss at:

```html
<div class="containers containers-relative">
  <!-- Normal positionierter content -->
  <p>this Text behalt seine normale position.</p>
  
  <!-- Absolut positioniertes element within des relativen Containers -->
  <div class="absolute top-0 right-0">
    this element wird absolut zur oberen rechten Ecke des Containers positioniert.
  </div>
</div>
```

Implementation:

```css
.containers-relative {
  position: relative;
}
```

## Absolute containers

Absolute containers become aus dem normalen Dokumentfluss herausgenommen and relativ zum nachsten positionierten Elternelement platziert:

```html
<div class="containers-relative">
  <!-- this containers wird absolut positioniert -->
  <div class="containers containers-absolute top-0 left-0 right-0">
    <p>this containers uberlagert den content and erstreckt oneself over the gesamte width.</p>
  </div>
  
  <!-- Weiterer content im relativen containers -->
  <p>Normaler content under dem absoluten containers.</p>
</div>
```

Implementation:

```css
.containers-absolute {
  position: absolute;
}
```

## Sticky containers

Sticky containers bleiben im normalen Dokumentfluss, until them einen bestimmten Scroll-Punkt erreichen, and become dann fixiert:

```html
<div class="containers-query">
  <!-- this containers klebt am oberen margin, if he beim Scrollen erreicht wird -->
  <header class="containers containers-sticky top-0">
    <h1>Sticky header</h1>
    <nav>navigation bleibt sichtbar beim Scrollen</nav>
  </header>
  
  <main>
    <!-- Hauptinhalt scrollt normal -->
    <p>Normaler content, the under dem sticky header scrollt.</p>
  </main>
</div>
```

Implementation:

```css
.containers-sticky {
  position: sticky;
}
```

## Fixed containers

Fixed containers become komplett aus dem Dokumentfluss herausgenommen and relativ zum viewport positioniert:

```html
<div class="containers containers-fixed bottom-0 left-0 right-0">
  <div class="cookie-banner">
    <p>these Website verwendet Cookies.</p>
    <button>Akzeptieren</button>
  </div>
</div>

<!-- Restlicher Seiteninhalt -->
```

Implementation:

```css
.containers-fixed {
  position: fixed;
}
```

## Z-Index containers

containers with definierten Z-Index-Werten for the Kontrolle the Stapelreihenfolge:

```html
<div class="containers containers-relative">
  <!-- Base-Content -->
  <div class="content">Hauptinhalt</div>
  
  <!-- Overlay with niedrigerem Z-Index -->
  <div class="containers containers-absolute containers-z-10 inset-0">
    background-Overlay
  </div>
  
  <!-- modal with hoherem Z-Index -->
  <div class="containers containers-absolute containers-z-20 inset-center">
    modal-content
  </div>
</div>
```

Implementation:

```css
.containers-z-0 {
  z-index: var(--z-0);
}

.containers-z-10 {
  z-index: var(--z-10);
}

.containers-z-20 {
  z-index: var(--z-20);
}

.containers-z-30 {
  z-index: var(--z-30);
}

.containers-z-40 {
  z-index: var(--z-40);
}

.containers-z-50 {
  z-index: var(--z-50);
}

.containers-z-modal {
  z-index: var(--z-modal);
}
```

## Positionierungshilfen

the system bietet zusatzliche Hilfsklassen for the Positionierung:

```html
<div class="containers containers-relative">
  <!-- on allen Seiten anliegend -->
  <div class="containers-absolute inset-0">
    Fullt den gesamten containers
  </div>
  
  <!-- Horizontal zentriert, oben anliegend -->
  <div class="containers-absolute inset-x-center top-0">
    Horizontal zentrierter header
  </div>
  
  <!-- Vertikal zentriert, rechts anliegend -->
  <div class="containers-absolute inset-y-center right-0">
    Rechte Seitenleiste
  </div>
  
  <!-- Vollstandig zentriert -->
  <div class="containers-absolute inset-center">
    Zentrierter modal-dialog
  </div>
</div>
```

Implementation einiger Positionierungshilfen:

```css
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.inset-x-center {
  left: 50%;
  transform: translateX(-50%);
}

.inset-y-center {
  top: 50%;
  transform: translateY(-50%);
}

.inset-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Kombinierte containers-Positionierung

position containers can with anderen containers-classes kombiniert become:

```html
<!-- containers with fester size, the am oberen margin fixiert ist -->
<div class="containers containers-md containers-sticky top-0">
  <header>
    <h1>Sticky header with mittlerer width</h1>
  </header>
</div>

<!-- Absolut positionierter containers with grosser width -->
<div class="containers containers-lg containers-absolute inset-center">
  <div class="modal">
    <h2>Grosser modal-dialog</h2>
    <p>this modal-dialog verwendet einen sizes containers and ist zentriert positioniert.</p>
  </div>
</div>
```

## Layer Management

for komplexe layouts with mehreren uberlagerten Containern ist a strukturiertes Layer-Management important:

```html
<!-- Base-Layer -->
<div class="containers containers-z-0">
  <main>Hauptinhalt</main>
</div>

<!-- UI-elements Layer -->
<div class="containers containers-sticky containers-z-10 top-0">
  <header>Sticky header</header>
</div>

<!-- Overlay Layer -->
<div class="containers containers-fixed containers-z-20 inset-0 bg-overlay">
  Transparenter Overlay
</div>

<!-- modal Layer -->
<div class="containers containers-fixed containers-z-30 inset-center containers-sm">
  <div class="modal">modal-dialog</div>
</div>

<!-- Notification Layer -->
<div class="containers containers-fixed containers-z-40 top-4 right-4 containers-sm">
  <div class="notification">notification</div>
</div>
```

## responsive Positionierung

position containers can responsiv angepasst become:

```html
<!-- on mobilen Geraten relativ, on Desktop fixiert -->
<div class="containers containers-relative containers-md-fixed top-md-0 left-md-0">
  <nav>
    navigation ist on mobilen Geraten im normalen Fluss,
    wird on Desktop-Geraten fixiert
  </nav>
</div>

<!-- on mobilen Geraten am unteren margin, on Desktop on the Seite -->
<div class="containers containers-fixed bottom-0 right-0 bottom-md-auto right-md-0 top-md-50">
  <div class="floating-action">
    Aktions-button wechselt the position je after Bildschirmgrosse
  </div>
</div>
```

## Best Practices

1. **position containers sparsam einsetzen** - Ubermassige Usage kann to komplexen and schwer wartbaren layouts fuhren.
2. **Z-Index-Strategie define** - Legen them a klare Strategie for Z-Index-values fest, um Konflikte to vermeiden.
3. **Accessibility note** - ensure, that fixierte or absolut positionierte elements not the Bedienbarkeit beeintrachtigen.
4. **Scrollverhalten testen** - Uberprufen them, how oneself sticky and fixed containers beim Scrollen behavior, besonders on mobilen Geraten.
5. **Vermeiden from Z-Index-Kriegen** - use them vordefinierte Z-Index-variables instead of harter Zahlenwerte.
6. **Responsives behavior berucksichtigen** - Positionierung kann on verschiedenen Bildschirmgrossen unterschiedlich be.
7. **Inhaltsuberlaufe note** - ensure, that positionierte containers with ubergrossem content korrekt umgehen.

## Use Cases

### Sticky header

```html
<header class="containers containers-sticky top-0 containers-z-10">
  <div class="flex justify-between align-center">
    <div class="logo">Logo</div>
    <nav>navigation</nav>
  </div>
</header>
```

### Fixiertes sidebar-Menu

```html
<div class="containers-relative">
  <!-- sidebar, the on the Seite fixiert bleibt -->
  <aside class="containers-sticky top-20 left-0 w-64">
    <nav>
      <ul>
        <li><a href="#">navigation 1</a></li>
        <li><a href="#">navigation 2</a></li>
      </ul>
    </nav>
  </aside>
  
  <!-- Hauptinhalt, the next to the sidebar scrollt -->
  <main class="containers ml-64">
    <p>Hauptinhalt, the next to the fixierten sidebar scrollt.</p>
  </main>
</div>
```

### modal-dialog

```html
<div class="containers containers-fixed inset-0 containers-z-modal bg-overlay-50">
  <div class="containers containers-sm containers-absolute inset-center">
    <div class="modal">
      <h2>modal-Titel</h2>
      <p>modal-content</p>
      <button>close</button>
    </div>
  </div>
</div>
```

### Toast-notifications

```html
<div class="containers containers-fixed bottom-4 right-4 containers-z-40">
  <div class="toast">
    <p>Aktion erfolgreich durchgefuhrt!</p>
  </div>
</div>
```

## Browser-Kompatibilitat

position containers sind good unterstutzt in modernen Browsern:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Relative/Absolute Positionierung | all | all | all | all |
| Fixed Positionierung | all | all | all | all |
| Sticky Positionierung | 56+ | 32+ | 13+ | 16+ |
| Transform for centering | 36+ | 16+ | 9+ | 12+ |

## Zusammenfassung

position Containers extend the Base-containers system the Casoon UI Library um leistungsstarke Positionierungsfunktionen. them ermoglichen komplexe, uberlagerte layouts, fixierte UI-elements and prazise Platzierung from Inhalten, wahrend them gleichzeitig the Vorteile des containers Systems beibehalten. through the Kombination from containers-Sizes, Positionierungsklassen and Z-Index-Management can anspruchsvolle layouts on strukturierte and wartbare Weise erstellt become. 
---
title: Position Containers
category: Layout
---

# Position Containers

Die Casoon UI Library bietet spezielle Container-Variants, die mit Positionierungseigenschaften erweitert wurden. Diese Position Containers erlauben es, komplexe Layouts mit präziser Kontrolle über die Positionierung zu erstellen, ohne die grundlegenden Prinzipien des Container Systems zu verletzen.

## Overview

Position Containers kombinieren die Vorteile des Container Systems mit den folgenden Positionierungsfunktionen:

1. **Relative Positionierung** - Container als Bezugspunkt für absolut positionierte Elemente
2. **Absolute Positionierung** - Container, die aus dem normalen Dokumentfluss herausgenommen werden
3. **Sticky Positionierung** - Container, die ab einem bestimmten Scroll-Punkt fixiert werden
4. **Fixed Positionierung** - Container, die relativ zum Viewport fixiert sind
5. **Z-Index Management** - Kontrolle über die Stapelreihenfolge von Containern

## Relative Container

Relative Container dienen als Bezugspunkt für absolut positionierte Kind-Elemente, behalten aber ihren Platz im normalen Dokumentfluss bei:

```html
<div class="container container-relative">
  <!-- Normal positionierter Inhalt -->
  <p>Dieser Text behält seine normale Position.</p>
  
  <!-- Absolut positioniertes Element innerhalb des relativen Containers -->
  <div class="absolute top-0 right-0">
    Dieses Element wird absolut zur oberen rechten Ecke des Containers positioniert.
  </div>
</div>
```

Implementierung:

```css
.container-relative {
  position: relative;
}
```

## Absolute Container

Absolute Container werden aus dem normalen Dokumentfluss herausgenommen und relativ zum nächsten positionierten Elternelement platziert:

```html
<div class="container-relative">
  <!-- Dieser Container wird absolut positioniert -->
  <div class="container container-absolute top-0 left-0 right-0">
    <p>Dieser Container überlagert den Inhalt und erstreckt sich über die gesamte Breite.</p>
  </div>
  
  <!-- Weiterer Inhalt im relativen Container -->
  <p>Normaler Inhalt unter dem absoluten Container.</p>
</div>
```

Implementierung:

```css
.container-absolute {
  position: absolute;
}
```

## Sticky Container

Sticky Container bleiben im normalen Dokumentfluss, bis sie einen bestimmten Scroll-Punkt erreichen, und werden dann fixiert:

```html
<div class="container-query">
  <!-- Dieser Container klebt am oberen Rand, wenn er beim Scrollen erreicht wird -->
  <header class="container container-sticky top-0">
    <h1>Sticky Header</h1>
    <nav>Navigation bleibt sichtbar beim Scrollen</nav>
  </header>
  
  <main>
    <!-- Hauptinhalt scrollt normal -->
    <p>Normaler Inhalt, der unter dem sticky Header scrollt.</p>
  </main>
</div>
```

Implementierung:

```css
.container-sticky {
  position: sticky;
}
```

## Fixed Container

Fixed Container werden komplett aus dem Dokumentfluss herausgenommen und relativ zum Viewport positioniert:

```html
<div class="container container-fixed bottom-0 left-0 right-0">
  <div class="cookie-banner">
    <p>Diese Website verwendet Cookies.</p>
    <button>Akzeptieren</button>
  </div>
</div>

<!-- Restlicher Seiteninhalt -->
```

Implementierung:

```css
.container-fixed {
  position: fixed;
}
```

## Z-Index Container

Container mit definierten Z-Index-Werten für die Kontrolle der Stapelreihenfolge:

```html
<div class="container container-relative">
  <!-- Basis-Content -->
  <div class="content">Hauptinhalt</div>
  
  <!-- Overlay mit niedrigerem Z-Index -->
  <div class="container container-absolute container-z-10 inset-0">
    Hintergrund-Overlay
  </div>
  
  <!-- Modal mit höherem Z-Index -->
  <div class="container container-absolute container-z-20 inset-center">
    Modal-Inhalt
  </div>
</div>
```

Implementierung:

```css
.container-z-0 {
  z-index: var(--z-0);
}

.container-z-10 {
  z-index: var(--z-10);
}

.container-z-20 {
  z-index: var(--z-20);
}

.container-z-30 {
  z-index: var(--z-30);
}

.container-z-40 {
  z-index: var(--z-40);
}

.container-z-50 {
  z-index: var(--z-50);
}

.container-z-modal {
  z-index: var(--z-modal);
}
```

## Positionierungshilfen

Das System bietet zusätzliche Hilfsklassen für die Positionierung:

```html
<div class="container container-relative">
  <!-- An allen Seiten anliegend -->
  <div class="container-absolute inset-0">
    Füllt den gesamten Container
  </div>
  
  <!-- Horizontal zentriert, oben anliegend -->
  <div class="container-absolute inset-x-center top-0">
    Horizontal zentrierter Header
  </div>
  
  <!-- Vertikal zentriert, rechts anliegend -->
  <div class="container-absolute inset-y-center right-0">
    Rechte Seitenleiste
  </div>
  
  <!-- Vollständig zentriert -->
  <div class="container-absolute inset-center">
    Zentrierter Modal-Dialog
  </div>
</div>
```

Implementierung einiger Positionierungshilfen:

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

## Kombinierte Container-Positionierung

Position Container können mit anderen Container-Klassen kombiniert werden:

```html
<!-- Container mit fester Größe, der am oberen Rand fixiert ist -->
<div class="container container-md container-sticky top-0">
  <header>
    <h1>Sticky Header mit mittlerer Breite</h1>
  </header>
</div>

<!-- Absolut positionierter Container mit großer Breite -->
<div class="container container-lg container-absolute inset-center">
  <div class="modal">
    <h2>Großer Modal-Dialog</h2>
    <p>Dieser Modal-Dialog verwendet einen großen Container und ist zentriert positioniert.</p>
  </div>
</div>
```

## Layer Management

Für komplexe Layouts mit mehreren überlagerten Containern ist ein strukturiertes Layer-Management wichtig:

```html
<!-- Basis-Layer -->
<div class="container container-z-0">
  <main>Hauptinhalt</main>
</div>

<!-- UI-Elemente Layer -->
<div class="container container-sticky container-z-10 top-0">
  <header>Sticky Header</header>
</div>

<!-- Overlay Layer -->
<div class="container container-fixed container-z-20 inset-0 bg-overlay">
  Transparenter Overlay
</div>

<!-- Modal Layer -->
<div class="container container-fixed container-z-30 inset-center container-sm">
  <div class="modal">Modal-Dialog</div>
</div>

<!-- Notification Layer -->
<div class="container container-fixed container-z-40 top-4 right-4 container-sm">
  <div class="notification">Benachrichtigung</div>
</div>
```

## Responsive Positionierung

Position Container können responsiv angepasst werden:

```html
<!-- Auf mobilen Geräten relativ, auf Desktop fixiert -->
<div class="container container-relative container-md-fixed top-md-0 left-md-0">
  <nav>
    Navigation ist auf mobilen Geräten im normalen Fluss,
    wird auf Desktop-Geräten fixiert
  </nav>
</div>

<!-- Auf mobilen Geräten am unteren Rand, auf Desktop an der Seite -->
<div class="container container-fixed bottom-0 right-0 bottom-md-auto right-md-0 top-md-50">
  <div class="floating-action">
    Aktions-Button wechselt die Position je nach Bildschirmgröße
  </div>
</div>
```

## Best Practices

1. **Position Container sparsam einsetzen** - Übermäßige Usage kann zu komplexen und schwer wartbaren Layouts führen.
2. **Z-Index-Strategie definieren** - Legen Sie eine klare Strategie für Z-Index-Werte fest, um Konflikte zu vermeiden.
3. **Accessibility beachten** - Stellen Sie sicher, dass fixierte oder absolut positionierte Elemente nicht die Bedienbarkeit beeinträchtigen.
4. **Scrollverhalten testen** - Überprüfen Sie, wie sich sticky und fixed Container beim Scrollen verhalten, besonders auf mobilen Geräten.
5. **Vermeiden von Z-Index-Kriegen** - Verwenden Sie vordefinierte Z-Index-Variablen statt harter Zahlenwerte.
6. **Responsives Verhalten berücksichtigen** - Positionierung kann auf verschiedenen Bildschirmgrößen unterschiedlich sein.
7. **Inhaltsüberläufe beachten** - Stellen Sie sicher, dass positionierte Container mit übergroßem Inhalt korrekt umgehen.

## Use Cases

### Sticky Header

```html
<header class="container container-sticky top-0 container-z-10">
  <div class="flex justify-between align-center">
    <div class="logo">Logo</div>
    <nav>Navigation</nav>
  </div>
</header>
```

### Fixiertes Sidebar-Menü

```html
<div class="container-relative">
  <!-- Sidebar, die an der Seite fixiert bleibt -->
  <aside class="container-sticky top-20 left-0 w-64">
    <nav>
      <ul>
        <li><a href="#">Navigation 1</a></li>
        <li><a href="#">Navigation 2</a></li>
      </ul>
    </nav>
  </aside>
  
  <!-- Hauptinhalt, der neben der Sidebar scrollt -->
  <main class="container ml-64">
    <p>Hauptinhalt, der neben der fixierten Sidebar scrollt.</p>
  </main>
</div>
```

### Modal-Dialog

```html
<div class="container container-fixed inset-0 container-z-modal bg-overlay-50">
  <div class="container container-sm container-absolute inset-center">
    <div class="modal">
      <h2>Modal-Titel</h2>
      <p>Modal-Inhalt</p>
      <button>Schließen</button>
    </div>
  </div>
</div>
```

### Toast-Benachrichtigungen

```html
<div class="container container-fixed bottom-4 right-4 container-z-40">
  <div class="toast">
    <p>Aktion erfolgreich durchgeführt!</p>
  </div>
</div>
```

## Browser-Kompatibilität

Position Container sind gut unterstützt in modernen Browsern:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Relative/Absolute Positionierung | Alle | Alle | Alle | Alle |
| Fixed Positionierung | Alle | Alle | Alle | Alle |
| Sticky Positionierung | 56+ | 32+ | 13+ | 16+ |
| Transform für Zentrierung | 36+ | 16+ | 9+ | 12+ |

## Zusammenfassung

Position Containers erweitern das Basis-Container System der Casoon UI Library um leistungsstarke Positionierungsfunktionen. Sie ermöglichen komplexe, überlagerte Layouts, fixierte UI-Elemente und präzise Platzierung von Inhalten, während sie gleichzeitig die Vorteile des Container Systems beibehalten. Durch die Kombination von Container-Sizes, Positionierungsklassen und Z-Index-Management können anspruchsvolle Layouts auf strukturierte und wartbare Weise erstellt werden. 
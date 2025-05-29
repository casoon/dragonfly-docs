# Positionierungs-Effekte

Positionierungs-Effekte werden verwendet, um Elemente präzise auf der Seite zu platzieren und das Layout zu steuern. Die `@casoon/ui-lib` bietet verschiedene Positionierungs-Effekte, die dazu beitragen, flexible und ansprechende Layouts zu erstellen.

## Basic Usage

Die grundlegenden Positionierungs-Effekte können auf jedes Element angewendet werden:

```html
<div class="position-relative">
  <div class="position-absolute top-0 right-0">
    Absolut positioniertes Element
  </div>
</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Positionierungs-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.position-static` | Statische Positionierung (Standard) |
| `.position-relative` | Relative Positionierung |
| `.position-absolute` | Absolute Positionierung |
| `.position-fixed` | Fixierte Positionierung |
| `.position-sticky` | Klebende Positionierung |
| `.top-0` | Am oberen Rand ausrichten |
| `.right-0` | Am rechten Rand ausrichten |
| `.bottom-0` | Am unteren Rand ausrichten |
| `.left-0` | Am linken Rand ausrichten |
| `.top-50` | Auf 50% von oben positionieren |
| `.right-50` | Auf 50% von rechts positionieren |
| `.bottom-50` | Auf 50% von unten positionieren |
| `.left-50` | Auf 50% von links positionieren |
| `.top-100` | Auf 100% von oben positionieren |
| `.right-100` | Auf 100% von rechts positionieren |
| `.bottom-100` | Auf 100% von unten positionieren |
| `.left-100` | Auf 100% von links positionieren |
| `.translate-middle` | Element zentrieren (mit Transform) |
| `.translate-middle-x` | Element horizontal zentrieren |
| `.translate-middle-y` | Element vertikal zentrieren |
| `.z-index-low` | Niedrige Z-Index-Ebene |
| `.z-index-normal` | Normale Z-Index-Ebene |
| `.z-index-high` | Hohe Z-Index-Ebene |
| `.z-index-top` | Höchste Z-Index-Ebene |
| `.inset-0` | An allen Seiten auf 0 setzen |

## Positionierungstypen

### Statische Positionierung

Die statische Positionierung ist die Standardpositionierung für Elemente:

```html
<div class="position-static">
  Statisch positioniertes Element
</div>
```

### Relative Positionierung

Die relative Positionierung ermöglicht eine Verschiebung relativ zur normalen Position:

```html
<div class="position-relative" style="top: 20px; left: 20px;">
  Relativ positioniertes Element
</div>
```

### Absolute Positionierung

Die absolute Positionierung positioniert ein Element relativ zum nächsten positionierten Vorfahren:

```html
<div class="position-relative">
  <div class="position-absolute top-0 right-0">
    Oben rechts
  </div>
  <div class="position-absolute top-0 left-0">
    Oben links
  </div>
  <div class="position-absolute bottom-0 right-0">
    Unten rechts
  </div>
  <div class="position-absolute bottom-0 left-0">
    Unten links
  </div>
</div>
```

### Fixierte Positionierung

Die fixierte Positionierung positioniert ein Element relativ zum Viewport:

```html
<div class="position-fixed top-0 left-0">
  Fixiert oben links im Viewport
</div>

<div class="position-fixed bottom-0 right-0">
  Fixiert unten rechts im Viewport
</div>
```

### Klebende (Sticky) Positionierung

Die klebende Positionierung lässt ein Element "kleben", wenn es einen bestimmten Offset zum Viewport erreicht:

```html
<div class="position-sticky top-0">
  Klebt am oberen Rand beim Scrollen
</div>
```

## Positionierungsvarianten

### Zentrale Positionierung

Elemente können zentriert positioniert werden:

```html
<div class="position-relative">
  <div class="position-absolute top-50 left-50 translate-middle">
    Zentriert
  </div>
</div>
```

Horizontale oder vertikale Zentrierung:

```html
<div class="position-relative">
  <div class="position-absolute top-50 translate-middle-y">
    Vertikal zentriert am linken Rand
  </div>
  
  <div class="position-absolute left-50 translate-middle-x">
    Horizontal zentriert am oberen Rand
  </div>
</div>
```

### Eckenpositionierung

Elemente können in den Ecken positioniert werden:

```html
<div class="position-relative">
  <div class="position-absolute top-0 left-0">
    Oben links
  </div>
  
  <div class="position-absolute top-0 right-0">
    Oben rechts
  </div>
  
  <div class="position-absolute bottom-0 left-0">
    Unten links
  </div>
  
  <div class="position-absolute bottom-0 right-0">
    Unten rechts
  </div>
</div>
```

### Seitenpositionierung

Elemente können an den Seiten zentriert positioniert werden:

```html
<div class="position-relative">
  <div class="position-absolute top-50 left-0 translate-middle-y">
    Mitte links
  </div>
  
  <div class="position-absolute top-50 right-0 translate-middle-y">
    Mitte rechts
  </div>
  
  <div class="position-absolute top-0 left-50 translate-middle-x">
    Mitte oben
  </div>
  
  <div class="position-absolute bottom-0 left-50 translate-middle-x">
    Mitte unten
  </div>
</div>
```

### Inset-Positionierung

Die Inset-Positionierung setzt alle Seiten gleichzeitig:

```html
<div class="position-relative">
  <div class="position-absolute inset-0">
    Füllt den gesamten Container
  </div>
</div>
```

## Z-Index-Steuerung

Die Z-Index-Klassen steuern die Stapelreihenfolge von Elementen:

```html
<div class="position-relative">
  <div class="position-absolute z-index-low">
    Untere Ebene
  </div>
  
  <div class="position-absolute z-index-normal">
    Mittlere Ebene
  </div>
  
  <div class="position-absolute z-index-high">
    Hohe Ebene
  </div>
  
  <div class="position-absolute z-index-top">
    Oberste Ebene
  </div>
</div>
```

## Use Cases

### Header und Navigation

Fixierte und klebende Header:

```html
<header class="position-fixed top-0 left-0 right-0">
  Fixierter Header
</header>

<nav class="position-sticky top-0">
  Klebende Navigation
</nav>
```

### Overlay-Elemente

Vollständige Overlays über der Seite:

```html
<div class="position-fixed inset-0 z-index-high bg-overlay">
  <div class="position-absolute top-50 left-50 translate-middle">
    Zentrierter Overlay-Inhalt
  </div>
</div>
```

### Badges und Indikatoren

Kleine Indikatoren an anderen Elementen:

```html
<button class="position-relative">
  Benachrichtigungen
  <span class="position-absolute top-0 right-0 badge">42</span>
</button>
```

### Tooltips und Popups

Tooltips um Elemente herum:

```html
<div class="position-relative">
  <button>Hover mich</button>
  
  <div class="tooltip position-absolute bottom-100 left-50 translate-middle-x">
    Tooltip-Inhalt
    <div class="tooltip-arrow position-absolute top-100 left-50 translate-middle-x"></div>
  </div>
</div>
```

### Cardn mit überlagernden Elementen

Komplexe Layouts mit mehreren Ebenen:

```html
<div class="card position-relative">
  <img src="image.jpg" alt="Cardnillustration">
  
  <div class="position-absolute top-0 left-0 p-3">
    <span class="badge">Neu</span>
  </div>
  
  <div class="position-absolute bottom-0 left-0 right-0 p-3 bg-gradient-bottom">
    <h3 class="card-title">Cardnüberschrift</h3>
  </div>
</div>
```

## Anpassung

Die Positionierungs-Effekte können über CSS Variables angepasst werden:

```css
:root {
  /* Z-Index-Werte */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  
  /* Offset-Werte */
  --position-offset-sm: 0.25rem;
  --position-offset-md: 0.5rem;
  --position-offset-lg: 1rem;
  --position-offset-xl: 2rem;
  
  /* Sticky-Header-Höhe */
  --sticky-header-height: 60px;
  
  /* Abstand zur Viewport-Kante für fixierte Elemente */
  --fixed-element-margin: 1rem;
}
```

## CSS-Implementierung

Examples für die CSS-Implementierung der Positionierungs-Effekte:

```css
/* Grundlegende Positionierungsklassen */
.position-static {
  position: static;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.position-fixed {
  position: fixed;
}

.position-sticky {
  position: sticky;
  position: -webkit-sticky;
}

/* Positionierungskoordinaten */
.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.left-0 {
  left: 0;
}

.top-50 {
  top: 50%;
}

.right-50 {
  right: 50%;
}

.bottom-50 {
  bottom: 50%;
}

.left-50 {
  left: 50%;
}

.top-100 {
  top: 100%;
}

.right-100 {
  right: 100%;
}

.bottom-100 {
  bottom: 100%;
}

.left-100 {
  left: 100%;
}

/* Zentrierungshelfer */
.translate-middle {
  transform: translate(-50%, -50%);
}

.translate-middle-x {
  transform: translateX(-50%);
}

.translate-middle-y {
  transform: translateY(-50%);
}

/* Z-Index-Steuerung */
.z-index-low {
  z-index: 10;
}

.z-index-normal {
  z-index: 100;
}

.z-index-high {
  z-index: 1000;
}

.z-index-top {
  z-index: 10000;
}

/* Inset-Shorthand */
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

## Accessibility

Bei der Usage von Positionierungs-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Tastaturbedienung**: Sicherstellen, dass fixierte und absolute Elemente per Tastatur zugänglich sind
2. **Fokus-Management**: Bei der Usage von Overlays und Modals den Fokus richtig verwalten
3. **Sichtbarkeit**: Sicherstellen, dass wichtige Inhalte nicht durch fixierte Elemente verdeckt werden
4. **Lesbarkeit**: Ausreichenden Kontrast für überlagerte Texte gewährleisten

```html
<!-- Barrierefreies fixiertes Menü -->
<nav class="position-fixed top-0 left-0 right-0" aria-label="Hauptnavigation">
  <button class="skip-link" tabindex="0">Zum Hauptinhalt springen</button>
  <!-- Navigationsinhalt -->
</nav>

<main id="main-content" tabindex="-1">
  <!-- Hauptinhalt mit ausreichendem Abstand zum fixierten Menü -->
</main>
```

## Browser-Kompatibilität

Die meisten Positionierungs-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| position: static/relative/absolute/fixed | ✓ | ✓ | ✓ | ✓ | ✓ |
| position: sticky | ✓ | ✓ | ✓ | ✓ | Nein |
| transform für Zentrierung | ✓ | ✓ | ✓ | ✓ | ✓ |
| z-index-Ebenen | ✓ | ✓ | ✓ | ✓ | ✓ |

## Verwandte Effekte

- [Transform-Effekte](/docs/effects/layout/transforms.md) - Transformationseffekte für Elemente
- [Flex-Layout](/docs/effects/layout/flex.md) - Flexible Box-Layout-Effekte
- [Grid-Layout](/docs/effects/layout/grid.md) - Grid-Layout-Effekte 
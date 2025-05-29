# Positionierungs-effects

Positionierungs-effects become verwendet, um elements prazise on the Seite to platzieren and the layout to steuern. the `@casoon/ui-lib` bietet verschiedene Positionierungs-effects, the for that beitragen, flexible and ansprechende layouts to create.

## Basic Usage

the grundlegenden Positionierungs-effects can on jedes element angewendet become:

```html
<div class="position-relative">
  <div class="position-absolute top-0 right-0">
    Absolut positioniertes element
  </div>
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Positionierungs-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.position-static` | Statische Positionierung (Standard) |
| `.position-relative` | Relative Positionierung |
| `.position-absolute` | Absolute Positionierung |
| `.position-fixed` | Fixierte Positionierung |
| `.position-sticky` | Klebende Positionierung |
| `.top-0` | Am oberen margin align |
| `.right-0` | Am rechten margin align |
| `.bottom-0` | Am unteren margin align |
| `.left-0` | Am linken margin align |
| `.top-50` | on 50% from oben position |
| `.right-50` | on 50% from rechts position |
| `.bottom-50` | on 50% from unten position |
| `.left-50` | on 50% from links position |
| `.top-100` | on 100% from oben position |
| `.right-100` | on 100% from rechts position |
| `.bottom-100` | on 100% from unten position |
| `.left-100` | on 100% from links position |
| `.translate-middle` | element center (with Transform) |
| `.translate-middle-x` | element horizontal center |
| `.translate-middle-y` | element vertikal center |
| `.z-index-low` | Niedrige Z-Index-layer |
| `.z-index-normal` | Normale Z-Index-layer |
| `.z-index-high` | height Z-Index-layer |
| `.z-index-top` | Hochste Z-Index-layer |
| `.inset-0` | on allen Seiten on 0 setzen |

## Positionierungstypen

### Statische Positionierung

the statische Positionierung ist the Standardpositionierung for elements:

```html
<div class="position-static">
  Statisch positioniertes element
</div>
```

### Relative Positionierung

the relative Positionierung ermoglicht a Verschiebung relativ zur normalen position:

```html
<div class="position-relative" style="top: 20px; left: 20px;">
  Relativ positioniertes element
</div>
```

### Absolute Positionierung

the absolute Positionierung positioniert a element relativ zum nachsten positionierten Vorfahren:

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

the fixierte Positionierung positioniert a element relativ zum viewport:

```html
<div class="position-fixed top-0 left-0">
  Fixiert oben links im viewport
</div>

<div class="position-fixed bottom-0 right-0">
  Fixiert unten rechts im viewport
</div>
```

### Klebende (Sticky) Positionierung

the klebende Positionierung lasst a element "kleben", if it einen bestimmten Offset zum viewport erreicht:

```html
<div class="position-sticky top-0">
  Klebt am oberen margin beim Scrollen
</div>
```

## Positionierungsvarianten

### Zentrale Positionierung

elements can zentriert positioniert become:

```html
<div class="position-relative">
  <div class="position-absolute top-50 left-50 translate-middle">
    Zentriert
  </div>
</div>
```

Horizontale or vertikale centering:

```html
<div class="position-relative">
  <div class="position-absolute top-50 translate-middle-y">
    Vertikal zentriert am linken margin
  </div>
  
  <div class="position-absolute left-50 translate-middle-x">
    Horizontal zentriert am oberen margin
  </div>
</div>
```

### Eckenpositionierung

elements can in den Ecken positioniert become:

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

elements can on den Seiten zentriert positioniert become:

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

the Inset-Positionierung setzt all Seiten gleichzeitig:

```html
<div class="position-relative">
  <div class="position-absolute inset-0">
    Fullt den gesamten containers
  </div>
</div>
```

## Z-Index-Steuerung

the Z-Index-classes steuern the Stapelreihenfolge from Elementen:

```html
<div class="position-relative">
  <div class="position-absolute z-index-low">
    Untere layer
  </div>
  
  <div class="position-absolute z-index-normal">
    Mittlere layer
  </div>
  
  <div class="position-absolute z-index-high">
    height layer
  </div>
  
  <div class="position-absolute z-index-top">
    Oberste layer
  </div>
</div>
```

## Use Cases

### header and navigation

Fixierte and klebende header:

```html
<header class="position-fixed top-0 left-0 right-0">
  Fixierter header
</header>

<nav class="position-sticky top-0">
  Klebende navigation
</nav>
```

### Overlay-elements

Vollstandige Overlays over the Seite:

```html
<div class="position-fixed inset-0 z-index-high bg-overlay">
  <div class="position-absolute top-50 left-50 translate-middle">
    Zentrierter Overlay-content
  </div>
</div>
```

### badges and Indikatoren

Kleine Indikatoren on anderen Elementen:

```html
<button class="position-relative">
  notifications
  <span class="position-absolute top-0 right-0 badge">42</span>
</button>
```

### tooltips and popups

tooltips um elements herum:

```html
<div class="position-relative">
  <button>Hover me</button>
  
  <div class="tooltip position-absolute bottom-100 left-50 translate-middle-x">
    tooltip-content
    <div class="tooltip-arrow position-absolute top-100 left-50 translate-middle-x"></div>
  </div>
</div>
```

### Cardn with uberlagernden Elementen

Komplexe layouts with mehreren Ebenen:

```html
<div class="card position-relative">
  <img src="image.jpg" alt="Cardnillustration">
  
  <div class="position-absolute top-0 left-0 p-3">
    <span class="badge">Neu</span>
  </div>
  
  <div class="position-absolute bottom-0 left-0 right-0 p-3 bg-gradient-bottom">
    <h3 class="card-title">Cardnuberschrift</h3>
  </div>
</div>
```

## Customization

the Positionierungs-effects can over CSS Variables angepasst become:

```css
:root {
  /* Z-Index-values */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
  
  /* Offset-values */
  --position-offset-sm: 0.25rem;
  --position-offset-md: 0.5rem;
  --position-offset-lg: 1rem;
  --position-offset-xl: 2rem;
  
  /* Sticky-header-height */
  --sticky-header-height: 60px;
  
  /* spacing zur viewport-Kante for fixierte elements */
  --fixed-element-margin: 1rem;
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Positionierungs-effects:

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

at the Usage from Positionierungs-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Tastaturbedienung**: Sicherstellen, that fixierte and absolute elements per Tastatur zuganglich sind
2. **Fokus-Management**: at the Usage from Overlays and modals den Fokus richtig verwalten
3. **visibility**: Sicherstellen, that wichtige contents not through fixierte elements verdeckt become
4. **Lesbarkeit**: Ausreichenden Kontrast for uberlagerte Texte gewahrleisten

```html
<!-- Barrierefreies fixiertes Menu -->
<nav class="position-fixed top-0 left-0 right-0" aria-label="Hauptnavigation">
  <button class="skip-link" tabindex="0">Zum Hauptinhalt springen</button>
  <!-- Navigationsinhalt -->
</nav>

<main id="main-content" tabindex="-1">
  <!-- Hauptinhalt with ausreichendem spacing zum fixierten Menu -->
</main>
```

## Browser-Kompatibilitat

the meisten Positionierungs-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| position: static/relative/absolute/fixed | ✓ | ✓ | ✓ | ✓ | ✓ |
| position: sticky | ✓ | ✓ | ✓ | ✓ | Nein |
| transform for centering | ✓ | ✓ | ✓ | ✓ | ✓ |
| z-index-Ebenen | ✓ | ✓ | ✓ | ✓ | ✓ |

## Verwandte effects

- [Transform-effects](/docs/effects/layout/transforms.md) - Transformationseffekte for elements
- [Flex-layout](/docs/effects/layout/flex.md) - Flexible box-layout-effects
- [grid-layout](/docs/effects/layout/grid.md) - grid-layout-effects 
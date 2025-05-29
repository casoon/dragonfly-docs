# Backdrop-effects

Backdrop-effects become verwendet, um einen visuellen background or a layer behind einem element to create. the `@casoon/ui-lib` bietet verschiedene Backdrop-effects, the for that beitragen, tiefere visuelle Hierarchien and ansprechende user interfaces to gestalten.

## Basic Usage

the grundlegende Backdrop-effect kann on jedes element angewendet become:

```html
<div class="backdrop">
  <div class="content">content with Backdrop</div>
</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Backdrop-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.backdrop` | Basisklasse for Backdrop-effects |
| `.backdrop-blur` | Unscharfer background |
| `.backdrop-dim` | Abgedunkelter background |
| `.backdrop-frosted` | Frosted-Glass-effect |
| `.backdrop-gradient` | Verlaufshintergrund |
| `.backdrop-noise` | background with Rauschstruktur |
| `.backdrop-pattern` | background with pattern |
| `.backdrop-spotlight` | Spotlight-effect |
| `.backdrop-shadow` | Schattenhintergrund |
| `.backdrop-glow` | Gluhender background |

## Variants

### Blur-effect

the Blur-effect erstellt einen unscharfen background:

```html
<div class="backdrop-blur">
  <div class="content">content with unscharfem background</div>
</div>
```

Verfugbare Starken:

```html
<div class="backdrop-blur-sm">Leichte Unscharfe</div>
<div class="backdrop-blur-md">Mittlere Unscharfe</div>
<div class="backdrop-blur-lg">strength Unscharfe</div>
```

### Dim-effect

the Dim-effect verdunkelt den background:

```html
<div class="backdrop-dim">
  <div class="content">content with abgedunkeltem background</div>
</div>
```

Verfugbare Starken:

```html
<div class="backdrop-dim-light">Leicht abgedunkelt</div>
<div class="backdrop-dim-medium">Mittel abgedunkelt</div>
<div class="backdrop-dim-heavy">Stark abgedunkelt</div>
```

### Frosted-Glass-effect

the Frosted-Glass-effect erstellt einen matten Glaseffekt:

```html
<div class="backdrop-frosted">
  <div class="content">content with Frosted-Glass-effect</div>
</div>
```

### Gradient-effect

the Gradient-effect erstellt einen Verlaufshintergrund:

```html
<div class="backdrop-gradient">
  <div class="content">content with Verlaufshintergrund</div>
</div>
```

Verfugbare Variants:

```html
<div class="backdrop-gradient-linear">Linearer Verlauf</div>
<div class="backdrop-gradient-radial">Radialer Verlauf</div>
<div class="backdrop-gradient-conic">Konischer Verlauf</div>
```

### Noise-effect

the Noise-effect fugt a Rauschstruktur hinzu:

```html
<div class="backdrop-noise">
  <div class="content">content with Rauschstruktur</div>
</div>
```

### Pattern-effect

the Pattern-effect erstellt einen background with pattern:

```html
<div class="backdrop-pattern">
  <div class="content">content with Musterhintergrund</div>
</div>
```

Verfugbare pattern:

```html
<div class="backdrop-pattern-dots">Punktmuster</div>
<div class="backdrop-pattern-lines">Linienmuster</div>
<div class="backdrop-pattern-grid">Gittermuster</div>
<div class="backdrop-pattern-waves">Wellenmuster</div>
```

### Spotlight-effect

the Spotlight-effect erzeugt einen Spotlight-background:

```html
<div class="backdrop-spotlight">
  <div class="content">content with Spotlight-effect</div>
</div>
```

### Shadow-effect

the Shadow-effect erstellt einen Schattenhintergrund:

```html
<div class="backdrop-shadow">
  <div class="content">content with Schattenhintergrund</div>
</div>
```

### Glow-effect

the Glow-effect erstellt einen gluhenden background:

```html
<div class="backdrop-glow">
  <div class="content">content with gluhendem background</div>
</div>
```

## Kombination with anderen Elementen

Backdrop-effects can with verschiedenen UI-Elementen kombiniert become:

### Cardn and containers

```html
<div class="card backdrop-blur">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt with unscharfem background</div>
</div>

<div class="containers backdrop-frosted">
  <h2>containers-heading</h2>
  <p>containers-content with Frosted-Glass-effect</p>
</div>
```

### modals and dialogs

```html
<div class="modal-backdrop backdrop-dim">
  <div class="modal">
    <div class="modal-header">modal-heading</div>
    <div class="modal-body">modal-content</div>
  </div>
</div>

<div class="dialog-backdrop backdrop-blur">
  <div class="dialog">
    <div class="dialog-content">dialog-content</div>
  </div>
</div>
```

### Hero-areas

```html
<section class="hero backdrop-gradient">
  <div class="hero-content">
    <h1>Willkommen</h1>
    <p>Held-area with Verlaufshintergrund</p>
  </div>
</section>
```

### navigation

```html
<nav class="navbar backdrop-frosted">
  <div class="navbar-brand">Logo</div>
  <div class="navbar-menu">
    <a href="#">Home</a>
    <a href="#">over us</a>
    <a href="#">Kontakt</a>
  </div>
</nav>
```

## Interaktive Backdrop-effects

Backdrop-effects can with interactions kombiniert become:

```html
<div class="card hover-backdrop-blur">
  <div class="card-content">
    Card with Backdrop-effect at Hover
  </div>
</div>

<button class="focus-backdrop-glow">
  button with Backdrop-effect at Fokus
</button>
```

## Customization

the Backdrop-effects can over CSS Variables angepasst become:

```css
:root {
  /* Blur-effect */
  --backdrop-blur-sm: 2px;
  --backdrop-blur-md: 5px;
  --backdrop-blur-lg: 10px;
  
  /* Dim-effect */
  --backdrop-dim-light: rgba(0, 0, 0, 0.3);
  --backdrop-dim-medium: rgba(0, 0, 0, 0.5);
  --backdrop-dim-heavy: rgba(0, 0, 0, 0.8);
  
  /* Frosted-Glass-effect */
  --backdrop-frosted-opacity: 0.7;
  --backdrop-frosted-blur: 10px;
  --backdrop-frosted-saturation: 180%;
  
  /* Gradient-effect */
  --backdrop-gradient-start: rgba(255, 255, 255, 0.1);
  --backdrop-gradient-end: rgba(255, 255, 255, 0.3);
  --backdrop-gradient-angle: 135deg;
  
  /* Noise-effect */
  --backdrop-noise-opacity: 0.05;
  --backdrop-noise-density: 20%;
  
  /* Pattern-effect */
  --backdrop-pattern-color: rgba(255, 255, 255, 0.1);
  --backdrop-pattern-size: 20px;
  --backdrop-pattern-spacing: 40px;
  
  /* Spotlight-effect */
  --backdrop-spotlight-size: 40%;
  --backdrop-spotlight-color: rgba(255, 255, 255, 0.1);
  
  /* Shadow-effect */
  --backdrop-shadow-color: rgba(0, 0, 0, 0.2);
  --backdrop-shadow-size: 20px;
  
  /* Glow-effect */
  --backdrop-glow-color: rgba(255, 255, 255, 0.1);
  --backdrop-glow-size: 100px;
  --backdrop-glow-intensity: 0.5;
}
```

## Positionierung from Backdrops

Backdrops can on verschiedene Arten positioniert become:

### as background

```html
<div class="backdrop-containers">
  <div class="backdrop backdrop-blur"></div>
  <div class="content">content over dem Backdrop</div>
</div>
```

```css
.backdrop-containers {
  position: relative;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}
```

### as Overlay

```html
<div class="backdrop-overlay backdrop-dim">
  <div class="overlay-content">Overlay-content</div>
</div>
```

```css
.backdrop-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  position: relative;
  z-index: 1001;
}
```

## Accessibility

at the Usage from Backdrop-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Kontrast**: ensure, that the Text on dem Backdrop ausreichenden Kontrast bietet
2. **Lesbarkeit**: Backdrop-effects should the Lesbarkeit from Text not beeintrachtigen
3. **animation**: Vermeiden them ubermassige animations, the for user with vestibularen Storungen problematisch be can
4. **Fokus**: ensure, that Fokushinweise weiterhin sichtbar sind

## Performance-Uberlegungen

Backdrop-effects can the Leistung beeinflussen, insbesondere on mobilen Geraten:

1. **Blur-effects**: Blur-effects sind rechenintensiv and should sparsam eingesetzt become
2. **Filter**: several Filter can the Leistung beeintrachtigen
3. **animations**: Animierte Backdrop-effects should on `transform` and `opacity` beschrankt become
4. **Schichten**: to many uberlagerte Backdrop-effects can to Leistungsproblemen fuhren

```css
/* Optimierung for animations */
.animated-backdrop {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

## Browser-Kompatibilitat

the meisten Backdrop-effects sind with allen modernen Browsern kompatibel. some effects have however Einschrankungen in alteren Browsern.

| effect | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| Blur | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Dim | ✓ | ✓ | ✓ | ✓ | ✓ |
| Frosted | ✓ | ✓ | ✓ | ✓ | Nein |
| Gradient | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Noise | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Pattern | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Spotlight | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Shadow | ✓ | ✓ | ✓ | ✓ | ✓ |
| Glow | ✓ | ✓ | ✓ | ✓ | Begrenzt |

## Verwandte effects

- [Glaseffekte](/docs/effects/visual/glass.md) - Verwandte Glaseffekte
- [Overlays](/docs/effects/layout/overlays.md) - Uberlagerungseffekte
- [Blur-effects](/docs/effects/visual/filters.md) - additional Unscharfeeffekte 
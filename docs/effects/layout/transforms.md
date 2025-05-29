# Transform-effects

Transform-effects become verwendet, um elements to verschieben, to drehen, to skalieren or to verzerren, without the umgebende layout to beeinflussen. the `@casoon/ui-lib` bietet verschiedene Transform-effects, the for that beitragen, dynamische and interaktive user interfaces to gestalten.

## Basic Usage

the grundlegende Transform-effect kann on jedes element angewendet become:

```html
<div class="transform-scale">element with Skalierungseffekt</div>
```

## CSS-classes

the folgenden CSS-classes stehen for Transform-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.transform` | Basisklasse for Transform-effects |
| `.transform-scale` | Skalierungseffekt |
| `.transform-rotate` | Dreheffekt |
| `.transform-translate` | Verschiebungseffekt |
| `.transform-skew` | Verzerrungseffekt |
| `.transform-origin-center` | Transformationsursprung in the Mitte |
| `.transform-origin-top` | Transformationsursprung am oberen margin |
| `.transform-origin-right` | Transformationsursprung am rechten margin |
| `.transform-origin-bottom` | Transformationsursprung am unteren margin |
| `.transform-origin-left` | Transformationsursprung am linken margin |
| `.transform-preserve-3d` | 3D-Transformationen activate |
| `.transform-perspective` | Perspektivische Display |
| `.transform-backface-visible` | Ruckseite sichtbar machen |
| `.transform-backface-hidden` | Ruckseite ausblenden |

## Variants

### Skalierungseffekte

Transform-effects zum enlarge or reduce from Elementen:

```html
<div class="transform-scale-up">enlarge</div>
<div class="transform-scale-down">reduce</div>
<div class="transform-scale-x">Horizontal skalieren</div>
<div class="transform-scale-y">Vertikal skalieren</div>
```

Verfugbare Sizesvarianten:

```html
<div class="transform-scale-xs">very kleine Skalierung</div>
<div class="transform-scale-sm">Kleine Skalierung</div>
<div class="transform-scale-md">Mittlere Skalierung</div>
<div class="transform-scale-lg">size Skalierung</div>
<div class="transform-scale-xl">very size Skalierung</div>
```

### Dreheffekte

Transform-effects zum Drehen from Elementen:

```html
<div class="transform-rotate-45">45 Grad drehen</div>
<div class="transform-rotate-90">90 Grad drehen</div>
<div class="transform-rotate-180">180 Grad drehen</div>
<div class="transform-rotate-270">270 Grad drehen</div>
<div class="transform-rotate-360">360 Grad drehen</div>
```

Drehrichtung:

```html
<div class="transform-rotate-clockwise">Im Uhrzeigersinn drehen</div>
<div class="transform-rotate-counterclockwise">against den Uhrzeigersinn drehen</div>
```

3D-Drehung:

```html
<div class="transform-rotate-x">Um X-Achse drehen</div>
<div class="transform-rotate-y">Um Y-Achse drehen</div>
<div class="transform-rotate-z">Um Z-Achse drehen</div>
```

### Verschiebungseffekte

Transform-effects zum Verschieben from Elementen:

```html
<div class="transform-translate-up">after oben verschieben</div>
<div class="transform-translate-right">after rechts verschieben</div>
<div class="transform-translate-down">after unten verschieben</div>
<div class="transform-translate-left">after links verschieben</div>
```

Verfugbare Distanzvarianten:

```html
<div class="transform-translate-xs">very kleine Verschiebung</div>
<div class="transform-translate-sm">Kleine Verschiebung</div>
<div class="transform-translate-md">Mittlere Verschiebung</div>
<div class="transform-translate-lg">size Verschiebung</div>
<div class="transform-translate-xl">very size Verschiebung</div>
```

3D-Verschiebung:

```html
<div class="transform-translate-z">in Z-Richtung verschieben</div>
```

### Verzerrungseffekte

Transform-effects zum Verzerren from Elementen:

```html
<div class="transform-skew-x">Horizontal verzerren</div>
<div class="transform-skew-y">Vertikal verzerren</div>
<div class="transform-skew-both">in both Richtungen verzerren</div>
```

Verfugbare Winkel:

```html
<div class="transform-skew-15">15 Grad verzerren</div>
<div class="transform-skew-30">30 Grad verzerren</div>
<div class="transform-skew-45">45 Grad verzerren</div>
```

### Kombinierte Transformationen

several Transform-effects can kombiniert become:

```html
<div class="transform-scale-up transform-rotate-45">enlarge and drehen</div>
<div class="transform-translate-up transform-rotate-90">Verschieben and drehen</div>
<div class="transform-scale-down transform-skew-x">reduce and verzerren</div>
```

### Transformationsursprung

the Ursprung the Transformation kann festgelegt become:

```html
<div class="transform-rotate-45 transform-origin-center">Vom Zentrum aus drehen</div>
<div class="transform-rotate-45 transform-origin-top-left">from the oberen linken Ecke aus drehen</div>
<div class="transform-rotate-45 transform-origin-bottom-right">from the unteren rechten Ecke aus drehen</div>
```

## 3D-Transformationen

the Bibliothek unterstutzt also 3D-Transformationen:

```html
<div class="transform-perspective">
  <div class="transform-rotate-x-45">Um X-Achse gedreht</div>
</div>

<div class="transform-preserve-3d">
  <div class="transform-rotate-y-180 transform-backface-hidden">Card (Vorderseite)</div>
  <div class="transform-rotate-y-0 transform-backface-hidden">Card (Ruckseite)</div>
</div>
```

## Interaktive Transform-effects

Transform-effects can with interactions kombiniert become:

```html
<div class="hover-transform-scale-up">Beim Hover enlarge</div>
<div class="hover-transform-rotate-45">Beim Hover drehen</div>
<div class="hover-transform-translate-up">Beim Hover after oben verschieben</div>

<div class="focus-transform-scale-up">at Fokus enlarge</div>
<div class="active-transform-scale-down">at Aktivierung reduce</div>
```

## Kombination with anderen Elementen

Transform-effects can with verschiedenen UI-Elementen kombiniert become:

### buttons with Transform-Effekten

```html
<button class="btn hover-transform-scale-up">Beim Hover enlarge</button>
<button class="btn hover-transform-translate-up">Beim Hover anheben</button>
<button class="btn active-transform-scale-down">at Klick reduce</button>
```

### Cardn with Transform-Effekten

```html
<div class="card hover-transform-scale-up hover-transform-shadow">
  <div class="card-header">Cardnuberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>

<div class="card-flip transform-preserve-3d">
  <div class="card-front transform-backface-hidden">Vorderseite</div>
  <div class="card-back transform-backface-hidden transform-rotate-y-180">Ruckseite</div>
</div>
```

### images with Transform-Effekten

```html
<img src="image.jpg" alt="image" class="hover-transform-scale-up">
<img src="image.jpg" alt="image" class="hover-transform-rotate-15">
```

### navigation with Transform-Effekten

```html
<nav class="navbar">
  <a href="#" class="hover-transform-translate-up">Home</a>
  <a href="#" class="hover-transform-translate-up">over us</a>
  <a href="#" class="hover-transform-translate-up">Kontakt</a>
</nav>
```

## Animierte Transform-effects

Transform-effects can animiert become:

```html
<div class="transform-animated-scale">Animierte Skalierung</div>
<div class="transform-animated-rotate">Animierte Drehung</div>
<div class="transform-animated-translate">Animierte Verschiebung</div>
```

Animations-Einstellungen:

```html
<div class="transform-animated-slow">Langsame animation</div>
<div class="transform-animated-fast">Schnelle animation</div>
<div class="transform-animated-loop">Wiederholte animation</div>
<div class="transform-animated-bounce">Federnde animation</div>
```

## Customization

the Transform-effects can over CSS Variables angepasst become:

```css
:root {
  /* Skalierungsfaktoren */
  --transform-scale-xs: 1.05;
  --transform-scale-sm: 1.1;
  --transform-scale-md: 1.2;
  --transform-scale-lg: 1.3;
  --transform-scale-xl: 1.5;
  
  /* Drehwinkel */
  --transform-rotate-15: 15deg;
  --transform-rotate-30: 30deg;
  --transform-rotate-45: 45deg;
  --transform-rotate-90: 90deg;
  --transform-rotate-180: 180deg;
  
  /* Verschiebungsdistanzen */
  --transform-translate-xs: 2px;
  --transform-translate-sm: 5px;
  --transform-translate-md: 10px;
  --transform-translate-lg: 20px;
  --transform-translate-xl: 40px;
  
  /* Verzerrungswinkel */
  --transform-skew-15: 15deg;
  --transform-skew-30: 30deg;
  --transform-skew-45: 45deg;
  
  /* 3D-Transformationseinstellungen */
  --transform-perspective: 1000px;
  --transform-z-distance: 100px;
  
  /* Animationseinstellungen */
  --transform-animation-duration: 0.3s;
  --transform-animation-duration-slow: 0.6s;
  --transform-animation-duration-fast: 0.15s;
  --transform-animation-timing: ease-in-out;
  --transform-animation-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Transform-effects:

```css
/* Skalierungseffekte */
.transform-scale-up {
  transform: scale(var(--transform-scale-md));
}

.transform-scale-down {
  transform: scale(0.9);
}

.transform-scale-x {
  transform: scaleX(var(--transform-scale-md));
}

.transform-scale-y {
  transform: scaleY(var(--transform-scale-md));
}

/* Dreheffekte */
.transform-rotate-45 {
  transform: rotate(var(--transform-rotate-45));
}

.transform-rotate-x-45 {
  transform: rotateX(var(--transform-rotate-45));
}

.transform-rotate-y-45 {
  transform: rotateY(var(--transform-rotate-45));
}

/* Verschiebungseffekte */
.transform-translate-up {
  transform: translateY(calc(-1 * var(--transform-translate-md)));
}

.transform-translate-right {
  transform: translateX(var(--transform-translate-md));
}

/* Verzerrungseffekte */
.transform-skew-x {
  transform: skewX(var(--transform-skew-15));
}

.transform-skew-y {
  transform: skewY(var(--transform-skew-15));
}

/* Transformationsursprung */
.transform-origin-center {
  transform-origin: center;
}

.transform-origin-top-left {
  transform-origin: top left;
}

/* 3D-Transformationen */
.transform-perspective {
  perspective: var(--transform-perspective);
}

.transform-preserve-3d {
  transform-style: preserve-3d;
}

.transform-backface-hidden {
  backface-visibility: hidden;
}

/* Interaktive effects */
.hover-transform-scale-up:hover {
  transform: scale(var(--transform-scale-md));
}

.active-transform-scale-down:active {
  transform: scale(0.95);
}

/* Animierte effects */
.transform-animated-rotate {
  animation: transform-rotate var(--transform-animation-duration) var(--transform-animation-timing);
}

@keyframes transform-rotate {
  from { transform: rotate(0); }
  to { transform: rotate(var(--transform-rotate-360)); }
}
```

## Accessibility

at the Usage from Transform-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Bewegung minimieren**: Ubermassige or dauerhafte animations can for Menschen with vestibularen Storungen problematisch be
2. **Benutzereinstellungen**: the Setting `prefers-reduced-motion` respektieren
3. **Lesbarkeit**: Sicherstellen, that Text lesbar bleibt, also if he transformiert wird
4. **Orientierung**: user not through drastische Orientierungsanderungen verwirren

```css
/* Berucksichtigung from Benutzereinstellungen for reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .transform-animated-rotate,
  .transform-animated-scale,
  .transform-animated-translate,
  .hover-transform-scale-up,
  .hover-transform-rotate-45,
  .hover-transform-translate-up {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
```

## Performance-Uberlegungen

Transform-effects can the Leistung beeinflussen:

1. **GPU-Beschleunigung**: Transform-effects become from the GPU beschleunigt and sind performanter as others Animationsarten
2. **Komposit-properties**: `transform` and `opacity` sind properties, the only the Compositing-Phase beeinflussen
3. **Renderebenen**: many transformierte elements can to einer sizes Anzahl from Renderebenen fuhren
4. **Hardwarebeschleunigung**: the Usage from `will-change` or `transform: translateZ(0)` kann the Leistung verbessern

```css
/* Performance-Optimierung for animierte Transformationen */
.transform-animated,
.hover-transform {
  will-change: transform;
}
```

## Browser-Kompatibilitat

the meisten Transform-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| 2D-Transformationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3D-Transformationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Animierte Transformationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| transform-style: preserve-3d | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Animations-effects](/docs/effects/animation/animations.md) - Animationseffekte for elements
- [Transitions-effects](/docs/effects/transitions.md) - Ubergangseffekte for Zustandsanderungen
- [3D-effects](/docs/effects/3d.md) - Dreidimensionale effects for elements 
# Transform-Effekte

Transform-Effekte werden verwendet, um Elemente zu verschieben, zu drehen, zu skalieren oder zu verzerren, ohne das umgebende Layout zu beeinflussen. Die `@casoon/ui-lib` bietet verschiedene Transform-Effekte, die dazu beitragen, dynamische und interaktive Benutzeroberflächen zu gestalten.

## Basic Usage

Der grundlegende Transform-Effekt kann auf jedes Element angewendet werden:

```html
<div class="transform-scale">Element mit Skalierungseffekt</div>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Transform-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.transform` | Basisklasse für Transform-Effekte |
| `.transform-scale` | Skalierungseffekt |
| `.transform-rotate` | Dreheffekt |
| `.transform-translate` | Verschiebungseffekt |
| `.transform-skew` | Verzerrungseffekt |
| `.transform-origin-center` | Transformationsursprung in der Mitte |
| `.transform-origin-top` | Transformationsursprung am oberen Rand |
| `.transform-origin-right` | Transformationsursprung am rechten Rand |
| `.transform-origin-bottom` | Transformationsursprung am unteren Rand |
| `.transform-origin-left` | Transformationsursprung am linken Rand |
| `.transform-preserve-3d` | 3D-Transformationen aktivieren |
| `.transform-perspective` | Perspektivische Darstellung |
| `.transform-backface-visible` | Rückseite sichtbar machen |
| `.transform-backface-hidden` | Rückseite ausblenden |

## Variants

### Skalierungseffekte

Transform-Effekte zum Vergrößern oder Verkleinern von Elementen:

```html
<div class="transform-scale-up">Vergrößern</div>
<div class="transform-scale-down">Verkleinern</div>
<div class="transform-scale-x">Horizontal skalieren</div>
<div class="transform-scale-y">Vertikal skalieren</div>
```

Verfügbare Sizesvarianten:

```html
<div class="transform-scale-xs">Sehr kleine Skalierung</div>
<div class="transform-scale-sm">Kleine Skalierung</div>
<div class="transform-scale-md">Mittlere Skalierung</div>
<div class="transform-scale-lg">Große Skalierung</div>
<div class="transform-scale-xl">Sehr große Skalierung</div>
```

### Dreheffekte

Transform-Effekte zum Drehen von Elementen:

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
<div class="transform-rotate-counterclockwise">Gegen den Uhrzeigersinn drehen</div>
```

3D-Drehung:

```html
<div class="transform-rotate-x">Um X-Achse drehen</div>
<div class="transform-rotate-y">Um Y-Achse drehen</div>
<div class="transform-rotate-z">Um Z-Achse drehen</div>
```

### Verschiebungseffekte

Transform-Effekte zum Verschieben von Elementen:

```html
<div class="transform-translate-up">Nach oben verschieben</div>
<div class="transform-translate-right">Nach rechts verschieben</div>
<div class="transform-translate-down">Nach unten verschieben</div>
<div class="transform-translate-left">Nach links verschieben</div>
```

Verfügbare Distanzvarianten:

```html
<div class="transform-translate-xs">Sehr kleine Verschiebung</div>
<div class="transform-translate-sm">Kleine Verschiebung</div>
<div class="transform-translate-md">Mittlere Verschiebung</div>
<div class="transform-translate-lg">Große Verschiebung</div>
<div class="transform-translate-xl">Sehr große Verschiebung</div>
```

3D-Verschiebung:

```html
<div class="transform-translate-z">In Z-Richtung verschieben</div>
```

### Verzerrungseffekte

Transform-Effekte zum Verzerren von Elementen:

```html
<div class="transform-skew-x">Horizontal verzerren</div>
<div class="transform-skew-y">Vertikal verzerren</div>
<div class="transform-skew-both">In beide Richtungen verzerren</div>
```

Verfügbare Winkel:

```html
<div class="transform-skew-15">15 Grad verzerren</div>
<div class="transform-skew-30">30 Grad verzerren</div>
<div class="transform-skew-45">45 Grad verzerren</div>
```

### Kombinierte Transformationen

Mehrere Transform-Effekte können kombiniert werden:

```html
<div class="transform-scale-up transform-rotate-45">Vergrößern und drehen</div>
<div class="transform-translate-up transform-rotate-90">Verschieben und drehen</div>
<div class="transform-scale-down transform-skew-x">Verkleinern und verzerren</div>
```

### Transformationsursprung

Der Ursprung der Transformation kann festgelegt werden:

```html
<div class="transform-rotate-45 transform-origin-center">Vom Zentrum aus drehen</div>
<div class="transform-rotate-45 transform-origin-top-left">Von der oberen linken Ecke aus drehen</div>
<div class="transform-rotate-45 transform-origin-bottom-right">Von der unteren rechten Ecke aus drehen</div>
```

## 3D-Transformationen

Die Bibliothek unterstützt auch 3D-Transformationen:

```html
<div class="transform-perspective">
  <div class="transform-rotate-x-45">Um X-Achse gedreht</div>
</div>

<div class="transform-preserve-3d">
  <div class="transform-rotate-y-180 transform-backface-hidden">Card (Vorderseite)</div>
  <div class="transform-rotate-y-0 transform-backface-hidden">Card (Rückseite)</div>
</div>
```

## Interaktive Transform-Effekte

Transform-Effekte können mit Interaktionen kombiniert werden:

```html
<div class="hover-transform-scale-up">Beim Hover vergrößern</div>
<div class="hover-transform-rotate-45">Beim Hover drehen</div>
<div class="hover-transform-translate-up">Beim Hover nach oben verschieben</div>

<div class="focus-transform-scale-up">Bei Fokus vergrößern</div>
<div class="active-transform-scale-down">Bei Aktivierung verkleinern</div>
```

## Kombination mit anderen Elementen

Transform-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Buttons mit Transform-Effekten

```html
<button class="btn hover-transform-scale-up">Beim Hover vergrößern</button>
<button class="btn hover-transform-translate-up">Beim Hover anheben</button>
<button class="btn active-transform-scale-down">Bei Klick verkleinern</button>
```

### Cardn mit Transform-Effekten

```html
<div class="card hover-transform-scale-up hover-transform-shadow">
  <div class="card-header">Cardnüberschrift</div>
  <div class="card-body">Cardninhalt</div>
</div>

<div class="card-flip transform-preserve-3d">
  <div class="card-front transform-backface-hidden">Vorderseite</div>
  <div class="card-back transform-backface-hidden transform-rotate-y-180">Rückseite</div>
</div>
```

### Bilder mit Transform-Effekten

```html
<img src="image.jpg" alt="Bild" class="hover-transform-scale-up">
<img src="image.jpg" alt="Bild" class="hover-transform-rotate-15">
```

### Navigation mit Transform-Effekten

```html
<nav class="navbar">
  <a href="#" class="hover-transform-translate-up">Home</a>
  <a href="#" class="hover-transform-translate-up">Über uns</a>
  <a href="#" class="hover-transform-translate-up">Kontakt</a>
</nav>
```

## Animierte Transform-Effekte

Transform-Effekte können animiert werden:

```html
<div class="transform-animated-scale">Animierte Skalierung</div>
<div class="transform-animated-rotate">Animierte Drehung</div>
<div class="transform-animated-translate">Animierte Verschiebung</div>
```

Animations-Einstellungen:

```html
<div class="transform-animated-slow">Langsame Animation</div>
<div class="transform-animated-fast">Schnelle Animation</div>
<div class="transform-animated-loop">Wiederholte Animation</div>
<div class="transform-animated-bounce">Federnde Animation</div>
```

## Anpassung

Die Transform-Effekte können über CSS Variables angepasst werden:

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

## CSS-Implementierung

Examples für die CSS-Implementierung der Transform-Effekte:

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

/* Interaktive Effekte */
.hover-transform-scale-up:hover {
  transform: scale(var(--transform-scale-md));
}

.active-transform-scale-down:active {
  transform: scale(0.95);
}

/* Animierte Effekte */
.transform-animated-rotate {
  animation: transform-rotate var(--transform-animation-duration) var(--transform-animation-timing);
}

@keyframes transform-rotate {
  from { transform: rotate(0); }
  to { transform: rotate(var(--transform-rotate-360)); }
}
```

## Accessibility

Bei der Usage von Transform-Effekten sollten folgende Accessibilitysaspekte berücksichtigt werden:

1. **Bewegung minimieren**: Übermäßige oder dauerhafte Animationen können für Menschen mit vestibulären Störungen problematisch sein
2. **Benutzereinstellungen**: Die Einstellung `prefers-reduced-motion` respektieren
3. **Lesbarkeit**: Sicherstellen, dass Text lesbar bleibt, auch wenn er transformiert wird
4. **Orientierung**: Benutzer nicht durch drastische Orientierungsänderungen verwirren

```css
/* Berücksichtigung von Benutzereinstellungen für reduzierte Bewegung */
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

## Performance-Überlegungen

Transform-Effekte können die Leistung beeinflussen:

1. **GPU-Beschleunigung**: Transform-Effekte werden von der GPU beschleunigt und sind performanter als andere Animationsarten
2. **Komposit-Eigenschaften**: `transform` und `opacity` sind Eigenschaften, die nur die Compositing-Phase beeinflussen
3. **Renderebenen**: Viele transformierte Elemente können zu einer großen Anzahl von Renderebenen führen
4. **Hardwarebeschleunigung**: Die Usage von `will-change` oder `transform: translateZ(0)` kann die Leistung verbessern

```css
/* Performance-Optimierung für animierte Transformationen */
.transform-animated,
.hover-transform {
  will-change: transform;
}
```

## Browser-Kompatibilität

Die meisten Transform-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| 2D-Transformationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3D-Transformationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| Animierte Transformationen | ✓ | ✓ | ✓ | ✓ | Begrenzt |
| transform-style: preserve-3d | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Animationseffekte für Elemente
- [Transitions-Effekte](/docs/effects/transitions.md) - Übergangseffekte für Zustandsänderungen
- [3D-Effekte](/docs/effects/3d.md) - Dreidimensionale Effekte für Elemente 
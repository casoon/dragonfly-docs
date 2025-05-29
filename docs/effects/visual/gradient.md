---
title: Gradient-effects
category: Guide
---

# Gradient-effects

the `gradients.css` file bietet a umfangreiche Sammlung from Farbverlaufseffekten, the Ihren UI-Elementen Tiefe, Dimension and visuelle Attraktivitat verleihen. with verschiedenen Arten, Richtungen and Farbkombinationen can them einzigartige and ansprechende designs create.

## Overview

Farbverlaufe (Gradients) sind a vielseitiges Designelement, the uberall from Hintergrunden until to Texten eingesetzt become kann. the Casoon UI Library bietet vorgefertigte Gradient-classes for haufige Use Cases sowie CSS Variables for benutzerdefinierte customizations.

## Base-Farbverlaufe

```html
<!-- Lineare Farbverlaufe -->
<div class="gradient-linear">Standard linearer gradient</div>
<div class="gradient-linear-primary">Primarfarbener linearer gradient</div>
<div class="gradient-linear-secondary">Sekundarfarbener linearer gradient</div>
<div class="gradient-linear-accent">Akzentfarbener linearer gradient</div>

<!-- Radiale Farbverlaufe -->
<div class="gradient-radial">Standard radialer gradient</div>
<div class="gradient-radial-primary">Primarfarbener radialer gradient</div>
<div class="gradient-radial-secondary">Sekundarfarbener radialer gradient</div>
<div class="gradient-radial-accent">Akzentfarbener radialer gradient</div>

<!-- Konische Farbverlaufe -->
<div class="gradient-conic">Standard konischer gradient</div>
<div class="gradient-conic-primary">Primarfarbener konischer gradient</div>
<div class="gradient-conic-secondary">Sekundarfarbener konischer gradient</div>
<div class="gradient-conic-accent">Akzentfarbener konischer gradient</div>
```

## Richtungen the Farbverlaufe

```html
<!-- Lineare Farbverlaufsrichtungen -->
<div class="gradient-to-right">from links after rechts</div>
<div class="gradient-to-left">from rechts after links</div>
<div class="gradient-to-bottom">from oben after unten</div>
<div class="gradient-to-top">from unten after oben</div>
<div class="gradient-to-tr">from unten links after oben rechts</div>
<div class="gradient-to-tl">from unten rechts after oben links</div>
<div class="gradient-to-br">from oben links after unten rechts</div>
<div class="gradient-to-bl">from oben rechts after unten links</div>

<!-- Radiale Farbverlaufsformen -->
<div class="gradient-radial-circle">Kreisformiger radialer gradient</div>
<div class="gradient-radial-ellipse">Elliptischer radialer gradient</div>

<!-- Radiale Farbverlaufspositionen -->
<div class="gradient-radial-center">Radialer gradient from the Mitte</div>
<div class="gradient-radial-top">Radialer gradient from oben</div>
<div class="gradient-radial-right">Radialer gradient from rechts</div>
<div class="gradient-radial-bottom">Radialer gradient from unten</div>
<div class="gradient-radial-left">Radialer gradient from links</div>
<div class="gradient-radial-top-right">Radialer gradient from oben rechts</div>
<div class="gradient-radial-bottom-right">Radialer gradient from unten rechts</div>
<div class="gradient-radial-bottom-left">Radialer gradient from unten links</div>
<div class="gradient-radial-top-left">Radialer gradient from oben links</div>

<!-- Konische Farbverlaufspositionen -->
<div class="gradient-conic-center">Konischer gradient from the Mitte</div>
<div class="gradient-conic-top-right">Konischer gradient from oben rechts</div>
<div class="gradient-conic-bottom-right">Konischer gradient from unten rechts</div>
<div class="gradient-conic-bottom-left">Konischer gradient from unten links</div>
<div class="gradient-conic-top-left">Konischer gradient from oben links</div>
```

## Mehrfarbige Farbverlaufe

```html
<!-- Zwei-Colors-Verlaufe -->
<div class="gradient-blue-green">Blau to Grun</div>
<div class="gradient-purple-pink">Lila to Pink</div>
<div class="gradient-orange-red">Orange to Rot</div>
<div class="gradient-yellow-green">Gelb to Grun</div>

<!-- Drei-Colors-Verlaufe -->
<div class="gradient-rainbow">Regenbogenfarben (Rot, Gelb, Blau)</div>
<div class="gradient-sunset">Sonnenuntergang (Orange, Rosa, Lila)</div>
<div class="gradient-ocean">Ozean (Hellblau, Blau, Dunkelblau)</div>
<div class="gradient-forest">Wald (Hellgrun, Grun, Dunkelgrun)</div>

<!-- Mehrfarbige Farbverlaufe -->
<div class="gradient-multi-primary">Mehrfarbiger Primarfarbverlauf</div>
<div class="gradient-multi-pastel">Mehrfarbiger Pastellfarbverlauf</div>
<div class="gradient-multi-neon">Mehrfarbiger Neonfarbverlauf</div>
```

## Spezielle Farbverlaufseffekte

```html
<!-- Mesh-Gradients (komplexe Verlaufe) -->
<div class="gradient-mesh-warm">Warmes Mesh-Gradient</div>
<div class="gradient-mesh-cool">Kuhles Mesh-Gradient</div>
<div class="gradient-mesh-mixed">Gemischtes Mesh-Gradient</div>

<!-- Noise-Gradients (with Rauscheffekt) -->
<div class="gradient-noise-light">Helles Rausch-Gradient</div>
<div class="gradient-noise-dark">Dunkles Rausch-Gradient</div>
<div class="gradient-noise-color">Farbiges Rausch-Gradient</div>

<!-- Glassmorphism-Gradients -->
<div class="gradient-glass">Glas-Gradient with subtiler transparency</div>
<div class="gradient-glass-light">Helles Glas-Gradient</div>
<div class="gradient-glass-dark">Dunkles Glas-Gradient</div>

<!-- Duotone-Gradients -->
<div class="gradient-duotone-blue-red">Blau-Rot Duotone</div>
<div class="gradient-duotone-purple-yellow">Lila-Gelb Duotone</div>
<div class="gradient-duotone-green-magenta">Grun-Magenta Duotone</div>
```

## Farbverlaufsopazitat and -intensitat

```html
<!-- Farbverlaufsopazitat -->
<div class="gradient-opacity-10">10% Deckkraft</div>
<div class="gradient-opacity-25">25% Deckkraft</div>
<div class="gradient-opacity-50">50% Deckkraft</div>
<div class="gradient-opacity-75">75% Deckkraft</div>

<!-- Farbverlaufsintensitat -->
<div class="gradient-soft">Sanfter gradient</div>
<div class="gradient-medium">Mittlerer gradient</div>
<div class="gradient-bold">Intensiver gradient</div>
```

## Text with gradient

```html
<!-- Text with gradient -->
<h2 class="text-gradient">heading with gradient</h2>
<h2 class="text-gradient-primary">heading with Primarfarbverlauf</h2>
<h2 class="text-gradient-secondary">heading with Sekundarfarbverlauf</h2>
<h2 class="text-gradient-rainbow">heading with Regenbogenfarbverlauf</h2>
```

## border with gradient

```html
<!-- border with gradient -->
<div class="border-gradient">element with Farbverlaufsrahmen</div>
<div class="border-gradient-primary">element with primarem Farbverlaufsrahmen</div>
<div class="border-gradient-rainbow">element with Regenbogen-Farbverlaufsrahmen</div>
<div class="border-gradient-animated">element with animiertem Farbverlaufsrahmen</div>
```

## Animierte Farbverlaufe

```html
<!-- Animierte Farbverlaufe -->
<div class="gradient-animated">Animierter gradient</div>
<div class="gradient-animated-slow">Langsam animierter gradient</div>
<div class="gradient-animated-fast">Schnell animierter gradient</div>

<!-- Animierte Richtungswechsel -->
<div class="gradient-animated-rotate">Rotierender gradient</div>
<div class="gradient-animated-shift">Verschiebender gradient</div>
<div class="gradient-animated-pulse">Pulsierender gradient</div>

<!-- Animierte Farbwechsel -->
<div class="gradient-animated-hue-shift">Farbton-Shift-animation</div>
<div class="gradient-animated-rainbow">Regenbogenanimation</div>
<div class="gradient-animated-transition">Farbubergangsanimation</div>
```

## Interaktive Farbverlaufe

```html
<!-- Hover-Farbverlaufe -->
<div class="gradient-hover">Andert gradient at Hover</div>
<div class="gradient-hover-intensify">Intensiviert gradient at Hover</div>
<div class="gradient-hover-shift">Verschiebt gradient at Hover</div>
<div class="gradient-hover-rotate">Rotiert gradient at Hover</div>

<!-- Fokus-Farbverlaufe -->
<button class="gradient-focus">Andert gradient at Fokus</button>

<!-- Aktiv-Farbverlaufe -->
<button class="gradient-active">Andert gradient at Aktivierung</button>
```

## Customization over CSS Variables

the Farbverlaufe can over CSS Variables angepasst become:

```css
:root {
  /* Primare Farbverlaufsfarben */
  --gradient-primary-start: var(--color-primary);
  --gradient-primary-end: color-mix(in srgb, var(--color-primary) 50%, white);
  
  /* Sekundare Farbverlaufsfarben */
  --gradient-secondary-start: var(--color-secondary);
  --gradient-secondary-end: color-mix(in srgb, var(--color-secondary) 50%, white);
  
  /* Akzent-Farbverlaufsfarben */
  --gradient-accent-start: var(--color-accent);
  --gradient-accent-end: color-mix(in srgb, var(--color-accent) 50%, white);
  
  /* Standard-Farbverlaufswinkel and -positions */
  --gradient-angle: 90deg;
  --gradient-position: center;
  
  /* Vordefinierte Farbverlaufe */
  --gradient-rainbow: linear-gradient(var(--gradient-angle), #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff);
  --gradient-sunset: linear-gradient(var(--gradient-angle), #ff7e5f, #feb47b);
  --gradient-ocean: linear-gradient(var(--gradient-angle), #00c6fb, #005bea);
  --gradient-forest: linear-gradient(var(--gradient-angle), #00b09b, #96c93d);
  
  /* Mesh-Gradient-Definitionen */
  --gradient-mesh-warm: radial-gradient(circle at top left, rgba(255, 165, 0, 0.5), transparent 50%),
                       radial-gradient(circle at bottom right, rgba(255, 0, 128, 0.5), transparent 50%),
                       radial-gradient(circle at center, rgba(255, 214, 10, 0.3), transparent 70%);
  
  /* Duotone-Gradient-Definitionen */
  --gradient-duotone-blue-red: linear-gradient(var(--gradient-angle), 
                              color-mix(in srgb, blue 80%, black), 
                              color-mix(in srgb, red 80%, black));
  
  /* Animationsparameter */
  --gradient-animation-duration: 3s;
  --gradient-animation-timing: ease-in-out;
}
```

## Fallbacks and Browser-Unterstutzung

```css
/* Fallback for Browser without Unterstutzung for moderne Gradients */
.gradient-linear {
  background-color: var(--gradient-primary-end);
  background-image: linear-gradient(var(--gradient-angle), var(--gradient-primary-start), var(--gradient-primary-end));
}

@supports not (background: conic-gradient(red, blue)) {
  .gradient-conic {
    background: radial-gradient(circle, var(--gradient-primary-start), var(--gradient-primary-end));
  }
}
```

## Gradient-Generierung with CSS-functions

```css
/* Dynamische Farbverlaufsgenerierung with CSS color-mix */
.gradient-dynamic-primary {
  --light-variant: color-mix(in srgb, var(--color-primary) 60%, white);
  --dark-variant: color-mix(in srgb, var(--color-primary) 60%, black);
  background: linear-gradient(var(--gradient-angle), var(--dark-variant), var(--color-primary), var(--light-variant));
}

/* with CSS Variables aus Benutzereingaben (over Style-attributes) */
.gradient-custom {
  background: linear-gradient(var(--custom-angle, 90deg), 
                             var(--custom-color-start, #3498db), 
                             var(--custom-color-end, #9b59b6));
}
```

## Accessibility

at the Usage from Farbverlaufen should some wichtige Aspekte the Accessibility beachtet become:

1. **Kontrast**: ensure, that Text on Farbverlaufen ausreichenden Kontrast hat
2. **Farbfehlsichtigkeit**: Vermeiden them Farbkombinationen, the for Menschen with Farbfehlsichtigkeit problematisch be konnten
3. **Ubermassige animations**: Reduzieren them animierte Farbverlaufe for Nutzer, the reduzierte Bewegung bevorzugen

```css
/* Barrierefreie Textuberlagerung */
.accessible-text-on-gradient {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Reduzierte Bewegung respektieren */
@media (prefers-reduced-motion: reduce) {
  .gradient-animated,
  .gradient-animated-slow,
  .gradient-animated-fast,
  .gradient-animated-rotate,
  .gradient-animated-shift,
  .gradient-animated-pulse,
  .gradient-animated-hue-shift,
  .gradient-animated-rainbow,
  .gradient-animated-transition {
    animation: none !important;
  }
}

/* Hoher Kontrast Modus */
@media (prefers-contrast: more) {
  .text-gradient {
    background: none;
    color: currentColor;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: currentColor;
  }
}
```

## Performance-Uberlegungen

Farbverlaufe can the Rendering-Performance beeinflussen:

1. **use them einfache Farbverlaufe** for bessere Performance
2. **Vermeiden them to many animierte Farbverlaufe** on einer Seite
3. **Vorsicht with komplexen Mesh-Gradients** on mobilen Geraten
4. **use them Hardware-Beschleunigung** with `will-change` at Bedarf 

```css
/* Performance-Optimierung for animierte Farbverlaufe */
.gradient-animated.performance-critical {
  will-change: background-position;
  transform: translateZ(0);
}
```

## Praktische Examples

### Moderne button with gradient

```html
<button class="button gradient-primary">
  Primarer Gradient-button
</button>

<button class="button gradient-sunset hover-gradient-intensify">
  Sonnenuntergangs-button with Hover-effect
</button>

<button class="button border-gradient-rainbow">
  button with Regenbogen-margin
</button>
```

### Cardn with Farbverlaufshintergrund

```html
<div class="card gradient-glass-light">
  <div class="card-header">
    <h3 class="text-gradient-primary">Gradient-Card</h3>
  </div>
  <div class="card-body">
    <p>content with Glas-Farbverlaufseffekt</p>
  </div>
  <div class="card-footer">
    <button class="button gradient-primary">Aktion</button>
  </div>
</div>
```

### Hero-area with komplexem gradient

```html
<section class="hero gradient-mesh-warm">
  <div class="hero-content">
    <h1 class="text-gradient-sunset">Willkommen at Casoon</h1>
    <p>a moderne UI-Bibliothek with beeindruckenden Effekten</p>
    <button class="button gradient-primary">Jetzt starten</button>
  </div>
</section>
```

## Best Practices

1. **Sparsam einsetzen**: use them Farbverlaufe gezielt and vermeiden them Uberladung
2. **Harmonische Colors wahlen**: ensure, that the Farbverlaufsfarben zum color scheme Ihrer Application passen
3. **Consistency wahren**: use them ahnliche Farbverlaufe for ahnliche elements
4. **Lesbarkeit sicherstellen**: Text on Farbverlaufen sollte good lesbar be
5. **Accessibility note**: Berucksichtigen them Farbfehlsichtigkeit and ausreichenden Kontrast
``` 
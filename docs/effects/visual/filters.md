---
title: Filter-effects
category: Guide
---

# Filter-effects

the `filters.css` file bietet a umfangreiche Sammlung from visuellen Filtereffekten, the zur Manipulation from Bildern, Hintergrunden and anderen UI-Elementen eingesetzt become can. these Filter basieren on den CSS-Filterfunktionen and ermoglichen zahlreiche visuelle customizations without den Einsatz from Grafikprogrammen.

## Overview

with CSS-Filtern can them Colors customize, Helligkeits- and Kontrastanderungen vornehmen, Unscharfeeffekte add and much more. the Casoon UI Library bietet a Sammlung vorgefertigter Filter sowie kombinierte effects for typische Use Cases.

## Base-Filter

```html
<!-- Unscharfe-Filter -->
<img class="filter-blur-sm" src="image.jpg" alt="Leicht unscharfes image">
<img class="filter-blur" src="image.jpg" alt="Unscharfes image">
<img class="filter-blur-lg" src="image.jpg" alt="Stark unscharfes image">

<!-- Helligkeit-Filter -->
<img class="filter-brightness-50" src="image.jpg" alt="Dunkleres image (50%)">
<img class="filter-brightness-150" src="image.jpg" alt="Helleres image (150%)">

<!-- Kontrast-Filter -->
<img class="filter-contrast-50" src="image.jpg" alt="Niedriger Kontrast (50%)">
<img class="filter-contrast-150" src="image.jpg" alt="Hoher Kontrast (150%)">

<!-- Graustufenfilter -->
<img class="filter-grayscale" src="image.jpg" alt="Graustufenbild">
<img class="filter-grayscale-50" src="image.jpg" alt="Teilweise Graustufen (50%)">

<!-- Sepia-Filter -->
<img class="filter-sepia" src="image.jpg" alt="Sepia-effect">
<img class="filter-sepia-50" src="image.jpg" alt="Teilweise Sepia (50%)">

<!-- Farbton-Rotation -->
<img class="filter-hue-rotate-90" src="image.jpg" alt="Farbton um 90° rotiert">
<img class="filter-hue-rotate-180" src="image.jpg" alt="Farbton um 180° rotiert">
<img class="filter-hue-rotate-270" src="image.jpg" alt="Farbton um 270° rotiert">

<!-- Invertierung -->
<img class="filter-invert" src="image.jpg" alt="Invertiertes image">
<img class="filter-invert-50" src="image.jpg" alt="Teilweise invertiert (50%)">

<!-- Sattigung -->
<img class="filter-saturate-0" src="image.jpg" alt="no Sattigung (Graustufen)">
<img class="filter-saturate-50" src="image.jpg" alt="Niedrige Sattigung (50%)">
<img class="filter-saturate-150" src="image.jpg" alt="height Sattigung (150%)">
<img class="filter-saturate-200" src="image.jpg" alt="very height Sattigung (200%)">

<!-- transparency (Opacity) -->
<img class="filter-opacity-25" src="image.jpg" alt="25% Deckkraft">
<img class="filter-opacity-50" src="image.jpg" alt="50% Deckkraft">
<img class="filter-opacity-75" src="image.jpg" alt="75% Deckkraft">

<!-- Schattierung (Drop Shadow) -->
<img class="filter-drop-shadow" src="image.jpg" alt="image with shadow">
<img class="filter-drop-shadow-sm" src="image.jpg" alt="image with kleinem shadow">
<img class="filter-drop-shadow-lg" src="image.jpg" alt="image with grossem shadow">
```

## Kombinierte Filter-effects

Voreingestellte Kombinationen for gangige Bildeffekte:

```html
<!-- Vintage-effect -->
<img class="filter-vintage" src="image.jpg" alt="Vintage-Foto-effect">

<!-- Schwarz-Weiss with hohem Kontrast -->
<img class="filter-bw-high-contrast" src="image.jpg" alt="Kontrastreiches Schwarz-Weiss-image">

<!-- Warmer Farbton -->
<img class="filter-warm" src="image.jpg" alt="Warmer Farbeffekt">

<!-- Kuhler Farbton -->
<img class="filter-cool" src="image.jpg" alt="Kuhler Farbeffekt">

<!-- Dramatischer effect -->
<img class="filter-dramatic" src="image.jpg" alt="Dramatischer Bildeffekt">

<!-- Nostalgischer effect -->
<img class="filter-nostalgic" src="image.jpg" alt="Nostalgischer Bildeffekt">

<!-- Filmisches Look -->
<img class="filter-cinematic" src="image.jpg" alt="Filmischer Bildeffekt">

<!-- Weichzeichnung for Portrats -->
<img class="filter-soft-portrait" src="image.jpg" alt="Weichgezeichnetes Portrat">

<!-- Duotone-effect (Zwei Colors) -->
<img class="filter-duotone-blue-red" src="image.jpg" alt="Blau-Rot Duotone">
<img class="filter-duotone-purple-yellow" src="image.jpg" alt="Lila-Gelb Duotone">
```

## Text-Filter

Filter for Text-elements:

```html
<!-- Weichgezeichneter Text -->
<h2 class="filter-text-blur">Verschwommener Text</h2>

<!-- Text with shadow -->
<h2 class="filter-text-shadow">Text with shadow</h2>

<!-- Leuchtender Text (Glow) -->
<h2 class="filter-text-glow">Leuchtender Text</h2>

<!-- Invertierter Text (good for Dark Mode) -->
<h2 class="filter-text-invert">Invertierter Text</h2>
```

## background-Filter

for Hintergrunde and containers:

```html
<!-- Unscharfer background (good for Overlays) -->
<div class="filter-bg-blur">
  <p>content on unscharfem background</p>
</div>

<!-- Abgedunkelter background -->
<div class="filter-bg-dim">
  <p>content on abgedunkeltem background</p>
</div>

<!-- Heller background -->
<div class="filter-bg-brighten">
  <p>content on aufgehelltem background</p>
</div>

<!-- Kontrasterhohter background -->
<div class="filter-bg-contrast">
  <p>content on kontrastreicherem background</p>
</div>
```

## SVG-Filter

Spezielle Filter for SVG-elements:

```html
<!-- SVG-Farbanpassung -->
<svg class="filter-svg-recolor">...</svg>

<!-- SVG-Schatteneffekt -->
<svg class="filter-svg-shadow">...</svg>

<!-- SVG-Gluheffekt -->
<svg class="filter-svg-glow">...</svg>

<!-- SVG-Textureffekt -->
<svg class="filter-svg-texture">...</svg>
```

## Interaktive Filter

Filter, the on interactions reagieren:

```html
<!-- Hover-Filter -->
<img class="filter-hover-blur" src="image.jpg" alt="Wird at Hover unscharf">
<img class="filter-hover-brighten" src="image.jpg" alt="Wird at Hover heller">
<img class="filter-hover-contrast" src="image.jpg" alt="Erhoht Kontrast at Hover">
<img class="filter-hover-grayscale" src="image.jpg" alt="Wird at Hover to Graustufen">
<img class="filter-hover-sepia" src="image.jpg" alt="Wird at Hover to Sepia">

<!-- Fokus-Filter (for interaktive elements) -->
<button class="filter-focus-glow">button with Glow-effect at Fokus</button>

<!-- Aktive Filter -->
<button class="filter-active-dim">button wird at Aktivierung abgedunkelt</button>
```

## transition-effects for Filter

Sanfte Ubergange between Filterzustanden:

```html
<!-- Base-Filtertransition -->
<img class="filter-transition" src="image.jpg" alt="Sanfter transition at Filteranderung">

<!-- Kombiniert with Hover -->
<img class="filter-grayscale filter-hover-color filter-transition" src="image.jpg" 
     alt="Wechselt sanft from Graustufen to color at Hover">
```

## Customization over CSS Variables

the Filter can over CSS Variables angepasst become:

```css
:root {
  /* Base-Filter-parameter */
  --filter-blur-sm: 2px;
  --filter-blur-md: 5px;
  --filter-blur-lg: 10px;
  
  --filter-brightness-dim: 75%;
  --filter-brightness-normal: 100%;
  --filter-brightness-bright: 125%;
  
  --filter-contrast-low: 75%;
  --filter-contrast-normal: 100%;
  --filter-contrast-high: 150%;
  
  --filter-saturate-muted: 75%;
  --filter-saturate-normal: 100%;
  --filter-saturate-vibrant: 150%;
  
  --filter-hue-rotate-90: 90deg;
  --filter-hue-rotate-180: 180deg;
  --filter-hue-rotate-270: 270deg;
  
  /* Kombinierte Filter */
  --filter-vintage: sepia(30%) brightness(95%) saturate(90%);
  --filter-warm: brightness(105%) saturate(110%) sepia(20%);
  --filter-cool: brightness(100%) saturate(100%) hue-rotate(30deg);
  --filter-dramatic: contrast(120%) brightness(90%) saturate(120%);
  --filter-bw-high-contrast: grayscale(100%) contrast(150%) brightness(90%);
  
  /* Drop-Shadow Filter */
  --filter-drop-shadow-sm: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  --filter-drop-shadow-md: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  --filter-drop-shadow-lg: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}
```

## Medienbedingungen for Filter

```css
/* Reduzierte Filtereffekte im Dunkelmodus */
@media (prefers-color-scheme: dark) {
  :root {
    --filter-brightness-bright: 115%;
    --filter-contrast-high: 130%;
    --filter-vintage: sepia(20%) brightness(90%) saturate(85%);
  }
  
  /* Automatische Invertierung im Dunkelmodus verhindern */
  .filter-invert {
    filter: none;
  }
  
  /* Spezielle Dunkelmodus-Filter */
  .filter-dark-mode-friendly {
    filter: brightness(90%) contrast(105%);
  }
}

/* Reduzierte Filter for Nutzer, the reduzierte Bewegung bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .filter-transition {
    transition: none !important;
  }
}

/* Hoher Kontrast Modus */
@media (prefers-contrast: more) {
  .filter-low-contrast,
  .filter-blur,
  .filter-vintage,
  .filter-nostalgic {
    filter: none;
  }
  
  .filter-high-contrast-mode {
    filter: contrast(150%);
  }
}
```

## Accessibility-Uberlegungen

at Filtern sind several Aspekte the Accessibility to note:

1. **Kontrast and Lesbarkeit**: ensure, that Filter the Lesbarkeit from Text not beeintrachtigen
2. **Farbfehlsichtigkeit**: Berucksichtigen them, that some Filter problematisch for Menschen with Farbfehlsichtigkeit be can
3. **Bewegungsempfindlichkeit**: Filter-transitions can for some Nutzer problematisch be
4. **Hoher Kontrast**: Respektieren them Systemeinstellungen for hohen Kontrast

```css
/* Example for barrierefreie Filteranwendung */
.accessible-filter {
  filter: var(--filter-accessible);
}

@media (prefers-contrast: more) {
  :root {
    --filter-accessible: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .filter-transition {
    transition: none !important;
  }
}
```

## Performance-Uberlegungen

Filter can rechenintensiv be:

1. **use them `will-change: filter`** for wichtige animierte Filter
2. **Vermeide Filter on sizes Elementen**, besonders on mobilen Geraten
3. **combine them Filter** instead of several filterbehaftete elements to stapeln
4. **Testen them on mobilen Geraten**, um the Leistung to uberprufen

## Praktische Examples

### Bildergalerie with verschiedenen Filtern

```html
<div class="image-gallery">
  <figure>
    <img class="filter-original" src="image1.jpg" alt="Originalbild">
    <figcaption>Original</figcaption>
  </figure>
  <figure>
    <img class="filter-vintage" src="image1.jpg" alt="Vintage-effect">
    <figcaption>Vintage</figcaption>
  </figure>
  <figure>
    <img class="filter-cool" src="image1.jpg" alt="Kuhler effect">
    <figcaption>Kuhl</figcaption>
  </figure>
  <figure>
    <img class="filter-bw-high-contrast" src="image1.jpg" alt="Schwarz-Weiss">
    <figcaption>Schwarz-Weiss</figcaption>
  </figure>
</div>
```

### Hero-area with gefilterten background

```html
<section class="hero">
  <div class="hero-background filter-blur-lg filter-brightness-50"></div>
  <div class="hero-content">
    <h1>Willkommen</h1>
    <p>Text on einem unscharfen, abgedunkelten background</p>
  </div>
</section>
```

### Interaktive Card with Hover-effect

```html
<div class="card filter-grayscale filter-hover-color filter-transition">
  <img src="product.jpg" alt="Produkt">
  <div class="card-content">
    <h3>Produktname</h3>
    <p>Produktbeschreibung</p>
    <span class="price">€29,99</span>
  </div>
</div>
```

## Best Practices

1. **Sparsam einsetzen**: Filter should the Nutzererfahrung verbessern, not ablenken
2. **state kommunizieren**: use them Filter, um interaktive States to verdeutlichen
3. **Performance note**: Beschranken them the Anzahl the gefilterten elements
4. **Barrierefrei gestalten**: ensure, that gefilterte contents for all zuganglich bleiben
5. **responsive customize**: Reduzieren them the Intensitat from Filtern on mobilen Geraten 
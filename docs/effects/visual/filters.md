---
title: Filter-Effekte
category: Guide
---

# Filter-Effekte

Die `filters.css` Datei bietet eine umfangreiche Sammlung von visuellen Filtereffekten, die zur Manipulation von Bildern, Hintergründen und anderen UI-Elementen eingesetzt werden können. Diese Filter basieren auf den CSS-Filterfunktionen und ermöglichen zahlreiche visuelle Customizations ohne den Einsatz von Grafikprogrammen.

## Overview

Mit CSS-Filtern können Sie Colors anpassen, Helligkeits- und Kontraständerungen vornehmen, Unschärfeeffekte hinzufügen und vieles mehr. Die Casoon UI Library bietet eine Sammlung vorgefertigter Filter sowie kombinierte Effekte für typische Use Cases.

## Basis-Filter

```html
<!-- Unschärfe-Filter -->
<img class="filter-blur-sm" src="image.jpg" alt="Leicht unscharfes Bild">
<img class="filter-blur" src="image.jpg" alt="Unscharfes Bild">
<img class="filter-blur-lg" src="image.jpg" alt="Stark unscharfes Bild">

<!-- Helligkeit-Filter -->
<img class="filter-brightness-50" src="image.jpg" alt="Dunkleres Bild (50%)">
<img class="filter-brightness-150" src="image.jpg" alt="Helleres Bild (150%)">

<!-- Kontrast-Filter -->
<img class="filter-contrast-50" src="image.jpg" alt="Niedriger Kontrast (50%)">
<img class="filter-contrast-150" src="image.jpg" alt="Hoher Kontrast (150%)">

<!-- Graustufenfilter -->
<img class="filter-grayscale" src="image.jpg" alt="Graustufenbild">
<img class="filter-grayscale-50" src="image.jpg" alt="Teilweise Graustufen (50%)">

<!-- Sepia-Filter -->
<img class="filter-sepia" src="image.jpg" alt="Sepia-Effekt">
<img class="filter-sepia-50" src="image.jpg" alt="Teilweise Sepia (50%)">

<!-- Farbton-Rotation -->
<img class="filter-hue-rotate-90" src="image.jpg" alt="Farbton um 90° rotiert">
<img class="filter-hue-rotate-180" src="image.jpg" alt="Farbton um 180° rotiert">
<img class="filter-hue-rotate-270" src="image.jpg" alt="Farbton um 270° rotiert">

<!-- Invertierung -->
<img class="filter-invert" src="image.jpg" alt="Invertiertes Bild">
<img class="filter-invert-50" src="image.jpg" alt="Teilweise invertiert (50%)">

<!-- Sättigung -->
<img class="filter-saturate-0" src="image.jpg" alt="Keine Sättigung (Graustufen)">
<img class="filter-saturate-50" src="image.jpg" alt="Niedrige Sättigung (50%)">
<img class="filter-saturate-150" src="image.jpg" alt="Hohe Sättigung (150%)">
<img class="filter-saturate-200" src="image.jpg" alt="Sehr hohe Sättigung (200%)">

<!-- Transparenz (Opacity) -->
<img class="filter-opacity-25" src="image.jpg" alt="25% Deckkraft">
<img class="filter-opacity-50" src="image.jpg" alt="50% Deckkraft">
<img class="filter-opacity-75" src="image.jpg" alt="75% Deckkraft">

<!-- Schattierung (Drop Shadow) -->
<img class="filter-drop-shadow" src="image.jpg" alt="Bild mit Schatten">
<img class="filter-drop-shadow-sm" src="image.jpg" alt="Bild mit kleinem Schatten">
<img class="filter-drop-shadow-lg" src="image.jpg" alt="Bild mit großem Schatten">
```

## Kombinierte Filter-Effekte

Voreingestellte Kombinationen für gängige Bildeffekte:

```html
<!-- Vintage-Effekt -->
<img class="filter-vintage" src="image.jpg" alt="Vintage-Foto-Effekt">

<!-- Schwarz-Weiß mit hohem Kontrast -->
<img class="filter-bw-high-contrast" src="image.jpg" alt="Kontrastreiches Schwarz-Weiß-Bild">

<!-- Warmer Farbton -->
<img class="filter-warm" src="image.jpg" alt="Warmer Farbeffekt">

<!-- Kühler Farbton -->
<img class="filter-cool" src="image.jpg" alt="Kühler Farbeffekt">

<!-- Dramatischer Effekt -->
<img class="filter-dramatic" src="image.jpg" alt="Dramatischer Bildeffekt">

<!-- Nostalgischer Effekt -->
<img class="filter-nostalgic" src="image.jpg" alt="Nostalgischer Bildeffekt">

<!-- Filmisches Look -->
<img class="filter-cinematic" src="image.jpg" alt="Filmischer Bildeffekt">

<!-- Weichzeichnung für Porträts -->
<img class="filter-soft-portrait" src="image.jpg" alt="Weichgezeichnetes Porträt">

<!-- Duotone-Effekt (Zwei Colors) -->
<img class="filter-duotone-blue-red" src="image.jpg" alt="Blau-Rot Duotone">
<img class="filter-duotone-purple-yellow" src="image.jpg" alt="Lila-Gelb Duotone">
```

## Text-Filter

Filter für Text-Elemente:

```html
<!-- Weichgezeichneter Text -->
<h2 class="filter-text-blur">Verschwommener Text</h2>

<!-- Text mit Schatten -->
<h2 class="filter-text-shadow">Text mit Schatten</h2>

<!-- Leuchtender Text (Glow) -->
<h2 class="filter-text-glow">Leuchtender Text</h2>

<!-- Invertierter Text (gut für Dark Mode) -->
<h2 class="filter-text-invert">Invertierter Text</h2>
```

## Hintergrund-Filter

Für Hintergründe und Container:

```html
<!-- Unscharfer Hintergrund (gut für Overlays) -->
<div class="filter-bg-blur">
  <p>Inhalt auf unscharfem Hintergrund</p>
</div>

<!-- Abgedunkelter Hintergrund -->
<div class="filter-bg-dim">
  <p>Inhalt auf abgedunkeltem Hintergrund</p>
</div>

<!-- Heller Hintergrund -->
<div class="filter-bg-brighten">
  <p>Inhalt auf aufgehelltem Hintergrund</p>
</div>

<!-- Kontrasterhöhter Hintergrund -->
<div class="filter-bg-contrast">
  <p>Inhalt auf kontrastreicherem Hintergrund</p>
</div>
```

## SVG-Filter

Spezielle Filter für SVG-Elemente:

```html
<!-- SVG-Farbanpassung -->
<svg class="filter-svg-recolor">...</svg>

<!-- SVG-Schatteneffekt -->
<svg class="filter-svg-shadow">...</svg>

<!-- SVG-Glüheffekt -->
<svg class="filter-svg-glow">...</svg>

<!-- SVG-Textureffekt -->
<svg class="filter-svg-texture">...</svg>
```

## Interaktive Filter

Filter, die auf Interaktionen reagieren:

```html
<!-- Hover-Filter -->
<img class="filter-hover-blur" src="image.jpg" alt="Wird bei Hover unscharf">
<img class="filter-hover-brighten" src="image.jpg" alt="Wird bei Hover heller">
<img class="filter-hover-contrast" src="image.jpg" alt="Erhöht Kontrast bei Hover">
<img class="filter-hover-grayscale" src="image.jpg" alt="Wird bei Hover zu Graustufen">
<img class="filter-hover-sepia" src="image.jpg" alt="Wird bei Hover zu Sepia">

<!-- Fokus-Filter (für interaktive Elemente) -->
<button class="filter-focus-glow">Button mit Glow-Effekt bei Fokus</button>

<!-- Aktive Filter -->
<button class="filter-active-dim">Button wird bei Aktivierung abgedunkelt</button>
```

## Transition-Effekte für Filter

Sanfte Übergänge zwischen Filterzuständen:

```html
<!-- Basis-Filtertransition -->
<img class="filter-transition" src="image.jpg" alt="Sanfter Übergang bei Filteränderung">

<!-- Kombiniert mit Hover -->
<img class="filter-grayscale filter-hover-color filter-transition" src="image.jpg" 
     alt="Wechselt sanft von Graustufen zu Farbe bei Hover">
```

## Anpassung über CSS Variables

Die Filter können über CSS Variables angepasst werden:

```css
:root {
  /* Basis-Filter-Parameter */
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

## Medienbedingungen für Filter

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

/* Reduzierte Filter für Nutzer, die reduzierte Bewegung bevorzugen */
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

## Accessibility-Überlegungen

Bei Filtern sind mehrere Aspekte der Accessibility zu beachten:

1. **Kontrast und Lesbarkeit**: Stellen Sie sicher, dass Filter die Lesbarkeit von Text nicht beeinträchtigen
2. **Farbfehlsichtigkeit**: Berücksichtigen Sie, dass manche Filter problematisch für Menschen mit Farbfehlsichtigkeit sein können
3. **Bewegungsempfindlichkeit**: Filter-Transitionen können für manche Nutzer problematisch sein
4. **Hoher Kontrast**: Respektieren Sie Systemeinstellungen für hohen Kontrast

```css
/* Example für barrierefreie Filteranwendung */
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

## Performance-Überlegungen

Filter können rechenintensiv sein:

1. **Verwenden Sie `will-change: filter`** für wichtige animierte Filter
2. **Vermeide Filter auf großen Elementen**, besonders auf mobilen Geräten
3. **Kombinieren Sie Filter** statt mehrere filterbehaftete Elemente zu stapeln
4. **Testen Sie auf mobilen Geräten**, um die Leistung zu überprüfen

## Praktische Examples

### Bildergalerie mit verschiedenen Filtern

```html
<div class="image-gallery">
  <figure>
    <img class="filter-original" src="image1.jpg" alt="Originalbild">
    <figcaption>Original</figcaption>
  </figure>
  <figure>
    <img class="filter-vintage" src="image1.jpg" alt="Vintage-Effekt">
    <figcaption>Vintage</figcaption>
  </figure>
  <figure>
    <img class="filter-cool" src="image1.jpg" alt="Kühler Effekt">
    <figcaption>Kühl</figcaption>
  </figure>
  <figure>
    <img class="filter-bw-high-contrast" src="image1.jpg" alt="Schwarz-Weiß">
    <figcaption>Schwarz-Weiß</figcaption>
  </figure>
</div>
```

### Hero-Bereich mit gefilterten Hintergrund

```html
<section class="hero">
  <div class="hero-background filter-blur-lg filter-brightness-50"></div>
  <div class="hero-content">
    <h1>Willkommen</h1>
    <p>Text auf einem unscharfen, abgedunkelten Hintergrund</p>
  </div>
</section>
```

### Interaktive Card mit Hover-Effekt

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

1. **Sparsam einsetzen**: Filter sollten die Nutzererfahrung verbessern, nicht ablenken
2. **Zustand kommunizieren**: Verwenden Sie Filter, um interaktive States zu verdeutlichen
3. **Performance beachten**: Beschränken Sie die Anzahl der gefilterten Elemente
4. **Barrierefrei gestalten**: Stellen Sie sicher, dass gefilterte Inhalte für alle zugänglich bleiben
5. **Responsive anpassen**: Reduzieren Sie die Intensität von Filtern auf mobilen Geräten 
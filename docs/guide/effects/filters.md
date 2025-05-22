---
title: Filter-Effekte
category: Effects
---

# Filter-Effekte

Die Filter-Effekte der Casoon UI Library bieten eine umfassende Sammlung von CSS-Filtern, mit denen Sie visuelle Effekte auf Ihre UI-Elemente anwenden können.

## Überblick

Die Filter-Effekte sind leistungsoptimiert und respektieren die Präferenzen der Benutzer für reduzierte Bewegung. Sie können verwendet werden, um Unschärfe, Helligkeit, Kontrast und andere visuelle Effekte auf Ihre Elemente anzuwenden.

## Installation

Importieren Sie das Filter-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/filters.css';
```

## Grundlegende Filter

### Blur-Filter

Fügt einen Unschärfeeffekt hinzu.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-blur` | Standard-Unschärfeeffekt |
| `.filter-blur-sm` | Leichte Unschärfe |
| `.filter-blur-md` | Mittlere Unschärfe |
| `.filter-blur-lg` | Starke Unschärfe |

```html
<img src="image.jpg" class="filter-blur" alt="Verschwommenes Bild">
<img src="image.jpg" class="filter-blur-sm" alt="Leicht verschwommenes Bild">
```

### Helligkeit-Filter

Passt die Helligkeit eines Elements an.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-brightness` | Standard-Helligkeitseffekt (120%) |
| `.filter-brightness-sm` | Leicht erhöhte Helligkeit (110%) |
| `.filter-brightness-lg` | Stark erhöhte Helligkeit (150%) |
| `.filter-brightness-dim` | Verringerte Helligkeit (80%) |
| `.filter-brightness-dark` | Stark verringerte Helligkeit (50%) |

```html
<img src="image.jpg" class="filter-brightness" alt="Helleres Bild">
<img src="image.jpg" class="filter-brightness-dim" alt="Dunkleres Bild">
```

### Kontrast-Filter

Passt den Kontrast eines Elements an.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-contrast` | Standard-Kontrasteffekt (120%) |
| `.filter-contrast-sm` | Leicht erhöhter Kontrast (110%) |
| `.filter-contrast-lg` | Stark erhöhter Kontrast (150%) |
| `.filter-contrast-low` | Verringerter Kontrast (80%) |

```html
<img src="image.jpg" class="filter-contrast" alt="Kontrastreicheres Bild">
```

### Graustufen-Filter

Konvertiert ein Element in Graustufen.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-grayscale` | Vollständige Graustufen (100%) |
| `.filter-grayscale-50` | Teilweise Graustufen (50%) |

```html
<img src="image.jpg" class="filter-grayscale" alt="Schwarz-Weiß-Bild">
<img src="image.jpg" class="filter-grayscale-50" alt="Teilweise entsättigtes Bild">
```

### Farbton-Rotation

Rotiert die Farben eines Elements.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-hue-rotate` | Standard-Farbtonrotation (180deg) |
| `.filter-hue-rotate-90` | 90-Grad-Farbtonrotation |
| `.filter-hue-rotate-270` | 270-Grad-Farbtonrotation |

```html
<img src="image.jpg" class="filter-hue-rotate" alt="Farbton rotiert">
```

### Invertierung

Invertiert die Farben eines Elements.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-invert` | Vollständige Farbinvertierung (100%) |
| `.filter-invert-50` | Teilweise Farbinvertierung (50%) |

```html
<img src="image.jpg" class="filter-invert" alt="Invertiertes Bild">
```

### Sättigung

Passt die Farbsättigung eines Elements an.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-saturate` | Erhöhte Sättigung (150%) |
| `.filter-saturate-high` | Stark erhöhte Sättigung (200%) |
| `.filter-saturate-low` | Verringerte Sättigung (50%) |

```html
<img src="image.jpg" class="filter-saturate" alt="Gesättigteres Bild">
<img src="image.jpg" class="filter-saturate-low" alt="Weniger gesättigtes Bild">
```

### Sepia

Wendet einen Sepia-Effekt an.

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-sepia` | Vollständiger Sepia-Effekt (100%) |
| `.filter-sepia-50` | Teilweiser Sepia-Effekt (50%) |

```html
<img src="image.jpg" class="filter-sepia" alt="Sepia-getöntes Bild">
```

## Kombinierte Filter-Effekte

Die Casoon UI Library bietet auch vordefinierte kombinierte Filter-Effekte für häufig verwendete Looks:

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-vintage` | Vintage-Look (Sepia + Kontrast + Helligkeit) |
| `.filter-cool` | Kühler Look (Bläuliche Tönung) |
| `.filter-warm` | Warmer Look (Gelbliche Tönung) |
| `.filter-dramatic` | Dramatischer Look (Hoher Kontrast + Sättigung) |
| `.filter-soft` | Weicher Look (Leichte Unschärfe + Helligkeit) |

```html
<img src="image.jpg" class="filter-vintage" alt="Vintage-Look">
<img src="image.jpg" class="filter-cool" alt="Kühler Look">
```

## Hover-Filter-Effekte

Die Library bietet auch Filter-Effekte, die nur bei Hover aktiviert werden:

| Klasse | Beschreibung |
|--------|-------------|
| `.filter-hover` | Standard-Filter-Effekt bei Hover |
| `.filter-hover-sm` | Leichter Filter-Effekt bei Hover |
| `.filter-hover-lg` | Starker Filter-Effekt bei Hover |

```html
<img src="image.jpg" class="filter-hover" alt="Bild mit Hover-Effekt">
```

## Anpassung

Die Filter-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --filter-blur: 4px;
  --filter-blur-sm: 2px;
  --filter-blur-md: 8px;
  --filter-blur-lg: 16px;
  
  --filter-brightness: 1.2;
  --filter-brightness-sm: 1.1;
  --filter-brightness-lg: 1.5;
  --filter-brightness-dim: 0.8;
  --filter-brightness-dark: 0.5;
  
  --filter-contrast: 1.2;
  --filter-contrast-sm: 1.1;
  --filter-contrast-lg: 1.5;
  --filter-contrast-low: 0.8;
  
  --filter-grayscale: 1;
  --filter-grayscale-50: 0.5;
  
  --filter-hue-rotate: 180deg;
  --filter-hue-rotate-90: 90deg;
  --filter-hue-rotate-270: 270deg;
  
  --filter-invert: 1;
  --filter-invert-50: 0.5;
  
  --filter-saturate: 1.5;
  --filter-saturate-high: 2;
  --filter-saturate-low: 0.5;
  
  --filter-sepia: 1;
  --filter-sepia-50: 0.5;
}
```

## Barrierefreiheit

Um die Barrierefreiheit zu verbessern, respektieren die Filter-Effekte die Benutzereinstellung `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .filter-hover,
  .filter-hover-sm,
  .filter-hover-lg {
    transition: none !important;
  }
}
```

## Browserunterstützung

Die Filter-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser, die CSS-Filter nicht unterstützen, wird ein Fallback bereitgestellt. 
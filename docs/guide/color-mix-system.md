---
title: Color-Mix system
category: Guide
---

# Color-Mix system

the Color-Mix system the Casoon UI Library ermoglicht the dynamische Erstellung from Farbvariationen and -mischungen through modernes CSS. it nutzt the `color-mix()` Function and others CSS-Features, um a flexibles and umfassendes Color system to schaffen.

## Importing Modules

the Color-Mix system ist Teil des Layer Systems and wird automatisch geladen, If you the `core.css` file import:

```css
@import '@casoon/ui-lib/core.css';
```

the Reihenfolge the Layer ist important, wobei the `color-mix` Layer after dem `colors` Layer geladen wird:

```css
@layer reset,
       tokens,
       core,
       logical-properties,
       colors,              /* Basisfarben */
       color-mix,           /* Farbmischungen */
       ...                  /* additional Layer */
```

## Grundlegendes concept

the Color-Mix system baut on den grundlegenden Farb-Tokens on and ermoglicht:

1. **Farbmischungen**: combine from zwei or more Colors with unterschiedlichen Prozentanteilen
2. **Farbvariationen**: create from helleren or dunkleren Variants einer Basisfarbe
3. **Farbuberlagerungen**: Uberlagern einer color with einer anderen for spezielle effects
4. **Dynamische Farbberechnung**: Automatische Berechnung from kontrastierenden or harmonischen Colors

## Farbmischungen

the `color-mix()` Function ermoglicht the Mischen from Colors:

```css
.mixed-color {
  /* 40% Blau gemischt with 60% Rot */
  color: color-mix(in srgb, var(--color-blue-500) 40%, var(--color-red-500) 60%);
}
```

### Verfugbare Mischklassen

```css
.color-mix-primary-20-secondary {
  /* 20% Primarfarbe gemischt with 80% Sekundarfarbe */
  color: color-mix(in srgb, var(--color-primary) 20%, var(--color-secondary) 80%);
}

.bg-mix-accent-50-white {
  /* 50% Akzentfarbe gemischt with 50% Weiss */
  background-color: color-mix(in srgb, var(--color-accent) 50%, white 50%);
}
```

## Transparenzmischungen

Mischen from Colors with transparency:

```css
.overlay-primary-30 {
  /* 30% durchsichtige Primarfarbe over dem background */
  background-color: color-mix(in srgb, var(--color-primary) 30%, transparent 70%);
}

.text-primary-semitransparent {
  /* Halbdurchsichtige Primarfarbe for Text */
  color: color-mix(in srgb, var(--color-primary) 50%, transparent 50%);
}
```

## Farbvariationen

### Aufhellen and Abdunkeln

```css
.primary-lighter-10 {
  /* 10% hellere Primarfarbe */
  color: color-mix(in srgb, var(--color-primary) 90%, white 10%);
}

.primary-darker-20 {
  /* 20% dunklere Primarfarbe */
  color: color-mix(in srgb, var(--color-primary) 80%, black 20%);
}
```

### Vordefinierte Helligkeitsvarianten

```css
:root {
  /* Primarfarbe Helligkeitsvarianten */
  --color-primary-100: color-mix(in srgb, var(--color-primary) 10%, white 90%);
  --color-primary-200: color-mix(in srgb, var(--color-primary) 20%, white 80%);
  --color-primary-300: color-mix(in srgb, var(--color-primary) 30%, white 70%);
  --color-primary-400: color-mix(in srgb, var(--color-primary) 40%, white 60%);
  --color-primary-500: var(--color-primary);
  --color-primary-600: color-mix(in srgb, var(--color-primary) 90%, black 10%);
  --color-primary-700: color-mix(in srgb, var(--color-primary) 80%, black 20%);
  --color-primary-800: color-mix(in srgb, var(--color-primary) 70%, black 30%);
  --color-primary-900: color-mix(in srgb, var(--color-primary) 60%, black 40%);
}
```

## Kontrastfarben

the Color-Mix system kann also verwendet become, um Kontrastfarben for Text on verschiedenen Hintergrunden to berechnen:

```css
.card {
  background-color: var(--color-primary);
  /* Text ist automatisch schwarzer or weisser Text, abhangig vom Kontrast */
  color: var(--color-primary-contrast);
}
```

the Kontrastfarben become automatisch berechnet:

```css
:root {
  --color-primary-contrast: color-contrast(var(--color-primary) vs black, white);
  --color-secondary-contrast: color-contrast(var(--color-secondary) vs black, white);
  --color-accent-contrast: color-contrast(var(--color-accent) vs black, white);
}
```

## Usage in Utility-classes

the Color-Mix system wird in vielen Utility-classes verwendet:

```css
.text-primary-light {
  color: var(--color-primary-300);
}

.bg-primary-dark {
  background-color: var(--color-primary-700);
}

.border-primary-semi {
  border-color: color-mix(in srgb, var(--color-primary) 50%, transparent 50%);
}
```

## Usagesbeispiele

### Buttonn with Hover-effect

```css
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.button-primary:hover {
  /* Dunklere version at Hover */
  background-color: var(--color-primary-600);
}
```

### Cardn with gradient

```css
.card-gradient {
  background: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary-700)
  );
  color: var(--color-primary-contrast);
}
```

### notifications with transparency

```css
.alert-info {
  background-color: var(--color-info-100);
  border: 1px solid var(--color-info-300);
  color: var(--color-info-800);
}

.toast-notification {
  background-color: color-mix(in srgb, var(--color-gray-900) 90%, transparent 10%);
  color: white;
  backdrop-filter: blur(8px);
}
```

## Farbmodi and -themen

the Color-Mix system arbeitet nahtlos with dem Theming-system zusammen:

```css
:root {
  --color-primary: #4a90e2;
}

[data-theme="dark"] {
  --color-primary: #2b5797;

  /* these become automatisch neu berechnet basierend on dem neuen Primarwert */
  /* --color-primary-100 until --color-primary-900 */
}
```

## Lightning CSS Optimierung

the Color-Mix system ist for Lightning CSS optimiert:

1. **Vorberechnung**: Lightning CSS kann `color-mix()` functions vorab berechnen and optimieren
2. **Browserkompatibilitat**: for altere Browser become Fallbacks generiert
3. **Performance**: Optimierte CSS-Dateigrosse for schnellere Ladezeiten
4. **Minimale Redundanz**: Berechnet Mischungen einmal and verwendet them wiederholt

## Best Practices

1. **Consistency bewahren**: use them the Color-Mix system for all Farbvariationen, anstatt hartcodierte Farbwerte to define
2. **Semantische Farbnamen use**: Benennen them Colors after ihrer Function, not after ihrem Aussehen
3. **ensure them on Kontrast**: Prufen them, whether Ihre gemischten Colors the WCAG-Richtlinien for Accessibility erfullen
4. **Sparsam with transparency umgehen**: Ubermassige transparency kann the Lesbarkeit beeintrachtigen
5. **CSS Variables for Zwischenergebnisse**: define them haufig verwendete Mischungen as CSS Variables

## Customization des Color-Mix Systems

You can the Color-Mix system extend or customize, indem them own Mischungen define:

```css
/* Ihre own CSS-file */
@import "@casoon/ui-lib/core.css";

@layer color-mix {
  :root {
    /* own Farbmischungen define */
    --color-brand-highlight: color-mix(in srgb, var(--color-brand) 70%, var(--color-accent) 30%);
    --color-custom-overlay: color-mix(in srgb, var(--color-primary) 40%, transparent 60%);
  }

  /* own Utility-classes for Ihre Farbmischungen */
  .bg-brand-highlight {
    background-color: var(--color-brand-highlight);
  }

  .text-brand-highlight {
    color: var(--color-brand-highlight);
  }
}
``` 

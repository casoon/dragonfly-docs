---
title: Color system
category: Guide
---

# Color system

the Color system the Casoon UI Library bietet a umfassende and flexible Method zur Verwaltung and Application from Colors in Ihrer Benutzeroberflache. it kombiniert a good strukturiertes Token-system with modernen CSS-Techniken for maximale Flexibility.

## Importing Modules

the komplette Color system wird automatisch geladen, If you the `core.css` file import:

```css
@import '@casoon/ui-lib/core.css';
```

the Reihenfolge the Layer ist entscheidend, wobei the `colors` Layer after den grundlegenden Tokens geladen wird:

```css
@layer reset,
       tokens,              /* Grundlegende design Tokens */
       core,
       logical-properties,
       colors,              /* Basisfarben and Farbklassen */
       color-mix,           /* Farbmischungen and -varianten */
       ...                  /* additional Layer */
```

## Farbpalette

the Farbpalette the Casoon UI Library besteht aus mehreren Arten from Farbdefinitionen:

### Primare Farbpalette

the Basisfarben define the grundlegende Identitat Ihrer Application:

```css
:root {
  /* Primarfarbe and Variants */
  --color-primary: #4a90e2;
  --color-primary-light: #6ba5e7;
  --color-primary-dark: #3570b2;

  /* Sekundarfarbe and Variants */
  --color-secondary: #6c757d;
  --color-secondary-light: #868e96;
  --color-secondary-dark: #495057;

  /* Akzentfarbe and Variants */
  --color-accent: #f8a100;
  --color-accent-light: #ffc107;
  --color-accent-dark: #e67700;
}
```

### Funktionale Colors

for semantische Bedeutungen gibt it spezielle Funktionsfarben:

```css
:root {
  /* success */
  --color-success: #28a745;
  --color-success-light: #48c664;
  --color-success-dark: #1e7e34;

  /* warning */
  --color-warning: #ffc107;
  --color-warning-light: #ffda6a;
  --color-warning-dark: #e0a800;

  /* errors */
  --color-error: #dc3545;
  --color-error-light: #e4606d;
  --color-error-dark: #bd2130;

  /* Information */
  --color-info: #17a2b8;
  --color-info-light: #3dd5f3;
  --color-info-dark: #138496;
}
```

### Neutrale Colors

a umfassende Grau-Palette dient as Base for Text, Hintergrunde and Rander:

```css
:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;

  /* Grundlegende Schwarz/Weiss-Tone */
  --color-white: #ffffff;
  --color-black: #000000;
}
```

### Erweiterte Farbpalette

Zusatzlich to den Basisfarben bietet the system a erweiterte Palette with 9 Stufen for jede Hauptfarbe:

```css
:root {
  /* Blau-Palette */
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-200: #bfdbfe;
  --color-blue-300: #93c5fd;
  --color-blue-400: #60a5fa;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --color-blue-800: #1e40af;
  --color-blue-900: #1e3a8a;

  /* Rote Palette */
  --color-red-50: #fef2f2;
  --color-red-100: #fee2e2;
  /* ... additional Rot-Stufen ... */
  --color-red-900: #7f1d1d;

  /* additional Farbpaletten (Grun, Gelb, Lila, etc.) with jeweils 9 Stufen */
}
```

## Semantische Farbverwendung

the Color system erleichtert the semantische Usage from Colors for unterschiedliche UI-elements:

```css
:root {
  /* Text-Colors */
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-700);
  --text-tertiary: var(--color-gray-500);
  --text-disabled: var(--color-gray-400);
  --text-inverse: var(--color-white);

  /* background-Colors */
  --bg-body: var(--color-white);
  --bg-surface: var(--color-gray-50);
  --bg-elevation-1: var(--color-white);
  --bg-elevation-2: var(--color-gray-50);
  --bg-disabled: var(--color-gray-200);

  /* margin-Colors */
  --border-light: var(--color-gray-200);
  --border-medium: var(--color-gray-300);
  --border-strong: var(--color-gray-400);
  --border-focus: var(--color-primary);
}
```

## Utility-classes for Colors

the Color system bietet praktische Utility-classes for schnelles Styling:

### Hintergrundfarben

```html
<div class="bg-primary">Primarfarbe as background</div>
<div class="bg-secondary">Sekundarfarbe as background</div>
<div class="bg-success">Erfolgsfarbe as background</div>
<div class="bg-warning">Warnfarbe as background</div>
<div class="bg-error">Fehlerfarbe as background</div>
<div class="bg-info">Infofarbe as background</div>

<!-- Variants -->
<div class="bg-primary-light">Hellere Primarfarbe</div>
<div class="bg-primary-dark">Dunklere Primarfarbe</div>

<!-- Neutrale Colors -->
<div class="bg-gray-100">very helles Grau</div>
<div class="bg-gray-900">very dunkles Grau</div>
```

### Textfarben

```html
<p class="text-primary">Text in Primarfarbe</p>
<p class="text-secondary">Text in Sekundarfarbe</p>
<p class="text-success">Text in Erfolgsfarbe</p>
<p class="text-warning">Text in Warnfarbe</p>
<p class="text-error">Text in Fehlerfarbe</p>
<p class="text-info">Text in Infofarbe</p>

<!-- Variants -->
<p class="text-primary-light">Text in hellerer Primarfarbe</p>
<p class="text-primary-dark">Text in dunklerer Primarfarbe</p>

<!-- Neutrale Colors -->
<p class="text-gray-500">Mittleres Grau</p>
<p class="text-white">Weisser Text</p>
<p class="text-black">Schwarzer Text</p>
```

### Randfarben

```html
<div class="border border-primary">margin in Primarfarbe</div>
<div class="border border-secondary">margin in Sekundarfarbe</div>
<div class="border border-success">margin in Erfolgsfarbe</div>
<div class="border border-warning">margin in Warnfarbe</div>
<div class="border border-error">margin in Fehlerfarbe</div>
<div class="border border-info">margin in Infofarbe</div>

<!-- Variants -->
<div class="border border-primary-light">margin in hellerer Primarfarbe</div>
<div class="border border-primary-dark">margin in dunklerer Primarfarbe</div>

<!-- Neutrale Colors -->
<div class="border border-gray-300">margin in hellem Grau</div>
```

## Dynamische Colors with CSS Color-Mix

the Color system unterstutzt dynamische Farbberechnungen with the CSS `color-mix()`-Function:

```css
:root {
  /* Automatisch berechnete Farbvarianten */
  --color-primary-10: color-mix(in srgb, var(--color-primary) 10%, white 90%);
  --color-primary-20: color-mix(in srgb, var(--color-primary) 20%, white 80%);
  --color-primary-90: color-mix(in srgb, var(--color-primary) 90%, black 10%);
  --color-primary-95: color-mix(in srgb, var(--color-primary) 95%, black 5%);

  /* Mischungen verschiedener Colors */
  --color-primary-accent: color-mix(in srgb, var(--color-primary) 60%, var(--color-accent) 40%);
}
```

more Details zum Color-Mix system finden them in the [Color-Mix Documentation](./color-mix-system.md).

## CSS-Farbfunktionen

the system nutzt also moderne CSS-Farbfunktionen for erweiterte Use Cases:

```css
.card {
  /* Automatische Kontrastfarbe for Text */
  color: color-contrast(var(--color-primary) vs black, white);

  /* Transparente Variants */
  background-color: rgb(from var(--color-primary) r g b / 10%);
  border-color: hsl(from var(--color-primary) h s l / 30%);
}
```

## Farbmodi and Theming

the Color system unterstutzt verschiedene Farbmodi, how z.B. a Dark Mode:

```css
:root {
  --color-primary: #4a90e2;
  --bg-body: #ffffff;
  --text-primary: #1f2937;
}

[data-theme="dark"] {
  --color-primary: #60a5fa;
  --bg-body: #121212;
  --text-primary: #f3f4f6;
}
```

additional Details zum Theming-system finden them in the [theme-system Documentation](./theme-system.md).

## Accessibility and Kontrast

the Color system berucksichtigt the Accessibility, indem it sicherstellt, that Colors ausreichend Kontrast bieten:

```css
:root {
  /* Automatisch berechnete Kontrastfarben */
  --color-primary-contrast: color-contrast(var(--color-primary) vs black, white);
  --color-secondary-contrast: color-contrast(var(--color-secondary) vs black, white);
  --color-accent-contrast: color-contrast(var(--color-accent) vs black, white);
  --color-success-contrast: color-contrast(var(--color-success) vs black, white);
  --color-warning-contrast: color-contrast(var(--color-warning) vs black, white);
  --color-error-contrast: color-contrast(var(--color-error) vs black, white);
  --color-info-contrast: color-contrast(var(--color-info) vs black, white);
}
```

these Kontrastfarben become automatisch in Components how buttons verwendet:

```html
<button class="button primary">
  Bestatigen
</button>
```

## Customization des Color Systems

You can the Color system on her Branding customize, indem them the Basisfarben overwrite:

```css
/* own CSS-file */
@import "@casoon/ui-lib/core.css";

@layer tokens {
  :root {
    /* overwrite the Grundfarben */
    --color-primary: #8e44ad;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;

    /* others Colors bleiben unverandert or can ebenfalls uberschrieben become */
  }
}
```

## Farbharmonie and -komposition

for harmonische designs empfehlen we folgende Farbrichtlinien:

1. **60-30-10 Rule**: 60% neutrale Colors, 30% Primar-/Sekundarfarben and 10% Akzentfarben
2. **Konsistente Sattigung**: use them Colors with ahnlicher Sattigung for a ausgewogenes design
3. **Limitierte Farbpalette**: Beschranken them oneself on 2-3 Hauptfarben plus Akzentfarbe

## Best Practices

1. **Semantische Farbklassen use** - use them `.bg-success` instead of direkte Farbcodes
2. **Kontrast note** - ensure, that Text on farbigen Hintergrunden good lesbar ist
3. **Farbvariablen for own Components** - use them the vorhandene Variablensystem for konsistente customizations
4. **Accessibility testen** - Prufen them her design on ausreichenden Farbkontrast (WCAG AA/AAA)
5. **Farbkombinationen limitieren** - to many verschiedene Colors can the Benutzeroberflache unruhig wirken lassen

## Examples for Farbkombinationen

### Call-to-Action buttons

```html
<button class="button primary">Hauptaktion</button>
<button class="button secondary">Sekundare Aktion</button>
<button class="button accent">Hervorgehobene Aktion</button>
```

### notifications and Alerts

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">
    <h4 class="alert__title">success!</h4>
    <p class="alert__message">the Vorgang wurde erfolgreich abgeschlossen.</p>
  </div>
</div>

<div class="alert alert--warning">
  <div class="alert__icon">⚠</div>
  <div class="alert__content">
    <h4 class="alert__title">warning</h4>
    <p class="alert__message">please uberprufen them Ihre inputs.</p>
  </div>
</div>

<div class="alert alert--error">
  <div class="alert__icon">✕</div>
  <div class="alert__content">
    <h4 class="alert__title">errors</h4>
    <p class="alert__message">the Vorgang konnte not abgeschlossen become.</p>
  </div>
</div>

<div class="alert alert--info">
  <div class="alert__icon">ℹ</div>
  <div class="alert__content">
    <h4 class="alert__title">Information</h4>
    <p class="alert__message">Hier sind additional Informationen zum Vorgang.</p>
  </div>
</div>
```

### Hintergrundvariationen

```html
<section class="bg-white p-6">
  <h2>Weisser background</h2>
  <p class="text-primary">Text in Primarfarbe on weissem background.</p>
</section>

<section class="bg-gray-100 p-6">
  <h2>Hellgrauer background</h2>
  <p class="text-primary">Text in Primarfarbe on hellgrauem background.</p>
</section>

<section class="bg-primary p-6">
  <h2 class="text-white">Primarfarbe as background</h2>
  <p class="text-white">Weisser Text on background in Primarfarbe.</p>
</section>

<section class="bg-primary-light p-6">
  <h2>Hellere Primarfarbe as background</h2>
  <p class="text-primary-dark">Text in dunklerer Primarfarbe on hellerem Primarhintergrund.</p>
</section>
```

### Farbige Cardn-UI

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="card bg-primary text-white">
    <div class="card__header">Primarkarte</div>
    <div class="card__body">
      <p>content in Primarfarbe with weissem Text.</p>
    </div>
  </div>

  <div class="card bg-white border border-accent">
    <div class="card__header text-accent">Akzentuierte Card</div>
    <div class="card__body">
      <p>Weisse Card with Akzentfarbe for margin and heading.</p>
    </div>
  </div>

  <div class="card bg-gray-50 border border-gray-200">
    <div class="card__header text-secondary">Neutrale Card</div>
    <div class="card__body">
      <p>Neutrale Card with subtilen Grautonen.</p>
    </div>
  </div>
</div>
``` 

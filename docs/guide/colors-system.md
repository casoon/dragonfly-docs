---
title: Color System
category: Guide
---

# Color System

Das Color System der Casoon UI Library bietet eine umfassende und flexible Methode zur Verwaltung und Anwendung von Colors in Ihrer Benutzeroberfläche. Es kombiniert ein gut strukturiertes Token-System mit modernen CSS-Techniken für maximale Flexibility.

## Importing Modules

Das komplette Color System wird automatisch geladen, wenn Sie die `core.css` Datei importieren:

```css
@import '@casoon/ui-lib/core.css';
```

Die Reihenfolge der Layer ist entscheidend, wobei das `colors` Layer nach den grundlegenden Tokens geladen wird:

```css
@layer reset,
       tokens,              /* Grundlegende Design Tokens */
       core,
       logical-properties,
       colors,              /* Basisfarben und Farbklassen */
       color-mix,           /* Farbmischungen und -varianten */
       ...                  /* weitere Layer */
```

## Farbpalette

Die Farbpalette der Casoon UI Library besteht aus mehreren Arten von Farbdefinitionen:

### Primäre Farbpalette

Die Basisfarben definieren die grundlegende Identität Ihrer Anwendung:

```css
:root {
  /* Primärfarbe und Variants */
  --color-primary: #4a90e2;
  --color-primary-light: #6ba5e7;
  --color-primary-dark: #3570b2;

  /* Sekundärfarbe und Variants */
  --color-secondary: #6c757d;
  --color-secondary-light: #868e96;
  --color-secondary-dark: #495057;

  /* Akzentfarbe und Variants */
  --color-accent: #f8a100;
  --color-accent-light: #ffc107;
  --color-accent-dark: #e67700;
}
```

### Funktionale Colors

Für semantische Bedeutungen gibt es spezielle Funktionsfarben:

```css
:root {
  /* Erfolg */
  --color-success: #28a745;
  --color-success-light: #48c664;
  --color-success-dark: #1e7e34;

  /* Warnung */
  --color-warning: #ffc107;
  --color-warning-light: #ffda6a;
  --color-warning-dark: #e0a800;

  /* Fehler */
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

Eine umfassende Grau-Palette dient als Basis für Text, Hintergründe und Ränder:

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

  /* Grundlegende Schwarz/Weiß-Töne */
  --color-white: #ffffff;
  --color-black: #000000;
}
```

### Erweiterte Farbpalette

Zusätzlich zu den Basisfarben bietet das System eine erweiterte Palette mit 9 Stufen für jede Hauptfarbe:

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
  /* ... weitere Rot-Stufen ... */
  --color-red-900: #7f1d1d;

  /* Weitere Farbpaletten (Grün, Gelb, Lila, etc.) mit jeweils 9 Stufen */
}
```

## Semantische Farbverwendung

Das Color System erleichtert die semantische Usage von Colors für unterschiedliche UI-Elemente:

```css
:root {
  /* Text-Colors */
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-700);
  --text-tertiary: var(--color-gray-500);
  --text-disabled: var(--color-gray-400);
  --text-inverse: var(--color-white);

  /* Hintergrund-Colors */
  --bg-body: var(--color-white);
  --bg-surface: var(--color-gray-50);
  --bg-elevation-1: var(--color-white);
  --bg-elevation-2: var(--color-gray-50);
  --bg-disabled: var(--color-gray-200);

  /* Rand-Colors */
  --border-light: var(--color-gray-200);
  --border-medium: var(--color-gray-300);
  --border-strong: var(--color-gray-400);
  --border-focus: var(--color-primary);
}
```

## Utility-Klassen für Colors

Das Color System bietet praktische Utility-Klassen für schnelles Styling:

### Hintergrundfarben

```html
<div class="bg-primary">Primärfarbe als Hintergrund</div>
<div class="bg-secondary">Sekundärfarbe als Hintergrund</div>
<div class="bg-success">Erfolgsfarbe als Hintergrund</div>
<div class="bg-warning">Warnfarbe als Hintergrund</div>
<div class="bg-error">Fehlerfarbe als Hintergrund</div>
<div class="bg-info">Infofarbe als Hintergrund</div>

<!-- Variants -->
<div class="bg-primary-light">Hellere Primärfarbe</div>
<div class="bg-primary-dark">Dunklere Primärfarbe</div>

<!-- Neutrale Colors -->
<div class="bg-gray-100">Sehr helles Grau</div>
<div class="bg-gray-900">Sehr dunkles Grau</div>
```

### Textfarben

```html
<p class="text-primary">Text in Primärfarbe</p>
<p class="text-secondary">Text in Sekundärfarbe</p>
<p class="text-success">Text in Erfolgsfarbe</p>
<p class="text-warning">Text in Warnfarbe</p>
<p class="text-error">Text in Fehlerfarbe</p>
<p class="text-info">Text in Infofarbe</p>

<!-- Variants -->
<p class="text-primary-light">Text in hellerer Primärfarbe</p>
<p class="text-primary-dark">Text in dunklerer Primärfarbe</p>

<!-- Neutrale Colors -->
<p class="text-gray-500">Mittleres Grau</p>
<p class="text-white">Weißer Text</p>
<p class="text-black">Schwarzer Text</p>
```

### Randfarben

```html
<div class="border border-primary">Rand in Primärfarbe</div>
<div class="border border-secondary">Rand in Sekundärfarbe</div>
<div class="border border-success">Rand in Erfolgsfarbe</div>
<div class="border border-warning">Rand in Warnfarbe</div>
<div class="border border-error">Rand in Fehlerfarbe</div>
<div class="border border-info">Rand in Infofarbe</div>

<!-- Variants -->
<div class="border border-primary-light">Rand in hellerer Primärfarbe</div>
<div class="border border-primary-dark">Rand in dunklerer Primärfarbe</div>

<!-- Neutrale Colors -->
<div class="border border-gray-300">Rand in hellem Grau</div>
```

## Dynamische Colors mit CSS Color-Mix

Das Color System unterstützt dynamische Farbberechnungen mit der CSS `color-mix()`-Funktion:

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

Mehr Details zum Color-Mix System finden Sie in der [Color-Mix Dokumentation](./color-mix-system.md).

## CSS-Farbfunktionen

Das System nutzt auch moderne CSS-Farbfunktionen für erweiterte Use Cases:

```css
.card {
  /* Automatische Kontrastfarbe für Text */
  color: color-contrast(var(--color-primary) vs black, white);

  /* Transparente Variants */
  background-color: rgb(from var(--color-primary) r g b / 10%);
  border-color: hsl(from var(--color-primary) h s l / 30%);
}
```

## Farbmodi und Theming

Das Color System unterstützt verschiedene Farbmodi, wie z.B. ein Dark Mode:

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

Weitere Details zum Theming-System finden Sie in der [Theme-System Dokumentation](./theme-system.md).

## Accessibility und Kontrast

Das Color System berücksichtigt die Accessibility, indem es sicherstellt, dass Colors ausreichend Kontrast bieten:

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

Diese Kontrastfarben werden automatisch in Components wie Buttons verwendet:

```html
<button class="button primary">
  Bestätigen
</button>
```

## Anpassung des Color Systems

Sie können das Color System an Ihr Branding anpassen, indem Sie die Basisfarben überschreiben:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

@layer tokens {
  :root {
    /* Überschreiben der Grundfarben */
    --color-primary: #8e44ad;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;

    /* Andere Colors bleiben unverändert oder können ebenfalls überschrieben werden */
  }
}
```

## Farbharmonie und -komposition

Für harmonische Designs empfehlen wir folgende Farbrichtlinien:

1. **60-30-10 Regel**: 60% neutrale Colors, 30% Primär-/Sekundärfarben und 10% Akzentfarben
2. **Konsistente Sättigung**: Verwenden Sie Colors mit ähnlicher Sättigung für ein ausgewogenes Design
3. **Limitierte Farbpalette**: Beschränken Sie sich auf 2-3 Hauptfarben plus Akzentfarbe

## Best Practices

1. **Semantische Farbklassen verwenden** - Nutzen Sie `.bg-success` statt direkte Farbcodes
2. **Kontrast beachten** - Stellen Sie sicher, dass Text auf farbigen Hintergründen gut lesbar ist
3. **Farbvariablen für eigene Components** - Verwenden Sie das vorhandene Variablensystem für konsistente Customizations
4. **Accessibility testen** - Prüfen Sie Ihr Design auf ausreichenden Farbkontrast (WCAG AA/AAA)
5. **Farbkombinationen limitieren** - Zu viele verschiedene Colors können die Benutzeroberfläche unruhig wirken lassen

## Examples für Farbkombinationen

### Call-to-Action Buttons

```html
<button class="button primary">Hauptaktion</button>
<button class="button secondary">Sekundäre Aktion</button>
<button class="button accent">Hervorgehobene Aktion</button>
```

### Benachrichtigungen und Alerts

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">
    <h4 class="alert__title">Erfolg!</h4>
    <p class="alert__message">Der Vorgang wurde erfolgreich abgeschlossen.</p>
  </div>
</div>

<div class="alert alert--warning">
  <div class="alert__icon">⚠</div>
  <div class="alert__content">
    <h4 class="alert__title">Warnung</h4>
    <p class="alert__message">Bitte überprüfen Sie Ihre Eingaben.</p>
  </div>
</div>

<div class="alert alert--error">
  <div class="alert__icon">✕</div>
  <div class="alert__content">
    <h4 class="alert__title">Fehler</h4>
    <p class="alert__message">Der Vorgang konnte nicht abgeschlossen werden.</p>
  </div>
</div>

<div class="alert alert--info">
  <div class="alert__icon">ℹ</div>
  <div class="alert__content">
    <h4 class="alert__title">Information</h4>
    <p class="alert__message">Hier sind weitere Informationen zum Vorgang.</p>
  </div>
</div>
```

### Hintergrundvariationen

```html
<section class="bg-white p-6">
  <h2>Weißer Hintergrund</h2>
  <p class="text-primary">Text in Primärfarbe auf weißem Hintergrund.</p>
</section>

<section class="bg-gray-100 p-6">
  <h2>Hellgrauer Hintergrund</h2>
  <p class="text-primary">Text in Primärfarbe auf hellgrauem Hintergrund.</p>
</section>

<section class="bg-primary p-6">
  <h2 class="text-white">Primärfarbe als Hintergrund</h2>
  <p class="text-white">Weißer Text auf Hintergrund in Primärfarbe.</p>
</section>

<section class="bg-primary-light p-6">
  <h2>Hellere Primärfarbe als Hintergrund</h2>
  <p class="text-primary-dark">Text in dunklerer Primärfarbe auf hellerem Primärhintergrund.</p>
</section>
```

### Farbige Cardn-UI

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="card bg-primary text-white">
    <div class="card__header">Primärkarte</div>
    <div class="card__body">
      <p>Inhalt in Primärfarbe mit weißem Text.</p>
    </div>
  </div>

  <div class="card bg-white border border-accent">
    <div class="card__header text-accent">Akzentuierte Card</div>
    <div class="card__body">
      <p>Weiße Card mit Akzentfarbe für Rand und Überschrift.</p>
    </div>
  </div>

  <div class="card bg-gray-50 border border-gray-200">
    <div class="card__header text-secondary">Neutrale Card</div>
    <div class="card__body">
      <p>Neutrale Card mit subtilen Grautönen.</p>
    </div>
  </div>
</div>
``` 

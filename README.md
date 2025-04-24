# Casoon UI Library

Ein modernes CSS Design System für Webanwendungen. Die Bibliothek bietet vorgefertigte Komponenten und Styles, die sich einfach in bestehende Projekte integrieren lassen.

## Installation

### NPM

```bash
npm install @casoon/ui-lib@latest
```

### Yarn

```bash
yarn add @casoon/ui-lib@latest
```

### pnpm

```bash
pnpm add @casoon/ui-lib@latest
```

### CDN

```html
<!-- Core Styles -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib@latest/core.css">

<!-- Theme -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib@latest/themes/day.css">

<!-- Optionale Module -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib@latest/modules/button.module.css">
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib@latest/modules/input.module.css">
```

## Verwendung

### Core Styles

Die `core.css` Datei enthält die grundlegenden Styles und Layer:

```css
@layer reset,                /* Browser-Reset, Normalisierung */
       tokens,               /* Design-Tokens, Variablen */
       custom-properties,    /* Registrierte CSS-Eigenschaften */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Logische Eigenschaften für Bidirektionalität */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -variationen */
       layout,               /* Layout-Grundlagen */
       typography,           /* Typografie-System */
       utilities,            /* Utility-Klassen */
       smooth-scroll,        /* Scroll-Verhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       animations,           /* Animationen */
       effects,              /* Visuelle Effekte */
       themes,               /* Theming-System */
       components;           /* Komponenten (für benutzerdefinierte Erweiterungen) */
```

### Module

Module können einzeln importiert werden:

```css
/* Grundlegende Komponenten */
@import '@casoon/ui-lib/modules/button.module.css';
@import '@casoon/ui-lib/modules/input.module.css';
@import '@casoon/ui-lib/modules/textarea.module.css';
@import '@casoon/ui-lib/modules/select.module.css';
@import '@casoon/ui-lib/modules/checkbox.module.css';
@import '@casoon/ui-lib/modules/radio.module.css';
@import '@casoon/ui-lib/modules/switch.module.css';
@import '@casoon/ui-lib/modules/file.module.css';
@import '@casoon/ui-lib/modules/form.module.css';
@import '@casoon/ui-lib/modules/input-group.module.css';

/* Feedback-Komponenten */
@import '@casoon/ui-lib/modules/alert.module.css';
@import '@casoon/ui-lib/modules/toast.module.css';
@import '@casoon/ui-lib/modules/notification.module.css';
@import '@casoon/ui-lib/modules/modal.module.css';
@import '@casoon/ui-lib/modules/progress.module.css';
@import '@casoon/ui-lib/modules/spinner.module.css';
@import '@casoon/ui-lib/modules/skeleton.module.css';

/* Navigationskomponenten */
@import '@casoon/ui-lib/modules/header.module.css';
@import '@casoon/ui-lib/modules/sidebar.module.css';
@import '@casoon/ui-lib/modules/hamburger.module.css';
@import '@casoon/ui-lib/modules/tabs.module.css';

/* Datenkomponenten */
@import '@casoon/ui-lib/modules/table.module.css';
@import '@casoon/ui-lib/modules/card.module.css';
@import '@casoon/ui-lib/modules/slider.module.css';

/* Zusätzliche Komponenten */
@import '@casoon/ui-lib/modules/avatar.module.css';
@import '@casoon/ui-lib/modules/badge.module.css';
@import '@casoon/ui-lib/modules/chip.module.css';
@import '@casoon/ui-lib/modules/tooltip.module.css';
@import '@casoon/ui-lib/modules/widget.module.css';
@import '@casoon/ui-lib/modules/wizard.module.css';
@import '@casoon/ui-lib/modules/blog.module.css';
@import '@casoon/ui-lib/modules/code.module.css';
```

### Themes

Die Bibliothek bietet verschiedene Themes:

```css
/* Standard-Themes */
@import '@casoon/ui-lib/themes/day.css';
@import '@casoon/ui-lib/themes/night.css';

/* Jahreszeiten-Themes */
@import '@casoon/ui-lib/themes/spring.css';
@import '@casoon/ui-lib/themes/summer.css';
@import '@casoon/ui-lib/themes/autumn.css';
@import '@casoon/ui-lib/themes/winter.css';

/* Spezielle Themes */
@import '@casoon/ui-lib/themes/forest.css';
@import '@casoon/ui-lib/themes/ocean.css';
@import '@casoon/ui-lib/themes/pastel.css';
@import '@casoon/ui-lib/themes/neon.css';
@import '@casoon/ui-lib/themes/retro.css';
@import '@casoon/ui-lib/themes/monochrome.css';
@import '@casoon/ui-lib/themes/sunset.css';
@import '@casoon/ui-lib/themes/contrast.css';
```

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<body class="theme-night">
  <!-- Ihr Inhalt -->
</body>
```

## CSS Integration

### Basis-Integration

```css
/* 1. Core Styles importieren */
@import '@casoon/ui-lib/core.css';

/* 2. Theme auswählen */
@import '@casoon/ui-lib/themes/day.css';

/* 3. Benötigte Module importieren */
@import '@casoon/ui-lib/modules/button.module.css';
@import '@casoon/ui-lib/modules/input.module.css';
```

### HTML-Beispiel

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="node_modules/@casoon/ui-lib/core.css">
    <link rel="stylesheet" href="node_modules/@casoon/ui-lib/themes/day.css">
    <link rel="stylesheet" href="node_modules/@casoon/ui-lib/modules/button.module.css">
</head>
<body class="theme-day">
    <button class="btn btn--primary">Klick mich</button>
</body>
</html>
```

## Framework-Integration

### React

```jsx
// App.jsx oder index.jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/modules/button.module.css';

function App() {
  return (
    <div className="container">
      <button className="btn btn--primary">Primärer Button</button>
    </div>
  );
}
```

### Vue

```vue
<!-- In main.js -->
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/modules/button.module.css';

<!-- In einer Komponente -->
<template>
  <div class="container">
    <button class="btn btn--primary">Primärer Button</button>
  </div>
</template>
```

## Komponenten-Beispiele

### Button

```html
<button class="btn btn--primary">Primärer Button</button>
<button class="btn btn--secondary">Sekundärer Button</button>
<button class="btn btn--outline">Outline Button</button>
```

### Input

```html
<input class="input" type="text" placeholder="Text eingeben">
<input class="input input--error" type="text" placeholder="Fehler">
<input class="input input--success" type="text" placeholder="Erfolg">
```

### Alert

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">Erfolgreich gespeichert!</div>
</div>
```

### Icon

```html
<div class="icon">
  <svg><use xlink:href="#icon-check"></use></svg>
</div>

<div class="icon icon--primary icon--md">
  <svg><use xlink:href="#icon-home"></use></svg>
</div>
```

## Best Practices

1. **Core Styles immer zuerst importieren**
   ```css
   @import '@casoon/ui-lib/core.css';
   ```

2. **Themes nach Core Styles importieren**
   ```css
   @import '@casoon/ui-lib/themes/day.css';
   ```

3. **Module nach Bedarf importieren**
   ```css
   @import '@casoon/ui-lib/modules/button.module.css';
   ```

4. **Mobile-First-Ansatz verwenden**
   ```html
   <div class="grid grid--cols-1 md:grid--cols-2 lg:grid--cols-3">
     <!-- Responsive Grid von 1 Spalte auf Mobilgeräten bis 3 Spalten auf großen Bildschirmen -->
   </div>
   ```

5. **Barrierefreiheit beachten**
   ```html
   <button class="btn btn--primary" aria-label="Speichern">
     <div class="icon" aria-hidden="true">
       <svg><use xlink:href="#icon-save"></use></svg>
     </div>
     <span>Speichern</span>
   </button>
   ```

## Unterstützung und Support

Bei Fragen oder Problemen:

1. [Dokumentation](https://casoon.github.io/ui-docs/)
2. [GitHub Issues](https://github.com/casoon/ui-lib/issues)
3. [Support kontaktieren](mailto:support@casoon.com) 
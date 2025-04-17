# Casoon UI Library

Ein modernes CSS Design System für Webanwendungen. Die Bibliothek bietet vorgefertigte Komponenten und Styles, die sich einfach in bestehende Projekte integrieren lassen.

## Installation

### NPM

```bash
npm install casoon-ui-lib@0.2.1
```

### Yarn

```bash
yarn add casoon-ui-lib@0.2.1
```

### CDN

```html
<!-- Core Styles -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/core.css">

<!-- Theme -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/themes/day.css">

<!-- Optionale Module -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/modules/button.module.css">
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/modules/input.module.css">
```

## Verwendung

### Core Styles

Die `core.css` Datei enthält die grundlegenden Styles und Layer:

```css
@layer core {
    @import url("layers/tokens.css");
    @import url("layers/reset.css");
    @import url("layers/colors.css");
    @import url("layers/typography.css");
    @import url("layers/utilities.css");
    @import url("layers/layout.css");
    @import url("layers/smooth-scroll.css");
}

@layer icons {
    /* Utility Imports */
    @import url('icons/base.css');
}

@layer animations {
    /* Animations Imports */
    @import url('layers/animations.css');
}

@layer effects {
    /* Effects Imports */
    @import url('layers/effects.css');
}

@layer themes {
    /* Basis-Theme - wird immer geladen */
    @import url('themes/theme-base.css');
    
    /* Feature-spezifische Themes */
    @import url('themes/accessibility.css');
    @import url('themes/dark-mode.css');
    @import url('themes/brands.css');
    
    /* Standard Theme Variations */
    @import url('themes/day.css');
    @import url('themes/night.css');
    @import url('themes/spring.css');
    @import url('themes/summer.css');
    @import url('themes/autumn.css');
    @import url('themes/winter.css');
    @import url('themes/forest.css');
    @import url('themes/ocean.css');
    @import url('themes/pastel.css');
    @import url('themes/neon.css');
    @import url('themes/retro.css');
    @import url('themes/monochrome.css');
    @import url('themes/sunset.css');
}
```

### Module

Module können einzeln importiert werden:

```css
/* Grundlegende Komponenten */
@import 'casoon-ui-lib/modules/button.module.css';
@import 'casoon-ui-lib/modules/input.module.css';
@import 'casoon-ui-lib/modules/textarea.module.css';
@import 'casoon-ui-lib/modules/select.module.css';
@import 'casoon-ui-lib/modules/checkbox.module.css';
@import 'casoon-ui-lib/modules/radio.module.css';
@import 'casoon-ui-lib/modules/switch.module.css';
@import 'casoon-ui-lib/modules/file.module.css';
@import 'casoon-ui-lib/modules/form.module.css';
@import 'casoon-ui-lib/modules/input-group.module.css';

/* Feedback-Komponenten */
@import 'casoon-ui-lib/modules/alert.module.css';
@import 'casoon-ui-lib/modules/toast.module.css';
@import 'casoon-ui-lib/modules/notification.module.css';
@import 'casoon-ui-lib/modules/modal.module.css';
@import 'casoon-ui-lib/modules/progress.module.css';
@import 'casoon-ui-lib/modules/spinner.module.css';
@import 'casoon-ui-lib/modules/skeleton.module.css';

/* Navigationskomponenten */
@import 'casoon-ui-lib/modules/header.module.css';
@import 'casoon-ui-lib/modules/sidebar.module.css';
@import 'casoon-ui-lib/modules/hamburger.module.css';
@import 'casoon-ui-lib/modules/tabs.module.css';

/* Datenkomponenten */
@import 'casoon-ui-lib/modules/table.module.css';
@import 'casoon-ui-lib/modules/card.module.css';
@import 'casoon-ui-lib/modules/slider.module.css';

/* Zusätzliche Komponenten */
@import 'casoon-ui-lib/modules/avatar.module.css';
@import 'casoon-ui-lib/modules/badge.module.css';
@import 'casoon-ui-lib/modules/chip.module.css';
@import 'casoon-ui-lib/modules/tooltip.module.css';
@import 'casoon-ui-lib/modules/widget.module.css';
@import 'casoon-ui-lib/modules/wizard.module.css';
@import 'casoon-ui-lib/modules/blog.module.css';
```

### Themes

Die Bibliothek bietet verschiedene Themes:

```css
/* Standard-Themes */
@import 'casoon-ui-lib/themes/day.css';
@import 'casoon-ui-lib/themes/night.css';

/* Jahreszeiten-Themes */
@import 'casoon-ui-lib/themes/spring.css';
@import 'casoon-ui-lib/themes/summer.css';
@import 'casoon-ui-lib/themes/autumn.css';
@import 'casoon-ui-lib/themes/winter.css';

/* Spezielle Themes */
@import 'casoon-ui-lib/themes/forest.css';
@import 'casoon-ui-lib/themes/ocean.css';
@import 'casoon-ui-lib/themes/pastel.css';
@import 'casoon-ui-lib/themes/neon.css';
@import 'casoon-ui-lib/themes/retro.css';
@import 'casoon-ui-lib/themes/monochrome.css';
@import 'casoon-ui-lib/themes/sunset.css';
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
@import 'casoon-ui-lib/core.css';

/* 2. Theme auswählen */
@import 'casoon-ui-lib/themes/day.css';

/* 3. Benötigte Module importieren */
@import 'casoon-ui-lib/modules/button.module.css';
@import 'casoon-ui-lib/modules/input.module.css';
```

### HTML-Beispiel

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="node_modules/casoon-ui-lib/core.css">
    <link rel="stylesheet" href="node_modules/casoon-ui-lib/themes/day.css">
    <link rel="stylesheet" href="node_modules/casoon-ui-lib/modules/button.module.css">
</head>
<body class="theme-day">
    <button class="button button--primary">Klick mich</button>
</body>
</html>
```

## Komponenten-Beispiele

### Button

```html
<button class="button button--primary">Primärer Button</button>
<button class="button button--secondary">Sekundärer Button</button>
<button class="button button--outline">Outline Button</button>
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

## Best Practices

1. **Core Styles immer zuerst importieren**
   ```css
   @import 'casoon-ui-lib/core.css';
   ```

2. **Themes nach Core Styles importieren**
   ```css
   @import 'casoon-ui-lib/themes/day.css';
   ```

3. **Module nach Bedarf importieren**
   ```css
   @import 'casoon-ui-lib/modules/button.module.css';
   ```

4. **Optionale Layer nach Bedarf importieren**
   ```css
   @import 'casoon-ui-lib/layers/forms.css';
   ```

5. **Theme-Klasse im body-Element setzen**
   ```html
   <body class="theme-day">
   ```

## Troubleshooting

### Häufige Probleme

1. **CSS wird nicht geladen**
   - Überprüfen Sie die Pfade zu den CSS-Dateien
   - Stellen Sie sicher, dass die Dateien existieren
   - Überprüfen Sie die Netzwerkanfragen

2. **Theme wird nicht angewendet**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie, ob die Theme-Klasse gesetzt ist
   - Überprüfen Sie die Theme-Datei

3. **Komponenten werden nicht angezeigt**
   - Überprüfen Sie die HTML-Struktur
   - Stellen Sie sicher, dass die richtigen CSS-Klassen verwendet werden
   - Importieren Sie das entsprechende Modul

## Support

Bei Fragen oder Problemen:
1. Überprüfen Sie die [Dokumentation](https://docs.casoon.com)
2. Erstellen Sie ein [Issue](https://github.com/casoon/casoon-ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com) 
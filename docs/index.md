# Casoon UI Library

Eine moderne, flexible und zugängliche Komponentenbibliothek für Webanwendungen.

## Navigation

- [Einführung](/getting-started/index)
- [Installation](/getting-started/installation)
- [Komponenten](/components/index)
- [Design System](/guide/design-system)
- [Theming](/guide/theming)
- [Zugänglichkeit](/guide/accessibility)

## Installation

```bash
npm install casoon-ui-lib@0.2.1
```

## Verfügbare Module

Die Casoon UI Library bietet folgende Module:

### Grundlegende Komponenten
- `button.module.css` - Button-Komponenten
- `input.module.css` - Eingabefelder
- `textarea.module.css` - Mehrzeilige Eingabefelder
- `select.module.css` - Auswahlfelder
- `checkbox.module.css` - Kontrollkästchen
- `radio.module.css` - Radiobuttons
- `switch.module.css` - Umschalter
- `file.module.css` - Datei-Upload
- `form.module.css` - Formular-Elemente
- `input-group.module.css` - Gruppierte Eingabefelder

### Feedback-Komponenten
- `alert.module.css` - Hinweismeldungen
- `toast.module.css` - Kurze Benachrichtigungen
- `notification.module.css` - Detaillierte Benachrichtigungen
- `modal.module.css` - Modale Dialoge
- `progress.module.css` - Fortschrittsbalken
- `spinner.module.css` - Ladeanzeigen
- `skeleton.module.css` - Platzhalter während des Ladens

### Navigationskomponenten
- `header.module.css` - Kopfzeilen
- `sidebar.module.css` - Seitenleisten
- `hamburger.module.css` - Menü-Schaltflächen
- `tabs.module.css` - Registerkarten

### Datenkomponenten
- `table.module.css` - Tabellen
- `card.module.css` - Karten
- `slider.module.css` - Schieberegler

### Zusätzliche Komponenten
- `avatar.module.css` - Benutzeravatare
- `badge.module.css` - Kennzeichnungen
- `chip.module.css` - Chips/Tags
- `tooltip.module.css` - Tooltips
- `widget.module.css` - Widgets
- `wizard.module.css` - Mehrschrittassistenten
- `blog.module.css` - Blog-Layouts

## Verwendung

### Core Styles

```css
@import 'casoon-ui-lib/core.css';
```

Die `core.css` enthält folgende Layer:

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

### Themes

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

### Beispiel: Button-Komponente

```html
<button class="button button--primary">Primärer Button</button>
<button class="button button--secondary">Sekundärer Button</button>
<button class="button button--outline">Outline Button</button>
```

### Beispiel: Formular

```html
<form class="form">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input id="name" class="input" type="text" placeholder="Name eingeben">
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">E-Mail</label>
    <input id="email" class="input" type="email" placeholder="E-Mail eingeben">
  </div>
  
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox">
      <span class="checkbox__label">AGB akzeptieren</span>
    </label>
  </div>
  
  <button type="submit" class="button button--primary">Absenden</button>
</form>
```

## Schnellstart

1. Installieren Sie die Bibliothek:
   ```bash
   npm install casoon-ui-lib@0.2.1
   ```

2. Importieren Sie die Core-CSS:
   ```js
   import 'casoon-ui-lib/core.css';
   ```

3. Importieren Sie ein Theme:
   ```js
   import 'casoon-ui-lib/themes/day.css';
   ```

4. Fügen Sie die Theme-Klasse zum body-Element hinzu:
   ```html
   <body class="theme-day">
     <!-- Ihr Inhalt -->
   </body>
   ```

5. Verwenden Sie die Komponenten in Ihrem HTML:
   ```html
   <button class="button button--primary">Klick mich</button>
   ```

## Framework-Integration

### React

```jsx
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

function App() {
  return (
    <div className="app">
      <button className="button button--primary">Klick mich</button>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="app">
    <button class="button button--primary">Klick mich</button>
  </div>
</template>

<script>
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

export default {
  name: 'App'
}
</script>
```

### Angular

```typescript
// In angular.json
"styles": [
  "node_modules/casoon-ui-lib/core.css",
  "node_modules/casoon-ui-lib/themes/day.css",
  "node_modules/casoon-ui-lib/modules/button.module.css"
]
```

## Verfügbare Komponenten

<div class="component-grid">
  <div class="component-card">
    <h3>Button</h3>
    <p>Ein vielseitiger Button mit verschiedenen Varianten</p>
    <a href="/getting-started/button">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Input</h3>
    <p>Eingabefelder mit verschiedenen Typen und Zuständen</p>
    <a href="/getting-started/input">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Modal</h3>
    <p>Modale Dialoge für Benutzerinteraktionen</p>
    <a href="/getting-started/modal">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Alert</h3>
    <p>Benachrichtigungen und Warnmeldungen</p>
    <a href="/getting-started/alert">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Toast</h3>
    <p>Kurze Benachrichtigungen am Bildschirmrand</p>
    <a href="/getting-started/toast">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Badge</h3>
    <p>Status- und Zähleranzeigen</p>
    <a href="/getting-started/badge">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Tooltip</h3>
    <p>Kontextbezogene Hilfetexte</p>
    <a href="/getting-started/tooltip">Mehr erfahren</a>
  </div>
  <div class="component-card">
    <h3>Progress</h3>
    <p>Fortschrittsanzeigen und Ladebalken</p>
    <a href="/getting-started/progress">Mehr erfahren</a>
  </div>
</div>

## Design System

### Farben

<div class="color-palette">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary)"></div>
    <h4>Primary</h4>
    <p>Hauptfarbe für wichtige Aktionen</p>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-secondary)"></div>
    <h4>Secondary</h4>
    <p>Sekundäre Farbe für weniger wichtige Aktionen</p>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-success)"></div>
    <h4>Success</h4>
    <p>Erfolgsmeldungen und positive Aktionen</p>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-danger)"></div>
    <h4>Danger</h4>
    <p>Fehlermeldungen und kritische Aktionen</p>
  </div>
</div>

### Typografie

<div class="typography-scale">
  <h1>Überschrift 1</h1>
  <h2>Überschrift 2</h2>
  <h3>Überschrift 3</h3>
  <h4>Überschrift 4</h4>
  <h5>Überschrift 5</h5>
  <h6>Überschrift 6</h6>
  <p>Normaler Text</p>
  <small>Kleiner Text</small>
</div>

### Layout

<div class="layout-grid">
  <div class="layout-card">
    <h4>Container</h4>
    <p>Zentrierte Layout-Container</p>
  </div>
  <div class="layout-card">
    <h4>Grid</h4>
    <p>Flexibles Grid-System</p>
  </div>
  <div class="layout-card">
    <h4>Flexbox</h4>
    <p>Flexible Box-Layouts</p>
  </div>
</div>

### Utilities

<div class="utility-examples">
  <div class="utility-card">
    <h4>Spacing</h4>
    <p>Abstände und Ränder</p>
  </div>
  <div class="utility-card">
    <h4>Display</h4>
    <p>Anzeigeeigenschaften</p>
  </div>
  <div class="utility-card">
    <h4>Position</h4>
    <p>Positionierungseigenschaften</p>
  </div>
</div>

## Browser Support

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Lizenz

Die Casoon UI Library ist unter der MIT-Lizenz veröffentlicht. 
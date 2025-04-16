# Casoon UI Library

Eine moderne, flexible und zugängliche Komponentenbibliothek für Webanwendungen.

## Navigation

- [Einführung](/getting-started/index)
- [Installation](/getting-started/installation)
- [Komponenten](/components/index)
- [Design System](/getting-started/tokens)
- [Theming](/getting-started/typography)
- [Zugänglichkeit](/getting-started/layout)

## Installation

```bash
npm install casoon-ui-lib
```

## Verfügbare Module

Die Casoon UI Library bietet folgende Module:

### Grundlegende Komponenten
- `button.module.css` - Button-Komponenten
- `input.module.css` - Eingabefelder
- `modal.module.css` - Modale Dialoge
- `alert.module.css` - Benachrichtigungen
- `toast.module.css` - Kurze Benachrichtigungen
- `badge.module.css` - Statusanzeigen
- `tooltip.module.css` - Hilfetexte
- `progress.module.css` - Fortschrittsanzeigen

### Navigationskomponenten
- `tabs.module.css` - Registerkarten
- `accordion.module.css` - Aufklappbare Bereiche
- `dropdown.module.css` - Ausklappbare Menüs
- `pagination.module.css` - Seitennavigation
- `navigation.module.css` - Navigationsleisten
- `sidebar.module.css` - Seitenleisten

### Datenkomponenten
- `table.module.css` - Tabellen
- `card.module.css` - Karten
- `slider.module.css` - Bildergalerien

### Effekte
- `effects.module.css` - Animationen und Übergänge

## Verwendung

### Core Styles

```css
@import 'casoon-ui-lib/core.css';
```

### Module

```css
@import 'casoon-ui-lib/modules/button.module.css';
@import 'casoon-ui-lib/modules/input.module.css';
@import 'casoon-ui-lib/modules/modal.module.css';
```

### Themes

```css
@import 'casoon-ui-lib/themes/day.css';
@import 'casoon-ui-lib/themes/night.css';
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

MIT 
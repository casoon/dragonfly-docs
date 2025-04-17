# Getting Started

## Einführung

Die Casoon UI Library ist eine moderne, flexible und zugängliche Komponentenbibliothek für Webanwendungen. Sie bietet eine umfangreiche Sammlung von wiederverwendbaren UI-Komponenten, die sich nahtlos in Ihre Projekte integrieren lassen.

## Installation

```bash
npm install casoon-ui-lib@0.2.1
```

Oder mit Yarn:

```bash
yarn add casoon-ui-lib@0.2.1
```

## Verwendung

### Core Styles

Die Core CSS-Datei enthält die grundlegenden Styles und Layer:

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

Die Casoon UI Library bietet verschiedene Theme-Optionen:

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
@import 'casoon-ui-lib/themes/ocean.css';
@import 'casoon-ui-lib/themes/forest.css';
@import 'casoon-ui-lib/themes/sunset.css';
@import 'casoon-ui-lib/themes/pastel.css';
@import 'casoon-ui-lib/themes/retro.css';
@import 'casoon-ui-lib/themes/monochrome.css';
@import 'casoon-ui-lib/themes/neon.css';
```

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<body class="theme-night">
  <!-- Ihr Inhalt -->
</body>
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

## Komponenten

Die Casoon UI Library bietet eine Vielzahl von Komponenten:

### Grundlegende Komponenten
- **Button** - Interaktive Schaltflächen
- **Input** - Eingabefelder
- **Textarea** - Mehrzeilige Eingabefelder
- **Select** - Auswahlfelder
- **Checkbox** - Kontrollkästchen
- **Radio** - Radiobuttons
- **Switch** - Umschalter
- **File Input** - Datei-Upload
- **Form** - Formular-Komponenten
- **Input Group** - Gruppierte Eingabefelder

### Feedback-Komponenten
- **Alert** - Hinweismeldungen
- **Toast** - Kurze Benachrichtigungen
- **Notification** - Detaillierte Benachrichtigungen
- **Modal** - Dialogfenster
- **Progress** - Fortschrittsbalken
- **Spinner** - Ladeanzeigen
- **Skeleton** - Platzhalter während des Ladens

### Navigationskomponenten
- **Header** - Kopfzeilen
- **Sidebar** - Seitenleisten
- **Hamburger** - Menü-Schaltflächen
- **Tabs** - Registerkarten

### Datenkomponenten
- **Table** - Tabellen
- **Card** - Karten
- **Slider** - Schieberegler

### Zusätzliche Komponenten
- **Avatar** - Benutzeravatare
- **Badge** - Kennzeichnungen
- **Chip** - Chips/Tags
- **Tooltip** - Tooltips
- **Widget** - Widgets
- **Wizard** - Mehrschrittassistenten
- **Blog** - Blog-Layouts

## Design System

Das Design System der Casoon UI Library umfasst:

### Farben
- Primäre und sekundäre Farben
- Statusfarben (Erfolg, Warnung, Fehler, Info)
- Graustufen
- Farbvariationen für Themes

### Typografie
- Schriftarten und -familien
- Schriftgrößen und -gewichte
- Zeilenabstände und Textausrichtung
- Textdekoration und -transformation

### Layout
- Grid-System
- Flexbox-Utilities
- Container und Abschnitte
- Abstände und Ränder

### Utilities
- Spacing-Klassen
- Display-Eigenschaften
- Positionierung
- Sichtbarkeit und Overflow

## Best Practices

### Zugänglichkeit
- Verwenden Sie semantische HTML-Elemente
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation
- Fügen Sie ARIA-Attribute hinzu
- Testen Sie mit Screenreadern

### Responsive Design
- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie Komponenten an mobile Geräte an
- Nutzen Sie Flexbox für flexible Layouts
- Setzen Sie Media Queries für spezifische Anpassungen

### Performance
- Laden Sie nur die benötigten Module
- Verwenden Sie Browser-Caching
- Optimieren Sie Assets für schnelle Ladezeiten
- Minimieren Sie CSS-Dateien
- Vermeiden Sie übermäßige Verschachtelung

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

## Häufige Fragen (FAQ)

### Wie installiere ich die Bibliothek?

```bash
npm install casoon-ui-lib@0.2.1
```

### Welche Browser werden unterstützt?

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

### Wie kann ich das Theme anpassen?

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --font-family: 'Inter', sans-serif;
}
```

### Wie aktiviere ich ein bestimmtes Theme?

```html
<!-- Day Theme -->
<body class="theme-day">
  <!-- Inhalt -->
</body>

<!-- Night Theme -->
<body class="theme-night">
  <!-- Inhalt -->
</body>
```

## Troubleshooting

### CSS wird nicht geladen
- Überprüfen Sie die Pfade zu den CSS-Dateien
- Stellen Sie sicher, dass die Dateien existieren
- Überprüfen Sie die Netzwerkanfragen

### Theme wird nicht angewendet
- Stellen Sie sicher, dass core.css importiert ist
- Überprüfen Sie, ob die Theme-Klasse gesetzt ist
- Überprüfen Sie die Theme-Datei

### Komponenten werden nicht angezeigt
- Überprüfen Sie die HTML-Struktur
- Stellen Sie sicher, dass die richtigen CSS-Klassen verwendet werden
- Importieren Sie das entsprechende Modul

## Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/casoon-ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/casoon-ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com) 
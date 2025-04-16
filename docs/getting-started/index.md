# Getting Started

## Einführung

Die Casoon UI Library ist eine moderne, flexible und zugängliche Komponentenbibliothek für Webanwendungen. Sie bietet eine umfangreiche Sammlung von wiederverwendbaren UI-Komponenten, die sich nahtlos in Ihre Projekte integrieren lassen.

## Installation

```bash
npm install casoon-ui-lib
```

## Verwendung

### Core Styles

```css
@import 'casoon-ui-lib/core.css';
```

### Themes

Die Casoon UI Library bietet verschiedene Theme-Optionen:

```css
/* Tages- und Nacht-Themes */
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

## Komponenten

Die Casoon UI Library bietet eine Vielzahl von Komponenten:

- **Grundlegende Komponenten**
  - Button
  - Input
  - Modal
  - Alert
  - Toast
  - Badge
  - Tooltip
  - Progress

- **Navigationskomponenten**
  - Tabs
  - Accordion
  - Dropdown
  - Pagination
  - Navigation
  - Sidebar

- **Datenkomponenten**
  - Table
  - Card
  - Slider

## Design System

Das Design System der Casoon UI Library umfasst:

- **Farben**
  - Primäre und sekundäre Farben
  - Statusfarben
  - Graustufen

- **Typografie**
  - Schriftarten
  - Schriftgrößen
  - Zeilenabstände

- **Layout**
  - Grid-System
  - Flexbox
  - Container

- **Utilities**
  - Spacing
  - Display
  - Position

## Best Practices

1. **Zugänglichkeit**
   - Verwenden Sie semantische HTML-Elemente
   - Stellen Sie ausreichenden Kontrast sicher
   - Implementieren Sie Tastaturnavigation

2. **Responsive Design**
   - Testen Sie auf verschiedenen Bildschirmgrößen
   - Verwenden Sie relative Einheiten
   - Implementieren Sie Breakpoints

3. **Performance**
   - Minimieren Sie CSS
   - Optimieren Sie Bilder
   - Verwenden Sie Lazy Loading

## Häufige Fragen (FAQ)

### Wie installiere ich die Bibliothek?

```bash
npm install casoon-ui-lib
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

## Troubleshooting

### Komponenten werden nicht angezeigt

1. Überprüfen Sie die CSS-Importe
2. Stellen Sie sicher, dass die Klassen korrekt angewendet werden
3. Überprüfen Sie die Browser-Konsole auf Fehler

### Styling-Probleme

1. Überprüfen Sie die CSS-Spezifität
2. Stellen Sie sicher, dass keine anderen Styles die Komponenten überschreiben
3. Überprüfen Sie die CSS-Variablen 
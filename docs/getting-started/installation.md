# Installation

Die Casoon UI Library kann auf verschiedene Arten in Ihr Projekt integriert werden. Wählen Sie die Methode, die am besten zu Ihrem Projekt passt.

## NPM

```bash
npm install casoon-ui-lib
```

## Yarn

```bash
yarn add casoon-ui-lib
```

## CDN

```html
<!-- Core Styles (enthält bereits wichtige Layer) -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/core.css">

<!-- Theme -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/themes/day.css">

<!-- Optionale Layer -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/layers/forms.css">
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/layers/icons.css">

<!-- Module (optional) -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/modules/button.module.css">
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib/modules/input.module.css">
```

## Core CSS

Die `core.css` Datei ist die Hauptdatei des Designsystems und enthält bereits wichtige Layer in folgender Reihenfolge:

```css
@layer core {
    /* CSS Reset */
    @import url("layers/reset.css");
    
    /* Farbpaletten und Farbvariationen */
    @import url("layers/colors.css");
    
    /* Design Tokens (Farben, Abstände, etc.) */
    @import url("layers/tokens.css");
    
    /* Typografie-Styles */
    @import url("layers/typography.css");
    
    /* Layout-System */
    @import url("layers/layout.css");
    
    /* Utility-Klassen */
    @import url("layers/utilities.css");
    
    /* Smooth Scroll */
    @import url("layers/smooth-scroll.css");
}

@layer icons {
    /* Icon-Styles */
    @import url('icons/base.css');
}

@layer animations {
    /* Animations-Styles */
    @import url('layers/animations.css');
}
```

## Optionale Layer

Zusätzlich zu den in `core.css` enthaltenen Layern stehen folgende optionale Layer zur Verfügung:

### Forms Layer
```css
/* Erweiterte Formular-Styles */
import 'casoon-ui-lib/layers/forms.css';
```

### Icons Layer
```css
/* Erweiterte Icon-Styles */
import 'casoon-ui-lib/layers/icons.css';
```

## Module Integration

Die Casoon UI Library bietet einzelne CSS-Module für spezifische Komponenten:

### Grundlegende Komponenten
```css
import 'casoon-ui-lib/modules/button.module.css';
import 'casoon-ui-lib/modules/input.module.css';
import 'casoon-ui-lib/modules/textarea.module.css';
import 'casoon-ui-lib/modules/select.module.css';
import 'casoon-ui-lib/modules/checkbox.module.css';
import 'casoon-ui-lib/modules/radio.module.css';
import 'casoon-ui-lib/modules/switch.module.css';
```

### Navigationskomponenten
```css
import 'casoon-ui-lib/modules/header.module.css';
import 'casoon-ui-lib/modules/sidebar.module.css';
import 'casoon-ui-lib/modules/hamburger.module.css';
```

### Feedback-Komponenten
```css
import 'casoon-ui-lib/modules/modal.module.css';
import 'casoon-ui-lib/modules/progress.module.css';
import 'casoon-ui-lib/modules/spinner.module.css';
import 'casoon-ui-lib/modules/skeleton.module.css';
```

### Datenkomponenten
```css
import 'casoon-ui-lib/modules/table.module.css';
import 'casoon-ui-lib/modules/card.module.css';
import 'casoon-ui-lib/modules/slider.module.css';
```

### Zusätzliche Komponenten
```css
import 'casoon-ui-lib/modules/avatar.module.css';
import 'casoon-ui-lib/modules/badge.module.css';
import 'casoon-ui-lib/modules/chip.module.css';
import 'casoon-ui-lib/modules/code.module.css';
import 'casoon-ui-lib/modules/blog.module.css';
```

## Framework Integration

### React

```jsx
// Core und Theme (enthält bereits wichtige Layer)
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';

// Optionale Layer nach Bedarf
import 'casoon-ui-lib/layers/forms.css';

// Module nach Bedarf
import 'casoon-ui-lib/modules/button.module.css';
import 'casoon-ui-lib/modules/input.module.css';
```

### Vue

```js
// Core und Theme (enthält bereits wichtige Layer)
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';

// Optionale Layer nach Bedarf
import 'casoon-ui-lib/layers/forms.css';

// Module nach Bedarf
import 'casoon-ui-lib/modules/button.module.css';
import 'casoon-ui-lib/modules/input.module.css';
```

### Angular

```typescript
// In angular.json
"styles": [
  "node_modules/casoon-ui-lib/core.css",
  "node_modules/casoon-ui-lib/themes/day.css",
  "node_modules/casoon-ui-lib/layers/forms.css",
  "node_modules/casoon-ui-lib/modules/button.module.css",
  "node_modules/casoon-ui-lib/modules/input.module.css"
]
```

### Astro

```astro
---
// Core und Theme (enthält bereits wichtige Layer)
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';

// Optionale Layer nach Bedarf
import 'casoon-ui-lib/layers/forms.css';

// Module nach Bedarf
import 'casoon-ui-lib/modules/button.module.css';
import 'casoon-ui-lib/modules/input.module.css';
---
```

## Theme Customization

Die Casoon UI Library bietet verschiedene Themes:

- day.css (Standard)
- night.css
- sunset.css
- ocean.css
- forest.css
- autumn.css
- winter.css
- spring.css
- summer.css
- pastel.css
- retro.css
- monochrome.css
- neon.css

## Best Practices

### Performance
- Nutzen Sie die in core.css enthaltenen Layer
- Importieren Sie nur die benötigten optionalen Layer
- Importieren Sie nur die benötigten Module
- Nutzen Sie Tree Shaking für optimale Bundle-Größe

### Maintainability
- Halten Sie die Version aktuell
- Dokumentieren Sie verwendete Layer und Module
- Verwenden Sie die offiziellen APIs
- Strukturieren Sie Ihre Imports logisch

### Accessibility
- Testen Sie mit Screenreadern
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie ARIA-Attribute
- Berücksichtigen Sie verschiedene Nutzergruppen

## Troubleshooting

### Häufige Probleme

1. **Styles werden nicht geladen**
   - Überprüfen Sie die Import-Pfade
   - Stellen Sie sicher, dass die CSS-Dateien korrekt gebundelt werden
   - Importieren Sie zuerst core.css

2. **Themes funktionieren nicht**
   - Importieren Sie zuerst core.css
   - Dann importieren Sie das gewünschte Theme
   - Überprüfen Sie die Theme-Datei auf Korrektheit

3. **Optionale Layer funktionieren nicht**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie die Layer-Pfade
   - Testen Sie die Layer einzeln

4. **Module funktionieren nicht**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie die Modul-Pfade
   - Testen Sie die Module einzeln

5. **Komponenten werden nicht angezeigt**
   - Überprüfen Sie die HTML-Struktur
   - Stellen Sie sicher, dass die richtigen CSS-Klassen verwendet werden
   - Importieren Sie das entsprechende Modul

### Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/casoon-ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/casoon-ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com) 
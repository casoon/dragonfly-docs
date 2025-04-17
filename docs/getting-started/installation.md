# Installation

Die Casoon UI Library kann auf verschiedene Arten in Ihr Projekt integriert werden. Wählen Sie die Methode, die am besten zu Ihrem Projekt passt.

## Wichtiger Hinweis: CSS-Compiler-Anforderung

**Die casoon-ui-lib erfordert zwingend Lightning CSS oder einen ähnlichen modernen CSS-Compiler** (wie PostCSS mit geeigneten Plugins), der moderne CSS-Features unterstützt. Dies ist keine optionale Komponente, sondern eine technische Voraussetzung für die korrekte Funktionalität der Bibliothek.

Die Bibliothek nutzt fortschrittliche CSS-Features wie:
- CSS Nesting
- Custom Media Queries
- Logische Eigenschaften
- Container Queries
- Layer und Kaskaden-Ebenen

Ohne einen geeigneten CSS-Compiler werden diese Features nicht korrekt verarbeitet, was zu fehlerhaften Darstellungen führen kann. Wir empfehlen Lightning CSS aufgrund seiner Leistung und hervorragenden Kompatibilität mit der casoon-ui-lib.

## NPM

```bash
npm install casoon-ui-lib@0.2.1
npm install --save-dev lightningcss
```

## Yarn

```bash
yarn add casoon-ui-lib@0.2.1
yarn add --dev lightningcss
```

## CDN

**Hinweis:** Die CDN-Variante ist nur für einfache Tests und Demos geeignet. Für Produktionsumgebungen empfehlen wir dringend die NPM/Yarn-Installation mit Lightning CSS, um alle Features korrekt zu unterstützen.

```html
<!-- Core Styles (enthält bereits wichtige Layer) -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/core.css">

<!-- Theme -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/themes/day.css">

<!-- Optionale Layer -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/layers/forms.css">
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/layers/icons.css">

<!-- Module (optional) -->
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/modules/button.module.css">
<link rel="stylesheet" href="https://unpkg.com/casoon-ui-lib@0.2.1/modules/input.module.css">
```

Bei Verwendung der CDN-Variante beachten Sie, dass einige moderne CSS-Features möglicherweise nicht in allen Browsern unterstützt werden. Die vorkompilierten CDN-Dateien enthalten grundlegende Kompilierungen, aber für volle Funktionalität und Browser-Kompatibilität ist die lokale Kompilierung mit Lightning CSS notwendig.

## Lightning CSS Integration

Lightning CSS (früher bekannt als Lightningcss) ist ein leistungsstarker CSS-Compiler, der moderne CSS-Features unterstützt und die Entwicklung beschleunigt. Die casoon-ui-lib lässt sich nahtlos mit Lightning CSS integrieren.

### Installation von Lightning CSS

```bash
npm install --save-dev lightningcss
```

### Konfiguration in Ihrer Build-Pipeline

#### Mit CLI

```bash
npx lightningcss --minify --bundle --targets ">= 0.25%" input.css --output output.css
```

#### Mit JavaScript API

```js
const fs = require('fs');
const { bundle } = require('lightningcss');

const { code } = bundle({
  filename: 'input.css',
  minify: true,
  targets: { 
    chrome: 95, 
    firefox: 95, 
    safari: 15 
  },
  drafts: {
    nesting: true,
    customMedia: true
  }
});

fs.writeFileSync('output.css', code);
```

### Integration mit Bundlern

#### Vite

```js
// vite.config.js
import { defineConfig } from 'vite';
import { lightningcss } from 'vite-plugin-lightningcss';

export default defineConfig({
  plugins: [
    lightningcss({
      browserslist: '>= 0.25%',
      drafts: {
        nesting: true,
        customMedia: true
      }
    })
  ],
  css: {
    transformer: 'lightningcss'
  }
});
```

#### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'lightningcss-loader',
            options: {
              targets: { 
                chrome: 95, 
                firefox: 95, 
                safari: 15 
              },
              drafts: {
                nesting: true,
                customMedia: true
              }
            }
          }
        ]
      }
    ]
  }
};
```

### Beispiel der Integration

```css
/* styles.css */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css';
@import 'casoon-ui-lib/modules/alert.module.css';
@import 'casoon-ui-lib/modules/button.module.css';

/* Anpassungen mit CSS-Variablen */
:root {
  --button-padding: 0.75rem 1.5rem;
  --button-border-radius: 0.5rem;
}

/* CSS-Nesting mit Lightning CSS */
.custom-component {
  & .component__header {
    font-weight: 600;
  }
  
  & .component__content {
    padding: 1rem;
  }
  
  &.component--primary {
    border-color: var(--color-primary);
  }
}
```

## Core CSS

Die `core.css` Datei ist die Hauptdatei des Designsystems und enthält bereits wichtige Layer in folgender Reihenfolge:

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

### Effects Layer
```css
/* Erweiterte Effekt-Styles */
import 'casoon-ui-lib/layers/effects.css';
```

### Animations Layer
```css
/* Erweiterte Animations-Styles */
import 'casoon-ui-lib/layers/animations.css';
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
import 'casoon-ui-lib/modules/form.module.css';
import 'casoon-ui-lib/modules/file.module.css';
```

### Navigationskomponenten
```css
import 'casoon-ui-lib/modules/header.module.css';
import 'casoon-ui-lib/modules/sidebar.module.css';
import 'casoon-ui-lib/modules/hamburger.module.css';
import 'casoon-ui-lib/modules/tabs.module.css';
```

### Feedback-Komponenten
```css
import 'casoon-ui-lib/modules/modal.module.css';
import 'casoon-ui-lib/modules/progress.module.css';
import 'casoon-ui-lib/modules/spinner.module.css';
import 'casoon-ui-lib/modules/skeleton.module.css';
import 'casoon-ui-lib/modules/alert.module.css';
import 'casoon-ui-lib/modules/toast.module.css';
import 'casoon-ui-lib/modules/notification.module.css';
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
import 'casoon-ui-lib/modules/tooltip.module.css';
import 'casoon-ui-lib/modules/widget.module.css';
import 'casoon-ui-lib/modules/wizard.module.css';
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

### Astro JS mit Lightning CSS

Astro bietet eine hervorragende Integration mit Lightning CSS, die es ermöglicht, moderne CSS-Features wie Nesting und Custom Media Queries zu nutzen.

#### Installation

```bash
# Erstellen eines neuen Astro-Projekts (überspringen, falls bereits vorhanden)
npm create astro@latest

# Installation der casoon-ui-lib
npm install casoon-ui-lib@0.2.1

# Installation von Lightning CSS für Astro
npm install -D @astrojs/lightningcss
```

#### Konfiguration

Fügen Sie die Lightning CSS-Integration zu Ihrer `astro.config.mjs` Datei hinzu:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import lightningcss from '@astrojs/lightningcss';

export default defineConfig({
  integrations: [
    lightningcss({
      // Lightning CSS Optionen
      drafts: {
        nesting: true,
        customMedia: true
      },
      // Browser-Kompatibilität
      browserslist: '>= 0.25%'
    })
  ]
});
```

#### Verwendung in Astro-Komponenten

Sie können die casoon-ui-lib in Ihren Astro-Komponenten importieren:

```astro
---
// src/layouts/Layout.astro
// CSS-Imports
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/alert.module.css';
import 'casoon-ui-lib/modules/button.module.css';
---

<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Meine Astro-App</title>
  </head>
  <body class="theme-day">
    <slot />
  </body>
</html>
```

#### Komponenten-Beispiel

Erstellen Sie benutzerdefinierte Komponenten mit casoon-ui-lib:

```astro
---
// src/components/Alert.astro
// Eigenschaften der Komponente
interface Props {
  type?: 'success' | 'error' | 'warning' | 'info';
  dismissible?: boolean;
  icon?: boolean;
  title?: string;
}

// Standardwerte
const { 
  type = 'info', 
  dismissible = false, 
  icon = true,
  title = ''
} = Astro.props;

// Icon basierend auf Typ
const getIcon = (type) => {
  switch(type) {
    case 'success': return '✓';
    case 'error': return '✕';
    case 'warning': return '⚠';
    case 'info': 
    default: return 'ℹ';
  }
};
---

<div class:list={['alert', `alert--${type}`, { 'alert--dismissible': dismissible }]}>
  {icon && <div class="alert__icon">{getIcon(type)}</div>}
  <div class="alert__content">
    {title && <div class="alert__title">{title}</div>}
    <slot />
  </div>
  {dismissible && 
    <button class="alert__close" aria-label="Schließen">×</button>
  }
</div>

<script>
  // Client-seitiges JavaScript für schließbare Alerts
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.alert--dismissible .alert__close').forEach(button => {
      button.addEventListener('click', function() {
        const alert = this.closest('.alert');
        alert.style.opacity = '0';
        setTimeout(() => {
          alert.style.display = 'none';
        }, 300);
      });
    });
  });
</script>

<style>
  /* Lokale Stile mit Lightning CSS Features */
  .alert {
    /* Lokale Anpassungen */
    & .alert__title {
      letter-spacing: 0.5px;
    }
    
    /* Transition beim Ausblenden */
    transition: opacity 0.3s ease;
  }
</style>

#### Verwendung der Komponenten

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Alert from '../components/Alert.astro';
---

<Layout>
  <main>
    <h1>Willkommen zur casoon-ui-lib Demo</h1>
    
    <Alert type="success" title="Erfolg">
      Die Daten wurden erfolgreich gespeichert.
    </Alert>
    
    <Alert type="error" dismissible={true}>
      Ein Fehler ist aufgetreten.
    </Alert>
    
    <Alert type="warning" title="Achtung">
      Ihre Sitzung läuft in 5 Minuten ab.
    </Alert>
    
    <button class="button button--primary">
      Klick mich
    </button>
  </main>
</Layout>
```

### Vanilla HTML/JavaScript

```html
<head>
  <link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/layers/forms.css">
  <link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/modules/button.module.css">
  <link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/modules/input.module.css">
</head>
```

## Themenverwaltung

Die Casoon UI Library bietet mehrere vorgefertigte Themes:

```html
<!-- Standard-Themes -->
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/day.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/night.css">

<!-- Jahreszeiten-Themes -->
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/spring.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/summer.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/autumn.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/winter.css">

<!-- Spezielle Themes -->
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/forest.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/ocean.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/pastel.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/neon.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/retro.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/monochrome.css">
<link rel="stylesheet" href="path/to/node_modules/casoon-ui-lib/themes/sunset.css">
```

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<body class="theme-night">
  <!-- Ihr Inhalt -->
</body>
```

## Fehlerbehebung

### Häufige Probleme

1. **CSS-Features werden nicht korrekt verarbeitet**
   - **Hauptursache**: Fehlender oder falsch konfigurierter CSS-Compiler
   - **Lösung**: Stellen Sie sicher, dass Lightning CSS oder ein ähnlicher moderner CSS-Compiler korrekt installiert und konfiguriert ist
   - Überprüfen Sie, ob CSS Nesting und andere moderne Features unterstützt werden
   - Prüfen Sie Ihre Build-Pipeline auf Kompatibilität mit modernen CSS-Features

2. **CSS wird nicht geladen**
   - Überprüfen Sie die Pfade zu den CSS-Dateien
   - Stellen Sie sicher, dass die Dateien existieren
   - Überprüfen Sie die Netzwerkanfragen

3. **Theme wird nicht angewendet**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie, ob die Theme-Klasse gesetzt ist
   - Überprüfen Sie die Theme-Datei

4. **Optionale Layer funktionieren nicht**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie die Layer-Pfade
   - Testen Sie die Layer einzeln

5. **Module funktionieren nicht**
   - Stellen Sie sicher, dass core.css importiert ist
   - Überprüfen Sie die Modul-Pfade
   - Testen Sie die Module einzeln

6. **Komponenten werden nicht angezeigt**
   - Überprüfen Sie die HTML-Struktur
   - Stellen Sie sicher, dass die richtigen CSS-Klassen verwendet werden
   - Importieren Sie das entsprechende Modul

### Browserkompatibilität

Die casoon-ui-lib nutzt moderne CSS-Features, die kompiliert werden müssen, um in allen Browsern korrekt zu funktionieren. Wir empfehlen folgende Browserversionen oder neuer:

- Chrome 95+
- Firefox 95+
- Safari 15+
- Edge 95+

Für ältere Browser müssen Sie möglicherweise zusätzliche Polyfills bereitstellen oder Lightning CSS mit entsprechenden Zielversionen konfigurieren.

### Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/casoon-ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/casoon-ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com) 
---
title: Installation
category: Getting Started
---

# Installation

Die Casoon UI Library lässt sich flexibel in diverse Webprojekte integrieren und bietet verschiedene Installationsmethoden für unterschiedliche Anforderungen. Die aktuelle Version ist 0.5.1.

## Voraussetzungen

- Node.js (Version 16 oder höher)
- npm, yarn oder pnpm als Paketmanager

## Installation über Paketmanager

### Mit npm

```bash
npm install @casoon/ui-lib@latest
```

### Mit yarn

```bash
yarn add @casoon/ui-lib@latest
```

### Mit pnpm

```bash
pnpm add @casoon/ui-lib@latest
```

## Integration in Ihr Projekt

### 1. Basisintegration mit Core-CSS

Die Core-Styles enthalten alle grundlegenden CSS-Definitionen, einschließlich Reset-Layer, Design-Tokens, Layout, Typografie und alle UI-Komponenten. Sie bilden die Grundlage für alle weiteren Anpassungen.

#### In einer JavaScript-Anwendung

```javascript
// In Ihrer Hauptdatei (z.B. index.js, app.js, main.js)
import '@casoon/ui-lib/core.css';

// Optional: Spezifische Effekte importieren
import '@casoon/ui-lib/effects/glass.css';
import '@casoon/ui-lib/effects/animations.css';
```

#### Direkte CSS-Integration

```css
/* In Ihrer Haupt-CSS-Datei */
@import '@casoon/ui-lib/core.css';

/* Optional: Spezifische Effekte importieren */
@import '@casoon/ui-lib/effects/glass.css';
@import '@casoon/ui-lib/effects/animations.css';
```

#### Mit einem Link-Tag im HTML

```html
<!-- Core-Styles -->
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/core.css">

<!-- Optional: Spezifische Effekte -->
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/effects/glass.css">
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/effects/animations.css">
```

### 2. Modulare Integration

Die Casoon UI Library verwendet einen modularen Ansatz, der Ihnen erlaubt, nur die benötigten Komponenten zu laden und so die Paketgröße zu optimieren.

#### Einzelne Dateien direkt importieren

```javascript
// Grundlegende Dateien
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/layout.css';
import '@casoon/ui-lib/typography.css';

// Komponenten einzeln importieren
import '@casoon/ui-lib/components/button.css';
import '@casoon/ui-lib/components/card.css';
import '@casoon/ui-lib/components/forms.css';

// Effekte einzeln importieren
import '@casoon/ui-lib/effects/glass.css';
import '@casoon/ui-lib/effects/animations.css';
```

### 3. Theme-Aktivierung

Die Casoon UI Library bietet ein flexibles Theming-System mit mehreren vordefinierten Themes.

#### Theme importieren

```javascript
// Standard-Theme (Day)
import '@casoon/ui-lib/themes/day.css';

// Oder ein anderes Theme
import '@casoon/ui-lib/themes/night.css';
import '@casoon/ui-lib/themes/ocean.css';
```

#### Theme aktivieren

Fügen Sie die entsprechende Theme-Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<!-- Für das Night-Theme -->
<html class="theme-night">
  <!-- Seiteninhalt -->
</html>

<!-- Oder am Body-Element -->
<body class="theme-ocean">
  <!-- Seiteninhalt -->
</body>
```

Weitere Details zum Theming finden Sie in der [Theming-Dokumentation](/getting-started/themes).

## Nutzung mit Build-Tools

### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

// In Ihrer Anwendungsdatei
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/button.css';
```

### Vite

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    // Unterstützung für moderne CSS-Features aktivieren
    postcss: {
      plugins: [
        // Für volle Lightning CSS Unterstützung
      ]
    }
  }
});

// In Ihrer Hauptdatei
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/components/button.css';
```

### Astro

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Casoon UI ist für Astro optimiert
  // und benötigt keine besondere Konfiguration
});

// In Ihrer Astro-Komponente
---
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/night.css';
---

<html class="theme-night">
  <!-- Inhalt -->
</html>
```

### Lightning CSS Konfiguration (empfohlen)

Für optimale Ergebnisse wird die Verwendung von Lightning CSS (früher Parcel CSS) empfohlen:

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('lightningcss')({
      // Lightning CSS Optionen
      drafts: {
        customMedia: true,
        nesting: true,
        interpolation: true // Für interpolate-size Unterstützung
      },
      include: 'standard'
    })
  ]
};
```

## CDN-Integration

Sie können die Casoon UI Library auch direkt über ein CDN einbinden, ohne lokale Installation:

```html
<!-- Core-Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.0/core.css">

<!-- Optionales Theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.0/themes/night.css">

<!-- Einzelne Komponenten -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.0/components/button.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.0/components/card.css">
```

## Besondere Funktionen in Version 0.5.0

### Verbesserte Animations-CSS

```css
/* Moderne Animationen mit vereinheitlichtem Benennungsschema */
.element {
  animation: slide-in-left 0.3s ease-out;
}

/* Motion-Safe und Motion-Reduce Utilities */
.motion-safe {
  /* Animationen, die nur angezeigt werden, wenn keine Einschränkung besteht */
}

.motion-reduce {
  /* Alternative für Nutzer mit aktiviertem 'prefers-reduced-motion' */
}
```

### Flüssige Interpolation (interpolate-size)

Die neue Version unterstützt `interpolate-size: allow-keywords` für flüssige Übergänge zwischen Größenwerten:

```css
/* Optimiert für Lightning CSS */
:root {
  interpolate-size: allow-keywords;
}

/* Flüssige Typografie */
.fluid-heading {
  font-size: medium with-range(small, x-large);
}
```

### Dialog-Animationen

```html
<button id="openDialog">Dialog öffnen</button>
<dialog id="myDialog" class="dialog dialog-enter">
  Dialog-Inhalt
</dialog>

<script>
  document.getElementById('openDialog').addEventListener('click', () => {
    document.getElementById('myDialog').showModal();
  });
</script>
```

## Kompatibilität

Die Casoon UI Library unterstützt alle modernen Browser. Einige fortschrittliche Features wie `interpolate-size` benötigen neuere Browser oder Lightning CSS zur Kompilierung.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Core-CSS | 49+ | 31+ | 9.1+ | 15+ |
| Container-Queries | 105+ | 110+ | 16.4+ | 105+ |
| interpolate-size | 120+ | 121+ (flag) | 17+ | 120+ |
| @property | 85+ | 113+ | 15.4+ | 85+ |

## Weitere Informationen

- [Layer-System](/guide/layer-system)
- [Design-Tokens](/getting-started/tokens)
- [Layout-System](/getting-started/layout)
- [Theme-System](/getting-started/themes) 
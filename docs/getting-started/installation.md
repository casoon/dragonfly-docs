---
title: Installation
category: Getting Started
---

# Installation

Die Casoon UI Library lässt sich flexibel in diverse Webprojekte integrieren und bietet verschiedene Installationsmethoden für unterschiedliche Anforderungen.

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

### 1. Basisintegration mit Core-Styles

Die Core-Styles enthalten alle grundlegenden CSS-Definitionen, einschließlich Reset-Layer, Design-Tokens und Custom-Properties. Sie bilden die Grundlage für alle weiteren Komponenten.

#### In einer JavaScript-Anwendung

```javascript
// In Ihrer Hauptdatei (z.B. index.js, app.js, main.js)
import '@casoon/ui-lib/dist/core.css';
```

#### Direkte CSS-Integration

```css
/* In Ihrer Haupt-CSS-Datei */
@import '@casoon/ui-lib/dist/core.css';
```

#### Mit einem Link-Tag im HTML

```html
<link rel="stylesheet" href="node_modules/@casoon/ui-lib/dist/core.css">
```

### 2. Modulare Integration

Die Casoon UI Library verwendet einen modularen Ansatz, der Ihnen erlaubt, nur die benötigten Komponenten zu laden und so die Paketgröße zu optimieren.

#### Vollständige Library

Für eine vollständige Integration aller Komponenten und Module:

```javascript
import '@casoon/ui-lib/dist/all.css';
```

#### Einzelne Module

Für präzise Performance-Optimierung können einzelne Module importiert werden:

```javascript
// Nur die benötigten Module importieren
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/modules/buttons.css';
import '@casoon/ui-lib/dist/modules/cards.css';
import '@casoon/ui-lib/dist/modules/forms.css';
```

### 3. Theme-Aktivierung

Die Casoon UI Library bietet ein flexibles Theming-System mit mehreren vordefinierten Themes.

#### Theme importieren

```javascript
// Standard-Theme (Day)
import '@casoon/ui-lib/dist/themes/day.css';

// Oder ein anderes Theme
import '@casoon/ui-lib/dist/themes/night.css';
import '@casoon/ui-lib/dist/themes/ocean.css';
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
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/modules/buttons.css';
```

### Vite

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Keine spezielle Konfiguration erforderlich
});

// In Ihrer Hauptdatei
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/modules/buttons.css';
```

### Parcel

Parcel benötigt keine spezielle Konfiguration:

```javascript
// In Ihrer Einstiegsdatei
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/modules/buttons.css';
```

## CDN-Integration

Sie können die Casoon UI Library auch direkt über ein CDN einbinden, ohne lokale Installation:

```html
<!-- Core-Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/core.css">

<!-- Optionales Theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/themes/night.css">

<!-- Einzelne Module -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/modules/buttons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/modules/cards.css">

<!-- Oder die komplette Library -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/all.css">
```

### UNPKG-Alternative

```html
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib@latest/dist/core.css">
```

## Framework-Integration

### React

```jsx
// In Ihrer App.jsx oder index.jsx
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/themes/day.css';
import '@casoon/ui-lib/dist/modules/buttons.css';

function App() {
  return (
    <div className="container">
      <h1 className="heading-xl mb-4">Willkommen</h1>
      <p className="mb-6">Hier ist ein Beispiel für die Casoon UI Library in React.</p>
      <button className="btn btn--primary">Primär-Button</button>
      <button className="btn btn--secondary ml-3">Sekundär-Button</button>
    </div>
  );
}
```

#### Mit Next.js

```jsx
// In _app.js oder layout.js (App Router)
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/themes/day.css';
import '@casoon/ui-lib/dist/modules/buttons.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-day">
      <Component {...pageProps} />
    </div>
  );
}
```

### Vue.js

```javascript
// In main.js
import { createApp } from 'vue';
import App from './App.vue';
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/themes/day.css';
import '@casoon/ui-lib/dist/modules/buttons.css';

createApp(App).mount('#app');
```

```vue
<!-- In einer Komponente -->
<template>
  <div class="container">
    <h1 class="heading-xl mb-4">Willkommen</h1>
    <p class="mb-6">Hier ist ein Beispiel für die Casoon UI Library in Vue.</p>
    <button class="btn btn--primary">Primär-Button</button>
    <button class="btn btn--secondary ml-3">Sekundär-Button</button>
  </div>
</template>
```

### Angular

```typescript
// In styles.css oder angular.json
@import '@casoon/ui-lib/dist/core.css';
@import '@casoon/ui-lib/dist/themes/day.css';
@import '@casoon/ui-lib/dist/modules/buttons.css';
```

```typescript
// In angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@casoon/ui-lib/dist/core.css",
              "node_modules/@casoon/ui-lib/dist/themes/day.css",
              "node_modules/@casoon/ui-lib/dist/modules/buttons.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

```html
<!-- In einer Komponenten-Template -->
<div class="container">
  <h1 class="heading-xl mb-4">Willkommen</h1>
  <p class="mb-6">Hier ist ein Beispiel für die Casoon UI Library in Angular.</p>
  <button class="btn btn--primary">Primär-Button</button>
  <button class="btn btn--secondary ml-3">Sekundär-Button</button>
</div>
```

### Svelte

```javascript
// In Ihrer Haupt-JS-Datei
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/themes/day.css';
import '@casoon/ui-lib/dist/modules/buttons.css';
```

```svelte
<!-- In einer Svelte-Komponente -->
<div class="container">
  <h1 class="heading-xl mb-4">Willkommen</h1>
  <p class="mb-6">Hier ist ein Beispiel für die Casoon UI Library in Svelte.</p>
  <button class="btn btn--primary">Primär-Button</button>
  <button class="btn btn--secondary ml-3">Sekundär-Button</button>
</div>
```

## CSS-Präprozessoren

### SASS/SCSS

```scss
// In Ihrer main.scss
@import '@casoon/ui-lib/src/core.scss';
@import '@casoon/ui-lib/src/themes/day.scss';
@import '@casoon/ui-lib/src/modules/buttons.scss';

// Eigene Erweiterungen
.custom-container {
  @extend .container;
  max-width: 1400px;
}

// Eigene Theme-Varianten
.theme-custom {
  --color-primary: #ff6b6b;
  --color-secondary: #51cf66;
}
```

### Less

```less
// In Ihrer main.less
@import '@casoon/ui-lib/src/core.less';
@import '@casoon/ui-lib/src/themes/day.less';
@import '@casoon/ui-lib/src/modules/buttons.less';
```

## Nutzung mit verschiedenen Server-Umgebungen

### Statisches HTML

```html
<!DOCTYPE html>
<html lang="de" class="theme-day">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casoon UI Demo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/core.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/themes/day.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/modules/buttons.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/modules/cards.css">
</head>
<body>
  <div class="container py-8">
    <h1 class="heading-xl mb-4">Casoon UI Beispiel</h1>
    <div class="card p-4 mb-4">
      <h2 class="heading-lg mb-2">Beispiel-Karte</h2>
      <p class="mb-4">Dies ist ein Beispiel für die Verwendung der Casoon UI Komponenten.</p>
      <button class="btn btn--primary">Mehr erfahren</button>
    </div>
  </div>
</body>
</html>
```

### PHP

```php
<!DOCTYPE html>
<html lang="de" class="theme-day">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Casoon UI in PHP</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/core.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/themes/day.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@latest/dist/modules/buttons.css">
</head>
<body>
  <div class="container py-8">
    <h1 class="heading-xl mb-4">PHP mit Casoon UI</h1>
    
    <?php 
    $items = ['Element 1', 'Element 2', 'Element 3'];
    
    echo '<div class="card p-4 mb-4">';
    echo '<h2 class="heading-lg mb-2">Dynamische Liste</h2>';
    echo '<ul class="list mb-4">';
    
    foreach ($items as $item) {
      echo '<li class="mb-2">' . htmlspecialchars($item) . '</li>';
    }
    
    echo '</ul>';
    echo '<button class="btn btn--primary">Aktion</button>';
    echo '</div>';
    ?>
    
  </div>
</body>
</html>
```

## Fehlerbehebung

### Mögliche Probleme und Lösungen

#### CSS wird nicht geladen

- Überprüfen Sie die Pfade in Ihren Import-Anweisungen
- Stellen Sie sicher, dass die Node-Module korrekt installiert sind (`node_modules/@casoon/ui-lib` sollte existieren)
- Prüfen Sie die Netzwerkanfragen in den Browser-Entwicklertools
- Versuchen Sie, die absoluten Pfade mit dem CDN zu verwenden

#### Konflikte mit anderen CSS-Frameworks

Wenn die Casoon UI Library zusammen mit anderen CSS-Frameworks verwendet wird, können Stilkonflikte auftreten. Verwenden Sie in diesem Fall den spezifischen Casoon-Wrapper:

```html
<div class="casoon-wrapper">
  <!-- Casoon UI-Stile haben hier Vorrang -->
  <button class="btn btn--primary">Primär-Button</button>
</div>
```

Oder nutzen Sie die Layer-Spezifizität:

```css
@layer casoon-override {
  /* Hier definierte Stile überschreiben die Casoon-Standards */
  .btn--primary {
    background-color: #ff6b6b;
  }
}
```

#### Theme wird nicht korrekt angewendet

- Stellen Sie sicher, dass die Theme-CSS-Datei importiert ist
- Überprüfen Sie, ob die Theme-Klasse (`theme-day`, `theme-night`, etc.) korrekt am `<html>` oder `<body>` Element angewendet wird
- Stellen Sie sicher, dass core.css vor dem Theme importiert wird

## Browser-Kompatibilität

Die Casoon UI Library unterstützt moderne Browser:

- Chrome (neueste 2 Hauptversionen)
- Firefox (neueste 2 Hauptversionen)
- Safari (neueste 2 Hauptversionen)
- Edge (neueste 2 Hauptversionen)

Für ältere Browser kann ein CSS-Variablen-Polyfill wie [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) erforderlich sein.

## Nächste Schritte

- Entdecken Sie die [Komponenten-Dokumentation](/components) für Details zu verfügbaren UI-Elementen
- Lesen Sie die [Layout-Anleitung](/getting-started/layout) für Informationen zum Gestaltungssystem
- Erfahren Sie mehr über das [Theming-System](/getting-started/themes) für individuelle Anpassungen
- Erkunden Sie das [Icon-System](/getting-started/iconsets) für die Integration von Icons 
---
title: Einführung
category: Getting Started
---

<script setup>
import { UI_LIB_VERSION } from '../.vitepress/data/versions'
</script>

# Erste Schritte mit Casoon UI

Willkommen bei der Casoon UI Library. Diese Seite bietet eine detaillierte Einführung und alle Informationen, die Sie für den Einstieg benötigen. Die aktuelle Version ist {{ UI_LIB_VERSION }}.

## Technische Grundlagen

Die Casoon UI Library basiert auf fortschrittlichen Web-Technologien und bietet einen modernen Ansatz für UI-Entwicklung:

- **CSS Layer-basierte Architektur**: Präzise Steuerung der Spezifität und saubere Organisation des Codes
- **Container Queries**: Komponentenbasierte Responsivität für flexiblere Layouts
- **Lightning CSS Optimierung**: Effiziente Verarbeitung moderner CSS-Features
- **Barrierefreiheit**: Ganzheitliche Unterstützung für assistive Technologien

## CSS-Layer-System im Detail

Das Herzstück der Casoon UI Library ist das präzise strukturierte Layer-System:

```css
@layer reset,                /* Grundlegender Browser-Reset */
       tokens,               /* Design-Tokens und Variablen */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Bidirektionale Layouts (RTL/LTR) */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -varianten */
       layout,               /* Layout-Grundlagen */
       layout-queries,       /* Responsive Anpassungen */
       typography,           /* Typografie-System */
       utilities,            /* Atomare Utility-Klassen */
       smooth-scroll,        /* Scrollverhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       components,           /* UI-Komponenten */
       animations,           /* Bewegungssystem */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

Dieses Layer-System bietet mehrere Vorteile:
- Vermeidung von Spezifitätskonflikten
- Bessere Organisation des Codes
- Möglichkeit zur selektiven Überschreibung

## Detaillierte Installationsanleitung

### Installation über npm

```bash
npm install @casoon/ui-lib@latest
```

### Import in Ihr Projekt

Sie können die gesamte Library oder einzelne Module importieren:

```js
// Gesamte Library
import '@casoon/ui-lib/core.css';

// Nur bestimmte Module
import '@casoon/ui-lib/modules/button.module.css';
import '@casoon/ui-lib/modules/card.module.css';
```

### Themes aktivieren

1. Importieren Sie ein Theme:
   ```js
   import '@casoon/ui-lib/themes/day.css';
   ```

2. Aktivieren Sie das Theme über eine CSS-Klasse:
   ```html
   <body class="theme-day">
     <!-- Ihr Inhalt -->
   </body>
   ```

## Container Queries in der Praxis

Die Casoon UI Library nutzt Container Queries für komponentenbasierte Responsivität:

```html
<div class="container-query">
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Inhalt passt sich an die Größe des Containers an, nicht an die des Viewports -->
  </div>
</div>
```

Dies ermöglicht eine flexiblere Layout-Gestaltung als klassische Media Queries, da Komponenten basierend auf dem verfügbaren Platz ihres Containers reagieren können.

## Arbeiten mit Design Tokens

Design Tokens sind die Grundbausteine des visuellen Systems:

```css
:root {
  /* Primärfarben */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;
  
  /* Abstände */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  /* ... weitere Tokens ... */
}
```

Die Verwendung von Design Tokens anstelle von hartkodierten Werten sorgt für:
- Konsistentes Design
- Einfachere Wartbarkeit
- Flexiblere Theming-Möglichkeiten

## Erste Schritte für Entwickler

Um schnell mit der Casoon UI Library zu arbeiten, empfehlen wir folgende ersten Schritte:

1. **Verstehen Sie die Struktur**: Machen Sie sich mit dem Layer-System und der Modulorganisation vertraut
2. **Erkunden Sie die Komponenten**: Sehen Sie sich die verfügbaren [Komponenten](/components/) an
3. **Lernen Sie die Utility-Klassen**: Nutzen Sie die [Utility-Klassen](/getting-started/utilities) für schnelles Styling
4. **Verstehen Sie die Themes**: Erfahren Sie, wie Sie [Themes](/getting-started/themes) anpassen können

## Framework-Integration

Die Casoon UI Library funktioniert mit allen modernen JavaScript-Frameworks:

### React

```jsx
// In Ihrer App.jsx oder index.jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';

function App() {
  return (
    <div className="theme-day">
      <button className="button primary">Klick mich</button>
    </div>
  );
}
```

### Vue.js

```js
// In Ihrer main.js
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
```

```vue
<template>
  <div class="theme-day">
    <button class="button primary">Klick mich</button>
  </div>
</template>
```

### Astro

```astro
---
// In Ihrer .astro Datei
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
---

<div class="theme-day">
  <button class="button primary">Klick mich</button>
</div>
```

## Häufige Fragen (FAQ)

### Kann ich die Library mit React/Vue/Angular verwenden?
Ja, die Casoon UI Library ist framework-agnostisch und funktioniert mit allen modernen Frontend-Frameworks.

### Kann ich nur bestimmte Komponenten verwenden?
Ja, Sie können einzelne Module importieren, um die Dateigröße zu reduzieren.

### Unterstützt die Library Dark Mode?
Ja, die Library bietet vollständige Dark Mode-Unterstützung über Themes.

### Wie kann ich das Design an meine Marke anpassen?
Sie können Design Tokens über CSS-Variablen überschreiben oder eigene Themes erstellen.

## Troubleshooting

### Komponenten werden nicht korrekt dargestellt
Stellen Sie sicher, dass Sie die `core.css` und ein Theme importiert haben und die Theme-Klasse im HTML vorhanden ist.

### CSS-Konflikte mit anderen Bibliotheken
Verwenden Sie die spezifischen Layer-Namen, um die Priorität der Casoon-Stile anzupassen.

### Responsive Layouts funktionieren nicht wie erwartet
Überprüfen Sie, ob Sie Container Queries korrekt einsetzen und die entsprechenden Klassen verwenden.

## Nächste Schritte

- [Installation und Konfiguration](/getting-started/installation) - Detaillierte Installationsanleitungen
- [Layout-System kennenlernen](/getting-started/layout) - Erfahren Sie mehr über das Layout-System
- [Komponenten erkunden](/components/) - Entdecken Sie die verfügbaren Komponenten
- [Effekte](/guide/effects-system) - Erkunden Sie die visuellen Effekte und Animationen

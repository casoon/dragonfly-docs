# Casoon UI Library v0.5.1

<div align="center">
    <img src="https://placeholder.pics/svg/200x200/DEDEDE/555555/casoon-ui" alt="Casoon UI Logo" width="200"/>
    <p>Ein modernes CSS-Framework mit Layer-System, optimiert für Lightning CSS</p>
</div>

## 🚀 Funktionen

- **Layer-basierte Architektur**: Präzise Kontrolle über CSS-Spezifität
- **Optimiert für Lightning CSS**: Vollständige Unterstützung für moderne Build-Tools
- **Container Queries**: Komponentenbasierte Responsivität für moderne Layouts
- **Flüssige Typografie**: Unterstützung für `interpolate-size` für flexible Größenanpassungen
- **Einfache Integration**: Ein einziger Import für die gesamte Bibliothek
- **Modular und erweiterbar**: Über 30 UI-Komponenten 
- **Umfangreiche Themes**: Anpassbare Light/Dark-Modi und Farbschemen
- **Barrierefreiheit**: Optimierte Komponenten mit Unterstützung für `prefers-reduced-motion`

## 📦 Installation

```bash
# npm
npm install @casoon/ui-lib@latest

# yarn
yarn add @casoon/ui-lib@latest

# pnpm
pnpm add @casoon/ui-lib@latest
```

## 🔧 Verwendung

### Einfache Integration (empfohlen)

Mit der aktuellen Version reicht ein einziger Import für die gesamte Bibliothek:

```css
/* Alle nötigen Styles werden durch diesen einen Import geladen */
@import '@casoon/ui-lib/core.css';

/* Effekte müssen einzeln importiert werden */
@import '@casoon/ui-lib/effects/glass.css';
@import '@casoon/ui-lib/effects/animations.css';
/* Weitere Effekte nach Bedarf importieren */
```

Die `core.css` importiert automatisch alle notwendigen Dateien in der optimalen Reihenfolge.

### HTML-Beispiel

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="node_modules/@casoon/ui-lib/core.css">
    <title>Casoon UI Beispiel</title>
</head>
<body>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Willkommen bei Casoon UI</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card">
                <div class="card__header">Beispiel-Karte</div>
                <div class="card__body">
                    <p>Dies ist eine einfache Karte mit Text.</p>
                    <button class="button primary mt-4">Aktion</button>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">Formularbeispiel</div>
                <div class="card__body">
                    <form class="form">
                        <div class="form-group">
                            <label for="name" class="form-label">Name</label>
                            <input id="name" type="text" class="input" placeholder="Name eingeben">
                        </div>
                        <button type="submit" class="button primary mt-4">Senden</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🏗️ Architektur

Casoon UI Library basiert auf einem Layer-System, das die CSS-Spezifität und Kaskadierung präzise steuert:

```css
@layer reset,                /* Browser-Reset, Normalisierung */
       tokens,               /* Design-Tokens und Variablen */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Logische Eigenschaften für Bidirektionalität */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -variationen */
       layout,               /* Layout-Grundlagen */
       layout-queries,       /* Responsive Anpassungen */
       typography,           /* Typografie-System */
       utilities,            /* Utility-Klassen */
       smooth-scroll,        /* Scroll-Verhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       components,           /* UI-Komponenten */
       animations,           /* Bewegungssystem */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

## 🧩 Komponenten-System

Casoon UI bietet eine umfangreiche Sammlung von UI-Komponenten, die für verschiedene Anwendungsfälle konzipiert sind:

### Verfügbare Komponenten

Hier eine Auswahl der wichtigsten Komponenten:

```html
<!-- Button-Komponente -->
<button class="button primary">Primärer Button</button>
<button class="button secondary">Sekundärer Button</button>

<!-- Karten-Komponente -->
<div class="card">
    <div class="card__header">Kartentitel</div>
    <div class="card__body">Karteninhalt</div>
    <div class="card__footer">Kartenfußzeile</div>
</div>

<!-- Formular-Elemente -->
<input class="input" type="text" placeholder="Text eingeben">
<textarea class="textarea" placeholder="Mehrzeiliger Text"></textarea>
<select class="select">
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Alert/Hinweis -->
<div class="alert success">
    <div class="alert__icon">✓</div>
    <div class="alert__content">Erfolgreich gespeichert!</div>
</div>

<!-- Fortschrittsanzeige -->
<div class="progress">
    <div class="progress__bar" style="width: 75%"></div>
</div>
```

### Modularer Import

Komponenten können einzeln importiert werden, wenn nur bestimmte benötigt werden:

```css
/* Nur bestimmte Komponenten laden */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/components/card.css';
@import '@casoon/ui-lib/components/input.css';
```

## 🎨 Themes

Casoon UI unterstützt ein umfangreiches Theming-System mit vordefinierten Themes:

```html
<!-- Standard Theme (hell) -->
<body class="theme-day">
    <!-- Inhalte im hellen Modus -->
</body>

<!-- Dunkles Theme -->
<body class="theme-night">
    <!-- Inhalte im dunklen Modus -->
</body>

<!-- Andere Themes -->
<body class="theme-ocean">
    <!-- Ozean-Theme -->
</body>
```

### Benutzerdefinierte Themes

Themes lassen sich leicht anpassen:

```css
@import '@casoon/ui-lib/core.css';

/* Eigenes Theme definieren */
@layer themes {
  .theme-custom {
    --color-primary: #8e44ad;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;
    
    /* Hintergrund- und Textfarben */
    --color-background: #ffffff;
    --color-text: #333333;
  }
}
```

## 🖥️ Framework-Integration

### React

```jsx
// In index.jsx oder App.jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/night.css';

function App() {
  return (
    <div className="theme-night">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Casoon UI in React</h1>
        <button className="button primary">Klick mich</button>
      </div>
    </div>
  );
}
```

### Vue.js

```vue
<!-- Im App.vue -->
<template>
  <div class="theme-day">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Casoon UI in Vue</h1>
      <button class="button primary">Klick mich</button>
    </div>
  </div>
</template>

<script setup>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
</script>
```

### Astro

```astro
---
// In einer .astro Datei
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/ocean.css';
---

<html>
  <body class="theme-ocean">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Casoon UI in Astro</h1>
      <button class="button primary">Klick mich</button>
    </div>
  </body>
</html>
```

## 🧰 Nutzung in KI-Tools (Model Context Protocol – MCP)

Um die Entwicklung mit der casoon/ui-lib zu vereinfachen, kann dein Editor oder KI-Tool (z. B. Cursor oder Continue) automatisch kontextuelle Informationen über das Projekt laden – inklusive Code, Struktur und Dokumentation.

Dazu wird das Model Context Protocol (MCP) genutzt.

### Konfiguration (z. B. für Cursor)

Füge folgende Konfiguration in die cursor.config.json oder settings.json deines Tools ein:

```json
{
  "mcpServers": {
    "gitmcp-ui-lib": {
      "url": "https://gitmcp.io/casoon/ui-lib"
    },
    "gitmcp-ui-docs": {
      "url": "https://gitmcp.io/casoon/ui-docs"
    }
  }
}
```

### Erklärung

- **gitmcp-ui-lib**: Liefert strukturelle Infos zur Komponentenbibliothek selbst (Quellcode, Props, Imports, usw.).
- **gitmcp-ui-docs**: Liefert Informationen aus der begleitenden VitePress-Dokumentation (z. B. Beispiele, Varianten, Slots).

### Vorteil

Mit dieser Konfiguration kann ein KI-Assistent dein Projekt besser verstehen und dir gezielter helfen – etwa beim:

- Verwenden von Komponenten mit den richtigen Props
- Erstellen von Snippets basierend auf echten Beispielen
- Verstehen der Architektur deines Projekts

## 📝 Dokumentation

Ausführliche Dokumentation unter: [Casoon UI Docs](https://casoon.github.io/ui-docs/)

## 📜 Lizenz

MIT 
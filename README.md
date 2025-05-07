# Casoon UI Library v0.3.25

<div align="center">
    <img src="https://placeholder.pics/svg/200x200/DEDEDE/555555/casoon-ui" alt="Casoon UI Logo" width="200"/>
    <p>Ein modernes CSS-Framework mit Layer-System, optimiert für Lightning CSS</p>
</div>

## 🚀 Funktionen

- **Layer-basierte Architektur**: Präzise Kontrolle über CSS-Spezifität
- **Optimiert für Lightning CSS**: Vollständige Unterstützung für moderne Build-Tools
- **Einfache Integration**: Ein einziger Import für die gesamte Bibliothek
- **Modular und erweiterbar**: Über 30 UI-Komponenten 
- **Themefähig**: Umfangreiche Anpassungsmöglichkeiten
- **Responsiv**: Container-Queries und flexibles Grid-System
- **Zugänglich**: WCAG-konforme Komponenten

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

Mit der neuen Version reicht ein einziger Import für die gesamte Bibliothek:

```css
/* Alle nötigen Styles werden durch diesen einen Import geladen */
@import '@casoon/ui-lib/core.css';

/* Effekte müssen jetzt einzeln importiert werden */
@import '@casoon/ui-lib/effects/blur.css';
@import '@casoon/ui-lib/effects/shadow.css';
@import '@casoon/ui-lib/effects/glass.css';
/* Weitere Effekte nach Bedarf importieren */
```

Die `core.css` importiert automatisch alle notwendigen Dateien in der optimalen Reihenfolge:
- Basis-System (Reset, Tokens, Variablen)
- Layout-System (Grid, Flexbox, Container)
- Typografie-System
- Farbsystem und Color-Mix
- Animations-System
- Alle UI-Komponenten

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
                    <button class="button button--primary mt-4">Aktion</button>
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
                        <button type="submit" class="button button--primary mt-4">Senden</button>
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
       tokens,               /* Design-Tokens, Variablen */
       custom-properties,    /* Registrierte CSS-Eigenschaften */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Logische Eigenschaften für Bidirektionalität */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -variationen */
       layout,               /* Layout-Grundlagen */
       typography,           /* Typografie-System */
       utilities,            /* Utility-Klassen */
       smooth-scroll,        /* Scroll-Verhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       animations,           /* Animationen */
       effects,              /* Visuelle Effekte */
       themes,               /* Theming-System */
       components;           /* Komponenten (für benutzerdefinierte Erweiterungen) */
```

## 🧩 Komponenten-System

Casoon UI bietet mehr als 30 UI-Komponenten, die in vier Hauptkategorien unterteilt sind:

### Eingabe- und Formular-Komponenten

```html
<button class="button button--primary">Primärer Button</button>
<input class="input" type="text" placeholder="Text eingeben">
<div class="checkbox">
    <input id="check1" type="checkbox" class="checkbox__input">
    <label for="check1" class="checkbox__label">Option auswählen</label>
</div>
```

### Layout-Komponenten

```html
<div class="card">
    <div class="card__header">Kartentitel</div>
    <div class="card__body">Karteninhalt</div>
    <div class="card__footer">Kartenfußzeile</div>
</div>

<div class="modal" id="example-modal">
    <div class="modal__content">
        <div class="modal__header">Modaltitel</div>
        <div class="modal__body">Modalinhalt</div>
        <div class="modal__footer">
            <button class="button button--secondary modal__close">Schließen</button>
            <button class="button button--primary">Bestätigen</button>
        </div>
    </div>
</div>
```

### Feedback-Komponenten

```html
<div class="alert alert--success">
    <div class="alert__icon">✓</div>
    <div class="alert__content">Erfolgreich gespeichert!</div>
</div>

<div class="progress">
    <div class="progress__bar" style="width: 75%"></div>
</div>

<div class="spinner"></div>
```

### Navigations- und Interaktionskomponenten

```html
<nav class="tabs">
    <div class="tab-list" role="tablist">
        <button class="tab-list__item tab-list__item--active" role="tab">Tab 1</button>
        <button class="tab-list__item" role="tab">Tab 2</button>
    </div>
    <div class="tab-panel" role="tabpanel">Inhalt von Tab 1</div>
</nav>

<table class="table table--striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Alter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Max Mustermann</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Anna Beispiel</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

## 🎨 Themes

Casoon UI unterstützt ein umfangreiches Theming-System, das einfach zu implementieren ist:

```html
<!-- Standard-Modus (hell) wird automatisch verwendet -->
<body>
    <!-- Inhalte im hellen Modus -->
</body>

<!-- Dunkler Modus -->
<body data-theme="dark">
    <!-- Inhalte im dunklen Modus -->
</body>
```

### Benutzerdefinierte Themes

Themes lassen sich leicht anpassen:

```css
@import '@casoon/ui-lib/core.css';

/* Eigenes Theme definieren */
@layer themes {
  :root {
    --color-primary: #8e44ad;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;
  }
  
  [data-theme="custom"] {
    --color-primary: #3498db;
    --color-secondary: #2ecc71;
    --color-accent: #e74c3c;
  }
}
```

## 🖥️ Framework-Integration

### React

```jsx
// In index.jsx oder App.jsx
import '@casoon/ui-lib/core.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <button className="button button--primary">Primärer Button</button>
    </div>
  );
}
```

### Vue

```js
// In main.js
import '@casoon/ui-lib/core.css';
```

```vue
<!-- In einer Komponente -->
<template>
  <div class="container mx-auto p-4">
    <button class="button button--primary">Primärer Button</button>
  </div>
</template>
```

## 🔍 Lightning CSS-Optimierung

Casoon UI ist speziell für Lightning CSS optimiert:

1. **Effizientes Layer-System**: Optimale Kompilierung und Minimierung
2. **Tree-Shaking-Support**: Ungenutzte Styles werden entfernt
3. **Automatische Präfixierung**: Maximale Browserunterstützung
4. **Optimierte Variablen**: CSS-Variablen werden effizient verarbeitet

## 📊 Responsives Design

Casoon UI setzt auf ein flexibles 12-Spalten-Grid und Container-Queries für moderne Responsivität:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div>Spalte 1</div>
  <div>Spalte 2</div>
  <div>Spalte 3</div>
  <div>Spalte 4</div>
</div>

<div class="container-query">
  <!-- Dieser Container passt sich basierend auf seine eigene Breite an, nicht auf die des Viewports -->
  <div class="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 gap-4">
    <div>Spalte 1</div>
    <div>Spalte 2</div>
    <div>Spalte 3</div>
  </div>
</div>
```

## 📐 Utilities

Casoon UI bietet praktische Utility-Klassen für schnelles Styling:

```html
<!-- Margin und Padding -->
<div class="mt-4 mb-6 px-4 py-2">Abstand-Utilities</div>

<!-- Flexbox und Ausrichtung -->
<div class="flex items-center justify-between">Flex-Utilities</div>

<!-- Text und Typografie -->
<h2 class="text-xl font-bold text-primary">Text-Utilities</h2>

<!-- Farben und Hintergrund -->
<div class="bg-secondary text-white">Farb-Utilities</div>
```

## 📱 Best Practices

1. **Core CSS importieren**: Verwenden Sie immer `@import '@casoon/ui-lib/core.css';`
2. **Mobile-First-Ansatz**: Beginnen Sie mit der mobilen Ansicht und erweitern Sie für größere Bildschirme
3. **Layer-System respektieren**: Platzieren Sie eigene Erweiterungen im richtigen Layer
4. **Semantisches HTML**: Verwenden Sie das passende HTML-Element für jeden Zweck
5. **Barrierefreiheit beachten**: Sorgen Sie für zugängliche Komponenten und ausreichenden Kontrast

## 📚 Dokumentation

Umfassende Dokumentation finden Sie unter:
[https://casoon.github.io/ui-docs/](https://casoon.github.io/ui-docs/)

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte lesen Sie unsere Beitragsrichtlinien, bevor Sie einen Pull Request einreichen.

## 📄 Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert. 
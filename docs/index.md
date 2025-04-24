# Casoon UI Library

Eine moderne, flexible und zugängliche CSS-Library für konsistente, responsive und barrierefreie Webanwendungen.

## Übersicht

Die Casoon UI Library ist ein umfassendes CSS-Framework, das ein System aus Design Tokens, Utility-Klassen und flexiblen Layout-Komponenten bietet. Die Library ist framework-agnostisch und kann in jeder modernen Webanwendung verwendet werden.

## Navigation

- [Einführung](/getting-started/index)
- [Installation](/getting-started/installation)
- [Styles](/getting-started/styles)
- [Komponenten](/components/)

## Installation

```bash
npm install @casoon/ui-lib@latest
```

## Schnellstart

1. Installieren Sie die Bibliothek:
   ```bash
   npm install @casoon/ui-lib@latest
   ```

2. Importieren Sie die CSS in Ihr Projekt:
   ```css
   @import '@casoon/ui-lib/dist/index.css';
   ```

3. Aktivieren Sie ein Theme, indem Sie die entsprechende Klasse hinzufügen:
   ```html
   <body class="theme-day">
     <!-- Ihr Inhalt -->
   </body>
   ```

4. Verwenden Sie die CSS-Klassen in Ihrem HTML:
   ```html
   <button class="btn btn--primary">Primärer Button</button>
   ```

## Architektur der Library

Die Casoon UI Library folgt einer modularen, schichtbasierten Architektur:

```
@casoon/ui-lib/
├── dist/
│   ├── index.css          # Vollständige CSS-Library
│   ├── core.css           # Kern-Styles
│   ├── themes/            # Theme-spezifische CSS-Dateien
│   └── modules/           # Einzelne Komponenten-CSS-Dateien
└── src/
    ├── core/              # Kern-Styles
    │   ├── tokens.css     # Design Tokens
    │   ├── reset.css      # Normalisierung
    │   ├── typography.css # Typografie-Regeln
    │   └── utilities.css  # Utility-Klassen
    ├── modules/           # Komponenten-Styles
    └── themes/            # Theme-Definitionen
```

## CSS-Architektur

Die Casoon UI Library verwendet einen fortschrittlichen CSS-Layering-Ansatz für bessere Kontrolle und Konfliktlösung:

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

## Modulare Verwendung

Sie können entweder die vollständige Library oder nur bestimmte Module importieren:

```css
/* Vollständige Library */
@import '@casoon/ui-lib/dist/all.css';

/* Nur Kern-Styles */
@import '@casoon/ui-lib/dist/core.css';

/* Einzelne Module */
@import '@casoon/ui-lib/dist/modules/buttons.css';
@import '@casoon/ui-lib/dist/modules/forms.css';

/* Themes */
@import '@casoon/ui-lib/dist/themes/day.css';
@import '@casoon/ui-lib/dist/themes/night.css';
```

## Styles & Konzepte

### Design Tokens

Alle visuellen Eigenschaften werden durch Design Tokens definiert, die als CSS-Variablen implementiert sind:

```css
:root {
  --color-primary: #4361ee;
  --color-secondary: #3f37c9;
  --spacing-4: 1rem;
  --font-size-base: 1rem;
  --radius-md: 0.375rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

[Mehr über Design Tokens](/getting-started/tokens)

### Layout-System

Das Layout-System basiert auf modernen CSS-Technologien wie Flexbox und Grid:

```html
<div class="container">
  <div class="grid grid--cols-3 grid--gap-4">
    <div>Spalte 1</div>
    <div>Spalte 2</div>
    <div>Spalte 3</div>
  </div>
</div>
```

[Mehr über Layouts](/getting-started/layout)

### Typografie

Ein vollständiges Typografie-System mit vordefinierten Schriftgrößen, -gewichten und -stilen:

```html
<h1 class="heading-xl font--bold">Große Überschrift</h1>
<p class="text-base text--muted">Normaler Textabsatz mit gedämpfter Farbe.</p>
```

[Mehr über Typografie](/getting-started/typography)

### Utility-Klassen

Utility-Klassen ermöglichen schnelles Styling ohne Custom-CSS:

```html
<div class="p-4 m-2 bg-primary text-white radius-md shadow-md">
  Element mit Padding, Margin, Hintergrund, Textfarbe, Eckenradius und Schatten
</div>
```

[Mehr über Utilities](/getting-started/utilities)

### Themes

Die Library unterstützt verschiedene Themes, die einfach durch CSS-Klassen aktiviert werden können:

```html
<body class="theme-day">
  <!-- Helles Theme -->
</body>

<body class="theme-night">
  <!-- Dunkles Theme -->
</body>

<body class="theme-ocean">
  <!-- Ozean-Theme -->
</body>
```

[Mehr über Themes](/getting-started/themes)

### Icons

Eine umfassende Sammlung von SVG-Icons, die über CSS-Klassen eingebunden werden können:

```html
<div class="icon">
  <svg><use xlink:href="#icon-home"></use></svg>
</div>
```

[Mehr über Icons](/getting-started/iconsets)

## Verfügbare Komponenten

Die Casoon UI Library bietet vordefinierte Komponenten für gängige UI-Elemente:

### Layout-Komponenten
- Container und Grid-Systeme
- Flexbox-Utilities
- Spacing-System
- Positionierungshelfer

### Formular-Elemente
- Buttons und Links
- Eingabefelder und Textareae
- Checkboxen und Radiobuttons
- Selects und Dropdowns

### Feedback-Elemente
- Alerts und Hinweise
- Badges und Labels
- Fortschrittsanzeigen
- Ladeindikatoren

### Strukturelemente
- Cards und Panels
- Tabellen und Listen
- Tabs und Akkordeons
- Modals und Dialoge

## Best Practices

- **Konsistente Verwendung von Tokens**: Nutzen Sie die Design Tokens statt Hartkodierung von Werten
- **Utility-First-Ansatz**: Kombinieren Sie Utility-Klassen für effizientes Styling
- **Modulare Imports**: Importieren Sie nur die benötigten Module für bessere Performance
- **Semantisches HTML**: Verwenden Sie semantisch korrektes HTML mit den CSS-Klassen
- **Barrierefreiheit**: Achten Sie auf zugängliche Farben, Kontraste und ARIA-Attribute
- **Mobile First**: Gestalten Sie Layouts zuerst für mobile Geräte und erweitern Sie dann für größere Bildschirme

## Browser-Unterstützung

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com)

## Lizenz

Die Casoon UI Library ist unter der MIT-Lizenz veröffentlicht. 
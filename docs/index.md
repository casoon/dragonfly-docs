# Casoon UI Library

Eine moderne, flexible und zugängliche CSS-Library für konsistente, responsive und barrierefreie Webanwendungen.

## Übersicht

Die Casoon UI Library ist ein umfassendes CSS-Framework, das ein System aus Design Tokens, Utility-Klassen und flexiblen Layout-Komponenten bietet. Die Library ist framework-agnostisch und kann in jeder modernen Webanwendung verwendet werden.

## Navigation

- [Einführung](/getting-started/index)
- [Installation](/getting-started/installation)
- [Styles](/getting-started/styles)
- [Module](/modules/)
- [Guide](/guide/)

## Schnellstart

Für eine schnelle Installation und Einrichtung:

```bash
npm install @casoon/ui-lib@latest
```

Detaillierte Installationsanweisungen finden Sie in der [Installationsanleitung](/getting-started/installation).

## Architektur der Library

Die Casoon UI Library folgt einer modularen, schichtbasierten Architektur:

```
@casoon/ui-lib/
├── core.css           # Kern-Styles
├── themes/            # Theme-spezifische CSS-Dateien
└── modules/           # Einzelne Modul-CSS-Dateien
```

Details zur CSS-Layer-Struktur finden Sie in der [Einführung](/getting-started/index).

## Hauptfunktionen

### Design Tokens

Alle visuellen Eigenschaften werden durch Design Tokens definiert:

```css
:root {
  --color-primary: #4361ee;
  --color-secondary: #3f37c9;
  /* Weitere Tokens */
}
```

[Mehr über Design Tokens](/getting-started/tokens)

### Layout-System

Das Layout-System basiert auf modernen CSS-Technologien:

```html
<div class="container">
  <div class="grid grid--cols-3 grid--gap-4">
    <!-- Inhalt -->
  </div>
</div>
```

[Mehr über Layouts](/getting-started/layout)

### Typografie

Ein vollständiges Typografie-System mit vordefinierten Stilen:

```html
<h1 class="heading-xl font--bold">Große Überschrift</h1>
<p class="text-base text--muted">Textabsatz</p>
```

[Mehr über Typografie](/getting-started/typography)

### Utility-Klassen

Utility-Klassen ermöglichen schnelles Styling:

```html
<div class="p-4 m-2 bg-primary text-white radius-md shadow-md">
  Element mit verschiedenen Styling-Utilities
</div>
```

[Mehr über Utilities](/getting-started/utilities)

### Themes

Die Library unterstützt verschiedene Themes:

```html
<body class="theme-day">
  <!-- Helles Theme -->
</body>
```

[Mehr über Themes](/getting-started/themes)

### Icons

Eine umfassende Sammlung von SVG-Icons:

```html
<div class="icon">
  <svg><use xlink:href="#icon-home"></use></svg>
</div>
```

[Mehr über Icons](/getting-started/iconsets)

## Verfügbare Module

Die Casoon UI Library bietet vordefinierte Module für gängige UI-Elemente. Eine vollständige Übersicht finden Sie in der [Moduldokumentation](/modules/).

## Best Practices

- **Konsistente Verwendung von Tokens**: Nutzen Sie die Design Tokens statt Hartkodierung
- **Utility-First-Ansatz**: Kombinieren Sie Utility-Klassen für effizientes Styling
- **Modulare Imports**: Importieren Sie nur die benötigten Module
- **Semantisches HTML**: Verwenden Sie semantisch korrektes HTML
- **Barrierefreiheit**: Achten Sie auf zugängliche Farben und ARIA-Attribute
- **Mobile First**: Gestalten Sie Layouts zuerst für mobile Geräte

## Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com)

## Lizenz

Die Casoon UI Library ist unter der MIT-Lizenz veröffentlicht. 
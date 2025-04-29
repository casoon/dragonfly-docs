---
title: Casoon UI Documentation
---

# Casoon UI Library

Willkommen zur Dokumentation der Casoon UI Library. Diese Bibliothek bietet ein modernes, konsistentes und modulares Design-System für die Entwicklung von Benutzeroberflächen.

## Aktuelle Version

Die aktuelle Version der Casoon UI Library ist `0.3.11`.

## Neues Layer-System

Mit der Version 0.3.11 wurde ein modernes CSS-Layer-System eingeführt, das die Spezifität und Organisation der Styles erheblich verbessert. Jetzt genügt das Einbinden der `core.css` Datei, um Zugriff auf alle Komponenten, Layer und Themes zu erhalten:

```css
@import "@casoon/ui-lib/core.css";
```

Die Layer sind in einer logischen Hierarchie organisiert:

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
       themes;               /* Theming-System */
```

## Hauptfunktionen

- **Modulares CSS** - Jede Komponente ist als eigenständiges CSS-Modul implementiert
- **Responsives Design** - Alle Komponenten sind vollständig responsiv
- **Barrierefreiheit** - Optimiert für Screenreader und Tastaturnavigation
- **Anpassbare Themes** - Einfach anpassbare Design-Tokens für verschiedene Markenidentitäten
- **Klarstrukturierte Layer** - Organisierte CSS-Spezifität durch modernes Layer-System
- **Umfangreiche Icon-Sets** - Integration mehrerer populärer Icon-Bibliotheken

## Erste Schritte

Um mit Casoon UI zu beginnen:

1. [Installation](/getting-started/installation) - Fügen Sie die Bibliothek zu Ihrem Projekt hinzu
2. [Layout-System](/getting-started/layout) - Verstehen Sie die Grid- und Flex-Layouts
3. [Design Tokens](/getting-started/tokens) - Erkunden Sie die grundlegenden Design-Variablen
4. [Themes](/getting-started/themes) - Passen Sie das Erscheinungsbild an
5. [Icon-System](/getting-started/iconsets) - Verwenden Sie die integrierten Icon-Sets

## Komponenten

Die Casoon UI Library bietet eine umfangreiche Sammlung von Komponenten für verschiedene UI-Anforderungen. Jede Komponente wird als eigenständiges CSS-Modul implementiert und wird über das Layer-System eingebunden.

Entdecken Sie die [komplette Komponentenbibliothek](/components/).

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
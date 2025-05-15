---
title: Casoon UI Documentation
---

<script setup>
import { UI_LIB_VERSION } from './.vitepress/data/versions'
</script>

# Casoon UI Library

Willkommen zur Dokumentation der Casoon UI Library. Diese Bibliothek bietet ein modernes, konsistentes und modulares Design-System für die Entwicklung von benutzerfreundlichen und barrierearmen Benutzeroberflächen.

## Aktuelle Version

Die aktuelle Version der Casoon UI Library ist `{{ UI_LIB_VERSION }}`.

## Modernes Layer-System

Mit der aktuellen Version wurde das CSS-Layer-System weiter optimiert. Der separate `custom-properties`-Layer wurde in den `tokens`-Layer integriert, was zu einer übersichtlicheren Struktur führt. Das Einbinden der `core.css` Datei genügt, um Zugriff auf alle Komponenten, Layer und Themes zu erhalten:

```css
@import "@casoon/ui-lib/core.css";
```

Die Layer sind in einer logischen Hierarchie organisiert:

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

Im `/components` Verzeichnis finden Sie mehr als 35 spezialisierte UI-Komponenten, darunter:

- **Basis-Komponenten**: Button, Card, Avatar, Badge, Chip, Tooltip und mehr
- **Formular-Komponenten**: Input, Select, Checkbox, Radio, Switch, Textarea
- **Layout-Komponenten**: Grid, Container, Header, Footer, Sidebar
- **Feedback-Komponenten**: Alert, Toast, Modal, Notification, Progress
- **Medien-Komponenten**: Image, Icon, Video, Audio

Alle Komponenten folgen einem konsistenten Designsystem und sind vollständig anpassbar über CSS-Variablen.

Entdecken Sie die [komplette Komponentenbibliothek](/components/).

## Effekte

Die Casoon UI Library enthält ein umfangreiches Effekt-System im `/effects` Verzeichnis mit über 40 spezialisierten visuellen Effekten und Animationen:

- **Visuelle Effekte**: Neon, Glasmorphismus, Schatten, 3D-Transformationen
- **Animationen**: Fade, Slide, Bounce, Pulse, Spin, Morph
- **Interaktionen**: Hover, Active, Focus, Drag, Touch-Feedback
- **Zustände**: Success, Error, Warning, Loading, Disabled

Alle Effekte sind performant optimiert, berücksichtigen Barrierefreiheit (prefers-reduced-motion) und können miteinander kombiniert werden, um einzigartige visuelle Erlebnisse zu schaffen.

Erfahren Sie mehr im [Effekt-System Guide](/guide/effects-system).

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

## Nutzung in KI-Tools (Model Context Protocol – MCP)

Um die Entwicklung mit der casoon/ui-lib zu vereinfachen, kann dein Editor oder KI-Tool (z. B. Cursor oder Continue) automatisch kontextuelle Informationen über das Projekt laden – inklusive Code, Struktur und Dokumentation.

Dazu wird das Model Context Protocol (MCP) genutzt.

🔧 **Konfiguration (z. B. für Cursor)**
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

📌 **Erklärung**
- **gitmcp-ui-lib**: Liefert strukturelle Infos zur Komponentenbibliothek selbst (Quellcode, Props, Imports, usw.).
- **gitmcp-ui-docs**: Liefert Informationen aus der begleitenden VitePress-Dokumentation (z. B. Beispiele, Varianten, Slots).

✅ **Vorteil**
Mit dieser Konfiguration kann ein KI-Assistent dein Projekt besser verstehen und dir gezielter helfen – etwa beim:

- Verwenden von Komponenten mit den richtigen Props
- Erstellen von Snippets basierend auf echten Beispielen
- Verstehen der Architektur deines Projekts 

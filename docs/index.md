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

## Überblick

Die Casoon UI Library ist ein umfassendes CSS-Framework, das ein strukturiertes System aus Design-Tokens, Komponenten, Effekten und Utility-Klassen bietet. Die Library ist framework-agnostisch und kann in jeder modernen Webanwendung verwendet werden.

Die wichtigsten Bereiche der Library sind:

- **[Komponenten](/components/)** - Über 35 wiederverwendbare UI-Elemente für verschiedene Anwendungsfälle
- **[Effekte](/guide/effects-system)** - Visuelle Effekte, Animationen und Zustandsdarstellungen
- **[Design-System](/guide/)** - Ein durchdachtes System für konsistentes Design

## Hauptmerkmale

- **Modulares CSS** - Jede Komponente ist als eigenständiges CSS-Modul implementiert
- **Responsives Design** - Alle Komponenten sind vollständig responsiv
- **Barrierefreiheit** - Optimiert für Screenreader und Tastaturnavigation
- **Anpassbare Themes** - Einfach anpassbare Design-Tokens für verschiedene Markenidentitäten
- **Strukturierte Layer** - Organisierte CSS-Spezifität durch modernes Layer-System

## Erste Schritte

Der schnellste Weg, mit Casoon UI zu beginnen:

```bash
npm install @casoon/ui-lib@latest
```

```css
@import "@casoon/ui-lib/core.css";
```

Für detaillierte Installationsanweisungen besuchen Sie die [Installationsanleitung](/getting-started/installation).

## Inhaltsübersicht

### Komponenten

Die Casoon UI Library bietet eine umfangreiche Sammlung von Komponenten für verschiedene UI-Anforderungen:

- **Basis-Komponenten**: Button, Card, Avatar, Badge, Chip, Tooltip
- **Formular-Komponenten**: Input, Select, Checkbox, Radio, Switch
- **Layout-Komponenten**: Grid, Container, Header, Footer, Sidebar
- **Feedback-Komponenten**: Alert, Toast, Modal, Notification, Progress

Entdecken Sie die [komplette Komponentenbibliothek](/components/).

### Effekte

Das Effekt-System umfasst spezialisierte visuelle Effekte und Animationen:

- **Visuelle Effekte**: Neon, Glasmorphismus, Schatten, 3D-Transformationen
- **Interaktionen**: Hover, Focus, Active, Ripple
- **Zustände**: Success, Error, Warning, Loading, Disabled

Erfahren Sie mehr im [Effekt-System Guide](/guide/effects-system).

### Design-System

Das Design-System basiert auf einem strukturierten Ansatz mit:

- **Layer-System**: Kontrollierte CSS-Spezifität und Organisation
- **Design-Tokens**: Konsistente Designvariablen für Farben, Abstände, etc.
- **Theming**: Flexible Anpassungsmöglichkeiten für verschiedene visuelle Stile

Mehr dazu in der [Anleitung](/guide/).

## Support und Ressourcen

- [GitHub Repository](https://github.com/casoon/ui-lib)
- [Fehlerbehebung](/getting-started/#troubleshooting)
- [FAQs](/getting-started/#häufige-fragen-faq)

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

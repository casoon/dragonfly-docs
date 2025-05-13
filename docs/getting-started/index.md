# Einführung in Casoon UI Library

Die Casoon UI Library ist ein modernes, modulares CSS-Framework und Design-System, das auf fortschrittlichen Web-Technologien basiert und für moderne Webanwendungen optimiert ist. Die aktuelle Version ist 0.5.1.

## Hauptmerkmale

- **CSS Layer-basierte Architektur**: Präzise Steuerung der Spezifität und saubere Organisation des Codes
- **Container Queries**: Komponentenbasierte Responsivität statt ausschließlich viewport-basierter Ansätze
- **Integrierte Barrierefreiheit**: Umfassende Unterstützung für Screenreader, Tastaturnavigation und reduzierte Bewegung
- **Lightning CSS Optimierung**: Effiziente Verarbeitung moderner CSS-Features
- **Flüssige Interpolation**: Unterstützung für `interpolate-size` zur flüssigen Animation zwischen Größenwerten
- **Fortschrittliche Animationen**: Vereinheitlichtes Animationssystem mit verbesserter Barrierefreiheit
- **Vollständige Dark Mode-Integration**: Durchgängige Unterstützung mit `color-scheme` und `light-dark()`
- **Umfassender RTL-Support**: Bidirektionale Layouts mit `[dir="rtl"]` für alle Komponenten

## Neuerungen in Version 0.5.0

Die Version 0.5.0 bringt mehrere wichtige Verbesserungen:

- **Optimierte Animations-CSS**: Vereinheitlichtes Benennungsschema (`slide-in-*` statt `slide-from-*`), reduzierte Redundanz und verbesserte Custom Properties
- **Erweiterte Barrierefreiheit in Animationen**: Implementierung von `.motion-safe` und `.motion-reduce` Utilities für optimale `prefers-reduced-motion`-Unterstützung
- **Dialog-Animationen**: Spezielle Animationen für modale Fenster und `<dialog>`-Elemente mit `.dialog-enter`/`.dialog-exit`
- **Animierte Fokus-Indikatoren**: Pulsierende Fokus-Ringe für bessere Barrierefreiheit
- **Gestaffelte Animationen**: Sequentielle Animationen für Listen und Gruppen
- **Vollständige Dark Mode-Integration**: Durchgängige Implementierung mit `color-scheme: light dark` und `light-dark()` CSS-Funktion
- **Umfassender RTL-Support**: Erweiterte bidirektionale Layouts mit `[dir="rtl"]` Selektoren
- **Moderne CSS-Validierung**: Implementierung der `:has()`-Selektor-Validierung mit visuellen Indikatoren
- **Verbesserte Formular-Layouts**: Neue Klassen für flexiblere Formular-Strukturen
- **Integration von custom-properties in tokens-Layer**: Vereinfachte Layer-Struktur durch Zusammenführung

## Schnelleinstieg

Die einfachste Methode, mit der Casoon UI Library zu starten, ist die Installation über npm:

```bash
npm install @casoon/ui-lib@latest
```

Und dann in Ihrem Projekt importieren:

```js
// In Ihrer JavaScript-Datei
import '@casoon/ui-lib/core.css';
```

## Philosophie und Ansatz

Die Casoon UI Library folgt diesen Kernprinzipien:

1. **Progressive Enhancement**: Grundfunktionalität für alle, erweiterte Features für moderne Browser
2. **Modulare Architektur**: Selektives Importieren nur der benötigten Komponenten
3. **Wartbarkeit**: Klares Layer-System für bessere Lesbarkeit und Kollaborierung
4. **Performance**: Optimiert für Geschwindigkeit und Ressourceneffizienz
5. **Barrierefreiheit**: Von Grund auf für universelle Nutzbarkeit konzipiert

## Layer-System

Die CSS-Layer-Architektur ist das Herzstück der Casoon UI Library und bietet eine elegante Lösung für Spezifitätskonflikte und Modularität:

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

## Container Queries

Statt ausschließlich auf Media Queries zu setzen, verwendet die Casoon UI Library Container Queries für eine komponentenbasierte Responsivität:

```html
<div class="container-query">
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Inhalt passt sich an die Größe des Containers an, nicht an die des Viewports -->
  </div>
</div>
```

## Design Tokens

Design Tokens bilden die Grundlage für ein konsistentes Erscheinungsbild:

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

## Integration in Ihr Projekt

Die Casoon UI Library kann auf verschiedene Arten in Ihr Projekt integriert werden:

```html
<!-- Über ein CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@casoon/ui-lib@0.5.0/core.css">

<!-- Als npm-Paket -->
<!-- In Ihrer JavaScript-Datei -->
import '@casoon/ui-lib/core.css';

<!-- Mit Astro.js -->
---
import '@casoon/ui-lib/core.css';
---
```

## Nächste Schritte

- [Installation und Konfiguration](/getting-started/installation)
- [Layout-System kennenlernen](/getting-started/layout)
- [Komponenten erkunden](/components/)
- [Themes und Anpassungen](/getting-started/themes)

## Einführung

Die Casoon UI Library ist eine moderne, flexible und zugängliche Komponentenbibliothek für Webanwendungen. Sie bietet eine umfangreiche Sammlung von wiederverwendbaren UI-Komponenten, die sich nahtlos in Ihre Projekte integrieren lassen.

## Schnellstart

Die komplette Installationsanleitung mit allen Optionen ist unter [Installation](/getting-started/installation) zu finden. Hier eine kurze Übersicht:

```bash
npm install @casoon/ui-lib@latest
```

1. Importieren Sie die Core-CSS:
   ```js
   import '@casoon/ui-lib/core.css';
   ```

2. Importieren Sie ein Theme:
   ```js
   import '@casoon/ui-lib/themes/day.css';
   ```

3. Aktivieren Sie das Theme:
   ```html
   <body class="theme-day">
     <!-- Ihr Inhalt -->
   </body>
   ```

## Architektur

### CSS-Layer-System

Die Casoon UI Library nutzt ein fortschrittliches CSS Cascade Layers-System für präzise Spezifitätskontrolle:

```css
@layer reset,                /* Browser-Reset, Normalisierung */
       tokens,               /* Design-Tokens, Variablen */
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
       effects-base,         /* Basis-Effekte (Transitions, etc.) */
       effects-blur,         /* Blur-Effekte */
       effects-shadow,       /* Schatten-Effekte */
       effects-glass,        /* Glass-Effekte */
       themes,               /* Theming-System */
       components;           /* Komponenten (für benutzerdefinierte Erweiterungen) */
```

### Module vs. Components

Die Casoon UI Library unterscheidet zwischen:

#### Module

Fertige, eigenständige UI-Komponenten, die einzeln importiert werden können:

```css
/* Beispiele für importierbare Module */
@import '@casoon/ui-lib/modules/button.module.css';
@import '@casoon/ui-lib/modules/card.module.css';
@import '@casoon/ui-lib/modules/form.module.css';
```

Die vollständige Liste der Module finden Sie in der [Moduldokumentation](/modules/).

#### Components

Der Components-Bereich ist die neuere, React-basierte Implementierung der UI-Bibliothek. Die Components verwenden intern die Module für ihre Styles, bieten aber zusätzlich JavaScript-Funktionalität und erweiterte Interaktivität.

## Kernfunktionen

Die Library besteht aus mehreren Kernbereichen:

### [Layout-System](/getting-started/layout)
Bietet Container, Grid-System, Flexbox-Utilities und Spacing-System für strukturierte und responsive Layouts.

### [Design Tokens](/getting-started/tokens)
Definieren die grundlegenden visuellen Eigenschaften wie Farben, Abstände, Typografie und mehr, implementiert als CSS-Variablen.

### [Typografie](/getting-started/typography)
Ein vollständiges Typografie-System mit vordefinierten Schriftgrößen, -gewichten und -stilen.

### [Utility-Klassen](/getting-started/utilities)
Ermöglichen schnelles Styling ohne Custom-CSS durch vordefinierte Klassen für häufig benötigte Eigenschaften.

### [Themes](/getting-started/themes)
Unterstützung für verschiedene visuelle Themes, die einfach durch CSS-Klassen aktiviert werden können.

### [Icons](/getting-started/iconsets)
Eine umfassende Sammlung von SVG-Icons, die über CSS-Klassen eingebunden werden können.

### [Effekte](/guide/effects)
Modulare visuelle Effekte wie Blur, Schatten und Glass, die einzeln importiert und verwendet werden können.

## Best Practices

### Zugänglichkeit
- Verwenden Sie semantische HTML-Elemente
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation
- Fügen Sie ARIA-Attribute hinzu
- Testen Sie mit Screenreadern

### Responsive Design
- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie Komponenten an mobile Geräte an
- Nutzen Sie Flexbox für flexible Layouts
- Setzen Sie Media Queries für spezifische Anpassungen

### Performance
- Laden Sie nur die benötigten Module
- Importieren Sie Effekte gezielt nach Bedarf
- Verwenden Sie Browser-Caching
- Optimieren Sie Assets für schnelle Ladezeiten
- Minimieren Sie CSS-Dateien
- Vermeiden Sie übermäßige Verschachtelung

## Browser-Unterstützung

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Häufige Fragen (FAQ)

### Wie kann ich das Theme anpassen?

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --font-family: 'Inter', sans-serif;
}
```

Weitere Informationen zum Theming finden Sie unter [Themes](/getting-started/themes).

### Wie aktiviere ich ein bestimmtes Theme?

```html
<!-- Tag Theme -->
<body class="theme-day">
  <!-- Inhalt -->
</body>

<!-- Nacht Theme -->
<body class="theme-night">
  <!-- Inhalt -->
</body>
```

## Troubleshooting

### CSS wird nicht geladen
- Überprüfen Sie die Pfade zu den CSS-Dateien
- Stellen Sie sicher, dass die Dateien existieren
- Überprüfen Sie die Netzwerkanfragen

### Theme wird nicht angewendet
- Stellen Sie sicher, dass core.css importiert ist
- Überprüfen Sie, ob die Theme-Klasse gesetzt ist
- Überprüfen Sie die Theme-Datei

### Komponenten werden nicht angezeigt
- Überprüfen Sie die HTML-Struktur
- Stellen Sie sicher, dass die richtigen CSS-Klassen verwendet werden
- Importieren Sie das entsprechende Modul

## Support

Bei Problemen:
1. Überprüfen Sie die [Dokumentation](https://github.com/casoon/ui-lib)
2. Erstellen Sie ein [Issue](https://github.com/casoon/ui-lib/issues)
3. Kontaktieren Sie das [Support-Team](mailto:support@casoon.com) 

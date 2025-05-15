---
title: Kern-CSS-System
category: Guide
---

# Kern-CSS-System

Das Kern-CSS-System der Casoon UI Library besteht aus mehreren zentralen Dateien, die das Fundament für alle Stilanwendungen bilden. Diese Dateien organisieren die CSS-Layer und definieren die Importreihenfolge, wodurch eine präzise Kontrolle über die Spezifität und Kaskadierung ermöglicht wird.

## Core.css

Die `core.css` ist das zentrale Organisationssystem der Casoon UI Library. Sie definiert die Struktur der CSS-Layer und koordiniert deren Import in der richtigen Reihenfolge, um ein präzises und wartbares Styling-System zu gewährleisten.

## Übersicht der Core-Datei

Die `core.css` Datei organisiert das gesamte CSS-Framework durch eine strukturierte Reihe von Imports:

```css
/**
 * Core CSS
 *
 * Zentrale Datei zur Organisation und Priorisierung aller CSS-Layer und -Module.
 * Hier werden alle Layer deklariert und die entsprechenden CSS-Dateien importiert.
 * Die Reihenfolge der Importe bestimmt die Kaskaden-Priorität (spätere haben Vorrang).
 */

/* 
 * Basis-System
 * Enthält Reset, Custom Properties, Tokens und logische Eigenschaften
 */
@import url("base.css");

/* 
 * Layout-System
 * Container, Grid, Flexbox-Layouts und responsive Anpassungen
 */
@import url("layout.css");
@import url("layout.queries.css");

/* 
 * Typografie-System
 * Schriftarten, Größen, Abstände und Text-Formatierungen
 */
@import url("typography.css") layer(typography);

/* 
 * Modul-System
 * Wiederverwendbare UI-Komponenten in eigenständigen Dateien
 */
@import url("components.css");

/* 
 * Icon-System
 * SVG-Symbole und Icon-Fonts
 */
@import url("icons.css");
```

## Layer-Hierarchie

Die gesamte Layer-Struktur ist in der `base.css` definiert und folgt einer klaren Hierarchie:

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

**Hinweis:** Der ursprünglich separate `custom-properties`-Layer wurde in den `tokens`-Layer integriert, um die Struktur zu vereinfachen und die Wartbarkeit zu verbessern.

## Detaillierte Layer-Beschreibungen

### 1. reset

Der `reset` Layer normalisiert Browser-Standardstile und stellt eine konsistente Basis für alle Styling-Operationen bereit.

```css
@layer reset {
  /* Browser-Standardstile zurücksetzen */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Weitere Reset-Styles... */
}
```

Dieser Layer hat die niedrigste Priorität in der Kaskade und wird von allen nachfolgenden Layern überschrieben.

### 2. tokens

Der `tokens` Layer definiert die grundlegenden Design-Tokens und CSS-Variablen, die im gesamten System verwendet werden.

```css
@layer tokens {
  :root {
    /* Abstände */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    
    /* Farben */
    --color-primary: #3b82f6;
    --color-secondary: #6b7280;
    --color-accent: #f59e0b;
    
    /* Radien */
    --radius-sm: 0.125rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    
    /* Weitere Design-Tokens... */
  }
}
```

Dieser Layer enthält auch registrierte CSS-Eigenschaften (früher im `custom-properties`-Layer):

```css
@layer tokens {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
  
  /* Weitere registrierte Eigenschaften... */
}
```

### 3. core

Der `core` Layer enthält grundlegende Funktionalitäten und Styles, die das Fundament der Anwendung bilden.

```css
@layer core {
  /* Grundlegende Styling für Elemente */
  html {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    color: var(--color-text);
    background-color: var(--color-background);
  }
  
  body {
    line-height: var(--line-height-normal);
  }
  
  /* Weitere Core-Styles... */
}
```

### 4. logical-properties

Der `logical-properties` Layer implementiert bidirektionales Layout mit logischen Eigenschaften für internationale Anwendungen.

```css
@layer logical-properties {
  /* Bidirektionale Margin-Utilities */
  .mx-auto {
    margin-inline: auto;
  }
  
  .ms-4 {
    margin-inline-start: var(--space-4);
  }
  
  .me-4 {
    margin-inline-end: var(--space-4);
  }
  
  /* Bidirektionale Padding-Utilities */
  .px-4 {
    padding-inline: var(--space-4);
  }
  
  /* Weitere logische Eigenschaften... */
}
```

### 5. colors

Der `colors` Layer definiert das Farbsystem und farbbasierte Klassen für Text, Hintergründe und Ränder.

```css
@layer colors {
  /* Hintergrundfarben */
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  /* Textfarben */
  .text-primary {
    color: var(--color-primary);
  }
  
  /* Randfarben */
  .border-primary {
    border-color: var(--color-primary);
  }
  
  /* Weitere farbbasierte Klassen... */
}
```

### 6. color-mix

Der `color-mix` Layer implementiert dynamische Farbberechnungen und -mischungen.

```css
@layer color-mix {
  /* Farbvarianten erzeugen */
  .color-mix-overlay {
    background-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
  }
  
  /* Kontrastfarben */
  .color-contrast {
    color: color-contrast(var(--color-primary) vs white, black);
  }
  
  /* Weitere Farbmischungen... */
}
```

### 7. layout

Der `layout` Layer definiert die grundlegenden Layout-Komponenten und -Strukturen.

```css
@layer layout {
  /* Container */
  .container {
    width: 100%;
    max-width: var(--container-max-width);
    margin-inline: auto;
    padding-inline: var(--container-padding);
  }
  
  /* Grid-System */
  .grid {
    display: grid;
    gap: var(--grid-gap);
  }
  
  /* Flexbox-Layout */
  .flex {
    display: flex;
  }
  
  /* Weitere Layout-Komponenten... */
}
```

### 8. layout-queries

Der `layout-queries` Layer implementiert responsive Anpassungen basierend auf Container-Queries.

```css
@layer layout-queries {
  /* Container-Anker für Container-Queries */
  .container-query {
    container-type: inline-size;
    container-name: layout;
  }
  
  /* Responsive Breakpoints basierend auf Container-Größe */
  @container layout (min-width: 30rem) {
    .sm\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .sm\:flex-row {
      flex-direction: row;
    }
  }
  
  @container layout (min-width: 48rem) {
    .md\:grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Weitere responsive Anpassungen... */
}
```

### 9. typography

Der `typography` Layer definiert das Typografie-System mit Schriftarten, Größen und Text-Formatierungen.

```css
@layer typography {
  /* Schriftfamilien */
  .font-sans {
    font-family: var(--font-family-sans);
  }
  
  /* Schriftgrößen */
  .text-sm {
    font-size: var(--font-size-sm);
  }
  
  .text-base {
    font-size: var(--font-size-base);
  }
  
  /* Schriftstärken */
  .font-bold {
    font-weight: var(--font-weight-bold);
  }
  
  /* Text-Ausrichtung */
  .text-center {
    text-align: center;
  }
  
  /* Weitere typografische Styles... */
}
```

### 10. utilities

Der `utilities` Layer bietet atomare Utility-Klassen für schnelles Styling.

```css
@layer utilities {
  /* Flexbox-Utilities */
  .flex-col {
    flex-direction: column;
  }
  
  /* Abstand-Utilities */
  .gap-4 {
    gap: var(--space-4);
  }
  
  /* Größen-Utilities */
  .w-full {
    width: 100%;
  }
  
  /* Weitere Utility-Klassen... */
}
```

### 11. smooth-scroll

Der `smooth-scroll` Layer definiert das Scrollverhalten für eine bessere Benutzererfahrung.

```css
@layer smooth-scroll {
  html {
    scroll-behavior: smooth;
  }
  
  /* Anker-Verhalten */
  .scroll-mt-4 {
    scroll-margin-top: var(--space-4);
  }
  
  /* Weitere Scroll-Styles... */
}
```

### 12. accessibility

Der `accessibility` Layer enthält Verbesserungen für die Barrierefreiheit.

```css
@layer accessibility {
  /* Focus-Stile */
  :focus-visible {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
  
  /* Unterstützung für reduzierte Bewegung */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Screen-Reader-Only Elemente */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Weitere Accessibility-Verbesserungen... */
}
```

### 13. icons

Der `icons` Layer definiert das Icon-System und die dazugehörigen Styles.

```css
@layer icons {
  /* Icon-Basis */
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -0.125em;
  }
  
  /* Icon-Größen */
  .icon-sm {
    font-size: var(--icon-size-sm);
  }
  
  .icon-md {
    font-size: var(--icon-size-md);
  }
  
  /* Weitere Icon-Stile... */
}
```

### 14. components

Der `components` Layer enthält alle UI-Komponenten des Design-Systems.

```css
@layer components {
  /* Button-Komponente */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--button-padding);
    border-radius: var(--button-radius);
    font-weight: var(--button-font-weight);
    transition: var(--button-transition);
  }
  
  .button.primary {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
  }
  
  /* Card-Komponente */
  .card {
    border-radius: var(--card-radius);
    overflow: hidden;
    background-color: var(--card-bg);
  }
  
  /* Weitere Komponenten... */
}
```

### 15. animations

Der `animations` Layer definiert das Animations- und Bewegungssystem.

```css
@layer animations {
  /* Fade-Animation */
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fade {
    animation: fade var(--animation-duration) var(--animation-easing);
  }
  
  /* Slide-Animation */
  @keyframes slide-in {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .animate-slide {
    animation: slide-in var(--animation-duration) var(--animation-easing);
  }
  
  /* Weitere Animationen... */
}
```

### 16. effects

Der `effects` Layer enthält visuelle Effekte wie Schatten, Glaseffekte und Hintergründe.

```css
@layer effects {
  /* Schatten */
  .shadow-sm {
    box-shadow: var(--shadow-sm);
  }
  
  /* Glaseffekt */
  .glass {
    backdrop-filter: blur(var(--glass-blur));
    background-color: var(--glass-bg);
  }
  
  /* Weitere Effekte... */
}
```

### 17. themes

Der `themes` Layer definiert das Theming-System für verschiedene Farbschemata.

```css
@layer themes {
  /* Helles Theme (Standard) */
  .theme-day {
    --color-background: var(--color-white);
    --color-text: var(--color-gray-900);
    /* Weitere Theme-Variablen... */
  }
  
  /* Dunkles Theme */
  .theme-night {
    --color-background: var(--color-gray-900);
    --color-text: var(--color-gray-100);
    /* Weitere Theme-Variablen... */
  }
  
  /* Weitere Themes... */
}
```

## Vorteile des Layer-Systems

Das Layer-System der Casoon UI Library bietet mehrere Vorteile:

1. **Präzise Kontrolle der Spezifität**: Die Reihenfolge der Layer bestimmt die Priorität, unabhängig von der Komplexität der Selektoren.
2. **Verbesserte Wartbarkeit**: Klare Trennung von Zuständigkeiten erleichtert das Debugging und die Weiterentwicklung.
3. **Skalierbarkeit**: Einfaches Hinzufügen neuer Funktionen ohne Beeinträchtigung bestehender Styles.
4. **Vermeidung von !important**: Die Layer-Struktur reduziert die Notwendigkeit von !important-Deklarationen.
5. **Performance-Optimierung**: Modern CSS-Engines können Layer-basierte Styles effizienter verarbeiten.

## Best Practices

Bei der Arbeit mit dem Layer-System sollten folgende Best Practices beachtet werden:

1. **Respektieren der Layer-Grenzen**: Platzieren Sie Styles im passenden Layer basierend auf ihrer Funktion.
2. **Keine übergreifenden Abhängigkeiten**: Vermeiden Sie, dass ein Layer direkt von einem anderen abhängig ist.
3. **Minimale Spezifität innerhalb von Layern**: Verwenden Sie die einfachsten möglichen Selektoren innerhalb eines Layers.
4. **Konsistente Naming-Konventionen**: Folgen Sie den etablierten Konventionen für Klassen- und Variablennamen.
5. **Dokumentieren von Anpassungen**: Beim Überschreiben von Styles in benutzerdefinierten Themes dokumentieren Sie den Zweck.

## Integration in eigene Projekte

Um das Layer-System in Ihrem Projekt zu nutzen, importieren Sie einfach die `core.css`:

```css
@import "@casoon/ui-lib/core.css";
```

Wenn Sie eigene Anpassungen vornehmen möchten, respektieren Sie die Layer-Struktur:

```css
/* Eigene CSS-Datei nach dem Import der core.css */
@import "@casoon/ui-lib/core.css";

/* Eigene Komponenten dem entsprechenden Layer zuordnen */
@layer components {
  .custom-component {
    /* Eigene Styles... */
  }
}

/* Eigene Utilities dem utilities-Layer zuordnen */
@layer utilities {
  .custom-utility {
    /* Eigene Styles... */
  }
}

/* Eigenes Theme dem themes-Layer zuordnen */
@layer themes {
  .theme-custom {
    /* Eigene Theme-Variablen... */
  }
}
```

## Technische Details

Das Core CSS System ist für moderne Browser optimiert und nutzt folgende Technologien:

1. **CSS Layers**: Haupt-Organisationsprinzip für die Kaskade
2. **Layer-System**: Die `@layer`-Deklarationen werden optimal kompiliert
3. **CSS Custom Properties**: Für dynamische Anpassungen und Themefähigkeit
4. **Container Queries**: Für komponenten-basierte Responsivität
5. **Modern Color Functions**: Für dynamische Farbberechnungen und Kontraste
6. **Logical Properties**: Für internationalisierte und bidirektionale Layouts

Das gesamte System ist für Lightning CSS (ehemals Parcel CSS) optimiert, was eine effiziente Verarbeitung und Minimierung ermöglicht.

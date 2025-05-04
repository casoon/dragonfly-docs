---
title: Kern-CSS-System
category: Guide
---

# Kern-CSS-System

Das Kern-CSS-System der Casoon UI Library besteht aus mehreren zentralen Dateien, die das Fundament für alle Stilanwendungen bilden. Diese Dateien organisieren die CSS-Layer und definieren die Importreihenfolge, wodurch eine präzise Kontrolle über die Spezifität und Kaskadierung ermöglicht wird.

## Core.css

Die `core.css` ist die zentrale Hauptdatei der Casoon UI Library, die alle notwendigen CSS-Komponenten in der richtigen Reihenfolge importiert.

### Importieren

Um die gesamte CSS-Funktionalität der Library zu nutzen, reicht es, diese eine Datei zu importieren:

```css
@import '@casoon/ui-lib/core.css';
```

### Struktur und Aufbau

Die `core.css` organisiert Importe in thematisch gruppierte Bereiche:

```css
/* Basis-System: Reset, Custom Properties, Tokens und logische Eigenschaften */
@import url("base.css") layer(base);

/* Layout-System: Container, Grid, Flexbox */
@import url("layout.css") layer(layout);
@import url("layout.queries.css") layer(layout);

/* Typografie-System */
@import url("typography.css") layer(typography);

/* Modul-System für UI-Komponenten */
@import url("modules.css") layer(modules);

/* Animations-System */
@import url("animations.css") layer(animations);

/* Effekt-System */
@import url("effects.css") layer(effects);

/* Theme-System */
@import url("themes.css") layer(themes);

/* Icon-System */
@import url("icons.css") layer(icons);
```

Diese Struktur gewährleistet, dass:
- Die Grundlagen (Tokens, Reset, etc.) zuerst geladen werden
- Die Layer in einer sorgfältig durchdachten Reihenfolge für korrekte Spezifität definiert sind
- Spätere Importe höhere Priorität in der CSS-Kaskade haben

## Base.css

Die `base.css` definiert das Fundament des CSS-Systems und importiert grundlegende Stilkomponenten.

### Struktur

```css
/* Reset und Grundlagen */
@import url("base/reset.css") layer(reset);

/* Tokens und Properties */
@import url("base/tokens.css") layer(tokens);
@import url("base/custom-properties.css") layer(custom-properties);

/* Core-Funktionalitäten */
@import url("base/logical-properties.css") layer(logical-properties);
@import url("base/colors.css") layer(colors);
@import url("base/color-mix.css") layer(color-mix);

/* Utilities und Accessibility */
@import url("base/utilities.css") layer(utilities);
@import url("base/smooth-scroll.css") layer(smooth-scroll);
@import url("base/accessibility.css") layer(accessibility);
```

Die Datei importiert:
- Ein CSS-Reset, das Browser-Inkonsistenzen ausgleicht
- Design-Tokens für Farben, Abstände, Typografie, etc.
- Logische Eigenschaften für bidirektionale Layouts
- Farbdefinitionen und Color-Mix-Funktionalitäten
- Utility-Klassen und Barrierefreiheits-Verbesserungen

## Animations.css

Die `animations.css` implementiert ein umfassendes System für Bewegung und Übergänge in der Benutzeroberfläche.

### Variablen

Die Datei definiert viele nützliche CSS-Variablen für Animation:

```css
:root {
    /* Durations */
    --animation-duration-fastest: 100ms;
    --animation-duration-fast: 150ms;
    --animation-duration-normal: 300ms;
    --animation-duration-slow: 500ms;
    --animation-duration-slower: 750ms;
    --animation-duration-slowest: 1000ms;

    /* Timing Functions */
    --ease-linear: linear;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ease-spring: cubic-bezier(0.68, -0.6, 0.32, 1.6);

    /* Movement */
    --move-xs: 4px;
    --move-sm: 8px;
    --move-md: 16px;
    --move-lg: 24px;
    --move-xl: 36px;

    /* Scale */
    --scale-xs: 0.98;
    --scale-sm: 0.95;
    --scale-md: 0.9;
    --scale-lg: 1.05;
    --scale-xl: 1.1;
}
```

### Funktionalitäten

Die `animations.css` bietet:

1. **Basis-Animationsklassen**:
   ```html
   <div class="animate">Animiertes Element mit Standard-Eigenschaften</div>
   ```

2. **Steuerungsklassen**:
   - Richtung: `.direction-normal`, `.direction-reverse`, etc.
   - Füllmodus: `.fill-forwards`, `.fill-backwards`, etc.
   - Wiederholungen: `.iteration-once`, `.infinite`, etc.

3. **Scroll-gesteuerte Animationen**:
   ```html
   <div class="scroll-fade-in">Erscheint beim Scrollen</div>
   <div class="scroll-slide-up">Gleitet nach oben beim Scrollen</div>
   <div class="scroll-slide-from-left">Gleitet von links beim Scrollen</div>
   ```

4. **Interaktionseffekte**:
   ```html
   <button class="interaction-scale">Skaliert bei Klick</button>
   <div class="hover-glow">Leuchtet bei Hover</div>
   <button class="tap-feedback">Visuelles Feedback bei Klick</button>
   ```

5. **Übergangs-Helfer**:
   ```html
   <div class="transition-opacity">Sanfter Übergang der Transparenz</div>
   <div class="transition-transform">Sanfter Übergang bei Transformation</div>
   <div class="transition-colors">Sanfter Übergang bei Farbänderungen</div>
   ```

Alle Animationen berücksichtigen die Barrierefreiheit und respektieren die Benutzereinstellung `prefers-reduced-motion`.

## Effects.css

Die `effects.css` bietet visuelle Effekte und Interaktionselemente für die Benutzeroberfläche.

### Struktur

```css
@import url('effects/base.css') layer(base);
@import url('effects/neon.css') layer(neon);
@import url('effects/filters.css') layer(filters);
@import url('effects/interactions.css') layer(interactions);
```

### Funktionalitäten

Die Datei importiert verschiedene Effekt-Kategorien:

1. **Neon-Effekte**:
   ```html
   <div class="neon-text">Leuchtender Text</div>
   <div class="neon-border">Element mit leuchtendem Rand</div>
   ```

2. **Filter-Effekte**:
   ```html
   <img class="blur-sm" src="bild.jpg" alt="Leicht unscharf">
   <div class="brightness-up">Helleres Element</div>
   <div class="grayscale">Schwarz-Weiß-Element</div>
   ```

3. **Interaktionseffekte**:
   ```html
   <div class="card-flip">3D-Karten-Flip-Effekt</div>
   <div class="touch-ripple">Welleneffekt bei Berührung</div>
   <div class="draggable">Ziehbares Element</div>
   ```

Alle Effekte sind optimiert für:
- Responsive Design
- Barrierefreiheit (reduzierte Bewegung wird berücksichtigt)
- Performance (hardwarebeschleunigte Eigenschaften werden bevorzugt)

## Modules.css

Die `modules.css` ist die zentrale Import-Datei für alle UI-Komponenten-Module.

### Struktur

```css
/* Alert Modul */
@import url('./modules/alert.module.css') layer(alert);

/* Avatar Modul */
@import url('./modules/avatar.module.css') layer(avatar);

/* Button Modul */
@import url('./modules/button.module.css') layer(button);

/* Card Modul */
@import url('./modules/card.module.css') layer(card);

/* ... weitere Module ... */
```

Die Datei importiert mehr als 30 spezialisierte UI-Komponentenmodule, darunter:

- Formulare und Eingabefelder (Input, Select, Checkbox, Radio, etc.)
- Layout-Komponenten (Card, Modal, Sidebar, etc.)
- Feedback-Elemente (Alert, Notification, Toast, etc.)
- Navigation (Tabs, Wizard, etc.)
- Indikatoren (Badge, Progress, Spinner, etc.)

### Modulares System

Jedes Modul wird in seinem eigenen CSS-Layer definiert, was mehrere Vorteile bietet:

1. **Isolation**: Module interagieren nicht ungewollt miteinander
2. **Spezifität**: Klare Kontrolle über die Spezifitätsreihenfolge
3. **Wartbarkeit**: Jedes Modul kann unabhängig aktualisiert werden
4. **Performance**: Selektive Nutzung nur der benötigten Module ist möglich

## Verwendung des Kern-CSS-Systems

### Komplette Import

Der einfachste Weg, das gesamte CSS-System zu nutzen:

```css
@import '@casoon/ui-lib/core.css';
```

Diese einzeilige Integration lädt automatisch alle notwendigen CSS-Komponenten in der richtigen Reihenfolge.

### Selektiver Import

Bei Bedarf können Sie auch gezielt nur bestimmte Teile importieren:

```css
/* Nur Basis und Layout */
@import '@casoon/ui-lib/base.css';
@import '@casoon/ui-lib/layout.css';

/* Spezifische Module */
@import '@casoon/ui-lib/modules/button.module.css';
@import '@casoon/ui-lib/modules/form.module.css';
```

### Anpassung und Erweiterung

Um das System mit eigenen Stilen zu erweitern:

```css
/* Importieren des Kernsystems */
@import '@casoon/ui-lib/core.css';

/* Eigene Erweiterungen in den entsprechenden Layern */
@layer animations {
  .custom-animation {
    animation: custom-fade 0.5s ease-in-out;
  }
  
  @keyframes custom-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}

@layer modules {
  .custom-component {
    /* Eigener Komponentenstil */
  }
}
```

## Optimierung für Lightning CSS

Das gesamte Kern-CSS-System ist für Lightning CSS optimiert:

1. **Effiziente Import-Struktur**: Die verschachtelte Import-Struktur wird von Lightning CSS effizient verarbeitet
2. **Layer-System**: Die `@layer`-Deklarationen werden optimal kompiliert
3. **Browserkompatibilität**: Automatische Generierung von Fallbacks für nicht unterstützte Features
4. **Optimierte Ausgabe**: Minimierte und optimierte CSS-Dateien

## Best Practices

1. **Einfach durch core.css starten**: Für die meisten Projekte reicht der Import von `core.css`
2. **Layer-Struktur respektieren**: Platzieren Sie eigene Stile in den passenden Layern
3. **Variablen nutzen**: Verwenden Sie die definierten CSS-Variablen statt hartcodierter Werte
4. **Modulare Erweiterung**: Erweitern Sie das System mit eigenen Modulen in separaten Dateien 
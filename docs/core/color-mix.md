---
title: Color-Mix System
category: Core
---

# Color-Mix System

Das Color-Mix System der Casoon UI Library bietet fortschrittliche Werkzeuge zur dynamischen Farbmanipulation und -mischung. Mit diesem System können Sie nahtlos Farben mischen, transformieren und anpassen, um ein konsistentes und harmonisches Farbschema in Ihrer Anwendung zu erzielen.

## Überblick

Das Color-Mix System nutzt moderne CSS-Funktionen wie `color-mix()`, `color-contrast()` und `color()`, um Farben dynamisch zu manipulieren. Dies ermöglicht:

- Dynamisches Mischen von Farben
- Automatische Berechnung von Kontrasten
- Erzeugung von Farbvarianten und -schattierungen
- Anpassung der Opazität von Farben
- Erstellung fließender Farbübergänge

## Installation

Das Color-Mix System wird automatisch mit dem Core-Modul der Casoon UI Library geladen:

```css
@import '@casoon/ui-lib/core.css';
```

Sie können es auch separat importieren:

```css
@import '@casoon/ui-lib/core/color-mix.css';
```

## Grundlegende Farbmischung

### Die color-mix() Funktion

Das Herzstück des Color-Mix Systems ist die `color-mix()` CSS-Funktion, die zwei Farben in einem bestimmten Farbmodell mischt:

```css
.element {
  /* Mischt Rot und Blau zu einem Lila */
  background-color: color-mix(in srgb, red, blue);
  
  /* Mischt 30% Rot mit 70% Blau */
  color: color-mix(in srgb, red 30%, blue 70%);
}
```

### Farbmischungs-Klassen

Die Casoon UI Library bietet vordefinierte Klassen für häufige Farbmischungen:

```html
<!-- Primärfarbe mit 20% Weiß gemischt (aufhellen) -->
<div class="color-mix-lighten-20"></div>

<!-- Primärfarbe mit 20% Schwarz gemischt (abdunkeln) -->
<div class="color-mix-darken-20"></div>

<!-- Primärfarbe mit 20% Transparenz -->
<div class="color-mix-alpha-80"></div>
```

## Erweiterte Farbmanipulation

### Farbmodelle

Das Color-Mix System unterstützt verschiedene Farbmodelle für unterschiedliche Anwendungsfälle:

```css
/* RGB-Farbmodell (Standard) */
.rgb-mix {
  background-color: color-mix(in srgb, var(--color-primary), var(--color-secondary));
}

/* HSL-Farbmodell (gut für Farbton-Anpassungen) */
.hsl-mix {
  background-color: color-mix(in hsl, var(--color-primary), var(--color-secondary));
}

/* LCH-Farbmodell (wahrnehmungsbasiert, gleichmäßigere Mischungen) */
.lch-mix {
  background-color: color-mix(in lch, var(--color-primary), var(--color-secondary));
}
```

### Farb-Kontrast

Mit der `color-contrast()` Funktion können Sie automatisch die Farbe mit dem besten Kontrast auswählen:

```css
.auto-contrast-text {
  /* Wählt entweder Schwarz oder Weiß, je nachdem, was besser auf dem Hintergrund lesbar ist */
  color: color-contrast(var(--background-color) vs white, black);
}
```

Die Casoon UI Library bietet Utility-Klassen für automatischen Kontrast:

```html
<!-- Text passt sich automatisch dem Hintergrund an -->
<div class="bg-primary text-contrast">
  Dieser Text hat optimalen Kontrast
</div>
```

## Farbschemata erstellen

### Monochromatische Farbschemata

Erstellen Sie ein monochromatisches Farbschema basierend auf einer Basisfarbe:

```css
:root {
  --color-base: #3b82f6;
  --color-lighter-10: color-mix(in srgb, var(--color-base), white 10%);
  --color-lighter-20: color-mix(in srgb, var(--color-base), white 20%);
  --color-lighter-30: color-mix(in srgb, var(--color-base), white 30%);
  --color-darker-10: color-mix(in srgb, var(--color-base), black 10%);
  --color-darker-20: color-mix(in srgb, var(--color-base), black 20%);
  --color-darker-30: color-mix(in srgb, var(--color-base), black 30%);
}
```

### Analoge Farbschemata

Mit HSL-Mischungen können Sie analoge Farbschemata erstellen:

```css
:root {
  --color-base: hsl(210, 100%, 50%);
  --color-analogous-1: hsl(240, 100%, 50%); /* +30 Grad im Farbkreis */
  --color-analogous-2: hsl(180, 100%, 50%); /* -30 Grad im Farbkreis */
  
  /* Mischungen für sanfte Übergänge */
  --color-transition-1: color-mix(in hsl, var(--color-base), var(--color-analogous-1));
  --color-transition-2: color-mix(in hsl, var(--color-base), var(--color-analogous-2));
}
```

## Praktische Anwendungen

### Hover-Effekte

Erstellen Sie dynamische Hover-Effekte mit dem Color-Mix System:

```css
.button {
  background-color: var(--color-primary);
  transition: background-color 0.3s ease;
}

.button:hover {
  /* 15% dunklere Version der Primärfarbe beim Hover */
  background-color: color-mix(in srgb, var(--color-primary), black 15%);
}
```

### Schatten und Overlays

Erstellen Sie themenkonsistente Schatten:

```css
.card {
  box-shadow: 0 4px 8px color-mix(in srgb, var(--color-primary), transparent 85%);
}

.modal-overlay {
  background-color: color-mix(in srgb, var(--color-background), transparent 40%);
  backdrop-filter: blur(4px);
}
```

### Barrierefreiheit verbessern

Verwenden Sie das Color-Mix System, um die Barrierefreiheit zu verbessern:

```css
.focus-outline {
  outline: 2px solid color-mix(in srgb, var(--color-primary), black 10%);
  outline-offset: 2px;
}

.error-message {
  /* Verwendet eine dunklere Version der Fehlerfarbe für besseren Kontrast */
  color: color-mix(in srgb, var(--color-error), black 20%);
}
```

## CSS-Implementierung

Das Color-Mix System wird durch eine Kombination aus nativen CSS-Funktionen und Custom Properties implementiert:

```css
:root {
  /* Basis-Farbdefinitionen */
  --color-primary: #3b82f6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #6366f1;
  
  /* Dynamische Farbvarianten mit color-mix */
  --color-primary-light: color-mix(in srgb, var(--color-primary), white 30%);
  --color-primary-lighter: color-mix(in srgb, var(--color-primary), white 70%);
  --color-primary-dark: color-mix(in srgb, var(--color-primary), black 30%);
  --color-primary-darker: color-mix(in srgb, var(--color-primary), black 70%);
  
  /* Transparente Varianten */
  --color-primary-10: color-mix(in srgb, var(--color-primary), transparent 90%);
  --color-primary-20: color-mix(in srgb, var(--color-primary), transparent 80%);
  --color-primary-50: color-mix(in srgb, var(--color-primary), transparent 50%);
  
  /* Kontrast-Farben */
  --color-on-primary: color-contrast(var(--color-primary) vs white, black);
  --color-on-success: color-contrast(var(--color-success) vs white, black);
  --color-on-warning: color-contrast(var(--color-warning) vs white, black);
  --color-on-error: color-contrast(var(--color-error) vs white, black);
  --color-on-info: color-contrast(var(--color-info) vs white, black);
}

/* Utility-Klassen für Farbmischung */
.color-mix-lighten-10 { color: color-mix(in srgb, currentColor, white 10%); }
.color-mix-lighten-20 { color: color-mix(in srgb, currentColor, white 20%); }
.color-mix-lighten-30 { color: color-mix(in srgb, currentColor, white 30%); }

.color-mix-darken-10 { color: color-mix(in srgb, currentColor, black 10%); }
.color-mix-darken-20 { color: color-mix(in srgb, currentColor, black 20%); }
.color-mix-darken-30 { color: color-mix(in srgb, currentColor, black 30%); }

.bg-mix-lighten-10 { background-color: color-mix(in srgb, currentColor, white 10%); }
.bg-mix-lighten-20 { background-color: color-mix(in srgb, currentColor, white 20%); }
.bg-mix-lighten-30 { background-color: color-mix(in srgb, currentColor, white 30%); }

.bg-mix-darken-10 { background-color: color-mix(in srgb, currentColor, black 10%); }
.bg-mix-darken-20 { background-color: color-mix(in srgb, currentColor, black 20%); }
.bg-mix-darken-30 { background-color: color-mix(in srgb, currentColor, black 30%); }

/* Automatische Kontrast-Anpassung */
.text-contrast {
  color: color-contrast(var(--background-color, inherit) vs white, black);
}
```

## Beispiele

### Farbpalette generieren

```html
<div class="palette-example">
  <div class="color-swatch base-color">Basisfarbe</div>
  <div class="color-swatch lighter-10">10% heller</div>
  <div class="color-swatch lighter-20">20% heller</div>
  <div class="color-swatch lighter-30">30% heller</div>
  <div class="color-swatch darker-10">10% dunkler</div>
  <div class="color-swatch darker-20">20% dunkler</div>
  <div class="color-swatch darker-30">30% dunkler</div>
</div>

<style>
  .palette-example {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .color-swatch {
    width: 120px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    text-align: center;
  }
  
  .base-color {
    background-color: var(--color-primary);
  }
  
  .lighter-10 {
    background-color: color-mix(in srgb, var(--color-primary), white 10%);
  }
  
  .lighter-20 {
    background-color: color-mix(in srgb, var(--color-primary), white 20%);
  }
  
  .lighter-30 {
    background-color: color-mix(in srgb, var(--color-primary), white 30%);
  }
  
  .darker-10 {
    background-color: color-mix(in srgb, var(--color-primary), black 10%);
  }
  
  .darker-20 {
    background-color: color-mix(in srgb, var(--color-primary), black 20%);
  }
  
  .darker-30 {
    background-color: color-mix(in srgb, var(--color-primary), black 30%);
  }
</style>
```

### Interaktive Komponenten

```html
<button class="button button-primary">Primär-Button</button>
<button class="button button-success">Erfolgs-Button</button>
<button class="button button-warning">Warn-Button</button>
<button class="button button-error">Fehler-Button</button>

<style>
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button-primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }
  
  .button-primary:hover {
    background-color: color-mix(in srgb, var(--color-primary), black 10%);
  }
  
  .button-primary:active {
    background-color: color-mix(in srgb, var(--color-primary), black 20%);
  }
  
  .button-success {
    background-color: var(--color-success);
    color: var(--color-on-success);
  }
  
  .button-success:hover {
    background-color: color-mix(in srgb, var(--color-success), black 10%);
  }
  
  .button-warning {
    background-color: var(--color-warning);
    color: var(--color-on-warning);
  }
  
  .button-warning:hover {
    background-color: color-mix(in srgb, var(--color-warning), black 10%);
  }
  
  .button-error {
    background-color: var(--color-error);
    color: var(--color-on-error);
  }
  
  .button-error:hover {
    background-color: color-mix(in srgb, var(--color-error), black 10%);
  }
</style>
```

## Tipps für optimale Farbmischung

1. **Wählen Sie das richtige Farbmodell**: 
   - Verwenden Sie `srgb` für allgemeine Mischungen
   - Verwenden Sie `hsl` für Farbton-Anpassungen
   - Verwenden Sie `lch` für wahrnehmungsbasierte, gleichmäßigere Mischungen

2. **Kontrast beachten**: 
   - Stellen Sie sicher, dass gemischte Farben ausreichenden Kontrast für Barrierefreiheit bieten
   - Verwenden Sie `color-contrast()` für automatische Kontrastanpassungen

3. **Konsistenz wahren**: 
   - Verwenden Sie die gleichen Mischungsverhältnisse für ähnliche UI-Elemente
   - Definieren Sie Mischungsvariablen auf Root-Ebene für konsistente Anwendung

4. **Performance-Überlegungen**:
   - Vermeiden Sie übermäßig komplexe Farbberechnungen im Live-DOM
   - Definieren Sie komplexe Mischungen als CSS-Variablen für bessere Performance

## Browser-Kompatibilität

Das Color-Mix System basiert auf modernen CSS-Funktionen mit unterschiedlicher Browser-Unterstützung:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| color-mix() | 111+ | 113+ | 16.4+ | 111+ |
| color-contrast() | Partial | Nein | Nein | Partial |
| Relative Farbsyntax | 101+ | 113+ | 15+ | 101+ |

Für Browser ohne native Unterstützung bietet die Casoon UI Library Fallback-Mechanismen:

- Vordefinierte Farbvariablen als Fallback
- PostCSS-Plugins für Vorverarbeitung
- JavaScript-Polyfills für dynamische Farbmischung

## Integration mit anderen Systemen

Das Color-Mix System integriert sich nahtlos mit anderen Teilen der Casoon UI Library:

- **Theming System**: Dynamische Themenwechsel mit automatischer Farbmischung
- **Accessibility Utilities**: Automatische Kontrastanpassungen für bessere Lesbarkeit
- **Component System**: Themenkonsistente Statusfarben (hover, active, disabled)
- **Dark Mode**: Automatische Anpassung von Farbmischungen im Dark Mode

## Zusammenfassung

Das Color-Mix System der Casoon UI Library bietet leistungsstarke Werkzeuge zur dynamischen Farbmanipulation. Mit diesem System können Sie konsistente, themenkonforme und barrierefreie Farbschemata erstellen, die sich nahtlos an verschiedene Anforderungen anpassen. Die Kombination aus modernen CSS-Farbfunktionen und vorgefertigten Utility-Klassen vereinfacht die Verwaltung von Farben in Ihrer Anwendung erheblich. 
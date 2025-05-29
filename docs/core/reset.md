---
title: Reset System
category: Core
---

# Reset System

Das Reset System der Casoon UI Library bildet die Grundlage für konsistentes Styling über verschiedene Browser hinweg. Es neutralisiert Browser-spezifische Standardstile und stellt eine solide Basis für die Implementierung eigener Designs bereit.

## Überblick

Browser wenden standardmäßig eigene Styles auf HTML-Elemente an, was zu Inkonsistenzen in der Darstellung führen kann. Das Reset System der Casoon UI Library löst dieses Problem, indem es:

- Browser-spezifische Standardstile normalisiert
- Eine konsistente Basis für alle Components schafft
- Typografische Inkonsistenzen beseitigt
- Box-Modell-Verhalten vereinheitlicht
- Darstellungsprobleme in verschiedenen Browsern minimiert

## Installation

Das Reset System wird automatisch geladen, wenn Sie die Hauptdatei der Casoon UI Library importieren:

```css
@import '@casoon/ui-lib/core.css';
```

Sie können das Reset System auch separat importieren:

```css
@import '@casoon/ui-lib/core/reset.css';
```

## Funktionen

### Box-Sizing Reset

Das Reset System setzt `box-sizing: border-box` für alle Elemente, um ein konsistentes Box-Modell zu gewährleisten:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Dies bewirkt, dass Padding und Border in die Gesamtbreite/-höhe des Elements einbezogen werden, was das Layout vorhersehbarer macht.

### Margin und Padding Reset

Alle Margin- und Padding-Werte werden auf 0 gesetzt, um ein konsistentes Ausgangsniveau zu schaffen:

```css
* {
  margin: 0;
  padding: 0;
}
```

### Typography-Normalisierung

Schriftgrößen und Zeilenhöhen werden normalisiert, um eine solide Basis für die Typography zu schaffen:

```css
html {
  /* Basis für rem-Werte */
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-family-base);
  font-size: 1rem;
  line-height: var(--line-height-base);
}
```

### Listen-Reset

Listenstile werden zurückgesetzt, um individuelle Customizations zu erleichtern:

```css
ul, ol {
  list-style: none;
}
```

### Form-Elemente

Form-Elemente werden normalisiert, um plattformübergreifende Consistency zu gewährleisten:

```css
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}
```

### Bilder und Medien

Bilder und andere Medien werden als Block-Elemente definiert und skalieren responsive:

```css
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  max-width: 100%;
  height: auto;
}
```

### Tablen

Tablen werden mit zusammengefassten Rahmen und standardmäßiger Zellabstand-Konfiguration dargestellt:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

### Accessibility und Usability

Das Reset System berücksichtigt auch Accessibility und User-friendliness:

```css
/* Verbesserte Fokusdarstellung für Tastaturnavigation */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Unterstützung für verringerte Bewegung */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Unterschied zu anderen Reset-Systemen

Im Vergleich zu bekannten Reset-Systemen wie normalize.css oder CSS Reset verfolgt die Casoon UI Library einen ausgewogenen Ansatz:

- **Moderne Browserunterstützung**: Fokus auf aktuelle Browser ohne Legacy-Fixes
- **Sanfter Reset**: Bewahrt nützliche Browser-Defaults, wo sinnvoll
- **Designsystem-Integration**: Optimiert für die Zusammenarbeit mit anderen Casoon UI Library-Components
- **CSS Variables**: Verwendet CSS Variables für einfache Customizations
- **Accessibility-First**: Accessibility ist von Anfang an integriert

## Vollständiger Reset-Code

Hier ist der vollständige CSS-Code des Reset-Systems:

```css
/* 
 * Casoon UI Library Reset
 * 
 * Ein modernes Reset-System, das Browser-Inkonsistenzen beseitigt
 * und eine solide Grundlage für die Casoon UI Library bietet.
 */

/* Box-Sizing Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Dokument-Reset */
html {
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

/* Body-Reset */
body {
  margin: 0;
  font-family: var(--font-family-base, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: var(--line-height-base, 1.5);
  color: var(--color-text, #333);
  background-color: var(--color-background, #fff);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Überschriften-Reset */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: var(--line-height-heading, 1.2);
}

/* Absatz-Reset */
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

/* Listen-Reset */
ol, ul, dl {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 0;
  list-style: none;
}

/* Tablen-Reset */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Links-Reset */
a {
  color: var(--color-link, #0066cc);
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: var(--color-link-hover, #004c99);
  text-decoration: underline;
}

/* Bild-Reset */
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/* Form-Reset */
button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}

button, input {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, 
[type="button"], 
[type="reset"], 
[type="submit"] {
  -webkit-appearance: button;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

/* Accessibility und Usability */
:focus-visible {
  outline: 2px solid var(--color-focus, #4d90fe);
  outline-offset: 2px;
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

/* Utility-Resets */
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.1));
}

/* Reduzierte Bewegung für Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Scrollbar-Standardisierung */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-scrollbar-track, #f1f1f1);
}

::-webkit-scrollbar-thumb {
  background: var(--color-scrollbar-thumb, #c1c1c1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-scrollbar-thumb-hover, #a8a8a8);
}
```

## Anpassung

Das Reset-System kann über CSS Variables angepasst werden:

```css
:root {
  --font-family-base: 'Your Font', sans-serif;
  --line-height-base: 1.6;
  --line-height-heading: 1.3;
  --color-text: #212121;
  --color-background: #ffffff;
  --color-link: #0066cc;
  --color-link-hover: #004c99;
  --color-focus: #4d90fe;
  --color-border: rgba(0, 0, 0, 0.1);
  --color-scrollbar-track: #f1f1f1;
  --color-scrollbar-thumb: #c1c1c1;
  --color-scrollbar-thumb-hover: #a8a8a8;
}
```

## Best Practices

- Importieren Sie das Reset-System immer vor anderen CSS-Dateien
- Überschreiben Sie Reset-Styles nur bei Bedarf
- Nutzen Sie die bereitgestellten CSS Variables für Customizations
- Beachten Sie, dass einige Browser-spezifische Eigenschaften (wie Scrollbars) möglicherweise nicht überall unterstützt werden

## Browser-Kompatibilität

Das Reset-System ist mit allen modernen Browsern kompatibel:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Grundlegender Reset | ✓ | ✓ | ✓ | ✓ | 11+ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | Nein |
| :focus-visible | ✓ | ✓ | ✓ | ✓ | Nein |
| Scrollbar-Styling | ✓ | Teilweise | ✓ | ✓ | Nein |

## Integration mit anderen Systemen

Das Reset-System bildet die Grundlage für alle anderen Casoon UI Library-Components und -Systeme. Es wird automatisch von folgenden Systemen verwendet:

- Color System
- Typography System
- Layout System
- Component System

## Zusammenfassung

Das Reset-System der Casoon UI Library bietet eine solide Grundlage für die Entwicklung konsistenter Benutzeroberflächen. Es beseitigt Browser-Inkonsistenzen und schafft eine neutrale Basis für die Implementierung Ihres eigenen Designs. Durch die Usage moderner CSS-Praktiken und die Berücksichtigung von Accessibility stellt es sicher, dass Ihre Anwendungen auf verschiedenen Plattformen konsistent und zugänglich sind. 
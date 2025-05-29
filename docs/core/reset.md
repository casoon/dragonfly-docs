---
title: Reset system
category: Core
---

# Reset system

the Reset system the Casoon UI Library bildet the Base for konsistentes Styling over verschiedene Browser hinweg. it neutralisiert Browser-spezifische Standardstile and stellt a solide Base for the Implementation eigener designs bereit.

## Uberblick

Browser wenden by default own Styles on HTML-elements on, what to Inkonsistenzen in the Display fuhren kann. the Reset system the Casoon UI Library lost this Problem, indem it:

- Browser-spezifische Standardstile normalisiert
- a konsistente Base for all Components schafft
- Typografische Inkonsistenzen beseitigt
- box-Modell-behavior vereinheitlicht
- Darstellungsprobleme in verschiedenen Browsern minimiert

## Installation

the Reset system wird automatisch geladen, If you the Hauptdatei the Casoon UI Library import:

```css
@import '@casoon/ui-lib/core.css';
```

You can the Reset system also separat import:

```css
@import '@casoon/ui-lib/core/reset.css';
```

## functions

### box-Sizing Reset

the Reset system setzt `box-sizing: border-box` for all elements, um a konsistentes box-Modell to gewahrleisten:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Dies bewirkt, that Padding and Border in the Gesamtbreite/-height des Elements einbezogen become, what the layout vorhersehbarer macht.

### Margin and Padding Reset

all Margin- and Padding-values become on 0 gesetzt, um a konsistentes Ausgangsniveau to schaffen:

```css
* {
  margin: 0;
  padding: 0;
}
```

### Typography-Normalisierung

Schriftgrossen and Zeilenhohen become normalisiert, um a solide Base for the Typography to schaffen:

```css
html {
  /* Base for rem-values */
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

### lists-Reset

Listenstile become zuruckgesetzt, um individuelle customizations to erleichtern:

```css
ul, ol {
  list-style: none;
}
```

### Form-elements

Form-elements become normalisiert, um plattformubergreifende Consistency to gewahrleisten:

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

### images and Medien

images and others Medien become as Block-elements definiert and skalieren responsive:

```css
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  max-width: 100%;
  height: auto;
}
```

### Tablen

Tablen become with zusammengefassten border and standardmassiger Zellabstand-Configuration dargestellt:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

### Accessibility and Usability

the Reset system berucksichtigt also Accessibility and User-friendliness:

```css
/* Verbesserte Fokusdarstellung for Tastaturnavigation */
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Unterstutzung for verringerte Bewegung */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Unterschied to anderen Reset-Systemen

Im Vergleich to bekannten Reset-Systemen how normalize.css or CSS Reset verfolgt the Casoon UI Library einen ausgewogenen Ansatz:

- **Moderne Browserunterstutzung**: Fokus on aktuelle Browser without Legacy-Fixes
- **Sanfter Reset**: Bewahrt nutzliche Browser-Defaults, where sinnvoll
- **design system-Integration**: Optimiert for the Zusammenarbeit with anderen Casoon UI Library-Components
- **CSS Variables**: Verwendet CSS Variables for einfache customizations
- **Accessibility-First**: Accessibility ist from Anfang on integriert

## Vollstandiger Reset-Code

Hier ist the vollstandige CSS-Code des Reset-Systems:

```css
/* 
 * Casoon UI Library Reset
 * 
 * a modernes Reset-system, the Browser-Inkonsistenzen beseitigt
 * and a solide Base for the Casoon UI Library bietet.
 */

/* box-Sizing Reset */
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

/* Uberschriften-Reset */
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

/* lists-Reset */
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

/* links-Reset */
a {
  color: var(--color-link, #0066cc);
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: var(--color-link-hover, #004c99);
  text-decoration: underline;
}

/* image-Reset */
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

/* Accessibility and Usability */
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

/* Reduzierte Bewegung for Accessibility */
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

## Customization

the Reset-system kann over CSS Variables angepasst become:

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

- import them the Reset-system immer before anderen CSS-Dateien
- overwrite them Reset-Styles only at Bedarf
- use them the bereitgestellten CSS Variables for customizations
- note, that some Browser-spezifische properties (how Scrollbars) moglicherweise not uberall unterstutzt become

## Browser-Kompatibilitat

the Reset-system ist with allen modernen Browsern kompatibel:

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Grundlegender Reset | ✓ | ✓ | ✓ | ✓ | 11+ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | Nein |
| :focus-visible | ✓ | ✓ | ✓ | ✓ | Nein |
| Scrollbar-Styling | ✓ | Teilweise | ✓ | ✓ | Nein |

## Integration with anderen Systemen

the Reset-system bildet the Base for all anderen Casoon UI Library-Components and -Systeme. it wird automatisch from folgenden Systemen verwendet:

- Color system
- Typography system
- layout system
- Component system

## Zusammenfassung

the Reset-system the Casoon UI Library bietet a solide Base for the Entwicklung konsistenter user interfaces. it beseitigt Browser-Inkonsistenzen and schafft a neutrale Base for the Implementation Ihres eigenen designs. through the Usage moderner CSS-Praktiken and the Berucksichtigung from Accessibility stellt it sicher, that Ihre Anwendungen on verschiedenen Plattformen konsistent and zuganglich sind. 
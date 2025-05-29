---
title: Typography
category: Typography
---

# Typography

Das Typography-System der Casoon UI Library bietet eine umfassende und flexible Lösung für die Gestaltung von Text und die Sicherstellung von Lesbarkeit, Hierarchie und Consistency in Ihrer Anwendung.

## Overview

Das Typography-System umfasst:

- **Font Families**: Sorgfältig ausgewählte Schriftfamilien für optimale Lesbarkeit
- **Headings**: Hierarchische Überschriftenstruktur
- **Paragraphs**: Optimierte Absatzformatierung
- **Inline Elements**: Hervorhebungen, Links und andere Inline-Textelemente
- **Lists**: Formatierung für verschiedene Listentypen
- **Responsive Typography**: Flüssige Schriftgrößenanpassung an verschiedene Bildschirmgrößen

## Prinzipien

Das Typography-System folgt diesen Prinzipien:

1. **Lesbarkeit**: Optimierung für bestmögliche Lesbarkeit
2. **Hierarchie**: Klare visuelle Hierarchie für verbesserte Scanbarkeit
3. **Consistency**: Einheitliche Textdarstellung
4. **Responsivität**: Anpassung an verschiedene Bildschirmgrößen
5. **Accessibility**: Einhaltung von WCAG-Richtlinien für Textkontrast und -größe

## Implementierung

Die Typography wird mittels CSS Variables und einem Schichtsystem implementiert:

```css
:root {
  /* Schriftfamilien */
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-family-heading: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'Fira Code', monospace;
  
  /* Schriftgrößen */
  --text-xs: 0.75rem;
  --text-s: 0.875rem;
  --text-m: 1rem;
  --text-l: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  
  /* Schriftgewichte */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

## Usage

Das Typography-System kann als Teil des Core-Imports oder individuell eingebunden werden:

```css
/* Als Teil des Core-Imports */
@import '@casoon/ui-lib/core.css';

/* Oder individuell */
@import '@casoon/ui-lib/typography.css';
```

## Further Topics

- [Font Families](/typography/fonts)
- [Headings](/typography/headings)
- [Paragraphs](/typography/paragraphs)
- [Inline Elements](/typography/inline)
- [Lists](/typography/lists)
- [Responsive Typography](/typography/responsive) 
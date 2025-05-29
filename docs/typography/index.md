---
title: Typography
category: Typography
---

# Typography

the Typography-system the Casoon UI Library bietet a umfassende and flexible Losung for the Gestaltung from Text and the Sicherstellung from Lesbarkeit, Hierarchie and Consistency in Ihrer Anwendung.

## Overview

the Typography-system umfasst:

- **Font Families**: Sorgfaltig ausgewahlte Schriftfamilien for optimale Lesbarkeit
- **Headings**: Hierarchische Uberschriftenstruktur
- **Paragraphs**: Optimierte Absatzformatierung
- **Inline Elements**: Hervorhebungen, links and others Inline-Textelemente
- **Lists**: Formatierung for verschiedene Listentypen
- **Responsive Typography**: Flussige Schriftgrossenanpassung on verschiedene Bildschirmgrossen

## Prinzipien

the Typography-system folgt diesen Prinzipien:

1. **Lesbarkeit**: Optimierung for bestmogliche Lesbarkeit
2. **Hierarchie**: Klare visuelle Hierarchie for verbesserte Scanbarkeit
3. **Consistency**: Einheitliche Textdarstellung
4. **Responsivitat**: Anpassung on verschiedene Bildschirmgrossen
5. **Accessibility**: Einhaltung from WCAG-Richtlinien for Textkontrast and -size

## Implementierung

the Typography wird mittels CSS Variables and einem Schichtsystem implementiert:

```css
:root {
  /* Schriftfamilien */
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-family-heading: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'Fira Code', monospace;
  
  /* Schriftgrossen */
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

the Typography-system kann as Teil des Core-Imports or individuell eingebunden become:

```css
/* as Teil des Core-Imports */
@import '@casoon/ui-lib/core.css';

/* or individuell */
@import '@casoon/ui-lib/typography.css';
```

## Further Topics

- [Font Families](/typography/fonts)
- [Headings](/typography/headings)
- [Paragraphs](/typography/paragraphs)
- [Inline Elements](/typography/inline)
- [Lists](/typography/lists)
- [Responsive Typography](/typography/responsive) 
---
title: Design Tokens
category: Tokens
---

# Design Tokens

Design Tokens bilden die grundlegende Sprache des Casoon UI Design-Systems. Sie sind die kleinsten Einheiten, die Colors, Abstände, Typography und andere visuelle Eigenschaften definieren und konsistent in der gesamten Anwendung angewendet werden können.

## Overview

Das Token-System der Casoon UI Library umfasst:

- **Color Tokens**: Farbpaletten und -variablen
- **Typography Tokens**: Schriftarten, -größen und -gewichte
- **Spacing Tokens**: Abstände und Ränder
- **Border Tokens**: Rahmenbreiten, -stile und -radien
- **Shadow Tokens**: Schatten- und Erhebungseffekte
- **Z-Index Tokens**: Ebenen-Management für das Stapeln von Elementen

## Prinzipien

Die Design Tokens der Casoon UI Library folgen diesen Prinzipien:

1. **Consistency**: Einheitliche Designsprache in der gesamten Anwendung
2. **Skalierbarkeit**: Customizability an verschiedene Anforderungen
3. **Maintainability**: Einfache Aktualisierung und Verwaltung
4. **Semantik**: Bedeutungsvolle, selbsterklärende Namensgebung
5. **Accessibility**: Unterstützung für Kontrast- und Lesbarkeitsanforderungen

## Implementierung

Design Tokens werden als CSS Variables implementiert und sind in der gesamten Casoon UI Library verfügbar:

```css
:root {
  /* Example für Color Tokens */
  --color-primary-500: #3b82f6;
  --color-neutral-100: #f3f4f6;
  
  /* Example für Spacing Tokens */
  --space-xs: 0.25rem;
  --space-s: 0.5rem;
  --space-m: 1rem;
  --space-l: 1.5rem;
  --space-xl: 2rem;
}
```

## Usage

Design Tokens können in Ihrem CSS oder in HTML-Inline-Styles verwendet werden:

```css
.button {
  background-color: var(--color-primary-500);
  padding: var(--space-s) var(--space-m);
  border-radius: var(--radius-m);
}
```

## Further Topics

- [Color Tokens](/tokens/colors)
- [Typography Tokens](/tokens/typography)
- [Spacing Tokens](/tokens/spacing)
- [Border Tokens](/tokens/borders)
- [Shadow Tokens](/tokens/shadows)
- [Z-Index Tokens](/tokens/z-index) 
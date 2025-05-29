---
title: design Tokens
category: Tokens
---

# design Tokens

design Tokens bilden the grundlegende Sprache des Casoon UI design-Systems. them sind the kleinsten Einheiten, the Colors, Abstande, Typography and others visuelle properties define and konsistent in the gesamten Application angewendet become can.

## Overview

the Token-system the Casoon UI Library umfasst:

- **Color Tokens**: Farbpaletten and -variables
- **Typography Tokens**: Schriftarten, -sizes and -gewichte
- **Spacing Tokens**: Abstande and Rander
- **Border Tokens**: Rahmenbreiten, -styles and -radien
- **Shadow Tokens**: shadow- and Erhebungseffekte
- **Z-Index Tokens**: Ebenen-Management for the Stapeln from Elementen

## Prinzipien

the design Tokens the Casoon UI Library folgen diesen Prinzipien:

1. **Consistency**: Einheitliche Designsprache in the gesamten Application
2. **Skalierbarkeit**: Customizability on verschiedene Anforderungen
3. **Maintainability**: Einfache Aktualisierung and Verwaltung
4. **Semantik**: Bedeutungsvolle, selbsterklarende Namensgebung
5. **Accessibility**: Unterstutzung for Kontrast- and Lesbarkeitsanforderungen

## Implementation

design Tokens become as CSS Variables implementiert and sind in the gesamten Casoon UI Library verfugbar:

```css
:root {
  /* Example for Color Tokens */
  --color-primary-500: #3b82f6;
  --color-neutral-100: #f3f4f6;
  
  /* Example for Spacing Tokens */
  --space-xs: 0.25rem;
  --space-s: 0.5rem;
  --space-m: 1rem;
  --space-l: 1.5rem;
  --space-xl: 2rem;
}
```

## Usage

design Tokens can in Ihrem CSS or in HTML-Inline-Styles verwendet become:

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
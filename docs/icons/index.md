---
title: icon system
category: icons
---

# icon system

the icon system the Casoon UI Library bietet a umfassende Sammlung from Symbolen, the in verschiedenen Formaten and Stylesn verfugbar sind, um a konsistente visuelle Sprache in Ihrer Application to gewahrleisten.

## Overview

the icon system umfasst:

- **icon Sets**: Verschiedene Sammlungen from icons for unterschiedliche Zwecke
- **Formate**: SVG, Webfonts and CSS-basierte icons
- **Sizes and Variants**: Verschiedene Sizes and Stilvarianten
- **Accessibility**: Zugangliche icons with angemessenen Labels

## icon Sets

the Casoon UI Library bietet folgende icon Sets:

- **UI icons**: Grundlegende Symbole for user interfaces (navigation, Aktionen, Steuerelemente)
- **Application icons**: Symbole for haufige Anwendungsfunktionen
- **Document icons**: Symbole for Dokumente and Dateitypen
- **Social icons**: Symbole for soziale Medien and Kommunikation
- **Device icons**: Symbole for Gerate and Hardware

## Formate and Implementation

### SVG-icons

```html
<span class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
</span>
```

### CSS-icons

```html
<span class="icon icon-home" aria-hidden="true"></span>
```

### icon-Webfont

```html
<i class="casoon-icon casoon-home" aria-hidden="true"></i>
```

## Sizes and Variants

icons sind in verschiedenen Sizes and Variants verfugbar:

```html
<!-- Sizes -->
<span class="icon icon-xs">...</span>
<span class="icon icon-s">...</span>
<span class="icon icon-m">...</span>
<span class="icon icon-l">...</span>
<span class="icon icon-xl">...</span>

<!-- Variants -->
<span class="icon icon-outlined">...</span>
<span class="icon icon-filled">...</span>
<span class="icon icon-two-tone">...</span>
```

## Accessibility

for optimale Accessibility should icons entweder:

1. with `aria-hidden="true"` versehen become, If you rein dekorativ sind
2. with einem aussagekraftigen Label versehen become, If you informativ sind

```html
<!-- Dekoratives icon -->
<span class="icon icon-star" aria-hidden="true"></span>

<!-- Informatives icon -->
<span class="icon icon-warning" aria-label="warning"></span>
```

## Integration

the icon system kann in Ihre Application integriert become through:

```css
/* Gesamtes icon-system */
@import '@casoon/ui-lib/icons.css';

/* or only einzelne icon Sets */
@import '@casoon/ui-lib/icons/ui-icons.css';
@import '@casoon/ui-lib/icons/social-icons.css';
```

## Further Topics

- [icon Sets](/icons/sets)
- [icon Usage](/icons/usage)
- [icon Customization](/icons/customization) 
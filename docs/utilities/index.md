---
title: Utility Classes
category: Utilities
---

# Utility Classes

the Utility-system the Casoon UI Library bietet a umfassende Sammlung from CSS-Dienstprogrammklassen for schnelle Styling-customizations without the Notwendigkeit, benutzerdefiniertes CSS to schreiben.

## Overview

the Utility-system umfasst classes for:

- **Colors**: Text-, background- and Rahmenfarben
- **Spacing**: Abstande, Rander and Polsterung
- **Typography**: Schriftarten, -sizes, -gewichte and Textausrichtung
- **Display**: Anzeigeeigenschaften and visibility
- **flexbox**: Flexible box-layout-Steuerung
- **grid**: CSS-grid-layout-Steuerung
- **position**: Elementpositionierung
- **Size**: Breiten- and Hohenkontrolle

## Prinzipien

the Utility-system basiert on folgenden Prinzipien:

1. **Atomaritat**: Jede Class tut genau a Sache
2. **Vorhersehbarkeit**: Konsistente Namenskonventionen and Verhaltensweisen
3. **Responsivitat**: breakpoint-Prafixe for responsives behavior
4. **Effizienz**: Minimale Dateigrosse through optimierte Selektoren

## Namenskonventionen

Utility-classes folgen einem konsistenten Benennungsmuster:

```.[Property]-[Variante]-[Value]
```

Examples:
- `.color-primary-500`: Textfarbe on Primary-500 setzen
- `.bg-neutral-100`: Hintergrundfarbe on Neutral-100 setzen
- `.m-m`: Margin on mittleren Value setzen
- `.p-l`: Padding on sizes Value setzen
- `.flex-center`: Flex-Items center

## responsive Utilities

through Prafixe can Utilities responsive angewendet become:

```html
<div class="display-block sm:display-none lg:display-flex">
  <!-- by default as Block angezeigt, on kleinen Bildschirmen ausgeblendet, on sizes as Flex angezeigt -->
</div>
```

## Kategorien from Utilities

### Color Utilities

```html
<!-- Textfarben -->
<p class="color-primary-500">Primarfarbe</p>
<p class="color-danger-400">Warnfarbe</p>

<!-- Hintergrundfarben -->
<div class="bg-neutral-100">Neutraler background</div>
<div class="bg-success-200">Erfolgs-background</div>
```

### Spacing Utilities

```html
<!-- Margin -->
<div class="m-s">smaller spacing rundum</div>
<div class="mt-m mb-l">Mittlerer spacing oben, grosser unten</div>

<!-- Padding -->
<div class="p-m">Mittlere Polsterung rundum</div>
<div class="px-l py-m">size horizontale, mittlere vertikale Polsterung</div>
```

### Typography Utilities

```html
<!-- font size and -gewicht -->
<p class="text-s">smaller Text</p>
<p class="text-l font-bold">Grosser, fetter Text</p>

<!-- Textausrichtung -->
<p class="text-center">Zentrierter Text</p>
<p class="text-right">Rechtsbundiger Text</p>
```

## Usage

the Utility-system kann as Ganzes or modular eingebunden become:

```css
/* Gesamtes Utility-system */
@import '@casoon/ui-lib/utilities.css';

/* or only einzelne Utility-Kategorien */
@import '@casoon/ui-lib/utilities/spacing.css';
@import '@casoon/ui-lib/utilities/colors.css';
```

## Further Topics

- [Color Utilities](/utilities/colors)
- [Spacing Utilities](/utilities/spacing)
- [Typography Utilities](/utilities/typography)
- [Display Utilities](/utilities/display)
- [Flex Utilities](/utilities/flex)
- [grid Utilities](/utilities/grid)
- [position Utilities](/utilities/position)
- [Size Utilities](/utilities/size) 
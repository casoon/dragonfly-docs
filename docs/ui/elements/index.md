---
title: UI Elements
category: UI
---

# UI Elements

UI Elements sind the fundamentalen Bausteine the Casoon UI Library. them bilden the Base for the Erstellung komplexerer Components and user interfaces.

## Overview

UI Elements zeichnen oneself through folgende properties aus:

- **Einfachheit**: Fokus on a einzelne Funktionalitat
- **Wiederverwendbarkeit**: can in verschiedenen Kontexten eingesetzt become
- **Komposition**: can to komplexeren Components kombiniert become
- **Consistency**: Einheitliches design and behavior

## Verfugbare Elements

the Casoon UI Library bietet folgende UI Elements:

### Interaktionselemente

- [button](/ui/elements/button/): Buttonn for Aktionen
- [checkbox](/ui/elements/checkbox/): Auswahlboxen for Mehrfachauswahl
- [Radio](/ui/elements/radio/): Radioer for Einzelauswahl
- [Select](/ui/elements/select/): Selects for lists from Optionen
- [Slider](/ui/elements/slider/): Slider for Wertebereiche
- [Switch](/ui/elements/switch/): Umschalter for binare States
- [Input](/ui/elements/input/): text fields for Benutzereingaben
- [Textarea](/ui/elements/textarea/): textareas

### Prasentationselemente

- [avatar](/ui/elements/avatar/): Benutzerbilder and -initialen
- [badge](/ui/elements/badge/): Markierungen for Status or Anzahl
- [chip](/ui/elements/chip/): Kompakte Informationsdarstellung
- [Code](/ui/elements/code/): Formatting for Quellcode
- [spinners](/ui/elements/spinners/): Ladeanzeigen
- [tooltip](/ui/elements/tooltip/): Zusatzliche Informationen at Hover

## Usage

UI Elements can individuell or as Teil des gesamten UI-Systems importiert become:

```css
/* Entire UI system */
@import '@casoon/ui-lib/ui.css';

/* or only einzelne Elements */
@import '@casoon/ui-lib/ui/elements/button.css';
@import '@casoon/ui-lib/ui/elements/input.css';
```

## Customizability

all UI Elements can over CSS Variables angepasst become:

```css
:root {
  /* button-customizations */
  --button-radius: 0.25rem;
  --button-primary-bg: #0066cc;
  
  /* Input-customizations */
  --input-border-color: #cbd5e1;
  --input-focus-ring-color: rgba(0, 102, 204, 0.25);
}
```

## Accessibility

all UI Elements sind for optimale Accessibility entwickelt:

- Unterstutzung for Tastaturnavigation
- Semantische HTML-Structure
- ARIA-attributes for Screenreader
- Ausreichende Farbkontraste
- Fokus-Indikatoren 
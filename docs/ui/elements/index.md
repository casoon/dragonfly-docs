---
title: UI Elements
category: UI
---

# UI Elements

UI Elements sind die fundamentalen Bausteine der Casoon UI Library. Sie bilden die Grundlage für die Erstellung komplexerer Components und Benutzeroberflächen.

## Overview

UI Elements zeichnen sich durch folgende Eigenschaften aus:

- **Einfachheit**: Fokus auf eine einzelne Funktionalität
- **Wiederverwendbarkeit**: Können in verschiedenen Kontexten eingesetzt werden
- **Komposition**: Können zu komplexeren Components kombiniert werden
- **Consistency**: Einheitliches Design und Verhalten

## Verfügbare Elements

Die Casoon UI Library bietet folgende UI Elements:

### Interaktionselemente

- [Button](/ui/elements/button/): Buttonn für Aktionen
- [Checkbox](/ui/elements/checkbox/): Auswahlboxen für Mehrfachauswahl
- [Radio](/ui/elements/radio/): Radioer für Einzelauswahl
- [Select](/ui/elements/select/): Selects für Listen von Optionen
- [Slider](/ui/elements/slider/): Slider für Wertebereiche
- [Switch](/ui/elements/switch/): Umschalter für binäre States
- [Input](/ui/elements/input/): Textfelder für Benutzereingaben
- [Textarea](/ui/elements/textarea/): Mehrzeilige Textfelder

### Präsentationselemente

- [Avatar](/ui/elements/avatar/): Benutzerbilder und -initialen
- [Badge](/ui/elements/badge/): Markierungen für Status oder Anzahl
- [Chip](/ui/elements/chip/): Kompakte Informationsdarstellung
- [Code](/ui/elements/code/): Formatierung für Quellcode
- [Spinner](/ui/elements/spinner/): Ladeanzeigen
- [Tooltip](/ui/elements/tooltip/): Zusätzliche Informationen bei Hover

## Usage

UI Elements können individuell oder als Teil des gesamten UI-Systems importiert werden:

```css
/* Entire UI System */
@import '@casoon/ui-lib/ui.css';

/* Oder nur einzelne Elements */
@import '@casoon/ui-lib/ui/elements/button.css';
@import '@casoon/ui-lib/ui/elements/input.css';
```

## Customizability

Alle UI Elements können über CSS Variables angepasst werden:

```css
:root {
  /* Button-Customizations */
  --button-radius: 0.25rem;
  --button-primary-bg: #0066cc;
  
  /* Input-Customizations */
  --input-border-color: #cbd5e1;
  --input-focus-ring-color: rgba(0, 102, 204, 0.25);
}
```

## Accessibility

Alle UI Elements sind für optimale Accessibility entwickelt:

- Unterstützung für Tastaturnavigation
- Semantische HTML-Struktur
- ARIA-Attribute für Screenreader
- Ausreichende Farbkontraste
- Fokus-Indikatoren 
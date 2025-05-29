---
title: Select element
outline: deep
---


# Select

the Select-element bietet Dropdown-Selects for Forme and ermoglicht Benutzern, a Option aus einer vordefinierten list auszuwahlen. it ist a wichtiges element for Forme and Benutzereinstellungen.

## Installation

the Select-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Select-component */
@import '@casoon/ui-lib/components/select.css';
```

## Basic Usage

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

## Variants

### Sizesvarianten

it gibt drei Sizesvarianten for the Select-element: small, mittel (Standard) and gross.

```html
<select class="select sm">
  <option>small</option>
</select>

<select class="select">
  <option>Mittel (Standard)</option>
</select>

<select class="select lg">
  <option>Gross</option>
</select>
```

<div class="example-wrappers">
  <div style="margin-bottom: 1rem;">
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 0.875rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 0.875rem; padding: 0.25rem 0.5rem; width: 100%;">
      <option>small</option>
    </select>
  </div>
  <div style="margin-bottom: 1rem;">
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
      <option>Mittel (Standard)</option>
    </select>
  </div>
  <div>
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 1rem center; background-repeat: no-repeat; background-size: 1.25rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1.125rem; padding: 0.75rem 1rem; width: 100%;">
      <option>Gross</option>
    </select>
  </div>
</div>

### Zustandsvarianten

#### Deaktiviert

```html
<select class="select" disabled>
  <option>Deaktiviert</option>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: #f3f4f6; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #6b7280; cursor: not-allowed; display: block; font-size: 1rem; opacity: 70%; padding: 0.5rem 0.75rem; width: 100%;" disabled>
    <option>Deaktiviert</option>
  </select>
</div>

#### with errors

```html
<select class="select error">
  <option>with errors</option>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: #fef2f2; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #ef4444; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>with errors</option>
  </select>
</div>

#### with success

```html
<select class="select success">
  <option>Erfolgreich</option>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: #f0fdf4; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #10b981; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>Erfolgreich</option>
  </select>
</div>

### with Label (over Form-component)

```html
<div class="form-group">
  <label class="form-label" for="country">Land</label>
  <select class="select" id="country">
    <option>Deutschland</option>
    <option>Osterreich</option>
    <option>Schweiz</option>
  </select>
</div>
```

<div class="example-wrappers">
  <div style="margin-bottom: 1rem;">
    <label style="display: block; font-weight: 500; margin-bottom: 0.25rem;" for="country">Land</label>
    <select id="country" style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
      <option>Deutschland</option>
      <option>Osterreich</option>
      <option>Schweiz</option>
    </select>
  </div>
</div>

### Mehrfachauswahl

```html
<select class="select" multiple>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: white; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.25rem; width: 100%;" multiple size="3">
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 1</option>
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 2</option>
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 3</option>
  </select>
</div>

### with Optionsgruppen

```html
<select class="select">
  <optgroup label="Gruppe 1">
    <option>Option 1.1</option>
    <option>Option 1.2</option>
  </optgroup>
  <optgroup label="Gruppe 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
</select>
```

<div class="example-wrappers">
  <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <optgroup label="Gruppe 1" style="color: #374151; font-weight: 500;">
      <option>Option 1.1</option>
      <option>Option 1.2</option>
    </optgroup>
    <optgroup label="Gruppe 2" style="color: #374151; font-weight: 500;">
      <option>Option 2.1</option>
      <option>Option 2.2</option>
    </optgroup>
  </select>
</div>

## Anpassung

the Select-element kann over CSS Variables angepasst become:

```css
:root {
  --color-white: #ffffff;        /* Hintergrundfarbe */
  --color-gray-100: #f3f4f6;     /* Deaktivierter background */
  --color-gray-300: #d1d5db;     /* Rahmenfarbe */
  --color-gray-500: #6b7280;     /* Deaktivierte Textfarbe */
  --color-gray-700: #374151;     /* Optgroup Textfarbe */
  --color-gray-900: #111827;     /* Textfarbe */
  --color-primary: #3b82f6;      /* Fokus-border & Hervorhebung */
  --color-error: #ef4444;        /* errors-Zustandsfarbe */
  --color-success: #10b981;      /* Erfolgs-Zustandsfarbe */
  --font-size-sm: 0.875rem;      /* Kleine Textgrosse */
  --font-size-base: 1rem;        /* Standard-Textgrosse */
  --font-size-lg: 1.125rem;      /* size Textgrosse */
  --font-weight-medium: 500;     /* Optgroup Schriftgewicht */
  --radius-sm: 0.125rem;         /* Mehrfachauswahl-Optionen Radius */
  --radius-md: 0.375rem;         /* Select-Rahmenradius */
  --space-1: 0.25rem;            /* Kleinster spacing */
  --space-2: 0.5rem;             /* smaller spacing */
  --space-3: 0.75rem;            /* Mittlerer spacing */
  --space-4: 1rem;               /* Grosser spacing */
  --transition-fast: 0.15s ease; /* Ubergangsgeschwindigkeit */
}
```

## Accessibility

for a bessere Accessibility Please note please folgende Punkte:

- use them immer a sichtbares Label (with einem `<label>`-element), the with dem Select-element verknupft ist
- Stellen them einen ausreichenden Farbkontrast for Text and border sicher
- Bieten them klare Anweisungen for Mehrfachauswahl-inputs
- use them Optionsgruppen, um verwandte Optionen in langen lists to organisieren
- Fugen them at Bedarf a Standard- or Platzhalter-Option hinzu
- Stellen them sicher, that the component with the Tastatur bedienbar ist

## Bewahrte Praktiken

- use them Select-elements, um a (or several) Optionen aus einer list auszuwahlen
- Bieten them aussagekraftige Option-Texte on, the the selection eindeutig beschreiben
- Strukturieren them length lists with Optionsgruppen for bessere Overviewlichkeit
- use them angemessene Sizes basierend on dem Kontext and the importance des Elements
- Berucksichtigen them the mobile Nutzung at the Gestaltung Ihrer Select-elements

## Browser-Kompatibilitat

the Select-element ist with allen modernen Browsern kompatibel.

| function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Erscheinungsbildes | ✅ | ✅ | ✅ | ✅ |
| Mehrfachauswahl | ✅ | ✅ | ✅ | ✅ |
| Optionsgruppen | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
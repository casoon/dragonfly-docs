---
title: Radio element
outline: deep
---


# Radio

the Radio-element dient zur selection einer einzelnen Option aus einer Gruppe from Alternativen. Radio-buttons become verwendet, if user only a Option aus mehreren Moglichkeiten selections can should.

## Installation

the Radio-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Radio-Component */
@import '@casoon/ui-lib/components/radio.css';
```

## Basic Usage

```html
<label class="radio">
  <input type="radio" name="radioGroup">
  <span class="label">Option 1</span>
</label>
<label class="radio">
  <input type="radio" name="radioGroup">
  <span class="label">Option 2</span>
</label>
```

<div class="example-wrappers">
  <div style="margin-bottom: 10px;">
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="radioGroup" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 1</span>
    </label>
  </div>
  <div>
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="radioGroup" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 2</span>
    </label>
  </div>
</div>

## Variants

### Standard Radio

the grundlegende Radio-button without spezielle States.

```html
<label class="radio">
  <input type="radio" name="demoRadio1">
  <span class="label">Standard Radio</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio1" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Standard Radio</span>
  </label>
</div>

### Ausgewahlt (Checked)

a Radio-button im ausgewahlten state.

```html
<label class="radio">
  <input type="radio" name="demoRadio2" checked>
  <span class="label">Ausgewahlte Option</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio2" checked style="appearance: none; background-color: #3b82f6; border: 2px solid #3b82f6; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Ausgewahlte Option</span>
  </label>
</div>

### Deaktiviert (Disabled)

a Radio-button im deaktivierten state.

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled>
  <span class="label">Deaktivierte Option</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio3" disabled style="appearance: none; background-color: #f3f4f6; border: 2px solid #d1d5db; border-radius: 9999px; cursor: not-allowed; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span style="color: #9ca3af; cursor: not-allowed;">Deaktivierte Option</span>
  </label>
</div>

### Deaktiviert and Ausgewahlt

a Radio-button, the sowohl deaktiviert as also ausgewahlt ist.

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled checked>
  <span class="label">Deaktivierte ausgewahlte Option</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio3" disabled checked style="appearance: none; background-color: #f3f4f6; border: 2px solid #d1d5db; border-radius: 9999px; cursor: not-allowed; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span style="color: #9ca3af; cursor: not-allowed;">Deaktivierte ausgewahlte Option</span>
  </label>
</div>

## Sizesvarianten

### small (Small)

```html
<label class="radio sm">
  <input type="radio" name="demoRadioSize">
  <span class="label">smaller Radio-button</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.75rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 0.875rem; position: relative; transition: all 0.15s ease-in-out; width: 0.875rem;">
    <span>smaller Radio-button</span>
  </label>
</div>

### Standard

```html
<label class="radio">
  <input type="radio" name="demoRadioSize">
  <span class="label">Standard Radio-button</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Standard Radio-button</span>
  </label>
</div>

### Gross (Large)

```html
<label class="radio lg">
  <input type="radio" name="demoRadioSize">
  <span class="label">Grosser Radio-button</span>
</label>
```

<div class="example-wrappers">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 1rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1.25rem; position: relative; transition: all 0.15s ease-in-out; width: 1.25rem;">
    <span>Grosser Radio-button</span>
  </label>
</div>

## Radio-Gruppen

Radio-buttons can in Gruppen organisiert become, um zusammengehorige Optionen darzustellen.

```html
<div class="radio-group">
  <label class="radio">
    <input type="radio" name="options" value="option1">
    <span class="label">Option 1</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="options" value="option2">
    <span class="label">Option 2</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="options" value="option3">
    <span class="label">Option 3</span>
  </label>
</div>
```

<div class="example-wrappers">
  <div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="options" value="option1" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 1</span>
    </label>
    
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="options" value="option2" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 2</span>
    </label>
    
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="options" value="option3" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 3</span>
    </label>
  </div>
</div>

## Horizontale Radio-buttons

Radio-buttons can also horizontal angeordnet become.

```html
<div class="radio-group horizontal">
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline1">
    <span class="label">Option 1</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline2">
    <span class="label">Option 2</span>
  </label>
  
  <label class="radio">
    <input type="radio" name="horizontalOptions" value="inline3">
    <span class="label">Option 3</span>
  </label>
</div>
```

<div class="example-wrappers">
  <div style="display: flex; align-items: center; flex-flow: row wrap; gap: 0.5rem;">
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="horizontalOptions" value="inline1" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 1</span>
    </label>
    
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="horizontalOptions" value="inline2" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 2</span>
    </label>
    
    <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
      <input type="radio" name="horizontalOptions" value="inline3" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
      <span>Option 3</span>
    </label>
  </div>
</div>

## Customization

the Radio-Component kann over CSS Variables angepasst become:

```css
:root {
  --color-primary: #3b82f6;     /* Primarfarbe for den ausgewahlten state */
  --color-white: #ffffff;       /* background for Radio-button */
  --color-gray-100: #f3f4f6;    /* background for deaktivierten state */
  --color-gray-300: #d1d5db;    /* border for deaktivierten state */
  --color-gray-400: #9ca3af;    /* Rahmenfarbe for not ausgewahlten state */
  --font-size-xs: 0.75rem;      /* Kleine Textgrosse */
  --font-size-sm: 0.875rem;     /* Mittlere Textgrosse (Standard) */
  --font-size-base: 1rem;       /* size Textgrosse */
  --space-2: 0.5rem;            /* spacing between Elementen */
  --transition-fast: 0.15s ease-in-out; /* Ubergangsgeschwindigkeit */
}
```

## Accessibility

for a bessere Accessibility note please folgende Punkte:

- use them immer a `<label>`-element, the the Radio-Input umschliesst
- Gruppieren them zusammengehorige Radio-buttons with the Class `radio-group`
- Stellen them einen ausreichenden Kontrast between background and Radio-button sicher
- make sure, that the Radio-buttons with the Tastatur bedienbar sind (Tab-navigation and Pfeiltasten)
- use them immer denselben `name`-Attributwert for a Gruppe from Radio-buttons, um sicherzustellen, that only a Option ausgewahlt become kann

## Bewahrte Praktiken

- use them Radio-buttons, if only a Option aus einer list ausgewahlt become kann
- Ordnen them Radio-buttons vertikal on, um the Lesbarkeit to verbessern
- Fugen them a Standardauswahl hinzu, if all Optionen gleichermassen gultig sind
- Begrenzen them the Anzahl the Optionen on a uberschaubare Menge

## Browser-Kompatibilitat

the Radio-element ist with allen modernen Browsern kompatibel.

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| Anpassbares Styling | ✅ | ✅ | ✅ | ✅ |
| Sizesvarianten | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
---
title: Radio Element
outline: deep
---


# Radio

Das Radio-Element dient zur Auswahl einer einzelnen Option aus einer Gruppe von Alternativen. Radio-Buttons werden verwendet, wenn Benutzer nur eine Option aus mehreren Möglichkeiten auswählen können sollen.

## Installation

Das Radio-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Radio-Komponente */
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

<div class="example-wrapper">
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

Der grundlegende Radio-Button ohne spezielle States.

```html
<label class="radio">
  <input type="radio" name="demoRadio1">
  <span class="label">Standard Radio</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio1" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Standard Radio</span>
  </label>
</div>

### Ausgewählt (Checked)

Ein Radio-Button im ausgewählten Zustand.

```html
<label class="radio">
  <input type="radio" name="demoRadio2" checked>
  <span class="label">Ausgewählte Option</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio2" checked style="appearance: none; background-color: #3b82f6; border: 2px solid #3b82f6; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Ausgewählte Option</span>
  </label>
</div>

### Deaktiviert (Disabled)

Ein Radio-Button im deaktivierten Zustand.

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled>
  <span class="label">Deaktivierte Option</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio3" disabled style="appearance: none; background-color: #f3f4f6; border: 2px solid #d1d5db; border-radius: 9999px; cursor: not-allowed; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span style="color: #9ca3af; cursor: not-allowed;">Deaktivierte Option</span>
  </label>
</div>

### Deaktiviert und Ausgewählt

Ein Radio-Button, der sowohl deaktiviert als auch ausgewählt ist.

```html
<label class="radio">
  <input type="radio" name="demoRadio3" disabled checked>
  <span class="label">Deaktivierte ausgewählte Option</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadio3" disabled checked style="appearance: none; background-color: #f3f4f6; border: 2px solid #d1d5db; border-radius: 9999px; cursor: not-allowed; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span style="color: #9ca3af; cursor: not-allowed;">Deaktivierte ausgewählte Option</span>
  </label>
</div>

## Sizesvarianten

### Klein (Small)

```html
<label class="radio sm">
  <input type="radio" name="demoRadioSize">
  <span class="label">Kleiner Radio-Button</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.75rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 0.875rem; position: relative; transition: all 0.15s ease-in-out; width: 0.875rem;">
    <span>Kleiner Radio-Button</span>
  </label>
</div>

### Standard

```html
<label class="radio">
  <input type="radio" name="demoRadioSize">
  <span class="label">Standard Radio-Button</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 0.875rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1rem; position: relative; transition: all 0.15s ease-in-out; width: 1rem;">
    <span>Standard Radio-Button</span>
  </label>
</div>

### Groß (Large)

```html
<label class="radio lg">
  <input type="radio" name="demoRadioSize">
  <span class="label">Großer Radio-Button</span>
</label>
```

<div class="example-wrapper">
  <label style="align-items: center; cursor: pointer; display: inline-flex; font-size: 1rem; gap: 0.5rem;">
    <input type="radio" name="demoRadioSize" style="appearance: none; background-color: white; border: 2px solid #9ca3af; border-radius: 9999px; height: 1.25rem; position: relative; transition: all 0.15s ease-in-out; width: 1.25rem;">
    <span>Großer Radio-Button</span>
  </label>
</div>

## Radio-Gruppen

Radio-Buttons können in Gruppen organisiert werden, um zusammengehörige Optionen darzustellen.

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

<div class="example-wrapper">
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

## Horizontale Radio-Buttons

Radio-Buttons können auch horizontal angeordnet werden.

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

<div class="example-wrapper">
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

## Anpassung

Die Radio-Komponente kann über CSS Variables angepasst werden:

```css
:root {
  --color-primary: #3b82f6;     /* Primärfarbe für den ausgewählten Zustand */
  --color-white: #ffffff;       /* Hintergrund für Radio-Button */
  --color-gray-100: #f3f4f6;    /* Hintergrund für deaktivierten Zustand */
  --color-gray-300: #d1d5db;    /* Rahmen für deaktivierten Zustand */
  --color-gray-400: #9ca3af;    /* Rahmenfarbe für nicht ausgewählten Zustand */
  --font-size-xs: 0.75rem;      /* Kleine Textgröße */
  --font-size-sm: 0.875rem;     /* Mittlere Textgröße (Standard) */
  --font-size-base: 1rem;       /* Große Textgröße */
  --space-2: 0.5rem;            /* Abstand zwischen Elementen */
  --transition-fast: 0.15s ease-in-out; /* Übergangsgeschwindigkeit */
}
```

## Accessibility

Für eine bessere Accessibility beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das das Radio-Input umschließt
- Gruppieren Sie zusammengehörige Radio-Buttons mit der Klasse `radio-group`
- Stellen Sie einen ausreichenden Kontrast zwischen Hintergrund und Radio-Button sicher
- Achten Sie darauf, dass die Radio-Buttons mit der Tastatur bedienbar sind (Tab-Navigation und Pfeiltasten)
- Verwenden Sie immer denselben `name`-Attributwert für eine Gruppe von Radio-Buttons, um sicherzustellen, dass nur eine Option ausgewählt werden kann

## Bewährte Praktiken

- Verwenden Sie Radio-Buttons, wenn nur eine Option aus einer Liste ausgewählt werden kann
- Ordnen Sie Radio-Buttons vertikal an, um die Lesbarkeit zu verbessern
- Fügen Sie eine Standardauswahl hinzu, wenn alle Optionen gleichermaßen gültig sind
- Begrenzen Sie die Anzahl der Optionen auf eine überschaubare Menge

## Browser-Kompatibilität

Das Radio-Element ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| Anpassbares Styling | ✅ | ✅ | ✅ | ✅ |
| Sizesvarianten | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
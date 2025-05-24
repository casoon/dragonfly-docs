---
title: Radio Komponente
category: Components
---

# Radio Komponente

Die Radio-Komponente ermöglicht Benutzern, eine einzelne Option aus einer Liste von Alternativen auszuwählen.

## Grundlegende Verwendung

```html
<div class="radio-container">
  <input type="radio" id="radio1" name="radioGroup" class="radio">
  <label for="radio1">Option 1</label>
</div>
<div class="radio-container">
  <input type="radio" id="radio2" name="radioGroup" class="radio">
  <label for="radio2">Option 2</label>
</div>
```

## Varianten

### Standard Radio

```html
<div class="radio-container">
  <input type="radio" id="radio-standard" name="demoRadio1" class="radio">
  <label for="radio-standard">Standard Radio</label>
</div>
```

### Checked (Aktiviert)

```html
<div class="radio-container">
  <input type="radio" id="radio-checked" name="demoRadio2" class="radio" checked>
  <label for="radio-checked">Ausgewählte Option</label>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="radio-container">
  <input type="radio" id="radio-disabled" name="demoRadio3" class="radio" disabled>
  <label for="radio-disabled">Deaktivierte Option</label>
</div>
```

### Disabled Checked (Deaktiviert und Ausgewählt)

```html
<div class="radio-container">
  <input type="radio" id="radio-disabled-checked" name="demoRadio3" class="radio" disabled checked>
  <label for="radio-disabled-checked">Deaktivierte ausgewählte Option</label>
</div>
```

## Größenvarianten

### Klein

```html
<div class="radio-container">
  <input type="radio" id="radio-small" name="demoRadioSize" class="radio radio--sm">
  <label for="radio-small">Kleiner Radio Button</label>
</div>
```

### Standard

```html
<div class="radio-container">
  <input type="radio" id="radio-medium" name="demoRadioSize" class="radio">
  <label for="radio-medium">Standard Radio Button</label>
</div>
```

### Groß

```html
<div class="radio-container">
  <input type="radio" id="radio-large" name="demoRadioSize" class="radio radio--lg">
  <label for="radio-large">Großer Radio Button</label>
</div>
```

## Radio-Gruppe

```html
<fieldset class="radio-group">
  <legend>Wählen Sie eine Option:</legend>
  
  <div class="radio-container">
    <input type="radio" id="option1" class="radio" name="options" value="option1">
    <label for="option1">Option 1</label>
  </div>
  
  <div class="radio-container">
    <input type="radio" id="option2" class="radio" name="options" value="option2">
    <label for="option2">Option 2</label>
  </div>
  
  <div class="radio-container">
    <input type="radio" id="option3" class="radio" name="options" value="option3">
    <label for="option3">Option 3</label>
  </div>
</fieldset>
```

## Inline Radio Buttons

```html
<div class="radio-group-inline">
  <div class="radio-container">
    <input type="radio" id="inline1" class="radio" name="inlineOptions" value="inline1">
    <label for="inline1">Option 1</label>
  </div>
  
  <div class="radio-container">
    <input type="radio" id="inline2" class="radio" name="inlineOptions" value="inline2">
    <label for="inline2">Option 2</label>
  </div>
  
  <div class="radio-container">
    <input type="radio" id="inline3" class="radio" name="inlineOptions" value="inline3">
    <label for="inline3">Option 3</label>
  </div>
</div>

<style>
  .radio-group-inline {
    display: flex;
    gap: 1.5rem;
  }
</style>
```

## Anpassung

Die Radio-Komponente kann über CSS-Variablen angepasst werden:

```css
.radio {
  --radio-size: 1.25rem;
  --radio-border-color: var(--color-gray-400);
  --radio-checked-bg: var(--color-primary);
  --radio-checked-border: var(--color-primary);
  --radio-focus-ring-color: var(--color-primary-100);
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das mit dem Radio-Button über das `for`-Attribut verknüpft ist
- Gruppieren Sie zusammengehörige Radio-Buttons mit `<fieldset>` und `<legend>`
- Sorgen Sie für ausreichenden Kontrast zwischen Hintergrund und Radio-Button
- Stellen Sie sicher, dass die Radio-Buttons über die Tastatur bedienbar sind (Tab-Navigation und Pfeiltasten)
- Verwenden Sie für Gruppen von Radio-Buttons immer den gleichen `name`-Attributwert, damit nur eine Option ausgewählt werden kann

## Best Practices

- Verwenden Sie Radio-Buttons wenn nur eine einzige Option aus einer Liste ausgewählt werden kann
- Ordnen Sie Radio-Buttons vertikal an, um die Lesbarkeit zu verbessern
- Fügen Sie stets eine Standardauswahl hinzu, wenn alle Optionen gleichwertig sind
- Beschränken Sie die Anzahl der Optionen auf eine überschaubare Menge
- Verwenden Sie für mehr als 5-7 Optionen besser eine Select-Box
- Platzieren Sie die häufigste oder empfohlene Option an erster Stelle 
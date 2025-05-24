---
title: Select Komponente
category: Components
---

# Select Komponente

Die Select-Komponente ermöglicht Benutzern, eine Option aus einer Dropdown-Liste auszuwählen.

## Grundlegende Verwendung

```html
<div class="select-container">
  <select class="select" id="basic-select">
    <option value="" disabled selected>Bitte auswählen</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

## Varianten

### Standard Select

```html
<div class="select-container">
  <select class="select" id="standard-select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

### Mit Label

```html
<div class="select-container">
  <label for="labeled-select" class="select-label">Auswahl:</label>
  <select class="select" id="labeled-select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

### Mit ausgewählter Option

```html
<div class="select-container">
  <select class="select" id="preselected-select">
    <option value="option1">Option 1</option>
    <option value="option2" selected>Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="select-container">
  <select class="select" id="disabled-select" disabled>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

## Größenvarianten

### Klein

```html
<div class="select-container">
  <select class="select select--sm" id="small-select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

### Standard

```html
<div class="select-container">
  <select class="select" id="medium-select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

### Groß

```html
<div class="select-container">
  <select class="select select--lg" id="large-select">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
```

## Mit Optionsgruppen

```html
<div class="select-container">
  <select class="select" id="grouped-select">
    <optgroup label="Gruppe 1">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </optgroup>
    <optgroup label="Gruppe 2">
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    </optgroup>
  </select>
</div>
```

## Mehrfachauswahl (Multiple)

```html
<div class="select-container">
  <select class="select select--multiple" id="multiple-select" multiple size="4">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    <option value="option5">Option 5</option>
  </select>
</div>
```

## Anpassung

Die Select-Komponente kann über CSS-Variablen angepasst werden:

```css
.select {
  --select-height: 2.5rem;
  --select-padding: 0.5rem 1rem;
  --select-border-color: var(--color-gray-300);
  --select-border-radius: var(--radius-md);
  --select-bg: var(--color-white);
  --select-focus-ring-color: var(--color-primary-100);
  --select-arrow-color: var(--color-gray-600);
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das mit dem Select-Element über das `for`-Attribut verknüpft ist
- Fügen Sie bei Bedarf `aria-describedby` hinzu, um zusätzliche Informationen bereitzustellen
- Verwenden Sie bei einer erforderlichen Auswahl das Attribut `required`
- Sorgen Sie für ausreichenden Kontrast zwischen Text und Hintergrund
- Testen Sie die Komponente mit Tastaturnavigation

## Best Practices

- Verwenden Sie eine Select-Box, wenn mehr als 5-7 Optionen zur Auswahl stehen
- Ordnen Sie die Optionen in einer logischen Reihenfolge an (z.B. alphabetisch oder nach Häufigkeit)
- Fügen Sie eine Platzhalter-Option hinzu, wenn keine Option vorausgewählt sein soll
- Geben Sie klare, aussagekräftige Bezeichnungen für jede Option
- Verwenden Sie `<optgroup>`, um lange Listen von Optionen zu kategorisieren
- Vermeiden Sie zu lange Optionsbezeichnungen, die möglicherweise abgeschnitten werden 
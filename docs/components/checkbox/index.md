---
title: Checkbox Komponente
category: Components
---

# Checkbox Komponente

Die Checkbox-Komponente ermöglicht Benutzern, ein oder mehrere Optionen aus einer Liste auszuwählen.

## Grundlegende Verwendung

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox1" class="checkbox">
  <label for="checkbox1">Option auswählen</label>
</div>
```

## Varianten

### Standard Checkbox

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-standard" class="checkbox">
  <label for="checkbox-standard">Standard Checkbox</label>
</div>
```

### Checked (Aktiviert)

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-checked" class="checkbox" checked>
  <label for="checkbox-checked">Ausgewählte Option</label>
</div>
```

### Indeterminate (Unbestimmt)

```html
<script>
  document.getElementById('checkbox-indeterminate').indeterminate = true;
</script>

<div class="checkbox-container">
  <input type="checkbox" id="checkbox-indeterminate" class="checkbox">
  <label for="checkbox-indeterminate">Teilweise ausgewählt</label>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-disabled" class="checkbox" disabled>
  <label for="checkbox-disabled">Deaktivierte Option</label>
</div>
```

## Größenvarianten

### Klein

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-small" class="checkbox checkbox--sm">
  <label for="checkbox-small">Kleine Checkbox</label>
</div>
```

### Standard

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-medium" class="checkbox">
  <label for="checkbox-medium">Standard Checkbox</label>
</div>
```

### Groß

```html
<div class="checkbox-container">
  <input type="checkbox" id="checkbox-large" class="checkbox checkbox--lg">
  <label for="checkbox-large">Große Checkbox</label>
</div>
```

## Checkbox-Gruppe

```html
<fieldset class="checkbox-group">
  <legend>Verfügbare Optionen:</legend>
  
  <div class="checkbox-container">
    <input type="checkbox" id="option1" class="checkbox" name="options">
    <label for="option1">Option 1</label>
  </div>
  
  <div class="checkbox-container">
    <input type="checkbox" id="option2" class="checkbox" name="options">
    <label for="option2">Option 2</label>
  </div>
  
  <div class="checkbox-container">
    <input type="checkbox" id="option3" class="checkbox" name="options">
    <label for="option3">Option 3</label>
  </div>
</fieldset>
```

## Anpassung

Die Checkbox-Komponente kann über CSS-Variablen angepasst werden:

```css
.checkbox {
  --checkbox-size: 1.25rem;
  --checkbox-border-color: var(--color-gray-400);
  --checkbox-border-radius: 0.25rem;
  --checkbox-checked-bg: var(--color-primary);
  --checkbox-checked-border: var(--color-primary);
  --checkbox-focus-ring-color: var(--color-primary-100);
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das mit der Checkbox über die `for`-Attribut verknüpft ist
- Gruppieren Sie zusammengehörige Checkboxen mit `<fieldset>` und `<legend>`
- Sorgen Sie für ausreichenden Kontrast zwischen Hintergrund und Checkbox
- Stellen Sie sicher, dass die Checkbox über die Tastatur bedienbar ist (Tab-Navigation und Leertaste)
- Fügen Sie bei Bedarf `aria-describedby` hinzu, um zusätzliche Informationen bereitzustellen

## Best Practices

- Verwenden Sie Checkboxen für binäre Auswahlmöglichkeiten oder Mehrfachauswahl
- Formulieren Sie Labels klar und präzise
- Ordnen Sie Checkboxen in logischen Gruppen an
- Vermeiden Sie zu viele Checkboxen in einer Gruppe
- Verwenden Sie für "Entweder-Oder"-Entscheidungen Radio Buttons statt Checkboxen 
---
title: Switch component
category: Components
---

# Switch component

the Switch-component ist a spezieller Toggle-Switch, the for binare a/Aus-Entscheidungen verwendet wird.

## Basic Usage

```html
<div class="switch-containers">
  <input type="checkbox" id="switch1" class="switch">
  <label for="switch1">Option activate</label>
</div>
```

## Variants

### Standard Switch

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-standard" class="switch">
  <label for="switch-standard">Standard Switch</label>
</div>
```

### Checked (Aktiviert)

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-checked" class="switch" checked>
  <label for="switch-checked">Aktivierte Option</label>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-disabled" class="switch" disabled>
  <label for="switch-disabled">Deaktivierte Option</label>
</div>
```

### Disabled Checked (Deaktiviert and Aktiviert)

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-disabled-checked" class="switch" disabled checked>
  <label for="switch-disabled-checked">Deaktivierte aktivierte Option</label>
</div>
```

## Sizesvarianten

### small

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-small" class="switch switch--sm">
  <label for="switch-small">smaller Switch</label>
</div>
```

### Standard

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-medium" class="switch">
  <label for="switch-medium">Standard Switch</label>
</div>
```

### Gross

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-large" class="switch switch--lg">
  <label for="switch-large">Grosser Switch</label>
</div>
```

## Farbvarianten

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-primary" class="switch switch--primary" checked>
  <label for="switch-primary">Primarfarbe</label>
</div>

<div class="switch-containers">
  <input type="checkbox" id="switch-success" class="switch switch--success" checked>
  <label for="switch-success">Erfolgsfarbe</label>
</div>

<div class="switch-containers">
  <input type="checkbox" id="switch-warning" class="switch switch--warning" checked>
  <label for="switch-warning">Warnfarbe</label>
</div>

<div class="switch-containers">
  <input type="checkbox" id="switch-error" class="switch switch--error" checked>
  <label for="switch-error">Fehlerfarbe</label>
</div>
```

## with Beschreibungstext

```html
<div class="switch-containers">
  <input type="checkbox" id="switch-with-description" class="switch">
  <div>
    <label for="switch-with-description">notifications activate</label>
    <p class="switch-description">Erhalten them Updates per E-Mail, if neue contents verfugbar sind.</p>
  </div>
</div>

<style>
  .switch-description {
    font-size: 0.875rem;
    color: var(--color-gray-600);
    margin-top: 0.25rem;
  }
</style>
```

## Rechtsseitiger Text

```html
<div class="switch-containers switch-containers--right">
  <label for="switch-right">Text on the rechten Seite</label>
  <input type="checkbox" id="switch-right" class="switch">
</div>

<style>
  .switch-containers--right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 0.75rem;
  }
</style>
```

## Anpassung

the Switch-component kann over CSS Variables angepasst become:

```css
.switch {
  --switch-width: 3rem;
  --switch-height: 1.5rem;
  --switch-padding: 0.125rem;
  --switch-bg: var(--color-gray-300);
  --switch-checked-bg: var(--color-primary);
  --switch-thumb-size: calc(var(--switch-height) - var(--switch-padding) * 2);
  --switch-thumb-color: var(--color-white);
  --switch-focus-ring-color: var(--color-primary-100);
}
```

## Accessibility

for a bessere Accessibility Please note please folgende Punkte:

- use them immer a `<label>`-element, the with dem Switch over the `for`-attribute verknupft ist
- Stellen them sicher, that the Switch over the Tastatur bedienbar ist (Tab-navigation and Leertaste)
- Sorgen them for ausreichenden Kontrast between dem Switch and dem background
- Geben them dem Switch gegebenenfalls a `aria-label` or `aria-labelledby`, if no sichtbares Label vorhanden ist
- use them at Bedarf `aria-describedby`, um zusatzliche Informationen bereitzustellen

## Best Practices

- use them Switches for binare a/Aus-Entscheidungen or Einstellungen
- Formulieren them Labels as positive Aussagen, the dem aktuellen Status entsprechen
- use them Switches anstelle from checkboxes, if a sofortige Anderung erfolgen soll
- Zeigen them den aktuellen Status des Switches deutlich on (through color, position and Label)
- Vermeiden them the Usage mehrerer Switches for miteinander zusammenhangende Optionen
- Gruppieren them zusammengehorige Switches in logischen Abschnitten 
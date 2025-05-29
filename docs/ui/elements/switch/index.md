---
title: Switch Komponente
category: Components
---

# Switch Komponente

Die Switch-Komponente ist ein spezieller Toggle-Switch, der für binäre Ein/Aus-Entscheidungen verwendet wird.

## Basic Usage

```html
<div class="switch-container">
  <input type="checkbox" id="switch1" class="switch">
  <label for="switch1">Option aktivieren</label>
</div>
```

## Variants

### Standard Switch

```html
<div class="switch-container">
  <input type="checkbox" id="switch-standard" class="switch">
  <label for="switch-standard">Standard Switch</label>
</div>
```

### Checked (Aktiviert)

```html
<div class="switch-container">
  <input type="checkbox" id="switch-checked" class="switch" checked>
  <label for="switch-checked">Aktivierte Option</label>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="switch-container">
  <input type="checkbox" id="switch-disabled" class="switch" disabled>
  <label for="switch-disabled">Deaktivierte Option</label>
</div>
```

### Disabled Checked (Deaktiviert und Aktiviert)

```html
<div class="switch-container">
  <input type="checkbox" id="switch-disabled-checked" class="switch" disabled checked>
  <label for="switch-disabled-checked">Deaktivierte aktivierte Option</label>
</div>
```

## Sizesvarianten

### Klein

```html
<div class="switch-container">
  <input type="checkbox" id="switch-small" class="switch switch--sm">
  <label for="switch-small">Kleiner Switch</label>
</div>
```

### Standard

```html
<div class="switch-container">
  <input type="checkbox" id="switch-medium" class="switch">
  <label for="switch-medium">Standard Switch</label>
</div>
```

### Groß

```html
<div class="switch-container">
  <input type="checkbox" id="switch-large" class="switch switch--lg">
  <label for="switch-large">Großer Switch</label>
</div>
```

## Farbvarianten

```html
<div class="switch-container">
  <input type="checkbox" id="switch-primary" class="switch switch--primary" checked>
  <label for="switch-primary">Primärfarbe</label>
</div>

<div class="switch-container">
  <input type="checkbox" id="switch-success" class="switch switch--success" checked>
  <label for="switch-success">Erfolgsfarbe</label>
</div>

<div class="switch-container">
  <input type="checkbox" id="switch-warning" class="switch switch--warning" checked>
  <label for="switch-warning">Warnfarbe</label>
</div>

<div class="switch-container">
  <input type="checkbox" id="switch-error" class="switch switch--error" checked>
  <label for="switch-error">Fehlerfarbe</label>
</div>
```

## Mit Beschreibungstext

```html
<div class="switch-container">
  <input type="checkbox" id="switch-with-description" class="switch">
  <div>
    <label for="switch-with-description">Benachrichtigungen aktivieren</label>
    <p class="switch-description">Erhalten Sie Updates per E-Mail, wenn neue Inhalte verfügbar sind.</p>
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
<div class="switch-container switch-container--right">
  <label for="switch-right">Text auf der rechten Seite</label>
  <input type="checkbox" id="switch-right" class="switch">
</div>

<style>
  .switch-container--right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 0.75rem;
  }
</style>
```

## Anpassung

Die Switch-Komponente kann über CSS Variables angepasst werden:

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

Für eine bessere Accessibility beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das mit dem Switch über das `for`-Attribut verknüpft ist
- Stellen Sie sicher, dass der Switch über die Tastatur bedienbar ist (Tab-Navigation und Leertaste)
- Sorgen Sie für ausreichenden Kontrast zwischen dem Switch und dem Hintergrund
- Geben Sie dem Switch gegebenenfalls ein `aria-label` oder `aria-labelledby`, wenn kein sichtbares Label vorhanden ist
- Verwenden Sie bei Bedarf `aria-describedby`, um zusätzliche Informationen bereitzustellen

## Best Practices

- Verwenden Sie Switches für binäre Ein/Aus-Entscheidungen oder Einstellungen
- Formulieren Sie Labels als positive Aussagen, die dem aktuellen Status entsprechen
- Verwenden Sie Switches anstelle von Checkboxen, wenn eine sofortige Änderung erfolgen soll
- Zeigen Sie den aktuellen Status des Switches deutlich an (durch Farbe, Position und Label)
- Vermeiden Sie die Usage mehrerer Switches für miteinander zusammenhängende Optionen
- Gruppieren Sie zusammengehörige Switches in logischen Abschnitten 
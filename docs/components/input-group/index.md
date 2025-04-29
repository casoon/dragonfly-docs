---
title: Input Group
category: Komponenten
---

# Input Group

Die Input Group-Komponente ermöglicht die Kombination von Eingabefeldern mit zusätzlichen Elementen wie Präfixen, Suffixen, Labels oder Buttons.

## CSS-Import

Die Input Group-Komponente wird automatisch mit der `core.css` importiert:

```css
@import "@casoon/ui-lib/core.css";
```

Alternativ können Sie die Komponente auch direkt importieren:

```css
@import "@casoon/ui-lib/modules/input-group.module.css" layer(module-input-group);
```

## Basis-Verwendung

### Input mit Präfix

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Benutzername">
</div>
```

### Input mit Suffix

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Preis">
  <span class="input-group__suffix">€</span>
</div>
```

### Input mit Präfix und Suffix

```html
<div class="input-group">
  <span class="input-group__prefix">$</span>
  <input type="number" class="input" placeholder="0.00">
  <span class="input-group__suffix">.00</span>
</div>
```

## Varianten

### Mit Button

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Suche...">
  <button class="btn btn--primary input-group__button">Suchen</button>
</div>
```

### Mit Icon

```html
<div class="input-group">
  <span class="input-group__prefix">
    <span class="feather-search"></span>
  </span>
  <input type="text" class="input" placeholder="Suche...">
</div>
```

### Mit Select

```html
<div class="input-group">
  <input type="text" class="input" placeholder="Betrag">
  <select class="select input-group__select">
    <option>EUR</option>
    <option>USD</option>
    <option>GBP</option>
  </select>
</div>
```

## Größenvarianten

### Klein

```html
<div class="input-group input-group--sm">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input input--sm" placeholder="Benutzername">
</div>
```

### Standard

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Benutzername">
</div>
```

### Groß

```html
<div class="input-group input-group--lg">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input input--lg" placeholder="Benutzername">
</div>
```

## Zustände

### Fehler

```html
<div class="input-group input-group--error">
  <input type="email" class="input input--error" value="ungültige-email">
  <span class="input-group__suffix input-group__suffix--error">
    <span class="feather-alert-circle"></span>
  </span>
</div>
<div class="input-error-message">Bitte geben Sie eine gültige E-Mail-Adresse ein.</div>
```

### Erfolgreich

```html
<div class="input-group input-group--success">
  <input type="email" class="input input--success" value="name@beispiel.de">
  <span class="input-group__suffix input-group__suffix--success">
    <span class="feather-check"></span>
  </span>
</div>
```

### Deaktiviert

```html
<div class="input-group input-group--disabled">
  <span class="input-group__prefix">@</span>
  <input type="text" class="input" placeholder="Benutzername" disabled>
</div>
```

## Anpassung

Die Input Group-Komponente kann über CSS-Variablen angepasst werden:

```css
@layer module-input-group {
  .input-group {
    --input-group-bg: var(--bg-subtle);
    --input-group-border-color: var(--color-gray-300);
    --input-group-border-radius: var(--radius-md);
    --input-group-padding: var(--spacing-2);
  }
}
```

## Barrierefreiheit

Für bessere Zugänglichkeit:

- Verbinden Sie immer ein Label mit dem Eingabefeld (via `for`-Attribut)
- Verwenden Sie `aria-describedby` für Fehlermeldungen oder Hinweise
- Stellen Sie sicher, dass der Kontrast zwischen Text und Hintergrund ausreichend ist
- Geben Sie bei Fehleingaben klare Anleitungen zur Korrektur

## Best Practices

- Verwenden Sie Input Groups für zusammengehörige Eingabeelemente
- Halten Sie Präfixe und Suffixe kurz und klar
- Nutzen Sie Icons zur visuellen Unterstützung
- Stellen Sie sicher, dass alle Elemente einer Input Group visuell zusammengehörig wirken
- Vermeiden Sie zu viele Elemente in einer einzelnen Input Group 
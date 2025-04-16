# Komponenten

Die Casoon UI Library bietet eine Vielzahl von wiederverwendbaren Komponenten für moderne Webanwendungen.

## Grundlegende Komponenten

### Button

```html
<button class="c-button c-button--primary">Primärer Button</button>
<button class="c-button c-button--secondary">Sekundärer Button</button>
<button class="c-button c-button--outline">Outline Button</button>
```

### Input

```html
<input class="c-input" type="text" placeholder="Text eingeben">
<input class="c-input c-input--error" type="text" placeholder="Fehler">
<input class="c-input c-input--success" type="text" placeholder="Erfolg">
```

### Modal

```html
<div class="c-modal">
  <div class="c-modal__content">
    <h2>Modal Titel</h2>
    <p>Modal Inhalt</p>
  </div>
</div>
```

## Feedback-Komponenten

### Alert

```html
<div class="c-alert c-alert--success">
  Erfolgreiche Operation
</div>
<div class="c-alert c-alert--error">
  Fehler aufgetreten
</div>
<div class="c-alert c-alert--warning">
  Warnung
</div>
<div class="c-alert c-alert--info">
  Information
</div>
```

### Toast

```html
<div class="c-toast c-toast--success">
  Erfolgreich gespeichert
</div>
<div class="c-toast c-toast--error">
  Fehler beim Speichern
</div>
```

### Badge

```html
<span class="c-badge">Neu</span>
<span class="c-badge c-badge--primary">1</span>
<span class="c-badge c-badge--secondary">2</span>
```

## Navigationskomponenten

### Tabs

```html
<div class="c-tabs">
  <div class="c-tabs__header">
    <button class="c-tabs__tab c-tabs__tab--active">Tab 1</button>
    <button class="c-tabs__tab">Tab 2</button>
  </div>
  <div class="c-tabs__content">
    <div class="c-tabs__panel">Inhalt 1</div>
    <div class="c-tabs__panel">Inhalt 2</div>
  </div>
</div>
```

### Accordion

```html
<div class="c-accordion">
  <div class="c-accordion__item">
    <button class="c-accordion__header">Abschnitt 1</button>
    <div class="c-accordion__content">Inhalt 1</div>
  </div>
  <div class="c-accordion__item">
    <button class="c-accordion__header">Abschnitt 2</button>
    <div class="c-accordion__content">Inhalt 2</div>
  </div>
</div>
```

## Datenkomponenten

### Table

```html
<table class="c-table">
  <thead>
    <tr>
      <th>Spalte 1</th>
      <th>Spalte 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Daten 1</td>
      <td>Daten 2</td>
    </tr>
  </tbody>
</table>
```

### Card

```html
<div class="c-card">
  <div class="c-card__header">
    <h3>Kartentitel</h3>
  </div>
  <div class="c-card__content">
    <p>Karteninhalt</p>
  </div>
  <div class="c-card__footer">
    <button class="c-button">Aktion</button>
  </div>
</div>
```

## Helper-Komponenten

### Tooltip

```html
<button class="c-tooltip" data-tooltip="Tooltip Text">Hover mich</button>
```

### Progress

```html
<div class="c-progress">
  <div class="c-progress__bar" style="width: 50%"></div>
</div>
```

## Best Practices

### Zugänglichkeit
- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie Tastaturnavigation sicher
- Testen Sie mit Screenreadern

### Responsive Design
- Verwenden Sie die vordefinierten Breakpoints
- Testen Sie auf verschiedenen Geräten
- Implementieren Sie mobile-first Ansätze

### Performance
- Minimieren Sie CSS-Klassen
- Verwenden Sie CSS-Variablen
- Optimieren Sie Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
---

<button class="c-button c-button--primary">Klick mich</button>
<input class="c-input" type="text" placeholder="Eingabe...">
<div class="c-alert c-alert--success">Erfolg!</div>
``` 
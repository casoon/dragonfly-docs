# Komponenten

Die Casoon UI Library bietet eine umfangreiche Sammlung von wiederverwendbaren Komponenten für moderne Webanwendungen.

## Grundlegende Komponenten

### Button

```html
<button class="button button--primary">Primärer Button</button>
<button class="button button--secondary">Sekundärer Button</button>
```

### Input

```html
<input class="input" type="text" placeholder="Eingabe...">
<textarea class="input input--textarea" placeholder="Mehrzeilige Eingabe..."></textarea>
```

### Modal

```html
<div class="modal">
  <div class="modal__content">
    <h2>Modal Titel</h2>
    <p>Modal Inhalt</p>
  </div>
</div>
```

## Feedback Komponenten

### Alert

```html
<div class="alert alert--success">
  Erfolgsmeldung
</div>
<div class="alert alert--error">
  Fehlermeldung
</div>
```

### Toast

```html
<div class="toast toast--success">
  Erfolgsmeldung
</div>
<div class="toast toast--error">
  Fehlermeldung
</div>
```

### Badge

```html
<span class="badge badge--primary">Neu</span>
<span class="badge badge--secondary">Aktualisiert</span>
```

## Navigationskomponenten

### Navigation

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">Start</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Über uns</a>
    </li>
  </ul>
</nav>
```

### Tabs

```html
<div class="tabs">
  <div class="tabs__header">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__panel">Inhalt 1</div>
    <div class="tabs__panel">Inhalt 2</div>
  </div>
</div>
```

### Accordion

```html
<div class="accordion">
  <div class="accordion__item">
    <button class="accordion__header">Abschnitt 1</button>
    <div class="accordion__content">Inhalt 1</div>
  </div>
  <div class="accordion__item">
    <button class="accordion__header">Abschnitt 2</button>
    <div class="accordion__content">Inhalt 2</div>
  </div>
</div>
```

## Datenanzeige

### Table

```html
<table class="table">
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
<div class="card">
  <div class="card__header">
    <h3>Card Titel</h3>
  </div>
  <div class="card__content">
    <p>Card Inhalt</p>
  </div>
  <div class="card__footer">
    <button class="button">Aktion</button>
  </div>
</div>
```

## Hilfskomponenten

### Tooltip

```html
<button class="button" data-tooltip="Tooltip Text">
  Button mit Tooltip
</button>
```

### Progress

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%"></div>
</div>
```

### Spinner

```html
<div class="spinner"></div>
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie Tastaturnavigation sicher
- Implementieren Sie Screenreader-Unterstützung

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Optimieren Sie für mobile Geräte
- Implementieren Sie Breakpoints

### Performance

- Minimieren Sie CSS und JavaScript
- Verwenden Sie Lazy Loading
- Optimieren Sie Assets
- Vermeiden Sie unnötige Verschachtelungen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/components.module.css';

interface Props {
  component: string;
  variant?: string;
  size?: string;
  disabled?: boolean;
}

const {
  component,
  variant,
  size,
  disabled
} = Astro.props;
---

<div 
  class:list={[
    component,
    variant && `${component}--${variant}`,
    size && `${component}--${size}`,
    disabled && `${component}--disabled`
  ]}
>
  <slot />
</div>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Component from '../components/Component.astro';
---

<Component component="button" variant="primary" size="large">
  Klick mich
</Component>

<Component component="input" variant="outlined" size="medium">
  <input type="text" placeholder="Eingabe...">
</Component>
``` 
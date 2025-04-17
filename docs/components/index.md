# Komponenten

Die Casoon UI Library bietet eine Vielzahl von vorgefertigten CSS-Komponenten, die sich einfach in Ihre Projekte integrieren lassen.

## Übersicht

### Grundlegende Komponenten

- [Button](/components/button) - Interaktive Schaltflächen
- [Input](/components/input) - Eingabefelder
- [Textarea](/components/textarea) - Mehrzeilige Eingabefelder
- [Select](/components/select) - Auswahlfelder
- [Checkbox](/components/checkbox) - Kontrollkästchen
- [Radio](/components/radio) - Radiobuttons
- [Switch](/components/switch) - Umschalter
- [File Input](/components/file) - Datei-Upload
- [Form](/components/forms) - Formular-Komponenten
- [Input Group](/components/input-group) - Gruppierte Eingabefelder

### Feedback-Komponenten

- [Alert](/components/alert) - Hinweismeldungen
- [Toast](/components/toast) - Kurze Benachrichtigungen
- [Notification](/components/notification) - Detaillierte Benachrichtigungen
- [Modal](/components/modal) - Dialogfenster
- [Progress](/components/progress) - Fortschrittsbalken
- [Spinner](/components/spinner) - Ladeanzeigen
- [Skeleton](/components/skeleton) - Platzhalter während des Ladens

### Navigationskomponenten

- [Header](/components/header) - Kopfzeilen
- [Sidebar](/components/sidebar) - Seitenleisten
- [Hamburger](/components/hamburger) - Menü-Schaltflächen
- [Tabs](/components/tabs) - Registerkarten

### Datenkomponenten

- [Table](/components/table) - Tabellen
- [Card](/components/card) - Karten
- [Slider](/components/slider) - Schieberegler

### Zusätzliche Komponenten

- [Avatar](/components/avatar) - Benutzeravatare
- [Badge](/components/badge) - Kennzeichnungen
- [Chip](/components/chip) - Chips/Tags
- [Tooltip](/components/tooltip) - Tooltips
- [Widget](/components/widget) - Widgets
- [Wizard](/components/wizard) - Mehrschrittassistenten
- [Blog](/components/blog) - Blog-Layouts

## Verwendungsbeispiele

### Button

```html
<button class="button button--primary">Primärer Button</button>
<button class="button button--secondary">Sekundärer Button</button>
<button class="button button--outline">Outline Button</button>
```

Module: `button.module.css`

### Input

```html
<input class="input" type="text" placeholder="Text eingeben">
<input class="input input--error" type="text" placeholder="Fehler">
<input class="input input--success" type="text" placeholder="Erfolg">
```

Module: `input.module.css`

### Input Group

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input class="input" type="text" placeholder="Benutzername">
</div>
```

Module: `input-group.module.css`

### Textarea

```html
<textarea class="textarea" placeholder="Beschreibung eingeben"></textarea>
```

Module: `textarea.module.css`

### Select

```html
<select class="select">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

Module: `select.module.css`

### Checkbox

```html
<label class="checkbox">
  <input type="checkbox">
  <span class="checkbox__label">Checkbox-Label</span>
</label>
```

Module: `checkbox.module.css`

### Radio

```html
<label class="radio">
  <input type="radio" name="radio-group">
  <span class="radio__label">Radio-Label</span>
</label>
```

Module: `radio.module.css`

### Switch

```html
<label class="switch">
  <input type="checkbox">
  <span class="switch__slider"></span>
</label>
```

Module: `switch.module.css`

### File Input

```html
<label class="file">
  <input type="file">
  <span class="file__label">Datei auswählen</span>
</label>
```

Module: `file.module.css`

### Modal

```html
<div class="modal">
  <div class="modal__content">
    <h2 class="modal__title">Modal Titel</h2>
    <p class="modal__body">Modal Inhalt</p>
    <button class="button button--primary">Schließen</button>
  </div>
</div>
```

Module: `modal.module.css`

### Alert

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">Erfolgreich gespeichert!</div>
</div>

<div class="alert alert--error">
  <div class="alert__icon">✕</div>
  <div class="alert__content">Ein Fehler ist aufgetreten.</div>
</div>
```

Module: `alert.module.css`

### Toast

```html
<div class="toast toast--success">
  <div class="toast__content">Erfolgreich gespeichert!</div>
</div>
```

Module: `toast.module.css`

### Notification

```html
<div class="notification notification--info">
  <div class="notification__header">
    <div class="notification__title">Information</div>
    <button class="notification__close">&times;</button>
  </div>
  <div class="notification__body">
    Das ist eine Information.
  </div>
</div>
```

Module: `notification.module.css`

### Progress

```html
<div class="progress">
  <div class="progress__bar" style="width: 75%"></div>
</div>
```

Module: `progress.module.css`

### Spinner

```html
<div class="spinner"></div>
```

Module: `spinner.module.css`

### Skeleton

```html
<div class="skeleton skeleton--text"></div>
<div class="skeleton skeleton--circle"></div>
<div class="skeleton skeleton--rectangle"></div>
```

Module: `skeleton.module.css`

### Table

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
    </tr>
  </tbody>
</table>
```

Module: `table.module.css`

### Card

```html
<div class="card">
  <div class="card__header">Card Titel</div>
  <div class="card__body">Card Inhalt</div>
  <div class="card__footer">
    <button class="button button--primary">Aktion</button>
  </div>
</div>
```

Module: `card.module.css`

### Slider

```html
<div class="slider">
  <div class="slider__item">Slide 1</div>
  <div class="slider__item">Slide 2</div>
  <div class="slider__item">Slide 3</div>
</div>
```

Module: `slider.module.css`

### Badge

```html
<span class="badge badge--primary">Neu</span>
```

Module: `badge.module.css`

### Avatar

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Avatar">
</div>
```

Module: `avatar.module.css`

### Chip

```html
<div class="chip">
  <span class="chip__text">Chip Text</span>
  <button class="chip__close">&times;</button>
</div>
```

Module: `chip.module.css`

### Tooltip

```html
<div class="tooltip">
  Hover mich
  <span class="tooltip__content">Tooltip Text</span>
</div>
```

Module: `tooltip.module.css`

### Widget

```html
<div class="widget">
  <div class="widget__header">Widget Titel</div>
  <div class="widget__body">Widget Inhalt</div>
</div>
```

Module: `widget.module.css`

### Wizard

```html
<div class="wizard">
  <div class="wizard__step wizard__step--active">
    <div class="wizard__indicator">1</div>
    <div class="wizard__label">Schritt 1</div>
  </div>
  <div class="wizard__step">
    <div class="wizard__indicator">2</div>
    <div class="wizard__label">Schritt 2</div>
  </div>
  <div class="wizard__step">
    <div class="wizard__indicator">3</div>
    <div class="wizard__label">Schritt 3</div>
  </div>
</div>
```

Module: `wizard.module.css`

### Blog

```html
<article class="blog">
  <header class="blog__header">
    <h2 class="blog__title">Blog Titel</h2>
    <div class="blog__meta">Veröffentlicht am 01.01.2023</div>
  </header>
  <div class="blog__body">
    <p>Blog Inhalt</p>
  </div>
  <footer class="blog__footer">
    <div class="blog__tags">
      <span class="blog__tag">CSS</span>
      <span class="blog__tag">Web</span>
    </div>
  </footer>
</article>
```

Module: `blog.module.css`

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation
- Fügen Sie ARIA-Attribute hinzu
- Testen Sie mit Screenreadern

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie Komponenten an mobile Geräte an
- Nutzen Sie Flexbox für flexible Layouts
- Setzen Sie Media Queries für spezifische Anpassungen

### Performance

- Laden Sie nur die benötigten Module
- Verwenden Sie Browser-Caching
- Optimieren Sie Assets für schnelle Ladezeiten
- Minimieren Sie CSS-Dateien
- Vermeiden Sie übermäßige Verschachtelung

## Integration

Die Casoon UI Library lässt sich leicht in verschiedene Frameworks integrieren:

### React

```jsx
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

function App() {
  return (
    <button className="button button--primary">
      Primärer Button
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="button button--primary">
    Primärer Button
  </button>
</template>

<script>
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
import 'casoon-ui-lib/modules/button.module.css';

export default {
  name: 'App'
}
</script>
```

### Angular

```typescript
// In angular.json
"styles": [
  "node_modules/casoon-ui-lib/core.css",
  "node_modules/casoon-ui-lib/themes/day.css",
  "node_modules/casoon-ui-lib/modules/button.module.css"
]

// In component.html
<button class="button button--primary">
  Primärer Button
</button>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/modules/button.module.css">
</head>
<body class="theme-day">
  <button class="button button--primary">
    Primärer Button
  </button>
</body>
</html>
```

## Theme-Aktivierung

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<body class="theme-night">
  <!-- Ihr Inhalt -->
</body>
```

Verfügbare Themes:
- `theme-day` - Helles Theme
- `theme-night` - Dunkles Theme
- `theme-spring` - Frühlings-Theme
- `theme-summer` - Sommer-Theme
- `theme-autumn` - Herbst-Theme
- `theme-winter` - Winter-Theme
- `theme-forest` - Wald-Theme
- `theme-ocean` - Ozean-Theme
- `theme-pastel` - Pastell-Theme
- `theme-neon` - Neon-Theme
- `theme-retro` - Retro-Theme
- `theme-monochrome` - Monochrom-Theme
- `theme-sunset` - Sonnenuntergang-Theme 
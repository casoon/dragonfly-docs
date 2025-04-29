---
title: Komponenten
category: Components
---

# Komponenten-Übersicht

Die Casoon UI Library bietet eine umfangreiche Sammlung von modularen Komponenten für verschiedene UI-Anforderungen. Jede Komponente ist als eigenständiges CSS-Modul implementiert und wird über das zentrale Layer-System eingebunden.

## Verwendung der Komponenten

Alle Komponenten werden automatisch durch das Einbinden der `core.css` Datei verfügbar:

```css
@import "@casoon/ui-lib/core.css";
```

Die Komponenten-Module werden in der `modules.css` Datei organisiert und in eigenständigen Layern definiert:

```css
/* Alert Modul */
@import url('./modules/alert.module.css') layer(module-alert);

/* Avatar Modul */
@import url('./modules/avatar.module.css') layer(module-avatar);

/* Weitere Module... */
```

## Verfügbare Komponenten

### Basis-Komponenten

Diese grundlegenden Komponenten bilden die Bausteine für komplexere Interfaces:

- [Alert](/components/alert/) - Kontextbezogene Feedback-Nachrichten
- [Avatar](/components/avatar/) - Benutzerprofilbilder und -darstellungen
- [Badge](/components/badge/) - Kleine Zähler oder Statusanzeigen
- [Button](/components/button/) - Interaktive Schaltflächen für Aktionen
- [Card](/components/card/) - Container für zusammengehörige Informationen
- [Chip](/components/chip/) - Kompakte, einheitliche Elemente für Informationen
- [Code](/components/code/) - Darstellung von Code-Blöcken und -Snippets
- [Spinner](/components/spinner/) - Ladeanimationen
- [Tooltip](/components/tooltip/) - Zusatzinformationen bei Hover

### Formular-Komponenten

Komponenten für die Erstellung interaktiver Formulare:

- [Checkbox](/components/checkbox/) - Mehrfachauswahl-Elemente
- [File](/components/file/) - Datei-Upload-Elemente
- [Form](/components/forms/) - Formular-Container und -Layout
- [Input](/components/input/) - Texteingabefelder
- [Input Group](/components/input-group/) - Gruppierte Eingabeelemente mit Add-ons
- [Radio](/components/radio/) - Einfachauswahl-Elemente
- [Select](/components/select/) - Auswahlmenüs für Optionen
- [Slider](/components/slider/) - Schieberegler für numerische Werte
- [Switch](/components/switch/) - Ein/Aus-Schalter
- [Textarea](/components/textarea/) - Mehrzeilige Textfelder

### Layout-Komponenten

Komponenten für die strukturelle Organisation von Inhalten:

- [Footer](/components/footer/) - Fußzeilen-Komponente
- [Header](/components/header/) - Kopfzeilen-Komponente
- [Sidebar](/components/sidebar/) - Seitenleisten-Navigation
- [Table](/components/table/) - Tabellendarstellung mit erweiterter Funktionalität
- [Tabs](/components/tabs/) - Registerkartenbasierte Navigation

### Feedback-Komponenten

Komponenten für Benutzerinteraktion und Feedback:

- [Modal](/components/modal/) - Dialog-Fenster für fokussierte Inhalte
- [Notification](/components/notification/) - Benachrichtigungen
- [Progress](/components/progress/) - Fortschrittsanzeigen
- [Skeleton](/components/skeleton/) - Lade-Platzhalter
- [Toast](/components/toast/) - Kurzzeitige Benachrichtigungen

### Fortgeschrittene Komponenten

Spezialisierte Komponenten für komplexere Anforderungen:

- [Blog](/components/blog/) - Blog-Post-Layout und -Stile
- [Hamburger](/components/hamburger/) - Mobile Menü-Toggle-Buttons
- [Widget](/components/widget/) - Wiederverwendbare Content-Container
- [Wizard](/components/wizard/) - Mehrstufige Prozess-Steuerung

## Komponenten anpassen

Alle Komponenten können über CSS-Variablen und das Layer-System angepasst werden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Anpassung einer Komponente */
@layer module-button {
  .btn--custom {
    background-color: var(--color-brand);
    border-radius: var(--radius-lg);
  }
}
```

## Best Practices

- **Kombinieren Sie Komponenten** - Verwenden Sie Komponenten zusammen für komplexe UIs
- **Nutzen Sie Design Tokens** - Verwenden Sie die vordefinierten Variablen für konsistentes Design
- **Berücksichtigen Sie Barrierefreiheit** - Achten Sie auf semantische Nutzung der Komponenten
- **Mobile-First Ansatz** - Beginnen Sie mit dem mobilen Design und erweitern Sie für größere Bildschirme
- **Layer-Spezifität beachten** - Bedenken Sie die Hierarchie des Layer-Systems bei Anpassungen

## Verwendungsbeispiele

### Button

```html
<button class="casoon-button">Klick mich</button>
<button class="casoon-button casoon-button--primary">Primär</button>
<button class="casoon-button casoon-button--outline">Outline</button>
```

[Zur Button-Dokumentation](/components/button/)

### Input

```html
<input type="text" class="casoon-input" placeholder="Text eingeben">
<input type="text" class="casoon-input casoon-input--error" value="Fehlerhafte Eingabe">
```

[Zur Input-Dokumentation](/components/input/)

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
<textarea class="casoon-textarea" rows="4" placeholder="Beschreibung eingeben"></textarea>
```

[Zur Textarea-Dokumentation](/components/textarea/)

### Select

```html
<select class="casoon-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

[Zur Select-Dokumentation](/components/select/)

### Checkbox

```html
<label class="casoon-checkbox">
  <input type="checkbox">
  <span>Option auswählen</span>
</label>
```

[Zur Checkbox-Dokumentation](/components/checkbox/)

### Radio

```html
<label class="casoon-radio">
  <input type="radio" name="option">
  <span>Option A</span>
</label>
```

[Zur Radio-Dokumentation](/components/radio/)

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
<div class="casoon-alert casoon-alert--info">
  <span>Wichtige Information</span>
</div>
```

[Zur Alert-Dokumentation](/components/alert/)

### Toast

```html
<div class="casoon-toast casoon-toast--success">
  <span>Aktion erfolgreich</span>
</div>
```

[Zur Toast-Dokumentation](/components/toast/)

### Notification

```html
<div class="casoon-notification">
  <h4>Neue Funktion verfügbar</h4>
  <p>Entdecken Sie unsere neuesten Features...</p>
  <div class="casoon-notification__actions">
    <button class="casoon-button casoon-button--small">Erkunden</button>
    <button class="casoon-button casoon-button--text casoon-button--small">Später</button>
  </div>
</div>
```

[Zur Notification-Dokumentation](/components/notification/)

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
<table class="casoon-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Alter</th>
      <th>Stadt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>34</td>
      <td>Berlin</td>
    </tr>
  </tbody>
</table>
```

[Zur Table-Dokumentation](/components/table/)

### Card

```html
<div class="casoon-card">
  <div class="casoon-card__header">
    <h3>Produkttitel</h3>
  </div>
  <div class="casoon-card__body">
    <p>Produktbeschreibung und Details...</p>
  </div>
  <div class="casoon-card__footer">
    <button class="casoon-button casoon-button--primary">Kaufen</button>
  </div>
</div>
```

[Zur Card-Dokumentation](/components/card/)

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
<span class="casoon-badge">Neu</span>
<span class="casoon-badge casoon-badge--warning">10</span>
```

[Zur Badge-Dokumentation](/components/badge/)

### Avatar

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Avatar">
</div>
```

Module: `avatar.module.css`

### Chip

```html
<span class="casoon-chip">Standard Chip</span>
<span class="casoon-chip casoon-chip--primary">Primär</span>
<span class="casoon-chip casoon-chip--dismissible">
  Mit Schließen
  <button class="casoon-chip__close"></button>
</span>
```

[Zur Chip-Dokumentation](/components/chip/)

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
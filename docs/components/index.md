---
title: Components
category: Components
---

# Components Overview

Die Casoon UI Library bietet eine umfangreiche Sammlung modularer Komponenten für verschiedene UI-Anforderungen. Jede Komponente ist als eigenständiges CSS-Modul implementiert und wird über das zentrale Layer-System integriert.

## Using the Components

Alle Komponenten werden automatisch verfügbar, indem die `core.css`-Datei eingebunden wird:

```css
@import "@casoon/ui-lib/core.css";
```

Alternativ können Sie auch einzelne Komponenten importieren:

```css
/* Import der erforderlichen Basis-Dateien */
@import "@casoon/ui-lib/core.css";
@import "@casoon/ui-lib/themes/day.css";

/* Import einzelner Komponenten nach Bedarf */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/card.css";
@import "@casoon/ui-lib/components/alert.css";
```

## Available Components

### Base Components

Diese grundlegenden Komponenten dienen als Bausteine für komplexere Schnittstellen:

- [Alert](/components/alert/) - Kontextsensitive Feedback-Nachrichten
- [Avatar](/components/avatar/) - Benutzerprofilbilder und -darstellungen
- [Badge](/components/badge/) - Kleine Zähler oder Statusindikatoren
- [Button](/components/button/) - Interaktive Schaltflächen für Aktionen
- [Card](/components/card/) - Container für zusammengehörige Informationen
- [Chip](/components/chip/) - Kompakte, einheitliche Elemente für Informationen
- [Code](/components/code/) - Anzeige von Codeblöcken und Snippets
- [Spinner](/components/spinner/) - Lade-Animationen
- [Tooltip](/components/tooltip/) - Zusätzliche Informationen beim Hover

### Form Components

Komponenten zum Erstellen interaktiver Formulare:

- [Checkbox](/components/checkbox/) - Elemente für Mehrfachauswahl
- [File](/components/file/) - Elemente für Datei-Upload
- [Form](/components/forms/) - Formular-Container und Layout
- [Input](/components/input/) - Texteingabefelder
- [Input Group](/components/input-group/) - Gruppierte Eingabeelemente mit Add-ons
- [Radio](/components/radio/) - Elemente für Einfachauswahl
- [Select](/components/select/) - Auswahlmenüs für Optionen
- [Slider](/components/slider/) - Schieberegler für numerische Werte
- [Switch](/components/switch/) - Ein/Aus-Schalter
- [Textarea](/components/textarea/) - Mehrzeilige Textfelder

### Layout Components

Komponenten für die strukturelle Organisation von Inhalten:

- [Footer](/components/footer/) - Fußzeilen-Komponente
- [Header](/components/header/) - Kopfzeilen-Komponente
- [Sidebar](/components/sidebar/) - Seitenleisten-Navigation
- [Table](/components/table/) - Tabellenansicht mit erweiterter Funktionalität
- [Tabs](/components/tabs/) - Tab-basierte Navigation

### Feedback Components

Komponenten für Benutzerinteraktion und Feedback:

- [Modal](/components/modal/) - Dialogfenster für fokussierte Inhalte
- [Notification](/components/notification/) - Benachrichtigungen
- [Progress](/components/progress/) - Fortschrittsanzeigen
- [Skeleton](/components/skeleton/) - Lade-Platzhalter
- [Toast](/components/toast/) - Temporäre Benachrichtigungen

### Advanced Components

Spezialisierte Komponenten für komplexere Anforderungen:

- [Blog](/components/blog/) - Blog-Post-Layout und -Stile
- [Hamburger](/components/hamburger/) - Mobile Menü-Toggle-Buttons
- [Widget](/components/widget/) - Wiederverwendbare Inhalts-Container
- [Wizard](/components/wizard/) - Steuerung mehrstufiger Prozesse

## Customizing Components

Alle Komponenten können über CSS-Variablen und das Layer-System angepasst werden:

```css
/* Benutzerdefinierte CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Anpassung der Komponenten */
@layer components {
  .button.custom {
    background-color: var(--color-brand);
    border-radius: var(--radius-lg);
  }
}
```

## Best Practices

- **Kombinieren Sie Komponenten** - Verwenden Sie Komponenten zusammen für komplexe UIs
- **Nutzen Sie Design-Tokens** - Verwenden Sie vordefinierte Variablen für ein konsistentes Design
- **Berücksichtigen Sie Barrierefreiheit** - Achten Sie auf semantische Verwendung von Komponenten
- **Mobile-First-Ansatz** - Beginnen Sie mit dem mobilen Design und erweitern Sie für größere Bildschirme
- **Beachten Sie die Layer-Spezifität** - Berücksichtigen Sie die Hierarchie des Layer-Systems bei Anpassungen

## Usage Examples

### Button

```html
<button class="button">Click me</button>
<button class="button primary">Primary</button>
<button class="button outline">Outline</button>
```

[Go to Button documentation](/components/button/)

### Input

```html
<input type="text" class="input" placeholder="Enter text">
<input type="text" class="input error" value="Error input">
```

[Go to Input documentation](/components/input/)

### Input Group

```html
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input class="input" type="text" placeholder="Username">
</div>
```

[Go to Input Group documentation](/components/input-group/)

### Textarea

```html
<textarea class="textarea" rows="4" placeholder="Enter description"></textarea>
```

[Go to Textarea documentation](/components/textarea/)

### Select

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

[Go to Select documentation](/components/select/)

### Checkbox

```html
<label class="checkbox">
  <input type="checkbox">
  <span>Select option</span>
</label>
```

[Go to Checkbox documentation](/components/checkbox/)

### Radio

```html
<label class="radio">
  <input type="radio" name="option">
  <span>Option A</span>
</label>
```

[Go to Radio documentation](/components/radio/)

### Switch

```html
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
```

[Go to Switch documentation](/components/switch/)

### File Input

```html
<label class="file">
  <input type="file">
  <span class="file-label">Select file</span>
</label>
```

[Go to File documentation](/components/file/)

### Modal

```html
<div class="modal">
  <div class="modal-content">
    <h2 class="modal-title">Modal Title</h2>
    <p class="modal-body">Modal Content</p>
    <button class="button primary">Close</button>
  </div>
</div>
```

[Go to Modal documentation](/components/modal/)

### Alert

```html
<div class="alert info">
  <span>Important Information</span>
</div>
```

[Go to Alert documentation](/components/alert/)

### Toast

```html
<div class="toast success">
  <span>Action successful</span>
</div>
```

[Go to Toast documentation](/components/toast/)

### Notification

```html
<div class="notification">
  <h4 class="title">New feature available</h4>
  <p class="content">Discover our latest features...</p>
  <div class="actions">
    <button class="button small">Explore</button>
    <button class="button small outline">Later</button>
  </div>
</div>
```

[Go to Notification documentation](/components/notification/)

### Progress

```html
<div class="progress">
  <div class="progress-bar" style="width: 75%"></div>
</div>
```

[Go to Progress documentation](/components/progress/)

### Spinner

```html
<div class="spinner"></div>
```

[Go to Spinner documentation](/components/spinner/)

### Skeleton

```html
<div class="skeleton text"></div>
<div class="skeleton circle"></div>
<div class="skeleton rect"></div>
```

[Go to Skeleton documentation](/components/skeleton/)

### Table

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>34</td>
      <td>London</td>
    </tr>
  </tbody>
</table>
```

[Go to Table documentation](/components/table/)

### Card

```html
<div class="card">
  <div class="card-header">
    <h3>Product Title</h3>
  </div>
  <div class="card-body">
    <p>Product description and details...</p>
  </div>
  <div class="card-footer">
    <button class="button primary">Buy</button>
  </div>
</div>
```

[Go to Card documentation](/components/card/)

### Badge

```html
<span class="badge">New</span>
<span class="badge warning">10</span>
```

[Go to Badge documentation](/components/badge/)

### Avatar

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Avatar">
</div>
```

[Go to Avatar documentation](/components/avatar/)

### Chip

```html
<span class="chip">Standard Chip</span>
<span class="chip primary">Primary</span>
<span class="chip dismissible">
  With Close
  <button class="close"></button>
</span>
```

[Go to Chip documentation](/components/chip/)

### Tooltip

```html
<div class="tooltip">
  Hover me
  <span class="tooltip-content">Tooltip Text</span>
</div>
```

[Go to Tooltip documentation](/components/tooltip/)

### Widget

```html
<div class="widget">
  <div class="header">Widget Title</div>
  <div class="body">Widget Content</div>
</div>
```

[Go to Widget documentation](/components/widget/)

### Wizard

```html
<div class="wizard">
  <div class="step active">
    <div class="indicator">1</div>
    <div class="title">Step 1</div>
  </div>
  <div class="step">
    <div class="indicator">2</div>
    <div class="title">Step 2</div>
  </div>
  <div class="step">
    <div class="indicator">3</div>
    <div class="title">Step 3</div>
  </div>
</div>
```

[Go to Wizard documentation](/components/wizard/)

### Blog

```html
<article class="blog-post">
  <header class="header">
    <h2 class="title">Blog Title</h2>
    <div class="meta">Published on 01/01/2023</div>
  </header>
  <div class="content">
    <p>Blog Content</p>
  </div>
  <footer class="footer">
    <div class="tags">
      <span class="tag">CSS</span>
      <span class="tag">Web</span>
    </div>
  </footer>
</article>
```

[Go to Blog documentation](/components/blog/)

## Best Practices

### Accessibility

- Use semantic HTML elements
- Ensure sufficient contrast
- Implement keyboard navigation
- Add ARIA attributes
- Test with screen readers

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt components for mobile devices
- Use Flexbox for flexible layouts
- Apply Media Queries for specific adjustments

### Performance

- Load only required components
- Use browser caching
- Optimize assets for fast loading times
- Minify CSS files
- Avoid excessive nesting

## Integration

Die Casoon UI Library kann einfach in verschiedene Frameworks integriert werden:

### React

```jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

function App() {
  return (
    <button className="button primary">
      Primary Button
    </button>
  );
}
```

### Vue

```vue
<template>
  <button class="button primary">
    Primary Button
  </button>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

export default {
  name: 'App'
}
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/components/button.css">
</head>
<body class="theme-day">
  <button class="button primary">
    Primary Button
  </button>
</body>
</html>
```

## Theme Activation

To activate a theme, add the corresponding class to the `<html>` or `<body>` element:

```html
<body class="theme-night">
  <!-- Your content -->
</body>
```

Available Themes:
- `theme-day` - Light Theme
- `theme-night` - Dark Theme
- `theme-spring` - Spring Theme
- `theme-summer` - Summer Theme
- `theme-autumn` - Autumn Theme
- `theme-winter` - Winter Theme
- `theme-forest` - Forest Theme
- `theme-ocean` - Ocean Theme
- `theme-pastel` - Pastel Theme
- `theme-neon` - Neon Theme
- `theme-retro` - Retro Theme
- `theme-monochrome` - Monochrome Theme
- `theme-sunset` - Sunset Theme 
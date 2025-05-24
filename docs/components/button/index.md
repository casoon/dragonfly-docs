# Button

Die Button-Komponente der Casoon UI Library bietet verschiedene Stile und Varianten für interaktive Elemente. Buttons sind eines der grundlegendsten UI-Elemente und werden für Aktionen, Formulareinsendungen und Navigationsinteraktionen verwendet.

## Grundlegende Verwendung

```html
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button outline">Outline Button</button>
```

<div class="example-wrapper">
  <button class="button primary">Primary Button</button>
  <button class="button secondary">Secondary Button</button>
  <button class="button outline">Outline Button</button>
</div>

## Varianten

### Größen

Buttons können in verschiedenen Größen dargestellt werden, um sich an unterschiedliche Kontexte anzupassen.

```html
<button class="button sm">Small Button</button>
<button class="button">Standard Button</button>
<button class="button lg">Large Button</button>
```

<div class="example-wrapper">
  <button class="button primary sm">Small Button</button>
  <button class="button primary">Standard Button</button>
  <button class="button primary lg">Large Button</button>
</div>

### Zustände

Buttons können verschiedene Zustände haben, um dem Benutzer Feedback zu geben.

```html
<button class="button primary">Normal</button>
<button class="button primary hover">Hover</button>
<button class="button primary active">Active</button>
<button class="button primary" disabled>Disabled</button>
<button class="button primary loading">
  <span class="button__text">Loading</span>
  <span class="button__loader"></span>
</button>
```

<div class="example-wrapper">
  <button class="button primary">Normal</button>
  <button class="button primary hover">Hover</button>
  <button class="button primary active">Active</button>
  <button class="button primary" disabled>Disabled</button>
  <button class="button primary loading">
    <span class="button__text">Loading</span>
    <span class="button__loader"></span>
  </button>
</div>

### Farben und Stile

Die Button-Komponente bietet verschiedene vordefinierte Farben und Stile, die auf verschiedene Aktionstypen hinweisen.

```html
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button danger">Danger</button>
<button class="button warning">Warning</button>
<button class="button info">Info</button>
<button class="button outline">Outline</button>
<button class="button ghost">Ghost</button>
<button class="button link">Link</button>
```

<div class="example-wrapper">
  <button class="button primary">Primary</button>
  <button class="button secondary">Secondary</button>
  <button class="button success">Success</button>
  <button class="button danger">Danger</button>
  <button class="button warning">Warning</button>
  <button class="button info">Info</button>
  <button class="button outline">Outline</button>
  <button class="button ghost">Ghost</button>
  <button class="button link">Link</button>
</div>

### Mit Icon

Buttons können Icons enthalten, um die visuellen Hinweise zu verbessern.

```html
<button class="button primary">
  <span class="button__icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  </span>
  <span class="button__text">Mit Icon</span>
</button>

<button class="button outline">
  <span class="button__icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </span>
  <span class="button__text">Profil</span>
</button>
```

<div class="example-wrapper">
  <button class="button primary">
    <span class="button__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </span>
    <span class="button__text">Mit Icon</span>
  </button>
  <button class="button outline">
    <span class="button__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span>
    <span class="button__text">Profil</span>
  </button>
</div>

### Icon-Button

```html
<button class="button icon primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</button>

<button class="button icon outline">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
</button>
```

<div class="example-wrapper">
  <button class="button icon primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  </button>
  <button class="button icon outline">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </button>
</div>

### Block-Button

Block-Buttons nehmen die volle Breite ihres Containers ein, ideal für mobile Ansichten oder wenn der Button besonders hervorgehoben werden soll.

```html
<button class="button primary block">Volle Breite</button>
```

<div class="example-wrapper">
  <button class="button primary block">Volle Breite</button>
</div>

## Anwendungsbeispiele

### Button-Gruppe

Button-Gruppen können verwendet werden, um zusammengehörige Aktionen zu gruppieren.

```html
<div class="button-group">
  <button class="button">Zurück</button>
  <button class="button primary">Weiter</button>
</div>
```

<div class="example-wrapper">
  <div class="button-group">
    <button class="button">Zurück</button>
    <button class="button primary">Weiter</button>
  </div>
</div>

### Buttons in Formularen

```html
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input" placeholder="Ihr Name">
  </div>
  <div class="form-group">
    <label for="email">E-Mail</label>
    <input type="email" id="email" class="input" placeholder="ihre-email@beispiel.de">
  </div>
  <div class="button-group right">
    <button type="reset" class="button outline">Zurücksetzen</button>
    <button type="submit" class="button primary">Absenden</button>
  </div>
</form>
```

<div class="example-wrapper">
  <form class="form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="input" placeholder="Ihr Name">
    </div>
    <div class="form-group">
      <label for="email">E-Mail</label>
      <input type="email" id="email" class="input" placeholder="ihre-email@beispiel.de">
    </div>
    <div class="button-group right">
      <button type="reset" class="button outline">Zurücksetzen</button>
      <button type="submit" class="button primary">Absenden</button>
    </div>
  </form>
</div>

## Module importieren

```css
/* Die erforderlichen Module importieren */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* oder ein anderes Theme */
@import '@casoon/ui-lib/components/button.css';
```

## CSS-Variablen

Die Button-Komponente verwendet die folgenden CSS-Variablen:

```css
:root {
  --button-padding: 0.5rem 1rem;
  --button-border-radius: 0.25rem;
  --button-font-size: 1rem;
  --button-font-weight: 500;
  --button-transition: all 0.2s ease;
  
  --button-sm-padding: 0.25rem 0.5rem;
  --button-sm-font-size: 0.875rem;
  
  --button-lg-padding: 0.75rem 1.5rem;
  --button-lg-font-size: 1.125rem;
  
  --button-primary-bg: var(--color-primary);
  --button-primary-text: var(--color-white);
  --button-primary-border: var(--color-primary);
  
  --button-secondary-bg: var(--color-secondary);
  --button-secondary-text: var(--color-white);
  --button-secondary-border: var(--color-secondary);
  
  --button-outline-bg: transparent;
  --button-outline-text: var(--color-primary);
  --button-outline-border: var(--color-primary);
  
  --button-success-bg: var(--color-success);
  --button-success-text: var(--color-white);
  --button-success-border: var(--color-success);
  
  --button-danger-bg: var(--color-danger);
  --button-danger-text: var(--color-white);
  --button-danger-border: var(--color-danger);
  
  --button-warning-bg: var(--color-warning);
  --button-warning-text: var(--color-white);
  --button-warning-border: var(--color-warning);
  
  --button-info-bg: var(--color-info);
  --button-info-text: var(--color-white);
  --button-info-border: var(--color-info);
}
```

## Best Practices

### Barrierefreiheit

- Verwenden Sie semantische Button-Elemente (`<button>`) für interaktive Aktionen
- Verwenden Sie Links (`<a>`) für die Navigation zu anderen Seiten
- Stellen Sie sicheren ausreichenden Kontrast zwischen Text und Hintergrund
- Setzen Sie das `disabled`-Attribut für deaktivierte Buttons
- Vermeiden Sie zu kleine Buttons (Mindestgröße 44x44px für Touch-Ziele)
- Stellen Sie sicher, dass Buttons mit Tastatur fokussierbar sind
- Nutzen Sie ARIA-Attribute für komplexe Button-Funktionen

### Responsive Design

- Verwenden Sie relative Einheiten (rem, em) für die Größenanpassung
- Passen Sie Padding und Schriftgröße für verschiedene Bildschirmgrößen an
- Verwenden Sie `block` auf mobilen Geräten für bessere Touch-Ziele
- Gruppieren Sie zusammengehörige Buttons in Button-Gruppen
- Beachten Sie ausreichend Abstand zwischen mehreren Buttons

### Performance

- Laden Sie nur die benötigten Button-Varianten
- Vermeiden Sie übermäßig komplexe Schatten oder Animationen bei Buttons

<style>
.example-wrapper {
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px 0;
}

.example-wrapper > * {
  margin-right: 10px;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.button-group.right {
  justify-content: flex-end;
}

.form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}
</style>

## Framework-Integration

### React

```jsx
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

function Button({ 
  children, 
  variant = 'primary',
  size = '',
  block = false,
  isLoading = false,
  ...props 
}) {
  return (
    <button
      className={`button ${variant || ''} ${size || ''} ${block ? 'block' : ''} ${isLoading ? 'loading' : ''}`}
      {...props}
    >
      {isLoading && <span className="button__loader"></span>}
      <span className="button__text">{children}</span>
    </button>
  );
}

export default Button;
```

### Vue

```vue
<template>
  <button
    class="button"
    :class="[
      variant || '',
      size || '',
      { 'block': block },
      { 'loading': loading }
    ]"
    v-bind="$attrs"
  >
    <span v-if="loading" class="button__loader"></span>
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/components/button.css';

export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/themes/day.css">
  <link rel="stylesheet" href="path/to/@casoon/ui-lib/components/button.css">
</head>
<body class="theme-day">
  <button class="button primary">
    Primary Button
  </button>
  
  <button class="button outline lg">
    Large Outline Button
  </button>
</body>
</html> 
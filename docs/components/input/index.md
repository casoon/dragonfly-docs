# Input

Die Input-Komponente der Casoon UI Library bietet verschiedene Stile und Varianten für Eingabefelder.

## Verwendung

```html
<input class="input" type="text" placeholder="Text eingeben">
```

## Module importieren

```css
@import 'casoon-ui-lib/modules/input.module.css';
```

## Varianten

### Status

```html
<input class="input" type="text" placeholder="Standard">
<input class="input input--error" type="text" placeholder="Fehler">
<input class="input input--success" type="text" placeholder="Erfolg">
<input class="input input--warning" type="text" placeholder="Warnung">
```

### Größen

```html
<input class="input input--sm" type="text" placeholder="Klein">
<input class="input" type="text" placeholder="Standard">
<input class="input input--lg" type="text" placeholder="Groß">
```

### Typen

```html
<input class="input" type="text" placeholder="Text">
<input class="input" type="password" placeholder="Passwort">
<input class="input" type="email" placeholder="E-Mail">
<input class="input" type="number" placeholder="Nummer">
<input class="input" type="tel" placeholder="Telefon">
<input class="input" type="url" placeholder="URL">
<input class="input" type="search" placeholder="Suche">
<input class="input" type="date">
<input class="input" type="time">
<input class="input" type="datetime-local">
```

### Readonly und Disabled

```html
<input class="input" type="text" placeholder="Nur lesen" readonly>
<input class="input" type="text" placeholder="Deaktiviert" disabled>
```

### Mit Label

```html
<div class="form-group">
  <label for="name" class="form-label">Name</label>
  <input id="name" class="input" type="text" placeholder="Name eingeben">
</div>
```

### Mit Hilfetexten

```html
<div class="form-group">
  <label for="email" class="form-label">E-Mail</label>
  <input id="email" class="input" type="email" placeholder="E-Mail eingeben">
  <div class="form-hint">Wir werden Ihre E-Mail niemals weitergeben.</div>
</div>

<div class="form-group">
  <label for="password" class="form-label">Passwort</label>
  <input id="password" class="input input--error" type="password">
  <div class="form-error">Passwort muss mindestens 8 Zeichen enthalten.</div>
</div>
```

### Input-Gruppe

```html
<div class="input-group">
  <span class="input-group__prefix">@</span>
  <input class="input" type="text" placeholder="Benutzername">
</div>

<div class="input-group">
  <input class="input" type="text" placeholder="Suche">
  <button class="input-group__suffix button button--primary">Suchen</button>
</div>

<div class="input-group">
  <span class="input-group__prefix">$</span>
  <input class="input" type="number" placeholder="0.00">
  <span class="input-group__suffix">.00</span>
</div>
```

## CSS-Variablen

Die Input-Komponente verwendet folgende CSS-Variablen:

```css
:root {
  --input-padding: 0.5rem 0.75rem;
  --input-border: 1px solid var(--color-gray-300);
  --input-border-radius: 0.25rem;
  --input-bg: var(--color-white);
  --input-color: var(--color-gray-900);
  --input-placeholder-color: var(--color-gray-500);
  --input-focus-border: var(--color-primary);
  --input-focus-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
  
  --input-error-border: var(--color-danger);
  --input-error-bg: var(--color-white);
  --input-error-focus-shadow: 0 0 0 3px rgba(var(--color-danger-rgb), 0.1);
  
  --input-success-border: var(--color-success);
  --input-success-bg: var(--color-white);
  --input-success-focus-shadow: 0 0 0 3px rgba(var(--color-success-rgb), 0.1);
  
  --input-warning-border: var(--color-warning);
  --input-warning-bg: var(--color-white);
  --input-warning-focus-shadow: 0 0 0 3px rgba(var(--color-warning-rgb), 0.1);
  
  --input-disabled-bg: var(--color-gray-100);
  --input-disabled-color: var(--color-gray-600);
  
  --input-sm-padding: 0.25rem 0.5rem;
  --input-sm-font-size: 0.875rem;
  
  --input-lg-padding: 0.75rem 1rem;
  --input-lg-font-size: 1.125rem;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie immer Labels mit `for`-Attributen, die auf die Input-IDs verweisen
- Vermeiden Sie Platzhalter als einzige Beschreibung des Eingabefelds
- Verwenden Sie Fehler- und Hilfetexte für zusätzliche Informationen
- Stellen Sie ausreichenden Kontrast für Text und Rahmen sicher
- Verwenden Sie passende Input-Typen für bessere Bildschirmleser-Unterstützung und mobile Tastaturen

### Responsive Design

- Verwenden Sie relative Einheiten für Größenangaben
- Passen Sie Padding und Schriftgröße für verschiedene Bildschirmgrößen an
- Achten Sie darauf, dass Eingabefelder auf mobilen Geräten ausreichend groß sind

### Validierung

- Verwenden Sie das `required`-Attribut für Pflichtfelder
- Verwenden Sie pattern-Attribute für clientseitige Validierung
- Kombinieren Sie HTML5-Validierung mit JavaScript-Validierung für bessere Benutzererfahrung
- Zeigen Sie Fehlermeldungen unter dem Eingabefeld an

## Integration in Frameworks

### React

```jsx
import React from 'react';
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/modules/input.module.css';

function Input({
  type = 'text',
  id,
  name,
  value,
  placeholder,
  onChange,
  disabled = false,
  readOnly = false,
  error = false,
  success = false,
  size = '',
  icon = '',
  className = '',
  ...props
}) {
  const inputClasses = [
    'input',
    error ? 'error' : '',
    success ? 'success' : '',
    size ? size : '',
    icon ? 'with-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {icon && <span className={`input-icon ${icon}`}></span>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        className={inputClasses}
        {...props}
      />
    </div>
  );
}

export default Input;
```

### Vue

```vue
<template>
  <div class="input-wrapper">
    <span 
      v-if="icon" 
      class="input-icon"
      :class="icon"
    ></span>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="input"
      :class="[
        error ? 'error' : '',
        success ? 'success' : '',
        size,
        icon ? 'with-icon' : '',
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    name: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    error: Boolean,
    success: Boolean,
    size: String,
    icon: String
  },
  emits: ['update:modelValue']
}
</script>
```

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/modules/input.module.css">
</head>
<body>
  <!-- Standard Input -->
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" class="input" placeholder="Name eingeben">
  </div>
  
  <!-- Input mit Icon -->
  <div class="form-group">
    <label for="email" class="form-label">E-Mail</label>
    <div class="input-wrapper">
      <span class="input-icon icon-mail"></span>
      <input type="email" id="email" class="input with-icon" placeholder="E-Mail eingeben">
    </div>
  </div>
  
  <!-- Fehlerstatus -->
  <div class="form-group">
    <label for="password" class="form-label">Passwort</label>
    <input type="password" id="password" class="input error" placeholder="Passwort eingeben">
    <div class="input-feedback error">Passwort muss mindestens 8 Zeichen enthalten</div>
  </div>
  
  <!-- Erfolgsstatus -->
  <div class="form-group">
    <label for="username" class="form-label">Benutzername</label>
    <input type="text" id="username" class="input success" value="validuser">
    <div class="input-feedback success">Benutzername ist verfügbar</div>
  </div>
</body>
</html> 
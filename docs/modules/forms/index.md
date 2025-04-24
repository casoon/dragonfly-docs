# Forms

Die Forms-Komponenten bieten eine Sammlung von Formularelementen in der Casoon UI Library.

## Verwendung

### Text Input

```html
<div class="form-group">
  <label for="name" class="form-label">Name</label>
  <input type="text" id="name" class="form-input" placeholder="Ihr Name">
</div>
```

### Textarea

```html
<div class="form-group">
  <label for="message" class="form-label">Nachricht</label>
  <textarea id="message" class="form-textarea" placeholder="Ihre Nachricht"></textarea>
</div>
```

### Select

```html
<div class="form-group">
  <label for="country" class="form-label">Land</label>
  <select id="country" class="form-select">
    <option value="">Bitte wählen</option>
    <option value="de">Deutschland</option>
    <option value="at">Österreich</option>
    <option value="ch">Schweiz</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-group">
  <label class="form-checkbox">
    <input type="checkbox">
    <span>Ich stimme den AGB zu</span>
  </label>
</div>
```

### Radio

```html
<div class="form-group">
  <label class="form-radio">
    <input type="radio" name="gender" value="male">
    <span>Männlich</span>
  </label>
  <label class="form-radio">
    <input type="radio" name="gender" value="female">
    <span>Weiblich</span>
  </label>
</div>
```

## Varianten

### Größen

```html
<div class="form-group">
  <input type="text" class="form-input form-input--sm" placeholder="Klein">
  <input type="text" class="form-input" placeholder="Normal">
  <input type="text" class="form-input form-input--lg" placeholder="Groß">
</div>
```

### Status

```html
<div class="form-group">
  <input type="text" class="form-input form-input--success" placeholder="Erfolg">
  <input type="text" class="form-input form-input--warning" placeholder="Warnung">
  <input type="text" class="form-input form-input--error" placeholder="Fehler">
</div>
```

### Mit Icons

```html
<div class="form-group">
  <div class="form-input-with-icon">
    <i class="icon-search"></i>
    <input type="text" class="form-input" placeholder="Suchen">
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --form-input-padding: 0.5rem 1rem;
  --form-input-border-radius: 0.25rem;
  --form-input-border-color: #e0e0e0;
  --form-input-focus-border-color: #007bff;
  --form-input-bg-color: #ffffff;
  --form-input-text-color: #333333;
  --form-input-placeholder-color: #999999;
  --form-input-transition: all 0.2s ease;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Formulare an mobile Geräte an
- Optimieren Sie die Touch-Interaktion

### Performance

- Minimieren Sie CSS
- Optimieren Sie die Ladezeit
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/forms.module.css';

interface Props {
  type?: 'text' | 'email' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  status?: 'success' | 'warning' | 'error';
  icon?: string;
}

const {
  type = 'text',
  label,
  placeholder,
  value,
  required = false,
  disabled = false,
  size,
  status,
  icon
} = Astro.props;
---

<div class="form-group">
  {label && <label class="form-label">{label}</label>}
  {icon ? (
    <div class="form-input-with-icon">
      <i class={icon}></i>
      <input
        type={type}
        class:list={[
          'form-input',
          size && `form-input--${size}`,
          status && `form-input--${status}`
        ]}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
      />
    </div>
  ) : (
    <input
      type={type}
      class:list={[
        'form-input',
        size && `form-input--${size}`,
        status && `form-input--${status}`
      ]}
      placeholder={placeholder}
      value={value}
      required={required}
      disabled={disabled}
    />
  )}
</div>

<style>
  .form-input {
    width: 100%;
    padding: var(--form-input-padding);
    border: 1px solid var(--form-input-border-color);
    border-radius: var(--form-input-border-radius);
    background-color: var(--form-input-bg-color);
    color: var(--form-input-text-color);
    transition: var(--form-input-transition);
  }
  
  .form-input:focus {
    border-color: var(--form-input-focus-border-color);
    outline: none;
  }
  
  .form-input::placeholder {
    color: var(--form-input-placeholder-color);
  }
  
  .form-input-with-icon {
    position: relative;
  }
  
  .form-input-with-icon i {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .form-input-with-icon input {
    padding-left: 2.5rem;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import FormInput from '../modules/FormInput.astro';
---

<FormInput
  type="text"
  label="Name"
  placeholder="Ihr Name"
  required
  size="lg"
  icon="icon-user"
/>
``` 
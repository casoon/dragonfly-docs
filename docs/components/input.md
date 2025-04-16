# Input

Die Input-Komponente der Casoon UI Library bietet verschiedene Formulareingabefelder mit einheitlichem Styling.

## Verwendung

```html
<input class="input" type="text" placeholder="Text eingeben...">
<textarea class="input input--textarea" placeholder="Mehrzeiliger Text..."></textarea>
```

## Varianten

### Typen

```html
<input class="input" type="email" placeholder="E-Mail...">
<input class="input" type="password" placeholder="Passwort...">
<input class="input" type="number" placeholder="Zahl...">
```

### Zustände

```html
<input class="input input--disabled" type="text" placeholder="Deaktiviert" disabled>
<input class="input input--error" type="text" placeholder="Fehler">
<input class="input input--success" type="text" placeholder="Erfolg">
```

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css'; // oder ein anderes Theme

interface Props {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  textarea?: boolean;
}

const {
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  success = false,
  textarea = false
} = Astro.props;
---

{#if textarea}
  <textarea
    class:list={[
      'input',
      'input--textarea',
      disabled && 'input--disabled',
      error && 'input--error',
      success && 'input--success'
    ]}
    placeholder={placeholder}
    disabled={disabled}
  >
    <slot />
  </textarea>
{:else}
  <input
    class:list={[
      'input',
      disabled && 'input--disabled',
      error && 'input--error',
      success && 'input--success'
    ]}
    type={type}
    placeholder={placeholder}
    disabled={disabled}
  />
{/if}

<style>
  .input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: all var(--transition-duration) var(--transition-timing);
  }
  
  .input--textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .input--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .input--error {
    border-color: var(--color-error);
  }
  
  .input--success {
    border-color: var(--color-success);
  }
  
  .input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Input from '../components/Input.astro';
---

<Input type="text" placeholder="Name eingeben" />

<Input type="email" placeholder="E-Mail eingeben" error />

<Input textarea placeholder="Nachricht eingeben..." />
```

## CSS Variablen

```css
:root {
  --input-padding: 0.5rem 1rem;
  --input-border-radius: 0.25rem;
  --input-font-size: 1rem;
  --input-line-height: 1.5;
  --input-transition: all 0.2s ease;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische Input-Elemente
- Fügen Sie aussagekräftige Labels hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Größen an mobile Geräte an

### Performance

- Minimieren Sie CSS
- Vermeiden Sie unnötige Animationen
- Optimieren Sie die Ladezeit

## Integration

### React

```jsx
import 'casoon-ui-lib/modules/input.module.css';

function Input({ variant = 'primary', size = 'md', ...props }) {
  return (
    <input
      className={`input input--${variant} input--${size}`}
      {...props}
    />
  );
}
```

### Vue

```vue
<template>
  <input
    class="input"
    :class="[
      `input--${variant}`,
      `input--${size}`
    ]"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style>
@import 'casoon-ui-lib/modules/input.module.css';
</style>
```

### Angular

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input
      class="input"
      [class]="'input--' + variant + ' input--' + size"
    />
  `,
  styles: [`
    @import 'casoon-ui-lib/modules/input.module.css';
  `]
})
export class InputComponent {
  @Input() variant = 'primary';
  @Input() size = 'md';
}
``` 
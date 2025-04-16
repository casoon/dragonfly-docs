# Button

Die Button-Komponente der Casoon UI Library bietet verschiedene Stile und Varianten für interaktive Elemente.

## Verwendung

```html
<button class="button button--primary">Primärer Button</button>
<button class="button button--secondary">Sekundärer Button</button>
<button class="button button--outlined">Outlined Button</button>
```

## Varianten

### Größen

```html
<button class="button button--small">Kleiner Button</button>
<button class="button button--medium">Mittlerer Button</button>
<button class="button button--large">Großer Button</button>
```

### Zustände

```html
<button class="button button--disabled">Deaktivierter Button</button>
<button class="button button--loading">Ladender Button</button>
```

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css'; // oder ein anderes Theme

interface Props {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

const {
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false
} = Astro.props;
---

<button
  class:list={[
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
    loading && 'button--loading'
  ]}
  disabled={disabled}
>
  <slot />
  {#if loading}
    <span class="button__loader"></span>
  {/if}
</button>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: all var(--transition-duration) var(--transition-timing);
  }
  
  .button--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  
  .button--secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  
  .button--outlined {
    border: 1px solid var(--color-primary);
    background-color: transparent;
    color: var(--color-primary);
  }
  
  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .button--loading {
    position: relative;
    cursor: wait;
  }
  
  .button__loader {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-right-color: transparent;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Button from '../components/Button.astro';
---

<Button variant="primary" size="large">
  Klick mich
</Button>

<Button variant="outlined" size="small" loading>
  Wird geladen...
</Button>
```

## CSS Variablen

```css
:root {
  --button-padding: 0.5rem 1rem;
  --button-border-radius: 0.25rem;
  --button-font-size: 1rem;
  --button-font-weight: 500;
  --button-transition: all 0.2s ease;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische Button-Elemente
- Fügen Sie aussagekräftige Texte hinzu
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
import 'casoon-ui-lib/modules/button.module.css';

function Button({ children, variant = 'primary', size = 'md', ...props }) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Vue

```vue
<template>
  <button
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
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
@import 'casoon-ui-lib/modules/button.module.css';
</style>
```

### Angular

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="button"
      [class]="'button--' + variant + ' button--' + size"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    @import 'casoon-ui-lib/modules/button.module.css';
  `]
})
export class ButtonComponent {
  @Input() variant = 'primary';
  @Input() size = 'md';
}
``` 
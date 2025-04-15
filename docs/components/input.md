# Input

Der Input ist eine grundlegende Komponente für Benutzereingaben in der Casoon UI Library.

## Verwendung

```html
<input type="text" class="input" placeholder="Standard Input">
<input type="text" class="input input--primary" placeholder="Primary Input">
<input type="text" class="input input--secondary" placeholder="Secondary Input">
```

## Varianten

### Größen

```html
<input type="text" class="input input--sm" placeholder="Kleiner Input">
<input type="text" class="input" placeholder="Normaler Input">
<input type="text" class="input input--lg" placeholder="Großer Input">
```

### Styles

```html
<input type="text" class="input input--outline" placeholder="Outline Input">
<input type="text" class="input input--ghost" placeholder="Ghost Input">
<input type="text" class="input input--filled" placeholder="Filled Input">
```

### Zustände

```html
<input type="text" class="input" disabled placeholder="Deaktivierter Input">
<input type="text" class="input input--error" placeholder="Fehler-Input">
<input type="text" class="input input--success" placeholder="Erfolgs-Input">
<input type="text" class="input input--warning" placeholder="Warnungs-Input">
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
# Button

Der Button ist eine der grundlegendsten und am häufigsten verwendeten Komponenten in der Casoon UI Library.

## Verwendung

```html
<button class="button">Standard Button</button>
<button class="button button--primary">Primary Button</button>
<button class="button button--secondary">Secondary Button</button>
```

## Varianten

### Größen

```html
<button class="button button--sm">Kleiner Button</button>
<button class="button">Normaler Button</button>
<button class="button button--lg">Großer Button</button>
```

### Styles

```html
<button class="button button--outline">Outline Button</button>
<button class="button button--ghost">Ghost Button</button>
<button class="button button--link">Link Button</button>
```

### Zustände

```html
<button class="button" disabled>Deaktivierter Button</button>
<button class="button button--loading">Ladender Button</button>
<button class="button button--success">Erfolgs-Button</button>
<button class="button button--danger">Gefahren-Button</button>
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
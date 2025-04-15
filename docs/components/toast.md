# Toast

Der Toast ist eine Komponente für kurzlebige Benachrichtigungen in der Casoon UI Library.

## Verwendung

```html
<div class="toast">
  <div class="toast__content">
    <p>Standard Toast</p>
  </div>
</div>

<div class="toast toast--success">
  <div class="toast__content">
    <p>Erfolgsmeldung</p>
  </div>
</div>

<div class="toast toast--error">
  <div class="toast__content">
    <p>Fehlermeldung</p>
  </div>
</div>
```

## Varianten

### Typen

```html
<div class="toast toast--info">
  <div class="toast__content">
    <p>Information</p>
  </div>
</div>

<div class="toast toast--warning">
  <div class="toast__content">
    <p>Warnung</p>
  </div>
</div>

<div class="toast toast--success">
  <div class="toast__content">
    <p>Erfolg</p>
  </div>
</div>

<div class="toast toast--error">
  <div class="toast__content">
    <p>Fehler</p>
  </div>
</div>
```

### Positionen

```html
<div class="toast toast--top-left">
  <div class="toast__content">
    <p>Toast oben links</p>
  </div>
</div>

<div class="toast toast--top-right">
  <div class="toast__content">
    <p>Toast oben rechts</p>
  </div>
</div>

<div class="toast toast--bottom-left">
  <div class="toast__content">
    <p>Toast unten links</p>
  </div>
</div>

<div class="toast toast--bottom-right">
  <div class="toast__content">
    <p>Toast unten rechts</p>
  </div>
</div>
```

### Mit Animation

```html
<div class="toast toast--fade">
  <div class="toast__content">
    <p>Toast mit Fade-Animation</p>
  </div>
</div>

<div class="toast toast--slide">
  <div class="toast__content">
    <p>Toast mit Slide-Animation</p>
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --toast-padding: 1rem;
  --toast-border-radius: 0.25rem;
  --toast-margin: 0.5rem;
  --toast-transition: all 0.3s ease;
  --toast-z-index: 1000;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie aussagekräftige Texte hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Positionen an mobile Geräte an

### Performance

- Minimieren Sie CSS
- Optimieren Sie Animationen
- Vermeiden Sie zu viele gleichzeitige Toasts

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/toast.module.css';

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  closable?: boolean;
}

const { type = 'info', position = 'top-right', closable = false } = Astro.props;
---

<div class:list={[
  'toast',
  `toast--${type}`,
  `toast--${position}`
]}>
  <div class="toast__content">
    <slot />
  </div>
  {closable && (
    <button class="toast__close" onclick="this.parentElement.remove()">&times;</button>
  )}
</div>

<style>
  .toast {
    /* Standard-Styles */
  }
  
  .toast--info {
    /* Info-Styles */
  }
  
  .toast--success {
    /* Success-Styles */
  }
  
  .toast--warning {
    /* Warning-Styles */
  }
  
  .toast--error {
    /* Error-Styles */
  }
  
  .toast--top-left {
    /* Position-Styles */
  }
  
  .toast--top-right {
    /* Position-Styles */
  }
  
  .toast--bottom-left {
    /* Position-Styles */
  }
  
  .toast--bottom-right {
    /* Position-Styles */
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Toast from '../components/Toast.astro';
---

<Toast type="success" position="top-right" closable>
  <p>Erfolgreich gespeichert!</p>
</Toast>
```

### Toast Manager für Astro

Für eine bessere Verwaltung mehrerer Toasts können Sie einen Toast Manager erstellen:

```astro
---
import 'casoon-ui-lib/modules/toast.module.css';

interface Toast {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  duration?: number;
}

const toasts: Toast[] = [
  {
    id: '1',
    type: 'success',
    message: 'Erfolgreich gespeichert!',
    position: 'top-right',
    duration: 3000
  }
];
---

<div class="toast-container">
  {toasts.map((toast) => (
    <div
      class:list={[
        'toast',
        `toast--${toast.type}`,
        `toast--${toast.position}`
      ]}
      data-toast-id={toast.id}
    >
      <div class="toast__content">
        <p>{toast.message}</p>
      </div>
      <button
        class="toast__close"
        onclick="this.parentElement.remove()"
      >
        &times;
      </button>
    </div>
  ))}
</div>

<style>
  .toast-container {
    position: fixed;
    z-index: 1000;
  }
  
  /* Weitere Styles wie oben */
</style>
```

### React

```jsx
import 'casoon-ui-lib/modules/toast.module.css';

function Toast({ children, type = 'info', position = 'top-right', onClose }) {
  return (
    <div className={`toast toast--${type} toast--${position}`}>
      <div className="toast__content">
        {children}
      </div>
      {onClose && (
        <button className="toast__close" onClick={onClose}>&times;</button>
      )}
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="toast" :class="[`toast--${type}`, `toast--${position}`]">
    <div class="toast__content">
      <slot />
    </div>
    <button v-if="closable" class="toast__close" @click="$emit('close')">&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    position: {
      type: String,
      default: 'top-right'
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
@import 'casoon-ui-lib/modules/toast.module.css';
</style>
```

### Angular

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" [class]="'toast--' + type + ' toast--' + position">
      <div class="toast__content">
        <ng-content></ng-content>
      </div>
      <button *ngIf="closable" class="toast__close" (click)="close.emit()">&times;</button>
    </div>
  `,
  styles: [`
    @import 'casoon-ui-lib/modules/toast.module.css';
  `]
})
export class ToastComponent {
  @Input() type = 'info';
  @Input() position = 'top-right';
  @Input() closable = false;
  @Output() close = new EventEmitter<void>();
}
``` 
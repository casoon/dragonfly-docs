# Toast

Die Toast-Komponente der Casoon UI Library bietet temporäre Benachrichtigungen, die nach einer bestimmten Zeit automatisch verschwinden.

## Verwendung

```html
<div class="toast toast--success">
  Erfolgsmeldung
</div>
<div class="toast toast--error">
  Fehlermeldung
</div>
<div class="toast toast--warning">
  Warnmeldung
</div>
<div class="toast toast--info">
  Informationsmeldung
</div>
```

## Varianten

### Mit Icon

```html
<div class="toast toast--success">
  <span class="toast__icon">✓</span>
  <span class="toast__content">Erfolgsmeldung mit Icon</span>
</div>
```

### Mit Fortschrittsbalken

```html
<div class="toast toast--info">
  <span class="toast__content">Meldung mit Fortschrittsbalken</span>
  <div class="toast__progress"></div>
</div>
```

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css'; // oder ein anderes Theme

interface Props {
  variant?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  showProgress?: boolean;
}

const {
  variant = 'info',
  duration = 3000,
  showProgress = true
} = Astro.props;
---

<div
  class:list={[
    'toast',
    `toast--${variant}`,
    showProgress && 'toast--progress'
  ]}
  style={`--toast-duration: ${duration}ms`}
>
  <span class="toast__icon">
    {#if variant === 'success'}✓{/if}
    {#if variant === 'error'}✕{/if}
    {#if variant === 'warning'}⚠{/if}
    {#if variant === 'info'}ℹ{/if}
  </span>
  <span class="toast__content">
    <slot />
  </span>
  {#if showProgress}
    <div class="toast__progress"></div>
  {/if}
</div>

<style>
  .toast {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    animation: slideIn 0.3s ease-out;
    z-index: var(--z-index-toast);
  }
  
  .toast--success {
    background-color: var(--color-success-light);
    color: var(--color-success-dark);
    border: 1px solid var(--color-success);
  }
  
  .toast--error {
    background-color: var(--color-error-light);
    color: var(--color-error-dark);
    border: 1px solid var(--color-error);
  }
  
  .toast--warning {
    background-color: var(--color-warning-light);
    color: var(--color-warning-dark);
    border: 1px solid var(--color-warning);
  }
  
  .toast--info {
    background-color: var(--color-info-light);
    color: var(--color-info-dark);
    border: 1px solid var(--color-info);
  }
  
  .toast__icon {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  
  .toast__content {
    flex: 1;
  }
  
  .toast__progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: currentColor;
    animation: progress var(--toast-duration) linear;
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Toast from '../components/Toast.astro';
---

<Toast variant="success" duration={5000}>
  Die Operation war erfolgreich!
</Toast>

<Toast variant="error" showProgress={false}>
  Ein Fehler ist aufgetreten.
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
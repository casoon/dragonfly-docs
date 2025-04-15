# Alert

Der Alert ist eine Komponente für Benachrichtigungen und Statusmeldungen in der Casoon UI Library.

## Verwendung

```html
<div class="alert">
  <div class="alert__content">
    <p>Standard Alert</p>
  </div>
</div>

<div class="alert alert--success">
  <div class="alert__content">
    <p>Erfolgsmeldung</p>
  </div>
</div>

<div class="alert alert--error">
  <div class="alert__content">
    <p>Fehlermeldung</p>
  </div>
</div>
```

## Varianten

### Typen

```html
<div class="alert alert--info">
  <div class="alert__content">
    <p>Information</p>
  </div>
</div>

<div class="alert alert--warning">
  <div class="alert__content">
    <p>Warnung</p>
  </div>
</div>

<div class="alert alert--success">
  <div class="alert__content">
    <p>Erfolg</p>
  </div>
</div>

<div class="alert alert--error">
  <div class="alert__content">
    <p>Fehler</p>
  </div>
</div>
```

### Mit Icons

```html
<div class="alert alert--info">
  <div class="alert__icon">
    <svg>...</svg>
  </div>
  <div class="alert__content">
    <p>Information mit Icon</p>
  </div>
</div>
```

### Mit Schließen-Button

```html
<div class="alert">
  <div class="alert__content">
    <p>Alert mit Schließen-Button</p>
  </div>
  <button class="alert__close">&times;</button>
</div>
```

## CSS Variablen

```css
:root {
  --alert-padding: 1rem;
  --alert-border-radius: 0.25rem;
  --alert-margin-bottom: 1rem;
  --alert-transition: all 0.3s ease;
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
- Passen Sie die Größen an mobile Geräte an

### Performance

- Minimieren Sie CSS
- Vermeiden Sie unnötige Animationen
- Optimieren Sie die Ladezeit

## Integration

### React

```jsx
import 'casoon-ui-lib/modules/alert.module.css';

function Alert({ children, type = 'info', onClose }) {
  return (
    <div className={`alert alert--${type}`}>
      <div className="alert__content">
        {children}
      </div>
      {onClose && (
        <button className="alert__close" onClick={onClose}>&times;</button>
      )}
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="alert" :class="`alert--${type}`">
    <div class="alert__content">
      <slot />
    </div>
    <button v-if="closable" class="alert__close" @click="$emit('close')">&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
@import 'casoon-ui-lib/modules/alert.module.css';
</style>
```

### Angular

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert" [class]="'alert--' + type">
      <div class="alert__content">
        <ng-content></ng-content>
      </div>
      <button *ngIf="closable" class="alert__close" (click)="close.emit()">&times;</button>
    </div>
  `,
  styles: [`
    @import 'casoon-ui-lib/modules/alert.module.css';
  `]
})
export class AlertComponent {
  @Input() type = 'info';
  @Input() closable = false;
  @Output() close = new EventEmitter<void>();
}
``` 
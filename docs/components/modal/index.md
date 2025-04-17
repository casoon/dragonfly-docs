# Modal

Der Modal ist eine Komponente für modale Dialoge in der Casoon UI Library.

## Verwendung

```html
<div class="modal">
  <div class="modal__content">
    <div class="modal__header">
      <h3>Modal Titel</h3>
      <button class="modal__close">&times;</button>
    </div>
    <div class="modal__body">
      <p>Modal Inhalt</p>
    </div>
    <div class="modal__footer">
      <button class="button">Schließen</button>
    </div>
  </div>
</div>
```

## Varianten

### Größen

```html
<div class="modal modal--sm">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal modal--lg">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>
```

### Styles

```html
<div class="modal modal--primary">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal modal--secondary">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal modal--dark">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>
```

### Positionen

```html
<div class="modal modal--top">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal modal--center">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>

<div class="modal modal--bottom">
  <div class="modal__content">
    <!-- Modal Inhalt -->
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --modal-padding: 1rem;
  --modal-border-radius: 0.5rem;
  --modal-background: rgba(0, 0, 0, 0.5);
  --modal-z-index: 1000;
  --modal-transition: all 0.3s ease;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie aussagekräftige Titel hinzu
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
import 'casoon-ui-lib/modules/modal.module.css';

function Modal({ isOpen, onClose, children, variant = 'primary', size = 'md' }) {
  if (!isOpen) return null;

  return (
    <div className={`modal modal--${variant} modal--${size}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h3>Modal Titel</h3>
          <button className="modal__close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__footer">
          <button className="button" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div
    v-if="isOpen"
    class="modal"
    :class="[
      `modal--${variant}`,
      `modal--${size}`
    ]"
  >
    <div class="modal__content">
      <div class="modal__header">
        <h3>{{ title }}</h3>
        <button class="modal__close" @click="$emit('close')">&times;</button>
      </div>
      <div class="modal__body">
        <slot />
      </div>
      <div class="modal__footer">
        <button class="button" @click="$emit('close')">Schließen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
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
@import 'casoon-ui-lib/modules/modal.module.css';
</style>
```

### Angular

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div
      *ngIf="isOpen"
      class="modal"
      [class]="'modal--' + variant + ' modal--' + size"
    >
      <div class="modal__content">
        <div class="modal__header">
          <h3>{{ title }}</h3>
          <button class="modal__close" (click)="close.emit()">&times;</button>
        </div>
        <div class="modal__body">
          <ng-content></ng-content>
        </div>
        <div class="modal__footer">
          <button class="button" (click)="close.emit()">Schließen</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import 'casoon-ui-lib/modules/modal.module.css';
  `]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() variant = 'primary';
  @Input() size = 'md';
  @Output() close = new EventEmitter<void>();
}
``` 
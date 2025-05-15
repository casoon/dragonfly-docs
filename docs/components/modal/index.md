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
  <div>
    <div 
      v-if="isOpen" 
      class="modal-overlay"
      @click="closeOnOverlayClick && close()"
    ></div>
    
    <div class="modal" :class="{ 'modal--open': isOpen }">
      <div class="modal__content">
        <div class="modal__header">
          <h2 class="modal__title">{{ title }}</h2>
          <button 
            v-if="closable" 
            class="modal__close"
            @click="close"
          >&times;</button>
        </div>
        
        <div class="modal__body">
          <slot></slot>
        </div>
        
        <div v-if="$slots.footer" class="modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/casoon-ui-lib/core.css">
  <link rel="stylesheet" href="path/to/casoon-ui-lib/modules/modal.module.css">
  <style>
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <button id="openModalBtn">Modal öffnen</button>
  
  <div id="myModal" class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Modal Beispiel</h2>
        <button class="modal__close">&times;</button>
      </div>
      <div class="modal__body">
        <p>Dies ist der Inhalt des Modals.</p>
      </div>
      <div class="modal__footer">
        <button class="button primary">Bestätigen</button>
        <button class="button">Abbrechen</button>
      </div>
    </div>
  </div>
  
  <script>
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = modal.querySelector('.modal__close');
    const overlay = modal.querySelector('.modal__overlay');
    const cancelBtn = modal.querySelector('.button:not(.primary)');
    
    // Modal öffnen
    openBtn.addEventListener('click', () => {
      modal.classList.add('modal--open');
    });
    
    // Modal schließen
    [closeBtn, overlay, cancelBtn].forEach(el => {
      el.addEventListener('click', () => {
        modal.classList.remove('modal--open');
      });
    });
  </script>
</body>
</html> 
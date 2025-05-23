# Modal

The Modal is a component for modal dialogs in the Casoon UI Library.

## Usage

```html
<div class="modal">
  <div class="modal__content">
    <div class="modal__header">
      <h3>Modal Title</h3>
      <button class="modal__close">&times;</button>
    </div>
    <div class="modal__body">
      <p>Modal Content</p>
    </div>
    <div class="modal__footer">
      <button class="button">Close</button>
    </div>
  </div>
</div>
```

## Variants

### Sizes

```html
<div class="modal modal--sm">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal modal--lg">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>
```

### Styles

```html
<div class="modal modal--primary">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal modal--secondary">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal modal--dark">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>
```

### Positions

```html
<div class="modal modal--top">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal modal--center">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>

<div class="modal modal--bottom">
  <div class="modal__content">
    <!-- Modal Content -->
  </div>
</div>
```

## CSS Variables

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

### Accessibility

- Use semantic HTML elements
- Add meaningful titles
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt sizes for mobile devices

### Performance

- Minimize CSS
- Avoid unnecessary animations
- Optimize loading time

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
          <h3>Modal Title</h3>
          <button className="modal__close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__footer">
          <button className="button" onClick={onClose}>Close</button>
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
```

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
  <button id="openModalBtn">Open Modal</button>
  
  <div id="myModal" class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Modal Example</h2>
        <button class="modal__close">&times;</button>
      </div>
      <div class="modal__body">
        <p>This is the content of the modal.</p>
      </div>
      <div class="modal__footer">
        <button class="button primary">Confirm</button>
        <button class="button">Cancel</button>
      </div>
    </div>
  </div>
  
  <script>
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = modal.querySelector('.modal__close');
    
    openBtn.addEventListener('click', () => {
      modal.classList.add('modal--open');
    });
    
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('modal--open');
    });
    
    // Close modal when clicking on overlay
    modal.querySelector('.modal__overlay').addEventListener('click', () => {
      modal.classList.remove('modal--open');
    });
  </script>
</body>
</html> 
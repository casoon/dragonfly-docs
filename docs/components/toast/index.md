# Toast

The Toast component of the Casoon UI Library provides temporary notifications that automatically disappear after a certain time.

## Usage

```html
<div class="toast toast--success">
  Success message
</div>
<div class="toast toast--error">
  Error message
</div>
<div class="toast toast--warning">
  Warning message
</div>
<div class="toast toast--info">
  Information message
</div>
```

## Variants

### With Icon

```html
<div class="toast toast--success">
  <span class="toast__icon">✓</span>
  <span class="toast__content">Success message with icon</span>
</div>
```

### With Progress Bar

```html
<div class="toast toast--info">
  <span class="toast__content">Message with progress bar</span>
  <div class="toast__progress"></div>
</div>
```

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css'; // or another theme

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

Usage in an Astro component:

```astro
---
import Toast from '../components/Toast.astro';
---

<Toast variant="success" duration={5000}>
  The operation was successful!
</Toast>

<Toast variant="error" showProgress={false}>
  An error occurred.
</Toast>
```

### Toast Manager for Astro

For better management of multiple toasts, you can create a Toast Manager:

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
    message: 'Successfully saved!',
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
  
  /* Additional styles as above */
</style>
```

### React

```jsx
import React, { useState, useEffect } from 'react';
import 'casoon-ui-lib/modules/toast.module.css';

function Toast({ children, type = 'info', position = 'top-right', duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`toast toast--${type} toast--${position}`}>
      <div className="toast__content">
        {children}
      </div>
      <button className="toast__close" onClick={() => setVisible(false)}>
        &times;
      </button>
      <div className="toast__progress"></div>
    </div>
  );
}

export default Toast;
```

### Toast Context for React

```jsx
import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([...toasts, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
```

Usage with React Context:

```jsx
import { useToast } from './ToastContext';

function LoginForm() {
  const { addToast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic...
    addToast('Login successful!', 'success', 5000);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
    </form>
  );
}
```

### Vue

```
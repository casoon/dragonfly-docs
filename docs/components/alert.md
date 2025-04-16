# Alert

Die Alert-Komponente der Casoon UI Library bietet verschiedene Arten von Benachrichtigungen und Warnmeldungen.

## Verwendung

```html
<div class="alert alert--success">
  Erfolgsmeldung
</div>
<div class="alert alert--error">
  Fehlermeldung
</div>
<div class="alert alert--warning">
  Warnmeldung
</div>
<div class="alert alert--info">
  Informationsmeldung
</div>
```

## Varianten

### Mit Icon

```html
<div class="alert alert--success">
  <span class="alert__icon">✓</span>
  <span class="alert__content">Erfolgsmeldung mit Icon</span>
</div>
```

### Schließbar

```html
<div class="alert alert--info alert--dismissible">
  <span class="alert__content">Schließbare Meldung</span>
  <button class="alert__close">×</button>
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
  dismissible?: boolean;
  icon?: boolean;
}

const {
  variant = 'info',
  dismissible = false,
  icon = false
} = Astro.props;
---

<div
  class:list={[
    'alert',
    `alert--${variant}`,
    dismissible && 'alert--dismissible'
  ]}
>
  {#if icon}
    <span class="alert__icon">
      {#if variant === 'success'}✓{/if}
      {#if variant === 'error'}✕{/if}
      {#if variant === 'warning'}⚠{/if}
      {#if variant === 'info'}ℹ{/if}
    </span>
  {/if}
  <span class="alert__content">
    <slot />
  </span>
  {#if dismissible}
    <button class="alert__close">×</button>
  {/if}
</div>

<style>
  .alert {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
  }
  
  .alert--success {
    background-color: var(--color-success-light);
    color: var(--color-success-dark);
    border: 1px solid var(--color-success);
  }
  
  .alert--error {
    background-color: var(--color-error-light);
    color: var(--color-error-dark);
    border: 1px solid var(--color-error);
  }
  
  .alert--warning {
    background-color: var(--color-warning-light);
    color: var(--color-warning-dark);
    border: 1px solid var(--color-warning);
  }
  
  .alert--info {
    background-color: var(--color-info-light);
    color: var(--color-info-dark);
    border: 1px solid var(--color-info);
  }
  
  .alert__icon {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  
  .alert__content {
    flex: 1;
  }
  
  .alert__close {
    margin-left: 0.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity var(--transition-duration) var(--transition-timing);
  }
  
  .alert__close:hover {
    opacity: 1;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Alert from '../components/Alert.astro';
---

<Alert variant="success" icon>
  Die Operation war erfolgreich!
</Alert>

<Alert variant="error" dismissible>
  Ein Fehler ist aufgetreten.
</Alert>
``` 
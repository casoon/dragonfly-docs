# Badge

Der Badge ist eine Komponente für kleine Statusindikatoren und Zähler in der Casoon UI Library.

## Verwendung

```html
<span class="badge">Standard Badge</span>
<span class="badge badge--primary">Primary Badge</span>
<span class="badge badge--secondary">Secondary Badge</span>
```

## Varianten

### Typen

```html
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

### Größen

```html
<span class="badge badge--sm">Kleiner Badge</span>
<span class="badge">Normaler Badge</span>
<span class="badge badge--lg">Großer Badge</span>
```

### Mit Icons

```html
<span class="badge">
  <span class="badge__icon">🔔</span>
  <span class="badge__text">Benachrichtigungen</span>
</span>
```

### Mit Zähler

```html
<span class="badge badge--counter">5</span>
<span class="badge badge--counter badge--primary">12</span>
```

## CSS Variablen

```css
:root {
  --badge-padding: 0.25rem 0.5rem;
  --badge-border-radius: 0.25rem;
  --badge-font-size: 0.75rem;
  --badge-font-weight: 500;
  --badge-transition: all 0.2s ease;
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

### Astro

```astro
---
import 'casoon-ui-lib/modules/badge.module.css';

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  counter?: boolean;
  icon?: string;
}

const { type = 'primary', size = 'md', counter = false, icon } = Astro.props;
---

<span
  class:list={[
    'badge',
    `badge--${type}`,
    `badge--${size}`,
    counter && 'badge--counter'
  ]}
>
  {icon && <span class="badge__icon">{icon}</span>}
  <span class="badge__text">
    <slot />
  </span>
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: var(--badge-padding);
    border-radius: var(--badge-border-radius);
    font-size: var(--badge-font-size);
    font-weight: var(--badge-font-weight);
    transition: var(--badge-transition);
  }
  
  .badge--sm {
    --badge-padding: 0.125rem 0.25rem;
    --badge-font-size: 0.625rem;
  }
  
  .badge--lg {
    --badge-padding: 0.375rem 0.75rem;
    --badge-font-size: 0.875rem;
  }
  
  .badge--counter {
    min-width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Badge from '../components/Badge.astro';
---

<Badge type="success" size="lg">
  Neu
</Badge>

<Badge type="error" counter>
  5
</Badge>

<Badge icon="🔔">
  Benachrichtigungen
</Badge>
```

### Badge mit Animation

```astro
---
import 'casoon-ui-lib/modules/badge.module.css';

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary';
  pulse?: boolean;
}

const { type = 'primary', pulse = false } = Astro.props;
---

<span
  class:list={[
    'badge',
    `badge--${type}`,
    pulse && 'badge--pulse'
  ]}
>
  <slot />
</span>

<style>
  .badge--pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
``` 
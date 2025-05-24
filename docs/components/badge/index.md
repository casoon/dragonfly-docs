# Badge

The Badge is a component for small status indicators and counters in the Casoon UI Library.

## Usage

```html
<span class="badge">Standard Badge</span>
<span class="badge badge--primary">Primary Badge</span>
<span class="badge badge--secondary">Secondary Badge</span>
```

## Variants

### Types

```html
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--error">Error</span>
```

### Sizes

```html
<span class="badge badge--sm">Small Badge</span>
<span class="badge">Normal Badge</span>
<span class="badge badge--lg">Large Badge</span>
```

### With Icons

```html
<span class="badge">
  <span class="badge__icon">🔔</span>
  <span class="badge__text">Notifications</span>
</span>
```

### With Counter

```html
<span class="badge badge--counter">5</span>
<span class="badge badge--counter badge--primary">12</span>
```

## CSS Variables

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

### Accessibility

- Use semantic HTML elements
- Add meaningful text
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

### Astro

```astro
---
import '@casoon/ui-lib/components/badge.css';

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

Usage in an Astro component:

```astro
---
import Badge from '../components/Badge.astro';
---

<Badge type="success" size="lg">
  New
</Badge>

<Badge type="error" counter>
  5
</Badge>

<Badge icon="🔔">
  Notifications
</Badge>
```

### Badge with Animation

```astro
---
import '@casoon/ui-lib/components/badge.css';

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
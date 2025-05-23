# Tooltip

The Tooltip is a component for contextual help text in the Casoon UI Library.

## Usage

```html
<button class="tooltip-trigger" data-tooltip="Standard Tooltip">
  Hover me
</button>

<div class="tooltip">
  <div class="tooltip__content">
    Tooltip content
  </div>
</div>
```

## Variants

### Positions

```html
<button class="tooltip-trigger" data-tooltip-position="top">
  Tooltip top
</button>

<button class="tooltip-trigger" data-tooltip-position="right">
  Tooltip right
</button>

<button class="tooltip-trigger" data-tooltip-position="bottom">
  Tooltip bottom
</button>

<button class="tooltip-trigger" data-tooltip-position="left">
  Tooltip left
</button>
```

### Types

```html
<button class="tooltip-trigger tooltip--info">
  Info Tooltip
</button>

<button class="tooltip-trigger tooltip--success">
  Success Tooltip
</button>

<button class="tooltip-trigger tooltip--warning">
  Warning Tooltip
</button>

<button class="tooltip-trigger tooltip--error">
  Error Tooltip
</button>
```

### With Animation

```html
<button class="tooltip-trigger tooltip--fade">
  Fade Tooltip
</button>

<button class="tooltip-trigger tooltip--slide">
  Slide Tooltip
</button>
```

## CSS Variables

```css
:root {
  --tooltip-padding: 0.5rem 1rem;
  --tooltip-border-radius: 0.25rem;
  --tooltip-font-size: 0.875rem;
  --tooltip-max-width: 200px;
  --tooltip-z-index: 1000;
  --tooltip-transition: all 0.2s ease;
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
- Adapt positions for mobile devices

### Performance

- Minimize CSS
- Optimize animations
- Avoid too many simultaneous tooltips

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/tooltip.module.css';

interface Props {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  type?: 'info' | 'success' | 'warning' | 'error';
  animation?: 'fade' | 'slide';
}

const { text, position = 'top', type, animation } = Astro.props;
---

<button
  class:list={[
    'tooltip-trigger',
    type && `tooltip--${type}`,
    animation && `tooltip--${animation}`
  ]}
  data-tooltip={text}
  data-tooltip-position={position}
>
  <slot />
</button>

<style>
  .tooltip-trigger {
    position: relative;
  }
  
  .tooltip-trigger:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    padding: var(--tooltip-padding);
    border-radius: var(--tooltip-border-radius);
    font-size: var(--tooltip-font-size);
    max-width: var(--tooltip-max-width);
    z-index: var(--tooltip-z-index);
    transition: var(--tooltip-transition);
  }
  
  .tooltip-trigger[data-tooltip-position="top"]:hover::after {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-trigger[data-tooltip-position="right"]:hover::after {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .tooltip-trigger[data-tooltip-position="bottom"]:hover::after {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-trigger[data-tooltip-position="left"]:hover::after {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
```

Usage in an Astro component:

```astro
---
import Tooltip from '../components/Tooltip.astro';
---

<Tooltip text="This is a tooltip" position="top" type="info">
  Hover me
</Tooltip>

<Tooltip text="Success!" position="right" type="success" animation="fade">
  Success Tooltip
</Tooltip>
```

### Tooltip with HTML content

```astro
---
import 'casoon-ui-lib/modules/tooltip.module.css';

interface Props {
  position?: 'top' | 'right' | 'bottom' | 'left';
  type?: 'info' | 'success' | 'warning' | 'error';
}

const { position = 'top', type } = Astro.props;
---

<button
  class:list={[
    'tooltip-trigger',
    type && `tooltip--${type}`
  ]}
  data-tooltip-position={position}
>
  <slot name="trigger" />
  <div class="tooltip-content" slot="content">
    <slot name="content" />
  </div>
</button>

<style>
  .tooltip-content {
    display: none;
    position: absolute;
    padding: var(--tooltip-padding);
    border-radius: var(--tooltip-border-radius);
    font-size: var(--tooltip-font-size);
    max-width: var(--tooltip-max-width);
    z-index: var(--tooltip-z-index);
  }
  
  .tooltip-trigger:hover .tooltip-content {
    display: block;
  }
</style>
```

Usage with HTML content:

```astro
---
import Tooltip from '../components/Tooltip.astro';
---

<Tooltip position="top" type="info">
  <span slot="trigger">Hover me</span>
  <div slot="content">
    <h3>Title</h3>
    <p>Description</p>
    <a href="#">Learn more</a>
  </div>
</Tooltip>
``` 
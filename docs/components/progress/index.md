# Progress

The Progress is a component for progress bars in the Casoon UI Library.

## Usage

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%"></div>
</div>
```

## Variants

### With Label

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%">
    <span class="progress__label">50%</span>
  </div>
</div>
```

### With Colors

```html
<div class="progress">
  <div class="progress__bar progress__bar--primary" style="width: 50%"></div>
</div>

<div class="progress">
  <div class="progress__bar progress__bar--success" style="width: 75%"></div>
</div>

<div class="progress">
  <div class="progress__bar progress__bar--warning" style="width: 25%"></div>
</div>

<div class="progress">
  <div class="progress__bar progress__bar--error" style="width: 10%"></div>
</div>
```

### With Animation

```html
<div class="progress">
  <div class="progress__bar progress__bar--animated" style="width: 50%"></div>
</div>
```

## CSS Variables

```css
:root {
  --progress-height: 0.5rem;
  --progress-bg-color: #e0e0e0;
  --progress-border-radius: 0.25rem;
  --progress-bar-color: #007bff;
  --progress-transition: width 0.3s ease;
}
```

## Best Practices

### Accessibility

- Use semantic HTML elements
- Add ARIA attributes
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt size for mobile devices
- Optimize display on small screens

### Performance

- Minimize CSS
- Optimize loading time
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/progress.module.css';

interface Props {
  value: number;
  max?: number;
  showLabel?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error';
  animated?: boolean;
}

const {
  value,
  max = 100,
  showLabel = false,
  color,
  animated = false
} = Astro.props;

const percentage = Math.min(100, Math.max(0, (value / max) * 100));
---

<div class="progress">
  <div
    class:list={[
      'progress__bar',
      color && `progress__bar--${color}`,
      animated && 'progress__bar--animated'
    ]}
    style={`width: ${percentage}%`}
  >
    {showLabel && <span class="progress__label">{percentage}%</span>}
  </div>
</div>

<style>
  .progress {
    width: 100%;
    height: var(--progress-height);
    background-color: var(--progress-bg-color);
    border-radius: var(--progress-border-radius);
    overflow: hidden;
  }
  
  .progress__bar {
    height: 100%;
    background-color: var(--progress-bar-color);
    transition: var(--progress-transition);
  }
  
  .progress__label {
    color: white;
    font-size: 0.75rem;
    padding: 0 0.5rem;
  }
  
  .progress__bar--animated {
    animation: progress-animation 1s ease-in-out infinite;
  }
  
  @keyframes progress-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1rem 0;
    }
  }
</style>
```

Usage in an Astro component:

```astro
---
import Progress from '../components/Progress.astro';
---

<Progress
  value={50}
  max={100}
  showLabel
  color="primary"
  animated
/>
``` 
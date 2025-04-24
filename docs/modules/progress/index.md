# Progress

Der Progress ist eine Komponente für Fortschrittsbalken in der Casoon UI Library.

## Verwendung

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%"></div>
</div>
```

## Varianten

### Mit Label

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%">
    <span class="progress__label">50%</span>
  </div>
</div>
```

### Mit Farben

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

### Mit Animation

```html
<div class="progress">
  <div class="progress__bar progress__bar--animated" style="width: 50%"></div>
</div>
```

## CSS Variablen

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

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Größe an mobile Geräte an
- Optimieren Sie die Darstellung auf kleinen Bildschirmen

### Performance

- Minimieren Sie CSS
- Optimieren Sie die Ladezeit
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

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

Verwendung in einer Astro-Komponente:

```astro
---
import Progress from '../modules/Progress.astro';
---

<Progress
  value={50}
  max={100}
  showLabel
  color="primary"
  animated
/>
``` 
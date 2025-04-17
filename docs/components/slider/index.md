# Slider

Die Slider-Komponente ist ein interaktives Steuerelement für die Auswahl von Werten in der Casoon UI Library.

## Verwendung

```html
<div class="slider">
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

## Varianten

### Mit Labels

```html
<div class="slider">
  <div class="slider__labels">
    <span>0</span>
    <span>100</span>
  </div>
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
  <div class="slider__value">50</div>
</div>
```

### Mit Stufen

```html
<div class="slider">
  <input type="range" class="slider__input" min="0" max="100" step="10" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
    <div class="slider__steps">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

### Mit Animation

```html
<div class="slider slider--animated">
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

## CSS Variablen

```css
:root {
  --slider-height: 4px;
  --slider-thumb-size: 16px;
  --slider-track-color: #e0e0e0;
  --slider-progress-color: #007bff;
  --slider-thumb-color: #ffffff;
  --slider-thumb-border: 2px solid #007bff;
  --slider-border-radius: 2px;
  --slider-transition: all 0.2s ease;
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
- Passen Sie die Slider-Größe an den Inhalt an
- Optimieren Sie die Darstellung auf mobilen Geräten

### Performance

- Minimieren Sie CSS
- Optimieren Sie JavaScript-Events
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/slider.module.css';

interface Props {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  showLabels?: boolean;
  showSteps?: boolean;
  animated?: boolean;
}

const {
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  showLabels = false,
  showSteps = false,
  animated = false
} = Astro.props;
---

<div class="slider" class:list={[animated && 'slider--animated']}>
  {#if showLabels}
    <div class="slider__labels">
      <span>{min}</span>
      <span>{max}</span>
    </div>
  {/if}
  <input
    type="range"
    class="slider__input"
    min={min}
    max={max}
    value={value}
    step={step}
  />
  <div class="slider__track">
    <div class="slider__progress"></div>
    {#if showSteps}
      <div class="slider__steps">
        {#each Array.from({ length: (max - min) / step + 1 })}
          <span></span>
        {/each}
      </div>
    {/if}
  </div>
  <div class="slider__thumb"></div>
  <div class="slider__value">{value}</div>
</div>

<style>
  .slider {
    position: relative;
    width: 100%;
    padding: 1rem 0;
  }
  
  .slider__input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }
  
  .slider__track {
    position: relative;
    width: 100%;
    height: var(--slider-height);
    background-color: var(--slider-track-color);
    border-radius: var(--slider-border-radius);
  }
  
  .slider__progress {
    position: absolute;
    height: 100%;
    background-color: var(--slider-progress-color);
    border-radius: var(--slider-border-radius);
    transition: var(--slider-transition);
  }
  
  .slider__thumb {
    position: absolute;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    background-color: var(--slider-thumb-color);
    border: var(--slider-thumb-border);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: var(--slider-transition);
  }
  
  .slider__steps {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .slider__steps span {
    width: 2px;
    height: 100%;
    background-color: var(--slider-track-color);
  }
  
  .slider__labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .slider__value {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
  }
  
  .slider--animated .slider__thumb {
    transition: var(--slider-transition);
  }
  
  .slider--animated .slider__thumb:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Slider from '../components/Slider.astro';
---

<Slider
  min={0}
  max={100}
  value={50}
  step={10}
  showLabels
  showSteps
  animated
/>
``` 
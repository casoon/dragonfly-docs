# Effekte

Die Casoon UI Library bietet eine Vielzahl von Animationen und visuellen Effekten für moderne Webanwendungen.

## Hover Effekte

### Scale

```html
<button class="button button--hover-scale">Hover Scale</button>
```

### Rotate

```html
<button class="button button--hover-rotate">Hover Rotate</button>
```

### Glow

```html
<button class="button button--hover-glow">Hover Glow</button>
```

## Transition Effekte

### Fade

```html
<div class="fade">
  <div class="fade__content">Fade In/Out</div>
</div>
```

### Slide

```html
<div class="slide">
  <div class="slide__content">Slide In/Out</div>
</div>
```

### Zoom

```html
<div class="zoom">
  <div class="zoom__content">Zoom In/Out</div>
</div>
```

## Animation Effekte

### Pulse

```html
<div class="pulse">
  <div class="pulse__content">Pulsierender Effekt</div>
</div>
```

### Bounce

```html
<div class="bounce">
  <div class="bounce__content">Springender Effekt</div>
</div>
```

### Shake

```html
<div class="shake">
  <div class="shake__content">Schüttelnder Effekt</div>
</div>
```

## CSS Variablen

```css
:root {
  --transition-duration: 300ms;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --scale-factor: 1.05;
  --rotate-angle: 5deg;
  --glow-color: rgba(0, 115, 255, 0.5);
  --glow-spread: 10px;
}
```

## Best Practices

### Performance

- Verwenden Sie CSS-Transitions statt JavaScript
- Optimieren Sie Animationen für mobile Geräte
- Vermeiden Sie zu viele gleichzeitige Animationen
- Nutzen Sie Hardware-Beschleunigung

### Zugänglichkeit

- Bieten Sie Optionen zum Deaktivieren von Animationen
- Berücksichtigen Sie Benutzer mit Bewegungssensitivität
- Stellen Sie alternative Darstellungen bereit
- Testen Sie mit Screenreadern

### Responsive Design

- Passen Sie Animationen an verschiedene Bildschirmgrößen an
- Optimieren Sie für Touch-Geräte
- Berücksichtigen Sie die Netzwerkverbindung
- Testen Sie auf verschiedenen Geräten

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/effects.module.css';

interface Props {
  effect: 'hover' | 'transition' | 'animation';
  type: string;
  duration?: number;
  timing?: string;
}

const {
  effect,
  type,
  duration = 300,
  timing = 'ease'
} = Astro.props;
---

<div 
  class:list={[
    effect,
    `${effect}--${type}`
  ]}
  style={`
    --transition-duration: ${duration}ms;
    --transition-timing: ${timing};
  `}
>
  <slot />
</div>

<style>
  .hover--scale:hover {
    transform: scale(var(--scale-factor));
  }
  
  .hover--rotate:hover {
    transform: rotate(var(--rotate-angle));
  }
  
  .hover--glow:hover {
    box-shadow: 0 0 var(--glow-spread) var(--glow-color);
  }
  
  .transition--fade {
    transition: opacity var(--transition-duration) var(--transition-timing);
  }
  
  .animation--pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Effect from '../components/Effect.astro';
---

<Effect effect="hover" type="scale">
  <button class="button">Hover Scale</button>
</Effect>

<Effect effect="transition" type="fade" duration={500}>
  <div>Fade Transition</div>
</Effect>

<Effect effect="animation" type="pulse">
  <div>Pulsierende Animation</div>
</Effect>
``` 
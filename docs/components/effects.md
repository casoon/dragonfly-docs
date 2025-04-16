# Effekte

Die Casoon UI Library bietet eine Vielzahl von Animationen und Effekten für Ihre Komponenten.

## Hover-Effekte

### Scale

```html
<button class="c-button c-effect--scale">Hover mich</button>
```

### Rotate

```html
<button class="c-button c-effect--rotate">Hover mich</button>
```

### Glow

```html
<button class="c-button c-effect--glow">Hover mich</button>
```

## Transition-Effekte

### Fade

```html
<div class="c-effect--fade">
  <p>Fade-In Text</p>
</div>
```

### Slide

```html
<div class="c-effect--slide">
  <p>Slide-In Text</p>
</div>
```

### Zoom

```html
<div class="c-effect--zoom">
  <p>Zoom-In Text</p>
</div>
```

## Animation-Effekte

### Pulse

```html
<button class="c-button c-effect--pulse">Pulsierender Button</button>
```

### Bounce

```html
<button class="c-button c-effect--bounce">Springender Button</button>
```

### Shake

```html
<button class="c-button c-effect--shake">Schüttelnder Button</button>
```

## CSS Variablen

```css
:root {
  --effect-duration: 0.3s;
  --effect-timing: ease;
  --effect-scale: 1.1;
  --effect-rotate: 5deg;
  --effect-glow-color: var(--color-primary);
  --effect-glow-spread: 10px;
}
```

## Best Practices

### Performance
- Verwenden Sie Hardware-Beschleunigung
- Optimieren Sie Animationen
- Vermeiden Sie zu viele gleichzeitige Effekte

### Zugänglichkeit
- Stellen Sie sicher, dass Effekte nicht störend sind
- Bieten Sie Optionen zum Deaktivieren
- Testen Sie mit verschiedenen Geräten

### Responsive Design
- Passen Sie Effekte an verschiedene Bildschirmgrößen an
- Optimieren Sie für mobile Geräte
- Testen Sie auf verschiedenen Browsern

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';
---

<button class="c-button c-effect--scale">Hover mich</button>
<div class="c-effect--fade">
  <p>Fade-In Text</p>
</div>
<button class="c-button c-effect--pulse">Pulsierender Button</button>
``` 
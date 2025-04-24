# Tooltip

Der Tooltip ist eine Komponente für kontextbezogene Hilfetexte in der Casoon UI Library.

## Verwendung

```html
<button class="tooltip-trigger" data-tooltip="Standard Tooltip">
  Hover mich
</button>

<div class="tooltip">
  <div class="tooltip__content">
    Tooltip Inhalt
  </div>
</div>
```

## Varianten

### Positionen

```html
<button class="tooltip-trigger" data-tooltip-position="top">
  Tooltip oben
</button>

<button class="tooltip-trigger" data-tooltip-position="right">
  Tooltip rechts
</button>

<button class="tooltip-trigger" data-tooltip-position="bottom">
  Tooltip unten
</button>

<button class="tooltip-trigger" data-tooltip-position="left">
  Tooltip links
</button>
```

### Typen

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

### Mit Animation

```html
<button class="tooltip-trigger tooltip--fade">
  Fade Tooltip
</button>

<button class="tooltip-trigger tooltip--slide">
  Slide Tooltip
</button>
```

## CSS Variablen

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

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie aussagekräftige Texte hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Passen Sie die Positionen an mobile Geräte an

### Performance

- Minimieren Sie CSS
- Optimieren Sie Animationen
- Vermeiden Sie zu viele gleichzeitige Tooltips

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

Verwendung in einer Astro-Komponente:

```astro
---
import Tooltip from '../modules/Tooltip.astro';
---

<Tooltip text="Dies ist ein Tooltip" position="top" type="info">
  Hover mich
</Tooltip>

<Tooltip text="Erfolg!" position="right" type="success" animation="fade">
  Erfolgs-Tooltip
</Tooltip>
```

### Tooltip mit HTML-Inhalt

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

Verwendung mit HTML-Inhalt:

```astro
---
import Tooltip from '../modules/Tooltip.astro';
---

<Tooltip position="top" type="info">
  <span slot="trigger">Hover mich</span>
  <div slot="content">
    <h3>Titel</h3>
    <p>Beschreibung</p>
    <button>Action</button>
  </div>
</Tooltip>
``` 
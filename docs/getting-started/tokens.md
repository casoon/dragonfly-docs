# Design Tokens

Design Tokens sind die grundlegenden Bausteine des Design Systems. Sie definieren Farben, Abstände, Schatten und andere visuelle Eigenschaften.

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.color-card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.color-swatch {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.color-info {
  padding: 1rem;
  background: white;
}

.color-name {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.color-value {
  display: block;
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
</style>

## Farben

### Primärfarben

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: #007AFF"></div>
    <div class="color-info">
      <span class="color-name">Primary</span>
      <span class="color-value">#007AFF</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #4DA3FF"></div>
    <div class="color-info">
      <span class="color-name">Primary Light</span>
      <span class="color-value">#4DA3FF</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #0055B3"></div>
    <div class="color-info">
      <span class="color-name">Primary Dark</span>
      <span class="color-value">#0055B3</span>
    </div>
  </div>
</div>

### Sekundärfarben

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: #6C757D"></div>
    <div class="color-info">
      <span class="color-name">Secondary</span>
      <span class="color-value">#6C757D</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #8E959D"></div>
    <div class="color-info">
      <span class="color-name">Secondary Light</span>
      <span class="color-value">#8E959D</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #4A4F54"></div>
    <div class="color-info">
      <span class="color-name">Secondary Dark</span>
      <span class="color-value">#4A4F54</span>
    </div>
  </div>
</div>

### Statusfarben

<div class="color-grid">
  <div class="color-card">
    <div class="color-swatch" style="background-color: #28A745"></div>
    <div class="color-info">
      <span class="color-name">Success</span>
      <span class="color-value">#28A745</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #DC3545"></div>
    <div class="color-info">
      <span class="color-name">Error</span>
      <span class="color-value">#DC3545</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #FFC107"></div>
    <div class="color-info">
      <span class="color-name">Warning</span>
      <span class="color-value">#FFC107</span>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: #17A2B8"></div>
    <div class="color-info">
      <span class="color-name">Info</span>
      <span class="color-value">#17A2B8</span>
    </div>
  </div>
</div>

## Abstände

```html
<div class="spacing-demo">
  <div class="spacing-item" style="margin: var(--spacing-xs)">XS (0.25rem)</div>
  <div class="spacing-item" style="margin: var(--spacing-sm)">SM (0.5rem)</div>
  <div class="spacing-item" style="margin: var(--spacing-md)">MD (1rem)</div>
  <div class="spacing-item" style="margin: var(--spacing-lg)">LG (1.5rem)</div>
  <div class="spacing-item" style="margin: var(--spacing-xl)">XL (2rem)</div>
</div>
```

## Schatten

```html
<div class="shadow-demo">
  <div class="shadow-item" style="box-shadow: var(--shadow-sm)">Small Shadow</div>
  <div class="shadow-item" style="box-shadow: var(--shadow-md)">Medium Shadow</div>
  <div class="shadow-item" style="box-shadow: var(--shadow-lg)">Large Shadow</div>
</div>
```

## Rahmenradius

```html
<div class="border-radius-demo">
  <div class="radius-item" style="border-radius: var(--border-radius-sm)">Small Radius</div>
  <div class="radius-item" style="border-radius: var(--border-radius-md)">Medium Radius</div>
  <div class="radius-item" style="border-radius: var(--border-radius-lg)">Large Radius</div>
  <div class="radius-item" style="border-radius: var(--border-radius-full)">Full Radius</div>
</div>
```

## Übergänge

```html
<div class="transition-demo">
  <button class="transition-button" style="transition: var(--transition-all)">
    Hover me
  </button>
</div>
```

## Z-Index

```html
<div class="z-index-demo">
  <div class="z-index-item" style="z-index: var(--z-index-dropdown)">Dropdown</div>
  <div class="z-index-item" style="z-index: var(--z-index-modal)">Modal</div>
  <div class="z-index-item" style="z-index: var(--z-index-toast)">Toast</div>
</div>
```

## Best Practices

### Konsistenz

Verwenden Sie die Design Tokens konsistent in Ihrem Projekt:

```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-all);
}
```

### Wartbarkeit

Aktualisieren Sie Design Tokens zentral:

```css
:root {
  --color-primary: #007AFF;
  --spacing-md: 1rem;
  --border-radius-md: 0.5rem;
}
```

### Performance

Optimieren Sie die Verwendung von Design Tokens:

```css
/* Gut */
.element {
  color: var(--color-primary);
}

/* Schlecht */
.element {
  color: #007AFF;
}
```

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/core.css';
import 'casoon-ui-lib/themes/day.css';

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const { variant = 'primary', size = 'md' } = Astro.props;
---

<div
  class:list={[
    'demo-component',
    `demo-component--${variant}`,
    `demo-component--${size}`
  ]}
>
  <slot />
</div>

<style>
  .demo-component {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-all);
  }
  
  .demo-component--secondary {
    background-color: var(--color-secondary);
  }
  
  .demo-component--success {
    background-color: var(--color-success);
  }
  
  .demo-component--error {
    background-color: var(--color-error);
  }
  
  .demo-component--sm {
    padding: var(--spacing-sm);
  }
  
  .demo-component--lg {
    padding: var(--spacing-lg);
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import DemoComponent from '../components/DemoComponent.astro';
---

<DemoComponent variant="primary" size="md">
  Beispielinhalt
</DemoComponent>
``` 
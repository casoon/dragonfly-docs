# Typography

Die Typography-Komponenten der Casoon UI Library bieten eine konsistente und flexible Textformatierung für moderne Webanwendungen.

## Überschriften

```html
<h1 class="h1">Überschrift 1</h1>
<h2 class="h2">Überschrift 2</h2>
<h3 class="h3">Überschrift 3</h3>
<h4 class="h4">Überschrift 4</h4>
<h5 class="h5">Überschrift 5</h5>
<h6 class="h6">Überschrift 6</h6>
```

## Text

```html
<p class="text">Normaler Text</p>
<p class="text text--small">Kleiner Text</p>
<p class="text text--large">Großer Text</p>
```

## Text Styles

```html
<p class="text text--bold">Fetter Text</p>
<p class="text text--italic">Kursiver Text</p>
<p class="text text--underline">Unterstrichener Text</p>
<p class="text text--strikethrough">Durchgestrichener Text</p>
```

## Text Colors

```html
<p class="text text--primary">Primärer Text</p>
<p class="text text--secondary">Sekundärer Text</p>
<p class="text text--success">Erfolgs-Text</p>
<p class="text text--warning">Warnungs-Text</p>
<p class="text text--error">Fehler-Text</p>
```

## Text Alignment

```html
<p class="text text--left">Links ausgerichteter Text</p>
<p class="text text--center">Zentrierter Text</p>
<p class="text text--right">Rechts ausgerichteter Text</p>
<p class="text text--justify">Blocksatz</p>
```

## CSS Variablen

```css
:root {
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-size-base: 1rem;
  --font-size-small: 0.875rem;
  --font-size-large: 1.25rem;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  --line-height-base: 1.5;
  --line-height-heading: 1.2;
  --text-color-base: #333333;
  --text-color-primary: #007bff;
  --text-color-secondary: #6c757d;
  --text-color-success: #28a745;
  --text-color-warning: #ffc107;
  --text-color-error: #dc3545;
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
- Optimieren Sie die Lesbarkeit auf mobilen Geräten
- Berücksichtigen Sie die Zeilenlänge

### Performance

- Minimieren Sie CSS
- Optimieren Sie Webfonts
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/typography.module.css';

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';
  size?: 'small' | 'normal' | 'large';
  weight?: 'normal' | 'bold';
  style?: 'normal' | 'italic' | 'underline' | 'strikethrough';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
}

const {
  variant = 'text',
  size = 'normal',
  weight = 'normal',
  style = 'normal',
  color,
  align
} = Astro.props;
---

{#if variant.startsWith('h')}
  <{variant} 
    class:list={[
      variant,
      size !== 'normal' && `text--${size}`,
      weight !== 'normal' && `text--${weight}`,
      style !== 'normal' && `text--${style}`,
      color && `text--${color}`,
      align && `text--${align}`
    ]}
  >
    <slot />
  </{variant}>
{:else}
  <p 
    class:list={[
      'text',
      size !== 'normal' && `text--${size}`,
      weight !== 'normal' && `text--${weight}`,
      style !== 'normal' && `text--${style}`,
      color && `text--${color}`,
      align && `text--${align}`
    ]}
  >
    <slot />
  </p>
{/if}

<style>
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: var(--font-family-base);
    line-height: var(--line-height-heading);
    color: var(--text-color-base);
  }
  
  .h1 { font-size: 2.5rem; }
  .h2 { font-size: 2rem; }
  .h3 { font-size: 1.75rem; }
  .h4 { font-size: 1.5rem; }
  .h5 { font-size: 1.25rem; }
  .h6 { font-size: 1rem; }
  
  .text {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--text-color-base);
  }
  
  .text--small { font-size: var(--font-size-small); }
  .text--large { font-size: var(--font-size-large); }
  
  .text--bold { font-weight: var(--font-weight-bold); }
  .text--italic { font-style: italic; }
  .text--underline { text-decoration: underline; }
  .text--strikethrough { text-decoration: line-through; }
  
  .text--primary { color: var(--text-color-primary); }
  .text--secondary { color: var(--text-color-secondary); }
  .text--success { color: var(--text-color-success); }
  .text--warning { color: var(--text-color-warning); }
  .text--error { color: var(--text-color-error); }
  
  .text--left { text-align: left; }
  .text--center { text-align: center; }
  .text--right { text-align: right; }
  .text--justify { text-align: justify; }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Typography from '../components/Typography.astro';
---

<Typography variant="h1" color="primary">
  Überschrift
</Typography>

<Typography variant="text" size="large" weight="bold">
  Wichtiger Text
</Typography>

<Typography variant="text" style="italic" color="success">
  Erfolgsmeldung
</Typography>
``` 
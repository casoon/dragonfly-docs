# Layout

Die Layout-Komponenten der Casoon UI Library bieten flexible und responsive Layout-Strukturen für moderne Webanwendungen.

## Container

```html
<div class="container">
  <div class="content">
    <!-- Inhalt -->
  </div>
</div>
```

### Container Varianten

```html
<!-- Fluid Container -->
<div class="container container--fluid">
  <div class="content">
    <!-- Inhalt -->
  </div>
</div>

<!-- Fixed Container -->
<div class="container container--fixed">
  <div class="content">
    <!-- Inhalt -->
  </div>
</div>
```

## Grid

```html
<div class="grid">
  <div class="grid__item grid__item--6">6 Spalten</div>
  <div class="grid__item grid__item--6">6 Spalten</div>
</div>
```

### Grid Varianten

```html
<!-- Responsive Grid -->
<div class="grid">
  <div class="grid__item grid__item--12 grid__item--md-6 grid__item--lg-4">
    Responsive Item
  </div>
</div>

<!-- Gap Grid -->
<div class="grid grid--gap-4">
  <div class="grid__item">Item mit Abstand</div>
</div>
```

## Flexbox

```html
<div class="flex">
  <div class="flex__item">Flex Item</div>
</div>
```

### Flexbox Varianten

```html
<!-- Direction -->
<div class="flex flex--column">
  <div class="flex__item">Vertikale Ausrichtung</div>
</div>

<!-- Justify Content -->
<div class="flex flex--justify-between">
  <div class="flex__item">Zwischen</div>
</div>

<!-- Align Items -->
<div class="flex flex--align-center">
  <div class="flex__item">Zentriert</div>
</div>
```

## CSS Variablen

```css
:root {
  --container-width: 1200px;
  --container-padding: 1rem;
  --grid-columns: 12;
  --grid-gap: 1rem;
  --flex-gap: 1rem;
}
```

## Best Practices

### Responsive Design

- Verwenden Sie Media Queries
- Implementieren Sie Breakpoints
- Testen Sie auf verschiedenen Geräten
- Optimieren Sie für mobile Ansicht

### Performance

- Minimieren Sie CSS
- Verwenden Sie CSS Grid und Flexbox
- Optimieren Sie Layout-Recalculations
- Vermeiden Sie unnötige Verschachtelungen

### Zugänglichkeit

- Verwenden Sie semantische HTML
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie Tastaturnavigation sicher
- Testen Sie mit Screenreadern

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/layout.module.css';

interface Props {
  variant?: 'container' | 'grid' | 'flex';
  fluid?: boolean;
  fixed?: boolean;
  columns?: number;
  gap?: number;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'stretch';
}

const {
  variant = 'container',
  fluid,
  fixed,
  columns,
  gap,
  direction,
  justify,
  align
} = Astro.props;
---

<div 
  class:list={[
    variant,
    fluid && `${variant}--fluid`,
    fixed && `${variant}--fixed`,
    columns && `${variant}--${columns}`,
    gap && `${variant}--gap-${gap}`,
    direction && `${variant}--${direction}`,
    justify && `${variant}--justify-${justify}`,
    align && `${variant}--align-${align}`
  ]}
>
  <slot />
</div>

<style>
  .container {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--container-padding);
  }
  
  .container--fluid {
    max-width: none;
  }
  
  .container--fixed {
    width: var(--container-width);
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gap);
  }
  
  .flex {
    display: flex;
    gap: var(--flex-gap);
  }
  
  .flex--column {
    flex-direction: column;
  }
  
  .flex--justify-between {
    justify-content: space-between;
  }
  
  .flex--align-center {
    align-items: center;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Layout from '../components/Layout.astro';
---

<Layout variant="container" fluid>
  <Layout variant="grid" columns="12" gap="4">
    <div>Grid Item 1</div>
    <div>Grid Item 2</div>
  </Layout>
  
  <Layout variant="flex" direction="row" justify="between" align="center">
    <div>Flex Item 1</div>
    <div>Flex Item 2</div>
  </Layout>
</Layout>
``` 
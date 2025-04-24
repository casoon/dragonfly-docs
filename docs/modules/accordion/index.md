# Accordion

Das Accordion ist eine Komponente für aufklappbare Bereiche in der Casoon UI Library.

## Verwendung

```html
<div class="accordion">
  <div class="accordion__item">
    <button class="accordion__button">
      <span class="accordion__title">Titel 1</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Inhalt 1</p>
    </div>
  </div>
  <div class="accordion__item">
    <button class="accordion__button">
      <span class="accordion__title">Titel 2</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Inhalt 2</p>
    </div>
  </div>
</div>
```

## Varianten

### Mit Icons

```html
<div class="accordion">
  <div class="accordion__item">
    <button class="accordion__button">
      <i class="icon-info"></i>
      <span class="accordion__title">Informationen</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Weitere Informationen</p>
    </div>
  </div>
</div>
```

### Mit Farben

```html
<div class="accordion accordion--primary">
  <div class="accordion__item">
    <button class="accordion__button">
      <span class="accordion__title">Primäres Accordion</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Inhalt</p>
    </div>
  </div>
</div>

<div class="accordion accordion--success">
  <div class="accordion__item">
    <button class="accordion__button">
      <span class="accordion__title">Erfolgs-Accordion</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Inhalt</p>
    </div>
  </div>
</div>
```

### Mit Animation

```html
<div class="accordion accordion--animated">
  <div class="accordion__item">
    <button class="accordion__button">
      <span class="accordion__title">Animiertes Accordion</span>
      <i class="accordion__icon"></i>
    </button>
    <div class="accordion__content">
      <p>Inhalt</p>
    </div>
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --accordion-border-color: #e0e0e0;
  --accordion-bg-color: #ffffff;
  --accordion-hover-color: #f5f5f5;
  --accordion-active-color: #007bff;
  --accordion-padding: 1rem;
  --accordion-transition: all 0.2s ease;
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
- Passen Sie das Accordion an mobile Geräte an
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
import 'casoon-ui-lib/modules/accordion.module.css';

interface Props {
  items: Array<{
    title: string;
    icon?: string;
    content: string;
  }>;
  color?: 'primary' | 'success' | 'warning' | 'error';
  animated?: boolean;
}

const { items, color, animated = false } = Astro.props;
---

<div class="accordion" class:list={[color && `accordion--${color}`, animated && 'accordion--animated']}>
  {items.map((item, index) => (
    <div class="accordion__item">
      <button class="accordion__button">
        {item.icon && <i class={item.icon}></i>}
        <span class="accordion__title">{item.title}</span>
        <i class="accordion__icon"></i>
      </button>
      <div class="accordion__content">
        {item.content}
      </div>
    </div>
  ))}
</div>

<style>
  .accordion__item {
    border: 1px solid var(--accordion-border-color);
    margin-bottom: 0.5rem;
  }
  
  .accordion__button {
    width: 100%;
    padding: var(--accordion-padding);
    background-color: var(--accordion-bg-color);
    border: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--accordion-transition);
  }
  
  .accordion__button:hover {
    background-color: var(--accordion-hover-color);
  }
  
  .accordion__button[aria-expanded="true"] {
    background-color: var(--accordion-active-color);
    color: white;
  }
  
  .accordion__content {
    padding: var(--accordion-padding);
    display: none;
  }
  
  .accordion__content[aria-hidden="false"] {
    display: block;
  }
  
  .accordion--animated .accordion__content {
    transition: var(--accordion-transition);
  }
  
  .accordion--animated .accordion__content[aria-hidden="false"] {
    animation: slide-down 0.3s ease;
  }
  
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Accordion from '../modules/Accordion.astro';

const items = [
  {
    title: 'Informationen',
    icon: 'icon-info',
    content: 'Weitere Informationen'
  },
  {
    title: 'Hilfe',
    icon: 'icon-help',
    content: 'Hilfe und Support'
  }
];
---

<Accordion
  items={items}
  color="primary"
  animated
/>
``` 
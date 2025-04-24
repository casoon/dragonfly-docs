# Card

Die Card-Komponente bietet eine flexible und anpassbare Kartenkomponente für die Casoon UI Library.

## Verwendung

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Kartentitel</h3>
  </div>
  <div class="card__body">
    <p>Karteninhalt</p>
  </div>
  <div class="card__footer">
    <button class="button">Aktion</button>
  </div>
</div>
```

## Varianten

### Mit Bild

```html
<div class="card">
  <div class="card__image">
    <img src="bild.jpg" alt="Beschreibung">
  </div>
  <div class="card__body">
    <h3 class="card__title">Kartentitel</h3>
    <p>Karteninhalt</p>
  </div>
</div>
```

### Mit Animation

```html
<div class="card card--animated">
  <div class="card__header">
    <h3 class="card__title">Kartentitel</h3>
  </div>
  <div class="card__body">
    <p>Karteninhalt</p>
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --card-bg-color: #ffffff;
  --card-text-color: #333333;
  --card-border-color: #e0e0e0;
  --card-border-radius: 0.5rem;
  --card-padding: 1rem;
  --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --card-transition: all 0.3s ease;
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
- Optimieren Sie die Darstellung auf mobilen Geräten
- Berücksichtigen Sie Touch-Targets

### Performance

- Minimieren Sie CSS
- Optimieren Sie Bilder
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/card.module.css';

interface Props {
  title: string;
  image?: string;
  animated?: boolean;
}

const { title, image, animated = false } = Astro.props;
---

<div 
  class="card"
  class:list={[animated && 'card--animated']}
>
  {#if image}
    <div class="card__image">
      <img src={image} alt={title} />
    </div>
  {/if}
  <div class="card__body">
    <h3 class="card__title">{title}</h3>
    <slot />
  </div>
</div>

<style>
  .card {
    background-color: var(--card-bg-color);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    overflow: hidden;
  }
  
  .card__image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .card__body {
    padding: var(--card-padding);
  }
  
  .card__title {
    margin: 0 0 0.5rem;
    color: var(--card-text-color);
  }
  
  .card--animated {
    transition: var(--card-transition);
  }
  
  .card--animated:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Card from '../modules/Card.astro';
---

<Card 
  title="Produktname"
  image="/images/produkt.jpg"
  animated
>
  <p>Produktbeschreibung</p>
  <button class="button">Kaufen</button>
</Card>
``` 
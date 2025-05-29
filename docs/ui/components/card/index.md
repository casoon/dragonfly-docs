# Card

The Card component provides a flexible and customizable card component for the Casoon UI Library.

## Usage

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card Content</p>
  </div>
  <div class="card__footer">
    <button class="button">Action</button>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card">
    <div class="card__header">
      <h3 class="card__title">Card Title</h3>
    </div>
    <div class="card__body">
      <p>Card Content</p>
    </div>
    <div class="card__footer">
      <button class="button">Action</button>
    </div>
  </div>
</div>

## Variants

### With Image

```html
<div class="card">
  <div class="card__image">
    <img src="image.jpg" alt="Description">
  </div>
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p>Card Content</p>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card">
    <div class="card__image">
      <img src="https://via.placeholder.com/400x200" alt="Placeholder Image">
    </div>
    <div class="card__body">
      <h3 class="card__title">Card Title</h3>
      <p>Card Content</p>
    </div>
  </div>
</div>

### With Animation

```html
<div class="card card--animated">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card Content</p>
  </div>
</div>
```

<div class="example-wrapper">
  <div class="card card--animated">
    <div class="card__header">
      <h3 class="card__title">Animated Card</h3>
    </div>
    <div class="card__body">
      <p>Hover over this card to see the animation effect</p>
    </div>
  </div>
</div>

## Importing Modules

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Card module */
@import '@casoon/ui-lib/components/card.css';
```

## CSS Variables

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

### Accessibility

- Use semantic HTML elements
- Add ARIA attributes
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Optimize display on mobile devices
- Consider touch targets

### Performance

- Minimize CSS
- Optimize images
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import '@casoon/ui-lib/components/card.css';
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

Usage in an Astro component:

```astro
---
import Card from '../components/Card.astro';
---

<Card 
  title="Product Name"
  image="/images/product.jpg"
  animated
>
  <p>Product description</p>
  <button class="button">Buy</button>
</Card>
``` 
# Dropdown

Das Dropdown ist eine Komponente für Auswahlmenüs in der Casoon UI Library.

## Verwendung

```html
<div class="dropdown">
  <button class="dropdown__button">
    <span class="dropdown__text">Auswählen</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Option 1</a>
    <a href="#" class="dropdown__item">Option 2</a>
    <a href="#" class="dropdown__item">Option 3</a>
  </div>
</div>
```

## Varianten

### Mit Icons

```html
<div class="dropdown">
  <button class="dropdown__button">
    <i class="icon-user"></i>
    <span class="dropdown__text">Benutzer</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">
      <i class="icon-settings"></i>
      <span>Einstellungen</span>
    </a>
    <a href="#" class="dropdown__item">
      <i class="icon-logout"></i>
      <span>Abmelden</span>
    </a>
  </div>
</div>
```

### Mit Farben

```html
<div class="dropdown dropdown--primary">
  <button class="dropdown__button">
    <span class="dropdown__text">Primäres Dropdown</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Option 1</a>
    <a href="#" class="dropdown__item">Option 2</a>
  </div>
</div>

<div class="dropdown dropdown--success">
  <button class="dropdown__button">
    <span class="dropdown__text">Erfolgs-Dropdown</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Option 1</a>
    <a href="#" class="dropdown__item">Option 2</a>
  </div>
</div>
```

### Mit Animation

```html
<div class="dropdown dropdown--animated">
  <button class="dropdown__button">
    <span class="dropdown__text">Animiertes Dropdown</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Option 1</a>
    <a href="#" class="dropdown__item">Option 2</a>
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --dropdown-bg-color: #ffffff;
  --dropdown-border-color: #e0e0e0;
  --dropdown-hover-color: #f5f5f5;
  --dropdown-active-color: #007bff;
  --dropdown-padding: 0.5rem 1rem;
  --dropdown-transition: all 0.2s ease;
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
- Passen Sie das Dropdown an mobile Geräte an
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
import 'casoon-ui-lib/modules/dropdown.module.css';

interface Props {
  text: string;
  icon?: string;
  items: Array<{
    text: string;
    icon?: string;
    href: string;
  }>;
  color?: 'primary' | 'success' | 'warning' | 'error';
  animated?: boolean;
}

const { text, icon, items, color, animated = false } = Astro.props;
---

<div class="dropdown" class:list={[color && `dropdown--${color}`, animated && 'dropdown--animated']}>
  <button class="dropdown__button">
    {icon && <i class={icon}></i>}
    <span class="dropdown__text">{text}</span>
    <i class="dropdown__icon"></i>
  </button>
  <div class="dropdown__menu">
    {items.map((item) => (
      <a href={item.href} class="dropdown__item">
        {item.icon && <i class={item.icon}></i>}
        <span>{item.text}</span>
      </a>
    ))}
  </div>
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown__button {
    display: flex;
    align-items: center;
    padding: var(--dropdown-padding);
    background-color: var(--dropdown-bg-color);
    border: 1px solid var(--dropdown-border-color);
    cursor: pointer;
    transition: var(--dropdown-transition);
  }
  
  .dropdown__button:hover {
    background-color: var(--dropdown-hover-color);
  }
  
  .dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background-color: var(--dropdown-bg-color);
    border: 1px solid var(--dropdown-border-color);
    display: none;
  }
  
  .dropdown__menu[aria-hidden="false"] {
    display: block;
  }
  
  .dropdown__item {
    display: flex;
    align-items: center;
    padding: var(--dropdown-padding);
    color: inherit;
    text-decoration: none;
    transition: var(--dropdown-transition);
  }
  
  .dropdown__item:hover {
    background-color: var(--dropdown-hover-color);
  }
  
  .dropdown--animated .dropdown__menu {
    transition: var(--dropdown-transition);
  }
  
  .dropdown--animated .dropdown__menu[aria-hidden="false"] {
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
import Dropdown from '../components/Dropdown.astro';

const items = [
  {
    text: 'Einstellungen',
    icon: 'icon-settings',
    href: '/settings'
  },
  {
    text: 'Abmelden',
    icon: 'icon-logout',
    href: '/logout'
  }
];
---

<Dropdown
  text="Benutzer"
  icon="icon-user"
  items={items}
  color="primary"
  animated
/>
``` 
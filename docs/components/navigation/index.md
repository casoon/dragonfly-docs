# Navigation

Die Navigation-Komponente ist eine flexible und anpassbare Navigationsleiste in der Casoon UI Library.

## Verwendung

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">Startseite</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Über uns</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Kontakt</a>
    </li>
  </ul>
</nav>
```

## Varianten

### Mit Dropdown

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">Startseite</a>
    </li>
    <li class="nav__item nav__item--dropdown">
      <a href="#" class="nav__link">
        Produkte
        <i class="icon-chevron-down"></i>
      </a>
      <ul class="nav__dropdown">
        <li class="nav__dropdown-item">
          <a href="#" class="nav__dropdown-link">Produkt 1</a>
        </li>
        <li class="nav__dropdown-item">
          <a href="#" class="nav__dropdown-link">Produkt 2</a>
        </li>
      </ul>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Kontakt</a>
    </li>
  </ul>
</nav>
```

### Mit Icons

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">
        <i class="icon-home"></i>
        Startseite
      </a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">
        <i class="icon-user"></i>
        Über uns
      </a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">
        <i class="icon-envelope"></i>
        Kontakt
      </a>
    </li>
  </ul>
</nav>
```

### Mit Animation

```html
<nav class="nav nav--animated">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">
        Startseite
        <span class="nav__underline"></span>
      </a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">
        Über uns
        <span class="nav__underline"></span>
      </a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">
        Kontakt
        <span class="nav__underline"></span>
      </a>
    </li>
  </ul>
</nav>
```

## CSS Variablen

```css
:root {
  --nav-bg-color: #ffffff;
  --nav-text-color: #333333;
  --nav-hover-color: #f0f0f0;
  --nav-active-color: #e0e0e0;
  --nav-padding: 1rem;
  --nav-transition: all 0.2s ease;
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
- Passen Sie die Navigation an mobile Geräte an
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
import 'casoon-ui-lib/modules/navigation.module.css';

interface Props {
  items: Array<{
    label: string;
    href: string;
    icon?: string;
    dropdown?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  animated?: boolean;
}

const { items, animated = false } = Astro.props;
---

<nav class="nav" class:list={[animated && 'nav--animated']}>
  <ul class="nav__list">
    {#each items as item}
      <li class="nav__item" class:list={[item.dropdown && 'nav__item--dropdown']}>
        <a href={item.href} class="nav__link">
          {#if item.icon}
            <i class={item.icon}></i>
          {/if}
          {item.label}
          {#if item.dropdown}
            <i class="icon-chevron-down"></i>
          {/if}
          {#if animated}
            <span class="nav__underline"></span>
          {/if}
        </a>
        {#if item.dropdown}
          <ul class="nav__dropdown">
            {#each item.dropdown as dropdownItem}
              <li class="nav__dropdown-item">
                <a href={dropdownItem.href} class="nav__dropdown-link">
                  {dropdownItem.label}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav {
    background-color: var(--nav-bg-color);
    padding: var(--nav-padding);
  }
  
  .nav__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav__item {
    position: relative;
  }
  
  .nav__link {
    color: var(--nav-text-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--nav-transition);
  }
  
  .nav__link:hover {
    background-color: var(--nav-hover-color);
  }
  
  .nav__item--dropdown .nav__link {
    padding-right: 2rem;
  }
  
  .nav__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--nav-bg-color);
    min-width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
  }
  
  .nav__item--dropdown:hover .nav__dropdown {
    display: block;
  }
  
  .nav__dropdown-item {
    list-style: none;
  }
  
  .nav__dropdown-link {
    color: var(--nav-text-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    transition: var(--nav-transition);
  }
  
  .nav__dropdown-link:hover {
    background-color: var(--nav-hover-color);
  }
  
  .nav--animated .nav__link {
    position: relative;
  }
  
  .nav__underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--nav-text-color);
    transition: var(--nav-transition);
  }
  
  .nav__link:hover .nav__underline {
    width: 100%;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Navigation from '../components/Navigation.astro';

const navItems = [
  {
    label: 'Startseite',
    href: '/',
    icon: 'icon-home'
  },
  {
    label: 'Produkte',
    href: '/products',
    icon: 'icon-box',
    dropdown: [
      {
        label: 'Produkt 1',
        href: '/products/1'
      },
      {
        label: 'Produkt 2',
        href: '/products/2'
      }
    ]
  },
  {
    label: 'Kontakt',
    href: '/contact',
    icon: 'icon-envelope'
  }
];
---

<Navigation
  items={navItems}
  animated
/> 
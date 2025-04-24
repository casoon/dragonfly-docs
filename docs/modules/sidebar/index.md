# Sidebar

Die Sidebar ist eine vertikale Navigationsleiste, die typischerweise am linken oder rechten Rand einer Anwendung platziert wird.

## Verwendung

```html
<aside class="sidebar">
  <nav class="sidebar__nav">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <a href="#" class="sidebar__link">
          <span class="sidebar__icon">🏠</span>
          <span class="sidebar__text">Startseite</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="#" class="sidebar__link">
          <span class="sidebar__icon">📊</span>
          <span class="sidebar__text">Dashboard</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="#" class="sidebar__link">
          <span class="sidebar__icon">⚙️</span>
          <span class="sidebar__text">Einstellungen</span>
        </a>
      </li>
    </ul>
  </nav>
</aside>
```

## Varianten

### Mit Untermenüs

```html
<aside class="sidebar">
  <nav class="sidebar__nav">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <a href="#" class="sidebar__link">
          <span class="sidebar__icon">🏠</span>
          <span class="sidebar__text">Startseite</span>
        </a>
      </li>
      <li class="sidebar__item">
        <button class="sidebar__link" aria-expanded="false">
          <span class="sidebar__icon">📊</span>
          <span class="sidebar__text">Dashboard</span>
          <span class="sidebar__arrow">▼</span>
        </button>
        <ul class="sidebar__submenu">
          <li class="sidebar__item">
            <a href="#" class="sidebar__link">Übersicht</a>
          </li>
          <li class="sidebar__item">
            <a href="#" class="sidebar__link">Statistiken</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>
```

### Mit Animation

```html
<aside class="sidebar sidebar--animated">
  <nav class="sidebar__nav">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <a href="#" class="sidebar__link">
          <span class="sidebar__icon">🏠</span>
          <span class="sidebar__text">Startseite</span>
        </a>
      </li>
    </ul>
  </nav>
</aside>
```

## CSS Variablen

```css
:root {
  --sidebar-width: 250px;
  --sidebar-bg-color: #ffffff;
  --sidebar-text-color: #333333;
  --sidebar-hover-color: #f5f5f5;
  --sidebar-active-color: #e0e0e0;
  --sidebar-border-color: #e0e0e0;
  --sidebar-transition: all 0.3s ease;
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
- Optimieren Sie JavaScript
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/sidebar.module.css';

interface Props {
  items: Array<{
    icon: string;
    text: string;
    href?: string;
    submenu?: Array<{
      text: string;
      href: string;
    }>;
  }>;
  animated?: boolean;
}

const { items, animated = false } = Astro.props;
---

<aside class="sidebar" class:list={[animated && 'sidebar--animated']}>
  <nav class="sidebar__nav">
    <ul class="sidebar__list">
      {#each items as item}
        <li class="sidebar__item">
          {#if item.submenu}
            <button 
              class="sidebar__link" 
              aria-expanded="false"
            >
              <span class="sidebar__icon">{item.icon}</span>
              <span class="sidebar__text">{item.text}</span>
              <span class="sidebar__arrow">▼</span>
            </button>
            <ul class="sidebar__submenu">
              {#each item.submenu as subitem}
                <li class="sidebar__item">
                  <a href={subitem.href} class="sidebar__link">
                    {subitem.text}
                  </a>
                </li>
              {/each}
            </ul>
          {:else}
            <a href={item.href} class="sidebar__link">
              <span class="sidebar__icon">{item.icon}</span>
              <span class="sidebar__text">{item.text}</span>
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  .sidebar {
    width: var(--sidebar-width);
    background-color: var(--sidebar-bg-color);
    border-right: 1px solid var(--sidebar-border-color);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    transition: var(--sidebar-transition);
  }
  
  .sidebar__nav {
    padding: 1rem 0;
  }
  
  .sidebar__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar__item {
    margin: 0.25rem 0;
  }
  
  .sidebar__link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: var(--sidebar-text-color);
    text-decoration: none;
    transition: var(--sidebar-transition);
  }
  
  .sidebar__link:hover {
    background-color: var(--sidebar-hover-color);
  }
  
  .sidebar__icon {
    margin-right: 0.75rem;
  }
  
  .sidebar__arrow {
    margin-left: auto;
  }
  
  .sidebar__submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: var(--sidebar-transition);
  }
  
  .sidebar__item[aria-expanded="true"] .sidebar__submenu {
    max-height: 500px;
  }
  
  .sidebar--animated .sidebar__link {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .sidebar--animated .sidebar__link:nth-child(1) {
    transition-delay: 0.1s;
  }
  
  .sidebar--animated .sidebar__link:nth-child(2) {
    transition-delay: 0.2s;
  }
  
  .sidebar--animated .sidebar__link:nth-child(3) {
    transition-delay: 0.3s;
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Sidebar from '../modules/Sidebar.astro';

const items = [
  {
    icon: '🏠',
    text: 'Startseite',
    href: '/'
  },
  {
    icon: '📊',
    text: 'Dashboard',
    submenu: [
      {
        text: 'Übersicht',
        href: '/dashboard/overview'
      },
      {
        text: 'Statistiken',
        href: '/dashboard/stats'
      }
    ]
  }
];
---

<Sidebar items={items} animated />
``` 
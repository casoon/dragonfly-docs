# Tabs

Die Tabs sind eine Komponente für Registerkarten in der Casoon UI Library.

## Verwendung

```html
<div class="tabs">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
    <button class="tabs__button">Tab 3</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Inhalt von Tab 1
    </div>
    <div class="tabs__pane">
      Inhalt von Tab 2
    </div>
    <div class="tabs__pane">
      Inhalt von Tab 3
    </div>
  </div>
</div>
```

## Varianten

### Mit Icons

```html
<div class="tabs">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">
      <i class="icon-home"></i>
      <span>Startseite</span>
    </button>
    <button class="tabs__button">
      <i class="icon-settings"></i>
      <span>Einstellungen</span>
    </button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Inhalt der Startseite
    </div>
    <div class="tabs__pane">
      Inhalt der Einstellungen
    </div>
  </div>
</div>
```

### Mit Farben

```html
<div class="tabs tabs--primary">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Inhalt von Tab 1
    </div>
    <div class="tabs__pane">
      Inhalt von Tab 2
    </div>
  </div>
</div>
```

### Mit Animation

```html
<div class="tabs tabs--animated">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Inhalt von Tab 1
    </div>
    <div class="tabs__pane">
      Inhalt von Tab 2
    </div>
  </div>
</div>
```

## CSS Variablen

```css
:root {
  --tabs-border-color: #e0e0e0;
  --tabs-active-color: #007bff;
  --tabs-hover-color: #f5f5f5;
  --tabs-padding: 1rem;
  --tabs-transition: all 0.2s ease;
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
- Passen Sie die Tabs an mobile Geräte an
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
import 'casoon-ui-lib/modules/tabs.module.css';

interface Props {
  tabs: Array<{
    label: string;
    icon?: string;
    content: string;
  }>;
  color?: 'primary' | 'success' | 'warning' | 'error';
  animated?: boolean;
}

const { tabs, color, animated = false } = Astro.props;
---

<div class="tabs" class:list={[color && `tabs--${color}`, animated && 'tabs--animated']}>
  <div class="tabs__nav">
    {tabs.map((tab, index) => (
      <button
        class:list={['tabs__button', index === 0 && 'tabs__button--active']}
        data-tab={index}
      >
        {tab.icon && <i class={tab.icon}></i>}
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
  <div class="tabs__content">
    {tabs.map((tab, index) => (
      <div
        class:list={['tabs__pane', index === 0 && 'tabs__pane--active']}
        data-tab={index}
      >
        {tab.content}
      </div>
    ))}
  </div>
</div>

<style>
  .tabs__nav {
    display: flex;
    border-bottom: 1px solid var(--tabs-border-color);
  }
  
  .tabs__button {
    padding: var(--tabs-padding);
    border: none;
    background: none;
    cursor: pointer;
    transition: var(--tabs-transition);
  }
  
  .tabs__button:hover {
    background-color: var(--tabs-hover-color);
  }
  
  .tabs__button--active {
    color: var(--tabs-active-color);
    border-bottom: 2px solid var(--tabs-active-color);
  }
  
  .tabs__pane {
    display: none;
    padding: var(--tabs-padding);
  }
  
  .tabs__pane--active {
    display: block;
  }
  
  .tabs--animated .tabs__pane {
    animation: fade-in 0.3s ease;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
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
import Tabs from '../modules/Tabs.astro';

const tabs = [
  {
    label: 'Startseite',
    icon: 'icon-home',
    content: 'Willkommen auf der Startseite'
  },
  {
    label: 'Einstellungen',
    icon: 'icon-settings',
    content: 'Hier können Sie die Einstellungen anpassen'
  }
];
---

<Tabs
  tabs={tabs}
  color="primary"
  animated
/> 
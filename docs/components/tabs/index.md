# Tabs

The Tabs are a component for tabbed content in the Casoon UI Library.

## Usage

```html
<div class="tabs">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
    <button class="tabs__button">Tab 3</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Content of Tab 1
    </div>
    <div class="tabs__pane">
      Content of Tab 2
    </div>
    <div class="tabs__pane">
      Content of Tab 3
    </div>
  </div>
</div>
```

## Variants

### With Icons

```html
<div class="tabs">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">
      <i class="icon-home"></i>
      <span>Home</span>
    </button>
    <button class="tabs__button">
      <i class="icon-settings"></i>
      <span>Settings</span>
    </button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Home content
    </div>
    <div class="tabs__pane">
      Settings content
    </div>
  </div>
</div>
```

### With Colors

```html
<div class="tabs tabs--primary">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Content of Tab 1
    </div>
    <div class="tabs__pane">
      Content of Tab 2
    </div>
  </div>
</div>
```

### With Animation

```html
<div class="tabs tabs--animated">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active">Tab 1</button>
    <button class="tabs__button">Tab 2</button>
  </div>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">
      Content of Tab 1
    </div>
    <div class="tabs__pane">
      Content of Tab 2
    </div>
  </div>
</div>
```

## CSS Variables

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

### Accessibility

- Use semantic HTML elements
- Add ARIA attributes
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adapt tabs for mobile devices
- Optimize display on small screens

### Performance

- Minimize CSS
- Optimize loading time
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import '@casoon/ui-lib/components/tabs.css';

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

Usage in an Astro component:

```astro
---
import Tabs from '../components/Tabs.astro';

const tabs = [
  {
    label: 'Home',
    icon: 'icon-home',
    content: 'Welcome to the home page'
  },
  {
    label: 'Settings',
    icon: 'icon-settings',
    content: 'Here you can adjust the settings'
  }
];
---

<Tabs
  tabs={tabs}
  color="primary"
  animated
/> 
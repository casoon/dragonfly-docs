---
title: Modular Component System
category: Guide
---

# Modular Component System

The modular component system of the Casoon UI Library offers an extensive collection of reusable UI components that are organized through a structured layer system. Each component is defined in its own layer, which increases isolation, maintainability, and flexibility.

## Basic Principle

The component system relies on a modular design where:

1. Each component is defined in its own CSS file
2. Each component has its own CSS layer
3. The overall structure is centrally managed in `modules.css`
4. Everything is automatically loaded by importing `core.css`

## Importing

The simplest way to use the entire component system:

```css
@import '@casoon/ui-lib/core.css';
```

Or for selective use of specific components:

```css
/* Nur die Komponenten importieren, die Sie wirklich benötigen */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/components/card.css';
```

## Available Components

The component system includes over 30 UI components, divided into four main categories:

### Input and Form Components

These components provide interactive elements for user input:

| Component | Description | CSS Classes |
|------------|--------------|-------------|
| Button | Buttons in various styles | `.button`, `.button.primary`, `.button.secondary` |
| Checkbox | Selection boxes for multiple options | `.checkbox`, `.checkbox__input`, `.checkbox__label` |
| Input | Text fields and other input types | `.input`, `.input--large`, `.input--rounded` |
| Radio | Option fields for mutually exclusive selection | `.radio`, `.radio__input`, `.radio__label` |
| Select | Selection menus | `.select`, `.select--multiple` |
| Slider | Sliders for numeric values | `.slider`, `.slider__track`, `.slider__thumb` |
| Switch | Toggles for on/off states | `.switch`, `.switch__slider` |
| Textarea | Multi-line text fields | `.textarea`, `.textarea--resizable` |
| File | File upload elements | `.file-input`, `.file-label` |

### Layout Components

These components provide structural elements for page layout:

| Component | Description | CSS Classes |
|------------|--------------|-------------|
| Card | Card containers for content blocks | `.card`, `.card__header`, `.card__body`, `.card__footer` |
| Modal | Dialog windows that float above the content | `.modal`, `.modal__content`, `.modal__close` |
| Tabs | Tab navigation | `.tabs`, `.tab-list`, `.tab-panel` |
| Footer | Page footer area | `.footer`, `.footer__content` |
| Header | Header area | `.header`, `.header__logo`, `.header__nav` |
| Sidebar | Sidebars | `.sidebar`, `.sidebar--left`, `.sidebar--right` |
| Content | Structured content containers | `.content`, `.content__section` |
| Widget | Reusable content modules | `.widget`, `.widget__header`, `.widget__body` |

### Feedback Components

These components communicate status and information:

| Component | Description | CSS Classes |
|------------|--------------|-------------|
| Alert | Highlighted information or warning messages | `.alert`, `.alert--success`, `.alert--error` |
| Badge | Small labels for status or counts | `.badge`, `.badge--primary`, `.badge--pill` |
| Notification | Temporary notifications | `.notification`, `.notification--info` |
| Progress | Progress indicators | `.progress`, `.progress__bar` |
| Skeleton | Placeholders for loading content | `.skeleton`, `.skeleton-text`, `.skeleton-circle` |
| Spinner | Loading indicators | `.spinner`, `.spinner--large` |
| Toast | Briefly displayed notifications | `.toast`, `.toast--success` |
| Tooltip | Help texts on hover or focus | `.tooltip`, `.tooltip--top` |

### Navigation and Interaction Components

These components support navigation and complex interactions:

| Component | Description | CSS Classes |
|------------|--------------|-------------|
| Avatar | User images or icons | `.avatar`, `.avatar--large`, `.avatar-group` |
| Chip | Compact elements with information or actions | `.chip`, `.chip--removable` |
| Hamburger | Mobile menu icons | `.hamburger`, `.hamburger--active` |
| Table | Data grids and tables | `.table`, `.table--striped`, `.table--hover` |
| Tags | Keywords or category markings | `.tag`, `.tag--primary`, `.tag--removable` |
| Wizard | Step-by-step guides or forms | `.wizard`, `.wizard-step`, `.wizard-progress` |

## Component Structure

Each component follows a consistent structure:

### BEM Naming Convention

The components use the BEM methodology (Block, Element, Modifier):

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--primary { }
.card--highlighted { }
```

### Theme Capability

All components support the theme system:

```css
.button {
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
}

.button--primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
}

[data-theme="dark"] .button {
  /* Adjustments for Dark Mode */
}
```

### Responsive Design

All components are fully responsive with:

1. Fluid sizes based on relative units (rem, em)
2. Flexbox and Grid-based layout
3. Container queries for component-based responsiveness
4. Breakpoint utilities for complex adjustments

### Accessibility

The components are optimized for accessibility:

1. Semantic HTML structure
2. ARIA attributes for complex components
3. Keyboard navigation
4. Sufficient contrast ratios
5. Screen reader support

## Example Usage

### Simple Button Component

```html
<button class="button primary">Primary Button</button>
<button class="button secondary">Secondary Button</button>
<button class="button large">Large Button</button>
<button class="button primary rounded">Rounded Primary Button</button>
```

### Card Component with Content

```html
<div class="card">
  <div class="card__header">Card Title</div>
  <div class="card__body">
    <p>Card content...</p>
    <button class="button primary">Action</button>
  </div>
  <div class="card__footer">Card Footer</div>
</div>
```

### Form with Various Input Components

```html
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input" placeholder="Enter name">
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="input" placeholder="Enter email">
  </div>
  
  <button type="submit" class="button primary">Submit</button>
</form>
```

### Notification System

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">
    <h4 class="alert__title">Success!</h4>
    <p class="alert__message">The operation was completed successfully.</p>
  </div>
  <button class="alert__close">&times;</button>
</div>

<div class="toast toast--info">
  <div class="toast__content">New message received</div>
</div>

<div class="notification notification--warning">
  <div class="notification__title">Attention</div>
  <div class="notification__message">Your session will expire in 5 minutes.</div>
  <button class="notification__action">Extend</button>
</div>
```

## Component Combinations

The components are designed for seamless combination with each other:

### Dashboard Layout

```html
<div class="layout">
  <header class="header">
    <div class="header__logo">Logo</div>
    <nav class="header__nav">
      <a href="#" class="header__link header__link--active">Dashboard</a>
      <a href="#" class="header__link">Settings</a>
      <a href="#" class="header__link">Profile</a>
    </nav>
    <div class="header__actions">
      <div class="badge badge--notification">3</div>
      <div class="avatar">JS</div>
    </div>
  </header>
  
  <div class="layout__content">
    <aside class="sidebar">
      <nav class="sidebar__nav">
        <a href="#" class="sidebar__link sidebar__link--active">Overview</a>
        <a href="#" class="sidebar__link">Analytics</a>
        <a href="#" class="sidebar__link">Reports</a>
        <a href="#" class="sidebar__link">Settings</a>
      </nav>
    </aside>
    
    <main class="content">
      <div class="grid">
        <div class="grid__item">
          <div class="card">
            <div class="card__header">Statistics</div>
            <div class="card__body">
              <div class="progress">
                <div class="progress__bar" style="width: 75%">75%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid__item">
          <div class="card">
            <div class="card__header">Recent Activities</div>
            <div class="card__body">
              <div class="list">
                <div class="list__item">
                  <div class="avatar avatar--sm">JD</div>
                  <div class="list__content">New user registered</div>
                  <div class="badge badge--success">New</div>
                </div>
                <div class="list__item">
                  <div class="avatar avatar--sm">AS</div>
                  <div class="list__content">Report generated</div>
                  <div class="badge">Info</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
```

## Extending the Component System

You can extend the component system with your own components:

```css
/* In your own CSS file */
@layer components.my-component {
  .my-component {
    /* Component styles */
  }
  
  .my-component__header {
    /* Element styles */
  }
  
  .my-component--variant {
    /* Modifier styles */
  }
}
```

## Best Practices

1. **Follow the BEM methodology** for consistent naming
2. **Use CSS variables** for customization
3. **Respect the layer system** when extending components
4. **Test for accessibility** with screen readers and keyboard navigation
5. **Ensure responsiveness** on all device sizes
6. **Document your components** for team members

## Further Information

For more information on specific components, see the individual component documentation:

- [Button Component](../components/button/)
- [Card Component](../components/card/)
- [Form Components](../components/forms/)
- [Layout Components](../components/layout/) 
---
title: Chip
category: Components
---

# Chip

The Chip component is a compact element that represents information, attributes, or actions. Chips enable users to capture information, apply filters, make selections, or trigger actions.

## Usage

```html
<div class="chip">
  <span class="chip__text">Tag</span>
</div>
```

## Importing Modules

```css
/* Required dependency */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Chip modules */
@import '@casoon/ui-lib/components/chip.css';
```

## Variants

### Standard Chip

```html
<div class="chip">
  <span class="chip__text">Standard Chip</span>
</div>
```

### Chip with Close Button

```html
<div class="chip">
  <span class="chip__text">Closable</span>
  <button class="chip__close" aria-label="Remove">×</button>
</div>
```

### Chip with Icon

```html
<div class="chip">
  <span class="chip__icon">🏷️</span>
  <span class="chip__text">With Icon</span>
</div>
```

### Chip with Icon and Close Button

```html
<div class="chip">
  <span class="chip__icon">🏷️</span>
  <span class="chip__text">Complete</span>
  <button class="chip__close" aria-label="Remove">×</button>
</div>
```

### Chip Colors

```html
<div class="chip chip--primary">
  <span class="chip__text">Primary</span>
</div>

<div class="chip chip--secondary">
  <span class="chip__text">Secondary</span>
</div>

<div class="chip chip--success">
  <span class="chip__text">Success</span>
</div>

<div class="chip chip--warning">
  <span class="chip__text">Warning</span>
</div>

<div class="chip chip--error">
  <span class="chip__text">Error</span>
</div>

<div class="chip chip--info">
  <span class="chip__text">Info</span>
</div>
```

### Outline Chips

```html
<div class="chip chip--outline chip--primary">
  <span class="chip__text">Primary Outline</span>
</div>

<div class="chip chip--outline chip--secondary">
  <span class="chip__text">Secondary Outline</span>
</div>
```

### Sizes

```html
<div class="chip chip--sm">
  <span class="chip__text">Small</span>
</div>

<div class="chip">
  <span class="chip__text">Standard</span>
</div>

<div class="chip chip--lg">
  <span class="chip__text">Large</span>
</div>
```

### Rounded or Pill Shape

```html
<div class="chip chip--rounded">
  <span class="chip__text">Rounded</span>
</div>

<div class="chip chip--pill">
  <span class="chip__text">Pill Shape</span>
</div>
```

## Chip Group

```html
<div class="chip-group">
  <div class="chip">
    <span class="chip__text">JavaScript</span>
  </div>
  <div class="chip">
    <span class="chip__text">CSS</span>
  </div>
  <div class="chip">
    <span class="chip__text">HTML</span>
  </div>
</div>
```

## Interactive Chips

For interactive chips, you can use one of the following patterns:

### As Button

```html
<button class="chip chip--interactive">
  <span class="chip__text">Clickable</span>
</button>
```

### As Link

```html
<a href="#" class="chip chip--interactive">
  <span class="chip__text">Link</span>
</a>
```

### As Checkbox

```html
<label class="chip chip--checkbox">
  <input type="checkbox" class="chip__input">
  <span class="chip__text">Select Option</span>
</label>
```

### As Radio Button

```html
<div class="chip-group chip-group--radio">
  <label class="chip chip--radio">
    <input type="radio" name="options" class="chip__input">
    <span class="chip__text">Option 1</span>
  </label>
  <label class="chip chip--radio">
    <input type="radio" name="options" class="chip__input">
    <span class="chip__text">Option 2</span>
  </label>
</div>
```

## CSS Variables

The Chip component uses the following CSS variables that you can customize:

```css
:root {
  --chip-height: 2rem;
  --chip-height-sm: 1.5rem;
  --chip-height-lg: 2.5rem;
  
  --chip-padding: 0.5rem 0.75rem;
  --chip-padding-sm: 0.25rem 0.5rem;
  --chip-padding-lg: 0.75rem 1rem;
  
  --chip-font-size: 0.875rem;
  --chip-font-size-sm: 0.75rem;
  --chip-font-size-lg: 1rem;
  
  --chip-border-radius: 0.25rem;
  --chip-border-radius-rounded: 0.5rem;
  --chip-border-radius-pill: 999px;
  
  --chip-bg: var(--color-gray-100);
  --chip-color: var(--color-gray-800);
  --chip-border-color: var(--color-gray-300);
  
  --chip-primary-bg: var(--color-primary-light);
  --chip-primary-color: var(--color-primary-dark);
  
  --chip-secondary-bg: var(--color-secondary-light);
  --chip-secondary-color: var(--color-secondary-dark);
  
  --chip-success-bg: var(--color-success-light);
  --chip-success-color: var(--color-success-dark);
  
  --chip-warning-bg: var(--color-warning-light);
  --chip-warning-color: var(--color-warning-dark);
  
  --chip-error-bg: var(--color-error-light);
  --chip-error-color: var(--color-error-dark);
  
  --chip-info-bg: var(--color-info-light);
  --chip-info-color: var(--color-info-dark);
  
  --chip-group-spacing: 0.5rem;
}
```

## JavaScript Functionality

### Closable Chips

Add JavaScript to implement closable chips:

```js
document.querySelectorAll('.chip__close').forEach(button => {
  button.addEventListener('click', function() {
    const chip = this.closest('.chip');
    chip.remove();
  });
});
```

## Best Practices

### Accessibility

- Use `aria-label` for buttons without visible text
- Ensure interactive chips have sufficient contrast
- Offer alternative interaction options for keyboard users
- Add Focus-Styles for keyboard navigation

### Responsive Design

- Use relative units for sizes
- Ensure chip groups work well on small screens
- Consider wrapping chip groups on mobile devices

## Application Examples

### Filter Chips

```html
<div class="filter">
  <label class="filter__label">Filter:</label>
  <div class="chip-group">
    <div class="chip chip--interactive chip--active">
      <span class="chip__text">All</span>
    </div>
    <div class="chip chip--interactive">
      <span class="chip__text">Available</span>
    </div>
    <div class="chip chip--interactive">
      <span class="chip__text">Sold Out</span>
    </div>
  </div>
</div>
```

### Tag List

```html
<div class="tags">
  <label class="tags__label">Tags:</label>
  <div class="chip-group">
    <div class="chip">
      <span class="chip__text">JavaScript</span>
      <button class="chip__close" aria-label="Remove JavaScript">×</button>
    </div>
    <div class="chip">
      <span class="chip__text">CSS</span>
      <button class="chip__close" aria-label="Remove CSS">×</button>
    </div>
    <div class="chip">
      <span class="chip__text">HTML</span>
      <button class="chip__close" aria-label="Remove HTML">×</button>
    </div>
  </div>
</div>
```

## Example

```html
<span class="chip">Basic Chip</span>
```

## Chip Variants

### Standard Chip

```html
<span class="chip">Standard</span>
```

### Primary Chip

```html
<span class="chip chip-primary">Primary</span>
```

### Secondary Chip

```html
<span class="chip chip-secondary">Secondary</span>
```

### Success Chip

```html
<span class="chip chip-success">Success</span>
```

### Warning Chip

```html
<span class="chip chip-warning">Warning</span>
```

### Error Chip

```html
<span class="chip chip-error">Error</span>
```

### Info Chip

```html
<span class="chip chip-info">Info</span>
```

## Chips with Icons

```html
<span class="chip">
  <span class="chip-icon"><span class="icon icon-user"></span></span>
  User
</span>

<span class="chip chip-success">
  <span class="chip-icon"><span class="icon icon-check"></span></span>
  Approved
</span>
```

## Selectable Chips

```html
<span class="chip chip-selectable">
  <input type="checkbox" id="chip1" class="chip-input">
  <label for="chip1" class="chip-label">Selectable</label>
</span>
```

## Deletable Chips

```html
<span class="chip">
  Deletable
  <button class="chip-delete" aria-label="Remove">
    <span class="icon icon-close"></span>
  </button>
</span>
```

## Chips with Avatars

```html
<span class="chip">
  <span class="chip-avatar">JD</span>
  John Doe
</span>
```

## Chips with Status

```html
<span class="chip">
  <span class="chip-status chip-status-online"></span>
  Online
</span>

<span class="chip">
  <span class="chip-status chip-status-offline"></span>
  Offline
</span>
```

## Chip Groups

```html
<div class="chip-group">
  <span class="chip">Design</span>
  <span class="chip">Development</span>
  <span class="chip">Marketing</span>
</div>
```

## Chips in Grid Layout

```vue
<Grid columns="3">
  <Card title="User Tags">
    <div class="chip-group">
      <span class="chip chip-primary">
        <span class="chip-avatar">JD</span>
        John Doe
        <button class="chip-delete" aria-label="Remove">
          <span class="icon icon-close"></span>
        </button>
      </span>
      <span class="chip chip-primary">
        <span class="chip-avatar">AS</span>
        Anna Smith
        <button class="chip-delete" aria-label="Remove">
          <span class="icon icon-close"></span>
        </button>
      </span>
      <Button size="small">Add</Button>
    </div>
  </Card>
  <Card title="Project Tags">
    <div class="chip-group">
      <span class="chip chip-secondary">Frontend</span>
      <span class="chip chip-secondary">Backend</span>
      <span class="chip chip-secondary">API</span>
      <Button size="small">More</Button>
    </div>
  </Card>
  <Card title="Status">
    <div class="chip-group">
      <span class="chip chip-success">Completed</span>
      <span class="chip chip-warning">In Progress</span>
      <span class="chip chip-error">Blocked</span>
      <span class="chip chip-info">Planned</span>
    </div>
    <Button>Change Status</Button>
  </Card>
</Grid>
```

## Customizable Chips

```vue
<Grid columns="2">
  <Card title="Filter">
    <div class="chip-group">
      <span class="chip chip-selectable">
        <input type="checkbox" id="filter1" class="chip-input" checked>
        <label for="filter1" class="chip-label">All</label>
      </span>
      <span class="chip chip-selectable">
        <input type="checkbox" id="filter2" class="chip-input">
        <label for="filter2" class="chip-label">Unread</label>
      </span>
      <span class="chip chip-selectable">
        <input type="checkbox" id="filter3" class="chip-input">
        <label for="filter3" class="chip-label">Favorites</label>
      </span>
    </div>
    <Button>Apply Filter</Button>
  </Card>
  <Card title="Notifications">
    <div class="chip-group">
      <span class="chip">
        <span class="chip-status chip-status-online"></span>
        system
        <button class="chip-delete" aria-label="Remove">
          <span class="icon icon-close"></span>
        </button>
      </span>
      <span class="chip">
        <span class="chip-status chip-status-offline"></span>
        Updates
        <button class="chip-delete" aria-label="Remove">
          <span class="icon icon-close"></span>
        </button>
      </span>
    </div>
    <Button>Settings</Button>
  </Card>
</Grid>
```

## Props

| Name       | Type    | Default  | Description                                       |
|------------|---------|----------|---------------------------------------------------|
| variant    | String  | 'default'| Chip variant: 'primary', 'secondary', etc.       |
| selectable | Boolean | false    | Whether the chip is selectable                      |
| deletable  | Boolean | false    | Whether the chip is deletable                        |
| disabled   | Boolean | false    | Whether the chip is disabled                         |
| icon       | String  | null     | Name of the icon to use                              |
| avatar     | String  | null     | Text for the avatar (max. 2 characters)              |
| status     | String  | null     | Status type: 'online', 'offline', etc.              |

## CSS Variables

```css
:root {
  --chip-height: 2rem;
  --chip-border-radius: var(--radius-full);
  --chip-padding: 0 var(--spacing-3);
  --chip-margin: var(--spacing-1);
  --chip-font-size: var(--font-size-sm);
  --chip-bg: var(--color-gray-100);
  --chip-color: var(--color-gray-800);
  --chip-border: 1px solid var(--color-gray-300);
  
  --chip-primary-bg: var(--color-primary-light);
  --chip-primary-color: var(--color-primary-dark);
  --chip-primary-border: 1px solid var(--color-primary);
  
  --chip-secondary-bg: var(--color-secondary-light);
  --chip-secondary-color: var(--color-secondary-dark);
  --chip-secondary-border: 1px solid var(--color-secondary);
  
  --chip-success-bg: var(--color-success-light);
  --chip-success-color: var(--color-success-dark);
  --chip-success-border: 1px solid var(--color-success);
  
  --chip-warning-bg: var(--color-warning-light);
  --chip-warning-color: var(--color-warning-dark);
  --chip-warning-border: 1px solid var(--color-warning);
  
  --chip-error-bg: var(--color-error-light);
  --chip-error-color: var(--color-error-dark);
  --chip-error-border: 1px solid var(--color-error);
  
  --chip-info-bg: var(--color-info-light);
  --chip-info-color: var(--color-info-dark);
  --chip-info-border: 1px solid var(--color-info);
  
  --chip-hover-opacity: 0.9;
  --chip-active-opacity: 0.8;
  --chip-disabled-opacity: 0.5;
}
```

## Best Practices

- Use Chips to represent attributes, tags, or filters
- Keep chip content short and concise
- For deletable chips, the delete button should be large enough for easy use
- Group related chips in chip groups
- Use different variants to convey meaning
- Ensure chips have sufficient contrast for good readability 
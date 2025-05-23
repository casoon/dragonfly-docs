# Avatar

The Avatar component of the Casoon UI Library is used to display user images or profile pictures.

## Usage

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
</div>
```

## Importing Modules

```css
/* Required dependency */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css'; /* or another theme */

/* Avatar module */
@import 'casoon-ui-lib/modules/avatar.module.css';
```

## Variants

### Sizes

```html
<div class="avatar avatar--xs">
  <img src="path/to/image.jpg" alt="Username">
</div>

<div class="avatar avatar--sm">
  <img src="path/to/image.jpg" alt="Username">
</div>

<div class="avatar">
  <!-- Standard size -->
  <img src="path/to/image.jpg" alt="Username">
</div>

<div class="avatar avatar--lg">
  <img src="path/to/image.jpg" alt="Username">
</div>

<div class="avatar avatar--xl">
  <img src="path/to/image.jpg" alt="Username">
</div>
```

### Shapes

```html
<!-- Default shape: Circle -->
<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
</div>

<!-- Square -->
<div class="avatar avatar--square">
  <img src="path/to/image.jpg" alt="Username">
</div>

<!-- Rounded square -->
<div class="avatar avatar--rounded">
  <img src="path/to/image.jpg" alt="Username">
</div>
```

### With Initials

When no image is available, initials can be displayed:

```html
<div class="avatar">
  <div class="avatar__initials">MM</div>
</div>
```

### With Status

```html
<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
  <span class="avatar__status avatar__status--online"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
  <span class="avatar__status avatar__status--offline"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
  <span class="avatar__status avatar__status--away"></span>
</div>

<div class="avatar">
  <img src="path/to/image.jpg" alt="Username">
  <span class="avatar__status avatar__status--busy"></span>
</div>
```

### Avatar Group

```html
<div class="avatar-group">
  <div class="avatar">
    <img src="path/to/image1.jpg" alt="User 1">
  </div>
  <div class="avatar">
    <img src="path/to/image2.jpg" alt="User 2">
  </div>
  <div class="avatar">
    <img src="path/to/image3.jpg" alt="User 3">
  </div>
  <div class="avatar">
    <div class="avatar__initials">+5</div>
  </div>
</div>
```

## CSS Variables

The Avatar component uses the following CSS variables that you can customize:

```css
:root {
  --avatar-size: 3rem;
  --avatar-size-xs: 1.5rem;
  --avatar-size-sm: 2rem;
  --avatar-size-lg: 4rem;
  --avatar-size-xl: 5rem;
  
  --avatar-border-radius: 50%;
  --avatar-border-radius-rounded: 0.5rem;
  --avatar-border-radius-square: 0;
  
  --avatar-border-width: 2px;
  --avatar-border-color: var(--color-white);
  
  --avatar-bg: var(--color-gray-200);
  --avatar-color: var(--color-gray-700);
  
  --avatar-status-size: 0.75rem;
  --avatar-status-border-width: 2px;
  --avatar-status-online-color: var(--color-success);
  --avatar-status-offline-color: var(--color-gray-500);
  --avatar-status-away-color: var(--color-warning);
  --avatar-status-busy-color: var(--color-error);
  
  --avatar-group-spacing: -0.75rem;
}
```

## Best Practices

### Accessibility

- Ensure all images have a meaningful `alt` attribute
- Use sufficient contrast between the background and the text of the initials
- Use `aria-label` or other ARIA attributes to provide additional information for screen readers

### Responsive Design

- Use relative units (rem, em) for the size of the avatar
- Adjust the size of the avatar for different screen sizes
- Ensure the avatar group is displayed correctly on small screens

## Integration with Other Components

The Avatar component can be well combined with other components:

### With Card

```html
<div class="card">
  <div class="card__header">
    <div class="avatar">
      <img src="path/to/image.jpg" alt="Username">
    </div>
    <div class="card__title">John Doe</div>
  </div>
  <div class="card__body">
    Card content
  </div>
</div>
```

### With Comment

```html
<div class="comment">
  <div class="comment__avatar">
    <div class="avatar">
      <img src="path/to/image.jpg" alt="Username">
    </div>
  </div>
  <div class="comment__content">
    <div class="comment__author">John Doe</div>
    <div class="comment__text">This is a comment.</div>
    <div class="comment__date">2 hours ago</div>
  </div>
</div>
``` 
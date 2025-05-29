---
title: Alert
category: Components
---

# Alert

The Alert component is used to display important messages and notifications.

## Example

```html
<div class="alert alert-info">
  <div class="alert-title">Information</div>
  <div class="alert-message">This is an information message.</div>
</div>
```

## Alert Types

### Standard Alert

```html
<div class="alert">
  <div class="alert-title">Standard</div>
  <div class="alert-message">This is a standard alert.</div>
</div>
```

### Info Alert

```html
<div class="alert alert-info">
  <div class="alert-title">Information</div>
  <div class="alert-message">This is an information message.</div>
</div>
```

### Success Alert

```html
<div class="alert alert-success">
  <div class="alert-title">Success</div>
  <div class="alert-message">The operation was completed successfully.</div>
</div>
```

### Warning Alert

```html
<div class="alert alert-warning">
  <div class="alert-title">Warning</div>
  <div class="alert-message">Please note this important notice.</div>
</div>
```

### Error Alert

```html
<div class="alert alert-error">
  <div class="alert-title">Error</div>
  <div class="alert-message">An error has occurred.</div>
</div>
```

## Alerts in Grid Layout

```vue
<Grid columns="2">
  <Card title="Success">
    <div class="alert alert-success">
      <div class="alert-title">Success</div>
      <div class="alert-message">The data has been saved.</div>
      <Button>Close</Button>
    </div>
  </Card>
  <Card title="Information">
    <div class="alert alert-info">
      <div class="alert-title">Information</div>
      <div class="alert-message">New updates available.</div>
      <Button>Update now</Button>
    </div>
  </Card>
  <Card title="Warning">
    <div class="alert alert-warning">
      <div class="alert-title">Warning</div>
      <div class="alert-message">Battery level low.</div>
      <Button>Ignore</Button>
    </div>
  </Card>
  <Card title="Error">
    <div class="alert alert-error">
      <div class="alert-title">Error</div>
      <div class="alert-message">Network connection lost.</div>
      <Button>Try again</Button>
    </div>
  </Card>
</Grid>
```

## With Icons

```html
<div class="alert alert-info">
  <div class="alert-icon">
    <span class="icon icon-info"></span>
  </div>
  <div class="alert-content">
    <div class="alert-title">Information</div>
    <div class="alert-message">This is an information message with an icon.</div>
  </div>
</div>
```

## Closable Alerts

```html
<div class="alert alert-warning">
  <div class="alert-content">
    <div class="alert-title">Warning</div>
    <div class="alert-message">This alert can be closed.</div>
  </div>
  <button class="alert-close">
    <span class="icon icon-close"></span>
  </button>
</div>
```

## Props

| Name    | Type    | Default  | Description                              |
|---------|---------|----------|------------------------------------------|
| type    | String  | 'default'| Alert type: 'info', 'success', 'warning', 'error' |
| title   | String  | ''       | Title of the alert                       |
| message | String  | ''       | Message text of the alert                |
| closable| Boolean | false    | Whether the alert is closable            |
| icon    | Boolean | true     | Whether an icon is displayed             |

## CSS Variables

```css
:root {
  --alert-border-radius: var(--radius-md);
  --alert-padding: var(--spacing-4);
  --alert-margin: var(--spacing-4) 0;
  --alert-font-size: var(--font-size-base);
  
  --alert-default-bg: var(--color-gray-100);
  --alert-default-color: var(--color-gray-800);
  --alert-default-border: var(--color-gray-300);
  
  --alert-info-bg: var(--color-blue-100);
  --alert-info-color: var(--color-blue-800);
  --alert-info-border: var(--color-blue-300);
  
  --alert-success-bg: var(--color-green-100);
  --alert-success-color: var(--color-green-800);
  --alert-success-border: var(--color-green-300);
  
  --alert-warning-bg: var(--color-yellow-100);
  --alert-warning-color: var(--color-yellow-800);
  --alert-warning-border: var(--color-yellow-300);
  
  --alert-error-bg: var(--color-red-100);
  --alert-error-color: var(--color-red-800);
  --alert-error-border: var(--color-red-300);
}
``` 
---
title: Notification Component
category: Components
---

# Notification Component

The Notification component provides system and user messages for important announcements and updates. Notifications inform users about events, activities, or status changes.

## Basic Usage

```html
<div class="notification">
  <div class="icon"><!-- Icon here --></div>
  <div class="content">
    <div class="title">New Message</div>
    <div class="message">You have received a new message.</div>
  </div>
  <button class="close">&times;</button>
</div>
```

## Variants

### Standard Notification

```html
<div class="notification">
  <div class="content">This is a standard notification</div>
  <button class="close">&times;</button>
</div>
```

### Info Notification

```html
<div class="notification info">
  <div class="icon">ℹ️</div>
  <div class="content">
    <div class="title">Information</div>
    <div class="message">This is an informational notification.</div>
  </div>
  <button class="close">&times;</button>
</div>
```

### Success Notification

```html
<div class="notification success">
  <div class="icon">✓</div>
  <div class="content">
    <div class="title">Success</div>
    <div class="message">Your changes have been saved successfully.</div>
  </div>
  <button class="close">&times;</button>
</div>
```

### Warning Notification

```html
<div class="notification warning">
  <div class="icon">⚠️</div>
  <div class="content">
    <div class="title">Warning</div>
    <div class="message">Your session will expire in 5 minutes.</div>
  </div>
  <button class="close">&times;</button>
</div>
```

### Error Notification

```html
<div class="notification error">
  <div class="icon">❌</div>
  <div class="content">
    <div class="title">Error</div>
    <div class="message">There was a problem processing your request.</div>
  </div>
  <button class="close">&times;</button>
</div>
```

## Positioning

### Top Right

```html
<div class="notification top-right">
  <div class="content">Notification in top right corner</div>
  <button class="close">&times;</button>
</div>
```

### Top Left

```html
<div class="notification top-left">
  <div class="content">Notification in top left corner</div>
  <button class="close">&times;</button>
</div>
```

### Bottom Right

```html
<div class="notification bottom-right">
  <div class="content">Notification in bottom right corner</div>
  <button class="close">&times;</button>
</div>
```

### Bottom Left

```html
<div class="notification bottom-left">
  <div class="content">Notification in bottom left corner</div>
  <button class="close">&times;</button>
</div>
```

## With Actions

```html
<div class="notification">
  <div class="content">
    <div class="title">New Request</div>
    <div class="message">John Doe wants to connect with you.</div>
  </div>
  <div class="actions">
    <button class="button small primary">Accept</button>
    <button class="button small">Decline</button>
  </div>
  <button class="close">&times;</button>
</div>
```

## With Timer

```html
<div class="notification with-timer">
  <div class="content">This notification will disappear in 5 seconds</div>
  <div class="timer"></div>
  <button class="close">&times;</button>
</div>
```

## Notification Center

```html
<div class="notification-center top-right">
  <div class="notification">
    <div class="content">First notification</div>
    <button class="close">&times;</button>
  </div>
  <div class="notification">
    <div class="content">Second notification</div>
    <button class="close">&times;</button>
  </div>
</div>
```

## Animation

### Slide In Animation

```html
<div class="notification animate-in">
  <div class="content">This notification slides in</div>
  <button class="close">&times;</button>
</div>
```

### Slide Out Animation

```html
<div class="notification animate-out">
  <div class="content">This notification slides out</div>
  <button class="close">&times;</button>
</div>
```

## Customization

The Notification component can be customized using CSS variables:

```css
:root {
  --color-gray-100: #f3f4f6;      /* Background for default notification */
  --color-gray-300: #d1d5db;      /* Border color for default notification */
  --color-success: #10b981;       /* Background for success notifications */
  --color-error: #ef4444;         /* Background for error notifications */
  --color-warning: #f59e0b;       /* Background for warning notifications */
  --color-info: #3b82f6;          /* Background for info notifications */
  --radius-md: 0.375rem;          /* Border radius for notifications */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Shadow for notifications */
  --font-size-sm: 0.875rem;       /* Font size for notification text */
  --z-index-notification: 1000;   /* z-index for positioned notifications */
}
```

## Accessibility

For better accessibility, consider these points:

- Use appropriate ARIA roles and attributes (`role="alert"`, `aria-live="polite"`)
- Provide a way to dismiss notifications (close button)
- Ensure sufficient color contrast between background and text
- Add meaningful titles and clear messages
- Consider making time-based notifications persist for users who need more time

## Best Practices

- Keep notifications brief and to the point
- Use appropriate colors to match the severity or type of notification
- Position notifications consistently throughout the application
- Allow users to dismiss notifications when appropriate
- For multiple notifications, consider using a notification center
- Use animations sparingly to avoid distracting users 
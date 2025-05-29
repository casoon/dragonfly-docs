---
title: Widget Component
category: Components
---

# Widget Component

The Widget component provides flexible boxes for dashboards and page layouts. Widgets are self-contained components that encapsulate specific functions or content.

## Basic Usage

```html
<div class="widget">
  <div class="header">Widget Title</div>
  <div class="body">Widget Content</div>
  <div class="footer">Widget Footer</div>
</div>
```

## Variants

### Standard Widget

```html
<div class="widget">
  <div class="header">Standard Widget</div>
  <div class="body">This is a standard widget with default styling.</div>
  <div class="footer">Widget footer</div>
</div>
```

### Primary Widget

```html
<div class="widget primary">
  <div class="header">Primary Widget</div>
  <div class="body">This widget uses the primary color theme.</div>
  <div class="footer">Widget footer</div>
</div>
```

### Secondary Widget

```html
<div class="widget secondary">
  <div class="header">Secondary Widget</div>
  <div class="body">This widget uses the secondary color theme.</div>
  <div class="footer">Widget footer</div>
</div>
```

### Light Widget

```html
<div class="widget light">
  <div class="header">Light Widget</div>
  <div class="body">This widget has a light color theme.</div>
  <div class="footer">Widget footer</div>
</div>
```

### Dark Widget

```html
<div class="widget dark">
  <div class="header">Dark Widget</div>
  <div class="body">This widget has a dark color theme.</div>
  <div class="footer">Widget footer</div>
</div>
```

## Size Variants

### Small Widget

```html
<div class="widget sm">
  <div class="header">Small Widget</div>
  <div class="body">This is a small sized widget.</div>
  <div class="footer">Footer</div>
</div>
```

### Medium Widget (Default)

```html
<div class="widget md">
  <div class="header">Medium Widget</div>
  <div class="body">This is a medium sized widget (default).</div>
  <div class="footer">Footer</div>
</div>
```

### Large Widget

```html
<div class="widget lg">
  <div class="header">Large Widget</div>
  <div class="body">This is a large sized widget with more padding and larger text.</div>
  <div class="footer">Footer</div>
</div>
```

### Full Width Widget

```html
<div class="widget full">
  <div class="header">Full Width Widget</div>
  <div class="body">This widget takes up the full width of its container.</div>
  <div class="footer">Footer</div>
</div>
```

## Widget States

### Loading Widget

```html
<div class="widget loading">
  <div class="header">Loading Widget</div>
  <div class="body">This widget is in a loading state with an animated indicator.</div>
  <div class="footer">Footer</div>
</div>
```

### Collapsed Widget

```html
<div class="widget collapsed">
  <div class="header">Collapsed Widget</div>
  <div class="body">This content is hidden when collapsed.</div>
  <div class="footer">This footer is also hidden when collapsed.</div>
</div>
```

### Highlighted Widget

```html
<div class="widget highlight">
  <div class="header">Highlighted Widget</div>
  <div class="body">This widget is highlighted to draw attention.</div>
  <div class="footer">Footer</div>
</div>
```

## Widget with Action Buttons

```html
<div class="widget">
  <div class="header">
    <h3 class="title">Statistics</h3>
    <div class="actions">
      <button class="action">Refresh</button>
      <button class="action">Collapse</button>
    </div>
  </div>
  <div class="body">
    <p>Widget content with statistics or data goes here.</p>
  </div>
  <div class="footer">Last updated: 5 minutes ago</div>
</div>
```

## Dashboard Layout Example

```html
<div class="dashboard-grid">
  <div class="widget">
    <div class="header">Users</div>
    <div class="body">1,234 active users</div>
  </div>
  
  <div class="widget">
    <div class="header">Revenue</div>
    <div class="body">$45,678</div>
  </div>
  
  <div class="widget">
    <div class="header">Traffic</div>
    <div class="body">12,345 visits</div>
  </div>
  
  <div class="widget full">
    <div class="header">Monthly Overview</div>
    <div class="body">Chart or detailed statistics could go here</div>
  </div>
</div>

<style>
  .dashboard-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .dashboard-grid .widget.full {
    grid-column: 1 / -1;
  }
</style>
```

## Customization

The Widget component can be customized using CSS variables:

```css
:root {
  --color-white: #ffffff;            /* Background color */
  --color-gray-50: #f9fafb;          /* Header/footer background */
  --color-gray-100: #f3f4f6;         /* Light border color */
  --color-gray-200: #e5e7eb;         /* Border color */
  --color-gray-300: #d1d5db;         /* Darker border color */
  --color-gray-600: #4b5563;         /* Action button color */
  --color-gray-700: #374151;         /* Dark border color */
  --color-gray-800: #1f2937;         /* Dark widget background */
  --color-gray-900: #111827;         /* Dark widget header/footer */
  --color-primary: #3b82f6;          /* Primary color theme */
  --color-secondary: #6b7280;        /* Secondary color theme */
  --radius-sm: 0.125rem;             /* Small border radius */
  --radius-md: 0.375rem;             /* Medium border radius */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);  /* Small shadow */
  --font-size-xs: 0.75rem;           /* Extra small font size */
  --font-size-sm: 0.875rem;          /* Small font size */
  --font-size-md: 1rem;              /* Medium font size */
  --font-size-lg: 1.125rem;          /* Large font size */
  --font-weight-medium: 500;         /* Medium font weight */
  --space-1: 0.25rem;                /* Extra small spacing */
  --space-2: 0.5rem;                 /* Small spacing */
  --space-3: 0.75rem;                /* Medium spacing */
  --space-4: 1rem;                   /* Standard spacing */
  --space-5: 1.25rem;                /* Large spacing */
}
```

## Accessibility

For better accessibility, consider these points:

- Use appropriate heading levels within widget headers
- Ensure sufficient color contrast between text and backgrounds
- Make interactive elements like action buttons keyboard accessible
- Add descriptive labels for interactive elements
- Use ARIA roles and attributes when appropriate (e.g., `role="region"`, `aria-labelledby`)
- Make loading states perceivable by screen readers with `aria-busy="true"`

## Best Practices

- Group related content within widgets
- Keep widget titles short and descriptive
- Use consistent widget sizes and styles throughout the interface
- Consider collapsible widgets for less important or space-consuming content
- Use appropriate widget variants to indicate importance or purpose
- Add loading states to indicate when content is being fetched
- Consider responsive behavior for widgets on different screen sizes 
---
title: Breadcrumbs Component
outline: deep
---

# Breadcrumbs

The Breadcrumbs component provides a navigation aid that helps users understand their current location within a website or application hierarchy. It creates a visual trail of links that allows users to navigate back to previous levels.

## Basic Usage

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#" aria-current="page">Product Details</a></li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#" aria-current="page">Product Details</a></li>
    </ol>
  </nav>
</div>

## Variants

### Size Variants

Breadcrumbs can be displayed in different sizes.

```html
<nav class="breadcrumbs sm" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs lg" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs sm" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs lg" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
</div>

### Style Variants

Different visual styles for breadcrumbs.

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs outlined" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs pill" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs outlined" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs pill" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
</div>

### Separator Variants

Customize the separator between breadcrumb items.

```html
<nav class="breadcrumbs separator-slash" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs separator-arrow" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>

<nav class="breadcrumbs separator-dot" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Page</a></li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs separator-slash" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs separator-arrow" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
  
  <nav class="breadcrumbs separator-dot" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#" aria-current="page">Page</a></li>
    </ol>
  </nav>
</div>

## Usage Examples

### With Icons

Add icons to enhance visual cues in breadcrumbs.

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
      </a>
    </li>
    <li>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span>Products</span>
      </a>
    </li>
    <li>
      <a href="#" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
        <span>Product Details</span>
      </a>
    </li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Products</span>
        </a>
      </li>
      <li>
        <a href="#" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
          </svg>
          <span>Product Details</span>
        </a>
      </li>
    </ol>
  </nav>
</div>

### Responsive Truncation

For long paths, breadcrumbs can be truncated on smaller screens.

```html
<nav class="breadcrumbs truncate" aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Very Long Category Name That Might Get Truncated</a></li>
    <li><a href="#">Subcategory</a></li>
    <li><a href="#">Another Level</a></li>
    <li><a href="#" aria-current="page">Current Page with Long Title</a></li>
  </ol>
</nav>
```

<div class="example-wrapper">
  <nav class="breadcrumbs truncate" aria-label="Breadcrumb">
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Very Long Category Name That Might Get Truncated</a></li>
      <li><a href="#">Subcategory</a></li>
      <li><a href="#">Another Level</a></li>
      <li><a href="#" aria-current="page">Current Page with Long Title</a></li>
    </ol>
  </nav>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component modules */
@import '@casoon/ui-lib/ui/components/breadcrumbs.css';
```

## CSS Variables

The Breadcrumbs component can be customized using CSS variables:

```css
:root {
  --breadcrumbs-font-size: 0.875rem;
  --breadcrumbs-font-weight: var(--font-weight-normal);
  --breadcrumbs-line-height: 1.5;
  --breadcrumbs-color: var(--color-text-secondary);
  --breadcrumbs-color-hover: var(--color-primary);
  --breadcrumbs-color-current: var(--color-text);
  --breadcrumbs-separator: "/";
  --breadcrumbs-separator-color: var(--color-border);
  --breadcrumbs-gap: 0.5rem;
  --breadcrumbs-padding: 0.5rem;
  --breadcrumbs-border-radius: var(--radius-md);
  --breadcrumbs-background: transparent;
  --breadcrumbs-border-color: var(--color-border);
  --breadcrumbs-border-width: 1px;
}
```

### Available Variables

| variable | Default | Description |
|----------|---------|-------------|
| `--breadcrumbs-font-size` | `0.875rem` | Font size of breadcrumb items |
| `--breadcrumbs-font-weight` | `var(--font-weight-normal)` | Font weight of breadcrumb items |
| `--breadcrumbs-line-height` | `1.5` | Line height of breadcrumb items |
| `--breadcrumbs-color` | `var(--color-text-secondary)` | Text color of breadcrumb items |
| `--breadcrumbs-color-hover` | `var(--color-primary)` | Text color on hover |
| `--breadcrumbs-color-current` | `var(--color-text)` | Text color of current page |
| `--breadcrumbs-separator` | `"/"` | Content of the separator |
| `--breadcrumbs-separator-color` | `var(--color-border)` | Color of the separator |
| `--breadcrumbs-gap` | `0.5rem` | Gap between breadcrumb items |
| `--breadcrumbs-padding` | `0.5rem` | Padding around the breadcrumbs |
| `--breadcrumbs-border-radius` | `var(--radius-md)` | Border radius for outlined styles |
| `--breadcrumbs-background` | `transparent` | Background color |
| `--breadcrumbs-border-color` | `var(--color-border)` | Border color for outlined styles |
| `--breadcrumbs-border-width` | `1px` | Border width for outlined styles |

## Accessibility

The Breadcrumbs component is built with accessibility in mind:

- **Semantic Structure**: Uses `<nav>`, `<ol>`, and `<li>` elements to provide proper semantic structure
- **ARIA Attributes**: `aria-label="Breadcrumb"` on the `<nav>` element identifies the breadcrumb role
- **Current Page**: `aria-current="page"` on the current page link helps screen readers identify the current location
- **Focus Indicators**: Clear visual indicators when links receive keyboard focus
- **Color Contrast**: Sufficient contrast between text and background colors
- **Screen Reader Support**: Separator characters are implemented in a way that screen readers can interpret correctly

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ | ✅ |
| CSS custom properties | ✅ | ✅ | ✅ | ✅ | ❌ |
| Flexbox layout | ✅ | ✅ | ✅ | ✅ | ⚠️ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

## Performance Considerations

- **Icon Usage**: When using icons, consider the additional asset size and rendering performance
- **Long Paths**: For deep hierarchies, consider using truncation or collapsing to improve performance on mobile devices
- **Text Wrapping**: Ensure breadcrumbs handle text wrapping gracefully to prevent layout shifts
- **Responsive Design**: Test breadcrumbs at various viewport widths to ensure they remain usable at all sizes

## Related Components

- [Navigation](/components/navigation/) - For main site navigation
- [Pagination](/components/pagination/) - For navigating between pages of content
- [Tabs](/components/tabs/) - For switching between views within a page
- [Menu](/components/menu/) - For dropdown navigation options 
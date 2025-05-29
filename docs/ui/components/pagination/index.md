---
title: Pagination Component
outline: deep
---

# Pagination

The Pagination component provides a set of controls for navigating through multiple pages of content. It helps users understand their current position within a sequence of pages and allows them to move between pages easily.

## Basic Usage

```html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link">1</a></li>
    <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
    <li><a href="#" class="pagination-link">3</a></li>
    <li><a href="#" class="pagination-link">4</a></li>
    <li><a href="#" class="pagination-link">5</a></li>
  </ul>
  <a href="#" class="pagination-next" aria-label="Next page">Next</a>
</nav>
```

<div class="example-wrapper">
  <nav class="pagination" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
      <li><a href="#" class="pagination-link">4</a></li>
      <li><a href="#" class="pagination-link">5</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
</div>

## Variants

### Size Variants

Pagination controls are available in different sizes.

```html
<nav class="pagination sm" aria-label="Pagination">
  <!-- Small pagination -->
</nav>

<nav class="pagination" aria-label="Pagination">
  <!-- Default size pagination -->
</nav>

<nav class="pagination lg" aria-label="Pagination">
  <!-- Large pagination -->
</nav>
```

<div class="example-wrapper">
  <nav class="pagination sm" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination lg" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
</div>

### Style Variants

Different visual styles for pagination controls.

```html
<nav class="pagination" aria-label="Pagination">
  <!-- Default style -->
</nav>

<nav class="pagination bordered" aria-label="Pagination">
  <!-- Bordered style -->
</nav>

<nav class="pagination rounded" aria-label="Pagination">
  <!-- Rounded style -->
</nav>

<nav class="pagination pill" aria-label="Pagination">
  <!-- Pill style -->
</nav>
```

<div class="example-wrapper">
  <nav class="pagination" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination bordered" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination rounded" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination pill" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
</div>

### Alignment Variants

Control the alignment of pagination controls.

```html
<nav class="pagination start" aria-label="Pagination">
  <!-- Left-aligned pagination -->
</nav>

<nav class="pagination center" aria-label="Pagination">
  <!-- Centered pagination -->
</nav>

<nav class="pagination end" aria-label="Pagination">
  <!-- Right-aligned pagination -->
</nav>
```

<div class="example-wrapper">
  <nav class="pagination start" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination center" aria-label="Pagination" style="margin-bottom: 1rem;">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <nav class="pagination end" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
</div>

## Usage Examples

### With Ellipsis for Many Pages

For a large number of pages, use ellipsis to indicate skipped page numbers.

```html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link">1</a></li>
    <li><span class="pagination-ellipsis">...</span></li>
    <li><a href="#" class="pagination-link">10</a></li>
    <li><a href="#" class="pagination-link active" aria-current="page">11</a></li>
    <li><a href="#" class="pagination-link">12</a></li>
    <li><span class="pagination-ellipsis">...</span></li>
    <li><a href="#" class="pagination-link">50</a></li>
  </ul>
  <a href="#" class="pagination-next" aria-label="Next page">Next</a>
</nav>
```

<div class="example-wrapper">
  <nav class="pagination" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><span class="pagination-ellipsis">...</span></li>
      <li><a href="#" class="pagination-link">10</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">11</a></li>
      <li><a href="#" class="pagination-link">12</a></li>
      <li><span class="pagination-ellipsis">...</span></li>
      <li><a href="#" class="pagination-link">50</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
</div>

### With Page Size Selection

Add a dropdown to allow users to change the number of items per page.

```html
<div class="pagination-container">
  <div class="pagination-size">
    <label for="page-size">Items per page:</label>
    <select id="page-size" class="select sm">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
  
  <nav class="pagination" aria-label="Pagination">
    <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next" aria-label="Next page">Next</a>
  </nav>
  
  <div class="pagination-info">
    Showing 11-20 of 45 items
  </div>
</div>
```

<div class="example-wrapper">
  <div class="pagination-container">
    <div class="pagination-size">
      <label for="page-size">Items per page:</label>
      <select id="page-size" class="select sm">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    
    <nav class="pagination" aria-label="Pagination">
      <a href="#" class="pagination-prev" aria-label="Previous page">Previous</a>
      <ul class="pagination-list">
        <li><a href="#" class="pagination-link">1</a></li>
        <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
        <li><a href="#" class="pagination-link">3</a></li>
      </ul>
      <a href="#" class="pagination-next" aria-label="Next page">Next</a>
    </nav>
    
    <div class="pagination-info">
      Showing 11-20 of 45 items
    </div>
  </div>
</div>

### With Icon Buttons

Use icons instead of text for previous and next buttons.

```html
<nav class="pagination" aria-label="Pagination">
  <a href="#" class="pagination-prev icon" aria-label="Previous page">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link">1</a></li>
    <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
    <li><a href="#" class="pagination-link">3</a></li>
  </ul>
  <a href="#" class="pagination-next icon" aria-label="Next page">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </a>
</nav>
```

<div class="example-wrapper">
  <nav class="pagination" aria-label="Pagination">
    <a href="#" class="pagination-prev icon" aria-label="Previous page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </a>
    <ul class="pagination-list">
      <li><a href="#" class="pagination-link">1</a></li>
      <li><a href="#" class="pagination-link active" aria-current="page">2</a></li>
      <li><a href="#" class="pagination-link">3</a></li>
    </ul>
    <a href="#" class="pagination-next icon" aria-label="Next page">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  </nav>
</div>

## Importing

```css
/* Required dependencies */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* or another theme */

/* Component module */
@import '@casoon/ui-lib/ui/components/pagination.css';
```

## CSS Variables

The Pagination component can be customized using CSS variables:

```css
:root {
  --pagination-font-size: 0.875rem;
  --pagination-font-size-sm: 0.75rem;
  --pagination-font-size-lg: 1rem;
  
  --pagination-padding: 0.5rem 0.75rem;
  --pagination-padding-sm: 0.25rem 0.5rem;
  --pagination-padding-lg: 0.75rem 1rem;
  
  --pagination-border-radius: var(--radius-md);
  --pagination-border-radius-pill: 999px;
  
  --pagination-link-color: var(--color-text);
  --pagination-link-background: var(--color-background);
  --pagination-link-border: 1px solid var(--color-border);
  
  --pagination-link-hover-color: var(--color-primary);
  --pagination-link-hover-background: var(--color-background-100);
  --pagination-link-hover-border: 1px solid var(--color-primary-light);
  
  --pagination-link-active-color: var(--color-background);
  --pagination-link-active-background: var(--color-primary);
  --pagination-link-active-border: 1px solid var(--color-primary);
  
  --pagination-link-disabled-color: var(--color-text-muted);
  --pagination-link-disabled-background: var(--color-background-200);
  --pagination-link-disabled-border: 1px solid var(--color-border);
  
  --pagination-gap: 0.25rem;
  --pagination-ellipsis-color: var(--color-text-secondary);
}
```

### Available Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--pagination-font-size` | `0.875rem` | Font size of pagination links |
| `--pagination-font-size-sm` | `0.75rem` | Font size of small pagination links |
| `--pagination-font-size-lg` | `1rem` | Font size of large pagination links |
| `--pagination-padding` | `0.5rem 0.75rem` | Padding of pagination links |
| `--pagination-padding-sm` | `0.25rem 0.5rem` | Padding of small pagination links |
| `--pagination-padding-lg` | `0.75rem 1rem` | Padding of large pagination links |
| `--pagination-border-radius` | `var(--radius-md)` | Border radius of pagination links |
| `--pagination-border-radius-pill` | `999px` | Border radius for pill style |
| `--pagination-link-color` | `var(--color-text)` | Text color of pagination links |
| `--pagination-link-background` | `var(--color-background)` | Background color of pagination links |
| `--pagination-link-border` | `1px solid var(--color-border)` | Border of pagination links |
| `--pagination-link-hover-color` | `var(--color-primary)` | Text color of pagination links on hover |
| `--pagination-link-hover-background` | `var(--color-background-100)` | Background color of pagination links on hover |
| `--pagination-link-hover-border` | `1px solid var(--color-primary-light)` | Border of pagination links on hover |
| `--pagination-link-active-color` | `var(--color-background)` | Text color of active pagination link |
| `--pagination-link-active-background` | `var(--color-primary)` | Background color of active pagination link |
| `--pagination-link-active-border` | `1px solid var(--color-primary)` | Border of active pagination link |
| `--pagination-link-disabled-color` | `var(--color-text-muted)` | Text color of disabled pagination links |
| `--pagination-link-disabled-background` | `var(--color-background-200)` | Background color of disabled pagination links |
| `--pagination-link-disabled-border` | `1px solid var(--color-border)` | Border of disabled pagination links |
| `--pagination-gap` | `0.25rem` | Gap between pagination items |
| `--pagination-ellipsis-color` | `var(--color-text-secondary)` | Color of ellipsis |

## Accessibility

The Pagination component is built with accessibility in mind:

- **Semantic HTML**: Uses `<nav>` with appropriate `aria-label` to identify it as pagination
- **Current Page**: Uses `aria-current="page"` to indicate the current page
- **Previous/Next Labels**: Uses descriptive `aria-label` attributes for previous/next buttons
- **Keyboard Navigation**: Ensures all links are keyboard accessible
- **Focus Indication**: Provides clear visual focus indication
- **Color Contrast**: Maintains sufficient contrast for all states
- **Screen Reader Text**: Provides appropriate context for screen reader users

For more complex pagination (like when using ellipsis), consider adding additional context:

```html
<nav class="pagination" aria-label="Pagination navigation, page 11 of 50">
  <!-- Pagination content -->
</nav>
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ | ✅ |
| Flexbox layout | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| CSS variables | ✅ | ✅ | ✅ | ✅ | ❌ |
| Focus styling | ✅ | ✅ | ✅ | ✅ | ⚠️ |

*Legend: ✅ Full support, ⚠️ Partial support, ❌ No support*

## Performance Considerations

- **DOM Size**: For large numbers of pages, use ellipsis instead of rendering all page links
- **Event Delegation**: Consider using event delegation for pagination links rather than attaching listeners to each link
- **State Management**: When using with JavaScript frameworks, optimize re-renders by properly managing pagination state
- **Responsive Design**: Ensure pagination adapts well to different screen sizes
- **Touch Targets**: Make sure pagination links are large enough for touch interaction on mobile devices
- **Loading States**: Consider adding loading states when fetching new pages to improve perceived performance

## Related Components

- [Breadcrumbs](/components/breadcrumbs/) - For hierarchical navigation
- [Table](/components/table/) - Often used with pagination
- [Data Table](/components/data-table/) - Advanced table with built-in pagination
- [List](/components/list/) - Can be paginated for long lists
- [Navigation](/components/navigation/) - For site navigation 
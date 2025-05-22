---
title: Code Examples
category: Storybook
---

# Code Examples for Storybook Integration

This page shows how to include code from Storybook stories in your VitePress documentation. By combining code examples and interactive demos, developers gain a better understanding of the components.

## Basic Code Extraction

Storybook stores the code for each story. You can include this code directly in your documentation:

```jsx
// Example of a Button story
export const Primary = () => ({
  components: { Button },
  template: '<Button variant="primary">Primary Button</Button>'
});
```

With the corresponding HTML code:

```html
<button class="btn btn--primary">Primary Button</button>
```

And here you can see the result:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="100px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Code and Demo Side by Side

An effective method of documentation is to display code and demo side by side:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px;">
  <div>
    <h3>Code</h3>
    
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content with text.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn--primary">Action</button>
  </div>
</div>
```
  </div>
  <div>
    <h3>Result</h3>
    <iframe
      src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--basic&viewMode=story"
      width="100%"
      height="250px"
      style="border: 1px solid #ddd; border-radius: 4px;"
    ></iframe>
  </div>
</div>

## Variants and Their Code Implementation

With Storybook, you can demonstrate different variants of a component and show the corresponding code:

### Standard Button

```html
<button class="btn">Standard Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--default&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Primary Button

```html
<button class="btn btn--primary">Primary Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

### Secondary Button

```html
<button class="btn btn--secondary">Secondary Button</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--secondary&viewMode=story"
  width="100%"
  height="80px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Code for Complex Components

For more complex components, it's important to show all relevant code parts:

### Sortable Table

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-table--sortable&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

**HTML:**

```html
<table class="table table--sortable">
  <thead>
    <tr>
      <th class="sortable" data-sort="name">Name</th>
      <th class="sortable" data-sort="age">Age</th>
      <th class="sortable" data-sort="city">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>32</td>
      <td>Berlin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>28</td>
      <td>Hamburg</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>45</td>
      <td>Munich</td>
    </tr>
  </tbody>
</table>
```

**JavaScript:**

```js
// Sorting logic for tables
document.querySelectorAll('.sortable').forEach(header => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const column = header.dataset.sort;
    const direction = header.classList.contains('asc') ? 'desc' : 'asc';
    
    // Reset all header classes
    header.closest('tr').querySelectorAll('th').forEach(th => {
      th.classList.remove('asc', 'desc');
    });
    
    // Set sort direction
    header.classList.add(direction);
    
    // Sort rows
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
      const aValue = a.children[Array.from(header.parentNode.children).indexOf(header)].textContent;
      const bValue = b.children[Array.from(header.parentNode.children).indexOf(header)].textContent;
      
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    
    // Rebuild table
    rows.forEach(row => tbody.appendChild(row));
  });
});
```

## Responsive Code

Show how responsive code is implemented:

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=layout-responsive-grid--default&viewMode=story"
  width="100%"
  height="300px"
  style="border: 1px solid #ddd; border-radius: 4px; resize: horizontal; overflow: auto;"
></iframe>

## Using Slots and Composition

This example shows how to use slots for flexible content composition:

```html
<!-- Card with slots -->
<ui-card>
  <template #header>
    <h3>Custom Header</h3>
  </template>
  <template #default>
    <p>This is the main content of the card.</p>
    <img src="example.jpg" alt="Example image">
  </template>
  <template #footer>
    <button class="btn btn--primary">Primary Action</button>
    <button class="btn btn--outline">Secondary Action</button>
  </template>
</ui-card>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-card--with-slots&viewMode=story"
  width="100%"
  height="400px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Using the Component API

When using components, it's important to understand their API:

```js
// Button component API
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'secondary', 'outline', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  // ... component implementation
}
```

## Documenting Component States

Show how components behave in different states:

```html
<!-- Button States -->
<button class="btn">Default</button>
<button class="btn hover">Hover</button>
<button class="btn active">Active</button>
<button class="btn focus">Focus</button>
<button class="btn disabled">Disabled</button>
<button class="btn loading">Loading</button>
```

<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--states&viewMode=story"
  width="100%"
  height="150px"
  style="border: 1px solid #ddd; border-radius: 4px;"
></iframe>

## Best Practices for Code Examples

When documenting code examples:

1. **Keep examples concise**: Show only the relevant code
2. **Include context**: Explain what the code does
3. **Be consistent**: Use consistent naming and conventions
4. **Show variations**: Include examples of different use cases
5. **Include error handling**: Show how to handle edge cases
6. **Provide responsive examples**: Demonstrate responsive behavior
7. **Comment key points**: Use comments to highlight important aspects
8. **Update regularly**: Keep examples in sync with the latest component versions 
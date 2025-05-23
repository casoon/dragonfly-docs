# Table

The Table component provides a flexible and customizable way to display tabular data in the Casoon UI Library.

## Usage

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>
```

## Variants

### With Stripes

```html
<table class="table table--striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>
```

### With Hover Effect

```html
<table class="table table--hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>
```

### With Animation

```html
<table class="table table--animated">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>
```

## CSS Variables

```css
:root {
  --table-border-color: #e0e0e0;
  --table-border-width: 1px;
  --table-cell-padding: 0.75rem;
  --table-bg-color: #ffffff;
  --table-stripe-color: #f5f5f5;
  --table-hover-color: #f0f0f0;
  --table-text-color: #333333;
  --table-head-bg-color: #f8f9fa;
  --table-head-text-color: #333333;
  --table-transition: all 0.3s ease;
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
- Optimize display on mobile devices
- Consider touch targets

### Performance

- Minimize CSS
- Optimize JavaScript events
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/table.module.css';

interface Props {
  striped?: boolean;
  hover?: boolean;
  animated?: boolean;
  data: Array<{
    name: string;
    email: string;
    role: string;
  }>;
}

const { striped = false, hover = false, animated = false, data } = Astro.props;
---

<table 
  class="table"
  class:list={[
    striped && 'table--striped',
    hover && 'table--hover',
    animated && 'table--animated'
  ]}
>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item}
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    background-color: var(--table-bg-color);
  }
  
  .table th,
  .table td {
    padding: var(--table-cell-padding);
    border: var(--table-border-width) solid var(--table-border-color);
    color: var(--table-text-color);
  }
  
  .table th {
    background-color: var(--table-head-bg-color);
    color: var(--table-head-text-color);
    font-weight: bold;
    text-align: left;
  }
  
  .table--striped tbody tr:nth-child(odd) {
    background-color: var(--table-stripe-color);
  }
  
  .table--hover tbody tr:hover {
    background-color: var(--table-hover-color);
  }
  
  .table--animated tbody tr {
    transition: var(--table-transition);
  }
  
  .table--animated tbody tr:hover {
    transform: scale(1.01);
  }
</style>
```

Usage in an Astro component:

```astro
---
import Table from '../components/Table.astro';

const tableData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Administrator'
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'User'
  },
  {
    name: 'Alice Smith',
    email: 'alice@example.com',
    role: 'Editor'
  }
];
---

<Table 
  data={tableData}
  striped
  hover
  animated
/>
```

### React

```jsx
import React from 'react';
import 'casoon-ui-lib/modules/table.module.css';

function Table({ data, striped, hover, animated }) {
  const tableClasses = [
    'table',
    striped ? 'table--striped' : '',
    hover ? 'table--hover' : '',
    animated ? 'table--animated' : ''
  ].filter(Boolean).join(' ');
  
  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
``` 
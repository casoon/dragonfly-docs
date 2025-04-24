# Table

Die Table-Komponente bietet eine flexible und anpassbare Möglichkeit, tabellarische Daten in der Casoon UI Library darzustellen.

## Verwendung

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-Mail</th>
      <th>Rolle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>erika@example.com</td>
      <td>Benutzer</td>
    </tr>
  </tbody>
</table>
```

## Varianten

### Mit Stripes

```html
<table class="table table--striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-Mail</th>
      <th>Rolle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>erika@example.com</td>
      <td>Benutzer</td>
    </tr>
  </tbody>
</table>
```

### Mit Hover-Effekt

```html
<table class="table table--hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-Mail</th>
      <th>Rolle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>erika@example.com</td>
      <td>Benutzer</td>
    </tr>
  </tbody>
</table>
```

### Mit Animation

```html
<table class="table table--animated">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-Mail</th>
      <th>Rolle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
      <td>Administrator</td>
    </tr>
    <tr>
      <td>Erika Musterfrau</td>
      <td>erika@example.com</td>
      <td>Benutzer</td>
    </tr>
  </tbody>
</table>
```

## CSS Variablen

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

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Optimieren Sie die Darstellung auf mobilen Geräten
- Berücksichtigen Sie Touch-Targets

### Performance

- Minimieren Sie CSS
- Optimieren Sie JavaScript-Events
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

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
      <th>E-Mail</th>
      <th>Rolle</th>
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

Verwendung in einer Astro-Komponente:

```astro
---
import Table from '../modules/Table.astro';

const tableData = [
  {
    name: 'Max Mustermann',
    email: 'max@example.com',
    role: 'Administrator'
  },
  {
    name: 'Erika Musterfrau',
    email: 'erika@example.com',
    role: 'Benutzer'
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
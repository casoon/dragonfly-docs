---
title: Code
category: Components
---

# Code

The Code component allows you to display source code with syntax highlighting and customizable styling.

## Example

```html
<pre class="casoon-code">
  <code>
    // Example code
    function helloWorld() {
      console.log("Hello, World!");
    }
  </code>
</pre>
```

## Variants

### Standard

The standard code component with a neutral background:

```html
<pre class="casoon-code">
  <code>
    // Standard code
    const greeting = "Hello";
    console.log(greeting);
  </code>
</pre>
```

### With Border

Code block with border for better visual separation:

```html
<pre class="casoon-code casoon-code--bordered">
  <code>
    // Code with border
    import { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>{count}</button>;
    }
  </code>
</pre>
```

### With Background

Code block with colored background:

```html
<pre class="casoon-code casoon-code--background">
  <code>
    // Code with background
    const colors = ["red", "green", "blue"];
    colors.forEach(color => console.log(color));
  </code>
</pre>
```

### Inline Code

For code within text sections:

```html
<p>Use <code class="casoon-code-inline">console.log()</code> for console output.</p>
```

## Line Numbers

With line numbers for better reference:

```html
<pre class="casoon-code casoon-code--numbered">
  <code>
    // First line
    function add(a, b) {
      // Second line
      return a + b;
      // Third line
    }
  </code>
</pre>
```

## Syntax Highlighting

The Code component supports basic syntax highlighting. For advanced syntax highlighting, we recommend integrating with a library like Prism.js or Highlight.js.

## In a Grid Layout

```vue
<Grid columns="2">
  <Card title="JavaScript">
    <pre class="casoon-code">
      <code>
        function greeting(name) {
          return `Hello ${name}!`;
        }
      </code>
    </pre>
  </Card>
  <Card title="CSS">
    <pre class="casoon-code">
      <code>
        .button {
          background-color: blue;
          color: white;
          padding: 0.5rem 1rem;
        }
      </code>
    </pre>
  </Card>
</Grid>
```

## Props

| Name       | Type     | Default | Description                                     |
|------------|----------|----------|-------------------------------------------------|
| bordered   | Boolean  | false    | Displays a border around the code block          |
| background | Boolean  | false    | Adds a background to the code block              |
| numbered   | Boolean  | false    | Displays line numbers in the code block          |
| inline     | Boolean  | false    | Displays the code inline                         |

## Customization

The Code component can be customized using CSS variables:

```css
:root {
  --casoon-code-font-family: 'Fira Code', monospace;
  --casoon-code-font-size: 0.9rem;
  --casoon-code-line-height: 1.5;
  --casoon-code-background: #f5f5f5;
  --casoon-code-color: #333;
  --casoon-code-border-color: #ddd;
  --casoon-code-border-radius: 4px;
  --casoon-code-padding: 1rem;
}
```

## Best Practices

- Use the Code component for all types of code examples in your documentation or application
- For longer code examples, use the version with line numbers
- When integrating into text, use the inline variant
- Ensure sufficient contrast between text and background color, especially with custom themes 
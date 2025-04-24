---
title: Code
category: Components
---

# Code

Die Code-Komponente ermöglicht es Ihnen, Quellcode mit Syntax-Hervorhebung und anpassbarem Styling anzuzeigen.

## Beispiel

```html
<pre class="casoon-code">
  <code>
    // Beispielcode
    function helloWorld() {
      console.log("Hello, World!");
    }
  </code>
</pre>
```

## Varianten

### Standard

Die Standard-Code-Komponente mit neutralem Hintergrund:

```html
<pre class="casoon-code">
  <code>
    // Standardcode
    const greeting = "Hallo";
    console.log(greeting);
  </code>
</pre>
```

### Mit Rahmen

Code-Block mit Rahmen für bessere visuelle Abgrenzung:

```html
<pre class="casoon-code casoon-code--bordered">
  <code>
    // Code mit Rahmen
    import { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>{count}</button>;
    }
  </code>
</pre>
```

### Mit Hintergrund

Code-Block mit farbigem Hintergrund:

```html
<pre class="casoon-code casoon-code--background">
  <code>
    // Code mit Hintergrund
    const colors = ["rot", "grün", "blau"];
    colors.forEach(color => console.log(color));
  </code>
</pre>
```

### Inline-Code

Für Code innerhalb von Textabschnitten:

```html
<p>Verwenden Sie <code class="casoon-code-inline">console.log()</code> für die Ausgabe in der Konsole.</p>
```

## Zeilennummern

Mit Zeilennummern für bessere Referenzierung:

```html
<pre class="casoon-code casoon-code--numbered">
  <code>
    // Erste Zeile
    function add(a, b) {
      // Zweite Zeile
      return a + b;
      // Dritte Zeile
    }
  </code>
</pre>
```

## Syntax-Hervorhebung

Die Code-Komponente unterstützt grundlegende Syntax-Hervorhebung. Für fortgeschrittene Syntax-Hervorhebung empfehlen wir die Integration mit einer Bibliothek wie Prism.js oder Highlight.js.

## In einem Grid-Layout

```vue
<Grid columns="2">
  <Card title="JavaScript">
    <pre class="casoon-code">
      <code>
        function greeting(name) {
          return `Hallo ${name}!`;
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

| Name       | Typ      | Standard | Beschreibung                                     |
|------------|----------|----------|-------------------------------------------------|
| bordered   | Boolean  | false    | Zeigt einen Rahmen um den Code-Block an          |
| background | Boolean  | false    | Fügt einen Hintergrund zum Code-Block hinzu      |
| numbered   | Boolean  | false    | Zeigt Zeilennummern im Code-Block an             |
| inline     | Boolean  | false    | Stellt den Code inline dar                       |

## Anpassung

Die Code-Komponente kann über CSS-Variablen angepasst werden:

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

- Verwenden Sie die Code-Komponente für alle Arten von Codebeispielen in Ihrer Dokumentation oder Anwendung
- Für längere Codebeispiele nutzen Sie die Variante mit Zeilennummern
- Bei der Integration in Texten verwenden Sie die Inline-Variante
- Achten Sie auf ausreichenden Kontrast zwischen Text- und Hintergrundfarbe, besonders bei angepassten Themes 
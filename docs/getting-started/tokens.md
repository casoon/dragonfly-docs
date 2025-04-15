# Design Tokens

Die Design Tokens der Casoon UI Library definieren die grundlegenden Design-Elemente wie Farben, Abstände, Schatten und mehr.

## Farben

### Primärfarben

```css
:root {
  --color-primary-50: #e6f1ff;
  --color-primary-100: #cce3ff;
  --color-primary-200: #99c7ff;
  --color-primary-300: #66abff;
  --color-primary-400: #338fff;
  --color-primary-500: #0073ff;
  --color-primary-600: #005ccc;
  --color-primary-700: #004599;
  --color-primary-800: #002e66;
  --color-primary-900: #001733;
}
```

### Sekundärfarben

```css
:root {
  --color-secondary-50: #f8f9fa;
  --color-secondary-100: #e9ecef;
  --color-secondary-200: #dee2e6;
  --color-secondary-300: #ced4da;
  --color-secondary-400: #adb5bd;
  --color-secondary-500: #6c757d;
  --color-secondary-600: #495057;
  --color-secondary-700: #343a40;
  --color-secondary-800: #212529;
  --color-secondary-900: #0a0c0d;
}
```

### Statusfarben

```css
:root {
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-error: #dc3545;
  --color-info: #17a2b8;
}
```

## Abstände

```css
:root {
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;
  --spacing-40: 10rem;
  --spacing-48: 12rem;
  --spacing-56: 14rem;
  --spacing-64: 16rem;
}
```

## Schatten

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;
  --radius: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;
}
```

## Übergänge

```css
:root {
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
  --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## Z-Index

```css
:root {
  --z-0: 0;
  --z-10: 10;
  --z-20: 20;
  --z-30: 30;
  --z-40: 40;
  --z-50: 50;
  --z-auto: auto;
}
```

## Best Practices

### Konsistenz

- Verwenden Sie die vordefinierten Tokens
- Halten Sie sich an die Design-System-Spezifikationen
- Dokumentieren Sie neue Tokens
- Vermeiden Sie hartcodierte Werte

### Wartbarkeit

- Gruppieren Sie verwandte Tokens
- Verwenden Sie aussagekräftige Namen
- Halten Sie die Token-Hierarchie flach
- Vermeiden Sie redundante Tokens

### Performance

- Minimieren Sie die Anzahl der Tokens
- Verwenden Sie CSS-Variablen effizient
- Optimieren Sie die Token-Struktur
- Vermeiden Sie unnötige Verschachtelungen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/tokens.module.css';

interface Props {
  color?: string;
  spacing?: string;
  shadow?: string;
  radius?: string;
  transition?: string;
  zIndex?: string;
}

const {
  color,
  spacing,
  shadow,
  radius,
  transition,
  zIndex
} = Astro.props;
---

<div 
  class="token-demo"
  style={`
    ${color ? `--token-color: var(--color-${color});` : ''}
    ${spacing ? `--token-spacing: var(--spacing-${spacing});` : ''}
    ${shadow ? `--token-shadow: var(--shadow-${shadow});` : ''}
    ${radius ? `--token-radius: var(--radius-${radius});` : ''}
    ${transition ? `--token-transition: var(--transition-${transition});` : ''}
    ${zIndex ? `--token-z-index: var(--z-${zIndex});` : ''}
  `}
>
  <slot />
</div>

<style>
  .token-demo {
    color: var(--token-color, inherit);
    padding: var(--token-spacing, var(--spacing-4));
    box-shadow: var(--token-shadow, var(--shadow));
    border-radius: var(--token-radius, var(--radius));
    transition: all var(--token-transition, var(--transition-normal)) var(--transition-ease);
    z-index: var(--token-z-index, var(--z-0));
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import TokenDemo from '../components/TokenDemo.astro';
---

<TokenDemo color="primary-500" spacing="6" shadow="lg" radius="lg">
  Token Demo
</TokenDemo>
``` 
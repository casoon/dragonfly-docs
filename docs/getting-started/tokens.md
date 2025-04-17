# Design Tokens

Die Casoon UI Library verwendet Design Tokens für konsistente Styling-Entscheidungen. Diese Tokens sind als CSS-Variablen im `@layer core` definiert und können einfach angepasst werden.

## Positionierung

```css
@layer core {
    .relative { position: relative; }
    .absolute { position: absolute; }
    .fixed { position: fixed; }
    .sticky { position: sticky; }
    .static { position: static; }
}
```

## Z-Index

```css
@layer core {
    .z-0 { z-index: 0; }
    .z-10 { z-index: var(--z-index-dropdown); }
    .z-20 { z-index: var(--z-index-sticky); }
    .z-30 { z-index: var(--z-index-fixed); }
    .z-40 { z-index: var(--z-index-modal-backdrop); }
    .z-50 { z-index: var(--z-index-modal); }
    .z-60 { z-index: var(--z-index-popover); }
    .z-70 { z-index: var(--z-index-tooltip); }
}
```

## Container

```css
@layer core {
    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: var(--spacing-4);
        padding-right: var(--spacing-4);
    }

    .container-sm { max-width: var(--container-sm); }
    .container-md { max-width: var(--container-md); }
    .container-lg { max-width: var(--container-lg); }
    .container-xl { max-width: var(--container-xl); }
    .container-2xl { max-width: var(--container-2xl); }
}
```

## Grid

```css
@layer core {
    .grid {
        display: grid;
        gap: var(--spacing-4);
    }

    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
}
```

## Spacing

```css
@layer core {
    /* Margin */
    .m-0 { margin: 0; }
    .m-1 { margin: var(--spacing-1); }
    .m-2 { margin: var(--spacing-2); }
    .m-3 { margin: var(--spacing-3); }
    .m-4 { margin: var(--spacing-4); }
    .m-5 { margin: var(--spacing-5); }

    /* Margin Top */
    .mt-0 { margin-top: 0; }
    .mt-1 { margin-top: var(--spacing-1); }
    .mt-2 { margin-top: var(--spacing-2); }
    .mt-3 { margin-top: var(--spacing-3); }
    .mt-4 { margin-top: var(--spacing-4); }
    .mt-5 { margin-top: var(--spacing-5); }

    /* Margin Bottom */
    .mb-0 { margin-bottom: 0; }
    .mb-1 { margin-bottom: var(--spacing-1); }
    .mb-2 { margin-bottom: var(--spacing-2); }
    .mb-3 { margin-bottom: var(--spacing-3); }
    .mb-4 { margin-bottom: var(--spacing-4); }
    .mb-5 { margin-bottom: var(--spacing-5); }

    /* Margin Left */
    .ml-0 { margin-left: 0; }
    .ml-1 { margin-left: var(--spacing-1); }
    .ml-2 { margin-left: var(--spacing-2); }
    .ml-3 { margin-left: var(--spacing-3); }
    .ml-4 { margin-left: var(--spacing-4); }
    .ml-5 { margin-left: var(--spacing-5); }

    /* Margin Right */
    .mr-0 { margin-right: 0; }
    .mr-1 { margin-right: var(--spacing-1); }
    .mr-2 { margin-right: var(--spacing-2); }
    .mr-3 { margin-right: var(--spacing-3); }
    .mr-4 { margin-right: var(--spacing-4); }
    .mr-5 { margin-right: var(--spacing-5); }

    /* Padding */
    .p-0 { padding: 0; }
    .p-1 { padding: var(--spacing-1); }
    .p-2 { padding: var(--spacing-2); }
    .p-3 { padding: var(--spacing-3); }
    .p-4 { padding: var(--spacing-4); }
    .p-5 { padding: var(--spacing-5); }

    /* Gap */
    .gap-0 { gap: 0; }
    .gap-1 { gap: var(--spacing-1); }
    .gap-2 { gap: var(--spacing-2); }
    .gap-3 { gap: var(--spacing-3); }
    .gap-4 { gap: var(--spacing-4); }
    .gap-5 { gap: var(--spacing-5); }
}
```

## Farben

### Primäre Farben

```css
@layer core {
    :root {
        --color-primary: var(--color-blue-600);
        --color-primary-light: var(--color-blue-500);
        --color-primary-dark: var(--color-blue-700);
        --color-secondary: var(--color-gray-600);
        --color-secondary-light: var(--color-gray-500);
        --color-secondary-dark: var(--color-gray-700);
        --color-accent: var(--color-orange-500);
        --color-accent-light: var(--color-orange-400);
        --color-accent-dark: var(--color-orange-600);
    }
}
```

### Status-Farben

```css
@layer core {
    :root {
        --color-success: var(--color-green-600);
        --color-warning: var(--color-yellow-500);
        --color-error: var(--color-red-600);
        --color-info: var(--color-blue-600);
    }
}
```

### Graustufen

```css
@layer core {
    :root {
        --color-gray-100: var(--color-gray-100);
        --color-gray-200: var(--color-gray-200);
        --color-gray-300: var(--color-gray-300);
        --color-gray-400: var(--color-gray-400);
        --color-gray-500: var(--color-gray-500);
        --color-gray-600: var(--color-gray-600);
        --color-gray-700: var(--color-gray-700);
        --color-gray-800: var(--color-gray-800);
        --color-gray-900: var(--color-gray-900);
    }
}
```

## Typografie

### Schriftfamilien

```css
@layer core {
    :root {
        --font-family-base: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu, cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --font-family-heading: var(--font-family-base);
        --font-family-mono: ui-monospace, sfmono-regular, menlo, monaco, consolas, 'Liberation Mono', 'Courier New', monospace;
    }
}
```

### Schriftgrößen

```css
@layer core {
    :root {
        --font-size-xs: 0.75rem;    /* 12px */
        --font-size-sm: 0.875rem;   /* 14px */
        --font-size-base: 1rem;     /* 16px */
        --font-size-lg: 1.25rem;    /* 20px */
        --font-size-xl: 1.5rem;     /* 24px */
        --font-size-2xl: 1.5rem;    /* 24px */
        --font-size-3xl: 1.875rem;  /* 30px */
        --font-size-4xl: 2.25rem;   /* 36px */
        --font-size-5xl: 3rem;      /* 48px */
    }
}
```

### Schriftgewichte und Zeilenabstände

```css
@layer core {
    :root {
        --font-weight-light: 300;
        --font-weight-normal: 400;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        
        --line-height-none: 1;
        --line-height-tight: 1.25;
        --line-height-snug: 1.375;
        --line-height-normal: 1.5;
        --line-height-relaxed: 1.625;
        --line-height-loose: 2;
    }
}
```

## Abstände

```css
@layer core {
    :root {
        --spacing-1: 0.25rem;
        --spacing-2: 0.5rem;
        --spacing-3: 1rem;
        --spacing-4: 1.5rem;
        --spacing-5: 3rem;
    }
}
```

## Border Radius

```css
@layer core {
    :root {
        --border-radius-sm: 0.25rem;
        --border-radius-md: 0.5rem;
        --border-radius-lg: 1rem;
        --border-radius-xl: 0.75rem;
        --border-radius-2xl: 1rem;
        --border-radius-full: 9999px;
    }
}
```

## Schatten

```css
@layer core {
    :root {
        --shadow-sm: 0 1px 2px 0 var(--color-black-alpha-5);
        --shadow: 0 1px 3px 0 var(--color-black-alpha-10), 0 1px 2px 0 var(--color-black-alpha-6);
        --shadow-md: 0 4px 6px -1px var(--color-black-alpha-10);
        --shadow-lg: 0 10px 15px -3px var(--color-black-alpha-10);
        --shadow-xl: 0 20px 25px -5px var(--color-black-alpha-10), 0 10px 10px -5px var(--color-black-alpha-4);
    }
}
```

## Übergänge

```css
@layer core {
    :root {
        --transition-fast: 150ms;
        --transition-normal: 300ms;
        --transition-slow: 500ms;
    }
}
```

## Breakpoints und Container

```css
@layer core {
    :root {
        /* Breakpoints */
        --breakpoint-xs: 0;
        --breakpoint-sm: 40rem;    /* 640px */
        --breakpoint-md: 48rem;    /* 768px */
        --breakpoint-lg: 64rem;    /* 1024px */
        --breakpoint-xl: 80rem;    /* 1280px */
        --breakpoint-2xl: 96rem;   /* 1536px */

        /* Container */
        --container-sm: 40rem;     /* 640px */
        --container-md: 48rem;     /* 768px */
        --container-lg: 64rem;     /* 1024px */
        --container-xl: 80rem;     /* 1280px */
        --container-2xl: 96rem;    /* 1536px */

        /* Grid */
        --grid-columns: 12;
        --grid-gap: var(--spacing-md);
    }
}
```

## Best Practices

### 1. Konsistente Verwendung von Spacing

```css
@layer core {
    /* Gut */
    .card {
        padding: var(--spacing-4);
        margin-bottom: var(--spacing-4);
    }

    /* Schlecht */
    .card {
        padding: 1rem;
        margin-bottom: 16px;
    }
}
```

### 2. Responsive Container

```css
@layer core {
    .container {
        width: 100%;
        max-width: var(--container-md);
        margin: 0 auto;
        padding: var(--spacing-4);
    }

    @media (min-width: var(--breakpoint-lg)) {
        .container {
            max-width: var(--container-lg);
        }
    }
}
```

### 3. Grid-Layout

```css
@layer core {
    .grid-layout {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: var(--spacing-4);
    }

    .col-span-1 { grid-column: span 1; }
    .col-span-2 { grid-column: span 2; }
    .col-span-3 { grid-column: span 3; }
    .col-span-4 { grid-column: span 4; }
    .col-span-6 { grid-column: span 6; }
    .col-span-12 { grid-column: span 12; }
}
```

## Troubleshooting

### Häufige Probleme

1. **Inkonsistente Spacing**
   - Verwenden Sie immer die vordefinierten Spacing-Variablen
   - Vermeiden Sie direkte Pixel-Werte
   - Nutzen Sie die konsistenten Utility-Klassen

2. **Container-Probleme**
   - Verwenden Sie die vordefinierten Container-Klassen
   - Setzen Sie max-width über die Container-Klassen
   - Nutzen Sie die Responsive Breakpoints korrekt

3. **Grid-Probleme**
   - Verwenden Sie die Grid-Utility-Klassen
   - Setzen Sie Spalten über die grid-cols-Klassen
   - Nutzen Sie gap für konsistente Abstände

4. **Z-Index-Probleme**
   - Verwenden Sie die vordefinierten Z-Index-Klassen
   - Beachten Sie die Hierarchie der Komponenten
   - Vermeiden Sie direkte Z-Index-Werte 
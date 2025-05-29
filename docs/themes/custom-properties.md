---
title: Custom Properties
category: themes
---

# Custom Properties

> **Wichtiger Note:** Ab the aktuellen version wurde the separate `custom-properties`-Layer in the ubergreifende Tokensystem integriert. the grundlegenden functions and Vorteile from CSS Custom Properties (CSS Variables) bleiben however erhalten and become nun zentral im `tokens`-Layer verwaltet.

the Casoon UI Library verwendet CSS Custom Properties (CSS Variables) for a flexibles and konsistentes Theming-system. in the aktuellen version become these Properties direkt im `tokens`-Layer definiert, what a better integrierte and wartbare Structure ermoglicht.

## Base-theme-Structure

the design Tokens define the grundlegenden Custom Properties:

```css
@layer tokens {
  :root {
    /* Farbpalette */
    --color-primary: #3366FF;
    --color-primary-light: #6699FF;
    --color-primary-dark: #0033CC;
    
    --color-secondary: #6C757D;
    --color-secondary-light: #ADB5BD;
    --color-secondary-dark: #495057;
    
    --color-success: #28A745;
    --color-warning: #FFC107;
    --color-danger: #DC3545;
    --color-info: #17A2B8;
    
    /* Neutrale Colors */
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-gray-100: #F8F9FA;
    --color-gray-200: #E9ECEF;
    --color-gray-300: #DEE2E6;
    --color-gray-400: #CED4DA;
    --color-gray-500: #ADB5BD;
    --color-gray-600: #6C757D;
    --color-gray-700: #495057;
    --color-gray-800: #343A40;
    --color-gray-900: #212529;
    
    /* Typography */
    --font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-size-base: 1rem;
    --line-height-base: 1.5;
    
    /* Abstande */
    --spacing-unit: 0.25rem;
    --spacing-1: calc(var(--spacing-unit) * 1);
    --spacing-2: calc(var(--spacing-unit) * 2);
    --spacing-3: calc(var(--spacing-unit) * 3);
    --spacing-4: calc(var(--spacing-unit) * 4);
    
    /* Border */
    --border-radius: 0.25rem;
    --border-width: 1px;
    --border-color: var(--color-gray-300);
    
    /* shadow */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* animation */
    --transition-base: all 0.3s ease;
    --transition-fast: all 0.15s ease;
    --transition-slow: all 0.5s ease;
  }
}
```

## theme-Uberschreibung

### 1. Direkte Uberschreibung

You can the Custom Properties direkt in Ihrem CSS overwrite:

```css
@layer tokens {
  :root {
    /* Primarfarben customize */
    --color-primary: #FF6B6B;
    --color-primary-light: #FF9E9E;
    --color-primary-dark: #FF3B3B;
    
    /* font change */
    --font-family-base: 'Inter', sans-serif;
    
    /* Abstande customize */
    --spacing-unit: 0.5rem;
  }
}
```

### 2. theme-classes

Alternativ can them theme-classes use:

```css
@layer themes {
  .theme-custom {
    --color-primary: #FF6B6B;
    --color-primary-light: #FF9E9E;
    --color-primary-dark: #FF3B3B;
  }

  .theme-dark {
    --color-primary: #4ECDC4;
    --color-primary-light: #7EDCD6;
    --color-primary-dark: #2EC4B8;
    
    --color-background: var(--color-gray-900);
    --color-text: var(--color-gray-100);
  }
}
```

### 3. Components-spezifische customizations

You can also Custom Properties for spezifische Components define:

```css
@layer core {
  .card {
    --card-background: var(--color-white);
    --card-border-color: var(--color-gray-200);
    --card-shadow: var(--shadow-sm);
  }

  .button {
    --button-padding: var(--spacing-2) var(--spacing-4);
    --button-border-radius: var(--border-radius);
  }
}
```

## Best Practices

### 1. theme-Structure

```css
/* 1. Base-theme (im tokens Layer) */
@layer tokens {
  :root {
    /* Grundlegende Custom Properties */
  }
}

/* 2. theme-Variants (im themes Layer) */
@layer themes {
  .theme-light {
    /* Helles theme */
  }

  .theme-dark {
    /* Dunkles theme */
  }
}

/* 3. Components-spezifische Properties (im jeweiligen Components-Layer) */
@layer core {
  .component {
    /* Components-spezifische customizations */
  }
}
```

### 2. Usage in Components

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  transition: var(--transition-base);
}

.button:hover {
  background-color: var(--color-primary-dark);
}
```

### 3. Dynamische customizations

```javascript
// theme zur Laufzeit change
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');

// or theme-Class wechseln
document.body.classList.remove('theme-light');
document.body.classList.add('theme-dark');
```

## Performance-Optimierung with Lightning CSS

Lightning CSS (fruher Parcel CSS) bietet optimierte Verarbeitung from CSS Custom Properties:

1. **Effiziente Kompilierung**
   ```css
   /* in einer zentralen file */
   @layer tokens {
     :root {
       /* all Custom Properties */
     }
   }
   ```

2. **theme-Wechsel optimieren**
   ```css
   /* theme-Wechsel with transition */
   :root {
     transition: background-color 0.3s ease, color 0.3s ease;
   }
   ```

3. **Fallbacks define**
   ```css
   .element {
     background-color: var(--color-primary, #3366FF);
     color: var(--color-text, #000000);
   }
   ```

## Browser-Unterstutzung

CSS Custom Properties become from allen modernen Browsern unterstutzt:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## Troubleshooting

### theme wird not angewendet
- Uberprufen them the Spezifitat the CSS-Regeln
- ensure, that the Custom Properties im richtigen Layer definiert sind
- Prufen them the Layer-Reihenfolge

### Performance-Probleme
- Reduzieren them the Anzahl the Custom Properties
- Vermeiden them to haufige theme-Wechsel
- use them CSS Variables sparsam in animations

### Browser-Kompatibilitat
- Testen them in verschiedenen Browsern
- use them Fallback-values
- implement them einen Polyfill for altere Browser, if notig 
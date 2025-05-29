---
title: Custom Properties
category: Themes
---

# Custom Properties

> **Wichtiger Hinweis:** Ab der aktuellen Version wurde der separate `custom-properties`-Layer in das übergreifende Tokensystem integriert. Die grundlegenden Funktionen und Vorteile von CSS Custom Properties (CSS Variables) bleiben jedoch erhalten und werden nun zentral im `tokens`-Layer verwaltet.

Die Casoon UI Library verwendet CSS Custom Properties (CSS Variables) für ein flexibles und konsistentes Theming-System. In der aktuellen Version werden diese Properties direkt im `tokens`-Layer definiert, was eine besser integrierte und wartbare Struktur ermöglicht.

## Basis-Theme-Struktur

Die Design Tokens definieren die grundlegenden Custom Properties:

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
    
    /* Abstände */
    --spacing-unit: 0.25rem;
    --spacing-1: calc(var(--spacing-unit) * 1);
    --spacing-2: calc(var(--spacing-unit) * 2);
    --spacing-3: calc(var(--spacing-unit) * 3);
    --spacing-4: calc(var(--spacing-unit) * 4);
    
    /* Border */
    --border-radius: 0.25rem;
    --border-width: 1px;
    --border-color: var(--color-gray-300);
    
    /* Schatten */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Animation */
    --transition-base: all 0.3s ease;
    --transition-fast: all 0.15s ease;
    --transition-slow: all 0.5s ease;
  }
}
```

## Theme-Überschreibung

### 1. Direkte Überschreibung

Sie können die Custom Properties direkt in Ihrem CSS überschreiben:

```css
@layer tokens {
  :root {
    /* Primärfarben anpassen */
    --color-primary: #FF6B6B;
    --color-primary-light: #FF9E9E;
    --color-primary-dark: #FF3B3B;
    
    /* Schriftart ändern */
    --font-family-base: 'Inter', sans-serif;
    
    /* Abstände anpassen */
    --spacing-unit: 0.5rem;
  }
}
```

### 2. Theme-Klassen

Alternativ können Sie Theme-Klassen verwenden:

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

### 3. Components-spezifische Customizations

Sie können auch Custom Properties für spezifische Components definieren:

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

### 1. Theme-Struktur

```css
/* 1. Basis-Theme (im tokens Layer) */
@layer tokens {
  :root {
    /* Grundlegende Custom Properties */
  }
}

/* 2. Theme-Variants (im themes Layer) */
@layer themes {
  .theme-light {
    /* Helles Theme */
  }

  .theme-dark {
    /* Dunkles Theme */
  }
}

/* 3. Components-spezifische Properties (im jeweiligen Components-Layer) */
@layer core {
  .component {
    /* Components-spezifische Customizations */
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

### 3. Dynamische Customizations

```javascript
// Theme zur Laufzeit ändern
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');

// Oder Theme-Klasse wechseln
document.body.classList.remove('theme-light');
document.body.classList.add('theme-dark');
```

## Performance-Optimierung mit Lightning CSS

Lightning CSS (früher Parcel CSS) bietet optimierte Verarbeitung von CSS Custom Properties:

1. **Effiziente Kompilierung**
   ```css
   /* In einer zentralen Datei */
   @layer tokens {
     :root {
       /* Alle Custom Properties */
     }
   }
   ```

2. **Theme-Wechsel optimieren**
   ```css
   /* Theme-Wechsel mit Transition */
   :root {
     transition: background-color 0.3s ease, color 0.3s ease;
   }
   ```

3. **Fallbacks definieren**
   ```css
   .element {
     background-color: var(--color-primary, #3366FF);
     color: var(--color-text, #000000);
   }
   ```

## Browser-Unterstützung

CSS Custom Properties werden von allen modernen Browsern unterstützt:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## Troubleshooting

### Theme wird nicht angewendet
- Überprüfen Sie die Spezifität der CSS-Regeln
- Stellen Sie sicher, dass die Custom Properties im richtigen Layer definiert sind
- Prüfen Sie die Layer-Reihenfolge

### Performance-Probleme
- Reduzieren Sie die Anzahl der Custom Properties
- Vermeiden Sie zu häufige Theme-Wechsel
- Nutzen Sie CSS Variables sparsam in Animationen

### Browser-Kompatibilität
- Testen Sie in verschiedenen Browsern
- Verwenden Sie Fallback-Werte
- Implementieren Sie einen Polyfill für ältere Browser, wenn nötig 
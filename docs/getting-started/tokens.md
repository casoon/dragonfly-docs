---
title: Design Tokens
category: Getting Started
---

# Design Tokens

Design Tokens sind die grundlegenden Bausteine des visuellen Designs in der Casoon UI Library. Sie definieren alle zentralen Designwerte wie Farben, Abstände, Typografie und mehr, die konsistent im gesamten System verwendet werden.

> **Hinweis:** Ab Version 0.5.1 wurde der separate `custom-properties`-Layer in den `tokens`-Layer integriert. Alle registrierten CSS-Eigenschaften werden nun innerhalb des tokens-Layers definiert.

## Bedeutung von Design Tokens

Design Tokens ermöglichen:

- **Konsistenz**: Sicherstellung eines einheitlichen Erscheinungsbilds
- **Skalierbarkeit**: Einfache Anpassung für verschiedene Marken und Themes
- **Wartbarkeit**: Zentrale Änderungen wirken sich systemweit aus
- **Bessere Zusammenarbeit**: Gemeinsame Design-Sprache für Designer und Entwickler

## Verwendung von Tokens

Die Design Tokens der Casoon UI Library werden als CSS-Variablen (Custom Properties) bereitgestellt:

```css
.element {
  /* Verwendung von Tokens für konsistentes Design */
  color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-md);
}
```

## Token-Kategorien

### Farben

Die Farbpalette definiert alle verfügbaren Farben im System:

```css
:root {
  /* Primärfarben */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;
  
  /* Sekundärfarben */
  --color-secondary: #6C757D;
  --color-secondary-light: #ADB5BD;
  --color-secondary-dark: #495057;
  
  /* Statusfarben */
  --color-success: #28A745;
  --color-warning: #FFC107;
  --color-danger: #DC3545;
  --color-info: #17A2B8;
  
  /* Neutrale Farben */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-100: #F8F9FA;
  --color-gray-900: #212529;
  
  /* Semantische Farben */
  --color-text: var(--color-gray-900);
  --color-text-light: var(--color-gray-600);
  --color-background: var(--color-white);
  --color-border: var(--color-gray-300);
}
```

### Abstände

Die Abstands-Tokens definieren konsistente Werte für Abstände und Größen:

```css
:root {
  /* Basiseinheit */
  --space-unit: 0.25rem;  /* 4px bei 16px Basis-Fontgröße */
  
  /* Abgeleitete Werte */
  --space-1: calc(var(--space-unit) * 1);    /* 0.25rem / 4px */
  --space-2: calc(var(--space-unit) * 2);    /* 0.5rem / 8px */
  --space-3: calc(var(--space-unit) * 3);    /* 0.75rem / 12px */
  --space-4: calc(var(--space-unit) * 4);    /* 1rem / 16px */
  --space-5: calc(var(--space-unit) * 5);    /* 1.25rem / 20px */
  --space-6: calc(var(--space-unit) * 6);    /* 1.5rem / 24px */
  --space-8: calc(var(--space-unit) * 8);    /* 2rem / 32px */
  --space-10: calc(var(--space-unit) * 10);  /* 2.5rem / 40px */
  --space-12: calc(var(--space-unit) * 12);  /* 3rem / 48px */
  --space-16: calc(var(--space-unit) * 16);  /* 4rem / 64px */
  --space-20: calc(var(--space-unit) * 20);  /* 5rem / 80px */
  --space-24: calc(var(--space-unit) * 24);  /* 6rem / 96px */
  --space-32: calc(var(--space-unit) * 32);  /* 8rem / 128px */
}
```

### Typografie

Die Typografie-Tokens definieren Schriftgrößen, Zeilenabstände und Schriftfamilien:

```css
:root {
  /* Schriftfamilien */
  --font-family-base: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  
  /* Schriftstärken */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Basisgröße und Skalierung */
  --font-size-base: 1rem;
  --line-height-base: 1.5;
  
  /* Schriftgrößen */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-md: 1rem;       /* 16px (Basis) */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Zeilenabstände */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-loose: 1.75;
  --line-height-none: 1;
}
```

### Abstände und Ränder

Tokens für Abstände, Paddings und Margins:

```css
:root {
  /* Container-Abstände */
  --container-padding-x: var(--space-4);
  --container-padding-y: var(--space-6);
  
  /* Komponentenabstände */
  --component-padding-x: var(--space-4);
  --component-padding-y: var(--space-3);
  --component-spacing: var(--space-4);
  
  /* Formularelemente */
  --form-element-padding-x: var(--space-3);
  --form-element-padding-y: var(--space-2);
  --form-element-spacing: var(--space-4);
}
```

### Ränder und Ecken

Tokens für Randradien und Eckenrundungen:

```css
:root {
  /* Randradien */
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.25rem;    /* 4px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-full: 9999px;   /* Vollständig abgerundete Ecken */
  
  /* Komponenten-spezifische Radien */
  --button-radius: var(--radius-md);
  --card-radius: var(--radius-lg);
  --input-radius: var(--radius-md);
}
```

### Schatten

Tokens für Schatten und Tiefeneffekte:

```css
:root {
  /* Basis-Schatten */
  --shadow-color: rgb(0 0 0 / 0.1);
  --shadow-color-darker: rgb(0 0 0 / 0.2);
  
  /* Schatten-Skala */
  --shadow-sm: 0 1px 2px var(--shadow-color);
  --shadow-md: 0 4px 6px var(--shadow-color), 0 1px 3px var(--shadow-color);
  --shadow-lg: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);
  --shadow-xl: 0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color);
  
  /* Komponenten-spezifische Schatten */
  --card-shadow: var(--shadow-md);
  --dropdown-shadow: var(--shadow-lg);
  --modal-shadow: var(--shadow-xl);
}
```

### Übergänge und Animationen

Tokens für Übergänge, Animationen und Bewegungen:

```css
:root {
  /* Übergangsdauern */
  --transition-duration-fast: 150ms;
  --transition-duration-normal: 300ms;
  --transition-duration-slow: 500ms;
  
  /* Übergangskurven */
  --transition-timing-default: ease;
  --transition-timing-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --transition-timing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Vordefinierte Übergänge */
  --transition-base: all var(--transition-duration-normal) var(--transition-timing-default);
  --transition-transform: transform var(--transition-duration-normal) var(--transition-timing-default);
  --transition-opacity: opacity var(--transition-duration-normal) var(--transition-timing-default);
  --transition-colors: background-color var(--transition-duration-normal) var(--transition-timing-default),
                     color var(--transition-duration-normal) var(--transition-timing-default),
                     border-color var(--transition-duration-normal) var(--transition-timing-default);
}
```

### Z-Index

Tokens für Z-Index-Werte zur Steuerung der Stapelreihenfolge:

```css
:root {
  /* Z-Index-Skala */
  --z-index-behind: -1;
  --z-index-base: 0;
  --z-index-raised: 1;
  --z-index-dropdown: 1000;
  --z-index-sticky: 1100;
  --z-index-fixed: 1200;
  --z-index-modal: 1300;
  --z-index-popover: 1400;
  --z-index-tooltip: 1500;
  --z-index-toast: 1600;
}
```

## Tokens und das Layer-System

Die Design Tokens sind im `tokens`-Layer definiert, einer der grundlegendsten Schichten in der Layer-Hierarchie. Dies stellt sicher, dass sie überall verfügbar sind, aber von späteren Layern überschrieben werden können.

```css
@layer tokens {
  :root {
    /* Design Tokens hier */
  }
}
```

Seit Version 0.5.0 enthält der tokens-Layer auch registrierte CSS-Eigenschaften, die zuvor im eigenen custom-properties-Layer definiert waren:

```css
@layer tokens {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
  
  @property --animation-progress {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }
}
```

## Tokens und Flüssige Eigenschaften

In Version 0.5.0 wurden flüssige Eigenschaften mit `interpolate-size` eingeführt, die es erlauben, Werte flüssig zwischen verschiedenen Größen zu interpolieren:

```css
@layer tokens {
  :root {
    interpolate-size: allow-keywords;
    
    /* Flüssige Typografie */
    --fluid-text-sm: small with-range(x-small, medium);
    --fluid-text-md: medium with-range(small, large);
    --fluid-text-lg: large with-range(medium, x-large);
  }
}
```

## Tokens und Responsive Design

Die Design Tokens können für verschiedene Breakpoints oder Container-Größen angepasst werden:

```css
@layer tokens {
  /* Basis-Tokens für alle Größen */
  :root {
    --space-unit: 0.25rem;
    --component-padding-x: var(--space-3);
  }
  
  /* Anpassungen für größere Bildschirme */
  @media (min-width: 768px) {
    :root {
      --component-padding-x: var(--space-4);
    }
  }
  
  /* Container-Query-basierte Anpassungen */
  @container layout (min-width: 40em) {
    :root {
      --component-padding-x: var(--space-5);
    }
  }
}
```

## Eigene Tokens hinzufügen

Sie können eigene Design Tokens im `tokens`-Layer definieren:

```css
@layer tokens {
  :root {
    /* Eigene Markenfarben */
    --color-brand-blue: #0055ff;
    --color-brand-gold: #ffaa00;
    
    /* Projektspezifische Abstände */
    --header-height: 4rem;
    --sidebar-width: 16rem;
  }
}
```

## Best Practices

1. **Tokens statt direkter Werte verwenden**: Verwenden Sie immer Design Tokens statt hardcodierter Werte, um Konsistenz zu gewährleisten.
2. **Semantische Benennungen**: Vermeiden Sie bedeutungslose Namen wie `--color-1`, bevorzugen Sie semantische Namen wie `--color-primary`.
3. **Abgeleitete Werte**: Leiten Sie Werte von Basis-Tokens ab, um Beziehungen auszudrücken (`--space-lg: calc(var(--space-md) * 1.5)`).
4. **Kommentare hinzufügen**: Dokumentieren Sie komplexe oder nicht offensichtliche Token-Werte.
5. **Layer-System respektieren**: Verwenden Sie den `tokens`-Layer für alle Token-Definitionen.

Mit der konsequenten Verwendung von Design Tokens schaffen Sie eine solide Grundlage für ein konsistentes, wartbares und anpassbares Designsystem.

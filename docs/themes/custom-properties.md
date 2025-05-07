---
title: Custom Properties
category: Themes
---

# Custom Properties

Die Casoon UI Library verwendet CSS Custom Properties (CSS-Variablen) für ein flexibles und konsistentes Theming-System. Die Basis-Definitionen befinden sich in der `base/theme.css`, die als Grundlage für Ihre eigenen Theme-Anpassungen dient.

## Basis-Theme-Struktur

Die `base/theme.css` definiert die grundlegenden Custom Properties:

```css
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
  
  /* Neutrale Farben */
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
  
  /* Typografie */
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
```

## Theme-Überschreibung

### 1. Direkte Überschreibung

Sie können die Custom Properties direkt in Ihrem CSS überschreiben:

```css
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
```

### 2. Theme-Klassen

Alternativ können Sie Theme-Klassen verwenden:

```css
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
```

### 3. Komponenten-spezifische Anpassungen

Sie können auch Custom Properties für spezifische Komponenten definieren:

```css
.card {
  --card-background: var(--color-white);
  --card-border-color: var(--color-gray-200);
  --card-shadow: var(--shadow-sm);
}

.button {
  --button-padding: var(--spacing-2) var(--spacing-4);
  --button-border-radius: var(--border-radius);
}
```

## Best Practices

### 1. Theme-Struktur

```css
/* 1. Basis-Theme (base/theme.css) */
:root {
  /* Grundlegende Custom Properties */
}

/* 2. Theme-Varianten */
.theme-light {
  /* Helles Theme */
}

.theme-dark {
  /* Dunkles Theme */
}

/* 3. Komponenten-spezifische Properties */
.component {
  /* Komponenten-spezifische Anpassungen */
}
```

### 2. Verwendung in Komponenten

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

### 3. Dynamische Anpassungen

```javascript
// Theme zur Laufzeit ändern
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');

// Oder Theme-Klasse wechseln
document.body.classList.remove('theme-light');
document.body.classList.add('theme-dark');
```

## Performance-Optimierung

1. **CSS-Variablen zusammenfassen**
   ```css
   /* In einer zentralen Datei */
   :root {
     /* Alle Custom Properties */
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

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

Für ältere Browser können Sie einen Polyfill wie [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) verwenden:

```javascript
import cssVars from 'css-vars-ponyfill';

cssVars({
  // Konfiguration
  watch: true,
  silent: true,
  preserveStatic: true
});
```

## Troubleshooting

### Theme wird nicht angewendet
- Überprüfen Sie die Spezifität der CSS-Regeln
- Stellen Sie sicher, dass die Custom Properties korrekt definiert sind
- Prüfen Sie die Layer-Reihenfolge

### Performance-Probleme
- Reduzieren Sie die Anzahl der Custom Properties
- Vermeiden Sie zu häufige Theme-Wechsel
- Nutzen Sie CSS-Variablen sparsam in Animationen

### Browser-Kompatibilität
- Testen Sie in verschiedenen Browsern
- Verwenden Sie Fallback-Werte
- Implementieren Sie einen Polyfill für ältere Browser 
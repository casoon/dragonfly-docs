---
title: Themes
category: Getting Started
---

# Themes

The Casoon UI Library offers a flexible theming system based on CSS Custom Properties. The base definitions are located in `base/theme.css`, which you can use as a foundation for your own theme customizations.

## Theme Structure

### 1. Base Theme

The base theme defines the fundamental Custom Properties in `base/theme.css`:

```css
:root {
  /* Color palette */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;

  /* More Custom Properties... */
}
```

### 2. Theme Variants

You can define different theme variants:

```css
/* Light theme (default) */
.theme-light {
  --color-background: var(--color-white);
  --color-text: var(--color-gray-900);
  --color-border: var(--color-gray-200);
}

/* Dark theme */
.theme-dark {
  --color-background: var(--color-gray-900);
  --color-text: var(--color-gray-100);
  --color-border: var(--color-gray-700);
}

/* Custom theme */
.theme-custom {
  --color-primary: #FF6B6B;
  --color-primary-light: #FF9E9E;
  --color-primary-dark: #FF3B3B;
}
```

## Theme Activation

### 1. HTML Attribute

```html
<!-- Default (light theme) -->
<html>
  <!-- Content -->
</html>

<!-- Dark theme -->
<html class="theme-dark">
  <!-- Content -->
</html>

<!-- Custom theme -->
<html class="theme-custom">
  <!-- Content -->
</html>
```

### 2. JavaScript

```javascript
// Change theme at runtime
document.documentElement.classList.remove('theme-light');
document.documentElement.classList.add('theme-dark');

// Or set Custom Properties directly
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');
```

## Theme Creation

### 1. Create a New Theme File

```css
/* themes/custom.css */
.theme-custom {
  /* Primary colors */
  --color-primary: #FF6B6B;
  --color-primary-light: #FF9E9E;
  --color-primary-dark: #FF3B3B;

  /* Secondary colors */
  --color-secondary: #4ECDC4;
  --color-secondary-light: #7EDCD6;
  --color-secondary-dark: #2EC4B8;

  /* Background and text */
  --color-background: #FFFFFF;
  --color-text: #2D3436;

  /* More customizations... */
}
```

### 2. Import Theme

```css
/* In your main CSS file */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/custom.css';
```

## Best Practices

1. **Theme Structure**
   - Use `base/theme.css` as a foundation
   - Define theme variants with classes
   - Keep Custom Properties consistent

2. **Performance**
   - Reduce the number of theme switches
   - Use CSS variables efficiently
   - Avoid too many nested variables

3. **Accessibility**
   - Ensure sufficient contrast
   - Test themes with screen readers
   - Provide alternatives for users with visual impairments

## Troubleshooting

### Theme is not applied
- Check the theme class
- Make sure the CSS file is imported
- Check the specificity of CSS rules

### Performance issues
- Reduce the number of Custom Properties
- Avoid frequent theme switches
- Optimize the CSS structure

### Browser compatibility
- Test in different browsers
- Use fallback values
- Implement a polyfill for older browsers

# Theme System

The theme system of the Casoon UI Library enables flexible design of your application's appearance with predefined themes and customizable design tokens.

## CSS Import

To use the complete Casoon UI theme system, simply import the `core.css` file:

```css
@import "@casoon/ui-lib/core.css";
```

This automatically loads the layer system, which includes all themes via `themes.css`.

## Layer Structure

The themes are part of the central layer system and are defined under the `themes` layer. The order of the layers determines CSS specificity, and the `themes` layer has one of the highest priorities:

```css
@layer reset,
       tokens,
       core,
       ...
       effects,
       themes;
```

## Available Themes

Casoon UI offers the following predefined themes:

| Theme | Description | Activation Class |
|-------|-------------|---------------------|
| Day (Default) | Light theme with neutral colors | `theme-day` |
| Night | Dark theme for reduced eye strain | `theme-night` |
| Spring | Fresh, light theme with green tones | `theme-spring` |
| Summer | Warm theme with vibrant colors | `theme-summer` |
| Autumn | Warm theme with earth tones | `theme-autumn` |
| Winter | Cool, muted theme with blue tones | `theme-winter` |
| Ocean | Calm theme with blue tones and sea colors | `theme-ocean` |
| Forest | Natural theme with green and brown tones | `theme-forest` |
| Brand | Customizable theme for brand identity | `theme-brand` |
| Pastel | Soft pastel colors | `theme-pastel` |
| Neon | Vibrant, bright colors | `theme-neon` |
| Monochrome | Black and white palette | `theme-monochrome` |
| Retro | Vintage-inspired design | `theme-retro` |
| Sunset | Warm evening colors | `theme-sunset` |
| Dark Mode | Optimized for dark environments | `theme-dark-mode` |
| Accessibility | Optimized for accessibility | `theme-accessibility` |

## Theme Activation

To activate a theme, add the corresponding class to the `<html>` or `<body>` element:

```html
<html class="theme-night">
  <!-- All content will be displayed in the Night theme -->
</html>
```

or

```html
<body class="theme-summer">
  <!-- Page content will be displayed in the Summer theme -->
</body>
```

## Theme Integration

### Importing Theme Files

The simplest method is to import core.css, which automatically loads all themes:

```css
@import '@casoon/ui-lib/core.css';
```

Alternatively, you can also import specific themes:

```css
/* Import base styles */
@import '@casoon/ui-lib/core.css';

/* Override or add specific theme */
@import '@casoon/ui-lib/themes/night.css';
```

## Dynamic Theme Switching

You can dynamically switch themes by changing the theme class with JavaScript:

```js
// Switch to Night theme
document.documentElement.className = 'theme-night';

// Or when maintaining other classes
document.documentElement.classList.add('theme-night');
document.documentElement.classList.remove('theme-day');
```

### Example of a Theme Switcher

```html
<div class="theme-switcher">
  <button onclick="setTheme('theme-day')">Day</button>
  <button onclick="setTheme('theme-night')">Night</button>
  <button onclick="setTheme('theme-ocean')">Ocean</button>
</div>

<script>
function setTheme(themeName) {
  // Remove all theme classes
  document.documentElement.classList.remove(
    'theme-day', 'theme-night', 'theme-spring', 
    'theme-summer', 'theme-autumn', 'theme-winter',
    'theme-ocean', 'theme-forest', 'theme-contrast'
  );

  // Add the new theme class
  document.documentElement.classList.add(themeName);

  // Save the selection in localStorage
  localStorage.setItem('preferred-theme', themeName);
}

// Restore theme from localStorage
const savedTheme = localStorage.getItem('preferred-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check operating system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('theme-night');
  } else {
    setTheme('theme-day');
  }
}

// React to changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!localStorage.getItem('preferred-theme')) {
    setTheme(event.matches ? 'theme-night' : 'theme-day');
  }
});
</script>
```

### React Implementation of a Theme Switcher

```jsx
import { useState, useEffect } from 'react';

// Import required themes
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/themes/night.css';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('theme-day');

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('theme-night');
    }

    // Apply theme to HTML element
    document.documentElement.className = currentTheme;

    // Save theme change
    localStorage.setItem('preferred-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher flex flex--gap-2">
      <button 
        className={`btn ${currentTheme === 'theme-day' ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => setCurrentTheme('theme-day')}
      >
        Day
      </button>
      <button 
        className={`btn ${currentTheme === 'theme-night' ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => setCurrentTheme('theme-night')}
      >
        Night
      </button>
    </div>
  );
}

export default ThemeSwitcher;
```

## Theme Structure

Each theme defines its own values for design tokens such as colors, spacing, border radii, and shadows. These are implemented as CSS variables:

```css
.theme-day {
  --color-primary: #4361ee;
  --color-secondary: #3f37c9;
  --color-accent: #f72585;
  --color-neutral: #4a4e69;

  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;

  /* Backgrounds */
  --bg-base: #ffffff;
  --bg-muted: #f5f5f5;
  --bg-subtle: #e5e5e5;

  /* Text */
  --text-primary: #212121;
  --text-secondary: #4a4e69;
  --text-muted: #6c757d;

  /* Contrast colors for main colors */
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-accent: #ffffff;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Border radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}

.theme-night {
  --color-primary: #7579e7;
  --color-secondary: #9ab3f5;
  --color-accent: #ff79c6;
  --color-neutral: #a5b1c2;

  --color-success: #50fa7b;
  --color-warning: #ffb86c;
  --color-error: #ff5555;
  --color-info: #8be9fd;

  /* Backgrounds */
  --bg-base: #282a36;
  --bg-muted: #44475a;
  --bg-subtle: #373a49;

  /* Text */
  --text-primary: #f8f8f2;
  --text-secondary: #d1d1e0;
  --text-muted: #a5b1c2;

  /* Contrast colors for main colors */
  --color-on-primary: #282a36;
  --color-on-secondary: #282a36;
  --color-on-accent: #282a36;

  /* Shadows with adjusted visibility for dark themes */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);

  /* Border radii (same as in Day theme) */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}
```

## Components with Theme Support

All components automatically use the theme variables, ensuring a consistent appearance throughout the application:

```css
/* Button component with theme variables */
.btn {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: background-color 0.2s, box-shadow 0.2s;
}

.btn:hover {
  background-color: var(--color-primary-hover, color-mix(in srgb, var(--color-primary), #000 10%));
  box-shadow: var(--shadow-md);
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}

/* Card component with theme variables */
.card {
  background-color: var(--bg-base);
  color: var(--text-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* ... more components ... */
```

## Theme Customization

You can override the theme variables in your own CSS file to customize the appearance:

### Simple Customizations

```css
/* Customize the Day theme with your brand color */
.theme-day {
  --color-primary: #ff6b6b; /* Your brand color */
  --color-secondary: #51cf66; /* Your secondary color */
}
```

### Create Your Own Theme

```css
/* Your custom theme */
.theme-custom {
  /* Copy base from Day theme and customize */
  --color-primary: #7048e8;
  --color-secondary: #5f3dc4;
  --color-accent: #f03e3e;
  --color-neutral: #495057;

  --color-success: #37b24d;
  --color-warning: #f59f00;
  --color-error: #e03131;
  --color-info: #1c7ed6;

  --bg-base: #f8f9fa;
  --bg-muted: #e9ecef;
  --bg-subtle: #dee2e6;

  --text-primary: #212529;
  --text-secondary: #343a40;
  --text-muted: #6c757d;

  /* ... more customizations ... */
}
```

## Color Palettes for Themes

The color system uses semantic variables for various use cases. Each theme defines these variables with specific values:

```css
:root {
  /* Primary color with shades */
  --color-primary-50: #eef2ff;
  --color-primary-100: #d8e3fe;
  --color-primary-200: #b6c9fc;
  --color-primary-300: #91a7f7;
  --color-primary-400: #748fee;
  --color-primary: #4361ee; /* 500 */
  --color-primary-600: #3a50d6;
  --color-primary-700: #2f3eb1;
  --color-primary-800: #283590;
  --color-primary-900: #1f2671;

  /* ... more color palettes ... */
}
```

### Using Different Color Shades

```html
<div class="bg-primary-100 text-primary-900 p-4">
  Primary color: Light background with dark text
</div>

<div class="bg-primary-900 text-primary-100 p-4">
  Primary color: Dark background with light text
</div>
```

## Support for User Preferences

Casoon UI Themes can respond to user preferences:

### System Color Scheme (Light/Dark)

```css
/* Automatic adaptation to operating system setting */
@media (prefers-color-scheme: dark) {
  :root:not([class*="theme-"]) {
    /* Dark Mode as default when no theme class is set */
    --color-primary: var(--night-color-primary);
    --color-secondary: var(--night-color-secondary);
    /* ... more variables ... */
  }
}

@media (prefers-color-scheme: light) {
  :root:not([class*="theme-"]) {
    /* Light Mode as default when no theme class is set */
    --color-primary: var(--day-color-primary);
    --color-secondary: var(--day-color-secondary);
    /* ... more variables ... */
  }
}
```

### Reduced Motion

```css
/* Default animations */
:root {
  --transition-speed: 0.3s;
  --animation-duration: 1s;
}

/* Reduced animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-speed: 0.1s;
    --animation-duration: 0.3s;
  }

  /* Disable complex animations */
  .animated {
    animation: none !important;
    transition: none !important;
  }
}
```

## Accessibility

Casoon UI Themes are optimized for accessibility:

- All themes achieve at least an AA contrast ratio according to WCAG 2.1
- The Contrast theme offers higher contrast ratios (AAA according to WCAG 2.1)
- Color combinations are checked for readability
- Themes support the user preference `prefers-color-scheme`

### Contrast Theme for Higher Accessibility

```css
.theme-contrast {
  /* Maximum contrasts for better readability */
  --color-primary: #0000e6;
  --color-secondary: #660099;
  --color-accent: #cc0000;

  --bg-base: #ffffff;
  --bg-muted: #f0f0f0;

  --text-primary: #000000;
  --text-secondary: #333333;

  /* Larger font and spacing */
  --font-size-base: 1.125rem; /* 18px instead of 16px */
  --line-height-base: 1.8;
  --spacing-base: 1.25rem;

  /* Stronger focus indicators */
  --focus-ring-width: 3px;
  --focus-ring-color: #0000e6;
}
```

## Integration in Build Processes

### Vite Configuration

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@casoon/ui-lib/src/themes/variables.scss";`
      }
    }
  }
});
```

### Webpack Configuration

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "@casoon/ui-lib/src/themes/variables.scss";`
            }
          }
        ]
      }
    ]
  }
};
```

## Best Practices for Themes

- **Semantic Variables** - Use semantic theme variables instead of hardcoded color values
- **Check Contrast** - Test color combinations for sufficient contrast (at least 4.5:1 for text)
- **Plan for Accessibility** - Offer alternative themes for users with special needs
- **Test Theme Switching** - Ensure all components update correctly
- **Optimize Dark Mode** - Reduce brightness of images in dark themes
- **Respect System Settings** - Support `prefers-color-scheme` and `prefers-reduced-motion`
- **Consistent Contrast Colors** - Define a matching contrast color for each semantic color 

## Creating Custom Themes

You can create custom themes by using the themes layer:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Define custom theme in themes layer */
@layer themes {
  .theme-custom {
    --color-primary: #ff6b6b;
    --color-secondary: #4ecdc4;
    --color-accent: #ffe66d;

    --bg-base: #f7fff7;
    --text-primary: #1a535c;

    /* Define more theme tokens */
  }
}
```

This integrates your custom theme seamlessly into the existing theme hierarchy.

## Best Practices for the Theme System

- **Use Theme Tokens in Your Components** - Use `var(--color-primary)` instead of direct color values
- **Provide Theme Switchers** - Give users the ability to choose their preferred theme
- **Consider System Settings** - Respect `prefers-color-scheme` for dark/light preferences
- **Test Themes for Contrast** - Ensure all themes provide sufficient contrast for readability
- **Consistent Semantics Across Themes** - Make sure that semantic colors like `success` or `error` maintain their meaning across all themes 

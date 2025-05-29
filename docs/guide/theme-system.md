---
title: Theme system
category: Guide
---

# Theme system

The Theme system of the Casoon UI Library enables flexible customization of your application's visual appearance through predefined themes and customizable design tokens.

## Structure of the Theme system

The themes are part of the layer system and are defined under the `themes` layer. This gives them a high priority in the cascade:

```css
@layer reset,
       tokens,
       ...
       animations,
       effects,
       themes;  /* Themes have one of the highest priorities */
```

The themes are organized in the `themes.css` file:

```css
/**
 * Themes CSS
 *
 * Central file for organizing and including all themes.
 */

/* Theme basics */
@import url('./themes/theme-base.css');

/* Day/Night themes */
@import url('./themes/day.css');
@import url('./themes/night.css');
@import url('./themes/dark-mode.css');

/* Seasonal themes */
@import url('./themes/spring.css');
@import url('./themes/summer.css');
@import url('./themes/autumn.css');
@import url('./themes/winter.css');

/* Additional themes */
@import url('./themes/brand.css');
@import url('./themes/forest.css');
@import url('./themes/ocean.css');
@import url('./themes/pastel.css');
@import url('./themes/monochrome.css');
@import url('./themes/neon.css');
@import url('./themes/retro.css');
@import url('./themes/sunset.css');

/* Accessibility */
@import url('./themes/accessibility.css');
```

## Available Themes

The Casoon UI Library offers the following predefined themes:

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
| Neon | Vibrant, luminous colors | `theme-neon` |
| Monochrome | Black and white palette | `theme-monochrome` |
| Retro | Vintage-inspired design | `theme-retro` |
| Sunset | Warm evening colors | `theme-sunset` |
| Dark Mode | Optimized for dark environments | `theme-dark-mode` |
| Accessibility | Optimized for accessibility | `theme-accessibility` |

## Theme Usage in Your Own Projects

To use themes in your project:

### 1. Complete Integration of All Themes

Import the core.css, which automatically loads all themes:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selective Integration of Individual Themes

You can also import only selected themes:

```css
/* Import base layer system */
@import "@casoon/ui-lib/layers.css";

/* Import only required themes */
@import "@casoon/ui-lib/themes/theme-base.css";
@import "@casoon/ui-lib/themes/day.css";
@import "@casoon/ui-lib/themes/night.css";
```

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
  <!-- The page content will be displayed in the Summer theme -->
</body>
```

## Dynamic Theme Switching

### Example for a Theme Switcher

```html
<div class="theme-switcher">
  <button onclick="setTheme('theme-day')">Day</button>
  <button onclick="setTheme('theme-night')">Night</button>
</div>

<script>
function setTheme(themeName) {
  // Remove all theme classes
  document.documentElement.classList.remove(
    'theme-day', 'theme-night', 'theme-spring', 
    'theme-summer', 'theme-autumn', 'theme-winter',
    'theme-ocean', 'theme-forest', 'theme-brand',
    'theme-pastel', 'theme-neon', 'theme-monochrome',
    'theme-retro', 'theme-sunset', 'theme-dark-mode',
    'theme-accessibility'
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
  // Check for operating system preference
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

## Creating Your Own Themes

You can create your own themes by using the themes layer:

```css
/* Your own CSS file */
@import "@casoon/ui-lib/core.css";

/* Define your own theme in the themes layer */
@layer themes {
  .theme-custom {
    --color-primary: #ff6b6b;
    --color-secondary: #4ecdc4;
    --color-accent: #ffe66d;

    --bg-base: #f7fff7;
    --text-primary: #1a535c;

    /* Define additional theme tokens */
  }
}
```

## Theme Structure and Design Tokens

Each theme defines a series of design tokens as CSS variables:

```css
.theme-day {
  /* Primary color palette */
  --color-primary: #4361ee;
  --color-secondary: #3f37c9;
  --color-accent: #f72585;

  /* Functional colors */
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

  /* Contrast colors */
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-accent: #ffffff;

  /* Additional theme-specific tokens */
}
```

## Best Practices

- **Use theme tokens in your components** - Use `var(--color-primary)` instead of direct color values
- **Offer theme switchers** - Give users the ability to choose their preferred theme
- **Consider system settings** - Respect `prefers-color-scheme` for dark/light preferences
- **Test themes for contrast** - Ensure all themes provide sufficient contrast for readability
- **Consistent semantics across themes** - Make sure that semantic colors like `success` or `error` maintain their meaning in all themes
- **Support accessibility** - Offer special themes for users with specific needs

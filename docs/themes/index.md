---
title: theme-system
category: themes
---

# theme-system

the theme-system the Casoon UI Library ermoglicht a flexible Gestaltung des Erscheinungsbilds Ihrer Application with vordefinierten themes and anpassbaren design Tokens.

## CSS-Import

Um the komplette Casoon UI theme-system to use, import them einfach the `core.css` file:

```css
@import "@casoon/ui-lib/core.css";
```

by doing so wird automatisch the Layer system geladen, welches all themes over `themes.css` enthalt.

## Layer-Structure

the themes sind Teil des zentralen Layer Systems and become under dem `themes`-Layer definiert. the Reihenfolge the Layer bestimmt the CSS-Spezifitat, and the `themes`-Layer hat a the hochsten Prioritaten:

```css
@layer reset,
       tokens,
       core,
       ...
       effects,
       themes;
```

## Verfugbare themes

Casoon UI bietet folgende vordefinierte themes:

| theme | Description | Aktivierungs-Class |
|-------|-------------|---------------------|
| Day (Standard) | Helles theme with neutralen Colors | `theme-day` |
| Night | Dunkles theme for reduzierte Augenbelastung | `theme-night` |
| Spring | Frisches, helles theme with Gruntonen | `theme-spring` |
| Summer | Warmes theme with lebendigen Colors | `theme-summer` |
| Autumn | Warmes theme with Erdtonen | `theme-autumn` |
| Winter | Kuhles, gedampftes theme with Blautonen | `theme-winter` |
| Ocean | Ruhiges theme with Blautonen and Meeresfarben | `theme-ocean` |
| Forest | Naturliches theme with Grun- and Brauntonen | `theme-forest` |
| Brand | Anpassbares theme for Markenidentitat | `theme-brand` |
| Pastel | Sanfte Pastellfarben | `theme-pastel` |
| Neon | Lebendige, leuchtende Colors | `theme-neon` |
| Monochrome | Schwarz-Weiss-Palette | `theme-monochrome` |
| Retro | Vintage-inspiriertes design | `theme-retro` |
| Sunset | Warme Abendfarben | `theme-sunset` |
| Dark Mode | Optimiert for dunkle Umgebungen | `theme-dark-mode` |
| Accessibility | Optimiert for Accessibility | `theme-accessibility` |

## theme-Aktivierung

Um a theme to activate, fugen them the entsprechende Class zum `<html>` or `<body>` element hinzu:

```html
<html class="theme-night">
  <!-- the gesamte content wird im Night-theme dargestellt -->
</html>
```

or

```html
<body class="theme-summer">
  <!-- the Seiteninhalt wird im Summer-theme dargestellt -->
</body>
```

## theme-Integration

### import the theme-Dateien

the einfachste Method ist the Import the core.css, the automatisch all themes ladt:

```css
@import '@casoon/ui-lib/core.css';
```

Alternativ can them also gezielt einzelne themes import:

```css
/* Base-Styles import */
@import '@casoon/ui-lib/core.css';

/* Spezifisches theme overwrite or add */
@import '@casoon/ui-lib/themes/night.css';
```

## Dynamischer theme-Wechsel

You can themes dynamisch wechseln, indem them the theme-Class with JavaScript change:

```js
// theme on Night umstellen
document.documentElement.className = 'theme-night';

// or at Beibehaltung anderer classes
document.documentElement.classList.add('theme-night');
document.documentElement.classList.remove('theme-day');
```

### Example for einen theme-Switcher

```html
<div class="theme-switcher">
  <button onclick="setTheme('theme-day')">tag</button>
  <button onclick="setTheme('theme-night')">Nacht</button>
  <button onclick="setTheme('theme-ocean')">Ozean</button>
</div>

<script>
function setTheme(themeName) {
  // Entferne all theme-classes
  document.documentElement.classList.remove(
    'theme-day', 'theme-night', 'theme-spring', 
    'theme-summer', 'theme-autumn', 'theme-winter',
    'theme-ocean', 'theme-forest', 'theme-contrast'
  );

  // Fuge the neue theme-Class hinzu
  document.documentElement.classList.add(themeName);

  // Speichere the selection im localStorage
  localStorage.setItem('preferred-theme', themeName);
}

// theme aus localStorage wiederherstellen
const savedTheme = localStorage.getItem('preferred-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Prufe on Betriebssystem-Praferenz
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('theme-night');
  } else {
    setTheme('theme-day');
  }
}

// Reagiere on Anderungen the Systempraferenz
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!localStorage.getItem('preferred-theme')) {
    setTheme(event.matches ? 'theme-night' : 'theme-day');
  }
});
</script>
```

### React-Implementation eines theme-Switchers

```jsx
import { useState, useEffect } from 'react';

// Import the benotigten themes
import '@casoon/ui-lib/dist/core.css';
import '@casoon/ui-lib/dist/themes/day.css';
import '@casoon/ui-lib/dist/themes/night.css';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('theme-day');

  useEffect(() => {
    // theme aus localStorage load
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('theme-night');
    }

    // theme on HTML-element anwenden
    document.documentElement.className = currentTheme;

    // theme-Anderung save
    localStorage.setItem('preferred-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher flex flex--gap-2">
      <button 
        className={`btn ${currentTheme === 'theme-day' ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => setCurrentTheme('theme-day')}
      >
        tag
      </button>
      <button 
        className={`btn ${currentTheme === 'theme-night' ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => setCurrentTheme('theme-night')}
      >
        Nacht
      </button>
    </div>
  );
}

export default ThemeSwitcher;
```

## theme-Structure

Jedes theme definiert own values for design Tokens how Colors, Abstande, Rundungen and Schattierungen. these become as CSS Variables implementiert:

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

  /* Hintergrunde */
  --bg-base: #ffffff;
  --bg-muted: #f5f5f5;
  --bg-subtle: #e5e5e5;

  /* Text */
  --text-primary: #212121;
  --text-secondary: #4a4e69;
  --text-muted: #6c757d;

  /* Kontrast-Colors for the Hauptfarben */
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-accent: #ffffff;

  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Rundungen */
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

  /* Hintergrunde */
  --bg-base: #282a36;
  --bg-muted: #44475a;
  --bg-subtle: #373a49;

  /* Text */
  --text-primary: #f8f8f2;
  --text-secondary: #d1d1e0;
  --text-muted: #a5b1c2;

  /* Kontrast-Colors for the Hauptfarben */
  --color-on-primary: #282a36;
  --color-on-secondary: #282a36;
  --color-on-accent: #282a36;

  /* shadow with angepasster visibility for dunkle themes */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);

  /* Rundungen (gleich how im Day-theme) */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}
```

## Components with theme-Unterstutzung

all Components use automatisch the theme-variables, by what a konsistentes Erscheinungsbild in the gesamten Application gewahrleistet wird:

```css
/* button-Component with theme-variables */
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

/* Card-Component with theme-variables */
.card {
  background-color: var(--bg-base);
  color: var(--text-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* ... additional Components ... */
```

## theme-Customization

You can the theme-variables in Ihrer eigenen CSS-file overwrite, um the Erscheinungsbild anzupassen:

### Einfache customizations

```css
/* customize des Day-themes with Ihrer Markenfarbe */
.theme-day {
  --color-primary: #ff6b6b; /* Ihre Markenfarbe */
  --color-secondary: #51cf66; /* Ihre sekundare color */
}
```

### Eigenes theme create

```css
/* Eigenes benutzerdefiniertes theme */
.theme-custom {
  /* Base vom Day-theme kopieren and customize */
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

  /* ... additional customizations ... */
}
```

## Farbpaletten for themes

the Color system verwendet semantische variables for verschiedene Use Cases. Jedes theme definiert these variables with spezifischen Werten:

```css
:root {
  /* Primarfarbe with Schattierungen */
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

  /* ... additional Farbpaletten ... */
}
```

### Usage verschiedener Farbschattierungen

```html
<div class="bg-primary-100 text-primary-900 p-4">
  Primarfarbe: Heller background with dunkler font
</div>

<div class="bg-primary-900 text-primary-100 p-4">
  Primarfarbe: Dunkler background with heller font
</div>
```

## Unterstutzung for Benutzereinstellungen

Casoon UI themes can on Benutzereinstellungen reagieren:

### system-color scheme (Hell/Dunkel)

```css
/* Automatische Customization on Betriebssystem-Setting */
@media (prefers-color-scheme: dark) {
  :root:not([class*="theme-"]) {
    /* Dark Mode as Standard, if no theme-Class gesetzt ist */
    --color-primary: var(--night-color-primary);
    --color-secondary: var(--night-color-secondary);
    /* ... additional variables ... */
  }
}

@media (prefers-color-scheme: light) {
  :root:not([class*="theme-"]) {
    /* Light Mode as Standard, if no theme-Class gesetzt ist */
    --color-primary: var(--day-color-primary);
    --color-secondary: var(--day-color-secondary);
    /* ... additional variables ... */
  }
}
```

### Reduzierte Bewegung

```css
/* Standardanimationen */
:root {
  --transition-speed: 0.3s;
  --animation-duration: 1s;
}

/* Reduzierte animations for user, the reduzierte Bewegung bevorzugen */
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-speed: 0.1s;
    --animation-duration: 0.3s;
  }

  /* Komplexe animations deactivate */
  .animated {
    animation: none !important;
    transition: none !important;
  }
}
```

## Accessibility

Casoon UI themes sind for Accessibility optimiert:

- all themes erreichen mindestens a Kontrastverhaltnis from AA after WCAG 2.1
- the Contrast-theme bietet hohere Kontrastverhaltnisse (AAA after WCAG 2.1)
- Farbkombinationen become on Lesbarkeit gepruft
- themes unterstutzen the Benutzereinstellung `prefers-color-scheme`

### Contrast-theme for hohere Accessibility

```css
.theme-contrast {
  /* Maximale Kontraste for bessere Lesbarkeit */
  --color-primary: #0000e6;
  --color-secondary: #660099;
  --color-accent: #cc0000;

  --bg-base: #ffffff;
  --bg-muted: #f0f0f0;

  --text-primary: #000000;
  --text-secondary: #333333;

  /* Grossere font and Abstande */
  --font-size-base: 1.125rem; /* 18px instead of 16px */
  --line-height-base: 1.8;
  --spacing-base: 1.25rem;

  /* Starkere Fokus-Indikatoren */
  --focus-ring-width: 3px;
  --focus-ring-color: #0000e6;
}
```

## Integration in Build-Prozesse

### Vite-Configuration

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

### Webpack-Configuration

```js
// webpack.config.js
modules.exports = {
  modules: {
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

## Best Practices for themes

- **Semantische variables** - use them semantische theme-variables instead of hardcodierter Farbwerte
- **Kontrast prufen** - Testen them Farbkombinationen on ausreichenden Kontrast (mindestens 4.5:1 for Text)
- **Accessibility einplanen** - Bieten them alternative themes for user with besonderen Bedurfnissen
- **theme-Wechsel testen** - ensure, that all Components korrekt aktualisiert become
- **Dark Mode optimieren** - Reduzieren them in dunklen themes the Helligkeit from Bildern
- **Systemeinstellungen respektieren** - Unterstutzen them `prefers-color-scheme` and `prefers-reduced-motion`
- **Konsistente Kontrast-Colors** - define them for jede semantische color a passende Kontrastfarbe 

## own themes create

You can own themes create, indem them den themes-Layer use:

```css
/* own CSS-file */
@import "@casoon/ui-lib/core.css";

/* Eigenes theme im themes-Layer define */
@layer themes {
  .theme-custom {
    --color-primary: #ff6b6b;
    --color-secondary: #4ecdc4;
    --color-accent: #ffe66d;

    --bg-base: #f7fff7;
    --text-primary: #1a535c;

    /* additional theme-Tokens define */
  }
}
```

by doing so fugt oneself her Custom-theme nahtlos in the bestehende theme-Hierarchie a.

## Best Practices for the theme-system

- **use them theme-Tokens in Ihren Components** - use them `var(--color-primary)` instead of direkter Farbwerte
- **Bieten them theme-Switcher on** - Geben them Nutzern the Moglichkeit, her bevorzugtes theme to wahlen
- **Berucksichtigen them Systemeinstellungen** - Respektieren them `prefers-color-scheme` for dunkel/hell-Praferenzen
- **Testen them themes on Kontrast** - ensure, that all themes ausreichend Kontrast for Lesbarkeit bieten
- **Konsistente Semantik over themes hinweg** - make sure, that semantische Colors how `success` or `error` in allen themes ihre Bedeutung beibehalten 

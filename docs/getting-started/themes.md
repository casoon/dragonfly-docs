---
title: Themes
category: Getting Started
---

# Themes

Die Casoon UI Library bietet ein flexibles Theming-System, das auf CSS Custom Properties basiert. Die Basis-Definitionen befinden sich in der `base/theme.css`, die Sie als Grundlage für Ihre eigenen Theme-Anpassungen verwenden können.

## Theme-Struktur

### 1. Basis-Theme

Das Basis-Theme definiert die grundlegenden Custom Properties in `base/theme.css`:

```css
:root {
  /* Farbpalette */
  --color-primary: #3366FF;
  --color-primary-light: #6699FF;
  --color-primary-dark: #0033CC;

  /* Weitere Custom Properties... */
}
```

### 2. Theme-Varianten

Sie können verschiedene Theme-Varianten definieren:

```css
/* Helles Theme (Standard) */
.theme-light {
  --color-background: var(--color-white);
  --color-text: var(--color-gray-900);
  --color-border: var(--color-gray-200);
}

/* Dunkles Theme */
.theme-dark {
  --color-background: var(--color-gray-900);
  --color-text: var(--color-gray-100);
  --color-border: var(--color-gray-700);
}

/* Custom Theme */
.theme-custom {
  --color-primary: #FF6B6B;
  --color-primary-light: #FF9E9E;
  --color-primary-dark: #FF3B3B;
}
```

## Theme-Aktivierung

### 1. HTML-Attribut

```html
<!-- Standard (helles Theme) -->
<html>
  <!-- Inhalt -->
</html>

<!-- Dunkles Theme -->
<html class="theme-dark">
  <!-- Inhalt -->
</html>

<!-- Custom Theme -->
<html class="theme-custom">
  <!-- Inhalt -->
</html>
```

### 2. JavaScript

```javascript
// Theme zur Laufzeit ändern
document.documentElement.classList.remove('theme-light');
document.documentElement.classList.add('theme-dark');

// Oder Custom Properties direkt setzen
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');
```

## Theme-Erstellung

### 1. Neue Theme-Datei erstellen

```css
/* themes/custom.css */
.theme-custom {
  /* Primärfarben */
  --color-primary: #FF6B6B;
  --color-primary-light: #FF9E9E;
  --color-primary-dark: #FF3B3B;

  /* Sekundärfarben */
  --color-secondary: #4ECDC4;
  --color-secondary-light: #7EDCD6;
  --color-secondary-dark: #2EC4B8;

  /* Hintergrund und Text */
  --color-background: #FFFFFF;
  --color-text: #2D3436;

  /* Weitere Anpassungen... */
}
```

### 2. Theme importieren

```css
/* In Ihrer Haupt-CSS-Datei */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/custom.css';
```

## Best Practices

1. **Theme-Struktur**
   - Verwenden Sie die `base/theme.css` als Grundlage
   - Definieren Sie Theme-Varianten mit Klassen
   - Halten Sie die Custom Properties konsistent

2. **Performance**
   - Reduzieren Sie die Anzahl der Theme-Wechsel
   - Nutzen Sie CSS-Variablen effizient
   - Vermeiden Sie zu viele verschachtelte Variablen

3. **Zugänglichkeit**
   - Stellen Sie ausreichenden Kontrast sicher
   - Testen Sie Themes mit Screenreadern
   - Bieten Sie Alternativen für Nutzer mit Sehschwäche

## Troubleshooting

### Theme wird nicht angewendet
- Überprüfen Sie die Theme-Klasse
- Stellen Sie sicher, dass die CSS-Datei importiert ist
- Prüfen Sie die Spezifität der CSS-Regeln

### Performance-Probleme
- Reduzieren Sie die Anzahl der Custom Properties
- Vermeiden Sie zu häufige Theme-Wechsel
- Optimieren Sie die CSS-Struktur

### Browser-Kompatibilität
- Testen Sie in verschiedenen Browsern
- Verwenden Sie Fallback-Werte
- Implementieren Sie einen Polyfill für ältere Browser

# Theme-System

Das Theme-System der Casoon UI Library ermöglicht eine flexible Gestaltung des Erscheinungsbilds Ihrer Anwendung mit vordefinierten Themes und anpassbaren Design-Tokens.

## CSS-Import

Um das komplette Casoon UI Theme-System zu nutzen, importieren Sie einfach die `core.css` Datei:

```css
@import "@casoon/ui-lib/core.css";
```

Dadurch wird automatisch das Layer-System geladen, welches alle Themes über `themes.css` enthält.

## Layer-Struktur

Die Themes sind Teil des zentralen Layer-Systems und werden unter dem `themes`-Layer definiert. Die Reihenfolge der Layer bestimmt die CSS-Spezifität, und der `themes`-Layer hat eine der höchsten Prioritäten:

```css
@layer reset,
       tokens,
       core,
       ...
       effects,
       themes;
```

## Verfügbare Themes

Casoon UI bietet folgende vordefinierte Themes:

| Theme | Beschreibung | Aktivierungs-Klasse |
|-------|-------------|---------------------|
| Day (Standard) | Helles Theme mit neutralen Farben | `theme-day` |
| Night | Dunkles Theme für reduzierte Augenbelastung | `theme-night` |
| Spring | Frisches, helles Theme mit Grüntönen | `theme-spring` |
| Summer | Warmes Theme mit lebendigen Farben | `theme-summer` |
| Autumn | Warmes Theme mit Erdtönen | `theme-autumn` |
| Winter | Kühles, gedämpftes Theme mit Blautönen | `theme-winter` |
| Ocean | Ruhiges Theme mit Blautönen und Meeresfarben | `theme-ocean` |
| Forest | Natürliches Theme mit Grün- und Brauntönen | `theme-forest` |
| Brand | Anpassbares Theme für Markenidentität | `theme-brand` |
| Pastel | Sanfte Pastellfarben | `theme-pastel` |
| Neon | Lebendige, leuchtende Farben | `theme-neon` |
| Monochrome | Schwarz-Weiß-Palette | `theme-monochrome` |
| Retro | Vintage-inspiriertes Design | `theme-retro` |
| Sunset | Warme Abendfarben | `theme-sunset` |
| Dark Mode | Optimiert für dunkle Umgebungen | `theme-dark-mode` |
| Accessibility | Optimiert für Barrierefreiheit | `theme-accessibility` |

## Theme-Aktivierung

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<html class="theme-night">
  <!-- Der gesamte Inhalt wird im Night-Theme dargestellt -->
</html>
```

oder

```html
<body class="theme-summer">
  <!-- Der Seiteninhalt wird im Summer-Theme dargestellt -->
</body>
```

## Theme-Integration

### Importieren der Theme-Dateien

Die einfachste Methode ist der Import der core.css, die automatisch alle Themes lädt:

```css
@import '@casoon/ui-lib/core.css';
```

Alternativ können Sie auch gezielt einzelne Themes importieren:

```css
/* Basis-Styles importieren */
@import '@casoon/ui-lib/core.css';

/* Spezifisches Theme überschreiben oder hinzufügen */
@import '@casoon/ui-lib/themes/night.css';
```

## Dynamischer Theme-Wechsel

Sie können Themes dynamisch wechseln, indem Sie die Theme-Klasse mit JavaScript ändern:

```js
// Theme auf Night umstellen
document.documentElement.className = 'theme-night';

// Oder bei Beibehaltung anderer Klassen
document.documentElement.classList.add('theme-night');
document.documentElement.classList.remove('theme-day');
```

### Beispiel für einen Theme-Switcher

```html
<div class="theme-switcher">
  <button onclick="setTheme('theme-day')">Tag</button>
  <button onclick="setTheme('theme-night')">Nacht</button>
  <button onclick="setTheme('theme-ocean')">Ozean</button>
</div>

<script>
function setTheme(themeName) {
  // Entferne alle Theme-Klassen
  document.documentElement.classList.remove(
    'theme-day', 'theme-night', 'theme-spring', 
    'theme-summer', 'theme-autumn', 'theme-winter',
    'theme-ocean', 'theme-forest', 'theme-contrast'
  );

  // Füge die neue Theme-Klasse hinzu
  document.documentElement.classList.add(themeName);

  // Speichere die Auswahl im localStorage
  localStorage.setItem('preferred-theme', themeName);
}

// Theme aus localStorage wiederherstellen
const savedTheme = localStorage.getItem('preferred-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Prüfe auf Betriebssystem-Präferenz
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('theme-night');
  } else {
    setTheme('theme-day');
  }
}

// Reagiere auf Änderungen der Systempräferenz
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if (!localStorage.getItem('preferred-theme')) {
    setTheme(event.matches ? 'theme-night' : 'theme-day');
  }
});
</script>
```

### React-Implementation eines Theme-Switchers

```jsx
import { useState, useEffect } from 'react';

// Import der benötigten Themes
import '@casoon/ui-lib/core.css';
import '@casoon/ui-lib/themes/day.css';
import '@casoon/ui-lib/themes/night.css';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('theme-day');

  useEffect(() => {
    // Theme aus localStorage laden
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('theme-night');
    }

    // Theme auf HTML-Element anwenden
    document.documentElement.className = currentTheme;

    // Theme-Änderung speichern
    localStorage.setItem('preferred-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher flex flex--gap-2">
      <button 
        className={`btn ${currentTheme === 'theme-day' ? 'btn--primary' : 'btn--secondary'}`}
        onClick={() => setCurrentTheme('theme-day')}
      >
        Tag
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

## Theme-Struktur

Jedes Theme definiert eigene Werte für Design-Tokens wie Farben, Abstände, Rundungen und Schattierungen. Diese werden als CSS-Variablen implementiert:

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

  /* Hintergründe */
  --bg-base: #ffffff;
  --bg-muted: #f5f5f5;
  --bg-subtle: #e5e5e5;

  /* Text */
  --text-primary: #212121;
  --text-secondary: #4a4e69;
  --text-muted: #6c757d;

  /* Kontrast-Farben für die Hauptfarben */
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-accent: #ffffff;

  /* Schatten */
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

  /* Hintergründe */
  --bg-base: #282a36;
  --bg-muted: #44475a;
  --bg-subtle: #373a49;

  /* Text */
  --text-primary: #f8f8f2;
  --text-secondary: #d1d1e0;
  --text-muted: #a5b1c2;

  /* Kontrast-Farben für die Hauptfarben */
  --color-on-primary: #282a36;
  --color-on-secondary: #282a36;
  --color-on-accent: #282a36;

  /* Schatten mit angepasster Sichtbarkeit für dunkle Themes */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);

  /* Rundungen (gleich wie im Day-Theme) */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}
```

## Komponenten mit Theme-Unterstützung

Alle Komponenten nutzen automatisch die Theme-Variablen, wodurch ein konsistentes Erscheinungsbild in der gesamten Anwendung gewährleistet wird:

```css
/* Button-Komponente mit Theme-Variablen */
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

/* Card-Komponente mit Theme-Variablen */
.card {
  background-color: var(--bg-base);
  color: var(--text-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* ... weitere Komponenten ... */
```

## Theme-Anpassung

Sie können die Theme-Variablen in Ihrer eigenen CSS-Datei überschreiben, um das Erscheinungsbild anzupassen:

### Einfache Anpassungen

```css
/* Anpassen des Day-Themes mit Ihrer Markenfarbe */
.theme-day {
  --color-primary: #ff6b6b; /* Ihre Markenfarbe */
  --color-secondary: #51cf66; /* Ihre sekundäre Farbe */
}
```

### Eigenes Theme erstellen

```css
/* Eigenes benutzerdefiniertes Theme */
.theme-custom {
  /* Basis vom Day-Theme kopieren und anpassen */
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

  /* ... weitere Anpassungen ... */
}
```

## Farbpaletten für Themes

Das Farbsystem verwendet semantische Variablen für verschiedene Anwendungsfälle. Jedes Theme definiert diese Variablen mit spezifischen Werten:

```css
:root {
  /* Primärfarbe mit Schattierungen */
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

  /* ... weitere Farbpaletten ... */
}
```

### Verwendung verschiedener Farbschattierungen

```html
<div class="bg-primary-100 text-primary-900 p-4">
  Primärfarbe: Heller Hintergrund mit dunkler Schrift
</div>

<div class="bg-primary-900 text-primary-100 p-4">
  Primärfarbe: Dunkler Hintergrund mit heller Schrift
</div>
```

## Unterstützung für Benutzereinstellungen

Casoon UI Themes können auf Benutzereinstellungen reagieren:

### System-Farbschema (Hell/Dunkel)

```css
/* Automatische Anpassung an Betriebssystem-Einstellung */
@media (prefers-color-scheme: dark) {
  :root:not([class*="theme-"]) {
    /* Dark Mode als Standard, wenn keine Theme-Klasse gesetzt ist */
    --color-primary: var(--night-color-primary);
    --color-secondary: var(--night-color-secondary);
    /* ... weitere Variablen ... */
  }
}

@media (prefers-color-scheme: light) {
  :root:not([class*="theme-"]) {
    /* Light Mode als Standard, wenn keine Theme-Klasse gesetzt ist */
    --color-primary: var(--day-color-primary);
    --color-secondary: var(--day-color-secondary);
    /* ... weitere Variablen ... */
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

/* Reduzierte Animationen für Benutzer, die reduzierte Bewegung bevorzugen */
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-speed: 0.1s;
    --animation-duration: 0.3s;
  }

  /* Komplexe Animationen deaktivieren */
  .animated {
    animation: none !important;
    transition: none !important;
  }
}
```

## Barrierefreiheit

Casoon UI Themes sind für Barrierefreiheit optimiert:

- Alle Themes erreichen mindestens ein Kontrastverhältnis von AA nach WCAG 2.1
- Das Contrast-Theme bietet höhere Kontrastverhältnisse (AAA nach WCAG 2.1)
- Farbkombinationen werden auf Lesbarkeit geprüft
- Themes unterstützen die Benutzereinstellung `prefers-color-scheme`

### Contrast-Theme für höhere Barrierefreiheit

```css
.theme-contrast {
  /* Maximale Kontraste für bessere Lesbarkeit */
  --color-primary: #0000e6;
  --color-secondary: #660099;
  --color-accent: #cc0000;

  --bg-base: #ffffff;
  --bg-muted: #f0f0f0;

  --text-primary: #000000;
  --text-secondary: #333333;

  /* Größere Schrift und Abstände */
  --font-size-base: 1.125rem; /* 18px statt 16px */
  --line-height-base: 1.8;
  --spacing-base: 1.25rem;

  /* Stärkere Fokus-Indikatoren */
  --focus-ring-width: 3px;
  --focus-ring-color: #0000e6;
}
```

## Integration in Build-Prozesse

### Vite-Konfiguration

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

### Webpack-Konfiguration

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

## Best Practices für Themes

- **Semantische Variablen** - Verwenden Sie semantische Theme-Variablen statt hardcodierter Farbwerte
- **Kontrast prüfen** - Testen Sie Farbkombinationen auf ausreichenden Kontrast (mindestens 4.5:1 für Text)
- **Zugänglichkeit einplanen** - Bieten Sie alternative Themes für Benutzer mit besonderen Bedürfnissen
- **Theme-Wechsel testen** - Stellen Sie sicher, dass alle Komponenten korrekt aktualisiert werden
- **Dark Mode optimieren** - Reduzieren Sie in dunklen Themes die Helligkeit von Bildern
- **Systemeinstellungen respektieren** - Unterstützen Sie `prefers-color-scheme` und `prefers-reduced-motion`
- **Konsistente Kontrast-Farben** - Definieren Sie für jede semantische Farbe eine passende Kontrastfarbe 

## Eigene Themes erstellen

Sie können eigene Themes erstellen, indem Sie den themes-Layer verwenden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigenes Theme im themes-Layer definieren */
@layer themes {
  .theme-custom {
    --color-primary: #ff6b6b;
    --color-secondary: #4ecdc4;
    --color-accent: #ffe66d;

    --bg-base: #f7fff7;
    --text-primary: #1a535c;

    /* Weitere Theme-Tokens definieren */
  }
}
```

Dadurch fügt sich Ihr Custom-Theme nahtlos in die bestehende Theme-Hierarchie ein.

## Best Practices für das Theme-System

- **Verwenden Sie Theme-Tokens in Ihren Komponenten** - Nutzen Sie `var(--color-primary)` statt direkter Farbwerte
- **Bieten Sie Theme-Switcher an** - Geben Sie Nutzern die Möglichkeit, ihr bevorzugtes Theme zu wählen
- **Berücksichtigen Sie Systemeinstellungen** - Respektieren Sie `prefers-color-scheme` für dunkel/hell-Präferenzen
- **Testen Sie Themes auf Kontrast** - Stellen Sie sicher, dass alle Themes ausreichend Kontrast für Lesbarkeit bieten
- **Konsistente Semantik über Themes hinweg** - Achten Sie darauf, dass semantische Farben wie `success` oder `error` in allen Themes ihre Bedeutung beibehalten 

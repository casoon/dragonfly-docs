---
title: Theme-System
category: Guide
---

# Theme-System

Das Theme-System der Casoon UI Library ermöglicht eine flexible Anpassung des visuellen Erscheinungsbilds Ihrer Anwendung durch vordefinierte Themes und anpassbare Design-Tokens.

## Struktur des Theme-Systems

Die Themes sind Teil des Layer-Systems und werden unter dem `themes`-Layer definiert. Dies gibt ihnen eine hohe Priorität in der Kaskade:

```css
@layer reset,
       tokens,
       custom-properties,
       ...
       animations,
       effects,
       themes;  /* Themes haben eine der höchsten Prioritäten */
```

Die Themes werden in der `themes.css` Datei organisiert:

```css
/**
 * Themes CSS
 *
 * Zentrale Datei zur Organisation und Einbindung aller Themes.
 */

/* Theme-Grundlagen */
@import url('./themes/theme-base.css');

/* Tag/Nacht-Themes */
@import url('./themes/day.css');
@import url('./themes/night.css');
@import url('./themes/dark-mode.css');

/* Jahreszeiten-Themes */
@import url('./themes/spring.css');
@import url('./themes/summer.css');
@import url('./themes/autumn.css');
@import url('./themes/winter.css');

/* Weitere Themes */
@import url('./themes/brand.css');
@import url('./themes/forest.css');
@import url('./themes/ocean.css');
@import url('./themes/pastel.css');
@import url('./themes/monochrome.css');
@import url('./themes/neon.css');
@import url('./themes/retro.css');
@import url('./themes/sunset.css');

/* Barrierefreiheit */
@import url('./themes/accessibility.css');
```

## Verfügbare Themes

Die Casoon UI Library bietet folgende vordefinierte Themes:

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

## Theme-Verwendung in eigenen Projekten

Um Themes in Ihrem Projekt zu nutzen:

### 1. Vollständige Einbindung aller Themes

Importieren Sie die core.css, die automatisch alle Themes lädt:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selektive Einbindung einzelner Themes

Sie können auch nur ausgewählte Themes importieren:

```css
/* Basis-Layer-System importieren */
@import "@casoon/ui-lib/layers.css";

/* Nur benötigte Themes importieren */
@import "@casoon/ui-lib/themes/theme-base.css";
@import "@casoon/ui-lib/themes/day.css";
@import "@casoon/ui-lib/themes/night.css";
```

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

## Dynamischer Theme-Wechsel

### Beispiel für einen Theme-Switcher

```html
<div class="theme-switcher">
  <button onclick="setTheme('theme-day')">Tag</button>
  <button onclick="setTheme('theme-night')">Nacht</button>
</div>

<script>
function setTheme(themeName) {
  // Entferne alle Theme-Klassen
  document.documentElement.classList.remove(
    'theme-day', 'theme-night', 'theme-spring', 
    'theme-summer', 'theme-autumn', 'theme-winter',
    'theme-ocean', 'theme-forest', 'theme-brand',
    'theme-pastel', 'theme-neon', 'theme-monochrome',
    'theme-retro', 'theme-sunset', 'theme-dark-mode',
    'theme-accessibility'
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

## Theme-Struktur und Design Tokens

Jedes Theme definiert eine Reihe von Design Tokens als CSS-Variablen:

```css
.theme-day {
  /* Primäre Farbpalette */
  --color-primary: #4361ee;
  --color-secondary: #3f37c9;
  --color-accent: #f72585;
  
  /* Funktionale Farben */
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
  
  /* Kontrast-Farben */
  --color-on-primary: #ffffff;
  --color-on-secondary: #ffffff;
  --color-on-accent: #ffffff;
  
  /* Weitere Theme-spezifische Tokens */
}
```

## Best Practices

- **Verwenden Sie Theme-Tokens in Ihren Komponenten** - Nutzen Sie `var(--color-primary)` statt direkter Farbwerte
- **Bieten Sie Theme-Switcher an** - Geben Sie Nutzern die Möglichkeit, ihr bevorzugtes Theme zu wählen
- **Berücksichtigen Sie Systemeinstellungen** - Respektieren Sie `prefers-color-scheme` für dunkel/hell-Präferenzen
- **Testen Sie Themes auf Kontrast** - Stellen Sie sicher, dass alle Themes ausreichend Kontrast für Lesbarkeit bieten
- **Konsistente Semantik über Themes hinweg** - Achten Sie darauf, dass semantische Farben wie `success` oder `error` in allen Themes ihre Bedeutung beibehalten
- **Unterstützen Sie Barrierefreiheit** - Bieten Sie spezielle Themes für Nutzer mit besonderen Anforderungen an 
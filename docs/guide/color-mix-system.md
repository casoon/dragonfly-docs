---
title: Color-Mix System
category: Guide
---

# Color-Mix System

Das Color-Mix System der Casoon UI Library ermöglicht die dynamische Erstellung von Farbvariationen und -mischungen durch modernes CSS. Es nutzt die `color-mix()` Funktion und andere CSS-Features, um ein flexibles und umfassendes Farbsystem zu schaffen.

## Module importieren

Das Color-Mix System ist Teil des Layer-Systems und wird automatisch geladen, wenn Sie die `core.css` Datei importieren:

```css
@import '@casoon/ui-lib/core.css';
```

Die Reihenfolge der Layer ist wichtig, wobei das `color-mix` Layer nach dem `colors` Layer geladen wird:

```css
@layer reset,
       tokens,
       custom-properties,
       core,
       logical-properties,
       colors,              /* Basisfarben */
       color-mix,           /* Farbmischungen */
       ...                  /* weitere Layer */
```

## Grundlegendes Konzept

Das Color-Mix System baut auf den grundlegenden Farb-Tokens auf und ermöglicht:

1. **Farbmischungen**: Kombinieren von zwei oder mehr Farben mit unterschiedlichen Prozentanteilen
2. **Farbvariationen**: Erstellen von helleren oder dunkleren Varianten einer Basisfarbe
3. **Farbüberlagerungen**: Überlagern einer Farbe mit einer anderen für spezielle Effekte
4. **Dynamische Farbberechnung**: Automatische Berechnung von kontrastierenden oder harmonischen Farben

## Farbmischungen

Die `color-mix()` Funktion ermöglicht das Mischen von Farben:

```css
.mixed-color {
  /* 40% Blau gemischt mit 60% Rot */
  color: color-mix(in srgb, var(--color-blue-500) 40%, var(--color-red-500) 60%);
}
```

### Verfügbare Mischklassen

```css
.color-mix-primary-20-secondary {
  /* 20% Primärfarbe gemischt mit 80% Sekundärfarbe */
  color: color-mix(in srgb, var(--color-primary) 20%, var(--color-secondary) 80%);
}

.bg-mix-accent-50-white {
  /* 50% Akzentfarbe gemischt mit 50% Weiß */
  background-color: color-mix(in srgb, var(--color-accent) 50%, white 50%);
}
```

## Transparenzmischungen

Mischen von Farben mit Transparenz:

```css
.overlay-primary-30 {
  /* 30% durchsichtige Primärfarbe über dem Hintergrund */
  background-color: color-mix(in srgb, var(--color-primary) 30%, transparent 70%);
}

.text-primary-semitransparent {
  /* Halbdurchsichtige Primärfarbe für Text */
  color: color-mix(in srgb, var(--color-primary) 50%, transparent 50%);
}
```

## Farbvariationen

### Aufhellen und Abdunkeln

```css
.primary-lighter-10 {
  /* 10% hellere Primärfarbe */
  color: color-mix(in srgb, var(--color-primary) 90%, white 10%);
}

.primary-darker-20 {
  /* 20% dunklere Primärfarbe */
  color: color-mix(in srgb, var(--color-primary) 80%, black 20%);
}
```

### Vordefinierte Helligkeitsvarianten

```css
:root {
  /* Primärfarbe Helligkeitsvarianten */
  --color-primary-100: color-mix(in srgb, var(--color-primary) 10%, white 90%);
  --color-primary-200: color-mix(in srgb, var(--color-primary) 20%, white 80%);
  --color-primary-300: color-mix(in srgb, var(--color-primary) 30%, white 70%);
  --color-primary-400: color-mix(in srgb, var(--color-primary) 40%, white 60%);
  --color-primary-500: var(--color-primary);
  --color-primary-600: color-mix(in srgb, var(--color-primary) 90%, black 10%);
  --color-primary-700: color-mix(in srgb, var(--color-primary) 80%, black 20%);
  --color-primary-800: color-mix(in srgb, var(--color-primary) 70%, black 30%);
  --color-primary-900: color-mix(in srgb, var(--color-primary) 60%, black 40%);
}
```

## Kontrastfarben

Das Color-Mix System kann auch verwendet werden, um Kontrastfarben für Text auf verschiedenen Hintergründen zu berechnen:

```css
.card {
  background-color: var(--color-primary);
  /* Text ist automatisch schwarzer oder weißer Text, abhängig vom Kontrast */
  color: var(--color-primary-contrast);
}
```

Die Kontrastfarben werden automatisch berechnet:

```css
:root {
  --color-primary-contrast: color-contrast(var(--color-primary) vs black, white);
  --color-secondary-contrast: color-contrast(var(--color-secondary) vs black, white);
  --color-accent-contrast: color-contrast(var(--color-accent) vs black, white);
}
```

## Verwendung in Utility-Klassen

Das Color-Mix System wird in vielen Utility-Klassen verwendet:

```css
.text-primary-light {
  color: var(--color-primary-300);
}

.bg-primary-dark {
  background-color: var(--color-primary-700);
}

.border-primary-semi {
  border-color: color-mix(in srgb, var(--color-primary) 50%, transparent 50%);
}
```

## Verwendungsbeispiele

### Schaltflächen mit Hover-Effekt

```css
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

.button-primary:hover {
  /* Dunklere Version bei Hover */
  background-color: var(--color-primary-600);
}
```

### Karten mit Farbverlauf

```css
.card-gradient {
  background: linear-gradient(
    to bottom right,
    var(--color-primary),
    var(--color-primary-700)
  );
  color: var(--color-primary-contrast);
}
```

### Benachrichtigungen mit Transparenz

```css
.alert-info {
  background-color: var(--color-info-100);
  border: 1px solid var(--color-info-300);
  color: var(--color-info-800);
}

.toast-notification {
  background-color: color-mix(in srgb, var(--color-gray-900) 90%, transparent 10%);
  color: white;
  backdrop-filter: blur(8px);
}
```

## Farbmodi und -themen

Das Color-Mix System arbeitet nahtlos mit dem Theming-System zusammen:

```css
:root {
  --color-primary: #4a90e2;
}

[data-theme="dark"] {
  --color-primary: #2b5797;
  
  /* Diese werden automatisch neu berechnet basierend auf dem neuen Primärwert */
  /* --color-primary-100 bis --color-primary-900 */
}
```

## Lightning CSS Optimierung

Das Color-Mix System ist für Lightning CSS optimiert:

1. **Vorberechnung**: Lightning CSS kann `color-mix()` Funktionen vorab berechnen und optimieren
2. **Browserkompatibilität**: Für ältere Browser werden Fallbacks generiert
3. **Performance**: Optimierte CSS-Dateigröße für schnellere Ladezeiten
4. **Minimale Redundanz**: Berechnet Mischungen einmal und verwendet sie wiederholt

## Best Practices

1. **Konsistenz bewahren**: Verwenden Sie das Color-Mix System für alle Farbvariationen, anstatt hartcodierte Farbwerte zu definieren
2. **Semantische Farbnamen verwenden**: Benennen Sie Farben nach ihrer Funktion, nicht nach ihrem Aussehen
3. **Achten Sie auf Kontrast**: Prüfen Sie, ob Ihre gemischten Farben die WCAG-Richtlinien für Barrierefreiheit erfüllen
4. **Sparsam mit Transparenz umgehen**: Übermäßige Transparenz kann die Lesbarkeit beeinträchtigen
5. **CSS-Variablen für Zwischenergebnisse**: Definieren Sie häufig verwendete Mischungen als CSS-Variablen

## Anpassung des Color-Mix Systems

Sie können das Color-Mix System erweitern oder anpassen, indem Sie eigene Mischungen definieren:

```css
/* Ihre eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

@layer color-mix {
  :root {
    /* Eigene Farbmischungen definieren */
    --color-brand-highlight: color-mix(in srgb, var(--color-brand) 70%, var(--color-accent) 30%);
    --color-custom-overlay: color-mix(in srgb, var(--color-primary) 40%, transparent 60%);
  }
  
  /* Eigene Utility-Klassen für Ihre Farbmischungen */
  .bg-brand-highlight {
    background-color: var(--color-brand-highlight);
  }
  
  .text-brand-highlight {
    color: var(--color-brand-highlight);
  }
}
``` 
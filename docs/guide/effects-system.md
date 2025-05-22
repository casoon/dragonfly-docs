---
title: Effekte-System
category: Guide
---

# Effekte-System

Das Casoon UI Effekte-System bietet eine umfassende Sammlung von CSS-Effekten, die Ihre Benutzeroberfläche verbessern und ihr Tiefe, Bewegung und visuelle Attraktivität verleihen.

## Überblick

Das Effekte-System ist modular aufgebaut und in verschiedene Kategorien unterteilt, die jeweils einen bestimmten Aspekt des visuellen Designs abdecken. Jedes Modul kann unabhängig importiert werden, um nur die benötigten Effekte in Ihr Projekt einzubinden.

## Effekt-Kategorien

### Visuelle Effekte

Visuelle Effekte verbessern das Aussehen von UI-Elementen durch verschiedene grafische Techniken:

- [3D-Effekte](./effects/3d.md) - Transformationen und perspektivische Effekte
- [Filter-Effekte](./effects/filters.md) - Unschärfe, Helligkeit, Kontrast und andere visuelle Filter
- [Schatten-Effekte](./effects/shadows.md) - Realistische und stilisierte Schatten für Tiefe
- [Gradienten-Effekte](./effects/gradient.md) - Farbverläufe und Übergänge
- [Muster & Texturen](./effects/patterns.md) - Hintergrundmuster und Oberflächentexturen

### Interaktions-Effekte

Interaktions-Effekte verbessern das Nutzererlebnis durch visuelle Rückmeldungen bei Benutzerinteraktionen:

- [Hover-Effekte](./effects/interaction/hover.md) - Effekte beim Überfahren mit der Maus
- [Fokus-Effekte](./effects/interaction/focus.md) - Effekte für fokussierte Elemente

### Status-Effekte

Status-Effekte visualisieren verschiedene Zustände von UI-Komponenten:

- [Lade-Effekte](./effects/state/loading.md) - Animationen für Ladezustände

## Installation und Verwendung

Sie können das gesamte Effekte-System oder einzelne Module importieren:

### Gesamtes Effekte-System

```css
@import '@casoon/ui-lib/effects/index.css';
```

### Einzelne Module

```css
/* Nur 3D-Effekte importieren */
@import '@casoon/ui-lib/effects/3d.css';

/* Nur Schatten-Effekte importieren */
@import '@casoon/ui-lib/effects/shadows.css';

/* Nur Hover-Effekte importieren */
@import '@casoon/ui-lib/effects/interaction/hover.css';
```

## Leistungsoptimierung

Das Effekte-System ist für optimale Leistung konzipiert:

1. **Modularer Aufbau**: Importieren Sie nur die benötigten Effekte
2. **CSS-Variablen**: Einfache Anpassung ohne zusätzlichen Code
3. **Reduzierte Bewegung**: Respektiert die Benutzereinstellung `prefers-reduced-motion`
4. **Hardware-Beschleunigung**: Verwendet `will-change` und `transform` für optimierte Animationen

## Barrierefreiheit

Das Effekte-System berücksichtigt Barrierefreiheit durch:

1. **Reduzierte Bewegung**: Alternative Stile für Benutzer, die reduzierte Bewegung bevorzugen
2. **Ausreichender Kontrast**: Sicherstellung, dass Effekte den Kontrast nicht beeinträchtigen
3. **Fokus-Indikatoren**: Deutliche visuelle Hinweise für Tastatur-Navigation

## Anpassung

Alle Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Schatten-Variablen */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  
  /* 3D-Effekt-Variablen */
  --perspective-depth: 1000px;
  --rotate-x-deg: 45deg;
  
  /* Filter-Variablen */
  --filter-blur: 4px;
  --filter-brightness: 1.2;
  
  /* Gradienten-Variablen */
  --gradient-angle: 180deg;
  --gradient-start: var(--color-primary-300);
  --gradient-end: var(--color-primary-700);
}
```

## Browserunterstützung

Das Effekte-System unterstützt alle modernen Browser. Für ältere Browser werden Fallback-Stile bereitgestellt, die ein konsistentes Erscheinungsbild gewährleisten.

## Beispiele

### Kombination verschiedener Effekte

```html
<div class="card shadow-lg">
  <div class="card-header gradient gradient-color-primary">
    <h3 class="gradient-text">Effekte-Beispiel</h3>
  </div>
  <div class="card-body">
    <p>Dieses Beispiel kombiniert verschiedene Effekte:</p>
    <ul>
      <li>Schatten-Effekte für die Karte</li>
      <li>Gradienten-Effekte für den Header</li>
      <li>Text-Gradienten für die Überschrift</li>
    </ul>
    <button class="button shadow-hover filter-hover">
      Interaktiver Button
    </button>
  </div>
</div>

<style>
  .card {
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: white;
    max-width: 400px;
  }
  
  .card-header {
    padding: 1.5rem;
    color: white;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    transition: all 0.2s ease;
    margin-top: 1rem;
  }
</style>
```

## Nächste Schritte

Erkunden Sie die einzelnen Effekt-Module für detaillierte Informationen zu den verfügbaren Klassen und Anpassungsmöglichkeiten:

- [3D-Effekte](./effects/3d.md)
- [Filter-Effekte](./effects/filters.md)
- [Schatten-Effekte](./effects/shadows.md)
- [Gradienten-Effekte](./effects/gradient.md)
- [Muster & Texturen](./effects/patterns.md)
- [Hover-Effekte](./effects/interaction/hover.md)
- [Fokus-Effekte](./effects/interaction/focus.md)
- [Lade-Effekte](./effects/state/loading.md) 
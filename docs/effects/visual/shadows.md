---
title: Schatten-Effekte
category: Guide
---

# Schatten-Effekte

Die `shadows.css` Datei bietet eine Sammlung von vordefinierten Schatten-Effekten, die Tiefe, Hierarchie und realistische Erscheinung Ihrer UI-Elemente verbessern. Durch sorgfältig abgestimmte Schattenwürfe können Sie visuelle Hinweise für Höhe, Interaktivität und Wichtigkeit von Elementen geben.

## Overview

Schatten sind ein fundamentales Element des Designsystems und schaffen Tiefe in einer flachen 2D-Oberfläche. Die Casoon UI Library bietet verschiedene Schatten-Typen, Intensitäten und Richtungen für verschiedene Use Cases.

## Basis-Schatten

```html
<!-- Standard-Schatten -->
<div class="shadow">Standard-Schatten</div>

<!-- Schatten-Sizes -->
<div class="shadow-sm">Kleiner Schatten</div>
<div class="shadow-md">Mittlerer Schatten</div>
<div class="shadow-lg">Großer Schatten</div>
<div class="shadow-xl">Extra großer Schatten</div>
<div class="shadow-2xl">Doppelt extra großer Schatten</div>

<!-- Kein Schatten -->
<div class="shadow-none">Kein Schatten</div>
```

## Innere Schatten

```html
<!-- Innerer Schatten -->
<div class="shadow-inner">Element mit innerem Schatten</div>

<!-- Innere Schatten-Sizes -->
<div class="shadow-inner-sm">Kleiner innerer Schatten</div>
<div class="shadow-inner-md">Mittlerer innerer Schatten</div>
<div class="shadow-inner-lg">Großer innerer Schatten</div>
```

## Gerichtete Schatten

```html
<!-- Gerichtete Schatten -->
<div class="shadow-top">Schatten nur am oberen Rand</div>
<div class="shadow-right">Schatten nur am rechten Rand</div>
<div class="shadow-bottom">Schatten nur am unteren Rand</div>
<div class="shadow-left">Schatten nur am linken Rand</div>

<!-- Kombinierte gerichtete Schatten -->
<div class="shadow-top shadow-right">Schatten an zwei Seiten</div>
```

## Farbige Schatten

```html
<!-- Farbige Schatten -->
<div class="shadow shadow-color-primary">Primärfarbiger Schatten</div>
<div class="shadow shadow-color-secondary">Sekundärfarbiger Schatten</div>
<div class="shadow shadow-color-accent">Akzentfarbiger Schatten</div>
<div class="shadow shadow-color-success">Erfolgs-Schatten</div>
<div class="shadow shadow-color-warning">Warnungs-Schatten</div>
<div class="shadow shadow-color-error">Fehler-Schatten</div>
<div class="shadow shadow-color-info">Info-Schatten</div>
```

## Material-Design-Schatten

Angelehnt an Material Design-Prinzipien:

```html
<!-- Material Design Elevation -->
<div class="elevation-1">Elevation 1 (1dp)</div>
<div class="elevation-2">Elevation 2 (3dp)</div>
<div class="elevation-3">Elevation 3 (6dp)</div>
<div class="elevation-4">Elevation 4 (8dp)</div>
<div class="elevation-5">Elevation 5 (12dp)</div>
```

## Weiche Schatten

Sorgfältig gestaltete weiche Schatten für moderne UIs:

```html
<!-- Weiche Schatten -->
<div class="shadow-soft-sm">Kleiner weicher Schatten</div>
<div class="shadow-soft">Standard weicher Schatten</div>
<div class="shadow-soft-lg">Großer weicher Schatten</div>
```

## Mehrfach-Schatten

Komplexere Schatten für realistischere Effekte:

```html
<!-- Mehrfach-Schatten -->
<div class="shadow-layered">Geschichteter Schatten (mehrere Ebenen)</div>
<div class="shadow-floating">Schwebender Schatten-Effekt</div>
<div class="shadow-ambient">Schatten mit Umgebungslicht-Effekt</div>
```

## Scharfe Schatten

Für klare, definierte Kanten:

```html
<!-- Scharfe Schatten -->
<div class="shadow-sharp-sm">Kleiner scharfer Schatten</div>
<div class="shadow-sharp">Standard scharfer Schatten</div>
<div class="shadow-sharp-lg">Großer scharfer Schatten</div>
```

## Interaktive Schatten

Schatten, die auf Benutzerinteraktionen reagieren:

```html
<!-- Hover-Schatten -->
<div class="shadow-hover">Verstärkter Schatten bei Hover</div>
<div class="shadow-hover-up">Angehobener Schatten bei Hover</div>
<div class="shadow-hover-grow">Wachsender Schatten bei Hover</div>

<!-- Fokus-Schatten -->
<button class="shadow-focus">Verstärkter Schatten bei Fokus</button>

<!-- Aktive Schatten -->
<button class="shadow-active">Reduzierter Schatten bei Aktivierung</button>

<!-- Kombinierte interaktive Schatten -->
<button class="shadow shadow-hover shadow-active">
  Interaktiver Button mit Schatten
</button>
```

## Schatten-Übergänge

Animierte Schatten für sanfte Übergänge:

```html
<!-- Schatten-Transition -->
<div class="shadow-transition">Sanfter Übergang beim Ändern des Schattens</div>

<!-- Kombiniert mit Hover für Animation -->
<div class="shadow-sm shadow-hover shadow-transition">
  Hover für animierten Schatten-Übergang
</div>
```

## Components-spezifische Schatten

Vordefinierte Schatten für bestimmte UI-Components:

```html
<!-- Components-Schatten -->
<div class="card shadow-card">Card mit optimiertem Schatten</div>
<div class="dropdown shadow-dropdown">Dropdown mit optimiertem Schatten</div>
<button class="button shadow-button">Button mit optimiertem Schatten</button>
<div class="modal shadow-modal">Modal mit optimiertem Schatten</div>
<div class="tooltip shadow-tooltip">Tooltip mit optimiertem Schatten</div>
```

## Anpassung über CSS Variables

Die Schatten können über CSS Variables angepasst werden:

```css
:root {
  /* Basis-Schatten-Parameter */
  --shadow-color: rgb(0 0 0 / 0.1);
  --shadow-color-darker: rgb(0 0 0 / 0.2);
  
  /* Schatten-Offset */
  --shadow-offset-x: 0px;
  --shadow-offset-y: 2px;
  
  /* Schatten-Unschärfe und Ausbreitung */
  --shadow-blur-sm: 4px;
  --shadow-blur-md: 8px;
  --shadow-blur-lg: 16px;
  --shadow-blur-xl: 24px;
  --shadow-blur-2xl: 40px;
  
  --shadow-spread-sm: 0px;
  --shadow-spread-md: 0px;
  --shadow-spread-lg: 0px;
  
  /* Vordefinierte Schatten */
  --shadow-sm: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-sm) var(--shadow-spread-sm) var(--shadow-color);
  --shadow-md: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-md) var(--shadow-spread-md) var(--shadow-color);
  --shadow-lg: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-lg) var(--shadow-spread-lg) var(--shadow-color);
  --shadow-xl: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-xl) var(--shadow-spread-lg) var(--shadow-color);
  --shadow-2xl: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur-2xl) var(--shadow-spread-lg) var(--shadow-color);
  
  /* Innerer Schatten */
  --shadow-inner: inset 0 2px 4px 0 var(--shadow-color);
  
  /* Gerichtete Schatten */
  --shadow-top: 0 -2px 4px 0 var(--shadow-color);
  --shadow-right: 2px 0 4px 0 var(--shadow-color);
  --shadow-bottom: 0 2px 4px 0 var(--shadow-color);
  --shadow-left: -2px 0 4px 0 var(--shadow-color);
  
  /* Weiche Schatten */
  --shadow-soft: 0 2px 8px -1px var(--shadow-color),
                0 1px 2px -1px var(--shadow-color-darker);
  
  /* Material Design Elevations */
  --elevation-1: 0 1px 1px 0 rgba(0,0,0,0.14), 
                0 2px 1px -1px rgba(0,0,0,0.12), 
                0 1px 3px 0 rgba(0,0,0,0.20);
}
```

## Dunkelmodus-Anpassung

Schatten im Dunkelmodus sollten angepasst werden:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-color: rgb(0 0 0 / 0.3);
    --shadow-color-darker: rgb(0 0 0 / 0.4);
    
    /* Subtilere Schatten für dunkles Theme */
    --shadow-blur-sm: 3px;
    --shadow-blur-md: 6px;
    --shadow-blur-lg: 12px;
    --shadow-blur-xl: 18px;
    --shadow-blur-2xl: 30px;
    
    /* Spezielle dunkle Schatten für bestimmte Components */
    --shadow-card: 0 0 10px 0 rgb(0 0 0 / 0.5);
  }
}
```

## Accessibility

Bei Schatten müssen folgende Aspekte der Accessibility beachtet werden:

1. **Kontrast**: Stellen Sie sicher, dass der Schatten ausreichend Kontrast bietet, um wahrgenommen zu werden
2. **Übermäßige Schatten**: Vermeiden Sie zu viele oder zu starke Schatten, die ablenkend wirken könnten
3. **Hoher Kontrast-Modus**: Passen Sie Schatten im hohen Kontrast-Modus an

```css
@media (prefers-contrast: more) {
  .shadow, 
  .shadow-sm, 
  .shadow-md, 
  .shadow-lg,
  .shadow-xl,
  .shadow-2xl {
    box-shadow: none;
    border: 1px solid currentColor;
  }
}
```

## Performance-Überlegungen

Schatten können die Rendering-Performance beeinflussen:

1. **Vermeiden Sie komplexe Schatten** auf Elementen, die häufig neu gerendert werden
2. **Verwenden Sie `will-change: box-shadow`** für wichtige animierte Schatten
3. **Bevorzugen Sie Einzel-Schatten** statt mehrfacher Schatten für bessere Performance
4. **Testen Sie auf mobilen Geräten**, um sicherzustellen, dass die Schatten nicht die Performance beeinträchtigen

## Praktische Examples

### Gestaffelte Cardn mit verschiedenen Schatten

```html
<div class="card-group">
  <div class="card shadow-sm">Niedrige Priorität</div>
  <div class="card shadow-md">Mittlere Priorität</div>
  <div class="card shadow-lg">Hohe Priorität</div>
</div>
```

### Interaktive Button-Hierarchie

```html
<div class="button-group">
  <button class="button shadow-sm shadow-hover-up">Sekundärer Button</button>
  <button class="button shadow-md shadow-hover-up shadow-active">Primärer Button</button>
</div>
```

### Modal-Dialog mit komplexem Schatten

```html
<div class="modal shadow-layered">
  <div class="modal-header">
    <h2>Dialog-Titel</h2>
    <button class="modal-close shadow-sm shadow-hover">&times;</button>
  </div>
  <div class="modal-body">
    <p>Dialoginhalt mit komplexem Schatten-Effekt für bessere Tiefenwirkung.</p>
  </div>
  <div class="modal-footer">
    <button class="button shadow-sm">Abbrechen</button>
    <button class="button primary shadow-md">Bestätigen</button>
  </div>
</div>
```

## Best Practices

1. **Konsistente Lichtquelle**: Halten Sie die Richtung der Schatten konsistent für eine realistische Erscheinung
2. **Schattenhierarchie**: Verwenden Sie unterschiedliche Schatten-Intensitäten, um visuelle Hierarchie zu kommunizieren
3. **Dezente Schatten**: Subtile Schatten sind oft effektiver als starke, auffällige
4. **Zweckmäßiger Einsatz**: Verwenden Sie Schatten, um wichtige Informationen hervorzuheben und Beziehungen zu verdeutlichen
5. **Kontextbedingte Schatten**: Passen Sie Schatten an den Kontext an – Dialoge benötigen stärkere Schatten als Cardn usw. 
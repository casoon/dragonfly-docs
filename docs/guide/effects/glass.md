---
title: Glas-Effekte
category: Guide
---

# Glas-Effekte (Glass)

Die `glass.css` Datei bietet moderne Glasmorphismus-Effekte für Ihre Benutzeroberfläche. Diese Effekte erzeugen halbtransparente, verschwommene Oberflächen mit subtilen Rahmen und Schattierungen, die den aktuellen Design-Trends entsprechen.

## Übersicht

Glasmorphismus ist ein Designstil, der halbtransparente Elemente mit Hintergrundunschärfe und subtilen Grenzen verwendet, um einen "durch Glas schauenden" Effekt zu erzeugen. Die Casoon UI Library bietet eine umfassende Sammlung von Glaseffekten für verschiedene UI-Komponenten.

## Basis-Glaseffekte

```html
<!-- Standard-Glaseffekt -->
<div class="glass">Standard-Glaseffekt</div>

<!-- Glaseffekt-Varianten (Intensität) -->
<div class="glass-sm">Subtiler Glaseffekt</div>
<div class="glass-md">Standard-Glaseffekt</div>
<div class="glass-lg">Starker Glaseffekt</div>
```

## Farbvarianten

Die Glaseffekte können mit verschiedenen Farbakzenten kombiniert werden:

```html
<!-- Farbige Glaseffekte -->
<div class="glass glass-primary">Primärfarben-Glaseffekt</div>
<div class="glass glass-secondary">Sekundärfarben-Glaseffekt</div>
<div class="glass glass-accent">Akzentfarben-Glaseffekt</div>
<div class="glass glass-success">Erfolgs-Glaseffekt</div>
<div class="glass glass-warning">Warnungs-Glaseffekt</div>
<div class="glass glass-error">Fehler-Glaseffekt</div>
<div class="glass glass-info">Info-Glaseffekt</div>
```

## Interaktive Glaseffekte

Glaseffekte können auch auf interaktive Elemente und basierend auf Zuständen angewendet werden:

```html
<!-- Hover-aktivierter Glaseffekt -->
<div class="glass-hover">Wird beim Hover zu Glas</div>

<!-- Fokus-aktivierter Glaseffekt -->
<div class="glass-focus">Wird beim Fokus zu Glas</div>

<!-- Aktiv-Zustand Glaseffekt -->
<button class="glass-active">Wird bei Aktivierung zu Glas</button>

<!-- Kombinierte Zustände -->
<button class="glass-interactive">Reagiert auf alle Interaktionen</button>
```

## Komponenten-spezifische Glaseffekte

Für häufig verwendete UI-Komponenten gibt es spezialisierte Glaseffekt-Klassen:

```html
<!-- Glas-Karte -->
<div class="card glass-card">
  <div class="card-header">Glas-Karten-Header</div>
  <div class="card-body">Glas-Karten-Inhalt</div>
  <div class="card-footer">Glas-Karten-Footer</div>
</div>

<!-- Glas-Navigation -->
<nav class="nav glass-nav">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">Über uns</a>
  <a href="#" class="nav-item">Kontakt</a>
</nav>

<!-- Glas-Formularelemente -->
<input type="text" class="glass-input" placeholder="Glas-Eingabefeld">
<button class="glass-button">Glas-Button</button>
```

## Positionierungsvarianten

Für verschiedene Layout-Anforderungen:

```html
<!-- Fixierte Glas-Header -->
<header class="glass-header">
  Bleibt beim Scrollen oben fixiert mit Glaseffekt
</header>

<!-- Fixierte Glas-Sidebar -->
<aside class="glass-sidebar">
  Seitliche Navigation mit Glaseffekt
</aside>

<!-- Overlay mit Glaseffekt -->
<div class="glass-overlay">
  Vollständiger Bildschirm-Overlay mit Glaseffekt
</div>
```

## Kombinationen mit anderen Effekten

Glaseffekte können mit anderen Effekten kombiniert werden, um komplexere visuelle Erlebnisse zu schaffen:

```html
<!-- Glas mit Neon-Rahmen -->
<div class="glass neon-border">
  Glaseffekt mit Neon-Umrandung
</div>

<!-- Glas mit Schatten-Verstärkung -->
<div class="glass shadow-lg">
  Glaseffekt mit verstärktem Schatten
</div>

<!-- Animiertes Glas -->
<div class="glass fade-in">
  Einblendendes Glas-Element
</div>

<!-- Interaktives Glas mit Hover-Effekt -->
<div class="glass hover-lift">
  Glaseffekt, der sich bei Hover anhebt
</div>
```

## Anpassung über CSS-Variablen

Der Glaseffekt kann über CSS-Variablen angepasst werden:

```css
:root {
  /* Basis-Glaseffekt */
  --glass-opacity: 0.1;
  --glass-blur: 10px;
  --glass-saturation: 180%;
  --glass-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  
  /* Glas-Hintergrund */
  --glass-background: rgb(255 255 255 / var(--glass-opacity));
  
  /* Glas-Rahmen */
  --glass-border-width: 1px;
  --glass-border-style: solid;
  --glass-border-color: rgb(255 255 255 / 0.2);
  --glass-border-radius: var(--radius-md, 8px);
  
  /* Glas-Schatten */
  --glass-shadow-color: rgb(0 0 0 / 0.05);
  --glass-shadow: 0 8px 32px 0 var(--glass-shadow-color);
  
  /* Farbige Glas-Varianten */
  --glass-color-primary: color-mix(in srgb, var(--color-primary) 15%, transparent);
  --glass-color-secondary: color-mix(in srgb, var(--color-secondary) 15%, transparent);
  --glass-color-accent: color-mix(in srgb, var(--color-accent) 15%, transparent);
  --glass-color-success: color-mix(in srgb, var(--color-success) 15%, transparent);
  --glass-color-warning: color-mix(in srgb, var(--color-warning) 15%, transparent);
  --glass-color-error: color-mix(in srgb, var(--color-error) 15%, transparent);
  --glass-color-info: color-mix(in srgb, var(--color-info) 15%, transparent);
}
```

## Varianten-spezifische Anpassungen

```css
/* Intensitäts-Varianten */
.glass-sm {
  --glass-opacity: 0.05;
  --glass-blur: 5px;
  --glass-shadow: 0 4px 16px 0 var(--glass-shadow-color);
}

.glass-lg {
  --glass-opacity: 0.15;
  --glass-blur: 20px;
  --glass-shadow: 0 12px 48px 0 var(--glass-shadow-color);
}
```

## Dunkelmodus-Anpassung

Die Glaseffekte passen sich automatisch an den Dunkelmodus an:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --glass-background: rgb(0 0 0 / var(--glass-opacity));
    --glass-border-color: rgb(255 255 255 / 0.1);
    --glass-shadow-color: rgb(0 0 0 / 0.2);
  }
}
```

## Fallback für Browser ohne Backdrop-Filter

Für Browser, die `backdrop-filter` nicht unterstützen, wird ein Fallback bereitgestellt:

```css
@supports not (backdrop-filter: blur(1px)) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.85;
    --glass-background: rgb(255 255 255 / var(--glass-opacity));
  }
  
  @media (prefers-color-scheme: dark) {
    .glass,
    .glass-sm,
    .glass-md,
    .glass-lg {
      --glass-background: rgb(30 30 30 / var(--glass-opacity));
    }
  }
}
```

## Barrierefreiheit

Der Glaseffekt kann die Lesbarkeit beeinträchtigen. Beachten Sie folgende Aspekte:

1. **Ausreichender Kontrast**: Stellen Sie sicher, dass Text auf Glaseffekten einen ausreichenden Kontrast hat
2. **Hoher Kontrast-Modus**: Passen Sie den Effekt an den hohen Kontrast-Modus an
3. **Reduzierte Transparenz**: Berücksichtigen Sie die Systemeinstellung für reduzierte Transparenz

```css
@media (prefers-contrast: more) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.95;
    --glass-blur: 0;
    backdrop-filter: none;
    border: 2px solid currentColor;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass-sm,
  .glass-md,
  .glass-lg {
    --glass-opacity: 0.95;
    backdrop-filter: none;
  }
}
```

## Performance-Überlegungen

Glaseffekte können die Rendering-Performance beeinträchtigen, insbesondere auf mobilen Geräten:

1. **Vermeiden Sie zu viele Glaselemente** auf einem Bildschirm
2. **Reduzieren Sie den Blur-Radius** für bessere Performance
3. **Animieren Sie Glaseffekte mit Vorsicht** – insbesondere das Ändern von `backdrop-filter`
4. **Verwenden Sie `will-change: backdrop-filter`** für wichtige Animationen, aber mit Vorsicht
5. **Testen Sie auf älteren Geräten** für eine gute User Experience

## Praktische Beispiele

### Moderne UI-Card mit Glaseffekt

```html
<div class="card glass">
  <div class="card-header">
    <h3>Glaseffekt-Karte</h3>
  </div>
  <div class="card-body">
    <p>Diese Karte verwendet den modernen Glasmorphismus-Stil für eine elegante, halbtransparente Erscheinung.</p>
    <div class="button-group">
      <button class="button glass-sm">Details</button>
      <button class="button glass-primary">Kaufen</button>
    </div>
  </div>
</div>
```

### Moderne Navigationsleiste mit Glaseffekt

```html
<header class="glass-header">
  <div class="container">
    <div class="logo">Logo</div>
    <nav class="nav glass-nav">
      <a href="#" class="nav-item active">Home</a>
      <a href="#" class="nav-item">Produkte</a>
      <a href="#" class="nav-item">Dienstleistungen</a>
      <a href="#" class="nav-item">Über uns</a>
      <a href="#" class="nav-item">Kontakt</a>
    </nav>
    <div class="actions">
      <button class="button glass-sm">Login</button>
    </div>
  </div>
</header>
```

### Modales Popup mit Glaseffekt

```html
<dialog class="modal glass">
  <div class="modal-content">
    <header class="modal-header">
      <h2>Wichtige Mitteilung</h2>
      <button class="modal-close">&times;</button>
    </header>
    <div class="modal-body glass-sm">
      <p>Diese Mitteilung wird mit einem eleganten Glaseffekt angezeigt, der den Inhalt hervorhebt und gleichzeitig den Kontext beibehält.</p>
    </div>
    <footer class="modal-footer">
      <button class="button glass-primary">Bestätigen</button>
      <button class="button glass-sm">Abbrechen</button>
    </footer>
  </div>
</dialog>
```

## Best Practices

1. **Maßvoll einsetzen**: Verwenden Sie Glaseffekte strategisch für besondere Elemente, nicht für alles
2. **Hintergrund beachten**: Glaseffekte funktionieren am besten mit strukturierten oder farbigen Hintergründen
3. **Lesbarkeit priorisieren**: Stellen Sie sicher, dass Text und wichtige Inhalte auf Glasoberflächen gut lesbar bleiben
4. **Testen Sie auf verschiedenen Geräten**: Performance und Darstellung können variieren 
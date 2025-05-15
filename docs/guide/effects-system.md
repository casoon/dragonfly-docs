---
title: Effekt-System
category: Guide
---

# Effekt-System

Das Effekt-System der Casoon UI Library bietet eine umfangreiche Sammlung von visuellen Effekten, Animationen und Interaktionen, um moderne und ansprechende Benutzeroberflächen zu gestalten.

## Übersicht

Die Effekte sind in verschiedene Kategorien unterteilt und können einzeln oder kombiniert eingesetzt werden, um einzigartige visuelle Erlebnisse zu schaffen. Alle Effekte sind performant optimiert, berücksichtigen Barrierefreiheit und funktionieren responsiv auf allen Geräten.

## Effekt-Kategorien

Die UI-Lib bietet über 40 spezialisierte Effekt-Module für verschiedene Anwendungsfälle:

### Visuelle Effekte

- **Glaseffekte (`glass.css`)**: Moderne Glasmorphismus-Effekte mit verschiedenen Transparenz- und Unschärfe-Stufen
- **Neon-Effekte (`neon.css`)**: Leuchtende Texte und Rahmen mit Glow-Effekten
- **Schatten-Effekte (`shadows.css`)**: Realistische und stilisierte Schatten für räumliche Tiefe
- **Filter-Effekte (`filters.css`)**: Grafische Filter wie Unschärfe, Helligkeit und Kontrast
- **3D-Effekte (`3d.css`)**: Perspektivische Transformationen und räumliche Effekte
- **Gradient-Effekte (`gradient.css`)**: Fließende Farbverläufe und dynamische Übergänge
- **Muster und Texturen (`patterns.css`, `textures.css`)**: Hintergrundmuster und Oberflächentexturen
- **Vignetten (`vignette.css`)**: Abgedunkelte Ränder für fokussierte Darstellung
- **Blendmodi (`blends.css`)**: Erweiterte CSS-Blendmodi für komplexe visuelle Effekte

### Animationen und Bewegungen

- **Grundlegende Animationen (`animations.css`)**: Umfassende Sammlung von Bewegungs- und Übergangsanimationen
- **Morph-Effekte (`morph.css`)**: Formveränderungen und Übergänge
- **Partikel-Effekte (`particles.css`)**: Dynamische Partikel-Animationen
- **Typing-Animationen (`typing.css`)**: Schreibmaschinen-Effekte und Text-Animationen
- **Ripple-Effekte (`ripple.css`)**: Welleneffekte für Interaktionsfeedback
- **Glanzeffekte (`shine.css`, `sparkle.css`)**: Dynamische Glanzlichter und Funkeln
- **Scroll-Effekte (`scroll.css`)**: Animationen bei Scrollvorgängen

### Interaktionen und Zustände

- **Hover-Effekte (`hover.css`)**: Visuelle Feedbacks bei Mausberührung
- **Aktive Zustände (`active.css`)**: Effekte beim Klicken oder Aktivieren
- **Fokus-Stile (`focus.css`)**: Barrierefreie Fokus-Indikatoren
- **Lade-Zustände (`loading.css`)**: Animierte Ladeindikatoren
- **Cursor-Effekte (`cursors.css`)**: Spezialisierte Mauszeiger für verschiedene Interaktionen
- **Interaktions-Feedback (`interactions.css`)**: Umfassende Sammlung von Interaktionseffekten

### Zustandseffekte

- **Erfolgs-Zustände (`success.css`)**: Positive Rückmeldungen visuell darstellen
- **Fehler-Zustände (`error.css`)**: Fehlermeldungen effektiv visualisieren
- **Warnungs-Zustände (`warning.css`)**: Warnhinweise hervorheben
- **Deaktivierte Zustände (`disabled.css`)**: Visuelles Feedback für nicht verfügbare Elemente

## Verwendung

Die Effekte können über CSS-Klassen direkt auf HTML-Elemente angewendet werden:

```html
<!-- Glaseffekt -->
<div class="glass">Glaseffekt-Container</div>

<!-- Neon-Effekt für Text -->
<h2 class="neon-text">Leuchtender Neon-Text</h2>

<!-- Kombinierte Effekte -->
<button class="hover-lift active-scale glass-hover">
  Interaktiver Button mit mehreren Effekten
</button>
```

### Effekt-Module importieren

Sie können die benötigten Effekt-Module selektiv importieren:

```css
/* Basis-Effekte */
@import '@casoon/ui-lib/effects/animations.css';
@import '@casoon/ui-lib/effects/filters.css';
@import '@casoon/ui-lib/effects/interactions.css';

/* Spezifische Effekte nach Bedarf */
@import '@casoon/ui-lib/effects/glass.css';
@import '@casoon/ui-lib/effects/neon.css';
```

## Detaillierte Effekt-Beschreibungen

### Glaseffekte (`glass.css`)

Der moderne Glasmorphismus-Stil ermöglicht halbtransparente Elemente mit Unschärfeeffekt.

```html
<!-- Standard-Glaseffekt -->
<div class="glass">Standard-Glaseffekt</div>

<!-- Glaseffekt-Varianten -->
<div class="glass-sm">Subtiler Glaseffekt</div>
<div class="glass-lg">Starker Glaseffekt</div>

<!-- Farbige Glaseffekte -->
<div class="glass glass-color-primary">Primärfarben-Glaseffekt</div>
<div class="glass glass-color-success">Erfolgs-Glaseffekt</div>

<!-- Interaktiver Glaseffekt -->
<div class="glass-hover">Hover-aktivierter Glaseffekt</div>
```

CSS-Variablen zur Anpassung:

```css
:root {
  --glass-blur: 10px;
  --glass-background: rgb(255 255 255 / 10%);
  --glass-border: rgb(255 255 255 / 20%);
  --glass-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
}
```

### Neon-Effekte (`neon.css`)

Leuchtende Text- und Rahmeneffekte im Neon-Stil.

```html
<!-- Neon-Text in verschiedenen Farben -->
<div class="neon-text">Standard Neon-Text</div>
<div class="neon-text-secondary">Sekundärer Neon-Text</div>
<div class="neon-text-accent">Akzent Neon-Text</div>

<!-- Neon-Rahmen -->
<div class="neon-border">Element mit Neon-Rahmen</div>

<!-- Animation-Varianten -->
<div class="neon-text-slow">Langsam pulsierende Animation</div>
<div class="neon-text-fast">Schnell pulsierende Animation</div>
<div class="neon-text-flicker">Flackernder Neon-Effekt</div>
<div class="neon-text-hover">Nur bei Hover aktivierter Neon-Effekt</div>

<!-- Glow-Effekte -->
<div class="glow">Text mit Glow-Effekt</div>
<span class="glow" style="--glow-color: #0ff;">Individuelle Glow-Farbe</span>
```

### Animationen (`animations.css`)

Umfangreiche Sammlung von Animationen für verschiedene Anwendungsfälle.

```html
<!-- Basis-Animationen -->
<div class="animate-fade-in">Einblenden</div>
<div class="animate-slide-up">Von unten einfahren</div>
<div class="animate-bounce">Hüpfen</div>
<div class="animate-pulse">Pulsieren</div>
<div class="animate-spin">Rotieren</div>

<!-- Scroll-aktivierte Animationen -->
<div class="scroll-fade-in">Einblenden beim Scrollen</div>
<div class="scroll-slide-up">Hochfahren beim Scrollen</div>
<div class="scroll-scale">Größe ändern beim Scrollen</div>

<!-- Interaktions-Animationen -->
<div class="hover-bounce">Hüpfen bei Hover</div>
<div class="hover-pulse">Pulsieren bei Hover</div>
<div class="hover-spin">Rotieren bei Hover</div>
```

Anpassungen über CSS-Variablen:

```css
:root {
  --animation-duration: 0.3s;
  --animation-timing: ease;
  --animation-delay: 0s;
  --animation-count: 1;
  --animation-fill-mode: both;
}
```

### Interaktionseffekte (`interactions.css`)

Interaktive Effekte für verbesserte Benutzererfahrung.

```html
<!-- Basis-Interaktionen -->
<button class="hover-lift">Anhebendes Element bei Hover</button>
<button class="hover-scale">Skalierendes Element bei Hover</button>
<button class="active-scale">Bei Klick/Aktivierung schrumpfendes Element</button>

<!-- Touch-Effekte -->
<button class="touch-feedback">Feedback bei Touch/Klick</button>
<button class="touch-ripple">Welleneffekt bei Touch/Klick</button>

<!-- Drag-Interaktionen -->
<div class="draggable">Ziehbares Element</div>

<!-- Kombinierte Interaktionen -->
<button class="interactive hover-lift active-scale">
  Vollständig interaktiver Button
</button>
```

## Effekt-Kombinationen

Effekte können miteinander kombiniert werden, um komplexere visuelle Erlebnisse zu erzeugen:

```html
<!-- Neon-Glaseffekt -->
<div class="glass neon-border">
  <h3 class="neon-text">Glas mit Neon</h3>
</div>

<!-- Interaktive 3D-Karte -->
<div class="card glass hover-lift active-scale">
  <div class="card__content">
    <h3 class="neon-text-hover">Interaktive Karte</h3>
    <p>Inhalt mit kombinierten Effekten</p>
  </div>
</div>

<!-- Animierter Button mit mehreren Effekten -->
<button class="button primary hover-lift active-scale neon-border">
  <span class="glow">Komplexer Button</span>
</button>
```

## Barrierefreiheit

Alle Effekte berücksichtigen Barrierefreiheit und respektieren die Benutzereinstellung `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-bounce,
  .neon-text,
  .glass-hover {
    animation: none !important;
    transition: none !important;
  }
}
```

## Performance-Optimierung

Die Effekte sind für optimale Performance entwickelt:

1. **Hardware-Beschleunigung**: Nutzung von CSS-Eigenschaften, die GPU-Beschleunigung unterstützen
2. **Selektiver Einsatz**: Kombinieren Sie Effekte mit Bedacht, um Performance-Engpässe zu vermeiden
3. **Mobile-Optimierung**: Reduzierte Effekte auf mobilen Geräten für bessere Performance
4. **will-change-Eigenschaft**: Sparsamer Einsatz für kritische Animationen

## Best Practices

1. **Subtile Effekte bevorzugen**: Weniger ist oft mehr, besonders bei Animationen und Interaktionen
2. **Konsistenter Einsatz**: Verwenden Sie ähnliche Effekte für ähnliche Interaktionen
3. **Barrierefreiheit beachten**: Stellen Sie alternative Darstellungen für Nutzer mit reduzierter Bewegung bereit
4. **Vermeiden Sie Konflikte**: Kombinieren Sie Effekte so, dass sie sich nicht gegenseitig stören
5. **Testen auf verschiedenen Geräten**: Stellen Sie sicher, dass Effekte auf allen Zielplattformen gut funktionieren

## Weiterführende Beispiele

### Komplexe Karten-UI

```html
<div class="card glass hover-lift active-scale">
  <div class="card__header">
    <h3 class="glow">Karten-Titel</h3>
    <span class="badge neon-text-small">Neu</span>
  </div>
  <div class="card__body">
    <p>Karteninhalt mit komplexen Effekten</p>
    <div class="progress glass-sm">
      <div class="progress__bar" style="width: 75%"></div>
    </div>
  </div>
  <div class="card__footer">
    <button class="button primary hover-scale active-scale neon-border-sm">
      Aktion
    </button>
  </div>
</div>
```

### Animierte Produktansicht

```html
<div class="product-card glass scroll-fade-in">
  <div class="product-image hover-scale">
    <img src="product.jpg" alt="Produkt" class="filter-brightness" />
    <div class="badge neon-text-sm">-20%</div>
  </div>
  <div class="product-info">
    <h3 class="glow-hover">Produktname</h3>
    <p class="scroll-slide-up" style="--animation-delay: 0.2s">
      Produktbeschreibung
    </p>
    <div class="price neon-text-secondary">29,99 €</div>
    <button class="button primary hover-lift active-scale ripple">
      In den Warenkorb
    </button>
  </div>
</div>
```

## Verfügbare Effekt-Module

Die Casoon UI Library bietet über 40 spezialisierte Effekt-Module:

- `3d.css` - 3D-Transformationen und Perspektiven
- `active.css` - Effekte für aktive Zustände
- `animations.css` - Allgemeine Animations-Bibliothek
- `backdrops.css` - Hintergrund-Effekte
- `blends.css` - CSS-Blendmodi-Effekte
- `clip-path.css` - Formschneide-Effekte
- `cursors.css` - Spezialisierte Cursor-Stile
- `disabled.css` - Effekte für deaktivierte Elemente
- `error.css` - Visualisierung von Fehlerzuständen
- `filters.css` - CSS-Filter-Effekte
- `focus.css` - Fokus-Zustandseffekte
- `glass.css` - Glasmorphismus-Effekte
- `glow.css` - Leuchteffekte
- `gradient.css` - Farbverlauf-Effekte
- `hover.css` - Hover-Zustandseffekte
- `interactions.css` - Interaktionseffekte
- `light.css` - Lichteffekte
- `loading.css` - Ladeanimationen
- `masks.css` - CSS-Masken-Effekte
- `morph.css` - Formveränderungs-Effekte
- `neon.css` - Neon-Lichteffekte
- `noise.css` - Rauscheffekte
- `outlines.css` - Umriss-Effekte
- `overlays.css` - Überlagerungseffekte
- `particles.css` - Partikeleffekte
- `patterns.css` - Musterhintergründe
- `reflections.css` - Spiegelungseffekte
- `ripple.css` - Welleneffekte
- `scroll.css` - Scroll-basierte Effekte
- `shadows.css` - Schatteneffekte
- `shine.css` - Glanzeffekte
- `skeleton.css` - Lade-Platzhalter-Effekte
- `sparkle.css` - Funkeleffekte
- `success.css` - Erfolgszustands-Effekte
- `textures.css` - Textur-Effekte
- `transforms.css` - CSS-Transformationseffekte
- `transitions.css` - Übergangseffekte
- `typing.css` - Schreibmaschinen-Effekte
- `typography.css` - Text-Effekte
- `vignette.css` - Vignetten-Effekte
- `warning.css` - Warnzustands-Effekte 
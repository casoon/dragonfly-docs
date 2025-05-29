---
title: Hover-Effekte
category: Guide
---

# Hover-Effekte

Die `hover.css` Datei bietet eine umfangreiche Sammlung von Effekten, die beim Bewegen des Mauszeigers über ein Element (Hover) ausgelöst werden. Diese Effekte verbessern die Interaktivität Ihrer Benutzeroberfläche und geben den Nutzern visuelles Feedback über interaktive Elemente.

## Overview

Hover-Effekte sind ein wesentlicher Bestandteil einer interaktiven Weboberfläche. Sie signalisieren Nutzern, welche Elemente anklickbar sind, und steigern die wahrgenommene Reaktionsfähigkeit einer Anwendung. Die Casoon UI Library bietet verschiedene Hover-Effekte, von subtilen Änderungen bis hin zu auffälligen Transformationen.

## Basis-Hover-Effekte

```html
<!-- Farbwechsel bei Hover -->
<div class="hover-color">Ändert Farbe bei Hover</div>
<div class="hover-bg">Ändert Hintergrundfarbe bei Hover</div>
<div class="hover-border">Ändert Rahmenfarbe bei Hover</div>

<!-- Hervorhebung bei Hover -->
<div class="hover-highlight">Wird bei Hover hervorgehoben</div>
<div class="hover-underline">Bekommt Unterstreichung bei Hover</div>
<div class="hover-outline">Bekommt Umriss bei Hover</div>

<!-- Schattierung bei Hover -->
<div class="hover-shadow">Bekommt Schatten bei Hover</div>
<div class="hover-shadow-soft">Bekommt weichen Schatten bei Hover</div>
<div class="hover-shadow-sharp">Bekommt scharfen Schatten bei Hover</div>
```

## Bewegungs-Hover-Effekte

```html
<!-- Anheben bei Hover -->
<div class="hover-lift">Wird bei Hover angehoben</div>
<div class="hover-lift-sm">Wird bei Hover leicht angehoben</div>
<div class="hover-lift-lg">Wird bei Hover stark angehoben</div>

<!-- Skalieren bei Hover -->
<div class="hover-scale">Wird bei Hover größer</div>
<div class="hover-scale-sm">Wird bei Hover leicht größer</div>
<div class="hover-scale-lg">Wird bei Hover deutlich größer</div>
<div class="hover-scale-down">Wird bei Hover kleiner</div>

<!-- Verschiebung bei Hover -->
<div class="hover-shift-up">Bewegt sich bei Hover nach oben</div>
<div class="hover-shift-right">Bewegt sich bei Hover nach rechts</div>
<div class="hover-shift-down">Bewegt sich bei Hover nach unten</div>
<div class="hover-shift-left">Bewegt sich bei Hover nach links</div>

<!-- Rotation bei Hover -->
<div class="hover-rotate">Rotiert bei Hover</div>
<div class="hover-rotate-sm">Rotiert bei Hover leicht</div>
<div class="hover-rotate-lg">Rotiert bei Hover stark</div>
```

## Spezielle Hover-Effekte

```html
<!-- Glow-Effekt bei Hover -->
<div class="hover-glow">Leuchtet bei Hover</div>
<div class="hover-glow-soft">Leuchtet bei Hover sanft</div>
<div class="hover-glow-intense">Leuchtet bei Hover intensiv</div>
<div class="hover-glow-primary">Leuchtet bei Hover in Primärfarbe</div>

<!-- Hover-States für bestimmte Elemente -->
<button class="hover-fill">Button füllt sich bei Hover</button>
<div class="card hover-float">Card schwebt bei Hover</div>
<img class="hover-zoom" src="image.jpg" alt="Bild zoomt bei Hover">
<a class="hover-slide-line">Link mit Unterstreichungs-Animation</a>

<!-- Sweep-Effekte bei Hover -->
<div class="hover-sweep-to-right">Füllung gleitet von links nach rechts</div>
<div class="hover-sweep-to-left">Füllung gleitet von rechts nach links</div>
<div class="hover-sweep-to-top">Füllung gleitet von unten nach oben</div>
<div class="hover-sweep-to-bottom">Füllung gleitet von oben nach unten</div>
```

## Text-Hover-Effekte

```html
<!-- Text-Transformationen bei Hover -->
<p class="hover-text-bold">Wird bei Hover fett</p>
<p class="hover-text-italic">Wird bei Hover kursiv</p>
<p class="hover-text-uppercase">Wird bei Hover großgeschrieben</p>

<!-- Text-Farbe bei Hover -->
<p class="hover-text-primary">Ändert bei Hover zu Primärfarbe</p>
<p class="hover-text-secondary">Ändert bei Hover zu Sekundärfarbe</p>
<p class="hover-text-accent">Ändert bei Hover zu Akzentfarbe</p>
```

## Rahmen-Hover-Effekte

```html
<!-- Rahmeneffekte bei Hover -->
<div class="hover-border-thicker">Rahmen wird bei Hover dicker</div>
<div class="hover-border-rounded">Rahmen wird bei Hover abgerundet</div>
<div class="hover-border-solid">Durchgezogener Rahmen bei Hover</div>
<div class="hover-border-dashed">Gestrichelter Rahmen bei Hover</div>
<div class="hover-border-animated">Animierter Rahmen bei Hover</div>
```

## Transparenz-Hover-Effekte

```html
<!-- Transparenzeffekte bei Hover -->
<div class="hover-fade-in">Wird bei Hover sichtbarer</div>
<div class="hover-fade-out">Wird bei Hover transparenter</div>
<div class="hover-reveal">Inhalt wird bei Hover enthüllt</div>
<div class="hover-mask">Maskierungseffekt bei Hover</div>
```

## Ein-/Ausblendungseffekte bei Hover

```html
<!-- Überblendungseffekte bei Hover -->
<div class="hover-overlay">
  <img src="image.jpg" alt="Bild">
  <div class="overlay-content">Überblendungsinhalt</div>
</div>

<!-- Anzeigen von Elementen bei Hover -->
<div class="hover-show-content">
  <img src="image.jpg" alt="Bild">
  <div class="hover-content">Erscheint bei Hover</div>
</div>

<!-- Einblenden von Icons bei Hover -->
<button class="hover-show-icon">
  Mehr erfahren
  <span class="hover-icon">→</span>
</button>
```

## Kombinierte Hover-Effekte

```html
<!-- Mehrere Hover-Effekte kombinieren -->
<div class="hover-scale hover-shadow hover-color">
  Skalierende, schattige Farbänderung bei Hover
</div>

<!-- Cardn-Hover-Effekte -->
<div class="card hover-lift hover-shadow hover-border">
  <div class="card-content">
    <h3 class="hover-text-primary">Cardntitel</h3>
    <p>Cardninhalt</p>
  </div>
</div>

<!-- Button-Hover-Effekte -->
<button class="button hover-scale-sm hover-bg hover-shadow">
  Ansprechender Button
</button>

<!-- Link-Hover-Effekte -->
<a class="link hover-underline hover-text-bold hover-text-primary">
  Hervorgehobener Link
</a>
```

## Anpassbare Hover-Effekte

Viele Hover-Effekte können durch CSS Variables angepasst werden:

```html
<button class="hover-scale" style="--hover-scale: 1.1">
  Angepasste Skalierung
</button>

<div class="hover-glow" style="--hover-glow-color: #ff3366">
  Angepasste Glow-Farbe
</div>

<div class="hover-shift-up" style="--hover-shift-distance: 10px">
  Angepasste Verschiebungsdistanz
</div>
```

## CSS Variables für Hover-Effekte

```css
:root {
  /* Basis-Hover-Parameter */
  --hover-transition-duration: 0.3s;
  --hover-transition-timing: ease;
  
  /* Skalierung */
  --hover-scale-sm: 1.05;
  --hover-scale-md: 1.1;
  --hover-scale-lg: 1.15;
  
  /* Verschiebung */
  --hover-shift-sm: 2px;
  --hover-shift-md: 5px;
  --hover-shift-lg: 10px;
  
  /* Rotation */
  --hover-rotate-sm: 2deg;
  --hover-rotate-md: 5deg;
  --hover-rotate-lg: 10deg;
  
  /* Schatten */
  --hover-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
  --hover-shadow-md: 0 5px 15px rgba(0, 0, 0, 0.1);
  --hover-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  /* Glow */
  --hover-glow-sm: 0 0 5px rgba(var(--color-primary-rgb), 0.5);
  --hover-glow-md: 0 0 10px rgba(var(--color-primary-rgb), 0.5);
  --hover-glow-lg: 0 0 20px rgba(var(--color-primary-rgb), 0.5);
  
  /* Colors */
  --hover-color-primary: var(--color-primary);
  --hover-color-secondary: var(--color-secondary);
  --hover-color-accent: var(--color-accent);
  
  /* Rahmen */
  --hover-border-width: 2px;
  --hover-border-color: var(--color-primary);
  --hover-border-style: solid;
}
```

## Reaktionsfähigkeit für Touch-Geräte

Für Touch-Geräte, bei denen kein Hover möglich ist, können Sie alternative Effekte anbieten:

```css
/* Auf Geräten mit Touch verwenden wir stattdessen active-States */
@media (hover: none) {
  .hover-scale:active {
    transform: scale(var(--hover-scale-md));
  }
  
  .hover-color:active {
    color: var(--hover-color-primary);
  }
  
  /* ... weitere Touch-optimierte Alternativen ... */
}
```

## Accessibility

Bei der Usage von Hover-Effekten sollten Sie auf Accessibility achten:

1. **Tastaturnutzung**: Stellen Sie sicher, dass Hover-Effekte auch mit `:focus` funktionieren
2. **Reduzierte Bewegung**: Respektieren Sie `prefers-reduced-motion`
3. **Ausreichender Kontrast**: Hover-Effekte sollten den Kontrast nicht beeinträchtigen
4. **Kein exklusiver Content**: Wichtige Inhalte sollten nicht ausschließlich bei Hover sichtbar sein

```css
/* Example für barrierefreie Hover-Effekte */
.hover-scale,
.hover-rotate,
.hover-shift-up {
  transition: transform var(--hover-transition-duration) var(--hover-transition-timing);
}

/* Für Tastaturbedienung */
.hover-scale:focus-visible,
.hover-rotate:focus-visible,
.hover-shift-up:focus-visible {
  /* Gleiche Effekte wie bei Hover */
}

/* Reduzierte Bewegung berücksichtigen */
@media (prefers-reduced-motion: reduce) {
  .hover-scale,
  .hover-rotate,
  .hover-shift-up,
  /* weitere Bewegungseffekte */ {
    transition: none !important;
    transform: none !important;
  }
}
```

## Performance-Überlegungen

Einige Hover-Effekte können die Performance beeinflussen:

1. **Vermeiden Sie `box-shadow` und `filter`** bei häufig animierten Hoverelementen
2. **Verwenden Sie `transform` und `opacity`** für bessere Performance
3. **Setzen Sie `will-change`** sparsam ein bei Elementen, die häufig Hover-Übergänge haben
4. **Beschränken Sie komplexe Hover-Effekte** auf wichtige interaktive Elemente

```css
/* Performance-optimierter Hover-Effekt */
.hover-performance {
  transform: translateZ(0);
}

.hover-performance:hover {
  transform: translateZ(0) scale(1.05);
}

/* Für häufig gehoverte Elemente */
.hover-optimized {
  will-change: transform;
}
```

## Praktische Examples

### Interaktive Button-Sammlung

```html
<div class="button-collection">
  <!-- Primärer Button mit Skalierung und Schattierung -->
  <button class="button primary hover-scale-sm hover-shadow">
    Primärer Button
  </button>
  
  <!-- Sekundärer Button mit sanfter Hintergrundänderung -->
  <button class="button secondary hover-bg hover-text-bold">
    Sekundärer Button
  </button>
  
  <!-- Outline-Button mit Füll-Effekt -->
  <button class="button outline hover-fill">
    Outline-Button
  </button>
  
  <!-- Icon-Button mit Rotation -->
  <button class="button icon-button hover-rotate-sm hover-glow">
    <i class="icon">↻</i>
  </button>
</div>
```

### Produktkarte mit Hover-Effekten

```html
<div class="product-card hover-lift hover-shadow-lg">
  <div class="product-image-container">
    <img class="product-image hover-scale" src="product.jpg" alt="Produkt">
    <div class="hover-overlay">
      <div class="overlay-content">
        <button class="hover-scale">Schnellansicht</button>
      </div>
    </div>
  </div>
  <div class="product-info">
    <h3 class="hover-text-primary">Produktname</h3>
    <p>Produktbeschreibung</p>
    <div class="price">29,99 €</div>
    <button class="button hover-bg hover-shift-up">In den Warenkorb</button>
  </div>
</div>
```

### Navigationsmenü mit Hover-Effekten

```html
<nav class="main-nav">
  <ul>
    <li>
      <a class="hover-slide-line" href="#">Startseite</a>
    </li>
    <li>
      <a class="hover-slide-line" href="#">Über uns</a>
    </li>
    <li class="has-dropdown">
      <a class="hover-slide-line" href="#">Produkte</a>
      <ul class="dropdown hover-shadow">
        <li><a class="hover-bg" href="#">Kategorie 1</a></li>
        <li><a class="hover-bg" href="#">Kategorie 2</a></li>
        <li><a class="hover-bg" href="#">Kategorie 3</a></li>
      </ul>
    </li>
    <li>
      <a class="hover-slide-line" href="#">Kontakt</a>
    </li>
  </ul>
</nav>
```

## Best Practices

1. **Subtile Effekte bevorzugen**: Dezente Hover-Effekte wirken oft professioneller als übertriebene Animationen
2. **Consistency bewahren**: Verwenden Sie ähnliche Hover-Effekte für ähnliche Elementtypen
3. **Feedback geben**: Hover-Effekte sollten dem Nutzer klares Feedback über interaktive Elemente geben
4. **Performance beachten**: Komplexe Hover-Effekte können die Leistung beeinträchtigen, besonders auf älteren Geräten
5. **Accessibility einbauen**: Stellen Sie sicher, dass Ihre Hover-Effekte auch mit der Tastatur zugänglich sind
</rewritten_file> 
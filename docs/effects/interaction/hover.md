---
title: Hover-effects
category: Guide
---

# Hover-effects

the `hover.css` file bietet a umfangreiche Sammlung from Effekten, the beim Bewegen des Mauszeigers over a element (Hover) ausgelost become. these effects verbessern the Interaktivitat Ihrer Benutzeroberflache and geben den Nutzern visuelles Feedback over interaktive elements.

## Overview

Hover-effects sind a wesentlicher Bestandteil einer interaktiven Weboberflache. them signalisieren Nutzern, welche elements anklickbar sind, and steigern the wahrgenommene Reaktionsfahigkeit einer Application. the Casoon UI Library bietet verschiedene Hover-effects, from subtilen Anderungen until hin to auffalligen Transformationen.

## Base-Hover-effects

```html
<!-- Farbwechsel at Hover -->
<div class="hover-color">Andert color at Hover</div>
<div class="hover-bg">Andert Hintergrundfarbe at Hover</div>
<div class="hover-border">Andert Rahmenfarbe at Hover</div>

<!-- Hervorhebung at Hover -->
<div class="hover-highlight">Wird at Hover hervorgehoben</div>
<div class="hover-underline">Bekommt Unterstreichung at Hover</div>
<div class="hover-outline">Bekommt Umriss at Hover</div>

<!-- Schattierung at Hover -->
<div class="hover-shadow">Bekommt shadow at Hover</div>
<div class="hover-shadow-soft">Bekommt weichen shadow at Hover</div>
<div class="hover-shadow-sharp">Bekommt scharfen shadow at Hover</div>
```

## Bewegungs-Hover-effects

```html
<!-- Anheben at Hover -->
<div class="hover-lift">Wird at Hover angehoben</div>
<div class="hover-lift-sm">Wird at Hover leicht angehoben</div>
<div class="hover-lift-lg">Wird at Hover stark angehoben</div>

<!-- Skalieren at Hover -->
<div class="hover-scale">Wird at Hover grosser</div>
<div class="hover-scale-sm">Wird at Hover leicht grosser</div>
<div class="hover-scale-lg">Wird at Hover deutlich grosser</div>
<div class="hover-scale-down">Wird at Hover smaller</div>

<!-- Verschiebung at Hover -->
<div class="hover-shift-up">Bewegt oneself at Hover after oben</div>
<div class="hover-shift-right">Bewegt oneself at Hover after rechts</div>
<div class="hover-shift-down">Bewegt oneself at Hover after unten</div>
<div class="hover-shift-left">Bewegt oneself at Hover after links</div>

<!-- Rotation at Hover -->
<div class="hover-rotate">Rotiert at Hover</div>
<div class="hover-rotate-sm">Rotiert at Hover leicht</div>
<div class="hover-rotate-lg">Rotiert at Hover stark</div>
```

## Spezielle Hover-effects

```html
<!-- Glow-effect at Hover -->
<div class="hover-glow">Leuchtet at Hover</div>
<div class="hover-glow-soft">Leuchtet at Hover sanft</div>
<div class="hover-glow-intense">Leuchtet at Hover intensiv</div>
<div class="hover-glow-primary">Leuchtet at Hover in Primarfarbe</div>

<!-- Hover-States for bestimmte elements -->
<button class="hover-fill">button fullt oneself at Hover</button>
<div class="card hover-float">Card schwebt at Hover</div>
<img class="hover-zoom" src="image.jpg" alt="image zoomt at Hover">
<a class="hover-slide-line">link with Unterstreichungs-animation</a>

<!-- Sweep-effects at Hover -->
<div class="hover-sweep-to-right">Fullung gleitet from links after rechts</div>
<div class="hover-sweep-to-left">Fullung gleitet from rechts after links</div>
<div class="hover-sweep-to-top">Fullung gleitet from unten after oben</div>
<div class="hover-sweep-to-bottom">Fullung gleitet from oben after unten</div>
```

## Text-Hover-effects

```html
<!-- Text-Transformationen at Hover -->
<p class="hover-text-bold">Wird at Hover fett</p>
<p class="hover-text-italic">Wird at Hover kursiv</p>
<p class="hover-text-uppercase">Wird at Hover grossgeschrieben</p>

<!-- Text-color at Hover -->
<p class="hover-text-primary">Andert at Hover to Primarfarbe</p>
<p class="hover-text-secondary">Andert at Hover to Sekundarfarbe</p>
<p class="hover-text-accent">Andert at Hover to Akzentfarbe</p>
```

## border-Hover-effects

```html
<!-- Rahmeneffekte at Hover -->
<div class="hover-border-thicker">border wird at Hover dicker</div>
<div class="hover-border-rounded">border wird at Hover abgerundet</div>
<div class="hover-border-solid">Durchgezogener border at Hover</div>
<div class="hover-border-dashed">Gestrichelter border at Hover</div>
<div class="hover-border-animated">Animierter border at Hover</div>
```

## transparency-Hover-effects

```html
<!-- Transparenzeffekte at Hover -->
<div class="hover-fade-in">Wird at Hover sichtbarer</div>
<div class="hover-fade-out">Wird at Hover transparenter</div>
<div class="hover-reveal">content wird at Hover enthullt</div>
<div class="hover-mask">Maskierungseffekt at Hover</div>
```

## a-/Ausblendungseffekte at Hover

```html
<!-- Uberblendungseffekte at Hover -->
<div class="hover-overlay">
  <img src="image.jpg" alt="image">
  <div class="overlay-content">Uberblendungsinhalt</div>
</div>

<!-- Anzeigen from Elementen at Hover -->
<div class="hover-show-content">
  <img src="image.jpg" alt="image">
  <div class="hover-content">Erscheint at Hover</div>
</div>

<!-- Einblenden from icons at Hover -->
<button class="hover-show-icon">
  more erfahren
  <span class="hover-icon">→</span>
</button>
```

## Kombinierte Hover-effects

```html
<!-- several Hover-effects combine -->
<div class="hover-scale hover-shadow hover-color">
  Skalierende, schattige Farbanderung at Hover
</div>

<!-- Cardn-Hover-effects -->
<div class="card hover-lift hover-shadow hover-border">
  <div class="card-content">
    <h3 class="hover-text-primary">Cardntitel</h3>
    <p>Cardninhalt</p>
  </div>
</div>

<!-- button-Hover-effects -->
<button class="button hover-scale-sm hover-bg hover-shadow">
  Ansprechender button
</button>

<!-- link-Hover-effects -->
<a class="link hover-underline hover-text-bold hover-text-primary">
  Hervorgehobener link
</a>
```

## Anpassbare Hover-effects

many Hover-effects can through CSS Variables angepasst become:

```html
<button class="hover-scale" style="--hover-scale: 1.1">
  Angepasste Skalierung
</button>

<div class="hover-glow" style="--hover-glow-color: #ff3366">
  Angepasste Glow-color
</div>

<div class="hover-shift-up" style="--hover-shift-distance: 10px">
  Angepasste Verschiebungsdistanz
</div>
```

## CSS Variables for Hover-effects

```css
:root {
  /* Base-Hover-parameter */
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
  
  /* shadow */
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
  
  /* border */
  --hover-border-width: 2px;
  --hover-border-color: var(--color-primary);
  --hover-border-style: solid;
}
```

## Reaktionsfahigkeit for Touch-Gerate

for Touch-Gerate, at denen no Hover moglich ist, can them alternative effects anbieten:

```css
/* on Geraten with Touch use we stattdessen active-States */
@media (hover: none) {
  .hover-scale:active {
    transform: scale(var(--hover-scale-md));
  }
  
  .hover-color:active {
    color: var(--hover-color-primary);
  }
  
  /* ... additional Touch-optimierte Alternativen ... */
}
```

## Accessibility

at the Usage from Hover-Effekten should them on Accessibility ensure:

1. **Tastaturnutzung**: ensure, that Hover-effects also with `:focus` funktionieren
2. **Reduzierte Bewegung**: Respektieren them `prefers-reduced-motion`
3. **Ausreichender Kontrast**: Hover-effects should den Kontrast not beeintrachtigen
4. **no exklusiver Content**: Wichtige contents should not ausschliesslich at Hover sichtbar be

```css
/* Example for barrierefreie Hover-effects */
.hover-scale,
.hover-rotate,
.hover-shift-up {
  transition: transform var(--hover-transition-duration) var(--hover-transition-timing);
}

/* for Tastaturbedienung */
.hover-scale:focus-visible,
.hover-rotate:focus-visible,
.hover-shift-up:focus-visible {
  /* Gleiche effects how at Hover */
}

/* Reduzierte Bewegung berucksichtigen */
@media (prefers-reduced-motion: reduce) {
  .hover-scale,
  .hover-rotate,
  .hover-shift-up,
  /* additional Bewegungseffekte */ {
    transition: none !important;
    transform: none !important;
  }
}
```

## Performance-Uberlegungen

some Hover-effects can the Performance beeinflussen:

1. **Vermeiden them `box-shadow` and `filter`** at haufig animierten Hoverelementen
2. **use them `transform` and `opacity`** for bessere Performance
3. **Setzen them `will-change`** sparsam a at Elementen, the haufig Hover-Ubergange have
4. **Beschranken them komplexe Hover-effects** on wichtige interaktive elements

```css
/* Performance-optimierter Hover-effect */
.hover-performance {
  transform: translateZ(0);
}

.hover-performance:hover {
  transform: translateZ(0) scale(1.05);
}

/* for haufig gehoverte elements */
.hover-optimized {
  will-change: transform;
}
```

## Praktische Examples

### Interaktive button-Sammlung

```html
<div class="button-collection">
  <!-- Primarer button with Skalierung and Schattierung -->
  <button class="button primary hover-scale-sm hover-shadow">
    Primarer button
  </button>
  
  <!-- Sekundarer button with sanfter Hintergrundanderung -->
  <button class="button secondary hover-bg hover-text-bold">
    Sekundarer button
  </button>
  
  <!-- Outline-button with Full-effect -->
  <button class="button outline hover-fill">
    Outline-button
  </button>
  
  <!-- icon-button with Rotation -->
  <button class="button icon-button hover-rotate-sm hover-glow">
    <i class="icon">↻</i>
  </button>
</div>
```

### Produktkarte with Hover-Effekten

```html
<div class="product-card hover-lift hover-shadow-lg">
  <div class="product-image-containers">
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
    <button class="button hover-bg hover-shift-up">in den Warenkorb</button>
  </div>
</div>
```

### Navigationsmenu with Hover-Effekten

```html
<nav class="main-nav">
  <ul>
    <li>
      <a class="hover-slide-line" href="#">Startseite</a>
    </li>
    <li>
      <a class="hover-slide-line" href="#">over us</a>
    </li>
    <li class="has-dropdown">
      <a class="hover-slide-line" href="#">Produkte</a>
      <ul class="dropdown hover-shadow">
        <li><a class="hover-bg" href="#">category 1</a></li>
        <li><a class="hover-bg" href="#">category 2</a></li>
        <li><a class="hover-bg" href="#">category 3</a></li>
      </ul>
    </li>
    <li>
      <a class="hover-slide-line" href="#">Kontakt</a>
    </li>
  </ul>
</nav>
```

## Best Practices

1. **Subtile effects bevorzugen**: Dezente Hover-effects wirken oft professioneller as ubertriebene animations
2. **Consistency bewahren**: use them ahnliche Hover-effects for ahnliche Elementtypen
3. **Feedback geben**: Hover-effects should dem Nutzer klares Feedback over interaktive elements geben
4. **Performance note**: Komplexe Hover-effects can the Leistung beeintrachtigen, besonders on alteren Geraten
5. **Accessibility einbauen**: ensure, that Ihre Hover-effects also with the Tastatur zuganglich sind
</rewritten_file> 
---
title: responsive Containers
category: layout
---

# responsive Containers

Die Casoon UI Library bietet ein fortschrittliches responsives Container-system, das sowohl traditionelle Media Queries als auch moderne Container Queries unterstutzt. Diese Documentation erklart, wie Sie responsive Container for anpassungsfahige und komponentenbasierte Layouts einsetzen can.

## Overview

Das responsive Container-system basiert auf diesen Kernprinzipien:

1. **viewport-basierte Responsivitat** - Traditionelle Media-Query-basierte Container
2. **Container-basierte Responsivitat** - Moderne Container-Query-basierte Layouts
3. **Adaptive Breitenanpassung** - Container, die ihre Maximalgrosse je nach breakpoint customize
4. **components-Queries** - Spezielle Container for komponenteninterne Responsivitat
5. **Einfache API** - Klare, konsistente Klassennamen for beide responsive-Ansatze

## viewport-responsive Container

Traditionelle responsive Container passen ihre maximale width basierend auf der viewport-size an:

```html
<!-- Standard-responsiver Container -->
<div class="container">
  <p>Dieser Container passt seine maximale width automatisch an verschiedene viewport-sizes an.</p>
</div>
```

Das behavior der Standard-Container-Class:

| viewport-width | Container-behavior |
|-----------------|---------------------|
| < 576px (xs)    | 100% width mit Padding |
| ≥ 576px (sm)    | Max. 540px width |
| ≥ 768px (md)    | Max. 720px width |
| ≥ 992px (lg)    | Max. 960px width |
| ≥ 1200px (xl)   | Max. 1140px width |
| ≥ 1400px (2xl)  | Max. 1320px width |

## breakpoint-spezifische Container

Container can so konfiguriert werden, dass sie erst ab einem bestimmten breakpoint eine maximale width erhalten:

```html
<!-- Container, der erst ab dem md-breakpoint (≥768px) eine maximale width hat -->
<div class="container-md">
  <p>Volle width auf kleinen Geraten, begrenzte width ab mittleren Geraten.</p>
</div>

<!-- Container, der erst ab dem lg-breakpoint (≥992px) eine maximale width hat -->
<div class="container-lg">
  <p>Volle width auf kleinen und mittleren Geraten, begrenzte width ab sizes Geraten.</p>
</div>
```

behavior verschiedener Container-Varianten:

| Class | xs (<576px) | sm (≥576px) | md (≥768px) | lg (≥992px) | xl (≥1200px) | 2xl (≥1400px) |
|-------|-------------|-------------|-------------|-------------|--------------|---------------|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-2xl` | 100% | 100% | 100% | 100% | 100% | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |

## Container-Query-basierte Responsivitat

Die moderne Alternative zu Media Queries sind Container Queries, die es erlauben, das layout basierend auf der size des Containers selbst anzupassen, nicht des Viewports:

```html
<!-- Container-Query-fahiger Container -->
<div class="container container-query">
  <!-- Diese elements reagieren auf die size des Containers -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div class="card">Karte 1</div>
    <div class="card">Karte 2</div>
    <div class="card">Karte 3</div>
    <div class="card">Karte 4</div>
  </div>
</div>
```

Implementation:

```css
.container-query {
  container-name: layout;
  container-type: inline-size;
}
```

## components-Query Container

for noch granularere Kontrolle bietet das system spezielle components-Container, die es erlauben, einzelne UI-components basierend auf ihrer eigenen size anzupassen:

```html
<div class="card-grid container-query">
  <!-- responsive Karte mit eigener Customization -->
  <div class="card component-query">
    <div class="card-content c-sm:flex c-sm:justify-between">
      <h3>Kartentitel</h3>
      <div class="c-sm:text-right">
        <span class="badge">Status</span>
      </div>
    </div>
    <p>Karteninhalt, der sich an die width der Karte anpasst</p>
  </div>
  
  <!-- additional Karten -->
</div>
```

Implementation:

```css
.component-query {
  container-name: component;
  container-type: inline-size;
}
```

## Container-Query Breakpoints

Das system definiert standardmassige Container-Query-Breakpoints:

```css
:root {
  --container-query-xs: 240px;
  --container-query-sm: 380px;
  --container-query-md: 540px;
  --container-query-lg: 720px;
  --container-query-xl: 960px;
}
```

Diese Breakpoints werden for Container-Query-spezifische Klassen verwendet:

```html
<div class="container-query">
  <div class="sm:flex md:grid md:grid-cols-2 lg:grid-cols-3">
    <!-- Inhalt, der sich basierend auf Container-size anpasst -->
  </div>
</div>
```

## Gemischte Ansatze

You can sowohl viewport-basierte als auch container-basierte Responsivitat combine:

```html
<!-- Container mit viewport-basierter maximaler width -->
<div class="container-lg">
  <!-- Container-Query-basierte innere Customization -->
  <div class="container-query">
    <!-- Reagiert auf die Container-size -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3">
      <!-- grid-Inhalte -->
    </div>
  </div>
</div>
```

## layout-Query vs. Component-Query

Das system unterscheidet zwischen layout-level und Component-level Container Queries:

### layout-Level Queries

```html
<div class="container container-query">
  <!-- layout-level responsive elements use sm:, md:, lg: Prafixe -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- grid-Inhalt -->
  </div>
</div>
```

### Component-Level Queries

```html
<div class="card component-query">
  <!-- Component-level responsive elements use c-sm:, c-md:, c-lg: Prafixe -->
  <div class="card-content c-sm:flex c-md:gap-4">
    <!-- Karteninhalt -->
  </div>
</div>
```

## responsive Container-Klassen

Hier sind die verfugbaren responsive Container-Klassen:

### Container-Query-Klassen (layout-Level)

```css
@container layout (min-width: 30rem) {
  .sm\:flex-row       { flex-direction: row; }
  .sm\:grid-cols-2    { grid-template-columns: repeat(2, 1fr); }
  .sm\:gap-4          { gap: var(--space-4); }
  /* ... additional sm-Klassen ... */
}

@container layout (min-width: 48rem) {
  .md\:grid-cols-3    { grid-template-columns: repeat(3, 1fr); }
  .md\:gap-6          { gap: var(--space-6); }
  /* ... additional md-Klassen ... */
}

@container layout (min-width: 62rem) {
  .lg\:grid-cols-4    { grid-template-columns: repeat(4, 1fr); }
  .lg\:gap-8          { gap: var(--space-8); }
  /* ... additional lg-Klassen ... */
}
```

### Container-Query-Klassen (Component-Level)

```css
@container component (min-width: 15rem) {
  .c-sm\:flex         { display: flex; }
  .c-sm\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  /* ... additional c-sm-Klassen ... */
}

@container component (min-width: 30rem) {
  .c-md\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  /* ... additional c-md-Klassen ... */
}

@container component (min-width: 45rem) {
  .c-lg\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
  /* ... additional c-lg-Klassen ... */
}
```

## Anwendungsfalle

### responsive Dashboard-layout

```html
<div class="container-fluid">
  <div class="container-query">
    <!-- responsive Dashboard-layout -->
    <div class="dashboard-grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <!-- Sidebar (volle width auf mobil, 1 column auf Tablets+) -->
      <div class="sidebar md:col-span-1">
        <nav>Navigation</nav>
      </div>
      
      <!-- Hauptinhalt (volle width auf mobil, 2 Spalten auf Tablets+) -->
      <div class="main-content md:col-span-2 lg:col-span-3">
        <!-- responsive Karten-grid -->
        <div class="card-grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Einzelne Karten mit eigener Responsivitat -->
          <div class="card component-query">
            <h3>Kartentitel</h3>
            <div class="c-sm:flex c-sm:justify-between">
              <p>Value: 100</p>
              <span class="badge">Aktiv</span>
            </div>
          </div>
          <!-- additional Karten -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### responsive Produktliste

```html
<div class="container">
  <h1>Unsere Produkte</h1>
  
  <div class="container-query">
    <!-- Filterliste und Produkte in Spalten auf grosseren Containern -->
    <div class="product-layout sm:flex sm:gap-6">
      <!-- Filter (seitlich auf grosseren Containern) -->
      <div class="filters sm:w-64">
        <h2>Filter</h2>
        <!-- Filteroptionen -->
      </div>
      
      <!-- Produktraster (anpassungsfahig) -->
      <div class="product-grid flex-grow">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Produktkarten mit eigener Responsivitat -->
          <div class="product-card component-query">
            <img src="product.jpg" alt="Produkt">
            <div class="c-sm:flex c-sm:justify-between">
              <h3>Produktname</h3>
              <span class="price">€99,00</span>
            </div>
            <p>Produktbeschreibung</p>
          </div>
          <!-- additional Produktkarten -->
        </div>
      </div>
    </div>
  </div>
</div>
```

## Best Practices

1. **Container Queries for wiederverwendbare components** - use Sie Container Queries for components, die in verschiedenen Kontexten mit unterschiedlichen Breiten verwendet werden.
2. **viewport Queries for seitenweite Layouts** - use Sie viewport-basierte Media Queries for grundlegende Seitenlayouts und Navigation.
3. **Vermeiden von zu vielen Container-Verschachtelungen** - Zu viele verschachtelte Container-Query-Container can die Performance beeintrachtigen.
4. **Konsistente Breakpoints use** - Halten Sie sich an die vordefinierten Breakpoints for bessere Wartbarkeit.
5. **Die richtige Query-Art wahlen** - Entscheiden Sie bewusst zwischen layout-Queries und Component-Queries je nach Anwendungsfall.
6. **Container-Queries testen** - Testen Sie Container-Query-basierte Layouts grundlich, da sie sich anders als traditionelle responsive Designs behavior can.
7. **Browser-Support note** - Berucksichtigen Sie, dass Container Queries in alteren Browsern moglicherweise nicht unterstutzt werden, und planen Sie Fallbacks.

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Media Queries | Alle | Alle | Alle | Alle |
| Container Queries | 105+ | 110+ | 16+ | 105+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

## Fallback for altere Browser

for Browser ohne Container-Query-Unterstutzung kann eine Fallback-Strategie implementiert werden:

```css
/* Base-Style for alle Browser */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Media-Query-basierter Fallback for altere Browser */
@media (min-width: 576px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Container-Query for moderne Browser - wird in alteren Browsern ignoriert */
.container-query {
  container-type: inline-size;
}

@container (min-width: 30rem) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 60rem) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Zusammenfassung

Die responsiven Container der Casoon UI Library bieten eine leistungsstarke und flexible Losung for moderne responsive Designs. Durch die Kombination von traditionellen Media Queries und modernen Container Queries can Sie sowohl seitenweite Layouts als auch komponentenbasierte Responsivitat effektiv implement. Diese duale Herangehensweise ermoglicht eine prazisere Kontrolle over das layout und eine bessere Wiederverwendbarkeit von components in verschiedenen Kontexten. 
---
title: Responsive Containers
category: Layout
---

# Responsive Containers

Die Casoon UI Library bietet ein fortschrittliches responsives Container-System, das sowohl traditionelle Media Queries als auch moderne Container Queries unterstützt. Diese Dokumentation erklärt, wie Sie responsive Container für anpassungsfähige und komponentenbasierte Layouts einsetzen können.

## Overview

Das responsive Container-System basiert auf diesen Kernprinzipien:

1. **Viewport-basierte Responsivität** - Traditionelle Media-Query-basierte Container
2. **Container-basierte Responsivität** - Moderne Container-Query-basierte Layouts
3. **Adaptive Breitenanpassung** - Container, die ihre Maximalgröße je nach Breakpoint anpassen
4. **Komponenten-Queries** - Spezielle Container für komponenteninterne Responsivität
5. **Einfache API** - Klare, konsistente Klassennamen für beide Responsive-Ansätze

## Viewport-Responsive Container

Traditionelle responsive Container passen ihre maximale Breite basierend auf der Viewport-Größe an:

```html
<!-- Standard-responsiver Container -->
<div class="container">
  <p>Dieser Container passt seine maximale Breite automatisch an verschiedene Viewport-Größen an.</p>
</div>
```

Das Verhalten der Standard-Container-Klasse:

| Viewport-Breite | Container-Verhalten |
|-----------------|---------------------|
| < 576px (xs)    | 100% Breite mit Padding |
| ≥ 576px (sm)    | Max. 540px Breite |
| ≥ 768px (md)    | Max. 720px Breite |
| ≥ 992px (lg)    | Max. 960px Breite |
| ≥ 1200px (xl)   | Max. 1140px Breite |
| ≥ 1400px (2xl)  | Max. 1320px Breite |

## Breakpoint-spezifische Container

Container können so konfiguriert werden, dass sie erst ab einem bestimmten Breakpoint eine maximale Breite erhalten:

```html
<!-- Container, der erst ab dem md-Breakpoint (≥768px) eine maximale Breite hat -->
<div class="container-md">
  <p>Volle Breite auf kleinen Geräten, begrenzte Breite ab mittleren Geräten.</p>
</div>

<!-- Container, der erst ab dem lg-Breakpoint (≥992px) eine maximale Breite hat -->
<div class="container-lg">
  <p>Volle Breite auf kleinen und mittleren Geräten, begrenzte Breite ab großen Geräten.</p>
</div>
```

Verhalten verschiedener Container-Varianten:

| Klasse | xs (<576px) | sm (≥576px) | md (≥768px) | lg (≥992px) | xl (≥1200px) | 2xl (≥1400px) |
|-------|-------------|-------------|-------------|-------------|--------------|---------------|
| `.container` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-sm` | 100% | 540px | 720px | 960px | 1140px | 1320px |
| `.container-md` | 100% | 100% | 720px | 960px | 1140px | 1320px |
| `.container-lg` | 100% | 100% | 100% | 960px | 1140px | 1320px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1140px | 1320px |
| `.container-2xl` | 100% | 100% | 100% | 100% | 100% | 1320px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% | 100% |

## Container-Query-basierte Responsivität

Die moderne Alternative zu Media Queries sind Container Queries, die es erlauben, das Layout basierend auf der Größe des Containers selbst anzupassen, nicht des Viewports:

```html
<!-- Container-Query-fähiger Container -->
<div class="container container-query">
  <!-- Diese Elemente reagieren auf die Größe des Containers -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div class="card">Karte 1</div>
    <div class="card">Karte 2</div>
    <div class="card">Karte 3</div>
    <div class="card">Karte 4</div>
  </div>
</div>
```

Implementierung:

```css
.container-query {
  container-name: layout;
  container-type: inline-size;
}
```

## Komponenten-Query Container

Für noch granularere Kontrolle bietet das System spezielle Komponenten-Container, die es erlauben, einzelne UI-Komponenten basierend auf ihrer eigenen Größe anzupassen:

```html
<div class="card-grid container-query">
  <!-- Responsive Karte mit eigener Anpassung -->
  <div class="card component-query">
    <div class="card-content c-sm:flex c-sm:justify-between">
      <h3>Kartentitel</h3>
      <div class="c-sm:text-right">
        <span class="badge">Status</span>
      </div>
    </div>
    <p>Karteninhalt, der sich an die Breite der Karte anpasst</p>
  </div>
  
  <!-- Weitere Karten -->
</div>
```

Implementierung:

```css
.component-query {
  container-name: component;
  container-type: inline-size;
}
```

## Container-Query Breakpoints

Das System definiert standardmäßige Container-Query-Breakpoints:

```css
:root {
  --container-query-xs: 240px;
  --container-query-sm: 380px;
  --container-query-md: 540px;
  --container-query-lg: 720px;
  --container-query-xl: 960px;
}
```

Diese Breakpoints werden für Container-Query-spezifische Klassen verwendet:

```html
<div class="container-query">
  <div class="sm:flex md:grid md:grid-cols-2 lg:grid-cols-3">
    <!-- Inhalt, der sich basierend auf Container-Größe anpasst -->
  </div>
</div>
```

## Gemischte Ansätze

Sie können sowohl viewport-basierte als auch container-basierte Responsivität kombinieren:

```html
<!-- Container mit viewport-basierter maximaler Breite -->
<div class="container-lg">
  <!-- Container-Query-basierte innere Anpassung -->
  <div class="container-query">
    <!-- Reagiert auf die Container-Größe -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3">
      <!-- Grid-Inhalte -->
    </div>
  </div>
</div>
```

## Layout-Query vs. Component-Query

Das System unterscheidet zwischen Layout-level und Component-level Container Queries:

### Layout-Level Queries

```html
<div class="container container-query">
  <!-- Layout-level responsive Elemente verwenden sm:, md:, lg: Präfixe -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Grid-Inhalt -->
  </div>
</div>
```

### Component-Level Queries

```html
<div class="card component-query">
  <!-- Component-level responsive Elemente verwenden c-sm:, c-md:, c-lg: Präfixe -->
  <div class="card-content c-sm:flex c-md:gap-4">
    <!-- Karteninhalt -->
  </div>
</div>
```

## Responsive Container-Klassen

Hier sind die verfügbaren responsive Container-Klassen:

### Container-Query-Klassen (Layout-Level)

```css
@container layout (min-width: 30rem) {
  .sm\:flex-row       { flex-direction: row; }
  .sm\:grid-cols-2    { grid-template-columns: repeat(2, 1fr); }
  .sm\:gap-4          { gap: var(--space-4); }
  /* ... weitere sm-Klassen ... */
}

@container layout (min-width: 48rem) {
  .md\:grid-cols-3    { grid-template-columns: repeat(3, 1fr); }
  .md\:gap-6          { gap: var(--space-6); }
  /* ... weitere md-Klassen ... */
}

@container layout (min-width: 62rem) {
  .lg\:grid-cols-4    { grid-template-columns: repeat(4, 1fr); }
  .lg\:gap-8          { gap: var(--space-8); }
  /* ... weitere lg-Klassen ... */
}
```

### Container-Query-Klassen (Component-Level)

```css
@container component (min-width: 15rem) {
  .c-sm\:flex         { display: flex; }
  .c-sm\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  /* ... weitere c-sm-Klassen ... */
}

@container component (min-width: 30rem) {
  .c-md\:grid-cols-2  { grid-template-columns: repeat(2, 1fr); }
  /* ... weitere c-md-Klassen ... */
}

@container component (min-width: 45rem) {
  .c-lg\:grid-cols-3  { grid-template-columns: repeat(3, 1fr); }
  /* ... weitere c-lg-Klassen ... */
}
```

## Anwendungsfälle

### Responsive Dashboard-Layout

```html
<div class="container-fluid">
  <div class="container-query">
    <!-- Responsive Dashboard-Layout -->
    <div class="dashboard-grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <!-- Sidebar (volle Breite auf mobil, 1 Spalte auf Tablets+) -->
      <div class="sidebar md:col-span-1">
        <nav>Navigation</nav>
      </div>
      
      <!-- Hauptinhalt (volle Breite auf mobil, 2 Spalten auf Tablets+) -->
      <div class="main-content md:col-span-2 lg:col-span-3">
        <!-- Responsive Karten-Raster -->
        <div class="card-grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Einzelne Karten mit eigener Responsivität -->
          <div class="card component-query">
            <h3>Kartentitel</h3>
            <div class="c-sm:flex c-sm:justify-between">
              <p>Wert: 100</p>
              <span class="badge">Aktiv</span>
            </div>
          </div>
          <!-- Weitere Karten -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### Responsive Produktliste

```html
<div class="container">
  <h1>Unsere Produkte</h1>
  
  <div class="container-query">
    <!-- Filterliste und Produkte in Spalten auf größeren Containern -->
    <div class="product-layout sm:flex sm:gap-6">
      <!-- Filter (seitlich auf größeren Containern) -->
      <div class="filters sm:w-64">
        <h2>Filter</h2>
        <!-- Filteroptionen -->
      </div>
      
      <!-- Produktraster (anpassungsfähig) -->
      <div class="product-grid flex-grow">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- Produktkarten mit eigener Responsivität -->
          <div class="product-card component-query">
            <img src="product.jpg" alt="Produkt">
            <div class="c-sm:flex c-sm:justify-between">
              <h3>Produktname</h3>
              <span class="price">€99,00</span>
            </div>
            <p>Produktbeschreibung</p>
          </div>
          <!-- Weitere Produktkarten -->
        </div>
      </div>
    </div>
  </div>
</div>
```

## Best Practices

1. **Container Queries für wiederverwendbare Komponenten** - Verwenden Sie Container Queries für Komponenten, die in verschiedenen Kontexten mit unterschiedlichen Breiten verwendet werden.
2. **Viewport Queries für seitenweite Layouts** - Nutzen Sie viewport-basierte Media Queries für grundlegende Seitenlayouts und Navigation.
3. **Vermeiden von zu vielen Container-Verschachtelungen** - Zu viele verschachtelte Container-Query-Container können die Performance beeinträchtigen.
4. **Konsistente Breakpoints verwenden** - Halten Sie sich an die vordefinierten Breakpoints für bessere Wartbarkeit.
5. **Die richtige Query-Art wählen** - Entscheiden Sie bewusst zwischen Layout-Queries und Component-Queries je nach Anwendungsfall.
6. **Container-Queries testen** - Testen Sie Container-Query-basierte Layouts gründlich, da sie sich anders als traditionelle responsive Designs verhalten können.
7. **Browser-Support beachten** - Berücksichtigen Sie, dass Container Queries in älteren Browsern möglicherweise nicht unterstützt werden, und planen Sie Fallbacks.

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Media Queries | Alle | Alle | Alle | Alle |
| Container Queries | 105+ | 110+ | 16+ | 105+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |

## Fallback für ältere Browser

Für Browser ohne Container-Query-Unterstützung kann eine Fallback-Strategie implementiert werden:

```css
/* Basis-Stil für alle Browser */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Media-Query-basierter Fallback für ältere Browser */
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

/* Container-Query für moderne Browser - wird in älteren Browsern ignoriert */
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

Die responsiven Container der Casoon UI Library bieten eine leistungsstarke und flexible Lösung für moderne responsive Designs. Durch die Kombination von traditionellen Media Queries und modernen Container Queries können Sie sowohl seitenweite Layouts als auch komponentenbasierte Responsivität effektiv implementieren. Diese duale Herangehensweise ermöglicht eine präzisere Kontrolle über das Layout und eine bessere Wiederverwendbarkeit von Komponenten in verschiedenen Kontexten. 
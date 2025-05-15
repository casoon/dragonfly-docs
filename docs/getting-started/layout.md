---
title: Layout-System
category: Getting Started
---

# Layout-System

Das Layout-System der Casoon UI Library bietet strukturierte und flexible Werkzeuge zur Gestaltung responsiver Benutzeroberflächen. Es basiert auf einem modernen CSS Layer-System und nutzt Container Queries für präzise komponentenbasierte Responsivität.

## CSS-Import

Um das Casoon UI Layout-System zu nutzen, importieren Sie die `core.css` Datei:

```css
@import "@casoon/ui-lib/core.css";
```

Dieser Import stellt die grundlegenden Layout-Funktionen und das Grid-System bereit. Beachten Sie jedoch, dass Komponenten und Effekte einzeln importiert werden müssen:

```css
/* Core-System für Layout und Grid */
@import "@casoon/ui-lib/core.css";

/* Komponenten müssen einzeln importiert werden */
@import "@casoon/ui-lib/components/button.css";
@import "@casoon/ui-lib/components/card.css";

/* Effekte müssen ebenfalls einzeln importiert werden */
@import "@casoon/ui-lib/effects/hover.css";
```

Das Layer-System sorgt automatisch für die korrekte Ladereihenfolge aller CSS-Dateien.

### Optimiert für Lightning CSS

Das gesamte CSS-System ist für Lightning CSS (früher Parcel CSS) optimiert und bietet folgende Vorteile:

- Schnellere Verarbeitung der verschachtelten Imports
- Automatisches Vendor-Prefixing für maximale Browser-Kompatibilität
- Volle Unterstützung für moderne CSS-Features wie Container Queries
- Effiziente CSS-Ausgabedateien durch intelligente Minifizierung
- Bessere Unterstützung für `@layer`-Deklarationen und -Kaskaden

## Layer-Struktur

Das Layout ist Teil des zentralen Layer-Systems und wird unter den Layern `layout` und `layout-queries` definiert. Die Reihenfolge der Layer bestimmt die CSS-Spezifität:

```css
@layer reset,                /* Grundlegender Browser-Reset */
       tokens,               /* Design-Tokens und Variablen */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Bidirektionale Layouts (RTL/LTR) */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -varianten */
       layout,               /* Layout-Grundlagen */
       layout-queries,       /* Responsive Anpassungen */
       typography,           /* Typografie-System */
       utilities,            /* Atomare Utility-Klassen */
       smooth-scroll,        /* Scrollverhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       components,           /* UI-Komponenten */
       animations,           /* Bewegungssystem */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

Diese hierarchische Schichtung ermöglicht eine klare Trennung und kontrollierte Überschreibung von Stilen. Durch die `@layer`-Direktive wird die Spezifität präzise gesteuert, unabhängig von der Komplexität der Selektoren innerhalb eines Layers.

### Integration eigener Styles

Eigene Stile können nahtlos in das bestehende Layer-System integriert werden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigene Layout-Anpassungen */
@layer layout {
  .custom-container {
    max-width: 1600px;
    margin-inline: auto;
    padding-inline: var(--space-6);
  }
}

/* Eigene Komponenten */
@layer components {
  .my-component {
    /* Komponenten-Styles unter Nutzung der Design-Tokens */
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}

/* Eigene Utilities */
@layer utilities {
  .gap-custom {
    gap: 5rem;
  }
}
```

Durch die Einhaltung der Layer-Struktur bleiben Ihre eigenen Anpassungen wartbar und konfliktfrei.

## Container-System

Der Container ist das grundlegende Layout-Element und sorgt für konsistente Seitenbreiten mit angemessenen Rändern.

```html
<div class="container">
  <!-- Inhalt wird auf eine maximale Breite begrenzt und zentriert -->
</div>
```

### Container-Varianten

| Klasse | Beschreibung | Maximale Breite |
| ------ | ------------ | --------------- |
| `container` | Standard-Container | 1200px |
| `container-sm` | Schmaler Container | 640px |
| `container-md` | Mittlerer Container | 960px |
| `container-lg` | Breiter Container | 1200px (Standard) |
| `container-xl` | Extra breiter Container | 1400px |
| `container-2xl` | XX-Large Container | 1920px |

### Container-Padding

Container haben standardmäßig ein horizontales Padding. Sie können dies mit speziellen Klassen anpassen:

```html
<div class="container container-padding-sm">
  <!-- Container mit kleinerem Padding -->
</div>

<div class="container container-padding-md">
  <!-- Container mit mittlerem Padding (Standard) -->
</div>

<div class="container container-padding-lg">
  <!-- Container mit größerem Padding -->
</div>
```

### Container-Ausrichtung

```html
<div class="container mx-auto">
  <!-- Horizontal zentrierter Container (Standard) -->
</div>
```

## Container-Queries für responsive Layouts

Eine moderne Alternative zu Media Queries sind Container-Queries, die auf der Größe des Containers selbst basieren statt auf der Viewport-Breite:

```html
<div class="container-query">
  <!-- Container, der als Anker für Container-Queries dient -->
  <div class="layout-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- Responsive Grid, das sich an die Container-Größe anpasst -->
  </div>
</div>
```

### Component-Queries

Für kleinere UI-Komponenten gibt es auch einen Component-Query-Kontext:

```html
<div class="component-query">
  <!-- Element als eigenständiger Komponenten-Container -->
  <div class="flex c-sm:flex-row c-md:gap-6">
    <!-- Responsive Layout innerhalb der Komponente -->
  </div>
</div>
```

## Grundlegende Layout-Komponenten

Das Framework bietet zwei Hauptkomponenten für Layouts:

```html
<div class="layout-grid">
  <!-- Grid-basiertes Layout mit Standard-Gap -->
</div>

<div class="layout-flex">
  <!-- Flex-basiertes Layout mit Standard-Gap -->
</div>
```

## Grid-System

Das Grid-System verwendet moderne CSS Grid-Technologie für flexible Layouts.

### Grundlegendes Grid

```html
<div class="grid">
  <div>Spalte 1</div>
  <div>Spalte 2</div>
  <div>Spalte 3</div>
</div>
```

### Grid-Spalten

Die Anzahl der Spalten kann mit spezifischen Klassen definiert werden:

```html
<div class="grid grid-cols-2">
  <!-- 2-spaltiges Grid -->
</div>

<div class="grid grid-cols-3">
  <!-- 3-spaltiges Grid -->
</div>

<div class="grid grid-cols-4">
  <!-- 4-spaltiges Grid -->
</div>

<div class="grid grid-cols-12">
  <!-- 12-spaltiges Grid -->
</div>

<div class="grid grid-auto-fit">
  <!-- Automatisch angepasstes Grid (mindestens 250px pro Spalte) -->
</div>
```

### Responsive Grids mit Container-Queries

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- 
      1 Spalte bei kleinen Containern
      2 Spalten bei Container ab 30rem (480px) Breite
      3 Spalten bei Container ab 48rem (768px) Breite
      4 Spalten bei Container ab 62rem (992px) Breite
    -->
  </div>
</div>
```

### Spezifische Spaltenbreiten

Einzelne Grid-Elemente können spezifische Spaltenbreiten haben:

```html
<div class="grid grid-cols-12">
  <div class="col-span-8">Breiter Bereich (8/12)</div>
  <div class="col-span-4">Schmaler Bereich (4/12)</div>
</div>
```

## Flexbox-Layout

Für eindimensionale Layouts und komplexe Ausrichtungen bietet die Library ein Flexbox-System:

```html
<div class="flex">
  <div>Flex-Element 1</div>
  <div>Flex-Element 2</div>
  <div>Flex-Element 3</div>
</div>
```

### Flex-Richtung

```html
<div class="flex flex-row">
  <!-- Horizontale Anordnung (Standard) -->
</div>

<div class="flex flex-col">
  <!-- Vertikale Anordnung -->
</div>
```

### Flex-Ausrichtung

```html
<div class="flex justify-start">
  <!-- Am Anfang ausgerichtet -->
</div>

<div class="flex justify-center">
  <!-- Zentriert ausgerichtet -->
</div>

<div class="flex justify-end">
  <!-- Am Ende ausgerichtet -->
</div>

<div class="flex items-center">
  <!-- Vertikal zentrierte Elemente -->
</div>

<div class="flex items-start">
  <!-- Oben ausgerichtete Elemente -->
</div>

<div class="flex items-end">
  <!-- Unten ausgerichtete Elemente -->
</div>
```

### Flex-Umbruch

```html
<div class="flex flex-wrap">
  <!-- Elemente brechen in neue Zeilen um -->
</div>

<div class="flex flex-nowrap">
  <!-- Elemente brechen nicht um -->
</div>
```

### Flex-Wachstum und -Schrumpfung

```html
<div class="flex">
  <div class="flex-1">Wächst, um Platz zu füllen</div>
  <div class="flex-auto">Wächst basierend auf Inhalt</div>
  <div class="flex-none">Feste Größe</div>
</div>
```

### Flex-Basis

Für präzise Größenverteilung:

```html
<div class="flex">
  <div class="flex-basis-1-2">50% Breite</div>
  <div class="flex-basis-1-2">50% Breite</div>
</div>

<div class="flex">
  <div class="flex-basis-1-3">33.33% Breite</div>
  <div class="flex-basis-2-3">66.67% Breite</div>
</div>

<div class="flex">
  <div class="flex-basis-1-4">25% Breite</div>
  <div class="flex-basis-3-4">75% Breite</div>
</div>
```

## Abstands-System (Spacing)

Ein konsistentes Abstands-System ist entscheidend für harmonische Layouts. Casoon UI bietet umfassende Utilities für Margins, Paddings und Gaps.

### Spacing-Skala

Das Framework verwendet eine einheitliche Spacing-Skala, die auf den Design-Tokens basiert:

| Klasse | Wert | Beschreibung |
|--------|------|-------------|
| `*-0` | 0 | Kein Abstand |
| `*-1` | 0.25rem (4px) | Extra klein |
| `*-2` | 0.5rem (8px) | Klein |
| `*-3` | 0.75rem (12px) | Mittel-klein |
| `*-4` | 1rem (16px) | Mittel (Basis) |
| `*-5` | 1.5rem (24px) | Mittel-groß |
| `*-6` | 2rem (32px) | Groß |
| `*-8` | 3rem (48px) | Extra groß |
| `*-10` | 4rem (64px) | XXL |
| `*-12` | 6rem (96px) | XXXL |
| `*-16` | 8rem (128px) | Maximal |

### Gaps (Abstände zwischen Grid/Flex-Elementen)

Für konsistente Abstände zwischen Grid- oder Flex-Elementen:

```html
<div class="grid gap-0"><!-- Kein Abstand --></div>
<div class="grid gap-1"><!-- 0.25rem Abstand --></div>
<div class="grid gap-2"><!-- 0.5rem Abstand --></div>
<div class="grid gap-3"><!-- 0.75rem Abstand --></div>
<div class="grid gap-4"><!-- 1rem Abstand (Standard) --></div>
<div class="grid gap-5"><!-- 1.5rem Abstand --></div>
<div class="grid gap-6"><!-- 2rem Abstand --></div>
<div class="grid gap-8"><!-- 3rem Abstand --></div>
<div class="grid gap-10"><!-- 4rem Abstand --></div>
<div class="grid gap-12"><!-- 6rem Abstand --></div>
<div class="grid gap-16"><!-- 8rem Abstand --></div>
```

Dasselbe Schema gilt für Flex-Container:

```html
<div class="flex gap-4"><!-- 1rem Abstand zwischen Flex-Elementen --></div>
```

### Responsive Gaps

Gaps können auch responsiv sein:

```html
<div class="container-query">
  <div class="grid gap-2 sm:gap-4 md:gap-6 lg:gap-8">
    <!-- 
      0.5rem Gap bei kleinen Containern
      1rem Gap bei Containern ab 30rem Breite
      2rem Gap bei Containern ab 48rem Breite
      3rem Gap bei Containern ab 62rem Breite
    -->
  </div>
</div>
```

### Margins und Paddings

Das Framework bietet umfassende Utility-Klassen für Margins und Paddings:

```html
<!-- Margin auf allen Seiten -->
<div class="m-1">Margin: 0.25rem</div>
<div class="m-2">Margin: 0.5rem</div>
<div class="m-3">Margin: 0.75rem</div>
<div class="m-4">Margin: 1rem</div>
<div class="m-5">Margin: 1.5rem</div>
<div class="m-6">Margin: 2rem</div>
<div class="m-8">Margin: 3rem</div>

<!-- Margin auf spezifischen Seiten -->
<div class="mt-4">Margin oben: 1rem</div>
<div class="mr-4">Margin rechts: 1rem</div>
<div class="mb-4">Margin unten: 1rem</div>
<div class="ml-4">Margin links: 1rem</div>

<!-- Margin auf Achsen -->
<div class="mx-4">Margin links und rechts: 1rem</div>
<div class="my-4">Margin oben und unten: 1rem</div>
```

Paddings funktionieren nach demselben Prinzip mit dem Präfix `p-`:

```html
<div class="p-4">Padding: 1rem auf allen Seiten</div>
<div class="pt-4">Padding oben: 1rem</div>
<div class="px-4">Padding links und rechts: 1rem</div>
<!-- usw. -->
```

## Media Queries und Breakpoints

Obwohl Container-Queries bevorzugt werden, unterstützt das Framework auch traditionelle Breakpoints für responsive Designs:

| Breakpoint | Präfix | Breite |
| ---------- | ------ | ------ |
| Extra Small | `xs:` | < 576px |
| Small | `sm:` | ≥ 576px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 992px |
| Extra Large | `xl:` | ≥ 1200px |
| 2X Large | `2xl:` | ≥ 1400px |

## Positionierung und Sichtbarkeit

Das Framework bietet auch Klassen für Positionierung und Sichtbarkeitssteuerung:

```html
<div class="position-relative">
  Relativ positioniertes Element
  <div class="position-absolute top-0 right-0">
    Absolut positioniert (oben rechts)
  </div>
</div>

<div class="hidden sm:block">
  <!-- Auf Mobilgeräten ausgeblendet, auf größeren Bildschirmen angezeigt -->
</div>
```

## Best Practices

1. **Container-Queries bevorzugen** - Verwenden Sie Container-Queries für komponentenbasierte Responsivität
2. **Konsistente Abstände** - Nutzen Sie die vordefinierten Spacing-Werte für harmonische Designs
3. **Layer-System respektieren** - Fügen Sie eigene Stile in den entsprechenden Layern hinzu
4. **Mobil-First** - Beginnen Sie mit dem Layout für kleine Bildschirme und erweitern für größere
5. **Semantic HTML** - Verwenden Sie semantische HTML-Elemente für bessere Zugänglichkeit

## Beispiele für Layout-Kombinationen

### Responsive Header mit Navigation

```html
<header class="container flex justify-between items-center p-4">
  <div class="logo">Logo</div>

  <nav class="hidden md:block">
    <ul class="flex gap-4">
      <li><a href="#">Home</a></li>
      <li><a href="#">Über uns</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>

  <button class="block md:hidden">Menu</button>
</header>
```

### Content-Bereich mit Sidebar

```html
<div class="container py-6">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
    <aside class="md:col-span-3 lg:col-span-2">
      <div class="p-4 bg-light">Sidebar-Inhalt</div>
    </aside>

    <main class="md:col-span-9 lg:col-span-10">
      <div class="p-4 bg-white">Hauptinhalt</div>
    </main>
  </div>
</div>
```

### Card-Grid mit responsivem Verhalten

```html
<div class="container-query">
  <div class="container py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="p-4">
        <h3>Karte 1</h3>
        <p>Beschreibung</p>
      </div>

      <div class="p-4">
        <h3>Karte 2</h3>
        <p>Beschreibung</p>
      </div>

      <div class="p-4">
        <h3>Karte 3</h3>
        <p>Beschreibung</p>
      </div>

      <div class="p-4">
        <h3>Karte 4</h3>
        <p>Beschreibung</p>
      </div>
    </div>
  </div>
</div>
```

### Hero-Bereich mit überlagerndem Text

```html
<div class="position-relative">
  <div class="aspect-ratio aspect-ratio--16-9">
    <img src="hero-image.jpg" alt="Hero" class="w-full h-full object-cover">
  </div>

  <div class="position-absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-50 flex items-center justify-center">
    <div class="container text-center text-white p-4">
      <h1 class="text-size-xxl mb-4">Willkommen bei Casoon UI</h1>
      <p class="text-size-lg mb-6">Modernes, flexibles Design-System für anspruchsvolle Webprojekte</p>
      <button class="btn btn--primary btn--lg">Mehr erfahren</button>
    </div>
  </div>
</div>
```

### Footer mit mehreren Spalten

```html
<footer class="bg-dark text-white py-8">
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h4 class="mb-4">Über uns</h4>
        <p>Kurze Beschreibung des Unternehmens oder der Organisation.</p>
      </div>

      <div>
        <h4 class="mb-4">Links</h4>
        <ul class="list-none">
          <li class="mb-2"><a href="#" class="text-light">Home</a></li>
          <li class="mb-2"><a href="#" class="text-light">Dienstleistungen</a></li>
          <li class="mb-2"><a href="#" class="text-light">Blog</a></li>
          <li class="mb-2"><a href="#" class="text-light">Kontakt</a></li>
        </ul>
      </div>

      <div>
        <h4 class="mb-4">Kontakt</h4>
        <address class="not-italic">
          <p class="mb-2">Musterstraße 123</p>
          <p class="mb-2">12345 Musterstadt</p>
          <p class="mb-2">info@example.com</p>
          <p>+49 123 456789</p>
        </address>
      </div>

      <div>
        <h4 class="mb-4">Newsletter</h4>
        <form>
          <div class="mb-3">
            <input type="email" placeholder="E-Mail-Adresse" class="w-full p-2">
          </div>
          <button type="submit" class="btn btn--primary">Abonnieren</button>
        </form>
      </div>
    </div>

    <div class="border-top border-light-dim mt-6 pt-6 text-center">
      <p>&copy; 2023 Casoon UI. Alle Rechte vorbehalten.</p>
    </div>
  </div>
</footer>
``` 

``` 

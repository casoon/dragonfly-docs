---
title: Layout-System
category: Getting Started
---

# Layout-System

Das Layout-System der Casoon UI Library bietet strukturierte und flexible Werkzeuge zur Gestaltung responsiver Benutzeroberflächen. Die Darstellung basiert auf einem modernen CSS Layer-System.

## CSS-Import

Um das komplette Casoon UI Layout-System zu nutzen, importieren Sie einfach die `core.css` Datei:

```css
@import "@casoon/ui-lib/core.css";
```

Dadurch wird automatisch das Layer-System geladen, welches auch den `layout`-Layer enthält.

## Layer-Struktur

Das Layout ist Teil des zentralen Layer-Systems und wird unter dem `layout`-Layer definiert. Die Reihenfolge der Layer bestimmt die CSS-Spezifität.

```css
@layer reset,               /* Browser-Reset */
       tokens,              /* Design-Tokens, Variablen */
       custom-properties,   /* CSS-Eigenschaften */
       core,                /* Kernfunktionalitäten */
       logical-properties,  /* Logische Eigenschaften */
       colors,              /* Farbsystem */
       color-mix,           /* Farbmischungen */
       layout,              /* Layout-System */
       typography,          /* Typografie */
       ...
```

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
| `container--sm` | Schmaler Container | 640px |
| `container--md` | Mittlerer Container | 960px |
| `container--lg` | Breiter Container | 1400px |
| `container--xl` | Extra breiter Container | 1920px |
| `container--full` | Volle Breite (100%) | 100% |
| `container--fluid` | Flüssiger Container mit Randabständen | 100% mit Padding |

### Container-Ausrichtung

```html
<div class="container container--center">
  <!-- Horizontal zentrierter Container -->
</div>

<div class="container container--right">
  <!-- Rechts ausgerichteter Container -->
</div>

<div class="container container--left">
  <!-- Links ausgerichteter Container -->
</div>
```

## Grid-System

Das Grid-System verwendet moderne CSS Grid-Technologie für flexible Layouts.

### Grundlegendes Grid

```html
<div class="grid">
  <div class="grid__item">Spalte 1</div>
  <div class="grid__item">Spalte 2</div>
  <div class="grid__item">Spalte 3</div>
</div>
```

### Grid-Spalten

Die Anzahl der Spalten kann mit dem `grid--cols-{n}` Modifikator definiert werden:

```html
<div class="grid grid--cols-2">
  <!-- 2-spaltiges Grid -->
</div>

<div class="grid grid--cols-3">
  <!-- 3-spaltiges Grid -->
</div>

<div class="grid grid--cols-4">
  <!-- 4-spaltiges Grid -->
</div>

<div class="grid grid--cols-12">
  <!-- 12-spaltiges Grid -->
</div>
```

### Responsive Grids

Für responsive Layouts können breakpoint-spezifische Klassen verwendet werden:

```html
<div class="grid grid--cols-1 sm:grid--cols-2 md:grid--cols-3 lg:grid--cols-4">
  <!-- 
    1 Spalte auf mobilen Geräten
    2 Spalten auf kleinen Bildschirmen (sm)
    3 Spalten auf mittleren Bildschirmen (md)
    4 Spalten auf großen Bildschirmen (lg)
  -->
</div>
```

### Grid-Abstände (Gap)

Der Abstand zwischen Grid-Elementen kann mit Gap-Modifikatoren angepasst werden:

```html
<div class="grid grid--gap-sm">
  <!-- Grid mit kleinem Abstand -->
</div>

<div class="grid grid--gap-md">
  <!-- Grid mit mittlerem Abstand -->
</div>

<div class="grid grid--gap-lg">
  <!-- Grid mit großem Abstand -->
</div>

<div class="grid grid--gap-none">
  <!-- Grid ohne Abstand -->
</div>
```

### Spezifische Spaltenbreiten

Einzelne Grid-Elemente können spezifische Spaltenbreiten haben:

```html
<div class="grid grid--cols-12">
  <div class="grid__item col-span-8">Breiter Bereich (8/12)</div>
  <div class="grid__item col-span-4">Schmaler Bereich (4/12)</div>
</div>
```

### Grid-Ausrichtung

Die Ausrichtung von Grid-Elementen kann gesteuert werden:

```html
<div class="grid grid--align-center">
  <!-- Vertikal zentrierte Elemente -->
</div>

<div class="grid grid--justify-between">
  <!-- Elemente mit Abstand dazwischen -->
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
<div class="flex flex--row">
  <!-- Horizontale Anordnung (Standard) -->
</div>

<div class="flex flex--col">
  <!-- Vertikale Anordnung -->
</div>

<div class="flex flex--row-reverse">
  <!-- Umgekehrte horizontale Anordnung -->
</div>

<div class="flex flex--col-reverse">
  <!-- Umgekehrte vertikale Anordnung -->
</div>
```

### Flex-Ausrichtung

```html
<div class="flex flex--justify-start">
  <!-- Am Anfang ausgerichtet -->
</div>

<div class="flex flex--justify-center">
  <!-- Zentriert ausgerichtet -->
</div>

<div class="flex flex--justify-end">
  <!-- Am Ende ausgerichtet -->
</div>

<div class="flex flex--justify-between">
  <!-- Mit Abstand dazwischen -->
</div>

<div class="flex flex--justify-around">
  <!-- Mit Abstand rundherum -->
</div>

<div class="flex flex--items-center">
  <!-- Vertikal zentrierte Elemente -->
</div>

<div class="flex flex--items-start">
  <!-- Oben ausgerichtete Elemente -->
</div>

<div class="flex flex--items-end">
  <!-- Unten ausgerichtete Elemente -->
</div>
```

### Flex-Umbruch

```html
<div class="flex flex--wrap">
  <!-- Elemente brechen in neue Zeilen um -->
</div>

<div class="flex flex--nowrap">
  <!-- Elemente brechen nicht um -->
</div>
```

### Flex-Wachstum und -Schrumpfung

```html
<div class="flex">
  <div class="flex-grow">Wächst, um Platz zu füllen</div>
  <div class="flex-shrink">Schrumpft bei Bedarf</div>
  <div class="flex-none">Feste Größe</div>
</div>
```

## Spacing-System

Das Spacing-System verwendet konsistente Abstände für Margins und Paddings:

### Margin

```html
<div class="m-1">Margin auf allen Seiten (0.25rem)</div>
<div class="m-2">Margin auf allen Seiten (0.5rem)</div>
<div class="m-3">Margin auf allen Seiten (0.75rem)</div>
<div class="m-4">Margin auf allen Seiten (1rem)</div>
<div class="m-5">Margin auf allen Seiten (1.5rem)</div>
<div class="m-6">Margin auf allen Seiten (2rem)</div>
<div class="m-8">Margin auf allen Seiten (3rem)</div>

<div class="mt-4">Margin oben (1rem)</div>
<div class="mr-4">Margin rechts (1rem)</div>
<div class="mb-4">Margin unten (1rem)</div>
<div class="ml-4">Margin links (1rem)</div>
<div class="mx-4">Margin links und rechts (1rem)</div>
<div class="my-4">Margin oben und unten (1rem)</div>
```

### Padding

```html
<div class="p-1">Padding auf allen Seiten (0.25rem)</div>
<div class="p-2">Padding auf allen Seiten (0.5rem)</div>
<div class="p-3">Padding auf allen Seiten (0.75rem)</div>
<div class="p-4">Padding auf allen Seiten (1rem)</div>
<div class="p-5">Padding auf allen Seiten (1.5rem)</div>
<div class="p-6">Padding auf allen Seiten (2rem)</div>
<div class="p-8">Padding auf allen Seiten (3rem)</div>

<div class="pt-4">Padding oben (1rem)</div>
<div class="pr-4">Padding rechts (1rem)</div>
<div class="pb-4">Padding unten (1rem)</div>
<div class="pl-4">Padding links (1rem)</div>
<div class="px-4">Padding links und rechts (1rem)</div>
<div class="py-4">Padding oben und unten (1rem)</div>
```

### Responsive Spacing

Spacing-Klassen können mit Breakpoint-Präfixen kombiniert werden:

```html
<div class="m-2 sm:m-4 md:m-6 lg:m-8">
  <!-- 
    0.5rem Margin auf mobilen Geräten
    1rem Margin auf kleinen Bildschirmen (sm)
    2rem Margin auf mittleren Bildschirmen (md)
    3rem Margin auf großen Bildschirmen (lg)
  -->
</div>
```

## Media Queries und Breakpoints

Das System verwendet folgende Breakpoints für responsive Designs:

| Breakpoint | Präfix | Breite |
| ---------- | ------ | ------ |
| Extra Small | `xs:` | < 576px |
| Small | `sm:` | ≥ 576px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 992px |
| Extra Large | `xl:` | ≥ 1200px |
| 2X Large | `2xl:` | ≥ 1400px |

### Verwendung von Breakpoints

Breakpoint-Präfixe können mit den meisten Utility-Klassen verwendet werden:

```html
<div class="grid--cols-1 sm:grid--cols-2 md:grid--cols-3 lg:grid--cols-4">
  <!-- Responsive Grid -->
</div>

<div class="p-2 md:p-4 lg:p-6">
  <!-- Responsives Padding -->
</div>

<div class="flex flex--col md:flex--row">
  <!-- Responsive Flex-Richtung -->
</div>
```

## Positionierung

### Relative und absolute Positionierung

```html
<div class="position-relative">
  Relativ positioniertes Element
  <div class="position-absolute top-0 right-0">
    Absolut positioniert (oben rechts)
  </div>
</div>
```

### Positionierungsklassen

```html
<div class="position-fixed bottom-0 left-0 right-0">
  <!-- Fixierte Fußzeile -->
</div>

<div class="position-sticky top-0">
  <!-- Sticky Header -->
</div>

<div class="position-absolute top-50 left-50 translate-center">
  <!-- Zentriertes Element -->
</div>
```

## Z-Index-System

Das Z-Index-System verwendet definierte Ebenen für konsistente Stapel-Reihenfolge:

```html
<div class="z-0">Basis-Ebene</div>
<div class="z-10">Niedrige Ebene</div>
<div class="z-20">Mittlere Ebene</div>
<div class="z-30">Hohe Ebene</div>
<div class="z-40">Höchste Ebene</div>
<div class="z-50">Überlagerungen</div>
<div class="z-100">Modals/Dialoge</div>
<div class="z-999">Toast-Nachrichten/Benachrichtigungen</div>
```

## Sichtbarkeit und Anzeige

```html
<div class="hidden">Ausgeblendet</div>
<div class="block">Block-Element</div>
<div class="inline">Inline-Element</div>
<div class="inline-block">Inline-Block-Element</div>
<div class="flex">Flex-Container</div>
<div class="grid">Grid-Container</div>

<div class="hidden sm:block">
  <!-- Auf Mobilgeräten ausgeblendet, auf größeren Bildschirmen angezeigt -->
</div>

<div class="block md:hidden">
  <!-- Auf kleinen Bildschirmen angezeigt, auf mittleren und größeren ausgeblendet -->
</div>
```

## Container Queries

Für komponenten-basierte responsive Designs unterstützt das System Container Queries:

```html
<div class="container-query">
  <div class="cq-sm:text-small cq-md:text-medium cq-lg:text-large">
    <!-- Text passt sich an die Größe des Containers an, nicht an die des Viewports -->
  </div>
</div>
```

## Beispiele für Layout-Kombinationen

### Responsive Header mit Navigation

```html
<header class="container flex flex--justify-between flex--items-center p-4">
  <div class="logo">Logo</div>
  
  <nav class="hidden md:block">
    <ul class="flex flex--gap-4">
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
  <div class="grid grid--cols-1 md:grid--cols-12 grid--gap-6">
    <aside class="md:col-span-3 lg:col-span-2">
      <div class="bg-light p-4">Sidebar-Inhalt</div>
    </aside>
    
    <main class="md:col-span-9 lg:col-span-10">
      <div class="bg-white p-4">Hauptinhalt</div>
    </main>
  </div>
</div>
```

### Card-Grid mit responsivm Verhalten

```html
<div class="container py-8">
  <div class="grid grid--cols-1 sm:grid--cols-2 lg:grid--cols-3 xl:grid--cols-4 grid--gap-6">
    <div class="card p-4">
      <h3>Karte 1</h3>
      <p>Beschreibung</p>
    </div>
    
    <div class="card p-4">
      <h3>Karte 2</h3>
      <p>Beschreibung</p>
    </div>
    
    <div class="card p-4">
      <h3>Karte 3</h3>
      <p>Beschreibung</p>
    </div>
    
    <div class="card p-4">
      <h3>Karte 4</h3>
      <p>Beschreibung</p>
    </div>
  </div>
</div>
```

### Hero-Bereich mit überlagerndem Text

```html
<div class="position-relative">
  <div class="aspect-ratio aspect-ratio--16-9">
    <img src="hero-image.jpg" alt="Hero" class="object-cover w-100 h-100">
  </div>
  
  <div class="position-absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-50 flex flex--items-center flex--justify-center">
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
    <div class="grid grid--cols-1 sm:grid--cols-2 md:grid--cols-4 grid--gap-6">
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
            <input type="email" placeholder="E-Mail-Adresse" class="w-100 p-2">
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

## Best Practices für Layouts

- **Container für Konsistenz** - Verwenden Sie Container für einheitliche Seitenbreiten und -ränder
- **Grid für komplexe Layouts** - Nutzen Sie das Grid-System für zweidimensionale Layouts
- **Flexbox für einfache Ausrichtung** - Wählen Sie Flexbox für eindimensionale Layouts und Ausrichtung
- **Mobile-First Ansatz** - Beginnen Sie mit dem mobilen Design und erweitern Sie für größere Bildschirme
- **Konsistentes Spacing** - Verwenden Sie das Spacing-System für einheitliche Abstände
- **Z-Index-Hierarchie** - Halten Sie sich an die definierte Z-Index-Hierarchie
- **Container Queries für Komponenten** - Bevorzugen Sie Container Queries für komponenten-basierte Designs 

## Erweiterte Anpassungen

Sie können das Layout-System auch mit eigenen Stilen erweitern, indem Sie den entsprechenden Layer verwenden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigene Layouts zum Layout-Layer hinzufügen */
@layer layout {
  .my-custom-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
  }
}
```

Diese Änderungen fügen sich nahtlos in die bestehende Layer-Hierarchie ein. 
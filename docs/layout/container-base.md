---
title: containers Base system
category: layout
---

# containers Base system

the Casoon UI Library implementiert a flexibles containers system, the as Base for konsistente layouts and Inhaltsbreiten dient. this Dokument beschreibt the Grundlagen, properties and Use Cases des containers Systems.

## Overview

the containers system basiert on diesen Kernprinzipien:

1. **Konsistente Breiten** - Standardisierte Maximalbereiten for contents
2. **Automatische centering** - containers center oneself horizontal im verfugbaren Raum
3. **responsive Customization** - Automatische Customization on verschiedene Bildschirmgrossen
4. **Flexibles Padding** - Konfigurierbarer padding for optimalen Content-Flow
5. **Standardisierte Sizes** - Vordefinierte Sizesklassen for unterschiedliche Use Cases

## Basic containers

the grundlegende containers `.containers` bietet a zentrierte, breitenbegrenzte box for contents:

```html
<div class="containers">
  <!-- content wird on a maximale width begrenzt and zentriert -->
  <p>Containerinhalt with maximaler width</p>
</div>
```

the Standard-containers-Implementation enthalt folgende CSS-properties:

```css
.containers {
  margin-inline: auto;     /* Horizontale centering */
  max-width: var(--containers-lg);  /* Standard-Maximalbreite */
  padding-inline: var(--space-4);  /* Horizontaler padding */
  width: 100%;             /* Volle verfugbare width use */
}
```

## containers Sizes

the system bietet verschiedene containers-Sizes for unterschiedliche Use Cases:

```html
<!-- smaller containers, ideal for schmale contents -->
<div class="containers containers-sm">
  <p>Schmaler containers-content</p>
</div>

<!-- Mittlerer containers -->
<div class="containers containers-md">
  <p>Mittelbreiter containers-content</p>
</div>

<!-- Grosser containers (Standard) -->
<div class="containers containers-lg">
  <p>Standard-containers-content</p>
</div>

<!-- Extra grosser containers -->
<div class="containers containers-xl">
  <p>Breiter containers-content</p>
</div>

<!-- Extra extra grosser containers -->
<div class="containers containers-2xl">
  <p>very breiter containers-content</p>
</div>
```

Containergrossen and ihre Maximalbreiten:

| Class | Maximalbreite | Typische Application |
|--------|---------------|-------------------|
| `.containers-sm` | `var(--containers-sm)` (640px) | Schmale contents, Forme, schmale Textspalten |
| `.containers-md` | `var(--containers-md)` (768px) | Mittlere Inhaltsbreite, Blogposts |
| `.containers-lg` | `var(--containers-lg)` (1024px) | Standard-Inhaltsbreite, Hauptlayouts |
| `.containers-xl` | `var(--containers-xl)` (1280px) | width layouts, Dashboard |
| `.containers-2xl` | `var(--containers-2xl)` (1536px) | very width layouts, komplexe Dashboards |

## containers Padding

the containers system bietet verschiedene Padding-Optionen for den padding:

```html
<!-- containers with kleinerem padding -->
<div class="containers containers-padding-sm">
  <p>containers with reduziertem padding</p>
</div>

<!-- containers with Standard-padding -->
<div class="containers containers-padding-md">
  <p>containers with Standard-padding</p>
</div>

<!-- containers with grosserem padding -->
<div class="containers containers-padding-lg">
  <p>containers with erhohtem padding</p>
</div>
```

the verschiedenen Padding-classes setzen folgende values:

```css
.containers-padding-sm { padding-inline: var(--space-2); } /* Kleinerer padding */
.containers-padding-md { padding-inline: var(--space-4); } /* Standard-padding */
.containers-padding-lg { padding-inline: var(--space-6); } /* Grosserer padding */
```

## Fluid containers

in manchen Fallen benotigen them einen containers, the the volle verfugbare width nutzt, without a Maximalbreite to setzen. Dafur kann a "Fluid containers" verwendet become:

```html
<div class="containers-fluid">
  <p>this containers nutzt immer the volle width</p>
</div>
```

Implementation:

```css
.containers-fluid {
  width: 100%;
  padding-inline: var(--space-4);
}
```

## Integration with grid and flexbox

containers arbeiten nahtlos with dem grid- and flexbox system zusammen:

```html
<!-- containers with grid-layout -->
<div class="containers">
  <div class="grid grid-cols-3 gap-4">
    <div>column 1</div>
    <div>column 2</div>
    <div>column 3</div>
  </div>
</div>

<!-- containers with flexbox-layout -->
<div class="containers">
  <div class="flex justify-between">
    <div>Flexitem links</div>
    <div>Flexitem rechts</div>
  </div>
</div>
```

## responsive behavior

containers passen oneself automatisch on verschiedene Bildschirmgrossen on. on kleinen Bildschirmen use them the volle verfugbare width and become erst ab bestimmten Breakpoints in ihrer width begrenzt.

on mobilen Geraten verhalt oneself every containers effektiv how a `containers-fluid` and nimmt the volle width a, wobei only the definierte Padding as spacing to den Bildschirmrandern dient.

## Verschachtelte containers

containers can verschachtelt become, although dies in den meisten Fallen not notwendig ist:

```html
<div class="containers containers-lg">
  <h1>Hauptuberschrift</h1>
  
  <!-- Verschachtelter containers for engeren Inhaltsbereich -->
  <div class="containers containers-sm">
    <p>this Text ist in einem schmalen containers within des Hauptcontainers.</p>
  </div>
</div>
```

**Note:** Verschachtelte containers should sparsam verwendet become, da them to unerwarteten layouts fuhren can. in den meisten Fallen ist it better, grid or flexbox within eines einzelnen Containers to use.

## containers for semantische Inhaltsgruppen

containers can also verwendet become, um semantische Gruppen from Inhalten to define:

```html
<header>
  <div class="containers">
    <!-- header-content -->
  </div>
</header>

<main>
  <section class="hero">
    <div class="containers">
      <!-- Hero-section-content -->
    </div>
  </section>
  
  <section class="features">
    <div class="containers">
      <!-- Features-section-content -->
    </div>
  </section>
</main>

<footer>
  <div class="containers">
    <!-- footer-content -->
  </div>
</footer>
```

## Customization des containers Systems

the containers system basiert on CSS Variables, the leicht angepasst become can:

```css
:root {
  /* containers-Sizes customize */
  --containers-sm: 540px;
  --containers-md: 720px;
  --containers-lg: 960px;
  --containers-xl: 1140px;
  --containers-2xl: 1400px;
  
  /* containers-Padding customize */
  --space-2: 0.5rem;  /* containers-padding-sm */
  --space-4: 1rem;    /* containers-padding-md */
  --space-6: 1.5rem;  /* containers-padding-lg */
}
```

## Best Practices

1. **containers for konsistente Breiten use** - use them containers, um a einheitliche Inhaltsbreite on Ihrer gesamten Website to gewahrleisten.
2. **containers-Variants gezielt einsetzen** - Wahlen them between `.containers`, `.containers-fluid` and Sizesvarianten je after Anforderung des layouts.
3. **Verschachtelte containers vermeiden** - Verschachteln them containers only, if unbedingt notig, um unerwartete layout-Probleme to vermeiden.
4. **containers with grid combine** - containers eignen oneself hervorragend as wrappers for grid-layouts, um konsistente Seitenrander to gewahrleisten.
5. **containers-Abmessungen customize** - Passen them at Bedarf the containers-variables on, um den Designanforderungen Ihres Projekts gerecht to become.
6. **containers for Abschnitte use** - use them containers, um verschiedene Seitenabschnitte visuell to disconnect and to organisieren.
7. **responsive Uberlegungen note** - note, how oneself containers on verschiedenen Bildschirmgrossen behavior, insbesondere at Ubergangen between Breakpoints.

## Browser-Kompatibilitat

the containers system ist with allen modernen Browsern kompatibel:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| containers-classes | all | all | all | all |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Logical Properties | 69+ | 41+ | 12.1+ | 79+ |

## Zusammenfassung

the containers system the Casoon UI Library bietet a flexible and leistungsstarke Base for konsistente layouts. through the Usage from Containern can them contents strukturieren, a konsistente maximale width festlegen and a einheitliches Erscheinungsbild over all Seiten hinweg gewahrleisten. containers bilden a wichtige Base for responsive designs and arbeiten nahtlos with anderen layout-Systemen how grid and flexbox zusammen. 
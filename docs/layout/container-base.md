---
title: Container Base System
category: Layout
---

# Container Base System

Das Casoon UI Library implementiert ein flexibles Container-System, das als Grundlage für konsistente Layouts und Inhaltsbreiten dient. Dieses Dokument beschreibt die Grundlagen, Eigenschaften und Anwendungsfälle des Container-Systems.

## Overview

Das Container-System basiert auf diesen Kernprinzipien:

1. **Konsistente Breiten** - Standardisierte Maximalbereiten für Inhalte
2. **Automatische Zentrierung** - Container zentrieren sich horizontal im verfügbaren Raum
3. **Responsive Anpassung** - Automatische Anpassung an verschiedene Bildschirmgrößen
4. **Flexibles Padding** - Konfigurierbarer Innenabstand für optimalen Content-Flow
5. **Standardisierte Größen** - Vordefinierte Größenklassen für unterschiedliche Anwendungsfälle

## Basic Container

Der grundlegende Container `.container` bietet eine zentrierte, breitenbegrenzte Box für Inhalte:

```html
<div class="container">
  <!-- Inhalt wird auf eine maximale Breite begrenzt und zentriert -->
  <p>Containerinhalt mit maximaler Breite</p>
</div>
```

Die Standard-Container-Implementierung enthält folgende CSS-Eigenschaften:

```css
.container {
  margin-inline: auto;     /* Horizontale Zentrierung */
  max-width: var(--container-lg);  /* Standard-Maximalbreite */
  padding-inline: var(--space-4);  /* Horizontaler Innenabstand */
  width: 100%;             /* Volle verfügbare Breite nutzen */
}
```

## Container Sizes

Das System bietet verschiedene Container-Größen für unterschiedliche Anwendungsfälle:

```html
<!-- Kleiner Container, ideal für schmale Inhalte -->
<div class="container container-sm">
  <p>Schmaler Container-Inhalt</p>
</div>

<!-- Mittlerer Container -->
<div class="container container-md">
  <p>Mittelbreiter Container-Inhalt</p>
</div>

<!-- Großer Container (Standard) -->
<div class="container container-lg">
  <p>Standard-Container-Inhalt</p>
</div>

<!-- Extra großer Container -->
<div class="container container-xl">
  <p>Breiter Container-Inhalt</p>
</div>

<!-- Extra extra großer Container -->
<div class="container container-2xl">
  <p>Sehr breiter Container-Inhalt</p>
</div>
```

Containergrößen und ihre Maximalbreiten:

| Klasse | Maximalbreite | Typische Anwendung |
|--------|---------------|-------------------|
| `.container-sm` | `var(--container-sm)` (640px) | Schmale Inhalte, Formulare, schmale Textspalten |
| `.container-md` | `var(--container-md)` (768px) | Mittlere Inhaltsbreite, Blogposts |
| `.container-lg` | `var(--container-lg)` (1024px) | Standard-Inhaltsbreite, Hauptlayouts |
| `.container-xl` | `var(--container-xl)` (1280px) | Breite Layouts, Dashboard |
| `.container-2xl` | `var(--container-2xl)` (1536px) | Sehr breite Layouts, komplexe Dashboards |

## Container Padding

Das Container-System bietet verschiedene Padding-Optionen für den Innenabstand:

```html
<!-- Container mit kleinerem Innenabstand -->
<div class="container container-padding-sm">
  <p>Container mit reduziertem Innenabstand</p>
</div>

<!-- Container mit Standard-Innenabstand -->
<div class="container container-padding-md">
  <p>Container mit Standard-Innenabstand</p>
</div>

<!-- Container mit größerem Innenabstand -->
<div class="container container-padding-lg">
  <p>Container mit erhöhtem Innenabstand</p>
</div>
```

Die verschiedenen Padding-Klassen setzen folgende Werte:

```css
.container-padding-sm { padding-inline: var(--space-2); } /* Kleinerer Innenabstand */
.container-padding-md { padding-inline: var(--space-4); } /* Standard-Innenabstand */
.container-padding-lg { padding-inline: var(--space-6); } /* Größerer Innenabstand */
```

## Fluid Container

In manchen Fällen benötigen Sie einen Container, der die volle verfügbare Breite nutzt, ohne eine Maximalbreite zu setzen. Dafür kann ein "Fluid Container" verwendet werden:

```html
<div class="container-fluid">
  <p>Dieser Container nutzt immer die volle Breite</p>
</div>
```

Implementierung:

```css
.container-fluid {
  width: 100%;
  padding-inline: var(--space-4);
}
```

## Integration mit Grid und Flexbox

Container arbeiten nahtlos mit dem Grid- und Flexbox-System zusammen:

```html
<!-- Container mit Grid-Layout -->
<div class="container">
  <div class="grid grid-cols-3 gap-4">
    <div>Spalte 1</div>
    <div>Spalte 2</div>
    <div>Spalte 3</div>
  </div>
</div>

<!-- Container mit Flexbox-Layout -->
<div class="container">
  <div class="flex justify-between">
    <div>Flexitem links</div>
    <div>Flexitem rechts</div>
  </div>
</div>
```

## Responsive Verhalten

Container passen sich automatisch an verschiedene Bildschirmgrößen an. Auf kleinen Bildschirmen nutzen sie die volle verfügbare Breite und werden erst ab bestimmten Breakpoints in ihrer Breite begrenzt.

Auf mobilen Geräten verhält sich jeder Container effektiv wie ein `container-fluid` und nimmt die volle Breite ein, wobei nur das definierte Padding als Abstand zu den Bildschirmrändern dient.

## Verschachtelte Container

Container können verschachtelt werden, obwohl dies in den meisten Fällen nicht notwendig ist:

```html
<div class="container container-lg">
  <h1>Hauptüberschrift</h1>
  
  <!-- Verschachtelter Container für engeren Inhaltsbereich -->
  <div class="container container-sm">
    <p>Dieser Text ist in einem schmalen Container innerhalb des Hauptcontainers.</p>
  </div>
</div>
```

**Hinweis:** Verschachtelte Container sollten sparsam verwendet werden, da sie zu unerwarteten Layouts führen können. In den meisten Fällen ist es besser, Grid oder Flexbox innerhalb eines einzelnen Containers zu verwenden.

## Container für semantische Inhaltsgruppen

Container können auch verwendet werden, um semantische Gruppen von Inhalten zu definieren:

```html
<header>
  <div class="container">
    <!-- Header-Inhalt -->
  </div>
</header>

<main>
  <section class="hero">
    <div class="container">
      <!-- Hero-Sektion-Inhalt -->
    </div>
  </section>
  
  <section class="features">
    <div class="container">
      <!-- Features-Sektion-Inhalt -->
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <!-- Footer-Inhalt -->
  </div>
</footer>
```

## Anpassung des Container-Systems

Das Container-System basiert auf CSS-Variablen, die leicht angepasst werden können:

```css
:root {
  /* Container-Größen anpassen */
  --container-sm: 540px;
  --container-md: 720px;
  --container-lg: 960px;
  --container-xl: 1140px;
  --container-2xl: 1400px;
  
  /* Container-Padding anpassen */
  --space-2: 0.5rem;  /* container-padding-sm */
  --space-4: 1rem;    /* container-padding-md */
  --space-6: 1.5rem;  /* container-padding-lg */
}
```

## Best Practices

1. **Container für konsistente Breiten verwenden** - Nutzen Sie Container, um eine einheitliche Inhaltsbreite auf Ihrer gesamten Website zu gewährleisten.
2. **Container-Varianten gezielt einsetzen** - Wählen Sie zwischen `.container`, `.container-fluid` und Größenvarianten je nach Anforderung des Layouts.
3. **Verschachtelte Container vermeiden** - Verschachteln Sie Container nur, wenn unbedingt nötig, um unerwartete Layout-Probleme zu vermeiden.
4. **Container mit Grid kombinieren** - Container eignen sich hervorragend als Wrapper für Grid-Layouts, um konsistente Seitenränder zu gewährleisten.
5. **Container-Abmessungen anpassen** - Passen Sie bei Bedarf die Container-Variablen an, um den Designanforderungen Ihres Projekts gerecht zu werden.
6. **Container für Abschnitte verwenden** - Nutzen Sie Container, um verschiedene Seitenabschnitte visuell zu trennen und zu organisieren.
7. **Responsive Überlegungen beachten** - Beachten Sie, wie sich Container auf verschiedenen Bildschirmgrößen verhalten, insbesondere bei Übergängen zwischen Breakpoints.

## Browser-Kompatibilität

Das Container-System ist mit allen modernen Browsern kompatibel:

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Container-Klassen | Alle | Alle | Alle | Alle |
| CSS-Variablen | 49+ | 31+ | 9.1+ | 15+ |
| Logical Properties | 69+ | 41+ | 12.1+ | 79+ |

## Zusammenfassung

Das Container-System der Casoon UI Library bietet eine flexible und leistungsstarke Grundlage für konsistente Layouts. Durch die Verwendung von Containern können Sie Inhalte strukturieren, eine konsistente maximale Breite festlegen und ein einheitliches Erscheinungsbild über alle Seiten hinweg gewährleisten. Container bilden eine wichtige Grundlage für responsive Designs und arbeiten nahtlos mit anderen Layout-Systemen wie Grid und Flexbox zusammen. 
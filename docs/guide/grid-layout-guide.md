---
title: Ausführlicher Grid-Layout Leitfaden
category: Guide
---

# Ausführlicher Grid-Layout Leitfaden

Dieser Leitfaden bietet umfassende Anleitungen zur Erstellung effektiver Grid-Layouts mit der Casoon UI Library. Er enthält praktische Beispiele, Best Practices und Lösungen für häufige Layoutmuster.

## Grundlegendes Verständnis des Grid-Systems

Das Grid-System der Casoon UI Library basiert auf CSS Grid und bietet flexible Möglichkeiten für komplexe Layouts. Es ist vollständig responsiv und folgt dem Mobile-First-Ansatz.

### Core-CSS importieren

Die gesamte Grid-Funktionalität ist in der core.css enthalten, die für Lightning CSS optimiert ist:

```css
@import '@casoon/ui-lib/core.css';
```

Dieser Import lädt alle grundlegenden Layout- und Grid-Features. Beachten Sie jedoch, dass Komponenten und Effekte separat importiert werden müssen:

```css
/* Core-System für Layout und Grid */
@import '@casoon/ui-lib/core.css';

/* Komponenten müssen einzeln importiert werden */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/components/card.css';

/* Effekte müssen ebenfalls einzeln importiert werden */
@import '@casoon/ui-lib/effects/hover.css';
@import '@casoon/ui-lib/effects/transitions.css';
```

Das CSS-Layer-System sorgt dafür, dass alle Importe in der korrekten Reihenfolge geladen werden.

### Vorteile des Layer-Systems für Grid-Layouts

Das CSS-Layer-System der Casoon UI Library ermöglicht eine präzise Steuerung der CSS-Spezifität und verhindert Konflikte zwischen verschiedenen Styling-Regeln. Die Grid-Komponenten profitieren von dieser Struktur, da sie:

- Leicht anpassbar sind, ohne die Grundfunktionalität zu gefährden
- Konsistente Abstände und Layoutmuster gewährleisten
- Nahtlos mit anderen Komponenten zusammenarbeiten
- Eine klare Hierarchie in der Styling-Kaskade haben

## Grundlegende Grid-Layouts

### Einfaches Grid mit gleichen Spalten

```html
<div class="grid grid-cols-3 gap-4">
  <div class="p-4 bg-light">Spalte 1</div>
  <div class="p-4 bg-light">Spalte 2</div>
  <div class="p-4 bg-light">Spalte 3</div>
</div>
```

Dieses Beispiel erzeugt ein dreispaltiges Grid mit gleichmäßigen Spaltenbreiten und einem Abstand von 1rem (16px) zwischen den Elementen.

### Responsives Grid mit Breakpoints

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="p-4 bg-light">Element 1</div>
    <div class="p-4 bg-light">Element 2</div>
    <div class="p-4 bg-light">Element 3</div>
    <div class="p-4 bg-light">Element 4</div>
  </div>
</div>
```

Dieses Beispiel zeigt ein Grid, das seine Spaltenanzahl basierend auf der Container-Größe anpasst:
- Standard (klein): 1 Spalte
- Ab 30rem (480px): 2 Spalten
- Ab 48rem (768px): 3 Spalten
- Ab 62rem (992px): 4 Spalten

## Fortgeschrittene Grid-Layouts

### Asymmetrisches Layout

```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8 p-4 bg-light">Hauptinhalt (8/12)</div>
  <div class="col-span-4 p-4 bg-light">Seitenleiste (4/12)</div>
</div>
```

Mit dem 12-Spalten-System können Sie problemlos asymmetrische Layouts erstellen. Im obigen Beispiel nimmt der Hauptinhalt 2/3 der verfügbaren Breite ein, während die Seitenleiste 1/3 einnimmt.

### Responsives asymmetrisches Layout

```html
<div class="container-query">
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-8 p-4 bg-light">
      Hauptinhalt (volle Breite auf mobil, 8/12 auf Tablet+)
    </div>
    <div class="col-span-12 md:col-span-4 p-4 bg-light">
      Seitenleiste (volle Breite auf mobil, 4/12 auf Tablet+)
    </div>
  </div>
</div>
```

Dieses Layout stapelt die Elemente auf mobilen Geräten (eine Spalte) und wechselt zu einem asymmetrischen Layout auf größeren Bildschirmen.

### Verschachteltes Grid

```html
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8 p-4 bg-light">
    <h2>Hauptinhalt</h2>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="p-4 bg-white">Unterinhalt 1</div>
      <div class="p-4 bg-white">Unterinhalt 2</div>
    </div>
  </div>
  <div class="col-span-4 p-4 bg-light">Seitenleiste</div>
</div>
```

Grids können verschachtelt werden, um komplexere Layouts zu erstellen. In diesem Beispiel hat der Hauptinhalt selbst ein zweispaltiges Grid.

## Praktische Layoutmuster

### Kartenraster (Card Grid)

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <!-- Karte 1 -->
    <div class="p-4 rounded-lg shadow-md bg-white">
      <img src="image1.jpg" alt="Bild 1" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold mb-2">Titel 1</h3>
      <p class="text-gray-600">Beschreibung für Karte 1...</p>
      <button class="mt-4 bg-primary text-white px-4 py-2 rounded-md">Details</button>
    </div>
    
    <!-- Weitere Karten im gleichen Format -->
    <div class="p-4 rounded-lg shadow-md bg-white">
      <img src="image2.jpg" alt="Bild 2" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold mb-2">Titel 2</h3>
      <p class="text-gray-600">Beschreibung für Karte 2...</p>
      <button class="mt-4 bg-primary text-white px-4 py-2 rounded-md">Details</button>
    </div>
    
    <!-- Weitere Karten hier -->
  </div>
</div>
```

Dieses Muster ist ideal für Produkt-Galerien, Blog-Beiträge oder andere Inhalte, die als Karten dargestellt werden sollen.

### Masonry-ähnliches Layout

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="p-4 bg-light" style="grid-row: span 2;">Großes Element</div>
    <div class="p-4 bg-light">Normales Element</div>
    <div class="p-4 bg-light">Normales Element</div>
    <div class="p-4 bg-light" style="grid-row: span 2;">Großes Element</div>
    <div class="p-4 bg-light">Normales Element</div>
    <div class="p-4 bg-light">Normales Element</div>
  </div>
</div>
```

Mit `grid-row: span X` können Sie ein Masonry-ähnliches Layout erstellen, bei dem einige Elemente mehr vertikalen Raum einnehmen als andere.

### Holy Grail Layout (Header, Footer, Sidebar, Content)

```html
<div class="grid grid-cols-12 grid-rows-[auto_1fr_auto] min-h-screen gap-4">
  <!-- Header -->
  <header class="col-span-12 p-4 bg-primary text-white">
    Header
  </header>
  
  <!-- Linke Seitenleiste -->
  <aside class="col-span-12 md:col-span-3 p-4 bg-light">
    Linke Seitenleiste
  </aside>
  
  <!-- Hauptinhalt -->
  <main class="col-span-12 md:col-span-6 p-4 bg-white">
    Hauptinhalt
  </main>
  
  <!-- Rechte Seitenleiste -->
  <aside class="col-span-12 md:col-span-3 p-4 bg-light">
    Rechte Seitenleiste
  </aside>
  
  <!-- Footer -->
  <footer class="col-span-12 p-4 bg-dark text-white">
    Footer
  </footer>
</div>
```

Dieses klassische "Holy Grail" Layout bietet einen Header, Footer, zwei Seitenleisten und einen Hauptinhalt. Auf mobilen Geräten stapeln sich alle Elemente, während auf größeren Bildschirmen die Seitenleisten neben dem Hauptinhalt angezeigt werden.

### Auto-Fit Grid für dynamische Inhalte

```html
<div class="container-query">
  <div class="grid grid-auto-fit gap-4">
    <div class="p-4 bg-light">Element 1</div>
    <div class="p-4 bg-light">Element 2</div>
    <div class="p-4 bg-light">Element 3</div>
    <div class="p-4 bg-light">Element 4</div>
    <div class="p-4 bg-light">Element 5</div>
    <div class="p-4 bg-light">Element 6</div>
  </div>
</div>
```

Die `grid-auto-fit` Klasse verwendet `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`, wodurch die Elemente automatisch in Zeilen umgebrochen werden, wenn der verfügbare Platz nicht ausreicht. Jedes Element hat eine Mindestbreite von 250px.

## Container + Grid Kombinationen

### Zentriertes Container-Grid

```html
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-4 bg-light">Spalte 1</div>
    <div class="p-4 bg-light">Spalte 2</div>
    <div class="p-4 bg-light">Spalte 3</div>
  </div>
</div>
```

Die Kombination von `container` und `mx-auto` erzeugt ein zentriertes Grid mit einer maximalen Breite.

### Container mit verschiedenen Größen

```html
<div class="container-sm mx-auto px-4">
  <h2 class="text-xl mb-4">Schmaler Container (max 640px)</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-light">Spalte 1</div>
    <div class="p-4 bg-light">Spalte 2</div>
  </div>
</div>

<div class="container-lg mx-auto px-4 mt-8">
  <h2 class="text-xl mb-4">Breiter Container (max 1200px)</h2>
  <div class="grid grid-cols-4 gap-4">
    <div class="p-4 bg-light">Spalte 1</div>
    <div class="p-4 bg-light">Spalte 2</div>
    <div class="p-4 bg-light">Spalte 3</div>
    <div class="p-4 bg-light">Spalte 4</div>
  </div>
</div>
```

Verwenden Sie verschiedene Container-Größen für unterschiedliche Inhaltsabschnitte.

## Abstände und Ausrichtung im Grid

### Verschiedene Abstände

```html
<h3 class="mb-2">Kleiner Abstand (gap-2)</h3>
<div class="grid grid-cols-3 gap-2 mb-6">
  <div class="p-2 bg-light">1</div>
  <div class="p-2 bg-light">2</div>
  <div class="p-2 bg-light">3</div>
</div>

<h3 class="mb-2">Mittlerer Abstand (gap-4)</h3>
<div class="grid grid-cols-3 gap-4 mb-6">
  <div class="p-2 bg-light">1</div>
  <div class="p-2 bg-light">2</div>
  <div class="p-2 bg-light">3</div>
</div>

<h3 class="mb-2">Großer Abstand (gap-8)</h3>
<div class="grid grid-cols-3 gap-8">
  <div class="p-2 bg-light">1</div>
  <div class="p-2 bg-light">2</div>
  <div class="p-2 bg-light">3</div>
</div>
```

Experimentieren Sie mit verschiedenen Gap-Größen, um die beste visuelle Balance zu finden.

### Unterschiedliche horizontale und vertikale Abstände

```html
<div class="grid grid-cols-3 gap-x-4 gap-y-8">
  <div class="p-4 bg-light">1</div>
  <div class="p-4 bg-light">2</div>
  <div class="p-4 bg-light">3</div>
  <div class="p-4 bg-light">4</div>
  <div class="p-4 bg-light">5</div>
  <div class="p-4 bg-light">6</div>
</div>
```

Mit `gap-x-*` und `gap-y-*` können Sie unterschiedliche Abstände horizontal und vertikal definieren.

### Ausrichtung von Grid-Elementen

```html
<div class="grid grid-cols-3 gap-4 justify-items-center">
  <div class="p-4 bg-light w-3/4">Zentriert (justify-items-center)</div>
  <div class="p-4 bg-light w-3/4">Zentriert</div>
  <div class="p-4 bg-light w-3/4">Zentriert</div>
</div>

<div class="grid grid-cols-3 gap-4 justify-items-end mt-6">
  <div class="p-4 bg-light w-3/4">Rechts (justify-items-end)</div>
  <div class="p-4 bg-light w-3/4">Rechts</div>
  <div class="p-4 bg-light w-3/4">Rechts</div>
</div>
```

Mit den Ausrichtungsklassen können Sie die Position der Grid-Elemente innerhalb ihrer Zellen steuern.

## Praktische Anwendungsfälle

### Blog-Layout

```html
<div class="container mx-auto px-4">
  <header class="mb-8">
    <h1 class="text-3xl font-bold">Mein Blog</h1>
  </header>
  
  <div class="grid grid-cols-12 gap-8">
    <!-- Hauptinhalt -->
    <main class="col-span-12 lg:col-span-8">
      <!-- Featured Post -->
      <article class="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Featured Post Titel</h2>
        <p class="text-gray-600 mb-4">Veröffentlicht am 01.01.2023</p>
        <img src="featured.jpg" alt="Featured" class="w-full h-64 object-cover rounded-md mb-4">
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" class="text-primary">Weiterlesen →</a>
      </article>
      
      <!-- Reguläre Posts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Post 1 -->
        <article class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-2">Post Titel 1</h3>
          <p class="text-gray-600 mb-4">Veröffentlicht am 02.01.2023</p>
          <img src="post1.jpg" alt="Post 1" class="w-full h-48 object-cover rounded-md mb-4">
          <p class="mb-4">Kurze Beschreibung des Posts...</p>
          <a href="#" class="text-primary">Weiterlesen →</a>
        </article>
        
        <!-- Post 2 -->
        <article class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-2">Post Titel 2</h3>
          <p class="text-gray-600 mb-4">Veröffentlicht am 03.01.2023</p>
          <img src="post2.jpg" alt="Post 2" class="w-full h-48 object-cover rounded-md mb-4">
          <p class="mb-4">Kurze Beschreibung des Posts...</p>
          <a href="#" class="text-primary">Weiterlesen →</a>
        </article>
      </div>
    </main>
    
    <!-- Seitenleiste -->
    <aside class="col-span-12 lg:col-span-4">
      <!-- Über mich -->
      <div class="p-6 bg-white rounded-lg shadow-md mb-8">
        <h3 class="text-xl font-bold mb-4">Über mich</h3>
        <img src="profile.jpg" alt="Profilbild" class="w-24 h-24 rounded-full mx-auto mb-4">
        <p>Kurze Beschreibung über den Autor...</p>
      </div>
      
      <!-- Kategorien -->
      <div class="p-6 bg-white rounded-lg shadow-md mb-8">
        <h3 class="text-xl font-bold mb-4">Kategorien</h3>
        <ul>
          <li class="mb-2"><a href="#" class="text-primary">Technologie</a></li>
          <li class="mb-2"><a href="#" class="text-primary">Reisen</a></li>
          <li class="mb-2"><a href="#" class="text-primary">Kochen</a></li>
          <li><a href="#" class="text-primary">Lifestyle</a></li>
        </ul>
      </div>
      
      <!-- Newsletter -->
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-xl font-bold mb-4">Newsletter</h3>
        <p class="mb-4">Abonnieren Sie meinen Newsletter für Updates.</p>
        <form>
          <input type="email" placeholder="Ihre E-Mail-Adresse" class="w-full p-2 mb-2 border rounded">
          <button type="submit" class="w-full bg-primary text-white p-2 rounded">Abonnieren</button>
        </form>
      </div>
    </aside>
  </div>
</div>
```

Dieses komplexe Blog-Layout demonstriert die Kombination verschiedener Grid-Techniken für ein ansprechendes Design.

### E-Commerce Produktraster

```html
<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold mb-8">Unsere Produkte</h1>
  
  <!-- Filter- und Sortierleiste -->
  <div class="flex flex-wrap items-center justify-between mb-6 p-4 bg-light rounded-lg">
    <div class="flex items-center gap-4 mb-4 md:mb-0">
      <span>Filter:</span>
      <select class="p-2 border rounded">
        <option>Alle Kategorien</option>
        <option>Kategorie 1</option>
        <option>Kategorie 2</option>
      </select>
    </div>
    
    <div class="flex items-center gap-4">
      <span>Sortieren nach:</span>
      <select class="p-2 border rounded">
        <option>Beliebtheit</option>
        <option>Preis: Niedrig zu Hoch</option>
        <option>Preis: Hoch zu Niedrig</option>
      </select>
    </div>
  </div>
  
  <!-- Produktraster -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <!-- Produkt 1 -->
    <div class="p-4 bg-white rounded-lg shadow-md">
      <div class="relative mb-4">
        <span class="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">Neu</span>
        <img src="product1.jpg" alt="Produkt 1" class="w-full h-48 object-cover rounded-md">
      </div>
      <h3 class="text-lg font-semibold mb-2">Produkt 1</h3>
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold">€99,99</span>
        <div class="flex">
          <span class="text-yellow-500">★★★★</span><span class="text-gray-300">★</span>
        </div>
      </div>
      <button class="w-full bg-primary text-white p-2 rounded">In den Warenkorb</button>
    </div>
    
    <!-- Weitere Produkte im gleichen Format -->
    <!-- Produkt 2-8 (gleiche Struktur) -->
  </div>
  
  <!-- Paginierung -->
  <div class="flex justify-center mt-8">
    <nav class="flex gap-2">
      <a href="#" class="p-2 border rounded">Zurück</a>
      <a href="#" class="p-2 border rounded bg-primary text-white">1</a>
      <a href="#" class="p-2 border rounded">2</a>
      <a href="#" class="p-2 border rounded">3</a>
      <a href="#" class="p-2 border rounded">Weiter</a>
    </nav>
  </div>
</div>
```

Dieses E-Commerce-Layout zeigt ein responsives Produktraster mit Filtern und Paginierung.

## Best Practices für Grid-Layouts

1. **Mobile-First-Ansatz**: Beginnen Sie mit dem Layout für kleine Bildschirme und erweitern Sie es dann für größere Bildschirme. Diese Strategie sorgt für bessere Performance auf mobilen Geräten und vereinfacht die progressive Enhancement des Layouts. Beispiel:
   ```html
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     <!-- Elemente starten als einspaltiges Layout und erweitern sich stufenweise -->
   </div>
   ```

2. **Konsistente Abstände**: Verwenden Sie das Spacing-System mit den vordefinierten gap-* Klassen für konsistente Abstände.

3. **Container-Queries nutzen**: Bevorzugen Sie Container-Queries für responsive Layouts, die auf die Container-Größe reagieren statt auf die Viewport-Größe.

4. **12-Spalten-System für komplexe Layouts**: Das 12-Spalten-System bietet mehr Flexibilität für komplexe Layouts als einfache 2-, 3- oder 4-spaltige Raster.

5. **Vermeiden Sie zu viele verschachtelte Grids**: Zu viele verschachtelte Grids können die Performance beeinträchtigen und die Wartbarkeit erschweren.

6. **Semantisches HTML verwenden**: Nutzen Sie semantische HTML-Elemente wie `<header>`, `<main>`, `<aside>` und `<footer>` in Ihren Grid-Layouts.

7. **Grid mit Flexbox kombinieren**: Verwenden Sie Grid für das übergeordnete Layout und Flexbox für die Ausrichtung innerhalb der einzelnen Grid-Zellen.

8. **Grid-Bereiche für komplexe Layouts**: Für sehr komplexe Layouts können Grid-Bereiche mit `grid-template-areas` hilfreicher sein als `col-span` und `row-span`.

9. **Achten Sie auf Browser-Kompatibilität**: CSS Grid wird von allen modernen Browsern unterstützt, kann aber in älteren Browsern Probleme verursachen.

10. **Performance-Optimierung**: Vermeiden Sie zu viele dynamische Änderungen am Grid-Layout, da dies die Performance beeinträchtigen kann. 

## Integration des Spacing-Systems mit Container-Queries

Die Kombination aus Container-Queries und dem Spacing-System der Casoon UI Library ermöglicht hochgradig anpassungsfähige Layouts, die auf intelligente Weise auf verfügbaren Platz reagieren:

```html
<div class="container-query">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
    <!-- Die Abstände zwischen den Grid-Elementen wachsen mit der Container-Größe -->
    <div class="p-2 sm:p-4 bg-light">
      <!-- Auch Innenabstände können responsiv angepasst werden -->
      <h3 class="mb-1 sm:mb-2">Überschrift</h3>
      <p>Inhalt, der mehr Platz bekommt, wenn der Container wächst</p>
    </div>
    <div class="p-2 sm:p-4 bg-light">
      <h3 class="mb-1 sm:mb-2">Überschrift</h3>
      <p>Inhalt, der mehr Platz bekommt, wenn der Container wächst</p>
    </div>
  </div>
</div>
```

Dieses Beispiel zeigt, wie sowohl Grid-Abstände (gaps) als auch Innenabstände (padding) und Außenabstände (margin) basierend auf der Container-Größe skaliert werden können. Diese Technik ist besonders nützlich für wiederverwendbare Komponenten, die in verschiedenen Layout-Kontexten funktionieren müssen. 
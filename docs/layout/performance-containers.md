---
title: Performance Containers
category: Layout
---

# Performance Containers

Die Casoon UI Library bietet spezielle Performance-Container, die auf Leistungsoptimierung ausgerichtet sind. Diese Dokumentation erklärt, wie Sie diese speziellen Container verwenden können, um die Rendering-Leistung und Ladezeiten Ihrer Anwendung zu verbessern.

## Overview

Performance-Container optimieren die Anwendungsleistung durch folgende Mechanismen:

1. **Virtualisierung** - Effizientes Rendering großer Datensätze
2. **Lazy Loading** - Verzögertes Laden von Inhalten
3. **Lazy Rendering** - Verzögertes Rendern von Komponenten
4. **Content-Slicing** - Aufteilung großer Inhaltsblöcke
5. **Optimized Media** - Optimierte Darstellung von Medieninhalten

## Virtualized Container

Container für die effiziente Darstellung langer Listen oder Tabellen:

```html
<div class="virtualized-container" data-height="500" data-item-height="50">
  <!-- Platzhalter für virtualisierte Elemente -->
  <template id="item-template">
    <div class="list-item">
      <h3>Element-Titel</h3>
      <p>Element-Beschreibung</p>
    </div>
  </template>
</div>
```

Implementierung:

```css
.virtualized-container {
  position: relative;
  overflow: auto;
  width: 100%;
}

.virtualized-content {
  position: relative;
}

.list-item {
  padding: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
```

JavaScript für die Funktionalität:

```javascript
class VirtualizedContainer {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      itemHeight: options.itemHeight || parseInt(container.dataset.itemHeight) || 50,
      bufferSize: options.bufferSize || 5,
      data: options.data || []
    };
    
    this.visibleItems = [];
    this.totalHeight = this.options.data.length * this.options.itemHeight;
    this.template = document.getElementById(container.dataset.template || 'item-template');
    
    this.initContainer();
    this.bindEvents();
    this.render();
  }
  
  initContainer() {
    // Virtualisierte Content-Wrapper erstellen
    this.contentWrapper = document.createElement('div');
    this.contentWrapper.className = 'virtualized-content';
    this.contentWrapper.style.height = `${this.totalHeight}px`;
    this.container.appendChild(this.contentWrapper);
  }
  
  bindEvents() {
    this.container.addEventListener('scroll', () => {
      requestAnimationFrame(() => this.render());
    });
    
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => this.render());
    });
  }
  
  render() {
    const scrollTop = this.container.scrollTop;
    const containerHeight = this.container.clientHeight;
    
    // Berechnen, welche Items sichtbar sind
    const startIndex = Math.max(0, Math.floor(scrollTop / this.options.itemHeight) - this.options.bufferSize);
    const endIndex = Math.min(
      this.options.data.length - 1,
      Math.ceil((scrollTop + containerHeight) / this.options.itemHeight) + this.options.bufferSize
    );
    
    // Aktuell sichtbare Items erstellen/aktualisieren
    const itemsToRender = [];
    for (let i = startIndex; i <= endIndex; i++) {
      itemsToRender.push({
        index: i,
        data: this.options.data[i],
        top: i * this.options.itemHeight
      });
    }
    
    // DOM-Aktualisierung
    this.updateDOM(itemsToRender);
  }
  
  updateDOM(itemsToRender) {
    // Aktuelle Items entfernen, die nicht mehr sichtbar sind
    const currentItems = Array.from(this.contentWrapper.children);
    const newIndexes = itemsToRender.map(item => item.index);
    
    currentItems.forEach(item => {
      const index = parseInt(item.dataset.index);
      if (!newIndexes.includes(index)) {
        item.remove();
      }
    });
    
    // Neue Items hinzufügen, die jetzt sichtbar sind
    itemsToRender.forEach(item => {
      if (!this.contentWrapper.querySelector(`[data-index="${item.index}"]`)) {
        const element = this.createItemElement(item);
        this.contentWrapper.appendChild(element);
      }
    });
  }
  
  createItemElement(item) {
    const element = document.importNode(this.template.content, true).firstElementChild;
    element.dataset.index = item.index;
    element.style.position = 'absolute';
    element.style.top = `${item.top}px`;
    element.style.width = '100%';
    element.style.height = `${this.options.itemHeight}px`;
    
    // Daten in das Template einfügen
    this.populateTemplate(element, item.data);
    
    return element;
  }
  
  populateTemplate(element, data) {
    // Implementierung je nach Datenstruktur
    // Beispiel:
    const title = element.querySelector('h3');
    const description = element.querySelector('p');
    
    if (title) title.textContent = data.title || '';
    if (description) description.textContent = data.description || '';
  }
  
  updateData(newData) {
    this.options.data = newData;
    this.totalHeight = this.options.data.length * this.options.itemHeight;
    this.contentWrapper.style.height = `${this.totalHeight}px`;
    this.contentWrapper.innerHTML = '';
    this.render();
  }
}

// Initialisierung
document.querySelectorAll('.virtualized-container').forEach(container => {
  new VirtualizedContainer(container);
});
```

## Lazy Load Container

Container für verzögertes Laden von Inhalten beim Scrollen:

```html
<div class="lazy-load-container">
  <img class="lazy-image" data-src="large-image.jpg" src="placeholder.jpg" alt="Lazy-loaded image">
  <div class="lazy-content" data-src="/api/content">
    <div class="skeleton-content">
      <!-- Skeleton-Platzhalter während des Ladens -->
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  </div>
</div>
```

Implementierung:

```css
.lazy-load-container {
  width: 100%;
}

.lazy-image {
  width: 100%;
  height: auto;
  transition: opacity 0.3s;
}

.lazy-image:not(.loaded) {
  filter: blur(5px);
}

.skeleton-content {
  padding: var(--space-4);
}

.skeleton-line {
  height: 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--color-skeleton);
  border-radius: var(--radius-sm);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

JavaScript für die Funktionalität:

```javascript
// Intersection Observer für Lazy Loading
const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      
      if (element.classList.contains('lazy-image')) {
        // Lazy Image Loading
        const src = element.dataset.src;
        if (src) {
          const img = new Image();
          img.onload = () => {
            element.src = src;
            element.classList.add('loaded');
          };
          img.src = src;
        }
      }
      
      if (element.classList.contains('lazy-content')) {
        // Lazy Content Loading
        const contentUrl = element.dataset.src;
        if (contentUrl) {
          fetch(contentUrl)
            .then(response => response.text())
            .then(html => {
              element.innerHTML = html;
              element.classList.add('loaded');
            })
            .catch(error => {
              console.error('Fehler beim Laden des Inhalts:', error);
            });
        }
      }
      
      // Element nicht mehr beobachten, nachdem es geladen wurde
      observer.unobserve(element);
    }
  });
}, {
  rootMargin: '100px 0px' // 100px Buffer vor dem Element wird sichtbar
});

// Alle Lazy-Load-Elemente beobachten
document.querySelectorAll('.lazy-image, .lazy-content').forEach(element => {
  lazyLoadObserver.observe(element);
});
```

## Deferred Render Container

Container für das verzögerte Rendern von nicht-kritischen UI-Elementen:

```html
<div class="deferred-render-container" data-priority="low" data-render-delay="1000">
  <template>
    <!-- Komplexe UI-Komponente, die verzögert gerendert werden soll -->
    <div class="complex-component">
      <h3>Komplexe Komponente</h3>
      <div class="chart"><!-- Komplexes Chart --></div>
      <div class="data-table"><!-- Komplexe Tabelle --></div>
    </div>
  </template>
  <div class="placeholder">
    <!-- Platzhalter während des verzögerten Renderings -->
    <p>Lade Komponente...</p>
  </div>
</div>
```

Implementierung:

```css
.deferred-render-container {
  width: 100%;
}

.placeholder {
  padding: var(--space-4);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
  text-align: center;
}
```

JavaScript für die Funktionalität:

```javascript
// Verzögertes Rendering von Komponenten
function initDeferredRendering() {
  const containers = document.querySelectorAll('.deferred-render-container');
  
  // Nach Priorität sortieren (high -> medium -> low)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sortedContainers = Array.from(containers).sort((a, b) => {
    const priorityA = priorityOrder[a.dataset.priority || 'medium'] || 1;
    const priorityB = priorityOrder[b.dataset.priority || 'medium'] || 1;
    return priorityA - priorityB;
  });
  
  // Gestaffelte Renderzeiten basierend auf Priorität
  let renderQueue = Promise.resolve();
  
  sortedContainers.forEach(container => {
    const template = container.querySelector('template');
    const placeholder = container.querySelector('.placeholder');
    const delay = parseInt(container.dataset.renderDelay) || 0;
    
    if (!template || !placeholder) return;
    
    renderQueue = renderQueue.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          // Template rendern
          const content = document.importNode(template.content, true);
          placeholder.replaceWith(content);
          
          // Event auslösen, dass Komponente gerendert wurde
          container.dispatchEvent(new CustomEvent('componentRendered'));
          
          // Kurze Pause zwischen Rendervorgängen
          setTimeout(resolve, 16); // ~1 Frame bei 60fps
        }, delay);
      });
    });
  });
}

// Verzögertes Rendering starten, nachdem die Seite geladen ist
window.addEventListener('load', () => {
  // Kritische Inhalte zuerst rendern lassen
  setTimeout(initDeferredRendering, 200);
});
```

## Chunk Container

Container für die Aufteilung großer Inhaltslisten in kleinere Chunks:

```html
<div class="chunk-container" data-chunk-size="10" data-total-items="100">
  <div class="chunk-content">
    <!-- Hier werden die ersten Chunks gerendert -->
  </div>
  <button class="chunk-load-more">Mehr laden</button>
</div>
```

Implementierung:

```css
.chunk-container {
  width: 100%;
}

.chunk-content {
  display: grid;
  gap: var(--space-4);
}

.chunk-load-more {
  display: block;
  margin: var(--space-6) auto;
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-primary-50);
  color: var(--color-primary-700);
  border: 1px solid var(--color-primary-200);
  border-radius: var(--radius-md);
  cursor: pointer;
}
```

JavaScript für die Funktionalität:

```javascript
class ChunkContainer {
  constructor(container) {
    this.container = container;
    this.chunkSize = parseInt(container.dataset.chunkSize) || 10;
    this.totalItems = parseInt(container.dataset.totalItems) || 100;
    this.currentChunk = 0;
    this.contentContainer = container.querySelector('.chunk-content');
    this.loadMoreButton = container.querySelector('.chunk-load-more');
    
    this.initEvents();
    this.loadNextChunk(); // Ersten Chunk automatisch laden
  }
  
  initEvents() {
    if (this.loadMoreButton) {
      this.loadMoreButton.addEventListener('click', () => {
        this.loadNextChunk();
      });
    }
  }
  
  loadNextChunk() {
    const startIndex = this.currentChunk * this.chunkSize;
    const endIndex = Math.min(startIndex + this.chunkSize, this.totalItems);
    
    if (startIndex >= this.totalItems) {
      // Alle Items wurden geladen
      if (this.loadMoreButton) {
        this.loadMoreButton.disabled = true;
        this.loadMoreButton.textContent = 'Alle Inhalte geladen';
      }
      return;
    }
    
    // Hier würde normalerweise ein API-Aufruf stattfinden
    // In diesem Beispiel generieren wir Dummy-Inhalte
    this.fetchChunkData(startIndex, endIndex).then(items => {
      this.renderChunk(items);
      this.currentChunk++;
      
      // Prüfen, ob wir das Ende erreicht haben
      if (endIndex >= this.totalItems && this.loadMoreButton) {
        this.loadMoreButton.disabled = true;
        this.loadMoreButton.textContent = 'Alle Inhalte geladen';
      }
    });
  }
  
  fetchChunkData(startIndex, endIndex) {
    // Simulation eines API-Aufrufs
    return new Promise(resolve => {
      setTimeout(() => {
        const items = [];
        for (let i = startIndex; i < endIndex; i++) {
          items.push({
            id: i,
            title: `Item ${i + 1}`,
            description: `Beschreibung für Item ${i + 1}`
          });
        }
        resolve(items);
      }, 500); // Simulierte Netzwerklatenz
    });
  }
  
  renderChunk(items) {
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'chunk-item';
      itemElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      this.contentContainer.appendChild(itemElement);
    });
  }
}

// Initialisierung
document.querySelectorAll('.chunk-container').forEach(container => {
  new ChunkContainer(container);
});
```

## Media Optimization Container

Container für die optimierte Darstellung von Bildern und Videos:

```html
<div class="media-optimization-container">
  <!-- Responsive Bilder mit verschiedenen Auflösungen -->
  <picture class="optimized-image">
    <source srcset="image-large.webp" media="(min-width: 1200px)" type="image/webp">
    <source srcset="image-large.jpg" media="(min-width: 1200px)">
    <source srcset="image-medium.webp" media="(min-width: 768px)" type="image/webp">
    <source srcset="image-medium.jpg" media="(min-width: 768px)">
    <source srcset="image-small.webp" type="image/webp">
    <img src="image-small.jpg" alt="Optimiertes Bild" loading="lazy">
  </picture>
  
  <!-- Video mit Lazy Loading -->
  <div class="optimized-video" data-src="video.mp4" data-poster="poster.jpg">
    <!-- Platzhalter bis zum Laden -->
    <div class="video-placeholder">
      <img src="poster.jpg" alt="Video-Vorschau">
      <button class="video-play-button">▶️</button>
    </div>
  </div>
</div>
```

Implementierung:

```css
.media-optimization-container {
  width: 100%;
}

.optimized-image {
  display: block;
  width: 100%;
}

.optimized-image img {
  width: 100%;
  height: auto;
  display: block;
}

.optimized-video {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000;
}

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.video-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-play-button {
  position: absolute;
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.video-play-button:hover {
  opacity: 1;
}
```

JavaScript für die Funktionalität:

```javascript
// Optimierte Video-Behandlung
document.querySelectorAll('.optimized-video').forEach(container => {
  const placeholder = container.querySelector('.video-placeholder');
  const videoSrc = container.dataset.src;
  const posterSrc = container.dataset.poster;
  
  if (!placeholder || !videoSrc) return;
  
  // Nur beim Klicken laden
  placeholder.addEventListener('click', () => {
    // Video-Element erstellen
    const video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    if (posterSrc) video.poster = posterSrc;
    
    // Quellen hinzufügen
    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = videoSrc.endsWith('.mp4') ? 'video/mp4' : 'video/webm';
    video.appendChild(source);
    
    // Platzhalter ersetzen
    placeholder.replaceWith(video);
    
    // Videostatistik für Analysen
    video.addEventListener('play', () => {
      console.log('Video playback started');
    });
    
    video.addEventListener('ended', () => {
      console.log('Video playback completed');
    });
  });
});

// Bildoptimierung - Intersection Observer für verzögertes Laden
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target.querySelector('img');
      if (img && img.loading === 'lazy') {
        // High-Quality-Vorschau aktivieren
        img.setAttribute('fetchpriority', 'high');
      }
      imageObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '200px 0px' });

document.querySelectorAll('.optimized-image').forEach(image => {
  imageObserver.observe(image);
});
```

## Best Practices

1. **Messbare Leistungsziele setzen** - Definieren Sie klare Leistungsziele für Ihre Anwendung, wie z.B. First Contentful Paint unter 1,5 Sekunden.
2. **Virtualisierung für große Listen verwenden** - Verwenden Sie Virtualisierung, wenn Listen mehr als 50-100 Elemente enthalten.
3. **Progressive Loading implementieren** - Laden Sie zuerst den wichtigsten Inhalt und verzögern Sie nicht-kritische Elemente.
4. **Bildoptimierung priorisieren** - Verwenden Sie moderne Bildformate (WebP), responsive Bilder und Lazy Loading.
5. **DOM-Größe begrenzen** - Halten Sie die Anzahl der DOM-Elemente unter 1500, um die Renderleistung zu optimieren.
6. **JavaScript sparsam einsetzen** - Vermeiden Sie unnötige JavaScript-Berechnungen während des Scrollens.
7. **Netzwerkanfragen minimieren** - Bündeln Sie Inhaltsanfragen und vermeiden Sie zu viele einzelne API-Aufrufe.
8. **Rendering-Prioritäten setzen** - Priorisieren Sie das Rendering basierend auf der Sichtbarkeit und Wichtigkeit der Komponenten.

## Leistungsmessung

### Leistungsmetriken

Wichtige Metriken zur Überwachung:

- **Time to First Byte (TTFB)** - Zeit bis zum ersten Byte der Antwort
- **First Contentful Paint (FCP)** - Zeit bis zur ersten Inhaltsanzeige
- **Largest Contentful Paint (LCP)** - Zeit bis zur Anzeige des größten Inhaltselements
- **First Input Delay (FID)** - Verzögerung bei der ersten Benutzereingabe
- **Cumulative Layout Shift (CLS)** - Maß für visuelle Stabilität

### Leistungsmessung in der Praxis

```javascript
// Performance-Messung mit der Performance API
function measurePerformance() {
  // Navigationstiming-Metriken
  const navTiming = performance.getEntriesByType('navigation')[0];
  const pageLoadTime = navTiming.loadEventEnd - navTiming.startTime;
  
  // Rendering-Metriken
  const paintMetrics = performance.getEntriesByType('paint');
  const fcp = paintMetrics.find(entry => entry.name === 'first-contentful-paint')?.startTime;
  
  // Benutzerdefinierte Marken und Messungen
  performance.mark('component-rendered');
  
  // Leistungsdaten an Analysesystem senden
  sendPerformanceData({
    pageLoadTime,
    firstContentfulPaint: fcp,
    // Weitere Metriken...
  });
}

// Benutzerdefinierte Leistungsmessung für Container
function measureContainerPerformance(containerId) {
  performance.mark(`${containerId}-start`);
  
  // Nach Abschluss der Aktion
  setTimeout(() => {
    performance.mark(`${containerId}-end`);
    performance.measure(
      `${containerId}-duration`,
      `${containerId}-start`,
      `${containerId}-end`
    );
    
    const measure = performance.getEntriesByName(`${containerId}-duration`)[0];
    console.log(`${containerId} Renderzeit: ${measure.duration.toFixed(2)}ms`);
  }, 0);
}
```

## Anwendungsfälle

### Produkt-Listenansicht mit Virtualisierung

```html
<div class="container">
  <h1>Produkte</h1>
  
  <div class="virtualized-container" data-height="600" data-item-height="100" data-template="product-template">
    <!-- Virtualisierte Produktliste -->
  </div>
  
  <template id="product-template">
    <div class="product-card">
      <img src="placeholder.jpg" alt="Produkt">
      <div class="product-info">
        <h3>Produktname</h3>
        <p>Produktbeschreibung</p>
        <span class="price">€99.99</span>
      </div>
    </div>
  </template>
</div>

<script>
  // Produktdaten laden
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      const container = document.querySelector('.virtualized-container');
      new VirtualizedContainer(container, {
        data: products,
        itemHeight: 100
      });
    });
</script>
```

### Dashboard mit verzögertem Rendering

```html
<div class="dashboard-container">
  <!-- Kritische Informationen sofort rendern -->
  <div class="dashboard-header">
    <h1>Dashboard</h1>
    <div class="user-info">
      <span>Willkommen, Max</span>
    </div>
  </div>
  
  <!-- Wichtige Statistiken mit hoher Priorität -->
  <div class="deferred-render-container" data-priority="high" data-render-delay="0">
    <template>
      <div class="stats-overview">
        <!-- Wichtige Statistiken -->
      </div>
    </template>
    <div class="placeholder">Lade Statistiken...</div>
  </div>
  
  <!-- Weniger wichtige Diagramme mit mittlerer Priorität -->
  <div class="deferred-render-container" data-priority="medium" data-render-delay="500">
    <template>
      <div class="charts-container">
        <!-- Komplexe Diagramme -->
      </div>
    </template>
    <div class="placeholder">Lade Diagramme...</div>
  </div>
  
  <!-- Aktivitätshistorie mit niedriger Priorität -->
  <div class="deferred-render-container" data-priority="low" data-render-delay="1000">
    <template>
      <div class="activity-history">
        <!-- Aktivitätshistorie -->
      </div>
    </template>
    <div class="placeholder">Lade Aktivitätshistorie...</div>
  </div>
</div>
```

### Medienintensive Seite mit optimierten Bildern

```html
<div class="media-gallery">
  <h2>Unsere Projekte</h2>
  
  <div class="media-optimization-container">
    <div class="gallery-grid">
      <!-- Optimierte Bilder -->
      <picture class="optimized-image">
        <source srcset="project1-large.webp" media="(min-width: 1200px)" type="image/webp">
        <source srcset="project1-large.jpg" media="(min-width: 1200px)">
        <source srcset="project1-medium.webp" media="(min-width: 768px)" type="image/webp">
        <source srcset="project1-medium.jpg" media="(min-width: 768px)">
        <source srcset="project1-small.webp" type="image/webp">
        <img src="project1-small.jpg" alt="Projekt 1" loading="lazy">
      </picture>
      
      <!-- Weitere optimierte Bilder... -->
    </div>
  </div>
</div>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Intersection Observer | 51+ | 55+ | 12.1+ | 15+ |
| Virtual DOM Techniken | Alle | Alle | Alle | Alle |
| requestAnimationFrame | 24+ | 23+ | 6.1+ | 12+ |
| Picture Element | 38+ | 38+ | 9.1+ | 17+ |
| Performance API | 43+ | 41+ | 11+ | 12+ |

Für ältere Browser bietet die Bibliothek Fallbacks an, die grundlegende Funktionalität gewährleisten.

## Zusammenfassung

Performance-Container der Casoon UI Library bieten leistungsstarke Lösungen zur Optimierung der Renderleistung und Ladezeiten Ihrer Anwendung. Durch Techniken wie Virtualisierung, verzögertes Laden, gestaffeltes Rendering und Inhalts-Chunking können Sie auch bei komplexen Anwendungen mit großen Datenmengen eine flüssige Benutzererfahrung gewährleisten. Diese Container sind besonders nützlich für datenintensive Anwendungen, Dashboards, E-Commerce-Websites und medienreiche Anwendungen. 
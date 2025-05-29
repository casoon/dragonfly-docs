---
title: Performance Containers
category: layout
---

# Performance Containers

The Casoon UI Library offers special performance containers that are designed for performance optimization. This documentation explains how you can use these special containers to improve the rendering performance and load times of your application.

## Overview

Performance containers optimize application performance through the following mechanisms:

1. **Virtualization** - Efficient rendering of large datasets
2. **Lazy Loading** - Delayed loading of content
3. **Lazy Rendering** - Delayed rendering of components
4. **Content-Slicing** - Dividing large content blocks
5. **Optimized Media** - Optimized display of media content

## Virtualized containers

containers for efficient display of long lists or tables:

```html
<div class="virtualized-containers" data-height="500" data-item-height="50">
  <!-- Placeholder for virtualized elements -->
  <template id="item-template">
    <div class="list-item">
      <h3>element-Title</h3>
      <p>element-Description</p>
    </div>
  </template>
</div>
```

Implementation:

```css
.virtualized-containers {
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

JavaScript for functionality:

```javascript
class VirtualizedContainer {
  constructor(containers, options = {}) {
    this.containers = containers;
    this.options = {
      itemHeight: options.itemHeight || parseInt(containers.dataset.itemHeight) || 50,
      bufferSize: options.bufferSize || 5,
      data: options.data || []
    };
    
    this.visibleItems = [];
    this.totalHeight = this.options.data.length * this.options.itemHeight;
    this.template = document.getElementById(containers.dataset.template || 'item-template');
    
    this.initContainer();
    this.bindEvents();
    this.render();
  }
  
  initContainer() {
    // Virtualized Content-wrappers create
    this.contentWrapper = document.createElement('div');
    this.contentWrapper.className = 'virtualized-content';
    this.contentWrapper.style.height = `${this.totalHeight}px`;
    this.containers.appendChild(this.contentWrapper);
  }
  
  bindEvents() {
    this.containers.addEventListener('scroll', () => {
      requestAnimationFrame(() => this.render());
    });
    
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => this.render());
    });
  }
  
  render() {
    const scrollTop = this.containers.scrollTop;
    const containerHeight = this.containers.clientHeight;
    
    // Calculate which items are visible
    const startIndex = Math.max(0, Math.floor(scrollTop / this.options.itemHeight) - this.options.bufferSize);
    const endIndex = Math.min(
      this.options.data.length - 1,
      Math.ceil((scrollTop + containerHeight) / this.options.itemHeight) + this.options.bufferSize
    );
    
    // Current visible items create/update
    const itemsToRender = [];
    for (let i = startIndex; i <= endIndex; i++) {
      itemsToRender.push({
        index: i,
        data: this.options.data[i],
        top: i * this.options.itemHeight
      });
    }
    
    // DOM update
    this.updateDOM(itemsToRender);
  }
  
  updateDOM(itemsToRender) {
    // Remove current items that are no longer visible
    const currentItems = Array.from(this.contentWrapper.children);
    const newIndexes = itemsToRender.map(item => item.index);
    
    currentItems.forEach(item => {
      const index = parseInt(item.dataset.index);
      if (!newIndexes.includes(index)) {
        item.remove();
      }
    });
    
    // Add new items that are now visible
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
    
    // Populate template with data
    this.populateTemplate(element, item.data);
    
    return element;
  }
  
  populateTemplate(element, data) {
    // Implementation based on data structure
    // Example:
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

// Initialization
document.querySelectorAll('.virtualized-containers').forEach(containers => {
  new VirtualizedContainer(containers);
});
```

## Lazy Load containers

containers for delayed loading of content when scrolling:

```html
<div class="lazy-load-containers">
  <img class="lazy-image" data-src="large-image.jpg" src="placeholder.jpg" alt="Lazy-loaded image">
  <div class="lazy-content" data-src="/api/content">
    <div class="skeleton-content">
      <!-- Skeleton placeholder during loading -->
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  </div>
</div>
```

Implementation:

```css
.lazy-load-containers {
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

JavaScript for functionality:

```javascript
// Intersection Observer for Lazy Loading
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
              console.error('Error loading content:', error);
            });
        }
      }
      
      // No longer observe element after it has been loaded
      observer.unobserve(element);
    }
  });
}, {
  rootMargin: '100px 0px' // 100px buffer before element becomes visible
});

// Observe all lazy-load elements
document.querySelectorAll('.lazy-image, .lazy-content').forEach(element => {
  lazyLoadObserver.observe(element);
});
```

## Deferred Render containers

containers for delayed rendering of non-critical UI elements:

```html
<div class="deferred-render-containers" data-priority="low" data-render-delay="1000">
  <template>
    <!-- Complex UI component that should be rendered with delay -->
    <div class="complex-component">
      <h3>Complex Component</h3>
      <div class="chart"><!-- Complex chart --></div>
      <div class="data-table"><!-- Complex table --></div>
    </div>
  </template>
  <div class="placeholder">
    <!-- Placeholder during delayed rendering -->
    <p>Loading component...</p>
  </div>
</div>
```

Implementation:

```css
.deferred-render-containers {
  width: 100%;
}

.placeholder {
  padding: var(--space-4);
  background-color: var(--color-background-subtle);
  border-radius: var(--radius-md);
  text-align: center;
}
```

JavaScript for functionality:

```javascript
// Delayed rendering of components
function initDeferredRendering() {
  const containers = document.querySelectorAll('.deferred-render-containers');
  
  // Sort by priority (high -> medium -> low)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sortedContainers = Array.from(containers).sort((a, b) => {
    const priorityA = priorityOrder[a.dataset.priority || 'medium'] || 1;
    const priorityB = priorityOrder[b.dataset.priority || 'medium'] || 1;
    return priorityA - priorityB;
  });
  
  // Staggered render times based on priority
  let renderQueue = Promise.resolve();
  
  sortedContainers.forEach(containers => {
    const template = containers.querySelector('template');
    const placeholder = containers.querySelector('.placeholder');
    const delay = parseInt(containers.dataset.renderDelay) || 0;
    
    if (!template || !placeholder) return;
    
    renderQueue = renderQueue.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          // Render template
          const content = document.importNode(template.content, true);
          placeholder.replaceWith(content);
          
          // Trigger event that component what rendered
          containers.dispatchEvent(new CustomEvent('componentRendered'));
          
          // Short pause between render operations
          setTimeout(resolve, 16); // ~1 frame at 60fps
        }, delay);
      });
    });
  });
}

// Start delayed rendering after page is loaded
window.addEventListener('load', () => {
  // Let critical content render first
  setTimeout(initDeferredRendering, 200);
});
```

## Chunk containers

containers for dividing large content lists into smaller chunks:

```html
<div class="chunk-containers" data-chunk-size="10" data-total-items="100">
  <div class="chunk-content">
    <!-- Here the first chunks will be rendered -->
  </div>
  <button class="chunk-load-more">Load more</button>
</div>
```

Implementation:

```css
.chunk-containers {
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

JavaScript for functionality:

```javascript
class ChunkContainer {
  constructor(containers) {
    this.containers = containers;
    this.chunkSize = parseInt(containers.dataset.chunkSize) || 10;
    this.totalItems = parseInt(containers.dataset.totalItems) || 100;
    this.currentChunk = 0;
    this.contentContainer = containers.querySelector('.chunk-content');
    this.loadMoreButton = containers.querySelector('.chunk-load-more');
    
    this.initEvents();
    this.loadNextChunk(); // Automatically load first chunk
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
      // All items have been loaded
      if (this.loadMoreButton) {
        this.loadMoreButton.disabled = true;
        this.loadMoreButton.textContent = 'All content loaded';
      }
      return;
    }
    
    // Normally on API call would happen here
    // in this example we generate dummy content
    this.fetchChunkData(startIndex, endIndex).then(items => {
      this.renderChunk(items);
      this.currentChunk++;
      
      // Check if we've reached the end
      if (endIndex >= this.totalItems && this.loadMoreButton) {
        this.loadMoreButton.disabled = true;
        this.loadMoreButton.textContent = 'All content loaded';
      }
    });
  }
  
  fetchChunkData(startIndex, endIndex) {
    // Simulation of on API call
    return new Promise(resolve => {
      setTimeout(() => {
        const items = [];
        for (let i = startIndex; i < endIndex; i++) {
          items.push({
            id: i,
            title: `Item ${i + 1}`,
            description: `Description for Item ${i + 1}`
          });
        }
        resolve(items);
      }, 500); // Simulated network latency
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

// Initialization
document.querySelectorAll('.chunk-containers').forEach(containers => {
  new ChunkContainer(containers);
});
```

## Media Optimization containers

containers for optimized display of images and videos:

```html
<div class="media-optimization-containers">
  <!-- responsive images with different resolutions -->
  <picture class="optimized-image">
    <source srcset="image-large.webp" media="(min-width: 1200px)" type="image/webp">
    <source srcset="image-large.jpg" media="(min-width: 1200px)">
    <source srcset="image-medium.webp" media="(min-width: 768px)" type="image/webp">
    <source srcset="image-medium.jpg" media="(min-width: 768px)">
    <source srcset="image-small.webp" type="image/webp">
    <img src="image-small.jpg" alt="Optimized image" loading="lazy">
  </picture>
  
  <!-- Video with Lazy Loading -->
  <div class="optimized-video" data-src="video.mp4" data-poster="poster.jpg">
    <!-- Placeholder until load -->
    <div class="video-placeholder">
      <img src="poster.jpg" alt="Video preview">
      <button class="video-play-button">▶️</button>
    </div>
  </div>
</div>
```

Implementation:

```css
.media-optimization-containers {
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

JavaScript for functionality:

```javascript
// Optimized video handling
document.querySelectorAll('.optimized-video').forEach(containers => {
  const placeholder = containers.querySelector('.video-placeholder');
  const videoSrc = containers.dataset.src;
  const posterSrc = containers.dataset.poster;
  
  if (!placeholder || !videoSrc) return;
  
  // Only load on click
  placeholder.addEventListener('click', () => {
    // Video element create
    const video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    if (posterSrc) video.poster = posterSrc;
    
    // Sources add
    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = videoSrc.endsWith('.mp4') ? 'video/mp4' : 'video/webm';
    video.appendChild(source);
    
    // Placeholder replace
    placeholder.replaceWith(video);
    
    // Video statistics for analysis
    video.addEventListener('play', () => {
      console.log('Video playback started');
    });
    
    video.addEventListener('ended', () => {
      console.log('Video playback completed');
    });
  });
});

// Image optimization - Intersection Observer for delayed loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target.querySelector('img');
      if (img && img.loading === 'lazy') {
        // High-Quality preview activate
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

1. **Set measurable performance goals** - Define clear performance goals for your application, such as First Contentful Paint under 1.5 seconds.
2. **Virtualization for size lists** - Use virtualization when lists contain more than 50-100 elements.
3. **Progressive Loading implement** - Load the most important content first and delay rendering non-critical elements.
4. **Image optimization prioritize** - Use modern image formats (WebP), responsive images, and Lazy Loading.
5. **DOM-size limit** - Keep the number of DOM elements under 1500 to optimize render performance.
6. **JavaScript sparingly use** - Avoid unnecessary JavaScript calculations during scrolling.
7. **Network requests minimize** - Bundle content requests and avoid too many single API calls.
8. **Rendering-Priorities set** - Prioritize rendering based on visibility and importance of components.

## Performance Measurement

### Performance Metrics

Important metrics for monitoring:

- **Time to First Byte (TTFB)** - Time until first byte of response
- **First Contentful Paint (FCP)** - Time until first content display
- **Largest Contentful Paint (LCP)** - Time until largest content element display
- **First Input Delay (FID)** - Delay on first user input
- **Cumulative layout Shift (CLS)** - Metric for visual stability

### Performance Measurement in practice

```javascript
// Performance measurement with the Performance API
function measurePerformance() {
  // navigation timing metrics
  const navTiming = performance.getEntriesByType('navigation')[0];
  const pageLoadTime = navTiming.loadEventEnd - navTiming.startTime;
  
  // Rendering metrics
  const paintMetrics = performance.getEntriesByType('paint');
  const fcp = paintMetrics.find(entry => entry.name === 'first-contentful-paint')?.startTime;
  
  // User-defined markers and measurements
  performance.mark('component-rendered');
  
  // Performance data send to analysis system
  sendPerformanceData({
    pageLoadTime,
    firstContentfulPaint: fcp,
    // additional metrics...
  });
}

// User-defined performance measurement for containers
function measureContainerPerformance(containerId) {
  performance.mark(`${containerId}-start`);
  
  // After action completion
  setTimeout(() => {
    performance.mark(`${containerId}-end`);
    performance.measure(
      `${containerId}-duration`,
      `${containerId}-start`,
      `${containerId}-end`
    );
    
    const measure = performance.getEntriesByName(`${containerId}-duration`)[0];
    console.log(`${containerId} Render time: ${measure.duration.toFixed(2)}ms`);
  }, 0);
}
```

## Use Cases

### Product List View with Virtualization

```html
<div class="containers">
  <h1>Products</h1>
  
  <div class="virtualized-containers" data-height="600" data-item-height="100" data-template="product-template">
    <!-- Virtualized Product List -->
  </div>
  
  <template id="product-template">
    <div class="product-card">
      <img src="placeholder.jpg" alt="Product">
      <div class="product-info">
        <h3>Product Name</h3>
        <p>Product Description</p>
        <span class="price">€99.99</span>
      </div>
    </div>
  </template>
</div>

<script>
  // Product data load
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      const containers = document.querySelector('.virtualized-containers');
      new VirtualizedContainer(containers, {
        data: products,
        itemHeight: 100
      });
    });
</script>
```

### Dashboard with Delayed Rendering

```html
<div class="dashboard-containers">
  <!-- Critical information render immediately -->
  <div class="dashboard-header">
    <h1>Dashboard</h1>
    <div class="user-info">
      <span>Welcome, Max</span>
    </div>
  </div>
  
  <!-- Important statistics with high priority -->
  <div class="deferred-render-containers" data-priority="high" data-render-delay="0">
    <template>
      <div class="stats-overview">
        <!-- Important statistics -->
      </div>
    </template>
    <div class="placeholder">Loading statistics...</div>
  </div>
  
  <!-- Less important charts with medium priority -->
  <div class="deferred-render-containers" data-priority="medium" data-render-delay="500">
    <template>
      <div class="charts-containers">
        <!-- Complex charts -->
      </div>
    </template>
    <div class="placeholder">Loading charts...</div>
  </div>
  
  <!-- Activity history with low priority -->
  <div class="deferred-render-containers" data-priority="low" data-render-delay="1000">
    <template>
      <div class="activity-history">
        <!-- Activity history -->
      </div>
    </template>
    <div class="placeholder">Loading activity history...</div>
  </div>
</div>
```

### Media-Intensive Page with Optimized Images

```html
<div class="media-gallery">
  <h2>Our Projects</h2>
  
  <div class="media-optimization-containers">
    <div class="gallery-grid">
      <!-- Optimized images -->
      <picture class="optimized-image">
        <source srcset="project1-large.webp" media="(min-width: 1200px)" type="image/webp">
        <source srcset="project1-large.jpg" media="(min-width: 1200px)">
        <source srcset="project1-medium.webp" media="(min-width: 768px)" type="image/webp">
        <source srcset="project1-medium.jpg" media="(min-width: 768px)">
        <source srcset="project1-small.webp" type="image/webp">
        <img src="project1-small.jpg" alt="Project 1" loading="lazy">
      </picture>
      
      <!-- additional optimized images... -->
    </div>
  </div>
</div>
```

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Intersection Observer | 51+ | 55+ | 12.1+ | 15+ |
| Virtual DOM Techniques | All | All | All | All |
| requestAnimationFrame | 24+ | 23+ | 6.1+ | 12+ |
| Picture element | 38+ | 38+ | 9.1+ | 17+ |
| Performance API | 43+ | 41+ | 11+ | 12+ |

For older browsers, the library offers Fallbacks to ensure basic functionality.

## Summary

Performance containers of the Casoon UI Library offer powerful solutions for optimizing render performance and load times of your application. Through techniques like virtualization, delayed loading, staggered rendering, and content chunking can you also ensure a smooth user experience even with complex applications and large data sets. These containers are particularly useful for data-intensive applications, dashboards, E-Commerce websites, and media-rich applications. 
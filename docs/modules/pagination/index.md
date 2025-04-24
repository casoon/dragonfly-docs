# Pagination

Die Pagination-Komponente ermöglicht die Navigation durch mehrere Seiten von Inhalten in der Casoon UI Library.

## Verwendung

```html
<nav class="pagination">
  <ul class="pagination__list">
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--prev">Zurück</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">1</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--active">2</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">3</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--next">Weiter</a>
    </li>
  </ul>
</nav>
```

## Varianten

### Mit Ellipsis

```html
<nav class="pagination">
  <ul class="pagination__list">
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--prev">Zurück</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">1</a>
    </li>
    <li class="pagination__item">
      <span class="pagination__ellipsis">...</span>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">4</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--active">5</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">6</a>
    </li>
    <li class="pagination__item">
      <span class="pagination__ellipsis">...</span>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">10</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--next">Weiter</a>
    </li>
  </ul>
</nav>
```

### Mit Animation

```html
<nav class="pagination pagination--animated">
  <ul class="pagination__list">
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--prev">Zurück</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">1</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--active">2</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">3</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--next">Weiter</a>
    </li>
  </ul>
</nav>
```

## CSS Variablen

```css
:root {
  --pagination-padding: 0.5rem;
  --pagination-margin: 0.25rem;
  --pagination-border-radius: 4px;
  --pagination-bg-color: #ffffff;
  --pagination-text-color: #333333;
  --pagination-hover-color: #f5f5f5;
  --pagination-active-color: #007bff;
  --pagination-disabled-color: #cccccc;
  --pagination-transition: all 0.3s ease;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie semantische HTML-Elemente
- Fügen Sie ARIA-Attribute hinzu
- Stellen Sie ausreichenden Kontrast sicher
- Implementieren Sie Tastaturnavigation

### Responsive Design

- Verwenden Sie relative Einheiten
- Testen Sie auf verschiedenen Bildschirmgrößen
- Optimieren Sie die Darstellung auf mobilen Geräten
- Berücksichtigen Sie Touch-Targets

### Performance

- Minimieren Sie CSS
- Optimieren Sie JavaScript-Events
- Vermeiden Sie unnötige Verschachtelungen
- Verwenden Sie CSS-Transitions statt JavaScript-Animationen

## Integration

### Astro

```astro
---
import 'casoon-ui-lib/modules/pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showEllipsis?: boolean;
  animated?: boolean;
}

const { currentPage, totalPages, onPageChange, showEllipsis = true, animated = false } = Astro.props;
---

<nav class="pagination" class:list={[animated && 'pagination--animated']}>
  <ul class="pagination__list">
    <li class="pagination__item">
      <a 
        href="#" 
        class="pagination__link pagination__link--prev"
        class:list={[currentPage === 1 && 'pagination__link--disabled']}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
      >
        Zurück
      </a>
    </li>

    {#if showEllipsis && currentPage > 3}
      <li class="pagination__item">
        <a href="#" class="pagination__link" onClick={(e) => {
          e.preventDefault();
          onPageChange(1);
        }}>1</a>
      </li>
      <li class="pagination__item">
        <span class="pagination__ellipsis">...</span>
      </li>
    {/if}

    {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
      {#if page >= currentPage - 1 && page <= currentPage + 1}
        <li class="pagination__item">
          <a 
            href="#" 
            class="pagination__link"
            class:list={[page === currentPage && 'pagination__link--active']}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      {/if}
    {/each}

    {#if showEllipsis && currentPage < totalPages - 2}
      <li class="pagination__item">
        <span class="pagination__ellipsis">...</span>
      </li>
      <li class="pagination__item">
        <a href="#" class="pagination__link" onClick={(e) => {
          e.preventDefault();
          onPageChange(totalPages);
        }}>{totalPages}</a>
      </li>
    {/if}

    <li class="pagination__item">
      <a 
        href="#" 
        class="pagination__link pagination__link--next"
        class:list={[currentPage === totalPages && 'pagination__link--disabled']}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages) onPageChange(currentPage + 1);
        }}
      >
        Weiter
      </a>
    </li>
  </ul>
</nav>

<style>
  .pagination {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  
  .pagination__list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .pagination__item {
    margin: 0 var(--pagination-margin);
  }
  
  .pagination__link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    height: 2rem;
    padding: var(--pagination-padding);
    color: var(--pagination-text-color);
    text-decoration: none;
    background-color: var(--pagination-bg-color);
    border-radius: var(--pagination-border-radius);
    transition: var(--pagination-transition);
  }
  
  .pagination__link:hover {
    background-color: var(--pagination-hover-color);
  }
  
  .pagination__link--active {
    background-color: var(--pagination-active-color);
    color: #ffffff;
  }
  
  .pagination__link--disabled {
    color: var(--pagination-disabled-color);
    pointer-events: none;
  }
  
  .pagination--animated .pagination__link {
    transition: var(--pagination-transition);
  }
  
  .pagination--animated .pagination__link:hover {
    transform: scale(1.1);
  }
</style>
```

Verwendung in einer Astro-Komponente:

```astro
---
import Pagination from '../modules/Pagination.astro';

const currentPage = 5;
const totalPages = 10;

const handlePageChange = (page: number) => {
  // Hier können Sie die Logik für den Seitenwechsel implementieren
  console.log(`Wechsel zu Seite ${page}`);
};
---

<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  showEllipsis
  animated
/>
``` 
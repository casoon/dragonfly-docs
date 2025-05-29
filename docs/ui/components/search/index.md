---
title: Search Component
outline: deep
---


# Search

The Search component provides a user interface for searching content within an application. It typically includes an input field, search button, and often features additional functionality like autocomplete, search suggestions, or filtering options.

## Installation

The Search component is part of the Casoon UI Library.

```bash
# Installation of the entire library
npm install @casoon/ui-lib
```

## Import

```css
/* Import all UI components */
@import '@casoon/ui-lib/ui.css';

/* Or just the Search component */
@import '@casoon/ui-lib/ui/components/search.css';
```

## Basic Usage

```html
<div class="search">
  <input type="text" class="search__input" placeholder="Search...">
  <button class="search__button">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </button>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden; width: 300px;">
    <input type="text" placeholder="Search..." style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</div>

## Variants

### Sizes

The Search component is available in different sizes.

```html
<div class="search search--sm">
  <input type="text" class="search__input" placeholder="Small search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>

<div class="search">
  <input type="text" class="search__input" placeholder="Default search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>

<div class="search search--lg">
  <input type="text" class="search__input" placeholder="Large search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>
```

<div class="example-wrapper" style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.25rem; overflow: hidden; width: 200px;">
    <input type="text" placeholder="Small search" style="flex: 1; border: none; padding: 0.25rem 0.5rem; font-size: 0.875rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.25rem 0.5rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
  
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden; width: 300px;">
    <input type="text" placeholder="Default search" style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
  
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; width: 350px;">
    <input type="text" placeholder="Large search" style="flex: 1; border: none; padding: 0.75rem 1rem; font-size: 1.125rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.75rem 1rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</div>

### Styles

Different visual styles for the Search component.

```html
<div class="search search--pill">
  <input type="text" class="search__input" placeholder="Pill search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>

<div class="search search--outline">
  <input type="text" class="search__input" placeholder="Outline search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>

<div class="search search--minimal">
  <input type="text" class="search__input" placeholder="Minimal search">
  <button class="search__button">
    <svg><!-- Search icon --></svg>
  </button>
</div>
```

<div class="example-wrapper" style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 9999px; overflow: hidden; width: 300px;">
    <input type="text" placeholder="Pill search" style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
  
  <div style="display: flex; border: 2px solid #3b82f6; border-radius: 0.375rem; overflow: hidden; width: 300px;">
    <input type="text" placeholder="Outline search" style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
  
  <div style="display: flex; border-bottom: 1px solid #e5e7eb; width: 300px;">
    <input type="text" placeholder="Minimal search" style="flex: 1; border: none; padding: 0.5rem 0; outline: none;">
    <button style="background: none; color: #6b7280; border: none; padding: 0.5rem 0; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</div>

## Usage Examples

### Search with Autocomplete

A search component with autocomplete dropdown.

```html
<div class="search-container">
  <div class="search">
    <input type="text" class="search__input" placeholder="Search products...">
    <button class="search__button">
      <svg><!-- Search icon --></svg>
    </button>
  </div>
  <div class="search__autocomplete">
    <ul class="search__suggestions">
      <li class="search__suggestion">Product One</li>
      <li class="search__suggestion">Product Two</li>
      <li class="search__suggestion">Product Three</li>
    </ul>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="position: relative; width: 300px;">
    <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden;">
      <input type="text" placeholder="Search products..." value="prod" style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
      <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
    <div style="position: absolute; top: 100%; left: 0; right: 0; margin-top: 0.25rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="padding: 0.5rem 0.75rem; cursor: pointer; hover:background-color: #f3f4f6;">Product One</li>
        <li style="padding: 0.5rem 0.75rem; cursor: pointer; background-color: #f3f4f6;">Product Two</li>
        <li style="padding: 0.5rem 0.75rem; cursor: pointer; hover:background-color: #f3f4f6;">Product Three</li>
      </ul>
    </div>
  </div>
</div>

### Search with Filters

A search component with filtering options.

```html
<div class="search-with-filters">
  <div class="search">
    <input type="text" class="search__input" placeholder="Search...">
    <div class="search__filter-dropdown">
      <select class="search__filter">
        <option value="all">All</option>
        <option value="products">Products</option>
        <option value="articles">Articles</option>
      </select>
    </div>
    <button class="search__button">
      <svg><!-- Search icon --></svg>
    </button>
  </div>
</div>
```

<div class="example-wrapper">
  <div style="display: flex; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden; width: 400px;">
    <input type="text" placeholder="Search..." style="flex: 1; border: none; padding: 0.5rem 0.75rem; outline: none;">
    <div style="border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
      <select style="border: none; padding: 0.5rem 0.75rem; outline: none; appearance: none; background-color: #f9fafb; min-width: 100px;">
        <option value="all">All</option>
        <option value="products">Products</option>
        <option value="articles">Articles</option>
      </select>
    </div>
    <button style="background-color: #3b82f6; color: white; border: none; padding: 0.5rem 0.75rem; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</div>

## Customization

The Search component can be customized using CSS variables:

```css
:root {
  --search-height: 2.5rem;
  --search-border: 1px solid var(--color-neutral-200);
  --search-border-radius: var(--radius-m);
  --search-bg: var(--color-white);
  --search-focus-ring: 0 0 0 2px var(--color-primary-200);
  
  --search-input-padding: 0.5rem 0.75rem;
  --search-input-color: var(--color-neutral-900);
  --search-input-placeholder-color: var(--color-neutral-400);
  
  --search-button-bg: var(--color-primary-500);
  --search-button-hover-bg: var(--color-primary-600);
  --search-button-color: var(--color-white);
  --search-button-padding: 0.5rem 0.75rem;
  
  --search-dropdown-bg: var(--color-white);
  --search-dropdown-border: 1px solid var(--color-neutral-200);
  --search-dropdown-shadow: var(--shadow-m);
  --search-dropdown-item-hover-bg: var(--color-neutral-100);
}
```

## Accessibility

- Use appropriate ARIA attributes like `role="search"` for search containers
- Ensure the search input has a proper label (visible or aria-label)
- Add keyboard support for navigating autocomplete suggestions
- Provide clear visual feedback for focus states
- Include appropriate text for screen readers when showing/hiding autocomplete results

## Browser Compatibility

The Search component is compatible with all modern browsers.

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Basic functionality | ✅ | ✅ | ✅ | ✅ |
| Flexbox layout | 29+ | 28+ | 9+ | 16+ |
| Custom properties | 49+ | 31+ | 9.1+ | 15+ | 
---
title: Loading Effects
category: Effects
---

# Loading Effects

The `loading.css` file provides a comprehensive collection of loading animations and effects that can be used during wait times in your application. These visual indicators give users feedback that a process is running in the background, thus improving the perceived responsiveness of your user interface.

## Overview

Loading effects are an essential component of modern user interfaces. They bridge the time while users wait for a process to complete and provide visual feedback that the application is still responding. The Casoon UI Library offers a variety of loading effects for different use cases and design styles.

## Basic Spinners

```html
<!-- Standard spinner -->
<div class="spinner">Standard spinner</div>
<div class="spinner-sm">Small spinner</div>
<div class="spinner-lg">Large spinner</div>

<!-- Spinners with different speeds -->
<div class="spinner spinner-slow">Slow spinner</div>
<div class="spinner spinner-fast">Fast spinner</div>

<!-- Spinner variants -->
<div class="spinner-border">Border spinner</div>
<div class="spinner-grow">Growing spinner</div>
<div class="spinner-pulse">Pulsing spinner</div>
<div class="spinner-dots">Dots spinner</div>
<div class="spinner-wave">Wave spinner</div>
```

## Color Variants for Spinners

```html
<!-- Colored spinners -->
<div class="spinner-primary">Primary color spinner</div>
<div class="spinner-secondary">Secondary color spinner</div>
<div class="spinner-accent">Accent color spinner</div>
<div class="spinner-success">Success spinner</div>
<div class="spinner-warning">Warning spinner</div>
<div class="spinner-error">Error spinner</div>
<div class="spinner-info">Info spinner</div>

<!-- Spinner with custom color -->
<div class="spinner" style="--spinner-color: #8a2be2;">Custom color</div>
```

## Progress Indicators

```html
<!-- Horizontal progress bars -->
<div class="progress">
  <div class="progress-bar" style="width: 25%">25%</div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-striped" style="width: 50%">50%</div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-animated" style="width: 75%">75%</div>
</div>

<!-- Circular progress indicators -->
<div class="progress-circle" style="--progress: 25">25%</div>
<div class="progress-circle" style="--progress: 50">50%</div>
<div class="progress-circle" style="--progress: 75">75%</div>

<!-- Indeterminate progress indicators -->
<div class="progress-indeterminate">Indeterminate progress</div>
<div class="progress-indeterminate-circle">Indeterminate circular progress</div>
```

## Skeleton Loading

```html
<!-- Basic skeleton loader -->
<div class="skeleton">Basic skeleton</div>
<div class="skeleton-text">Text line skeleton</div>
<div class="skeleton-circle">Circular skeleton</div>
<div class="skeleton-image">Image skeleton</div>

<!-- Animated skeletons -->
<div class="skeleton skeleton-pulse">Pulsing skeleton</div>
<div class="skeleton skeleton-wave">Wave skeleton</div>
<div class="skeleton skeleton-shimmer">Shimmering skeleton</div>

<!-- Complex skeletons -->
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-text"></div>
</div>

<div class="skeleton-profile">
  <div class="skeleton-circle"></div>
  <div class="skeleton-text"></div>
</div>

<div class="skeleton-table">
  <div class="skeleton-row"></div>
  <div class="skeleton-row"></div>
  <div class="skeleton-row"></div>
</div>
```

## Advanced Loading Animations

```html
<!-- Special animations -->
<div class="loader-ripple">Ripple effect loader</div>
<div class="loader-ellipsis">Dots loader</div>
<div class="loader-grid">Grid loader</div>
<div class="loader-roller">Roller loader</div>
<div class="loader-orbit">Orbit loader</div>
<div class="loader-ring">Ring loader</div>
<div class="loader-hourglass">Hourglass loader</div>
<div class="loader-dual-ring">Dual ring loader</div>
```

## Contextual Loaders

```html
<!-- Button loading state -->
<button class="button button-loading">
  <span class="button-text">Save</span>
  <span class="button-loader"></span>
</button>

<!-- Button with automatic loader swap -->
<button class="button is-loading">
  <span class="button-icon-normal">↑</span>
  <span class="button-icon-loading"></span>
  Upload
</button>

<!-- Form input with loading state -->
<div class="input-group">
  <input type="text" class="input is-loading" placeholder="Search...">
  <div class="input-loader"></div>
</div>

<!-- Card in loading state -->
<div class="card is-loading">
  <div class="card-loader"></div>
  <div class="card-content">Card content is loading...</div>
</div>

<!-- Page section in loading state -->
<div class="section is-loading">
  <div class="section-loader"></div>
  <div class="section-content">Content is loading...</div>
</div>
```

## Fullscreen Loading Effects

```html
<!-- Overlay with loader -->
<div class="loading-overlay">
  <div class="spinner-lg"></div>
</div>

<!-- Fullscreen loader with text -->
<div class="loading-fullscreen">
  <div class="spinner-lg"></div>
  <div class="loading-text">Please wait...</div>
</div>

<!-- Page transition loader -->
<div class="loading-page-transition">
  <div class="loader-pulse"></div>
</div>

<!-- Initial app loading effect -->
<div class="loading-app-init">
  <div class="app-logo"></div>
  <div class="progress-bar-animated"></div>
</div>
```

## Loading State Combinations

```html
<!-- Loading button with progress -->
<button class="button button-loading-progress">
  <span class="button-text">Upload</span>
  <span class="progress-circle" style="--progress: 65"></span>
</button>

<!-- Card with skeleton content -->
<div class="card">
  <div class="card-header">
    <h3>Data</h3>
  </div>
  <div class="card-body is-loading">
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
  </div>
</div>

<!-- Animated transition from skeleton to content -->
<div class="content-loader">
  <div class="skeleton-content" aria-hidden="true">
    <!-- Skeleton content -->
  </div>
  <div class="real-content" hidden>
    <!-- Actual content -->
  </div>
</div>
```

## CSS Variables for Loading Effects

The loading effects can be customized via CSS variables:

```css
:root {
  /* Spinner base parameters */
  --spinner-size-sm: 1rem;
  --spinner-size-md: 2rem;
  --spinner-size-lg: 3rem;
  --spinner-width: 0.25em;
  --spinner-color: var(--color-primary);
  
  /* Spinner animation parameters */
  --spinner-animation-duration: 0.75s;
  --spinner-animation-timing: linear;
  --spinner-animation-iteration: infinite;
  
  /* Progress bar parameters */
  --progress-height: 0.5rem;
  --progress-background: var(--color-gray-200);
  --progress-color: var(--color-primary);
  --progress-border-radius: var(--radius-sm);
  --progress-animation-duration: 1s;
  
  /* Circular progress indicator */
  --progress-circle-size: 4rem;
  --progress-circle-width: 0.25rem;
  --progress-circle-background: var(--color-gray-200);
  --progress-circle-color: var(--color-primary);
  
  /* Skeleton parameters */
  --skeleton-background: var(--color-gray-200);
  --skeleton-highlight: var(--color-gray-100);
  --skeleton-border-radius: var(--radius-sm);
  --skeleton-animation-duration: 1.5s;
}
```

## Accessibility

To ensure accessibility for loading indicators:

1. Provide text alternatives for purely visual loaders
2. Use ARIA attributes to communicate loading states
3. Manage focus appropriately during loading operations

```html
<!-- Accessible spinner example -->
<div class="spinner" role="status">
  <span class="sr-only">Loading...</span>
</div>

<!-- Accessible progress bar -->
<div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%">75%</div>
</div>

<!-- Area with loading state -->
<div aria-busy="true" class="content-area is-loading">
  <div class="spinner"></div>
  <div class="sr-only">Loading content, please wait...</div>
</div>
```

## Performance Considerations

Loading effects should be implemented with performance in mind:

1. Use CSS animations rather than JavaScript animations when possible
2. Avoid complex animations that might cause layout thrashing
3. Consider using simplified animations on low-power devices

For improved performance, loading effects that use CSS properties that trigger only compositor operations (like `opacity` and `transform`) are preferred over those that cause layout recalculations. 
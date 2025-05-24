---
title: Blog Component
category: Components
---

# Blog Component

The Blog component provides structure and layout for blog posts with a focus on readability. It offers specialized components for blog pages, articles, and news listings.

## Basic Usage

### Blog Post

```html
<article class="blog-post">
  <header class="header">
    <h2 class="title">Article Title</h2>
    <div class="meta">
      <time datetime="2023-10-15">October 15, 2023</time>
      <span class="author">By John Doe</span>
    </div>
  </header>
  <div class="content">
    <p>Article content goes here...</p>
  </div>
  <footer class="footer">
    <div class="tags">
      <span class="tag">Design</span>
      <span class="tag">CSS</span>
    </div>
  </footer>
</article>
```

## Blog List

```html
<div class="blog-list">
  <article class="blog-card">
    <img class="image" src="thumbnail.jpg" alt="Article thumbnail">
    <div class="content">
      <h3 class="title">Article Title</h3>
      <p class="excerpt">Brief description of the article content...</p>
      <a class="link" href="#">Read more</a>
    </div>
  </article>
  
  <article class="blog-card">
    <img class="image" src="thumbnail2.jpg" alt="Article thumbnail">
    <div class="content">
      <h3 class="title">Another Article</h3>
      <p class="excerpt">Another brief description...</p>
      <a class="link" href="#">Read more</a>
    </div>
  </article>
</div>
```

## Featured Article

```html
<article class="blog-post featured">
  <header class="header">
    <h2 class="title">Featured Article Title</h2>
    <div class="meta">
      <time datetime="2023-10-15">October 15, 2023</time>
      <span class="author">By John Doe</span>
    </div>
  </header>
  <div class="content">
    <p>This is a featured article with special styling.</p>
  </div>
  <footer class="footer">
    <div class="tags">
      <span class="tag">Featured</span>
      <span class="tag">Important</span>
    </div>
  </footer>
</article>
```

## Blog Navigation

```html
<nav class="blog-nav">
  <a class="prev" href="#">&larr; Previous Article</a>
  <a class="next" href="#">Next Article &rarr;</a>
</nav>
```

## Share Options

```html
<div class="blog-share">
  <span class="label">Share:</span>
  <div class="buttons">
    <a href="#" class="button twitter">Twitter</a>
    <a href="#" class="button facebook">Facebook</a>
    <a href="#" class="button linkedin">LinkedIn</a>
  </div>
</div>
```

## Styling Elements in Blog Content

The Blog component automatically styles standard HTML elements within the blog content for better readability:

```html
<article class="blog-post">
  <div class="content">
    <h1>Main Heading</h1>
    <p>Regular paragraph text with <a href="#">links</a> and <strong>bold text</strong>.</p>
    
    <h2>Secondary Heading</h2>
    <p>Another paragraph with some content.</p>
    
    <img src="example.jpg" alt="Example image">
    
    <h3>Tertiary Heading</h3>
    <pre><code>// Code example
function example() {
  return "Hello World";
}</code></pre>
  </div>
</article>
```

## Blog Card Hover Effect

```html
<article class="blog-card">
  <img class="image" src="thumbnail.jpg" alt="Article thumbnail">
  <div class="content">
    <h3 class="title">Hover over this card</h3>
    <p class="excerpt">This card has a hover effect with shadow and slight elevation.</p>
    <a class="link" href="#">Read more</a>
  </div>
</article>
```

## Customization

The Blog component can be customized using CSS variables:

```css
:root {
  --font-family-heading: system-ui, sans-serif;  /* Font for headings */
  --font-family-mono: monospace;                 /* Font for code */
  --font-size-base: 1rem;                        /* Base font size */
  --font-size-sm: 0.875rem;                      /* Small font size */
  --font-size-lg: 1.125rem;                      /* Large font size */
  --font-size-2xl: 1.5rem;                       /* Extra large font size */
  --font-weight-medium: 500;                     /* Medium font weight */
  --font-weight-semibold: 600;                   /* Semi-bold font weight */
  --line-height-relaxed: 1.625;                  /* Relaxed line height for readability */
  --color-primary: #3b82f6;                      /* Primary color for links */
  --color-gray-100: #f3f4f6;                     /* Light gray background */
  --color-gray-200: #e5e7eb;                     /* Border color */
  --color-gray-600: #4b5563;                     /* Subdued text color */
  --color-gray-700: #374151;                     /* Main text color */
  --radius-sm: 0.125rem;                         /* Small border radius */
  --radius-md: 0.375rem;                         /* Medium border radius */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);  /* Small shadow */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* Medium shadow */
  --space-1: 0.25rem;                            /* Extra small spacing */
  --space-2: 0.5rem;                             /* Small spacing */
  --space-3: 0.75rem;                            /* Medium spacing */
  --space-4: 1rem;                               /* Standard spacing */
  --space-6: 1.5rem;                             /* Large spacing */
  --space-8: 2rem;                               /* Extra large spacing */
}
```

## Accessibility

For better accessibility, consider these points:

- Use semantic HTML elements (`article`, `header`, `footer`, etc.)
- Include proper datetime attributes on `<time>` elements
- Add descriptive alt text for images
- Ensure sufficient color contrast for text
- Make navigation elements keyboard accessible
- Use proper heading hierarchy

## Best Practices

- Maintain a clear visual hierarchy with headings and spacing
- Keep article width constrained for better readability (65-70 characters per line)
- Use featured articles to highlight important content
- Include publication dates and author information for credibility
- Add tags or categories to help users find related content
- Provide clear navigation between articles
- Use responsive images that adapt to different screen sizes 
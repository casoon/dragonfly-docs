---
title: Media element
outline: deep
---


# Media

the Media-element dient zur Display verschiedener Medieninhalte how images, Videos and Audioelemente. it bietet einheitliche Styling-Optionen and responsive customizations for multimediale contents.

## Installation

the Media-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Media-Components */
@import '@casoon/ui-lib/media.css';
```

## Basic Usage

### images

```html
<img class="media" src="path/to/image.jpg" alt="Description des Bildes">
```

<div class="example-wrappers">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px;" src="https://via.placeholder.com/800x400" alt="Examplebild">
</div>

### Videos

```html
<video class="media" controls>
  <source src="path/to/video.mp4" type="video/mp4">
  her Browser unterstutzt no Videowiedergabe.
</video>
```

<div class="example-wrappers">
  <div style="position: relative; width: 100%; background-color: #f3f4f6; height: 0; padding-bottom: 56.25%; border-radius: 4px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #6b7280;">Video-Player (Example)</div>
  </div>
</div>

### Audio

```html
<audio class="media" controls>
  <source src="path/to/audio.mp3" type="audio/mp3">
  her Browser unterstutzt no Audiowiedergabe.
</audio>
```

<div class="example-wrappers">
  <div style="width: 100%; background-color: #f3f4f6; padding: 10px; border-radius: 4px;">
    <div style="color: #6b7280; text-align: center;">Audio-Player (Example)</div>
  </div>
</div>

## Variants

### responsive images

with verschiedenen Bildquellen for unterschiedliche Bildschirmgrossen:

```html
<picture>
  <source media="(min-width: 1200px)" srcset="path/to/large.jpg">
  <source media="(min-width: 768px)" srcset="path/to/medium.jpg">
  <img class="media" src="path/to/small.jpg" alt="Responsives image">
</picture>
```

### Bildverhaltnis-containers

containers, the the Seitenverhaltnis beibehalten:

```html
<div class="media-containers ratio-16-9">
  <img src="path/to/image.jpg" alt="image with festem Seitenverhaltnis">
</div>
```

<div class="example-wrappers">
  <div style="position: relative; width: 100%; background-color: #f3f4f6; height: 0; padding-bottom: 56.25%; border-radius: 4px; overflow: hidden;">
    <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" src="https://via.placeholder.com/800x450" alt="image with 16:9 Verhaltnis">
  </div>
</div>

### Abgerundete Medien

```html
<img class="media rounded" src="path/to/image.jpg" alt="Abgerundetes image">
```

<div class="example-wrappers">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 8px;" src="https://via.placeholder.com/400x400" alt="Abgerundetes image">
</div>

### Kreisformige Medien

```html
<img class="media circle" src="path/to/image.jpg" alt="Kreisformiges image">
```

<div class="example-wrappers">
  <img style="display: block; width: 150px; height: 150px; object-fit: cover; border-radius: 50%;" src="https://via.placeholder.com/300x300" alt="Kreisformiges image">
</div>

### with shadow

```html
<img class="media shadow" src="path/to/image.jpg" alt="image with shadow">
```

<div class="example-wrappers">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" src="https://via.placeholder.com/800x400" alt="image with shadow">
</div>

### with border

```html
<img class="media bordered" src="path/to/image.jpg" alt="image with border">
```

<div class="example-wrappers">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px; border: 1px solid #d1d5db;" src="https://via.placeholder.com/800x400" alt="image with border">
</div>

### with Bildunterschrift

```html
<figure class="media-figure">
  <img class="media" src="path/to/image.jpg" alt="image with Bildunterschrift">
  <figcaption>Description des Bildes or Urheberrechtshinweis</figcaption>
</figure>
```

<div class="example-wrappers">
  <figure style="margin: 0; padding: 0;">
    <img style="display: block; max-width: 100%; height: auto; border-radius: 4px;" src="https://via.placeholder.com/800x400" alt="image with Bildunterschrift">
    <figcaption style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; text-align: center;">Description des Bildes or Urheberrechtshinweis</figcaption>
  </figure>
</div>

### Medien-Galerie

```html
<div class="media-gallery">
  <img class="media" src="path/to/image1.jpg" alt="image 1">
  <img class="media" src="path/to/image2.jpg" alt="image 2">
  <img class="media" src="path/to/image3.jpg" alt="image 3">
  <img class="media" src="path/to/image4.jpg" alt="image 4">
</div>
```

<div class="example-wrappers">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 1">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 2">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 3">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 4">
  </div>
</div>

## Customization

the Media-elements can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende Media-properties */
  --media-max-width: 100%;
  --media-border-radius: var(--radius-md);
  --media-margin: 0;
  
  /* Spezialisierte Media-Variants */
  --media-rounded-radius: var(--radius-lg);
  --media-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --media-border-color: var(--color-gray-200);
  --media-border-width: 1px;
  
  /* containers and Figuren */
  --media-figure-margin: var(--space-4) 0;
  --media-caption-color: var(--color-gray-600);
  --media-caption-font-size: var(--font-size-sm);
  --media-caption-margin: var(--space-2) 0 0;
  
  /* Galerien */
  --media-gallery-gap: var(--space-2);
  --media-gallery-columns: 2;
}
```

## Accessibility

- Verwende immer a aussagekraftiges `alt`-attributes for images
- Fuge Untertitel and Beschreibungen for Video- and Audioelemente hinzu
- Stelle sicher, that Steuerungen for Video- and Audioelemente with the Tastatur bedienbar sind
- Verwende the `loading="lazy"`-attributes for images, um the Ladezeit to verbessern
- Nutze the `picture`-element and responsive Quellen for bessere Performance

## Browser-Kompatibilitat

the Media-element ist with allen modernen Browsern kompatibel.

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Bilddarstellung | ✅ | ✅ | ✅ | ✅ |
| Video- and Audio-elements | ✅ | ✅ | ✅ | ✅ |
| Picture-element | ✅ | ✅ | ✅ | ✅ |
| Aspect-Ratio-containers | ✅ | ✅ | ✅ | ✅ |
| Lazy Loading | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
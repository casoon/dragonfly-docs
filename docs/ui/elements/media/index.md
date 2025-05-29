---
title: Media Element
outline: deep
---


# Media

Das Media-Element dient zur Darstellung verschiedener Medieninhalte wie Bilder, Videos und Audioelemente. Es bietet einheitliche Styling-Optionen und responsive Anpassungen für multimediale Inhalte.

## Installation

Das Media-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Media-Komponenten */
@import '@casoon/ui-lib/media.css';
```

## Grundlegende Verwendung

### Bilder

```html
<img class="media" src="path/to/image.jpg" alt="Beschreibung des Bildes">
```

<div class="example-wrapper">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px;" src="https://via.placeholder.com/800x400" alt="Beispielbild">
</div>

### Videos

```html
<video class="media" controls>
  <source src="path/to/video.mp4" type="video/mp4">
  Ihr Browser unterstützt keine Videowiedergabe.
</video>
```

<div class="example-wrapper">
  <div style="position: relative; width: 100%; background-color: #f3f4f6; height: 0; padding-bottom: 56.25%; border-radius: 4px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #6b7280;">Video-Player (Beispiel)</div>
  </div>
</div>

### Audio

```html
<audio class="media" controls>
  <source src="path/to/audio.mp3" type="audio/mp3">
  Ihr Browser unterstützt keine Audiowiedergabe.
</audio>
```

<div class="example-wrapper">
  <div style="width: 100%; background-color: #f3f4f6; padding: 10px; border-radius: 4px;">
    <div style="color: #6b7280; text-align: center;">Audio-Player (Beispiel)</div>
  </div>
</div>

## Varianten

### Responsive Bilder

Mit verschiedenen Bildquellen für unterschiedliche Bildschirmgrößen:

```html
<picture>
  <source media="(min-width: 1200px)" srcset="path/to/large.jpg">
  <source media="(min-width: 768px)" srcset="path/to/medium.jpg">
  <img class="media" src="path/to/small.jpg" alt="Responsives Bild">
</picture>
```

### Bildverhältnis-Container

Container, die das Seitenverhältnis beibehalten:

```html
<div class="media-container ratio-16-9">
  <img src="path/to/image.jpg" alt="Bild mit festem Seitenverhältnis">
</div>
```

<div class="example-wrapper">
  <div style="position: relative; width: 100%; background-color: #f3f4f6; height: 0; padding-bottom: 56.25%; border-radius: 4px; overflow: hidden;">
    <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" src="https://via.placeholder.com/800x450" alt="Bild mit 16:9 Verhältnis">
  </div>
</div>

### Abgerundete Medien

```html
<img class="media rounded" src="path/to/image.jpg" alt="Abgerundetes Bild">
```

<div class="example-wrapper">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 8px;" src="https://via.placeholder.com/400x400" alt="Abgerundetes Bild">
</div>

### Kreisförmige Medien

```html
<img class="media circle" src="path/to/image.jpg" alt="Kreisförmiges Bild">
```

<div class="example-wrapper">
  <img style="display: block; width: 150px; height: 150px; object-fit: cover; border-radius: 50%;" src="https://via.placeholder.com/300x300" alt="Kreisförmiges Bild">
</div>

### Mit Schatten

```html
<img class="media shadow" src="path/to/image.jpg" alt="Bild mit Schatten">
```

<div class="example-wrapper">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" src="https://via.placeholder.com/800x400" alt="Bild mit Schatten">
</div>

### Mit Rahmen

```html
<img class="media bordered" src="path/to/image.jpg" alt="Bild mit Rahmen">
```

<div class="example-wrapper">
  <img style="display: block; max-width: 100%; height: auto; border-radius: 4px; border: 1px solid #d1d5db;" src="https://via.placeholder.com/800x400" alt="Bild mit Rahmen">
</div>

### Mit Bildunterschrift

```html
<figure class="media-figure">
  <img class="media" src="path/to/image.jpg" alt="Bild mit Bildunterschrift">
  <figcaption>Beschreibung des Bildes oder Urheberrechtshinweis</figcaption>
</figure>
```

<div class="example-wrapper">
  <figure style="margin: 0; padding: 0;">
    <img style="display: block; max-width: 100%; height: auto; border-radius: 4px;" src="https://via.placeholder.com/800x400" alt="Bild mit Bildunterschrift">
    <figcaption style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; text-align: center;">Beschreibung des Bildes oder Urheberrechtshinweis</figcaption>
  </figure>
</div>

### Medien-Galerie

```html
<div class="media-gallery">
  <img class="media" src="path/to/image1.jpg" alt="Bild 1">
  <img class="media" src="path/to/image2.jpg" alt="Bild 2">
  <img class="media" src="path/to/image3.jpg" alt="Bild 3">
  <img class="media" src="path/to/image4.jpg" alt="Bild 4">
</div>
```

<div class="example-wrapper">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 1">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 2">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 3">
    <img style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;" src="https://via.placeholder.com/300x300" alt="Galeriebild 4">
  </div>
</div>

## Anpassung

Die Media-Elemente können über CSS-Variablen angepasst werden:

```css
:root {
  /* Grundlegende Media-Eigenschaften */
  --media-max-width: 100%;
  --media-border-radius: var(--radius-md);
  --media-margin: 0;
  
  /* Spezialisierte Media-Varianten */
  --media-rounded-radius: var(--radius-lg);
  --media-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --media-border-color: var(--color-gray-200);
  --media-border-width: 1px;
  
  /* Container und Figuren */
  --media-figure-margin: var(--space-4) 0;
  --media-caption-color: var(--color-gray-600);
  --media-caption-font-size: var(--font-size-sm);
  --media-caption-margin: var(--space-2) 0 0;
  
  /* Galerien */
  --media-gallery-gap: var(--space-2);
  --media-gallery-columns: 2;
}
```

## Barrierefreiheit

- Verwende immer ein aussagekräftiges `alt`-Attribut für Bilder
- Füge Untertitel und Beschreibungen für Video- und Audioelemente hinzu
- Stelle sicher, dass Steuerungen für Video- und Audioelemente mit der Tastatur bedienbar sind
- Verwende das `loading="lazy"`-Attribut für Bilder, um die Ladezeit zu verbessern
- Nutze das `picture`-Element und responsive Quellen für bessere Performance

## Browser-Kompatibilität

Das Media-Element ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Bilddarstellung | ✅ | ✅ | ✅ | ✅ |
| Video- und Audio-Elemente | ✅ | ✅ | ✅ | ✅ |
| Picture-Element | ✅ | ✅ | ✅ | ✅ |
| Aspect-Ratio-Container | ✅ | ✅ | ✅ | ✅ |
| Lazy Loading | ✅ | ✅ | ✅ | ✅ |
| CSS-Variablen | 49+ | 31+ | 9.1+ | 15+ | 
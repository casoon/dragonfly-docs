---
title: Lists element
outline: deep
---


# lists

the lists-element bietet verschiedene Moglichkeiten zur Display from strukturierten Daten in Form from lists. it unterstutzt the drei grundlegenden HTML-Listentypen: ungeordnete lists (`ul`), geordnete lists (`ol`) and Beschreibungslisten (`dl`).

## Installation

the lists-element ist Teil the Casoon UI Library.

```bash
# Installation the gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-elements */
@import '@casoon/ui-lib/ui.css';

/* or only the Base-elements */
@import '@casoon/ui-lib/base/elements.css';
```

## Basic Usage

### Ungeordnete list

```html
<ul>
  <li>Erster Listenpunkt</li>
  <li>Zweiter Listenpunkt</li>
  <li>Dritter Listenpunkt</li>
</ul>
```

<div class="example-wrappers">
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li style="margin: 0.5rem 0;">Erster Listenpunkt</li>
    <li style="margin: 0.5rem 0;">Zweiter Listenpunkt</li>
    <li style="margin: 0.5rem 0;">Dritter Listenpunkt</li>
  </ul>
</div>

### Geordnete list

```html
<ol>
  <li>Erster Schritt</li>
  <li>Zweiter Schritt</li>
  <li>Dritter Schritt</li>
</ol>
```

<div class="example-wrappers">
  <ol style="margin: 1rem 0; padding-left: 2rem;">
    <li style="margin: 0.5rem 0;">Erster Schritt</li>
    <li style="margin: 0.5rem 0;">Zweiter Schritt</li>
    <li style="margin: 0.5rem 0;">Dritter Schritt</li>
  </ol>
</div>

### Beschreibungsliste

```html
<dl>
  <dt>Begriff 1</dt>
  <dd>Description des ersten Begriffs.</dd>
  
  <dt>Begriff 2</dt>
  <dd>Description des zweiten Begriffs.</dd>
  
  <dt>Begriff 3</dt>
  <dd>Description des dritten Begriffs.</dd>
</dl>
```

<div class="example-wrappers">
  <dl style="margin: 1rem 0;">
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 1</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Description des ersten Begriffs.</dd>
    
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 2</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Description des zweiten Begriffs.</dd>
    
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 3</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Description des dritten Begriffs.</dd>
  </dl>
</div>

## Variants

### Verschachtelte lists

lists can verschachtelt become, um Hierarchien darzustellen.

```html
<ul>
  <li>Hauptpunkt 1
    <ul>
      <li>Unterpunkt 1.1</li>
      <li>Unterpunkt 1.2</li>
    </ul>
  </li>
  <li>Hauptpunkt 2
    <ul>
      <li>Unterpunkt 2.1</li>
      <li>Unterpunkt 2.2</li>
    </ul>
  </li>
</ul>
```

<div class="example-wrappers">
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li style="margin: 0.5rem 0;">Hauptpunkt 1
      <ul style="margin: 0.5rem 0; padding-left: 2rem;">
        <li style="margin: 0.5rem 0;">Unterpunkt 1.1</li>
        <li style="margin: 0.5rem 0;">Unterpunkt 1.2</li>
      </ul>
    </li>
    <li style="margin: 0.5rem 0;">Hauptpunkt 2
      <ul style="margin: 0.5rem 0; padding-left: 2rem;">
        <li style="margin: 0.5rem 0;">Unterpunkt 2.1</li>
        <li style="margin: 0.5rem 0;">Unterpunkt 2.2</li>
      </ul>
    </li>
  </ul>
</div>

### lists im Content-area

Im Content-area have lists leicht angepasste Styles.

```html
<div class="content">
  <p>Einleitender Text...</p>
  
  <ul>
    <li>Erster Listenpunkt</li>
    <li>Zweiter Listenpunkt</li>
    <li>Dritter Listenpunkt</li>
  </ul>
  
  <p>Fortfuhrender Text...</p>
</div>
```

<div class="example-wrappers">
  <div style="color: #111827; font-size: 1rem; line-height: 1.6;">
    <p style="margin-bottom: 1em;">Einleitender Text...</p>
    
    <ul style="margin-bottom: 1em; padding-left: 1.5em;">
      <li style="margin-bottom: 0.5em;">Erster Listenpunkt</li>
      <li style="margin-bottom: 0.5em;">Zweiter Listenpunkt</li>
      <li style="margin-bottom: 0.5em;">Dritter Listenpunkt</li>
    </ul>
    
    <p style="margin-bottom: 1em;">Fortfuhrender Text...</p>
  </div>
</div>

### Spezial-lists: Dateiliste

a spezielles Example for a angepasste list ist the Dateiliste, the for the Display from Dateien in Upload-Components verwendet wird.

```html
<ul class="file-list">
  <li class="file-item">
    <div class="icon">📄</div>
    <div class="info">
      <div class="name">dokument.pdf</div>
      <div class="size">1.2 MB</div>
    </div>
    <button class="remove">×</button>
  </li>
  <li class="file-item">
    <div class="icon">📷</div>
    <div class="info">
      <div class="name">image.jpg</div>
      <div class="size">3.5 MB</div>
    </div>
    <button class="remove">×</button>
  </li>
</ul>
```

<div class="example-wrappers">
  <ul style="display: flex; flex-direction: column; gap: 0.5rem; list-style: none; margin: 0.75rem 0; padding: 0;">
    <li style="align-items: center; background-color: #f3f4f6; border-radius: 0.375rem; display: flex; gap: 0.75rem; padding: 0.5rem 0.75rem;">
      <div style="color: #6b7280; font-size: 1.5rem;">📄</div>
      <div style="flex: 1;">
        <div style="font-weight: 500;">dokument.pdf</div>
        <div style="color: #6b7280; font-size: 0.75rem;">1.2 MB</div>
      </div>
      <button style="align-items: center; background-color: #e5e7eb; border: none; border-radius: 50%; color: #4b5563; cursor: pointer; display: flex; font-size: 1.25rem; height: 1.5rem; justify-content: center; line-height: 1; width: 1.5rem;">×</button>
    </li>
    <li style="align-items: center; background-color: #f3f4f6; border-radius: 0.375rem; display: flex; gap: 0.75rem; padding: 0.5rem 0.75rem;">
      <div style="color: #6b7280; font-size: 1.5rem;">📷</div>
      <div style="flex: 1;">
        <div style="font-weight: 500;">image.jpg</div>
        <div style="color: #6b7280; font-size: 0.75rem;">3.5 MB</div>
      </div>
      <button style="align-items: center; background-color: #e5e7eb; border: none; border-radius: 50%; color: #4b5563; cursor: pointer; display: flex; font-size: 1.25rem; height: 1.5rem; justify-content: center; line-height: 1; width: 1.5rem;">×</button>
    </li>
  </ul>
</div>

## Customization

the lists-elements can over CSS Variables angepasst become:

```css
:root {
  /* Grundlegende lists */
  --list-margin: 1rem 0;
  --list-padding-left: 2rem;
  --list-item-margin: 0.5rem 0;
  
  /* Beschreibungslisten */
  --dl-margin: 1rem 0;
  --dt-margin-top: 1rem;
  --dd-margin-left: 1rem;
  --dd-margin-top: 0.5rem;
  
  /* Content-area lists */
  --content-list-margin-bottom: 1em;
  --content-list-padding-left: 1.5em;
  --content-list-item-margin-bottom: 0.5em;
  
  /* Spezial-lists: Dateiliste */
  --file-list-gap: var(--space-2);
  --file-list-margin: var(--space-3) 0;
  --file-item-bg: var(--color-gray-100);
  --file-item-border-radius: var(--radius-md);
  --file-item-gap: var(--space-3);
  --file-item-padding: var(--space-2) var(--space-3);
}
```

## Accessibility

- Verwende semantisch korrekte lists-elements (`ul`, `ol`, `dl`) for lists-contents
- Stelle sicher, that the list a logische Structure hat
- Entferne not the visuellen Marker (Bullet Points/Nummerierung), If you for the Verstandnis important sind
- Biete ausreichenden Kontrast for Text and visuelle Marker
- Verwende ausreichenden spacing between Listenpunkten for bessere Lesbarkeit

## Browser-Kompatibilitat

the lists-element ist with allen modernen Browsern kompatibel.

| Function | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalitat | ✅ | ✅ | ✅ | ✅ |
| Beschreibungslisten | ✅ | ✅ | ✅ | ✅ |
| Verschachtelte lists | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
---
title: Lists Element
outline: deep
---


# Listen

Das Listen-Element bietet verschiedene Möglichkeiten zur Darstellung von strukturierten Daten in Form von Listen. Es unterstützt die drei grundlegenden HTML-Listentypen: ungeordnete Listen (`ul`), geordnete Listen (`ol`) und Beschreibungslisten (`dl`).

## Installation

Das Listen-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Basis-Elemente */
@import '@casoon/ui-lib/base/elements.css';
```

## Basic Usage

### Ungeordnete Liste

```html
<ul>
  <li>Erster Listenpunkt</li>
  <li>Zweiter Listenpunkt</li>
  <li>Dritter Listenpunkt</li>
</ul>
```

<div class="example-wrapper">
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li style="margin: 0.5rem 0;">Erster Listenpunkt</li>
    <li style="margin: 0.5rem 0;">Zweiter Listenpunkt</li>
    <li style="margin: 0.5rem 0;">Dritter Listenpunkt</li>
  </ul>
</div>

### Geordnete Liste

```html
<ol>
  <li>Erster Schritt</li>
  <li>Zweiter Schritt</li>
  <li>Dritter Schritt</li>
</ol>
```

<div class="example-wrapper">
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
  <dd>Beschreibung des ersten Begriffs.</dd>
  
  <dt>Begriff 2</dt>
  <dd>Beschreibung des zweiten Begriffs.</dd>
  
  <dt>Begriff 3</dt>
  <dd>Beschreibung des dritten Begriffs.</dd>
</dl>
```

<div class="example-wrapper">
  <dl style="margin: 1rem 0;">
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 1</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Beschreibung des ersten Begriffs.</dd>
    
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 2</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Beschreibung des zweiten Begriffs.</dd>
    
    <dt style="margin-top: 1rem; font-weight: bold;">Begriff 3</dt>
    <dd style="margin-left: 1rem; margin-top: 0.5rem;">Beschreibung des dritten Begriffs.</dd>
  </dl>
</div>

## Variants

### Verschachtelte Listen

Listen können verschachtelt werden, um Hierarchien darzustellen.

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

<div class="example-wrapper">
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

### Listen im Content-Bereich

Im Content-Bereich haben Listen leicht angepasste Styles.

```html
<div class="content">
  <p>Einleitender Text...</p>
  
  <ul>
    <li>Erster Listenpunkt</li>
    <li>Zweiter Listenpunkt</li>
    <li>Dritter Listenpunkt</li>
  </ul>
  
  <p>Fortführender Text...</p>
</div>
```

<div class="example-wrapper">
  <div style="color: #111827; font-size: 1rem; line-height: 1.6;">
    <p style="margin-bottom: 1em;">Einleitender Text...</p>
    
    <ul style="margin-bottom: 1em; padding-left: 1.5em;">
      <li style="margin-bottom: 0.5em;">Erster Listenpunkt</li>
      <li style="margin-bottom: 0.5em;">Zweiter Listenpunkt</li>
      <li style="margin-bottom: 0.5em;">Dritter Listenpunkt</li>
    </ul>
    
    <p style="margin-bottom: 1em;">Fortführender Text...</p>
  </div>
</div>

### Spezial-Listen: Dateiliste

Ein spezielles Example für eine angepasste Liste ist die Dateiliste, die für die Anzeige von Dateien in Upload-Components verwendet wird.

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
      <div class="name">bild.jpg</div>
      <div class="size">3.5 MB</div>
    </div>
    <button class="remove">×</button>
  </li>
</ul>
```

<div class="example-wrapper">
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
        <div style="font-weight: 500;">bild.jpg</div>
        <div style="color: #6b7280; font-size: 0.75rem;">3.5 MB</div>
      </div>
      <button style="align-items: center; background-color: #e5e7eb; border: none; border-radius: 50%; color: #4b5563; cursor: pointer; display: flex; font-size: 1.25rem; height: 1.5rem; justify-content: center; line-height: 1; width: 1.5rem;">×</button>
    </li>
  </ul>
</div>

## Anpassung

Die Listen-Elemente können über CSS Variables angepasst werden:

```css
:root {
  /* Grundlegende Listen */
  --list-margin: 1rem 0;
  --list-padding-left: 2rem;
  --list-item-margin: 0.5rem 0;
  
  /* Beschreibungslisten */
  --dl-margin: 1rem 0;
  --dt-margin-top: 1rem;
  --dd-margin-left: 1rem;
  --dd-margin-top: 0.5rem;
  
  /* Content-Bereich Listen */
  --content-list-margin-bottom: 1em;
  --content-list-padding-left: 1.5em;
  --content-list-item-margin-bottom: 0.5em;
  
  /* Spezial-Listen: Dateiliste */
  --file-list-gap: var(--space-2);
  --file-list-margin: var(--space-3) 0;
  --file-item-bg: var(--color-gray-100);
  --file-item-border-radius: var(--radius-md);
  --file-item-gap: var(--space-3);
  --file-item-padding: var(--space-2) var(--space-3);
}
```

## Accessibility

- Verwende semantisch korrekte Listen-Elemente (`ul`, `ol`, `dl`) für Listen-Inhalte
- Stelle sicher, dass die Liste eine logische Struktur hat
- Entferne nicht die visuellen Marker (Bullet Points/Nummerierung), wenn sie für das Verständnis wichtig sind
- Biete ausreichenden Kontrast für Text und visuelle Marker
- Verwende ausreichenden Abstand zwischen Listenpunkten für bessere Lesbarkeit

## Browser-Kompatibilität

Das Listen-Element ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| Beschreibungslisten | ✅ | ✅ | ✅ | ✅ |
| Verschachtelte Listen | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | 
---
title: Schatten-Effekte
category: Effects
---

# Schatten-Effekte

Die Schatten-Effekte der Casoon UI Library bieten eine umfassende Sammlung von realistischen und stilisierten Schatten, die Ihren UI-Elementen räumliche Tiefe verleihen.

## Überblick

Die Schatten-Effekte sind leistungsoptimiert und in verschiedenen Größen und Stilen verfügbar. Sie können verwendet werden, um Elemente hervorzuheben, Hierarchien zu verdeutlichen und visuelle Tiefe zu schaffen.

## Installation

Importieren Sie das Schatten-Effekte-Modul über CSS:

```css
@import '@casoon/ui-lib/effects/shadows.css';
```

## Grundlegende Schatten

Die Library bietet eine Reihe von vordefinierten Schatten mit unterschiedlicher Intensität:

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-sm` | Kleiner, subtiler Schatten |
| `.shadow` | Standard-Schatten |
| `.shadow-md` | Mittlerer Schatten |
| `.shadow-lg` | Großer Schatten |
| `.shadow-xl` | Extra großer Schatten |
| `.shadow-2xl` | Doppelt extra großer Schatten |

```html
<div class="card shadow-sm">Karte mit kleinem Schatten</div>
<div class="card shadow">Karte mit Standard-Schatten</div>
<div class="card shadow-lg">Karte mit großem Schatten</div>
```

## Spezielle Schatten-Stile

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-inner` | Innerer Schatten (erscheint eingedrückt) |
| `.shadow-none` | Kein Schatten (nützlich zum Überschreiben) |

```html
<div class="card shadow-inner">Karte mit innerem Schatten</div>
```

## Gerichtete Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-top` | Schatten nur an der Oberseite |
| `.shadow-right` | Schatten nur an der rechten Seite |
| `.shadow-bottom` | Schatten nur an der Unterseite |
| `.shadow-left` | Schatten nur an der linken Seite |

```html
<div class="card shadow-top">Karte mit oberem Schatten</div>
<div class="card shadow-bottom">Karte mit unterem Schatten</div>
```

## Scharfe Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-sharp` | Scharfer Schatten mit minimaler Unschärfe |
| `.shadow-sharp-sm` | Kleiner scharfer Schatten |
| `.shadow-sharp-lg` | Großer scharfer Schatten |

```html
<div class="card shadow-sharp">Karte mit scharfem Schatten</div>
```

## Weiche Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-soft` | Weicher, diffuser Schatten |
| `.shadow-soft-sm` | Kleiner weicher Schatten |
| `.shadow-soft-lg` | Großer weicher Schatten |

```html
<div class="card shadow-soft">Karte mit weichem Schatten</div>
```

## Farbige Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-primary` | Schatten in der primären Farbe |
| `.shadow-secondary` | Schatten in der sekundären Farbe |
| `.shadow-accent` | Schatten in der Akzentfarbe |
| `.shadow-success` | Schatten in der Erfolgsfarbe |
| `.shadow-error` | Schatten in der Fehlerfarbe |
| `.shadow-warning` | Schatten in der Warnfarbe |
| `.shadow-info` | Schatten in der Infofarbe |

```html
<div class="card shadow-primary">Karte mit primärfarbigem Schatten</div>
<div class="card shadow-error">Karte mit Fehlerfarben-Schatten</div>
```

## Mehrfache Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-double` | Doppelter Schatten (nah und fern) |
| `.shadow-layered` | Mehrschichtiger Schatten für realistischen Look |
| `.shadow-inset-outline` | Kombiniert inneren Schatten mit Umriss |

```html
<div class="card shadow-double">Karte mit doppeltem Schatten</div>
<div class="card shadow-layered">Karte mit mehrschichtigem Schatten</div>
```

## Interaktive Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-hover` | Schatten erscheint bei Hover |
| `.shadow-hover-lg` | Großer Schatten erscheint bei Hover |
| `.shadow-active` | Schatten ändert sich bei aktivem Zustand |

```html
<div class="card shadow-hover">Karte mit Hover-Schatten</div>
<button class="button shadow-active">Button mit aktivem Schatten</button>
```

## Neomorphismus-Schatten

| Klasse | Beschreibung |
|--------|-------------|
| `.shadow-neo` | Neomorphismus-Schatten (erhaben) |
| `.shadow-neo-inset` | Neomorphismus-Schatten (eingedrückt) |
| `.shadow-neo-flat` | Flacher Neomorphismus-Schatten |

```html
<div class="card shadow-neo">Neomorphismus-Karte</div>
<div class="card shadow-neo-inset">Eingedrückte Neomorphismus-Karte</div>
```

## Anpassung

Die Schatten-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  
  --shadow-color: 0deg 0% 0%;
  --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
                          0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.1),
                          1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.1);
  --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.11),
                             0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.11),
                             2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.11),
                             5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.11);
  --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
                           1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
                           2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
                           4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
                           7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
                           11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
                           17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
                           25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);
}
```

## Beispiele

### Karten mit verschiedenen Schatten

```html
<div class="card-container">
  <div class="card shadow-sm">
    <h3>Basis-Karte</h3>
    <p>Mit kleinem Schatten</p>
  </div>
  
  <div class="card shadow-lg">
    <h3>Hervorgehobene Karte</h3>
    <p>Mit großem Schatten</p>
  </div>
  
  <div class="card shadow-neo">
    <h3>Neomorphismus-Karte</h3>
    <p>Mit Neo-Schatten</p>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
  }
  
  .card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
    width: 200px;
  }
</style>
```

### Interaktive Schaltfläche mit Schatten

```html
<button class="button shadow-hover shadow-active">
  Interaktive Schaltfläche
</button>

<style>
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    transition: all 0.2s ease;
  }
</style>
```

## Leistungsoptimierung

Die Schatten-Effekte sind für optimale Leistung konzipiert:

1. Verwendung von `box-shadow` anstelle von mehreren DOM-Elementen
2. Vermeidung von zu komplexen Schatten auf mobilen Geräten
3. Selektive Verwendung von `will-change` für kritische Animationen

## Browserunterstützung

Die Schatten-Effekte werden von allen modernen Browsern unterstützt. Für ältere Browser wird ein Fallback mit einfacheren Schatten bereitgestellt. 
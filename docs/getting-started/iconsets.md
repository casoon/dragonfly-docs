---
title: Icon-System
category: Getting Started
---

# Icon-System

Das Casoon UI Library Icon-System bietet eine umfassende Lösung für die Integration und Verwendung von Icons in Ihrer Anwendung.

## CSS-Import

Um das komplette Casoon UI Icon-System zu nutzen, importieren Sie einfach die `core.css` Datei:

```css
@import "@casoon/ui-lib/core.css";
```

Dadurch wird automatisch das Layer-System geladen, welches auch den `icons`-Layer und alle Icon-Sets über `icons.css` enthält.

## Layer-Struktur

Die Icons sind Teil des zentralen Layer-Systems und werden unter dem `icons`-Layer definiert:

```css
@layer reset,
       tokens,
       custom-properties,
       ...
       typography,
       utilities,
       smooth-scroll,
       accessibility,
       icons,           /* Icon-System */
       animations,
       effects,
       themes;
```

## Überblick

Das Icon-System basiert auf SVG-Icons und bietet verschiedene Implementierungsmethoden:

1. **Inline SVG-Icons** - die empfohlene Methode mit der besten Leistung und Anpassbarkeit
2. **Sprite-basierte Icons** - für effiziente Wiederverwendung über ein zentrales Sprite-Sheet
3. **Icon-Komponenten** - für einfache Integration in Framework-Projekte

## Einrichtung

### Methode 1: Komplettes Icon-System über core.css

Die einfachste Methode, alle Icon-Sets zu importieren:

```css
@import "@casoon/ui-lib/core.css";
```

### Methode 2: Nur bestimmte Icon-Sets importieren

Importieren Sie nur die benötigten Icon-Sets:

```css
/* Basis importieren */
@import "@casoon/ui-lib/icons/base.css";

/* Gewünschte Icon-Sets hinzufügen */
@import "@casoon/ui-lib/icons/feather.css";
@import "@casoon/ui-lib/icons/heroicons.css";
```

## Verfügbare Icon-Sets

Casoon UI Library bietet eine Vielzahl von Icon-Sets:

| Icon-Set | Beschreibung | Import-Pfad |
|----------|--------------|-------------|
| Feather | Einfache, klare Icons | `@casoon/ui-lib/icons/feather.css` |
| Heroicons | Moderne Icons im Apple-Stil | `@casoon/ui-lib/icons/heroicons.css` |
| Phosphor | Flexible, konsistente Icons | `@casoon/ui-lib/icons/phosphor.css` |
| Bootstrap | Icons im Bootstrap-Stil | `@casoon/ui-lib/icons/bootstrap.css` |
| Remix | Vielseitige Open-Source Icons | `@casoon/ui-lib/icons/remix.css` |
| MDI (Material) | Google Material Design Icons | `@casoon/ui-lib/icons/mdi.css` |
| Font Awesome | Beliebte Icon-Sammlung | `@casoon/ui-lib/icons/fontawesome.css` |
| Lucide | Fortführung der Feather Icons | `@casoon/ui-lib/icons/lucide.css` |
| Tabler | Über 3000 pixelperfekte Icons | `@casoon/ui-lib/icons/tabler.css` |

## Icon-Verwendung

### Standardmethode mit Icon-Klassen

Das neue Icon-System verwendet einheitliche Klassennamen für alle Icon-Sets. Beispiel für Feather Icons:

```html
<span class="feather-home"></span>
<span class="feather-settings"></span>
<span class="feather-user"></span>
```

Für Heroicons:

```html
<span class="heroicon-home"></span>
<span class="heroicon-cog"></span>
<span class="heroicon-user"></span>
```

### Inline SVG-Icons (traditionell)

```html
<div class="icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
</div>
```

### SVG-Sprite Referenzierung

```html
<div class="icon">
  <svg>
    <use xlink:href="#icon-plus"></use>
  </svg>
</div>
```

### Icon-Größen

Das Icon-System bietet vordefinierte Größen:

```html
<div class="icon icon--xs"><!-- Extra klein (16px) --></div>
<div class="icon icon--sm"><!-- Klein (20px) --></div>
<div class="icon"><!-- Standard (24px) --></div>
<div class="icon icon--md"><!-- Mittel (32px) --></div>
<div class="icon icon--lg"><!-- Groß (40px) --></div>
<div class="icon icon--xl"><!-- Extra groß (48px) --></div>
```

### Icon-Farben

Icons erben standardmäßig die Textfarbe ihres Elternelements (`currentColor`):

```html
<div class="text-primary">
  <div class="icon"><!-- Icon übernimmt die primäre Textfarbe --></div>
</div>

<div class="icon" style="color: var(--color-accent)">
  <!-- Direktes Setzen einer Farbe -->
</div>
```

### Farbvariationen über CSS-Klassen

```html
<div class="icon icon--primary"><!-- Primärfarbe --></div>
<div class="icon icon--secondary"><!-- Sekundärfarbe --></div>
<div class="icon icon--accent"><!-- Akzentfarbe --></div>
<div class="icon icon--success"><!-- Erfolgsfarbe --></div>
<div class="icon icon--warning"><!-- Warnfarbe --></div>
<div class="icon icon--error"><!-- Fehlerfarbe --></div>
<div class="icon icon--info"><!-- Infofarbe --></div>
<div class="icon icon--light"><!-- Helle Farbe --></div>
<div class="icon icon--dark"><!-- Dunkle Farbe --></div>
```

## Icon mit Text kombinieren

### Horizontale Anordnung

```html
<div class="flex flex--items-center flex--gap-2">
  <div class="icon">
    <svg><!-- Icon-Inhalt --></svg>
  </div>
  <span>Beschreibungstext</span>
</div>
```

### Icon-Button

```html
<button class="btn btn--primary">
  <span class="flex flex--items-center flex--gap-2">
    <div class="icon">
      <svg><!-- Icon-Inhalt --></svg>
    </div>
    <span>Button mit Icon</span>
  </span>
</button>
```

## Icon-Anpassungen

### Icon-Ausrichtung

```html
<div class="flex flex--items-center flex--justify-center" style="height: 100px;">
  <div class="icon"><!-- Zentriertes Icon --></div>
</div>
```

### Rotation und Spiegelung

```html
<div class="icon icon--rotate-90"><!-- 90° im Uhrzeigersinn gedreht --></div>
<div class="icon icon--rotate-180"><!-- 180° gedreht --></div>
<div class="icon icon--rotate-270"><!-- 270° im Uhrzeigersinn gedreht --></div>
<div class="icon icon--flip-h"><!-- Horizontal gespiegelt --></div>
<div class="icon icon--flip-v"><!-- Vertikal gespiegelt --></div>
```

### Animationen

```html
<div class="icon icon--pulse"><!-- Pulsierendes Icon --></div>
<div class="icon icon--spin"><!-- Rotierendes Icon --></div>
<div class="icon icon--bounce"><!-- Hüpfendes Icon --></div>
```

## Barrierefreiheit

Für bessere Barrierefreiheit sollten Icons, die funktionale Bedeutung haben, entsprechende Beschreibungen enthalten:

```html
<button class="btn btn--icon" aria-label="Löschen">
  <div class="icon">
    <svg aria-hidden="true"><!-- Lösch-Icon --></svg>
  </div>
</button>
```

Oder bei Icons mit begleitendem Text:

```html
<button class="btn">
  <div class="icon" aria-hidden="true"><!-- Icon ist dekorativ --></div>
  <span>Speichern</span>
</button>
```

## Eigene Icon-Sets einbinden

Sie können eigene Icon-Sets erstellen und in das Layer-System integrieren:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Eigenes Icon-Set zum icons-Layer hinzufügen */
@layer icons {
  /* Eigene Icon-Definitionen */
  .custom-icon-home {
    background-image: url('path/to/home.svg');
    /* Weitere Stile */
  }
  
  .custom-icon-settings {
    background-image: url('path/to/settings.svg');
    /* Weitere Stile */
  }
}
```

## Best Practices für Icons

- **Verwenden Sie semantische Icons** - Wählen Sie Icons, die intuitiv für ihre Funktion sind
- **Stellen Sie Barrierefreiheit sicher** - Fügen Sie aria-label für funktionale Icons hinzu
- **Halten Sie die Größen konsistent** - Verwenden Sie die vordefinierten Größenklassen
- **Beachten Sie Kontrast und Farbgebung** - Stellen Sie sicher, dass Icons gut sichtbar sind
- **Kombinieren Sie Text mit Icons** - Bei wichtigen Aktionen Text und Icons zusammen verwenden

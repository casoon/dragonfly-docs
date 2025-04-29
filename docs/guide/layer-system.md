---
title: Layer-System
category: Guide
---

# Layer-System

Das CSS Layer-System der Casoon UI Library verwendet moderne CSS-Features wie `@layer`, um Spezifität und Kaskadierung von Stilen zu kontrollieren. Dies schafft ein vorhersehbares und wartbares Styling-System.

## Struktur des Layer-Systems

Die Layer sind in `layers.css` in einer klaren Hierarchie definiert:

```css
@layer reset,                /* Browser-Reset, Normalisierung */
       tokens,               /* Design-Tokens, Variablen */
       custom-properties,    /* Registrierte CSS-Eigenschaften */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Logische Eigenschaften für Bidirektionalität */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -variationen */
       layout,               /* Layout-Grundlagen */
       typography,           /* Typografie-System */
       utilities,            /* Utility-Klassen */
       smooth-scroll,        /* Scroll-Verhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       animations,           /* Animationen */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

Die Reihenfolge ist entscheidend: Layer, die früher in der Liste erscheinen, haben eine niedrigere Spezifität als spätere Layer.

## Zentralisierte Layer-Verwaltung

Die Layer-Struktur ist zentralisiert:

1. Die Layer-Definitionen befinden sich in der `layers.css`-Datei
2. Alle Layer-Imports sind in dieser Datei integriert
3. Diese Datei wird aus der Hauptdatei `core.css` importiert

Dieser Ansatz bietet mehrere Vorteile:
- Klare Trennung von Zuständigkeiten
- Einfacheres Debugging von Spezifitätsproblemen
- Leichtere Erweiterbarkeit durch neue Layer
- Bessere Dokumentation der Layer-Struktur

## Layer-Verwendung in eigenen Projekten

Um in Ihrem Projekt von der Layer-Struktur zu profitieren:

### 1. Standard-Verwendung

Importieren Sie einfach die `core.css`-Datei, die automatisch das komplette Layer-System lädt:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Erweiterte Verwendung mit eigenen Stilen

Wenn Sie eigene Stile hinzufügen möchten, verwenden Sie den entsprechenden Layer:

```css
/* Ihre eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Fügen Sie Ihre eigenen Stile zum passenden Layer hinzu */
@layer utilities {
  .my-custom-utility {
    property: value;
  }
}

/* Oder erstellen Sie einen neuen Layer mit höherer Spezifität */
@layer my-custom-layer {
  .my-custom-class {
    property: value;
  }
}
```

### 3. Selektive Nutzung von Layern

Sie können auch nur bestimmte Layer importieren:

```css
/* Nur bestimmte Layer verwenden */
@import "@casoon/ui-lib/layers.css";  /* Die Layer-Struktur */
@import "@casoon/ui-lib/layers/reset.css";
@import "@casoon/ui-lib/layers/tokens.css";
@import "@casoon/ui-lib/layers/utilities.css";
```

## Layer-Beschreibungen

Jeder Layer hat eine spezifische Rolle im Designsystem:

- **reset**: Browser-Standardstile zurücksetzen
- **tokens**: Design-Token-Variablen (Farben, Abstände, Typografie)
- **custom-properties**: Mit @property registrierte CSS-Eigenschaften
- **core**: Allgemeine Grundfunktionen
- **logical-properties**: Logische Eigenschaften für bidirektionalen Text
- **colors**: Farbsystem und Farbklassen
- **color-mix**: Farbmischungen und -variationen
- **layout**: Layout-Grundlagen (Container, Grid, etc.)
- **typography**: Typografie-System
- **utilities**: Utility-Klassen für schnelles Styling
- **smooth-scroll**: Scroll-Verhalten und -Effekte
- **accessibility**: Barrierefreiheits-Verbesserungen
- **icons**: Icon-System
- **animations**: Animationen
- **effects**: Visuelle Effekte
- **themes**: Theming-System

## Best Practices

1. **Verwenden Sie die passenden Layer**: Ordnen Sie Stile dem semantisch korrekten Layer zu.
2. **Beachten Sie die Spezifität**: Je weiter unten in der Liste, desto höher die Spezifität.
3. **Minimieren Sie !important**: Das Layer-System sollte die Notwendigkeit von !important reduzieren.
4. **Dokumentieren Sie Layer-Nutzung**: Machen Sie klar, welche Layer Sie in Ihrem Projekt verwenden.

## Debugging

Wenn Stile nicht wie erwartet angewendet werden:

1. Überprüfen Sie die Browserkonsole (DevTools) auf Fehler
2. Verwenden Sie den Inspector, um zu sehen, welche Stile angewendet werden und aus welchem Layer
3. Prüfen Sie, ob Ihre Stile im richtigen Layer definiert sind
4. Beachten Sie, dass Stile in später definierten Layern Vorrang haben

## Migration von älteren Versionen

Wenn Sie von einer älteren Version des UI-Systems aktualisieren:

1. Ersetzen Sie Importe von älteren CSS-Dateien durch den Import von `core.css`
2. Prüfen Sie, ob Ihre benutzerdefinierten Stile mit der neuen Layer-Struktur kompatibel sind
3. Ordnen Sie Ihre benutzerdefinierten Stile den entsprechenden Layern zu
4. Testen Sie gründlich auf Styling-Probleme 
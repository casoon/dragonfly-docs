---
title: Modul-System
category: Guide
---

# Modul-System

Das Casoon UI Library Modul-System organisiert Komponenten in eigenständige, unabhängige CSS-Module, die über eine zentrale Steuerung geladen werden.

## Struktur des Modul-Systems

Die Module sind in der `modules.css` Datei organisiert:

```css
/**
 * Modules CSS
 *
 * Zentrale Datei zur Organisation und Einbindung aller Module.
 * Jedes Modul wird in einem eigenen Layer definiert, um Konflikte zu vermeiden.
 */

/* Alert Modul */
@import url('./modules/alert.module.css') layer(module-alert);

/* Avatar Modul */
@import url('./modules/avatar.module.css') layer(module-avatar);

/* Badge Modul */
@import url('./modules/badge.module.css') layer(module-badge);

/* Weitere Module... */
```

Jedes Modul wird in einem eigenen Layer importiert, was folgende Vorteile bietet:
- Vermeidung von Namenskonflikten
- Klare Abgrenzung von Zuständigkeiten
- Unabhängige Modifikation einzelner Module
- Verbesserte Wartbarkeit durch Modularität

## Verfügbare Module

Die Casoon UI Library enthält folgende Module:

- **alert** - Feedback- und Hinweismeldungen
- **avatar** - Benutzerbilder und -darstellungen
- **badge** - Statusanzeigen und kleine Kennzeichnungen
- **blog** - Layoutelemente für Blogbeiträge
- **button** - Interaktive Schaltflächen
- **card** - Container für zusammengehörige Inhalte
- **checkbox** - Mehrfachauswahl-Elemente
- **chip** - Kompakte Informationselemente
- **code** - Darstellung von Codeblöcken
- **file** - Datei-Upload-Komponenten
- **footer** - Seitenfußbereich
- **form** - Formularelemente und -layouts
- **hamburger** - Mobile Menüsteuerung
- **header** - Seitenkopfbereich
- **input** - Texteingabefelder
- **input-group** - Gruppierte Eingabefelder
- **modal** - Dialoge und Overlays
- **notification** - Benachrichtigungssystem
- **progress** - Fortschrittsanzeigen
- **radio** - Einfachauswahl-Elemente
- **select** - Auswahlmenüs
- **sidebar** - Seitennavigation
- **skeleton** - Ladeplatzhalter
- **slider** - Werteregler
- **spinner** - Ladeanimationen
- **switch** - Ein/Aus-Schalter
- **table** - Tabellenkomponenten
- **tabs** - Registerkartennavigation
- **textarea** - Mehrzeilige Textfelder
- **toast** - Temporäre Benachrichtigungen
- **tooltip** - Hinweistexte
- **widget** - Flexible Inhaltscontainer
- **wizard** - Mehrstufige Prozesse

## Modul-Verwendung in eigenen Projekten

Um Module in Ihrem Projekt zu nutzen:

### 1. Vollständige Einbindung aller Module

Importieren Sie die core.css, die automatisch alle Module lädt:

```css
@import "@casoon/ui-lib/core.css";
```

### 2. Selektive Einbindung einzelner Module

Sie können auch nur ausgewählte Module importieren:

```css
/* Basis-Layer-System importieren */
@import "@casoon/ui-lib/layers.css";

/* Nur benötigte Module importieren */
@import "@casoon/ui-lib/modules/button.module.css" layer(module-button);
@import "@casoon/ui-lib/modules/input.module.css" layer(module-input);
@import "@casoon/ui-lib/modules/card.module.css" layer(module-card);
```

## Anpassung von Modulen

### Überschreiben von Modul-Stilen

Sie können Modul-Stile anpassen, indem Sie den entsprechenden Layer verwenden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Anpassung der Button-Komponente */
@layer module-button {
  .btn--primary {
    background-color: var(--color-brand);
    border-radius: var(--radius-lg);
  }
}
```

### Erweiterung von Modulen

Bestehende Module können erweitert werden:

```css
/* Eigene CSS-Datei */
@import "@casoon/ui-lib/core.css";

/* Erweiterung der Card-Komponente */
@layer module-card {
  .card--gradient {
    background: linear-gradient(to right, var(--color-primary), var(--color-accent));
    color: var(--color-on-primary);
  }
}
```

## Modul-Architektur

Jedes Modul folgt einer konsistenten Architektur:

1. **Basisklasse** - Grundlegende Funktionalität (`.btn`, `.card`, etc.)
2. **Varianten** - Funktionale Varianten (`.btn--primary`, `.card--interactive`)
3. **Größen** - Größenvarianten (`.btn--sm`, `.btn--lg`)
4. **Zustände** - Statusklassen (`.btn--disabled`, `.card--active`)
5. **Modifikatoren** - Zusätzliche Anpassungen (`.btn--rounded`, `.card--shadow`)

## Best Practices

- **Modularisierung nutzen** - Verwenden Sie nur die Module, die Sie benötigen
- **Konsistente Namenskonventionen** - Folgen Sie dem Format `[basisklasse]--[modifikator]`
- **Layer respektieren** - Anpassungen innerhalb des entsprechenden Modul-Layers vornehmen
- **Modul-Kombination** - Mehrere Module gemeinsam für komplexe UI-Elemente verwenden
- **Themability beachten** - Tokens verwenden, um Module theming-freundlich zu gestalten 
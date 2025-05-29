---
title: UI System
category: UI
---

# UI System

Das UI System der Casoon UI Library bietet eine umfassende Sammlung von Elementen und Komponenten für die Erstellung moderner, zugänglicher und ansprechender Benutzeroberflächen.

## Übersicht

Das UI System ist in zwei Hauptkategorien unterteilt:

- **Elements**: Grundlegende UI-Bausteine wie Buttons, Inputs, Avatars und Badges
- **Components**: Komplexere Komponenten, die aus mehreren Elementen bestehen, wie Cards, Dialogs, Forms und Navigation

## Philosophie

Das UI System der Casoon UI Library basiert auf folgenden Prinzipien:

1. **Modularität**: Unabhängige, wiederverwendbare Bausteine
2. **Konsistenz**: Einheitliches Erscheinungsbild
3. **Zugänglichkeit**: Einhaltung von WCAG-Richtlinien
4. **Anpassbarkeit**: Flexibilität für individuelle Anforderungen
5. **Benutzerfreundlichkeit**: Fokus auf intuitive Bedienung

## Elements vs. Components

### Elements

Elemente sind die grundlegenden Bausteine der Benutzeroberfläche. Sie sind in der Regel eigenständig und erfüllen eine spezifische Funktion:

- Button
- Input
- Checkbox
- Radio
- Select
- Slider
- Switch
- Avatar
- Badge
- Chip
- Tooltip
- etc.

[Zu den Elements](/ui/elements/)

### Components

Komponenten sind komplexere UI-Strukturen, die aus mehreren Elementen bestehen und fortgeschrittenere Funktionalität bieten:

- Action Bar
- Alert
- Back to Top
- Breadcrumbs
- Card
- Dialog
- Drawer
- Form
- Modal
- Pagination
- Table
- Tabs
- etc.

[Zu den Components](/ui/components/)

## Verwendung

Das UI System kann als Ganzes oder modular eingebunden werden:

```css
/* Gesamtes UI-System */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/ui.css';

/* Oder nur einzelne Komponenten */
@import '@casoon/ui-lib/ui/elements/button.css';
@import '@casoon/ui-lib/ui/components/card.css';
```

## Anpassbarkeit

Alle UI-Elemente und -Komponenten können über CSS-Variablen und Modifikatoren angepasst werden:

```css
:root {
  --button-radius: 0.5rem;
  --button-primary-bg: var(--color-brand-500);
}
``` 
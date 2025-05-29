---
title: Select Element
outline: deep
---


# Select

Das Select-Element bietet Dropdown-Auswahlmenüs für Formulare und ermöglicht Benutzern, eine Option aus einer vordefinierten Liste auszuwählen. Es ist ein wichtiges Element für Formulare und Benutzereinstellungen.

## Installation

Das Select-Element ist Teil der Casoon UI Library.

```bash
# Installation der gesamten Bibliothek
npm install @casoon/ui-lib
```

## Import

```css
/* Import aller UI-Elemente */
@import '@casoon/ui-lib/ui.css';

/* Oder nur die Select-Komponente */
@import '@casoon/ui-lib/components/select.css';
```

## Grundlegende Verwendung

```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

## Varianten

### Größenvarianten

Es gibt drei Größenvarianten für das Select-Element: klein, mittel (Standard) und groß.

```html
<select class="select sm">
  <option>Klein</option>
</select>

<select class="select">
  <option>Mittel (Standard)</option>
</select>

<select class="select lg">
  <option>Groß</option>
</select>
```

<div class="example-wrapper">
  <div style="margin-bottom: 1rem;">
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 0.875rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 0.875rem; padding: 0.25rem 0.5rem; width: 100%;">
      <option>Klein</option>
    </select>
  </div>
  <div style="margin-bottom: 1rem;">
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
      <option>Mittel (Standard)</option>
    </select>
  </div>
  <div>
    <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 1rem center; background-repeat: no-repeat; background-size: 1.25rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1.125rem; padding: 0.75rem 1rem; width: 100%;">
      <option>Groß</option>
    </select>
  </div>
</div>

### Zustandsvarianten

#### Deaktiviert

```html
<select class="select" disabled>
  <option>Deaktiviert</option>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: #f3f4f6; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #6b7280; cursor: not-allowed; display: block; font-size: 1rem; opacity: 70%; padding: 0.5rem 0.75rem; width: 100%;" disabled>
    <option>Deaktiviert</option>
  </select>
</div>

#### Mit Fehler

```html
<select class="select error">
  <option>Mit Fehler</option>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: #fef2f2; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #ef4444; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>Mit Fehler</option>
  </select>
</div>

#### Mit Erfolg

```html
<select class="select success">
  <option>Erfolgreich</option>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: #f0fdf4; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #10b981; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <option>Erfolgreich</option>
  </select>
</div>

### Mit Label (über Form-Komponente)

```html
<div class="form-group">
  <label class="form-label" for="country">Land</label>
  <select class="select" id="country">
    <option>Deutschland</option>
    <option>Österreich</option>
    <option>Schweiz</option>
  </select>
</div>
```

<div class="example-wrapper">
  <div style="margin-bottom: 1rem;">
    <label style="display: block; font-weight: 500; margin-bottom: 0.25rem;" for="country">Land</label>
    <select id="country" style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
      <option>Deutschland</option>
      <option>Österreich</option>
      <option>Schweiz</option>
    </select>
  </div>
</div>

### Mehrfachauswahl

```html
<select class="select" multiple>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: white; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.25rem; width: 100%;" multiple size="3">
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 1</option>
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 2</option>
    <option style="border-radius: 0.125rem; padding: 0.25rem 0.5rem;">Option 3</option>
  </select>
</div>

### Mit Optionsgruppen

```html
<select class="select">
  <optgroup label="Gruppe 1">
    <option>Option 1.1</option>
    <option>Option 1.2</option>
  </optgroup>
  <optgroup label="Gruppe 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
</select>
```

<div class="example-wrapper">
  <select style="appearance: none; background-color: white; background-image: url('data:image/svg+xml,%3Csvg viewBox=%270 0 20 20%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E'); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1rem; border: 1px solid #d1d5db; border-radius: 0.375rem; color: #111827; cursor: pointer; display: block; font-size: 1rem; padding: 0.5rem 0.75rem; width: 100%;">
    <optgroup label="Gruppe 1" style="color: #374151; font-weight: 500;">
      <option>Option 1.1</option>
      <option>Option 1.2</option>
    </optgroup>
    <optgroup label="Gruppe 2" style="color: #374151; font-weight: 500;">
      <option>Option 2.1</option>
      <option>Option 2.2</option>
    </optgroup>
  </select>
</div>

## Anpassung

Das Select-Element kann über CSS-Variablen angepasst werden:

```css
:root {
  --color-white: #ffffff;        /* Hintergrundfarbe */
  --color-gray-100: #f3f4f6;     /* Deaktivierter Hintergrund */
  --color-gray-300: #d1d5db;     /* Rahmenfarbe */
  --color-gray-500: #6b7280;     /* Deaktivierte Textfarbe */
  --color-gray-700: #374151;     /* Optgroup Textfarbe */
  --color-gray-900: #111827;     /* Textfarbe */
  --color-primary: #3b82f6;      /* Fokus-Rahmen & Hervorhebung */
  --color-error: #ef4444;        /* Fehler-Zustandsfarbe */
  --color-success: #10b981;      /* Erfolgs-Zustandsfarbe */
  --font-size-sm: 0.875rem;      /* Kleine Textgröße */
  --font-size-base: 1rem;        /* Standard-Textgröße */
  --font-size-lg: 1.125rem;      /* Große Textgröße */
  --font-weight-medium: 500;     /* Optgroup Schriftgewicht */
  --radius-sm: 0.125rem;         /* Mehrfachauswahl-Optionen Radius */
  --radius-md: 0.375rem;         /* Select-Rahmenradius */
  --space-1: 0.25rem;            /* Kleinster Abstand */
  --space-2: 0.5rem;             /* Kleiner Abstand */
  --space-3: 0.75rem;            /* Mittlerer Abstand */
  --space-4: 1rem;               /* Großer Abstand */
  --transition-fast: 0.15s ease; /* Übergangsgeschwindigkeit */
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein sichtbares Label (mit einem `<label>`-Element), das mit dem Select-Element verknüpft ist
- Stellen Sie einen ausreichenden Farbkontrast für Text und Rahmen sicher
- Bieten Sie klare Anweisungen für Mehrfachauswahl-Eingaben
- Verwenden Sie Optionsgruppen, um verwandte Optionen in langen Listen zu organisieren
- Fügen Sie bei Bedarf eine Standard- oder Platzhalter-Option hinzu
- Stellen Sie sicher, dass die Komponente mit der Tastatur bedienbar ist

## Bewährte Praktiken

- Verwenden Sie Select-Elemente, um eine (oder mehrere) Optionen aus einer Liste auszuwählen
- Bieten Sie aussagekräftige Option-Texte an, die die Auswahl eindeutig beschreiben
- Strukturieren Sie lange Listen mit Optionsgruppen für bessere Übersichtlichkeit
- Verwenden Sie angemessene Größen basierend auf dem Kontext und der Wichtigkeit des Elements
- Berücksichtigen Sie die mobile Nutzung bei der Gestaltung Ihrer Select-Elemente

## Browser-Kompatibilität

Das Select-Element ist mit allen modernen Browsern kompatibel.

| Funktion | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| Grundlegende Funktionalität | ✅ | ✅ | ✅ | ✅ |
| Anpassung des Erscheinungsbildes | ✅ | ✅ | ✅ | ✅ |
| Mehrfachauswahl | ✅ | ✅ | ✅ | ✅ |
| Optionsgruppen | ✅ | ✅ | ✅ | ✅ |
| CSS-Variablen | 49+ | 31+ | 9.1+ | 15+ | 
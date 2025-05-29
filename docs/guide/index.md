# Guide for fortgeschrittene Components

in diesem area finden them detaillierte Anleitungen and Best Practices for fortgeschrittene Components and layouts the Casoon UI Library.

## Verfugbare Guides

- [grid system](./grid-system.md) - Lernen them, how them the flexible grid system for responsive layouts einsetzen
- [Formsystem](./forms-system.md) - Entdecken them the umfassenden Moglichkeiten des Formsystems

## modules and Components

the Casoon UI Library bietet a umfangreiche Sammlung from Modulen, the them je after Bedarf in her Projekt integrieren can. Im Folgenden finden them einen Uberblick over the wichtigsten modules and ihre jeweiligen Usagesbereiche.

## Abhangigkeiten between Modulen

**important:** the meisten modules the casoon-ui-lib setzen voraus, that `core.css` bereits geladen ist. these file enthalt grundlegende Definitionen, variables and Utility-classes, the from anderen Modulen verwendet become.

```css
/* Immer zuerst core.css load */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* a theme wird empfohlen */

/* Erst afterwards spezifische modules */
@import '@casoon/ui-lib/layout.css';
@import '@casoon/ui-lib/forms.css';
@import '@casoon/ui-lib/components/button.css';
/* usw. */
```

### Importreihenfolge

the folgende Reihenfolge wird for Imports empfohlen:

1. **Core**: Enthalt grundlegende Layer and wird immer zuerst geladen
   ```css
   @import '@casoon/ui-lib/core.css';
   ```

2. **theme**: Mindestens a theme sollte geladen become
   ```css
   @import '@casoon/ui-lib/themes/day.css';
   ```

3. **Optionale Layer**: extend the Core-Funktionalitat
   ```css
   @import '@casoon/ui-lib/forms.css';
   @import '@casoon/ui-lib/layout.css';
   /* additional Layer after Bedarf */
   ```

4. **modules**: Spezifische Components after Bedarf
   ```css
   @import '@casoon/ui-lib/components/button.css';
   @import '@casoon/ui-lib/components/input.css';
   /* additional modules after Bedarf */
   ```

these Reihenfolge stellt sicher, that all Abhangigkeiten korrekt aufgelost become.

### layout-modules

| modules | Description | Import | Abhangigkeiten |
|-------|-------------|--------|---------------|
| layout | Grundlegende layout-Strukturen and containers | `@import '@casoon/ui-lib/layout.css';` | core.css |
| grid | Flexibles grid system for responsive layouts | Enthalten in layout.css | core.css, layout.css |
| containers | Vordefinierte containers with responsiven Breiten | Enthalten in layout.css | core.css, layout.css |

### Form-modules

| modules | Description | Import | Abhangigkeiten |
|-------|-------------|--------|---------------|
| Forms | Allgemeine Form-Styles | `@import '@casoon/ui-lib/forms.css';` | core.css |
| Input | Text-Inputer | `@import '@casoon/ui-lib/components/input.css';` | core.css, forms.css |
| Textarea | textareas | `@import '@casoon/ui-lib/components/textarea.css';` | core.css, forms.css |
| Select | Checkboxer and Dropdowns | `@import '@casoon/ui-lib/components/select.css';` | core.css, forms.css |
| checkbox | checkboxes and Auswahloptionen | `@import '@casoon/ui-lib/components/checkbox.css';` | core.css, forms.css |
| Radio | Radio-buttons | `@import '@casoon/ui-lib/components/radio.css';` | core.css, forms.css |
| Switch | Toggle-Switch | `@import '@casoon/ui-lib/components/switch.css';` | core.css, forms.css |
| File | file-Upload-elements | `@import '@casoon/ui-lib/components/file.css';` | core.css, forms.css |

### Integration with dem design-system

the in diesen Guides beschriebenen Components sind Teil des gesamten design-Systems and integrieren oneself nahtlos with anderen Components the Casoon UI Library. note folgende Prinzipien for a optimale Integration:

1. **Konsistente Usage from CSS Variables**
   - use them vorhandene variables for Colors, Abstande and Typography
   - create them at Bedarf neue variables after dem bestehenden pattern

2. **responsive design**
   - use them the grid system for responsive layouts
   - use them the vordefinierten Breakpoints for konsistente Medienabfragen

3. **Accessibility**
   - ensure them on ausreichenden Kontrast and semantisches Markup
   - use them ARIA-attributes for verbesserte Accessibility

4. **Modulare Integration**
   - import them only the modules, the them tatsachlich benotigen
   - combine them modules to komplexeren Components after Bedarf

## Best Practices

### Optimale Performance

- Vermeiden them ubermassige Verschachtelung from Selektoren
- use them the CSS-Strukturen the Bibliothek effizient
- ensure them on the Dateigrosse through selektive Imports

### Codequalitat

- Halten them oneself on the BEM-Namenskonventionen (Block__Element--Modifier)
- Gruppieren them zusammengehorige Styles
- Dokumentieren them komplexe or ungewohnliche Implementierungen

### responsive design

- Testen them Ihre Components on verschiedenen Bildschirmgrossen
- use them flexible Einheiten (rem, em, %) instead of fester Pixel-values
- use them the responsiven Utility-classes the Casoon UI Library

## Haufige Fragen

### how kombiniere I grid and Forme?

the grid system and the Formkomponenten lassen oneself ideal combine, um komplexe, responsive Formlayouts to create. a typisches Example ist the Aufteilung from Formfeldern in several columns:

```html
<form class="form">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="form-group">
      <label for="firstname" class="form-label">Vorname</label>
      <input type="text" id="firstname" class="form-input">
    </div>
    <div class="form-group">
      <label for="lastname" class="form-label">Nachname</label>
      <input type="text" id="lastname" class="form-input">
    </div>
  </div>
  <!-- additional Formfelder -->
</form>
```

### Kann I own CSS Variables define?

Ja, You can own CSS Variables define or bestehende overwrite, um the design-system on Ihre Bedurfnisse anzupassen:

```css
:root {
  /* overwrite einer bestehenden variable */
  --form-input-border-radius: 8px;
  
  /* define einer neuen variable */
  --custom-component-padding: 1.5rem;
}
```

### what passiert, if I Abhangigkeiten not in the richtigen Reihenfolge lade?

if the CSS-Dateien not in the korrekten Reihenfolge geladen become, can verschiedene Probleme auftreten:

1. **Fehlende Styles:** Components erscheinen unstyled or only teilweise gestylt
2. **Fehlerhafte layouts:** grid Systeme funktionieren not korrekt
3. **CSS Variables not verfugbar:** Referenzen on variables how `var(--color-primary)` become not aufgelost
4. **Utility-classes not verfugbar:** classes how `flex`, `grid` or `hidden` funktionieren not

**Example for a Problem:**
```css
/* FALSCH: modules before core.css load */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/core.css';
```

Hier wurde the button modules vielleicht Referenzen on variables or Utility-classes enthalten, the erst in core.css definiert become, what to fehlerhafter Display fuhrt.

**Richtige Losung:**
```css
/* RICHTIG: core.css zuerst load */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/components/button.css';
```

### Kann I einzelne Components without core.css use?

Nein, beinahe all Components the casoon-ui-lib setzen voraus, that `core.css` geladen ist. self if a Component scheinbar unabhangig funktioniert, ist it very wahrscheinlich, that them on variables, Utility-classes or grundlegende Styles aus `core.css` zuruckgreift.

If you only einzelne Components benotigen, load them despite that immer zuerst `core.css` and dann the spezifischen modules, the them use want to. the modulare Aufbau the Bibliothek stellt sicher, that only the tatsachlich genutzten CSS-Regeln angewendet become. 
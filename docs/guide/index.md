# Guide für fortgeschrittene Components

In diesem Bereich finden Sie detaillierte Anleitungen und Best Practices für fortgeschrittene Components und Layouts der Casoon UI Library.

## Verfügbare Guides

- [Grid System](./grid-system.md) - Lernen Sie, wie Sie das flexible Grid System für responsive Layouts einsetzen
- [Formsystem](./forms-system.md) - Entdecken Sie die umfassenden Möglichkeiten des Formsystems

## Module und Components

Die Casoon UI Library bietet eine umfangreiche Sammlung von Modulen, die Sie je nach Bedarf in Ihr Projekt integrieren können. Im Folgenden finden Sie einen Überblick über die wichtigsten Module und ihre jeweiligen Usagesbereiche.

## Abhängigkeiten zwischen Modulen

**Wichtig:** Die meisten Module der casoon-ui-lib setzen voraus, dass `core.css` bereits geladen ist. Diese Datei enthält grundlegende Definitionen, Variablen und Utility-Klassen, die von anderen Modulen verwendet werden.

```css
/* Immer zuerst core.css laden */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/themes/day.css'; /* Ein Theme wird empfohlen */

/* Erst danach spezifische Module */
@import '@casoon/ui-lib/layout.css';
@import '@casoon/ui-lib/forms.css';
@import '@casoon/ui-lib/components/button.css';
/* usw. */
```

### Importreihenfolge

Die folgende Reihenfolge wird für Imports empfohlen:

1. **Core**: Enthält grundlegende Layer und wird immer zuerst geladen
   ```css
   @import '@casoon/ui-lib/core.css';
   ```

2. **Theme**: Mindestens ein Theme sollte geladen werden
   ```css
   @import '@casoon/ui-lib/themes/day.css';
   ```

3. **Optionale Layer**: Erweitern die Core-Funktionalität
   ```css
   @import '@casoon/ui-lib/forms.css';
   @import '@casoon/ui-lib/layout.css';
   /* weitere Layer nach Bedarf */
   ```

4. **Module**: Spezifische Components nach Bedarf
   ```css
   @import '@casoon/ui-lib/components/button.css';
   @import '@casoon/ui-lib/components/input.css';
   /* weitere Module nach Bedarf */
   ```

Diese Reihenfolge stellt sicher, dass alle Abhängigkeiten korrekt aufgelöst werden.

### Layout-Module

| Modul | Beschreibung | Import | Abhängigkeiten |
|-------|-------------|--------|---------------|
| Layout | Grundlegende Layout-Strukturen und Container | `@import '@casoon/ui-lib/layout.css';` | core.css |
| Grid | Flexibles Grid System für responsive Layouts | Enthalten in layout.css | core.css, layout.css |
| Container | Vordefinierte Container mit responsiven Breiten | Enthalten in layout.css | core.css, layout.css |

### Form-Module

| Modul | Beschreibung | Import | Abhängigkeiten |
|-------|-------------|--------|---------------|
| Forms | Allgemeine Form-Styles | `@import '@casoon/ui-lib/forms.css';` | core.css |
| Input | Text-Inputer | `@import '@casoon/ui-lib/components/input.css';` | core.css, forms.css |
| Textarea | Mehrzeilige Textfelder | `@import '@casoon/ui-lib/components/textarea.css';` | core.css, forms.css |
| Select | Checkboxer und Dropdowns | `@import '@casoon/ui-lib/components/select.css';` | core.css, forms.css |
| Checkbox | Checkboxen und Auswahloptionen | `@import '@casoon/ui-lib/components/checkbox.css';` | core.css, forms.css |
| Radio | Radio-Buttons | `@import '@casoon/ui-lib/components/radio.css';` | core.css, forms.css |
| Switch | Toggle-Switch | `@import '@casoon/ui-lib/components/switch.css';` | core.css, forms.css |
| File | Datei-Upload-Elemente | `@import '@casoon/ui-lib/components/file.css';` | core.css, forms.css |

### Integration mit dem Design-System

Die in diesen Guides beschriebenen Components sind Teil des gesamten Design-Systems und integrieren sich nahtlos mit anderen Components der Casoon UI Library. Beachten Sie folgende Prinzipien für eine optimale Integration:

1. **Konsistente Usage von CSS Variables**
   - Verwenden Sie vorhandene Variablen für Colors, Abstände und Typography
   - Erstellen Sie bei Bedarf neue Variablen nach dem bestehenden Muster

2. **Responsive Design**
   - Nutzen Sie das Grid System für responsive Layouts
   - Verwenden Sie die vordefinierten Breakpoints für konsistente Medienabfragen

3. **Accessibility**
   - Achten Sie auf ausreichenden Kontrast und semantisches Markup
   - Verwenden Sie ARIA-Attribute für verbesserte Accessibility

4. **Modulare Integration**
   - Importieren Sie nur die Module, die Sie tatsächlich benötigen
   - Kombinieren Sie Module zu komplexeren Components nach Bedarf

## Best Practices

### Optimale Performance

- Vermeiden Sie übermäßige Verschachtelung von Selektoren
- Nutzen Sie die CSS-Strukturen der Bibliothek effizient
- Achten Sie auf die Dateigröße durch selektive Imports

### Codequalität

- Halten Sie sich an die BEM-Namenskonventionen (Block__Element--Modifier)
- Gruppieren Sie zusammengehörige Styles
- Dokumentieren Sie komplexe oder ungewöhnliche Implementierungen

### Responsive Design

- Testen Sie Ihre Components auf verschiedenen Bildschirmgrößen
- Verwenden Sie flexible Einheiten (rem, em, %) statt fester Pixel-Werte
- Nutzen Sie die responsiven Utility-Klassen der Casoon UI Library

## Häufige Fragen

### Wie kombiniere ich Grid und Forme?

Das Grid System und die Formkomponenten lassen sich ideal kombinieren, um komplexe, responsive Formlayouts zu erstellen. Ein typisches Example ist die Aufteilung von Formfeldern in mehrere Spalten:

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
  <!-- Weitere Formfelder -->
</form>
```

### Kann ich eigene CSS Variables definieren?

Ja, Sie können eigene CSS Variables definieren oder bestehende überschreiben, um das Design-System an Ihre Bedürfnisse anzupassen:

```css
:root {
  /* Überschreiben einer bestehenden Variable */
  --form-input-border-radius: 8px;
  
  /* Definieren einer neuen Variable */
  --custom-component-padding: 1.5rem;
}
```

### Was passiert, wenn ich Abhängigkeiten nicht in der richtigen Reihenfolge lade?

Wenn die CSS-Dateien nicht in der korrekten Reihenfolge geladen werden, können verschiedene Probleme auftreten:

1. **Fehlende Styles:** Components erscheinen unstyled oder nur teilweise gestylt
2. **Fehlerhafte Layouts:** Grid Systeme funktionieren nicht korrekt
3. **CSS Variables nicht verfügbar:** Referenzen auf Variablen wie `var(--color-primary)` werden nicht aufgelöst
4. **Utility-Klassen nicht verfügbar:** Klassen wie `flex`, `grid` oder `hidden` funktionieren nicht

**Example für ein Problem:**
```css
/* FALSCH: Module vor core.css laden */
@import '@casoon/ui-lib/components/button.css';
@import '@casoon/ui-lib/core.css';
```

Hier würde der Button Module vielleicht Referenzen auf Variablen oder Utility-Klassen enthalten, die erst in core.css definiert werden, was zu fehlerhafter Darstellung führt.

**Richtige Lösung:**
```css
/* RICHTIG: core.css zuerst laden */
@import '@casoon/ui-lib/core.css';
@import '@casoon/ui-lib/components/button.css';
```

### Kann ich einzelne Components ohne core.css verwenden?

Nein, beinahe alle Components der casoon-ui-lib setzen voraus, dass `core.css` geladen ist. Selbst wenn eine Komponente scheinbar unabhängig funktioniert, ist es sehr wahrscheinlich, dass sie auf Variablen, Utility-Klassen oder grundlegende Styles aus `core.css` zurückgreift.

Wenn Sie nur einzelne Components benötigen, laden Sie trotzdem immer zuerst `core.css` und dann die spezifischen Module, die Sie verwenden möchten. Der modulare Aufbau der Bibliothek stellt sicher, dass nur die tatsächlich genutzten CSS-Regeln angewendet werden. 
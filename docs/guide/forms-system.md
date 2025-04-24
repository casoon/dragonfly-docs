# Formularsystem

Das Formularsystem der Casoon UI Library bietet eine umfassende Sammlung von Komponenten und Utility-Klassen zur Erstellung ansprechender und benutzerfreundlicher Formulare.

## Module importieren

**Wichtig:** Alle Formular-Module haben Abhängigkeiten zu `core.css` und dem allgemeinen `forms.css` Layer. Stellen Sie sicher, dass Sie diese in der richtigen Reihenfolge importieren:

```css
/* Grundlegende Abhängigkeiten zuerst */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css'; /* oder ein anderes Theme */

/* Allgemeines Formular-Layer */
@import 'casoon-ui-lib/layers/forms.css';

/* Dann die spezifischen Form-Module nach Bedarf */
@import 'casoon-ui-lib/modules/form.module.css';
@import 'casoon-ui-lib/modules/input.module.css';
@import 'casoon-ui-lib/modules/textarea.module.css';
@import 'casoon-ui-lib/modules/select.module.css';
@import 'casoon-ui-lib/modules/checkbox.module.css';
@import 'casoon-ui-lib/modules/radio.module.css';
@import 'casoon-ui-lib/modules/switch.module.css';
```

Die korrekte Ladereihenfolge ist entscheidend, da die spezifischen Formularmodule Variablen, Utility-Klassen und Grundstile verwenden, die in `core.css` und `forms.css` definiert sind. Ohne diese Abhängigkeiten werden die Formularelemente nicht korrekt dargestellt.

## Basisstruktur

Die Grundstruktur eines Formulars mit der Casoon UI Library besteht aus Form-Gruppen (`form-group`), Labels (`form-label`) und verschiedenen Eingabeelementen:

```html
<form class="form">
  <div class="form-group">
    <label for="username" class="form-label">Benutzername</label>
    <input type="text" id="username" class="form-input" placeholder="Benutzername eingeben">
  </div>
</form>
```

## Formularlayout

### Standardlayout

```html
<form class="form">
  <div class="form-group">
    <label for="name" class="form-label">Name</label>
    <input type="text" id="name" class="form-input">
  </div>
  <div class="form-group">
    <label for="email" class="form-label">E-Mail</label>
    <input type="email" id="email" class="form-input">
  </div>
  <button type="submit" class="button button--primary">Absenden</button>
</form>
```

### Inline-Layout

```html
<form class="form form--inline">
  <div class="form-group">
    <label for="inline-name" class="form-label">Name</label>
    <input type="text" id="inline-name" class="form-input">
  </div>
  <div class="form-group">
    <label for="inline-email" class="form-label">E-Mail</label>
    <input type="email" id="inline-email" class="form-input">
  </div>
  <button type="submit" class="button button--primary">Absenden</button>
</form>
```

### Horizontales Layout

```html
<form class="form form--horizontal">
  <div class="form-group">
    <label for="horizontal-name" class="form-label">Name</label>
    <div class="form-control">
      <input type="text" id="horizontal-name" class="form-input">
    </div>
  </div>
  <div class="form-group">
    <label for="horizontal-email" class="form-label">E-Mail</label>
    <div class="form-control">
      <input type="email" id="horizontal-email" class="form-input">
    </div>
  </div>
  <div class="form-group">
    <div class="form-control form-control--offset">
      <button type="submit" class="button button--primary">Absenden</button>
    </div>
  </div>
</form>
```

## Formularelemente

### Text-Input

```html
<div class="form-group">
  <label for="text-input" class="form-label">Textfeld</label>
  <input type="text" id="text-input" class="form-input" placeholder="Text eingeben">
</div>
```

### Textarea

```html
<div class="form-group">
  <label for="textarea" class="form-label">Mehrzeiliges Textfeld</label>
  <textarea id="textarea" class="form-textarea" rows="4" placeholder="Text eingeben"></textarea>
</div>
```

### Select

```html
<div class="form-group">
  <label for="select" class="form-label">Auswahlfeld</label>
  <select id="select" class="form-select">
    <option value="">Bitte auswählen</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

### Multiple Select

```html
<div class="form-group">
  <label for="multi-select" class="form-label">Mehrfachauswahl</label>
  <select id="multi-select" class="form-select" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

### Checkbox

```html
<div class="form-group">
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox" class="form-checkbox__input">
    <label for="checkbox" class="form-checkbox__label">Option auswählen</label>
  </div>
</div>
```

### Checkbox-Gruppe

```html
<div class="form-group">
  <label class="form-label">Optionen auswählen</label>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox1" class="form-checkbox__input">
    <label for="checkbox1" class="form-checkbox__label">Option 1</label>
  </div>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox2" class="form-checkbox__input">
    <label for="checkbox2" class="form-checkbox__label">Option 2</label>
  </div>
  <div class="form-checkbox">
    <input type="checkbox" id="checkbox3" class="form-checkbox__input">
    <label for="checkbox3" class="form-checkbox__label">Option 3</label>
  </div>
</div>
```

### Radio-Buttons

```html
<div class="form-group">
  <label class="form-label">Optionen</label>
  <div class="form-radio">
    <input type="radio" id="radio1" name="radio-group" class="form-radio__input">
    <label for="radio1" class="form-radio__label">Option 1</label>
  </div>
  <div class="form-radio">
    <input type="radio" id="radio2" name="radio-group" class="form-radio__input">
    <label for="radio2" class="form-radio__label">Option 2</label>
  </div>
  <div class="form-radio">
    <input type="radio" id="radio3" name="radio-group" class="form-radio__input">
    <label for="radio3" class="form-radio__label">Option 3</label>
  </div>
</div>
```

### Switch

```html
<div class="form-group">
  <div class="form-switch">
    <input type="checkbox" id="switch" class="form-switch__input">
    <label for="switch" class="form-switch__label">Aktivieren</label>
  </div>
</div>
```

### File Upload

```html
<div class="form-group">
  <label for="file" class="form-label">Datei hochladen</label>
  <input type="file" id="file" class="form-file">
</div>
```

### Styled File Upload

```html
<div class="form-group">
  <label for="file-styled" class="form-label">Datei hochladen</label>
  <div class="form-file-wrapper">
    <input type="file" id="file-styled" class="form-file-input">
    <label for="file-styled" class="form-file-label">
      <span class="form-file-button">Durchsuchen</span>
      <span class="form-file-text">Keine Datei ausgewählt</span>
    </label>
  </div>
</div>
```

## Formulargrößen

### Kleine Elemente

```html
<div class="form-group">
  <label for="input-sm" class="form-label">Kleines Textfeld</label>
  <input type="text" id="input-sm" class="form-input form-input--sm" placeholder="Text eingeben">
</div>
```

### Normale Elemente

```html
<div class="form-group">
  <label for="input-md" class="form-label">Normales Textfeld</label>
  <input type="text" id="input-md" class="form-input" placeholder="Text eingeben">
</div>
```

### Große Elemente

```html
<div class="form-group">
  <label for="input-lg" class="form-label">Großes Textfeld</label>
  <input type="text" id="input-lg" class="form-input form-input--lg" placeholder="Text eingeben">
</div>
```

## Validierungsstatus

### Erfolg

```html
<div class="form-group">
  <label for="input-success" class="form-label">Erfolgreich</label>
  <input type="text" id="input-success" class="form-input form-input--success" value="Gültige Eingabe">
  <div class="form-feedback form-feedback--success">Eingabe ist gültig</div>
</div>
```

### Warnung

```html
<div class="form-group">
  <label for="input-warning" class="form-label">Warnung</label>
  <input type="text" id="input-warning" class="form-input form-input--warning" value="Mögliches Problem">
  <div class="form-feedback form-feedback--warning">Bitte überprüfen Sie Ihre Eingabe</div>
</div>
```

### Fehler

```html
<div class="form-group">
  <label for="input-error" class="form-label">Fehler</label>
  <input type="text" id="input-error" class="form-input form-input--error" value="Ungültige Eingabe">
  <div class="form-feedback form-feedback--error">Bitte korrigieren Sie Ihre Eingabe</div>
</div>
```

## Input mit Icons

### Icon links

```html
<div class="form-group">
  <label for="input-icon-left" class="form-label">Icon links</label>
  <div class="form-input-with-icon">
    <span class="form-input-icon form-input-icon--left">
      <i class="icon-user"></i>
    </span>
    <input type="text" id="input-icon-left" class="form-input form-input--with-icon-left" placeholder="Benutzername">
  </div>
</div>
```

### Icon rechts

```html
<div class="form-group">
  <label for="input-icon-right" class="form-label">Icon rechts</label>
  <div class="form-input-with-icon">
    <input type="text" id="input-icon-right" class="form-input form-input--with-icon-right" placeholder="Suchen">
    <span class="form-input-icon form-input-icon--right">
      <i class="icon-search"></i>
    </span>
  </div>
</div>
```

## Input-Gruppen

### Präfix

```html
<div class="form-group">
  <label for="input-prefix" class="form-label">Mit Präfix</label>
  <div class="form-input-group">
    <span class="form-input-group__addon">€</span>
    <input type="text" id="input-prefix" class="form-input" placeholder="Betrag">
  </div>
</div>
```

### Suffix

```html
<div class="form-group">
  <label for="input-suffix" class="form-label">Mit Suffix</label>
  <div class="form-input-group">
    <input type="text" id="input-suffix" class="form-input" placeholder="Gewicht">
    <span class="form-input-group__addon">kg</span>
  </div>
</div>
```

### Mit Button

```html
<div class="form-group">
  <label for="input-button" class="form-label">Mit Button</label>
  <div class="form-input-group">
    <input type="text" id="input-button" class="form-input" placeholder="Suchen">
    <button type="button" class="button button--primary">Suchen</button>
  </div>
</div>
```

## Barrierefreiheit

Das Formularsystem der Casoon UI Library wurde mit Barrierefreiheit im Fokus entwickelt. Hier sind einige Best Practices:

### ARIA-Attribute

```html
<div class="form-group">
  <label for="aria-input" class="form-label">Name</label>
  <input 
    type="text" 
    id="aria-input" 
    class="form-input" 
    aria-required="true" 
    aria-describedby="name-description"
  >
  <div id="name-description" class="form-feedback">Bitte geben Sie Ihren vollständigen Namen ein.</div>
</div>
```

### Erforderliche Felder kennzeichnen

```html
<div class="form-group">
  <label for="required-input" class="form-label">
    E-Mail <span class="form-required">*</span>
  </label>
  <input type="email" id="required-input" class="form-input" required>
</div>
```

## Responsive Formulare

Für responsive Formulare können Sie Grid und Form-Komponenten kombinieren:

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
  
  <div class="form-group">
    <label for="email-resp" class="form-label">E-Mail</label>
    <input type="email" id="email-resp" class="form-input">
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="form-group">
      <label for="city" class="form-label">Stadt</label>
      <input type="text" id="city" class="form-input">
    </div>
    <div class="form-group">
      <label for="zip" class="form-label">PLZ</label>
      <input type="text" id="zip" class="form-input">
    </div>
    <div class="form-group">
      <label for="country" class="form-label">Land</label>
      <select id="country" class="form-select">
        <option value="de">Deutschland</option>
        <option value="at">Österreich</option>
        <option value="ch">Schweiz</option>
      </select>
    </div>
  </div>
  
  <button type="submit" class="button button--primary">Absenden</button>
</form>
```

## CSS-Variablen

Das Formularsystem verwendet folgende CSS-Variablen, die Sie anpassen können:

```css
:root {
  /* Allgemeine Formular-Variablen */
  --form-margin-bottom: 1rem;
  --form-group-margin-bottom: 1rem;
  
  /* Label */
  --form-label-margin-bottom: 0.5rem;
  --form-label-font-weight: 500;
  --form-label-color: var(--color-text);
  
  /* Inputs */
  --form-input-height: 2.5rem;
  --form-input-padding: 0.5rem 1rem;
  --form-input-font-size: 1rem;
  --form-input-line-height: 1.5;
  --form-input-color: var(--color-text);
  --form-input-bg: var(--color-white);
  --form-input-border-width: 1px;
  --form-input-border-color: var(--color-gray-300);
  --form-input-border-radius: var(--border-radius);
  --form-input-focus-border-color: var(--color-primary);
  --form-input-focus-ring: 0 0 0 3px rgba(var(--color-primary-rgb), 0.25);
  --form-input-placeholder-color: var(--color-gray-500);
  --form-input-disabled-bg: var(--color-gray-100);
  --form-input-disabled-color: var(--color-gray-600);
  
  /* Select */
  --form-select-padding-right: 2.5rem;
  --form-select-bg-position: right 0.75rem center;
  --form-select-bg-size: 1rem;
  
  /* Checkbox und Radio */
  --form-check-input-width: 1rem;
  --form-check-input-height: 1rem;
  --form-check-input-margin-right: 0.5rem;
  --form-check-input-border-radius: 0.25rem;
  --form-check-radio-border-radius: 50%;
  
  /* Switch */
  --form-switch-width: 2.5rem;
  --form-switch-height: 1.25rem;
  --form-switch-thumb-size: 1rem;
  --form-switch-thumb-margin: 0.125rem;
  
  /* Validierung */
  --form-valid-color: var(--color-success);
  --form-valid-border-color: var(--color-success);
  --form-warning-color: var(--color-warning);
  --form-warning-border-color: var(--color-warning);
  --form-invalid-color: var(--color-error);
  --form-invalid-border-color: var(--color-error);
}
```

## Komplexes Beispiel: Registrierungsformular

```html
<form class="form">
  <h2>Registrierung</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="form-group">
      <label for="reg-firstname" class="form-label">
        Vorname <span class="form-required">*</span>
      </label>
      <input 
        type="text" 
        id="reg-firstname" 
        class="form-input" 
        required 
        aria-required="true"
      >
    </div>
    
    <div class="form-group">
      <label for="reg-lastname" class="form-label">
        Nachname <span class="form-required">*</span>
      </label>
      <input 
        type="text" 
        id="reg-lastname" 
        class="form-input" 
        required 
        aria-required="true"
      >
    </div>
  </div>
  
  <div class="form-group">
    <label for="reg-email" class="form-label">
      E-Mail <span class="form-required">*</span>
    </label>
    <div class="form-input-with-icon">
      <span class="form-input-icon form-input-icon--left">
        <i class="icon-mail"></i>
      </span>
      <input 
        type="email" 
        id="reg-email" 
        class="form-input form-input--with-icon-left" 
        required 
        aria-required="true"
      >
    </div>
  </div>
  
  <div class="form-group">
    <label for="reg-password" class="form-label">
      Passwort <span class="form-required">*</span>
    </label>
    <div class="form-input-with-icon">
      <span class="form-input-icon form-input-icon--left">
        <i class="icon-lock"></i>
      </span>
      <input 
        type="password" 
        id="reg-password" 
        class="form-input form-input--with-icon-left" 
        required 
        aria-required="true"
        minlength="8"
      >
    </div>
    <div class="form-feedback">Das Passwort muss mindestens 8 Zeichen lang sein.</div>
  </div>
  
  <div class="form-group">
    <div class="form-checkbox">
      <input type="checkbox" id="reg-terms" class="form-checkbox__input" required aria-required="true">
      <label for="reg-terms" class="form-checkbox__label">
        Ich stimme den <a href="#">AGB</a> und der <a href="#">Datenschutzerklärung</a> zu
      </label>
    </div>
  </div>
  
  <div class="form-group">
    <div class="form-checkbox">
      <input type="checkbox" id="reg-newsletter" class="form-checkbox__input">
      <label for="reg-newsletter" class="form-checkbox__label">
        Ich möchte regelmäßig per E-Mail über Neuigkeiten informiert werden
      </label>
    </div>
  </div>
  
  <div class="form-group">
    <button type="submit" class="button button--primary button--lg button--block">Registrieren</button>
  </div>
</form>
```

## Best Practices

- **Formularvalidierung nutzen**: Verwenden Sie HTML5-Validierungsattribute und kombinieren Sie diese mit JavaScript für eine umfassende Validierung.
- **Fehlerbehandlung einbauen**: Zeigen Sie Fehlermeldungen klar und präzise an, vorzugsweise in der Nähe des betroffenen Feldes.
- **Zugänglichkeit beachten**: Verwenden Sie Labels für alle Formularelemente und stellen Sie sicher, dass alle Elemente per Tastatur bedienbar sind.
- **Konsistente Feldgrößen verwenden**: Verwenden Sie einheitliche Größen für ähnliche Formularelemente in Ihrer Anwendung.
- **Mobile-optimierte Eingabetypen nutzen**: Verwenden Sie spezialisierte Eingabetypen wie `email`, `tel` und `number` für eine bessere mobile Erfahrung.
- **Visuelle Hinweise geben**: Markieren Sie Pflichtfelder deutlich und bieten Sie Hilfetexte für komplexe Eingaben.
- **Sinnvolle Tab-Reihenfolge sicherstellen**: Stellen Sie sicher, dass die Tab-Navigation durch das Formular logisch und intuitiv ist.
- **Zusammengehörige Felder gruppieren**: Verwenden Sie Fieldsets und Legends für thematisch zusammengehörige Elemente. 
# File Input

Die File-Input-Komponente der Casoon UI Library ermöglicht es Benutzern, Dateien hochzuladen und bietet verschiedene Stile und Funktionalitäten für Dateiauswahl-Elemente.

## Verwendung

```html
<div class="file-input">
  <input type="file" id="file" class="file-input__input">
  <label for="file" class="file-input__label">
    <span class="file-input__text">Datei auswählen</span>
  </label>
</div>
```

## Module importieren

```css
/* Notwendige Abhängigkeit */
@import 'casoon-ui-lib/core.css';
@import 'casoon-ui-lib/themes/day.css'; /* oder ein anderes Theme */

/* File-Input-Modul */
@import 'casoon-ui-lib/modules/file.module.css';
```

## Varianten

### Standard File-Input

```html
<div class="file-input">
  <input type="file" id="file1" class="file-input__input">
  <label for="file1" class="file-input__label">
    <span class="file-input__text">Datei auswählen</span>
  </label>
</div>
```

### File-Input mit Icon

```html
<div class="file-input">
  <input type="file" id="file2" class="file-input__input">
  <label for="file2" class="file-input__label">
    <span class="file-input__icon">📎</span>
    <span class="file-input__text">Datei auswählen</span>
  </label>
</div>
```

### File-Input mit Button-Stil

```html
<div class="file-input file-input--button">
  <input type="file" id="file3" class="file-input__input">
  <label for="file3" class="file-input__label">
    <span class="file-input__text">Datei hochladen</span>
  </label>
</div>
```

### File-Input mit Drag & Drop-Bereich

```html
<div class="file-input file-input--drop-zone">
  <input type="file" id="file4" class="file-input__input" multiple>
  <label for="file4" class="file-input__label">
    <span class="file-input__icon">📥</span>
    <span class="file-input__text">Dateien hierher ziehen oder klicken zum Hochladen</span>
  </label>
</div>
```

### File-Input mit Vorschau

```html
<div class="file-input file-input--with-preview">
  <input type="file" id="file5" class="file-input__input" accept="image/*">
  <label for="file5" class="file-input__label">
    <span class="file-input__text">Bild auswählen</span>
  </label>
  <div class="file-input__preview">
    <!-- Vorschaubild wird hier per JavaScript eingefügt -->
  </div>
</div>
```

### File-Input mit Dateilistenansicht

```html
<div class="file-input file-input--with-list">
  <input type="file" id="file6" class="file-input__input" multiple>
  <label for="file6" class="file-input__label">
    <span class="file-input__text">Dateien auswählen</span>
  </label>
  <ul class="file-input__list">
    <!-- Dateiliste wird hier per JavaScript eingefügt -->
  </ul>
</div>
```

### File-Input Größenoptionen

```html
<div class="file-input file-input--sm">
  <input type="file" id="file7" class="file-input__input">
  <label for="file7" class="file-input__label">
    <span class="file-input__text">Klein</span>
  </label>
</div>

<div class="file-input">
  <input type="file" id="file8" class="file-input__input">
  <label for="file8" class="file-input__label">
    <span class="file-input__text">Standard</span>
  </label>
</div>

<div class="file-input file-input--lg">
  <input type="file" id="file9" class="file-input__input">
  <label for="file9" class="file-input__label">
    <span class="file-input__text">Groß</span>
  </label>
</div>
```

### Farbvarianten

```html
<div class="file-input file-input--primary">
  <input type="file" id="file10" class="file-input__input">
  <label for="file10" class="file-input__label">
    <span class="file-input__text">Primär</span>
  </label>
</div>

<div class="file-input file-input--secondary">
  <input type="file" id="file11" class="file-input__input">
  <label for="file11" class="file-input__label">
    <span class="file-input__text">Sekundär</span>
  </label>
</div>

<div class="file-input file-input--success">
  <input type="file" id="file12" class="file-input__input">
  <label for="file12" class="file-input__label">
    <span class="file-input__text">Erfolg</span>
  </label>
</div>
```

### Deaktivierter File-Input

```html
<div class="file-input file-input--disabled">
  <input type="file" id="file13" class="file-input__input" disabled>
  <label for="file13" class="file-input__label">
    <span class="file-input__text">Deaktiviert</span>
  </label>
</div>
```

## JavaScript-Funktionalität

### Einfache Dateienanzeige

```js
document.querySelectorAll('.file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const fileNameElement = this.parentElement.querySelector('.file-input__text');
    if (this.files.length > 0) {
      fileNameElement.textContent = this.files[0].name;
    } else {
      fileNameElement.textContent = 'Datei auswählen';
    }
  });
});
```

### Bildvorschau

```js
document.querySelectorAll('.file-input--with-preview .file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const preview = this.parentElement.querySelector('.file-input__preview');
    preview.innerHTML = '';
    
    if (this.files.length > 0 && this.files[0].type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(this.files[0]);
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      preview.appendChild(img);
    }
  });
});
```

### Dateiliste mit mehreren Dateien

```js
document.querySelectorAll('.file-input--with-list .file-input__input').forEach(input => {
  input.addEventListener('change', function() {
    const list = this.parentElement.querySelector('.file-input__list');
    list.innerHTML = '';
    
    if (this.files.length > 0) {
      Array.from(this.files).forEach(file => {
        const li = document.createElement('li');
        li.className = 'file-input__list-item';
        li.innerHTML = `
          <span class="file-input__file-name">${file.name}</span>
          <span class="file-input__file-size">${formatFileSize(file.size)}</span>
          <button type="button" class="file-input__remove" aria-label="Datei entfernen">×</button>
        `;
        list.appendChild(li);
      });
    }
  });
});

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
```

### Drag & Drop-Funktionalität

```js
document.querySelectorAll('.file-input--drop-zone').forEach(dropZone => {
  const input = dropZone.querySelector('.file-input__input');
  const label = dropZone.querySelector('.file-input__label');
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    label.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    label.addEventListener(eventName, () => {
      label.classList.add('file-input__label--dragover');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    label.addEventListener(eventName, () => {
      label.classList.remove('file-input__label--dragover');
    }, false);
  });
  
  label.addEventListener('drop', function(e) {
    input.files = e.dataTransfer.files;
    
    // Löst das change-Event aus
    const event = new Event('change', { bubbles: true });
    input.dispatchEvent(event);
  }, false);
});
```

## CSS-Variablen

Die File-Input-Komponente verwendet folgende CSS-Variablen, die Sie anpassen können:

```css
:root {
  --file-input-height: 2.5rem;
  --file-input-height-sm: 2rem;
  --file-input-height-lg: 3rem;
  
  --file-input-padding: 0.5rem 1rem;
  --file-input-padding-sm: 0.25rem 0.75rem;
  --file-input-padding-lg: 0.75rem 1.25rem;
  
  --file-input-font-size: 0.875rem;
  --file-input-font-size-sm: 0.75rem;
  --file-input-font-size-lg: 1rem;
  
  --file-input-border-radius: 0.25rem;
  --file-input-border-width: 1px;
  --file-input-border-color: var(--color-gray-300);
  
  --file-input-bg: var(--color-white);
  --file-input-color: var(--color-gray-800);
  
  --file-input-hover-bg: var(--color-gray-100);
  --file-input-hover-border-color: var(--color-gray-400);
  
  --file-input-focus-border-color: var(--color-primary);
  --file-input-focus-ring: 0 0 0 0.2rem rgba(var(--color-primary-rgb), 0.25);
  
  --file-input-disabled-bg: var(--color-gray-100);
  --file-input-disabled-color: var(--color-gray-500);
  
  --file-input-drop-zone-height: 8rem;
  --file-input-drop-zone-border-style: dashed;
  
  --file-input-preview-height: 10rem;
  --file-input-preview-border-radius: 0.25rem;
  
  --file-input-list-item-padding: 0.5rem;
  --file-input-list-item-margin: 0.25rem 0;
  --file-input-list-item-border-radius: 0.25rem;
  --file-input-list-item-bg: var(--color-gray-100);
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie immer ein `<label>` mit einer korrekten `for`-Attribut-Verknüpfung
- Fügen Sie beschreibende Texte für Screenreader hinzu, wenn nötig
- Stellen Sie sicher, dass Fehlermeldungen zur Dateigröße oder unzulässige Dateitypen zugänglich sind
- Verwenden Sie `aria-live`-Regionen für dynamische Änderungen wie Dateivorschauen oder Listen

### Benutzerfreundlichkeit

- Geben Sie klare Anweisungen zu akzeptierten Dateitypen und -größen
- Zeigen Sie Feedback während des Uploads an
- Erlauben Sie das Entfernen ausgewählter Dateien
- Bieten Sie Fortschrittsanzeigen für große Dateien

### Responsives Design

- Stellen Sie sicher, dass die Drop-Zone-Größe auf mobilen Geräten angemessen ist
- Passen Sie die Größe der Vorschaubilder an verschiedene Bildschirmgrößen an
- Verwenden Sie relative Einheiten für alle Größen

## Beispiel: Vollständiges Formular mit File-Upload

```html
<form class="form">
  <div class="form__group">
    <label class="form__label" for="username">Benutzername</label>
    <input type="text" id="username" class="input" required>
  </div>
  
  <div class="form__group">
    <label class="form__label" for="profile-pic">Profilbild</label>
    <div class="file-input file-input--with-preview">
      <input type="file" id="profile-pic" class="file-input__input" accept="image/*">
      <label for="profile-pic" class="file-input__label">
        <span class="file-input__icon">📷</span>
        <span class="file-input__text">Bild auswählen</span>
      </label>
      <div class="file-input__preview"></div>
      <small class="file-input__help">Akzeptierte Formate: JPG, PNG, GIF. Max. 2MB.</small>
    </div>
  </div>
  
  <div class="form__group">
    <label class="form__label" for="documents">Dokumente</label>
    <div class="file-input file-input--with-list file-input--drop-zone">
      <input type="file" id="documents" class="file-input__input" multiple accept=".pdf,.doc,.docx">
      <label for="documents" class="file-input__label">
        <span class="file-input__icon">📄</span>
        <span class="file-input__text">Dokumente hierher ziehen oder klicken</span>
      </label>
      <ul class="file-input__list"></ul>
      <small class="file-input__help">Akzeptierte Formate: PDF, DOC, DOCX. Max. 5 Dateien.</small>
    </div>
  </div>
  
  <div class="form__group">
    <button type="submit" class="button button--primary">Absenden</button>
  </div>
</form>
``` 
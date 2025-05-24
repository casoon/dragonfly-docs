---
title: Textarea Komponente
category: Components
---

# Textarea Komponente

Die Textarea-Komponente ermöglicht Benutzern die Eingabe von mehrzeiligem Text in einem Formular.

## Grundlegende Verwendung

```html
<div class="textarea-container">
  <label for="basic-textarea" class="textarea-label">Nachricht:</label>
  <textarea id="basic-textarea" class="textarea" placeholder="Geben Sie Ihre Nachricht ein"></textarea>
</div>
```

## Varianten

### Standard Textarea

```html
<div class="textarea-container">
  <textarea id="standard-textarea" class="textarea" placeholder="Standard Textarea"></textarea>
</div>
```

### Mit Label

```html
<div class="textarea-container">
  <label for="labeled-textarea" class="textarea-label">Beschreibung:</label>
  <textarea id="labeled-textarea" class="textarea" placeholder="Geben Sie eine Beschreibung ein"></textarea>
</div>
```

### Mit vorausgefülltem Text

```html
<div class="textarea-container">
  <label for="prefilled-textarea" class="textarea-label">Feedback:</label>
  <textarea id="prefilled-textarea" class="textarea">Dies ist ein vorausgefüllter Text in der Textarea.</textarea>
</div>
```

### Disabled (Deaktiviert)

```html
<div class="textarea-container">
  <label for="disabled-textarea" class="textarea-label">Deaktiviert:</label>
  <textarea id="disabled-textarea" class="textarea" disabled>Dieser Textbereich kann nicht bearbeitet werden.</textarea>
</div>
```

### Readonly (Schreibgeschützt)

```html
<div class="textarea-container">
  <label for="readonly-textarea" class="textarea-label">Schreibgeschützt:</label>
  <textarea id="readonly-textarea" class="textarea" readonly>Dieser Textbereich ist schreibgeschützt.</textarea>
</div>
```

## Größenvarianten

### Klein

```html
<div class="textarea-container">
  <textarea id="small-textarea" class="textarea textarea--sm" placeholder="Kleine Textarea"></textarea>
</div>
```

### Standard

```html
<div class="textarea-container">
  <textarea id="medium-textarea" class="textarea" placeholder="Standard Textarea"></textarea>
</div>
```

### Groß

```html
<div class="textarea-container">
  <textarea id="large-textarea" class="textarea textarea--lg" placeholder="Große Textarea"></textarea>
</div>
```

## Höhenvarianten

### Mit fester Höhe

```html
<div class="textarea-container">
  <textarea id="fixed-height-textarea" class="textarea" rows="5" placeholder="Textarea mit 5 Zeilen"></textarea>
</div>
```

### Mit Auto-Resize (wachsend)

```html
<div class="textarea-container">
  <textarea id="auto-resize-textarea" class="textarea textarea--auto-resize" placeholder="Diese Textarea wächst automatisch mit dem Inhalt"></textarea>
</div>

<script>
  document.getElementById('auto-resize-textarea').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
</script>
```

## Statusvarianten

### Mit Validierungsfehler

```html
<div class="textarea-container">
  <label for="error-textarea" class="textarea-label">Beschreibung:</label>
  <textarea id="error-textarea" class="textarea textarea--error" placeholder="Fehlerhafte Eingabe"></textarea>
  <div class="textarea-error-message">Bitte geben Sie eine gültige Beschreibung ein.</div>
</div>

<style>
  .textarea--error {
    border-color: var(--color-error);
  }
  
  .textarea-error-message {
    font-size: 0.875rem;
    color: var(--color-error);
    margin-top: 0.25rem;
  }
</style>
```

### Mit Erfolgsvalidierung

```html
<div class="textarea-container">
  <label for="success-textarea" class="textarea-label">Beschreibung:</label>
  <textarea id="success-textarea" class="textarea textarea--success">Gültige Eingabe</textarea>
  <div class="textarea-success-message">Ihre Eingabe wurde akzeptiert.</div>
</div>

<style>
  .textarea--success {
    border-color: var(--color-success);
  }
  
  .textarea-success-message {
    font-size: 0.875rem;
    color: var(--color-success);
    margin-top: 0.25rem;
  }
</style>
```

## Mit Zeichenzähler

```html
<div class="textarea-container">
  <label for="counter-textarea" class="textarea-label">Feedback (maximal 200 Zeichen):</label>
  <textarea id="counter-textarea" class="textarea" maxlength="200" placeholder="Geben Sie Ihr Feedback ein"></textarea>
  <div class="textarea-counter">
    <span id="char-count">0</span>/200 Zeichen
  </div>
</div>

<script>
  const textarea = document.getElementById('counter-textarea');
  const charCount = document.getElementById('char-count');
  
  textarea.addEventListener('input', function() {
    charCount.textContent = this.value.length;
  });
</script>

<style>
  .textarea-counter {
    font-size: 0.875rem;
    color: var(--color-gray-600);
    margin-top: 0.25rem;
    text-align: right;
  }
</style>
```

## Anpassung

Die Textarea-Komponente kann über CSS-Variablen angepasst werden:

```css
.textarea {
  --textarea-padding: 0.75rem 1rem;
  --textarea-border-color: var(--color-gray-300);
  --textarea-border-radius: var(--radius-md);
  --textarea-bg: var(--color-white);
  --textarea-focus-ring-color: var(--color-primary-100);
  --textarea-focus-border-color: var(--color-primary);
  --textarea-min-height: 6rem;
  --textarea-font-family: inherit;
  --textarea-font-size: 1rem;
}
```

## Barrierefreiheit

Für eine bessere Barrierefreiheit beachten Sie bitte folgende Punkte:

- Verwenden Sie immer ein `<label>`-Element, das mit der Textarea über das `for`-Attribut verknüpft ist
- Verwenden Sie bei Bedarf `aria-describedby`, um zusätzliche Informationen bereitzustellen
- Stellen Sie sicher, dass Fehler- und Erfolgsmeldungen programmatisch mit der Textarea verknüpft sind
- Sorgen Sie für ausreichenden Kontrast zwischen Text und Hintergrund
- Vermeiden Sie automatische Größenänderungen, die Benutzer verwirren könnten
- Verwenden Sie das Attribut `required`, wenn eine Eingabe erforderlich ist

## Best Practices

- Verwenden Sie Textareas für längere Texteingaben oder Kommentare
- Geben Sie eine angemessene Größe vor, die der erwarteten Eingabelänge entspricht
- Bieten Sie Platzhaltertext an, der die erwartete Art der Eingabe beschreibt
- Zeigen Sie Validierungsfehler klar und verständlich an
- Setzen Sie einen angemessenen `maxlength`-Wert, wenn die Eingabe begrenzt werden soll
- Erwägen Sie die Verwendung eines Zeichenzählers bei Längenbeschränkungen 
# Alert

Die Alert-Komponente der Casoon UI Library bietet verschiedene Stile und Varianten für Benachrichtigungen und Warnmeldungen.

## Verwendung

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">Erfolgsmeldung</div>
</div>
```

## Module importieren

```css
@import 'casoon-ui-lib/modules/alert.module.css';
```

## Varianten

### Typen

```html
<div class="alert alert--success">
  <div class="alert__icon">✓</div>
  <div class="alert__content">Erfolgsmeldung</div>
</div>

<div class="alert alert--error">
  <div class="alert__icon">✕</div>
  <div class="alert__content">Fehlermeldung</div>
</div>

<div class="alert alert--warning">
  <div class="alert__icon">⚠</div>
  <div class="alert__content">Warnmeldung</div>
</div>

<div class="alert alert--info">
  <div class="alert__icon">ℹ</div>
  <div class="alert__content">Informationsmeldung</div>
</div>
```

### Ohne Icon

```html
<div class="alert alert--success">
  <div class="alert__content">Erfolgsmeldung ohne Icon</div>
</div>
```

### Schließbar

```html
<div class="alert alert--info alert--dismissible">
  <div class="alert__icon">ℹ</div>
  <div class="alert__content">Schließbare Meldung</div>
  <button class="alert__close" aria-label="Schließen">×</button>
</div>
```

### Mit Titel

```html
<div class="alert alert--warning">
  <div class="alert__icon">⚠</div>
  <div class="alert__content">
    <div class="alert__title">Achtung</div>
    <div>Ihre Sitzung läuft in 5 Minuten ab.</div>
  </div>
</div>
```

### Mit Aktionsbutton

```html
<div class="alert alert--info">
  <div class="alert__icon">ℹ</div>
  <div class="alert__content">
    <div>Updates sind verfügbar.</div>
    <button class="button button--sm button--outline alert__action">Jetzt aktualisieren</button>
  </div>
</div>
```

## CSS-Variablen

Die Alert-Komponente verwendet folgende CSS-Variablen:

```css
:root {
  --alert-padding: 1rem;
  --alert-border-radius: var(--border-radius, 0.25rem);
  --alert-margin-bottom: 1rem;
  --alert-border-width: 1px;
  
  --alert-success-bg: var(--color-success-light, #ecfdf5);
  --alert-success-color: var(--color-success-dark, #047857);
  --alert-success-border: var(--color-success, #10b981);
  
  --alert-error-bg: var(--color-error-light, #fef2f2);
  --alert-error-color: var(--color-error-dark, #b91c1c);
  --alert-error-border: var(--color-error, #ef4444);
  
  --alert-warning-bg: var(--color-warning-light, #fffbeb);
  --alert-warning-color: var(--color-warning-dark, #b45309);
  --alert-warning-border: var(--color-warning, #f59e0b);
  
  --alert-info-bg: var(--color-info-light, #eff6ff);
  --alert-info-color: var(--color-info-dark, #1e40af);
  --alert-info-border: var(--color-info, #3b82f6);
  
  --alert-icon-margin-right: 0.75rem;
  --alert-title-font-weight: 600;
  --alert-title-margin-bottom: 0.25rem;
  --alert-close-size: 1.5rem;
  --alert-close-opacity: 0.5;
  --alert-close-opacity-hover: 1;
}
```

## Best Practices

### Zugänglichkeit

- Verwenden Sie angemessene Kontrastfarben für den Text
- Fügen Sie ein `aria-label` zu schließbaren Alerts hinzu
- Verwenden Sie semantische Rollen (`role="alert"`) für wichtige Benachrichtigungen
- Stellen Sie sicher, dass Benachrichtigungen von Screenreadern korrekt gelesen werden

### Responsive Design

- Stellen Sie sicher, dass die Alerts auf allen Bildschirmgrößen lesbar sind
- Passen Sie Padding und Textgröße für mobile Geräte an
- Verwenden Sie Flexbox für flexibles Layout der Alert-Inhalte

### Verwendungszweck

- Erfolg (`alert--success`): Für erfolgreiche Aktionen oder positive Nachrichten
- Fehler (`alert--error`): Für Fehlermeldungen oder kritische Probleme
- Warnung (`alert--warning`): Für Warnungen oder Hinweise auf mögliche Probleme
- Info (`alert--info`): Für neutrale Informationen oder Hinweise

## JavaScript für interaktive Alert-Komponenten

```js
// alert.js
document.addEventListener('DOMContentLoaded', function() {
  // Funktionalität für schließbare Alerts
  document.querySelectorAll('.alert--dismissible .alert__close').forEach(button => {
    button.addEventListener('click', function() {
      const alert = this.closest('.alert');
      alert.style.opacity = '0';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 300);
    });
  });
  
  // Automatisch verschwindende Alerts
  document.querySelectorAll('.alert--auto-dismiss').forEach(alert => {
    setTimeout(() => {
      alert.style.opacity = '0';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 300);
    }, 5000); // verschwindet nach 5 Sekunden
  });
});
```

## HTML-Beispiel

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="output.css">
  <script src="alert.js"></script>
</head>
<body class="theme-day">
  <!-- Erfolgs-Alert -->
  <div class="alert alert--success custom-alert">
    <div class="alert__icon">✓</div>
    <div class="alert__content">Die Daten wurden erfolgreich gespeichert.</div>
  </div>

  <!-- Fehler-Alert mit Titel -->
  <div class="alert alert--error">
    <div class="alert__icon">✕</div>
    <div class="alert__content">
      <div class="alert__title">Fehler</div>
      <div>Die Verbindung zum Server konnte nicht hergestellt werden.</div>
    </div>
  </div>

  <!-- Schließbare Warnmeldung -->
  <div class="alert alert--warning alert--dismissible">
    <div class="alert__icon">⚠</div>
    <div class="alert__content">Ihre Sitzung läuft in 5 Minuten ab.</div>
    <button class="alert__close" aria-label="Schließen">×</button>
  </div>

  <!-- Automatisch verschwindende Info-Meldung -->
  <div class="alert alert--info alert--auto-dismiss">
    <div class="alert__icon">ℹ</div>
    <div class="alert__content">Diese Meldung verschwindet automatisch.</div>
  </div>
</body>
</html>
``` 
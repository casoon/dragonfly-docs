---
title: Alert
category: Components
---

# Alert

Die Alert-Komponente dient zur Anzeige von wichtigen Nachrichten und Benachrichtigungen.

## Beispiel

```html
<div class="alert alert-info">
  <div class="alert-title">Information</div>
  <div class="alert-message">Dies ist eine Informationsmeldung.</div>
</div>
```

## Alert-Typen

### Standard Alert

```html
<div class="alert">
  <div class="alert-title">Standard</div>
  <div class="alert-message">Dies ist ein Standard-Alert.</div>
</div>
```

### Info Alert

```html
<div class="alert alert-info">
  <div class="alert-title">Information</div>
  <div class="alert-message">Dies ist eine Informationsmeldung.</div>
</div>
```

### Success Alert

```html
<div class="alert alert-success">
  <div class="alert-title">Erfolg</div>
  <div class="alert-message">Der Vorgang wurde erfolgreich abgeschlossen.</div>
</div>
```

### Warning Alert

```html
<div class="alert alert-warning">
  <div class="alert-title">Warnung</div>
  <div class="alert-message">Bitte beachten Sie diesen wichtigen Hinweis.</div>
</div>
```

### Error Alert

```html
<div class="alert alert-error">
  <div class="alert-title">Fehler</div>
  <div class="alert-message">Ein Fehler ist aufgetreten.</div>
</div>
```

## Alerts im Grid-Layout

```vue
<Grid columns="2">
  <Card title="Erfolg">
    <div class="alert alert-success">
      <div class="alert-title">Erfolg</div>
      <div class="alert-message">Die Daten wurden gespeichert.</div>
      <Button>Schließen</Button>
    </div>
  </Card>
  <Card title="Information">
    <div class="alert alert-info">
      <div class="alert-title">Information</div>
      <div class="alert-message">Neue Updates verfügbar.</div>
      <Button>Jetzt aktualisieren</Button>
    </div>
  </Card>
  <Card title="Warnung">
    <div class="alert alert-warning">
      <div class="alert-title">Warnung</div>
      <div class="alert-message">Batteriestand niedrig.</div>
      <Button>Ignorieren</Button>
    </div>
  </Card>
  <Card title="Fehler">
    <div class="alert alert-error">
      <div class="alert-title">Fehler</div>
      <div class="alert-message">Netzwerkverbindung unterbrochen.</div>
      <Button>Erneut versuchen</Button>
    </div>
  </Card>
</Grid>
```

## Mit Icons

```html
<div class="alert alert-info">
  <div class="alert-icon">
    <span class="icon icon-info"></span>
  </div>
  <div class="alert-content">
    <div class="alert-title">Information</div>
    <div class="alert-message">Dies ist eine Informationsmeldung mit Icon.</div>
  </div>
</div>
```

## Schließbare Alerts

```html
<div class="alert alert-warning">
  <div class="alert-content">
    <div class="alert-title">Warnung</div>
    <div class="alert-message">Dieser Alert kann geschlossen werden.</div>
  </div>
  <button class="alert-close">
    <span class="icon icon-close"></span>
  </button>
</div>
```

## Props

| Name    | Typ     | Standard | Beschreibung                              |
|---------|---------|----------|-------------------------------------------|
| type    | String  | 'default'| Alert-Typ: 'info', 'success', 'warning', 'error' |
| title   | String  | ''       | Titel des Alerts                          |
| message | String  | ''       | Nachrichtentext des Alerts                |
| closable| Boolean | false    | Ob der Alert schließbar ist               |
| icon    | Boolean | true     | Ob ein Icon angezeigt wird                |

## CSS-Variablen

```css
:root {
  --alert-border-radius: var(--radius-md);
  --alert-padding: var(--spacing-4);
  --alert-margin: var(--spacing-4) 0;
  --alert-font-size: var(--font-size-base);
  
  --alert-default-bg: var(--color-gray-100);
  --alert-default-color: var(--color-gray-800);
  --alert-default-border: var(--color-gray-300);
  
  --alert-info-bg: var(--color-blue-100);
  --alert-info-color: var(--color-blue-800);
  --alert-info-border: var(--color-blue-300);
  
  --alert-success-bg: var(--color-green-100);
  --alert-success-color: var(--color-green-800);
  --alert-success-border: var(--color-green-300);
  
  --alert-warning-bg: var(--color-yellow-100);
  --alert-warning-color: var(--color-yellow-800);
  --alert-warning-border: var(--color-yellow-300);
  
  --alert-error-bg: var(--color-red-100);
  --alert-error-color: var(--color-red-800);
  --alert-error-border: var(--color-red-300);
}
``` 
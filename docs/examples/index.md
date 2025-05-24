---
title: Komplexe UI Beispiele
category: Examples
---

# Komplexe UI Beispiele

Diese Seite zeigt fortgeschrittene Beispiele, wie die Komponenten der Casoon UI Library zusammen verwendet werden können, um komplexe Benutzeroberflächenelemente zu erstellen.

## Übersicht

Die Beispiele in diesem Bereich zeigen, wie verschiedene Komponenten der Casoon UI Library kombiniert werden können, um komplexe Benutzeroberflächen zu erstellen. Diese Beispiele gehen über die Grundlagen hinaus und konzentrieren sich auf praktische Anwendungsfälle und fortgeschrittene Techniken.

### Beispiel-Kategorien

- **[Komplexe Layouts](/examples/layout/)** - Responsive Dashboard-Layouts, Split-Screen-Designs und gestapelte Komponenten
- **[Formularmuster](/examples/form/)** - Mehrstufige Formulare, Validierungsmuster und dynamische Formulare
- **[Fortgeschrittene Komponenten](/examples/advanced/)** - Komplexe Komponenten-Kombinationen und interaktive Elemente
- **[Visuelle Effekte](/examples/effects/)** - Kombinationen von Effekten für ansprechende visuelle Darstellungen

## Dashboard-Beispiel

Ein Dashboard mit verschiedenen Widget-Typen, responsivem Layout und interaktiven Elementen.

```html
<div class="dashboard">
  <header class="header">
    <h1>Analytics Dashboard</h1>
    <div class="user-info">
      <span class="avatar">JS</span>
      <div class="dropdown">
        <button class="button ghost">Admin <span class="icon">▼</span></button>
      </div>
    </div>
  </header>
  
  <div class="dashboard-grid">
    <div class="widget primary">
      <div class="widget-header">Besucher</div>
      <div class="widget-body">
        <div class="metric">12,345</div>
        <div class="change up">+15%</div>
      </div>
    </div>
    
    <div class="widget secondary">
      <div class="widget-header">Umsatz</div>
      <div class="widget-body">
        <div class="metric">€54,321</div>
        <div class="change up">+8%</div>
      </div>
    </div>
    
    <div class="widget">
      <div class="widget-header">Conversion Rate</div>
      <div class="widget-body">
        <div class="metric">3.8%</div>
        <div class="change down">-2%</div>
      </div>
    </div>
    
    <div class="widget full">
      <div class="widget-header">
        <h3>Monatliche Besucher</h3>
        <div class="widget-actions">
          <button class="button small outline">Filter</button>
          <button class="button small outline">Export</button>
        </div>
      </div>
      <div class="widget-body">
        <!-- Hier würde ein Chart stehen -->
        <div class="chart-placeholder"></div>
      </div>
    </div>
  </div>
</div>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 50%;
  font-weight: 600;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.widget.full {
  grid-column: 1 / -1;
}

.metric {
  font-size: 1.5rem;
  font-weight: 600;
}

.change {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.change.up {
  color: #10b981;
}

.change.down {
  color: #ef4444;
}

.chart-placeholder {
  height: 200px;
  background-color: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 0.375rem;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.widget-actions {
  display: flex;
  gap: 0.5rem;
}
</style>

## Mehrstufiges Formular

Ein komplexes mehrstufiges Formular mit Validierung und Fortschrittsanzeige.

```html
<div class="wizard">
  <div class="progress-bar">
    <div class="fill" style="width: 66%;"></div>
  </div>
  
  <div class="steps">
    <div class="step completed">
      <span class="indicator">1</span>
      <span class="title">Persönliche Informationen</span>
    </div>
    <div class="step active">
      <span class="indicator">2</span>
      <span class="title">Kontaktdetails</span>
    </div>
    <div class="step">
      <span class="indicator">3</span>
      <span class="title">Bestätigung</span>
    </div>
  </div>
  
  <div class="wizard-content">
    <h2>Kontaktdetails</h2>
    
    <div class="form-group">
      <label for="email">E-Mail-Adresse</label>
      <input type="email" id="email" class="input" placeholder="email@beispiel.de">
      <div class="helper">Wir werden Ihre E-Mail-Adresse nicht an Dritte weitergeben.</div>
    </div>
    
    <div class="form-group">
      <label for="phone">Telefonnummer</label>
      <input type="tel" id="phone" class="input" placeholder="+49 123 4567890">
    </div>
    
    <div class="form-group">
      <label for="address">Adresse</label>
      <textarea id="address" class="textarea" rows="3" placeholder="Straße, Hausnummer, PLZ, Stadt"></textarea>
    </div>
    
    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox" id="newsletter">
        <span>Newsletter abonnieren</span>
      </label>
    </div>
  </div>
  
  <div class="wizard-actions">
    <button class="button outline">Zurück</button>
    <button class="button primary">Weiter</button>
  </div>
</div>
```

## Erkunden Sie weitere komplexe Beispiele

Für weitere detaillierte Beispiele und Variationen besuchen Sie die spezifischen Beispielkategorien:

- [Komplexe Layouts](/examples/layout/) - Dashboard-Layouts, Split-Screen-Designs und mehr
- [Formularmuster](/examples/form/) - Mehrstufige Formulare, dynamische Formulare und Validierungsmuster
- [Fortgeschrittene Komponenten](/examples/advanced/) - Komplexe Komponenten-Kombinationen
- [Visuelle Effekte](/examples/effects/) - Kombinationen von Effekten für visuelle Darstellungen 
---
title: Übersetzungsleitfaden
category: Storybook
---

# Übersetzungsleitfaden: Deutsch nach Englisch

Dieser Leitfaden beschreibt den Prozess zur Übersetzung der Casoon UI Library Dokumentation von Deutsch nach Englisch. Er bietet strukturierte Anweisungen, um eine konsistente und qualitativ hochwertige Übersetzung sicherzustellen.

## Übersetzungsstrategie

Die Übersetzung erfolgt in mehreren Phasen:

1. **Vorbereitung**: Identifizierung aller zu übersetzenden Dateien und Erstellung einer Übersetzungsmatrix
2. **Übersetzung**: Systematische Übersetzung der Inhalte nach Priorität
3. **Review**: Prüfung der Übersetzungen auf Genauigkeit und Konsistenz
4. **Integration**: Einbindung der übersetzten Inhalte in die Dokumentation
5. **Veröffentlichung**: Deployment der mehrsprachigen Dokumentation

## Zu übersetzende Inhalte

Folgende Komponenten müssen übersetzt werden:

### 1. Markdown-Dateien

Alle Markdown-Dateien im `docs`-Verzeichnis und Unterverzeichnissen:

```bash
find docs -name "*.md" -type f | sort
```

### 2. VitePress-Konfiguration

Die Navigation, Seitenleisten und andere UI-Elemente in `docs/.vitepress/config.ts`:

```js
// Beispiel für Übersetzung der Navigation
nav: [
  { text: 'Home', link: '/' },              // Aus "Startseite"
  { text: 'Getting Started', link: '/getting-started/' },  // Aus "Erste Schritte"
  { text: 'Components', link: '/components/' },  // Aus "Komponenten"
  { text: 'Effects', link: '/guide/effects-system' },  // Aus "Effekte"
  { text: 'Storybook', link: '/storybook/' },
  { text: 'GitHub', link: 'https://github.com/casoon/ui-lib' }
]
```

### 3. Komponenten-Beispiele und Code-Snippets

Alle Beispiel-Code und deren Kommentare, besonders in den Storybook-Beispielen.

### 4. Seiten-Metadaten

Front-Matter in Markdown-Dateien:

```markdown
---
title: "Getting Started"  # Aus "Erste Schritte"
category: "Documentation"  # Aus "Dokumentation"
---
```

## Einrichten der Mehrsprachigkeit

### Sprachumschaltung in VitePress

1. Erstellen Sie eine Verzeichnisstruktur für mehrere Sprachen:

```
docs/
├── .vitepress/
├── de/          # Deutsche Inhalte (Original)
│   ├── index.md
│   ├── getting-started/
│   └── ...
└── en/          # Englische Inhalte (Übersetzung)
    ├── index.md
    ├── getting-started/
    └── ...
```

2. Aktualisieren Sie die VitePress-Konfiguration für Mehrsprachigkeit:

```js
// docs/.vitepress/config.ts
export default defineConfig({
  // ...
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      // Englische Konfiguration
      themeConfig: {
        // Englische Theme-Konfiguration
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      // Deutsche Konfiguration (aktuell)
      themeConfig: {
        // Deutsche Theme-Konfiguration
      }
    }
  }
})
```

## Übersetzungsworkflow

### 1. Erstellen Sie ein Übersetzungsinventar

Erstellen Sie eine Tabelle mit allen zu übersetzenden Dateien, ihrem Status und Verantwortlichen:

| Datei | Status | Verantwortlich | Überprüft |
|-------|--------|----------------|-----------|
| docs/index.md | Ausstehend | | |
| docs/getting-started/index.md | Ausstehend | | |
| ... | | | |

### 2. Übersetzungsrichtlinien

#### Allgemeine Richtlinien

- Behalten Sie Fachbegriffe in ihrer ursprünglichen Form bei, wenn sie in der Zielsprache üblich sind
- Verwenden Sie konsistente Übersetzungen für wiederkehrende Begriffe
- Respektieren Sie Markup und Formatierungen im Original

#### Technische Terminologie

| Deutsch | Englisch |
|---------|----------|
| Komponente | Component |
| Schaltfläche | Button |
| Eingabefeld | Input field |
| Seitenleiste | Sidebar |
| Kopfzeile | Header |
| Fußzeile | Footer |
| Hinweis | Alert |
| Benachrichtigung | Notification |
| Bestätigungsdialog | Confirmation dialog |
| ... | ... |

#### Code-Kommentare

Übersetzen Sie Kommentare im Code, behalten Sie aber Variablennamen und Funktionen bei:

```js
// Vor der Übersetzung
// Diese Funktion berechnet die Summe von a und b
function summe(a, b) {
  return a + b; // Gibt die Summe zurück
}

// Nach der Übersetzung
// This function calculates the sum of a and b
function summe(a, b) {
  return a + b; // Returns the sum
}
```

### 3. Übersetzungstools

Für eine effiziente Übersetzung empfehlen wir:

- **CAT-Tools** (Computer-Aided Translation): Werkzeuge wie [Crowdin](https://crowdin.com/), [Lokalise](https://lokalise.com/) oder [POEditor](https://poeditor.com/)
- **Terminologie-Management**: Erstellen Sie ein Glossar für konsistente Übersetzungen
- **Qualitätsprüfung**: Verwenden Sie Tools wie [textlint](https://textlint.github.io/) für Stilprüfungen

Alternativ für kleinere Projekte:
- Eine Kombination aus DeepL für Erstentwürfe und manuelle Nachbearbeitung
- Ein geteiltes Spreadsheet zur Terminologieverwaltung

## Integration der übersetzten Inhalte

### Schrittweise Integration

1. Beginnen Sie mit den wichtigsten Seiten:
   - Startseite
   - Installationsanleitung
   - Hauptkomponentendokumentation

2. Setzen Sie dann mit weniger kritischen Inhalten fort:
   - Erweiterte Guides
   - Beispiele
   - API-Referenzen

### Routing und Sprachumschaltung

Implementieren Sie einen Sprachschalter in der Navigation:

```html
<div class="language-switcher">
  <a href="/" class="language-option">English</a>
  <a href="/de/" class="language-option">Deutsch</a>
</div>
```

## Übersetzung der Storybook-Integration

### 1. Stories und Dokumentation

- Übersetzen Sie die Story-Beschreibungen und Parameter
- Behalten Sie die technischen Parameter und Komponentennamen bei

### 2. iframes für Stories

Aktualisieren Sie die iframes für Storybook:

```html
<!-- Vor der Übersetzung -->
<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  title="Primärer Button"
></iframe>

<!-- Nach der Übersetzung -->
<iframe
  src="https://casoon.github.io/ui-lib/storybook/iframe.html?id=components-button--primary&viewMode=story"
  title="Primary Button"
></iframe>
```

## Deployment und Veröffentlichung

### 1. Testen der übersetzten Version

Überprüfen Sie vor dem Deployment:
- Links und Navigation funktionieren korrekt
- Alle Inhalte sind übersetzt
- Das Rendering erfolgt korrekt

### 2. Konfiguration der Standardsprache

Konfigurieren Sie die Standardsprache in der VitePress-Konfiguration:

```js
export default defineConfig({
  // ...
  locales: {
    root: {
      label: 'English',
      lang: 'en'
      // Englisch als Root/Standard
    },
    de: {
      // ...
    }
  }
})
```

### 3. Redirects einrichten

Richten Sie Weiterleitungen ein, basierend auf den Spracheinstellungen des Browsers:

```js
// Beispiel für eine serverseitige Weiterleitung (Netlify _redirects)
/*  /de/:splat  302  Language=de
/*  /en/:splat  302
```

## Qualitätssicherung und Wartung

### Übersetzungs-Review

Etablieren Sie einen Review-Prozess:
- Technische Genauigkeit (Entwickler-Review)
- Sprachqualität (Übersetzer-Review)
- Benutzerfreundlichkeit (UX-Review)

### Kontinuierliche Aktualisierung

- Halten Sie die Übersetzungen synchron mit der Hauptdokumentation
- Aktualisieren Sie die Terminologiedatenbank regelmäßig
- Sammeln Sie Feedback von nicht-deutschsprachigen Nutzern

## Nächste Schritte

1. **Inventarisierung**: Erstellen Sie eine vollständige Liste aller zu übersetzenden Dateien
2. **Glossar**: Entwickeln Sie ein umfassendes Glossar technischer Begriffe
3. **Projektplan**: Definieren Sie Meilensteine und Verantwortlichkeiten
4. **Infrastruktur**: Richten Sie die Verzeichnisstruktur für mehrere Sprachen ein
5. **Beginnen Sie mit einer Pilotseite**: Übersetzen Sie eine repräsentative Seite als Proof of Concept

Durch die systematische Umsetzung dieses Leitfadens kann die Casoon UI Library Dokumentation erfolgreich internationalisiert werden, um ein breiteres, englischsprachiges Publikum zu erreichen. 
---
title: Übersetzungsleitfaden: Deutsch → Englisch
category: Projekt
---

# Übersetzungsleitfaden: Deutsch → Englisch

Dieser Leitfaden beschreibt den Workflow zur Übersetzung der Casoon UI Library Dokumentation ins Englische. Ziel ist eine konsistente, qualitativ hochwertige und wartbare englische Version der gesamten Dokumentation.

## 1. Zielsetzung

- **Vollständige Übersetzung** aller relevanten Markdown-Dateien, Komponentenbeispiele, Metadaten und der VitePress-Konfiguration.
- **Synchronität**: Die englische Version soll stets mit der deutschen Hauptdokumentation aktuell gehalten werden.
- **Konsistenz**: Einheitliche Terminologie und Übersetzungsstil durch Glossar und Review-Prozess.

## 2. Zu übersetzende Inhalte

- **Alle Markdown-Dateien** im Verzeichnis `docs/` und Unterverzeichnissen
- **VitePress-Konfiguration**: Navigation, Sidebar, Metadaten (`docs/.vitepress/config.ts`)
- **Komponentenbeispiele** und **Storybook-Stories**
- **Front-Matter** (Titel, Kategorien etc.)

## 3. Verzeichnisstruktur für Mehrsprachigkeit

Empfohlene Struktur:

```
docs/
├── .vitepress/
├── de/          # Deutsche Originale
│   ├── index.md
│   └── ...
└── en/          # Englische Übersetzungen
    ├── index.md
    └── ...
```

## 4. Übersetzungsworkflow

1. **Inventarisierung**: Liste aller zu übersetzenden Dateien anlegen (z.B. als Tabelle oder Spreadsheet).
2. **Glossar**: Technische Begriffe und UI-spezifische Termini in einer Tabelle Deutsch ↔ Englisch festlegen.
3. **Übersetzung**: 
   - Zuerst Hauptseiten (Start, Getting Started, Komponentenübersicht, Layout, Grid, Spacing, Utilities, Themes, Layer, Tokens, Forms, Colors, Color-Mix, Guides).
   - Anschließend erweiterte Guides, Beispiele, API-Referenzen.
   - Code-Kommentare und Storybook-Beschreibungen nicht vergessen!
4. **Review**: 
   - Technische Prüfung (Entwickler)
   - Sprachliche Prüfung (Übersetzer)
   - UX-Prüfung (Lesbarkeit, Verständlichkeit)
5. **Integration**: Übersetzte Dateien in `docs/en/` einpflegen, Navigation und Sidebar in der VitePress-Konfiguration anpassen.
6. **Test & Deployment**: 
   - Navigation, Links und Sprachumschaltung prüfen
   - Rendering und Formatierung kontrollieren
   - Deployment der englischen Version

## 5. Technische Hinweise

- **VitePress Mehrsprachigkeit**: In `docs/.vitepress/config.ts` die `locales`-Option nutzen, z.B.:
  ```js
  export default defineConfig({
    locales: {
      root: { label: 'English', lang: 'en', ... },
      de:   { label: 'Deutsch', lang: 'de', link: '/de/', ... }
    }
  })
  ```
- **Sprachumschalter**: In die Navigation einbauen, z.B. als Dropdown oder Link.
- **Front-Matter**: Titel, Kategorien etc. übersetzen.

## 6. Übersetzungsrichtlinien

- **Fachbegriffe**: Wenn im Englischen üblich, beibehalten (z.B. "Component", "Token", "Layer").
- **Konsistenz**: Wiederkehrende Begriffe immer gleich übersetzen (siehe Glossar).
- **Code-Kommentare**: Übersetzen, Variablennamen bleiben erhalten.
- **Beispiele**: Auch Beispieltexte und Storybook-Titel übersetzen.

## 7. Tools & Empfehlungen

- **CAT-Tools**: Für größere Projekte Crowdin, Lokalise, POEditor etc.
- **Glossar**: Gemeinsames Spreadsheet für Terminologie.
- **Qualitätsprüfung**: Tools wie textlint für Stil und Konsistenz.
- **Automatisierung**: Skripte für Inventarisierung und Status-Tracking.

## 8. Qualitätssicherung & Wartung

- **Review-Prozess** etablieren (technisch, sprachlich, UX)
- **Synchronisation**: Änderungen in der deutschen Doku regelmäßig in die englische Version übernehmen
- **Feedback** von englischsprachigen Nutzern einholen

## 9. Nächste Schritte

1. Inventarisierung aller zu übersetzenden Dateien
2. Glossar anlegen und freigeben
3. Pilotseite übersetzen und Review durchführen
4. Übersetzungsprozess für das gesamte Projekt starten

---

Mit diesem Leitfaden kann die Internationalisierung der Casoon UI Library Dokumentation systematisch und effizient umgesetzt werden. 
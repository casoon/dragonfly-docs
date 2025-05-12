
# 🧠 Cursor Tasks für casoon-ui-docs

Diese Datei definiert die Automatisierungs-Tasks für das Projekt `casoon-ui-docs`, das die Dokumentation des Designsystems [`casoon-ui-lib`](https://www.npmjs.com/package/casoon-ui-lib) enthält. Ziel ist es, eine wartbare und aktuelle Dokumentation zu gewährleisten.

---

## 🔍 1. Versionsprüfung

**Ziel:** Erkenne, ob sich die verwendete Version von `casoon-ui-lib` geändert hat.

**Task:**

- Vergleiche `package.json` Eintrag mit der dokumentierten Version.
- Wenn es eine neue Version gibt:
  - Hinweis ausgeben.
  - Nachfolgende Tasks auslösen.

---

## 📦 2. Komponenten-Diff & Doku-Abgleich

**Ziel:** Alle Komponenten aus `casoon-ui-lib` sind vollständig dokumentiert.

**Task:**

- Alle Exporte aus `casoon-ui-lib` auslesen.
- Existenz von Markdown-Dateien unter `docs/components/[component]/index.md` und prüfen.
- Bei neuen Komponenten:
  - `.md`-Datei mit folgendem Grundgerüst erstellen:

```md
---
title: [ComponentName]
category: Components
---

## Beispiel

```jsx
<[ComponentName] />
```

## Props

| Name | Typ | Beschreibung |
|------|-----|---------------|
|      |     |               |
```

- Bei gelöschten Komponenten: Warnung ausgeben.
- Bei Änderungen: Props-Tabelle aktualisieren.

---

## 🧩 3. Layer / Modules / Themes / Iconsets

**Ziel:** Überblick und Beispiele zu Struktur-Elementen im Designsystem.

**Task:**

- `docs/getting-started` um folgende Dateien ergänzen/prüfen:
  - `layout.md`
  - `tokens.md`
  - `themes.md`
  - `iconsets.md`

**Jede Datei enthält:**

- Erklärung der Funktion.
- Lightning CSS-Import:

```css
@import "casoon-ui-lib/dist/index.css";
```

- JSX-/Vue-Komponentenbeispiel zur Anwendung.

---

## 🎨 4. Visuelle Vorschau & Beispiel-Grid

**Ziel:** Komponenten im Kontext eines Layout-Grids darstellen.

**Task:**

- Demos mit `<Grid>`, `<Card>`, `<Button>` etc. in die jeweiligen `.md`-Dateien einfügen:

```vue
<Grid columns="3">
  <Card title="Info">
    <Button>Aktion</Button>
  </Card>
  <Card title="Hinweis">
    <Alert type="info">Info</Alert>
  </Card>
</Grid>
```

---


## 🔁 5. Cursor-Automatisierung mit Feedbackschleife

**Ziel:** Änderungen in Doku durch Cursor automatisiert, aber mit Rückfrage.

**Task:**

- Cursor darf Vorschläge generieren (neue `.md`, Prop-Updates etc.)
- Aber nur nach Bestätigung durch:

```md
<!-- @cursor ask: Diese Änderung an [component].md übernehmen? -->
```

- Bei Freigabe: Änderungen direkt einfügen und optional commit vorbereiten.

---

## 📚 6. Sidebar & Navigation automatisch aktualisieren

**Ziel:** Navigationsstruktur in `.vitepress/config.ts` bleibt konsistent.

**Task:**

- Bei neuen `.md`-Dateien automatisch `config.ts` aktualisieren.
- Neue Komponenten oder Guides zur Sidebar hinzufügen.

---

## ✅ Endziel

Ein Dokumentationssystem, das sich mit dem Designsystem entwickelt, durch Cursor automatisiert gepflegt wird und sowohl für Entwickler als auch Designer schnell verständlich ist – mit klarer visueller Unterstützung.

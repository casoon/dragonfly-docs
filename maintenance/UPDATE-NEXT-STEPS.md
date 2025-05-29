# Nächste Schritte zur Vervollständigung der Dokumentationsmigration

## 1. Migration der verbleibenden Komponenten

Folgende Komponenten müssen noch in die neue Struktur migriert werden:

### Basiskomponenten, die als UI Elements kategorisiert werden sollten:
- [ ] Alert
- [ ] Avatar
- [ ] Badge
- [ ] Button
- [ ] Checkbox
- [ ] Chip
- [ ] Code
- [ ] Input
- [ ] Radio
- [ ] Select
- [ ] Slider
- [ ] Spinner
- [ ] Switch
- [ ] Textarea
- [ ] Tooltip

### Komponenten, die als UI Components kategorisiert werden sollten:
- [ ] Card
- [ ] Footer
- [ ] Forms
- [ ] Header
- [ ] Input Group
- [ ] Modal
- [ ] Notification
- [ ] Progress
- [ ] Sidebar
- [ ] Skeleton
- [ ] Table
- [ ] Tabs
- [ ] Toast

### Fortgeschrittene Komponenten:
- [ ] Blog
- [ ] Hamburger Menu
- [ ] Widget
- [ ] Wizard

## 2. Anpassung der Komponenten-Dokumentation

Für jede migrierte Komponente sollten folgende Anpassungen vorgenommen werden:

1. **Pfadaktualisierung**: Import-Pfade auf die neue Struktur aktualisieren:
   ```css
   /* Alt */
   @import '@casoon/ui-lib/components/button.css';
   
   /* Neu */
   @import '@casoon/ui-lib/ui/elements/button.css';
   ```

2. **Übersetzung**: Alle Inhalte ins Deutsche übersetzen

3. **Versionsvariablen**: Version aus der zentralen Variable einbinden:
   ```html
   <script setup>
   import { UI_LIB_VERSION } from '../../../.vitepress/data/versions'
   </script>
   
   <!-- Im Inhalt verwenden -->
   Version {{ UI_LIB_VERSION }}
   ```

4. **Installationsanleitung**: Hinzufügen einer Installationsanleitung für jede Komponente

5. **Barrierefreiheitshinweise**: Hinzufügen oder Aktualisieren der Barrierefreiheitshinweise

6. **Browser-Kompatibilität**: Aktualisierung der Kompatibilitätstabellen auf aktuelle Versionen

## 3. Automatisierung der Migration

Um die Migration zu beschleunigen, könnte ein Skript erstellt werden, das folgende Aufgaben automatisiert:

```bash
#!/bin/bash

# Pfade definieren
SOURCE_DIR="docs/components"
TARGET_BASE_DIR="docs/ui"

# Arrays für die Komponententypen
ELEMENTS=(
  "avatar"
  "button"
  "checkbox"
  "chip"
  "code"
  "input"
  "radio"
  "select"
  "slider"
  "spinner"
  "switch"
  "textarea"
  "tooltip"
)

COMPONENTS=(
  "action-bar"
  "alert"
  "back-to-top"
  "badge"
  "breadcrumbs"
  "card"
  "dialog"
  "drawer"
  "footer"
  "forms:form"
  "header"
  "input-group"
  "modal"
  "notification"
  "pagination"
  "progress"
  "sidebar"
  "skeleton"
  "table"
  "tabs"
  "toast"
)

ADVANCED=(
  "blog"
  "hamburger"
  "widget"
  "wizard"
)

# Verzeichnisse erstellen
mkdir -p "$TARGET_BASE_DIR/elements"
mkdir -p "$TARGET_BASE_DIR/components"

# Elements migrieren
for element in "${ELEMENTS[@]}"; do
  SOURCE="$SOURCE_DIR/$element"
  TARGET="$TARGET_BASE_DIR/elements/$element"
  
  if [ -d "$SOURCE" ]; then
    echo "Migriere Element: $element"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
  else
    echo "Warnung: Element $element nicht gefunden"
  fi
done

# Components migrieren
for component in "${COMPONENTS[@]}"; do
  # Überprüfen, ob es ein Namens-Mapping gibt (format: old:new)
  if [[ $component == *":"* ]]; then
    IFS=':' read -r old_name new_name <<< "$component"
    SOURCE="$SOURCE_DIR/$old_name"
    TARGET="$TARGET_BASE_DIR/components/$new_name"
  else
    SOURCE="$SOURCE_DIR/$component"
    TARGET="$TARGET_BASE_DIR/components/$component"
  fi
  
  if [ -d "$SOURCE" ]; then
    echo "Migriere Komponente: $component"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
  else
    echo "Warnung: Komponente $component nicht gefunden"
  fi
done

# Advanced Components migrieren
for component in "${ADVANCED[@]}"; do
  SOURCE="$SOURCE_DIR/$component"
  TARGET="$TARGET_BASE_DIR/components/$component"
  
  if [ -d "$SOURCE" ]; then
    echo "Migriere Advanced-Komponente: $component"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
  else
    echo "Warnung: Advanced-Komponente $component nicht gefunden"
  fi
done

echo "Migration abgeschlossen."
```

## 4. Anpassungen nach der Migration

Nach der automatisierten Migration sollten folgende manuelle Anpassungen erfolgen:

1. **Inhaltliche Überprüfung**: Sicherstellen, dass alle Inhalte korrekt migriert wurden
2. **Import-Pfade aktualisieren**: Die Import-Pfade in den Markdown-Dateien aktualisieren
3. **Links überprüfen**: Interne Links anpassen, um auf die neue Struktur zu verweisen
4. **Versionsvariablen einbinden**: Die zentrale Versionsvariable in alle Dateien einbinden
5. **Übersetzung**: Inhalte ins Deutsche übersetzen
6. **Code-Beispiele anpassen**: Alle Code-Beispiele auf die neue Struktur aktualisieren

## 5. Dokumentations-Build und Tests

1. **Lokale Tests**:
   ```bash
   npm run docs:dev
   ```

2. **Überprüfung der Navigationspfade**: Sicherstellen, dass alle Navigationslinks funktionieren

3. **Vollständiger Build**:
   ```bash
   npm run docs:build
   ```

4. **Vorschau des Builds**:
   ```bash
   npm run docs:preview
   ```

## 6. Abschließende Schritte

1. **Übrig gebliebene alte Verzeichnisse entfernen**: Nach erfolgreicher Migration
2. **Dokumentation der Migrationsschritte**: Für zukünftige Referenz
3. **Aktualisierung der README.md**: Informationen zur neuen Struktur hinzufügen
4. **Versionsaktualisierung im Package**: Erhöhung der Versionsnummer der Dokumentation 
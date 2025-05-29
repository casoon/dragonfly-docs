#!/bin/bash

# Migrationsskript für Casoon UI Docs von Version 0.5.5 auf 0.6.8
# Dieses Skript migriert die Komponenten in die neue Verzeichnisstruktur

# Farbdefinitionen für die Ausgabe
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Pfade definieren
SOURCE_DIR="docs/components"
TARGET_BASE_DIR="docs/ui"
BACKUP_DIR="docs/.backup/components-$(date +%Y%m%d-%H%M%S)"

# Funktionen
log_info() {
  echo -e "${BLUE}INFO:${NC} $1"
}

log_success() {
  echo -e "${GREEN}ERFOLG:${NC} $1"
}

log_warning() {
  echo -e "${YELLOW}WARNUNG:${NC} $1"
}

log_error() {
  echo -e "${RED}FEHLER:${NC} $1"
}

# Arrays für die Komponententypen
ELEMENTS=(
  "avatar"
  "badge"
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
  "breadcrumbs"
  "card"
  "dialog"
  "drawer"
  "file"
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

# Prüfen, ob das Quellverzeichnis existiert
if [ ! -d "$SOURCE_DIR" ]; then
  log_error "Quellverzeichnis $SOURCE_DIR nicht gefunden. Abbruch."
  exit 1
fi

# Sicherheitskopie erstellen
log_info "Erstelle Sicherheitskopie der Komponenten in $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp -r "$SOURCE_DIR"/* "$BACKUP_DIR"/
log_success "Sicherheitskopie erstellt"

# Verzeichnisse erstellen
log_info "Erstelle Zielverzeichnisse"
mkdir -p "$TARGET_BASE_DIR/elements"
mkdir -p "$TARGET_BASE_DIR/components"
log_success "Zielverzeichnisse erstellt"

# Elements migrieren
log_info "Beginne Migration der UI Elements..."
for element in "${ELEMENTS[@]}"; do
  SOURCE="$SOURCE_DIR/$element"
  TARGET="$TARGET_BASE_DIR/elements/$element"
  
  if [ -d "$SOURCE" ]; then
    log_info "Migriere Element: $element"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
    log_success "Element $element migriert nach $TARGET"
  else
    log_warning "Element $element nicht gefunden in $SOURCE"
  fi
done

# Components migrieren
log_info "Beginne Migration der UI Components..."
for component in "${COMPONENTS[@]}"; do
  # Überprüfen, ob es ein Namens-Mapping gibt (format: old:new)
  if [[ $component == *":"* ]]; then
    IFS=':' read -r old_name new_name <<< "$component"
    SOURCE="$SOURCE_DIR/$old_name"
    TARGET="$TARGET_BASE_DIR/components/$new_name"
    log_info "Namens-Mapping erkannt: $old_name -> $new_name"
  else
    SOURCE="$SOURCE_DIR/$component"
    TARGET="$TARGET_BASE_DIR/components/$component"
  fi
  
  if [ -d "$SOURCE" ]; then
    log_info "Migriere Komponente: $component"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
    log_success "Komponente $component migriert nach $TARGET"
  else
    log_warning "Komponente $component nicht gefunden in $SOURCE"
  fi
done

# Advanced Components migrieren
log_info "Beginne Migration der Advanced Components..."
for component in "${ADVANCED[@]}"; do
  SOURCE="$SOURCE_DIR/$component"
  TARGET="$TARGET_BASE_DIR/components/$component"
  
  if [ -d "$SOURCE" ]; then
    log_info "Migriere Advanced-Komponente: $component"
    mkdir -p "$TARGET"
    cp -r "$SOURCE"/* "$TARGET"/
    log_success "Advanced-Komponente $component migriert nach $TARGET"
  else
    log_warning "Advanced-Komponente $component nicht gefunden in $SOURCE"
  fi
done

# Zusammenfassung
log_info "Migrationszusammenfassung:"
element_count=$(find "$TARGET_BASE_DIR/elements" -maxdepth 1 -type d | wc -l)
component_count=$(find "$TARGET_BASE_DIR/components" -maxdepth 1 -type d | wc -l)
element_count=$((element_count-1)) # Korrektur für das Verzeichnis selbst
component_count=$((component_count-1)) # Korrektur für das Verzeichnis selbst

log_success "$element_count UI Elements migriert"
log_success "$component_count UI Components migriert"
log_success "Migration abgeschlossen."
log_info "Nächste Schritte:"
log_info "1. Import-Pfade in den Markdown-Dateien aktualisieren"
log_info "2. Interne Links anpassen"
log_info "3. Versionsvariablen einbinden"
log_info "4. Inhalte ins Deutsche übersetzen"
log_info "5. Lokale Tests durchführen: npm run docs:dev"

# Berechtigungen setzen
chmod +x "$0" 
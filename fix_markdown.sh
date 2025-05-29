#!/bin/bash

# Dieses Skript korrigiert alle Markdown-Dateien, indem es das Frontmatter neu formatiert
# Es sucht nach Dateien mit Frontmatter und korrigiert die Formatierung

find docs -name "*.md" | while read file; do
  # Prüfen, ob die Datei ein Frontmatter hat (beginnt mit ---)
  if grep -q "^---" "$file"; then
    echo "Bearbeite $file..."
    
    # Temporäre Datei erstellen
    tmp_file=$(mktemp)
    
    # Frontmatter extrahieren und in temporäre Datei schreiben
    sed -n '/^---$/,/^---$/p' "$file" | grep -v "^$" > "$tmp_file"
    
    # Rest der Datei an temporäre Datei anhängen
    sed '1,/^---$/d' "$file" | sed '1,/^---$/d' >> "$tmp_file"
    
    # Temporäre Datei zurück in die Originaldatei kopieren
    cp "$tmp_file" "$file"
    
    # Temporäre Datei löschen
    rm "$tmp_file"
  fi
done

echo "Fertig! Alle Markdown-Dateien wurden korrigiert." 
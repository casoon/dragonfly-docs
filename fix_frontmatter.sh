#!/bin/bash

# Skript zur Entfernung der leeren Zeilen nach dem Frontmatter in Markdown-Dateien

# Finde alle Markdown-Dateien, die Frontmatter haben
FILES=$(find docs -name "*.md" | xargs grep -l "^---")

for file in $FILES
do
  echo "Prüfe $file..."
  
  # Ersetze das Muster '---\n\n' mit '---\n' um die leere Zeile zu entfernen
  sed -i '' -e '/^---$/,/^---$/{
    /^---$/b
    /^$/d
  }' "$file"
done

echo "Fertig! Alle leeren Zeilen innerhalb des Frontmatters wurden entfernt." 
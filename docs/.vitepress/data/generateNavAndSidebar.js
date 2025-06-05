// docs/.vitepress/data/generateNavAndSidebar.js
import fs from "fs";
import path from "path";

// Hauptnavigation (einfach, ohne Dropdown)
export function generateNav() {
  return [
    { text: "Home", link: "/", activeMatch: "^/$" },
    { text: "Getting Started", link: "/getting-started/" },
    { text: "Components", link: "/ui/" },
    { text: "Layout", link: "/layout/" },
    { text: "Effects", link: "/effects/" },
    { text: "Examples", link: "/examples/" },
  ];
}

// Sidebar automatisch aus Ordnerstruktur generieren
export function generateSidebar() {
  const docsPath = path.resolve(process.cwd(), "docs");
  const sidebar = {};

  // Definiere die Hauptbereiche
  const sections = [
    { path: "getting-started", title: "Getting Started" },
    { path: "ui", title: "UI System" },
    { path: "layout", title: "Layout System" },
    { path: "effects", title: "Effects System" },
    { path: "examples", title: "Examples" },
    { path: "core", title: "Core System" },
    { path: "tokens", title: "Design Tokens" },
    { path: "typography", title: "Typography" },
    { path: "themes", title: "Theme System" },
    { path: "icons", title: "Icon System" },
    { path: "utilities", title: "Utility Classes" },
    { path: "api", title: "API Reference" },
    { path: "compatibility", title: "Browser Compatibility" },
    { path: "accessibility", title: "Accessibility" },
    { path: "guide", title: "Advanced Guides" },
  ];

  sections.forEach((section) => {
    const sectionPath = path.join(docsPath, section.path);
    if (fs.existsSync(sectionPath)) {
      sidebar[`/${section.path}/`] = generateSidebarSection(
        sectionPath,
        section.title,
        `/${section.path}/`,
      );
    }
  });

  return sidebar;
}

// Generiere Sidebar für eine Sektion
function generateSidebarSection(sectionPath, sectionTitle, urlPrefix) {
  const items = [];

  // Hauptsektion hinzufügen
  items.push({
    text: sectionTitle,
    items: [{ text: "Overview", link: urlPrefix }],
  });

  // Scanne Unterverzeichnisse und Dateien
  const structure = scanDirectoryStructure(sectionPath, urlPrefix);
  items.push(...structure);

  return items;
}

// Scanne Verzeichnisstruktur rekursiv
function scanDirectoryStructure(dirPath, urlPrefix, level = 0) {
  const items = [];

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    // Trenne Verzeichnisse und Dateien
    const directories = entries.filter((entry) => entry.isDirectory());
    const files = entries.filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".md") &&
        entry.name !== "index.md",
    );

    // Sortiere alphabetisch
    directories.sort((a, b) => a.name.localeCompare(b.name));
    files.sort((a, b) => a.name.localeCompare(b.name));

    // Verarbeite Verzeichnisse
    directories.forEach((dir) => {
      const dirPath_full = path.join(dirPath, dir.name);
      const dirUrlPrefix = `${urlPrefix}${dir.name}/`;

      // Prüfe ob Unterverzeichnis index.md hat
      const indexPath = path.join(dirPath_full, "index.md");
      const hasIndex = fs.existsSync(indexPath);

      // Scanne Unterstruktur
      const subItems = scanDirectoryStructure(
        dirPath_full,
        dirUrlPrefix,
        level + 1,
      );
      const subFiles = fs
        .readdirSync(dirPath_full, { withFileTypes: true })
        .filter(
          (entry) =>
            entry.isFile() &&
            entry.name.endsWith(".md") &&
            entry.name !== "index.md",
        )
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((file) => ({
          text:
            getTitle(path.join(dirPath_full, file.name)) ||
            formatTitle(file.name.replace(".md", "")),
          link: `${dirUrlPrefix}${file.name.replace(".md", "")}/`,
        }));

      if (subItems.length > 0 || subFiles.length > 0) {
        // Verzeichnis mit Unterinhalt
        const dirTitle = getTitle(indexPath) || formatTitle(dir.name);
        const dirItems = [];

        // Overview Link falls index.md existiert
        if (hasIndex) {
          dirItems.push({ text: "Overview", link: dirUrlPrefix });
        }

        // Dateien direkt im Verzeichnis
        dirItems.push(...subFiles);

        // Unterverzeichnisse
        dirItems.push(...subItems);

        items.push({
          text: dirTitle,
          collapsed: level > 0, // Unterebenen standardmäßig eingeklappt
          items: dirItems,
        });
      } else if (hasIndex) {
        // Einzelnes Verzeichnis nur mit index.md
        const dirTitle = getTitle(indexPath) || formatTitle(dir.name);
        items.push({
          text: dirTitle,
          link: dirUrlPrefix,
        });
      }
    });

    // Verarbeite einzelne MD-Dateien im aktuellen Verzeichnis
    files.forEach((file) => {
      const filePath = path.join(dirPath, file.name);
      const fileName = file.name.replace(".md", "");
      const title = getTitle(filePath) || formatTitle(fileName);

      items.push({
        text: title,
        link: `${urlPrefix}${fileName}/`,
      });
    });
  } catch (error) {
    console.warn(`Fehler beim Scannen von ${dirPath}:`, error);
  }

  return items;
}

// Hole Titel aus Markdown-Datei
function getTitle(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, "utf-8");

    // Suche nach title im Frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\n/);
      if (titleMatch) return titleMatch[1];
    }

    // Suche nach dem ersten H1
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) return h1Match[1];

    return null;
  } catch (error) {
    return null;
  }
}

// Formatiere Dateinamen zu Titeln
function formatTitle(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Spezielle Behandlung für UI-Bereiche (falls unterschiedliche Titel gewünscht)
export function getUIStructure() {
  const docsPath = path.resolve(process.cwd(), "docs");
  const uiPath = path.join(docsPath, "ui");

  if (!fs.existsSync(uiPath)) return [];

  return generateSidebarSection(uiPath, "UI System", "/ui/");
}

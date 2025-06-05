// docs/.vitepress/data/menuLinks.js
import fs from "fs";
import path from "path";

// Funktion zum Scannen der Markdown-Dateien
function scanMarkdownFiles(baseDir) {
  const links = {};

  try {
    // Scanne UI-Verzeichnisse
    const uiPath = path.join(baseDir, "ui");

    if (fs.existsSync(uiPath)) {
      // Elements scannen
      const elementsPath = path.join(uiPath, "elements");
      if (fs.existsSync(elementsPath)) {
        links.elements = scanDirectory(elementsPath, "/ui/elements/");
      }

      // Components scannen
      const componentsPath = path.join(uiPath, "components");
      if (fs.existsSync(componentsPath)) {
        links.components = scanDirectory(componentsPath, "/ui/components/");
      }

      // Patterns scannen
      const patternsPath = path.join(uiPath, "patterns");
      if (fs.existsSync(patternsPath)) {
        links.patterns = scanDirectory(patternsPath, "/ui/patterns/");
      }
    }

    // Getting Started scannen
    const gettingStartedPath = path.join(baseDir, "getting-started");
    if (fs.existsSync(gettingStartedPath)) {
      links.gettingStarted = scanDirectory(
        gettingStartedPath,
        "/getting-started/",
      );
    }

    // Layout scannen
    const layoutPath = path.join(baseDir, "layout");
    if (fs.existsSync(layoutPath)) {
      links.layout = scanDirectory(layoutPath, "/layout/");
    }
  } catch (error) {
    console.warn("Fehler beim Scannen der Markdown-Dateien:", error);
  }

  return links;
}

function scanDirectory(dirPath, urlPrefix) {
  const items = [];

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Prüfe ob index.md oder README.md im Verzeichnis existiert
        const indexPath = path.join(dirPath, entry.name, "index.md");
        const readmePath = path.join(dirPath, entry.name, "README.md");

        if (fs.existsSync(indexPath) || fs.existsSync(readmePath)) {
          const title = formatTitle(entry.name);
          const description = getDescription(indexPath, readmePath);

          items.push({
            name: entry.name,
            title: title,
            description: description,
            link: `${urlPrefix}${entry.name}/`,
            exists: true,
          });
        }
      } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
        // Einzelne MD-Dateien
        const name = entry.name.replace(".md", "");
        const title = formatTitle(name);
        const filePath = path.join(dirPath, entry.name);
        const description = getDescriptionFromFile(filePath);

        items.push({
          name: name,
          title: title,
          description: description,
          link: `${urlPrefix}${name}/`,
          exists: true,
        });
      }
    }
  } catch (error) {
    console.warn(`Fehler beim Scannen von ${dirPath}:`, error);
  }

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

function formatTitle(name) {
  // Konvertiere kebab-case zu Title Case
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getDescription(indexPath, readmePath) {
  const filePath = fs.existsSync(indexPath) ? indexPath : readmePath;
  return getDescriptionFromFile(filePath);
}

function getDescriptionFromFile(filePath) {
  if (!fs.existsSync(filePath)) return "Component description";

  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Suche nach der ersten Beschreibung im Frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const descMatch = frontmatter.match(/description:\s*["']?(.*?)["']?\n/);
      if (descMatch) return descMatch[1];
    }

    // Suche nach dem ersten Paragraph nach dem Titel
    const lines = content.split("\n");
    let foundTitle = false;

    for (const line of lines) {
      if (line.startsWith("# ")) {
        foundTitle = true;
        continue;
      }

      if (foundTitle && line.trim() && !line.startsWith("#")) {
        // Entferne Markdown-Syntax
        return line.replace(/[*_`]/g, "").trim();
      }
    }

    return "Component description";
  } catch (error) {
    return "Component description";
  }
}

// Hauptfunktion für VitePress
export function getMenuLinks() {
  const docsPath = path.resolve(process.cwd(), "docs");
  return scanMarkdownFiles(docsPath);
}

// Fallback-Daten wenn Scanning fehlschlägt - EXPORT hinzugefügt
export const FALLBACK_LINKS = {
  elements: [
    {
      name: "avatar",
      title: "Avatar",
      description: "User profile images",
      link: "/ui/elements/avatar/",
      exists: false,
    },
    {
      name: "badge",
      title: "Badge",
      description: "Status indicators",
      link: "/ui/elements/badge/",
      exists: false,
    },
    {
      name: "button",
      title: "Button",
      description: "Action triggers",
      link: "/ui/elements/button/",
      exists: false,
    },
    {
      name: "checkbox",
      title: "Checkbox",
      description: "Multi-select controls",
      link: "/ui/elements/checkbox/",
      exists: false,
    },
    {
      name: "chip",
      title: "Chip",
      description: "Tag elements",
      link: "/ui/elements/chip/",
      exists: false,
    },
    {
      name: "code",
      title: "Code",
      description: "Code snippets",
      link: "/ui/elements/code/",
      exists: false,
    },
    {
      name: "input",
      title: "Input",
      description: "Text inputs",
      link: "/ui/elements/input/",
      exists: false,
    },
    {
      name: "radio",
      title: "Radio",
      description: "Single-select controls",
      link: "/ui/elements/radio/",
      exists: false,
    },
    {
      name: "select",
      title: "Select",
      description: "Dropdown menus",
      link: "/ui/elements/select/",
      exists: false,
    },
    {
      name: "slider",
      title: "Slider",
      description: "Range controls",
      link: "/ui/elements/slider/",
      exists: false,
    },
    {
      name: "switch",
      title: "Switch",
      description: "Toggle controls",
      link: "/ui/elements/switch/",
      exists: false,
    },
    {
      name: "textarea",
      title: "Textarea",
      description: "Multi-line input",
      link: "/ui/elements/textarea/",
      exists: false,
    },
  ],
  components: [
    {
      name: "card",
      title: "Card",
      description: "Content containers",
      link: "/ui/components/card/",
      exists: false,
    },
    {
      name: "modal",
      title: "Modal",
      description: "Overlay dialogs",
      link: "/ui/components/modal/",
      exists: false,
    },
    {
      name: "table",
      title: "Table",
      description: "Data tables",
      link: "/ui/components/table/",
      exists: false,
    },
    {
      name: "tabs",
      title: "Tabs",
      description: "Tab navigation",
      link: "/ui/components/tabs/",
      exists: false,
    },
    {
      name: "dropdown",
      title: "Dropdown",
      description: "Context menus",
      link: "/ui/components/dropdown/",
      exists: false,
    },
    {
      name: "toast",
      title: "Toast",
      description: "Notifications",
      link: "/ui/components/toast/",
      exists: false,
    },
  ],
  patterns: [
    {
      name: "tags",
      title: "Tags",
      description: "Tag patterns",
      link: "/ui/patterns/tags/",
      exists: false,
    },
    {
      name: "forms",
      title: "Forms",
      description: "Form layouts",
      link: "/ui/patterns/forms/",
      exists: false,
    },
    {
      name: "navigation",
      title: "Navigation",
      description: "Nav patterns",
      link: "/ui/patterns/navigation/",
      exists: false,
    },
  ],
  gettingStarted: [
    {
      name: "overview",
      title: "Overview",
      description: "Getting started guide",
      link: "/getting-started/",
      exists: false,
    },
    {
      name: "installation",
      title: "Installation",
      description: "Setup instructions",
      link: "/getting-started/installation/",
      exists: false,
    },
    {
      name: "themes",
      title: "Themes",
      description: "Theme configuration",
      link: "/getting-started/themes/",
      exists: false,
    },
  ],
  layout: [
    {
      name: "grid",
      title: "Grid",
      description: "Grid layouts",
      link: "/layout/grid/",
      exists: false,
    },
    {
      name: "flexbox",
      title: "Flexbox",
      description: "Flex layouts",
      link: "/layout/flexbox/",
      exists: false,
    },
    {
      name: "containers",
      title: "Containers",
      description: "Content containers",
      link: "/layout/containers/",
      exists: false,
    },
    {
      name: "responsive",
      title: "Responsive",
      description: "Responsive design",
      link: "/layout/responsive/",
      exists: false,
    },
  ],
};

---
title: Storybook Integration
category: Storybook
---

# Storybook Integration

Die Casoon UI Library bietet eine nahtlose Integration mit Storybook, einem leistungsstarken Werkzeug für die Entwicklung und Dokumentation von UI-Komponenten. Diese Integration ermöglicht es, interaktive Beispiele direkt in der VitePress-Dokumentation einzubetten und ein umfassendes Entwicklungserlebnis zu schaffen.

## Was ist Storybook?

Storybook ist eine Open-Source-Umgebung zum Entwickeln UI-Komponenten in Isolation. Es ermöglicht Entwicklern, Komponenten unabhängig von ihrer Anwendung zu erstellen, zu testen und zu dokumentieren. Die Hauptvorteile sind:

- **Isolierte Komponentenentwicklung**: Erstellen und testen Sie Komponenten unabhängig von Ihrer Anwendungslogik
- **Interaktive Dokumentation**: Zeigen Sie die Komponenten in verschiedenen Zuständen und mit verschiedenen Parametern
- **Visuelle Tests**: Erkennen Sie visuell, wenn Änderungen unbeabsichtigte Auswirkungen haben
- **Zentraler Sammelplatz**: Fungiert als zentrale Anlaufstelle für Designer und Entwickler

## Storybook in der Casoon UI Library

In der Casoon UI Library wird Storybook verwendet, um:

1. **Alle Komponenten zu dokumentieren**: Jede Komponente verfügt über ihre eigene Story, die ihre verschiedenen Zustände und Verwendungsmöglichkeiten zeigt
2. **Design-Tokens zu visualisieren**: Farben, Typografie, Abstände und andere Designvariablen werden anschaulich dargestellt
3. **Interaktive Beispiele zu bieten**: Nutzer können mit Komponenten interagieren und Eigenschaften in Echtzeit ändern
4. **Best Practices zu demonstrieren**: Die Stories zeigen empfohlene Verwendungsmuster

## Zugriff auf das Storybook

Das Storybook der Casoon UI Library ist an den folgenden Stellen verfügbar:

- **Online**: [https://casoon.github.io/ui-lib/storybook](https://casoon.github.io/ui-lib/storybook)
- **Lokal**: Nach der Installation der Bibliothek kann das Storybook lokal ausgeführt werden mit:

```bash
npx storybook@latest dev -p 6006 -c node_modules/@casoon/ui-lib/.storybook
```

## VitePress und Storybook: Eine leistungsstarke Kombination

Die Integration von VitePress (diese Dokumentation) und Storybook bietet einen umfassenden Ansatz für die Dokumentation:

- **VitePress** bietet detaillierte Erklärungen, Konzepte und Anleitungen
- **Storybook** zeigt interaktive Beispiele, Variationen und praktische Anwendungsfälle

Gemeinsam bilden sie ein leistungsstarkes Referenzsystem für Entwickler, die mit der Casoon UI Library arbeiten.

## Nächste Schritte

Entdecken Sie die Integration von Storybook in dieser Dokumentation:

- [Integration einrichten](/storybook/integration) - Erfahren Sie, wie Sie Storybook in Ihren eigenen Projekten einrichten
- [Komponenten-Beispiele](/storybook/component-examples) - Sehen Sie sich die Beispiele für alle UI-Komponenten an
- [Einbetten von Stories](/storybook/embedding) - Lernen Sie, wie Sie Storybook-Beispiele in Ihre eigene Dokumentation einbetten können 
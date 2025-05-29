---
title: Visual Containers
category: Layout
---

# Visual Containers

Die Casoon UI Library bietet spezielle visuelle Container, die über die strukturellen Aspekte hinaus das visuelle Erscheinungsbild und die Präsentation von Inhalten verbessern. Diese Dokumentation erklärt die verfügbaren visuellen Container und ihre Anwendungsfälle.

## Overview

Visuelle Container erweitern das Container-System um folgende Aspekte:

1. **Schattierungen und Tiefe** - Container mit verschiedenen Schatten und Tiefeneffekten
2. **Rahmen und Kanten** - Container mit unterschiedlichen Rahmen und Kantenbehandlungen
3. **Hintergründe und Texturen** - Container mit speziellen Hintergründen und Textureffekten
4. **Farbverläufe und Effekte** - Container mit Farbverläufen und visuellen Effekten
5. **Animationen** - Container mit eingebauten Animationseffekten

## Shadow Containers

Container mit verschiedenen Schatteneffekten für Tiefenwirkung:

```html
<div class="shadow-container shadow-sm">
  <p>Container mit leichtem Schatten</p>
</div>

<div class="shadow-container shadow-md">
  <p>Container mit mittlerem Schatten</p>
</div>

<div class="shadow-container shadow-lg">
  <p>Container mit großem Schatten</p>
</div>

<div class="shadow-container shadow-float">
  <p>Schwebender Container</p>
</div>
```

Implementierung:

```css
.shadow-container {
  padding: var(--space-4);
  background-color: var(--color-background);
  border-radius: var(--radius-md);
}

.shadow-sm {
  box-shadow: var(--shadow-sm);
}

.shadow-md {
  box-shadow: var(--shadow-md);
}

.shadow-lg {
  box-shadow: var(--shadow-lg);
}

.shadow-float {
  box-shadow: var(--shadow-float);
}
```

## Border Containers

Container mit verschiedenen Rahmentypen:

```html
<div class="border-container border-solid">
  <p>Container mit durchgehendem Rahmen</p>
</div>

<div class="border-container border-dashed">
  <p>Container mit gestricheltem Rahmen</p>
</div>

<div class="border-container border-accent">
  <p>Container mit farbigem Akzentrahmen</p>
</div>

<div class="border-container border-top">
  <p>Container mit oberem Rahmen</p>
</div>
```

Implementierung:

```css
.border-container {
  padding: var(--space-4);
  background-color: var(--color-background);
}

.border-solid {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.border-dashed {
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
}

.border-accent {
  border: 1px solid var(--color-primary-500);
  border-radius: var(--radius-md);
}

.border-top {
  border-top: 2px solid var(--color-primary-500);
}
```

## Glass Container

Container mit Glaseffekt:

```html
<div class="glass-container">
  <h2>Glaseffekt-Container</h2>
  <p>Dieser Container hat einen modernen Glaseffekt.</p>
</div>
```

Implementierung:

```css
.glass-container {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

## Gradient Container

Container mit verschiedenen Farbverlaufseffekten:

```html
<div class="gradient-container gradient-primary">
  <h2>Primärer Farbverlauf</h2>
  <p>Container mit primärem Farbverlauf.</p>
</div>

<div class="gradient-container gradient-rainbow">
  <h2>Regenbogen-Farbverlauf</h2>
  <p>Container mit Regenbogen-Farbverlauf.</p>
</div>
```

Implementierung:

```css
.gradient-container {
  padding: var(--space-6);
  border-radius: var(--radius-md);
  color: white;
}

.gradient-primary {
  background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600));
}

.gradient-rainbow {
  background: linear-gradient(to right, #ff7676, #f6c767, #76eda2, #76d3ed, #b67aff);
}
```

## Texture Container

Container mit verschiedenen Textureffekten:

```html
<div class="texture-container texture-noise">
  <h2>Noise-Textur</h2>
  <p>Container mit subtiler Noise-Textur.</p>
</div>

<div class="texture-container texture-pattern">
  <h2>Muster-Textur</h2>
  <p>Container mit Muster-Hintergrund.</p>
</div>
```

Implementierung:

```css
.texture-container {
  padding: var(--space-6);
  border-radius: var(--radius-md);
  background-color: var(--color-background);
}

.texture-noise {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.texture-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
```

## Card Container

Spezialisierte Container für Karteninhalte:

```html
<div class="card-container">
  <div class="card-header">
    <h3>Kartentitel</h3>
  </div>
  <div class="card-body">
    <p>Karteninhalt geht hier...</p>
  </div>
  <div class="card-footer">
    <button class="btn">Aktion</button>
  </div>
</div>
```

Implementierung:

```css
.card-container {
  background-color: var(--color-background);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.card-header {
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-subtle);
}

.card-body {
  padding: var(--space-4);
}

.card-footer {
  padding: var(--space-4);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-background-subtle);
}
```

## Glow Container

Container mit Leuchteffekten:

```html
<div class="glow-container glow-primary">
  <h2>Leuchtender Container</h2>
  <p>Dieser Container hat einen subtilen Leuchteffekt.</p>
</div>
```

Implementierung:

```css
.glow-container {
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  background-color: var(--color-background);
  position: relative;
}

.glow-primary {
  box-shadow: 0 0 15px var(--color-primary-300);
}

.glow-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--radius-lg);
  padding: 2px;
  background: linear-gradient(135deg, var(--color-primary-300), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

## Animated Container

Container mit eingebauten Animationseffekten:

```html
<div class="animated-container fade-in">
  <p>Dieser Container blendet sich ein.</p>
</div>

<div class="animated-container slide-up">
  <p>Dieser Container gleitet nach oben.</p>
</div>

<div class="animated-container pulse-hover">
  <p>Dieser Container pulsiert beim Hover.</p>
</div>
```

Implementierung:

```css
.animated-container {
  padding: var(--space-4);
  background-color: var(--color-background);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

.slide-up {
  animation: slideUp 0.5s ease-out;
}

.pulse-hover {
  transition: transform 0.3s ease;
}

.pulse-hover:hover {
  transform: scale(1.03);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

## Rounded Corner Variants

Container mit verschiedenen Eckenradien:

```html
<div class="rounded-container rounded-sm">
  <p>Leicht abgerundete Ecken</p>
</div>

<div class="rounded-container rounded-md">
  <p>Mittel abgerundete Ecken</p>
</div>

<div class="rounded-container rounded-lg">
  <p>Stark abgerundete Ecken</p>
</div>

<div class="rounded-container rounded-full">
  <p>Vollständig abgerundete Ecken</p>
</div>
```

Implementierung:

```css
.rounded-container {
  padding: var(--space-4);
  background-color: var(--color-background-subtle);
  margin-bottom: var(--space-4);
}

.rounded-sm {
  border-radius: var(--radius-sm);
}

.rounded-md {
  border-radius: var(--radius-md);
}

.rounded-lg {
  border-radius: var(--radius-lg);
}

.rounded-full {
  border-radius: var(--radius-full);
}
```

## Best Practices

1. **Konsistenz wahren** - Verwenden Sie visuelle Container einheitlich im gesamten Design
2. **Visuelle Hierarchie unterstützen** - Setzen Sie visuelle Container gezielt ein, um Wichtigkeit zu signalisieren
3. **Performance beachten** - Komplexe visuelle Effekte können die Performance beeinträchtigen, besonders auf mobilen Geräten
4. **Barrierefreiheit nicht vernachlässigen** - Stellen Sie sicher, dass der Kontrast zwischen Vorder- und Hintergrund ausreichend ist
5. **Responsive Anpassungen vornehmen** - Passen Sie visuelle Effekte für verschiedene Bildschirmgrößen an
6. **Übermäßige Verwendung vermeiden** - Zu viele visuelle Effekte können ablenkend wirken
7. **Fallbacks implementieren** - Sorgen Sie für angemessene Fallbacks in älteren Browsern

## Anwendungsfälle

### Feature-Showcase

```html
<div class="container">
  <div class="card-container shadow-float">
    <img src="feature.jpg" alt="Feature" class="w-full">
    <div class="card-body">
      <h3>Hauptfunktion</h3>
      <p>Beschreibung der wichtigsten Funktion Ihres Produkts.</p>
    </div>
  </div>
</div>
```

### Call-to-Action-Sektion

```html
<div class="gradient-container gradient-primary">
  <div class="container py-12 text-center">
    <h2 class="text-2xl font-bold mb-4">Bereit loszulegen?</h2>
    <p class="mb-6">Melden Sie sich noch heute an und beginnen Sie mit unserem Produkt.</p>
    <button class="btn btn-light">Jetzt anmelden</button>
  </div>
</div>
```

### Testimonial-Sektion

```html
<div class="container py-12">
  <h2 class="text-2xl font-bold mb-8 text-center">Was unsere Kunden sagen</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="glass-container">
      <p class="mb-4">"Dieses Produkt hat unser Geschäft verändert. Wir sind jetzt 50% effizienter."</p>
      <div class="flex items-center">
        <img src="avatar1.jpg" alt="Kundenprofilbild" class="w-10 h-10 rounded-full mr-3">
        <div>
          <h4 class="font-semibold">Max Mustermann</h4>
          <p class="text-sm">CEO, Musterfirma GmbH</p>
        </div>
      </div>
    </div>
    
    <!-- Weitere Testimonials -->
  </div>
</div>
```

## Browser-Kompatibilität

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Border Radius | Alle | Alle | Alle | Alle |
| Box Shadow | Alle | Alle | Alle | Alle |
| Gradient | Alle | Alle | Alle | Alle |
| Backdrop Filter | 76+ | 70+ | 9+ | 17+ |
| Animations | Alle | Alle | Alle | Alle |

Für ältere Browser bietet die Bibliothek Fallbacks für nicht unterstützte Eigenschaften an.

## Zusammenfassung

Visuelle Container der Casoon UI Library bieten leistungsstarke Möglichkeiten, um Ihre Benutzeroberfläche visuell ansprechender zu gestalten. Durch die Verwendung von Schatten, Rahmen, Farbverläufen, Texturen und anderen visuellen Effekten können Sie die Benutzererfahrung verbessern und wichtige Inhalte hervorheben. Diese Container sind besonders nützlich für Landingpages, Produktpräsentationen und andere Bereiche, in denen die visuelle Gestaltung eine wichtige Rolle spielt. 
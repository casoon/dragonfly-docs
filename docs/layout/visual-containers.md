---
title: Visual Containers
category: layout
---

# Visual Containers

the Casoon UI Library bietet spezielle visuelle containers, the over the strukturellen Aspekte hinaus the visuelle Erscheinungsbild and the Prasentation from Inhalten verbessern. these Documentation erklart the verfugbaren visuellen containers and ihre Use Cases.

## Overview

Visuelle containers extend the containers system um folgende Aspekte:

1. **Schattierungen and Tiefe** - containers with verschiedenen shadow and Tiefeneffekten
2. **border and Kanten** - containers with unterschiedlichen border and Kantenbehandlungen
3. **Hintergrunde and Texturen** - containers with speziellen Hintergrunden and Textureffekten
4. **Farbverlaufe and effects** - containers with Farbverlaufen and visuellen Effekten
5. **animations** - containers with eingebauten Animationseffekten

## Shadow Containers

containers with verschiedenen Schatteneffekten for Tiefenwirkung:

```html
<div class="shadow-containers shadow-sm">
  <p>containers with leichtem shadow</p>
</div>

<div class="shadow-containers shadow-md">
  <p>containers with mittlerem shadow</p>
</div>

<div class="shadow-containers shadow-lg">
  <p>containers with grossem shadow</p>
</div>

<div class="shadow-containers shadow-float">
  <p>Schwebender containers</p>
</div>
```

Implementation:

```css
.shadow-containers {
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

containers with verschiedenen Rahmentypen:

```html
<div class="border-containers border-solid">
  <p>containers with durchgehendem border</p>
</div>

<div class="border-containers border-dashed">
  <p>containers with gestricheltem border</p>
</div>

<div class="border-containers border-accent">
  <p>containers with farbigem Akzentrahmen</p>
</div>

<div class="border-containers border-top">
  <p>containers with oberem border</p>
</div>
```

Implementation:

```css
.border-containers {
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

## Glass containers

containers with Glaseffekt:

```html
<div class="glass-containers">
  <h2>Glaseffekt-containers</h2>
  <p>this containers hat einen modernen Glaseffekt.</p>
</div>
```

Implementation:

```css
.glass-containers {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

## Gradient containers

containers with verschiedenen Farbverlaufseffekten:

```html
<div class="gradient-containers gradient-primary">
  <h2>Primarer gradient</h2>
  <p>containers with primarem gradient.</p>
</div>

<div class="gradient-containers gradient-rainbow">
  <h2>Regenbogen-gradient</h2>
  <p>containers with Regenbogen-gradient.</p>
</div>
```

Implementation:

```css
.gradient-containers {
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

## Texture containers

containers with verschiedenen Textureffekten:

```html
<div class="texture-containers texture-noise">
  <h2>Noise-Textur</h2>
  <p>containers with subtiler Noise-Textur.</p>
</div>

<div class="texture-containers texture-pattern">
  <h2>pattern-Textur</h2>
  <p>containers with pattern-background.</p>
</div>
```

Implementation:

```css
.texture-containers {
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

## Card containers

Spezialisierte containers for Cardninhalte:

```html
<div class="card-containers">
  <div class="card-header">
    <h3>Cardntitel</h3>
  </div>
  <div class="card-body">
    <p>Cardninhalt geht hier...</p>
  </div>
  <div class="card-footer">
    <button class="btn">Aktion</button>
  </div>
</div>
```

Implementation:

```css
.card-containers {
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

## Glow containers

containers with Leuchteffekten:

```html
<div class="glow-containers glow-primary">
  <h2>Leuchtender containers</h2>
  <p>this containers hat einen subtilen Leuchteffekt.</p>
</div>
```

Implementation:

```css
.glow-containers {
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

## Animated containers

containers with eingebauten Animationseffekten:

```html
<div class="animated-containers fade-in">
  <p>this containers blendet oneself a.</p>
</div>

<div class="animated-containers slide-up">
  <p>this containers gleitet after oben.</p>
</div>

<div class="animated-containers pulse-hover">
  <p>this containers pulsiert beim Hover.</p>
</div>
```

Implementation:

```css
.animated-containers {
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

containers with verschiedenen Eckenradien:

```html
<div class="rounded-containers rounded-sm">
  <p>Leicht abgerundete Ecken</p>
</div>

<div class="rounded-containers rounded-md">
  <p>Mittel abgerundete Ecken</p>
</div>

<div class="rounded-containers rounded-lg">
  <p>Stark abgerundete Ecken</p>
</div>

<div class="rounded-containers rounded-full">
  <p>Vollstandig abgerundete Ecken</p>
</div>
```

Implementation:

```css
.rounded-containers {
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

1. **Consistency wahren** - use them visuelle containers einheitlich im gesamten design
2. **Visuelle Hierarchie unterstutzen** - Setzen them visuelle containers gezielt a, um importance to signalisieren
3. **Performance note** - Komplexe visuelle effects can the Performance beeintrachtigen, besonders on mobilen Geraten
4. **Accessibility not vernachlassigen** - ensure, that the Kontrast between Vorder- and background ausreichend ist
5. **responsive customizations vornehmen** - Passen them visuelle effects for verschiedene Bildschirmgrossen on
6. **Ubermassige Usage vermeiden** - to many visuelle effects can ablenkend wirken
7. **Fallbacks implement** - Sorgen them for angemessene Fallbacks in alteren Browsern

## Use Cases

### Feature-Showcase

```html
<div class="containers">
  <div class="card-containers shadow-float">
    <img src="feature.jpg" alt="Feature" class="w-full">
    <div class="card-body">
      <h3>Hauptfunktion</h3>
      <p>Description the wichtigsten Function Ihres Produkts.</p>
    </div>
  </div>
</div>
```

### Call-to-Action-section

```html
<div class="gradient-containers gradient-primary">
  <div class="containers py-12 text-center">
    <h2 class="text-2xl font-bold mb-4">Bereit loszulegen?</h2>
    <p class="mb-6">Melden them oneself noch heute on and beginnen them with unserem Produkt.</p>
    <button class="btn btn-light">Jetzt anmelden</button>
  </div>
</div>
```

### Testimonial-section

```html
<div class="containers py-12">
  <h2 class="text-2xl font-bold mb-8 text-center">what unsere Kunden sagen</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="glass-containers">
      <p class="mb-4">"this Produkt hat our Geschaft verandert. we sind jetzt 50% effizienter."</p>
      <div class="flex items-center">
        <img src="avatar1.jpg" alt="Kundenprofilbild" class="w-10 h-10 rounded-full mr-3">
        <div>
          <h4 class="font-semibold">Max Mustermann</h4>
          <p class="text-sm">CEO, Musterfirma GmbH</p>
        </div>
      </div>
    </div>
    
    <!-- additional Testimonials -->
  </div>
</div>
```

## Browser-Kompatibilitat

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Border Radius | all | all | all | all |
| box Shadow | all | all | all | all |
| Gradient | all | all | all | all |
| Backdrop Filter | 76+ | 70+ | 9+ | 17+ |
| Animations | all | all | all | all |

for altere Browser bietet the Bibliothek Fallbacks for not unterstutzte properties on.

## Zusammenfassung

Visuelle containers the Casoon UI Library bieten leistungsstarke Moglichkeiten, um Ihre Benutzeroberflache visuell ansprechender to gestalten. through the Usage from shadow, border, Farbverlaufen, Texturen and anderen visuellen Effekten can them the Benutzererfahrung verbessern and wichtige contents hervorheben. these containers sind besonders nutzlich for Landingpages, Produktprasentationen and others areas, in denen the visuelle Gestaltung a wichtige Rolle spielt. 
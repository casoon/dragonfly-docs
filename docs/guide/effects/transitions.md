---
title: Transitions-Effekte
category: Effekte
---

# Transitions-Effekte

Die Casoon UI Library bietet ein umfassendes System für Übergangseffekte (Transitions), das nahtlose und ansprechende Animationen zwischen verschiedenen Zuständen von UI-Elementen ermöglicht.

## Einbindung der Transitions

Um die Transitions-Effekte zu nutzen, müssen Sie die entsprechende CSS-Datei explizit importieren:

```css
@import "@casoon/ui-lib/effects/transitions.css";
```

Diese Datei enthält alle Transition-Effekte, die vom Layer-System im `effects`-Layer organisiert werden.

## Grundlegende Transitions

Die Library bietet eine Reihe vordefinierter Transition-Klassen, die auf beliebige Elemente angewendet werden können:

```html
<button class="transition-all">Alle Eigenschaften animieren</button>
<div class="transition-opacity">Nur Transparenz animieren</div>
<a class="transition-transform">Nur Transformationen animieren</a>
```

### Verfügbare Transition-Typen

| Klasse | Beschreibung |
|--------|-------------|
| `transition-all` | Animiert alle sich ändernden Eigenschaften |
| `transition-opacity` | Animiert nur Änderungen der Transparenz |
| `transition-transform` | Animiert nur Transformationen (Skalierung, Rotation, Verschiebung) |
| `transition-colors` | Animiert nur Farbänderungen |
| `transition-shadow` | Animiert nur Schatten-Änderungen |
| `transition-size` | Animiert nur Größenänderungen (Breite und Höhe) |

## Anpassung der Transition-Dauer

Die Dauer der Transitions kann mit zusätzlichen Klassen gesteuert werden:

```html
<button class="transition-all duration-300">Standard (300ms)</button>
<button class="transition-all duration-150">Schnell (150ms)</button>
<button class="transition-all duration-500">Langsam (500ms)</button>
<button class="transition-all duration-1000">Sehr langsam (1000ms)</button>
```

## Timing-Funktionen

Das Timing-Verhalten der Transitions kann ebenfalls angepasst werden:

```html
<div class="transition-all ease-linear">Linear</div>
<div class="transition-all ease-in">Ease-In (langsam beginnen)</div>
<div class="transition-all ease-out">Ease-Out (langsam enden)</div>
<div class="transition-all ease-in-out">Ease-In-Out (langsam beginnen und enden)</div>
<div class="transition-all ease-bounce">Bounce-Effekt</div>
```

## Verzögerung von Transitions

Für gestaffelte Animationen können Verzögerungen eingesetzt werden:

```html
<div class="transition-all delay-0">Keine Verzögerung</div>
<div class="transition-all delay-150">Kurze Verzögerung (150ms)</div>
<div class="transition-all delay-300">Mittlere Verzögerung (300ms)</div>
<div class="transition-all delay-500">Lange Verzögerung (500ms)</div>
```

## Praktische Anwendungsbeispiele

### Hover-Effekt mit Transition

```html
<button class="bg-primary text-white px-4 py-2 transition-all hover:bg-primary-dark hover:scale-105">
  Schwebender Button
</button>
```

### Accordion-Element mit Animation

```html
<div class="border rounded-md overflow-hidden">
  <button class="w-full p-4 text-left border-b flex justify-between items-center transition-all" 
          onclick="this.nextElementSibling.classList.toggle('hidden'); this.classList.toggle('bg-light');">
    Accordion-Titel
    <span class="transition-transform duration-300" 
          style="transform: rotate(0deg)">↓</span>
  </button>
  <div class="p-4 hidden transition-all duration-300">
    Accordion-Inhalt, der ein- und ausgeblendet wird.
  </div>
</div>
```

### Gestaffelte Listen-Animation

```html
<ul class="space-y-2">
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-0">
    Element 1
  </li>
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-150">
    Element 2
  </li>
  <li class="opacity-0 transform translate-y-4 transition-all duration-300 delay-300">
    Element 3
  </li>
</ul>
<script>
  // Die Elemente nach dem Laden der Seite einblenden
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('li').forEach(item => {
      item.classList.remove('opacity-0', 'translate-y-4');
    });
  });
</script>
```

## Kombinationen mit anderen Effekten

Die Transitions-Effekte können nahtlos mit anderen Effekten der Casoon UI Library kombiniert werden:

```html
<!-- Kombination mit Hover-Effekten -->
<div class="transition-all duration-300 hover:scale-105 hover:shadow-lg">
  Dieses Element reagiert sanft auf Hover
</div>

<!-- Kombination mit Focus-Effekten -->
<input class="transition-all duration-200 focus:ring-2 focus:ring-primary">

<!-- Kombination mit State-Effekten -->
<button class="transition-colors duration-300 active:bg-primary-dark">
  Farbübergang bei Aktivierung
</button>
```

## Best Practices

1. **Maßvoller Einsatz** - Zu viele Animationen können ablenkend wirken und die Benutzererfahrung beeinträchtigen.
2. **Konsistente Dauer** - Verwenden Sie ähnliche Übergangszeiten für ähnliche Aktionen, um ein kohärentes Erlebnis zu schaffen.
3. **Zugänglichkeit beachten** - Bieten Sie Alternativen für Benutzer, die reduzierte Bewegung bevorzugen, mit der `prefers-reduced-motion` Media Query.
4. **Performance im Blick behalten** - Animieren Sie bevorzugt `transform` und `opacity`, die GPU-beschleunigt sind und besser performen als andere Eigenschaften.

## Reduzierte Bewegung unterstützen

Die Library berücksichtigt automatisch die Systemeinstellungen für reduzierte Bewegung:

```css
@media (prefers-reduced-motion: reduce) {
  .transition-all, 
  .transition-opacity,
  .transition-transform,
  .transition-colors,
  .transition-shadow,
  .transition-size {
    transition-duration: 0.01ms !important;
    transition-property: none !important;
  }
}
```

Diese Einstellung respektiert die Benutzerpräferenzen und deaktiviert Transitions für Personen, die empfindlich auf Bewegung reagieren oder Zugänglichkeitseinstellungen aktiviert haben. 
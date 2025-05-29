# Typing-Effekte

Typing-Effekte simulieren den Prozess des Tippens oder Schreibens von Text. Die `@casoon/ui-lib` bietet verschiedene Typing-Effekte, die verwendet werden können, um Text dynamisch anzuzeigen, als würde er in Echtzeit getippt werden.

## Grundlegende Verwendung

Der grundlegende Typing-Effekt kann auf jedes Textelement angewendet werden:

```html
<p class="typing">Dieser Text wird getippt erscheinen.</p>
```

## CSS-Klassen

Die folgenden CSS-Klassen stehen für Typing-Effekte zur Verfügung:

| Klasse | Beschreibung |
|--------|-------------|
| `.typing` | Basisklasse für Typing-Effekte |
| `.typing-cursor` | Fügt einen blinkenden Cursor hinzu |
| `.typing-fast` | Schnelles Typing |
| `.typing-slow` | Langsames Typing |
| `.typing-blink` | Blinkender Cursor |
| `.typing-cursor-solid` | Durchgehender Cursor |
| `.typing-cursor-bar` | Vertikaler Balken als Cursor |
| `.typing-cursor-underscore` | Unterstrich als Cursor |
| `.typing-cursor-block` | Block als Cursor |
| `.typing-infinite` | Endlos wiederholender Typing-Effekt |
| `.typing-delete` | Löschen und Neutippen von Text |
| `.typing-pause` | Pausiert an bestimmten Stellen |
| `.typing-highlight` | Hebt Teile des getippten Textes hervor |
| `.typing-multiline` | Mehrzeiliger Typing-Effekt |
| `.typing-terminal` | Terminal-ähnlicher Typing-Effekt |

## Varianten

### Cursor-Varianten

Verschiedene Cursor-Stile für Typing-Effekte:

```html
<p class="typing typing-cursor-bar">Text mit Balken-Cursor</p>
<p class="typing typing-cursor-underscore">Text mit Unterstrich-Cursor</p>
<p class="typing typing-cursor-block">Text mit Block-Cursor</p>
<p class="typing typing-cursor-solid">Text mit durchgehendem Cursor</p>
```

### Geschwindigkeits-Varianten

Verschiedene Geschwindigkeiten für Typing-Effekte:

```html
<p class="typing typing-fast">Schnell getippter Text</p>
<p class="typing typing-slow">Langsam getippter Text</p>
<p class="typing typing-variable">Text mit variabler Geschwindigkeit</p>
```

### Spezial-Varianten

Spezielle Typing-Effekte:

```html
<p class="typing typing-delete">Dieser Text wird getippt und dann gelöscht und neu getippt.</p>
<p class="typing typing-pause">Dieser Text wird getippt mit... Pausen... zwischendurch.</p>
<p class="typing typing-infinite">Dieser Text wird endlos wiederholt.</p>
<p class="typing typing-highlight">Teile <span class="highlight">dieses Textes</span> werden hervorgehoben.</p>
```

### Terminal-Varianten

Terminal-ähnliche Typing-Effekte:

```html
<div class="typing-terminal">
  <div class="typing-terminal-line">$ cd /user/documents</div>
  <div class="typing-terminal-line">$ ls -la</div>
  <div class="typing-terminal-line">total 12</div>
  <div class="typing-terminal-line">drwxr-xr-x  2 user users 4096 Jan  1 12:34 .</div>
  <div class="typing-terminal-line">drwxr-xr-x 10 user users 4096 Jan  1 12:34 ..</div>
  <div class="typing-terminal-line">-rw-r--r--  1 user users    0 Jan  1 12:34 file.txt</div>
</div>
```

## Kombination mit anderen Elementen

Typing-Effekte können mit verschiedenen UI-Elementen kombiniert werden:

### Überschriften mit Typing-Effekt

```html
<h1 class="typing typing-cursor">Dynamische Überschrift</h1>
```

### Buttons mit Typing-Effekt

```html
<button class="btn btn-primary">
  <span class="typing typing-cursor">Klick mich</span>
</button>
```

### Benachrichtigungen mit Typing-Effekt

```html
<div class="notification">
  <div class="notification-title">Information</div>
  <div class="notification-content typing">Diese wichtige Nachricht wird eingetippt...</div>
</div>
```

### Chat-Nachrichten mit Typing-Effekt

```html
<div class="chat">
  <div class="chat-message">Hallo, wie kann ich dir helfen?</div>
  <div class="chat-message typing typing-cursor">Ich schreibe gerade eine Antwort...</div>
</div>
```

### Code-Blocks mit Typing-Effekt

```html
<pre class="code-block typing-terminal">
  <code>
function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();
  </code>
</pre>
```

## Anpassung

Die Typing-Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Allgemeine Typing-Parameter */
  --typing-speed: 150ms; /* Zeit pro Zeichen */
  --typing-delay: 1s; /* Verzögerung vor Beginn */
  --typing-cursor-color: currentColor;
  --typing-cursor-width: 2px;
  --typing-cursor-blink-speed: 0.7s;
  
  /* Varianten-Parameter */
  --typing-speed-fast: 80ms;
  --typing-speed-slow: 250ms;
  --typing-pause-duration: 0.5s;
  --typing-delete-speed: 100ms;
  
  /* Cursor-Varianten */
  --typing-cursor-height: 1.2em;
  --typing-cursor-border-radius: 0px;
  
  /* Terminal-Parameter */
  --typing-terminal-bg: #1e1e1e;
  --typing-terminal-color: #f0f0f0;
  --typing-terminal-prompt-color: #0f0;
  --typing-terminal-font: "Consolas", monospace;
}
```

## CSS-Implementierung

Beispiele für die CSS-Implementierung der Typing-Effekte:

```css
/* Basis-Typing */
.typing {
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  border-right: transparent;
  animation: typing var(--typing-speed) steps(1) forwards;
  width: 0;
}

@keyframes typing {
  to {
    width: 100%;
  }
}

/* Cursor-Effekte */
.typing-cursor::after {
  content: "|";
  position: absolute;
  right: 0;
  color: var(--typing-cursor-color);
  animation: blink var(--typing-cursor-blink-speed) infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typing-cursor-solid::after {
  animation: none;
}

.typing-cursor-bar::after {
  content: "";
  width: var(--typing-cursor-width);
  height: var(--typing-cursor-height);
  background-color: var(--typing-cursor-color);
  border-radius: var(--typing-cursor-border-radius);
}

.typing-cursor-underscore::after {
  content: "_";
}

.typing-cursor-block::after {
  content: "";
  width: 0.6em;
  height: var(--typing-cursor-height);
  background-color: var(--typing-cursor-color);
  opacity: 0.5;
}

/* Geschwindigkeits-Varianten */
.typing-fast {
  animation-duration: calc(var(--typing-content-length, 1) * var(--typing-speed-fast));
}

.typing-slow {
  animation-duration: calc(var(--typing-content-length, 1) * var(--typing-speed-slow));
}

/* Spezial-Varianten */
.typing-infinite {
  animation: typing-infinite 5s steps(40, end) infinite;
}

@keyframes typing-infinite {
  0% { width: 0; }
  50% { width: 100%; }
  55% { width: 100%; }
  95% { width: 0; }
  100% { width: 0; }
}

.typing-delete {
  animation: typing-delete 5s steps(40, end) infinite;
}

@keyframes typing-delete {
  0% { width: 0; }
  40% { width: 100%; }
  60% { width: 100%; }
  100% { width: 0; }
}

/* Terminal-Effekte */
.typing-terminal {
  background-color: var(--typing-terminal-bg);
  color: var(--typing-terminal-color);
  font-family: var(--typing-terminal-font);
  padding: 1rem;
  border-radius: 4px;
  overflow: hidden;
}

.typing-terminal-line {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  margin-bottom: 0.25rem;
  animation: typing var(--typing-speed) steps(1) forwards;
  animation-delay: calc(var(--typing-line-index, 0) * 1s + var(--typing-delay));
}

.typing-terminal-line::before {
  content: "";
  color: var(--typing-terminal-prompt-color);
}
```

## JavaScript-Integration

Für fortgeschrittene Typing-Effekte wird JavaScript verwendet:

```javascript
class TypingEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      text: element.getAttribute('data-typing-text') || element.textContent.trim(),
      speed: parseInt(element.getAttribute('data-typing-speed')) || 150,
      delay: parseInt(element.getAttribute('data-typing-delay')) || 0,
      loop: element.hasAttribute('data-typing-loop'),
      cursor: true,
      cursorChar: element.getAttribute('data-typing-cursor') || '|',
      deleteSpeed: parseInt(element.getAttribute('data-typing-delete-speed')) || 100,
      ...options
    };
    
    this.init();
  }
  
  init() {
    // Originalen Text speichern und Element leeren
    this.originalText = this.options.text;
    this.element.textContent = '';
    
    // Cursor hinzufügen
    if (this.options.cursor) {
      this.cursorElement = document.createElement('span');
      this.cursorElement.className = 'typing-js-cursor';
      this.cursorElement.textContent = this.options.cursorChar;
      this.element.appendChild(this.cursorElement);
      
      // Cursor-Style
      const style = document.createElement('style');
      style.textContent = `
        .typing-js-cursor {
          display: inline-block;
          opacity: 1;
          animation: typing-cursor-blink ${this.options.cursorBlinkSpeed || 0.7}s infinite;
        }
        @keyframes typing-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Starten nach Verzögerung
    setTimeout(() => this.type(), this.options.delay);
  }
  
  type(text = this.originalText, callback = null) {
    const typeCharacter = (index = 0) => {
      // Wenn am Ende des Textes
      if (index >= text.length) {
        if (callback) callback();
        
        // Wenn Loop aktiviert, löschen und neu starten
        if (this.options.loop) {
          setTimeout(() => this.delete(() => {
            setTimeout(() => this.type(), 500);
          }), 1000);
        }
        return;
      }
      
      // Zeichen hinzufügen
      this.element.insertBefore(
        document.createTextNode(text.charAt(index)),
        this.cursorElement
      );
      
      // Nächstes Zeichen tippen
      setTimeout(() => typeCharacter(index + 1), this.options.speed);
    };
    
    typeCharacter();
  }
  
  delete(callback = null) {
    const deleteCharacter = () => {
      const textContent = this.element.textContent;
      
      // Wenn kein Text mehr übrig ist (außer Cursor)
      if (textContent.length <= this.options.cursorChar.length) {
        if (callback) callback();
        return;
      }
      
      // Letztes Zeichen entfernen
      this.element.textContent = textContent.substring(0, textContent.length - 1 - this.options.cursorChar.length);
      if (this.cursorElement) {
        this.element.appendChild(this.cursorElement);
      }
      
      // Nächstes Zeichen löschen
      setTimeout(deleteCharacter, this.options.deleteSpeed);
    };
    
    deleteCharacter();
  }
}

// Initialisierung aller Typing-Elemente
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-typing]').forEach(element => {
    new TypingEffect(element);
  });
  
  // Terminal-Effekt
  document.querySelectorAll('.typing-terminal').forEach(terminal => {
    const lines = terminal.querySelectorAll('.typing-terminal-line');
    
    lines.forEach((line, index) => {
      line.style.setProperty('--typing-line-index', index);
      
      // Länge des Inhalts berechnen
      const contentLength = line.textContent.length;
      line.style.setProperty('--typing-content-length', contentLength);
      
      // Animation-Dauer basierend auf Inhaltslänge
      const speed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--typing-speed')) || 150;
      line.style.animationDuration = `${(contentLength * speed) / 1000}s`;
    });
  });
});
```

## Fortgeschrittene Beispiele

### Multiline-Typing

```html
<div class="typing-multiline" data-typing-multiline>
  <p data-typing-delay="0">Erste Zeile wird zuerst getippt.</p>
  <p data-typing-delay="2000">Zweite Zeile folgt nach 2 Sekunden.</p>
  <p data-typing-delay="4000">Dritte Zeile folgt nach 4 Sekunden.</p>
</div>
```

```javascript
// Multiline-Typing
document.querySelectorAll('[data-typing-multiline]').forEach(container => {
  const lines = container.querySelectorAll('p, div');
  
  lines.forEach(line => {
    const delay = parseInt(line.getAttribute('data-typing-delay')) || 0;
    const text = line.textContent;
    line.textContent = '';
    
    setTimeout(() => {
      new TypingEffect(line, { text });
    }, delay);
  });
});
```

### Typing mit Pausen und Variationen

```html
<p class="typing-custom" data-typing-text="Dieser Text wird mit [PAUSE] Pausen [PAUSE] und unterschiedlichen [SCHNELL]Geschwindigkeiten[/SCHNELL] getippt."></p>
```

```javascript
// Fortgeschrittenes Typing mit Pausen und Geschwindigkeitsvariationen
document.querySelectorAll('.typing-custom').forEach(element => {
  const text = element.getAttribute('data-typing-text');
  element.textContent = '';
  
  // Text-Parser
  const segments = [];
  let currentText = '';
  let currentSpeed = 'normal';
  
  for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + 7) === '[PAUSE]') {
      if (currentText.length > 0) {
        segments.push({ text: currentText, type: 'text', speed: currentSpeed });
        currentText = '';
      }
      segments.push({ type: 'pause', duration: 500 });
      i += 6; // Länge von [PAUSE] - 1
    } else if (text.substring(i, i + 9) === '[SCHNELL]') {
      if (currentText.length > 0) {
        segments.push({ text: currentText, type: 'text', speed: currentSpeed });
        currentText = '';
      }
      currentSpeed = 'fast';
      i += 8; // Länge von [SCHNELL] - 1
    } else if (text.substring(i, i + 10) === '[/SCHNELL]') {
      if (currentText.length > 0) {
        segments.push({ text: currentText, type: 'text', speed: currentSpeed });
        currentText = '';
      }
      currentSpeed = 'normal';
      i += 9; // Länge von [/SCHNELL] - 1
    } else {
      currentText += text[i];
    }
  }
  
  if (currentText.length > 0) {
    segments.push({ text: currentText, type: 'text', speed: currentSpeed });
  }
  
  // Segmente ausführen
  const processSegments = (index = 0) => {
    if (index >= segments.length) return;
    
    const segment = segments[index];
    
    if (segment.type === 'pause') {
      setTimeout(() => processSegments(index + 1), segment.duration);
    } else if (segment.type === 'text') {
      const speed = segment.speed === 'fast' ? 50 : 150;
      const typeEffect = new TypingEffect(element, {
        text: segment.text,
        speed,
        cursor: index === segments.length - 1
      });
      
      // Nach Abschluss des Tippens zum nächsten Segment
      setTimeout(() => {
        processSegments(index + 1);
      }, segment.text.length * speed + 50);
    }
  };
  
  processSegments();
});
```

## Barrierefreiheit

Bei der Verwendung von Typing-Effekten sollten folgende Barrierefreiheitsaspekte berücksichtigt werden:

1. **Animationspräferenzen**: Respektieren Sie die Einstellung `prefers-reduced-motion`
2. **Lesbarkeit**: Stellen Sie sicher, dass Text nach dem Typing-Effekt klar lesbar ist
3. **Inhaltstransparenz**: Der Inhalt sollte für Screenreader ohne Animation verfügbar sein
4. **Flackernde Inhalte**: Vermeiden Sie zu schnelle Cursor-Blinken für Menschen mit Empfindlichkeiten

```css
/* Reduzierte Animation für Benutzer, die dies bevorzugen */
@media (prefers-reduced-motion: reduce) {
  .typing,
  .typing-cursor::after,
  .typing-terminal-line {
    animation: none !important;
    width: auto !important;
    opacity: 1 !important;
  }
  
  .typing {
    border-right: none !important;
  }
  
  .typing-js-cursor {
    animation: none !important;
  }
}
```

```javascript
// Barrierefreie Typing-Implementierung
function setupAccessibleTyping() {
  // Screenreader-Version mit vollständigem Text
  document.querySelectorAll('.typing, [data-typing]').forEach(element => {
    const originalText = element.getAttribute('data-typing-text') || element.textContent;
    
    // ARIA-Attribute für Screenreader
    element.setAttribute('aria-label', originalText);
    
    // Reduzierte Bewegung prüfen
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Bei reduzierter Bewegung den vollständigen Text anzeigen
      element.textContent = originalText;
      
      // Alle Animationen entfernen
      element.style.animation = 'none';
      element.style.width = 'auto';
    }
  });
}

document.addEventListener('DOMContentLoaded', setupAccessibleTyping);
```

## Performance-Überlegungen

Typing-Effekte können die Leistung beeinflussen:

1. **DOM-Manipulation**: Vermeiden Sie häufiges Hinzufügen und Entfernen von DOM-Elementen
2. **requestAnimationFrame**: Verwenden Sie `requestAnimationFrame` für flüssigere Animationen
3. **Mehrere Effekte**: Begrenzen Sie die Anzahl gleichzeitiger Typing-Effekte auf einer Seite
4. **Text-Länge**: Seien Sie vorsichtig mit sehr langen Texten, die getippt werden sollen

```javascript
// Leistungsoptimierte Typing-Implementierung
class OptimizedTypingEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      text: element.getAttribute('data-typing-text') || element.textContent.trim(),
      speed: parseInt(element.getAttribute('data-typing-speed')) || 150,
      ...options
    };
    
    // Optimierung: Text-Inhalt nur einmal vorbereiten
    this.textContent = this.options.text;
    this.textLength = this.textContent.length;
    this.currentIndex = 0;
    
    // Optimierung: Erstellung von DOM-Elementen minimieren
    this.outputElement = document.createElement('span');
    this.cursorElement = document.createElement('span');
    this.cursorElement.className = 'typing-js-cursor';
    this.cursorElement.textContent = '|';
    
    this.element.textContent = '';
    this.element.appendChild(this.outputElement);
    this.element.appendChild(this.cursorElement);
    
    this.lastFrameTime = 0;
    this.charInterval = this.options.speed;
    
    // Animation starten
    requestAnimationFrame(this.update.bind(this));
  }
  
  update(timestamp) {
    if (!this.lastFrameTime) this.lastFrameTime = timestamp;
    
    const deltaTime = timestamp - this.lastFrameTime;
    
    if (deltaTime >= this.charInterval && this.currentIndex < this.textLength) {
      this.outputElement.textContent += this.textContent.charAt(this.currentIndex);
      this.currentIndex++;
      this.lastFrameTime = timestamp;
    }
    
    if (this.currentIndex < this.textLength) {
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

// Verwendung der optimierten Klasse
document.addEventListener('DOMContentLoaded', () => {
  // Limitierung der gleichzeitigen Effekte
  const visibleTypingElements = Array.from(document.querySelectorAll('[data-typing]'))
    .filter(el => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    })
    .slice(0, 3); // Maximal 3 gleichzeitige Effekte
  
  visibleTypingElements.forEach(element => {
    new OptimizedTypingEffect(element);
  });
  
  // Weitere Elemente erst initialisieren, wenn sie sichtbar werden
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-typing-initialized')) {
        entry.target.setAttribute('data-typing-initialized', 'true');
        new OptimizedTypingEffect(entry.target);
      }
    });
  });
  
  document.querySelectorAll('[data-typing]:not([data-typing-initialized])').forEach(element => {
    observer.observe(element);
  });
});
```

## Browser-Kompatibilität

Die Typing-Effekte werden von allen modernen Browsern unterstützt.

| Funktion | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS-Animationen | ✓ | ✓ | ✓ | ✓ | ✓ |
| JS Typing | ✓ | ✓ | ✓ | ✓ | ✓ |
| requestAnimationFrame | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS-Variablen | ✓ | ✓ | ✓ | ✓ | Nein |
| Intersection Observer | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte Effekte

- [Animations-Effekte](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-Effekte](/docs/effects/animation/transitions.md) - Übergangseffekte zwischen Zuständen
- [Loading-Effekte](/docs/effects/animation/loading.md) - Ladeanimationen 
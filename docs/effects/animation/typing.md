# Typing-effects

Typing-effects simulieren den Prozess des Tippens or Schreibens from Text. the `@casoon/ui-lib` bietet verschiedene Typing-effects, the verwendet become can, um Text dynamisch anzuzeigen, as wurde he in Echtzeit getippt become.

## Basic Usage

the grundlegende Typing-effect kann on jedes Textelement angewendet become:

```html
<p class="typing">this Text wird getippt erscheinen.</p>
```

## CSS-classes

the folgenden CSS-classes stehen for Typing-effects zur Verfugung:

| Class | Description |
|--------|-------------|
| `.typing` | Basisklasse for Typing-effects |
| `.typing-cursor` | Fugt einen blinkenden Cursor hinzu |
| `.typing-fast` | Schnelles Typing |
| `.typing-slow` | Langsames Typing |
| `.typing-blink` | Blinkender Cursor |
| `.typing-cursor-solid` | Durchgehender Cursor |
| `.typing-cursor-bar` | Vertikaler Balken as Cursor |
| `.typing-cursor-underscore` | Unterstrich as Cursor |
| `.typing-cursor-block` | Block as Cursor |
| `.typing-infinite` | Endlos wiederholender Typing-effect |
| `.typing-delete` | delete and Neutippen from Text |
| `.typing-pause` | Pausiert on bestimmten Stellen |
| `.typing-highlight` | Hebt Teile des getippten Textes hervor |
| `.typing-multiline` | Mehrzeiliger Typing-effect |
| `.typing-terminal` | Terminal-ahnlicher Typing-effect |

## Variants

### Cursor-Variants

Verschiedene Cursor-Styles for Typing-effects:

```html
<p class="typing typing-cursor-bar">Text with Balken-Cursor</p>
<p class="typing typing-cursor-underscore">Text with Unterstrich-Cursor</p>
<p class="typing typing-cursor-block">Text with Block-Cursor</p>
<p class="typing typing-cursor-solid">Text with durchgehendem Cursor</p>
```

### Geschwindigkeits-Variants

Verschiedene Geschwindigkeiten for Typing-effects:

```html
<p class="typing typing-fast">Schnell getippter Text</p>
<p class="typing typing-slow">Langsam getippter Text</p>
<p class="typing typing-variable">Text with variabler Geschwindigkeit</p>
```

### Spezial-Variants

Spezielle Typing-effects:

```html
<p class="typing typing-delete">this Text wird getippt and dann geloscht and neu getippt.</p>
<p class="typing typing-pause">this Text wird getippt with... Pausen... zwischendurch.</p>
<p class="typing typing-infinite">this Text wird endlos wiederholt.</p>
<p class="typing typing-highlight">Teile <span class="highlight">this Textes</span> become hervorgehoben.</p>
```

### Terminal-Variants

Terminal-ahnliche Typing-effects:

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

## Kombination with anderen Elementen

Typing-effects can with verschiedenen UI-Elementen kombiniert become:

### Uberschriften with Typing-effect

```html
<h1 class="typing typing-cursor">Dynamische heading</h1>
```

### buttons with Typing-effect

```html
<button class="btn btn-primary">
  <span class="typing typing-cursor">Klick me</span>
</button>
```

### notifications with Typing-effect

```html
<div class="notification">
  <div class="notification-title">Information</div>
  <div class="notification-content typing">these wichtige Nachricht wird eingetippt...</div>
</div>
```

### Chat-Nachrichten with Typing-effect

```html
<div class="chat">
  <div class="chat-message">Hallo, how kann I you helfen?</div>
  <div class="chat-message typing typing-cursor">I schreibe gerade a Antwort...</div>
</div>
```

### Code-Blocks with Typing-effect

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

## Customization

the Typing-effects can over CSS Variables angepasst become:

```css
:root {
  /* Allgemeine Typing-parameter */
  --typing-speed: 150ms; /* Zeit pro Zeichen */
  --typing-delay: 1s; /* Verzogerung before Beginn */
  --typing-cursor-color: currentColor;
  --typing-cursor-width: 2px;
  --typing-cursor-blink-speed: 0.7s;
  
  /* Variants-parameter */
  --typing-speed-fast: 80ms;
  --typing-speed-slow: 250ms;
  --typing-pause-duration: 0.5s;
  --typing-delete-speed: 100ms;
  
  /* Cursor-Variants */
  --typing-cursor-height: 1.2em;
  --typing-cursor-border-radius: 0px;
  
  /* Terminal-parameter */
  --typing-terminal-bg: #1e1e1e;
  --typing-terminal-color: #f0f0f0;
  --typing-terminal-prompt-color: #0f0;
  --typing-terminal-font: "Consolas", monospace;
}
```

## CSS-Implementation

Examples for the CSS-Implementation the Typing-effects:

```css
/* Base-Typing */
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

/* Cursor-effects */
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

/* Geschwindigkeits-Variants */
.typing-fast {
  animation-duration: calc(var(--typing-content-length, 1) * var(--typing-speed-fast));
}

.typing-slow {
  animation-duration: calc(var(--typing-content-length, 1) * var(--typing-speed-slow));
}

/* Spezial-Variants */
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

/* Terminal-effects */
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

for fortgeschrittene Typing-effects wird JavaScript verwendet:

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
    // Originalen Text save and element leeren
    this.originalText = this.options.text;
    this.element.textContent = '';
    
    // Cursor add
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
    
    // Starten after Verzogerung
    setTimeout(() => this.type(), this.options.delay);
  }
  
  type(text = this.originalText, callback = null) {
    const typeCharacter = (index = 0) => {
      // if am Ende des Textes
      if (index >= text.length) {
        if (callback) callback();
        
        // if Loop aktiviert, delete and neu starten
        if (this.options.loop) {
          setTimeout(() => this.delete(() => {
            setTimeout(() => this.type(), 500);
          }), 1000);
        }
        return;
      }
      
      // Zeichen add
      this.element.insertBefore(
        document.createTextNode(text.charAt(index)),
        this.cursorElement
      );
      
      // Nachstes Zeichen tippen
      setTimeout(() => typeCharacter(index + 1), this.options.speed);
    };
    
    typeCharacter();
  }
  
  delete(callback = null) {
    const deleteCharacter = () => {
      const textContent = this.element.textContent;
      
      // if no Text more ubrig ist (ausser Cursor)
      if (textContent.length <= this.options.cursorChar.length) {
        if (callback) callback();
        return;
      }
      
      // Letztes Zeichen remove
      this.element.textContent = textContent.substring(0, textContent.length - 1 - this.options.cursorChar.length);
      if (this.cursorElement) {
        this.element.appendChild(this.cursorElement);
      }
      
      // Nachstes Zeichen delete
      setTimeout(deleteCharacter, this.options.deleteSpeed);
    };
    
    deleteCharacter();
  }
}

// Initialisierung aller Typing-elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-typing]').forEach(element => {
    new TypingEffect(element);
  });
  
  // Terminal-effect
  document.querySelectorAll('.typing-terminal').forEach(terminal => {
    const lines = terminal.querySelectorAll('.typing-terminal-line');
    
    lines.forEach((line, index) => {
      line.style.setProperty('--typing-line-index', index);
      
      // length des Inhalts berechnen
      const contentLength = line.textContent.length;
      line.style.setProperty('--typing-content-length', contentLength);
      
      // animation-Dauer basierend on Inhaltslange
      const speed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--typing-speed')) || 150;
      line.style.animationDuration = `${(contentLength * speed) / 1000}s`;
    });
  });
});
```

## Fortgeschrittene Examples

### Multiline-Typing

```html
<div class="typing-multiline" data-typing-multiline>
  <p data-typing-delay="0">Erste row wird zuerst getippt.</p>
  <p data-typing-delay="2000">Zweite row folgt after 2 Sekunden.</p>
  <p data-typing-delay="4000">Dritte row folgt after 4 Sekunden.</p>
</div>
```

```javascript
// Multiline-Typing
document.querySelectorAll('[data-typing-multiline]').forEach(containers => {
  const lines = containers.querySelectorAll('p, div');
  
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

### Typing with Pausen and Variationen

```html
<p class="typing-custom" data-typing-text="this Text wird with [PAUSE] Pausen [PAUSE] and unterschiedlichen [SCHNELL]Geschwindigkeiten[/SCHNELL] getippt."></p>
```

```javascript
// Fortgeschrittenes Typing with Pausen and Geschwindigkeitsvariationen
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
      i += 6; // length from [PAUSE] - 1
    } else if (text.substring(i, i + 9) === '[SCHNELL]') {
      if (currentText.length > 0) {
        segments.push({ text: currentText, type: 'text', speed: currentSpeed });
        currentText = '';
      }
      currentSpeed = 'fast';
      i += 8; // length from [SCHNELL] - 1
    } else if (text.substring(i, i + 10) === '[/SCHNELL]') {
      if (currentText.length > 0) {
        segments.push({ text: currentText, type: 'text', speed: currentSpeed });
        currentText = '';
      }
      currentSpeed = 'normal';
      i += 9; // length from [/SCHNELL] - 1
    } else {
      currentText += text[i];
    }
  }
  
  if (currentText.length > 0) {
    segments.push({ text: currentText, type: 'text', speed: currentSpeed });
  }
  
  // Segmente execute
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
      
      // after Abschluss des Tippens zum nachsten Segment
      setTimeout(() => {
        processSegments(index + 1);
      }, segment.text.length * speed + 50);
    }
  };
  
  processSegments();
});
```

## Accessibility

at the Usage from Typing-Effekten should folgende Accessibilitysaspekte berucksichtigt become:

1. **Animationspraferenzen**: Respektieren them the Setting `prefers-reduced-motion`
2. **Lesbarkeit**: ensure, that Text after dem Typing-effect klar lesbar ist
3. **Inhaltstransparenz**: the content sollte for Screenreader without animation verfugbar be
4. **Flackernde contents**: Vermeiden them to schnelle Cursor-Blinken for Menschen with Empfindlichkeiten

```css
/* Reduzierte animation for user, the dies bevorzugen */
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
// Barrierefreie Typing-Implementation
function setupAccessibleTyping() {
  // Screenreader-version with vollstandigem Text
  document.querySelectorAll('.typing, [data-typing]').forEach(element => {
    const originalText = element.getAttribute('data-typing-text') || element.textContent;
    
    // ARIA-attributes for Screenreader
    element.setAttribute('aria-label', originalText);
    
    // Reduzierte Bewegung prufen
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // at reduzierter Bewegung den vollstandigen Text anzeigen
      element.textContent = originalText;
      
      // all animations remove
      element.style.animation = 'none';
      element.style.width = 'auto';
    }
  });
}

document.addEventListener('DOMContentLoaded', setupAccessibleTyping);
```

## Performance-Uberlegungen

Typing-effects can the Leistung beeinflussen:

1. **DOM-Manipulation**: Vermeiden them haufiges add and remove from DOM-Elementen
2. **requestAnimationFrame**: use them `requestAnimationFrame` for flussigere animations
3. **several effects**: Begrenzen them the Anzahl gleichzeitiger Typing-effects on einer Seite
4. **Text-length**: Seien them vorsichtig with very langen Texten, the getippt become should

```javascript
// Leistungsoptimierte Typing-Implementation
class OptimizedTypingEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      text: element.getAttribute('data-typing-text') || element.textContent.trim(),
      speed: parseInt(element.getAttribute('data-typing-speed')) || 150,
      ...options
    };
    
    // Optimierung: Text-content only einmal vorbereiten
    this.textContent = this.options.text;
    this.textLength = this.textContent.length;
    this.currentIndex = 0;
    
    // Optimierung: Erstellung from DOM-Elementen minimieren
    this.outputElement = document.createElement('span');
    this.cursorElement = document.createElement('span');
    this.cursorElement.className = 'typing-js-cursor';
    this.cursorElement.textContent = '|';
    
    this.element.textContent = '';
    this.element.appendChild(this.outputElement);
    this.element.appendChild(this.cursorElement);
    
    this.lastFrameTime = 0;
    this.charInterval = this.options.speed;
    
    // animation starten
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

// Usage the optimierten Class
document.addEventListener('DOMContentLoaded', () => {
  // Limitierung the gleichzeitigen effects
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
    .slice(0, 3); // Maximal 3 gleichzeitige effects
  
  visibleTypingElements.forEach(element => {
    new OptimizedTypingEffect(element);
  });
  
  // additional elements erst initialisieren, If you sichtbar become
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

## Browser-Kompatibilitat

the Typing-effects become from allen modernen Browsern unterstutzt.

| Function | Chrome | Firefox | Safari | Edge | IE11 |
|--------|--------|---------|--------|------|------|
| CSS-animations | ✓ | ✓ | ✓ | ✓ | ✓ |
| JS Typing | ✓ | ✓ | ✓ | ✓ | ✓ |
| requestAnimationFrame | ✓ | ✓ | ✓ | ✓ | ✓ |
| CSS Variables | ✓ | ✓ | ✓ | ✓ | Nein |
| Intersection Observer | ✓ | ✓ | ✓ | ✓ | Nein |

## Verwandte effects

- [Animations-effects](/docs/effects/animation/animations.md) - Allgemeine Animationseffekte
- [Transitions-effects](/docs/effects/animation/transitions.md) - Ubergangseffekte between Statesn
- [Loading-effects](/docs/effects/animation/loading.md) - Ladeanimationen 
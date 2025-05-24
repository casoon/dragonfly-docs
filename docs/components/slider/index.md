# Slider

The Slider component is an interactive control for selecting values in the Casoon UI Library.

## Usage

```html
<div class="slider">
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

## Variants

### With Labels

```html
<div class="slider">
  <div class="slider__labels">
    <span>0</span>
    <span>100</span>
  </div>
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
  <div class="slider__value">50</div>
</div>
```

### With Steps

```html
<div class="slider">
  <input type="range" class="slider__input" min="0" max="100" step="10" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
    <div class="slider__steps">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

### With Animation

```html
<div class="slider slider--animated">
  <input type="range" class="slider__input" min="0" max="100" value="50" />
  <div class="slider__track">
    <div class="slider__progress"></div>
  </div>
  <div class="slider__thumb"></div>
</div>
```

## CSS Variables

```css
:root {
  --slider-height: 4px;
  --slider-thumb-size: 16px;
  --slider-track-color: #e0e0e0;
  --slider-progress-color: #007bff;
  --slider-thumb-color: #ffffff;
  --slider-thumb-border: 2px solid #007bff;
  --slider-border-radius: 2px;
  --slider-transition: all 0.2s ease;
}
```

## Best Practices

### Accessibility

- Use semantic HTML elements
- Add ARIA attributes
- Ensure sufficient contrast
- Implement keyboard navigation

### Responsive Design

- Use relative units
- Test on different screen sizes
- Adjust slider size to content
- Optimize display on mobile devices

### Performance

- Minimize CSS
- Optimize JavaScript events
- Avoid unnecessary nesting
- Use CSS transitions instead of JavaScript animations

## Integration

### Astro

```astro
---
import '@casoon/ui-lib/components/slider.css';

interface Props {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  showLabels?: boolean;
  showSteps?: boolean;
  animated?: boolean;
}

const {
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  showLabels = false,
  showSteps = false,
  animated = false
} = Astro.props;
---

<div class="slider" class:list={[animated && 'slider--animated']}>
  {#if showLabels}
    <div class="slider__labels">
      <span>{min}</span>
      <span>{max}</span>
    </div>
  {/if}
  <input
    type="range"
    class="slider__input"
    min={min}
    max={max}
    value={value}
    step={step}
  />
  <div class="slider__track">
    <div class="slider__progress"></div>
    {#if showSteps}
      <div class="slider__steps">
        {#each Array.from({ length: (max - min) / step + 1 })}
          <span></span>
        {/each}
      </div>
    {/if}
  </div>
  <div class="slider__thumb"></div>
  <div class="slider__value">{value}</div>
</div>

<style>
  .slider {
    position: relative;
    width: 100%;
    padding: 1rem 0;
  }
  
  .slider__input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }
  
  .slider__track {
    position: relative;
    width: 100%;
    height: var(--slider-height);
    background-color: var(--slider-track-color);
    border-radius: var(--slider-border-radius);
  }
  
  .slider__progress {
    position: absolute;
    height: 100%;
    background-color: var(--slider-progress-color);
    border-radius: var(--slider-border-radius);
    transition: var(--slider-transition);
  }
  
  .slider__thumb {
    position: absolute;
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    background-color: var(--slider-thumb-color);
    border: var(--slider-thumb-border);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: var(--slider-transition);
  }
  
  .slider__steps {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .slider__steps span {
    width: 2px;
    height: 100%;
    background-color: var(--slider-track-color);
  }
  
  .slider__labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .slider__value {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
  }
  
  .slider--animated .slider__thumb {
    transition: var(--slider-transition);
  }
  
  .slider--animated .slider__thumb:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
</style>
```

Usage in an Astro component:

```astro
---
import Slider from '../components/Slider.astro';
---

<Slider
  min={0}
  max={100}
  value={25}
  step={5}
  showLabels
  showSteps
  animated
/>
```

### Vue

```vue
<template>
  <div 
    class="slider" 
    :class="{ 'slider--animated': animated }"
  >
    <div v-if="showLabels" class="slider__labels">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
    
    <input
      type="range"
      class="slider__input"
      :min="min"
      :max="max"
      :step="step"
      v-model="sliderValue"
      @input="updateValue"
    />
    
    <div class="slider__track">
      <div 
        class="slider__progress" 
        :style="{ width: progressWidth + '%' }"
      ></div>
      <div v-if="showSteps" class="slider__steps">
        <span v-for="n in stepCount" :key="n"></span>
      </div>
    </div>
    
    <div 
      class="slider__thumb" 
      :style="{ left: progressWidth + '%' }"
    ></div>
    
    <div v-if="showValue" class="slider__value">
      {{ sliderValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 50
    },
    step: {
      type: Number,
      default: 1
    },
    showLabels: {
      type: Boolean,
      default: false
    },
    showSteps: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sliderValue: this.value
    };
  },
  computed: {
    progressWidth() {
      return ((this.sliderValue - this.min) / (this.max - this.min)) * 100;
    },
    stepCount() {
      return Math.floor((this.max - this.min) / this.step) + 1;
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', Number(this.sliderValue));
    }
  },
  watch: {
    value(newValue) {
      this.sliderValue = newValue;
    }
  }
}
</script> 
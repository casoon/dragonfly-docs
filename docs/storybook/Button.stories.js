import '../getting-started/installation.md';

export default {
  title: 'Components/Button',
};

export const Primary = () => ({
  template: `<button class="button primary">Primärer Button</button>`
});

export const Secondary = () => ({
  template: `<button class="button secondary">Sekundärer Button</button>`
}); 
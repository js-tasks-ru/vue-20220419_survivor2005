import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAlert',

  props: {
    msg: String
  },

  template: `
    <div class="alert">
      <slot>{{ msg }}</slot>
    </div>`,
});

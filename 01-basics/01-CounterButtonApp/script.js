import { createApp } from './vendor/vue.esm-browser.js';

const counter = {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increase () {
        this.count++
    }
  }
}

const app = createApp(counter).mount('#app')
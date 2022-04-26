import { createApp } from './vendor/vue.esm-browser.js';

const calc = {
  data () {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },

  methods: {
    sum () {
      this.result = this.num1 + this.num2
    },

    sub () {
      this.result = this.num1 - this.num2
    },

    mult () {
      this.result = this.num1 * this.num2
    },

    div () {
      this.num2 ? this.result = this.num1 / this.num2 : this.result = 0
    },
  }
}

const app = createApp(calc).mount('#app')

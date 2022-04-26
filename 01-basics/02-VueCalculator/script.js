import { createApp } from './vendor/vue.esm-browser.js';

const calculator = {
  data () {
    return {
      num1: 0,
      num2: 0,
      operator: 'sum'
    }
  },

  computed: {
    result () {
      return this.calc(this.operator)
    }
  },

  methods: {
    calc(operator) {
      switch (operator) {
        case 'sum': return this.num1 + this.num2;
        case 'subtract': return this.num1 - this.num2;
        case 'multiply': return this.num1 * this.num2;
        case 'divide': return this.num2 ? this.num1 / this.num2 : 0;
        default: return 0;
      }
    }
  }
}

createApp(calculator).mount('#app')

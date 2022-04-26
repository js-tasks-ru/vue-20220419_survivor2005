import { createApp } from './vendor/vue.esm-browser.js';

const calculator = {
  data () {
    return {
      calcData: {
        num1: 0,
        num2: 0,
        operator: 'sum'
      },
      result: 0
    }
  },

  watch: {
    calcData: {
      deep: true,
      handler () {
        this.calc(this.calcData.operator)
      }
    }
  },

  methods: {
    calc(operator) {
      switch (operator) {
        case 'sum': this.result = this.calcData.num1 + this.calcData.num2; break;
        case 'subtract': this.result = this.calcData.num1 - this.calcData.num2; break;
        case 'multiply': this.result = this.result = this.calcData.num1 * this.calcData.num2; break;
        case 'divide': this.result = this.calcData.num2 ? this.calcData.num1 / this.calcData.num2 : 0; break;
        default: alert('Оператор не найден!');
      }
    }
  }
}

const app = createApp(calculator).mount('#app')

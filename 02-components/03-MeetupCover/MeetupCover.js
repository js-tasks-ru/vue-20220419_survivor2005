import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: String,
    image: String
  },

  template: `
    <div class="meetup-cover" :style="image && { '--bg-url': \`url(\${image})\`}"> // сделал тупо на вашем примере, но не совсем понимаю как это работает, вроде он должен тут вернуть тру или фолс, но каким то чудом он применяет стили!
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});

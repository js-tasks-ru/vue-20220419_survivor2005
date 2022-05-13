import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    }

  },

  methods: {
    getDate(date) {
      let options = {year: 'numeric', month: 'long', day: 'numeric' };
      let dt = new Date(date)
      return {
        toISO: dt.toISOString().substr(0, 10),
        toLocale: dt.toLocaleDateString(navigator.language, options)
      }
    }
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="getDate(date).toISO">{{ getDate(date).toLocale }}</time>
      </li>
    </ul>`,
});

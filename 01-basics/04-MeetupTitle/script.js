import { defineComponent } from './vendor/vue.esm-browser.js';
import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const meetupTitle = defineComponent({
  name: 'Meetup Title',

  data () {
    return {
      headerId: null,
      header: null
    }
  },

  watch: {
    headerId (id) {
      fetchMeetupById(id).then((data) => this.header = data.title)
    }
  }
})

createApp(meetupTitle).mount('#app')

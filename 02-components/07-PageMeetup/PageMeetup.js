import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';
import { result } from 'lodash-es';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      meetupData: null
    }
  },

  watch: {
    meetupId () {
      this.getMeetupData()
    }
  },

  created () {
    this.getMeetupData()
    console.log(fetchMeetupById(this.meetupId))
  },

  methods: {
    getMeetupData () {
      this.meetupData = null
      fetchMeetupById(this.meetupId)
      .then(res => {
        this.meetupData = res
      })
      .catch(error => {
        this.meetupData = { 'err': error.message }
      })
    }
  },


  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetupData && !meetupData?.err" :meetup="meetupData" />

      <ui-container v-show="meetupData === null">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="meetupData?.err">
        <ui-alert>{{ meetupData.err }}</ui-alert>
      </ui-container>
    </div>`,
});

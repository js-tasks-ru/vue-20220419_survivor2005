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
      this.meetupData = null
      fetchMeetupById(this.meetupId)
      .then(data => this.meetupData = data)
      .catch(err => this.meetupData = {'err': err.message})
    }
  },

  created () {
    fetchMeetupById(this.meetupId)
    .then(data => this.meetupData = data)
    .catch(err => this.meetupData = {'err': err.message})
  },


  template: `
    <div class="page-meetup">

      <ui-container v-if="!meetupData">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="meetupData?.err">
        <ui-alert :msg="meetupData.err"></ui-alert>
      </ui-container>

      <MeetupView v-else :meetup="meetupData" />
    </div>`,
});

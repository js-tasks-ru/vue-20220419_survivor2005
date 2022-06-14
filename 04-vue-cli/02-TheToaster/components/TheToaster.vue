<template>
  <div class="toasts">
    <template v-for="(toaster, i) in toasters" :key="i">
      <toaster-item
        :styleClass="toaster.styleClass"
        :icon="toaster.icon"
        :message="toaster.message"
        @remove="autoRemove()"
      ></toaster-item>
    </template>
  </div>
</template>

<script>
import ToasterItem from './ToasterItem.vue';

export default {
  name: 'TheToaster',

  data () {
    return {
      toasters: []
    }
  },

  methods: {
    success (message) {
      this.toasters.push({message, icon: 'check-circle', styleClass: 'toast_success'})
    },

    error (message) {
      this.toasters.push({message, icon: 'alert-circle', styleClass: 'toast_error'})
    },

    autoRemove (timer = 5000) {
      setTimeout(
        () => {
          this.toasters.shift()
        }, timer
      )
    },
  },

  components: { ToasterItem },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>

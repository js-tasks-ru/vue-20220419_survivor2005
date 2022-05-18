<template>
  <div class="toasts">
    <template v-for="(toaster, i) in toasters" :key="i">
      <the-toaster-item
        :stCls="toaster.stCls"
        :icon="toaster.icon"
        :message="toaster.message"
      ></the-toaster-item>
    </template>
  </div>
</template>

<script>
import TheToasterItem from './TheToasterItem.vue';

export default {
  name: 'TheToaster',

  data () {
    return {
      toasters: []
    }
  },

  methods: {
    createToaster (message, icon, stCls) {
      this.toasters.push({ message, icon, stCls })
    },

    removeToaster (ms = 5000) {
      setTimeout(()=>{
        this.toasters.shift()
      }, ms)
    },

    success (msg) {
      this.createToaster(msg, "check-circle", "toast_success")
      this.removeToaster()
    },

    error (msg) {
      this.createToaster(msg, "alert-circle", "toast_error")
      this.removeToaster()
    }
  },

  components: { TheToasterItem },
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

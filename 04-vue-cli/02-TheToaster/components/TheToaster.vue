<template>
  <div class="toasts">
    <template v-for="(item, i) in toasters" :key="i">
      <div class="toast" :class="item.boxStCls">
        <ui-icon class="toast__icon" :icon="item.icon" />
        <span>{{ item.message }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

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
      // this.removeToaster()
    },

    error (msg) {
      this.createToaster(msg, "alert-circle", "toast_error")
      // this.removeToaster()
    }
  },

  components: { UiIcon },
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>

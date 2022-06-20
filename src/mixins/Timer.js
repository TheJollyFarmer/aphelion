export default {
  watch: {
    active: {
      handler: "setTimer"
    }
  },

  methods: {
    setTimer(value) {
      if (value) this.countdown();
    },

    countdown() {
      setTimeout(() => {
        this.closeEvent();
      }, 10000);
    }
  }
};

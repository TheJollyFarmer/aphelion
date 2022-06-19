import Observer from "@/mixins/Observer";

export default {
  mixins: [Observer],

  data() {
    return {
      class: "animate-up"
    };
  },

  methods: {
    executeObserver() {
      this.element.classList.add(this.class);
      this.observer.disconnect();
    }
  }
};

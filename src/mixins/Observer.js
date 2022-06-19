export default {
  data() {
    return {
      observer: undefined,
      ref: "observer",
      options: {
        rootMargin: "100px",
        threshold: 0
      }
    };
  },

  computed: {
    element() {
      return this.$refs[this.ref].$el
        ? this.$refs[this.ref].$el
        : this.$refs[this.ref];
    }
  },

  mounted() {
    this.createObserver(this.executeObserver);
  },

  beforeUnmount() {
    this.observer.disconnect();
  },

  methods: {
    createObserver(method) {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) method(entry);
      }, this.options);

      this.observer.observe(this.element);
    }
  }
};

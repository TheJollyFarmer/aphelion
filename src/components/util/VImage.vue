<template>
  <figure
    :class="classes" 
    :style="size">
    <img 
      ref="observer"
      :src="placeholder"
      :alt="image"
      @error="placeholder">
    <slot/>
  </figure>
</template>

<script>
import Observer from "@/mixins/Observer";

export default {
  name: "VImage",

  mixins: [Observer],

  props: {
    image: {
      type: [Number, String],
      required: true
    },

    dir: {
      type: String,
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "png"
    },

    dimension: {
      type: String,
      required: false,
      default: "50"
    }
  },

  data() {
    return {
      options: {
        rootMargin: "500px"
      }
    };
  },

  computed: {
    placeholder() {
      return document.createElement("canvas").toDataURL();
    },

    classes() {
      return ["image", `${this.image}`];
    },

    size() {
      return { width: this.dimension + "px" };
    }
  },

  watch: {
    image() {
      this.$refs.observer.src = this.getUrl();
    }
  },

  methods: {
    executeObserver() {
      this.$refs.observer.src = this.getUrl();
      this.observer.disconnect();
    },

    getUrl() {
      return require(`@/assets/images/${this.image}.${this.type}`);
    }
  }
};
</script>

<style lang="sass" scoped>
.image
  flex-shrink: 0
  transition: border $hover-in
  &:hover
    border-color: $java-light !important
    transition: border $hover-out
  &.has-border
    background-color: var(--fill)
    border-style: solid
    border-width: 2px
    box-shadow: $shadow
    padding: 1px
</style>

<template>
  <section
    :id="section.name"
    ref="observer"
    :class="['section', {'fullwidth': fullwidth}]">
    <div class="container">
      <header>
        <h2 v-text="section.title"/>
        <span v-text="section.sub"/>
      </header>
    </div>
    <slot v-if="fullwidth"/>
    <div
      v-else
      class="container">
      <div class="content">
        <slot/>
      </div>
    </div>
  </section>
</template>

<script>
import Observer from "@/mixins/Observer";

export default {
  name: "VSection",

  mixins: [Observer],

  props: {
    section: {
      type: Object,
      required: true
    },

    fullwidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      options: {
        threshold: 0,
        rootMargin: "-50%"
      },
      active: ""
    };
  },

  methods: {
    executeObserver() {
      this.$router.replace({ name: "home", hash: "#" + this.section.name });
    }
  }
};
</script>

<style lang="sass" scoped>
.section
  padding: 2em 5em 5em
  &.fullwidth
    padding: 2em 0 5em
  header
    font-size: 3em
    margin: 0 auto 1em
    text-align: center
    span
      display: block
      color: $primary
      font-size: 1.4rem
      font-weight: bold
      margin-top: 0.5em
</style>

<template>
  <div class="stat">
    <div class="stat-value">
      <span v-text="label"/>
      <span v-text="value + '%'"/>
    </div>
    <progress
      ref="observer"
      class="progress is-small is-primary"
      :value="0"
      :max="100"/>
  </div>
</template>

<script>
import Observer from "@/mixins/Observer";

export default {
  name: "VProgress",

  mixins: [Observer],

  props: {
    label: {
      type: String,
      required: true
    },

    value: {
      type: Number,
      required: true
    }
  },

  methods: {
    executeObserver() {
      this.$refs.observer.value = this.value;
    }
  }
};
</script>

<style lang="sass" scoped>
.stat
  align-items: center
  display: flex
  flex: 1 0 50%
  justify-content: space-between
  padding: 0.5em
  font-size: 2em
  flex-direction: column
  &:first-child
    padding-top: 0
  .stat-value
    align-items: center
    display: flex
    font-size: 0.9em
    justify-content: space-between
    margin-bottom: 0.2em
    text-transform: capitalize
    width: 100%
    span:last-of-type
      font-size: 0.9em
      font-weight: bold
  .progress
    box-shadow: $shadow-heavy
    height: 1em
    &::-webkit-progress-value
      transition: width 1.5s ease
      background: $gradient
</style>

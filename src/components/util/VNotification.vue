<template>
  <div :class="['notification', isActive, statusClass]">
    <VImage
      image="design"
      type="svg"/>
    <div>
      <strong v-text="title"/>
      <p>
        <slot>{{ text }}</slot>
      </p>
    </div>
  </div>
</template>

<script>
import Click from "@/mixins/Click";
import Timer from "@/mixins/Timer";
import VImage from "@/components/util/VImage";

export default {
  name: "VNotification",

  components: { VImage },

  mixins: [Click, Timer],

  props: {
    active: {
      type: Boolean,
      required: true
    },

    status: {
      type: String,
      required: true
    }
  },

  emits: ["close"],

  computed: {
    isActive() {
      return this.active ? "is-active" : "";
    },

    title() {
      return this.status === "success" ? "Success" : "Error";
    },

    text() {
      return this.status === "success"
        ? "Your message has been submitted."
        : "Oops, it appears something went wrong.";
    },

    statusClass() {
      return this.status === "success" ? "is-success" : "is-failure";
    }
  }
};
</script>

<style lang="sass" scoped>
.notification
  align-items: center
  background-color: $white-dark
  border-radius: $radius
  box-shadow: $shadow
  bottom: 2em
  display: grid
  padding: $spacing-large
  grid-gap: $spacing-large
  grid-template-columns: 0.2fr 3fr
  left: 50%
  opacity: 1
  position: fixed
  transform: translate(-50%, 200%)
  transition: $hover-in
  z-index: 10
  &.is-active
    opacity: 1
    transform: translate(-50%, 0)
    transition: $hover-out
  &.is-success strong
    color: $primary
  &.is-failure strong
    color: $red
  strong
    text-transform: uppercase
</style>

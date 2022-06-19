<template>
  <div
    ref="observer"
    class="service">
    <VImage
      :image="service.name"
      dimension="100"
      type="svg"/>
    <h3 v-text="service.name"/>
    <p v-text="service.description"/>
  </div>
</template>

<script>
import Animate from "@/mixins/Animate";
import VImage from "@/components/util/VImage";

export default {
  name: "Service",

  components: { VImage },

  mixins: [Animate],

  props: {
    service: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      class: "animate-tile"
    };
  }
};
</script>

<style scoped lang="sass">
.service
  background-color: $white-dark
  border-radius: $radius
  box-shadow: $shadow
  line-height: 1.25
  padding: $spacing-largest
  transition-property: box-shadow, transform, opacity
  width: calc(33% - #{$spacing})
  &:hover
    box-shadow: $shadow-heavy
    transition: box-shadow $hover-out
  .image
    margin: 0 auto 1em
  h3
    font-size: 2em
    margin-bottom: $spacing-small
    text-align: center
    text-transform: uppercase
  p
    font-size: 1.2em
</style>

<template>
  <div class="testimonial">
    <VImage
      :image="testimonial.image"
      dimension="70"/>
    <VQuote :quote="testimonial"/>
  </div>
</template>

<script>
import VImage from "@/components/util/VImage";
import VQuote from "@/components/util/VQuote";

export default {
  name: "Testimonial",

  components: { VImage, VQuote },

  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="sass">
.testimonial
  font-size: 1.43em
  hyphens: auto
  opacity: 0
  position: absolute
  transition: box-shadow $hover-in
  width: 600px
  will-change: transform, opacity
  &:hover
    box-shadow: $shadow
    transition: box-shadow $hover-out
  .quote
    padding-left: 2em
  .image
    border: 10px solid $primary
    border-radius: 50%
    box-shadow: $shadow
    position: absolute
    top: 50%
    left: 5px
    transform: translate(-50%, -50%)
    z-index: 10
    :deep(img)
      border-radius: 50%
</style>

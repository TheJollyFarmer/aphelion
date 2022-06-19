<template>
  <VImage
    ref="image"
    :image="item.name"
    class="portfolio-image"
    dimension="100%"
    @mouseenter.self="toggleLink"
    @mouseleave.self="toggleLink">
    <a
      :href="link"
      target="_blank">
      <VImage
        image="design"
        type="svg"
        :class="['link', {'is-active': linkActive}]"/>
    </a>
  </VImage>
</template>

<script>
import Animate from "@/mixins/Animate";
import VImage from "@/components/util/VImage";

export default {
  name: "PortfolioImage",

  components: { VImage },

  mixins: [Animate],

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      linkActive: false,
      ref: "image",
      class: "animate-tile"
    };
  },

  computed: {
    link() {
      return "https://www." + this.item.href;
    }
  },

  methods: {
    toggleLink() {
      let style = this.$refs.image.$el.style;

      this.linkActive
        ? setTimeout(() => (style.zIndex = 0), 100)
        : (style.zIndex = 10);

      this.linkActive = !this.linkActive;
    }
  }
};
</script>

<style lang="sass" scoped>
.portfolio-image
  border-radius: 5px
  box-shadow: $shadow
  overflow: hidden
  transition: transform 0.1s
  &:hover
    transform: scale3d(1.2, 1.2, 1.2)
    transition: transform $hover-out
  &.pfsolutions
    grid-row-start: 1
    grid-row-end: 3
  &.portfolio
    grid-row-start: 2
    grid-row-end: 4
    grid-column-start: 2
    grid-column-end: 4
  &.makemybeer
    grid-row-start: 2
    grid-row-end: 4
  &.trinity > :deep(img)
    transform: translateY(-165px)
  .link
    background: $background
    border-radius: 50%
    box-shadow: $shadow
    left: 50%
    opacity: 0
    padding: 0.5em
    position: absolute
    transform: translate(-50%, -50%)
    top: 50%
    transition-property: background-color, opacity
    transition: $hover-in
    &:hover
      background-color: $white-dark
      transition-property: background-color
    &.is-active
      transition-property: opacity
      opacity: 1
    &:hover,
    &.is-active
      transition: $hover-out
</style>

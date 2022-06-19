<template>
  <section class="hero">
    <header ref="observer">
      <h1 v-text="'Simplicity is Beauty'"/>
      <h2 v-text="'Aphelion Web Design & Development'"/>
      <RouterLink
        to="#about"
        v-text="'Explore'"/>
    </header>
  </section>
</template>

<script>
import Animate from "@/mixins/Animate";

export default {
  name: "WelcomeHero",

  mixins: [Animate],

  methods: {
    executeObserver() {
      this.element.childNodes.forEach(child =>
        child.classList.add("animate-down")
      );
    }
  }
};
</script>

<style lang="sass" scoped>
.hero
  background: $gradient
  display: grid
  grid-template-rows: repeat(1, 66%) repeat(1, 33%)
  height: calc(100vh - 110px)
  overflow: hidden
  position: relative
  &:before,
  &:after
    animation-name: rotate
    animation-duration: 10s
    animation-iteration-count: infinite
    animation-timing-function: linear
    background-color: $background
    content: ""
    left: 50%
    min-height: 325vw
    min-width: 300vw
    position: absolute
    will-change: transform
  &:before
    bottom: 15vh
    border-radius: 45%
  &:after
    bottom: 12vh
    border-radius: 47%
    opacity: 0.5
  header
    align-self: center
    margin-bottom: 2em
    text-align: center
    z-index: 10
  h1
    font-size: 4em
    margin-bottom: 0.2em
    text-shadow: $shadow
  h2
    font-size: 1.4em
    margin-bottom: 2em
  a
    background: $primary
    border-radius: $radius
    box-shadow: $shadow
    color: white
    min-width: 300px
    padding: 0.5em 2em
    transition: background-color $hover-in
    &:hover
      background-color: $java-light
      transition: background-color $hover-out

@keyframes rotate
  0%
    transform: translate(-50%, 0) rotateZ(0deg)
  50%
    transform: translate(-50%, -2%) rotateZ(180deg)
  100%
    transform: translate(-50%, 0%) rotateZ(360deg)
</style>

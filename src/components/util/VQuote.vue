<template>
  <blockquote class="quote">
    <div class="quote-body">
      <span
        class="quotation-mark"
        v-text="'“'"/>
      <div class="quote-wrapper">
        <p
          class="quote-text"
          v-text="quote.text"/>
        <p
          class="quote-name"
          v-text="quote.name"/>
        <p
          class="quote-role"
          v-text="quote.role"/>
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: "VQuote",

  props: {
    quote: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="sass">
.quote
  background: $white-dark
  box-shadow: $shadow
  border-radius: $radius
  position: relative
  width: fit-content
  &:before
    background-color: $primary
    border-bottom-left-radius: $radius
    border-top-left-radius: $radius
    content: ""
    height: 100%
    left: 0
    position: absolute
    top: 0
    width: 10px
  .quote-body
    position: relative
    padding: $spacing-small $spacing-large
  .quote-wrapper
    margin-left: 1em
  .quotation-mark
    display: inline-block
    font-size: 3em
    color: $primary
    position: absolute
    left: 3%
    top: 1%
  .quote-text
    font-weight: bold
    margin-bottom: 0.5em
  .quote-name
    font-size: 1.25rem
    line-height: 1.2
  .quote-role
    font-size: 1rem
    text-transform: uppercase
</style>

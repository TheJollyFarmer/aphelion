<template>
  <RouterLink
    :to="'#' + link"
    :class="['nav-link', isActive]"
    v-text="link"/>
</template>

<script>
export default {
  name: "NavLink",

  props: {
    link: {
      type: String,
      required: true
    }
  },

  computed: {
    isActive() {
      return this.$route.hash === `#${this.link}` ? "is-active" : "";
    }
  }
};
</script>

<style lang="sass">
.nav-link
  padding: 0 0.5em
  text-transform: capitalize
</style>

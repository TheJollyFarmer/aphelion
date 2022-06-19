<template>
  <RouterLink
    to="/"
    class="nav-brand">
    <VImage
      image="logo"
      dir="true"/>
    <h1 v-text="'APHELION WEB DESIGN'"/>
  </RouterLink>
</template>

<script>
import VImage from "@/components/util/VImage";

export default {
  name: "NavBrand",
  components: { VImage }
};
</script>

<style lang="sass" scoped>
.nav-brand
  align-items: center
  display: flex
  flex-shrink: 0
  justify-content: center
</style>

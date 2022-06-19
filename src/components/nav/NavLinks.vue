<template>
  <div class="nav-links">
    <NavLink
      v-for="section in sections"
      :key="section.data.name"
      :link="section.data.name"/>
  </div>
</template>

<script>
import sections from "@/data/sections";
import NavLink from "@/components/nav/NavLink";

export default {
  name: "NavLinks",

  components: { NavLink },

  data() {
    return { sections };
  }
};
</script>

<style lang="sass">
.nav-links
  align-items: center
  display: flex
  flex: 1 1 0
  justify-content: flex-end
</style>

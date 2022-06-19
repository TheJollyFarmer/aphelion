<template>
  <nav class="navbar">
    <div class="container">
      <NavBrand/>
      <NavLinks/>
    </div>
  </nav>
</template>

<script>
import NavLinks from "@/components/nav/NavLinks";
import NavBrand from "@/components/nav/NavBrand";

export default {
  name: "NavBar",
  components: { NavBrand, NavLinks }
};
</script>

<style lang="sass">
.navbar
  align-items: center
  background-color: #f5f5f5
  display: flex
  justify-content: space-between
  padding: 30px
  position: fixed
  width: 100%
  top: 0
  z-index: 30
  .container
    display: flex
</style>

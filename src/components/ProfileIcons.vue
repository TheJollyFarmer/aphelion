<template>
  <div class="profile-icons">
    <VImage
      v-for="icon in ['facebook', 'github', 'twitter', 'linkedin']"
      :key="icon"
      :image="icon"
      type="svg"
      dimension="42"/>
  </div>
</template>

<script>
import VImage from "@/components/util/VImage";

export default {
  name: "ProfileIcons",
  components: { VImage }
};
</script>

<style scoped lang="sass">
.profile-icons
  align-items: center
  border-radius: $radius
  display: flex
  justify-content: space-around
  .image
    background-color: $primary
    border-radius: $radius
    box-shadow: $shadow-heavy
    transition: $hover-in
    &:hover
      filter: brightness(110%)
      transition: $hover-out
    :deep(img)
      border-radius: $radius
</style>

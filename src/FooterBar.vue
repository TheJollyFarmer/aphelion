<template>
  <footer class="footer">
    <VImage
      image="wave"
      type="svg"
      dimension="100%"/>
    <div class="container">
      <ProfileIcons/>
      <span
        class="copyright"
        v-text="copyright()"/>
    </div>
  </footer>
</template>
<script>
import ProfileIcons from "@/components/ProfileIcons";
import VImage from "@/components/util/VImage";

export default {
  name: "FooterBar",

  components: { VImage, ProfileIcons },

  methods: {
    copyright() {
      return "© Aphelion Web Design " + new Date().getFullYear();
    }
  }
};
</script>

<style lang="sass" scoped>
.footer
  background: $gradient
  color: $white
  font-size: 1.25em
  margin-top: 150px
  padding: 2em 5em 5em
  position: relative
  .container
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  .copyright
    text-shadow: $shadow
  .wave
    position: absolute
    left: 0
    top: 0
    transform: translateY(-90%)
    width: 100%
  .profile-icons
    margin-bottom: 1em
    width: 200px
    :deep(img)
      border: 1px solid $white
</style>

<template>
  <div
    ref="observer"
    class="profile">
    <VImage
      image="matt"
      dimension="150"/>
    <div class="profile-body">
      <h3>Matt</h3>
      <p>
        Matt has been a developer for 7 years. He is an experienced
        full-stack developer with a keen eye for aesthetic. An engineer by
        education, Matt's love of programming stems from his passion for
        solving complex problems. Web development allows Matt to not only
        solve programmatic problems but also to create beautiful,
        aesthetically pleasing designs.
      </p>
      <div class="divider"/>
      <ProfileIcons/>
    </div>
  </div>
</template>

<script>
import Animate from "@/mixins/Animate";
import ProfileIcons from "@/components/ProfileIcons";
import VImage from "@/components/util/VImage";

export default {
  name: "Profile",

  components: { ProfileIcons, VImage },

  mixins: [Animate]
};
</script>,

<style scoped lang="sass">
.profile
  margin-top: $spacing-small
  position: relative
  &:hover
    > .image
      border-color: $java-light !important
      box-shadow: $shadow-heavy
    .profile-body
      box-shadow: $shadow-heavy
      transition: box-shadow $hover-out
  > .image
    border: 10px solid $primary
    box-shadow: $shadow
    border-radius: 50%
    margin: auto
    z-index: 10
    :deep(img)
      border-radius: 50%
  h3
    text-align: center
    font-size: 2em
    margin-bottom: 0.7em
  .profile-body
    background: $white-dark
    border-radius: 5px
    box-shadow: $shadow
    font-size: 1.2em
    left: 50%
    top: 4em
    transform: translateX(-50%)
    transition: box-shadow $hover-in
    position: absolute
    width: 350px
    padding: 5em 1em 1em
</style>

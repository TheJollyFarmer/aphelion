<template>
  <div class="control">
    <slot/>
    <label
      class="label"
      v-text="label"/>
    <VImage
      :image="label"
      type="svg"
      dimension="20"/>
    <div class="border"/>
  </div>
</template>

<script>
import VImage from "@/components/util/VImage";

export default {
  name: "VField",

  components: { VImage },

  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>

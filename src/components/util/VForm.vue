<template>
  <form
    name="contact-form"
    method="post"
    data-netlify="true"
    class="form"
    data-netlify-honeypot="bot-field"
    @submit.prevent="submitEvent">
    <input
      type="hidden"
      name="form-name"
      value="contact-form">
    <slot/>
    <button
      ref="observer"
      class="button">
      <span>Submit</span>
    </button>
  </form>
</template>

<script>
import Animate from "@/mixins/Animate";

export default {
  name: "VForm",

  mixins: [Animate],

  emits: ["submit"],

  methods: {
    submitEvent() {
      this.$emit("submit");
    }
  }
};
</script>

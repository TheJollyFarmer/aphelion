<template>
  <VSection :section="section">
    <VForm
      ref="observer" 
      :form="form"
      @submit="submitForm">
      <VInput
        v-model="form.name"
        label="user"/>
      <VInput
        v-model="form.email"
        label="email"
        type="email"/>
      <VInput
        v-model="form.subject"
        label="subject"/>
      <VTextarea
        v-model="form.message"
        label="message"/>
    </VForm>
  </VSection>
</template>

<script>
import Animate from "@/mixins/Animate";
import Section from "@/mixins/Section";
import VInput from "@/components/util/VInput";
import VTextarea from "@/components/util/VTextarea";
import VForm from "@/components/util/VForm";

export default {
  name: "ContactSection",

  components: { VForm, VInput, VTextarea },

  mixins: [Section, Animate],

  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      class: "animate-tile"
    };
  },

  methods: {
    submitForm() {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encodeForm({
          "form-name": "contact-form",
          ...this.form
        })
      };

      fetch("/", options);
    },

    encodeForm(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    executeObserver() {
      this.element.childNodes.forEach(child => {
        if (child.className === "control") child.classList.add("animate-tile");
      });
    }
  }
};
</script>

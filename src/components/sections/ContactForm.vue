<template>
  <VForm
    :form="form"
    @submit="submitForm">
    <VInput
      v-model="form.name"
      label="name"/>
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
</template>
<script>
import VForm from "@/components/util/VForm";
import VInput from "@/components/util/VInput";
import VTextarea from "@/components/util/VTextarea";

export default {
  name: "ContactForm",

  components: { VForm, VInput, VTextarea },

  emits: ["submitted"],

  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
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

      fetch("/", options)
        .then(res => this.handleErrors(res))
        .then(() => this.onSuccess())
        .catch(() => this.$emit("submitted", "fail"));
    },

    encodeForm(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    onSuccess() {
      this.resetForm();
      this.$emit("submitted", "success");
    },

    resetForm() {
      Object.values(this.form).forEach(value => (this.form[value] = ""));
    },

    handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      else return response;
    }
  }
};
</script>

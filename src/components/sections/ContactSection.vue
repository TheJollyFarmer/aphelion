<template>
  <VSection :section="section">
    <ContactForm
      ref="observer"
      @submitted="showNotification"/>
    <VNotification
      :active="active"
      :status="status"
      @close="active = false"/>
  </VSection>
</template>

<script>
import Animate from "@/mixins/Animate";
import ContactForm from "@/components/sections/ContactForm";
import Section from "@/mixins/Section";
import VNotification from "@/components/util/VNotification";

export default {
  name: "ContactSection",

  components: { ContactForm, VNotification },

  mixins: [Section, Animate],

  data() {
    return {
      class: "animate-tile",
      active: false,
      status: ""
    };
  },

  methods: {
    executeObserver() {
      this.element.childNodes.forEach(child => {
        if (child.className === "control") child.classList.add("animate-tile");
      });
    },

    showNotification(type) {
      this.active = true;
      this.status = type;
    }
  }
};
</script>

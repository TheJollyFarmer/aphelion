<template>
  <VSection :section="section">
    <div class="about-body">
      <p>
        At Aphelion we strongly believe beauty is found in simplicity. No matter
        the vision you have; we will find a simple and beautiful solution to
        create the website you desire.
      </p>
      <VQuote
        ref="observer"
        :quote="quote"/>
    </div>
    <div class="services">
      <Service
        v-for="service in services"
        :key="service"
        :service="service"/>
    </div>
  </VSection>
</template>

<script>
import Animate from "@/mixins/Animate";
import services from "@/data/services";
import quotes from "@/data/quotes";
import Section from "@/mixins/Section";
import Service from "@/components/Service";
import VQuote from "@/components/util/VQuote";

export default {
  name: "AboutSection",

  components: { VQuote, Service },

  mixins: [Section, Animate],

  data() {
    return {
      services,
      quote: quotes.about,
      class: "animate-left"
    };
  }
};
</script>

<style scoped lang="sass">
.services
  display: flex
  justify-content: space-between
.about-body
  display: grid
  font-size: 1.43em
  grid-gap: 1rem
  grid-template-columns: 1.1fr 1fr
  margin-bottom: 2em
  > p
    line-height: 1.5
</style>

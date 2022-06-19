<template>
  <VSection :section="section">
    <div class="carousel">
      <Testimonial
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="carousel-item"
        :testimonial="testimonial"/>
    </div>
  </VSection>
</template>

<script>
import quotes from "@/data/quotes";
import Section from "@/mixins/Section";
import Testimonial from "@/components/Testimonial";

export default {
  name: "TestimonialsSection",

  components: { Testimonial },

  mixins: [Section],

  data() {
    return {
      testimonials: quotes.testimonials
    };
  }
};
</script>

<style scoped lang="sass">
:deep(.content)
  display: flex
  height: 350px
  justify-content: center
  width: 100%
</style>

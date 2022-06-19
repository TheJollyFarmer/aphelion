<template>
  <VSection :section="section">
    <div class="portfolio-grid">
      <PortfolioImage
        v-for="item in portfolio"
        :key="item.name"
        :item="item"/>
    </div>
  </VSection>
</template>

<script>
import portfolio from "@/data/portfolio";
import Section from "@/mixins/Section";
import PortfolioImage from "@/components/PortfolioImage";

export default {
  name: "PortfolioSection",

  components: { PortfolioImage },

  mixins: [Section],

  data() {
    return { portfolio };
  }
};
</script>

<style scoped lang="sass">
.portfolio-grid
  display: grid
  grid-gap: 0.5em
  grid-template-columns: repeat(4, minmax(0, 1fr))
  grid-template-rows: repeat(3, minmax(0, 182px))
  position: relative
</style>

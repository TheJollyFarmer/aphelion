<template>
  <NavBar/>
  <WelcomeHero/>
  <component
    :is="section.component"
    v-for="section in sectionComponents"
    :key="section.data.name"
    :section="section.data"/>
  <FooterBar/>
</template>

<script>
import sections from "@/data/sections";
import FooterBar from "@/FooterBar";
import NavBar from "@/components/nav/NavBar";
import WelcomeHero from "@/components/WelcomeHero";
import { defineAsyncComponent } from "vue";
import { capitalise } from "@/utils/filters";

export default {
  name: "App",

  components: {
    FooterBar,
    NavBar,
    WelcomeHero
  },

  data() {
    return { sections };
  },

  computed: {
    sectionComponents() {
      return this.sections.map(section => this.createComponent(section));
    }
  },

  methods: {
    createComponent({ data }) {
      return {
        data,
        component: defineAsyncComponent(() =>
          import("@/components/sections/" + capitalise(data.name) + "Section")
        )
      };
    }
  }
};
</script>

<style lang="sass">
#app
  padding-top: 110px
</style>

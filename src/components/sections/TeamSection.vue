<template>
  <VSection :section="section">
    <div class="team">
      <Profile/>
      <div class="skills">
        <VProgress
          v-for="skill in skills"
          :key="skill.label"
          :label="skill.label"
          :value="skill.value"/>
      </div>
    </div>
  </VSection>
</template>

<script>
import skills from "@/data/skills";
import Section from "@/mixins/Section";
import VProgress from "@/components/util/VProgress";
import Profile from "@/components/Profile";

export default {
  name: "TeamSection",
  components: { Profile, VProgress },
  mixins: [Section],
  data() {
    return {
      skills
    };
  }
};
</script>

<style scoped lang="sass">
.team
  display: grid
  grid-template-columns: 1.25fr 2fr
</style>

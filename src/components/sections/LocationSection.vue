<!--suppress JSUnresolvedFunction -->
<template>
  <VSection
    fullwidth
    :section="section">
    <div
      ref="map"
      class="map"/>
  </VSection>
</template>

<script>
/* eslint-disable no-undef */
import Section from "@/mixins/Section";

export default {
  name: "LocationSection",

  mixins: [Section],

  data() {
    return {
      map: undefined
    };
  },

  mounted() {
    this.initMap();
  },

  methods: {
    initMap() {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: 53.68721784080199, lng: -0.9959982078314452 },
        zoom: 6,
        mapId: "8c1f0f96e569af70",
        disableDefaultUI: true
      });

      new google.maps.Marker({
        position: { lat: 53.68721784080199, lng: -0.9959982078314452 },
        icon: {
          url: require("@/assets/images/marker.svg"),
          scaledSize: new google.maps.Size(35, 35)
        },
        map: this.map
      });
    }
  }
};
</script>

<style lang="sass">
.map
  width: 100%
  height: 400px
</style>

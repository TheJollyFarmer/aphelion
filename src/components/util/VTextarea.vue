<template>
  <VField :label="label">
    <textarea
      ref="textarea"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      :class="['textarea' , customClass]"
      spellcheck
      @input="inputEvent"
      @keydown.enter.exact.prevent="enterEvent"/>
  </VField>
</template>

<script>
import VField from "@/components/util/VField";

export default {
  name: "VTextarea",

  components: { VField },

  props: {
    modelValue: {
      type: [String, Number],
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false,
      default: "Message"
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    cols: {
      type: String,
      required: false,
      default: null
    },

    rows: {
      type: Number,
      required: false,
      default: 6
    },

    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },

    customClass: {
      type: String,
      required: false,
      default: ""
    }
  },

  emits: ["update:modelValue"],

  data() {
    return {
      scroll: null
    };
  },

  methods: {
    inputEvent(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
};
</script>

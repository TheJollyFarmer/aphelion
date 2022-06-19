<template>
  <VField :label="label">
    <input
      ref="input"
      :value="modelValue"
      :type="newType"
      :placeholder="label"
      :class="['input', size, customClass, inputErrorClass]"
      :style="{ width : width }"
      required
      @blur="blurEvent"
      @input="inputEvent"
      @keyup.enter="enterEvent">
    <slot/>
  </VField>
</template>

<script>
import VField from "@/components/util/VField";

export default {
  name: "VInput",

  components: { VField },

  props: {
    modelValue: {
      type: [String, Number],
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "text"
    },

    size: {
      type: String,
      required: false,
      default: ""
    },

    width: {
      type: String,
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    customClass: {
      type: String,
      required: false,
      default: ""
    },

    validation: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  emits: ["blur", "update:modelValue", "onEnter"],

  data() {
    return {
      newType: this.type,
      isValid: false,
      errorBag: ""
    };
  },

  computed: {
    inputErrorClass() {
      return { "has-error": this.errorBag };
    }
  },

  methods: {
    validate(input) {
      input.checkValidity()
        ? this.setState("", true)
        : this.setState(input.validationMessage, false);
    },

    setState(errors, validity) {
      this.errorBag = errors;
      this.isValid = validity;
    },

    blurEvent(e) {
      this.$emit("blur", e);

      if (this.validation) {
        this.validate(e.target);
      }
    },

    inputEvent({ target }) {
      this.$emit("update:modelValue", target.value);
    },

    enterEvent() {
      this.$emit("onEnter");
    }
  }
};
</script>

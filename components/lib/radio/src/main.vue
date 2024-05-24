<template>
  <div class="yu-radio" :class="{ 'is-checked': label === model }">
    <span class="yu-radio__input">
      <span class="yu-radio__inner"></span>
      <input
        type="radio"
        class="yu-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="yu-radio__label">
      <slot> </slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>
<script>
export default {
  name: "YuRadio",
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      return !!this.RadioGroup;
    },
  },
};
</script>

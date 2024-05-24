<template>
  <div class="yu-checkbox" :class="{ 'is-checked': label === value }">
    <span class="yu-checkbox__input">
      <span class="yu-checkbox__inner"></span>
      <input
        type="checkbox"
        class="yu-checkbox__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="yu-checkbox__label">
      <slot> </slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>
<script>
export default {
  name: "YuCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type:Boolean,
      default:false
    },
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

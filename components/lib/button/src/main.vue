<template>
  <button
    class="yu-button"
    :class="[
      `yu-button-${type}`,
      { 'yu-button-dangerous': danger, 'yu-button-circle': shape === 'circle' },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'YuButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    shape: {
      type: String,
      default: 'default',
    },
    danger: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
  created() {
    console.log('----', this.danger);
  },
};
</script>

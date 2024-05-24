<template>
  <div
    class="yu-input"
    :class="{ 'yu-input--suffix': clearable || showPassword }"
  >
    <input
      class="yu-input__inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      v-bind="$attrs"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="yu-input__suffix">
      <i
        class="yu-input__icon yu-icon-cuowu"
        v-if="clearable && value"
        @click="handleClear"
      ></i>
      <i
        class="yu-input__icon yu-icon-duigou-cu"
        :class="{ 'yu-icon-duigou-cu-active': passwordVisible }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'YuInput',
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleClear() {
      this.$emit('input', '');
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  created() {
    console.log('---data---', this.$attrs);
  },
};
</script>
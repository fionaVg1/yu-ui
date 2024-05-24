<template>
  <div class="yu-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <input class="yu-switch__input" type="checkbox" :name="name" ref="input" />
    <span class="yu-switch__core" ref="core">
      <span class="yu-switch__button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: "YuSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inActiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
    },
  },
  watch: {
    value: function () {
      this.setStyle();
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
      this.$refs.input.checked = this.value;
    },
    setStyle() {
      let color = this.value ? this.activeColor : this.inActiveColor;
      this.$refs.core.style.borderColor = color;
      this.$refs.core.style.backgroundColor = color;
    },
  },
  mounted() {
    this.setStyle();
    this.$refs.input.checked = this.value;
  },
};
</script>

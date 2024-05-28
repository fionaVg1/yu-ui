<template>
  <div class="yu-checkbox" :class="{ 'is-checked': isChecked}">
    <span class="yu-checkbox__input">
      <span class="yu-checkbox__inner"></span>
      <input
        type="checkbox"
        class="yu-checkbox__original"        
        :name="name"
        :value="label"
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
  inject:{
    CheckboxGroup:{
      default:''
    }
  },
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
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked(){
      return this.isGroup?this.model.includes(this.label):this.model;
    }
  },
};
</script>

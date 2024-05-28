<template>
  <div class="yu-form-item">
    <label class="yu-form-item__label" :style="labelStyle">{{ label }}</label>
    <div class="yu-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "YuFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  inject:{
    Form:{
      default:''
    }
  },
  computed:{
    labelStyle(){
      return {width:this.Form.labelWidth};
    }
  }
};
</script>

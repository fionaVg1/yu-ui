<template>
  <div class="yu-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'YuForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth:{
      type:String,
      default:'80px'
    }
  },
  provide(){
    return {
      Form:this
    }
  }

}
</script>
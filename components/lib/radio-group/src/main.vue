<template>
  <div class="yu-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'YuRadioGroup',
  provide(){
    return {
      RadioGroup:this
    }
  }, 
  props:{
    value:null
  }
}
</script>
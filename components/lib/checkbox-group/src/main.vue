<template>
  <div class="yu-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default{
  name:'YuCheckboxGroup',
  provide(){
    return {
      CheckboxGroup:this
    }
  }, 
  props:{
    value:{
      type:Array
    }
  }
}
</script>
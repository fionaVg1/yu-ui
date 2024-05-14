<template>
  <div class="card" :style="width ? { width: width + 'px' } : {}">
    <div class="img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="summary">{{ summary }}</div>
    <div v-else class="summary"><slot></slot></div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
@import './card.scss';
</style>
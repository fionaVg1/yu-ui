<template>
  <transition name="yu-modal">
    <div class="yu-modal-root" v-show="visible">
      <div class="yu-modal-mask"></div>
      <div class="yu-modal-wrap" @click.self="handleClose">
        <div
          class="yu-modal"
          :style="{ width: isNaN(width) ? width : `${width}px` }"
        >
          <div class="yu-modal-content">
            <yu-button
              class="yu-modal-closeBtn"
              icon="yu-icon-cuowu"
            ></yu-button>
            <div class="yu-modal-header">
              <slot name="title">
                <div class="yu-modal-title">
                  {{ title }}
                </div>
              </slot>
            </div>
            <div class="yu-modal-body">
              <slot></slot>
            </div>
            <div class="yu-modal-footer" v-if="$slots.footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'YuModal',
  props: {
    title: {
      type: String,
    },
    width: {
      type: [String, Number],
      default: '520px',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: 'visible',
    event: 'update:visible',
  },
  methods: {
    handleClose() {
      console.log('哈哈');
      this.$emit('update:visible', false);
    },
  },
};
</script>

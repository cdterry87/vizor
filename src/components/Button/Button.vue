<template>
  <component
    :is="type"
    class="button"
    v-bind="$attrs"
    :class="[
      {
        'button--rounded': rounded,
        'button--outlined': outlined,
        'button--full': full,
        'button--small': small,
        'button--medium': medium,
        'button--large': large
      }
    ]"
  >
    <slot>Button</slot>
  </component>
</template>

<script>
export default {
  name: 'VzButton',
  components: {},
  props: {
    type: {
      type: String,
      default: 'button'
    },
    rounded: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Button.scss';
</style>
<template>
  <div>
    <label
      ref="label"
      class="checkbox"
      :class="[
        {
          'checkbox--rounded': rounded,
          'checkbox--small': small,
          'checkbox--medium': medium,
          'checkbox--large': large,
          'checkbox--required': required,
          'checkbox--disabled': disabled
        }
      ]"
      :disabled="disabled"
    >
      <input
        ref="input"
        type="checkbox"
        :required="required"
        :disabled="disabled"
      >
      <span class="checkbox__check" />
      <span class="checkbox__label">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'VCheckbox',
    props: {
      name: {
        type: String,
        default: 'checkbox'
      },
      value: {
        type: [String, Number, Boolean],
        default: true
      },
      rounded: {
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
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        deafult: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'Checkbox';
</style>
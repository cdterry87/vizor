<template>
  <div class="toggle">
    <input type="radio" :id="toggle.first.id" :name="toggle.name" :value="toggle.first.value" :checked="toggle.first.checked" />
    <label :for="toggle.first.id">{{ toggle.first.label }}</label>
    <input type="radio" :id="toggle.second.id" :name="toggle.name" :value="toggle.second.value" :checked="toggle.second.checked" />
    <label :for="toggle.second.id">{{ toggle.second.label }}</label>
    <div class="switch">
      <div class="switch__slide">
        <div class="switch__slide-item">{{ toggle.first.label }}</div>
        <div class="switch__slide-item">{{ toggle.second.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VToggle',
    props: {
      toggle: {
        type: Object,
        default () {
          return {
            name: 'toggle',
            first: {
              id: 'first-option',
              label: 'First Option',
              value: 1,
              checked: true
            },
            second: {
              id: 'second-option',
              label: 'Second Option',
              value: 2,
              checked: false
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'Toggle';
</style>
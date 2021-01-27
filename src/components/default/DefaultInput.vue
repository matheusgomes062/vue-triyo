<template>
  <div class="wrapper">
    <label class="label" :for="labelFor">{{ label }}</label>
    <input
      :type="inputType"
      :name="inputName"
      :id="inputId"
      :placeholder="inputPlaceholder"
    />
  </div>
</template>

<script>
export default {
  name: 'DefaultInput',
  props: {
    label: {
      type: String,
      required: false,
    },
    labelFor: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: false,
    },
    inputName: {
      type: String,
      required: false,
    },
    inputId: {
      type: String,
      required: false,
    },
    inputPlaceholder: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './sass/defaultInput.scss';
</style>

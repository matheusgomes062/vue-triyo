<template>
  <div class="wrapper">
    <label :for="labelFor" class="label">{{ label }}</label>
    <textarea
      :name="textareaName"
      :id="idTextareaName"
      type="text"
      @change="handleChange"
      @blur="handleBlur"
      v-model="message"
      :placeholder="placeholderInTextarea"
      :cols="textareaCols"
      :rows="textareaRows"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'defaultTextArea',
  data() {
    return {}
  },
  props: {
    label: { type: String },
    textareaName: { type: String },
    idTextareaName: { type: String },
    handleChange: { type: String },
    handleBlur: { type: String },
    placeholderInTextarea: { type: String },
    textareaCols: { type: String },
    textareaRows: { type: String },
  },
}
</script>

<style lang="scss" scoped>
@import './sass/defaultTextarea.scss';
</style>

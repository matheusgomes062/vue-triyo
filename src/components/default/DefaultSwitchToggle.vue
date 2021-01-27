<template>
  <div class="wrapper">
    <label class="toggle">
      <input
        v-bind="$attrs"
        type="checkbox"
        :name="selectName"
        :id="selectId"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
      />
      <div class="toggleControl"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'DefaultSwitchToggle',
  inheritAttrs: false,
  data() {
    return {}
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    selectName: { type: String },
    selectId: { type: String },
    checked: {
      type: Boolean,
      required: false,
    },
  },
  methods: {},
  computed: {},
}
</script>

<style lang="scss" scoped>
@import './sass/defaultSwitchToggle.scss';
</style>

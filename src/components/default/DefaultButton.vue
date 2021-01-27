<template>
  <button class="button" @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    handleClick: {
      type: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './sass/defaultButton.scss';
</style>

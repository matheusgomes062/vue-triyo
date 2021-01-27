<template>
  <div>
    <label :labelFor="selectName">{{ label }}</label>
    <select
      :name="selectName"
      :id="idName"
      v-model="key"
      @change="$emit('change', $event)"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'defaultSelect',
  props: {
    selectName: {
      type: String,
    },
    idName: {
      type: String,
    },
    options: {
      type: Object,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      key: '',
    }
  },
}
</script>

<style></style>

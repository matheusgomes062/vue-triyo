<template>
  <div>
    <validation-observer ref="observer">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Nome"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Address"
        rules="required|max:30"
      >
        <v-text-field
          v-model="address"
          :counter="30"
          :error-messages="errors"
          label="Endereço"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 11
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="11"
          :error-messages="errors"
          label="Telefone"
          required
        ></v-text-field>
      </validation-provider>
    </validation-observer>
  </div>
</template>

<script>
import { required, digits, regex } from 'vee-validate/dist/rules';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate';

setInteractionMode('eager');

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
});

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}'
});

export default {
  name: 'dependentForm',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    dependentName: '',
    dependentAge: '',
    select: null,
    dependentType: ['Esposa(o)', 'Filha(o)']
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.dependentName = '';
      this.dependentAge = '';
      this.dependentType = null;
      this.$refs.observer.reset();
    }
  }
};
</script>

<style>
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
  border: 1px dashed rgba(0, 0, 0, 0.4);
}
</style>

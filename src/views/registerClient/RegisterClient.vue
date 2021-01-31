<template>
  <div class="mainContent">
    <v-card class="rounded-lg pa-4" width="600px">
      <validation-observer ref="observer">
        <form @submit.prevent="submit">
          <validation-provider v-slot="{ errors }" name="Name" rules="required">
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
            rules="required"
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
          <v-switch
            v-model="hasDependent"
            inset
            :label="`Tem dependente? ${hasDependent ? 'Sim' : 'Não'}`"
          ></v-switch>
          <div v-for="dependent in dependents" :key="dependent">
            <DependentForm v-if="hasDependent" />
            <v-btn v-if="hasDependent" @click="dependents++">
              Adicionar mais um dependente
            </v-btn>
            <v-btn
              v-if="hasDependent"
              class="ml-4"
              :disabled="dependents == 1"
              @click="dependents--"
            >
              Remover dependente
            </v-btn>
            <v-divider class="my-4"></v-divider>
          </div>
          <v-btn class="mr-4" type="submit" to="/">
            Voltar
          </v-btn>
          <v-btn class="mr-4" @click="clear">
            clear
          </v-btn>
          <v-btn class="mr-4" type="submit" @click="register">
            Adicionar Cliente
          </v-btn>
        </form>
      </validation-observer>
    </v-card>
  </div>
</template>

<script>
import RegisterClientService from '@/services/RegisterClientService';
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate';
import { required, digits, regex } from 'vee-validate/dist/rules';
import DependentForm from '@/components/dependentForm/DependentForm.vue';

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
  name: 'registerClient',
  components: {
    ValidationProvider,
    ValidationObserver,
    DependentForm
  },
  data: () => ({
    name: '',
    phoneNumber: '',
    address: '',
    select: null,
    hasDependent: false,
    dependents: 1,
    error: null
  }),
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = '';
      this.address = '';
      this.phoneNumber = '';
      this.hasDependent = false;
      this.$refs.observer.reset();
    },
    async register() {
      try {
        await RegisterClientService.registerClient({
          name: this.name,
          address: this.address,
          phoneNumber: this.phoneNumber
        });
      } catch (error) {
        this.error = error.response.data;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

<template>
  <div class="mainContent">
    <v-data-table
      :headers="headers"
      :items="clients"
      :items-per-page="5"
      class="elevation-3"
    >
    </v-data-table>

    <v-btn class="mt-4" type="submit" to="/register">
      Adicionar Cliente
    </v-btn>
  </div>
</template>

<script>
import GetClientsService from '@/services/GetClientsService';
export default {
  name: 'client',
  data() {
    return {
      headers: [
        {
          text: 'Código',
          value: 'id'
        },
        {
          text: 'Nome',
          value: 'name'
        },
        {
          text: 'Endereço',
          value: 'address'
        },
        {
          text: 'Telefone',
          value: 'phoneNumber'
        },
        {
          text: 'Dependentes',
          value: 'dependents'
        }
      ],
      clients: []
    };
  },
  async mounted() {
    this.clients = (await GetClientsService.index()).data;
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

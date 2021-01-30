<template>
  <div class="mainContent">
    <v-data-table
      :headers="headers"
      :items="users"
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
export default {
  name: 'client',
  data() {
    return {
      headers: [
        {
          text: 'Código',
          value: 'clientID'
        },
        {
          text: 'Nome',
          value: 'clientName'
        },
        {
          text: 'Endereço',
          value: 'clientAddress'
        },
        {
          text: 'Telefone',
          value: 'clientPhoneNumber'
        },
        {
          text: 'Dependentes',
          value: this.clientDependentsObject
        }
      ],
      clients: [
        {
          code: '1',
          name: 'John',
          address: 'Main Street',
          phone: '202-555-0107'
        }
      ],
      clientDependentsObject: {
        dependentName: 'Gomes',
        dependentAge: '22',
        dependentType: 'Son'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

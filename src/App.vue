<template>
  <v-app id="app">
    <v-main class="grey lighten-2 d-flex justify-center"
      ><router-view></router-view
    ></v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
};
</script>

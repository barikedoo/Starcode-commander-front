<template>
  <v-app id="example-8" dark toolbar>

    <app-header></app-header>

    <main>
      <v-container fluid>

        <router-view></router-view>

      </v-container>
    </main>

  </v-app>
</template>

<script>

import Header from './components/Header.vue'
export default {

  components: {
    'app-header': Header
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<template>
  <v-app id="example-8" dark toolbar>

    <app-header></app-header>

    <main>
      <v-container fluid>
        <app-task-dashboard></app-task-dashboard>
      </v-container>
    </main>

  </v-app>
</template>

<script>

import TaskDashboard from './components/tasks/TaskDashboard.vue'
import Header from './components/Header.vue'
export default {

  components: {
    'app-task-dashboard': TaskDashboard,
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

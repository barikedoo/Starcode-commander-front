<template>
  <v-layout row wrap>
    <v-flex xs12>
    <h4 > {{ projectName }}</h4>
    </v-flex>
    <app-single-task xs3 v-for="task in tasks" :key="task.id" :task="task"></app-single-task>

  </v-layout>
</template>

<script>

import SingleTask from './SingleTask.vue'

export default {
  components: {
    'app-single-task': SingleTask,
  },

  data() {
    return {
      
    }
  },
  computed:{
    tasks() {
      return this.$store.getters.activeProject.tasks;
    },
    projectName() {
      return this.$store.getters.activeProject.name;
    }
  }

}
</script>

<style>

</style>
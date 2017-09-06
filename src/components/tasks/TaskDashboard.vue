<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h4> {{ projectName }}</h4>
      </v-flex>
      <app-single-task v-for="task in tasks" :key="task.id" :task="task"></app-single-task>

      <router-link :to="{name:'add-task'}">
        <v-btn absolute dark fab bottom right class="pink add-button">
          <v-icon>add</v-icon>
        </v-btn>
      </router-link>
    </v-layout>
  </div>
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
  computed: {
    tasks() {
      return this.$store.getters.activeProject.tasks;
    },
    projectName() {
      return this.$store.getters.activeProject.name;
    }
  }

}
</script>

<style scoped lang="scss">
.dashboard {
  position: relative;
}

.add-button {
  bottom: 4%;
  right: 2%
}
</style>
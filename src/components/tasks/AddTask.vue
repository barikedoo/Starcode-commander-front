<template>
    <v-card dark>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="body-2 white--text">Dark Theme</div>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field box dark label="First Name" ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field dark label="Last Name" ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              box dark
              label="Email address"
              v-model="email"
              hint="Enter your email!"
              persistent-hint
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field box dark multi-line label="Bio"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            first: '',
            last: '',
            email: '',

            newTask: {
                projectId: null,
                projectName: '',
            }
        }
    },

    computed: {
        currentTaskId() {
            return this.$store.getters.currentTaskId;
        },
        activeProject() {
            return this.$store.getters.activeProject;
        }
    },
    methods: {
        log() {
            console.log(this.newTask);
        }
    },

    beforeMount() {
        this.newTask.projectId = this.activeProject.id;
        this.newTask.projectName = this.activeProject.name;

    }
}
</script>

<style scoped>
.no-underline {
    border: none;
}
</style>

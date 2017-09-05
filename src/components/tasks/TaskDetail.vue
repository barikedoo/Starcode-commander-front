<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0"># {{$route.query.id}}</h3>
                        <div>{{activeTask.description}}</div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <router-link :to="{path:'project'}">
                        <v-btn flat class="orange--text">Share</v-btn>
                    </router-link>
                    <v-btn flat class="orange--text" @click="log">Console me</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    computed: {
        activeProject() {
            return this.$store.getters.activeProject;
        },
        activeTask() {
            let tasks = this.$store.getters.activeProject.tasks;
            let vm = this;
            return tasks.find(function(task) {
                if (task.id == vm.$route.query.id) {
                    return task;
                } else {
                    return
                }
            });

        }
    },
    methods: {
        log() {
            console.log(this.$route.query.id);
            console.log(this.activeTask);
        }
    }

}
</script>

<style>
.headline {
    color: #fff;
}
</style>

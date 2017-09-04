<template>
    <v-layout row wrap>
        <v-flex xs12>
            <h2>Выберите проект с которым хотите работать</h2>
        </v-flex>

        <v-flex xs3 v-for="project in allProjects" :key="project.id" class="pa-2 project">
            <router-link :to="{path:'/project', params:{id:project.id}, query:{id:project.id}}">
                <v-card class="pa-3"> {{ project.name}} </v-card>
            </router-link>

        </v-flex>

    </v-layout>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        allProjects() {
            return this.$store.getters.allProjects;
        }
    }
}
</script>

<style scoped lang="scss">
.project {
    cursor: pointer;
}
a {
    text-decoration: none;
}
</style>

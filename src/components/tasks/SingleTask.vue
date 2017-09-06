<template>
    <v-flex xs6 md3 lg2>
        <v-card class="pa-2 task">
            <router-link tag="button" :to="{name: 'task-details', params: {id:task.id}, query:{id:task.id}}">
                <h6 class="task__header">#{{ task.id }} {{ task.title }}</h6>
            </router-link>

            <p class="text-xs-right">Исполнитель: {{ task.assignee }} </p>

            <v-flex>
                <v-card class="green accent-2" height="10px"></v-card>
            </v-flex>
        </v-card>
    </v-flex>
</template>

<script>

import { bus } from './../../main.js'


export default {

    props: ['task'],

    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
.task {


    &__header {
        color: #eee;
        font-size: 18px;

        &:hover {
            color: #1976d2;
            cursor: pointer;
        }
    }
}
</style>

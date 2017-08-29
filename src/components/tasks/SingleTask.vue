<template>
    <v-flex xs2>
        <v-card class="pa-2 task">
            <router-link tag="button" to="/task">
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
    methods: {
        openDetails() {
            bus.$emit('openDetails', this.task);
            console.log('2');
        }
    }
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

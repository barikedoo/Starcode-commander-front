<template>
    <v-layout>
        <v-flex xs3>
            <!-- Приоритеты можно сделать окрашиванием карточки в какой-нибудь цвет -->
            <v-card height="150px">
                <h6 class="pa-2``"> #{{ task.id }} {{ task.title }}</h6>

                <v-flex xs3>
                    <v-card xs2 offset5 v-bind:class="{red: true, 'accent-2': true}" height="30px"></v-card>
                </v-flex>

                <p class="pa-2 text-xs-right">Исполнитель: {{ task.assignee }} </p>
            </v-card>
        </v-flex>

    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            task: {
                id: 34,
                title: 'Отнести кольцо в Мордор и уничтожить его в Роковой горе',
                assignee: 'Фродо'
            },
        }
    }
}
</script>

<style lang="scss">
h6 {
    color: #eee;
    font-size: 18px;
}
</style>

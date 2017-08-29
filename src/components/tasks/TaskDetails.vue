<template>
    <v-layout row justify-center>

        <v-dialog v-model="dialog" persistent width="60%">

            <v-tabs dark centered>

                <v-tabs-bar slot="activators" class="blue">

                    <v-tabs-slider class="white"></v-tabs-slider>

                    <v-tabs-item href="#tab-main">
                        <p>Main</p>

                    </v-tabs-item>

                    <v-tabs-item href="#tab-logging">
                        <p>Log</p>
                    </v-tabs-item>

                    <v-tabs-item href="#tab-actions">
                        <p>Actions</p>
                    </v-tabs-item>
                </v-tabs-bar>

                <v-tabs-content id="tab-main">
                    <v-card flat>
                        <v-card-title class="headline">#{{task.id}} {{task.title}}</v-card-title>

                        <v-layout class="ma-0">
                            <v-flex xs8 class="description-border">
                                <v-card-text> {{task.description}} </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn class="green--text darken-1" flat="flat" @click="closeDetails">Сохранить</v-btn> -->
                        <router-link to="/dashboard">
                            <v-btn class="green--text darken-1" flat="flat">Сохранить</v-btn>
                        </router-link>
                        <v-spacer></v-spacer>
                    </v-card-actions>

                </v-tabs-content>

                <v-tabs-content id="tab-logging">
                    <v-card flat>
                        <v-card-text>Сюда короче добавим логи всех изменений по задаче</v-card-text>
                    </v-card>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn class="green--text darken-1" flat="flat" @click="closeDetails">Сохранить</v-btn> -->
                        <v-spacer></v-spacer>
                    </v-card-actions>

                </v-tabs-content>

                <v-tabs-content id="tab-actions">
                    <v-card flat>
                        <v-card-text>Ну а тут пока хз что будет, но это будет круто!</v-card-text>
                    </v-card>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn class="green--text darken-1" flat="flat" @click="closeDetails">Сохранить</v-btn> -->
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    </v-card>
                </v-tabs-content>

            </v-tabs>

        </v-dialog>
    </v-layout>
</template>

<script>

import { bus } from './../../main'

export default {


    data() {
        return {
            task: {},
            dialog: true,
            items: ['Главная информация', 'История изменений', 'Действия'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    },
    created() {
        bus.$on('openDetails', (data) => {
            this.task = data;
            this.dialog = true;
        })
    },
    // methods: {
    //     closeDetails() {
    //         this.dialog = false;
    //     }
    // }

}
</script>

<style lang=scss scoped>
.description-border {
    border-right: 1px solid #fff;
}
</style>

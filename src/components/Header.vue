<template>
    <v-layout>
        <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" dark overflow absolute>

            <v-list class="pa-1">

                <v-list-tile v-if="mini" @click.native.stop="mini = !mini">
                    <v-list-tile-action>
                        <v-icon light>chevron_right</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar tag="div">

                    <v-list-tile-avatar>
                        <img src="../../public/Gandalf-2.jpg" alt="">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Gandalf</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.native.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>

                </v-list-tile>

            </v-list>

            <v-list class="pt-0" dense>
                <v-divider light></v-divider>
                <v-list-tile v-for="item in drawerLinks" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>

        <v-toolbar dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <router-link to="/tasks-dashboard">
                <v-toolbar-title class="white--text">Starcode commander</v-toolbar-title>
            </router-link >
            <v-spacer></v-spacer>
            <v-flex xs3 class="pt-3">
                <v-select v-bind:items="projects.projectsAvailable" v-model="projects.projectActive" label="Выберите проект" single-line bottom></v-select>
            </v-flex>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>accessible</v-icon>
            </v-btn>
        </v-toolbar>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            drawerLinks: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            mini: false,
            right: null,

            projects: {
                projectsAvailable: [
                    'Истра', 'Estimates', 'Today.travel', 'Loads', 'ГПБ'
                ],
                projectActive: null
            }
        }
    }
}
</script>

<style>

</style>

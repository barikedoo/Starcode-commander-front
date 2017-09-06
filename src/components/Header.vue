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
            <router-link to="/home">
                <v-toolbar-title class="white--text">Starcode commander</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>

            <v-flex xs3 class="pt-3">
                    <v-select 
                    v-bind:items="allProjects" 
                    v-model="activeProject" 
                    item-text="name" 
                    item-value="id" 
                    label="Выберите проект" 
                    single-line bottom
                    @input="changeProject"></v-select>
            </v-flex>

            <v-btn icon @click="addNew" v-if="showAddButton ">
                <v-icon>add</v-icon>
            </v-btn>

            <!-- <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>accessible</v-icon>
            </v-btn> -->
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
            activeProject: null,
        }
    },
    methods: {
        changeProject() {
            this.$router.push({name:'project', query:{id:this.activeProject}}, )
        },

        addNew() {
            if(this.$route.path.match('/project')) {
                this.$router.push({name:'add-task'});
            } else if(this.$route.path.match('/home')) {
                alert('Раздел "Добавление новых проектов" в разработке')
            }
            
        }
    },
    computed: {
        allProjects() {
            return this.$store.getters.allProjects;
        },

        showAddButton() {
            if(this.$route.path.match('/task')) {
                return false;
            }else {
                return true;
            };
        }

    }
}
</script>

<style>

</style>

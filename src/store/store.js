import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        allProjects: [
            { id: 0, name: 'Истра' },
            { id: 1, name: 'Estimates' },
            { id: 2, name: 'Today.travel' },
            { id: 3, name: 'Loads' },
            { id: 4, name: 'ГПБ' },
        ],

    },
    getters: {
        allProjects: state => {
            return state.allProjects;
        }
    },
    mutations: {

    },
    actions: {

    }

})
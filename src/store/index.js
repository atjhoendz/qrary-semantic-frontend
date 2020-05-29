import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: []
    },
    mutations: {
        searchResults(state, book) {
            state.books = {...book };
        }
    },
    getters: {
        all: state => state.books
    }
})
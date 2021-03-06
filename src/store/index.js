import Vue from 'vue'
import Vuex from 'vuex'
import activities from './modules/activities'
import movies from './modules/movies'
import books from './modules/books'
import subjects from './modules/subjects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    activities,
    movies,
    books,
    subjects
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../assets/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    }
  },
  actions: {
    async fetchPosts({ commit, state }) {
      if (!state.posts.length) {
        try {
          const { data } = await axios.get(api.url + `posts`);
          commit('SET_POSTS', data)
          console.log(data)
        } catch (err) {
          console.error(err)
        }
      }
    }
  },
  getters: {
    getPosts: ({ posts }) => {
      const shuffled = posts.sort(function(){return .5 - Math.random()});
      return shuffled.slice(0,5); // get 5 random elements
    }
  },
  modules: {
  }
})

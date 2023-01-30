import axios from "axios";

export default {
  actions: {
    async fetchPosts(ctx) {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then( function (response) {
          const posts = response.data
          ctx.commit('updatePosts', posts)
      })
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}

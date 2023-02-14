import axios from "axios";

export default {
  actions: {
    async fetchPosts(ctx) {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
        .then( function (response) {
          const posts = response.data
          ctx.commit('updatePosts', posts, true)
      })
    }
  },
  mutations: {
    updatePosts(state, posts, status) {
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

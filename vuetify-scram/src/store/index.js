import reg from './modules/reg'
import posts from './modules/posts'
import { createStore } from "vuex";

export const store = createStore( {
  modules: {
    reg,
    posts
  }
})



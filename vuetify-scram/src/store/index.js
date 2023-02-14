import reg from './modules/reg'
import auth from './modules/auth'
import posts from './modules/posts'
import {createStore} from "vuex";

export const store = createStore({
  modules: {
    auth,
    reg,
    posts
  }
})



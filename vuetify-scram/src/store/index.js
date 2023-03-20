import tasks from './modules/tasks'
import auth from './modules/auth'
import project from './modules/projects'
import ya from "./modules/ya";
import client from "./modules/client";
import {createStore} from "vuex";

export const store = createStore({
  modules: {
    project,
    auth,
    tasks,
    ya,
    client,
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
})



import tasks from './modules/tasks'
import project from './modules/projects'
import ya from "./modules/ya";
import auth from "./modules/auth";
import role from "./modules/role";
import {createStore} from "vuex";

export const store = createStore({
  modules: {
    project,
    role,
    tasks,
    ya,
    auth
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
})



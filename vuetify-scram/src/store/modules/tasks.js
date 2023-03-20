import axios, {formToJSON} from "axios";
import getClient from "@/store/services/axiosClientService";

export default {
  actions: {
    async getTasks(ctx, project_id) {
      let client = getClient()
      client.get('/tasks/' + project_id)
        .then(function (response) {
          console.log(response.data)
          ctx.commit('updateTasks', response.data)
        })
    },
    createTask(ctx, data) {
      let client = getClient()
      client.post('/tasks', {
        deadline: "1679336656",
        description: data.description,
        project_id: data.id,
        status: "TO DO",
        title: data.name,
        users: []
      })
        .then(function (response) {
          console.log((response.data))
          ctx.dispatch('getTasks', data.id)
        })
    }
  },
  mutations: {
    updateTasks(state, payload) {
      state.tasks = payload
    }
  },
  state: {
    tasks: []
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  }
}

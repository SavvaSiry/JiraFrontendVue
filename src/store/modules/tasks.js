import axios, {formToJSON} from "axios";
import getClient from "@/services/axiosClientService";

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
        deadline: data.deadline,
        description: data.description,
        project_id: data.project_id,
        number: 0,
        status: "TO DO",
        title: data.title,
        users: data.users,
      })
        .then(function (response) {
          console.log((response.data))
          ctx.dispatch('getTasks', data.project_id)
        })
    },
    updateTask(ctx, data) {
      let client = getClient()
      client.put('/tasks/' + data.id,
        {
          title: data.title,
          description: data.description,
          deadline: data.deadline,
          status: data.status,
          users: data.users,
          project_id: data.project_id,
          number: 0
        })
        .then(r => {
          console.log(r)
          ctx.dispatch('getTasks', data.project_id)
        })
        .catch(ex => console.log(ex))
    },
    deleteTask(ctx, data) {
      let client = getClient()
      client.delete('/tasks/' + data.task_id)
        .then(r => {
          console.log(r.data)
          ctx.dispatch('getTasks', data.project_id)
        })
    }
  },
  mutations: {
    updateTasks(state, payload) {
      state.tasks.todo = payload.filter((task) => task.status === 'TO DO')
      state.tasks.inProgress = payload.filter((task) => task.status === 'IN PROGRESS')
      state.tasks.verify = payload.filter((task) => task.status === 'VERIFY')
      state.tasks.done = payload.filter((task) => task.status === 'DONE')
    },
  },
  state: {
    tasks: {
      todo: [],
      inProgress: [],
      verify: [],
      done: []
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  }
}

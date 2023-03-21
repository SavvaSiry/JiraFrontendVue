import getClient from "@/store/services/axiosClientService";

export default {
  actions: {
    async getProjectList(ctx) {
      let client = getClient()
      client.get('project')
        .then(r => {
          ctx.commit('setProjects', r.data)
        })
        .catch(ex => console.log(ex))
    },
    deleteProject(ctx, project_id) {
      let client = getClient()
      client.delete('/project/' + project_id)
        .then(r => {
          console.log(r.data)
          ctx.dispatch('getProjectList')
        })
    }
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload
    }
  },
  state: {
    projects: []
  },
  getters: {
    getProjects(state) {
      console.log(state.projects)
      return state.projects
    }
  }
}

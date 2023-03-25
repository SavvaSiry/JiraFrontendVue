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
    },
    createProject(ctx, project) {
      let client = getClient()
      client.post('/project',
        {
          title: project.title,
          description: project.description
        })
        .then(r => {
          console.log(r.data)
          ctx.dispatch('getProjectList')
        })
    },
    editProject(ctx, project) {
      let client = getClient()
      client.put('/project/' + project.id, {
        title: project.title,
        description: project.description
      })
        .then(r => {
          console.log(r.data)
          ctx.dispatch('getProjectList')
        })
    },
    selectProject(ctx, projectId) {
      ctx.commit('selectProject', projectId)
    },
    getRoleList(ctx, project_id) {
      const instance = getClient()
      instance.get("/role/" + project_id)
        .then(r => {
          ctx.commit('setRoles', r.data)
        })
    }
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload
    },
    selectProject(state, selectedProjectId) {
      state.selectedProjectId = selectedProjectId
      console.log(state.selectedProjectId)
    },
    setRoles(state, payload) {
      state.roleList = payload
    }
  },
  state: {
    projects: [],
    selectedProjectId: '',
    roleList: []
  },
  getters: {
    getProjects(state) {
      console.log(state.projects)
      return state.projects
    },
    getSelectedProjectId(state) {
      return state.selectedProjectId
    },
    getRoleList(state) {
      return state.roleList
    }
  }
}

import getClient from "@/store/services/axiosClientService";

export default {
  actions: {
    getRoleList(ctx, project_id) {
      const instance = getClient()
      instance.get('/role/' + project_id)
        .then(r => {
          ctx.commit('setRoles', r.data)
        })
    },
    updateRole(ctx, user) {
      const instance = getClient()
      instance.put('/role/' + user.project_id, {
        user_id: user.user_id,
        role: user.role,
      }).then(r => {
        ctx.dispatch('getRoleList', user.project_id);
      })
    }
  },
  mutations: {
    setRoles(state, payload) {
      state.roleList = payload
    }
  },
  state: {
    roleList: []
  },
  getters: {
    getRoleList(state) {
      return state.roleList
    }
  }
}

import getClient from "@/store/services/axiosClientService";

export default {
  actions: {
    // getRoleList(ctx, project_id) {
    //   const instance = getClient()
    //   instance.get("/role/" + project_id)
    //     .then(r => {
    //       ctx.commit('setRoles', r.data)
    //     })
    // }
  },
  mutations: {
    // setRoles(state, payload) {
    //   console.log(payload)
    //   console.log(JSON.stringify(payload))
    //   state.roleList = payload[0]
    // }
  },
  state: {
    // roleList: {}
  },
  getters: {
    // getRoleList(state) {
    //   return state.roleList
    // }
  }
}

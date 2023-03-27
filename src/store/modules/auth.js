import axios from "axios";

export default {
  actions: {
    async authenticate(ctx, user) {
      ctx.commit('SAVE_AUTH_LOADING', {name: 'email', status: true})
      ctx.commit('SAVE_AUTH_LOADING', {name: 'password', status: true})
      axios.post('http://localhost:8080/auth', {
          email: user.email,
          password: user.password,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_AUTH_ERROR', {name: 'email', status: false, errorMessage: ''})
          ctx.commit('SAVE_AUTH_ERROR', {name: 'password', status: false, errorMessage: ''})
        })
        .catch(function (error) {
            console.log(error)
            if (error.response.data.detail.toLowerCase().includes('email')) {
              ctx.commit('SAVE_AUTH_ERROR', {name: 'email', status: true, errorMessage: error.response.data.detail})
            } else if (error.response.data.detail.toLowerCase().includes('password')) {
              ctx.commit('SAVE_AUTH_ERROR', {name: 'password', status: true, errorMessage: error.response.data.detail})
            }
          }
        );
      ctx.commit('SAVE_AUTH_LOADING', {name: 'email', status: false})
      ctx.commit('SAVE_AUTH_LOADING', {name: 'password', status: false})
    },
  },
  mutations: {
    SAVE_AUTH_LOADING(state, payload) {
      state.authStatus[payload.name].loading = payload.status;
    },
    SAVE_AUTH_ERROR(state, payload) {
      state.authStatus[payload.name].error = payload.status;
      state.authStatus[payload.name].errorMessage = payload.errorMessage;
    },
  },
  state: {
    authStatus: {
      email: {
        loading: false,
        error: false,
        errorMessage: '',
      },
      password: {
        loading: false,
        error: false,
        errorMessage: '',
      }
    },
  },
  getters: {
    getAuthPasswordStatus(state) {
      return state.authStatus.password
    },
    getAuthEmailStatus(state) {
      return state.authStatus.email
    },
  }
}

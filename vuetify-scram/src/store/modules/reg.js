import axios from "axios";

export default {
  actions: {
    logIn(ctx, user) {
      ctx.commit('SAVE_REG_LOADING', {name: 'username', status: true})
      ctx.commit('SAVE_REG_LOADING', {name: 'email', status: true})
      axios.post('http://localhost:8080/registration', {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_REG_ERROR', {name: 'username', status: false, errorMessage: undefined})
          ctx.commit('SAVE_REG_ERROR', {name: 'email', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
            if (error.response.data.detail.toLowerCase().includes('name')) {
              ctx.commit('SAVE_REG_ERROR', {name: 'username', status: true, errorMessage: error.response.data.detail})
            } else if (error.response.data.detail.toLowerCase().includes('email')) {
              ctx.commit('SAVE_REG_ERROR', {name: 'email', status: true, errorMessage: error.response.data.detail})
            }
          }
        );
      ctx.commit('SAVE_REG_LOADING', {name: 'username', status: false})
      ctx.commit('SAVE_REG_LOADING', {name: 'email', status: false})
    },

    async validateUsername(ctx, username) {
      ctx.commit('SAVE_REG_LOADING', {name: 'username', status: true})
      axios.post('http://localhost:8080/registration/validate/username', {
          name: username,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_REG_ERROR', {name: 'username', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
          ctx.commit('SAVE_REG_ERROR', {name: 'username', status: true, errorMessage: error.response.data.detail})
          }
        );
      ctx.commit('SAVE_REG_LOADING', {name: 'username', status: false})
    },

    async validateEmail(ctx, email) {
      ctx.commit('SAVE_REG_LOADING', {name: 'email', status: true})
      axios.post('http://localhost:8080/registration/validate/email', {
          email: email,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_REG_ERROR', {name: 'email', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
            ctx.commit('SAVE_REG_ERROR', {name: 'email', status: true, errorMessage: error.response.data.detail})
          }
        );
      ctx.commit('SAVE_REG_LOADING', {name: 'email', status: false})
    }

  },
  mutations: {
    SAVE_REG_LOADING(state, payload) {
      state.regStatus[payload.name].loading = payload.status;
    },
    SAVE_REG_ERROR(state, payload) {
      state.regStatus[payload.name].error = payload.status;
      state.regStatus[payload.name].errorMessage = payload.errorMessage;
    },
  },
  state: {
    regStatus: {
      username: {
        loading: false,
        error: false,
        errorMessage: '',
      },
      email: {
        loading: false,
        error: false,
        errorMessage: '',
      },
      password: {
        loading: false,
        error: false,
        errorMessage: '',
      },
    },
  },
  getters: {
    getRegUsernameStatus(state) {
      return state.regStatus.username
    },
    getRegEmailStatus(state) {
      return state.regStatus.email
    },
  }
}

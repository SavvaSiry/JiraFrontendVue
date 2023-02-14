import axios from "axios";

export default {
  actions: {
    logIn(ctx, user) {
      // axios.defaults.headers.post['Content-Type'] = 'application/json';
      // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

      ctx.commit('SAVE_LOADING', {name: 'username', status: true})
      ctx.commit('SAVE_LOADING', {name: 'email', status: true})
      axios.post('http://localhost:8080/registration', {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_ERROR', {name: 'username', status: false, errorMessage: undefined})
          ctx.commit('SAVE_ERROR', {name: 'email', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
            if (error.response.data.detail.toLowerCase().includes('name')) {
              ctx.commit('SAVE_ERROR', {name: 'username', status: true, errorMessage: error.response.data.detail})
            } else if (error.response.data.detail.toLowerCase().includes('email')) {
              ctx.commit('SAVE_ERROR', {name: 'email', status: true, errorMessage: error.response.data.detail})
            }
          }
        );
      ctx.commit('SAVE_LOADING', {name: 'username', status: false})
      ctx.commit('SAVE_LOADING', {name: 'email', status: false})
    },
    validateUsername(ctx, username) {
      ctx.commit('SAVE_LOADING', {name: 'username', status: true})
      axios.post('http://localhost:8080/registration/validate/username', {
          name: username,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_ERROR', {name: 'username', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
          ctx.commit('SAVE_ERROR', {name: 'username', status: true, errorMessage: error.response.data.detail})
          }
        );
      ctx.commit('SAVE_LOADING', {name: 'username', status: false})
    },
    validateEmail(ctx, email) {
      ctx.commit('SAVE_LOADING', {name: 'email', status: true})
      axios.post('http://localhost:8080/registration/validate/email', {
          email: email,
        },
      )
        .then(function (response) {
          ctx.commit('SAVE_ERROR', {name: 'email', status: false, errorMessage: undefined})
        })
        .catch(function (error) {
            ctx.commit('SAVE_ERROR', {name: 'email', status: true, errorMessage: error.response.data.detail})
          }
        );
      ctx.commit('SAVE_LOADING', {name: 'email', status: false})
    }
  },
  mutations: {
    SAVE_TOKENS(state, users) {
      state.users = users;
    },
    SAVE_LOADING(state, payload) {
      state.status[payload.name].loading = payload.status;
    },
    SAVE_ERROR(state, payload) {
      state.status[payload.name].error = payload.status;
      state.status[payload.name].errorMessage = payload.errorMessage;
    },
  },
  state: {
    status: {
      username: {
        loading: false,
        error: false,
        errorMessage: '',
      },
      email: {
        loading: false,
        error: false,
        errorMessage: '',
      }
    },
    jwtToken: {
      refreshToken: '',
      accessToken: '',
    },
  },
  getters: {
    getUsernameStatus(state) {
      return state.status.username
    },
    getEmailStatus(state) {
      return state.status.email
    }
  }
}

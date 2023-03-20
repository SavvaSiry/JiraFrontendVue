import axios from "axios";
import getClient from "@/store/services/axiosClientService";

export default {
  actions: {
    getYa(ctx) {
      window.location.replace('https://oauth.yandex.ru/authorize?response_type=code&client_id=e78f67c5c3d442599dc19e665bda8543')
    },
    getUserToken(ctx, code) {
      let client = getClient();
      client.get('/login?code=' + code)
        .then(r => {
          console.log(JSON.stringify(r.data))
          ctx.commit('updateToken', r.data)
          ctx.dispatch('getUserInfo')
        }).catch(error => {
        console.log(error)
      })
    },
    getUserInfo(ctx) {
      let client = getClient();
      client.get('/info')
        .then(r => {
          console.log(r.data)
          ctx.commit('updateInfo', r.data)
        }).catch(error => {
        console.log(error)
      })
    }
  },
  mutations: {
    loadStore() {
      if(localStorage.getItem('store')) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem('store')));
        }
        catch(e) {
          console.log('Could not initialize store', e);
        }
      }
    },
    updateToken(state, payload) {
      state.tokens.access_token = payload.access_token
      // console.log(state.tokens.access_token)
      // state.tokens.refresh_token = payload.refresh_token
    },
    updateInfo(state, payload) {
      state.info.email = payload.email
      state.info.avatarId = payload.icon
      state.info.user_name = payload.login
    }
  },
  state: {
    tokens: {
      access_token: undefined,
      refresh_token: undefined,
    },
    info: {
      user_name: '',
      email: '',
      avatarId: '',
    }
  },
  getters: {
    getAccessToken(state) {
      console.log(state)
      return state.tokens.access_token
    },
    getInfo(state) {
      console.log(state)
      return state.info
    }
  }
}

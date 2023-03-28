import getClient from "@/services/axiosClientService";

export default {
  action: {
    getUserInfo(ctx) {
      const instance = getClient()
      instance.get(instance.baseUrl + '/info')
        .then(function (response) {
          console.log(JSON.stringify(response.data))
        })
        .catch(function (error) {
          console.log(JSON.stringify(error.data))
          }
        );
    }
  },
  mutations: {

  },
  state: {

  },
  getters: {
  }
}

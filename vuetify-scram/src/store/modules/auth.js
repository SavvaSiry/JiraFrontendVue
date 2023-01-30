import axios from "axios";

export default {
  actions: {
    logIn({firstName, lastName}) {
      axios.post('/user', {
        firstName: firstName,
        lastName: lastName
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}

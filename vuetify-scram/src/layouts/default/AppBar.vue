<template>
  <v-app-bar :elevation="1" rounded>
    <v-app-bar-nav-icon/>
    <v-app-bar-title>Hi there!</v-app-bar-title>
    <template v-slot:append>

      <v-btn icon="mdi-login" @click="overlay = !overlay"></v-btn>

      <v-overlay class="align-center d-flex flex-row justify-center" v-model="overlay">

        <v-card>

          <div class="flex-row d-flex justify-space-between align-center">
            <v-card-title>Войдите или создайте аккаунт</v-card-title>
            <v-btn icon="mdi-close" @click="overlay = false">
            </v-btn>
          </div>

          <v-card-subtitle>Войти в аккаунт</v-card-subtitle>

          <v-sheet class="pa-5">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="firstName"
                label="First name"
                :rules="firstNameRules"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                class="mt-1"
                v-model="lastName"
                label="Last name"
                :rules="lastNameRules"
                variant="underlined"
              ></v-text-field>

              <v-btn variant="outlined" type="submit" block class="mt-2" @click="logIn()">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-card>

      </v-overlay>

    </template>
  </v-app-bar>

</template>

<script>
export default {
  data: () => ({
    overlay: false,
    firstName: '',
    firstNameRules: [
      value => {
        if (value?.length > 3) return true

        return 'First name must be at least 3 characters.'
      },
    ],
    lastName: '',
    lastNameRules: [
      value => {
        if (/[^0-9]/.test(value)) return true

        return 'Last name can not contain digits.'
      },
    ],
    items: [
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me 2'},
    ],
  }),
  methods: {
    logIn() {

    }
  }
}
</script>

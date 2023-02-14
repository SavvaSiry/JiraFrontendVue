<template>
  <v-card>

    <div class="flex-row d-flex justify-space-between align-center">
      <v-card-title>Войдите или создайте аккаунт</v-card-title>
      <v-btn icon="mdi-close" @click="$emit('close')">
      </v-btn>
    </div>

    <v-card-subtitle>Войти в аккаунт</v-card-subtitle>


    <v-sheet class="pa-5">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="name"
          label="Name"
          :rules="nameRules"
          variant="underlined"
          :loading="getUsernameStatus.loading"
          :error-messages="getUsernameStatus.errorMessage"
          @update:modelValue="checkUsername()"
        ></v-text-field>

        <v-text-field
          class="mt-1"
          v-model="email"
          label="Email"
          :rules="emailRules"
          variant="underlined"
          :loading="getEmailStatus.loading"
          :error-messages="getEmailStatus.errorMessage"
          @update:modelValue="checkEmail()"
        ></v-text-field>

        <v-text-field
          class="mt-1"
          v-model="password"
          label="Password"
          :rules="passwordRules"
          type="password"
          variant="underlined"
        ></v-text-field>

        <v-btn variant="outlined" type="submit" block class="mt-2" @click="submit()">Submit</v-btn>
      </v-form>
    </v-sheet>


  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {store} from "@/store";

export default {
  data: () => ({
    name: '',
    nameRules: [
      value => {
        if (value?.length > 3 && /[^0-9]/.test(value)) return true
        return 'First name must be at least 3 characters.'
      },
    ],
    password: '',
    passwordRules: [
      value => {
        if (value?.length > 8) return true
        return 'The password must contain 8 symbols.'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) return true
        return 'Email is incorrect.'
      }
    ],
    items: [
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me'},
      {title: 'Click Me 2'},
    ],
  }),
  computed: {
    ...mapGetters(['getUsernameStatus', 'getEmailStatus'])
  },
  methods: {
    ...mapActions(['logIn', 'validateUsername', 'validateEmail']),
    submit() {
      this.logIn({name: this.name, email: this.email, password: this.password})
    },
    checkUsername() {
      if (this.name?.length > 3 && /[^0-9]/.test(this.name))
        this.validateUsername(this.name)
    },
    checkEmail() {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email))
        this.validateEmail(this.email)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-card-text>
    <v-form ref="form" @submit.prevent>
      <v-text-field
        v-model="name"
        label="Name"
        :rules="nameRules"
        variant="underlined"
        :loading="getRegUsernameStatus.loading"
        :error-messages="getRegUsernameStatus.errorMessage"
        @update:modelValue="checkUsername()"
      ></v-text-field>

      <v-text-field
        class="mt-1"
        v-model="email"
        label="Email"
        :rules="emailRules"
        variant="underlined"
        :loading="getRegEmailStatus.loading"
        :error-messages="getRegEmailStatus.errorMessage"
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

      <v-text-field
        class="mt-1"
        v-model="repeatPassword"
        label="Repeat password"
        type="password"
        variant="underlined"
        :error-messages="repeatPasswordErrorMessage"
        @update:modelValue="validatePasswords()"
      ></v-text-field>

      <v-btn variant="outlined" type="submit" block class="mt-2" @click="submit()">Создать аккаунт</v-btn>
    </v-form>
  </v-card-text>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

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
    repeatPassword: '',
    repeatPasswordErrorMessage: 'Password mismatch',
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
    ...mapGetters(['getRegEmailStatus', 'getRegUsernameStatus'])
  },
  methods: {
    ...mapActions(['logIn', 'validateUsername', 'validateEmail']),
    async submit() {
      const {valid} = await this.$refs.form.validate()
      if (valid) this.logIn({name: this.name, email: this.email, password: this.password})
    },
    checkUsername() {
      if (this.name?.length > 3 && /[^0-9]/.test(this.name))
        this.validateUsername(this.name)
    },
    checkEmail() {
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email))
        this.validateEmail(this.email)
    },
    validatePasswords() {
      if (this.repeatPassword === this.password) return this.repeatPasswordErrorMessage = ''
      return this.repeatPasswordErrorMessage = 'Password mismatch'
    },
  }
}
</script>

<style scoped>

</style>

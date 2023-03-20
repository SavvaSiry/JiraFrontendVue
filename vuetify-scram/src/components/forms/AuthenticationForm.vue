<template>
  <v-card-text>
    <v-form ref="form" @submit.prevent>

      <v-text-field
        class="mt-1"
        v-model="email"
        label="Email"
        variant="underlined"
        :loading="getAuthEmailStatus.loading"
        :error-messages="getAuthEmailStatus.errorMessage"
      ></v-text-field>

      <v-text-field
        class="mt-1"
        v-model="password"
        label="Password"
        type="password"
        variant="underlined"
        :loading="getAuthPasswordStatus.loading"
        :error-messages="getAuthPasswordStatus.errorMessage"
      ></v-text-field>

      <v-btn  variant="outlined" type="submit" block class="mt-2" @click="getYa()">Yandex ID</v-btn>

      <v-btn variant="outlined" type="submit" block class="mt-2" @click="submit()">Войти</v-btn>

    </v-form>
  </v-card-text>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "AuthenticationForm",
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    ...mapGetters(['getAuthEmailStatus', 'getAuthPasswordStatus'])
  },
  methods: {
    ...mapActions(['authenticate', 'getYa']),
    async submit() {
      await this.authenticate({email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped>

</style>

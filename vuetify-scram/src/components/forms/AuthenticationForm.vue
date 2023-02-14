<template>
  <v-card-text>
    <v-form ref="form" @submit.prevent>

      <v-text-field
        class="mt-1"
        v-model="email"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        class="mt-1"
        v-model="password"
        label="Password"
        type="password"
        variant="underlined"
      ></v-text-field>

      <v-btn variant="outlined" type="submit" block class="mt-2" @click="submit()">Войти</v-btn>

    </v-form>
  </v-card-text>
</template>

<script>
export default {
  name: "AuthenticationForm"
}
</script>

<style scoped>

</style>

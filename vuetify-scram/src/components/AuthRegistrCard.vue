<template>
  <v-card
    class="mx-auto"
    max-width="500"
    min-width="300"
  >
    <div class="flex-row d-flex justify-space-between align-center">
      <v-card-title>Войдите или создайте аккаунт</v-card-title>
      <v-btn icon="mdi-close" @click="$emit('close')">
      </v-btn>
    </div>

    <v-btn-toggle
      background-color="primary"
      dark
    >
      <v-btn @click="step = 1">
        Войти
      </v-btn>
      <v-btn @click="step = 2">
        Создать аккаунт
      </v-btn>
    </v-btn-toggle>

    <v-divider></v-divider>

    <v-window v-model="step">

      <v-window-item :value="1">
        <AuthenticationForm/>
      </v-window-item>

      <v-window-item :value="2">
        <RegistrationForm/>
      </v-window-item>

    </v-window>

  </v-card>
</template>

<script>
import RegistrationForm from "@/components/forms/RegistrationForm";
import AuthenticationForm from "@/components/forms/AuthenticationForm";

export default {
  name: "AuthRegistrCard",
  components: {AuthenticationForm, RegistrationForm},
  data: () => ({
    step: 1,
  }),
}
</script>

<style scoped>

</style>

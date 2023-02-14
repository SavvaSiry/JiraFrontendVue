<template>
  <v-app-bar :elevation="1" rounded>
    <v-app-bar-nav-icon/>
    <v-app-bar-title>Hi there!</v-app-bar-title>
    <template v-slot:append>

      <v-btn icon="mdi-login" @click="overlay = !overlay"></v-btn>

      <v-overlay class="align-center d-flex flex-row justify-center" v-model="overlay">

      <AuthRegistrCard
        @close="overlay = false"
      />

      </v-overlay>

    </template>
  </v-app-bar>

</template>

<script>
import AuthRegistrCard from "@/components/AuthRegistrCard";
export default {
  components: {AuthRegistrCard},
  data: () => ({
    overlay: false,
  })
}
</script>

<template>
  <v-app-bar :elevation="1" rounded>
    <v-app-bar-nav-icon/>
    <v-app-bar-title>Hi there!</v-app-bar-title>
    <template v-slot:append>

      <v-btn icon="mdi-login" @click="overlay = !overlay"></v-btn>

      <v-overlay class="align-center d-flex flex-row justify-center" v-model="overlay">

        <SignUpCard
         @close="overlay = false"
        />

      </v-overlay>

    </template>
  </v-app-bar>

</template>

<script>
import SignUpCard from "@/components/SignUpCard";

export default {
  components: {SignUpCard},

  data: () => ({
    overlay: false,
  })
}
</script>

<template>
  <v-app-bar :elevation="0" style="border-bottom: 1px solid #c3bebe">
    <v-app-bar-title><b>NotScram</b></v-app-bar-title>
    <template v-slot:append>

      <v-btn outlined icon="mdi-menu" @click="roleOverlay = true"/>

      <v-overlay class="align-center d-flex flex-row justify-center" v-model="roleOverlay">
        <EditRoles

        />
      </v-overlay>

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
import EditRoles from "@/components/users/EditRoles";

export default {
  components: {EditRoles, AuthRegistrCard},
  data: () => ({
    overlay: false,
    roleOverlay: false,
  })
}
</script>

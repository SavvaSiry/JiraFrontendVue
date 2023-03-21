<template>
  <v-layout>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="project in getProjects"
          :key="project.id"
          cols="12"
          sm="4"
        >
          <v-card
            class="ma-2 pa-2"
            :loading="false"
            variant="outlined"
          >
            <div class="d-flex align-center justify-space-between">
              <v-card-title>{{ project.title }}</v-card-title>
              <v-btn prepend-icon="mdi-delete" variant="text" @click="deleteProject(project)">
                Delete
              </v-btn>
            </div>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn @click="seeProject(project)">Go to tasks</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-layout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {store} from "@/store";
import router from "@/router";

export default {
  name: "ProjectList",
  async mounted() {
    await store.dispatch('getProjectList')
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  methods: {
    seeProject(project) {
      this.$router.push('/projects/' + project.id)
    },
    deleteProject(project) {

    }
  }
}
</script>

<style scoped>

</style>

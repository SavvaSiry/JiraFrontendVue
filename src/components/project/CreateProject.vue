<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
    >

      <v-card-title>Создать проект</v-card-title>
      <v-card-text>
        <project-form
          @submit="createProject"
          :button-title="'Создать'"
        />
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
import ProjectForm from "@/components/project/ProjectForm";
import {store} from "@/store";

export default {
  name: "CreateProject",
  components: {ProjectForm},
  methods: {
    createProject(project) {
      store.dispatch('createProject', project)
      this.$emit('overlayClose')
    }
  }
}
</script>

<style scoped>

</style>

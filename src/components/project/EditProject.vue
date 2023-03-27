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
          @submit="editProject"
          :button-title="'Изменить проект'"
          :project="project"
        />
      </v-card-text>
    </v-card>
  </v-overlay>

</template>

<script>
import ProjectForm from "@/components/project/ProjectForm";
import {store} from "@/store";

export default {
  name: "EditProject",
  components: {ProjectForm},
  props: {
    project: {
      required: true
    }
  },
  methods: {
    editProject(project) {
      store.dispatch('editProject', project)
      this.$emit('closeOverlay')
    }
  }
}
</script>

<style scoped>

</style>

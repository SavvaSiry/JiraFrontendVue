<template>
  <v-card
    class="ma-2 pa-2"
    :loading="false"
    variant="outlined"
  >
    <div class="d-flex align-center justify-space-between">
      <v-card-title>{{ project.title }}</v-card-title>
      <v-btn prepend-icon="mdi-delete" variant="text" @click="overlay = true">
        Delete
      </v-btn>
    </div>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-actions>
      <v-btn @click="seeProject(project)">Go to tasks</v-btn>
    </v-card-actions>
    <YesNo
      v-model="overlay"
      :question="'Вы действительно хотите удалить ' + project.title + '?'"
      @closeOverlay="overlay = false"
      @yes="this.yes()"
      @no="overlay = false"
    />
  </v-card>
</template>

<script>
import YesNo from "@/components/YesNo";
import {store} from "@/store";

export default {
  name: "Project",
  components: {YesNo},
  data() {
    return {
      overlay: false
    }
  },
  props: {
    project: {
      required: true
    }
  },
  methods: {
    seeProject(project) {
      this.$router.push('/projects/' + project.id)
    },
    yes() {
      this.deleteProject(this.project)
    },
    deleteProject(project) {
      store.dispatch('deleteProject', project.id)
    }
  }
}
</script>

<style scoped>

</style>

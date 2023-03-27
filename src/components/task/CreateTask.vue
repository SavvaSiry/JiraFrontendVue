<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
      style="overflow: visible"
    >

      <v-card-title>Create task</v-card-title>
      <v-divider/>
      <v-card-text>

        <task-form
          :button-title="'Create'"
          @submit="createTask"
        />
      </v-card-text>

    </v-card>
  </v-overlay>
</template>

<script>
import {store} from "@/store";
import SelectUsers from "@/components/users/SelectUsers";
import TaskForm from "@/components/task/TaskForm";
import {mapGetters} from "vuex";

export default {
  name: "CreateTask",
  components: {TaskForm, SelectUsers},
  methods: {
    ...mapGetters(['getSelectedProjectId']),
    createTask(data) {
      data.project_id = this.getSelectedProjectId()
      store.dispatch('createTask', data)
    },

  }
}
</script>

<style scoped>

</style>

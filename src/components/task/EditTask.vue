<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
      style="overflow: visible"
    >

      <div class="d-flex align-center justify-space-between">
        <v-card-title>Edit task</v-card-title>
        <v-btn prepend-icon="mdi-delete" variant="text" @click="deleteTask()">
        </v-btn>
      </div>

      <v-divider/>

      <v-card-text>

        <task-form
          :button-title="'Edit'"
          :task="task"
          @submit="updateTask"
        />

      </v-card-text>


    </v-card>
  </v-overlay>
</template>

<script>
import {store} from "@/store";
import TaskForm from "@/components/task/TaskForm";

export default {
  name: "EditTask",
  components: {TaskForm},
  props: {
    task: {
      required: true
    },
  },
  methods: {
    updateTask(task) {
      store.dispatch('updateTask', task)
      this.$emit('closeOverlay')
    },
    deleteTask() {
      let data = {task_id: this.task.id, project_id: this.task.project_id}
      store.dispatch('deleteTask', data)
      this.$emit('closeOverlay')
    }
  }
}
</script>

<style scoped>

</style>

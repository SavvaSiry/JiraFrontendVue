<template>
  <v-card @click="overlay = true">
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-text>{{ task.description }}</v-card-text>
  </v-card>
  <CreateTask
    v-model="overlay"
    :button-title="'Внести изменения'"
    :card-title="'Редактирование задачи'"
    :description="task.description"
    :title="task.title"
    :task="task"
    @closeOverlay="overlay = false"
  />
</template>

<script>
import CreateTask from "@/components/CreateTask";

export default {
  name: "Task",
  components: {CreateTask},
  props: {
    task: {
      title: String,
      description: String,
      required: true
    }
  },
  data() {
    return {
      overlay: false
    }
  },
  methods: {
    editTask() {
      console.log('Edit task')
    }
  }
}
</script>

<style scoped>

</style>

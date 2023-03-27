<template>
  <div>
    <v-card @click="overlay = true">
      <v-card-title>{{ task.title }}</v-card-title>
      <v-card-text>{{ task.description }}</v-card-text>
      <v-card-text>
        <span class="me-4">Creator: </span>
        <v-chip
          pill
        >
          <v-avatar start>
            <v-img :src="'https://avatars.mds.yandex.net/get-yapic/' + getInfo.avatarId + '/islands-200'"></v-img>
          </v-avatar>

          {{ getInfo.user_name }}
        </v-chip>
      </v-card-text>
    </v-card>

    <EditTask
      v-model="overlay"
      :task="task"
      @closeOverlay="overlay = false"
    />

  </div>
</template>

<script>
import CreateTask from "@/components/task/CreateTask";
import {mapGetters} from "vuex";
import EditTask from "@/components/task/EditTask";

export default {
  name: "Task",
  components: {EditTask, CreateTask},
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
  computed: {
    ...mapGetters(['getInfo']),
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

<template>
  <div>
    <v-card @click="overlay = true">
      <v-card-title>{{ task.title }}</v-card-title>
      <v-divider/>
      <v-card-text>{{ task.description }}</v-card-text>
      <v-card-text v-if="task.users.length > 0">
        <span class="me-4"><b>Performers: </b></span>
        <v-chip
          pill
          v-for="user in task.users"
        >
          <v-avatar start>
            <v-img :src="'https://avatars.mds.yandex.net/get-yapic/' + user.icon + '/islands-200'"></v-img>
          </v-avatar>
          {{ user.user_id }}
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

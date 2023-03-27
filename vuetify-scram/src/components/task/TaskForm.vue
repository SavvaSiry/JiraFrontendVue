<template>
  <v-form ref="form" @submit.prevent>
    <v-text-field
      v-model="editTask.title"
      label="Task name"
      variant="underlined"
    />

    <v-textarea
      class="mt-1"
      v-model="editTask.description"
      label="Description"
      variant="underlined"
      placeholder="Describe the task here"
    />

    <VueDatePicker style="z-index: 1000" v-model="editTask.date">
    </VueDatePicker>

    <div class="pt-3">
      <div class="pt-3 d-flex justify-space-between align-center">
        <div style="font-size: 16px" class="font-weight-medium">Performers</div>
        <v-btn variant="text" @click="selectUsersOverlay = true">Edit</v-btn>

        <SelectUsers
          v-model="selectUsersOverlay"
          v-model:usersSelected="editTask.users"
          @close="selectUsersOverlay = false"
        />

      </div>

      <div class="pt-3">
        <v-chip
          pill
          variant="outlined"
          v-for="user in editTask.users"
        >
          <v-avatar start>
            <v-img :src="'https://avatars.mds.yandex.net/get-yapic/' + user.icon + '/islands-200'"/>
          </v-avatar>
          <span>{{ user.user_id }}</span>
        </v-chip>
      </div>
    </div>

    <v-btn variant="outlined" type="submit" block class="mt-5" @click="submit()">
      {{ buttonTitle }}
    </v-btn>
  </v-form>
</template>

<script>
import SelectUsers from "@/components/users/SelectUsers";

export default {
  name: "TaskForm",
  components: {SelectUsers},
  data() {
    return {
      selectUsersOverlay: false,
      editTask: {
        title: '',
        description: '',
        date: '',
        users: [],
      },
    }
  },
  props: {
    task: {},
    buttonTitle: {
      type: String,
      default: 'Submit'
    }
  },
  mounted() {
    if (this.task !== undefined) {
      this.editTask = this.task
      this.editTask.date = new Date(this.task.deadline * 1000)
      console.log(this.editTask.date)
    }
  },
  methods: {
    submit() {
      this.editTask.deadline = this.editTask.date.getTime()/1000
      this.$emit('submit', this.editTask)
    }
  }
}
</script>

<style scoped>

</style>

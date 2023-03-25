<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
      style="overflow: visible"
    >

      <div class="d-flex align-center justify-space-between">
        <v-card-title>{{ cardTitle }}</v-card-title>
        <v-btn v-if="task !== undefined" prepend-icon="mdi-delete" variant="text" @click="deleteTask()">
        </v-btn>
      </div>

      <v-card-text>
        <v-form ref="form" @submit.prevent>
          <v-text-field
            v-model="editTitle"
            label="Task name"
            variant="underlined"
          />

          <v-textarea
            class="mt-1"
            v-model="editDescription"
            label="Description"
            variant="underlined"
            placeholder="Describe the task here"
          />

          <VueDatePicker style="z-index: 1000" v-model="date" uid="demo">
          </VueDatePicker>

          <div class="pt-3">
            <div class="pt-3 d-flex justify-space-between align-center">
              <div style="font-size: 16px" class="font-weight-medium">Performers</div>
              <v-btn variant="text" @click="selectUsersOverlay = true">Edit</v-btn>
              <SelectUsers
                v-model="selectUsersOverlay"
              />
            </div>
            <div class="pt-3">
              <v-chip
                pill
                variant="outlined"
              >
                <v-avatar start>
                  <v-img alt="some"></v-img>
                </v-avatar>
                Some
              </v-chip>
            </div>
          </div>


          <v-btn variant="outlined" type="submit" block class="mt-5" @click="submit()">{{ buttonTitle }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
import {store} from "@/store";
import {ref} from 'vue';
import SelectUsers from "@/components/users/SelectUsers";
import {mapGetters} from "vuex";

export default {
  name: "CreateTask",
  components: {SelectUsers},
  setup() {
    const date = ref();

    return {
      date
    }
  },
  data() {
    return {
      editTitle: '',
      editDescription: '',
      selectUsersOverlay: false,
    }
  },
  props: {
    task: {},
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    buttonTitle: {
      type: String,
      default: 'Создать'
    },
    cardTitle: {
      type: String,
      default: 'Создать задачу'
    },
  },
  mounted() {
    this.editTitle = this.title
    this.editDescription = this.description
  },
  methods: {
    ...mapGetters(['getSelectedProjectId']),
    submit() {
      if (this.task !== undefined) this.updateTask()
      else this.createTask()
      this.cleanForm()
    },
    updateTask() {
      let data = {
        id: this.task.id,
        title: this.editTitle,
        description: this.editDescription,
        deadline: this.task.deadline.toString(),
        status: this.task.status,
        users: this.task.users,
        project_id: this.getSelectedProjectId()
      }
      store.dispatch('updateTask', data)
    },
    createTask() {
      let data = {
        project_id: this.getSelectedProjectId(),
        name: this.editTitle,
        description: this.editDescription,
        number: store.state.tasks.length
      }
      store.dispatch('createTask', data)
    },
    cleanForm() {
      this.editTitle = ''
      this.editDescription = ''
      this.$emit('closeOverlay')
    },
    deleteTask() {
      let data = {task_id: this.task.id, project_id: this.getSelectedProjectId()}
      store.dispatch('deleteTask', data)
      this.cleanForm()
    }
  }
}
</script>

<style scoped>

</style>

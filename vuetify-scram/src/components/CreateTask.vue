<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
    >

      <v-card-title>{{ cardTitle }}</v-card-title>
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

          <v-btn variant="outlined" type="submit" block class="mt-2" @click="createTask()">{{ buttonTitle }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
import {store} from "@/store";

export default {
  name: "CreateTask",
  data() {
    return {
      editTitle: '',
      editDescription: '',
    }
  },
  props: {
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
    createTask() {
      let data = {id: this.$route.params.id, name: this.editTitle, description: this.editDescription}
      store.dispatch('createTask', data)
      this.cleanForm()
    },
    cleanForm() {
      this.editTitle = ''
      this.editDescription = ''
      this.$emit('closeOverlay')
    }
  }
}
</script>

<style scoped>

</style>

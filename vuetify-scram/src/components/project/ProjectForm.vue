<template>
  <v-form ref="form">
    <v-text-field
      v-model="editProject.title"
      label="Task name"
      variant="underlined"
    />

    <v-textarea
      class="mt-1"
      v-model="editProject.description"
      label="Description"
      variant="underlined"
      placeholder="Describe the task here"
    />

    <v-btn variant="outlined" block class="mt-2" @click="this.$emit('submit', editProject)">{{ buttonTitle }}</v-btn>
  </v-form>
</template>

<script>

export default {
  name: "ProjectForm",
  data() {
    return {
      editProject: {
        title: '',
        description: '',
      },
    }
  },
  props: {
    project: {},
    buttonTitle: {
      type: String,
      default: ''
    }
  },
  mounted() {
    console.log('asdasd')
    if (this.project !== undefined) {
      this.editProject = this.project
    }
  }
}
</script>

<style scoped>

</style>

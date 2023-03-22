<template>
  <v-overlay class="align-center d-flex flex-row justify-center">

    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
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

          <v-btn variant="outlined" type="submit" block class="mt-2" @click="submit()">{{ buttonTitle }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "CreateProject"
}
</script>

<style scoped>

</style>

<template>
  <v-card
    class="ma-2 pa-2 d-flex flex-column"
    :loading="false"
    variant="outlined"
    min-height="250"
    max-height="250"

  >
    <div class="d-flex align-center justify-space-between">
      <v-card-title>{{ project.title }}</v-card-title>

      <v-menu outlined>
        <template v-slot:activator="{ props }">
          <v-btn variant="flat" icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn prepend-icon="mdi-delete" variant="text" @click="deleteOverlay = true">
              Delete
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn prepend-icon="mdi-file-document-edit" variant="text" @click="editOverlay = true">
              Edit
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-card-text class="flex-fill">{{ project.description }}</v-card-text>
    <v-card-actions>
      <v-btn @click="seeProject(project)">Go to tasks</v-btn>
    </v-card-actions>
    <edit-project
      :project="project"
      v-model="editOverlay"
      @closeOverlay="editOverlay = false"
    />
    <YesNo
      v-model="deleteOverlay"
      :question="'Вы действительно хотите удалить ' + project.title + '?'"
      @closeOverlay="deleteOverlay = false"
      @yes="this.yes()"
      @no="deleteOverlay = false"
    />
  </v-card>
</template>

<script>
import YesNo from "@/components/basic/YesNo";
import {store} from "@/store";
import EditProject from "@/components/project/EditProject";

export default {
  name: "Project",
  components: {EditProject, YesNo},
  data() {
    return {
      deleteOverlay: false,
      editOverlay: false,
      items: [
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me 2'},
      ],
    }
  },
  props: {
    project: {
      required: true
    }
  },
  methods: {
    seeProject(project) {
      this.$router.push('/projects/' + project.id)
    },
    yes() {
      this.deleteProject(this.project)
    },
    deleteProject(project) {
      store.dispatch('deleteProject', project.id)
    }
  }
}
</script>

<style scoped>

</style>

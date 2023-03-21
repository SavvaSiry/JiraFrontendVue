<template>
  <navigation-default/>
  <v-layout>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="project in getProjects"
          :key="project.id"
          cols="12"
          sm="4"
        >
          <v-btn style="width: 95%" class="d-flex align-center justify-center ma-2 pa-2" variant="outlined" min-height="250"
                 max-height="250">
            <v-icon icon="mdi-plus" size="x-large"/>
          </v-btn>
        </v-col>
        <v-col
          v-for="project in getProjects"
          :key="project.id"
          cols="12"
          sm="4"
        >
          <Project
            :project="project"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {store} from "@/store";
import router from "@/router";
import NavigationDefault from "@/layouts/default/NavigationBar";
import YesNo from "@/components/YesNo";
import Project from "@/components/Project";

export default {
  name: "ProjectList",
  components: {Project, YesNo, NavigationDefault},
  data() {
    return {
      overlay: false
    }
  },
  async mounted() {
    await store.dispatch('getProjectList')
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  methods: {
    seeProject(project) {
      this.$router.push('/projects/' + project.id)
    }
  }
}
</script>

<style scoped>

</style>

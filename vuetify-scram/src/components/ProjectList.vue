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

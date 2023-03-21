<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        :prepend-avatar="'https://avatars.mds.yandex.net/get-yapic/' + getInfo.avatarId + '/islands-200'"
        :title="getInfo.user_name"
        :subtitle="getInfo.email"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="My projects" value="projects" @click="redirect('/projects')"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "navigation-default",
  computed: {
    ...mapGetters(['getInfo']),
  },
  methods: {
    redirect(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-container class="fill-height">
    <v-container class="w-100 d-flex flex-column">
    <v-card v-for="post in allPosts" class="mt-4">
      <v-card-title>{{ post.title}}</v-card-title>
      <v-card-text>{{ post.body }}</v-card-text>
    </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import {store} from "@/store";
export default {
  name: "Authorization",
  computed: {
    ...mapGetters(['allPosts'])
  },
  async mounted() {
    await store.dispatch('fetchPosts')
  }
}
</script>

<style scoped>

</style>

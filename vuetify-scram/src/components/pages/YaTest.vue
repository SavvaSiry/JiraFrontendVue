<template>
  <v-container class="fill-height">
    <v-container class="w-100 d-flex flex-column">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <div class="flex-row d-flex align-center justify-space-around pa-5">
          <v-avatar
            :size="100"
            :image="'https://avatars.mds.yandex.net/get-yapic/' + getInfo.avatarId + '/islands-200'"
          ></v-avatar>
        </div>
        <v-card-title>Добро пожаловать, {{ getInfo.user_name }}</v-card-title>
        <v-card-subtitle>{{ getInfo.email }}</v-card-subtitle>
        <v-card-actions>
          <v-btn variant="outlined" type="submit" block class="mt-2" @click="toMainPage()">Начать работу</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import {store} from "@/store";
import router from "@/router";

export default {
  name: "YaTest",
  computed: {
    ...mapGetters(['getInfo'])
  },
  async mounted() {
    await store.dispatch('getUserToken', this.$route.query.code)
  },
  methods: {
    toMainPage() {
      router.push('/projects')
    }
  }
}
</script>

<style scoped>

</style>

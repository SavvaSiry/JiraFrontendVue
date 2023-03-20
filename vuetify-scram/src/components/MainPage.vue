<template>
  <v-card>
    <v-layout>
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
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 95vh">
        <div class="my-grid">
          <div class="my-colum">
            <v-card-title class="pa-0 text-center">TO DO</v-card-title>

            <Task
              v-for="task in getTasks"
              :task="task"
            />

            <v-btn variant="outlined" type="submit" block class="mt-2" @click="overlay = !overlay">Создать</v-btn>
          </div>
          <div class="my-colum">
            <v-card-title class="pa-0 text-center">IN PROGRESS</v-card-title>
          </div>
          <div class="my-colum">
            <v-card-title class="pa-0 text-center">VERIFY</v-card-title>
          </div>
          <div class="my-colum my-last-column">
            <v-card-title class="pa-0 text-center">DONE</v-card-title>
          </div>
        </div>
      </v-main>
      <CreateTask
        v-model="overlay"
        @closeOverlay="overlay = false"
      />
    </v-layout>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex';
import CreateTask from "@/components/CreateTask";
import {store} from "@/store";
import Task from "@/components/Task";

export default {
  name: "MainPage",
  data() {
    return {
      overlay: false,
    }
  },
  components: {Task, CreateTask},
  computed: {
    ...mapGetters(['getInfo', 'getTasks'])
  },
  async mounted() {
    await store.dispatch('getTasks', this.$route.params.id)
  }
}
</script>

<style scoped>
.my-grid {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.my-colum {
  width: 100%;
  height: 100%;

  overflow: auto;

  box-sizing: border-box;
  padding: 15px;

  border-right: 1px solid black;
}

.my-last-column {
  border-right: 0;
}
</style>

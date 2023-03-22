<template>
  <navigation-default/>
  <v-layout class="h-100">
    <v-main>
      <div class="my-grid">
        <div class="my-colum">
          <v-card-title class="pa-0 text-center">TO DO</v-card-title>
          <div class="my-task-container mt-5">
            <Task
              v-for="task in getTasks"
              :task="task"
            />
          </div>
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
</template>

<script>
import {mapGetters} from 'vuex';
import CreateTask from "@/components/task/CreateTask";
import {store} from "@/store";
import Task from "@/components/task/Task";
import draggable from "vuedraggable";
import NavigationDefault from "@/layouts/default/NavigationBar";

export default {
  name: "MainPage",
  components: {NavigationDefault, Task, CreateTask, draggable},
  data() {
    return {
      overlay: false,
      drag: false,
      // list1: [
      //   { name: "John", id: 1 },
      //   { name: "Joao", id: 2 },
      //   { name: "Jean", id: 3 },
      //   { name: "Gerard", id: 4 }
      // ],
      // list2: [
      //   { name: "Juan", id: 5 },
      //   { name: "Edgard", id: 6 },
      //   { name: "Johnson", id: 7 }
      // ]
    }
  },
  computed: {
    ...mapGetters(['getInfo', 'getTasks']),
    // myList: {
    //   get() {
    //     return this.getTasks
    //   },
    // set(value) {
    //   this.$store.commit('updateList', value)
    // }
    // }
  },
  async mounted() {
    await store.dispatch('getTasks', this.$route.params.id)
  },
  methods: {
    // add: function() {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function() {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function(el) {
    //   return {
    //     name: el.title + " cloned"
    //   };
    // },
    // log: function(evt) {
    //   window.console.log(evt);
    // }
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

.my-task-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.my-last-column {
  border-right: 0;
}
</style>

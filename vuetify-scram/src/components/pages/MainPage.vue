<template>
  <navigation-default/>
  <v-layout class="h-100">
    <v-main>
      <div class="my-grid">
        <div class="my-colum">
          <v-card-title class="pa-0 text-center">TO DO</v-card-title>

          <draggable
            class="my-task-container mt-5"
            v-model='myList.todo'
            item-key="id"
            @change="todo"
            group="tasks"
            @add="changeStatus"
          >
            <template #item="{element}">
              <Task
                :task="element"
              />
            </template>
          </draggable>

          <v-btn variant="outlined" type="submit" block class="mt-2" @click="overlay = !overlay">Создать</v-btn>
        </div>
        <div class="my-colum">
          <v-card-title class="pa-0 text-center">IN PROGRESS</v-card-title>

          <draggable
            class="my-task-container mt-5"
            v-model='myList.inProgress'
            item-key="id"
            group="tasks"
            @change="inProgress"
          >
            <template #item="{element}">
              <Task
                :task="element"
              />
            </template>
          </draggable>

        </div>
        <div class="my-colum">
          <v-card-title class="pa-0 text-center">VERIFY</v-card-title>

          <draggable
            class="my-task-container mt-5"
            v-model='myList.verify'
            item-key="id"
            @change="verify"
            group="tasks"
            @add="changeStatus"
          >
            <template #item="{element}">
              <Task
                :task="element"
              />
            </template>
          </draggable>

        </div>
        <div class="my-colum my-last-column">
          <v-card-title class="pa-0 text-center">DONE</v-card-title>

          <draggable
            class="my-task-container mt-5"
            v-model='myList.done'
            item-key="id"
            @change="done"
            group="tasks"
            @add="changeStatus"
          >
            <template #item="{element}">
              <Task
                :task="element"
              />
            </template>
          </draggable>

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
    }
  },
  computed: {
    ...mapGetters(['getInfo', 'getTasks']),
    myList: {
      get() {
        return this.getTasks
      },
      set(value) {
        console.log('SET DATA')
        this.$store.commit('updateTasks', value)
      },
    }
  },
  async mounted() {
    await store.dispatch('getTasks', this.$route.params.id)
  },
  methods: {
    todo: function (evt) {
      if (evt.added) this.changeStatus(evt.added.element, 'TO DO')
    },
    inProgress: function (evt) {
      if (evt.added) this.changeStatus(evt.added.element, 'IN PROGRESS')
    },
    verify: function (evt) {
      if (evt.added) this.changeStatus(evt.added.element, 'VERIFY')
    },
    done: function (evt) {
      if (evt.added) this.changeStatus(evt.added.element, 'DONE')
    },
    changeStatus(element, status) {
      element.status = status
      store.dispatch('updateTask', element)
    }
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

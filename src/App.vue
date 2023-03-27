<template>
  <router-view/>
</template>

<script>
import {store} from "@/store";

export default {
  beforeCreate() {
    // use store.commit to run any mutation. Below we are running the loadStore mutation
    store.commit('loadStore')
  }
}
</script>

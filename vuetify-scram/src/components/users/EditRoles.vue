<template>

  <v-card
    class="mx-auto"
    max-width="600"
    min-width="550"
    style="overflow: visible"
  >

    <v-card-title>Manage roles in project</v-card-title>

    <v-list style="overflow: visible">

      <v-list-item
        v-for="item in getRoleList" :key="item.user_id"
        style="overflow: visible"

      >
        <template v-slot:prepend>
          <v-avatar start>
            <v-img
              :src="'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200'"
            />
          </v-avatar>
        </template>

        <div class="d-flex align-center justify-space-between" style="overflow: visible">
          <v-list-item-title v-text="item.user_id">
          </v-list-item-title>
          <dropdown style="overflow: visible"
                    class="my-dropdown-toggle"
                    :options="arrayOfObjects"
                    :selected="object"
                    v-on:updateOption="methodToRunOnSelect"
                    :placeholder="'Select an Item'"
                    v-click-outside="close = true"
                    :closeOnOutsideClick="close">
          </dropdown>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import dropdown from 'vue-dropdowns';

export default {
  name: "EditRoles",
  components: {dropdown},
  computed: {
    ...mapGetters(['getRoleList'])
  },
  data() {
    return {
      arrayOfObjects: [
        {name: 'admin'},
        {name: 'test'},
      ],
      object: {
        name: 'Object Name',
      },
      close: false,
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
}
</script>

<style>
.v-list-item__content {
  overflow: visible;
}
</style>

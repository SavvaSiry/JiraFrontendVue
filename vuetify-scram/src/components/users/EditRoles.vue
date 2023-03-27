<template>

  <v-card
    class="mx-auto"
    max-width="600"
    min-width="550"
    style="overflow: visible"
  >

    <v-card-title>Manage roles in project</v-card-title>
    <v-divider/>

    <v-list style="overflow: visible">

      <v-list-item
        v-for="item in getRoleList" :key="item.user_id"
        style="overflow: visible"

      >
        <template v-slot:prepend>
          <v-avatar start>
            <v-img
              :src="'https://avatars.mds.yandex.net/get-yapic/' + item.icon + '/islands-200'"
            />
          </v-avatar>
        </template>

        <div class="d-flex align-center justify-space-between" style="overflow: visible">
          <v-list-item-title v-text="item.user_id">
          </v-list-item-title>
          <dropdown style="overflow: visible"
                    class="my-dropdown-toggle"
                    :options="getListOptions(item)"
                    :selected="convertToObject(item)"
                    v-on:updateOption="methodToRunOnSelect"
                    :placeholder="'Select an Item'"
                    v-click-outside="close = true"
                    :closeOnOutsideClick="close">
          </dropdown>
        </div>
      </v-list-item>
    </v-list>

    <v-divider/>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        variant="text"
        @click="editRoles()"
      >
        Done
      </v-btn>
    </v-card-actions>


  </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import dropdown from 'vue-dropdowns';
import {store} from "@/store";

export default {
  name: "EditRoles",
  components: {dropdown},
  computed: {
    ...mapGetters(['getRoleList'])
  },
  data() {
    return {
      result: [],
      arrayOfObjects: [
        {name: 'Manager'},
        {name: 'Viewer'},
        {name: 'Performer'},
      ],
      close: false,
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.result = this.result.filter((item) => item.user_id !== payload.user_id)
      this.result.push(payload)
    },
    convertToObject(item) {
      return {name: item.role}
    },
    getListOptions(item) {
      let array = []
      this.arrayOfObjects.forEach((role) => {
        if (role.name !== item.role) array.push({
          name: role.name,
          user_id: item.user_id,
          project_id: item.project_id,
          role: role.name
        })
      })
      return array
    },
    editRoles() {
      this.result.forEach((item) => {
        store.dispatch('updateRole', item)
      })
      this.$emit('close');
    },
  }
}
</script>

<style>
.v-list-item__content {
  overflow: visible;
}
</style>

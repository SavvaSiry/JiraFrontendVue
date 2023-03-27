<template>
  <v-overlay class="align-center d-flex flex-row justify-center">
    <v-card
      class="mx-auto"
      max-width="550"
      min-width="550"
    >
      <v-card-title>Assign performers</v-card-title>

      <v-container>
        <v-row
          align="center"
          justify="start"
        >
          <v-col
            v-for="(selection, i) in usersSelected"
            :key="selection.text"
            cols="auto"
            class="py-1 pe-0"
          >
            <v-chip
              :disabled="loading"
              closable
              @click:close="this.usersSelected.splice(i, 1)"
            >
              <v-avatar start>
                <v-img
                  :src="'https://avatars.mds.yandex.net/get-yapic/' + selection.icon + '/islands-200'"
                  :disabled="loading"
                />
              </v-avatar>

              {{ selection.user_id }}
            </v-chip>
          </v-col>

          <v-col
            v-if="!allSelected"
            cols="12"
          >
            <v-text-field
              ref="search"
              v-model="search"
              hide-details
              label="Search"
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-divider v-if="!allSelected"></v-divider>

      <v-list>
        <template v-for="item in getRoleList" :key="item.user_id">
          <v-list-item
            :disabled="loading"
            @click="usersSelected.push(item)"
            v-if="checkById(item)"
          >
            <template v-slot:prepend>
              <v-avatar start>
                <v-img
                  :src="'https://avatars.mds.yandex.net/get-yapic/' + item.icon + '/islands-200'"
                  :disabled="loading"
                />
              </v-avatar>
            </template>
            <div class="d-flex align-center justify-space-between">
              <v-list-item-title v-text="item.user_id"/>
              <v-list-item-subtitle v-text="item.role"/>
            </div>
          </v-list-item>
        </template>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          :loading="loading"
          variant="text"
          @click="assignPerformers"
        >
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
import {mapGetters} from "vuex";
import dropdown from 'vue-dropdowns';

export default {
  name: "SelectUsers",
  components: {
    'dropdown': dropdown,
  },
  data: () => ({
    arrayOfObjects: [
      {name: 'admin'},
      {name: 'test'},
    ],
    object: {
      name: 'Object Name',
    },
    loading: false,
    search: '',
  }),
  props: {
    usersSelected: {
      type: Array,
      defaults: [],
    },
  },
  computed: {
    ...mapGetters(['getRoleList']),
    allSelected() {
      return this.getRoleList.length === this.usersSelected.length
    },
  },
  watch: {
    selected() {
      this.search = ''
    },
  },
  methods: {
    assignPerformers() {
      console.log(this.usersSelected)
      this.$emit('close')
    },
    checkById(item) {
      return this.usersSelected.find((i) => i.user_id === item.user_id) === undefined
    },
  },
}
</script>

<style scoped>

</style>

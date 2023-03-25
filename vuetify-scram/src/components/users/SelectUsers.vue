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
            v-for="(selection, i) in selections"
            :key="selection.text"
            cols="auto"
            class="py-1 pe-0"
          >
            <v-chip
              :disabled="loading"
              closable
              @click:close="selected.splice(i, 1)"
            >
              <v-avatar start>
                <v-img
                  :src="'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200'"
                  :disabled="loading"
                />
              </v-avatar>

              {{ selection.text }}
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
        <template v-for="item in getRoleList">
          <v-list-item
            v-if="!selected.includes(item)"
            :key="item.text"
            :disabled="loading"
            @click="selected.push(item)"
          >
            <template v-slot:prepend>
              <v-avatar start>
                <v-img
                  :src="'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200'"
                  :disabled="loading"
                />
              </v-avatar>
            </template>

            <v-list-item-title v-text="item.user_id">
            </v-list-item-title>

            <dropdown class="my-dropdown-toggle"
                      :options="arrayOfObjects"
                      :selected="object"
                      v-on:updateOption="methodToRunOnSelect"
                      :placeholder="'Select an Item'"
                      :closeOnOutsideClick="boolean">
            </dropdown>
          </v-list-item>
        </template>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          :disabled="!selected.length"
          :loading="loading"
          color="purple"
          variant="text"
          @click="next"
        >
          Next
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
    items: [
      {
        text: 'Nature',
        icon: 'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200',
      },
      {
        text: 'Nightlife',
        icon: 'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200',
      },
      {
        text: 'November',
        icon: 'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200',
      },
      {
        text: 'Portland',
        icon: 'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200',
      },
      {
        text: 'Biking',
        icon: 'https://avatars.mds.yandex.net/get-yapic/54535/m2YVJQvmyWxqqr2zeOlfivoZzRg-1/islands-200',
      },
    ],
    loading: false,
    search: '',
    selected: [],
  }),

  computed: {
    ...mapGetters(['getRoleList']),
    allSelected() {
      return this.selected.length === this.items.length
    },
    categories() {
      const search = this.search.toLowerCase()

      if (!search) return this.items

      return this.items.filter(item => {
        const text = item.text.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
    selections() {
      const selections = []

      for (const selection of this.selected) {
        selections.push(selection)
      }

      return selections
    },
  },

  watch: {
    selected() {
      this.search = ''
    },
  },

  methods: {
    next() {
      this.loading = true

      setTimeout(() => {
        this.search = ''
        this.selected = []
        this.loading = false
      }, 2000)
    },
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  },
}
</script>

<style scoped>

</style>

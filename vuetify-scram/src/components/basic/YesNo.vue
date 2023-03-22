<template>
  <v-overlay class="align-center d-flex flex-row justify-center">
    <v-card
      class="mx-auto"
      max-width="600"
      min-width="400"
    >
      <v-card-title>{{ question }}</v-card-title>
      <div class="my-grid pa-3">
        <v-btn class="w-100" variant="outlined" type="submit" @click="no()">No</v-btn>
        <v-btn class="w-100" variant="outlined" type="submit" @click="yes()">Yes</v-btn>
      </div>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "YesNo",
  props: {
    question: {
      type: String,
      required: true
    }
  },
  methods: {
    no() {
      this.$emit('no')
      this.$emit('closeOverlay')
    },
    yes() {
      this.$emit('yes')
      this.$emit('closeOverlay')
    }
  }
}
</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
</style>

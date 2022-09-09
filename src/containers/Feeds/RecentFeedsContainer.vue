<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="transparent" flat>
          <v-card-title class="pa-0">Recent Articals</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="i in 10" :key="i">
        <feed-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedContainer from "@/containers/Feeds/FeedContainer.vue";
@Component({
  components: { FeedContainer },
})
export default class RecentFeedsContainer extends Vue {}
</script>

<style scoped></style>

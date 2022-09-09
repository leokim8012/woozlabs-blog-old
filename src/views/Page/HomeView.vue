<template>
  <v-container class="base-container">
    <v-row>
      <v-col cols="12" sm="8">
        <recent-feeds-container />
      </v-col>
      <v-col cols="12" sm="4">
        <recommend-feeds-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RecommendFeedsContainer from "@/containers/Feeds/RecommendFeedsContainer.vue";

import RecentFeedsContainer from "@/containers/Feeds/RecentFeedsContainer.vue";

@Component({
  components: {
    RecentFeedsContainer,
    RecommendFeedsContainer,
  },
})
export default class Home extends Vue {}
</script>

<style scoped></style>

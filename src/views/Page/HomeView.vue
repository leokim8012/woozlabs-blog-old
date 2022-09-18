<template>
  <v-container class="base-container">
    <v-row>
      <v-col
        v-if="$vuetify.breakpoint.mdAndUp"
        :class="'side-panel'"
        cols="12"
        md="3"
      >
        <!-- <recommend-feeds-container /> -->
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <recent-feeds-container />
      </v-col>
      <v-col
        :class="$vuetify.breakpoint.smAndUp ? 'side-panel' : ''"
        cols="12"
        sm="4"
        md="3"
      >
        <recommend-feeds-container />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RecommendFeedsContainer from "@/containers/Feeds/RecommendFeedsContainer.vue";

import RecentFeedsContainer from "@/containers/Feeds/RecentFeedsContainer.vue";
import setMeta from "@/utils/setMeta";

@Component({
  components: {
    RecentFeedsContainer,
    RecommendFeedsContainer,
  },
})
export default class Home extends Vue {
  mounted() {
    setMeta({ title: "Home", description: "Make Imagination True." });
  }
}
</script>

<style scoped></style>
3

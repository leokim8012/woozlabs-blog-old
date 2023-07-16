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
        <v-btn
          class="rounded-lg"
          @click="routerPush('Archive')"
          :ripple="false"
        >
          Read more 👀
        </v-btn>
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
import { Component, Mixins } from "vue-property-decorator";
import RecommendFeedsContainer from "@/containers/Feeds/RecommendFeedsContainer.vue";

import RecentFeedsContainer from "@/containers/Feeds/RecentFeedsContainer.vue";
import setMeta from "@/utils/setMeta";
import RouterPush from "@/mixins/routerPush";

@Component({
  components: {
    RecentFeedsContainer,
    RecommendFeedsContainer,
  },
})
export default class Home extends Mixins(RouterPush) {
  mounted() {
    setMeta({ title: "Home", description: "Make Imagination True." });
  }
}
</script>

<style scoped></style>
3

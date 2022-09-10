<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="transparent" flat>
          <v-card-title class="pa-0">Recent Articles</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="recentFeeds.length > 0">
      <v-col cols="12" v-for="feed in recentFeeds" :key="feed.id">
        <feed-container :data="feed" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">No Articles found!</v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedContainer from "@/containers/Feeds/FeedContainer.vue";
import { ArticleBaseInterface } from "@/types/article";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { FeedContainer },
})
export default class RecentFeedsContainer extends Vue {
  recentFeeds: Array<ArticleBaseInterface> = [];

  mounted() {
    this._initialize();
  }

  async _initialize() {
    this.recentFeeds = await articleAPI.getArticles();
  }
}
</script>

<style scoped></style>

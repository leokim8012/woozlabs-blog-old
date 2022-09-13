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
        <feed-card-container :data="feed" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-if="!isLoaded" cols="12">
        <v-skeleton-loader type="image" />
        <v-skeleton-loader class="py-4" type="paragraph" />
      </v-col>
      <v-col v-else cols="12">No Articles found!</v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedCardContainer from "@/containers/Feeds/FeedCardContainer.vue";
import { ArticleBaseInterface } from "@/types/article";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { FeedCardContainer },
})
export default class RecentFeedsContainer extends Vue {
  recentFeeds: Array<ArticleBaseInterface> = [];

  isLoaded = false;

  async mounted() {
    this.isLoaded = false;
    await this._initialize();
    this.isLoaded = true;
  }

  async _initialize() {
    try {
      const result = await articleAPI.getArticleCollection({
        limit: 6,
        order: "createdAt",
        sort: "desc",
      });

      this.recentFeeds = result.items;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped></style>

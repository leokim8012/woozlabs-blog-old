<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="transparent" flat>
          <v-card-subtitle class="pa-0">Recommended Articles</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="recommendFeeds.length > 0">
      <v-col cols="12" v-for="feed in recommendFeeds" :key="feed.id">
        <feed-card-container :options="{ subtitle: false }" :data="feed" />
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
export default class RecommendFeedsContainer extends Vue {
  recommendFeeds: Array<ArticleBaseInterface> = [];

  isLoaded = false;

  async mounted() {
    this.isLoaded = false;
    await this._initialize();
    this.isLoaded = true;
  }

  async _initialize() {
    try {
      this.recommendFeeds = await articleAPI.getRecommendArticles({
        limit: 6,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped></style>

<template>
  <v-card class="transparent" flat>
    <v-card-title>Recommended Articles</v-card-title>
    <v-container v-if="recommendedArticles.length > 0" fluid>
      <v-row v-if="recommendedArticles.length > 0">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="article in recommendedArticles"
          :key="article.id"
        >
          <feed-card-container :data="article" />
        </v-col>
      </v-row>
      <!-- <v-row v-else>Not prepared yet!</v-row> -->
    </v-container>
    <v-container v-else fluid>
      <v-row>
        <v-col class="" cols="12" sm="6" md="4">
          <v-skeleton-loader type="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedCardContainer from "@/containers/Feeds/FeedCardContainer.vue";
import { ArticleBaseInterface } from "@/types/article";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { FeedCardContainer },
})
export default class ArchiveRecommendArticleContainer extends Vue {
  isLoaded = false;
  recommendedArticles: Array<ArticleBaseInterface> = [];

  async mounted() {
    this.isLoaded = false;

    this.recommendedArticles = await articleAPI.getArticles();
    this.isLoaded = true;
  }
}
</script>

<style></style>

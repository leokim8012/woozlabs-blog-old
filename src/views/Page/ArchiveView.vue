<template>
  <v-container class="base-container">
    <v-row>
      <v-col cols="12"> <archive-recommend-article-container /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> <archive-article-list-container /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import RouterPush from "@/mixins/routerPush";
import Article from "@/types/article";
import ArchiveRecommendArticleContainer from "@/containers/Archive/ArchiveRecommendArticleContainer.vue";
import ArchiveArticleListContainer from "@/containers/Archive/ArchiveArticleListContainer.vue";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { ArchiveRecommendArticleContainer, ArchiveArticleListContainer },
})
export default class ArchiveView extends Mixins(RouterPush) {
  isLoaded = false;
  articles!: Array<Article.ArticleBaseInterface>;
  mounted() {
    this._initialize();
  }

  async _initialize() {
    this.isLoaded = false;
    this.articles = await articleAPI.getArticles();

    this.isLoaded = true;
  }
}
</script>

<style scoped></style>

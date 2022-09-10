<template>
  <v-card class="transparent" flat>
    <v-card-title class="pa-2">
      <v-btn-toggle v-model="currentCategory" mandatory color="secondary" group>
        <v-btn
          v-for="category in categories"
          :key="category"
          class="rounded-lg title pa-4"
          active-class="headline "
          :value="category"
          :ripple="false"
          v-text="category"
        />
      </v-btn-toggle>
    </v-card-title>
    <v-container v-if="recommendedArticles.length > 0" fluid>
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-list class="transparent" flat three-line :ripple="false">
            <feed-list-container
              v-for="article in recommendedArticles"
              :key="article.id"
              :data="article"
          /></v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-pagination
          v-model="currentPage"
          color="surface"
          active-class="onSurface--text"
          :length="4"
        />
      </v-row>
    </v-container>

    <v-container v-else fluid>
      <v-row>
        <v-col class="" cols="12">
          <v-skeleton-loader type="paragraph" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeedListContainer from "@/containers/Feeds/FeedListContainer.vue";
import { ArticleBaseInterface } from "@/types/article";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { FeedListContainer },
})
export default class ArchiveRecommendArticleContainer extends Vue {
  isLoaded = false;
  recommendedArticles: Array<ArticleBaseInterface> = [];

  categories = ["All", "Test1", "Test2", "Test3"];
  currentCategory = "All";
  currentPage = 1;

  async mounted() {
    this.isLoaded = false;
    this.recommendedArticles = await articleAPI.getArticles();
    this.isLoaded = true;
  }
}
</script>

<style></style>

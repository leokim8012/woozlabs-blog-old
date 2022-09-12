<template>
  <v-card v-if="recommendedArticles.length > 0" class="transparent" flat>
    <v-container fluid>
      <v-row v-if="recommendedArticles.length > 0">
        <v-col cols="12">
          <div class="font-weight-bold title">Recommended Article</div>
        </v-col>
        <v-col
          cols="6"
          v-for="article in recommendedArticles"
          :key="article.id"
        >
          <feed-card-container :data="article" />
        </v-col>
      </v-row>
      <!-- <v-row v-else>Not prepared yet!</v-row> -->
    </v-container>

    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12"> <div class="font-weight-bold">Series</div> </v-col>
        <v-col cols="6" v-for="i in 4" :key="i">
          <feed-container />
        </v-col>
      </v-row>
    </v-container> -->
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
export default class ArticleRecommendContainer extends Vue {
  isLoaded = false;
  recommendedArticles: Array<ArticleBaseInterface> = [];

  async mounted() {
    this.isLoaded = false;

    this.recommendedArticles = await articleAPI.getArticles({
      limit: 6,
      offset: 0,
      order: "createdAt",
      sort: "asc",
    });
    this.isLoaded = true;
  }
}
</script>

<style></style>

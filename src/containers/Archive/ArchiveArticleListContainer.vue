<template>
  <v-card class="transparent" flat>
    <v-card-title class="pa-2">
      <v-item-group
        v-model="currentCategoryIndex"
        mandatory
        color="secondary lighten-3"
        group
      >
        <v-item
          v-for="category in categories"
          :key="category"
          v-slot="{ active, toggle }"
        >
          <v-btn
            @click="toggle"
            class="title mr-2 pa-6 mt-2"
            depressed
            rounded
            :color="active ? 'secondary lighten-1' : 'surface'"
            :value="category"
            :ripple="false"
            v-text="category"
          />
        </v-item>
      </v-item-group>
    </v-card-title>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-data-iterator
            class="body-2"
            :items="articles"
            :loading="!isLoaded"
            :page.sync="currentPage"
            :options.sync="syncOptions"
            :server-items-length="totalCount"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
            loading-text="로딩 중입니다."
            hide-default-footer
            disable-sort
          >
            <template v-slot:no-data>
              <v-card class="transparent" flat>
                <v-card-title> No articles found </v-card-title>
              </v-card></template
            >
            <template v-slot:loading>
              <v-skeleton-loader type="article" />
            </template>
            <template v-slot:default="props">
              <v-list
                v-if="isLoaded"
                class="transparent"
                flat
                three-line
                :ripple="false"
              >
                <feed-list-container
                  v-for="article in props.items"
                  :key="article.id"
                  :data="article"
              /></v-list>
              <div v-else>
                <v-skeleton-loader type="article" />
              </div>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
      <v-row>
        <v-pagination
          v-model="currentPage"
          color="surface"
          active-class="onSurface--text"
          :length="pageCount"
        />
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import FeedListContainer from "@/containers/Feeds/FeedListContainer.vue";
import { ArticleBaseInterface } from "@/types/article";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { FeedListContainer },
})
export default class ArchiveRecommendArticleContainer extends Vue {
  isLoaded = false;
  articles: Array<ArticleBaseInterface> = [];

  categories = ["All", "Develop", "Research", "ML", "Mathematics"];
  currentCategoryIndex = 0;
  currentPage = 1;
  pageCount = 0;
  itemsPerPage = 4;
  totalCount = 14;

  syncOptions: {
    order: string;
    sort: "desc" | "asc" | undefined;
  } = {
    order: "createdAt",
    sort: "desc",
  };
  @Watch("syncOptions")
  handler() {
    this.updateArticle();
  }

  @Watch("currentCategoryIndex")
  handleCategory(n, o) {
    if (n !== o) {
      this.updateArticle();
      this.currentPage = 1;
    }
  }
  async updateArticle() {
    this.isLoaded = false;
    try {
      const result = await articleAPI.getArticleCollection({
        offset:
          this.currentPage > 0 ? (this.currentPage - 1) * this.itemsPerPage : 0,
        limit: this.itemsPerPage,
        order: this.syncOptions.order,
        sort: this.syncOptions.sort,
        search:
          this.currentCategoryIndex > 0
            ? ["category", this.categories[this.currentCategoryIndex]]
            : undefined,
      });
      this.articles = result.items;
      this.totalCount = result.totalCount;
    } catch (e) {
      console.log(e);
    }
    this.isLoaded = true;
  }
}
</script>

<style></style>

<template>
  <v-container class="base-container">
    <v-progress-linear
      :value="readProgress"
      height="2"
      color="secondary"
      top
      style="margin-top: 64px"
      background-color="transparent"
      fixed
    />
    <v-container v-if="isLoaded" class="article-container">
      <v-row>
        <v-card class="transparent" flat>
          <v-card-title class="display-1"> {{ article.title }} </v-card-title>
          <v-card-subtitle class="subtitle-1">
            {{ $dayjs(article.createdAt).format("YY. MM. DD") }}ㆍby
            {{ article.author }}
          </v-card-subtitle>
        </v-card>
      </v-row>
      <v-row>
        <v-col class="pa-0" cols="12">
          <v-card class="transparent" flat>
            <v-card-text>
              <article-content-viewer
                :notionURL="article.articleId"
                ref="viewer"
                @onIntersect="onIntersect"
              />
            </v-card-text> </v-card
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="text-start">
          <v-btn class="rounded-lg" depressed large :ripple="false">
            <span class="mr-2"><vue-feather size="16" type="share" /></span>
            공유
          </v-btn>
        </v-col>
        <v-col cols="6" class="text-end">
          <v-btn class="rounded-lg" depressed large :ripple="false">
            <span class="mr-2"><vue-feather size="16" type="mail" /></span>
            댓글
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12"> <v-divider></v-divider></v-col>
      </v-row>

      <v-row>
        <article-recommend-container />
      </v-row>
    </v-container>

    <v-container v-else class="article-container">
      <v-skeleton-loader class="py-4" type="sentences" />
      <v-skeleton-loader type="image" />
      <v-skeleton-loader class="py-4" type="paragraph" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import RouterPush from "@/mixins/routerPush";
import Article from "@/types/article";
import ArticleContentViewer from "@/containers/Articles/ArticleContentViewer.vue";
import ArticleRecommendContainer from "@/containers/Articles/ArticleRecommendContainer.vue";

import * as articleAPI from "@/api/Contents/Articles";
@Component({
  components: { ArticleContentViewer, ArticleRecommendContainer },
})
export default class ArticleView extends Mixins(RouterPush) {
  @Prop({
    required: true,
  })
  id!: string;

  isLoaded = false;
  article!: Article.ArticleBaseInterface;
  offsetTop = 0;
  postHeight = 0;
  get readProgress(): number {
    return (this.offsetTop / this.postHeight) * 100;
  }

  mounted() {
    this._initialize();
  }

  async _initialize() {
    this.isLoaded = false;
    try {
      this.article = await articleAPI.getArticleById(this.id);

      window.addEventListener(
        "scroll",
        () => {
          this.offsetTop = window.pageYOffset;
        },
        false,
      );
    } catch (e) {
      console.log(e);
    }
    this.isLoaded = true;
  }

  onIntersect(entries: Element) {
    this.postHeight = entries[0].target.clientHeight;
  }

  beforeDestroy() {
    window.removeEventListener("scroll", () => {
      return;
    });
  }
}
</script>

<style scoped></style>

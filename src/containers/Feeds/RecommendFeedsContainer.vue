<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="transparent" flat>
          <v-card-title class="pa-0">Recommended Articles</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="recommendFeeds.length > 0">
      <v-col cols="12" v-for="feed in recommendFeeds" :key="feed">
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
@Component({
  components: { FeedContainer },
})
export default class RecommendFeedsContainer extends Vue {
  recommendFeeds: Array<ArticleBaseInterface> = [];
}
</script>

<style scoped></style>

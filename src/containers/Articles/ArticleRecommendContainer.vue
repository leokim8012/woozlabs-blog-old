<template>
  <v-card class="transparent" flat>
    <v-card-title>Recommended Contents</v-card-title>

    <v-container fluid>
      <v-row>
        <v-col cols="12"> <div class="font-weight-bold">Article</div> </v-col>
        <v-col cols="6" v-for="i in 4" :key="i">
          <feed-container />
        </v-col>
      </v-row>
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
import FeedContainer from "@/containers/Feeds/FeedContainer.vue";

@Component({
  components: { FeedContainer },
})
export default class ArticleRecommendContainer extends Vue {
  blockMap = null;

  isLoaded = false;
  // cc0a09e33dda4d5f929d885dcd178613
  // 33147395b7524137b41a6f3cd60d025a
  // 3f68d732af1d4296bfd1046cc272d343
  notionURL = "33147395b7524137b41a6f3cd60d025a";

  async mounted() {
    this.isLoaded = false;
  }
}
</script>

<style></style>

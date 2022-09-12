<template>
  <v-card
    @click="routerPush('Article', data.id)"
    class="transparent article-card"
    :ripple="false"
    flat
  >
    <image-card-container
      class="article-image"
      :data="{
        src: data.imageUrl,
      }"
    />
    <v-card-subtitle class="pb-0 px-0">{{ data.category }}</v-card-subtitle>
    <v-card-title class="article-title font-weight-bold pt-0 px-0">
      {{ data.title }}
    </v-card-title>
    <v-card-subtitle class="px-0">{{ data.subtitle }}</v-card-subtitle>
    <v-card-text class="px-0">
      {{ $dayjs(data.createdAt).format("MM. DD. YYYY") }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins, Prop } from "vue-property-decorator";

import ImageCardContainer from "@/containers/Common/ImageCardContainer.vue";
import { ArticleBaseInterface } from "@/types/article";
@Component({
  components: { ImageCardContainer },
})
export default class FeedCardContainer extends Mixins(RouterPush) {
  @Prop({ required: true })
  data!: ArticleBaseInterface;
}
</script>

<style scoped></style>

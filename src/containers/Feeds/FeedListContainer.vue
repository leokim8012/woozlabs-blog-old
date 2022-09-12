<template>
  <v-list-item
    @click="routerPush('Article', data.id)"
    class="transparent article-card"
    :ripple="false"
    flat
  >
    <v-list-item-content>
      <v-list-item-subtitle class="pb-0 px-0">Category</v-list-item-subtitle>
      <v-list-item-title
        style="white-space: normal"
        class="article-title font-weight-bold pt-0 px-0"
      >
        {{ data.title }}
      </v-list-item-title>
      <v-list-item-subtitle v-if="$vuetify.breakpoint.smAndUp" class="px-0">{{
        data.subtitle
      }}</v-list-item-subtitle>
      <v-list-item-subtitle class="px-0">
        {{ $dayjs(data.createdAt).format("MM. DD. YYYY") }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action v-if="$vuetify.breakpoint.xs">
      <image-card-container
        class="article-image"
        :data="{
          src: data.imageUrl,
          minWidth: 120,
        }"
      />
    </v-list-item-action>
    <v-list-item-action v-if="$vuetify.breakpoint.smAndUp">
      <image-card-container
        class="article-image"
        :data="{
          src: data.imageUrl,
          minWidth: 240,
        }"
      />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins, Prop } from "vue-property-decorator";

import ImageCardContainer from "@/containers/Common/ImageCardContainer.vue";
import { ArticleBaseInterface } from "@/types/article";
@Component({
  components: { ImageCardContainer },
})
export default class FeedListContainer extends Mixins(RouterPush) {
  @Prop({ required: true })
  data!: ArticleBaseInterface;
}
</script>

<style scoped></style>

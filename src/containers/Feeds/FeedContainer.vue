<template>
  <v-card
    @click="routerPush('Article', 'Test')"
    class="transparent article-card"
    :ripple="false"
    flat
  >
    <image-card-container
      :data="{
        src: 'https://core-cdn-fe.toss.im/image/optimize/?src=https://wp-blog.toss.im/wp-content/uploads/2022/09/img-insurance-interview.jpeg?&w=1920&q=75',
      }"
    />
    <v-card-subtitle class="pb-0 px-0">Category</v-card-subtitle>
    <v-card-title class="article-title font-weight-bold pt-0 px-0">
      This is Title
    </v-card-title>
    <v-card-subtitle class="px-0">This is subtitle</v-card-subtitle>
    <v-card-text class="px-0">09/22/2022</v-card-text>
  </v-card>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins } from "vue-property-decorator";

import ImageCardContainer from "@/containers/Common/ImageCardContainer.vue";
@Component({
  components: { ImageCardContainer },
})
export default class FeedContainer extends Mixins(RouterPush) {}
</script>

<style scoped></style>

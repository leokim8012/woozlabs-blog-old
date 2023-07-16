<template>
  <v-card class="rounded-xl" flat>
    <v-img
      :aspect-ratio="data.aspectRatio ?? 16 / 10"
      :min-height="data.minHeight ?? 120"
      :max-height="data.maxHeight ?? 360"
      :min-width="data.minWidth ?? 0"
      :src="data.src"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ImageCardInterface {
  src?: string;
  aspectRatio?: number;
  minHeight?: number;
  maxHeight?: number;
  minWidth?: number;
}

@Component
export default class ImageCardContainer extends Vue {
  @Prop({ required: true })
  data!: ImageCardInterface;
}
</script>

<style scoped></style>

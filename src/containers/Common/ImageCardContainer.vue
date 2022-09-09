<template>
  <v-card class="rounded-xl" flat :min-height="data.minHeight ?? 320">
    <v-img
      :min-height="data.minHeight ?? 320"
      :max-height="data.maxHeight ?? 400"
      :src="data.src"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ImageCardInterface {
  src?: string;
  minHeight?: number;
  maxHeight?: number;
}

@Component
export default class ImageCardContainer extends Vue {
  @Prop({ required: true })
  data: ImageCardInterface = {};
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-card class="transparent" flat>
      <v-card-title> Say hi anytime :) </v-card-title>
      <v-card-subtitle class="headline">
        <a
          href="mailto:kim.kw8012@gmail.com"
          target="_top"
          class="onBackground--text"
          >kim.kw8012@gmail.com
        </a>
      </v-card-subtitle>
      <v-card-text>2022 © Kwanwoo Kim</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FooterContainer extends Vue {}
</script>

<style scoped></style>

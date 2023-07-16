<template>
  <v-app-bar height="64" flat app>
    <v-app-bar-title>
      <v-img
        style="cursor: pointer"
        :style="
          $vuetify.theme.dark
            ? 'filter :brightness(1);'
            : 'filter: brightness(0);'
        "
        @click="routerPush('Home')"
        contain
        max-width="111"
        :src="require('@/assets/logo.svg')"
      />
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <!-- <v-btn class="rounded-lg" @click="syncData()" icon :ripple="false">
      <vue-feather type="terminal" />
    </v-btn> -->
    <v-btn
      class="rounded-lg"
      @click="routerPush('Archive')"
      icon
      :ripple="false"
    >
      <vue-feather type="archive" />
    </v-btn>
    <!-- <v-btn class="rounded-lg" icon :ripple="false">
      <vue-feather size="20" type="search" />
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins } from "vue-property-decorator";
import { articleData } from "@/api/test/syncData";
import * as articlesAPI from "@/api/Contents/Articles";
@Component
export default class PageAppbar extends Mixins(RouterPush) {
  async syncData() {
    articleData.map(async (data) => {
      try {
        await articlesAPI.updateArticle(data.id, data);
      } catch (e) {
        console.log(e);
      }
    });
  }
}
</script>

<style scoped></style>

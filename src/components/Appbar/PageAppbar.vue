<template>
  <v-app-bar height="64" flat app>
    <v-app-bar-title>
      <v-img
        style="cursor: pointer"
        @click="routerPush('Home')"
        contain
        max-width="111"
        :src="require('@/assets/logo.svg')"
      />
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn class="rounded-lg" text :ripple="false">Archive</v-btn>
    <v-btn icon :ripple="false"><vue-feather size="18" type="search" /></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import RouterPush from "@/mixins/routerPush";
import { Component, Mixins } from "vue-property-decorator";

@Component
export default class PageAppbar extends Mixins(RouterPush) {}
</script>

<style scoped></style>

<template>
  <div>
    <page-appbar />
    <router-view />
    <footer-container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterContainer from "@/containers/Common/FooterContainer.vue";
import PageAppbar from "@/components/Appbar/PageAppbar.vue";

@Component({
  components: {
    FooterContainer,
    PageAppbar,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>

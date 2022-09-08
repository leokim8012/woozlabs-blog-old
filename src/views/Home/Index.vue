<template>
  <div>
    <router-view />
    <footer-container />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterContainer from "@/containers/Common/FooterContainer.vue";

@Component({
  components: {
    FooterContainer,
  },
})
export default class extends Vue {}
</script>

<style scoped></style>

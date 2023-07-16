<template>
  <div>
    <v-skeleton-loader v-if="!isLoaded" type="article" />
    <div v-else v-intersect="onIntersect">
      <NotionRenderer :blockMap="blockMap" prism katex />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-python";
import "katex/dist/katex.min.css";
import "@/styles/notion/notion.css";
import "@/styles/notion/prism.css";
import { NotionRenderer, getPageBlocks } from "vue-notion";
@Component({
  components: {
    NotionRenderer,
    getPageBlocks,
  },
})
export default class ArticleContentViewer extends Vue {
  blockMap = null;

  isLoaded = false;
  // cc0a09e33dda4d5f929d885dcd178613
  // 33147395b7524137b41a6f3cd60d025a
  // 3f68d732af1d4296bfd1046cc272d343

  @Prop({ required: true })
  notionURL!: string;

  async mounted() {
    this._initialize();
  }

  async _initialize() {
    this.isLoaded = false;
    this.blockMap = await getPageBlocks(this.notionURL);
    this.isLoaded = true;
  }

  getNotionURL(url: string) {
    var replaceNotion = url.replace("https://www.notion.so/", "");
    var pushURL = replaceNotion;
    return pushURL;
  }

  onIntersect(entries: Element) {
    this.$emit("onIntersect", entries);
  }
}
</script>

<style>
.mord.accent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>

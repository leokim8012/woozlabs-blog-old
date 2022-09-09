<template>
  <NotionRenderer :blockMap="blockMap" prism katex />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
  // cc0a09e33dda4d5f929d885dcd178613
  // 33147395b7524137b41a6f3cd60d025a
  // 3f68d732af1d4296bfd1046cc272d343
  notionURL = "33147395b7524137b41a6f3cd60d025a";

  async mounted() {
    this.blockMap = await getPageBlocks(this.getNotionURL(this.notionURL));
  }

  getNotionURL(url: string) {
    var replaceNotion = url.replace("https://www.notion.so/", "");
    var pushURL = replaceNotion;
    return pushURL;
  }
}
</script>

<style>
.mord.accent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>

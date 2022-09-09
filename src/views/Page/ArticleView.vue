<template>
  <v-container class="base-container">
    <v-container class="article-container">
      <v-row>
        <v-col cols="12">
          <v-card class="transparent" flat>
            <v-card-title class="display-1"> {{ article.title }} </v-card-title>
            <v-card-subtitle class="subtitle-1">
              {{ $dayjs(article.createdAt).format("YY. MM. DD") }}ㆍby
              {{ article.author }}
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="transparent" flat>
            <v-card-text> 여기서부턴 컨텐츠 </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="6" class="text-start">
          <v-btn class="rounded-lg" large :ripple="false">
            <span class="mr-2"><vue-feather size="16" type="share" /></span>
            공유
          </v-btn>
        </v-col>
        <v-col cols="6" class="text-end">
          <v-btn class="rounded-lg" large :ripple="false">
            <span class="mr-2"><vue-feather size="16" type="mail" /></span>
            의견
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-divider></v-divider>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import RouterPush from "@/mixins/routerPush";
import Article from "@/types/article";
@Component({
  components: {},
})
export default class ArticleView extends Mixins(RouterPush) {
  @Prop({
    required: true,
  })
  id!: string;

  article: Article.ArticleBaseInterface = {
    id: "",
    createdAt: new Date(),
    imageURL: "",
    title: "빨리 돈을 벌고 싶어 자퇴를 선택했어요",
    author: "My Money Story",
    description:
      "18살, 1인 쇼핑몰 사장입니다 안녕하세요.\n 문구류 쇼핑몰을 운영하고 있는 옷들입니다. 스티커, 마스킹 테이프와 같은 다꾸(다이어리 꾸미기)용품을 포함한 문구류를 판매하고 있어요. 제가 빈티지",
    articleId: "",
  };
}
</script>

<style scoped></style>

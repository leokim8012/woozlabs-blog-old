/* eslint-disable @typescript-eslint/no-unused-vars */
import http from "api/http";
import testData from "@/api/test";
import { ArticleBaseInterface } from "types/article";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getArticleById = async (
  id: string,
): Promise<ArticleBaseInterface> => {
  if (!id) throw new Error("");

  await sleep(1000);

  return testData.exampleArticles.filter((e) => e.id === id)[0];
};

export const getArticles = async (): Promise<Array<ArticleBaseInterface>> => {
  await sleep(1000);
  return testData.exampleArticles;
};

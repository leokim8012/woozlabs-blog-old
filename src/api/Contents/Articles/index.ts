/* eslint-disable @typescript-eslint/no-unused-vars */
import http from "@/api/http";
import testData from "@/api/test";
import { AxiosResponse } from "axios";
import { ArticleBaseInterface } from "types/article";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getArticleById = async (
  id: string,
): Promise<ArticleBaseInterface> => {
  if (!id) throw new Error("No Parameters");
  try {
    const res: AxiosResponse<ArticleBaseInterface, ArticleBaseInterface> =
      await http.get(`contents/articles/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    throw e as Error;
  }
};

interface GetArticlesInterface {
  offset?: number;
  limit: number;
  order?: string;
  sort?: "desc" | "asc";
  search?: [string, string];
}
export const getArticleCollection = async (
  options: GetArticlesInterface,
): Promise<Array<ArticleBaseInterface>> => {
  if (options.limit == null || options.order == null || options.sort == null)
    throw new Error("No Parameters");
  try {
    const res: AxiosResponse<
      Array<ArticleBaseInterface>,
      Array<ArticleBaseInterface>
    > = await http.get(`contents/articles`, { params: options });
    const data = res.data;
    return data;
  } catch (e) {
    throw e as Error;
  }
};
export const getRecommendArticles = async (
  options: GetArticlesInterface,
): Promise<Array<ArticleBaseInterface>> => {
  if (options.limit == null) throw new Error("No Parameters");
  try {
    const res: AxiosResponse<
      Array<ArticleBaseInterface>,
      Array<ArticleBaseInterface>
    > = await http.get(`contents/articles/recommend`, { params: options });
    const data = res.data;
    return data;
  } catch (e) {
    throw e as Error;
  }
};

export const createArticle = async (
  article: ArticleBaseInterface,
): Promise<string> => {
  if (!article) throw new Error("No Parameters");
  try {
    const res: AxiosResponse<string, string> = await http.post(
      `contents/articles`,
      article,
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (e) {
    throw e as Error;
  }
};

export const updateArticle = async (
  id: string,
  article: ArticleBaseInterface,
): Promise<string> => {
  if (!article) throw new Error("No Parameters");
  try {
    const res: AxiosResponse<string, string> = await http.put(
      `contents/articles/${id}`,
      article,
    );
    const data = res.data;
    console.log(data);
    return data;
  } catch (e) {
    throw e as Error;
  }
};

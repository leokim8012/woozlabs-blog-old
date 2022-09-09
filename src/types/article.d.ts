export = Article;
export as namespace Article;

declare namespace Article {
  interface ArticleBaseInterface {
    id: string;
    imageURL: string;
    title: string;
    author: string;
    createdAt?: Date;
    description?: string;
    articleId: string;
  }
}

export default Article;

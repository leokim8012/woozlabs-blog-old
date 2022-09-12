import Article from "@/types/article";

export const articleData: Array<Article.ArticleBaseInterface> = [
  {
    id: "physics-based-human-motion-estimation",
    author: "Kwanwoo",
    category: "Research",
    filePath: "",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FW2kr3EPzHoesrZdC7EaD%2Fthumbnail%2Fphysics-based-human-motion-estimation-and-synthesis-from-videos-page-1-medium.jpg?alt=media&token=55f5ed10-29fb-4b2a-a709-fdb82f5aa7d8",
    articleId: "3f68d732af1d4296bfd1046cc272d343",
    title: "Physics-based Human Motion Estimation and Synthesis from Videos",
    subtitle:
      "Paper Review of Physics-based Human Motion Estimation and Synthesis from Videos.",
    createdAt: new Date(2021, 12, 19),
    updatedAt: new Date(2021, 12, 19),
    views: 0,
  },
  {
    id: "image-style-transfer",
    author: "Kwanwoo",
    category: "Develop",
    filePath: "Articles/ml-adam/thumnail/optimizers7.gif",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FseNG50DNdOqoURLlxEd6%2Fthumbnail%2Fthe_scream.jpg?alt=media&token=5999f697-b8d5-4292-814d-6d0ba738fde0",
    articleId: "6653a3dcedac4b448ea64e3eae3d28d1",
    title: "Image Style Transfer (CNN)",
    subtitle:
      "Paper Review of Image Style Transfer Using Convolutional Neural Networks.",
    createdAt: new Date(2021, 12, 29),
    updatedAt: new Date(2021, 12, 29),
    views: 0,
    recommend: true,
  },
];

export default { articleData };

// Комментарий к публикации
export type Comment = {
  id: number;
  body: string;

  likes: number;
  postId: number;

  user: {
    id: number;
    fullName: string;
    username: string;
  };
};

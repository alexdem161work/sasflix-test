import type { Comment } from '@/types/Comment';

// Публикация
export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];

  reactions: {
    likes: number,
    liked?: boolean,

    dislikes: number,
    disliked?: boolean,
  },

  views: number,
  userId: number,

  comments?: {
    comments: Comment[];
    total: number;
  },
};

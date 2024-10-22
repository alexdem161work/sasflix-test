import { get } from '@/services/api';

import type { ResponseList } from '@/types/ResponseList';
import type { Post } from '@/types/Post';
import type { Comment } from '@/types/Comment';

// Получение списка постов
export const getPublications = () => get<ResponseList<Post, 'posts'>>('posts?limit=5');

// Получение списка комментариев по id поста
export const getComments = (postId: number) => get<ResponseList<Comment, 'comments'>>(`posts/${postId}/comments`);

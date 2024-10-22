import { get } from '@/services/api';

export const getPublications = () => get('posts?limit=5');
export const getComments = (postId: number) => get(`posts/${postId}/comments`);

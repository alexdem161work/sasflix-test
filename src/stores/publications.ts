import { defineStore } from 'pinia';
import { getComments, getPublications } from '@/api/publications';

export const usePublicationsStore = defineStore('publications', {
  state: () => ({
    publications: [],
  }),

  actions: {
    // Загружает посты с API
    async loadPublications() {
      const response = await getPublications();
      this.publications = response.posts;
    },

    // Обрабатывает лайк/дизлайк
    toggleReaction(postId: number, reactionType: 'like' | 'dislike') {
      const publication = this.publications.find((p) => p.id === postId);
      if (!publication) return;

      const isLiked = publication.reactions.liked;
      const isDisliked = publication.reactions.disliked;

      if (reactionType === 'like') {
        if (isDisliked) {
          publication.reactions.dislikes -= 1;
          publication.reactions.disliked = false;
        }

        publication.reactions.likes += isLiked ? -1 : 1;
        publication.reactions.liked = !isLiked;
      } else if (reactionType === 'dislike') {
        if (isLiked) {
          publication.reactions.likes -= 1;
          publication.reactions.liked = false;
        }

        publication.reactions.dislikes += isDisliked ? -1 : 1;
        publication.reactions.disliked = !isDisliked;
      }
    },

    // Ставит лайк посту
    like(postId: number) {
      this.toggleReaction(postId, 'like');
    },

    // Ставит дизлайк посту
    dislike(postId: number) {
      this.toggleReaction(postId, 'dislike');
    },

    // Загрузка комментариев
    async loadComments(postId: number) {
      const publication = this.publications.find((p) => p.id === postId);
      if (!publication) return;

      publication.comments = await getComments(postId);
    },

    // Удаляет комментарий
    deleteComment(postId: number, commentId: number) {
      const publication = this.publications.find((p) => p.id === postId);
      if (!publication || !publication.comments) return;

      const commentIndex = publication.comments.comments.findIndex((comment) => comment.id === commentId);
      if (commentIndex !== -1) {
        publication.comments.comments.splice(commentIndex, 1);
        publication.comments.total -= 1;
      }
    },
  }
});

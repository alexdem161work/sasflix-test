<script setup lang="ts">
import { usePublicationsStore } from '@/stores/publications';

import PublicationFooter from '@/components/publication/PublicationFooter.vue'
import PublicationComments from '@/components/comments/CommentList.vue'

type Props = {
  post: {}
}

const store = usePublicationsStore();
const props = defineProps<Props>();

const onDeleteComment = (id: number): void => store.deleteComment(props.post.id, id);
</script>

<template>
  <section class="publication-item">
    <article class="publication-item__content">
      <h2 class="publication-item__title">{{ post.title }}</h2>

      <p class="publication-item__body">{{ post.body }}</p>
    </article>

    <PublicationFooter
      :post="post"
      @loadComments="store.loadComments(post.id)"
    />

    <PublicationComments
      v-if="post.comments"
      :comments="post.comments.comments"
      :total="post.comments.total"
      @delete="onDeleteComment"
    />
  </section>
</template>

<style lang="scss">
.publication-item {
  &__title {
    margin-bottom: 16px;
  }

  &__body {
    margin-bottom: 24px;
  }
}
</style>

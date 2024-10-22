<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Comment } from '@/types/Comment';

import CommentItem from '@/components/comments/CommentItem.vue';

type Props = {
  comments: Comment[],
  total: number,
};

const { t } = useI18n();

const emit = defineEmits(['delete']);
defineProps<Props>()

const onDelete = (id: number): void => emit('delete', id);
</script>

<template>
  <div class="comment-list">
    <div class="comment-list__counter">{{ t('commentsCount', { n: total }) }}</div>

    <div class="comment-list__items">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @delete="onDelete(comment.id)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.comment-list {
  padding-top: 40px;

  &__items {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }

  &__counter {
    font: var(--sas-typography__h1);
    padding-bottom: 24px;
  }
}
</style>

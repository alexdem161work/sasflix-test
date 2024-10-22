<script setup lang="ts">
import CommentItem from "@/components/comments/CommentItem.vue";

type Props = {
  comments: [],
  total: number,
};

const emit = defineEmits(['delete']);
defineProps<Props>()

const onDelete = (id: number): void => emit('delete', id);
</script>

<template>
  <div class="comment-list">
    <div class="comment-list__counter">{{ total }} комментариев</div>

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
    padding-bottom: 24px;
  }
}
</style>

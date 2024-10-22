<script setup lang="ts">
import ReactionButton from '@/components/ui/reactions/ReactionButton.vue';

import LikeIcon from '@/components/icons/LikeIcon.vue';
import DislikeIcon from '@/components/icons/DislikeIcon.vue';

type Props = {
  likeCount: number;
  dislikeCount: number;

  liked: boolean,
  disliked: boolean,
}

const emit = defineEmits(['like', 'dislike']);
defineProps<Props>();

const onLike = () => emit('like');
const onDislike = () => emit('dislike');
</script>

<template>
  <div class="reaction-base">
    <ReactionButton
      class="reaction-button--like"
      :count="likeCount"
      :active="liked"

      @click="onLike"
    >
      <template #icon>
        <LikeIcon/>
      </template>

      Like
    </ReactionButton>

    <ReactionButton
      class="reaction-button--dislike"
      :count="dislikeCount"
      :active="disliked"

      @click="onDislike"
    >
      <template #icon>
        <DislikeIcon/>
      </template>

      Dislike
    </ReactionButton>
  </div>
</template>

<style lang="scss">
.reaction-base {
  display: flex;
  gap: 1px;

  .reaction-button {
    &--like {
      border-radius: 16px 0 0 16px;

      &.reaction-button--active {
        color: white;
        background: red;
      }
    }

    &--dislike {
      border-radius: 0 16px 16px 0;

      &.reaction-button--active {
        color: white;
        background: #0c0c0e;
      }
    }
  }
}
</style>
